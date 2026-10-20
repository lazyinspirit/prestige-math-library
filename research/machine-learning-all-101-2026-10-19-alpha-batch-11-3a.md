# Batch 11 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-11`. Only batch 11 is writable; published suppliers remain read-only. No agents, judges, stamps or workflow transitions invoked.

## Completed dependency levels 0 and 1

`lem-finite-independent-sign-sum-tail`: Checked the two-point tilted variance 4p(1-p)/(pe^s+(1-p)e^-s)^2 <= 1, integration for both signs of s, finite nonnegative Borel MGF factorization and Markov with lambda=t/V. Degenerate p=0,1, V=0 and m=0 are covered. Exact log/exp, expectation, independence and union-bound supplier statements satisfy each use. Choice-free. Reader changed only bibliographic text; Appendix B.2 is correct, but the full cited passage is physical/printed pp.33–38, not 32–37; locator amended without changing mathematics.

`lem-gaussian-normal-prior-posterior`: Checked positive prior/likelihood densities with sigma>0, finite conditional product likelihood, square-completion coefficients n/(sigma^2+n) and sigma^2/(sigma^2+n), measurable normalized density kernel and Tonelli identity on Borel rectangles. Independent labels contribute only 2^-n; n=0 retains the prior. Density supplier requires positive definite covariance and AC, both explicitly supplied; Tonelli uses finite Euclidean Lebesgue spaces, which are sigma-finite.

`lem-gaussian-vector-norm-concentration`: Checked scalar Gaussian square and linear MGFs by substitution/completing squares, finite Borel MGF factorization and log integral estimate. Substitution lambda=sqrt(r)/(sqrt(d)+2sqrt(r)) gives exponent exactly -r; the norm threshold dominates d+2sqrt(dr)+2r. Coordinate/projection bounds use unit vectors, sigma>0 and AC. t=s=0 give bound 1; d=1 excluded only from final log consequence; for d>=2, 2/d^3<=1/d.

`lem-bernoulli-coordinate-posterior-odds-bound`: Checked finite Bayes factorization of the uniform product prior and coordinate likelihoods, all positive since tau<=1/4. Exact odds exponent sum_i y_i x_ij; a_tau<=40tau/9<5tau by integral. Conditional sign-tail t=sqrt(2n log(2d/delta)), finite union and prior average give simultaneous event; n<=tau^-2 and log2>1/2 imply 2tau n+t<=3t. n=0 gives zero log odds. Supplier domains and choice-free use checked. Bibliographic range amended to physical/printed pp.33–38; no Statement change.

`lem-common-shift-robust-risk-lower-bound`: Checked Borel f ensures f(Z) measurable and independent of balanced Y. Explicit perturbation -Y mu is admissible including epsilon=0 and equality norm(mu)=epsilon. It produces Z and measurable loss of expectation 1/2. Every measurable majorant of robust loss bounds that loss pointwise, so monotonicity followed by infimum proves outer-risk bound; no measurable supremum or selection is assumed. All three exact supplier statements match; choice-free.

`lem-gaussian-sample-mean-signal-alignment`: Checked each class-weighted observation has N_d(theta,sigma^2 I) by conditional scalar characteristic functions, uniqueness and Cramer–Wold under AC. Borel transformations preserve independent sample structure; mean noise has covariance sigma^2 I/n. Norm and lower projection tails give strict positive numerator, nonzero W, and alignment strictly above target on the good event; stated <= bad event is therefore bounded. n=d=1, W=0 fallback and both failure exponents checked; union bound dominates the asserted exponent.

