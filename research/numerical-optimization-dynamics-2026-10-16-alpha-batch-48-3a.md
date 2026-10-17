# Batch 48 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-48`. Scope assignment group `q` is unchanged.

Completed the six touched-carrier obligations and `refuter:48:1`, in generated dependency order. All nine HIGH/CRITICAL risk reviews are complete. Three reader repairs are accepted, the no-common-kernel clarification is audit enrichment with no defect, and the QZ algorithm/proposition repairs are amended. The refuter finding is confirmed fatal in the observed content and repaired in the current content. No blocker remains.

## Review and dispositions

### `alg-generalized-hessenberg-triangular-reduction`

`touched:48:alg-generalized-hessenberg-triangular-reduction` — **accepted_repair**. Current item matches post-reader raw hash 3bbb0ae30bae488c99e262463827da3b977cfbd58a4ddad077eaed17a8272f2a. Reader replaced 1-based out-of-range loops with zero-based bounds licensed by the Givens definition. Explicit real/complex left and right annihilators, zero branch, finite schedules and all direct consumers checked; see report level 0 and consumer review.

Checked the explicit real/complex left annihilator, adjoint/reversal right annihilator, identity zero branch, zero-based finite schedules and all four prerequisite statements. n=1,2 have the intended empty Hessenberg loop. No additional item edit.

### `def-b-inner-product-and-dual-norm-for-definite-pencil`

Reviewed Definition and all four local prerequisite statements. HPD B has a unique invertible positive-diagonal Cholesky L; y*Bx is linear first and positive definite, ||L*x||²=x*Bx, and (LL*)^-1=L^-*L^-1 gives the dual formula. Hermitian symmetry makes x*By=0 equivalent to the stated convention. Zero vectors are allowed, singular B is excluded; no choice or additional iff assertion is needed.

### `lem-zero-determinant-matrix-has-nonzero-kernel-vector`

Reviewed both proof steps and rank-nullity, matrix/map rank and determinant-invertibility statements over the same field. Trivial kernel forces rank n, surjectivity and invertibility, contradicting det M=0. n>=1 is essential and explicit; the zero matrix and n=1 satisfy the conclusion. No arbitrary choice or field change occurs.

### `lem-regular-pencil-has-no-common-kernel-vector`

`touched:48:lem-regular-pencil-has-no-common-kernel-vector` — **reviewed_no_defect**. Reader only made the finite-root contradiction explicit with n+1 distinct numbers 0,...,n. Leibniz degree <=n, determinant/invertibility and root bound already license the argument; no mathematical defect or interface change. Current raw hash equals post-reader d234f062f44ae67a6b0420ff259644d9874578857b1fbe6310fe789d6996ef69. Full proof and all four dependencies reviewed; risk_review complete.

Reviewed both current proof steps, regular-pencil definition, Leibniz determinant, root bound and determinant-invertibility statements. A nonzero common-kernel vector makes every A-lambda B singular; degree <=n and n+1 distinct complex roots contradict regularity. The reader explicit finite-root argument is sound, including n=1 and B=0 with invertible A. No interface change.

### `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`

`touched:48:prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence` — **accepted_repair**. Current raw hash equals post-reader 2c97f06a0317df08ad7e2196696f9d3ad8796b9e6e4fb8ca1e87ed7a9ee12d1e. Reader aligned proof loop ranges with the corrected zero-based supplier. Checked all three steps: previous columns/triangular zeros preserved, all factors unitary, Q<-QL* and Z<-ZR preserve both identities; n=1,2 empty loops covered. Risk review complete.

Reviewed all three steps and the exact algorithm, Givens annihilation theorem and both matrix-pattern definitions. Zero-based finite loops triangularize B, then paired row/column rotations clear A without affecting earlier columns or introducing further lower B fill. Q<-QL* and Z<-ZR preserve both identities and unitarity. For n=1,2 the empty Hessenberg loop is correct; zero target uses identity. Reader bounds retained.

### `thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis`

Reviewed all four steps and all nine dependency statements. Positive Cholesky diagonal makes L invertible; C=L^-1 A L^-* is Hermitian. Real/complex spectral theorems supply an orthonormal eigenbasis; Hermitian eigenvalues are real by lambda||y||²=y*Cy=conjugate(y*Cy). x=L^-*y gives Ax=lambda Bx and x_i*Bx_j=delta. Determinant factorization proves exactly these finite roots and det B!=0 excludes infinity. No positivity of A is needed; repeated and zero eigenvalues are allowed.

### `lem-regular-pencil-has-projective-eigenvalue`

