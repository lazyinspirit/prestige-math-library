# Step 3a reader report — batch 124

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 124

## Page verdicts

| Page | Kind and status | Verdict |
|---|---|---|
| tgrx-focusing-boundary | A page, draft | Pass after the in-flight item clarifications below. Its item order and required page references are coherent with the supplied focusing model. The current compact-layout page has no prose body. |
| tgrx-focusing-boundary-examples | B page, draft | Pass. It places the source-status remark and requires the A page. The page is a companion placement; its item list need not contain only items of kind example. The current compact-layout page has no prose body. |

## Opened inventory

- Assignment manifest: research/physics-non-fluid-129-2026-10-21-r2-batch-124.pages.json.
- Assigned pages: library/thermodynamics-and-general-relativity/tgrx-focusing-boundary.md and library/thermodynamics-and-general-relativity/tgrx-focusing-boundary-examples.md.
- Assigned items: items/post-tgrx-linearized-horizon-model.md, items/pthm-tgrx-linearized-area-modular-moment.md, and items/rem-tgrx-qnec-qfc-status.md.
- Assigned proof contract: research/physics-non-fluid-129-2026-10-21-r2-batch-124.proof-contracts.json.
- Cross-batch dependency input: research/physics-non-fluid-129-2026-10-21-r2-batch-124.cross-batch-dependencies.json. Its verified labels were treated as context and checked against the current supplier carriers.
- Page prerequisite context: library/thermodynamics-and-general-relativity/tgrx-regulated-second-law.md, library/thermodynamics-and-general-relativity/tgrx-renormalized-stress.md, and library/thermodynamics-and-general-relativity/tgr-phs01.md. The latter published page’s commutative diagram matches its stated conversion identity and arrow directions.
- Supplier and context items opened for dependency checks: current-run batch-121 item items/post-tgrx-semiclassical-equation.md; items/def-tgrx-horizon-screen-family.md and its well-definedness supplier items/lem-tgr-null-screen-quotient-positive.md; items/def-tgrx-hadamard-stress-contract.md; items/def-qftx-wavefront-hadamard.md; items/post-tgrx-free-collapse-scattering.md; items/def-gr-curvature-tensor-and-derived-tensors.md; and items/def-tgrx-curvature-squared-variation-tensors.md.
- Mathematical support for the screen definition and its well-definedness: items/def-gr-smooth-lorentzian-objects.md; items/def-gr-metric-selected-connection.md; items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md; items/def-embedded-submanifold-and-slice-chart.md; items/def-pullback-connection.md; items/thm-pullback-connection-is-well-defined-and-functorial.md; and items/thm-sylvesters-law-of-inertia.md.
- Nonlogical context referenced by the postulate: items/pthm-tgr-restricted-classical-area.md. Its conditional statement requires a separate null-energy premise, which the assigned postulate expressly does not adopt.

## Review and repairs

### post-tgrx-linearized-horizon-model

The item is an adopted first-order model postulate, not a deduction or empirical finding. It defines the smooth Lorentzian family, null hypersurface, affine generator, compact cut flow, screen quantities, Hadamard state family, stress prescription, units, and the signed first-order equation with its future boundary condition. The postulate claims neither that nature realizes this model nor an entropy identification.

I made the renormalization scale and effective cutoff dimensions explicit in natural units. The current supplier post-tgrx-semiclassical-equation defines the renormalization scale in inverse metres and the cutoff as an SI energy in joules; with c = hbar = 1 both have dimension L^{-1}. I updated the postulate’s formulation evidence in the batch contract and refreshed the current supplier excerpts in its assigned consumers. A search found no additional item consumers of the changed postulate, theorem, or remark beyond the reviewed assigned carriers.

### pthm-tgrx-linearized-area-modular-moment

The conditional proof is sound. In step 1.1, the screen quotient identifies each spacelike cut tangent plane, the flow coordinates commute, and metric compatibility and torsion freedom give the area-density identity. Compactness and the stated joint regularity justify differentiation over each finite cut. Steps 1.2–3.1 integrate the adopted focusing equation and use the absolute first-moment bound for the future limit and Fubini; step 4.1 is division by positive G_N. No null-energy or sign premise is used, so the weighted stress moment and the area difference may be negative.

