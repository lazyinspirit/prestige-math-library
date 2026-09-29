# Step 3a scope review — measurable Hilbert fields and direct-integral operators

- Run: `frontier-36-complete` (role: alpha; batch 2; this pair only)
- A page: `measurable-hilbert-fields-and-direct-integral-operators` (plan order 288.1103)
- B page: `measurable-hilbert-fields-and-direct-integral-operators-examples` (plan order 288.1104)
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-36-complete-step3a-review-measurable-hilbert-fields-and-direct-integral-operators.json`
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page, engine state or owner record was edited. Nothing below is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-2.pages.json` | Current A inventory (11 items, dependency levels 0–7) and B inventory (3 items, levels 4, 8, 9); A `requires` is exactly the seven planned pages, B `requires` is A only; companion pairing |
| `research/frontier-36-complete-batch-2.coverage.json` | Source record: 3 A-page treatments, 2 B-page treatments, 36 harvested rows (19 `included`, 7 `inline`, 10 `out-of-scope`). I re-ran the omission gate: 0 errors / 0 warnings; `source-fetch-check` reports 5/5 fetch-verified |
| `research/frontier-36-complete-batch-2.notes.md` | Scaffolder construction record: design control, dependency audit, choice handling, and the published proof-gap candidate discussed in Observation 1 |
| `research/frontier-36-complete-batch-2.cross-batch-dependencies.json` and `research/frontier-36-complete-cross-batch-dependencies.json` | No edge, item or page, touches batch 2: the pair consumes only published items and has no in-run supplier or consumer |
| `research/plan-functional-analysis-track.md` §14.14, lines 3607–3658 | Binding prose design: exact seven A prerequisites (3612–3620), the ordered nine-item list (3622–3649), B inventory (3650–3653), RG-24/RG-26 consumers with zero published impact (3655–3658) |
| `research/plan-representation-theory-groups-track.md` lines 2455–2456 and §15.6 item 3 at lines 2859–2879; RG-24 at 1699–1760, RG-26 at 1792–1830 | Consumer-side interface: FA owns generic fields/operators and the abelian-algebra multiplicity model; RG owns representation fields, systems of imprimitivity, factor and type-I decomposition |
| `research/plan-probability-track.md` lines 2922–2930 | Probability reconciliation: the pair must consume the *proved* standard-Borel real coding and countable determining algebra, not a bare “standard Borel” label |
| `research/plan-spec.json` orders 288.1103/288.1104 | Both pages present, empty `items` arrays, the same seven `requires`, and exactly two future consumer pages (`mackeys-imprimitivity-theorem`, `direct-integral-decomposition-and-type-i-groups`) |
| `research/frontier-36-complete-alpha-step1-drift.md` lines 11–16 | Step 1 verdict `no-drift`; countable-choice and separability qualifications recorded as authoring obligations |
| `research/frontier-36-complete-owner-authoring-direction.md`, `research/frontier-36-complete-scope-ledger.json` | No pair-specific owner change; both pages present in the 60-page scope ledger |
| `items/*.md` dependency resolution (script) | 33 distinct published direct dependencies all exist; the 13 remaining dependencies are batch-2 items; 0 unresolved, 0 planned-only |
| Three cited PDFs re-fetched and hashed | Bruhat `aea84ab9dea07479…` 621,557 B; Bekka–de la Harpe `f478a69afaed8df5…` 4,266,926 B; Anantharaman–Popa `09e63a8b2060ed9f…` 1,737,489 B — all match the batch-2 record |

## Role in the library

This is the generic functional-analysis supplier of measurable Hilbert fields,
direct integrals, decomposable operator fields, the commutant of diagonal
multiplication, and the separable abelian von Neumann-algebra multiplicity
model. The design records it as the external FA supplier for RG-26/H1–H2
(`plan-representation-theory-groups-track.md` lines 2455–2456) and states its
only direct consumers are planned RG-24 `mackeys-imprimitivity-theorem` and
RG-26 `direct-integral-decomposition-and-type-i-groups`; every A and B item has
zero direct and transitive published impact, so the pair is not Phase 2
(confirmed in `plan-spec.json` and the ledger paragraph at
`research/published-consumer-supplier-ledger.md` lines 16069–16073). It
consumes only published items, including the FA-20 page
`spectral-measures-and-borel-functional-calculus` for the PVM/bounded Borel
calculus, the cyclic spectral representation and the separable multiplicity
definition. The Step 1 drift verdict for this page is `no-drift`.

## Inventory against the prose design and plan

