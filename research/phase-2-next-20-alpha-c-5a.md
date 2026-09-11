# Alpha 5A — group c (batches 3 and 4)

Run: `phase-2-next-20`. Group c covers batch 3 (orders 288.111/288.112,
characteristic functions; 288.117/288.118, conditional distributions) and batch 4
(order 288.119, discrete-time martingales). Scope read from
`research/phase-2-next-20-step5-scope-3.json` (51 items, four pages) and
`research/phase-2-next-20-step5-scope-4.json` (30 items, two pages). This is
direct group adjudication of the authored mathematics, not a repeat of the
Step-3 scaffold, source-inventory or risk-routing audit, and not an independent
judge or a publication stamp.

## Verdicts

All 81 items and six pages received one decision with obligation
`authored:<batch>:<id>` in `research/phase-2-next-20-alpha-c-5a-decisions.json`.

- **Accepted: 86 obligations.** Batch 3: all 51 items and the four pages except
  the one repaired item below. Batch 4: all 30 items and both pages.
- **Repaired: 1.** `cor-density-inversion-from-an-integrable-characteristic-function`
  (batch 3), correction `p2-next20-owner-density-inversion-review-explanation` of the erroneous explanation introduced during 5a; the original singleton-factor diagnosis was a false positive.
- **Escalated: 0.** No item or page was left with unresolved mathematics and no
  owner decision is requested from this group.
- **Withdrawn: 0** (nothing proposed for withdrawal, so nothing to preserve for 5B).

No local definitions or lemmas were needed: every declared dependency of every
reviewed item exists as a current item file and states the fact the consumer
cites. No page, pair, manifest item order, page header, or plan splice was
changed.

## Batch 3 — characteristic functions, inversion, continuity

Page `characteristic-functions-inversion-and-continuity` (17 items) and its
companion (8 examples) were read item by item. Checked in particular:

- `lem-basic-properties-of-characteristic-functions`: `|e^{iu}-1|<=min(2,2|u|)`
  from the sine/cosine MVT bounds, the dominated sequence
  `min(2,2|x|/n)`, and the uniform `delta=1/n` step (no choice).
- `lem-uniform-sine-integral-bound-and-dirichlet-value` and
  `thm-levy-inversion-formula`: the damped integration-by-parts bound
  `|int_A^B w sin|<=2w(A)`, `J_eps=arctan(1/eps)` (primitive re-differentiated),
  the Fubini majorant `2T(b-a)`, and the kernel limit
  `pi(sgn(x-a)-sgn(x-b))` with the half-mass at `x=a` and `x=b`.
- `thm-tightness-from-characteristic-function-equicontinuity-at-zero`: the
  triangular weight has mass one, `K_delta(x)=2(1-cos(delta x))/(delta^2x^2)`,
  `K_delta<=1/4` at `|x|>=4/delta` (checked `(1-cos4)/8~0.21`), giving the
  displayed `4/3` tail bound and tightness with `delta<r`.
- `thm-levy-continuity-theorem-converse` / `cor-characteristic-function-criterion-for-weak-convergence`:
  the finite exceptional block, Prokhorov on Polish `R`, uniqueness by the
  characteristic function, and the least-index test argument in place of a
  choice-dependent subsequence selection.
- `thm-cramer-wold-device`: projection identity
  `Phi_rho(theta)=phi_{(p_theta)_*rho}(1)`, coordinate tightness via `Q^d`,
  continuous mapping, and the separate `d=0` case.
- Examples: uniform/Gaussian/Cauchy transforms (including the IBP identity
  `int ix e^{itx} g = -i[e^{itx}g] - t int e^{itx}g` and the arctangent value
  `int(1+t^2)^{-1}=pi`), the triangular inversion, and both counterexamples
  (uniform laws escaping every compact set; even/odd binomial weights with
  moments equal through order `N-1`).
- `thm-uniqueness-of-a-law-from-its-characteristic-function`: read the supplier
  `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`
  (finite complex Borel measures on `R^n`, `n>=1`, AC) and confirmed the
  dimension-one instance, variation-one check, and both directions of the
  symmetry equivalence.

Page `conditional-distributions-and-regular-conditional-probability`
(18 items) and its companion (8 examples) were read item by item. Checked in
particular:

