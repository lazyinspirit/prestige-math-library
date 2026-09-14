# Phase 2 next 18 — batch 5 Step-1 construction notes

## Scope and construction result

This batch owns only the A/B pairs `solvable-and-nilpotent-lie-algebras` / `solvable-and-nilpotent-lie-algebras-examples` and `semisimple-lie-algebras-cohomology-and-levi-theory` / `semisimple-lie-algebras-cohomology-and-levi-theory-examples`. The manifest contains 42+12 items for the first pair and 46+12 for the second, 112 items total. The six false statements on each A page and all designed B-page examples and counterexamples are retained. Every item has a stable unused ID, explicit `deps`, a statement contract, a proof or disproof strategy, an axiom base, provenance, and source attribution. Local suppliers precede consumers; B-page leaves are never prerequisites.

No published content, shared plan, engine-state file, verdict, or canonical defect ledger was edited. The consumer-batch input file is owned by this dispatch and is empty because no current-run cross-batch edge is needed.

## Controlling designs and plan reconciliation

I read both listed locations and the complete surrounding sections in `research/plan-differential-geometry-track.md`.

- For `solvable-and-nilpotent-lie-algebras`, the DG-28 section beginning at line 7107 controls the complete pair. Its A-page inventory controls definitions, closure properties, Engel and Lie routes, radical/nilradical theory, field restrictions, and six boundary false statements. The line-7244 location is the B-page subsection of that same DG-28 design and controls its twelve examples/counterexamples. Neither locator is a competing revision.
- For `semisimple-lie-algebras-cohomology-and-levi-theory`, the complete DG-29 section beginning at line 7310 controls the pair. The assigned line-7471 location is its B-page subsection; the preceding part of the same section controls invariant forms, Cartan/Weyl theory, Chevalley–Eilenberg signs and cohomology, Whitehead, Levi–Malcev, Ado, and Lie II/III.

The current `research/plan-spec.json` controls conflicts. Its four page records agree with the assigned IDs, titles, orders 497–500, categories, companions, and exact `requires` arrays. The conflict is structural: all four current-plan `items` arrays are empty, while DG-28 specifies 54 items and DG-29 specifies 58. The plan's page metadata and prerequisite edges were followed; the full generated-design inventories were materialized as the requested scaffold. No substantive statement, ordering, convention, or prerequisite conflict was found.

The alpha drift report was read together with its JSON evidence. It records `VERDICT: no-drift` for both A pages: the three declared prerequisites cover the first pair's linear algebra and representation inputs, and the six declared prerequisites cover the second pair's Lie-group, homological, integration, and preceding solvable/nilpotent inputs. This was treated as routing evidence only, not as a proof check.

## Mathematical conventions and proof routes

The algebraic theory is stated over a field, with algebraic closure and characteristic zero imposed exactly where Lie's theorem, Cartan criteria, Whitehead lemmas, Levi–Malcev, and Ado require them. Finite dimensionality is explicit on all structure theorems that need it. The nilpotent and solvable closure claims keep their correct asymmetry: solvability is extension-closed; a central extension of nilpotent algebras is nilpotent; an arbitrary nilpotent-by-nilpotent extension need not be nilpotent.

Important proof-closure decisions were:

- The lower and upper central series are both defined before their equivalence, and their characteristic-ideal and well-defined quotient uses are explicit.
- Engel's common-zero-vector lemma precedes triangularization and Engel's theorem. The false “basis suffices” claim is refuted in `sl_2` by a basis of individually ad-nilpotent elements whose span contains a non-nilpotent adjoint element.
- The nilradical is not introduced as the set of ad-nilpotent elements. Its existence proof shows that the sum of two nilpotent ideals is nilpotent: the sum is solvable, Lie triangularization applies after scalar extension, each ideal has zero diagonal in the adjoint representation, and Engel applies. Finite dimensionality then reduces the sum of all nilpotent ideals to a finite sum.
- Derivation invariance does not follow merely from automorphism invariance. The strategy proves the stronger characteristic-zero result `D(rad(g)) ⊆ nilrad(g)` by the radical-invariance and triangularized weight/trace argument, then restricts to the nilradical.
- Cartan's semisimplicity criterion uses `[g,rad(g)] ⊆ nilrad(g)` and an adjoint filtration; it does not assume a Levi factor. This avoids a circular route into Levi decomposition.
- The Chevalley–Eilenberg differential fixes one sign convention and proves `d²=0` by the action-representation cancellation and Jacobi, before cohomology is defined. `H²` classifies only abelian extensions with the specified module action.
- Whitehead II handles the trivial simple module via the central-extension interpretation and Weyl splitting; Levi then inducts through the radical. Malcev conjugacy follows later from Whitehead I and nilradical corrections, so neither result is used circularly.
- Ado is stated in the strengthened characteristic-zero form with nilpotent nilradical action. Lie III then uses Ado, the published subgroup–subalgebra theorem, and the universal covering Lie group. Lie II integrates the graph and uses simple connectivity. Global exponential bijectivity is restricted to connected simply connected nilpotent groups; the BCH polynomial terminates there.
- The classical Killing-form examples include the usual low-rank orthogonal exceptions. The Euclidean-motion example is the six-dimensional algebra of three-space, `R^3 ⋊ so(3)`, not a three-dimensional Lie algebra.

