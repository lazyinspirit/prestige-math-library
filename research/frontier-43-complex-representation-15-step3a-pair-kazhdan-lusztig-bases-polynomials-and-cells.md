# Step 3a scope review — `kazhdan-lusztig-bases-polynomials-and-cells`

- Run: `frontier-43-complex-representation-15`; role alpha; label
  `step3a-pair-kazhdan-lusztig-bases-polynomials-and-cells-7f3fdeba4e18c691`.
- Pair: A `kazhdan-lusztig-bases-polynomials-and-cells` (order 1540, batch 7,
  category `special-topics-in-representation-theory`, design label KL-1) / B
  `kazhdan-lusztig-bases-polynomials-and-cells-examples` (order 1541). Companion
  pointers agree A↔B, and the B page requires only its A page. Reviewed
  2026-10-07.
- Owned pair only. No scaffold, manifest, item, coverage, batch file, plan or
  owner record was edited. Outputs: this report and the `record-scope` receipt.
- **Decision: `sufficient`.** All 14 KL-1 design ids are present id-for-id with
  their designed claims; the 7 added A items are the local suppliers that the
  design's own proof joints name (Bruhat-order basics, Verma's sign sum, the
  multiplication formula, Knuth equivalence, the star operations, the
  tableau-fibre inclusion), each recorded with its reason; the B page delivers
  the three designed computations (complete S₂/S₃, a singular interval, RSK
  cells); the six A-page sources are independent complete treatments and every
  fetch stamp is current; all 31 item dependencies and the 4 page-level
  `requires` resolve; there are no in-run consumers and no cross-batch edges.
  No designed topic, result or example is omitted, so no merger or enrichment
  is required. The findings in §5 are Step-3b correctness/route repairs, not
  scope omissions; three of them edit statements and will therefore require a
  fresh owner `proceed` for the amended scope once applied.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-7.pages.json`
  (A: 21 items, B: 3 items; every statement and strategy read in full),
  `...-batch-7.coverage.json` (6 A source rows, 5 B source rows, 56 harvested
  results), `...-batch-7.cross-batch-dependencies.json` (`[]`),
  `...-batch-7.notes.md` (conventions, source routes, the one recorded owner
  decision), and the 24 Step-1 readiness receipts
  `research/frontier-43-complex-representation-15-step1-<item>.json` (24/24
  present; readiness is not mathematical approval).
- Design/prose: `research/plan-kazhdan-lusztig-track.md` §1 KL-1 (the A table
  of 14 proposed items, the `requires` line, the B companion sentence), §2
  "KL-1 examples" (the four-item B inventory), §4 hard-gate checklist (in
  particular "KL basis existence is a triangular induction; positivity comes
  later from Soergel Hodge theory") and the KL-2 row
  `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`.
- Plan and scope: `research/plan-spec.json` orders 1540/1541 (kinds, companion,
  category, `requires` identical to the manifest; empty item arrays, so the
  scaffold inventory displaces nothing), `...-scope-ledger.json` (both pages
  owed in batch 7), `...-closeout-scope.json` and
  `...-supporting-plan-ownership.json` (no KL-specific instruction),
  `research/kazhdan-lusztig-planning/proposed-items.json` (18 KL-1 ids:
  14 A + 4 B).
- Owner records: `...-owner-authoring-direction.md` read in full — it governs
  batches 13, 14, 1, 5 and 4 only and imposes no pair-specific direction on
  batch 7 beyond its standing rules (no `proved_here: false`, no
  `external_refs`, carry actual AC assumptions; every argument on this pair is
  finite and combinatorial, so all items are choice-free).
- Published suppliers actually consumed (status `published` on disk, checked
  now): `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, `def-symmetric-group`,
  `def-weyl-group-and-length-for-finite-gl-n`,
  `def-finite-symmetric-group-and-permutation-notation`,
  `def-bruhat-order-on-the-symmetric-group`,
  `def-bruhat-order-on-a-finite-weyl-group`, `thm-robinson-schensted-correspondence`,
  `cor-rsk-symmetry-under-inversion`, `def-row-insertion-and-bumping-route`.
  The four A-page `requires` are published pages: the generic-Hecke items home
  on `principal-series-representations-of-gl-n-over-a-finite-field`, the RSK
  items on `the-hook-length-formula-and-rsk-correspondence`, and
  `def-bruhat-order-on-the-symmetric-group` on
  `permutation-statistics-inversions-and-eulerian-numbers`.

