# Batch 106 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-106`.

Reviewed the scope, order task, reader report and empty findings, refuter artifact, and pre/post hash inventories. Exactly two decisions are owed: touched harmonic theorem and refuter:106:1.

## def-underdamped-langevin-equation-and-canonical-gibbs-density

Reviewed the full definition and all nine supplier statements: finite d>=1, SPD M and beta,gamma>0 define the inverse and noise square root; differentiable V makes the Gibbs factor Borel. The density-measure interface applies only when 0<Z<infinity. Zero states and divergent positional normalizers cause no false existence claim. AC is inherited, and scalar momentum friction fixes covariance beta^{-1}M. Reader/refuter evidence introduces no finding here.

## lem-stable-gaussian-autoregression-invariant-law

Read every proof step and the eight cited supplier interfaces. The geometric power bound ensures norm convergence even for singular or zero G; shifting the series gives Lyapunov invariance. Finite product laws and scalar projection characteristic functions justify Gaussian updates; vector Gaussian uniqueness is supplied by F1 (the cited scalar uniqueness theorem alone would not suffice). Dominated convergence at A^{Tn}u -> 0 proves uniqueness without moments of an arbitrary invariant law. Iteration of D=A D A^T proves uniqueness among all finite matrix solutions. AC is inherited; no countable innovation product is required by the proof.

## lem-exact-ornstein-uhlenbeck-momentum-substep

Read both proof steps and all direct interfaces. The deterministic exponential factor meets C^{1,2}; componentwise deterministic integral covariance sums independent Brownian coordinates and yields beta^{-1}(1-e^{-2gamma h})M. Future-increment independence carries to the L2 integral limit. SPD M and h,gamma,beta>0 permit standardization; h=0 is excluded. This is a transition identity using the normalized actual integral, not an independent replacement on the existing path.

## thm-underdamped-langevin-canonical-measure-is-stationary

Read all five steps and twelve supplier statements. Bounded Hessian yields global Lipschitz drift, Gibbs q-second moment and Gaussian p tails supply the square-integrable initial state. Bounded continuous D b and D2 b justify initial-state differentiation of the additive-noise flow. The semigroup backward derivative follows from Ito and the flow bounds; dominated differentiation against Gibbs uses integrable 1+|p|+|grad V| uniformly on compact times. Verified Hamiltonian and OU adjoint cancellations with scalar friction and mass-scaled noise, and cutoff derivative bounds. Trigonometric tests determine the law by scalar uniqueness and Cramer-Wold. No ergodicity or invariant uniqueness is asserted; AC is inherited.

## lem-baoab-one-step-error-moment-bounds

Confirmed refuter:106:1 as a nonfatal regularity gap: bounded second derivatives do not imply continuous second derivatives as required by the cited C^{1,2} theorem. Replaced the C2 drift Ito application in F6 and step 2.2 by the ordinary C1 chain rule along Q and the linear P equation. Checked the explicit drift a and constant diffusion Ghat, giving a linear-growth bound and conditional mean O(h^2)(1+|z|). Steps 1.1 and 2.1 give the OU-coupled second moment O(h^3) and same-noise Lipschitz residual. All eight prerequisite interfaces read; h=1, zero force/state, and deterministic conditional starting states are covered, with inherited AC. Statement and dependency list unchanged; repair confidence 1.

## lem-baoab-one-step-weak-expansion

Read all six steps, all eight direct interfaces and the Fatou statement/proof. Linear-growth explicit A/B maps and affine OU maps preserve polynomial weighted derivatives; at most three generators consume at most six test derivatives and raise weight by three. Localized Ito plus Lyapunov W_r gives the required deterministic-start moments and removes stopping with higher weights. Direct third differentiation of the five-factor product avoids unlicensed higher derivatives; the second coefficient includes each ordered mixed generator pair once. Exact iterated Ito has the same first two coefficients. Bounded tests give precisely cubic weight; h=1 and unbounded polynomial tests are covered. AC is inherited. No invariant-bias conclusion is imported from literature.

## thm-harmonic-baoab-invariant-law-and-stability-limit

