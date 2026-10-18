import json,pathlib,yaml,re,collections,datetime
r='non-ml-math-remaining-81-2026-10-18';b=pathlib.Path(__file__).parent;m=json.load(open('research/'+r+'-batch-19.pages.json'));rows=[x for pg in m for x in pg['items']];ids={x['id'] for x in rows};assert len(rows)==len(ids)==40
for x in rows:
 s=(pathlib.Path('items')/(x['id']+'.md')).read_text();f=yaml.safe_load(s.split('---',2)[1]);assert x['deps']==f.get('deps',[]),(x['id'],'deps mismatch')
for pg in m:
 s=(pathlib.Path('library/information-theory')/(pg['id']+'.md')).read_text();fm=yaml.safe_load(s.split('---',2)[1]);assert set(fm.get('items',[])+fm.get('examples',[]))=={x['id'] for x in pg['items']}
g={x['id']:set(x['deps'])&ids for x in rows};seen=set();active=set();order=[]
def walk(i):
 if i in seen:return
 assert i not in active,'cycle'+i
 active.add(i)
 for v in sorted(g[i]):walk(v)
 active.remove(i);seen.add(i);order.append(i)
for i in sorted(ids):walk(i)
rev=collections.defaultdict(set)
for p in pathlib.Path('items').glob('*.md'):
 s=p.read_text();refs=set(re.findall(r'\[\[([^\]|#]+)',s));fm=s.split('---',2)[1] if s.startswith('---') else '';z=re.search(r'^deps:\s*\[([^\]]*)\]',fm,re.M)
 if z:refs|={x.strip().strip(chr(34)+chr(39)) for x in z.group(1).split(',') if x.strip()}
 else:
  z=re.search(r'^deps:\s*\n((?:\s+-[^\n]*\n)*)',fm,re.M)
  if z:refs|={x.strip().strip(chr(34)+chr(39)) for x in re.findall(r'^\s+-\s*(\S+)',z.group(1),re.M)}
 for v in refs:rev[v].add(p.stem)
for mp in pathlib.Path('research').glob(r+'-batch-*.pages.json'):
 for pg in json.loads(mp.read_text()):
  for x in pg.get('items',[])+pg.get('examples',[]):
   for v in x.get('deps',[]):rev[v].add(x['id'])
seeds=['def-real-gaussian-multicast-relay-network','lem-finite-or-euclidean-likelihood-ratio-network-coding','lem-complex-gaussian-interference-entropy-estimates','lem-gaussian-superposition-nonunique-han-kobayashi-region','lem-real-gaussian-han-kobayashi-inner-region','lem-real-gaussian-multiple-access-random-coding-region','thm-finite-multisource-multicast-noisy-network-coding-inner-bound','thm-real-gaussian-multicast-noisy-network-coding-inner-bound','lem-real-gaussian-interference-genie-outer-region','thm-real-gaussian-interference-channel-within-one-bit'];closure={}
for seed in seeds:
 c=set();todo=list(rev[seed])
 while todo:
  v=todo.pop()
  if v in c:continue
  c.add(v);todo.extend(rev[v])
 closure[seed]={'direct':sorted(rev[seed]),'all_consumers':sorted(c),'outside_owned':sorted(c-ids)}
assert all(not v['outside_owned'] for v in closure.values())
out={'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'source_manifest_deps_exact':True,'page_inventory_exact':True,'unique_items':40,'A':36,'B':4,'owned_dependency_order':order,'closure_method':'Actual item flow/block deps+wiki links UNION all current run manifest deps, including nonlogical links; unrelated frontmatter is not parsed or modified.','closure':closure}
(b/'final-consumer-and-inventory-checks.json').write_text(json.dumps(out,indent=2)+'\n');print('40 unique; deps/pages exact; acyclic; all changed-interface consumers owned')
