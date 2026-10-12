# Step 3a scope review — pair `the-degenerate-ariki-categorification-theorem` / `the-degenerate-ariki-categorification-theorem-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-the-degenerate-ariki-categorification-theorem-1ff4f138c8dbc747`
- Batch: 18 (A page `the-degenerate-ariki-categorification-theorem`, order 1792;
  B page `the-degenerate-ariki-categorification-theorem-examples`, order 1793)
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `...-batch-18.pages.json` (7 A + 4 B = 11 items), the pair's
  entries in `research/plan-spec.json`, `...-scope-ledger.json` (both pages
  owed, batch 18), `...-batch-18.cross-batch-dependencies.json` and
  `...-batch-18.notes.md`. The archived native pre-repair manifest under
  `...-owner-category-o-batch18-native-baseline/` was compared: all 11 current
  items differ from it, so the reviewed contracts are the owner-integrated
  ROUND1 versions, not the native ones.
- Coverage: `...-batch-18.coverage.json` (2 pages, 8 source rows over 5
  distinct works, 43 harvested results).
- Prose/design: `research/plan-kazhdan-lusztig-track.md` §KL-8 (L321, the
  7-item A table and its proof joints; L394, the 4-item examples inventory),
  with the KL-8 notes at L484 ("KL-8 is explicitly degenerate. Nondegenerate
  Ariki is supplied through QG-8") and L506 (KL-7–KL-8 are optional comparison
  suppliers for the symmetric-group track).
- Owner decisions: `...-batch-18.notes.md`; `...-owner-category-o-batch18-focused-proof.md`;
  `...-owner-category-o-batch18-root-findings.json` (the eight confirmed
  consumer defects and their repairs); `...-owner-category-o-batch18-root-escalation-pass.json`
  (the 11 step-1 `escalated` records); `...-owner-category-o-batch18-root-final-approval.json`
  (round 1 accepted, second round not required).
- Drift: `...-alpha-step1-drift.md` §`the-degenerate-ariki-categorification-theorem`
  — verdict `drift-reordered` (pair orders 1554/1555 → 1792/1793 only; the
  owner supplement states the pair "retains its complete approved scope,
  sources and dependency direction").

## A-page scope (7 items)

The 7 scaffolded items equal, item for item in order, the KL-8 plan table:
tower and residue functors; G_0 = dual highest weight module; K_0 = highest
weight module; the categorification theorem; Specht decomposition numbers =
canonical-basis coefficients at one; sign/Ringel duality and Fock involutions;
the degenerate/nondegenerate parameter-range remark. Page requires
`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` and
`grothendieck-groups-and-graded-cartan-pairings`, exactly as designed: the
former is the run's batch-17 A page (26 items), the latter a published
homological-algebra page whose finite-dimensional G_0/K_0 items are the
declared suppliers.

Content mapping against the central source (BK, arXiv:0901.0057): the tower
definition consumes §3.2 (3.12)-(3.14) and §3.3 (3.15)-(3.20); the two
G_0/K_0 items consume §3.6 Theorem 3.10(i)-(v); the decomposition-number item
consumes Theorem 3.10(ii)-(iii) with the (2.16)/(2.18) chart conventions; the
main theorem consumes Theorems 3.8 and 3.10(vi) plus the (2.7) normalization;
the sign/Ringel proposition consumes §3.7 (Theorem 3.14) and §4.3-4.4
(Lemma 4.10, Theorems 4.15/4.17, Corollaries 4.18-4.19); the remark consumes
§1. Fock/category-O/Schur-Weyl sections (§2.1-2.6, §3.1, §3.4-3.5) are
deferred with named destinations; each destination was verified to exist in
this run's scaffold with the matching items (batch 16 for the Fock/parabolic
bases and Ringel suppliers, batch 17 for the cyclotomic quotient, Specht
images, Schur functor and residue intertwining). §4.1-4.2 is `out-of-scope`
with the stated reason (Koszul grading reserved for the Hecke/KLR track); this
matches the plan's ungraded KL-8 role and the L484 note.

Intended role: KL-8 of the KL track, explicitly degenerate and ungraded,
supplying the canonical-basis transfer for the degenerate cyclotomic Hecke
tower; the nondegenerate root-of-unity theorem is owned elsewhere (QG-8). A
reverse scan of all 50 batch manifests and of `plan-spec.json` finds no other
page requiring this page and no other item depending on this pair's items —
the only consumer in-run is the B companion. That is consistent with the
plan's "optional comparison suppliers" designation.

## B-page scope (4 items)

The 4 scaffolded items equal the plan's KL-8 examples inventory: small-rank
decomposition numbers; projective/simple dual bases with the index-two lattice
witness; charge reversal and the Fock involution in the height-2 three-block
model; and the counterexample that the degenerate theorem does not transport
to all nondegenerate parameters. They cover the page's distinctive mechanisms
at statement level: the projected-simple vs. unprojected-monomial distinction
(D_01 = (M_01+M_10)/2), the integral costandard non-cyclicity witness
Z D_00 + 2Z D_01 + Z D_11, the eight ambient labels with genuine Std/Rev sign
rectification, and the level-one v = −1 radical witness (T² = (v−1)T+v gives
(T+1)² = 0 against the semisimple C[S_2]). The B page requires only the A
page. No pair merger or enrichment is indicated.

