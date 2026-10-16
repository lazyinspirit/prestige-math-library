from pathlib import Path
import yaml,json,re,hashlib
R=Path('research/quantum-build-60-2026-10-15-owner/complex'); loader=getattr(yaml,'CSafeLoader',yaml.SafeLoader)
def raw(p):return hashlib.sha256(p.read_bytes()).hexdigest()
plan=json.load(open('research/plan-spec.json'))['pages'];pages={p['id']:p for p in plan};homes={}
for p in Path('library').glob('*/*.md'):
 try:
  s=p.read_text();m=yaml.load(s.split('---',2)[1],Loader=loader)
  for i in m.get('items',[])+m.get('examples',[]):homes.setdefault(i,[]).append(m['page'])
 except: pass
new=[yaml.load(p.read_text().split('---',2)[1],Loader=loader) for p in (R/'items').glob('*.md') if not (R/'before'/p.name).exists()]
newids={s['id'] for s in new};depends={d for s in new for d in s['deps'] if d not in newids};supplier_homes=sorted({h for d in depends for h in homes.get(d,[]) if not h.endswith('-examples')})
def closure(p):
 seen=set();front={p}
 while front:
  nxt={q for v in front for q in pages.get(v,{}).get('requires',[]) if q not in seen};seen|=nxt;front=nxt
 return seen
reduced=[h for h in supplier_homes if not any(h in closure(k) for k in supplier_homes if k!=h)]
page='complex-coordinate-and-path-transport';proposed={'id':page,'kind':'A','category':'complex-analysis','order':358.1,'companion':page+'-examples','requires':reduced,'items':sorted(newids)}
consumer_edges=[]
for p in plan:
 if any(i.get('id') in {q.stem for q in (R/'before').glob('*.md')} for i in p.get('items',[])):
  consumer_edges.append({'page':p['id'],'order':p['order'],'existing_requires':p.get('requires',[]),'add_requires':[page] if p['id']=='complex-differentiability-and-cauchy-riemann' else [],'reason':'Earliest affected root page explicitly requires supplement; later affected pages reach it through their existing complex-differentiability prerequisite closure.'})
(R/'page-placement.json').write_text(json.dumps({'status':'proposal-only','A':proposed,'B':{'id':page+'-examples','kind':'B','category':'complex-analysis','order':358.11,'companion':page,'requires':[page],'items':[],'authoring_obligation':'Native author must provide nonempty original example inventory; no examples authored in this repair scope.'},'exact_external_supplier_homes':{d:homes.get(d,[]) for d in sorted(depends)},'unreduced_requires':supplier_homes,'consumer_page_edges':consumer_edges},indent=2)+'\n')
print('REDUCED',reduced);print('CONSUMERS',[(p['page'],p['order'],p['add_requires']) for p in consumer_edges])
# Hash-bound complete graph inventories. Merely scanning a file is not mathematical review.
items={};alias={}
for p in Path('items').glob('*.md'):
 try:
  t=p.read_text();d=yaml.load(t.split('---',2)[1],Loader=loader);items[d['id']]={'path':p,'data':d,'text':t}
  for a in d.get('aliases',[]):alias[a]=d['id']
 except:pass
seeds={r['id'] for r in json.load(open('research/quantum-planning-review/prerequisite-repairs.json'))['repairs'][:8]}
seen=set(seeds);front=set(seeds)
while front:
 nxt={i for i,d in items.items() if i not in seen and any(alias.get(e,e) in front for e in d['data'].get('deps',[]))};seen|=nxt;front=nxt
read=set(seeds)|{p.stem for p in (R/'before').glob('*.md')}|set('cor-local-holomorphic-roots-nonvanishing-function prop-reversal-and-concatenation-of-complex-line-integrals def-complex-line-integral-over-a-rectifiable-path thm-goursat-triangle-theorem'.split())
rows=[]
for i in sorted(seen):
 d=items[i];rows.append({'id':i,'path':str(d['path']),'raw_sha256':raw(d['path']),'proposed_file':str(R/'items'/d['path'].name) if (R/'items'/d['path'].name).exists() else None,'actual_full_source_read':i in read,'review_disposition':('focused proposal prepared; native review required' if (R/'items'/d['path'].name).exists() else 'full source read; contract-compatible; no edit proposed' if i in read else 'not mathematically reviewed; remains explicit consumer-duty obligation'),'affected_deps':[alias.get(e,e) for e in d['data'].get('deps',[]) if alias.get(e,e) in seen]})
(R/'consumer-inventory.json').write_text(json.dumps({'all_seed_alias_resolved_logical_descendants':len(rows),'actual_full_source_read':sum(r['actual_full_source_read'] for r in rows),'rows':rows},indent=2)+'\n')
nonlogical=[]
for i,d in items.items():
 links={alias.get(e,e) for e in re.findall(r'\[\[([^]|]+)',d['text'])}&seeds
 if links and not(set(d['data'].get('deps',[]))&links):nonlogical.append({'id':i,'path':str(d['path']),'links':sorted(links),'raw_sha256':raw(d['path']),'review':'inventory scan only; not full source review unless separately marked'})
(R/'nonlogical-uses.json').write_text(json.dumps(nonlogical,indent=2)+'\n')
print('INVENTORY',len(rows),'READ',sum(r['actual_full_source_read'] for r in rows),'NONLOGICAL',len(nonlogical))
