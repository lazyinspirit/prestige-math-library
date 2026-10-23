# Step 3a reader report — batch 11

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `11` only

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-f03.md`
- `library/fluid-dynamics/fd-f03-examples.md`

Page prerequisites opened for context:

- `library/fluid-dynamics/fd-f01.md`
- `library/fluid-dynamics-mathematics/fd-mf03.md`
- `library/fluid-dynamics-mathematics/fd-mf02.md`

All ten assigned items were read in supplier-first order: `post-fd-newtonian-fourier`, `post-fd-local-equilibrium`, `def-fd-barotropic-euler-model`, `def-fd-incompressible-newtonian-model`, `pthm-fd-acoustic-linearization`, `pthm-fd-perfect-gas-temperature`, `pthm-fd-newtonian-kinetic-decay`, `pthm-fd-entropy-production`, `cex-fd-negative-response-acoustics`, and `cex-fd-negative-bulk-viscosity`.

In-run draft suppliers read in the dependency closure were `def-fd-smooth-motion`, `lem-fd-transport-and-density`, `def-fd-quantity-and-frame-conventions`, `post-fd-continuum-balances`, `lem-fd-c1-domain-jordan-integrals`, `lem-fd-cauchy-contact`, `lem-fd-local-balance-equivalence`, `def-fd-simple-fluid-state`, `lem-fd-isotropic-linear-classification`, `lem-fd-helmholtz-chart`, `lem-fd-gibbs-entropy-residual`, `lem-fd-newtonian-admissibility`, and `lem-fd-response-acoustic-algebra`.

The proof-relevant published mathematical supplier statements inspected included the Euclidean inverse function and chain rules; the determinant Leibniz formula; compact-Jordan change of variables, image, and integral results; the Riemann integral rules used in transport; the countable-choice definition; compactness/extreme values; and the bounded-domain divergence and surface-measure interfaces. Their relevant hypotheses were compared with the local facts and proof uses. The local arguments for transport, Jordan-domain compatibility, Cauchy contact, local balance conversion, Gibbs cancellation, isotropic stress, coefficient admissibility, and response linearization were read directly.

## Page verdicts

- `fd-f03`: **Pass for page structure and inventory.** It is a draft physics A page with `page_layout: compact-v1`, the eight manifest items, no examples, and prerequisites `fd-f01` and `fd-mf03`. The body is empty as required. The in-run dependency finding on `post-fd-continuum-balances` is recorded below.
- `fd-f03-examples`: **Pass for page structure and inventory.** It is a draft physics B page with `page_layout: compact-v1`, the two manifest examples, prerequisite `fd-f03`, and an empty body. No page-level defect was found.

The prerequisite pages opened also have frontmatter-only bodies. I did not generate or restore page summaries. No diagram occurs in the assigned items. I inspected the TikZ sketch in the Cauchy-contact supplier: it is explicitly schematic, its face labels and normal match the tetrahedral construction, and the proof does not use the drawing.

## Repairs made

- `cex-fd-negative-bulk-viscosity`: the refuted statement previously named a Newtonian/Fourier residual family and its symbols without defining the residual. I made the false assertion standalone by giving the matrix domain, trace-free strain, conductivity symmetrization, residual formula, SI units, and exact universal quantifiers. The existing counterexample still takes a pure dilation with `K=0`, `mu>0`, and `zeta<0`, giving `G=zeta theta^2/T<0`.
- `cex-fd-negative-response-acoustics`: the refuted statement previously used `P'`, `rho_b`, “rest state,” and “first-variation system” without defining them. I stated the local state relation, fixed-entropy pressure law, state hypotheses, linear system, perturbation domains, pointwise-in-space boundedness claim, and SI units. I also made proof step 3.1 explicitly verify that at each fixed spatial point at least one of the growing density or velocity components is nonzero. The exponential mode remains a solution only of the linearized system, with no finite-amplitude or empirical claim.
- `pthm-fd-acoustic-linearization`: I added the SI units for the wave vector, frequency, sound speed, density amplitude, perturbation fields, time, and space. The units agree with the exact response-algebra supplier and do not change the theorem's assumptions or conclusion.

