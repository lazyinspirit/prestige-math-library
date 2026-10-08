# Batch 7 Step 1 scaffold — Canonical Roots, Signs, and Faithful Reflections

Run: `frontier-42-coxeter-32` · pair `canonical-roots-signs-and-faithful-reflections`
(A order 1730, B order 1731, `coxeter-groups`, label CG-04). Outputs:
`research/frontier-42-coxeter-32-batch-7.pages.json` (5 A + 3 B items, every item
labelled with `dependency_level`), this note,
`research/frontier-42-coxeter-32-batch-7.coverage.json`,
`research/frontier-42-coxeter-32-batch-7.cross-batch-dependencies.json` (54 rows),
and 8 item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope and design reconciliation

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (binding) plus the design `research/plan-coxeter-groups-track.md` §CG-04 (lines 181–199)
  and the binding proof-design inputs `research/coxeter-scaffold/inventory.json` (CG-04),
  `definition-justifications.json`, the native A/B page prose
  (`library/coxeter-groups/canonical-roots-signs-and-faithful-reflections{,-examples}.md`),
  the selected repaired routes in `research/coxeter-scaffold/independent-audit.md`, and the
  roots/chambers section of `research/coxeter-scaffold/classical-source-report.md`.
- **Preserved contracts.** The five planned local suppliers keep their exact ids and kinds:
  `lem-cg-rank-two-prefix-and-chamber-length-induction`,
  `thm-cg-root-sign-and-simple-reflection-positivity`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `def-cg-geometric-inversion-set`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`. Their proof routes are the designed
  ones: the rank-two prefix together with the Davis 4.8.3 simultaneous induction (P_n)/(Q_n)
  and its two implications; completion of the induction to root sign coherence and
  `r_s`-positivity; the root-length criterion and faithfulness by the Appendix D.1 route;
  the inversion set `N(w)` with explicit left/right conventions; the inversion formula
  `|N(w)| = l(w)` with the suffix-root list and strong exchange via the root-reflection
  dictionary (`±a` identified with `r_a` using faithfulness). The one definition justifier
  is `thm-cg-root-inversion-formulas-and-strong-exchange`, exactly as bound in
  `definition-justifications.json`.
- **B companion (3 new ids).** `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity`
  (roots, inversion sets and chamber images in I_2(5), A_2 and infinite dihedral type),
  `ex-cg-indefinite-form-admits-faithful-reflection-representation` (an indefinite form does
  not invalidate faithfulness), `ex-cg-mixed-sign-vector-is-not-a-root` (arbitrary vectors
  need not have one sign). All three build only on this pair's A page, so the B page remains a
  dependency leaf; no other page may rest on it.
- **Plan-spec comparison.** `research/plan-spec.json` agrees on page ids, orders 1730/1731,
  category, companion and the two A-page `requires` plus the B page's single requirement; its
  item arrays are empty. **No design-versus-plan conflict exists**, so no plan text was
  changed. `validate-plan` was run and reported the declared page order acyclic and
  consistent, with no item-level cycle, forward reference, B-page dependency or unresolved id
  among the pages that carry item lists.
- **Drift.** `research/frontier-42-coxeter-32-alpha-step1-drift.md` gives this page
  **no-drift** ("No prerequisite gap"); no plan edge or ordering change was applied.
- **Conventions kept.** Left action `rho` of `W` on `V`; `N(w)` described by the **suffix
  roots** of a reduced word and `N(w^{-1})` by the **prefix roots**; the induction is carried
  out with the open chamber `C°` and the open half-spaces `B_s = {f : f(e_s) > 0}`, and
  equality on closed walls is deliberately not claimed; no positivity, faithfulness or
  discreteness is asserted before items 2–3; `B` may be degenerate or indefinite throughout,
  and no identification `V ≅ V*` through `B` is ever used.

## Dependency levels (in-run only)

Computed with the shared tool logic over the run's manifests; published and other
out-of-run suppliers do not raise these levels.

| level | item |
|---|---|
| 7 | `lem-cg-rank-two-prefix-and-chamber-length-induction` |
| 8 | `thm-cg-root-sign-and-simple-reflection-positivity` |
| 9 | `thm-cg-root-length-criterion-and-faithfulness`; `ex-cg-mixed-sign-vector-is-not-a-root` |
| 10 | `def-cg-geometric-inversion-set`; `ex-cg-indefinite-form-admits-faithful-reflection-representation` |
| 11 | `thm-cg-root-inversion-formulas-and-strong-exchange` |
| 12 | `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` |

A batch-local evaluation of `tools/item-dependency-levels.mjs` over batches 1, 2, 4 and 7
reported **0 errors** and reproduced exactly these labels; the whole-run invocation reports
only `empty scaffold inventory` for sibling pages not yet scaffolded, none of which is a
dependency of this batch.

## Dependency verification (examined, not assumed)

- Every declared `deps` target resolves: the in-run targets are the batch-2 / batch-4
  scaffold items, the published targets are on-disk items. Direct in-run suppliers examined
  in their manifests (statement **and** strategy, so far as a scaffold has one):
  `def-hh-coxeter-matrix-word-group-and-length` (W, universal property, length, reduced
  words, parabolics), `lem-hh-dihedral-root-recurrence-and-root-sign` (exact dihedral orders,
  ambient reducedness of alternating words, signed action with `eta`, prefix reflections and
  their count), `thm-hh-coexeter-exchange-deletion-and-faithfulness` (parity and
  `l(sw) = l(w) ± 1`, exchange, deletion), `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (intrinsic parabolic length, minimal coset representatives with length additivity and
  inversion invariance), `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-cg-dual-chambers-and-reflection-hyperplanes`,
  `lem-cg-dual-action-and-chamber-faces-exist`.
  Each use was checked for direction, hypotheses, normalisation and axiom strength; the
  rank-two tiling, the nonempty faces and the dual-basis functionals of the batch-4 lemma are
  the load-bearing geometric inputs of item 1, and the parabolic factorisation theorem is the
  load-bearing input of item 1 part (3)/(Q_{n+1}).
