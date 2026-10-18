import pathlib,json,collections,re,hashlib,copy
R='non-ml-math-remaining-81-2026-10-18';O=pathlib.Path('research/'+R+'-owner-step3-attempt2-boundary-history');P=pathlib.Path('research/'+R+'-owner-step3-attempt2-boundary-diagnostics/current-nonstrict-diagnostic.json');D=json.load(open(P));I=json.load(open(O/'prior-row-review-index.json'));idx=collections.defaultdict(list)
for n,x in enumerate(I['rows']):idx[(x['id'],x['case'])].append((n,x))
rows={(x['id'],x['case']):x for x in json.load(open('/tmp/boundary-history-currency.json'))};candidates={};
for j,t in enumerate(D['templates']):
 for r in t['rows']:
  k=(r['id'],r['case']);candidates.setdefault(k,{'id':k[0],'case':k[1],'template_clusters':[],'contradicted':[]})['template_clusters'].append(j)
for x in D['contradicted']:
 k=(x['id'],x['case']);candidates.setdefault(k,{'id':k[0],'case':k[1],'template_clusters':[],'contradicted':[]})['contradicted'].append(x)
CASES=['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']
def norm(t,i):
 t=re.sub(r'"[^"]*"|“[^”]*”|`[^`]*`|\$[^$]*\$','<QUOTE>',str(t))
 t=t.replace(i,'<ID>')
 for c in CASES:t=t.replace(c,'<CASE>')
 return re.sub('[^a-z<>]+',' ',t.lower()).strip()
def core(x):return (x.get('case'),x.get('status'),x.get('reason',x.get('evidence','')))
def anchorcore(x):
 c,s,t=core(x);t=re.sub(r'\b[Pp]roof\s*(?:step\s*)?(\d+\.\d+)',r'Proof step \1',t);return(c,s,t)
def choose_reason(x):
 p=x['proposed'];v=p.get('template_review');
 if isinstance(v,dict) and len(v.get('reason','').strip())>=40:return v['reason'],'existing-prior-specific-template-review'
 v=x.get('case_evidence')
 if isinstance(v,str) and len(v.strip())>=40:return v,'prior-explicit-case-evidence'
 if isinstance(v,dict):
  for k in ['actual_item_case_reason','current_case_reason','analysis','mathematical_case_review','actual_review','mathematical_review','comparison']:
   if isinstance(v.get(k),str) and len(v[k].strip())>=40:return v[k],'prior-case-evidence.'+k
 t=p.get('reason',p.get('evidence',''))
 return (t,'prior-reviewed-case-disposition') if len(t.strip())>=40 else (None,'no-sufficient-specific-prior-reason')
assessments=[];proposals=[];remaining=[];already=[]
for k,c in candidates.items():
 current=rows[k]['current_row'];c['current_row']=current
 if c['template_clusters'] and rows[k]['already_valid_template_review'] and not c['contradicted']:already.append(c);continue
 available=idx[k];attempts=[];choice=None
 for n,x in available:
  b=x['source_basis'];reason,basis=choose_reason(x)
  compatibility='exact-current-prior-proposed-row' if core(current)==core(x['proposed']) else 'only-proof-anchor-spacing-current-prior-proposed-row' if anchorcore(current)==anchorcore(x['proposed']) else 'exact-current-prior-original-row-restore-reviewed-disposition' if isinstance(x.get('old'),dict) and core(current)==core(x['old']) else None
  attempts.append({'prior_index':n,'domain':x['domain'],'source_identity_eligible':b['eligible'],'source_identity_failure':b.get('failure'),'row_compatibility':compatibility,'reason_basis':basis})
  if b['eligible'] and compatibility and reason and x['read_records']:
   # A contradicted checked-row anchor is not resolved by restoring an old annotation.
   if c['contradicted'] and x['proposed'].get('status')=='checked' and compatibility.startswith('exact-current-prior-proposed'):continue
   choice=(n,x,reason,basis,compatibility);break
 c['prior_evidence_assessments']=attempts
 if choice:
  n,x,reason,basis,compat=choice;proposed=copy.deepcopy(current if 'restore-' not in compat else x['proposed'])
  v=x['proposed'].get('template_review',{});by=v.get('by')
  if not by:
   e=x.get('case_evidence');by=e.get('reviewer') if isinstance(e,dict) else None
  if not by:
   aa=json.load(open(x['patch_file']));by=next((aa[q] for q in ['by','reviewer','agent','owner'] if isinstance(aa,dict) and isinstance(aa.get(q),str)),None)
  by=by or 'Prior Step2 owner recorded in '+x['patch_file']
  if c['template_clusters']:proposed['template_review']={'upheld':True,'by':by,'reason':reason}
  if c['contradicted'] and current.get('status')=='not_applicable':
   priorreview=x['proposed'].get('reviewed')
   if not isinstance(priorreview,dict) or not priorreview.get('upheld'):
    remaining.append({**c,'domain':x['domain'],'remaining_reason':'Contradiction candidate lacks an explicit prior regex-disposition review; no new mathematics was read.'});continue
   proposed['reviewed']={q:val for q,val in priorreview.items() if q not in ['item_sha256','row_sha256']}
  # No current/final seals are supplied; root binds required annotation hashes.
  for ann in ['template_review','reviewed']:
   if isinstance(proposed.get(ann),dict):proposed[ann].pop('item_sha256',None);proposed[ann].pop('row_sha256',None)
  proposals.append({'id':k[0],'case':k[1],'domain':x['domain'],'original':current,'proposed':proposed,'historical_evidence':{'prior_index':n,'prior_patch_file':x['patch_file'],'prior_patch_index':x['patch_index'],'prior_owner_attribution':by,'read_records':[{'file':v['file'],'record_index':v['record_index']} for v in x['read_records']],'source_basis':x['source_basis'],'row_compatibility':compat,'specific_reason_basis':basis,'claim':'Prior actual case review carried over only; no new mathematical reading or acceptance.'}})
 else:
  domain=available[0][1]['domain'] if available else 'outside-original-Step2-boundary-worklist'
  if domain=='outside-original-Step2-boundary-worklist':
   # Group using current manifest ownership; not a new scope assignment.
   domain='unmapped'
  remaining.append({**c,'domain':domain,'remaining_reason':'No supported source identity and exact prior row/disposition compatibility with an actual prior item review.'})
 assessments.append(c)