## 2. Design ∶ scaffold comparison (scope only)

- A page. All 14 KL-1 design items are present id-for-id and in proof order:
  the normalized Hecke algebra and bar involution; well-definedness of the bar
  involution; Bruhat intervals and R-coefficients; the R-recursion with
  support/degree/parity/symmetry/inversion clauses; the existence and
  uniqueness theorem for the Kazhdan–Lusztig basis; the classical `q = v^{-2}`
  normalization with the μ-coefficient; the descent recursion; inverse
  polynomials; the inversion formula; the left/right/two-sided preorders and
  cells; the star-operation edge lemma; μ-edge and cell transport; the
  recording-tableau lemma; and the RSK classification of cells. The seven added
  items are exactly the missing local inputs named by the design's strategies
  or required to close them: `lem-bruhat-order-basic-properties-for-permutations`
  (the subword/lifting/interval facts the R-induction uses),
  `lem-verma-sign-sum-over-bruhat-intervals` (the leading-coefficient input),
  `thm-kazhdan-lusztig-basis-multiplication-formula` (the multiplication formula
  the recursion and the preorders are generated from, Lusztig §6),
  `def-knuth-and-dual-knuth-equivalence-for-permutations` and
  `thm-knuth-equivalence-classes-are-insertion-tableau-fibers` (Knuth's theorem
  used by the "easy" inclusion), `def-star-operations-on-the-symmetric-group`
  (the labelled star operation of Jensen Definition 5.1 / Ariki §3.2), and
  `prop-same-insertion-or-recording-tableaux-imply-cell-equivalence` (Ariki
  Proposition 3.8). Each addition is motivated in the batch notes; none
  replaces a designed item.
- Conventions. The page fixes `H_s² = 1 + (v^{-1} - v)H_s` with
  `q = v^{-2}`, matching EW §3.2 under `H_x = v^{ℓ(x)}T_x`, and deliberately
  keeps all R-statements in the page's own variable `v` (the batch notes record
  why no single printed classical R-normalization was adopted). The dictionary
  with RG-13 (`T_i² = (v₁₃-1)T_i+v₁₃`, `q = v₁₃`) is displayed and I checked it:
  the substitution gives `H_{s_i}² = 1+(v^{-1}-v)H_{s_i}` and the transported
  right-multiplication rule `H_wH_{s_i} = H_{ws_i}` (`ℓ` up) /
  `H_{ws_i} + (v^{-1}-v)H_w` (`ℓ` down), which is exactly the published
  standard-basis theorem's rule for `T_w`.
