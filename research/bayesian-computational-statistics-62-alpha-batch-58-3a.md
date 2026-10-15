# Batch 58 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-58`.

The authoritative scope has no touched items, touched pages, reader findings or refuter findings. Decisions are therefore empty. The five ordered HIGH/CRITICAL risk reviews remain required. No carrier edits have been made.

## Level 2: estimator moments and MSE

Reviewed `lem-mlmc-estimator-moments-and-mse`, all four proof steps, its hierarchy definition and all three other direct supplier statements/proofs. Finite linearity and coupling marginals telescope; independent blocks eliminate covariance. Square integrability of corrections follows from (x-y)^2 <= 2x^2+2y^2. The L1 target only contributes its finite expectation. L=0, N=1, zero variances and deterministic corrections are valid. Contract citation excerpts agree with current source sections. Empty reader/refuter findings independently agree. Complete risk review recorded; no defect or repair.


## Level 3: complexity under rate assumptions

Checked all seven proof steps and both dependencies. Positive proxy bounds make S_L positive even if every actual variance vanishes. The level ceiling makes bias <= epsilon/sqrt(2); allocating ceilings of 2 epsilon^-2 S_L sqrt(v_l/c_l) gives variance <= epsilon^2/2. Integer rounding adds O(epsilon^-1/alpha), absorbed because alpha>=1/2. Checked beta>1, beta=1 and 0<beta<1 geometric sums, alpha=1/2 and sufficiently-small-epsilon nonnegative L. No lower bound or automatic rate validation is claimed. Complete risk review recorded; no defect or repair.

Source opened: Giles, *Multilevel Monte Carlo Path Simulation*, https://people.maths.ox.ac.uk/gilesm/files/opre.pdf, section 2 (PDF pp. 3–5) for telescope, independence and allocation; section 3 for the complexity theorem context. The local theorem explicitly assumes absolute bias.


## Level 4: autonomous all-moment Euler corollary

Reviewed all four steps and all six dependencies, including the full current HMS supplier proof, autonomous recursion/interpolation definition, Cauchy–Schwarz and AC. The common initial value and path preserve the Euler marginals. T<=1 puts both steps within the supplier range, and T/h_l=M^l is integral. Squared triangle inequality gives 2C(1+M)h_l; the Lipschitz payoff gives variance order one and bias order one-half. Fixed T permits level-zero rate constants. Work uses fixed dimension and unit-cost coefficient/payoff evaluation. AC is inherited through the supplier, with no additional choice in the rate calculation. Constant payoffs and L=0 are harmless. Complete risk review recorded; no defect or repair.

Source checked: Higham–Mao–Stuart, https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf, Assumptions 4.1/4.2 and Theorem 4.4, PDF pp.14–16, printed pp.1054–1056. The local supplier explicitly retains uniform all-moment bounds; the numerical moments are an assumption, not a consequence of the one-sided drift condition alone.


## Level 4: discontinuous-payoff example

Independently integrated the affine density: target mean 1/2+c/4 and level mean 1/2+c(1-h_l)/4. The paired crossing intervals yield p_l=(sqrt(M)-1)sqrt(h_l)/2 and correction mean c(M-1)h_l/4. The square-mean/crossing-probability ratio is <=c^2/4; the displayed inequality follows from s^3-s^2+s+1>0 for s=sqrt(M)>1. Thus variance is between 3p_l/4 and p_l. Checked c=1, h0=1, l=1, null interval endpoints, bounded level zero, and the required c>0 for exact bias order. Fresh pairs and independent blocks meet the definition. Constant-work evaluation satisfies the conservative h^-1 upper work bound, so the 5/2 exponent is a valid upper guarantee. Complete risk review recorded; no defect or repair.


## Level 6: finite-L2 strong and conditional weak corollary

Reviewed both proof steps, all five direct dependencies and the full current shared-Brownian and weak-order supplier proofs. Also read the finite-L2 strong-rate proof, uniform moment/increment proof and interpolation definition to verify integrability and level-zero uses. The finite-L2 branch retains global state Lipschitz/linear growth, half-Hölder time modulus and independent adapted initial data on the stipulated Brownian space. For l>=1, h_l<=1/M and both grids have integral step counts. The fixed level zero admits enlarged bias, variance and work constants; target integrability and all level L2 bounds follow from moments and the Lipschitz payoff.

The weak branch keeps bounded payoff, the backward equation, continuous mixed derivatives through two time and four space derivatives, polynomial growth and p>=2q+8 uniform moments. Checked the local supplier's Gaussian Taylor calculation: the one-step residual is bounded by Ch^2(1+|x|^(q+4)), its expectations are uniformly finite, and N=T/h steps give Ch. The exact-solution Itô argument has finite stochastic-integral energy under the stated moments. Checked q=0, constant payoff, and level zero. Strong and weak routes respectively use alpha=1/2 and alpha=1 with beta=1; both retain the logarithmic work bound. AC and unit-cost/fixed-dimension work assumptions pass through the exact suppliers. Complete risk review recorded; no defect or repair.

## Scope, evidence and disposition

Read `step3-scope-58.json`, `reader-58.md`, `reader-findings-58.json`, `refute-58.json`, the order task, pre/post hash snapshots, current batch manifest and relevant contract entries. All ten item/contract/manifest snapshot entries and both page snapshot entries agree between pre and post. All ten current raw item hashes match the post snapshot. There is no reader repair to accept, amend or revert, and no owed touched/page/reader/refuter decision; the decisions array is empty.

Changes are confined to the five risk-review fields in the owning proof contract and the task-named report/decisions files. No Statement, Definition, proof, manifest or page was edited. No defect was confirmed, no repair confidence is claimed, and no defect-ledger row was created. No defective published supplier was found in the reviewed uses, so the published ledger and lock were not needed. The frontier dependency ledger has no MLMC entry requiring an update; no consumer interface changed or withdrawal was proposed.

The review checks the routed current claims and their actual direct suppliers, with the extra Euler prerequisites identified above. It does not claim a recursive audit of the entire foundational probability/SDE closure. Local proof arguments supply the conclusions; the external sources are corroborating evidence. No substantial prerequisite uncertainty or mathematical blocker remains. Engine-owned stamping, judging and gate batteries were not initiated.

## Local checks

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-58.proof-contracts.json`: passed, 0 errors, 10 items routed; identified the five required reviews before completion.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-58.proof-contracts.json --strict`: passed, 0 errors, 0 warnings, 10/10 items checked.
- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-58.proof-contracts.json --require-reviewed`: passed, 0 errors, all five HIGH/CRITICAL reviews complete.
- Pre/post snapshot comparison: all item/contract/manifest entries and page entries equal; current raw item hashes all match post-reader snapshots.
- No item edits or formatter were needed; proof-layout and precheck were therefore not run. The engine retains all final hash and gate obligations.

All routed work is complete. Decisions: zero owed, zero emitted. Blockers: none.