## Actual dependency audit

The statements and proofs of the load-bearing published dependencies were read rather than inferred from publication status. The audit covered:

- `def-lie-algebra-over-a-field`, `def-lie-subalgebra-ideal-and-center`, `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`, `def-quotient-lie-algebra`, `prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras`, `def-direct-product-and-direct-sum-of-lie-algebras`, `def-derivation-of-a-lie-algebra`, `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`, and `def-semidirect-product-of-lie-algebras`, including quotient well-definedness and the semidirect-product Jacobi condition;
- `def-representation-of-a-lie-algebra`, representation subquotients and intertwiners, irreducibility/complete reducibility/faithfulness, representation kernels, Schur's lemma, Hom/tensor/exterior-power constructions, PBW, the enveloping universal property, and canonical injectivity;
- rank-nullity, quotient vector spaces, existence of eigenvalues over algebraically closed fields, Cayley–Hamilton, trace and cyclicity `tr(AB)=tr(BA)`, and finite-dimensional linear-map duality interfaces;
- cochain complexes, cohomology, and the long exact sequence in cohomology, with directions and connecting-map hypotheses checked;
- the Lie subgroup–Lie subalgebra correspondence, uniqueness of lifts, simple connectivity, the universal covering Lie group, covering homomorphisms, discreteness/closedness of discrete Lie subgroups, BCH, and the exponential map.

All 41 external item IDs named by the manifest resolve to published items with adequate hypotheses and direction. The manifest supplies every additional local lemma before use. Whole-manifest dependency validation reports no missing, circular, forward, or B-leaf dependency. No Recorded result is consumed to prove its replacement. No owned item or prerequisite path reaches `deferred-set-theory-beyond-choice`, so the Foundations separation constraint is preserved.

No defective published prerequisite was found. In particular, the published subgroup–subalgebra correspondence's explicit `AC_omega` hypothesis is a declared logical boundary, not a defect.

## Choice boundary

All purely algebraic items, including Engel, Lie, Cartan, Whitehead, Levi–Malcev, and Ado, are scaffolded over ZF with their algebraic field hypotheses. The six A-page global integration results and three B-page global Lie-group examples that consume them state `ZF + AC_omega`, depend explicitly on `def-countable-choice`, and identify the use: the published Lie subgroup–Lie subalgebra correspondence uses countable choice in its maximal-leaf/countable-plaque construction. Lie II and Lie III inherit exactly that use; nilpotent exponential and quotient consequences inherit it through Lie II. No stronger choice principle is claimed, and the algebraic branch remains choice-free.

## Source reading and dispositions

Five distinct full authoritative works, represented by seven page-specific source records, were fetched, stamped, and inspected at the relevant arguments:

- Milne, *Lie Algebras, Algebraic Groups, and Lie Groups*, Chapter I §§2–6, for Engel, Lie, radicals, Cartan, Weyl, reductive structure, Levi–Malcev, and Ado.
- Knapp, *Lie Groups Beyond an Introduction*, Chapter I §§5–8, Theorem 1.127, and Appendix B §§1–3, for independent algebraic structure proofs, the nilradical derivation result, the nilpotent exponential theorem, Levi, Lie III, and Ado.
- Kirillov, *An Introduction to Lie Groups and Lie Algebras*, §§3.8, 5.4, and 6.1–6.3, for independent solvable/semisimple structure and fundamental-theorem treatments.
- Weibel, *An Introduction to Homological Algebra*, Chapter 7 §§7.7–7.8, for Chevalley–Eilenberg cohomology, extensions, Casimir, both Whitehead lemmas, Weyl, and the cohomological Levi route.
- Etingof's complete MIT Lie-groups notes were also inspected as a cross-check for Engel/Lie/Cartan, Chevalley–Eilenberg cohomology, Whitehead, Levi, and Ado. They were not needed as one of the formal coverage records because the first pair already has three independent treatments and the second has four.