- B page. The three designed computations are delivered in full: complete S₂/S₃
  bar images, KL basis and multiplication checks; the singular interval
  `[s₂, s₂s₁s₃s₂] ⊂ S₄` (ten elements, `P_{b,w} = 1+q`, a μ-pair with
  `ℓ(w)-ℓ(b) = 3`, the descent recursion at that pair, and the inverse
  polynomials `q'` with the matrix identity); and the RSK cells in S₃ with the
  ten S₄ left cells and the descent-set caveat. The design's §2 fourth B
  entry, `cex-kl-positivity-does-not-follow-from-triangular-existence`, is not
  built; the batch notes record why (a genuine counterexample needs the
  unequal-parameter theory, outside this pair's scope and sources) and refer the
  disposition to the owner (defer to KL-8 or drop). This is an owner
  disposition already on record, not a gap in the §1 companion content; it is
  repeated in §5 for visibility.
- Boundaries (deliberate, not omissions): positivity of the Kazhdan–Lusztig
  polynomials is deferred to KL-2 (`cor-positivity-…`, via Soergel Hodge
  theory); parabolic/singular variants are KL-5; the Koszul/Ext enhancement is
  an explicitly reserved later frontier. The page's own consumer interface is
  satisfied: its in-run consumer is only the B companion, and the design-level
  consumer KL-2 (`soergel-intersection-forms-and-hodge-theory`, order 1542,
  outside this run) needs the `H̲`-basis, the multiplication formula and the
  structure constants, all present.

## 3. Sources and coverage

- Six independent treatments back the A page and five the B page: EW
  (arXiv:1212.0791, 45 pp, `01039f543cdd06f1`), Lusztig's book
  (arXiv:math/0208154v2, 141 pp, `6329366ceac9317c`), Ariki
  (arXiv:math/9910117, 18 pp, `461c3e0c172ba272`), Jensen's dissertation
  (140 pp, `0148961ec36db858`), Knuth (Pacific J. Math. 34, 23 pp,
  `24110cfb5d82f479`) and Ram's lecture notes (HTML, `c50d0a6aa951ae0c`). All 11
  source rows are fetch-verified (re-run today: `11/11 fetch-verified`,
  `11/11 resolved`) and `coverage-checklist … --require-destination` reports
  `2 pages, 56 harvested, 0 errors, 0 warnings`. The two declines are recorded
  with reasons (EW's trace/bilinear-form paragraph, used by the later
  Soergel pages; Lusztig §6.8's negative-parameter sign convention, unequal
  parameters).
- Divergence from the design's source ledger (recorded, not a gap): §3 of the
  design names Björner–Brenti and Casselman for KL-1's recursions and the
  edge-transport calculation; the batch instead proves those routes from
  Lusztig §2–§10, Ariki §2–§3, Jensen §5 and Knuth §5–§6, with EW §3.2 and Ram
  Ch. 1 for the normalization and Bruhat-order background. That is still six
  independent treatments, above the two-treatment minimum, and both
  design-cited texts remain available if the owner prefers that route.

## 4. Prerequisites

- All 31 distinct item dependencies resolve: 11 published items on disk and 20
  items of this batch; nothing is missing and no dependency points at another
  batch of this run (`cross-batch-dependencies.json` is `[]`, and no item of any
  other batch cites a batch-7 id). The four page-level `requires` are published
  pages (checked).
- Every `[[…]]` target in every statement/strategy resolves to a batch item, a
  published item, or a page-level link, with one declaration-hygiene exception:
  the B item `ex-rsk-left-right-and-two-sided-cells-in-s-three` cites
  `[[def-row-insertion-and-bumping-route]]` in its statement but does not
  declare it in `deps` (it is available transitively through
  `thm-robinson-schensted-correspondence`). Step-3b should add the direct
  declaration.
- No pair-consumer edge or backlog item is blocked by this batch.

### Unmet prerequisite found (confirmed, small, local)

The items below invoke an anti-automorphism `♭` of `H_v(n)` with
`♭(H_w) = H_{w^{-1}}`, and its compatibility with the bar involution
(`♭∘ι = ι∘♭`), attributing it to
`lem-the-hecke-bar-involution-is-well-defined`:

- `thm-r-polynomial-recursion-and-degree-bounds`, clause (d), for
  `r_{y^{-1},w^{-1}} = r_{y,w}` (also the `\bar R = sRs` form used in the
  inversion formula);
- `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`, for the
  symmetry `p_{y^{-1},w^{-1}} = p_{y,w}` (and through it the right-descent form
  of `thm-kazhdan-lusztig-polynomial-recursion` and the right-cell clause of
  the classification theorem);
- `thm-kazhdan-lusztig-basis-multiplication-formula`, for the right-hand
  version of the formula;
- also `def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells`
  (`x ≤_L y ⇔ x^{-1} ≤_R y^{-1}`, cited to Lusztig 8.1 but not closed locally).

Evidence of absence: the referenced lemma's statement (manifest item 2)
contains only `ι` and the identity `ι(H_w) = H_{w^{-1}}^{-1}`; a scan of the
batch manifest shows `♭` appears only in those strategy texts and in no
statement; no other batch item defines it. Required prerequisite claim and
hypotheses (no hypotheses beyond the presentation): the `A`-algebra
anti-automorphism `♭` with `♭(H_{s_i}) = H_{s_i}` (well defined because the
presentation is invariant under reversing products), `♭(H_w) = H_{w^{-1}}`,
and `♭` commuting with `ι`. Available routes: prove it inline by the universal
property of the presentation (elementary, and the page's own definition
supplies the presentation), or cite the library's draft item
`lem-hh-hecke-anti-involution-bar-and-normalization` (status `draft`, homed in
the separate `frontier-42-coxeter-32` run; it states exactly this reversal
anti-involution, generator invertibility and `\overline{T_w}=T_{w^{-1}}^{-1}`,
in the generic Hecke normalization, so a normalization translation would be
needed). Recommended owner action: add the clause to the bar-involution lemma
(a statement change, hence a fresh scope receipt) or prove the symmetries
inline. This is a confirmed scaffold-internal gap, but small, local and
standard.

### Further prerequisite observation (uncertainty, not a confirmed gap)

`def-star-operations-on-the-symmetric-group`'s well-definedness clause uses the
rank-two parabolic coset structure of `S_n` ("the coset consists of the six
listed elements, of lengths `ℓ(w̃)+k`"; uniqueness of the shortest coset
representative; the four non-extreme elements are `D_i`), asserting it as
standard (Jensen Definition 5.1, Ariki §3.2). No batch item and no published
item states it. Two draft library items exist —
`def-cg-parabolic-quotient-and-two-sided-minima` and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (both
`draft`, both from `frontier-42-coxeter-32`) — but neither is cited. The facts
are elementary and locally provable; Step-3b should either prove the coset
clause inside the definition's well-definedness or declare a supplier.

## 5. Findings requiring Step-3b action (not scope omissions)

Each finding below was reproduced by an independent computation in
`/tmp/kl-scope` (exact Laurent-polynomial arithmetic, no floating point; the
Hecke algebra is built from the published right-multiplication rule, the
R-matrix from the item's own recursion, and the `H̲`-basis from bar-invariance
and triangularity). The computations reproduce the pair's own S₂/S₃ displays
and the S₄ KL basis, so they are a check of the scaffold's data, not a
re-derivation of the literature.

1. **`thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`, strategy:
   wrong induction equation and wrong sign in the explicit solution.**
   The strategy writes `u_x − \overline{u_x} = Σ_{x<y≤w} r_{x,y}u_y` and then
   `u_x := −Σ_{n<0} γ_n v^n`. The bar-invariance of
   `H̲_w = Σ_y u_y H_y` gives `u_x − \overline{u_x} = Σ_{x<y≤w} r_{x,y}\overline{u_y}`
   (the bars on `u_y` are needed), and then the solution in `vZ[v]` is the
   *positive*-power part `u_x := Σ_{n>0} γ_n v^n` of the (antisymmetric)
   right-hand side. Counterexamples from the pair's own data:
   (i) S₂, `r_{id,s} = v−v^{-1}`: the printed formula gives
   `u = v^{-1} ∉ vZ[v]`, while the B page's own value is `u = v`;
   (ii) S₃, `x = id`, `w = 231`: `u_{id,231} − \overline{u_{id,231}} = v² − v^{-2}`,
   but the printed right-hand side is
   `(v−v^{-1})v + (v−v^{-1})v + (v²−2+v^{-2}) = 3v² − 4 + v^{-2}`; with the
   bars on `u_y` it is `(v−v^{-1})v^{-1} + (v−v^{-1})v^{-1} + (v²−2+v^{-2}) = v² − v^{-2}`,
   and the printed formula would give `u = v^{-2}` where the page's own KL
   basis has `p_{id,231} = v²`. The corrected construction (bars in the
   equation, positive-power solution) reproduces every displayed S₃ value and
   the full S₄ KL basis. Strategy/route edit only — no statement change.
2. **`thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`, statement:
   the "integer nonnegative coefficients" clause exceeds the KL-1 contract.**
   The statement's last clause claims every `H̲_w` has integer nonnegative
   standard-basis coefficients. Integrality and the parity clause are part of
   the design's KL-1 contract, but nonnegativity (= `P_{y,w} ∈ N[q]`) is not:
   the design's hard-gate checklist reserves it ("positivity comes later from
   Soergel Hodge theory") and locates it on KL-2 as
   `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`. The
   recorded strategy line "Nonnegativity is read off from the explicit
   construction of the `u_x`" is not established by that construction (the
   `u_x` are positive parts of sums whose `r`-coefficients have both signs).
   Recommended owner action: delete "nonnegative" (keeping integrality,
   parity, support and degree), or keep the claim only if the owner decides to
   carry a positivity proof here and adjusts KL-2 accordingly. Statement
   change — a fresh owner `proceed` would be required after the edit.
