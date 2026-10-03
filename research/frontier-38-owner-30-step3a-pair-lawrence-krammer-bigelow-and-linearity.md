# Step 3a scope review — `lawrence-krammer-bigelow-and-linearity`

- Run `frontier-38-owner-30`, role alpha, label
  `step3a-pair-lawrence-krammer-bigelow-and-linearity-fc5b96d986964f87`;
  batch 16, A order 747 / B order 748, category `braid-groups`. Owned pair
  only; no scaffold, item, manifest, coverage, plan or owner record edited.
  Reviewed 2026-10-03.
- Decision: **sufficient**. The A page carries 21 of 22 BG-10 design rows plus
  the documented row-8 replacement and five consumed local prerequisites; the
  B page carries 4/4 designed leaves. No omitted topic of the designed
  subject, no confirmed unmet prerequisite, no consumer outside the pair.
  No merge or enrichment is proposed. Three records-only notes and the
  Step-3 authoring obligations carried by the batch notes are listed below.

## Evidence read

- Prose design `research/plan-braid-groups-track.md` BG-10: A-page section
  L528–561 (requires L530–533, 22-row inventory L535–561) and examples table
  L563–572 (4 leaves); role is the linearity capstone of the braid track,
  between the published Burau page (BG-9) and the in-run oriented-links pair
  (BG-11).