The coverage file records 44 harvested results with an `included`, `inline`, `deferred`, or specifically reasoned `out-of-scope` disposition. All seven source records passed full-text fetch verification. There were no retrieval failures, retries beyond the successful initial fetches, dropped sources, source-count waivers, or owner source escalations.

Two source limitations were preserved rather than silently copied:

- Kirillov states Engel's theorem in §5.4 but omits its proof; the item uses the complete Milne and Knapp proofs.
- Etingof's Theorem 47.10 states an overbroad global exponential claim for simply connected solvable groups. Knapp gives an explicit simply connected solvable counterexample immediately before Theorem 1.127 and proves the correct nilpotent theorem. The scaffold therefore makes no global exponential claim for general solvable groups.

Milne's introductory prose informally associates centerlessness with semisimplicity, but the later formal definition and proofs use the radical correctly. The scaffold retains `cex-centerless-does-not-imply-semisimple` and never uses centerlessness as a semisimplicity criterion. These are source-reading warnings, not defects in published library items.

## Published-defect ledger and cross-batch dependencies

No published defect was found among actual prerequisites, so there is no owned defect entry to forward to the canonical ledger. The source warnings above do not concern published library items.

`research/phase-2-next-18-batch-5.cross-batch-dependencies.json` is `[]`. The semisimple pair consumes `solvable-and-nilpotent-lie-algebras`, but both are owned by this batch and were built in prerequisite order. No cross-batch change, new prerequisite pair, selected-pair change, or page split is required, so the shared frontier dependency ledger needed no edit.

## Readiness and verification

All 112 owned items were recorded `ready` in manifest prerequisite order with their exact direct dependency arrays and examined proof/source evidence. The first record, `def-derived-series-and-solvable-lie-algebra`, was already ready after its individual construction and was preserved unchanged; the remaining 111 were then recorded sequentially. A final `step1-decisions check` snapshot found zero open owned records (112/112 closed). The whole run remained open at that snapshot because other batches had not yet recorded every item. These records are Step-1 construction evidence only; owner/operator reconciliation and Step 3 remain independent mathematical review.

Final checks, with actual results:

- Assigned manifest dependencies: 112 items, zero normalized, zero errors.
- Assigned manifest content policy: 112 scoped items, zero errors, zero warnings.
- Whole-run manifests present at the final snapshot: 531 items, zero normalized, zero dependency errors; content policy reported 531 scoped items, zero errors, zero warnings.
- Manifest integrity: 36 owed pages, 36 present, zero missing and zero added.
- Assigned coverage: two A pages and 44 harvested results, zero errors and zero warnings.
- Assigned source fetch/resolution: 7/7 page-specific source records fetch-verified and 7/7 resolved, with zero drops.
- Current-plan validation exited successfully: page order is acyclic and consistent, and there are no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the 1,098 plan pages currently carrying item lists. It notes that 521 other planned pages still have empty item lists, including the structural empty-list conflict described above.
- Repository external-reference check exited successfully over 18,490 published items. It reports the existing global total of 165 recorded-not-proved items and 55 consumers resting on them; none is an owned item's actual prerequisite, and every reported consequence is already marked.
- Repository forward-reference check exited successfully over 18,490 published items: zero open forward references, 398 closed, and 32 load-bearing.
- JSON parsing and `git diff --check` passed for the four owned batch artifacts.

The whole-run coverage and combined-source snapshots did not pass solely because another batch's `symmetric-collapse-and-ultrafilter-free-models` coverage retains an explicit owner escalation for `thm-blass-model-has-only-principal-ultrafilters` at `https://zbmath.org/?q=an:0365.02054`: the alternative argument/dependencies are unresolved there. Whole-run coverage reported 18 pages, 379 harvested results, three errors; the combined source check reported 53/55 fetch-verified and 54/55 resolved. This finding is outside batch 5 and is recorded here rather than edited or treated as a blocker for these independent Lie-algebra suppliers.
