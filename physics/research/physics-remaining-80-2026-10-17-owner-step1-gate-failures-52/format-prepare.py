import json,re,pathlib,difflib,hashlib
base=pathlib.Path(__file__).parent
x=json.loads((base/'format-precheck-before.json').read_text())
steps=lambda s: list(re.finditer(r'^\d+\.\d+ .*?(?=\n\n|\Z)',s,re.M|re.S))
norm=lambda s: re.sub(r'(?i)steps? \d+\.\d+', 'step REF',re.sub(r'^\d+\.\d+ ', '', ' '.join(s.splitlines())))
report=[]
for r in x['results']:
 if r['status']!='repair':continue
 p=pathlib.Path(r['file']);s=p.read_text();old=steps(s);new=steps(r['proposed_proof']);assert len(old)==len(new)
 # Match claims while disregarding only ordinal references and leading labels.
 def key(v): return re.sub(r'\d+\.\d+', 'REF', norm(v))
 assert sorted(key(m.group()) for m in old)==sorted(key(m.group()) for m in new),p
 mapping={}
 for a in old:
  matches=[b for b in new if key(a.group())==key(b.group())];assert len(matches)==1,p
  mapping[a.group().split(' ')[0]]=matches[0].group().split(' ')[0]
 # Replace the complete contiguous numbered proof region, retaining every other byte.
 assert all(not s[a.end():b.start()].strip() for a,b in zip(old,old[1:])),p
 ns=s[:old[0].start()]+'\n\n'.join(b.group() for b in new)+s[old[-1].end():]
 before=base/'format-before'/p;prepared=base/'format-prepared'/p
 before.parent.mkdir(parents=True,exist_ok=True);prepared.parent.mkdir(parents=True,exist_ok=True)
 before.write_text(s);prepared.write_text(ns)
 report.append({'file':str(p),'step_map':mapping,'all_tokens_preserved_except_step_references':True,'before_sha256':hashlib.sha256(s.encode()).hexdigest()})
p=pathlib.Path('items/thm-qsm-dt-monitored-transport.md');s=p.read_text()
ns=re.sub(r'(\\operatorname\{Var\}_\\pi\(Y_T\)=.*?)(\n)(=2\\int)',r'\1 \3',s,flags=re.S)
assert ns!=s and re.sub(r'\s','',s)==re.sub(r'\s','',ns)
for folder,v in [('format-before',s),('format-prepared',ns)]:
 q=base/folder/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(v)
report.append({'file':str(p),'whitespace_only':True,'before_sha256':hashlib.sha256(s.encode()).hexdigest()})
(base/'format-prepared-report.json').write_text(json.dumps(report,indent=2)+'\n')
(base/'format-prepared.patch').write_text(''.join(''.join(difflib.unified_diff((base/'format-before'/r['file']).read_text().splitlines(True),(base/'format-prepared'/r['file']).read_text().splitlines(True),fromfile=r['file'],tofile=r['file'])) for r in report))
print('Prepared',len(report),'item changes; carriers untouched.')
