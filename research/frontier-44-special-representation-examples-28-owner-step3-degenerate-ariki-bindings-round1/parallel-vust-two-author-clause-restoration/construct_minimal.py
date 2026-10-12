from pathlib import Path
import json,hashlib,datetime,re
OUT=Path('research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1/parallel-vust-two-author-clause-restoration')
BASE=OUT.parent
ID='thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer'
TARGET=Path('items')/(ID+'.md');CLASS=BASE/'sealed-independent-chunks/vust-two-author-clause-authenticated-history-first1.json'
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
classification=json.loads(CLASS.read_text());before=TARGET.read_text()
assert sha(TARGET)=='2bed35aac6da1edfa4dbabe90b9b6fcc9569b9e252c6d3271d2e05eb9aeef73c'
for g in classification['guarded_inputs']:assert sha(g['path'])==g['sha256'],g['path']
old1=r'$A$ is the centralizer algebra $\{X:Xe=eX\}$; in a Jordan-string basis it is a direct product of matrix algebras indexed by the equal string lengths, and it is generated as a vector space by the powers $e^0,\dots,e^{l-1}$ on each string.'
new1=r'$A=\operatorname{End}_{\mathbb C[e]}(V)=\{X:Xe=eX\}$ is the full associative centralizer algebra, with multiplication given by composition. For a Jordan-string decomposition $V=\bigoplus_\alpha R_\alpha$, $R_\alpha=\mathbb C[t]/(t^{p_\alpha})$ with $t$ acting as $e$, its $(\alpha,\beta)$ block is $\operatorname{Hom}_{\mathbb C[t]}(R_\beta,R_\alpha)$, of dimension $\min(p_\alpha,p_\beta)$: a homomorphism is determined by the image of $1$, which must be killed by $t^{p_\beta}$. Thus all off-diagonal string-homomorphism blocks, including those between unequal lengths, are retained. The algebra need not be semisimple: for a single string of length $2$ it is $\mathbb C[t]/(t^2)$, with nonzero radical $(t)$.'
old2=r'Conversely every element of $\psi(B)$ commutes with the individual $e$-operators and with the place permutations, hence with the diagonal $A$-action.'
new2=r'Conversely every element of $\psi(B)$ commutes with the diagonal $A$-action: for $a\in A$ put $\Delta_d(a)=\sum_{k=1}^d a^{(k)}$; each individual $e^{(j)}$ satisfies $[\Delta_d(a),e^{(j)}]=[a,e]^{(j)}=0$, and each place permutation $P_\sigma$ satisfies $P_\sigma\Delta_d(a)P_\sigma^{-1}=\Delta_d(a)$. These operators generate $\psi(B)$, so their products and linear combinations also commute with every $\Delta_d(a)$.'
assert before.count(old1)==before.count(old2)==1
after=before.replace(old1,new1).replace(old2,new2)
assert after.replace(new1,old1).replace(new2,old2)==before
assert before.split('## Statement\n')[1].split('## Facts & Assumptions')[0]==after.split('## Statement\n')[1].split('## Facts & Assumptions')[0]
(OUT/'authentic-target-before.md').write_bytes(TARGET.read_bytes());PROPOSAL=OUT/(ID+'.md');PROPOSAL.write_text(after)
manifest=Path('research/frontier-44-special-representation-examples-28-batch-17.pages.json');pages=json.loads(manifest.read_text())
selected=[(page,item) for page in pages for item in page['items'] if item['id']==ID];assert len(selected)==1
page,row=selected[0]
NOTE=Path('research/frontier-44-special-representation-examples-28-owner-category-o-batch17-vust-local-proof.md');note=NOTE.read_text()
section1=note.split('## 1.')[1].split('## 2.')[0];section5=note.split('## 5.')[1].split('## 6.')[0]
assert 'A=End_{C[e]}V=g^e as an associative vector algebra' in section1
assert 'Evaluating at e gives only permutation×individual e powers' in section5
assert 'A=End_{C[e]}V=g^e as an associative vector algebra' in row['strategy']
(OUT/'accepted-local-sections1-and5-authenticated.md').write_text('## Authenticated accepted local Section 1\n'+section1+'\n## Authenticated accepted local Section 5\n'+section5)
hashrow=lambda row:hashlib.sha256(json.dumps(row,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
native={'version':1,'target':str(manifest),'manifest_before_raw_sha256':sha(manifest),'selected_page':page['id'],'selected_id':ID,'selected_entry_before':row,'selected_entry_after':row,'selected_before_sha256':hashrow(row),'selected_after_sha256':hashrow(row),'strategy_disposition':'Accepted original strategy authenticated against immutable local Sections1/5; already correct and intentionally unchanged. No native metadata edit required for this exact two-clause restoration.','installed':False}
(OUT/'selected-native17-strategy-authentication.json').write_text(json.dumps(native,indent=2,ensure_ascii=False)+'\n')
record={'version':1,'run':classification['run'],'id':ID,'reviewer':'/root/repair_klr_global_basis','constructor':'/root/construct_whittaker_format','kind':'AUTHENTICATED_DISTINCT_VUST_TWO_CURRENT_AUTHOR_CLAUSE_RESTORATION_FIRST1','restoration_round':1,'maximum_rounds':2,'classification_source':{'path':str(CLASS),'sha256':sha(CLASS)},'before':{'path':str(TARGET),'sha256':sha(TARGET),'authentic_archive':str(OUT/'authentic-target-before.md'),'archive_sha256':sha(OUT/'authentic-target-before.md')},'proposal':{'path':str(PROPOSAL),'sha256':sha(PROPOSAL)},'exact_replacements':[{'location':'Facts & Assumptions F1','before':old1,'after':new1},{'location':'Proof1.2 converse sentence','before':old2,'after':new2}],'exact_inverse_restores_before':True,'statement_deps_frontmatter_all_other_proof_bytes_preserved':True,'old_resolved_normality_fde_jk_repairs_untouched':True,'accepted_local_note_guard':{'path':str(NOTE),'sha256':sha(NOTE)},'selected_native_strategy_authentication':{'path':str(OUT/'selected-native17-strategy-authentication.json'),'sha256':sha(OUT/'selected-native17-strategy-authentication.json')},'authenticated_inputs':classification['guarded_inputs'],'math_scope':'Only the exact two authenticated transcription clauses; no whole-proof rebuild or unflagged mathematical audit.','same_original_reviewer_owns_acceptance_and_consumers':True,'source_reading':'Actual canonical target plus accepted immutable local note read; Sections1/5 authenticated and copied; no new external source-reading claim.','native_canonical_control_cap_gate_writes':False,'compaction':{'limit':500000,'scope':'total','existing_config_verified':True},'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
(OUT/'guarded-minimal-first1-proposal.json').write_text(json.dumps(record,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'proposal':str(PROPOSAL),'before_sha256':sha(TARGET),'after_sha256':sha(PROPOSAL),'classification_sha256':sha(CLASS)}))