Read all five proof steps and ten prerequisites, including the actual BAOAB procedure and Gaussian autoregression proof. Independently checked A in (q,p/m), det A=a and trace=(1+a)(1-2r), both real-root sign arguments and conjugate-root modulus. The repeated-root power formula meets the supplier exponential-power hypothesis. Substitution verifies all three Lyapunov entries and the mass conversion of momentum variance. For r>1 the determinant det[g,Ag]=-2 sigma^2 s(1-r) is nonzero, so characteristic-function iteration rules out every invariant probability without moment assumptions. r=1 has roots -1 and -a; no uniqueness assertion is made there. Canonical Gaussian integrals, zero cross moment, positive parameters and inherited AC checked. Reader title adds scalar to an already explicitly scalar statement; it is harmless metadata enrichment, not a false mathematical claim repaired.

## thm-baoab-finite-time-strong-order-one

Read every step and all six supplier interfaces. The common L2 initial state meets the SDE theorem. Stage moment bounds are uniform over Nh=T. The repaired local lemma retains exactly the conditional mean, second moment and same-noise Lipschitz estimates used here. Centering Delta and delta makes the cross expectation with the past-measurable drift zero without requiring the two centered increments to be independent. Young with h gives forcing Ch^3 and the finite geometric sum yields Ch^2, with e0=0. N=1 and h=1 are covered; the maximum is over grid expectations, not a pathwise supremum. AC is inherited; no consumer repair is required.

## thm-baoab-finite-time-weak-order-two

Read all three steps and eight prerequisite interfaces. Bounded Hessian supplies force linear growth; smooth derivatives of the additive-noise flow through six are uniformly bounded on the fixed horizon. Thus all P_t phi share a Cb6 bound, and the local weak lemma applies with cubic weight uniformly. Exact and BAOAB Lyapunov moment recurrences hold for s<=3; the assumed sixth initial moment more than supplies the fourth moment actually used to dominate the cubic weight. Checked telescoping order K^n(K-P)P^{N-n-1}; N terms of size Ch^3 give Ch^2. N=1, h=1, common initial law, and independence of fresh increments are valid. AC is inherited and no stationary-bias assertion is made.

## ex-harmonic-baoab-thermostat-covariance

Read both verification steps and four supplier interfaces. Scalar positive parameters meet the harmonic theorem: threshold 1, h=1/2, r=1/4, position variance 1/8, momentum variance 3/2 and canonical momentum variance 2 give bias -1/2. This uses the strict stable range and exact invariant law, not sampling estimates. The zero covariance and inherited AC conventions agree with the supplier; no new selection or boundary inference.

## ex-unstable-baoab-step-has-no-invariant-law

Read both verification steps and all three prerequisite interfaces. With m=k=beta=gamma=1 and h=5/2, h exceeds the strict threshold 2. The independently reviewed unstable-mode proof supplies nonexistence among all probability laws, not just finite-covariance Gaussians. No conclusion is drawn at h=2. AC is inherited through the harmonic supplier.

## Decisions and repair

- `touched:106:thm-harmonic-baoab-invariant-law-and-stability-limit`: `reviewed_no_defect`, `change_kind: metadata`, `defect_ids: []`. Retain the reader's scalar title clarification and synchronize its manifest title. The old title described a harmonic result whose statement was already explicitly scalar; the clarification does not repair a false mathematical claim.
- `refuter:106:1`: `confirmed_nonfatal`, closed ledger row `nod-b106-3a-drift-ito-regularity`, repair confidence 1. F6 and proof 2.2 now use the ordinary chain rule along the finite-variation position path and the linear momentum equation. This avoids imposing continuity of the second force derivative and preserves every stated bound.

The harmonic item's current raw SHA256 is `fc149678f368dc9e2daaa6d87f8a9787d5af52cfc97948ae55849e7a7bbccb61`, exactly the post-reader hash. Removing only `scalar ` from the title recovers pre-reader raw SHA256 `d767c2b9aca110a4c6548bef63165b41aceadf69b0dd60dd0cb4ff3b876d08fe`. Thus the title is the entire reader delta. The repaired local-error lemma's raw SHA256 is `6135026098be0e113caace7fb8a9969633783f0c7966de88d03256fdab3da34c`; its pre/post-reader hash was `24f526ecf2db79a8b15636c2d929a95b13bd2b27bea205cc388cb8b1e470c787`.

