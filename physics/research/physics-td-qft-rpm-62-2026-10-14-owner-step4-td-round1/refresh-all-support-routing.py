from pathlib import Path
from datetime import datetime,timezone
import json,re
run='physics-td-qft-rpm-62-2026-10-14';r=Path('research');out=r/(run+'-owner-step4-td-round1');n=r/(run+'-step5-v2');sources={}
for name,field in [('support-supplement-rpm-full-release-v2.json','subjects'),('support-supplement-qft-emg-and-rpm-provenance-v3.json','subjects_and_necessary_edits')]:
 d=json.loads((out/name).read_text())
 for row in d[field]:sources.setdefault(row['id'],[]).append(str(out/name))
c=json.loads((out/'support-supplement-coulomb-consumer-v4.json').read_text());sources.setdefault(c['id'],[]).append(str(out/'support-supplement-coulomb-consumer-v4.json'))
td=json.loads((out/'final-released-classification-and-proposals.json').read_text())
for id in set(td['actual_rejected_ids'])|set(td['proposed_ids']):sources.setdefault(id,[]).append(str(out/'final-released-classification-and-proposals.json'))
latest=out/'support-supplement-consolidated-open-obligations-and-native-alternatives-v9.json'
if latest.exists():
 latest_data=json.loads(latest.read_text())
 for defect in latest_data['existing_scientific_open_root_rows']:
  for source in defect['candidate_routes_supplier_first']:sources.setdefault(source['id'],[]).append(str(latest))
 needed_now={'lem-qft-fock-ccr-car','def-qft-fock-and-test-spaces','thm-qft-example-finite-dyson-unitarity','pthm-qft-lattice-gauge-existence','pthm-td-measurable-canonical-identities','prop-rpm-relativistic-coulomb-scattering-branch','pthm-qft-dirac-free-properties'}
else:needed_now=set()
seams=out/'support-supplement-conditioning-consumer-seams-and-qft-readiness-v11.json'
if seams.exists():
 seam_data=json.loads(seams.read_text())
 for row in seam_data['conditioning_source_routes']:
  sources.setdefault(row['id'],[]).append(str(seams));needed_now.add(row['id'])
current_coordination={
 'final_generic_h_science':f'research/{run}-owner-step5-qft-emg-coordination-round1/observation-14-final-native-generic-H-and-definition-readiness/focused-scientific-release.json',
 'fock_statistics_f1_only_candidate':f'research/{run}-owner-step5-qft-emg-coordination-round1/observation-14-final-native-generic-H-and-definition-readiness/pthm-qft-free-fock-statistics-F1-only-proposed.md',
 'definition_actual_authorship':f'research/{run}-owner-step5-qft-emg-coordination-round1/authorship-02-definition-only-handoff/authorship-release.json',
 'two_td_science':str(out/'native-observation-05-unassigned-td-core-consumers/scientific-release.json'),
 'two_td_actual_authorship':str(out/'authorship-01-two-td-handoffs/authorship-release.json'),
 'limits':'Final native CCR already sound generic-H; no CCR rewrite requested. Root withdrew unconsumed coupled request. Definition and2TD grants closed after exact authorship. Fresh native reviews/closure remain root duties.',
 'accepted_fockstats_no_source_change':f'research/{run}-owner-step5-qft-emg-coordination-round1/observation-17-native-pass2-dyson-lattice-fockstats-confirmation/combined-scientific-native-current-confirmation.json',
 'final_fock_native_confirmation':f'research/{run}-owner-step5-qft-emg-coordination-round1/observation-16-native-pass2-fock-current-confirmation/scientific-native-current-confirmation.json',
 'td_clapeyron_native_confirmation':str(out/'native-observation-06-pass2-unit1-confirmation/scientific-confirmation.json'),
 'td_reservoir_native_confirmation':str(out/'native-observation-07-pass2-unit3-confirmation/scientific-confirmation.json'),
 'optional_fockstats_cleanup_status':'NOT ADOPTED; actual F1 specialization sound and root accepts no source change; no action pending.'}
if (out/'native-observation-05-unassigned-td-core-consumers/scientific-release.json').exists():
 for row in json.loads((out/'native-observation-05-unassigned-td-core-consumers/scientific-release.json').read_text())['records']:sources.setdefault(row['id'],[]).append(current_coordination['two_td_science'])