- `thm-measurability-of-integration-against-a-kernel`: the Dynkin class for
  finite kernels (rectangles, pointwise-finite complements, increasing
  disjoint unions) and the reduction to a specified common exhaustion
  `T_n↑T`; the real case uses `D={I_{|f|}<infinity}` without subtracting
  infinities.
- `lem-kernel-composition-is-well-defined-and-associative`: the iterated
  identity for indicators, simple functions and increasing limits, and
  pointwise associativity.
- The existence chain
  `lem-simultaneous-rational-conditional-distribution-function-versions` →
  `lem-rational-conditional-distribution-functions-produce-real-regular-kernels` →
  `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`:
  countable version selection, one measurable null union inside `G`, the
  `inf_{q>x}G_q` right-continuous CDF with `F(r)=G_r`, the delta-zero filling,
  bimeasurable coding onto a Borel `B⊆[0,1]`, and the explicit support repair
  `{b!=1}` that is what guarantees mass one at every point.
- `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`:
  the dyadic bin lifts including the `k=2^n` term (so `u_q=1` is exact), the
  equality `h_q∘Y=u_q`, the everywhere-good filling, and the final `K∘Y=L`
  identity.
- `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` and
  `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`: read
  the determining-algebra supplier
  (`cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`,
  AC) and verified the marginal-a.e. uniqueness transfer `beta(D)=0`.
- `thm-conditional-density-formula` / `thm-bayes-formula-for-dominated-kernels`:
  `beta=m d nu`, `nu({m=infinity})=0`, the fixed probability filler on both
  excluded normalizer sets, and the claim that the displayed event identities
  are choice-free.
- Examples: finite partition including a zero-mass cell, bivariate normal
  conditional law (completing-the-square factorization, `|r|=1` excluded),
  Pólya-type triangular conditioning, deterministic kernel
  `K_gK_h=K_{h∘g}`, and the two null-fibre counterexamples (the `0/0` density
  ratio at `y=2`; two kernels differing at the single value `y=1/2`).

## Batch 4 — discrete-time martingales

Page `discrete-time-martingales` (21 items) and its companion (9 examples) were
read item by item. Checked in particular:

- `lem-multistep-martingale-characterization`: the tower identity with
  conditional order in all three signs and the `n=m` base case.
- `thm-martingales-and-martingale-differences-correspond` and
  `lem-martingale-differences-are-orthogonal-in-l2`: known-variable conditioning
  of `M_{n-1}`, integrability of `D_iD_j` by Cauchy–Schwarz before conditioning,
  and the finite square expansion.
- `thm-convex-functions-of-martingales-are-submartingales` and
  `cor-absolute-value-and-powers-of-a-martingale-are-submartingales`: the
  explicit image-integrability hypothesis, the nondecreasing-`phi` case, and
  the `p=1` boundary.
- Transforms and Doob decomposition: the integrable-product domain,
  `E[Z_k-Z_{k-1}|F_{k-1}]=H_k d_k` with `d_k>=0`, the normalized compensator
  `A_n=sum E[X_k-X_{k-1}|F_{k-1}]`, increment-by-increment uniqueness, and
  `A_n-A_{n-1}=E[X_n-X_{n-1}|F_{n-1}]` for the submartingale equivalence
  (both directions and the single-null-set path form).
- `thm-square-minus-predictable-quadratic-variation-is-a-martingale` and
  `cor-second-moment-is-the-expected-predictable-quadratic-variation`: the
  expansion `M_n^2-M_{n-1}^2=2M_{n-1}D_n+D_n^2`, the random initial `M_0`
  (with the centered `W=(M-M_0)^2-<M>` version), and the three finite terms in
  `E M_n^2 = E M_0^2 + E<M>_n`.
- Examples/counterexamples: partial sums and products of independent variables
  (including signed factors), the finite-horizon likelihood-ratio martingale,
  the urn construction by explicit interval splitting, dyadic conditional
  averages, the three-point model separating `[S]` from `<S>`, and the three
  witnesses (adapted-but-not-martingale `X_n=n`; unbounded predictable `H_1=2^j`
  with `E|G_1|=infinity`; submartingale with `X_1=-1<X_0=0` on an atom of mass
  `1/2`).

