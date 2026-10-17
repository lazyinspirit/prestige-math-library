# Batch 2 — EMG-MG02 local potentials and circle connections

Run: physics-remaining-80-2026-10-17  
Role: beta, batch 2  
Owned pair: emg-mg02 / emg-mg02-examples  
Output manifest: research/physics-remaining-80-2026-10-17-batch-2.pages.json

## Scope, plan comparison, and page capacity

The assigned pair is order 439 in einstein-maxwell-models-mathematics, library mathematics. The complete design section at research/plan-einstein-maxwell-models-track.md L107–130 specifies the five planned items, the local-potential/connection/flux scope, and the original page prerequisite. The current research/plan-spec.json entry and current batch manifest both require:

- emg-mg01
- fibrations-fiber-bundles-and-homotopy-exact-sequences
- the-de-rham-complex-homotopy-and-mayer-vietoris
- the-de-rham-theorem-and-degree

The original reservation JSON embedded in the design lists only EMG-MG01. This is the conflict recorded between the stale reservation and the current design prose/plan entry. The current plan controls; the A page carries all four prerequisites and the B page requires the A page. No shared plan file was changed.

The planned inventory items are preserved and ordered by their actual in-batch dependencies: A definition and radial primitive (level 0), gluing lemma (level 1), sphere/holonomy lemma (level 2), and B example (level 3). The page has four A items and one B example, below the 100-item cap. The chart-change TikZ diagram on the A page is only a notation diagram; its projections and convention are explained, and no proof relies on it.

## Item dependencies and level calculation

research/physics-remaining-80-2026-10-17-batch-dependency-levels.json assigns batch 2 level 0 with no in-run batch prerequisites. Item levels were recomputed from the final item graph:

| Item | Level | In-run suppliers | Direct current mathematical inputs |
|---|---:|---|---|
| def-emg-local-potentials-and-circle-data | 0 | none | def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, def-principal-g-bundle-and-associated-fiber-bundle, def-de-rham-cohomology |
| lem-emg-local-potential-construction | 0 | none | def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-newton-leibniz-with-interior-derivative, thm-continuous-implies-integrable |
| lem-emg-circle-connection-gluing | 1 | local-potentials definition | local-potentials definition, principal-bundle definition, Hodge calculus |
| lem-emg-sphere-flux-holonomy | 2 | gluing lemma and local-potentials definition | those two items, Hodge calculus, Stokes theorem, nth-root existence, smooth inverse-function theorem, continuous-implies-integrable, the first and Newton–Leibniz fundamental theorems, the total-derivative chain rule, the complex-exponential kernel and derivative, the complex exponential Cartesian formula, and the unit-circle parametrization |
| ex-emgmath-monopole-patch-flux (B) | 3 | sphere/holonomy lemma | sphere/holonomy lemma |

All direct mathematical inputs have mathematical-premise roles; all items have domain mathematics and physical_scope null. The added analytic inputs in the radial lemma make finite-interval differentiation, integrability, and endpoint evaluation explicit. The added square-root inputs in the sphere lemma prove smoothness of r on punctured space rather than assuming it. These are external published mathematics and do not change in-run levels.

The imported suppliers used in those rows were inspected at their current statements and proofs and their bytes were checked against the local import receipt. In particular, the bundle construction uses the actual right-action coordinate convention in def-principal-g-bundle-and-associated-fiber-bundle; the radial formula does not treat the Poincaré theorem's citation pointer as a proof; and the nonexactness step applies the actual finite smooth singular-chain Stokes theorem to a concrete finite sphere cycle.

The three non-EMG page prerequisites were read. The fibrations page supplies the bundle definitions and associated-bundle context; the de Rham-complex page supplies the closed/exact and cohomology definitions and homotopy context; the de Rham-theorem-and-degree page supplies the finite-chain Stokes theorem. The local item dependencies identify the exact results used. No Mayer–Vietoris theorem, general bundle-classification theorem, de Rham isomorphism, or general degree theorem is used to replace a local calculation; the radial primitive and loop winding are established directly here. Page prerequisites are retained as planned context.

There is no in-run cross-batch item or page edge. research/physics-remaining-80-2026-10-17-batch-2.cross-batch-dependencies.json therefore contains [].

## Missing EMG-MG01 supplier contracts and readiness

The current published emg-mg01 page lists only def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, lem-emg-conformal-hodge-multiplier, and lem-emg-observer-field-decomposition. None of the following seven reserved replacement IDs exists in the current local item directory or on that page:

- def-emg-finite-real-supremum-domain
- def-emg-real-metric-axiom-convention
- lem-emg-metric-axioms-imply-nonnegativity
- def-emg-explicit-power-regimes
- lem-emg-sequence-limit-criterion-with-choice
- def-emg-boundaryless-completeness-domain
- def-emg-set-size-and-class-schema

