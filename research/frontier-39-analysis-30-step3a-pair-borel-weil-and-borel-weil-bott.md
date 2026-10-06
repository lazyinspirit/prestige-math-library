# Step 3a scope review — `borel-weil-and-borel-weil-bott`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-borel-weil-and-borel-weil-bott-0f642c7a700b8cb9`.
- Pair: A `borel-weil-and-borel-weil-bott` (order 510.017) / B
  `borel-weil-and-borel-weil-bott-examples` (order 510.018), batch 23,
  category `lie-theory`. A has 12 scaffolded items (7 lemmas, 2 theorems,
  2 propositions, 1 corollary, built over the published AG interface);
  B has 5 (4 examples, 1 counterexample).
- Decision: **sufficient**. The RL-9 design is realized item-for-item after
  three documented supersessions by published suppliers and two documented
  local additions; the four harvested sources are live and re-verified; every
  referenced prerequisite resolves with no missing or draft node; the planned
  definitions, results and examples cover the intended subject
  ("geometric realisation and unique cohomology degree", plan L790).
- Scope only. This report is not an item approval, a proof review or an owner
  record, and it edits no scaffold, item, plan, coverage row or engine state.
  No prior 3a receipt existed for this page (`step3-decisions check --phase
  scope` reported "current scope review required").

## Inputs read (exact paths)

- Dispatch brief/prompt: `research/frontier-39-analysis-30-dispatch/
  alpha-step3a-pair-borel-weil-and-borel-weil-bott-0f642c7a700b8cb9.prompt.md`;
  pair task `research/frontier-39-analysis-30-step3a-pair-borel-weil-and-borel-weil-bott-0f642c7a700b8cb9.task.md`.
- Prose design: `research/plan-representation-theory-lie-track.md` RL-9
  (L1118–1157), page contract and binding rows (L118, L530, L790, L816–817,
  L1714, L1795–1799 harvest rows I41–I45), convention audit.
