# Step 3a reader report — batch 81

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: `reader`  
Scope: batch 81

## Opened inventory

- Instructions: `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and `briefs/reader.md`.
- Dispatch evidence: `research/physics-non-fluid-129-2026-10-21-r2-batch-81.pages.json`, its `.proof-contracts.json`, `.cross-batch-dependencies.json`, `.coverage.json`, and `.notes.md`; the current batch-75 manifest was opened to inspect the assigned A page's page-level supplier.
- Assigned pages: `library/quantum-field-theory-mathematics/qftx-hall-bps-wall-crossing.md` (A) and `library/quantum-field-theory-mathematics/qftx-hall-bps-wall-crossing-examples.md` (B).
- Required page context: `library/hall-algebras-and-tensor-categories/hall-stability-dt-bps-and-wall-crossing.md`, `library/hall-algebras-and-tensor-categories/cohomological-hall-algebras-and-quiver-correspondences.md`, `library/hall-algebras-and-tensor-categories/motivic-hall-algebras-and-integration.md`, and `library/quantum-field-theory-mathematics/qftx-ribbon-braid-representations.md`.
- Assigned items, read in their logical order: `def-qftx-hall-spectrum-generator`, `prop-qftx-hall-spectrum-invariance`, `def-qftx-cy3-bps-integration-contract`, and `ex-qftx-a-two-hall-flags`.
- Mathematical suppliers opened for the finite-field Hall/HN arguments: `def-finite-acyclic-quiver-stability-data`, `lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form`, `lem-upper-half-plane-sum-phase-between`, `lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend`, `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori`, `lem-finite-quiver-hall-extension-orbit-count`, `thm-finite-quiver-euler-and-skew-integration-is-multiplicative`, and `thm-finite-quiver-hall-wall-crossing`.
- Direct Hall-algebra proof inputs opened: `def-hall-finitary-abelian-category`, `def-untwisted-hall-algebra`, `lem-untwisted-hall-product-finiteness`, and `thm-untwisted-hall-algebra-is-associative-and-unital`. Supporting definitions opened as needed included `def-finite-field-and-its-order`, `def-field`, `def-finite-cardinality`, `def-abelian-category`, and `def-additive-category`.
- Contract suppliers opened: `def-axiom-of-choice`, `def-quiver-potential-and-monodromic-vanishing-cycle-data`, `def-motivic-hall-algebra-of-a-finite-quiver`, `def-quiver-motivic-quantum-torus`, `def-untwisted-quiver-cohomological-hall-algebra`, and `def-critical-quiver-coha-from-vanishing-cycle-data`.
- The import ledger `research/math-imports.json` was searched for the exact published suppliers above; those suppliers were treated as read-only. The whole ledger is too large for useful contextual reading, so only the relevant item identities were queried.

## External source passages checked

- Tom Bridgeland, *Hall Algebras and Donaldson–Thomas Invariants*, [arXiv:1611.03696](https://arxiv.org/pdf/1611.03696), §§2.1 and 4.4–4.6. Section 4.4 defines the stability phase/semistability convention and HN property; Lemma 4.2 and its proof in §4.5 (PDF pp. 23–24) identify the descending-phase product with the all-object Hall element by uniqueness of HN filtrations; §4.6 (PDF pp. 24–25) gives the A2 wall example. These passages use Bridgeland's stated finiteness and stability hypotheses. Section 3.5 (PDF pp. 17–18) distinguishes hereditary integration from the CY3/motivic vanishing-cycle integration and notes orientation-data issues; it does not supply a physical protected-state dictionary.
- Markus Reineke, *The Harder–Narasimhan System in Quantum Groups and Cohomology of Quiver Moduli*, [arXiv:math/0204059](https://arxiv.org/pdf/math/0204059). Proposition 2.5 in §2 (PDF p. 4) states and proves HN existence/uniqueness by maximal-slope subobjects; §4 (PDF pp. 8–10) identifies Hall products with HN strata and derives the descending HN product. Reineke uses slope stability and a twisted Hall normalization; the local upper-half-plane phase and Euler/skew conventions are established by the opened local suppliers instead.
- Olivier Schiffmann, *Lectures on Hall Algebras*, [arXiv:math/0611617](https://arxiv.org/pdf/math/0611617). Section 1.3 (PDF pp. 6–7) gives the quotient-first Hall product, its embedded-subobject count, associativity by flags, and the zero-object unit. Lecture 3, §3.3 (PDF pp. 36–37) gives finite-field quiver Hall computations, including a single-arrow example. Its normalization differs from the local subobject-first Euler/skew maps; it was used only to check the cited Hall conventions and example scope.

## Mathematical review and page verdicts

- `qftx-hall-bps-wall-crossing` (A): the three placed definitions/proposition are mathematically supported by the stated finite-field Hall, integration, and HN suppliers. The formal phase product is degreewise finite because a fixed total-dimension bound admits finitely many nonnegative dimension vectors and phases. The proposition's inverse series is valid in the total-dimension filtration, and the equality of generators follows from the all-object HN factorization and multiplicativity. **Verdict: pass for the authored page carrier and item mathematics; dependency closeout is blocked by the open page edge below.**
- `qftx-hall-bps-wall-crossing-examples` (B): the example correctly classifies the two arrow orbits, automorphism groups, embedded subobjects, HN cases, Euler weights, and skew weights for the arrow (1\to2). Its TikZ arrow points from vertex 1 to vertex 2 as stated; the algebraic proof is independent of the diagram. **Verdict: pass for the authored page carrier, placement, and example; its transitive page prerequisite readiness shares the A-page blocker.**
- `def-qftx-hall-spectrum-generator`: pass. The phase factors include the zero Hall unit, the Euler and skew conventions match the integration theorem, and the completion is formal rather than analytic. The explicit final boundary correctly withholds any physical BPS-state identification.
- `prop-qftx-hall-spectrum-invariance`: pass. Its hypotheses match the published finite-quiver HN Hall identity; the proof identifies the integrated products with the defined generators and establishes invertibility degreewise. The claim remains a finite-field Hall identity and makes no physical state-counting claim.
- `def-qftx-cy3-bps-integration-contract`: repaired at `Definition`, clause 4. The original text gave the untwisted rational Borel–Moore CoHA formula while coupling that paragraph to the quiver-with-potential branch, without distinguishing it from the potential-dependent critical CoHA. The opened `def-untwisted-quiver-cohomological-hall-algebra` defines the unweighted groups on `Rep_Q(d)` and product `p_* q^!`; `def-critical-quiver-coha-from-vanishing-cycle-data` instead uses the specified vanishing-cycle coefficient datum and states that the standard rational theory reduces to the ordinary one for `W=0`. I clarified the two choices, added the critical CoHA as a direct mathematical prerequisite with its dependency role, and stated that a critical-CoHA integration map to a quantum torus still requires a separate proof. The edit does not assert such an integration theorem. No item consumer of this definition was found in current item carriers/manifests. The batch proof-contract file contains no contract for this definition; it has no proof steps and no `verification.judge` record to remove.
- `ex-qftx-a-two-hall-flags`: pass. The displayed Hall products follow from the subobject-first convention, and the coefficients (q/(q-1)^2) and (t^3/(q-1)^2) agree with the two local integration formulas. The stable (M_1) factor in the φ₁>φ₂ chamber and the equal-phase wall case are accounted for.

The current batch-81 cross-batch row for `qftx-hall-bps-wall-crossing` → `qftx-ribbon-braid-representations` remains `open`. Its evidence reports batch-75 Step 1 readiness escalations caused by missing page prerequisites. The current batch-75 manifest and page carrier I opened now list the referenced supplier pages, so that historical reason does not match the visible current list. I did not adjudicate batch-75 readiness, inspect all ten upstream page targets, or alter another batch's row; I therefore did not mark the edge verified. This is a page-level readiness blocker, not a confirmed defect in an assigned item. No assigned item's `deps`/`justified_by` closure reaches that page, so it is not emitted as an item-routed in-run finding.

## Edit and validation record

- Edited only `items/def-qftx-cy3-bps-integration-contract.md`.
- No proof contract applied to this definition; no judge stamp was present. No other assigned item or page prose was changed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-qftx-cy3-bps-integration-contract.md`: unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-qftx-cy3-bps-integration-contract.md`: 0 checked, 0 failing (definition has no proof steps).
- `node tools/physics-support/proof-layout.mjs items/def-qftx-cy3-bps-integration-contract.md`: 1 item, 0 steps, 0 defects.
- No broader gate battery or unrelated test suite was run.

## Defects not edited

No confirmed mathematical defect remains in the assigned items or assigned page prose. The unresolved page-level readiness row above remains outside this reader's item repair authority and requires owner/native workflow disposition.

## Coverage limitations

All four assigned items and both assigned pages were opened, together with the direct mathematical suppliers needed for their claims and the relevant local HN/integration proof inputs. I did not independently audit the complete transitive dependency closure of every published supplier, or the full page closure of batch 75. The stale-looking batch-75 readiness evidence is retained as a blocker rather than treated as a current mathematical defect or a verified edge.