Historical reader delta: complete authenticated preimages at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` differ from current reader-post sources only in source titles and Statement references. Pre/post contract and manifest hashes agree. Two touched obligations are amended repairs: retain B.2 and correct its PDF page range to 33–38. Mathematics unchanged. Exact primary evidence: https://arxiv.org/pdf/1804.11285v2, B.2 heading and Lemma 29 on physical p.33, Theorem 31 on p.35, proof ending p.38 (PDF zero-based indices 32,34,37).

Initial risk-report succeeded and routed 13 HIGH/CRITICAL items; all reviews are completed below.

## Completed dependency level 2

`cor-one-sample-natural-classification-error-gaussian-mixture`: Checked n=1 alignment and signed test-margin N(c,sigma^2) for fixed trained direction; zero-score tie error is bounded by margin<=0. beta>=1/2 uses centered normal symmetry, while beta<1/2 uses L>log2>1/2 and 2(2+4sigma)^2 sigma^2 L<d under stated noise restriction. AC and fixed norm sqrt(d) propagate. Gaussian density gives zero probability W=0; fallback and possibly vacuous negative probability lower bound do not invalidate result.

`thm-architecture-dependent-robustness-binary-feature-model`: Checked both branches and all ten steps. Sample restriction implies n<tau^-2, B<=.3 epsilon gamma/tau<1 and a=2tau B<=.6 epsilon gamma<1. Posterior factorization implies independent fresh signed coordinates; finite coordinatewise coupling dominates by signs of mean a. Decomposition into Bernoulli mass plus conditional symmetric signs gives probability >=(1-gamma)/2, including a=0 and w=0. Explicit perturbation makes strictly negative margin when epsilon>0; epsilon=0 forces n=0 and balanced-label error 1/2. Product event bound >=1/2-gamma checked. Upper branch uses finite sign tails, mean margin 2tau<u,theta>, norm-one coefficients, tau endpoint 1/2 and strict epsilon<1 threshold invariance. All supplied interfaces and exact AC-free finite uses checked; no procedure property asserted as instructions.

`thm-robust-sample-lower-bound-gaussian-mixture`: Checked entire seven-step Borel/outer-risk argument: class-weighted independent Gaussian observations and independent labels fit posterior lemma; shifted error indicator at -Ym(S) is admissible on ||m||infty<=epsilon. Joint Borel F ensures measurable parameter-integrated H via finite labels and sigma-finite Gaussian density integration/Tonelli. Every outer-risk majorant dominates H; conditional residual is centered Gaussian independent of fresh label after multiplying by sign, giving error exactly 1/2. Mean covariance n/(sigma^2+n) I and tail substitution sqrt(n)/sigma verified. n=0 and epsilon=0 handled without division; d=1 excluded only from log consequence. AC, sigma>0 and posterior covariance positivity preserved.

`thm-robust-sample-upper-bound-gaussian-mixture`: Checked alignment event has nonzero W, positive scaling preserves classifier, signed margin normal law, and robust loss has measurable margin<=epsilon||u||1 majorant under closed threat/tie convention. Cauchy–Schwarz bounds ||u||1<=sqrt(d); margin threshold yields exp tail <=beta. Constants checked with D=d^(1/4)>=1, k=sqrt(2log100)<4, A_n monotonicity, 47/(136D)>1/(4D) and second branch A_n>=32epsilon/11. n>=1, sigma>0, equality at radius endpoints and vacuous insufficient-radius premise covered. AC inherited exactly from Gaussian suppliers.

No level-2 repair or unmet prerequisite found.

## Completed dependency level 3

`ex-bernoulli-perturbations-preserve-signs`: Checked all support-point coordinates: x_j=+1 gives x_j+delta_j>=1-epsilon>0, x_j=-1 gives <=-1+epsilon<0. Thus T(x+delta)=x for all perturbations and epsilon=0 included; epsilon=1 is correctly excluded. Finite-domain g and Borel T ensure measurability; robust loss equals the natural-error indicator on finite support, so ordinary and outer integrals agree. tau=1/2 and any finite g covered; one-sample guarantee matches theorem upper branch. All supplier facts checked, no choice and no diagram needed.

`ex-gaussian-robust-risk-dimension-radius-scaling`: Confirmed refuter:11:1: original unqualified learner quantifier and F2 omit essential joint Borel hypothesis from lower-bound supplier; outer expectation alone does not extend its stated classifier domain. Repaired Example and F2 to Borel F on sample-times-test space and made prior outer-expectation convention explicit. Checked sigma^2=sqrt(d)/1024 and epsilon^2=1/16 yield denominator 131072 log d; upper sufficient n>=64 epsilon^2 sqrt(d)=4sqrt(d), d>=2 and radius in inclusive upper branch. Distinct fixed normalized theta and Gaussian-prior experiments remain explicit; lower n=0 allowed. Actual suppliers reviewed fully; AC inherited. Direct consumer scan found only owning frontmatter-only B page, no mathematical dependent item.

`ex-natural-and-robust-risk-on-gaussian-model`: Confirmed refuter:11:2: Example/F2 omitted lower-bound supplier joint Borel learning-rule requirement. Repaired explicit Borel F and stated outer expectation in prior experiment; all constants unchanged. Checked log100<8 gives 5sqrt(log100)<32. With d=10^14, sqrt(d)=10^7, 2^47>d and log2<1 give log d<47; 131072*47=6160384<10^7 proves n=1 satisfies lower threshold strictly. Fixed norm upper experiment remains separate from random-prior lower experiment. AC, sigma>0, Borel classifier and sample measurability match exact suppliers. Only owning frontmatter-only B page references this example; no mathematical consumer repair needed.

## Decisions and consumer maintenance

Exactly four decisions: two `amended_repair` touched carriers and two `confirmed_fatal` flagged findings. Each references one distinct closed defect row, owned at `3a-adjudicate`, with repair confidence 1. The source-locator rows close the original citation error with the corrected complete range. No fabricated false-positive or historical uncertainty resolution is used. Immutable composite observation bindings for both refuter findings match post-reader snapshot carriers, and current pre-edit raw source bytes match those post-reader raw item hashes.

The two Example interfaces now require the same joint Borel rule as their supplier and define prior expectation as outer expectation. Exhaustive literal-ID scan over `items/` and `library/` found only the two example files themselves and their B-page inventory; that frontmatter-only page has no mathematical usage to repair. Neither example is a logical supplier. No higher consumer Statement changes. Both lemmas retain exactly their original mathematical Statements and proofs. Manifests have only ID/kind/title/deps/levels for these items and need no change. Contracts retain their exact unchanged supplier quotes, proof derivations and boundaries, with all 13 new complete risk reviews. Provenance remains literature-derived/ai-altered and verification is empty on all changed items; no judge record exists to invalidate. No diagram occurs in the 18 assigned carriers or two pages, and none is required to justify these scalar/vector probability arguments. Pages remain frontmatter-only compact-v1 and unchanged.

Published dependencies were read only at their actual supplied interfaces; no defective published mathematical prerequisite established. No withdrawal or stable ID change. Reader coverage-artifact alert retained for owner: `research/machine-learning-all-101-2026-10-19-batch-11.coverage.json`, first page source locator still uses Appendix F.1/F.2; correct bibliography is B.1/B.2. That unrouted artifact was not repaired. No unmet prerequisite or unresolved mathematical blocker remains.

## Final local checks

All commands exited 0. Explicit changed-file selection for the first four commands: `items/lem-finite-independent-sign-sum-tail.md items/lem-bernoulli-coordinate-posterior-odds-bound.md items/ex-gaussian-robust-risk-dimension-radius-scaling.md items/ex-natural-and-robust-risk-on-gaussian-model.md`.

- `node tools/tsx-run.mjs tools/reflow.mts` with that selection: all four unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` with that selection: 4 checked, 0 failing.
- `node tools/rendercheck.mjs` with that selection: 4 files, YAML and mathematics parse successfully.
- `node tools/proof-layout.mjs items/lem-finite-independent-sign-sum-tail.md items/lem-bernoulli-coordinate-posterior-odds-bound.md items/ex-gaussian-robust-risk-dimension-radius-scaling.md items/ex-natural-and-robust-risk-on-gaussian-model.md`: run once after final edits/reflow, 4 items, 12 steps, 0 defects.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-11.proof-contracts.json --require-reviewed`: 0 errors, all 13 required reviews complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-11.proof-contracts.json --strict`: 0 errors, 0 warnings, 13/13 checked.
- Local JSON consistency check: exact four owed obligations, four distinct linked closed defect rows, thirteen complete risk reviews.

Final changed source raw SHA-256 values (evidence only, no acceptance stamp):

- `lem-finite-independent-sign-sum-tail`: `53a521f02b198c2a3a6759f3f83f6e138d4847ee5415a20b2f492ab66266b427`.
- `lem-bernoulli-coordinate-posterior-odds-bound`: `eb33bb4a8415a7d993ea870915cd96db2653c562a41d1270879283722b9348b9`.
- `ex-gaussian-robust-risk-dimension-radius-scaling`: `bde36c718108497c5cebebac52e50f53e8e976f85e61e7ea1e2e8285601c94b7`.
- `ex-natural-and-robust-risk-on-gaussian-model`: `fffd55854c28b36853e8b94d88e305a852ec2900fb5e7b0555858bfc1833ddd3`.

No blocker remains in the dispatched obligations. The owner bibliography alert above remains advisory and outside the routed repair scope. The engine owns decision hashing and the complete gate battery; these local checks supply neither judgment nor publication authorization.