I changed “area deficit” in the title to “area difference” and made the signed null-stress moment explicit. I also repeated the energy-cutoff dimension in the theorem’s scope and statement. These repairs preserve the theorem’s full signed identity and do not change its proof.

### rem-tgrx-qnec-qfc-status

This is a source-status remark, not an experiment or a local proof premise. I repaired several scope and definition issues:

- The QNEC account now states its transverse patch area and units, and records that the cited arguments concern fixed backgrounds without dynamical gravity. It distinguishes the free-field proof material from the paper’s conditional, expected extension to superrenormalizable interactions.
- The QFC is now stated in the cited Einstein-gravity formulation with the area term, source-prescribed local geometric counterterms, the profile cut, induced-area density, and the source’s finiteness assumption. This replaces the previously unspecified S_grav functional.
- The EGB status statement now includes the local vanishing-expansion/shear condition and the paper’s cutoff-scale smoothness caveat.
- The JT result now defines the restricted-QFC condition at points where the quantum expansion vanishes and distinguishes it from the full QFC. The counterexample caveat is tied to the regime without a higher-dimensional uplift.

The source checks support these limits: Bousso et al., Proof of the Quantum Null Energy Condition, arXiv:1509.02542v2, abstract, §2 equations (2.2)–(2.3), §3.1, §4.5, and §5 equation (5.5); Bousso et al., A Quantum Focussing Conjecture, arXiv:1506.02669v1, §§3.1–3.3 and §5.2; Fu, Koeller, and Marolf, arXiv:1705.03161v2, §2 equations (2.13), (2.17)–(2.19), §4 and the v2 note; Franken et al., arXiv:2510.13961v3, abstract, §1 and §3. The arXiv record identifies v3 as the current version and the published version; the item’s source-status claims remain restricted to those models.

I refreshed the remark’s source-status contract rows and its current Postulate excerpt. The prior historical boundary-review record remains marked as historical and bound to its original item hash; it is not treated as a review of the repaired bytes. No verification.judge record existed on any changed item.

## Source and mathematical checks

Wall’s 2012 article, §2.2 equations (11)–(23), supplies the null Raychaudhuri, affine-boundary, area-expansion, and integrated stress-moment context. Its hbar expansion can include a shear-squared contribution when graviton fluctuations are retained. The assigned postulate explicitly excludes an independent graviton-fluctuation source and adopts a separate epsilon-ordering with zero background shear; I therefore reviewed its first-order equation as a model premise, not as a claimed theorem imported from Wall.

Reall’s 2024 Black Holes notes, §§4.6 and 4.8, equations (4.29) and (4.37)–(4.40), give the affine null expansion/area relation and exact Raychaudhuri equation under the stated geometric assumptions. The assigned proof supplies the remaining first-order area variation and integrability arguments locally.

No assigned page or item contains a TikZ or tikzcd diagram. The only diagram encountered in required page context was the published tgr-phs01 unit-conversion square; its arrows and compositions match the displayed identity. No diagram is needed to complete the assigned proof.

## Validation and blockers

- Reflow: all three changed items returned “unchanged”.
- Precheck: postulate passed the nonproof-structure check; theorem passed the direct proof check; the remark returned 0 checked / 0 failing because it has no proof section.
- Final proof-layout: 3 items, 5 numbered proof steps, 0 defects.
- Blocker: none.
- Unedited defects: none identified.

## Coverage limits

I initially opened assigned carriers from the manifest before tracing their suppliers, so the opening sequence was not strictly supplier-first. I completed the dependency checks and settled the substantive verdicts after inspecting the relevant suppliers. I checked the cited source sections needed for scope and conventions but did not audit the complete QNEC or QFC proof arguments. I also did not inspect unrelated transitive suppliers beneath the mathematical definitions, the field-variation definition behind the curvature-squared input whose coefficients are set to zero, or deeper dependencies of the formulation-only collapse supplier because the assigned postulate explicitly excludes its collapse and scattering assumptions. I read that supplier’s current statement to verify this boundary. The report makes no acceptance claim for those proofs or for empirical validity.