# Strict reasons must not introduce cross-item review boilerplate. Account for existing current reasons plus replacements.
allreasons=collections.defaultdict(set);replacement={(x['id'],x['case']):x for x in proposals}
for k,r in rows.items():
 p=replacement[k]['proposed'] if k in replacement else r['current_row'];s=p.get('template_review',{}).get('reason')
 if isinstance(s,str):allreasons[norm(s,k[0])].add(k[0])
retained=[]
for p in proposals:
 reason=p['proposed'].get('template_review',{}).get('reason')
 if reason and len(allreasons[norm(reason,p['id'])])>=3:
  c=candidates[(p['id'],p['case'])];remaining.append({**c,'domain':p['domain'],'remaining_reason':'Prior reason itself normalizes to review boilerplate across at least three items; no automatic uphold.','proposed_prior_evidence':p['historical_evidence']})
 else:retained.append(p)
proposals=retained
# Current manifest batch groups for exact remaining delegation, including rows outside old worklists.
owners={}
for p in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 m=re.search(r'-batch-(\d+)\.pages',p.name)
 if not m:continue
 a=json.load(open(p));a=a if isinstance(a,list) else a.get('pages',[])
 for page in a:
  for x in page.get('items',[])+page.get('examples',[]):owners[x if isinstance(x,str) else x['id']]=int(m.group(1))
domainbatches={x['domain']:set() for x in I['rows']}
for x in I['rows']:
 if x['id'] in owners:domainbatches[x['domain']].add(owners[x['id']])
for x in remaining:
 x['batch']=owners.get(x['id']);x['source']='items/'+x['id']+'.md'
 if x['domain']=='unmapped':x['domain']=next((d for d,bs in domainbatches.items() if x['batch'] in bs and d!='hall-cycle2'),'outside-original-Step2-boundary-worklist')
grouped=collections.defaultdict(list)
for x in remaining:grouped[x['domain']].append(x)
summary={'run':R,'native_original_output':'research/'+R+'-owner-step3-native-battery-attempt2/boundary-audit.full-stdout','native_original_bytes':146176,'native_original_qualification':'Native checker exited before its large pipe JSON output flushed. Original truncated bytes are retained unchanged; no complete historical JSON is claimed.','current_candidate_diagnostic':str(P),'diagnostic_qualification':'Root-created explicit current NONSTRICT diagnostic, stdout to a regular FD; no stage/gate credit. This is distinct from the original truncated native output.','diagnostic_summary':D['summary'],'unique_candidate_rows':len(candidates),'already_current_valid_review_rows':len(already),'supported_carryover_proposals':len(proposals),'remaining_rows':len(remaining),'remaining_by_domain':{k:len(v) for k,v in grouped.items()},'no_new_math_review_claim':True,'no_canonical_native_or_gate_writes':True,'no_final_annotation_seals':True}
(O/'reconciliation-summary.json').write_text(json.dumps(summary,indent=2)+'\n');(O/'guarded-annotation-proposals.json').write_text(json.dumps({'integration':'Guard exact original full row and current raw source; preserve historical attribution. Root must bind itemHashGuard and exact resulting row hashes; no final seals are provided.','proposals':proposals},indent=2,ensure_ascii=False)+'\n');(O/'remaining-source-row-review.json').write_text(json.dumps({'run':R,'groups':dict(grouped)},indent=2,ensure_ascii=False)+'\n');(O/'candidate-evidence-assessment.json').write_text(json.dumps({'run':R,'already_current_valid':already,'assessments':assessments},indent=2,ensure_ascii=False)+'\n');print(json.dumps(summary,indent=2))