`touched:48:lem-regular-pencil-has-projective-eigenvalue` — **accepted_repair**. Current raw hash equals post-reader 489c3caa07d3090a7a579ad638bb9879363e9cc80c2690b33fd6433e0a0db84e. Reader replaced a misattribution of the Leibniz formula to the regular-pencil definition with actual F4 column multilinearity. This gives degree <=n and (-1)^n det B as leading coefficient. FTA handles degree n>=1; lower degree, including constants, gives [1:0]. All four suppliers and every step checked; risk review complete.

Reviewed all four proof steps and all four cited suppliers, including homogeneous scaling proof, FTA and column-multilinearity statements. Multilinearity gives degree <=n and leading coefficient (-1)^n det B; nonzero f of degree n>=1 has a finite root, lower degree gives det B=0 and [1:0]. Constant nonzero f and B=0 are covered, and neither output is (0,0). Reader citation repair retained; no arbitrary choice is used.

### `thm-generalized-schur-form-exists-for-regular-pencil`

Reviewed all eight steps and all thirteen cited dependency statements/proofs needed for the construction. Complex/real-root case uses nonzero Bv or Av by no-common-kernel. Nonreal real-input case proves independence of Re/Im v and rank two of B on their span: lower image dimension would make every pencil singular. Finite Gram-Schmidt supplies real bases, triangular invertible B11 and A11=B11 C with roots a+-ib. Nonzero determinant product makes the trailing pencil regular, so induction decreases by one or two; empty trailing case needs no 0x0 determinant citation. Invertible changes and repeated positive-size determinant factorization preserve the entire homogeneous root set. Finite choices only; n=1, infinite roots and no-trailing-block cases checked. Arbenz §§12.8-12.9 locally extracted lines 27000-27058 corroborate the complex form and homogeneous convention; local proof additionally establishes the real form.

### `alg-finite-budget-qz-iteration-with-deflation-and-residual`

`touched:48:alg-finite-budget-qz-iteration-with-deflation-and-residual` — **amended_repair**. Retained reader zero-based block indices and explicit bulge/right-target schedule. Independent review confirmed both tolerance ledgers had the wrong sign: d->0 requires -d. Definition step 2 now records negative discarded entries at separate identity-factor stages for BOTH matrices, preserving old-value diagnostics and structural-error separation. All ten dependencies, computed-update proof and direct/reference consumers checked; outside consumers need no edits. Contract synchronized and risk review complete.

Read the complete current Definition, all ten cited dependencies and relevant common-update proof, canonical stored Givens generator/local-error proof, operationwise model and residual certificate. Checked initializer schedule, inclusive/relative indexing, right first-coordinate annihilator, full-array off-block updates and the single bulge chase. Repaired tolerance ledger sign: save old d, record -d at its entry with identity factors, separately from structural errors eta. N=0, tau=0, n=1, zero shift vector, singular B, isolated (0,0), range failures and certificate dimension failures have explicit branches. Finite sweeps/removals/controllers terminate; no convergence claim or exact-original infinite-eigenvalue claim. Local coefficient denominators are positive for 0<u<1; independent residual route additionally requires (n-1)u<1 and stored-input/range conditions. Kressner Chapter 2 §§3.1,3.2,3.4 excerpts checked; no source convergence/stability assertion is used as a missing proof. Direct consumers reviewed in report; no outside repair needed.

### `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`

`touched:48:prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence` — **amended_repair**. Retained reader zero-based sweep/support proof corrections. Step 2.2 now explicitly uses perturbation -d for a tolerance write d->0 at identity factors, matching the repaired algorithm; accumulation then yields both claimed equivalences. The refuter counterexample is valid for the observed post-reader content and is resolved in current bytes. All six proof steps and five dependencies reviewed; termination/status/boundary cases and risk review complete.

`refuter:48:1` — **confirmed_fatal**. At observed carrier fingerprint b9705acda47c845da3231cf888b00f8ab201a4341058ec913b90e2f3ce730880, proof 2.2 used additive D while Definition step 2 recorded +d. H=[[1,0],[1/2,1]], T=I, tau=1/4 accepts d=1/2; +d produces 1 rather than the written zero. Corrected supplier records -d and proof 2.2 states the signed identity. This exact defect is closed by D07; updated local checks are recorded in the report.

Read all six current proof steps, exact initializer/support proof, Givens annihilation proof, two-sided accumulation proof and common computed-update proof. Checked rounded zeros preserve support, at most n successful infinite removals, at most N sweeps and finite arithmetic/controller exits. Refuter sign counterexample is confirmed: d=1/2 requires D=-1/2 rather than +1/2. Supplier Definition and step 2.2 now specify negative discarded entry at identity stages; arbitrary post-action writes are pulled back. Structural target writes stay only in E, so no double counting. Accumulation gives both equivalences on certified-factor hypotheses; successful triangular output with nonzero diagonal pairs is regular. n=1, N=0, tau=0, singular B and (0,0) statuses checked. Independent backward-error consumer preserves signed equations and norm bounds; no interface change to this proposition.

