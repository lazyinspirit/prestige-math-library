import pathlib,json,hashlib,shutil,sys
root=pathlib.Path.cwd();run='advanced-qft-supersymmetry-build-2026-10-23';prep=root/'research'/f'{run}-owner-resolution/private-preparation';template=json.loads((prep/'original-rendering-template-v4.json').read_text());facts=json.loads((prep/'original-rendering-extractions-v4.json').read_text());scienceSource=prep/'root-scientific-review-v4.json';science=json.loads(scienceSource.read_text());reviews={r['id']:r for r in science['rows']};assert len(reviews)==len(template['entries'])==13;h=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();base=root/'research'/f'{run}-original-successor-evidence';scienceDest=base/'root-scientific-review-v4.json'
if scienceDest.exists():assert scienceDest.read_bytes()==scienceSource.read_bytes()
else:shutil.copyfile(scienceSource,scienceDest)
for row in facts['entries']:
 for key,textkey in [('ownership_destination','ownership_utf8'),('ledger_destination','ledger_utf8')]:
  p=root/row[key];p.parent.mkdir(parents=True,exist_ok=True)
  if p.exists():assert p.read_bytes()==row[textkey].encode(),('historical evidence changed',str(p))
  else:p.write_text(row[textkey])
plan=json.loads((root/'research/plan-spec.json').read_text());pages=[next(p for p in plan['pages']if p['id']==pid)for pid in template['scope']['pages']];decl={i['id']:(p,i)for p in pages for i in p['items']};assert len(decl)==21;current=root/'research'/f'{run}-frontier-append-2/original-rendering-maintenance.json';old=json.loads(current.read_text());oldEntries={pathlib.Path(e['path']).stem:e for e in old['entries']};assert len(oldEntries)==11
template.update(reviewer='/root',reason='Root independently reviewed thirteen exact original rendering successors and genuine finalized repair/before/adjudication/check evidence. Statements, hypotheses, dependencies and mathematical assertions are unchanged. One exact same-target Fact display label and one exact terminal source-heading/QED repair were separately reviewed alongside the prior eleven presentations. This authority covers only fourteen selected planned pages and their declared uses; twenty-one carriers and proofs remain absent. Local pins, scientific authoring/review duties and native histories remain intact.')
for entry in template['entries']:
 item=pathlib.Path(entry['path']).stem;review=reviews[item];assert entry['pinned_sha256']==review['pinned_sha256']and entry['original_sha256']==review['original_sha256'];labels=entry['changes'].get('fact_reference_labels',[]);entry['scientific_review']={'statements':'identical','facts':'reference-labels-only'if labels else'identical','hypotheses':'identical','proof':'equivalent-presentation','new_premises':False,'new_results':False,'reason':review['reason'],'reading_limits':review['reading_limits']};entry['proof_step_reviews']=oldEntries.get(item,{}).get('proof_step_reviews',{})
 if labels:
  assert item=='lem-classical-affine-closed-points-are-maximal-ideals'and len(labels)==1 and len(entry['fact_reference_reviews'])==1
  for row in entry['fact_reference_reviews']:
   assert row['target']=='lem-evaluation-ideal-is-maximal'and row['fact_label']=='F2';row['reason']=review['reason'];row['reading_limits']=review['reading_limits']
 if entry['changes'].get('terminal_source_heading'):
  assert item=='thm-regular-equals-smooth-over-perfect-field';entry['terminal_source_heading_review']={'kind':'terminal-source-heading','step_label':'7.1','reason':review['reason'],'reading_limits':review['reading_limits']}
 entry['evidence']=[{'path':str(scienceDest.relative_to(root)),'sha256':h(scienceDest)}]
 for row in entry['consumers']:
  page,itemDecl=decl[row['id']];assert row['source_sha256']is None and not(root/'items'/(row['id']+'.md')).exists();row['decision']='unaffected';row['reason']=f"Root reviewed the exact planned {itemDecl['kind']} declaration {row['id']} on {page['id']}. The imported {item} premise retains its mathematical Statement, Fact assertions, hypotheses and dependency targets; its individually reviewed presentation changes alter no declared use. This carrier and proof are absent: this decision concerns planned-use compatibility only, with full authoring and independent review still required."
for path in list(template['inputs']):
 if 'root-scientific-review' in path:template['inputs'].pop(path)
template['inputs'][str(scienceDest.relative_to(root))]=h(scienceDest)
for path,sha in template['inputs'].items():assert h(root/path)==sha,('changed input',path)
assert 'ROOT_'not in json.dumps(template);archive=base/'planning-review-v2.json';assert not archive.exists();shutil.copyfile(current,archive);current.write_text(json.dumps(template,indent=2,ensure_ascii=False)+'\n');print('Bound actual Root review for13 exact successors and',sum(len(e['consumers'])for e in template['entries']),'planned uses. No source, import, native report/result or scientific acceptance changed.')