## Source coverage

- Five works back the pair: BK arXiv:0901.0057 (Math. Z. 266, 44 pp.),
  BK arXiv:math/0605217 (Selecta Math., 50 pp.), BK arXiv:math/0508003
  (Mem. AMS, 109 pp.), BK arXiv:0808.2032 (Invent. Math., 32 pp.) and
  Dudas–Michel, *Lectures on Finite Reductive Groups…* (74 pp.).
- Every source row carries a `fetch_verified` stamp, and I re-fetched all five
  documents during this review: byte sizes and SHA-256 prefixes match the
  recorded stamps exactly (0901.0057 516758/31f6e1bc33cd9d42; math/0605217
  651568/30c44793414f4b10; math/0508003 933655/2c2353c50f5b027e; 0808.2032
  398736/c9a24757f7f3d1e1; Dudas–Michel 668990/843c1774f1dcb2e6).
- Passages read directly to confirm scope (not proof): 0901.0057 §3.2
  definition (3.7) with the basis and dim l^d·d! (3.8), the e(i) projectors
  (3.11) and the orbit-sum primitivity sentence; Theorem 3.8; the full
  Theorem 3.10(i)-(vi); Theorem 3.14; Corollary 4.8, Lemma 4.10, Theorems
  4.15/4.17, Corollaries 4.18-4.19; 0808.2032 Corollary 2 and the following
  "Ariki's … theorem … is simply equivalent to the degenerate analogue"
  sentence plus the Main Theorem's sign-modified KLR presentation; 0605217
  Corollary 6.7 and Theorems 6.9/6.10/6.12/6.15; Dudas–Michel Definition
  11.3 ((T_s−q_s)(T_s+1)=0). The scaffold statements track these without
  narrowing (e.g. Theorem 3.10(iii) and the (vi) head/socle rule appear
  verbatim; the level-one witness arithmetic checks out).
- Declined/deferred coverage is dispositioned with reasons or destinations,
  and each destination's item was located in the run scaffold.

## Prerequisite closure — no unmet prerequisites

- Direct dependencies of the 11 items use 20 published suppliers (AC,
  Grothendieck/G_0/K_0 and Hom-pairing items, CRT, generic type-A Hecke
  algebra, divided-power sl_2 string formulas) and 104 in-run supplier uses
  (batches 16-18); every one was resolved.
- Independent transitive walk from the 11 items over all 50 run manifests,
  the published `items/` library and `plan-spec.json`: 456 distinct ids, of
  which 191 are in-run scaffold and 265 published; **0 plan-only ids, 0 ids
  absent from both the published library and the current scaffold**. The
  published prerequisite page `grothendieck-groups-and-graded-cartan-pairings`
  exists with the needed items, and the needed batch-16/17 supplier items
  (tower-quotient definition, block idempotents, induction/restriction
  functors, Schur generator/quotient, Schur images, residue intertwining,
  Fock families, single-linkage lemma, Ringel items) are present with the
  required interface scope. No scaffold addition or prerequisite repair is
  recommended.

## Checks re-run during this review

- `node tools/manifest-deps.mjs ...batch-18.pages.json` → 11 items, 0 errors.
- `node tools/coverage-checklist.mjs ...batch-18.coverage.json` → 2 pages,
  43 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage ...batch-18.coverage.json` →
  8/8 source rows fetch-verified, 8/8 resolved.
- `node tools/source-backing.mjs --coverage ... --liveness ...` → 11 authored
  results, every one still backed by an openable source.
- My independent closure/reverse-consumer walks (above).
- Step-1 drift verdict for this page: `drift-reordered` (orders only).
  Proof correctness was not assessed (out of scope for 3a); the owner's
  focused proof note and ROUND1 approvals were consulted for scope only.

## Uncertainty

- Honest limit: this review establishes scope, not proof validity; the
  eight repaired consumer defects and the three integrated B replacements are
  accepted as owner evidence, not re-audited here. The 11 step-1 `escalated`
  receipts remain on file as history; root's final approval accepted the
  ROUND1 repairs and found no additional defect.
- Deferred source sections were verified to reach existing scaffold
  destinations with matching items; the item-level adequacy of those
  destinations belongs to their own pairs' step 3a reviews (batches 16/17),
  not to this decision.
- The graded/nondegenerate side is deliberately not part of this pair
  (plan L484, QG-8); this is a recorded design boundary, not an omission.

## Decision

`sufficient` for `the-degenerate-ariki-categorification-theorem`: the planned
definitions, results and examples of the pair adequately cover the intended
subject (the degenerate Ariki categorification theorem and its canonical-basis
consequences), with adequate source coverage and no unmet prerequisites.
Recorded with `tools/step3-decisions.mjs record-scope`.
