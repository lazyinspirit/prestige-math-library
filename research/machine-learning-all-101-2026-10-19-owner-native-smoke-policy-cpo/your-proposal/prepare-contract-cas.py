from pathlib import Path
import json,shutil
P=Path(__file__).parent;R='machine-learning-all-101-2026-10-19'
for d in ['before/items','before/research','candidates/research','evidence']: (P/d).mkdir(parents=True,exist_ok=True)
rows=json.load(open(f'research/{R}-owner-step2-native-full-failures/smoke-failed-rows.json'));rows=[r for r in rows if r['batch'] in [84,90]];assert len(rows)==11
(P/'evidence/assigned-native-failures.json').write_text(json.dumps(rows,indent=2)+'\n')
for f in ['native-original.json','smoke-failed-rows.json']:shutil.copyfile(f'research/{R}-owner-step2-native-full-failures/{f}',P/'before/research'/f)
# Each excerpt is copied exactly from the current carrier, not synthesized from its contract prose.
specs={
'lem-policy-score-has-zero-conditional-mean':('ml101-policy-score-finite-support','normalized-action-support',r'$$\mathbb E_\theta[\psi_t\mid\mathcal H_t]=0\quad\text{almost surely for every }t\ge0.$$'),
'thm-policy-gradient-theorem':('ml101-policy-gradient-one-step','one-decision-bernoulli',r'$$\nabla_\theta J(\theta_0)=\mathbb E_{\theta_0}\!\left[\sum_{t=0}^{T-1}\gamma^t\,\nabla_\theta\log\pi_{\theta_0}(A_t\mid S_t)\,G_t\right].$$'),
'lem-action-independent-baseline-does-not-bias-policy-gradient':('ml101-policy-baseline-zero-mean','bernoulli-state-baseline',r'$$\mathbb E_{\theta_0}\!\left[\sum_{t=0}^{T-1}\gamma^t\bigl(G_t-b(S_t)\bigr)\nabla_\theta\log\pi_{\theta_0}(A_t\mid S_t)\right]=\nabla_\theta J(\theta_0).$$'),
'ex-actor-critic-bootstrap-can-bias-policy-update':('ml101-actor-critic-bootstrap-bias','zero-reward-two-step-critic',r'the true start-state objective is $J(\theta)=0$ for every $\theta$, but the expected first actor increment is $1/8$.'),
'ex-reinforce-one-step-bernoulli-mdp':('ml101-reinforce-bernoulli','one-decision-bernoulli',r'For every $\theta\in(0,1)$, $\mathbb E_\theta[Z]=\nabla_\theta J(\theta)=1$.'),
'ex-action-independent-baseline-eliminates-variance':('ml101-baseline-eliminates-variance','half-bernoulli-half-baseline',r'Then $Z$ has variance $1$, while $Z_b=(G_0-b(s))\nabla_\theta\log\pi_\theta(A_0\mid s)$ is identically $1$ and has variance $0$; both have expectation $1$.'),
'cex-policy-gradient-without-start-time-discount':('ml101-policy-start-time-discount-witness','two-step-half-discount',r'Hence the claimed right-hand side is $\theta(1/\theta)+(1-\theta)0=1\ne1/2$. Including the missing factor $\gamma^1$ changes this expectation to $1/2$, as required.'),
'ex-expected-discounted-cost-does-not-imply-pathwise-safety':('ml101-cpo-discounted-cost-pathwise','seven-independent-actions',r'Its expected discounted cost is $1/9<1/8$, so it is feasible, while the probability of at least one cost during those seven decisions is $5{,}217{,}031/10{,}000{,}000>1/2$.'),
'ex-empirical-cost-satisfaction-can-miss-population-violation':('ml101-cpo-safe-sample','ten-independent-rollouts',r'The true expected discounted cost is $1/10>b$. In ten independent one-step rollouts, the empirical mean cost is zero whenever every action is `safe`, an event of probability $(9/10)^{10}=3{,}486{,}784{,}401/10{,}000{,}000{,}000$.'),
'ex-exact-trust-region-and-sampled-line-search-disagree':('ml101-cpo-exact-versus-sample','one-row-safe-line-search',r'If a one-row rollout sample from the old policy observes `safe` and supplies zero baseline-cost and advantage estimates, the empirical line-search cost is zero and passes the threshold; this sample occurs with probability $99/100$.'),
'cex-arbitrary-baseline-bound-without-old-policy-residual':('ml101-cpo-old-residual-witness','identical-policy-zero-discount',r'The asserted lower inequality is $1\le0$, which is false by step 1.1. Subtracting the old-policy residual expectation instead gives the corrected surrogate $1-1=0$.'),
}
cas=[];guards=[];subjects=[]
for batch in [84,90]:
 path=f'research/{R}-batch-{batch}.proof-contracts.json';raw=Path(path).read_text();(P/'before'/path).write_text(raw);data=json.loads(raw)
 for row in [r for r in rows if r['batch']==batch]:
  id=row['id'];source=Path(f'items/{id}.md').read_text();(P/f'before/items/{id}.md').write_text(source)
  check,fixture,excerpt=specs[id];assert source.count(excerpt)==1,(id,excerpt)
  old=data['contracts'][id]['finite_smoke'];assert len(old)==1
  new=[dict(old[0],check=check,asserts=excerpt,fixture=fixture)]
  data['contracts'][id]['finite_smoke']=new
  cas.append({'path':path,'json_pointer':'/contracts/'+id+'/finite_smoke','id':id,'before':old,'after':new,'expected_exact_array_count':1})
  guards.append({'id':id,'source_path':f'items/{id}.md','before_snapshot':f'before/items/{id}.md','asserts':excerpt,'expected_count':1})
  subjects.append({'id':id,'smoke':new[0]})
 (P/'candidates'/path).write_text(json.dumps(data,indent=2)+'\n')
(P/'contract-array-cas.json').write_text(json.dumps(cas,indent=2)+'\n')
(P/'source-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
(P/'evidence/focused-subjects.json').write_text(json.dumps(subjects,indent=2)+'\n')
# Validate that every other JSON field, including the rest of each contract, is unchanged.
for batch in [84,90]:
 path=f'research/{R}-batch-{batch}.proof-contracts.json';before=json.loads((P/'before'/path).read_text());after=json.loads((P/'candidates'/path).read_text())
 for entry in [x for x in cas if x['path']==path]:after['contracts'][entry['id']]['finite_smoke']=entry['before']
 assert before==after
print('11 exact source guards and 11 finite_smoke array CAS entries; unrelated contract fields unchanged.')