## The explanation correction

The original 2C/n bound was sound: x lies inside (x-1/n,x+1/n), so singleton mass is at most interval mass, at most C(b-a). The 5a diagnosis mistakenly treated x as an endpoint and introduced an erroneous endpoint-halving explanation. Current repair replaces that explanation by explicit interior monotonicity. The historical singleton-factor finding is a false positive, not a defect of the original proof.

The current repaired verdict concerns the explanation introduced during this review. The append-only ledger preserves `p2-next20-5a-c-density-inversion-singleton-factor` as the historical false diagnosis and records the correction in `p2-next20-owner-density-inversion-review-explanation`; both are owned by the exact item decision.

## Source evidence

The items cite Durrett, *Probability: Theory and Examples* (5th ed.), Norris,
*Probability and Measure*, and Varadhan, *Probability Theory* (Ch. 4). No new
unfamiliar result required a fresh retrieval: the mathematics reviewed is the
standard characteristic-function/inversion/continuity and conditional-kernel
material, and, where a precise hypothesis mattered, the current item file of the
supplier was read instead of a secondary source. Checked hypotheses and their
locations are recorded in the decisions' evidence strings and in the contract
`risk_review` entries; the exact scope of each check is the current text of the
named item, not a whole-closure certificate.

## Local suppliers

None required. A dependency-existence scan over all 81 items found zero missing
supplier files, and the declared dependency lists in the item frontmatter match
the batch manifests exactly. No supplier-only mention was treated as satisfying a
dependency.

## Risk reviews (HIGH/CRITICAL)

`node tools/risk-report.mjs ... --require-reviewed` routes 41 items for batch 3
(39 high/critical) and 21 for batch 4 (19 high/critical). Complete
`risk_review` entries with status `complete` were written into both owning
contracts during this read — batch 3 for all 39 flagged items, batch 4 for all
19 — each naming the checked steps, the cited-hypothesis checks performed, and
the boundary cases examined. Checks then report 0 errors for both contracts.

## Published findings

No defective published item was found in this scope. All 81 reviewed items carry
`status: draft`; the published suppliers that appear in their closures (for
example `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`,
`thm-standard-borel-spaces-admit-bimeasurable-real-codings`,
`cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`,
`thm-taking-out-what-is-known`, `thm-conditional-jensen-inequality`) were read at
their cited statements and matched the uses made of them here. No edit was made
to any published carrier and the published-consumer ledger was left untouched
(no lock taken).

## Cross-batch / frontier ledger

Batches 3 and 4 have five declared cross-batch edges (all into batch 15's Fourier
machinery), each with a current `verified` review row in
`research/phase-2-next-20-batch-3.cross-batch-dependencies.json`; batch 4
legitimately has no cross-batch edge and its input is the empty array. No
dependency declaration changed in this read, and
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-20 --require-reviewed`
passes. No shared-plan or Phase-2 amendment is requested from group c.

## Local checks run

- Dependency existence and manifest/frontmatter consistency over all 81 items:
  0 missing dependencies, 0 mismatched dependency lists, page header item order
  identical to the manifests for all six pages.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-density-inversion-...`:
  PASS, 0 failing; `reflow`: unchanged.
- `node tools/risk-report.mjs research/phase-2-next-20-batch-3.proof-contracts.json --require-reviewed`:
  0 errors, 41 routed. Same for batch 4: 0 errors, 21 routed.
- `node tools/step5-scope.mjs check --run phase-2-next-20 --phase adjudicate`:
  group c shows exactly its 87 expected obligations and no error other than the
  engine-owned `decision-stale` stamp (the engine runs
  `step5-scope.mjs stamp` before the adjudication gate; no subject hash was
  self-stamped here). The remaining `decisions-missing` errors name groups a, b,
  d, e, f, g, h, which are outside this dispatch.

## Blockers and uncertainty

- No blocker for group c. The decisions file deliberately carries no
  `subject_sha256`: the engine's stamp gate owns that hash, and an owner-side
  stamp decision is not requested.
- Honest scope note: the check performed here is a direct review of the assigned
  authored items and pages against their cited suppliers. It is not an
  independent judge, not a whole-closure audit, and it does not re-audit
  published supplier proofs beyond the cited statements read above.
