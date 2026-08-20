(()=>{
  const B=window.FONT_BATCH;
  if(!B) throw new Error('FONT_BATCH missing');

  const S=B.samples||[
    ['NAME','RUTHFUL JOSEF ROTSCHOPF'],
    ['SPATIAL','Spatial Press — The sky. The vantage. The view.'],
    ['DATA','N  E  S  W · 34.1722° N · 103.3470° W · 05:57 PM'],
    ['HOSTILE NAME','Alexandria-Marguerite O’Shaughnessy'],
    ['PLACE','St. John’s, Newfoundland & Labrador'],
    ['HISTORY','1459 · 1496 · 1815 · 1913 · 1994 · 2026'],
    ['GLYPHS','ABCDEFGHIJKLM NOPQRSTUVWXYZ · abcdefghijklm nopqrstuvwxyz · 0123456789'],
    ['PUNCTUATION','() [] {} ‹› «» / \\ — – · • : ; , . ! ? @ # $ % & * + ='],
    ['BODY','A useful type library should hold both infrastructure and trouble. Some faces need to disappear into the work; others should make the material itself visible.']
  ];

  const KEY=`ruthie-open-font-library-b${String(B.batch).padStart(2,'0')}`;
  let state={};
  try{state=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){state={}}

  const $=q=>document.querySelector(q);
  const app=$('#app'),nav=$('#nav'),status=$('#status'),exportBox=$('#exportBox');
  const save=()=>{localStorage.setItem(KEY,JSON.stringify(state));updateStatus()};
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  let fontObserver=null;

  function ensure(o){
    return state[o.id]||(state[o.id]={vote:'',face:o.faces[0].label,features:[],notes:''});
  }

  function inferFormat(f){
    if(f.format) return f.format;
    const u=(f.url||'').toLowerCase().split(/[?#]/)[0];
    if(u.endsWith('.ttf')) return 'truetype';
    if(u.endsWith('.otf')) return 'opentype';
    if(u.endsWith('.woff')) return 'woff';
    return 'woff2';
  }

  function fontCSS(){
    const style=document.createElement('style');
    style.textContent=B.candidates.flatMap(o=>o.faces.map(f=>`@font-face{font-family:'${f.family}';src:url('${f.url}') format('${inferFormat(f)}');font-display:swap;}`)).join('\n')+`\n.group-head{margin:28px 0 13px;padding:14px 4px 9px;border-bottom:1px solid var(--line)}.group-head:first-child{margin-top:0}.group-kicker{font:800 10px system-ui,-apple-system,sans-serif;letter-spacing:.16em;color:var(--blue)}.group-title{font:800 clamp(20px,5vw,32px) system-ui,-apple-system,sans-serif;margin-top:4px}.group-note{font:12px/1.45 system-ui,-apple-system,sans-serif;color:var(--muted);margin-top:5px;max-width:760px}.card{content-visibility:auto;contain-intrinsic-size:900px}`;
    document.head.append(style);
  }

  function samplesFor(o){ return (o.samples&&o.samples.length)?o.samples:S; }

  function fontProbeText(o){
    const first=samplesFor(o).find(x=>x&&x[1]);
    return first?String(first[1]).slice(0,64):'A';
  }

  function checkFont(o,c,face){
    const badge=c.querySelector('.font-load');
    if(!badge || !document.fonts) return;
    badge.textContent='loading type…';
    badge.className='font-load';
    document.fonts.load(`32px "${face.family}"`,fontProbeText(o)).then(found=>{
      const ok=!!(found&&found.length);
      badge.textContent=ok?'font loaded ✓':'font failed to load';
      badge.className='font-load '+(ok?'ok':'bad');
    }).catch(()=>{
      badge.textContent='font failed to load';
      badge.className='font-load bad';
    });
  }

  function apply(o,c){
    const s=ensure(o);
    const face=o.faces.find(f=>f.label===s.face)||o.faces[0];
    const samples=c.querySelector('.samples');
    samples.style.fontFamily=`'${face.family}'`;
    samples.style.fontFeatureSettings=(s.features||[]).map(x=>`"${x}" 1`).join(',')||'normal';
    samples.style.fontVariationSettings=face.variation||'normal';
    samples.style.fontPalette=face.palette||'normal';
    samples.style.fontSynthesis='none';
    c.dataset.fontActive='1';
    checkFont(o,c,face);
  }

  function updateStatus(message){
    if(message){status.textContent=message;return}
    const decided=B.candidates.filter(o=>ensure(o).vote).length;
    const target=B.targetApproved||250;
    status.textContent=`${decided}/${B.candidates.length} decided · ${B.approvedBefore||0}/${target} already approved`;
  }

  function render(){
    fontCSS();
    $('#title').textContent=`Ruthie Open Font Library — Batch ${String(B.batch).padStart(2,'0')}`;
    $('#kicker').textContent=`RUTHIE OPEN FONT LIBRARY · BATCH ${String(B.batch).padStart(2,'0')}`;
    $('#sub').textContent=B.subtitle||'Live type · editable specimens · autosaved YES / NO decisions';
    app.innerHTML='';
    nav.innerHTML='';
    let lastGroup=null;

    if('IntersectionObserver' in window){
      fontObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting)return;
          const c=entry.target;
          const o=B.candidates.find(x=>x.id===c.id);
          if(o&&!c.dataset.fontActive)apply(o,c);
          fontObserver.unobserve(c);
        });
      },{rootMargin:'1000px 0px'});
    }

    B.candidates.forEach((o,i)=>{
      if(o.group&&o.group!==lastGroup){
        const meta=(B.groups&&B.groups[o.group])||{};
        const g=document.createElement('div');
        g.className='group-head';
        g.innerHTML=`<div class="group-kicker">${esc(meta.kicker||'REVIEW GROUP')}</div><div class="group-title">${esc(o.group)}</div>${meta.note?`<div class="group-note">${esc(meta.note)}</div>`:''}`;
        app.append(g);
        lastGroup=o.group;
      }

      const s=ensure(o);
      const a=document.createElement('a');
      a.href=`#${o.id}`;
      a.textContent=`${String(i+1).padStart(2,'0')} ${o.name}`;
      nav.append(a);

      const c=document.createElement('section');
      c.className='card';
      c.id=o.id;
      c.innerHTML=`<div class="head"><div class="num">${String(i+1).padStart(2,'0')}</div><div><h2>${esc(o.name)}</h2><div class="artist">${esc(o.artist)}</div></div></div><p class="story">${esc(o.story)}</p><div class="license">${esc(o.license)}</div><div class="controls"><div class="control-label">SUPPLIED CUTS / STATES</div><div class="row faces"></div>${o.features?.length?'<div class="control-label" style="margin-top:12px">OPENTYPE</div><div class="row features"></div>':''}<div class="font-load" aria-live="polite">type loads as you approach…</div></div><div class="samples"></div><textarea class="notes" placeholder="Optional note — where could this live, what is delicious, what bothers you…">${esc(s.notes||'')}</textarea><div class="decision-wrap"><div class="decision-label">KEEP THIS IN THE LIBRARY?</div><div class="votes"></div></div>`;

      const faces=c.querySelector('.faces');
      o.faces.forEach(f=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='pill'+(s.face===f.label?' active':'');
        b.textContent=f.label;
        b.onclick=()=>{
          s.face=f.label;
          faces.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          if(fontObserver)fontObserver.unobserve(c);
          apply(o,c);
          save();
        };
        faces.append(b);
      });

      if(o.features?.length){
        const fr=c.querySelector('.features');
        o.features.forEach(tag=>{
          const b=document.createElement('button');
          b.type='button';
          b.className='pill'+((s.features||[]).includes(tag)?' active':'');
          b.textContent=tag;
          b.onclick=()=>{
            s.features=s.features||[];
            if(s.features.includes(tag)) s.features=s.features.filter(x=>x!==tag);
            else s.features.push(tag);
            b.classList.toggle('active');
            if(fontObserver)fontObserver.unobserve(c);
            apply(o,c);
            save();
          };
          fr.append(b);
        });
      }

      const samples=c.querySelector('.samples');
      samplesFor(o).forEach(([lab,text])=>{
        const d=document.createElement('div');
        d.className='sample'+(lab==='BODY'?' body':'');
        d.innerHTML=`<div class="sample-label">${esc(lab)}</div><div class="sample-text" contenteditable="true" spellcheck="false">${esc(text)}</div>`;
        if(o.direction) d.querySelector('.sample-text').dir=o.direction;
        samples.append(d);
      });

      c.querySelector('.notes').addEventListener('input',e=>{s.notes=e.target.value;save()});

      const votes=c.querySelector('.votes');
      ['YES','NO'].forEach(v=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='pill'+(s.vote===v?' active':'');
        b.textContent=v;
        b.onclick=()=>{
          s.vote=v;
          votes.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          save();
        };
        votes.append(b);
      });

      app.append(c);
      if(fontObserver)fontObserver.observe(c); else apply(o,c);
    });

    updateStatus();
  }

  $('#global').addEventListener('input',e=>{
    const v=e.target.value;
    if(!v)return;
    document.querySelectorAll('.sample:not(.body) .sample-text').forEach(x=>x.textContent=v);
  });

  $('#size').addEventListener('input',e=>{
    document.documentElement.style.setProperty('--size',e.target.value+'px');
    $('#sizeVal').textContent=e.target.value;
  });

  $('#copy').addEventListener('click',async()=>{
    document.querySelectorAll('.card').forEach(c=>{
      const o=B.candidates.find(x=>x.id===c.id);
      if(o)ensure(o).notes=c.querySelector('.notes').value;
    });
    save();
    const payload={batch:B.batch,picks:B.candidates.map((o,i)=>{
      const s=ensure(o);
      return{number:i+1,name:o.name,vote:s.vote,face:s.face,features:s.features||[],notes:s.notes||''};
    })};
    const text=JSON.stringify(payload,null,2);
    exportBox.textContent=text;
    try{
      await navigator.clipboard.writeText(text);
      exportBox.hidden=true;
      updateStatus('Copied ✓');
      setTimeout(()=>updateStatus(),4500);
    }catch(e){
      exportBox.hidden=false;
      updateStatus('Copy blocked — payload shown below');
      exportBox.scrollIntoView({behavior:'smooth',block:'center'});
    }
  });

  render();
})();