# Step 1 notes — phase-2-remaining-27 batch 1

## Outcome

Constructed the four assigned scaffolds in prerequisite order:

- `hilbert-space-geometry-and-riesz-representation`: 26 A items.
- `hilbert-space-geometry-and-riesz-representation-examples`: 8 B items.
- `orthonormal-bases-parseval-and-fourier-series`: 24 A items.
- `orthonormal-bases-parseval-and-fourier-series-examples`: 5 B items.

All 63 items have complete statements, proof strategies, explicit dependency arrays, source references, provenance, and axiom audits. After independent mathematical review exposed choice-strength, topology, scalar-convention, complex-`L^2`, projection-example, calculus-supplier, and source-locator defects, an owner-authorized Batch-1 repair corrected the manifest and coverage record. The canonical `tools/step1-decisions.mjs` recorder refreshed the 55 readiness records whose transitive hashes changed; the eight still-current records were left intact. No escalation was overwritten. The manifest has no `scaffold_status`, and no published content, plan, engine state, verdict, or other batch was edited.

## Binding direction and design conflicts

The binding `research/phase-2-remaining-27-owner-authoring-direction.md` and its cited authoring amendment were applied before construction.

- The original FA-13 design's `def-orthogonal-projection` collides with the published finite-dimensional `def-orthogonal-projection`. The binding replacement `def-hilbert-orthogonal-projection` is used. This is an intentional conflict with stale design text.
- FA-13 includes the binding prerequisite `lem-inner-product-is-jointly-continuous` before the completion pairing. Its double-perpendicular theorem is restricted to a linear subspace, not an arbitrary subset.
- FA-14 includes all five binding additions: `def-square-summable-family-on-an-arbitrary-index-set`, `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-finite-tori-are-compact-hausdorff-character-spaces`, and `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`.
- The design prose names FA-1/2/7/10 for FA-13 and several MT/topology pages for FA-14 as direct page prerequisites. Current `research/plan-spec.json` instead gives exactly `banach-valued-integration-and-the-radon-nikodym-property` for FA-13 and FA-13 for FA-14. The current plan controls: those exact page-level `requires` arrays were retained, while the needed older suppliers are named at item level and are transitively earlier. No page order, title, category, or companion conflict remains. The plan's item arrays are currently empty, so there was no competing current item inventory.

## Dependency and axiom audit

The principal load-bearing chains checked were:

- Cauchy–Schwarz -> induced norm and norm-product-topology joint continuity -> well-defined completion pairing under the published completion supplier's exact `AC_omega` hypothesis.
- Parallelogram identity -> convex minimizing sequences -> `AC_omega` selection of approximate minimizers -> closed-convex projection -> subspace decomposition -> Riesz representation -> canonical-bidual reflexivity and Hilbert adjoints.
- Finite Bessel -> finite-subset supremum for arbitrary nonnegative sums -> countable support -> norm-convergent finite-sum nets -> Parseval/Fourier expansion -> coordinate isometry onto `ell^2(I)`.
- Local `L^2` Hilbert structure plus quotient-torus topology, compact Hausdorff finite tori, complex Stone–Weierstrass, and periodic continuous-function density -> trigonometric completeness -> mean-square Fourier expansion, Parseval, Riesz–Fischer, and the finite-torus extension.

Arbitrary-index square sums are suprema in `[0,+infinity]` of finite subsums, with the unbounded case equal to `+infinity`; synthesis uses finite-subset nets and no prior enumeration. `AC_omega` is used exactly for the countable family of finite tail controls and for published sequential-completeness/integration suppliers. Full AC occurs only in `thm-existence-of-a-maximal-orthonormal-family` (Zorn) and `rem-l2-projection-agreement` (the published concrete projection supplier); each imports the explicit `AC => AC_omega` bridge. The countable-dense-sequence Gram–Schmidt theorem is deterministic, while `cor-separable-infinite-dimensional-hilbert-space-is-ell-two` is proved in ZF from one separability witness, a canonical enumeration, and canonical natural-number partial sums, without arbitrary-index synthesis. No owned proof or prerequisite path reaches `deferred-set-theory-beyond-choice`.

Well-definedness checks include the completion pairing on equivalence classes, real and complex `L^2` quotient pairings, Fourier coefficients on null classes and representatives modulo `Z`, finite-product integration, and the synthesis map into `ell^2(I)`. The first-variable-linear convention is explicit in the Gram-transpose equation `G^T c=b`, the norm formula `c^T G conjugate(c)`, adjoints, and bilinear Parseval. The finite-torus proof uses local quotient/circle and finite-product topology, direct translation-invariance/integral suppliers, and direct Euclidean zero-extension/restriction for bounded-interval density—not a later circle/fundamental-group page, an unstated affine substitution, or an unproved Hilbert tensor-product theorem. Fourier examples now declare the FTC, trigonometric derivative, chain-rule, integration-by-parts, power-derivative, and Riemann/Lebesgue-agreement suppliers they actually use; Haar completeness declares compact Heine–Cantor.

