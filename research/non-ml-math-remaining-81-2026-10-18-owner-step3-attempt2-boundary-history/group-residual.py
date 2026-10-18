import pathlib,json,re,collections,hashlib
R='non-ml-math-remaining-81-2026-10-18';O=pathlib.Path('research/'+R+'-owner-step3-attempt2-boundary-history');D=json.load(open(O/'remaining-source-row-review.json'));C=json.load(open('research/'+R+'-proof-contracts.json'))['contracts'];identity=json.load(open(O/'remaining-source-identity-details.json'))['items'];owners={};category={}
for p in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 m=re.search('-batch-(\\d+)\\.pages',p.name)
 if not m:continue
 a=json.load(open(p));a=a if isinstance(a,list) else a.get('pages',[])
 for page in a:
  for v in page.get('items',[])+page.get('examples',[]):
   i=v if isinstance(v,str) else v['id'];owners[i]=int(m.group(1));category[i]=page.get('category')
h=lambda s:hashlib.sha256(s).hexdigest();items={}
for dom,rows in D['groups'].items():
 for r in rows:
  i=r['id'];s=pathlib.Path('items/'+i+'.md');now=next(x for x in C[i]['boundaries'] if x['case']==r['case']);guard=h(json.dumps(now,ensure_ascii=False,separators=(',',':')).encode());it=items.setdefault(i,{'id':i,'domain':dom,'batch':owners.get(i),'category':category.get(i),'source':str(s),'source_raw_sha256':h(s.read_bytes()),'fresh_current_case_review_required':True,'source_identity_gap':identity.get(i,{}).get('reason'),'root_fibonacci_owner_may_supersede':i=='ex-fibonacci-golden-chain-projectors-and-noninvertibility' or 'fibonacci' in i and 'pivotal' in i,'cases':[]});it['cases'].append({'case':r['case'],'exact_current_row':now,'current_full_row_guard_sha256':guard,'matches_original_diagnostic_row':now==r['current_row'],'diagnostic_kinds':(['template'] if r['template_clusters'] else [])+(['contradicted'] if r['contradicted'] else []),'why_fresh_review_is_required':r['remaining_reason']})
groups=collections.defaultdict(list)
for it in items.values():groups[it['domain']].append(it)
summary={'run':R,'source_count':len(items),'row_count':sum(len(x['cases']) for x in items.values()),'row_guard_definition':'SHA256 of compact UTF-8 JSON.stringify-equivalent serialization of the exact full current row, preserving its property order. These are input guards, not final audit annotation seals.','integration':'No whole-file overwrite. Guard each current source raw hash and exact full current row. Root owns the six Fibonacci/pivotal pending anchor changes; do not apply a stale guard there.','groups':{k:sorted(v,key=lambda x:(x['category'] or '',x['batch'] or 0,x['id'])) for k,v in groups.items()}}
(O/'residual.json').write_text(json.dumps(summary,indent=2,ensure_ascii=False)+'\n');print({'sources':len(items),'rows':summary['row_count'],'domains':{k:{'sources':len(v),'rows':sum(len(x['cases']) for x in v)} for k,v in groups.items()}})