- Published suppliers used (10 ids, all `status: published` on disk with matching kind):
  `def-algebraic-dual-and-linear-functional`, `def-linear-combination-and-span`,
  `def-linear-basis`, `def-generated-subgroup`, `def-coset`, `def-group`,
  `def-group-homomorphism`, `def-natural-numbers`, `thm-induction-principle`,
  `def-definiteness-inertia-and-signature-data-over-the-reals`. Their statements were
  inspected at the level the uses require (dual space and evaluation functionals; finite
  nonnegative combinations; bases; generated subgroups; cosets; induction over `N`;
  inertia and signature).
- No missing, circular, forward or inadequate dependency was found; no item depends on a
  B-page item; the A-page items are in prerequisite order once; both B consumers point
  backwards. **No Choice is used** by any item: everything is finite-dimensional, and the
  induction arguments are ordinary induction over `N`. Nothing consumes a Recorded result to
  prove a replacement, and no proof path reaches `deferred-set-theory-beyond-choice`.

## Deviations from the inventory's declared dependency lists (recorded, not silent)

The inventory's `depends_on` entries are design inputs, not proof-use evidence. Three
entries are only *transitively* available and are therefore **not** declared as direct
`deps`: `lem-cg-dual-action-and-chamber-faces-exist` for items 4 and 5 (it enters through
items 2 and 3) and `thm-hh-parabolic-minimal-representatives-and-length-additivity` for
items 2, 4 and 5 (it enters through item 1, whose items 2–5 consume). Item 3 **keeps** the
parabolic theorem, because its statement part 3 supplies the inversion invariance
`l(w^{-1}) = l(w)` that item 3's proof actually uses. All other inventory content, including
the Davis 4.8.3 (P_n)/(Q_n) scheme, the rank-two half-space alternatives, the sign/positivity
statements, the inversion-set conventions and the `±a ↔ r_a` identification, is preserved
verbatim in substance. This mirrors the deviation practice recorded for batch 2 of this run.

## Sources (fetch-verified full text) and harvest