No Statement or Definition changed. The strong-order theorem uses the local-error lemma's unchanged conditional bounds and same-noise Lipschitz estimate; its actual proof was checked and needs no edit. No prior judge record was present in the edited lemma. Provenance remains literature-derived statement / ai-altered proof. The manifest dependency lists remain correct; the proof-contract F6 explanation and step-2.2 derivation were updated. All eleven required risk reviews are now `complete` with item-specific evidence.

## Source and prerequisite evidence

The mathematical arguments were checked locally against all direct cited supplier statements/definitions, including their filtration, initial-moment, smoothness, singular-Gaussian, measure and AC hypotheses. The Fatou proof was also read. In the autoregression argument, the Gaussian characteristic-function lemma in F1 supplies identification of a vector Gaussian; the separately cited scalar uniqueness theorem is used on projections and does not by itself assert vector uniqueness. This is an immediate supplier combination, with no missing result or edit required.

Sources opened and relevant passages read:

- [Leimkuhler–Matthews](https://arxiv.org/pdf/1203.5428), equation (4), §2, and Appendix, PDF pp. 3–5 and 22, lines 69–185 and 1297–1317. The scalar-friction model and B/A/O/A/B coefficients match the local definitions. The appendix assumes diagonal mass; the local SPD extension follows from the proved covariance calculation. No general invariant-bias claim is imported.
- [Roux–Rodts–Stoltz](https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf), §5.2.2, printed pp. 85–87, equations (5.13)–(5.14), PDF lines 5490–5598. Its mass-scaled friction convention differs from the present scalar momentum friction. The local stationarity calculation explicitly uses the present convention.
- [Telatovich–Li](https://arxiv.org/pdf/1706.04237v2), §3.2, equations (3.4)–(3.5) and Theorem 3.2, PDF pp. 5–6, lines 368–397. This is a related two-part splitting, not the five-stage BAOAB update. It is context, not a substitute for the local strong-error proof. No reliance is placed on the paper's unrelated assertion of independence of nested Brownian integrals.
- [Abdulle–Vilmart–Zygalakis](https://www.unige.ch/~vilmart/paper_langevin_splitting.pdf), §2.2 and Theorem 2.2, PDF pp. 4–6. Its invariant-measure order conditions require an ergodic consistent method. Those hypotheses are not asserted for general BAOAB here; the finite-time weak proof supplies its own local expansion and telescoping argument.

The batch's two existing frontier page rows are preserved: `imex-and-operator-splitting-methods` and `milstein-stochastic-taylor-and-iterated-integrals` are navigation/context suppliers. The reviewed proofs import no deterministic Strang or Milstein rate theorem. No item edge or page prerequisite changed, so no frontier-ledger refresh is needed. No defective published supplier or outside owned consumer was identified; published content and the published-consumer ledger were left untouched.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-106.proof-contracts.json`: eleven HIGH/CRITICAL items routed, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-baoab-one-step-error-moment-bounds.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-baoab-one-step-error-moment-bounds.md --json`: one checked, zero failed.
- `node tools/proof-layout.mjs items/lem-baoab-one-step-error-moment-bounds.md`: one item, four steps, zero defects; run after the final item edit and formatter.
- `node tools/rendercheck.mjs items/lem-baoab-one-step-error-moment-bounds.md --json`: one checked, no errors or warnings.
- Final risk report with `--require-reviewed`: fourteen items routed, zero errors, every required risk review complete.

The recomputed live status and current Git log confirm this is the active engine run, not a concluded RESUME workflow. No judge, stamp, certification, dispatch, stage transition or gate battery was initiated. There are exactly two decisions and no unresolved batch-106 blocker. Review coverage is the eleven routed risk carriers, the two decision obligations and their actual prerequisites; it is not a fresh audit of every transitive published proof or the three unflagged moderate-risk items. The engine owns hash stamping and subsequent gates.
