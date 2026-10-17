"""Deterministic authentic-section reconstruction; no carrier writes."""
import pathlib, json, re, hashlib, difflib
b=pathlib.Path(__file__).resolve().parent
run='physics-remaining-80-2026-10-17'
a=b/'authentic-inputs'
sha=lambda t:hashlib.sha256(t.encode()).hexdigest()
frozen=a/f'{run}-proof-contracts.json'
assert sha(frozen.read_text())=='1950695988580dd153a253cde2cfee43f2a119cbf027e4bf022c92f50d709f59'
c=json.loads(frozen.read_text())['contracts']; pre=json.loads((a/f'{run}-step3-hash-70-pre.json').read_text());post=json.loads((a/f'{run}-step3-hash-70-post.json').read_text())
results=[]
for id in ['thm-tgr-constant-density-star-verified','cex-tgr-incompressible-causal-transport']:
 base=a/f'{id}.current.md'; archive=a/f'{id}.step1.md'
 new=base.read_text();old=archive.read_text();x=new;ops=[]
 def op(name,source,locator):ops.append({'operation':name,'source':str(source.relative_to(b)),'source_raw_sha256':sha(source.read_text()),'locator':locator})
 x=re.sub(r'^title:.*$',lambda m:re.search(r'^title:.*$',old,re.M)[0],x,flags=re.M)
 op('Restore exact archived title',archive,'frontmatter.title')
 heading='Statement' if id.startswith('thm') else 'Statement refuted'
 quotes={q['quote'] for v in c.values() for q in v.get('citations',[]) if q.get('source')==id and q.get('source_section')==heading}
 if id.startswith('thm'):
  assert len(quotes)==1; statement=next(iter(quotes));op('Restore entire unique exact Statement quote',frozen,f'contracts.*.citations[source={id},source_section=Statement].quote')
 else:
  assert not quotes;statement=old.split('## '+heading+'\n\n')[1].split('\n## ')[0].strip();op('Restore entire exact Statement refuted',archive,'Statement refuted')
 x=re.sub(r'(?<=## '+heading+r'\n\n)[\s\S]*?(?=\n\n## )',lambda m:statement,x,count=1)
 ph='Proof' if id.startswith('thm') else 'Counterexample';steps=c[id]['derivations']
 proof='\n\n'.join(f"{s['step']} {s['claim']} [{', '.join(s['inputs'])}]"+(' ∎' if i==len(steps)-1 else '') for i,s in enumerate(steps))
 x=re.sub(r'(?<=## '+ph+r'\n\n)[\s\S]*?(?=\n\n## )',lambda m:proof,x,count=1)
 for step in steps:op('Restore exact tagged proof paragraph from claim + ordered inputs; retain archived paragraph separation and final QED',frozen,f"contracts.{id}.derivations[step={step['step']}]")
 labels=['[A1]'] if id.startswith('thm') else ['**Given:**','[A1]']
 for label in labels:
  x=x.replace(next(t for t in x.splitlines() if t.startswith(label)),next(t for t in old.splitlines() if t.startswith(label)));op('Restore exact archived paragraph',archive,label)
 if not id.startswith('thm'):
  x=x.split('## Remarks\n')[0]+'## Remarks\n'+old.split('## Remarks\n')[1];op('Restore entire exact archived Remarks including terminal newlines',archive,'Remarks')
 expected=pre['hashes'][id]['item_sha256'];actual=sha(x)
 assert actual==expected, (id,actual,expected)
 assert sha(new)==post['hashes'][id]['item_sha256'], 'Current carrier differs from immutable post snapshot'
 (b/'reconstructed-pre'/f'{id}.md').write_text(x)
 (b/f'{id}.diff').write_text(''.join(difflib.unified_diff(x.splitlines(True),new.splitlines(True),fromfile='authenticated-reconstructed-pre/'+id,tofile='actual-current-post/'+id)))
 results.append({'id':id,'base':str(base.relative_to(b)),'base_raw_sha256':sha(new),'archive':str(archive.relative_to(b)),'archive_raw_sha256':sha(old),'operations':ops,'candidate_path':'reconstructed-pre/'+id+'.md','candidate_sha256':actual,'expected_pre_sha256':expected,'exact_full_raw_match':True,'current_equals_immutable_post':True})
(b/'reconstruction-attempt.json').write_text(json.dumps({'qualification':'Reconstruction from authentic full bases and exact preserved sections; not claimed to be a previously archived full pre-reader source. Each candidate is authenticated only by a full raw SHA256 equality with the immutable pre snapshot. No hash-only evidence, reader-story text or guessed prose was substituted.','frozen_aggregate':{'original_path':f'research/{run}-proof-contracts.json','preserved_path':str(frozen.relative_to(b)),'raw_sha256':sha(frozen.read_text())},'items':results},indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k in ['id','candidate_sha256','exact_full_raw_match','current_equals_immutable_post']} for r in results],indent=2))