- **Michael W. Davis, *The Geometry and Topology of Coxeter Groups*** (monograph),
  `https://people.math.osu.edu/davis.12/davisbook.pdf`, fetch stamp
  `sha256_16 ccefbb950fdcfce9`, 4 220 570 bytes, 600 pages; the artefact read here is the
  same file (local extracted-text copy hash prefix matches). Read: §4.2 printed pp. 45–47
  (Lemmas 4.2.1–4.2.2 with proofs), §4.8 printed pp. 54–57 (Property (P), Remarks
  4.8.1–4.8.2, Tits' Lemma 4.8.3 with both implication proofs), §4.9 printed pp. 57–59
  (Complement 4.9.3 and the rank-two cases), Appendix D.1 printed pp. 439–442 (Theorem
  D.1.1, Corollaries D.1.2–D.1.4, Lemma D.1.5 and its proof, the proof of D.1.1),
  Appendix D.2 printed pp. 442–443 (Examples D.2.1, Lemmas D.2.2–D.2.3); figures and
  exercises excluded.
- **Anders Björner and Francesco Brenti, *Combinatorics of Coxeter Groups*** (textbook),
  `https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf`,
  fetch stamp `sha256_16 ad1e7d9260127bb2`, 4 320 702 bytes, 370 pages; same artefact.
  Read: §1.3 printed pp. 11–13 ((1.7)–(1.18), the `pi`-action and `eta`), §1.4 printed
  pp. 15–18 (Proposition 1.4.2, Strong Exchange Theorem 1.4.3, Corollaries 1.4.4–1.4.6,
  Deletion Proposition 1.4.7, Corollary 1.4.8), §4.2 printed pp. 93–97 (Propositions 4.2.1,
  4.2.5, Corollary 4.2.6, Theorem 4.2.7, Lemma 4.2.4), §4.4 printed pp. 101–105
  (Definition 4.4.1 with (4.24)–(4.27), Lemma 4.4.3, Proposition 4.4.4, (4.29)–(4.32),
  Propositions 4.4.5–4.4.6), §4.5 printed p. 105 (Lemma 4.5.1 statement only); exercises
  excluded.
- **Harvest dispositions (35 source results).** 18 `included` (the (P_n)/(Q_n) induction,
  Lemma D.1.5, Theorem D.1.1, faithfulness, (4.24)–(4.27), (4.25), Lemma 4.4.3, Proposition
  4.4.4, the `t_gamma` dictionary, Propositions 4.4.5–4.4.6, Strong Exchange 1.4.3,
  Corollaries 1.4.4–1.4.5, Theorem 4.2.7, Proposition 4.2.5 and the Davis face/dual
  formula), 5 `inline` (Lemma 4.2.2, Lemma 4.2.4, Proposition 1.4.2, Corollary 4.2.6, the
  `n/eta` machinery), 9 `deferred` with named plan-spec destinations (the Tits cone and its
  strata to `tits-cones-chambers-and-parabolic-stabilizers`; discreteness to
  `finite-coexeter-diagrams-and-complete-classification`; the signed-action faithfulness,
  descent letters, deletion/support and the canonical decomposition to
  `coxeter-presentations-exchange-and-reduced-word-theorems`; the representation descent and
  rank-two orders to `real-forms-and-reflection-geometry`; stabilisers of chamber points to
  `tits-cones-chambers-and-parabolic-stabilizers`), and 3 `out-of-scope` with written
  reasons (Cayley-graph wall counting; the pre-Coxeter warning; reflection subgroups).
  `coverage-checklist` reports **0 errors, 0 warnings**; `source-fetch-check` reports
  **2/2 sources fetch-verified** (2 stamps written).

## Check results at hand-off (actual)

- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-7.pages.json` → exit 0,
  8 items, 0 missing, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → only
  `empty scaffold inventory` errors for sibling pages not yet scaffolded; **no** label,
  dependency or cycle error touches this batch (batch-local re-check: 0 errors, levels as
  tabled).
- `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json`
  → 74 scoped items, **0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-7.coverage.json`
  → 1 page, 35 harvested results, **0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-7.coverage.json --stamp`
  → 2/2 fetch-verified; check mode → 2/2 resolved.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0, order acyclic and
  consistent, no item-level cycle/forward/B-page/unresolved findings.
- The external-reference retirement check (`extcheck`) is **not applicable at this
  boundary**: the "1-scaffold" stage no longer runs it (see the run's 2026-10-06 note in the
  batch-6 notes), the manifests carry no `external_refs`, `proved_here: false` or
  `external_dependency` record, and `content-policy --manifest-only` rejects those fields
  directly.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` →
  refreshed and deduplicated; batch 7 now carries 54 rows (52 item edges + 2 page edges) in
  the unified `research/frontier-42-coxeter-32-cross-batch-dependencies.json`.
- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` → 74 items, all 74
  `ready`; the 48 work entries are **all** `Empty scaffold inventory` for sibling pages not
  yet scaffolded, and none names an item of this batch.
- All eight readiness records were written with the examined direct dependency ids as
  evidence and refreshed after the final text pass; the check above reports no work entry for
  any of them.

## Self-review corrections before hand-off

A final read of the eight items found and corrected five wording defects in the strategy
fields (never in a claim): a basis label in item 2; a garbled "dual action" sentence in item
3; a garbled product computation and a muddled definitional clause in item 4; and a missing
equivariance justification in item 1. The eight readiness records were written only after
this pass, so no record had to be re-made; `content-policy --manifest-only`,
`coverage-checklist`, `source-fetch-check`, `manifest-deps` and the batch-local
dependency-level check were re-run after the edits and all still report zero errors and zero
warnings.

## Unresolved findings and hand-off

- The eight items are **scaffold proof contracts**, not proofs; the readiness records are not
  independent mathematical approval, and the full engine gate and owner/operator
  reconciliation follow construction.
- No published defect was found in the examined prerequisite items, and no Step-1 escalation
  is required for this pair. Batches 9, 10, 12 and 14 declare this A page as a page
  prerequisite; their own cross-batch inputs must record the consumer edges when they run.
- One recorded design-versus-inventory deviation (transitive-only inventory dependencies
  omitted from direct `deps`) is documented above; it changes no contract, claim or proof
  route.