## Published interface debt recorded for owner reconciliation

- `def-orthogonal-projection` is **published** and is explicitly finite-dimensional, depending on `thm-finite-dimensional-orthogonal-decomposition`. Reusing its ID for the infinite-dimensional Hilbert construction would be a scope collision. Repair used here: the stable unused ID `def-hilbert-orthogonal-projection`. Suggested canonical reconciliation: preserve the finite-dimensional item and have it agree with or alias the later Hilbert definition after publication.
- `thm-hilbert-spaces-are-reflexive-by-riesz-representation` is **published**, assumes Countable Choice, and already proves both Riesz representation and canonical reflexivity. It is not consumed by the new replacements `thm-riesz-representation-for-hilbert-space` and `cor-hilbert-spaces-are-reflexive`; consuming it would be circular ownership. This is overlapping published ownership, not a defective prerequisite. Suggested canonical reconciliation: retain it as a compatibility theorem/alias or deprecate its aggregate ownership after the canonical FA-13 items publish.
- `lem-closed-l-two-subspaces-have-orthogonal-projections` is **published** and passed audit. It is used only by `rem-l2-projection-agreement` to identify the pre-existing concrete `L^2` construction with the general Hilbert projection; it is not used to prove the replacement projection theorem.

No defective actual prerequisite was found. The published ownership/interface debt above does not block the new suppliers.

## Source record

The coverage file records a disposition for all 66 harvested results. No result required a dropped-source resolution or owner escalation.

- Andrew Lin and Casey Rodriguez, *MIT 18.102 Introduction to Functional Analysis*: complete proofs in printed pp. 89–95 for projection, decomposition, Riesz and adjoints; printed pp. 72–80 for Bessel, maximal and countable bases, expansion, Parseval and separable classification.
- Theo Bühler and Dietmar Salamon, *Functional Analysis*: §1.3.3, pp. 38–41; §2.3.6, pp. 87–88; §§5.3.1–5.3.2, pp. 235–239.
- Bruce Blackadar, Ilijas Farah and Asaf Karagila, *Hilbert spaces without the Countable Axiom of Choice*: §§1–3 and §4.1, including the complete closest-point/Riesz and arbitrary-family arguments needed to audit choice strength.
- Gerald Teschl, *Topics in Real and Functional Analysis*: §2.1, pp. 47–53, and §2.5, pp. 63–68, including Theorem 2.2 on printed pp. 49–50 as the corrected locator for Hilbert Fourier expansion and the later Fourier-completeness route. Problem 2.18 is retained only as a one-dimensional orientation row; the finite-torus extension is locally proved from the published complex Euclidean density supplier.
- Henri P. Gavin's Duke notes supply the displayed square-wave and sawtooth formulas; the manifest strategies independently give the elementary integrations and Parseval algebra.
- Vladimir Dobrushkin's Brown tutorial supplies the Haar construction and span assertion; the manifest supplies the complete dyadic-step density route.

`source-fetch-check` reports 9/9 coverage source rows fetch-verified and resolved. A fresh URL sweep reports all six distinct URLs live. `source-backing --require-verified` reports all 28 authored source-backed results still backed. Retrieval history and exact locators remain in the coverage file.

## Cross-batch dependencies

`research/phase-2-remaining-27-batch-1.cross-batch-dependencies.json` is `[]`: neither owned page consumes an item or page owned by another batch in this run. The unified frontier ledger was refreshed with the repository tool. It correctly contains incoming page edges from later consumer batches to these suppliers; those reviews belong to the consumer batches. The strict ledger closure remains incomplete because batches 2–6, 8–9, and 12–14 had not supplied reviewed inputs at the check snapshot.

## Gate evidence

Final batch-local checks:

- `manifest-deps`: 63 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 63 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 66 harvested results, 0 errors, 0 warnings.
- URL/source gates: 6/6 distinct URLs live; 9/9 source rows fetch-verified and resolved; 28 authored results retain openable verified backing.
- Readiness: 63 ready, 0 missing or escalated in this batch.

Whole-run snapshot after Batch-1 repair (other batches remained concurrently in progress):

- `manifest-deps`: 290 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 290 scoped items, 0 errors, 0 warnings.
- Coverage over the coverage files then present: 10 pages, 217 harvested results, 0 errors, 0 warnings.
- `validate-plan`: exit 0; page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the 1,134 pages carrying item lists. It notes 485 planned pages without item lists.
- `extcheck`: exit 0; 19,056 items, 167 recorded-not-proved, 55 downstream items resting on them, and the final invariant passes. Its 55 warnings are pre-existing published recorded-result debt outside this batch.
- Whole-run Step 1 item readiness was 290/290 at the final snapshot. The run was not yet globally closed because 38 page inventories in other, still-unbuilt batches were empty. This batch's 63 records were all accepted.

Owner/operator reconciliation and the engine gate remain subsequent workflow stages; these readiness records are construction evidence, not independent mathematical approval.