All nine design items are present in manifest order:
`def-von-neumann-algebra-and-commutant`;
`def-measurable-hilbert-field-from-a-countable-fundamental-family`;
`lem-measurable-sections-have-measurable-pointwise-inner-products`;
`def-direct-integral-of-a-measurable-hilbert-field`;
`thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces`;
`def-measurable-and-decomposable-operator-fields`;
`thm-measurable-essentially-bounded-operator-fields-act-decomposably`;
`thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication`;
`thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras`.
Two ordered helpers support the last obligation:
`lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator`
(the design’s generator step; Anantharaman–Popa Proposition 3.1.3) and
`lem-diagonal-multipliers-form-a-von-neumann-algebra` (Bruhat Theorem 3, WOT
closure of scalar multipliers, including zero fibres). The B page contains
exactly the three designed examples. No design item was dropped or moved, no
extra pair is proposed, and 11 A items are far below the 100-item cap.

The RG reconciliation §15.6 item 3 obligation list for this page — “measurable
Hilbert fields from countable fundamental families, completeness of direct
integrals, measurable/decomposable operator fields, the commutant of diagonal
multiplication, and the spectral multiplicity model for abelian von Neumann
algebras, under standard/separable hypotheses” — is matched item by item. The
deliberate seams are explicit on both sides: group representation fields,
systems of imprimitivity, factors, type-I disintegration and fields of von
Neumann algebras are excluded here and owned by RG-24/RG-26; Bruhat’s
continuous/Lusin-field results are excluded as a different convention. The
seven `requires` edges agree across manifest, plan and drift evidence, and the
item order is consistent with the recorded dependency levels.

## Source coverage, independently re-checked

- **Bruhat, TIFR Lectures 14, Part III Ch. 10 §§1.1–1.8 (printed pp. 90–102).**
  On the re-downloaded full text I read the load-bearing results: Proposition 3
  (measurable vector fields = countable coefficient test, p. 95), Proposition 4
  (L² membership, p. 96), §1.5 fibrewise orthogonalization (p. 96), §1.6
  operator fields and Proposition 5 (pp. 96–97), Theorem 1 (p. 97),
  Proposition 6 (matrix-coefficient criterion, p. 99), §1.8 decomposed and
  scalar operators (p. 99), Theorem 2 (decomposed operators are the commutant of
  the scalar algebra, with norm equality, pp. 100–101), Theorem 3 (the scalar
  algebra is weakly closed, pp. 101–102). The coverage rows point at exactly
  these results.
- **Bekka–de la Harpe Ch. 1 §§1.G–1.H (printed pp. 59–68).** Verified
  Definitions 1.G.3–1.G.4 (measurable fields, decomposable/diagonalisable
  operators, pp. 60–61), Theorem 1.H.1 (commutant characterisation; the general
  case is referred to Dixmier and proved below only for constant fields, p. 65),
  Proposition 1.H.2 (WOT closure of constant-field diagonal multipliers,
  pp. 65–66), Lemma 1.H.3 (p. 66), Theorem 1.H.4 (constant-field commutant
  reconstruction, p. 67), Corollary 1.H.5 (maximal abelian iff one-dimensional,
  p. 68). §1.I, pp. 69–70, is fields of von Neumann algebras and is correctly
  out of scope for the declared FA pair.
- **Anantharaman–Popa.** Proposition 3.1.3, printed pp. 51–52, states exactly
  that a separably acting abelian von Neumann algebra is generated by a
  self-adjoint operator; Theorem 8.1.1 with Remark 8.1.2, printed pp. 122–123,
  gives the multiplicity structure theorem and its uniqueness up to null sets,
  and leaves the active-set partition as an exercise that the scaffold’s
  rank-enumeration strategy supplies. Both locators match the coverage claims.
- **The ten `out-of-scope` rows** each carry a written reason and a destination:
  Bruhat’s continuous/Lusin-field proposition and approximation theorems, the
  Bekka–de la Harpe group-representation rows 1.G.5–1.G.11 and the 1.I
  von Neumann-algebra fields, and Popa’s Proposition 3.1.2 and Theorem 3.1.4.
  I found no harvested row whose omission leaves the declared subject —
  generic measurable fields, direct integrals, decomposable operators, the
  diagonal commutant, and the separable abelian multiplicity model —
  uncovered, and the group/Fourier applications have named owning pages.

## Observations for the owner and the Step 3b author (not item approvals)

