from pathlib import Path
import json,shutil,difflib
P=Path(__file__).resolve().parent;old=P/'final-current';new=P/'final-r2-negated-anchor-correction';assert not new.exists();shutil.copytree(old,new)
d=json.loads((new/'proposal.json').read_text());corrections=[]
replacements={'alg-adams-pece-one-correction':('; it contains no numbered proof step 1.2',''), 'prop-sparse-unrestarted-gmres-work-and-storage':(', without the nonexistent step 2.2','')}
for o in d['field_operations']:
 id=o['pointer'][1]
 if id not in replacements:continue
 a,b=replacements[id]
 for k in ['evidence','reason']:
  t=o['after'].get(k)
  if t and a in t:
   before=t;o['after'][k]=t.replace(a,b);corrections.append({'file':o['file'],'pointer':o['pointer']+[k],'before':before,'after':o['after'][k]})
assert len(corrections)==10,len(corrections)
for f in d['carriers']:
 doc=json.loads((new/'before'/f).read_text())
 for o in d['field_operations']:
  if o['file']==f:
   p=o['pointer'];doc[p[0]][p[1]][p[2]][p[3]]=o['after']
 target=new/'proposed'/f;after=json.dumps(doc,indent=2,ensure_ascii=False)+'\n';target.write_text(after)
 before=(new/'before'/f).read_text();(new/'diffs'/(Path(f).name+'.diff')).write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile=f,tofile=f+' proposed')))
notes=json.loads((new/'item-case-review-map.json').read_text())
for id,(a,b) in replacements.items():notes[id]=notes[id].replace(a,b)
(new/'item-case-review-map.json').write_text(json.dumps(notes,indent=2,ensure_ascii=False)+'\n')
d['supersedes'].append('final-current/proposal.json');d['revision']='r2 removes obsolete negated numeric proof references only; before guards, statuses, scope and all other row fields unchanged'
(new/'proposal.json').write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
(new/'revision-receipt.json').write_text(json.dumps({'status':'research-only','superseded_packet':str(old/'proposal.json'),'authoritative_packet':str(new/'proposal.json'),'changes':corrections,'operations_unchanged':1022,'statuses_unchanged':True,'canonical_writes':False,'hashes':False,'native_checks':False,'notes':'Ten occurrences in ten after rows: PECE five and GMRES five, including NA repeated case groups. Original final-current preserved in full.'},indent=2)+'\n')
print(str(new/'proposal.json'));print('10 exact prose-only row corrections; original packet preserved')