I updated the batch-11 proof contract to match the three current statement excerpts, the acoustic supplier quotation used by the counterexample, and the revised step-3.1 derivation record. The edited items had no `verification.judge` record to remove. Reflow reported all three items unchanged; precheck passed for each. The final proof-layout command reported `3 items, 9 steps, 0 defects`.

The acoustic theorem's direct consumer, `cex-fd-negative-response-acoustics`, was reread after the theorem's unit clarification and statement repair. Its counterexample still matches the exact fixed-entropy first-variation system. The bulk-viscosity example was likewise checked against its parent residual theorem; its negative-coefficient witness is explicitly outside the adopted nonnegative-bulk postulate.

## Findings outside this batch's edit scope

- `def-fd-quantity-and-frame-conventions` (batch 3), `Authoring status`: at first read the sentence said the batch-2 smooth-motion supplier readiness record was missing. The current run record `research/fluid-dynamics-all-47-2026-10-23-step1-def-fd-smooth-motion.json` says `ready`, and the current carrier no longer contains that sentence. This was a historical false status claim; I did not edit the supplier. Its exact original source bytes were not archived or hashed at observation, so the finding has `observed_source: null`. Assigned consumer: `post-fd-newtonian-fourier`.
- `post-fd-continuum-balances` (batch 3), `Facts & Assumptions [F2]`: at first read the fact said the batch-2 transport supplier's Step-1 readiness record was missing. The current run record `research/fluid-dynamics-all-47-2026-10-23-step1-lem-fd-transport-and-density.json` says `ready`, and the current carrier no longer contains that sentence. This historical false status claim was not edited here; the observed source bytes likewise lack a captured digest. Assigned consumer: `pthm-fd-entropy-production`.
- `post-fd-continuum-balances` (batch 3), `Postulate`, first paragraph: the material-region integral convention is deferred to “the mathematical interface identified below.” The later Facts section identifies `lem-fd-c1-domain-jordan-integrals` and says the integral over an open C1 region agrees with the integral over its compact closure, but the Postulate statement does not state that convention or identify its exact supplier and relevant content there. This is an uninterrupted-statement defect; the current source hash is bound in the findings JSON. Assigned consumer: `pthm-fd-entropy-production`.

The cited scientific sources support the adopted continuum/constitutive context; none is used as a proof of a physical postulate or empirical validity. No empirical observations or measured material coefficients occur in this batch. Model predictions and counterexamples are conditional on the stated model assumptions.

## Source review and limitations

I consulted the relevant sections, not the entire cited volumes: David Tong, *Fluid Mechanics*, Part I §2.1 (Euler equation); Part II §§3.1–3.1.2 (stress, Newtonian form, and kinetic-energy discussion); and Part III §§4.4.2–4.4.4 (ideal-gas thermodynamics and sound); *An Introduction to Continuum Mechanics*, Chapter 6 §§6.1.1–6.1.4, 6.5.2–6.5.3, and 6.7.2; Abeyaratne, *Continuum Mechanics*, Volume II §12.1, §12.2.1, and Problem 12.4; Sonin, §1.3; and Hazel, Chapters 3 §§3.3.1–3.3.2 and 4 §§4.1–4.4.4. The material reviewed confirms the cited model conventions and reinforces that constitutive relations and balance postulates are adopted physical inputs. Local proofs remain responsible for the conditional mathematical conclusions.

The two historical readiness sentences had already disappeared from their current carriers by report time. Their original raw bytes were not captured, so they are retained as historical findings with null `observed_source`; the report does not claim they remain current. Published mathematical suppliers were checked at the exact statement/hypothesis level used by the reviewed arguments; I did not independently re-audit every transitive published proof history.

## Blocker

No execution blocker. The three findings above concern batch-3 suppliers outside this reader's write scope and are routed for owner disposition.
