# Batch 14 notes — emg-g03

## Inventory, plan comparison, and dependency levels

The binding owner direction selects `emg-g03` and its example companion. The assigned inventory is the two A-page items `pthm-emg-observer-maxwell-current` and `pthm-emg-gauss-global-constraints`, plus B-page item `ex-emg-electric-stress`. The A/B pages are at orders 463/464 in `einstein-maxwell-models`; the page cap is not close to binding.

The current `plan-spec.json` and batch-14 manifest require `emg-g02` and `emg-mg03`. The original reservation in the complete design section at `research/plan-einstein-maxwell-models-track.md` L487 additionally lists `EMG-G01`. Per the task instruction, the current plan controls: G01 remains in the transitive closure through G02 and the Maxwell postulate, but is not added as a direct G03 page prerequisite. The assigned item inventory agrees with the proposal inventory; no item was omitted or weakened.

Batch 14 is dependency level 2 and requires batches 3 and 13. The recomputed item levels are:

- `pthm-emg-observer-maxwell-current`: level 2, from its in-run Maxwell postulate and GA4 supplier at level 1; its other direct mathematical suppliers are outside the run and current.
- `pthm-emg-gauss-global-constraints`: level 3, from `lem-emg-sphere-flux-holonomy` at level 2.
- `ex-emg-electric-stress`: level 4, from `lem-emg-maxwell-observer-stress` at level 3.

The assigned subgraph is acyclic. No new local supplier item was needed. The scoped dependency calculation reports levels 2/3/4 and no errors for these items.

## Current supplier interfaces and proof status

The actual G01/G02/MG03 carriers now exist. `post-emg-covariant-maxwell` states the selected smooth SI equations `dF=0` and `∇^g_aF^{ab}=−μ0j^b`; it is a draft physical adoption and is treated only as an explicit conditional premise. It does not establish that the curved continuation describes nature.

The draft `lem-emg-maxwell-current-forms` (GA2) was read with its complete proof. Its source-form sign, current-conservation, and point-normal component interfaces match [F1] and the proof. The draft `lem-emg-gauss-finite-chain` (GA4) Statement and proof match the finite smooth-chain charge identity, cycle neutrality, bounding-flux restriction, and signed side-flux balance. Both mathematical arguments are complete at draft status; their exact hypotheses and dependencies are retained. The published density-divergence theorem, point-normal chart theorem, Sylvester law, Lorentzian Hodge-square lemma, and ACω definition were also checked at their exact interfaces and proofs. The observer chart in the first theorem is constructed from the arbitrary point value `n(p)` by completing it with a finite orthonormalization in its positive-definite orthogonal complement.

`def-emg-topological-sector` is present as a draft definition and matches the global real two-form and optional fixed `U(1)`/`κ₀` wording. Its optional connection branch refers to the local-potential definition, whose proof closure remains tied to the unresolved MG01 package. No quantization result is inferred.

The actual `lem-emg-sphere-flux-holonomy` Statement supports the smooth closed Cartesian `F_b` on the punctured domain and the outward unit-sphere flux `4πb`. The G03 proof uses that current interface conditionally, computes the same flux for every radius itself, and checks the Hodge-dual sign. Its current Fact [A1] lists seven absent MG01 replacement carriers, so its overall proof status remains unresolved even though the used flux subclaim is explicit. The supplier’s display delimiter at line 72 was malformed during one inspection and was corrected in the current file before final validation. The unresolved carrier list is:

- `def-emg-finite-real-supremum-domain`
- `def-emg-real-metric-axiom-convention`
- `lem-emg-metric-axioms-imply-nonnegativity`
- `def-emg-explicit-power-regimes`
- `lem-emg-sequence-limit-criterion-with-choice`
- `def-emg-boundaryless-completeness-domain`
- `def-emg-set-size-and-class-schema`

These contracts are specified at the corresponding `#supremum-domain`, `#metric-definition`, `#metric-nonnegativity`, `#power-domain`, `#heine-choice`, `#boundaryless-domain`, and `#category-size` anchors in `research/extended-frameworks-2026-10-03/einstein-maxwell-models/foundational-replacements.md`. The current plan places `emg-mg01` at order 433, but that page is not in the current run manifests. Proposed placement is the mathematical A page `emg-mg01` (order 433), subject to owner routing. This gap affects the proof closure for the G03 punctured-domain global example and the G02 local-potential/circle branch; no supplier or other pair was authored here.

