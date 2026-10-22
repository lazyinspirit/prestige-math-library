import json,pathlib,subprocess,os,re,hashlib
R=pathlib.Path.cwd();run='inverse-problems-knot-theory-all-109-2026-10-19';out=R/f'research/{run}-supervision-20261020/step5-supervision/step6-closeout-ownership-FIRST/candidate';env={**os.environ,'GIT_OPTIONAL_LOCKS':'0'};g=lambda *a:subprocess.check_output(['git',*a],env=env);sha=lambda b:hashlib.sha256(b).hexdigest();head=g('rev-parse','HEAD').decode().strip();a=g('show','HEAD:research/plan-spec.json').decode();ib=g('rev-parse',':research/plan-spec.json').decode().strip();b=g('show',':research/plan-spec.json').decode();c=(R/'research/plan-spec.json').read_text();
def rows(text):
 m=re.search(r'"pages"\s*:\s*\[',text);assert m;at=m.end();dec=json.JSONDecoder();out=[]
 while True:
  while text[at].isspace():at+=1
  if text[at]==']':break
  start=at;v,end=dec.raw_decode(text,at);out.append(dict(id=v['id'],raw=text[start:end],start=start,end=end,value=v));at=end
  while text[at].isspace():at+=1
  if text[at]==',':at+=1
  else:assert text[at]==']'
 return out
old=rows(a);indexed=old if a==b else rows(b);now=rows(c);scopepath=f'research/{run}-scope-ledger.json';scope=json.loads((R/scopepath).read_text());ids={p['id'] for p in scope['pages']};page_ids=[x['id'] for x in now if x['id'] in ids];assert len(page_ids)==len(ids)==218;old_ids={x['id'] for x in old};new=[x['id'] for x in now if x['id'] in ids and x['id'] not in old_ids];newset=set(new);blocks=[];i=0
while i<len(now):
 if now[i]['id'] not in newset:i+=1;continue
 assert i>0;anchor=now[i-1];j=i
 while j+1<len(now) and now[j+1]['id'] in newset:j+=1
 blocks.append(dict(after_page_id=anchor['id'],page_ids=[x['id'] for x in now[i:j+1]],raw=c[anchor['end']:now[j]['end']]));i=j+1
assert [x for b in blocks for x in b['page_ids']]==new
ordered=lambda rs:[dict(id=x['id'],raw=x['raw']) for x in rs if x['id'] in ids]
ev=[scopepath]+sorted('research/'+p.name for p in R.glob(f'research/{run}-batch-*.pages.json'))
spec=dict(version=2,kind='plan-page-replacement-and-insertion-projection',run=run,path='research/plan-spec.json',authorized_by='owner',authorization='PROPOSED FOR ROOT REVIEW: commit only the exact existing run scope page replacements and selected additions; retain every foreign plan byte independently in HEAD, index and working tree.',original_head=head,original_index_blob=ib,page_ids=page_ids,base_head_owned_rows=ordered(old),base_index_owned_rows=ordered(indexed),target_owned_rows=ordered(now),evidence=[dict(path=p,sha256=sha((R/p).read_bytes())) for p in ev],added_page_ids=new,insertions=blocks)
p=out/'proposed-plan-projection.json';p.write_text(json.dumps(spec,indent=2)+'\n');s=dict(original_head=head,original_index_blob=ib,head_plan_sha256=sha(a.encode()),index_plan_sha256=sha(b.encode()),working_plan_sha256=sha(c.encode()),scope_count=len(page_ids),existing_count=len(page_ids)-len(new),added_count=len(new),insertions=[dict(after_page_id=b['after_page_id'],count=len(b['page_ids']),bytes=len(b['raw'].encode())) for b in blocks],authority_sha256=sha(p.read_bytes()),canonical_policy_written=False);(out/'plan-generation-report.json').write_text(json.dumps(s,indent=2)+'\n');print(json.dumps(s,indent=2))