- Binding owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`:
  747/748 must "close every missing … equivariant two-complex/H2 prerequisite
  locally"; entry lists order 747/748.
- `research/plan-spec.json` pages 747/748: titles, category, companion
  pointers and the seven page `requires` agree with the manifest; the 747
  entry carries exactly the four `local_addition` items, so the design table
  governs the commissioned inventory (scaffolding adds it, as batch notes
  state).
- Manifest `research/frontier-38-owner-30-batch-16.pages.json` (A 26 items:
  8 definitions, 15 lemmas, 2 theorems, 1 corollary; B 4 items), coverage
  `…-batch-16.coverage.json` (1 page, 5 sources, 48 harvested rows: 35
  included / 6 inline / 7 out-of-scope with reasons), notes
  `…-batch-16.notes.md` (inventory, correction record, AC accounting,
  unresolved obligations), `…-batch-16.cross-batch-dependencies.json` = `[]`.
- Seam record `research/frontier-38-owner-30-local-prereq-747.md` (row-8
  overattribution of Bigelow 2002 Lemma 4.2; explicit absolute cellular
  differential and kernel-rank proof; four local supplier drafts; remaining
  closed-surface/divisibility obligations) and drift review
  `research/frontier-38-owner-30-alpha-step1-drift.md` L89–92 (verdict
  `no-drift` for this page; the four local suppliers placed before the
  commissioned inventory).
- Scope ledger `research/frontier-38-owner-30-scope-ledger.json` lists both
  pages at batch 16. No owner or reviewer Step-3a receipt names this pair.

## Scope assessment (A/B pair vs prose design)

- **A page, design congruence.** 26 items = 21 of the 22 design rows (ids,
  kinds and order match), the row-8 replacement, the four owner-authorized
  local additions (`lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model`,
  `lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank`,
  `lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion`,
  `lem-lkb-small-end-neighbourhoods-stabilize-equivariantly`) and
  `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions`.
  The only design id not scaffolded is
  `lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two`;
  Bigelow 2002 Lemma 4.2 states absolute-to-fraction-field injectivity and
  dimension `binom(n,2)` only, so the design identifier and its relative
  attribution were overclaimed. The true content is carried by
  `lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank`, and
  the freeness chain (`thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`)
  consumes rank + unit triangular pairing + the coefficient lemma + the
  saturated smaller-puncture inclusion, not an absolute-to-relative
  injection. I re-derived that consumption path from the scaffold's own
  statements: independence of the `v_{i,j}` follows from the unit triangular
  pairing matrix, spanning from the fraction-field rank bound together with
  the coefficient lemma, and the coefficient lemma from the saturated
  inclusion. No promised claim depends on the removed relative-injection row.
- **Arc packet.** The Bigelow §3.3 argument needs an arc version of the digon
  criterion with an avoidance clause (Bigelow's Lemma 3.6 is stated for
  simple closed curves; he cites FLP Proposition 3.10 / PR Proposition 3.7),
  and the library had no arc item. The new local prerequisite supplies
  minimal-position existence, the disjointness-detecting criterion and the
  avoidance clause; the published smooth relative isotopy-extension lemma
  supplies the ambient step on the next design row. No missing supplier.
- **B page.** Exactly the four designed leaves (one example computing the
  Krammer fraction-field `B_3` matrices, one fork-noodle pairing
  computation, the intersection-number counterexample and the
  non-faithful-linear-representation counterexample), matching the design's
  ids, kinds and verification columns; every B dep is an A item. B requires
  only A; no A item depends on B.
- **Source coverage.** All five sources are fetch-verified and resolved on a
  first-hand re-run; every harvested row has a disposition and the 7
  declines carry reasons (Bigelow 2001 §4 hand-waving sketch and §2.4
  informal alternatives; Bigelow 2002 §5 Temperley–Lieb; Krammer Theorem 2.2
  and Lemmas 4.1–4.5; Paoluzzi–Paris Proposition 3.6). Spot checks against
  the cached full texts confirm the pair's content against the sources:
  Bigelow 2001 §3.3 closes the topological route exactly as the scaffold
  plans (Basic Lemma = well-definedness and braid invariance of the pairing;
  Key Lemma; `σ(E_i)` disjoining; `(Δ^2)^k` and the `q^{2n}t^2` scalar), and
  Bigelow 2002 §4.2 (printed p. 12) states the Krammer comparison recorded
  in `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two` and the B
  example: `Q(q,t)⊗V ≅ Q(q,t)⊗H_2(C̃)` via [Big01, Theorem 4.1], `V` and
  `H_2(C̃)` are not isomorphic for `n≥3` (citing [PP01]), Krammer's `−t` is
  Bigelow's `t`, and the matrices in Bigelow's `v_{i,j}` basis are not
  computed. This validates the caveat and the example's sign translation.
- **Intended role.** The claim set — two-variable cover and absolute module,
  relative pairing modules and fork/noodle pairing, Key Lemma, kernel braids
  fix edges, edge-fixing mapping classes are full-twist powers, the full-twist
  scalar, integral freeness of rank `binom(n,2)`, definition of `ρ_LKB`,
  faithfulness and the linearity corollary — is the designed subject and is
  covered end to end. The design's second algebraic route (Krammer's chamber
  basis) is declared out of scope with reason, and Krammer's paper is cited
  on the faithfulness theorem as the independent treatment.

## Prerequisite audit

- All seven page `requires` are published: `ordered-and-unordered-configuration-spaces`,
  `braids-as-fundamental-groups-of-configuration-spaces`,
  `covering-spaces-and-lifting`, `singular-chains-and-singular-homology`,
  `modules-over-a-pid-and-canonical-forms`,
  `punctured-disks-mapping-classes-and-point-pushing`,
  `garside-structure-normal-forms-and-the-center`.
- 37 distinct dependency ids: 26 are items of this scaffold and 11 are
  published items, 0 missing; every external dep file carries
  `status: published`. The load-bearing published suppliers were opened and
  their statements match the use: the AC identification of the classical
  braid group with the boundary-fixed mapping class group; the ACω smooth
  finite disk-arc-system isotopy extension (with its finite-sequence clause);
  the AC Jordan–Schönflies extension; the Garside half-twist conjugation
  identities; cellular homology computes singular homology; the
  `AC ⇒ DC ⇒ ACω` bridge.
- No cross-pair consumers: no other batch-16 manifest item id appears in any
  other run manifest's `deps`, and the batch's cross-batch dependency input
  is empty. This pair is a run leaf.
- AC accounting is declared in the affected statements and carried through
  the AC→ACω bridge on
  `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`;
  the remaining 20 items are choice-free per the batch notes. No item assumes
  only `ACω` while consuming an AC-dependent supplier.
- Step-3 obligations already recorded and owned by existing planned items
  (not scope gaps): the denominator-elimination proof of Bigelow Lemmas
  4.4–4.6 including the exceptional `(1,3)` pairing
  (`lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials`);
  the successive-isotopy induction including the `n=2` case
  (`lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy`);
  the Krammer-lattice caveat
  (`thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`).

## Unmet prerequisites and uncertainty

No confirmed unmet prerequisite. Three records-only notes for the owner and
the Step-3b authors:

1. The dual classes `x_{i,j}` (Bigelow 2002 §4.1 squares with vertical edges
   right of `p_i` and left of `p_j`) are used by the closed-surface pairing
   claim and the denominator-elimination strategy but are not separately
   scaffolded and have no coverage row of their own. The author should define
   them inside `lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors`
   (or its statement) before the coefficient lemma uses `x_{2,3}` and
   `σ_2 x_{2,3}`.
2. The `n≥3` non-isomorphism of the integral modules is asserted on the
   report of Bigelow 2002 §4.2 (read in full) citing [PP01]; the coverage
   record reads Paoluzzi–Paris only §§2–3 (pp. 503–510), so the primary
   non-isomorphism proof locator is not in the run's evidence. When the
   theorem is authored, cite the exact Paoluzzi–Paris statement or attribute
   the report to Bigelow §4.2 explicitly. Uncertainty is about the locator,
   not the claim.
3. The kernel-braid item's successive disjoining uses the published ACω
   arc-extension route through the next design row (as the design itself
   routes it, L557–558); the supplier is published, so no action is required
   beyond keeping the dep edge where the proof consumes it.

Residual uncertainty: the integral divisibility packet is unwritten; the
scaffold carries it as an explicit proof obligation with sources and an
induction route, so this is Step-3 authoring work, not a scope omission. I
did not audit the four existing draft proofs for correctness (out of scope
for 3a).

## Checks run (first-hand, 2026-10-03)

- `node tools/coverage-checklist.mjs …batch-16.coverage.json --require-destination`
  → 1 page, 48 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-16.coverage.json`
  → 5/5 fetch-verified; 5/5 resolved.
- `node tools/manifest-deps.mjs …batch-16.pages.json` → 30 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only …batch-16.pages.json`
  → 30 scoped items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → 804 items across 60 pages, no error.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → none of
  this batch's 30 items among the 27 outstanding readiness re-records.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60/60
  pages owed, no scope drift.
- `node tools/fwdcheck.mjs --quiet` → OK; `node tools/extcheck.mjs` → OK
  (advisory only).

## Decision and owner action

**sufficient** — the planned definitions, results and examples adequately
cover the designed subject of the pair, all prerequisites resolve to
published or on-page suppliers, and no omission requires enrichment or a
merger. The three notes above are records-only authoring guidance; the owner
may proceed to Step 3b without a scope amendment. Report path:
`research/frontier-38-owner-30-step3a-pair-lawrence-krammer-bigelow-and-linearity.md`.
