# Step 3a reader report — batch 14

## Scope and inventory

Assigned pages opened:

- `fd-px03` — A page, with `pthm-fd-px07-prediction` and `pthm-fd-px10-prediction`.
- `fd-px03-examples` — B page, with `ex-fd-x07-application` and `ex-fd-x10-application`.

Both pages have frontmatter only, retain `page_layout: compact-v1`, and contain no summaries. I also opened the direct page prerequisites `fd-px02` and `fd-x03`; I checked `fd-f01` to resolve the upstream definition's reference to a theorem on that page.

Assigned item carriers opened:

- `pthm-fd-px07-prediction`
- `pthm-fd-px10-prediction`
- `ex-fd-x07-application`
- `ex-fd-x10-application`

Claim-relevant supplier carriers opened: `def-countable-choice` (pinned published mathematics), `def-fd-smooth-motion`, `def-fd-quantity-and-frame-conventions`, `def-fd-x00`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-fd-x07`, `thm-fd-x10`, `lem-fd-isotropic-linear-classification`, `post-fd-continuum-balances`, `post-fd-boundary-data`, `post-fd-newtonian-fourier`, `post-fd-creeping-force-balance`, and `def-fd-creeping-stokes-model`. The contracts and current batch manifest were also inspected.

## Review

The bounded-domain estimate in `pthm-fd-px07-prediction` follows from subtracting the two explicitly assumed strong systems, obtaining the residual equation, and applying the bounded-domain result `thm-fd-x07`. Its periodic-channel branch separately establishes the energy identity on one cell, justifies the integral Cauchy bound, and applies the channel Poincaré inequality. Boundary terms, regularity, zero trace, incompressibility, units, and the countable-choice premise match the stated suppliers. The statement and proof do not infer pointwise equations from the integral balance postulate or claim existence.

The decay estimate in `pthm-fd-px10-prediction` follows from the perturbation equation about the Couette profile, cancellation of transport and pressure terms on the periodic cell, the shear-production bound, the channel Poincaré inequality, and integration of the resulting differential inequality. Its smooth-existence interval, sufficient threshold, and nonclaim of global existence or empirical transition behavior are preserved. The mathematical supplier `thm-fd-x10` is draft and has no independent proof-acceptance stamp; its proof was inspected for this conditional use and no defect was found. No stamp was added.

`ex-fd-x07-application` correctly verifies the rigid-rotation fields: their convective acceleration is balanced by the stated pressure gradient, while the Stokes comparison field has zero pressure gradient. It explicitly assumes the Poincaré constant and exhibits zero velocity difference with nonzero residual; it does not claim a numerical constant or nonzero velocity error.

`ex-fd-x10-application` verifies a smooth single-mode solution, computes its energy exactly, and compares the decay rate with the sufficient theorem bound. It is a constructed model example, not an observation. Its previously undefined `p_0` is now specified as an arbitrary real constant pressure in pascals; the verification's zero pressure-gradient calculation and the affected contract derivation description record this role.

No experiment, measurement, uncertainty estimate, or statistical inference is asserted by the assigned items. I found no TikZ/tikzcd diagrams and no missing diagram needed to follow these arguments.

Source checks relevant to the physical model/context:

- [Guermond, *Introduction to Partial Differential Equations for Engineering Applications*, §§3.3 and 3.4.4](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf): the notes state the Poincaré–Steklov inequality and explicitly say its proof is outside the notes' scope. The assigned results carry their own local proofs where needed and cite this only as context.
- [Tong, *Fluid Mechanics*, Part II, §§3.1.1 and 3.2.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf): the cited sections discuss Newtonian viscous stress and the Couette profile/no-slip data.
- [Stewart, MIT 8.09, §6.8](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf): the cited low-Reynolds-number Stokes-flow discussion drops convection as a restricted model approximation. The assigned items identify the comparison as a separately adopted branch and do not attribute a bounded-domain residual theorem to this source.
- [Falsaperla, Mulone, and Perrone, §§2.1 and 3.1](https://arxiv.org/pdf/2105.06443): §3.1 restricts to streamwise perturbations. The assigned Couette theorem labels this citation as context and proves the broader conditional result from its stated hypotheses and mathematical supplier.
- [*An Introduction to Continuum Mechanics*, Chapter 6](https://courses.washington.edu/mengr503/Chapter_6.pdf): §§6.5 and 6.7.2 provide constitutive and Fourier-conduction context; the source itself distinguishes constitutive assumptions from balance principles.
- [Sonin, *Fundamental Laws of Motion for Particles, Material Volumes, and Control Volumes*](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf), and [Hazel, *Forces, Momentum and Stress*](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf) / [*Physical Conservation and Balance Laws & Thermodynamics*](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf): the cited material-volume balance formulations support the adopted model context; they are not used as proofs that the model describes nature.

The Guermond metadata locators on both assigned theorem items were corrected from “PDF pp. 23–27” to “printed pp. 23–27”; the cited energy/Poincaré sections are on those printed pages, while the PDF page indices differ.

## Edits and checks

- `items/ex-fd-x10-application.md`: defined `p_0\in\mathbb R` as an arbitrary constant pressure in pascals and clarified in `[A1]` that it is a selected model input. This closes the undefined symbol without changing the solution or its pressure gradient.
- `items/pthm-fd-px07-prediction.md` and `items/pthm-fd-px10-prediction.md`: corrected the Guermond locator labels to printed-page numbers as described above.
- `research/fluid-dynamics-all-47-2026-10-23-batch-14.proof-contracts.json`: updated the `ex-fd-x10-application` derivation description to record that the arbitrary constant pressure baseline has zero gradient. The JSON parses successfully.
- No `verification.judge` record was present on the changed items. Reflow reported unchanged files. Precheck passed for all three changed items. Final proof layout reported 3 items, 10 steps, 0 defects.

## Uneditable defect

The batch proof contract for `ex-fd-x07-application`, at `contracts.ex-fd-x07-application.boundaries[case="iff-forward"].case_scope.source_excerpt`, quotes “The constant C_{B_R}=2R satisfies the zero-trace Poincare inequality.” The current assigned example instead says that a positive zero-trace Poincaré constant is explicitly assumed and that the example does not establish its value. The contract excerpt is stale and is not present in the current item. I left it for the owner/contract maintainer because this reader's repair scope is item prose or assigned A-page prose, with contract updates limited to a material repair's affected contract.

## Page verdicts

- `fd-px03`: pass. Frontmatter inventory, draft status, physics classification, compact layout, and declared prerequisites are consistent with the assigned theorem items; body is empty.
- `fd-px03-examples`: pass. Frontmatter inventory, companion link, draft status, physics classification, compact layout, and examples placement are consistent; body is empty.

## Blockers and coverage limits

No mathematical or physical blocker was found in the assigned item claims. The stale example contract excerpt above remains for owner disposition.

The assigned item files were opened before their supplier files; after opening the claim-relevant suppliers, I traced and rechecked the arguments, but this does not meet the strict supplier-first opening order. I did not audit transitive supplier material irrelevant to these claims. The browser timed out retrieving the Powers boundary-data notes and rejected the alternate large Tong PDF URL for size; other accessible cited sources and the explicit local assumptions were checked. No empirical claim depended on those retrievals.