The current `lem-emg-maxwell-observer-stress` Statement matches the pure-field SI calculation, including the signs of `T^{ij}`. Its Fact [A1] makes the tensor conditional on `lem-emg-maxwell-action-variation`. The action-variation, local-potential, and circle-gluing carriers are present and their interfaces were checked; the circle-gluing proof closure remains unresolved on the same seven absent MG01 inputs. The B example is therefore conditional and escalated. The carrier facts in the item and this batch evidence distinguish present draft interfaces from missing transitive proof inputs.

The first theorem and the global theorem both state ACω exactly through `def-countable-choice`; no stronger choice principle is assumed. Finite-chain calculations, local frame completion, and component algebra spend no additional choice principle.

## Conventions, scope, and mathematical checks

The two A items preserve signature `(-,+,+,+)`, the oriented metric volume, `x⁰=ct`, `ε₀=(μ₀c²)⁻¹`, `F₀ᵢ=−Eᵢ/c`, `Fᵢⱼ=εᵢⱼₖBₖ`, and `j=(cρ,J)`. In curved spacetime the four component equations are pointwise in a point-normal chart aligned with `n(p)`; they do not claim a global inertial chart for a varying observer congruence. The charge and flux claims are limited to finite smooth chains; no asymptotic limit is used. The global example makes no claim at the excluded origin. The B page computes pointwise pure electric and magnetic stress and makes no perfect-fluid or empirical claim.

Both A-page sources are independent full lecture-note treatments. The complete David Tong *General Relativity* PDF was inspected at §§3.2.5 (printed pp. 113–117; PDF pp. 120–124), 4.5.3 (printed pp. 183–186; PDF pp. 191–194), and 4.5.5 (printed pp. 187–188; PDF pp. 194–195). The complete Sean Carroll *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1, was inspected at Chapter 1, pp. 20–24 (PDF pp. 26–30), pp. 29–30 (PDF pp. 35–36), and Chapter 4, pp. 107–108 (PDF pp. 113–114). All eight harvested results are recorded as included in the coverage ledger. Tong’s natural-unit display and Carroll’s Gaussian-unit/sign conventions were not imported; local SI signs and factors follow the inspected mathematical suppliers. The sources support conventions and scope, not proof of the physical model.

Both URLs fetched successfully; `source-fetch-check.mjs --stamp` verifies 2/2 sources and 2/2 resolved, with zero retrieval failures and zero documented drops. No `source_resolution` recovery record was needed. The successful retrievals and section locators remain in the coverage ledger.

## Scoped checks and run-wide blockers

- `proof-layout.mjs`: 3 changed items, 13 numbered steps, 0 defects.
- `precheck.mts`: all 3 proof-bearing items pass.
- `rendercheck.mjs`: all 3 items and both pages pass.
- `proof-contract.mjs --strict`: 3/3 items, 0 errors, 0 warnings; contracts quote current supplier text, map every numbered step, and include boundary cases.
- `manifest-deps.mjs`: 3 items, 0 errors.
- `content-policy.mjs --manifest-only --authored`: 3 items, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 1 A page, 8 harvested results, 0 errors, 0 warnings.
- Scoped dependency levels: 2/3/4 for the assigned items, no item errors.

The run-wide `proof-contract-coverage.mjs` check is blocked by an unrelated empty page inventory `emg-pcp01`. The run-wide item dependency-level check reports numerous empty scaffold inventories elsewhere in the selected 80-pair run and unrelated existing level mismatches, including `lem-emg-coupled-reduced-einstein-evolution` (declared 2, computed 4) and `thm-emg-einstein-gauge-propagation` (declared 3, computed 5). The assigned subgraph has no level error; shared manifests and engine state were left to the owner.

Step 1 records: `pthm-emg-observer-maxwell-current` is `ready` as a complete conditional draft with current inputs; `pthm-emg-gauss-global-constraints` and `ex-emg-electric-stress` are `escalated` for the unresolved proof closures above. These records do not constitute independent approval. The global theorem’s escalation reason was written with an unintended shell expansion in the literal delimiter text (`opens 2, closes $`); the supplier delimiter has since been fixed, while the seven missing inputs remain. Its recorded dependency hash predates that supplier edit. The stress example’s escalation reason described its local-potential/circle-gluing carriers as missing; full inspection shows those carriers are present with matching interfaces, while their proof closure still has the seven missing inputs. The stress item’s [F1] and the batch dependency/coverage evidence have been corrected to this current status, so its recorded dependency hash predates that item edit. Because the Step 1 instruction forbids overwriting an escalation, those existing escalated records were left untouched for owner correction.

Completion evidence records authoring and checks only; it is not an independent review or publication approval.
