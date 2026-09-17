# Step 1 notes — phase-2-remaining-27 batch 5

## Outcome

Constructed the two assigned A/B pairs once, in prerequisite order:

- `continuous-functional-calculus-for-self-adjoint-and-normal-operators`: 26 A items; its examples page has 7 B items.
- `spectral-measures-and-borel-functional-calculus`: 21 A items; its examples page has 8 B items.

All 62 items have complete statements, proof or well-definedness strategies, explicit dependency arrays, source references, provenance, and axiom audits. The canonical recorder accepted all 62 as `ready`; after the final explicit choice declarations, definition well-definedness strategies, and cyclic-representation proof expansion changed transitive hashes, only the stale records reported by the checker were refreshed and every unchanged ready record was preserved. There are no owned escalations. No published content, shared plan, engine state, verdict, or selected pair was changed.

The additional local helpers are load-bearing rather than inventory padding: `lem-bounded-hilbert-operators-form-a-c-star-algebra`, `lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`, `lem-spectral-permanence-for-unital-c-star-subalgebras`, `lem-character-space-of-generated-normal-algebra-is-operator-spectrum`, `lem-two-dimensional-numerical-range-is-convex`, `lem-weak-and-strong-additivity-of-orthogonal-projections`, `lem-continuous-functional-calculus-produces-a-regular-pvm`, and `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`. Their IDs were checked as unused before construction. No page split or new prerequisite pair is required.

## Binding direction and plan/design conflicts

The binding `research/phase-2-remaining-27-owner-authoring-direction.md` was read and applied before construction. In particular, FA-20 contains a full measurable direct-integral intertwiner proof, and multiplicity is the almost-everywhere dimension of the direct-integral fiber, never the dimension of the point eigenspace.

The following conflicts were resolved in favor of current `research/plan-spec.json`:

- The older FA-19 design prose broadly names FA-13, FA-17, FA-18, and a general Stone–Weierstrass route. The current plan requires exactly `gelfand-theory-and-commutative-c-star-algebras`. That exact page `requires` is retained; every actually used older theorem is declared at item level and lies in the plan closure.
- The older FA-20 design names FA-9, FA-12–14, FA-18–19, and planned measure-theory pages MT-8/11/12/20. The current plan requires exactly `continuous-functional-calculus-for-self-adjoint-and-normal-operators`. The exact page prerequisite is retained, while the measure, Radon–Nikodym, Hilbert-space, and integration suppliers actually used are explicit item dependencies.
- The design presentation lists the Borel-calculus definition before existence of the spectral PVM. The inventory is preserved, but prerequisite order is corrected: the regular PVM is constructed and the PVM spectral theorem proved before the Borel definition consumes it. This prevents a forward/circular proof dependency.
- The plan item arrays were empty at construction time. That unauthored state was not treated as permission to thin the binding design inventory.

## Mathematical and dependency audit

The principal load-bearing chains checked were:

- self-adjoint real spectrum and numerical-range control -> polynomial spectral mapping and normal-element norm equality -> polynomial isometry -> completion to the self-adjoint continuous calculus -> order, positivity, positive square root, absolute value, and polar decomposition;
- spectral permanence plus the character homeomorphism of the generated commutative C-star algebra -> normal continuous functional calculus -> spectral mapping and norm/radius consequences;
- WOT countable additivity of orthogonal projections <-> SOT countable additivity -> scalar positive measures and first-variable-linear polarized complex measures -> simple PVM integrals -> uniform bounded-Borel approximation -> star-homomorphism and dominated-convergence properties;
- continuous functional calculus plus scalar Riesz–Markov measures -> bounded Borel matrix coefficients -> projections and a regular PVM -> the PVM spectral theorem -> Borel functional calculus and spectral projections;
- cyclic scalar measure -> continuous norm-square isometry -> Radon `L²` density and completeness -> closed, cyclic range -> continuous multiplier intertwining -> bounded Borel multiplier intertwining by `L²` approximation and the Borel product law;
- maximal orthogonal cyclic reducing family -> multiplication-operator model -> a common finite dominating scalar measure from Radon–Nikodym derivatives -> standard fibers `C^{m(z)}` -> measurable multiplicity classification.

The PVM construction does not assume the PVM it is meant to prove. `lem-continuous-functional-calculus-produces-a-regular-pvm` first constructs scalar Radon measures from continuous matrix coefficients, polarizes them, defines bounded Borel operators by Hilbert Riesz representation, proves multiplicativity one factor at a time by measure uniqueness, and only then defines the projections.

For the required converse in the multiplicity theorem, an intertwining unitary first carries all indicator spectral projections to their counterparts. After replacing both scalar measures by a common finite representative using Radon–Nikodym derivatives, the unitary commutes with every indicator multiplier. Countable fundamental sections and localized integral equalities then give a pointwise isometry on one conull set; applying the same argument to the inverse makes it pointwise onto there. Thus fiber dimensions agree almost everywhere, including the countably infinite case. The forward construction uses the canonical fiberwise unitary on the standard fibers. No coordinate change on the spectrum is allowed.

Other convention checks include: both `T` and `T*` are required in the commutant statement because Fuglede is not invoked; complex measures use the first-variable-linear polarization convention and a total-variation bound; PVM dominated convergence is SOT convergence; isolated spectral projections use positively oriented `(zI-T)^{-1}` contours; and Stone's formula has the matching resolvent sign and half-endpoint masses. Continuous calculus is not used to smuggle in discontinuous projections.