## Repairs, history and exact bindings

Only two item files were edited in this adjudication. QZ Definition step 2 now records the negative discarded entry as the additive tolerance perturbation at a separate identity-factor stage for both matrices. The old entry remains a diagnostic. Proposition proof 2.2 explains this sign and retains the pullback for arbitrary post-action perturbations. Structural target writes stay in E and are not counted again in D. This preserves all claims, statuses and norm bounds. Both completed repairs carry `repair_confidence: 1`. Existing provenance is already ai-altered and remains correct; neither item had a judge record to invalidate. Manifest inventory/dependencies and all Statements remain unchanged. Contract citation, derivation, boundary and risk records were synchronized.

The reader report, findings, refuter artifact, scope, pre/post inventories and generated order were read. At entry, every one of the six touched item raw hashes equalled its post-reader hash and differed from its pre-reader hash. The explicit scope fingerprint for the refuter observation is retained; this is not an unbound observation or an owner current-content substitute. Historical index/citation descriptions rely on the reader report and pre/post inventories; this report does not claim possession of complete pre-reader source bytes. No historical escalation or owner receipt was rewritten.

| Carrier | Pre-reader raw SHA-256 | Post-reader raw SHA-256 | Final raw SHA-256 |
|---|---|---|---|
| `alg-finite-budget-qz-iteration-with-deflation-and-residual` | `4c06615eca1332806075211163b09d43ff8a84dfe7ebd44bd8417cacc5ab652c` | `ea52b1e26202bef2b2f823256e40972ec1ef66a9d2ae25a5f41a04824c6d4f93` | `4a474194f4e9b26dd29945aa7717f72e4055dc5e32444a23c55e466b5decd890` |
| `alg-generalized-hessenberg-triangular-reduction` | `c8dc6d3104d7dd9223aff6600f1d31841e621595f823d852174d2f6c255ec815` | `3bbb0ae30bae488c99e262463827da3b977cfbd58a4ddad077eaed17a8272f2a` | `3bbb0ae30bae488c99e262463827da3b977cfbd58a4ddad077eaed17a8272f2a` |
| `lem-regular-pencil-has-no-common-kernel-vector` | `185db127e0f2cf8eeb256e3d03538cdc334124db62daae060115f9ff07258a81` | `d234f062f44ae67a6b0420ff259644d9874578857b1fbe6310fe789d6996ef69` | `d234f062f44ae67a6b0420ff259644d9874578857b1fbe6310fe789d6996ef69` |
| `lem-regular-pencil-has-projective-eigenvalue` | `f0b83c3fa2b4ed1b974833b45347fdbf41b64e7732101d09763377bda8c3825c` | `489c3caa07d3090a7a579ad638bb9879363e9cc80c2690b33fd6433e0a0db84e` | `489c3caa07d3090a7a579ad638bb9879363e9cc80c2690b33fd6433e0a0db84e` |
| `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence` | `a03ef6a0ab9919ee01261afe2ec156134b02247593664fa450ac1f512d7cf610` | `b9f5f7e47fa475118097683f64131e1a3a1b2a6293620989460565f2d8bd66f8` | `6b1e7c148a356214ff2d9b2de19aeee4467354a5201d418c90e74389c6675490` |
| `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence` | `05b5e3b40dd919f166318a476d87e5c5bf46a14c985aa36b4a1b64da39b41a4a` | `2c97f06a0317df08ad7e2196696f9d3ad8796b9e6e4fb8ca1e87ed7a9ee12d1e` | `2c97f06a0317df08ad7e2196696f9d3ad8796b9e6e4fb8ca1e87ed7a9ee12d1e` |

These raw file comparisons are evidence only. The engine owns decision-carrier stamping and its gate battery.

Seven closed ledger rows (`numerical-optimization-dynamics-2026-10-16-3a-b48-D01` through `D07`) record the distinct carrier defects: reduction procedure bounds, reduction proof bounds, projective-existence misattribution, QZ procedure indices/targets, QZ procedure perturbation sign, QZ proof indices/targets, and QZ proof additive inference. All are owned at `caught_at_stage: "3a-adjudicate"`. D03 is nonfatal; the algorithm/proof execution and sign defects are fatal. D07 is shared by the touched-proposition and refuter decisions, with explicit same-defect evidence; the refuter decision references exactly that one row. The no-common-kernel clarification creates no defect row.

## Prerequisites and sources

Reviewed every cited direct dependency of the routed and risk-review items. This includes the actual regular-pencil/projective definitions, determinant multilinearity/multiplication/triangular and root-bound statements, FTA, rank-nullity/map-rank/invertibility criteria, Cholesky and real/complex spectral theorems, Gram–Schmidt and orthonormal-basis completion, matrix-pattern and Givens definitions, and the complete published Givens annihilation proof. All sources are used with their stated field, finite-dimensional and nonzero/positive-order conditions. Finite constructions require no arbitrary-index AC.

