# Step 2 batch17 Gaussian prerequisite repair proposal — READ ONLY

Disposition: both findings in the full actual `scope-review/batch-17/review-0.json` are confirmed as missing declared/explicit proof premises. Existing published canonical suppliers suffice. No missing mathematical theorem, new item/pair, changed Statement, field restriction, coefficient change or additional axiom is necessary. No canonical file was edited. Native batch11 read-only review is active per root; no author/writer state is controlled here. This is the first proposal for these new Step2 findings, not another round on the resolved complex construction proof.

Read CLAUDE.md fully; read the current Step2 scope/prerequisite policy in owner-authoring-direction.md, which explicitly permits reuse of proved canonical foundations and supersedes obsolete generic no-external boilerplate. Read the full actual batch17 review, the complete actual invariance, law, tail and embedding carriers, the actual embedding A page, and the complete three published foundation carriers below, including their proofs. Retained earlier full Gaussian consumer reviews remain evidence for unchanged branches. No external publication reading is newly claimed.

## Exact foundations and hypotheses

- `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps`: published; assumes Countable Choice; preserves measurable sets and Lebesgue measure under every real orthogonal map, in all positive finite dimensions. Realification of a complex unitary matrix action is exactly a real orthogonal map. This is the exact missing premise in Gaussian invariance1.1.
- `thm-linear-change-of-variables-for-lebesgue-measure`: published; assumes Countable Choice; its invertible clause scales measure by absolute determinant. Positive scalar scaling in R and R² suffices for the two Gaussian mgfs. Its set-measure identity extends to nonnegative integrals first for indicators, then finite nonnegative simple functions and their defining suprema. No nonlinear polar theorem is required.
- `cor-markov-inequality-for-random-variables`: published; for a nonnegative measurable random variable X and a>0, P(X>=a)<=EX/a. It has no new Choice premise. The exponential random variables below are nonnegative measurable and have the finite expectations established by the mgf step.

CC is already explicit in both original Statements and Given sections. The proposed dependencies introduce no new mathematical assumption; no changed supplier Statement triggers a new scope.

## Minimal invariance repair, once root releases the writer

File: `items/lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence.md`.

Add precisely `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` to deps. Add a fact:

> [F2] Under Countable Choice, a real orthogonal coordinate map preserves Lebesgue measurable sets and Lebesgue measure ([[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]). Consequently it preserves nonnegative integrals after pullback: this follows for indicator functions from the set identity, for nonnegative simple functions by finite linearity, and for arbitrary nonnegative functions by the defining supremum of simple integrals.

Keep the existing Statement and Given byte-verbatim. Replace only the end of proof1.1 with the explicit supplier application (the preceding real-linear/Frobenius-isometry calculation remains):

> The coordinate map is therefore real orthogonal, also in the complex case after identifying the matrix entries with R^(2ab). By [F2] it preserves Lebesgue measure. Its inverse preserves the Frobenius norm, so for every Borel set E the transformed probability is the integral over E of the same density C exp(-||H||F²/2) in the real case or C' exp(-||H||F²) in the normalized complex case. Thus the transformed matrix has the same law. [given, F1, F2, A1, algebra]

The determinant observation can remain or be dropped as redundant within this proof step; no determinant supplier is needed for this route, since [F2] is the exact orthogonal corollary. Empty coordinate matrices, if allowed by the existing dimension convention, have the unique deterministic law and the assertion is immediate; the positive-coordinate case is the cited corollary's literal interface. No positive-dimension restriction should be added to the Statement.

## Minimal tail repair, once root releases the writer

File: `items/lem-gaussian-squared-norm-tail.md`.

Add precisely `thm-linear-change-of-variables-for-lebesgue-measure` and `cor-markov-inequality-for-random-variables` to deps. Keep Statement, Given, CC and all constants verbatim. Add facts:

> [F3] Under Countable Choice, an invertible real linear coordinate change scales Lebesgue measure by the absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]); its nonnegative-integral form follows first for indicators, then simple functions and their defining suprema.
>
> [F4] Markov's inequality states P(X>=a)<=EX/a for nonnegative measurable X and a>0 ([[cor-markov-inequality-for-random-variables]]).

Replace only step1.1, avoiding the unnormalized polar calculation entirely:

> 1.1 For real Z and theta<1/2 put c=1-2theta>0. The substitution u=sqrt(c)x in [F3] gives E exp(theta Z²)=c^(-1/2)(2pi)^(-1/2) integral_R exp(-u²/2)du=c^(-1/2). The final integral with its prefactor is one because [F1] is a probability density. For normalized complex G and theta<1 put d=1-theta>0. Identifying C with R², apply [F3] to u=sqrt(d)z, whose real determinant is d. Thus E exp(theta|G|²)=d^(-1)pi^(-1) integral_R² exp(-|u|²)du=d^(-1); here too the prefactored integral is one by the normalized probability density [F1]. These identities establish finite mgfs for exactly the ranges used below. [F1, F2, F3, A1, algebra]

In2.1 explicitly invoke [F4] on X=exp(lambda sum|g_j|²) at threshold exp(lambda m(1+t)); lambda=t/[2(1+t)] in the real case and t/(1+t) in the complex case. Independence factors its expectation into the mgfs from1.1. All thresholds are positive and all mgf parameters lie in their finite ranges. Retain the existing optimization, logarithmic integral inequality and constant1/8.

In2.2 explicitly invoke [F4] on X=exp(-lambda sum|g_j|²) at threshold exp(-lambda m(1-t)); lambda=t/[2(1-t)] in the real case and t/(1-t) in the complex case. The event reversal is correct since the exponential decreases with the sum. The mgf parameter is -lambda, within the ranges in1.1. Retain the existing logarithmic estimate and union bound3.1. Add [F4] to citations in both steps. No general Chernoff supplier or new Gaussian integral is needed.

## Actual affected consumers and minimal follow-through

Current read-only actual deps traversal (inline and multiline lists) gives these direct invariance consumers:

- ex-gaussian-rangefinder-exact-on-rank-k-matrices
- lem-normalized-complex-gaussian-block-affine-spectral-second-moments
- lem-normalized-complex-rangefinder-direct-spectral-expectation
- lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
- lem-wide-gaussian-pseudoinverse-frobenius-moments
- lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail
- thm-gaussian-oblivious-l2-subspace-embedding
- thm-real-gaussian-rangefinder-expected-spectral-error

The complete invariance descendant union has13 items including invariance itself. Beyond those eight direct consumers it contains `ex-slow-singular-tail-rangefinder-error-term`, `thm-gaussian-rangefinder-expected-spectral-error`, `thm-real-gaussian-power-rangefinder-expected-error`, and `thm-gaussian-power-rangefinder-expected-error`. The tail has exactly one direct/indirect actual consumer: `thm-gaussian-oblivious-l2-subspace-embedding`. Therefore the union for both repaired suppliers has14 actual items including the two repaired carriers. No expectation theorem becomes an OSE supplier.

The tail and embedding actual current bodies were fully read for this proposal. In embedding1.1 the fixed unit vector is extended to an orthonormal basis, then invariance gives independent scalar coordinates; CC is already explicit in Statement/Given/A1. In2.1 t=epsilon/2 lies in(0,1), so the unchanged tail interface is applied literally. Its finite union/net calculation and displayed192 constant remain valid. No mathematical body or Statement repair is necessary in that theorem. The actual page summary accurately states this same Gaussian embedding and can remain unchanged after supplier repair.

Once the two carriers are actually repaired, this original owner will check the concrete same-interface uses in all14 old/current affected carriers in supplier-to-consumer order, using retained full readings for unchanged bodies. No overhaul or repeat independent proof audit of the completed complex lemmas is proposed. Original rangefinder Statements, arbitrary-basis measurability, power expectation transfer, and all real/complex normalization/constants must remain unchanged. The root remains responsible for manifest/contracts/level/readiness/currency reconciliation and native final review/gates.

## Page prerequisites for root reconciliation

The actual published placement is `library/measure-theory/lebesgue-measure-on-euclidean-space.md` for both orthogonal invariance and linear scaling, and `library/probability/probability-spaces-random-variables-and-expectation.md` for Markov. Thus batch11 A needs the former page prerequisite for its repaired invariance. Batch17 A needs both pages as direct prerequisite context for its repaired tail (its existing randomized-low-rank prerequisite remains). Root should reconcile actual manifest/page/plan interfaces using the current policy rather than duplicate any published foundation. No page inventory, runtime or metadata was changed here.

No tests, validators, gates, hashes, canonical writes, native reports or code edits were performed. This proposal is ready for root coordination of the nonoverlapping actual writer.