These are typed planned contracts, not current carriers and not proved by their inventory label. The following exact planned statements, hypotheses, and conventions were read in research/extended-frameworks-2026-10-03/einstein-maxwell-models/foundational-replacements.md:

1. **def-emg-finite-real-supremum-domain (#supremum-domain).** Work in the real complete ordered field. For S⊂R, sup S is a least upper bound only when S is nonempty and bounded above; completeness gives existence and antisymmetry uniqueness. Infima use the actual infimum suppliers by applying order reversal to −S. Do not evaluate sup ∅ in R; a separately stipulated zero for an empty path family is a separate total definition. Use extended reals only when required, without presuming extended-real field algebra.
2. **def-emg-real-metric-axiom-convention (#metric-definition).** A metric is a finite-valued map d:X×X→R with d(x,y)=0 iff x=y, symmetry, and triangle inequality. A pseudometric replaces only the iff clause by d(x,x)=0. Infinite values are outside both structures. The ordinary metric topology uses balls {y:d(x,y)<r}, r>0, only after nonnegativity is proved.
3. **lem-emg-metric-axioms-imply-nonnegativity (#metric-nonnegativity).** For either structure, 0=d(x,x)≤d(x,y)+d(y,x)=2d(x,y); dividing by positive 2 gives d(x,y)≥0. The quantified statement is vacuous on empty X. This is the full proof route, not an assumed fourth axiom.
4. **def-emg-explicit-power-regimes (#power-domain).** For a>0, integer m, positive integer n, rational powers use the unique positive nth root and integer powers/reciprocals; representative independence and laws belong to their named suppliers. Real powers are separately defined by a^x=exp(x log a) with their own laws. Do not infer real-power laws from rational roots. Smoothness of the positive square-root branch requires the separate local smooth-inverse argument and published smooth inverse-function theorem.
5. **lem-emg-sequence-limit-criterion-with-choice (#heine-choice).** For A⊂R, a limit point c, f:A→R, and L∈R, the epsilon-delta limit is equivalent to sequential convergence for every sequence in A\{c} tending to c, under exactly ACω. The forward implication uses no choice. For the converse, failure gives nonempty X_n={x∈A:0<|x-c|<1/(n+1), |f(x)-L|≥ε₀}; ACω selects a sequence contradicting sequential convergence. The exact real-limit, sequence, limit-point, order, Archimedean, reciprocal and absolute-value suppliers are required.
6. **def-emg-boundaryless-completeness-domain (#boundaryless-domain).** Hopf–Rinow/geodesic-flow uses a smooth manifold without boundary with a Riemannian metric and its Levi-Civita connection. Metric completeness means Cauchy sequences converge; two-sided geodesic completeness means every maximal affine geodesic is defined on all R. These are distinct definitions; their equivalence is a theorem under its own hypotheses. Boundaryful variants need a separate theorem.
7. **def-emg-set-size-and-class-schema (#category-size).** In the stated first-order set-theory language with power-set and separation, “definable class” abbreviates a formula with set parameters, not an additional set/domain for unrestricted quantification. Small categories have set objects/arrows and the usual structure maps; definable large categories are formulas/schema. The CP08 code construction uses subsets of fixed products/power sets and separation to select valid codes. No Grothendieck universe or category of all large categories is presumed.

The original typed package dependencies are preserved even where they are not premises of the local calculation. For the gluing lemma, the set-size interface is an explicit condition of the quotient construction; the other six remain inherited reserved closure inputs and do not substitute for current facts. The full item-level mapping and each absent carrier are repeated in the item facts/remarks and proof-contract conditional_supplier_context. Authors did not author any of these other pairs' supplier items.

Every item that declares one or more absent contracts is fully authored conditionally and has an explicit A1/remark recording the planned interface. The seven absent carriers remain a readiness blocker. No item is marked ready; all five final Step 1 records are escalated with their declared and inspected dependencies. Once the suppliers arrive, the owner must inspect actual interfaces against these exact use descriptions before readiness can change.

After all five Step 1 records were written, the radial proof explicitly cited its integral-differentiation input and received canonical phase labels. A final loop-lift audit replaced phase-chart subdivision with an explicit phase-integral construction, split the gauge proof into three steps, and added eight current mathematical suppliers to the sphere lemma; the B example inherits those supplier inputs transitively. The sphere lemma also now labels the in-run gluing lemma as conditional L1 under the exact set-size interface A1, and the B example labels the sphere lemma as conditional L1. The original escalations remain unchanged, as required. research/physics-remaining-80-2026-10-17-batch-2.step1-supplement.json records the newly examined dependencies, their exact uses, the current source hashes, and that the readiness decision remains escalated. This supplement does not grant readiness.

## Sources, full-text inspection, and dispositions

Coverage is in research/physics-remaining-80-2026-10-17-batch-2.coverage.json. It records full-text ranges, sources, harvested headings, destinations and dispositions.

- Guillemin and Haine, Differential Forms, complete MIT 18.952 text (2019): §2.4 coordinate exterior derivative and d²=0; §2.6 homotopy operator and Theorem 2.6.15. The local radial proof independently differentiates its integral formula.
- Tong, Gauge Theory, complete Cambridge Part III notes: §1.1.1 was read to separate its quantum phase restriction from the geometric calculation; §1.1.2 supplies the patchwork gauge-field and north/south potential discussion. No charge/ℏ postulate is adopted.
- Morrison, Connections on Principal Fibre Bundles, complete 18-page paper: §§3.1–3.3, 5.1, and 7.1–7.3. The source's proof pointers do not replace the local quotient, compatibility, curvature, or variation arguments.

Every source heading read has a disposition. The only out-of-scope result is Tong's quantum matter-phase charge condition; the reason is recorded with the source. The complete local proofs cover all mathematical results used from these sources. Earlier exploratory browser retrievals of an Edinburgh Gauge Theory candidate (timeout) and Oxford Hitchin notes (internal error) are retained in the coverage source-history record; neither candidate was selected, cited, or used as a premise. The MIT, Tong and Morrison full texts were the selected alternatives. These failed candidates are not marked dropped, and no exact prior browser URLs or timestamps are invented.

## Mathematical scope and qualifications

The A items define global exactness through the actual de Rham quotient and distinguish it from local exactness. The radial homotopy calculation assumes an open star-shaped chart and proves smoothness and both primitive formulas. The circle gluing lemma assumes countable cover data, a cocycle, smooth local forms with the prescribed phase-lift compatibility, and the exact planned set-size interface; it proves Hausdorffness, second countability, the smooth right principal bundle, connection form, curvature, and same-sector one-form differences. The sphere result proves flux and the Stokes obstruction, smooth local potentials, transition single-valuedness and winding, plus the flat circle holonomy example. Its bundle-connection conclusion consumes the actual in-run gluing draft as conditional L1 with the set-size condition A1; neither draft is reported as independently approved. Its loop phase lift is constructed by integrating the smooth logarithmic derivative; the endpoint integer uses the published exponential-kernel theorem, with exact analytic hypotheses listed in the item. The B example specializes to b=κ₀/2, giving flux 2πκ₀ and winding −1.

The condition 2b/κ₀ ∈ Z is exactly the single-valuedness condition for the chosen transition map and normalization. It is not a universal classical-flux restriction or empirical observation. Tong's quantum charge condition involving charge and ℏ remains out of scope. No general classification of circle bundles, empirical monopole, or quantum charge quantization is claimed.

## Checks

Checks were run after the final content edits. The final scoped results are:

- `proof-contract.mjs --strict`: 5/5 contracts; 0 errors and 0 warnings.
- `precheck.mts --json` on the five explicit items: 4 proof-bearing items checked, 0 failing; the definition item is not applicable.
- `proof-layout.mjs` on the five explicit items: 5 items, 22 proof steps, 0 defects.
- `rendercheck.mjs` on the five items and both pages: 7 files, clean.
- `coverage-checklist.mjs`: 1 page, 7 harvested source results, 0 errors and 0 warnings.
- `source-fetch-check.mjs --stamp`: 3/3 selected sources newly stamped, 0 drops. A subsequent check verified 3/3 fetch records, 0 drops.
- `content-policy.mjs` on the final batch manifest: 5 scoped items, 0 errors and 0 warnings.
- `manifest-deps.mjs`: 5 items, 0 errors. `manifest-integrity.mjs --run`: 160/160 pages, no scope drift.
- Isolated batch overlay dependency-level check: 5 items across 2 pages, maximum item level 3. Isolated proof-contract coverage: 5 scoped items, all 4/4 proof-bearing arguments covered, 0 errors.

Three run-wide checks are blocked by unrelated run state. `item-dependency-levels.mjs check --run` reports unfinished or mismatched inventories and dependency levels in other batches; it reports no batch-2 finding, and the isolated batch overlay passes. `validate-plan.mjs research/plan-spec.json --run ...` aborts on the unrelated duplicate/invalid item inventory in `physics-remaining-80-2026-10-17-batch-34.pages.json`. Run-wide proof-contract coverage stops before batch scope on the unrelated empty `emg-pcp01` inventory. These failures do not change batch 2's scoped results.

All five per-item Step 1 records remain `escalated` with `owner:false` because the seven exact EMG-MG01 supplier carriers listed above are absent. The readiness decision remains unresolved pending those carriers and an owner interface review; the checks establish structural and proof-contract consistency, not independent approval. Scoped failures caused by absent replacement carriers are blockers, not proof judgments.
