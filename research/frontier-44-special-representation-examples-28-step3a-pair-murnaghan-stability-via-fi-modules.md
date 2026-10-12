# Step 3a scope review — `murnaghan-stability-via-fi-modules`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-murnaghan-stability-via-fi-modules-5b0c1bf854c5bd27`.
- Pair: A `murnaghan-stability-via-fi-modules` / B
  `murnaghan-stability-via-fi-modules-examples` (batch 28, orders 1586/1587,
  category `special-topics-in-representation-theory`, companion pointers both
  directions). A `requires` = `kronecker-coefficients-and-internal-products`,
  `character-polynomials-fi-modules-and-representation-stability`; B
  `requires` = A only, and nothing else in the run or plan consumes this pair
  except the B page.
- Decision: **sufficient**. Every designed definition, result and example is
  present (the current A inventory is a strict superset of the design), the
  cited sources carry the mapped claims at the recorded locators, and the pair
  supplies the interface `research/plan-spec.json` plans for it. No merger or
  enrichment is required; the non-blocking record notes below are for the
  owner's information only.
- Owned pair only. No scaffold, manifest, item, coverage, batch file, owner
  record or engine state was edited; this review writes only this report and
  the scope receipt.

## Evidence read

- Prose design: `research/plan-symmetric-group-representations-track.md` L50
  (index row “complete FI-module proof, reduced coefficients and exact global
  thresholds”), L154–155 (deliberate unsolved-positivity boundary), L201–209
  (§6 worked-example policy), L221 (“SYMR-13 and SYMR-14 meet only on the
  post-FI SYMR-15 stability page”); the item-level design is
  `research/symmetric-group-planning/proposed-inventory.md` §SYMR-15
  L437–456: A table L439–448 with 6 designed items, B table L450–456 with the
  2 designed finite items. `research/plan-spec.json` carries the page record
  with empty `items` and the same `requires`.
- Manifests: `research/frontier-44-special-representation-examples-28-batch-28.pages.json`
  — A page 15 items (dependency levels 0–13), B page 2 items (levels 14–15);
  the 15 A items are the 6 designed items plus 9 scaffold additions (seven
  local definitions/lemmas for the lambda-ring/vertex-operator/compatibility
  route, the Brion-formula theorem, and the all-admissible-rank expansion
  theorem). `…-batch-28.coverage.json` — 40 harvested rows
  (A: BOR 12, CEF 6, BRR 10, Macdonald 5; B: BOR 4, Macdonald 3), every A/B
  item except two mapped by an `included`/`inline` row (see note 1).
  `…-batch-28.cross-batch-dependencies.json` — 20 open edges (18 item, 2
  page) to batches 26/27 and the two required pages, all marked open because
  the supplier items are scaffolded but not yet authored; the edge list is
  exactly the expected in-run dependency record for a Step-3a scaffold.
- Batch records and owner decisions: `…-batch-28.notes.md` (native history,
  the one added local compatibility lemma, 15A+2B current inventory, maximum
  level 15), `…-owner-batch28-repair.md` (complete local proof route for
  `lem-padding-completion-is-compatible-with-the-internal-product` and the
  threshold; logged correction of the native false coefficientwise
  equivalence), `…-owner-batch28-repair-before/` (frozen 14A+2B native
  preimage), `…-owner-batch28-finite-checks.json`,
  `…-owner-batch28-readiness-pass.json`. The run's binding
  `…-owner-authoring-direction.md` and the `owner-final63` direction contain
  no instruction specific to this pair beyond the batch-28 repairs; the scope
  ledger lists this pair as batch-28 in-run scope with no step-3a receipt yet.
- No coverage-checklist/source-fetch tool rerun was needed for this pair:
  I verified the carrier files and the mapped claims directly (below).

## Inventory against the design, and the intended role