3. **`ex-kazhdan-lusztig-bases-for-s-two-and-s-three`, clause (c): the left
  factor `H_{213}` should be `H_{132}`.** The clause claims
  `H̲_{213}H̲_{231} = H̲_{321}+H̲_{132}` "here `s₂·231 = 321`". With
  `s₂ = 132` (the library's `s_i = (i i+1)`) and `s₂·w` the left
  multiplication (swap the values 2 and 3), the case `s₂·231 = 321 > 231`
  of the item's own multiplication formula gives
   `H̲_{132}H̲_{231} = H̲_{321} + μ(132,231)H̲_{132} = H̲_{321}+H̲_{132}`, which
   I verified by direct expansion; on the other hand `s₁·231 = 132 < 231`, so
   the first case gives `H̲_{213}H̲_{231} = (v+v^{-1})H̲_{231}`, not
   `H̲_{321}+H̲_{132}`. The surrounding sentence (`s₂`, `μ(132,231)=1`) already
   fixes the intended factor, so only the symbol is wrong. Statement change —
   fresh owner `proceed` required after the edit.
4. **`ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval`, clause
   (c): the list of `z`'s in the vanishing sum includes an element not in the
   interval.** The clause says "the only `z ∈ [b,2413]` with `s₂z<z` are 1324
   and 1342". Actually `1342 ≰ 2413` (rank criterion:
   `r_{1342}(3,2) = 1 < 2 = r_{2413}(3,2)`), so 1342 is not in `[b,2413]`; the
   interval is `{1324,1423,2314,2413}` and the only element with `s₂z<z` is
   1324, for which `μ(1324,2413)=0` because `ℓ(2413)−ℓ(1324) = 2` is even (the
   definition makes μ vanish on even length differences). The intended
   conclusion — the sum is empty, so the recursion returns `P_{b,w}=1+q` — is
   correct and independently verified. Statement change (reword the
   parenthetical) — fresh owner `proceed` required after the edit.

