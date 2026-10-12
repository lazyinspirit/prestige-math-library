from pathlib import Path
import json,re,hashlib,subprocess,datetime
b=Path('research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/geometric-basis-construction'); p=next(b.glob('*.proposed.md')); s=p.read_text()
extra='lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom'
s=s.replace('lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]\njustified_by','lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, '+extra+']\njustified_by')
s=s.replace('\n\n## Proof', '\n\n[F6] Actual splitting ([[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]): the bounded equivariant constructible category is triangulated and idempotent complete.\n\n## Proof')
s=s.replace('[F3, step 1.1, algebra]','[F3, F6, step 1.1, algebra]')
m={'1.1':'1.1','1.2':'2.1','2.1':'2.2','2.2':'3.1','3.1':'4.1','4.1':'5.1'}
s=re.sub(r'(?m)(?<=step )\d+\.\d+|^\d+\.\d+',lambda z:m.get(z[0],z[0]),s)
p.write_text(s)
h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
meta=json.loads((b/'guarded-construction.json').read_text());meta['deps_after'].append(extra);meta['additional_explicit_deps'].append(extra);meta['guards'].append({'path':'items/'+extra+'.md','raw_sha256':h('items/'+extra+'.md')});meta['proposal_raw_sha256']=h(p)
meta['held_prerequisite']='Semisimplicity current native Step-3 escalate explicitly requires actual in-run direct supplier uses at steps1.1–5.1 (batches37,40,41,42,48), particularly compact smooth-source pushforward theorem at step3.1; owner acceptance remains necessary before target acceptance. Signed Ext current receipt repaired is not adopted as an independent audit.'
for sid in ['thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes','cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero']:
 q=Path('research/frontier-44-special-representation-examples-28-step3b-review-'+sid+'.json');meta['guards'].append({'path':str(q),'raw_sha256':h(q)})
receipt=Path('research/frontier-44-special-representation-examples-28-owner-klr-evidence/source-readings.json');obj=json.loads(receipt.read_text());meta['source_receipt_structure']=list(obj.keys())
checks=[]
for c in [['node','tools/proof-layout.mjs',str(p)],['node','tools/tsx-run.mjs','tools/precheck.mts',str(p),'--json'],['node','tools/rendercheck.mjs',str(p)]]:
 r=subprocess.run(c,capture_output=True,text=True);checks.append({'command':c,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr,'proposal_raw_sha256':h(p),'at':datetime.datetime.now(datetime.timezone.utc).isoformat()})
(b/'format-checks.json').write_text(json.dumps(checks,indent=2)+'\n');(b/'guarded-construction.json').write_text(json.dumps(meta,indent=2)+'\n')
print(json.dumps({'checks':[{'command':x['command'][1],'exit_code':x['exit_code']} for x in checks],'proposal_raw_sha256':h(p)},indent=2))
