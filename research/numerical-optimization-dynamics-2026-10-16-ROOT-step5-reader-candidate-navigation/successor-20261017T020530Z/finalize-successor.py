import pathlib,json,datetime,shutil
r='numerical-optimization-dynamics-2026-10-16';base=pathlib.Path('research/'+r+'-ROOT-step5-reader-candidate-navigation');cur=json.loads((base/'CURRENT.json').read_text());succ=pathlib.Path(cur['successor_directory']);lp=succ/'candidate-navigation.json';x=json.loads(lp.read_text());now=datetime.datetime.now(datetime.timezone.utc).isoformat()
r3=pathlib.Path('research/'+r+'-ROOT-step4-kept-reader-late-r3-proposals/proposal.json');r4=pathlib.Path('research/'+r+'-ROOT-step4-kept-reader-late-r4-proposals/proposal.json');supp=r4.parent/'supplemental-native-findings/dispositions.json';s=json.loads(supp.read_text());registry=pathlib.Path('research/'+r+'-step4-published-alert-routes.json');routes=json.loads(registry.read_text());receipt=pathlib.Path('research/'+r+'-ROOT-step4-nearest-point-repair/repair.json')
x['navigation_recorded_at']=now;x['previous_navigation_archive']=cur['previous_navigation_archive'];x['previous_ledger']=str(base/'candidate-navigation.json');x['status']='Completed packet navigation successor only; not an admission or current-input certification.'
x['root_reported_operational_context']={'attribution':'Explicit root instruction, recorded here as navigation; no verification or execution performed by assembler.','adapter':'Reviewed opt-in version2 code and WORKFLOW documentation installed by root at drained paused Step4.','controller':'fresh controller 345744 per root','published_repair':'Root reports required original ownership, recorded local checks/ledger and three successful exact native publishedAlertRoute validations.','native_gate_pass_claimed':False,'remaining_duty':'Root still independently confirms kept-item defects and fills actual current bindings/admission at supported paused5.1; normal native work and full gates remain owed.'}
x['completed_packet_updates']={'r3':{'packet':str(r3),'completion_basis':'Explicit root instruction','actual_native_records':7,'actual_physical_items':6,'count_erratum':json.loads(r3.read_text()).get('navigation_count_erratum')},'r4':{'packet':str(r4),'completion_basis':'Explicit root instruction','kept_item_records':3,'page_records':3,'published_alert_records':3,'shared_published_physical_items':1,'supplemental_dispositions':str(supp)}}
for e in x['outside_frontier_findings']:
 recs=[]
 for i,rec in enumerate(s['entries']):
  if rec['id']==e['physical_id']:
   recs.append({'packet_path':str(supp),'pointer':f'/entries/{i}','source_kind':rec['source_kind'],'reader_batch':str(rec['batch']),'digest_path':rec['path'],'pointer_in_digest':rec['pointer'],'original_object':rec['finding'],'original_luna_row':rec.get('original_luna_row'),'before_file':rec.get('before_file'),'proposed_file':rec.get('proposed_file'),'statement_or_definition_changed':rec.get('statement_or_definition_changed'),'consumer_duty':rec.get('consumer_duty'),'packet_assessment':rec.get('assessment'),'historical_routing_note':'Original packet route observations remain historical; current root receipt/registry below supersede any then-absent repair observation.'})
 e['completed_supplemental_packet_records']=recs
 if e['physical_id']=='thm-nearest-point-in-a-nonempty-closed-convex-set':
  actual=succ/'actual-root-delivered-source'/('items/'+e['physical_id']+'.md');actual.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(e['canonical_path'],actual)
  e['route']='Existing root recorded published repair and actual native published-alert registry; outside kept-item admission.'
  e['actual_root_repair_navigation']={'receipt_path':str(receipt),'registry_path':str(registry),'registry_route_references':[{'path':str(registry),'pointer':f'/routes/{i}','source_batch':a['source_batch'],'alert_index':a['alert_index'],'original_alert':a['alert']} for i,a in enumerate(routes['routes']) if a.get('alert',{}).get('item')==e['physical_id']],'canonical_path':e['canonical_path'],'delivered_source_snapshot':str(actual),'selected_variant':'Actual delivered earlier proposal with direct norm triangle derivation, as selected by root. Optional L3 wording successor was not adopted.','statement_changed':False,'definition_changed':False,'proof_only':True,'local_policy_and_three_route_successes':'Root reports these completed; assembler ran none and claims no native gate pass.','no_rehash_or_new_confirmation':True}
 else:e['route']='Completed focused page-only correction proposal; outside item Luna admission, genuine assigned native page-maintenance work remains owed.'