1. **Published proof-gap candidate, already recorded by the batch-2 scaffolder.**
   `items/lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension.md`
   (`status: published`, 75 lines) passes in its step 4.1 from
   `V_{sr}=M_{g_{sr}}` for every coordinate pair to the assertion that
   `V*V = V V* = I` “force” `φ(z)*φ(z)=I_k` and `φ(z)φ(z)*=I_{k'}` for a.e.
   `z`, with no convergence or common-conull-set argument for the (possibly
   infinite) matrix field. I read the complete file and its declared
   dependencies: I found no published item that supplies fibrewise
   decomposability or a.e. unitarity of an operator commuting with all
   multiplications — that is precisely the machinery this scaffold is about to
   create. The claim itself is true (a.e. unitarity of an intertwiner between
   constant-multiplicity models), so this is a proof-completeness candidate,
   not a counterexample. Downstream, the published
   `def-spectral-multiplicity-function-in-the-separable-case` invokes “the
   intertwiner lemma” in its independence statement (7) for the measure class
   and multiplicity. No entry for this lemma exists in
   `research/published-consumer-supplier-ledger.md` (checked by item ID and by
   “fiber dimension”). Recommended owner action: record the candidate in the
   canonical ledger, and repair either by a countable localization/Parseval
   argument or — after this pair publishes — by deriving the fibrewise unitary
   field from the new commutant theorem. It does not block this pair’s scope.
2. **Interface with the published FA-20 multiplicity items.** The spectral
   measures page already publishes the single-operator separable multiplicity
   model and classification (Conway/Kriegl route) and the definition this pair
   reuses. The new theorem is the algebra form (`A=W*(S)`, `UAU⁻¹` the scalar
   multipliers) that the RG central-decomposition consumer needs, and it proves
   its own fixed-generator uniqueness instead of importing the published
   intertwiner lemma. I found no contradiction between the two interfaces; the
   Step 3b author should keep the generator/algebra formulation and the
   standard/separable hypotheses explicit so the two pages agree.
3. **`Bekka–de la Harpe Proposition 1.G.2` is disposed `inline`.** The general
   measurable dimension-strata and constant-fibre reduction is not itself an
   item; the source refers its proof elsewhere. For this pair’s declared scope
   the frame/Gram–Schmidt construction inside the direct-integral theorem
   supplies what the model uses. Not a scope omission, but if RG-24’s transport
   argument later needs a standalone dimension-strata lemma, the consumer page
   must build it. Flagged for the owner’s awareness only.
4. **Published orientation remark.** `rem-direct-integrals-and-general-multiplicity-theory`
   declares fields “beyond the standard countable fibers” and nonseparable
   multiplicity orientation-only. This pair also stays inside countable
   fundamental families and separable fibres, so there is no conflict and no
   mandatory published edit; a Phase-3 cross-link to the new page would be a
   nicety.
5. **First von Neumann algebra definition in the library.** No published item
   defines von Neumann algebras or commutants (the phrase “von Neumann algebra”
   occurs in no `items/*.md` file; the few “commutant” uses are commutant
   clauses of the functional calculus). `def-von-neumann-algebra-and-commutant`
   is deliberately minimal — concrete, unital, WOT-closed, no bicommutant
   theorem — and the design orders it first. No duplication found.

## Limits of this review

- I verified inventory, ordering, dependency resolution, source identity and
  the load-bearing source statements; I did not verify item proofs, choice
  accounting, the notes’ published-closure traversal, or the accuracy of every
  `inline` disposition. Those are Step 3b/5 duties.
- My source reading covered each load-bearing numbered result and its immediate
  context on the cited printed pages, not every page of each cited range; the
  coverage locators, the batch-2 hash record and my own re-download agree.
- The gap assessment in Observation 1 is a judgement about the written step of
  a published proof, read in full (75 lines) with its declared dependencies; I
  report it as a candidate for the owner’s ledger and did not edit the ledger
  or the item.
- No owner scope receipt existed for this pair; the second Step 3a task file
  for the pair (`…-15c76d430b09b6fb.task.md`) is byte-identical to the
  dispatched one, and no earlier review receipt was present.

## Decision

`sufficient`: the planned definitions, results and examples cover the intended
subject — measurable Hilbert fields from countable fundamental families,
direct-integral completeness and separability, measurable/essentially
bounded/decomposable operator fields, the commutant of diagonal multiplication,
WOT closure of the diagonal multipliers, and the separable abelian von
Neumann-algebra multiplicity model — match the binding §14.14 inventory plus
the two ordering helpers and the §15.6(3) obligation list, are backed by three
independently fetch-verified, hash-matched treatments whose load-bearing
results I re-read, dispose of all 36 harvested rows, and serve the declared
RG-24/RG-26 consumer interfaces with zero published impact. No enrichment,
merger or pair change is requested.