- A = 15 items. All 6 design rows are present with their designed content:
  `thm-murnaghan-stability-for-kronecker-coefficients` (existence via the
  finitely generated FI-module `V(alpha) ⊗ V(beta)` and uniform
  representation stability),
  `def-reduced-kronecker-coefficient`,
  `lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients`,
  `lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients`,
  `prop-reduced-kronecker-support-satisfies-size-triangle-inequalities`,
  `thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product`.
  The nine added items are exactly the local infrastructure the added
  threshold proof needs — lambda-ring specializations and sigma, iterated
  Schur coefficients, first-row-padding completion and `U_n`, the
  specialization/coproduct, sigma-kernel and vertex-operator lemmas, the
  internal-product compatibility lemma — together with
  `thm-brion-formula-for-reduced-kronecker-coefficients` (BRR Prop. 3.2 and
  identity (10)) and `thm-murnaghan-expansion-for-all-admissible-ranks`
  (BOR’s Murnaghan Theorem (2) in the Jacobi–Trudi completion), both of
  which the design’s source table already treats as part of the stability
  picture. No design row was dropped, weakened, or moved.
- B = 2 items = exactly the designed leaves: the source’s displayed
  `(2),(2)` products at ranks 4–9 with the stable row and the direct
  V-stability check at rank 8 / failure at rank 7 (example), and the
  rank-6 stabilization of `bar-g^{(2)}_{(2),(2)}` showing that the global
  product threshold is not a per-coefficient sharpness claim
  (counterexample). Both verify claims of its own A page; the B page has no
  consumers (dependency leaf confirmed: no item anywhere depends on a B-page
  item of another page).
- Subject coverage check: padded sequences and their exact partition
  threshold; the FI-module proof of Murnaghan’s theorem with its stable finite
  support; reduced coefficients with the sixfold nonnegative expansion and
  positivity criterion, the triangle inequalities and the top-degree
  Murnaghan–Littlewood LR case; Brion’s formula in both the two-alphabet and
  symmetric three-alphabet forms; the full expansion at every admissible rank
  in the Jacobi–Trudi completion, with signed straightening terms explicitly
  allowed to cancel below the stable range; and the exact global threshold
  `stab(alpha,beta) = |alpha|+|beta|+alpha_1+beta_1` with a genuine
  least-ness proof including the both-empty/one-empty cases. This is the
  design’s “complete FI-module proof, reduced coefficients and exact global
  thresholds”, read at the plan’s L221 interface: the FI machinery itself is
  owned by the required `character-polynomials-fi-modules-and-representation-stability`
  page (23 items, including `prop-fi-module-realizing-one-padded-irreducible-family`,
  `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`),
  which this A page consumes exactly.

## Source coverage and independent checks

- Carrier verification today: BOR 2009 cached PDF sha256
  `497b2e2219b85a65067662c6a83aeccb8e440f15332bcb17d3842bcf7010ddb0` (matches
  the batch notes); CEF arXiv:1204.4533v4 cached PDF sha256 prefix
  `1ff5dd9de3e3663d` (matches); BRR arXiv:1607.02887v1 re-fetched to
  `/tmp/growth.pdf`, sha256
  `09a44a991f4d17550bf75e853547e744a34972e667b8765f9df76e7a50e5a5b2` (matches the
  recorded hash byte for byte); Macdonald 2nd edition URL
  `https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf` live, HTTP 200,
  `Content-Type: application/pdf`.