For computed QZ, read the actual current batch-17 `alg-scaled-complex-householder-and-givens-updates` Definition and `lem-scaled-complex-householder-and-givens-local-backward-error` proof, batch-1 operationwise model and `lem-rounded-linear-and-normal-residual-certificates` proof, and both local `lem-qz-two-sided-local-computed-update-bound` and `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil` proofs. Canonical Givens coefficient q is conservatively enlarged to v,h,eta for common pair actions. Right first-coordinate annihilation uses reversal/adjoint, normalized representatives are not stored matvec inputs, and tolerance writes make no O(u) claim. Local certificates require successful range operations and 0<u<1; the independent residual route also checks (n-1)u<1. Missing residual-route conditions leave that route inconclusive.

Relevant authoritative full-text passages were read from the existing local extracts in `research/numerical-optimization-dynamics-2026-10-16-batch-48-source-reading/`:

- Kressner, dissertation [full text](https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf), Chapter 2 §3.1 introduction (extract lines 7710–7810) and Algorithm 2.12 (8065–8135), §3.2 through Algorithm 2.13 (8135–8490), and §3.4 deflation context (9780–9855), printed pp. 70–74, 80. These corroborate transformation schedules and deflation context; the authored single-shift complex procedure is checked directly, rather than assumed identical to the source multishift real algorithm. No source stability or convergence assertion substitutes for the local proof.
- Arbenz, [lecture notes](https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf), §11.4 (extract lines 23980–24155, printed pp. 199–201) and §§12.8–12.9 opening (27000–27058, printed p. 233). Section 11.4 gives generalized M-orthogonality context, not the Cholesky theorem; the exact local Cholesky and inner-product suppliers justify the B-norm definitions. Theorem 12.3 corroborates complex Schur existence and §12.9 states the homogeneous convention. The richer real-block argument is proved and checked locally.

No new web fetch or reading of other bibliography entries is claimed. No unresolved mathematical uncertainty or substantial missing prerequisite was identified.

## Consumer and published-content review

The QZ Definition change triggered direct dependency and reference-consumer searches over `items/` and `library/`. The local proposition received the necessary proof-only clarification. `thm-computed-qz-pair-has-certified-backward-error` proof 1.1/2.1 already uses signed additive errors and their norms, so needs no edit. Outside-batch `alg-shift-invert-and-harmonic-ritz-extraction` harmonic branch and `thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status` F3/F4 and proof 1.2 use statuses, finite termination, perturbed equivalence and diagnostics; neither assumes a positive discarded-entry sign. They remain compatible and need no outside repair. The A page summarizes the preserved contract correctly.

The reader reduction Definition change has only its local proposition, QZ procedure and A-page placement as direct/reference consumers. Each was checked against the corrected schedule. No consumer Statement/Definition changed, so no further hop is required. Owned frontier dependency evidence was appended to `briefs/tasks/frontier-dependency-ledger.md`; existing cross-batch inventory and stable IDs remain intact. No proposed withdrawal was removed.

No defective published item was confirmed. Published content remained read-only; no published-consumer ledger edit or lock was necessary.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-48.proof-contracts.json`: 21 items routed, nine HIGH/CRITICAL, zero tool errors. All nine reviewed in ascending dependency order before proceeding higher.
- Reflow on both edited items: unchanged; proof steps already occupy separate paragraphs with trailing tags.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on both edited items: two files, one proof checked, zero failures; algorithm not applicable, proposition pass. The proposition precheck field was then set to pass.
- `node tools/rendercheck.mjs` on both edited items: two files, YAML and all KaTeX spans pass.
- Exact rational checks: refuter d=1/2 threshold is accepted; positive, negative and zero discarded entries satisfy d+(-d)=0; perturbation magnitudes are unchanged. These are finite sanity checks, not a general proof.
- Strict batch proof-contract check initially found one unanchored new boundary note. Added its exact Definition step-2 locator, then reran: **21/21 items, zero errors and warnings**. This was a bookkeeping failure and generated no defect row.
- Final `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-48.proof-contracts.json --require-reviewed`: **21 items, zero errors**; all nine required reviews complete.
- After final item edits and reflow, the single required batched `node tools/proof-layout.mjs items/alg-finite-budget-qz-iteration-with-deflation-and-residual.md items/prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence.md`: **2 items, 6 steps, zero defects**.
- Defect-ledger append validated and recorded seven rows and regenerated the shared ledger view under its append lock. Local obligation/ledger coverage checked below; no judge, dispatch, decision hash stamping or engine gate battery was run.

All local mathematical and reporting obligations are complete. The engine owns subsequent stamps and gates. No owner decision is requested.
