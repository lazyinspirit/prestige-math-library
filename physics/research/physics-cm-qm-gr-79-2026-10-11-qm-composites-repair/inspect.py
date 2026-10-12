from pathlib import Path
import yaml,json,hashlib,re
r=Path('physics'); out=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair'
def front(s): return yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1]) or {}
items={}
for p in (r/'items').glob('*.md'):
 s=p.read_text()
 try: fm=front(s)
 except Exception: continue
 items[fm['id']]=(p,fm,s)
homes={}
for p in (r/'library').rglob('*.md'):
 s=p.read_text()
 if not s.startswith('---'): continue
 try: fm=front(s)
 except Exception: continue
 for i in (fm.get('items') or [])+(fm.get('examples') or []): homes.setdefault(i,[]).append(fm.get('page',p.stem))
mp={}; pref={'lemma':'lem','theorem':'thm','example':'ex','counterexample':'cex'}
owned=[i for i in items if '-nrqm-composites-' in i]
for i in sorted(owned):
 stem=i.split('-nrqm-composites-',1)[1]
 if stem=='rank-one-operator-calculus': continue
 oldid='nrqm-composites-'+('example-' if items[i][1]['kind'] in ('example','counterexample') else '')+stem
 mp[oldid]=i
(out/'id-map.json').write_text(json.dumps(mp,indent=2)+'\n')
old='ex-rank-one-operator-adjoint-norm-and-trace'
direct=[i for i,(_,f,_) in items.items() if (old in (f.get('deps') or []) or 'lem-nrqm-composites-rank-one-operator-calculus' in (f.get('deps') or [])) and i in owned]
cone=set(direct)
while True:
 new=cone|{i for i,(_,f,_) in items.items() if set(f.get('deps') or [])&cone}
 if new==cone: break
 cone=new
cand=front((out/'lem-nrqm-composites-rank-one-operator-calculus.md').read_text())
evidence={'defect':'B-only rank-one supplier illegal across page; no original supplier edits','direct_consumers':direct,'current_dependency_cone':sorted(cone),'outside_current_cone':sorted(cone-set(owned)),'candidate_suppliers':{i:{'status':items[i][1].get('status'),'homes':homes.get(i,[])} for i in cand['deps']},'original_supplier_home':homes.get(old,[]),'inventory':len(owned),'carrier_hashes':{i:hashlib.sha256(items[i][2].encode()).hexdigest() for i in owned},'canonical_kind_mapping':mp,'production_edits':False,'source_reading':{'knapp':'Downloaded complete PDF, extracted text; read Chapter II §5 printed pp. 48–52 in full. Supports trace properties but does not itself state full rank-one norm formula.','teschl':'Downloaded complete PDF, extracted text; read §3.6 Lemmas 3.26–3.29 proofs and Corollary 3.30 (PDF pp.109–112, printed pp.96–99). One-term specialization gives nuclear norm/trace; pairing translated from linear second to library linear first. No claim of reading whole book.'}}
(out/'review.json').write_text(json.dumps(evidence,indent=2)+'\n')
print(json.dumps({'direct':direct,'cone':len(cone),'outside':evidence['outside_current_cone'],'suppliers':evidence['candidate_suppliers'],'map':mp},indent=2))