- I read the mapped statements at their locators, including the complete
  proofs of the load-bearing ones: BOR Introduction pp. 1–2 (the displayed
  `(2),(2)` table, the stable values `bar-g^{(2)}=2`, `bar-g^{(4)}=1`),
  Murnaghan Theorem and Murnaghan–Littlewood Theorem p. 4 (the all-`n`
  expansion (2) in the Jacobi–Trudi convention and the triangle
  inequalities), Definition of `stab(alpha,beta)` and Theorem 1.2 p. 5,
  Lemma 2.1 with (8) and Littlewood’s identity (9) pp. 7–8 (the sixfold
  nonnegative expansion and `s_{alpha[n]}∗s_{beta[n]} = U_n R`), Lemma 3.1
  and the complete proof of Theorem 3.2 pp. 8–9 (the LR first-row and
  containment bounds giving `max{|gamma|+gamma_1} = N`, attained at
  `gamma = alpha+beta` through Murnaghan–Littlewood); BRR Lemma 2.1 p. 6
  (sigma identities, adjunction, reproducing kernel), the vertex operator
  (4)–(6) p. 7 with `sum_n s_{alpha[n]}[X]t^n = sigma[tX]s_alpha[tX-1]`,
  Proposition 3.2 with its complete proof and identity (10) pp. 9–10; CEF
  Proposition 3.4.1 and Theorem 3.4.2 pp. 23–24 with Proposition 2.3.6 and
  Theorem 1.13 as the quoted chain. Each mapped claim exists and says what
  the coverage records; I found no mismatch between source and scaffold in
  the mapped ranges.
- Counted dispositions: A page 18 `included`, 7 `inline`, 8 `out-of-scope`
  (33 rows); B page 2 `included`, 3 `inline`, 2 `out-of-scope` (7 rows);
  all out-of-scope rows being deliberate and appropriate for this role — BOR
  Theorem 1.1 recovery formula (belongs to the reduced-coefficient
  dictionary, not to stability/thresholds), BOR §4 row bounds and §5
  monotonicity/`stab(alpha,beta,gamma)`/N1–N2 per-coefficient bounds, BRR
  (7) per-coefficient range and §§3.3–8 growth theory, CEF Schur functors of
  FI-modules. None of these is needed by any claim or consumer of this pair;
  the global-versus-per-coefficient boundary is instead discharged by the B
  counterexample, which is exactly the design’s intent.

## Prerequisites

- All 40 declared dependency ids of the 17 items exist in the published
  library or in the current run scaffold; checked item by item.
- Transitive closure of both pages (17 seeds) visits 982 items: 939 are
  published library items (all with `status: published`, none draft) and 43
  are still-unpublished current-run scaffold items, all in batches 26–28
  (7 + 19 + 17; the batches 1–4 hits on the closure path are published items
  that those A-page manifests also list). Zero absent ids were
  found anywhere in the closure — no unmet prerequisite at the existence
  level.
- The specific supplier interfaces the A page’s added lemma and threshold
  proof consume were read in the batch 26/27 manifests and match: the padded
  sequence is defined only above
  `n_0 = max{|alpha|+alpha_1,|beta|+beta_1,|gamma|+gamma_1}` (the consumer
  explicitly extends by zero below threshold, and the cross-edge evidence
  records this); `V(lambda)` has `weight = |lambda|` and
  `stab-deg = lambda_1` and vanishes below `|lambda|+lambda_1`; tensor
  products of finitely generated FI-modules are finitely generated; finite
  generation is equivalent to uniform representation stability over
  characteristic zero.
- Cross-batch edges to batches 26/27 stay open until those supplier items
  are authored, which is the normal Step-3a/3b state; the two required pages
  are sibling pairs under separate scope reviews and are ordered before this
  pair (orders 1582–1585 vs 1586). No cyclic edge, no consumer outside the
  pair. No uncertainty requiring escalation was found.

## Deliberate boundaries (not omissions)

1. The expansion theorem is stated for every **admissible** rank
   `n >= max{|alpha|+alpha_1, |beta|+beta_1}` — exactly the range where both
   padded inputs are honest partitions; below it `g_n(alpha,beta,gamma)` is
   undefined by the batch-26 definition, and no consumer needs sub-admissible
   ranks. This is the corrected form of the native all-rank theorem, whose
   false coefficientwise-equivalence clause was removed in the owner repair;
   the signed Jacobi–Trudi straightening behaviour at small **admissible**
   ranks is retained in the statement.
