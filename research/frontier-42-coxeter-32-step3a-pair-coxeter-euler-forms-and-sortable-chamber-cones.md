# Step 3a scope report — pair `coxeter-euler-forms-and-sortable-chamber-cones`

- Run: `frontier-42-coxeter-32` (batch 29)
- A page: `coxeter-euler-forms-and-sortable-chamber-cones` (order 1774, 14 items)
- B page: `coxeter-euler-forms-and-sortable-chamber-cones-examples` (order 1775, 4 items)
- Decision recorded for the A page: **sufficient** (reviewer, no owner override; no scaffold edits).

## Inputs read (exact paths)

- `research/frontier-42-coxeter-32-batch-29.pages.json`, `…-batch-29.coverage.json`,
  `…-batch-29.cross-batch-dependencies.json`, `…-batch-29.notes.md`.
- Design: `research/plan-coxeter-groups-track.md` L100–129 (pair table), L525–547 (CG-26),
  L579–593 (CG-29); prose `library/coxeter-groups/coxeter-euler-forms-and-sortable-chamber-cones.md`
  and `…-examples.md`.
- Owner: `research/frontier-42-coxeter-32-owner-scope.json`,
  `research/frontier-42-coxeter-32-owner-authoring-direction.md`.
- Sibling/consumer manifests: `research/frontier-42-coxeter-32-batch-32.pages.json` and
  `.coverage.json` (CG-29), plus a link/dependency scan over all 64 run pages.
- Sources: N. Reading–D. E. Speyer, arXiv:0803.2722v3 — re-fetched in this review
  (1 352 958 bytes, 62 pages, sha256_16 `5e0720cac6007bd6`, equal to the recorded stamp); I
  re-read §2.4 (Prop. 2.9–2.11), §3.2 (Lemma 3.12, Prop. 3.13) and §7 (Thm. 7.1–7.4) in the
  fetched PDF. The other source sections/artifacts were assessed through the recorded
  coverage rows and item statements (no independent re-fetch).

## 1. Scope inventory vs design

- CG-26 (plan L525–547, prose page) names 12 A supplier contracts. The manifest realizes all
  twelve with the design's ids and kinds, in prerequisite order, and adds the two local
  additions already recorded in the batch notes (`lem-cg-positive-span-of-transported-simple-roots`,
  `lem-cg-coxeter-word-transport-and-form-independence`) that the design's reducedness /
  well-definedness routes need. Nothing designed is missing; nothing beyond design + recorded
  additions is claimed.
- A-page `requires` = `weak-order-inversions-and-lattice-operations`,
  `finite-reflection-arrangements-and-spherical-coxeter-complexes` (matches plan-spec; both
  supplier pages are current-frontier pairs with recorded `sufficient` scope receipts). The
  `validate-plan` redundancy of the second entry is plan-level only and is already recorded in
  the batch notes.
- B companion promises exactly four computations ("Euler/skew form of `s1s2s3` in A3; all skips
  and cone walls of a short sorting word; a source–sink move and the sign convention; a rank-two
  inversion set violating closure"). The manifest has exactly these four (3 examples +
  1 counterexample), 1:1.

## 2. Intended role and consumers

- The prose fixes the role: this pair is the finite-type Euler-form / skip-root / cone tower
  consumed by CG-29 `sortable-projections-and-finite-cambrian-lattices` (batch 32), with the B
  page a leaf.
- Consumer scan over all run pages: only the B page and batch-32 items reference items homed
  here (5 batch-32 consumer items, including both batch-32 B examples). Every ingredient CG-29's
  design says it takes from here is stated here — finite rank-two inversion recognition
  (`lem-cg-finite-rank-two-inversion-set-recognition` (1)), sortable = aligned
  (`lem-cg-uniform-omega-positive-and-aligned-sortability`), cover decomposition
  (`lem-cg-sortable-skips-basis-and-cover-decomposition` (3),(5)), parabolic compatibility of π
  (`lem-cg-sortable-cone-criterion-and-projection-monotonicity` (4)), greatest-sortable-below +
  monotonicity (same item (2),(3)), chamber-union criterion
  (`thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` (3)), terminal-cover rule
  (skips-basis (5)(i)). The B page has no external consumer, as its prose promises.

## 3. Source coverage

- Three sources per page, six fetch-stamped entries; the RS artifact was re-verified byte-for-
  byte against its stamp in this review (see above).
- Deliberate exclusions carry reasons (RS §8–11; Reading 2005 §1, §4–6; Reading 2005 §3
  Prop. 3.1 deferred to batch 32). All are outside this pair's promised subject and are not
  consumed by any frontier consumer.
