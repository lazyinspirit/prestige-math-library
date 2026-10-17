# Batch 4 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-4`.

Reviewed scope, generated order, reader report/findings, refuter report, and pre/post hash records. Exactly three touched obligations and refuter:4:1 are owed. No reader finding is owed.

Completed level-0 mathematical review and recorded risk reviews in the batch contract:

- `lem-finite-coefficient-vector-has-polynomial-representative`: Steps 1.1–2.1 checked against formal-list definition and finite-sum/field/induction suppliers: zero vector chooses separate zero object; nonzero last entry gives exact degree; trailing zero is removed recursively without changing evaluation. n=0 and all-zero vector checked; no choice.

- `lem-finite-double-sum-interchange`: Steps 1.1–2.1 checked: empty square gives zero; successor decomposes both square sums into the same interior, last row, last column and corner, using additivity and commutative addition. Induction quantifies over every array, so restriction is legitimate. No choice.

- `lem-finite-product-of-nonzero-reals-is-nonzero`: Steps 1.1–2.1 checked against product recursion, real field and no-zero-divisors: empty product 1 is nonzero and successor has two nonzero factors. All list lengths including zero checked; no choice.

- `lem-polynomial-highest-derivative`: All four steps checked against power derivative clause 4, higher derivatives, factorial clauses (a),(d), and natural-real bridge. Q_r only uses k>=r, so exponents and factors are natural; r=0 gives p, successor kills its constant term, r=m leaves a_m m!. Zero/lower degree and m=1 checked; Step 3.1 base cross-reference to 1.1 is harmless because 2.1 explicitly supplies the base. No choice.

- `lem-product-of-linear-factors-is-monic-polynomial`: Steps 1.1–2.1 checked: empty product is coefficient list (1); distributivity and finite-sum laws yield b_0=-r_na_0, b_k=a_{k-1}-r_na_k, b_{n+1}=1, including n=0 with empty middle range. Thus formal degree exactly n+1, independent of repeated roots. No choice.

Checkpoint: level-0 completed without a blocker; subsequent reviews below complete the remaining generated order.

- `def-cardinal-polynomial-interpolation`: Definition checked in full: strictly ordered nodes make each omitted-node denominator nonzero; finite nonzero product legitimizes its inverse. Explicit length-n omitted list fixes order. n=0 gives weight and cardinal function 1. Definitions are real functions, not unsupported formal operations; no choice.

- `lem-finite-product-of-quotients`: All three steps checked against finite product recursion, nonzero-product lemma and inverse uniqueness. D and Dd_n are nonzero; multiplying D^{-1}d_n^{-1} by Dd_n gives 1 and yields successor identity even with zero numerators. Empty product and 1 inverse handled explicitly; no choice.

- `lem-cardinal-basis-degree-and-values`: All five steps checked against already-reviewed products/quotients/coefficient representation and square sum interchange. Nonzero w_j preserves exact degree n; delta values use split zero factor; omega has degree n+1 and is nonzero off nodes. Interchange over (n+1)-square coefficients proves interpolation degree at most n. n=0, zero data and repeated query at nodes checked; no AC.

- `prop-equispaced-interpolation-basis-growth`: All six steps checked with binomial, factorial, ordered-field and embedding suppliers. Direct odd-factor calculation gives numerator (4m)!/((2m-1)16^m(2m)!) and denominator (m!)^2. Central coefficients bound row averages, k=4 term gives 4^m>=81m^4/384 for m>=6, denominator <=30m^3, and 81/11520=9/1280. x_* cannot be a node; m=6 admissible, all divisions positive. No AC.

- `thm-cardinal-polynomial-interpolant-exists-uniquely`: All three steps checked: degree supplier gives formal P, delta values interpolate; padded coefficient difference gives formal r with n+1 distinct roots. Root bound forces zero, representative zero-characterization forces coefficient equality and equality of formal objects, not merely functions. n=0 and all-zero data covered; finite existential choices need no AC.

- `ex-equispaced-cardinal-basis-growth`: All three steps checked: unit coordinate data have max norm 1 and interpolate to ell_m, giving lower bound 9m/1280 at interior x_*. Data vary with m, so no fixed-function divergence is asserted. Opened Weierstrass statement gives density only; quantifiers remain distinct. m>=6 and no choice checked.

- `thm-barycentric-interpolation-identities`: All four steps checked: product multiplicativity and field inverse uniqueness yield omitted denominator inverse, including empty list; off-node factor cancels. Uniqueness for all-one data gives sum ell_j=1, hence D=1/omega nonzero. Weighted sum gives numerator and quotient; node value is separate. n=0 and zero data checked. Reader expansion accepted mathematically; unchanged Statement. No AC.

- `thm-lagrange-interpolation-remainder`: All six steps checked against exact higher-order Rolle and polynomial derivative/continuity suppliers. Off-node omega permits c, g has n+2 distinct zeros; sorted extreme interval stays in [a,b], is nondegenerate even n=0. C^{n+1} supplies continuity/differentiability, polynomial derivatives exist, and Rolle yields interior xi. Highest derivatives give 0 and (n+1)!, which is nonzero by factorial bridge/order injection. Node query handled separately, endpoints allowed, zero p covered. No AC.

- `alg-finite-barycentric-interpolation-evaluator`: reviewed complete Definition and floating-point model. Candidate-array length validation precedes indexing; strict nodes make node match unique. Exact-node return precedes representable-one guard. Checked operations handle zero divisors and results outside normal range; tagged failure stops subsequent calls. All successful operands remain in F, initialization zero is permitted, and final zero D is rejected. Even u>=1 allowing nonzero exact results to round to zero cannot break status soundness: the next checked division detects zero. n=0, malformed lengths, zero data, 1 absent from F, and off-node range failures covered. Only item consumer found by dependency/reference scan is the status proposition. No accuracy is claimed. Reader change accepted; provenance and manifest require no change.