# Freeze exact complete completed packet trees. This preserves original files; no
# canonical source/evidence is edited and no new binding/hash is asserted.
dirs={pathlib.Path(p['path']).parent for e in x['candidates']+x['excluded_actual_luna_false_native_routes'] for p in e.get('proposal_packets',[])}
dirs|={r3.parent,r4.parent,receipt.parent}
# Prefer a parent once if a nested path is already contained in its snapshot.
dirs=sorted([p for p in dirs if p.exists()],key=lambda p:(len(p.parts),str(p)));kept=[]
for p in dirs:
 if not any(p==q or q in p.parents for q in kept):kept.append(p)
manifest=[]
for p in kept:
 dest=succ/'frozen-completed-packets'/p
 shutil.copytree(p,dest,symlinks=True)
 files=[str(a.relative_to(p)) for a in sorted(p.rglob('*')) if a.is_file() or a.is_symlink()]
 manifest.append({'original_directory':str(p),'frozen_directory':str(dest),'files':files,'freeze_kind':'Exact copied packet bytes/tree, no hashes or current input binding; original history unchanged.'})
extra=succ/'frozen-existing-root-routing';extra.mkdir();shutil.copyfile(registry,extra/registry.name)
x['completed_packet_freeze_manifest']=manifest;x['existing_root_route_registry_snapshot']=str(extra/registry.name)
x['counts']['completed_page_proposal_records']=sum(v['source_kind']=='page-concern' for v in s['entries']);x['counts']['existing_root_published_alert_routes']=len(routes['routes']);x['counts']['pending_active_r3_r4']=0
x['snapshot_limit']='Dated navigation observation. Completed packet copies are frozen locally without hashes; actual native current-input binding remains root-owned. Original sources, packet histories and foreign working bytes are preserved.'
lp.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
(succ/'packet-freeze-manifest.json').write_text(json.dumps({'recorded_at':now,'research_only':True,'no_hashes_or_authority':True,'packets':manifest},indent=2)+'\n')
readme=(succ/'README.md').read_text();readme+='\n\nDated successor: '+now+'. The previous exact navigation is retained under ['+pathlib.Path(cur['previous_navigation_archive']).name+'](../history/'+pathlib.Path(cur['previous_navigation_archive']).name+'/candidate-navigation.json). All completed packet trees are copied under `frozen-completed-packets/`; [packet-freeze-manifest.json](packet-freeze-manifest.json) maps their original paths without generating hashes.\n\nR3 is complete at seven native records/six physical IDs. R4 is complete at three kept item records plus three page concerns and three published alerts sharing one nearest-point supplier. The JSON preserves page-only routes separately from kept items, and links the actual root published repair receipt and all three native route records. Root selected the delivered direct norm triangle proof, preceding the optional L3 wording successor; navigation does not replace it. Root reports the reviewed v2 adapter installed at a drained paused Step4 boundary, fresh controller 345744, required local published-repair checks/ledger and three exact publishedAlertRoute validations. This records no native gate pass and performs no new validation, hashing or confirmation.\n'
(succ/'README.md').write_text(readme)
# Keep original top-level navigation files intact except an explicit current link.
with (base/'README.md').open('a') as f:f.write('\n\nLatest completed-packet navigation: ['+succ.name+']('+succ.name+'/README.md). Earlier ledger bytes remain preserved here and in the dated history archive. See CURRENT.json for the current research navigation pointer.\n')
print(json.dumps(x['counts']));print('frozen packet trees',len(manifest))