sources.setdefault('pthm-qft-free-fock-statistics',[]).append(current_coordination['final_generic_h_science'])
needed_now=set()
frontier=json.loads((n/'frontier.json').read_text()) if (n/'frontier.json').exists() else None;statepath=Path('.physics-autopilot')/run/'state.json';state=json.loads(statepath.read_text());packs=[]
for f in sorted(n.glob('*.json')):
 if not re.fullmatch(r'(initial|repeat|correction-(initial|repeat)|impact-(initial|repeat)(-pass-[0-9]+)?)-[0-9]+\.json',f.name):continue
 d=json.loads(f.read_text());packs.append((f,d))
rows=[]
for id,evidence in sorted(sources.items()):
 assignments=[]
 for path,pack in packs:
  units=[str(u) for u,a in pack['assignments'].items() if any((x if isinstance(x,str) else x['id'])==id for x in a)]
  initial=pack['phase'] in ['initial','repeat'];impact=bool(re.fullmatch(r'impact-(initial|repeat)(-pass-[0-9]+)?',pack['phase']));collected=(n/(path.stem+'-collected.json')).exists();certified=(n/('certification-'+pack['phase']+'-'+str(pack['round'])+'.json')).exists();member=id in pack.get('frontier_ids',[])
  assignments.append({'pack':str(path),'phase':pack['phase'],'round':pack['round'],'native_units':units,'task_paths':[str(n/('step5-v2-'+pack['phase']+'-r'+str(pack['round'])+'-u'+u+'.task.md')) for u in units],'unassigned_impact_membership_candidate':impact and not units and member and not collected and not certified,'external_authorship_authorized':False,'collected':collected,'certified':certified})
 rows.append({'id':id,'evidence':evidence,'frozen_original_frontier_member':id in frontier['ids'] if frontier else None,'assignments':assignments})
x={'run':run,'observed_at_utc':datetime.now(timezone.utc).isoformat(),'mutable_routing_only_excluded_from_immutable_support':True,'stage':state['stage'],'native_packs':[str(path) for path,_ in packs],'rows':rows,'requested_current_pending_scientific_sources':sorted(needed_now),'operational_pseudo_subjects_excluded':True,'scientific_review_by_routing_agent':False,'external_source_authority_granted':False,'root_required_for':'Exact grant, writer absence/nonoverlap, preserved pack-before/current bytes, genuine scoped validation and deferred impact collection','source_tasks_reports_shared_files_modified':False,'hashes_tests_gates_run':False}
x['current_coordination_evidence']=current_coordination
live55refs=out/'support-supplement-live55-native-referrals-v20.json'
if live55refs.exists(): x['live55_explicit_native_referral_support']={'supplement':str(live55refs),'packets':json.loads(live55refs.read_text())['packets']}
live55comp=out/'support-supplement-live55-native-comparisons-v19.json'
if live55comp.exists(): x['live55_native_scientific_comparisons']={'supplement':str(live55comp),'packets':json.loads(live55comp.read_text())['packets']}
previous_excluded_index=out/'all-native-support-routing.current.json'
if previous_excluded_index.exists():
 previous_stream=json.loads(previous_excluded_index.read_text()).get('live54_additional_streamed_packets')
 if previous_stream: x['live54_additional_streamed_packets']=previous_stream
live54preferred=out/'support-supplement-live54-streamed-science-v18.json'
if live54preferred.exists(): x['live54_preferred_and_additional_support']={'supplement':str(live54preferred),'packets':json.loads(live54preferred.read_text())['packets']}
live54stream=out/'support-supplement-live54-streamed-science-v17.json'
if live54stream.exists(): x['live54_streamed_scientific_support']={'supplement':str(live54stream),'packets':json.loads(live54stream.read_text())['packets']}
live54=out/'support-supplement-live54-rejudge-private-science-v16.json'
if live54.exists(): x['live54_rejudge_scientific_support']={'supplement':str(live54),'packets':json.loads(live54.read_text())['packets'],'exact_assignments_not_invented':True}
x['current_pending_source_actions_scope']='Only remaining source-action candidates, not a ledger or native closure assertion; prior source routes preserved as historical assignment evidence.'
(out/'all-native-support-routing.current.json').write_text(json.dumps(x,indent=2)+'\n')
print(json.dumps({'stage':state['stage'],'packs':x['native_packs'],'mapped':len(rows),'pending_science_unassigned_impact_candidates':[row['id'] for row in rows if row['id'] in needed_now and any(a['unassigned_impact_membership_candidate'] for a in row['assignments'])]}))