Every current-run supplier in batches 1 and 4 was read at statement-and-strategy level, including hypotheses and direction. Published measure, integration, Radon–Nikodym, contour-integration, and set-theory suppliers were checked in their item files. No missing, circular, forward, B-page, inadequate, or `Recorded` replacement dependency remains. Planned suppliers are not represented as published.

## Choice audit

The early Hilbert/PVM infrastructure inherits Countable Choice only where the inspected Hilbert adjoint, projection, completeness, or integration suppliers require it. The Gelfand route to normal continuous calculus, the spectral PVM/Borel calculus built on it, and their examples explicitly declare full AC. The general cyclic decomposition identifies its additional use precisely: Zorn selects a maximal orthogonal family of cyclic reducing subspaces. The separable direct-integral and multiplicity classification explicitly declare AC through the normal calculus, Radon–Nikodym selection, and measurable model construction. The concrete final order counterexample declares only Countable Choice.

Choice-free or weaker branches were preserved rather than silently promoted: finite matrix calculations add no choice, and the separable dense-sequence alternative to the Zorn decomposition is stated separately from general existence. No owned proof or prerequisite path reaches `deferred-set-theory-beyond-choice`, and no incompatible-axiom branch is consumed.

## Cross-batch dependencies

`research/phase-2-remaining-27-batch-5.cross-batch-dependencies.json` contains 36 reviewed `verified` rows: one page edge from FA-19 to the current Batch-4 FA-18 scaffold and 35 exact item edges to current Batch-1 or Batch-4 suppliers. Each evidence row states the required claim, convention, and use and explicitly says that the supplier is current in-run scaffold evidence, not publication. No new prerequisite pair or cross-batch repair is requested. The unified frontier ledger was refreshed with the repository tool after the dependency edits.

## Sources and dispositions

The coverage file records 43 harvested results: 36 `included`, 6 `inline`, and 1 `out-of-scope` with a specific boundary. No result is merely deferred without a destination. No source required `source_resolution`, a dropped-source waiver, or owner escalation.

FA-19 has four independent full treatments: Bühler–Salamon, *Functional Analysis*, Chapter 5 §§5.3–5.5, printed pp. 235–273; Williams, *Lecture Notes on the Spectral Theorem*, §§3–4, pp. 6–15; Conway, *A Course in Functional Analysis*, Chapter IX §3, printed pp. 239–243; and Shapiro, *Notes on the Numerical Range*, §§3–6, PDF pp. 9–17. The original author-hosted Bühler–Salamon URL returned HTTP 403; recovery stopped on the first successful alternate, a complete 452-page university-hosted copy, which was inspected and retained with the failed original URL as history.

FA-20 has five independent full treatments: Bühler–Salamon Chapter 5 §§5.6–5.7, printed pp. 273–296; Williams §5, pp. 15–20; Conway Chapter IX §10, printed pp. 293–301; Kriegl §§8.61–8.66, printed pp. 196–200; and Teschl §4.1, printed pp. 113–115. Exact locators and item-level dispositions are recorded in the coverage file.

Final source gates report 6/6 distinct URLs live, 9/9 coverage source rows fetch-verified and resolved, and all 30 authored source-backed results backed by an openable verified source.

## Published-interface findings

No defective published item is an actual prerequisite of these scaffolds. The earlier circular FA-20 scaffold route at `lem-continuous-functional-calculus-produces-a-regular-pvm` was not published; it was repaired locally by the scalar-measure construction described above before readiness was recorded.

The repository-wide external-reference check still reports 167 published `recorded-not-proved` items and 55 published downstream items resting on them. Those 55 warnings are pre-existing, unrelated published consumer debt outside this batch; the check's invariant passes, and none lies on an owned prerequisite path. Consequently there is no Batch-5 supplier repair or canonical-ledger entry to propose for them.

## Gate evidence

Final batch and whole-run checks:

- `coverage-checklist`: 2 A pages, 43 harvested results, 0 errors, 0 warnings.
- URL/source gates: 6/6 distinct URLs live; 9/9 source rows fetch-verified and resolved; 30 authored results retain verified openable backing.
- Whole-run `manifest-deps`: 958 items, 0 normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 958 scoped items, 0 errors, 0 warnings.
- `manifest-integrity --run phase-2-remaining-27`: 54 pages owed and 54 represented, with no scope drift.
- `validate-plan`: exit 0; 1,624 pages, 18,829 planned new items, and no item cycle, forward reference, B-page dependency, or unresolved ID among the 1,138 planned pages currently carrying item lists. It notes 481 planned pages whose item lists remain empty.
- `extcheck`: exit 0; 19,056 items, 167 recorded-not-proved, 55 downstream items resting on them, and the invariant passes.
- JSON parsing and `git diff --check` pass for the owned artifacts and derived frontier ledger.
- Readiness: 62/62 owned items are current and `ready`, with 0 missing or escalated. The whole-run item count is 958/958 ready at this snapshot; global closure remains false only because the two Batch-6 unbounded-operator pages still have empty scaffold inventories.

Owner/operator reconciliation and the full engine gate remain later workflow stages. These readiness records are construction evidence, not independent mathematical approval.