For completeness, the rest of the pair's distinctive content was checked and
is consistent: the S₂/S₃ bar images, KL basis and μ-data; `P_{b,w}=1+q` as the
only nonconstant polynomial on the ten-element interval; the ten listed
elements of `[b,w]`; `q'_{b,w} = −v−v³` and the other `q'` values with the
matrix identity `Σ_y q'_{x,y}p_{y,z} = δ_{x,z}`; the S₃/S₄ RSK tableaux and
the cell partitions (left = `Q`-fibres, right = `P`-fibres, two-sided =
shape fibres); the cover list and the μ = 1-on-covers claim in S₃; the R-recursion
with support/degree/parity/symmetry/inversion over all of S₄; and the
multiplication formula including both sides and both cases.

Owner note repeated from the batch notes: the deferred fourth B entry
`cex-kl-positivity-does-not-follow-from-triangular-existence` still awaits the
owner's disposition (defer to the unequal-parameter pair KL-8, or drop). It is
not part of the design's §1 KL-1 companion sentence, and no pair merger or
enrichment of the A page is needed for it.

## 6. Uncertainty, honestly stated

- I re-read the pair's statements and strategies, re-ran the coverage and
  fetch checks, and independently reproduced the finite mathematics of the
  pair (S₃, S₄, including the B computations). I did not re-read EW, Lusztig,
  Ariki, Jensen, Knuth or Ram in full today; the batch's source claims rest on
  its recorded full-text reads and fetch stamps, and my checks are independent
  recomputations of the resulting combinatorics, not source audits.
- This is a scope decision, not an item approval or a proof certification.
  Every item of the pair is still a scaffold awaiting Step-3b authoring. The
  statement-level repairs (findings 2–4) will invalidate this scope receipt
  when applied and need an owner `proceed` for the amended scope; finding 1 and
  the prerequisites in §4 are route/supplier repairs that do not by themselves
  change the scope hash.
- The sources used differ from the design's track ledger (Björner–Brenti,
  Casselman) but are complete independent treatments; I did not verify a
  sentence-level identity between the two routes.

## 7. Next action

Scope receipt recorded with `tools/step3-decisions.mjs record-scope`
(decision `sufficient`, non-owner) as
`research/frontier-43-complex-representation-15-step3a-review-kazhdan-lusztig-bases-polynomials-and-cells.json`.
Owner: no scope amendment, merger or enrichment is needed before Step-3b
authoring; carry findings 1–4 and the §4 prerequisite into that authoring pass,
and record the disposition of the deferred B counterexample. Report path:
`research/frontier-43-complex-representation-15-step3a-pair-kazhdan-lusztig-bases-polynomials-and-cells.md`.
