from pathlib import Path
from fractions import Fraction
from itertools import product
import hashlib,json,re,subprocess,datetime
base=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-statistics')
def h(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def write(name,obj):(base/name).write_text(json.dumps(obj,indent=2)+'\n')
ids=['pthm-fd-conditional-fluid-filter-law','rem-fd-fluid-sobol-interface']
read_ids=ids+['def-fd-fluid-coefficient-observation-model','prop-fd-linear-fluid-filter-interface','post-fd-fluid-observation-and-noise','lem-fd-finite-modal-field-has-finite-second-moment','thm-kalman-filter-is-exact-posterior','def-linear-gaussian-state-space-model-with-independent-noises','def-state-space-filtering-laws','alg-pick-freeze-monte-carlo-sobol-estimators','thm-pick-freeze-sobol-ratio-joint-clt-and-mcse','def-first-and-total-sobol-indices','def-product-hoeffding-anova-components','def-product-coordinate-projections','thm-pick-freeze-sobol-covariance-identities','ex-fd-symbolic-single-sensor','def-fd-random-velocity-sensor-law','lem-fd-sensor-pairing-is-well-defined','def-fd-quantity-and-frame-conventions','def-moments-variance-and-covariance','alg-kalman-filter','thm-product-hoeffding-anova-decomposition','def-axiom-of-choice']
pins={r['path']:r['sha256'] for r in json.loads(Path('research/math-imports.json').read_text())['files']}
write('source-reading.json',{'scope':'Full current local carriers read, including complete claims and supplied proofs. No external PDF full text retrieved in this assignment. No audit of recursive imported dependency closure is claimed.','inputs':[{'path':f'items/{id}.md','raw_sha256':h(f'items/{id}.md'),'read':'full carrier','imported':f'items/{id}.md' in pins,**({'pin_sha256':pins[f'items/{id}.md'],'pin_matches':h(f'items/{id}.md')==pins[f'items/{id}.md']} if f'items/{id}.md' in pins else {})} for id in read_ids]})
judges=[json.loads(l) for l in Path('research/fluid-dynamics-all-47-2026-10-23-judge.jsonl').read_text().splitlines() if json.loads(l).get('id') in ids]
write('actual-judge-observations.json',{'source':'research/fluid-dynamics-all-47-2026-10-23-judge.jsonl','rows':judges,'note':'Exact observed rows only; journal remains engine-owned.'})
entries=[{'subject':ids[0],'consumer':'ex-fd-symbolic-single-sensor','relationship':'direct physical-result dependency and F4/Verification 3.1 use','decision':'unaffected','raw_sha256':h('items/ex-fd-symbolic-single-sensor.md'),'reason':'Read full Example and Verification. One-mode a maps to ae; its sensor response is H=1, forecast P>=0, innovation P+R>0 because R>0, q=0 is permitted singular Gaussian, and independent prior/noise and AC are explicit. Abstract coefficient realization reproduces this same scalar update and physical pushforward. Physical theorem Statement and physical scope remain byte-identical.'}, {'subject':ids[0],'consumer':'fd-pda01','relationship':'page placement','decision':'unaffected','path':'library/fluid-dynamics/fd-pda01.md','raw_sha256':h('library/fluid-dynamics/fd-pda01.md'),'reason':'Read complete compact page; inventory only, empty body. Proof-only target proposal changes no page claim or inventory.'},{'subject':ids[0],'consumer':'fd-pda01-examples','relationship':'placement of direct example consumer','decision':'unaffected','path':'library/fluid-dynamics/fd-pda01-examples.md','raw_sha256':h('library/fluid-dynamics/fd-pda01-examples.md'),'reason':'Compact page has inventory only, empty body. Scalar example and its interface need no change.'},{'subject':ids[1],'consumer':'fd-st02','relationship':'page placement','decision':'unaffected','path':'library/fluid-dynamics-mathematics/fd-st02.md','raw_sha256':h('library/fluid-dynamics-mathematics/fd-st02.md'),'reason':'Read complete compact page, inventory only and empty body; the clarified zero-denominator branch creates no contradictory page prose.'}]
write('consumer-use-matrix.json',{'version':1,'reviewer':'/root/fluid_step4_statistics','search':'rg -n target IDs and ex-fd-symbolic-single-sensor over all physics/items and physics/library Markdown; all target aliases lists are absent (no alternate target IDs)','filter_public_interface_changed':False,'sobol_remark_claim_changed':True,'sobol_item_consumers':[],'filter_indirect_item_consumers':[],'entries':entries,'reading_limits':'No unrelated item audit; propagation is actual target uses and closure of the one direct example, whose ID has no further item uses.'})
failed=returned=0;rsum=Fraction()
for b in product((0,1),repeat=12):
 x,xp,u,v,w,wp,x2,xp2,u2,v2,w2,wp2=b
 nmean=Fraction(x*x-u*v+x2*x2-u2*v2,2)
 dmean=Fraction((w-wp)**2+(w2-wp2)**2,4)
 if not dmean:failed+=1
 else:returned+=1;rsum+=nmean/dmean
write('finite-witness-check.json',{'method':'Exact enumeration of all 2^12 equally likely two-row Bernoulli draws, with Fraction arithmetic; unused X-prime draws retained. This is an arithmetic check, not empirical data.','sample_points':2**12,'zero_denominator_count':failed,'positive_denominator_count':returned,'zero_denominator_probability':str(Fraction(failed,2**12)),'conditional_returned_ratio_expectation':str(rsum/returned),'claimed_true_index':'1'})
assert Fraction(failed,2**12)==Fraction(1,4) and rsum/returned==Fraction(5,6)
paths=[str(base/'proposals'/f'{id}.md') for id in ids]
commands=[['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*paths],['node','tools/physics-support/proof-layout.mjs',*paths],['node','tools/physics-support/rendercheck.mjs',*paths,'--json'],['git','apply','--check',str(base/'proposal.patch')]]
checks=[]
for cmd in commands:
 r=subprocess.run(cmd,capture_output=True,text=True)
 checks.append({'command':cmd,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr})
 assert r.returncode==0,checks[-1]
write('draft-checks.json',{'scope':'Unapplied final research drafts only; no native gate, recertification or scientific acceptance','proposal_hashes':{p:h(p) for p in paths},'checks':checks})
for id in ids:
 assert Path('items/'+id+'.md').read_bytes()==(base/'before'/f'{id}.md').read_bytes()
 print(id,h('items/'+id+'.md'),h(base/'proposals'/f'{id}.md'))
