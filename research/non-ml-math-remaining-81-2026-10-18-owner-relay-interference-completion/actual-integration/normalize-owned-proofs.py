import pathlib,re,json,subprocess,collections,hashlib
base=pathlib.Path(__file__).parent
run='non-ml-math-remaining-81-2026-10-18'
m=json.load(open('research/'+run+'-batch-19.pages.json'))
ids=[x['id'] for p in m for x in p['items']]
log=[]
def blocks(body):
 hits=list(re.finditer(r'(?m)^(\d+\.\d+)\s+',body));return [(h.group(1),body[h.end():hits[j+1].start() if j+1<len(hits) else len(body)].strip()) for j,h in enumerate(hits)]
def split_tag(s):
 z=re.search(r'\s*(\[(?:[^\[\]]|\[[^\[\]]*\])*\])\s*(∎)?\s*$',s)
 if not z:raise ValueError('no trailing tag '+s[-150:])
 return s[:z.start()],s[z.start():]
def key(s):
 a,_=split_tag(s);a=re.sub(r'\d+\.\d+','STEPREF',a);return re.sub(r'\s+',' ',a).strip()
for i in ids:
 p=pathlib.Path('items')/(i+'.md');s=p.read_text();match=re.search(r'(?m)^## (Proof|Verification|Counterexample|Refutation)\s*\n',s)
 if not match:continue
 head=s[:match.end()];tail=s[match.end():];z=re.search(r'(?m)^## ',tail);proof=tail[:z.start()] if z else tail;end=tail[z.start():] if z else ''
 orig=blocks(proof)
 # Every proof step is one paragraph; preserve all mathematical text while flattening whitespace.
 flat='\n\n'+'\n\n'.join(n+' '+re.sub(r'\s+',' ',t).strip() for n,t in orig)+'\n'
 s=head+flat+end;p.write_text(s)
 proc=subprocess.run(['node','tools/tsx-run.mjs','tools/precheck.mts',str(p),'--json'],capture_output=True,text=True)
 data=json.loads(proc.stdout);row=data['results'][0]
 if row['status']!='repair':log.append({'id':i,'initial':row['status'],'phase_mapping':{}});continue
 proposed=row['proposed_proof'];proposed=proposed.split('∎',1)[0]+'∎' if '∎' in proposed else proposed;new=blocks(proposed);old=blocks(flat)
 buckets=collections.defaultdict(list)
 for n,t in old:buckets[key(t)].append(n)
 mapping={}
 for n,t in new:
  k=key(t)
  if not buckets[k]:raise ValueError('checker changed prose '+i+' '+n)
  mapping[buckets[k].pop(0)]=n
 if any(buckets.values()):raise ValueError('checker omitted step '+i)
 oldlabels=[n for n,t in old]
 def remaptext(t):
  protected=[]
  def rng(q):
   a,b=q.group(1),q.group(2)
   if a not in mapping or b not in mapping:return q.group(0)
   ia,ib=oldlabels.index(a),oldlabels.index(b)
   if ia>ib:raise ValueError('backward original prose range '+i+' '+q.group(0))
   protected.append(', '.join(mapping[x] for x in oldlabels[ia:ib+1]));return 'RANGEREFMARK'+str(len(protected)-1)+'END'
  t=re.sub(r'(?<!\d)(\d+\.\d+)\s*[–—−-]\s*(\d+\.\d+)(?!\d)',rng,t)
  # Expanded ranges already contain current labels; avoid double substitution with sentinels.
  # Individual prose references occur after the literal step/steps, not arbitrary decimals.
  def single(q):return q.group(1)+re.sub(r'\d+\.\d+',lambda z:mapping.get(z.group(0),z.group(0)),q.group(2))
  t=re.sub(r'(?i)(\bsteps?\s+)(\d+\.\d+(?:(?:\s*,\s*|\s+and\s+|\s*/\s*)\d+\.\d+)*)',single,t)
  for j,value in enumerate(protected):t=t.replace('RANGEREFMARK'+str(j)+'END',value)
  return t
 newbody=[]
 oldtext=dict(old); reverse={v:k for k,v in mapping.items()}
 for n,t in new:
  prose,_=split_tag(oldtext[reverse[n]]);_,tag=split_tag(t);newbody.append(n+' '+remaptext(prose)+tag)
 p.write_text(head+'\n\n'+'\n\n'.join(newbody)+'\n'+end)
 log.append({'id':i,'initial':'repair','phase_mapping':mapping})
(base/'mechanical-normalization.json').write_text(json.dumps(log,indent=2)+'\n')
print(json.dumps({'proof_items':len(log),'phase_repairs':sum(bool(x['phase_mapping']) for x in log)}))