- AG binding amendment: `research/plan-algebraic-geometry-track.md`
  L3290–3360 (supplier published, commit `fc59133d5`; "RL-9 remains an unbuilt
  planned consumer").
- Contract: `research/plan-spec.json` rows 510.017/510.018 (`requires`
  ['tensor-product-multiplicities-and-littlewood-richardson',
  'smooth-projective-serre-duality-and-flag-variety-line-bundles'] and
  ['borel-weil-and-borel-weil-bott'], matching the manifest verbatim).
- Scope carrier: `research/frontier-39-analysis-30-batch-23.pages.json`
  (17 items with statements, deps, dependency levels, sources).
- Coverage: `research/frontier-39-analysis-30-batch-23.coverage.json`
  (4 sources / 51 rows, incl. `fetch_verified` stamps),
  `...-batch-23.cross-batch-dependencies.json` (6 rows),
  `...-batch-23.notes.md`, `...-scope-ledger.json`, `...-planning-notes.md`.
- Drift: `research/frontier-39-analysis-30-alpha-step1-drift.md` L314–323
  (verdict `no-drift`; AG supplier resolves the historical build hold).
- Published suppliers read: the 39 items of
  `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`
  where used, notably `def-borel-character-equivariant-line-bundle`,
  `lem-semisimple-root-exponential-algebraic-subgroups`,
  `lem-semisimple-borel-root-factorization`,
  `lem-semisimple-opposite-borel-big-cell`,
  `thm-relative-p1-line-bundle-cohomology-shift`,
  `lem-relative-projective-line-cohomology-and-apolarity`,
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`,
  `cor-projective-cohomology-finite-dimensional-field`,
  `cor-rational-function-no-poles-codimension-one-regular`;
  and the in-run batch-21 (RL-7) supplier statements cited by the
  Euler-character corollary. RL-7's own 3a review is `sufficient`
  (`research/frontier-39-analysis-30-step3a-review-weyl-character-and-multiplicity-formulas.json`).
- No owner authoring direction exists for this run
  (`research/frontier-39-analysis-30-owner-authoring-direction.md` absent).

## Design comparison (item-for-item)

Design ids: 13 A + 5 B = 18 (plan L1140–1157 and harvest I41–I45). Delivered:
12 A + 5 B = 17.

- Superseded by published suppliers (documented in the batch notes, not
  silent; each is a duplicate of a published statement, so re-minting would
  pad the page):
  `def-flag-variety-and-borel-character-line-bundle-interface` ->
  `def-borel-character-equivariant-line-bundle` +
  `def-complex-semisimple-algebraic-group-borel-and-flag-variety`;
  `prop-the-canonical-line-bundle-of-g-over-b-has-weight-minus-two-rho` ->
  published `lem-flag-variety-canonical-bundle-weight-minus-two-rho`;
  `lem-minimal-parabolic-projection-has-p1-fibers` ->
  published `thm-minimal-parabolic-flag-projection-is-p1-bundle`.
- Local additions (A page only, each a named proof joint of a designed
  consumer): `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
  (existence half of Borel-Weil; consumed by `thm-borel-weil`) and
  `lem-lowest-weight-space-is-the-nilradical-invariant-line` (one-dimensional
  n^-invariants of each simple summand; consumed by `thm-borel-weil`).
- All other design ids are present verbatim with the designed kind and role:
  A `lem-sections-of-an-associated-line-bundle-as-equivariant-functions`,
  `prop-left-translation-makes-line-bundle-cohomology-a-g-module`,
  `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`,
  `thm-borel-weil`, `lem-rank-one-cohomology-shifts-across-a-simple-wall`,
  `lem-singular-dot-weights-have-zero-line-bundle-cohomology`,
  `lem-a-regular-weight-has-a-unique-dominant-dot-translate`,
  `thm-borel-weil-bott`,
  `prop-borel-weil-bott-is-compatible-with-serre-duality`,
  `cor-borel-weil-bott-euler-character-is-the-weyl-character`; B
  `ex-borel-weil-bott-on-p1-for-sl2`,
  `ex-the-sl2-singular-weight-has-no-cohomology`,
  `ex-an-sl3-weight-with-cohomology-in-degree-one`,
  `ex-the-top-degree-bwb-case-and-serre-duality`,
  `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer`.
- No designed statement is dropped or weakened. Conventions match the design
  and the published AG page: `L_lambda = G x^B C_{-lambda}`
  (fibre character `lambda^{-1}`), `w . lambda = w(lambda+rho)-rho`,
  `K_{G/B} = L_{-2rho}`; the B sign counterexample enforces the convention.
- A = 12 items, B = 5 items, both far below the 60-item ceiling. B requires
  only A. No item of any other current-frontier manifest references a pair
  item (checked across the in-flight run batch files).

## Subject coverage (definitions, results, examples)

- Conversion layer: sections as regular functions with `f(gb)=lambda(b)f(g)`;
  the induced `G`-action and finite-dimensional rational `g`-module structure;
  `L_lambda (x) L_mu = L_{lambda+mu}`, `L_lambda^v = L_{-lambda}` (published
  supplier).
- Borel-Weil: `H^0 = 0` for non-dominant `lambda`; for dominant integral
  `lambda`, `H^0 = L(lambda)^*` and `H^i = 0` for `i>0`; uniqueness on the big
  cell plus existence by the pole-extension lemma.
- Wall crossing: rank-one shift `H^i(L_lambda) = H^{i+1}(L_{s_alpha . lambda})`
  for `<lambda,alpha^v> >= -1` and the `n=-1` vanishing clause; singular
  weights vanish; regular weights have a unique dominant dot translate with
  `N(mu)=l(w)` and a reduced monotone crossing chain.
- Borel-Weil-Bott: singular `lambda+rho` -> all cohomology zero; regular ->
  `H^{l(w)} = L(w . lambda)^*` and all other degrees zero.
- Consequences: compatibility with Serre duality (`K = L_{-2rho}`, `w_0 w`
  degree pairing) and the Euler-character identity with the Weyl character
  formula (consumes five published-by-batch-21 RL-7 items).
- Examples (B): SL2 on P1 in all three regimes (`m>=0`, `m<=-2`, `m=-1`),
  the sharp wall case, an SL3 weight with `l(w)=1`, the top-degree `w_0` case
  checked against Serre duality, and the sign-convention counterexample.
- Intended role (plan L790 "geometric realisation and unique cohomology
  degree") is fully covered; the only page-level consumer is B 510.018.
- Exclusions carry item-specific reasons in the coverage file: general
  parabolics/partial flags (not consumed), Atiyah-Bott localisation and GL_n
  Schur specialisation (owned elsewhere), Cousin-complex proof (machinery not
  in this library; Lurie-rank-one route adopted instead), p-adic interpolation
  (out of scope), solvable-group classification/Schur (route avoids).

## Source coverage

- Four sources: Rui (L1 sections 1.5-1.22), Ng (sections 3-6), Lurie
  (complete pp. 1-3), Boxer-Pilloni (section 1.1.1-1.1.6). Two independent
  full treatments plus two independent proof checks, as the design's per-pair
  matrix requires (plan L1714).
- `coverage-checklist --require-destination`: 2 pages, 51 rows, 0 errors,
  1 advisory `coverage-low-yield` warning (13/37 A rows `included`). I
  sampled the non-included rows: the declines are `already-published`
  (canonical bundle, P1 table, Pluecker, torsor charts, classification),
  `inline` (principal block, reciprocity check, BP amplitude) or
  `out-of-scope` with written reasons. The warning is justified, not an
  omission.
- Independent re-verification (2026-10-05): all four PDFs re-fetched and
  byte- and `sha256_16`-identical to the recorded stamps — Rui 209 449 B
  `f26291437bc6d4fc`; Ng 318 376 B `82c87b8911663cd3`; Lurie 201 993 B
  `57d1df87dc0641ec`; Boxer-Pilloni 670 695 B `4da900d73c66f5e0`. Lurie's
  design URL (`math.mit.edu`) still 404s; the recorded Harvard mirror is live
  and is the URL the published AG example already uses (honest retrieval
  history in the batch notes).
- I read Lurie's complete note: Theorem 1 (equivariant bundles), Theorem 2
  (U'-invariant big-cell identification, simplicity, codimension-one cells
  "corresponding to a simple root", SL2 `a^k` extension), Theorem 3 (relative
  shift for `n >= -1`), Lemma 4, the singular paragraph and Theorem 5 with the
  Serre-duality finish. I also verified the cited clauses of Rui (1.14-1.20:
  rank-one subgroups, P1 table, shift for `<alpha^v,lambda> >= -1`, principal
  block), Ng (Theorem 5.3, Example 5.5, section 6) and Boxer-Pilloni
  (Theorem 1.1, Remark 1.2, sections 1.1.3-1.1.6).

## Prerequisites and dependency scope

- Direct deps: 68 distinct ids across the 17 items — 0 missing. All wikilinks
  in statements and strategies resolve. `manifest-deps` on batch 23: 17
  items, 0 errors; `item-dependency-levels check --run`: 899 items / 60 pages,
  no batch-23 error; `validate-plan`: OK.
- First-hand transitive closure over item deps plus every statement/strategy
  wikilink: 3 621 ids = 3 595 published + 17 pair items + 9 in-run batch-21
  (RL-7) items; 0 missing ids, 0 `draft`/other-status nodes. No path reaches a
  deferred set-theory item or an unbuilt pair. The 9 RL-7 items reached are
  exactly the five corollary deps plus their character-ring suppliers; their
  statements were read and supply the required clauses (Weyl character
  formula, alternation operator, Weyl invariance, additivity, completed
  character ring).
- Page edges: the published AG supplier page (39/39 items `published`, commit
  `fc59133d5`) supplies every geometry clause used. The declared RL-8 edge
  (`tensor-product-multiplicities-and-littlewood-richardson`, batch 22) is
  **not load-bearing at item level**: no closure path reaches any batch-22
  item, matching the cross-batch ledger's own instruction that Step 3 "must
  either read a batch-22 clause into the proofs or record the edge as
  non-load-bearing". Recommendation: record the non-load-bearing disposition
  at Step 3/4 (no scope action; the edge is satisfied in-run and harms
  nothing). The reverse omission is also bookkeeping: the page `requires`
  does not name RL-7 even though the Euler-character corollary consumes five
  RL-7 items; those five item edges are already recorded in the cross-batch
  ledger as in-run dependencies.

## Unmet prerequisites: findings

**None confirmed.** No consuming planned item or result requires a claim
absent from both the published library and the current scaffold. Two
author-visible proof obligations are flagged below with exact evidence; in
both cases the required material exists (published or in the pair's own
statement), so neither makes the scope insufficient, and no scaffold edit was
made.

1. **`n^-`-invariants vs `U^-`-invariants (consuming items:**
   `thm-borel-weil`, and the parenthetical in
   `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`**).**
   The counting argument (`dim V^{n^-}` = number of irreducible summands, then
   bounded by the big-cell lemma for `U^-`-invariant sections) needs: for the
   rational `U^-`-action on `V = H^0(X, L_lambda)`, a vector killed by
   `n^- = Lie(U^-)` is fixed by `U^-`. No published item and no frontier-39
   scaffold item states this char-0 dictionary standalone (the nearest
   statements, `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces`
   and `lem-lie-functor-exactness-fixed-points-and-generation`, are `status:
   draft` from the concurrent run `frontier-40-geometry-braids-rep-27`, i.e.
   neither published nor part of this run's scaffold). The equivalence is,
   however, asserted by the pair's own lemma and is derivable from published
   items: the exponential curves with differential `1 -> e_{-alpha}`
   (`lem-semisimple-root-exponential-algebraic-subgroups`), the differentiated
   `g`-action identity `(x . f)(g) = d/dt|_0 f(u_{-alpha}(-t)g)`
   (`prop-left-translation-makes-line-bundle-cohomology-a-g-module`), constancy
   of the polynomial `t -> f(u_{-alpha}(-t)g)` when `x . f = 0`, and the
   ordered root-coordinate product `U^- = prod U_{-alpha}`
   (`lem-semisimple-borel-root-factorization`). Recommended action for the
   3b author: record this one-parameter derivation explicitly in the proof of
   `lem-a-nonzero-...` (and the counting step of `thm-borel-weil`) instead of
   the one-line "differentiation of the unipotent group action". If the author
   cannot discharge it, escalate to the owner; a local scaffold lemma would
   then be the fallback (not required on this review's evidence).
2. **Pole-regularity step (consuming item:**
   `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`**).**
   The strategy concludes regularity of the rational function `v` from the
   absence of codimension-one poles. The adequate published statement,
   `cor-rational-function-no-poles-codimension-one-regular` (X irreducible
   normal; frontier-38), is not in the item's declared deps; normality of `G`
   follows from smoothness via published R1/S2 and Serre-normality items.
   Everything needed is published, so this is a declared-dep gap for the
   authoring step, not an unmet prerequisite. Recommended action: add the
   corollary (and the smoothness-to-normality chain) to the deps when the item
   is authored.

## Residual uncertainty

1. Proof correctness, statement truth and choice-method claims are outside
   3a; the manifest strategies are routes, not certified proofs.
2. I re-read Lurie's note in full and verified the specific numbered clauses
   of Rui/Ng/Boxer-Pilloni used by the manifest; I did not re-read those three
   sources line-by-line (the beta coverage read them in full over the stated
   ranges, and the stamps re-verify byte-identity).
3. The finding-1 derivation is judged available from the published items
   listed but was not checked against a written proof.
4. This receipt binds to the current batch-23 A+B manifest hash; any later
   item-list, title, kind or statement change voids it and requires a fresh 3a
   decision.

## Decision

`sufficient`: the scaffolded pair carries every definition, result, example
and counterexample the RL-9 design and its library role require; the three
supersessions and two local additions are documented and consumed; sources
are live, stamped and independently re-verified; all 3 621 closure ids
resolve to published or in-run material; no omitted topic and no unmet
prerequisite warrants enrichment or a pair merger. The two flagged items are
author-visible proof obligations with published or in-pair supply, and the
RL-8 page edge needs only the already-recorded non-load-bearing disposition.