2. Per-coefficient stabilization bounds (`N_0`, `N1`, `N2`,
   `stab(alpha,beta,gamma)`) and Brion’s monotonicity are excluded on
   purpose; the page claims the exact **global product** threshold and
   explicitly does not claim per-coefficient sharpness.
3. No general combinatorial or positivity rule for Kronecker coefficients is
   asserted; the page keeps the unsolved positivity boundary explicit
   (positivity criterion only), as the plan’s L154–155 requires.

## Non-blocking record notes (owner may act later; no scope effect)

1. Two items have no dedicated coverage row: `def-iterated-schur-coefficients`
   (BOR §2 defines `c^delta_{alpha,beta,gamma}` immediately before equation
   (7), p. 7) and `thm-murnaghan-expansion-for-all-admissible-ranks` (BOR
   Murnaghan Theorem (2) p. 4 plus Littlewood’s identity (9) pp. 7–8). Sourcing
   is evident and already implied by the rows mapped to the neighbouring
   items; the coverage rows could be refreshed by the owner when the next
   coverage pass touches batch 28. This is bookkeeping, not a scope omission.
2. Two proof-route edges are not in the declared `deps` of
   `thm-brion-formula-for-reduced-kronecker-coefficients` and
   `thm-murnaghan-expansion-for-all-admissible-ranks`: both identify the
   kernel element `R_{alpha,beta}` with `sum_gamma bar-g s_gamma` by
   comparing with the FI-stable expansion of
   `thm-murnaghan-stability-for-kronecker-coefficients`. That supplier sits on
   the same page at level 8, before levels 10/11, so authoring order and
   acyclicity are unaffected; flagging for the owner’s dependency-record
   refresh, not for a scope change.
3. Source erratum, with exact evidence: BRR arXiv:1607.02887v1 §2.3 equation
   (3) prints `p_lambda ∗ p_mu = delta_{lambda,mu} z_lambda^{-1} p_lambda`
   (verified twice in the PDF text extraction at printed p. 6). Under the
   paper’s own Schur-orthonormal Hall form the correct diagonalization is
   `z_lambda p_lambda`: from character data `p_2∗p_2 = 2p_2 = z_2 p_2` and
   `p_3∗p_3 = 3p_3 = z_3 p_3`, and the printed form would contradict the
   paper’s immediately following `s_mu ∗ s_nu = sum_lambda g s_lambda`.
   The scaffold uses the standard `z_lambda` normalization
   (Macdonald I.7; the library’s power-sum/internal-product items), and the
   owner repair explicitly records this normalization, so no scaffold change
   is needed; future authors must not import BRR (3) verbatim.

## Uncertainty, honestly stated

- I verified the mapped statements and read the complete proofs of the
  load-bearing source results (BOR Lemma 2.1/Thm 3.2, BRR Prop. 3.2, CEF
  Prop. 3.4.1/Thm 3.4.2). I did not re-read all 16/42/54/486 pages of the
  four carriers myself, so I do not exclude a further relevant statement
  elsewhere in them; the coverage file’s full-read claims for the unmapped
  ranges are the harvest record and were not independently re-audited here.
- Scope only: I did not check proof correctness, source-proof correctness, or
  the authored forms of the supplier items; those remain Step 3b/Step 5
  obligations. The scaffold’s own finite checks and readiness receipts are
  owner records, not independent audits.
- If the owner intended this page to also carry the reduced-coefficient
  recovery dictionary (BOR Theorem 1.1) or per-coefficient stabilization
  bounds, those would be enrichment candidates rather than omissions: the
  controlling design (proposed-inventory §SYMR-15), the plan’s role line,
  the coverage dispositions and the pair’s only consumer (its B page) all fix
  the current stability/threshold scope. I did not record `insufficient`.

## Next action

Scope receipt recorded via `tools/step3-decisions.mjs record-scope` with
decision `sufficient` and this report path. Owner: no scope amendment, merge
or enrichment is needed; Step-3b authoring of this pair may proceed on the
current scaffold, and the three record notes above can be folded into the
next dependency/coverage refresh for batch 28.