- **F1 (coverage-record defect; owner correction recommended; not a scope gap).** The batch-29
  coverage row “Section 7: Theorem 7.1 …, Theorem 7.3 …, Theorem 7.4 …” is marked `included`
  with item `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`, but that item asserts
  none of those results (its clauses are: projection properties; skip basis and cover roots;
  chamber unions; parabolic compatibility — and clause (4) explicitly abstains from the
  Cambrian congruence). Cross-check: `…-batch-32.coverage.json` (written later) assigns RS 7.1
  and 7.3 to batch-32's `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` (whose
  statement does assert meet/join closure and the lattice homomorphism) and records RS 7.4 as
  `out-of-scope` with the reason “The bijection is not needed for the endpoint and fiber
  theorems of this pair … no claim of Theorem 7.4 is asserted anywhere on this page.” A scan of
  all run items finds no assertion of the 7.4 bijection. So no *claim* is over-stated anywhere;
  only this pair's coverage row mis-states the proof home. Recommended owner action: split /
  annotate the batch-29 §7 row (7.1, 7.3 → batch-32 item; 7.4 → out-of-scope with the batch-32
  reason). This does not reopen scope: CG-26 never promised §7's lattice results, and the
  downstream page owns them (or excludes them with a recorded reason).

## 4. Prerequisite audit — no unmet prerequisites

- All 28 distinct externally homed suppliers referenced from the 18 items (104 per-item
  references; 162 wikilink occurrences, 0 unresolved; every cross-page wikilink declared in
  `deps`/`justified_by`) resolve to current-run scaffolds (batches 2, 4, 7, 9, 10, 13, 17, 23)
  or to published `items/def-poset-interval-and-finiteness-conditions.md`. **No prerequisite is
  absent from both the published library and the current scaffold.**
- Clause-level spot checks with matching hypotheses, on the load-bearing suppliers:
  `thm-cg-finite-type-positive-definite-criterion` (13) finite W ⇔ B positive definite;
  `def-cg-finite-reflection-arrangement-and-spherical-chambers` and
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` (17) chamber tiling U=V*, the
  B-identification V≅V*; `thm-cg-dual-chamber-intersections-and-point-stabilizers` (9)(4) point
  stabilizers = conjugates of standard parabolics; `def-cg-parabolic-quotient-and-two-sided-minima`
  (10)(2) length-additive factorization w = w_J·{}^Jw; `thm-cg-finite-parabolic-longest-element-and-opposition`
  (17) opposition/longest element; the batch-23 weak-order items (`def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-is-a-graded-partial-order`, `lem-cg-bounded-weak-order-join-construction`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`); the batch-7 root calculus items;
  `lem-cg-reflection-form-invariance-and-rank-two-orders` (4)(3)(iv).
- Uncertainty noted (Step 3b precision, not a missing supplier): `def-…-euler-form…`,
  `lem-cg-positive-span-…`, `lem-cg-coxeter-word-transport-…` and `lem-cg-greedy-…` (1),(2) are
  phrased with only “S finite” (arbitrary W), while the rank-two machinery they cite or use for
  alignment (the finite-dihedral lemma) is finite-type and every consumer is finite type. The
  general clauses (1),(2) are true and the recorded strategy proves them without the
  finite-dihedral lemma, but clause (4) draws on the finite-type canonical roots. Recommend the
  3b item audit declare the finite-type restriction (or the rank-two hypothesis) explicitly.

## 5. Item-level findings for Step 3b (not scope)

- **F2.** `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` (ii), middle display reads
  `C^{s_2}_c(v)=-\rho(s_1s_2)e_{s_2}=-(e_{s_1}+e_{s_2})`; the leading minus is spurious. Direct
  computation (A3 form; rightmost-first action) and RS's own recursion
  (`C^r_c(v)=s·C^r_{scs}(sv)` when v ≥ s, Prop. 5.1 route) both give
  `ρ(s1s2)e_{s2} = -(e1+e2)`, and since the skip of s2 is forced the definition gives
  `C^{s2} = ρ(s1s2)e_{s2} = -(e1+e2)` — exactly the displayed value. The wrong intermediate also
  contradicts the same item's `𝒜_c(v)={-(e_1+e_2)}`, the cone normal in (iii) and
  skips-basis (3). Fix in 3b: delete the leading minus. (Numerically confirmed:
  ρ(s1s2)e_{s1}=e_{s2}, ρ(s1s2)e_{s2}=-(e1+e2), ρ(s1s2)e_{s3}=e1+e2+e3.)
- **F3 (minor, note only).** A few coverage pointers name the item where a source result is
  used/illustrated rather than where its content is asserted (Lemma 3.12's forward direction is
  in `lem-cg-sortable-skips-basis-and-cover-decomposition` (5)(i) while the row points at
  `lem-cg-uniform-omega-positive-and-aligned-sortability`; RS Example 4.2's type-A pattern
  avoidance is cited but not asserted in the B example). The pair's promised claims are
  unaffected.

## 6. Decision and next action

- **sufficient** for A page `coxeter-euler-forms-and-sortable-chamber-cones`: all 12 designed
  contracts plus the 2 recorded local additions and the 4 promised companion computations are
  scaffolded at design breadth for the intended role; source coverage is complete modulo F1
  (a coverage-record correction, not a mathematical omission); no unmet prerequisite.
- Recorded this session with
  `node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32 --page coxeter-euler-forms-and-sortable-chamber-cones --decision sufficient`.
- Next: Step 3b item audits may proceed on this pair; owner action on F1 at their discretion
  (does not reopen scope); F2 is marked for the 3b item repair pass. No scaffold edits were made
  in this review.
