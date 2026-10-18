exec(open('/tmp/boundary-history-index.py').read().split('allrows=[];')[0])
A=json.load(open(O/'prior-row-review-index.json'));D=json.load(open(O/'remaining-source-row-review.json'));by=collections.defaultdict(list)
for x in A['rows']:by[(x['id'],x['case'])].append(x)
counts=collections.Counter();items={}
for group in D['groups'].values():
 for r in group:
  i=r['id']
  if i in items:continue
  curhash,cf,cb=readfile('items/'+i+'.md');checks=[]
  for old in by[(i,r['case'])]:
   guards=old['source_basis'].get('review_source_guards',[])
   authenticated=[]
   for g in guards:
    for p in snapshotmap[i]:
     try:hh,f,b=readfile(p)
     except Exception:continue
     if hh!=g['sha256']:continue
     ks=sorted(k for k in set(cf or {})|set(f or {}) if (cf or {}).get(k)!=(f or {}).get(k));authenticated.append({'path':p,'guard':g,'body_identical':b==cb,'changed_frontmatter_fields':ks,'disallowed_frontmatter_fields':sorted(set(ks)-benign)})
   checks.append({'prior_patch':old['patch_file'],'guards':guards,'authenticated_full_sources':authenticated})
  if any(z['body_identical'] for ch in checks for z in ch['authenticated_full_sources']):reason='body-identical-but-mathematical-frontmatter-changed'
  elif any(ch['authenticated_full_sources'] for ch in checks):reason='authenticated-prior-complete-body-differs'
  else:reason='missing-authenticated-full-prior-source-for-recorded-guard'
  counts[reason]+=1;items[i]={'id':i,'current_raw_sha256':curhash,'reason':reason,'checks':checks}
(O/'remaining-source-identity-details.json').write_text(json.dumps({'summary':dict(counts),'items':items},indent=2)+'\n');print(dict(counts))
for i,x in items.items():
 if x['reason']=='body-identical-but-mathematical-frontmatter-changed':print(i,sorted(set(k for c in x['checks'] for z in c['authenticated_full_sources'] if z['body_identical'] for k in z['disallowed_frontmatter_fields'])))
