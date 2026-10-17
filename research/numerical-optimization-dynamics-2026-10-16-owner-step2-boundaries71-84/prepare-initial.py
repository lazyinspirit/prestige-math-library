from pathlib import Path
import json,copy,difflib
R='numerical-optimization-dynamics-2026-10-16';B=Path(__file__).resolve().parent;ROOT=B.parents[1]
changes={
72:{
'lem-positive-definite-model-has-unique-newton-step':{
'zero':('checked','Proof step 1.2 returns the feasible p=0 before nonzero-gradient dogleg branches when g=0; step 1.1 gives the unique solution of Bp_N=-g even for zero g.'),
'endpoints':('checked','Proof step 1.2 includes the feasible Newton equality ||p_N||=Delta and Cauchy boundary ||p_C||=Delta; step 2.1 treats only the remaining strict inequalities and proves the root t lies strictly between 0 and 1.')},
'thm-trust-region-epsilon-iteration-complexity':{
'endpoints':('checked','The Statement includes epsilon=1 and excludes epsilon=0. Proof steps 1.1 and 1.2 use 0<epsilon<=1 to compare r_epsilon with c_R epsilon; step 2.2 applies the same inclusive range in the logarithmic trial bound.')},
'thm-adaptive-cubic-regularization-epsilon-complexity':{
'degenerate':('checked','The Statement allows L=0 and explicitly takes R=0 when sigma_min>=3L. Proof step 2.1 divides only by a quantity bounded below by 1-kappa_theta>0; positive sigma_min keeps C_g and D_g positive in both complexity branches.')}},
73:{
'lem-saga-estimator-and-table-recurrence':{
'zero':('checked','For x_k=x* and alpha_i^k=grad f_i(x*), the maintained mean in proof step 1.1 is zero because grad F(x*)=0; steps 2.1 and 2.2 give v_k=0 and S_k=0, and step 4.1 preserves the zero table error.'),
'degenerate':('checked','The centered stationary table is admissible: proof step 2.2 sets every g_i and h_i to zero, so v_k and its squared norm vanish; step 4.1 gives zero next table error without a positive-variance assumption.'),
'nonempty-choice':('checked','The Facts A1 and Given assume AC for the conditional-expectation classes. Proof step 2.1 applies the independent uniform-index and finite-sum rules, while step 4.1 averages the one-entry replacement; no nonexistent intermediate proof label is needed.')},
'thm-saga-constant-step-memory-capped-linear-contraction':{
'one':('checked','The Statement permits n=1. Proof step 1.2 then gives 0<delta<=1/7<1, and step 4.1 compares the single-table coefficient with the same capped delta.'),
'endpoints':('checked','The Statement includes eta=1/(10L). Proof step 3.1 makes the gap coefficient -2 eta+20L eta^2 equal zero at that endpoint; step 5.1 starts with equality at k=0 and substitutes this same maximal step size. The minimum used in step 4.1 includes the tie mu eta=1/(7n).'),
'nonempty-choice':('checked','The Statement and Facts A1 assume AC for conditional expectations. Proof step 2.1 explicitly uses finite-time moments from the Given finite-history construction; step 5.1 applies the tower property to the resulting integrable quantities and makes no almost-sure claim.')}}}
ops=[]
for n,items in changes.items():
 rel=Path('research')/f'{R}-batch-{n}.proof-contracts.json';raw=(ROOT/rel).read_bytes();old=json.loads(raw);new=copy.deepcopy(old)
 for id,cases in items.items():
  for case,(status,text)in cases.items():
   row=next(r for r in new['contracts'][id]['boundaries']if r['case']==case);before=copy.deepcopy(row);row['status']=status;row.pop('reason',None);row['evidence']=text;ops.append({'batch':n,'id':id,'case':case,'before':before,'after':copy.deepcopy(row)})
 for prefix,content in [('before',raw),('proposed',(json.dumps(new,indent=2,ensure_ascii=False)+'\n').encode())]:
  p=B/prefix/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(content)
 diff=''.join(difflib.unified_diff(raw.decode().splitlines(True),(json.dumps(new,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile=str(rel),tofile=str(rel)+' (proposed)'));(B/f'batch-{n}.diff').write_text(diff)
(B/'initial-operations.json').write_text(json.dumps({'canonical_writes':False,'operations':ops,'limits':'Boundary rows only; derivations, quotes and finite-smoke entries preserved. These are specific worksheet source anchors, not new mathematical acceptance.'},indent=2)+'\n')
print(len(ops),'boundary operations prepared')