- `ex-cubic-interpolation-pointwise-remainder`: All four steps checked with uniqueness, power differentiation and remainder suppliers: q(t)=3t^2-2t matches 0,1,8, its value at 3 is 21, cubic value 27. Third derivative is constant 6, all derivatives continuous including endpoint convention. Product at 3 and real factorial both equal 6, so explicit xi=1 is admissible and yields error 6. No arbitrary choice.

- `prop-finite-barycentric-interpolation-evaluator-returns-status`: all four proof steps follow the validated-array domain, representable-one guard and tagged-operation closure. Pair loops have at most (n+1)n iterations; the evaluation loop has n+1; every error exits before using its nonvalue. Exact-node success returns validated data, ordinary success returns fl in F. Statement remains unchanged; reader consumer repair accepted.

## Final dispositions and evidence

- `touched:4:thm-barycentric-interpolation-identities`: **accepted_repair**. Exact pre-reader bytes recovered at research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-barycentric-interpolation-identities.md; current raw hash 166ef36900488f783dfe7930eb2fef9f5fb9c0f1da25912c3caf13c7b0fb639b equals post-reader. All four steps and exact suppliers independently checked. Reader product-law expansion is sound nonfatal polish; n=0, off-node cancellation, all-one uniqueness and zero data checked. Statement unchanged; risk review complete.

- `touched:4:alg-finite-barycentric-interpolation-evaluator`: **accepted_repair**. Exact pre-reader bytes recovered at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/alg-finite-barycentric-interpolation-evaluator.md; current raw hash c37161162488b482d2dfbddefd24b8f43c7f30e57c92d68648d9b3ae5db95367 equals post-reader. Complete procedure and floating-point supplier reviewed: length validation precedes indexing, every arithmetic call is guarded, node return precedes representable-one check, and finite loops terminate with declared statuses. The reader input-domain repair is coherent. Dependency/reference consumer scan finds only the status proposition, independently checked with no remaining defect.

- `touched:4:prop-finite-barycentric-interpolation-evaluator-returns-status`: **reviewed_no_defect**. Exact pre-reader bytes recovered at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/prop-finite-barycentric-interpolation-evaluator-returns-status.md; current raw hash cd026dab6c83907c40b1d1fa0696c6c352c27d65fff0c373203fe5e6f9092ad8 equals post-reader. The reader expanded step 1.1 to describe candidate-array validation and its order under the revised algorithm domain. This is consequential proof clarification, not an independent mathematical defect. All four steps checked against the entire current procedure: finite checks and loops, zero denominator exits, representable-one guard and closure of successful values in F establish the unchanged termination/status claim.

- `refuter:4:1`: **confirmed_fatal**. Current pre-edit page prose contains the exact reported attribution. Barycentric proof 1.2 invokes uniqueness and 2.1 sums the basis identities; neither uses Rolle. Remainder proof 2.1 invokes higher-order Rolle with m=n+1 after checking continuity, differentiability and n+2 zeros. Corrected the page summary to attribute the barycentric identity to interpolation uniqueness and the remainder to Rolle. No mathematical interface, page order or manifest change.

The first reader expansion repairs only nonfatal proof polish; it does not indicate a false identity. The status-proposition expansion is audit enrichment and closes no finding or ledger defect. Exactly three confirmed defects are recorded as closed ledger rows: product-expansion (polish), candidate-array-domain (nonfatal), and page-attribution (fatal inaccurate attribution). Completed repairs have repair_confidence 1.

All 14 HIGH/CRITICAL reviews were completed in the generated dependency order before higher-level consumers. The contract additions are risk_review only; the reader-updated quotes/derivations/boundaries already match current mathematics. No Statement, Definition or proof was changed by Alpha; no new judge invalidation, provenance or manifest change is needed. The existing reader algorithm Definition change was checked against every direct item dependency/reference consumer; only the status proposition was found. Its Statement is unchanged, ending propagation. Batch cross-batch-dependencies.json is empty and remains unchanged.

Sources: exact local dependency Statements/Definitions were read, including the formal-polynomial convention, finite-sum/product laws, field/inverse rules, natural-real embedding/factorials, binomial formulas/unimodality/theorem, power/linear derivative and continuity rules, polynomial root bound, higher-order Rolle, floating-point model, and Weierstrass density. Source PDFs were not fetched: these familiar arguments are locally proved and the checked local supplier interfaces resolve all uses. This is not a re-audit of all transitive published proofs. No defective published supplier, outside-scope consumer alert, withdrawal, unresolved mathematical uncertainty or blocker was found. Published content was left read-only.

## Local checks

- Initial and final `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-4.proof-contracts.json` runs, the latter with `--require-reviewed`: exit 0; 17 routed items, all 14 HIGH/CRITICAL reviews complete.
- Batched precheck of the three reader-touched items: exit 0; 2 proofs checked, 0 failures (algorithm has no proof).
- Rendercheck of those three items: exit 0, 3 files valid with real KaTeX and YAML parsing. Separate rendercheck of the edited A page: exit 0, 1 file valid.
- Defect-ledger append: exit 0, 3 rows added. Only the task-named report/decisions, owning contract, edited draft A page, defect ledger and required frontier-dependency ledger were written.
- No judge, stamp, self-certification, engine transition or gate battery was initiated. Decision hashing and gate execution remain with the engine.
- Final batched proof-layout on the three reader-touched item paths: exit 0, **3 items, 8 steps, 0 defects**. Alpha changed no item bytes.

All four routed obligations are decided; no blockers remain.
