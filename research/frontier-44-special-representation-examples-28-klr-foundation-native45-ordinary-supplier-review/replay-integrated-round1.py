from pathlib import Path
import json,hashlib,re,datetime
B=Path(__file__).parent;P=json.loads((B/'proposal.json').read_text());I=json.loads((B/'integration-round1.json').read_text());sha=lambda b:hashlib.sha256(b).hexdigest();canon=lambda x:json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()
def sec(s,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n',s,re.M);e=re.search(r'^## ',s[m.end():],re.M);return s[m.end():m.end()+e.start() if e else len(s)]
def section(s,heading):
 start=s.index(heading);end=s.find('\n## ',start+len(heading));return s[start:len(s) if end<0 else end]
def get(x,path):
 for k in path:x=x[k]
 return x
def objs(x):
 if isinstance(x,dict):
  yield x
  for v in x.values():yield from objs(v)
 elif isinstance(x,list):
  for v in x:yield from objs(v)
def diff(a,b,path=()):
 if type(a)!=type(b):return [(path,a,b)]
 if isinstance(a,dict):
  r=[]
  for k in sorted(set(a)|set(b)):
   if k not in a or k not in b:r.append((path+(k,),a.get(k),b.get(k)))
   else:r+=diff(a[k],b[k],path+(k,))
  return r
 if isinstance(a,list):
  if len(a)!=len(b):return [(path,a,b)]
  r=[]
  for n,(x,y) in enumerate(zip(a,b)):r+=diff(x,y,path+(n,))
  return r
 return [] if a==b else [(path,a,b)]
hashes=[]
for e in I['changes']:
 before=Path(e['before_file']).read_bytes();after=Path(e['path']).read_bytes();row={'path':e['path'],'before_archived_hash_matches':sha(before)==e['before_sha256'],'current_after_hash_matches_integration':sha(after)==e['after_sha256'],'current_raw_sha256':sha(after)};hashes.append(row);assert row['before_archived_hash_matches'] and row['current_after_hash_matches_integration']
carriers=[]
for e in P['carrier_edits']:
 before=Path(e['before_file']).read_text();after=Path(e['target']).read_text();row={'id':e['id'],'current_sha256':sha(after.encode()),'after_matches_proposal':sha(after.encode())==e['after_raw_sha256'],'statement_unchanged':sec(before,'Statement')==sec(after,'Statement'),'all_numbered_proof_steps_unchanged':sec(before,'Proof')==sec(after,'Proof'),'statement_sha256':sha(sec(after,'Statement').encode()),'proof_steps_sha256':sha(sec(after,'Proof').encode()),'old_supplier_occurrences':after.count(P['old_supplier']),'ordinary_supplier_in_deps_and_fact':after.count(P['replacement_supplier'])==2};carriers.append(row);assert all(row[k] for k in ['after_matches_proposal','statement_unchanged','all_numbered_proof_steps_unchanged','ordinary_supplier_in_deps_and_fact']);assert row['old_supplier_occurrences']==0
for key in ['inventory_edits','proof_packet_edit']:
 e=P[key];assert sha(Path(e['target']).read_bytes())==e['after_raw_sha256'];assert Path(e['target']).read_bytes()==Path(e['after_file']).read_bytes()
D=P['design_edit'];design=Path(D['target']).read_text();assert sha(section(design,D['guard_heading']).encode())==D['after_section_raw_sha256'];before_design=next(e for e in I['changes'] if e['path']==D['target']);s=Path(before_design['before_file']).read_text();assert s.replace(Path(D['before_file']).read_text(),Path(D['after_file']).read_text(),1)==design
planchange=next(e for e in I['changes'] if e['path']=='research/plan-spec.json');beforeplan=json.loads(Path(planchange['before_file']).read_text());afterplan=json.loads(Path(planchange['path']).read_text());diffs=diff(beforeplan,afterplan);assert len(diffs)==2
planrows=[]
for e in P['plan_edits']:
 page=next(p for p in afterplan['pages'] if p['id']==e['selector']['page_id']);item=next(x for x in page['items'] if x['id']==e['selector']['item_id']);assert item['deps']==e['after'];assert sha(canon(item))==e['after_item_record_sha256'];assert page['requires']==P['page_requires_before'];planrows.append({'id':item['id'],'selected_after_record_matches':True,'requires_unchanged':True,'current_record_sha256':sha(canon(item))})
assert all(path[0]=='pages' and path[-2]=='deps' for path,_,_ in diffs)
inv=json.loads(Path(P['inventory_edits']['target']).read_text());assert all(get(inv,e['path'])==e['after'] for e in P['inventory_edits']['field_edits'])
# Replay exact two native45 objects plus exact ordinary supplier contracts; no broad proof audit.
projections=json.loads((B/'native-input-projections.json').read_text());native=[]
for e in projections:
 if e['batch'] not in [40,45]:continue
 data=json.loads(Path(e['file']).read_text());x=next(x for x in objs(data) if x.get('id')==e['id']);projection={k:x[k] for k in ['id','deps','statement','strategy','axiom_use'] if k in x};unchanged=sha(canon(projection))==e['observed_projection_sha256'];assert unchanged
 native.append({'batch':e['batch'],'id':e['id'],'exact_consumed_record_unchanged':True,'current_projection_sha256':sha(canon(projection))})
assert I['round']==P['round']==1 and I['maximum_rounds']==P['maximum_rounds']==2
R={'version':1,'run':P['run'],'scope':'native45 Finding1 ordinary-supplier reconciliation only','round':1,'maximum_rounds':2,'same_round_replay':True,'additional_repair_cycle':False,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'verdict':'sufficient-for-the-flagged-dependency-contract-mismatch; exact integrated after matches the guarded proposal','integration_record':str(B/'integration-round1.json'),'integration_record_raw_sha256':sha((B/'integration-round1.json').read_bytes()),'replayed_file_guards':hashes,'carrier_replay':carriers,'design_section_exact_replay':True,'inventory_and_packet_exact_replay':True,'plan_only_two_selected_dependency_values_changed':{'count':len(diffs),'paths':[list(p) for p,_,_ in diffs],'records':planrows},'native_consumed_record_replay':native,'consumed_clause_sufficiency':[{'clause':'ordinary analytic proper base change on each proper Cech map, coherent faces/degeneracies, exact pullback and constant fibre coefficient','supplier':P['retained_coherence_supplier'],'scope':'native40 ordinary arbitrary-field contract; no equivariance or char0 requirement consumed'},{'clause':'bounded algebraically constructible restriction over arbitrary coefficient field; exact pullback preserves lower bound','supplier':P['replacement_supplier'],'scope':'native40 explicit arbitrary-field ordinary contract'},{'clause':'functorial simplicial strict resolutions, fixed internal lower bound and finite diagonal total model','supplier':'lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent','scope':'retained existing model clause only; local-section conclusion is not used as proper descent'}],'statement_definition_change_impact':{'changed_statements':[],'changed_definitions':[],'additional_consumer_audit_required':False,'reason':'Both original Statements and numbered proof steps are byte-identical; arbitrary-field ordinary descent contracts remain intact'},'acceptance_boundary':'Closes only the source/dependency mismatch finding at the same review round. No whole-item proof acceptance, supplier construction completion, source-reading refresh, native readiness, gate or stage stamp is issued. Native45 full manifest unchanged is recorded by root; this reviewer independently replayed the two affected native45 records.'}
(B/'final-replay-round1.json').write_text(json.dumps(R,indent=2)+'\n')
print('PASS:6integrationguards,2unchangedStatements/proofs,2surgicalplanvalues,4native40/45recordguards; same round1/max2')
