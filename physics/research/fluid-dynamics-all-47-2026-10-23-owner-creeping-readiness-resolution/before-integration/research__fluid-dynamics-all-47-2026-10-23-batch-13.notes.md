# Batch 13 authoring notes — fd-px02

Run: fluid-dynamics-all-47-2026-10-23; role: beta; label: batch-13.

## Design selection and conflicts

The present owner direction in research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md makes the current refresh design controlling; its relevant section is research/plan-fluid-dynamics-refresh-track.md L411. It is the current owner-directed design, and its A-page prerequisites agree with this dispatch and research/plan-spec.json: fd-f02, fd-f03, and fd-x02. Their current page carriers are library/fluid-dynamics/fd-f02.md, library/fluid-dynamics/fd-f03.md, and library/fluid-dynamics-mathematics/fd-x02.md. The historical track at research/plan-fluid-dynamics-track.md L377 contains the older reservation with an extra fd-f01 page prerequisite. That edge is stale and redundant because F01 is already transitively required through F02 and F03. The continuum-balance item remains a direct item prerequisite where used; it is not added as a fourth page prerequisite.

The current plan-spec page identities, order, title, category and three A-page prerequisites match the dispatch. Its item arrays remain authoring scaffolds; the current proposed inventory and batch task define the 9 A items and 6 B examples below. No shared plan or engine state was changed.

## Pages and inventory

The authored A page is library/fluid-dynamics/fd-px02.md; the B page is library/fluid-dynamics/fd-px02-examples.md. Both contain YAML frontmatter only and have empty Markdown bodies, with no summaries. The B page is a leaf with no outgoing item dependencies beyond its A-page results.

### A items

#### pthm-fd-px04-prediction — Plane and pipe Couette–Poiseuille verification — conditional physical prediction

Claim and scope: Infinite/fully developed channel or pipe ansatz; axis C² regularity; exact NS/Stokes solution for all Re, uniqueness only within ansatz. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item.

Argument: Transfer exact plane/pipe Couette–Poiseuille profiles, uniqueness within ansatz, flux and shear under constant-density Newtonian assumptions.

Dependency level 4; direct dependencies: thm-fd-x04, post-fd-continuum-balances, post-fd-boundary-data, post-fd-newtonian-fourier, def-fd-incompressible-newtonian-model.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.7, printed pp. 130–133..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html) — Moving-wall and pressure-driven parallel-plate flow..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html) — Pipe profile, flux and wall shear..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### def-fd-incompressible-euler-model — Incompressible inviscid Euler model with pressure multiplier

Claim and scope: Smooth ideal inviscid incompressible continuum with stated boundary/initial data; no empirical derivation of zero viscosity.

Argument: Define the selected incompressible inviscid local branch with pressure multiplier and separate data.

Dependency level 3; direct dependencies: post-fd-continuum-balances, post-fd-boundary-data, def-fd-incompressible-euler-system.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/Fluidhtml.html) — Course notes, nodes 62–64 and 102..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### pthm-fd-px05-prediction — Vortex topology and global-Bernoulli counterexamples — conditional physical prediction

Claim and scope: Punctured-axis smooth vortex and solid rotation; prescribed pressures; no global scalar potential or common Bernoulli constant without hypotheses. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item. Constant density with spatially varying constraint pressure, not barotropic EOS pressure.

Argument: Verify punctured vortex circulation excludes a global potential and solid rotation lacks one Bernoulli constant across streamlines.

Dependency level 4; direct dependencies: thm-fd-x05, post-fd-continuum-balances, post-fd-boundary-data, def-fd-incompressible-euler-model.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node64.html) — Irrotational flow, Bernoulli relation, global-potential topology..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### post-fd-creeping-force-balance — Alternative restricted creeping-flow force balance

Claim and scope: Ideal creeping-flow alternative, prescribed stress/data, constant density, no unconditional NS approximation error or empirical premise.

Argument: Adopt the alternative steady div-stress plus body-force balance without simultaneously retaining full material acceleration.

Dependency level 3; direct dependencies: post-fd-newtonian-fourier, post-fd-boundary-data.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.8, printed pp. 135–139..
- [University of Washington, An Introduction to Continuum Mechanics](https://courses.washington.edu/mengr503/Chapter_6.pdf) — §§6.5.1–6.5.3, printed pp. 242–245..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### def-fd-creeping-stokes-model — Restricted incompressible creeping-flow Stokes model

Claim and scope: Ideal creeping-flow auxiliary model with specified data/decay/regularity; no empirical premises.

Argument: Define the smooth constant-density incompressible Newtonian zero-inertia branch and its local equivalent equation.

Dependency level 4; direct dependencies: post-fd-newtonian-fourier, post-fd-boundary-data, post-fd-creeping-force-balance.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.8, printed pp. 135–139..
- [University of Washington, An Introduction to Continuum Mechanics, Chapter 6](https://courses.washington.edu/mengr503/Chapter_6.pdf) — §§6.5.1–6.5.3, printed pp. 242–245..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### pthm-fd-px06-prediction — Exterior sphere Stokes solution, force and decay-class uniqueness — conditional physical prediction

Claim and scope: Exterior r>a smooth Stokes problem, no-slip sphere, constant far field; explicit O(r^-1)/O(r^-2) velocity/gradient/pressure decay class; exact 6πμaU force. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item. Inherits ACω.

Argument: Transfer the exact fixed-sphere Stokes solution, stress resultant and uniqueness only in the stated uniform decay class, under ACω.

Dependency level 5; direct dependencies: thm-fd-x06, def-countable-choice, post-fd-boundary-data, post-fd-newtonian-fourier, def-fd-creeping-stokes-model.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.8, printed pp. 135–139..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html) — Stokes sphere solution and drag..
- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch9.html) — Chapter 9; translating-sphere sign convention..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### pthm-fd-px08-prediction — Exact viscous diffusion layer and material-circulation decay — conditional physical prediction

Claim and scope: t>0,y>0 initial-wall corner excluded; exact layer bound and separately smooth periodic sine-shear material loop. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item.

Argument: Transfer the corner-excluded Stokes-first-problem Gaussian tail bound and separately verify the periodic shear material-loop circulation.

Dependency level 4; direct dependencies: thm-fd-x08, post-fd-continuum-balances, post-fd-boundary-data, post-fd-newtonian-fourier, def-fd-incompressible-newtonian-model.

Sources read and cited:
- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html) — §3.3.1, full Stokes first-problem derivation..
- [MIT 2.25 Advanced Fluid Mechanics, Solution: Stokes First Problem](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf) — All four pages; similarity scale and wall-stress scaling, not erfc profile..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### pthm-fd-px09-prediction — Barotropic Kelvin and Bernoulli with exact hypotheses — conditional physical prediction

Claim and scope: C² smooth barotropic Euler, positive density and conservative body force; C¹ advected loop with continuous mixed derivatives; steady Bernoulli; connected component global constant only if irrotational. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item.

Argument: Transfer barotropic streamline/global-irrotational Bernoulli and Kelvin loop conclusions; verify smooth solid-rotation specialization.

Dependency level 4; direct dependencies: thm-fd-x09, post-fd-continuum-balances, post-fd-boundary-data, def-fd-barotropic-euler-model.

Sources read and cited:
- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html) — Chapter 5, barotropic Bernoulli relation..
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123; ideal Bernoulli context only..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

#### pthm-fd-px13-prediction — Exterior potential sphere and zero ideal force — conditional physical prediction

Claim and scope: Explicit smooth potential on exterior sphere, slip/no-through condition; exact inviscid Euler pressure force zero; not viscous/no-slip. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot supply any later item. Constant density with spatially varying constraint pressure, not barotropic EOS pressure.

Argument: Transfer exact ideal slip sphere Euler field and show antipodal pressure symmetry makes its inviscid pressure resultant zero.

Dependency level 4; direct dependencies: thm-fd-x13, post-fd-continuum-balances, post-fd-boundary-data, def-fd-incompressible-euler-model.

Sources read and cited:
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html) — Potential flow past a sphere and zero resultant..
- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch6.html) — Chapter 6, potential flow..

The complete statement, hypotheses, units/conventions, Facts & Assumptions, proof steps and references are in the assigned item carrier; proof facts and contract excerpts are synchronized.

### B examples

#### ex-fd-x04-application — Plane and pipe Couette–Poiseuille verification — worked interpretation

Claim and scope: Constructed SI parameter substitution into the exact infinite-geometry profiles; illustrative model inputs, not measurements.

Argument: Substitute SI inputs into the exact plane and pipe profiles, fluxes and wall stresses using the dimensionless coordinates y/(1 m) and r/(1 m), so all displayed quantities remain dimensionally explicit.

Dependency level 5; direct dependencies: pthm-fd-px04-prediction.

- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.7, printed pp. 130–133..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html) — Parallel plates..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html) — Pipe flow..

#### ex-fd-x05-application — Vortex topology and global-Bernoulli counterexamples — worked interpretation

Claim and scope: Constructed numerical substitutions in exact inviscid model fields; not observations or predictions for a viscous material.

Argument: Evaluate vortex circulation and solid-rotation Bernoulli difference at two radii.

Dependency level 5; direct dependencies: pthm-fd-px05-prediction.

- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123..

#### ex-fd-x06-application — Exterior sphere Stokes solution, force and decay-class uniqueness — worked interpretation

Claim and scope: Constructed substitution into the exact zero-inertia Stokes sphere result, conditional on its uniform decay class and ACω; not a finite-Reynolds drag estimate or measurement.

Argument: Substitute a chosen speed and sphere parameters into the exact ACω Stokes resultant.

Dependency level 6; direct dependencies: pthm-fd-px06-prediction, def-countable-choice.

- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html) — Stokes flow around a sphere..
- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.8, printed pp. 135–139..

#### ex-fd-x08-application — Exact viscous diffusion layer and material-circulation decay — worked interpretation

Claim and scope: Numerical substitutions in two exact Newtonian model solutions; not an observation or a general boundary-layer or Kelvin result.

Argument: Evaluate the half-space tail threshold and the independent torus circulation coefficient.

Dependency level 5; direct dependencies: pthm-fd-px08-prediction.

- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html) — §3.3.1, Stokes first problem..
- [MIT 2.25, Solution: Stokes First Problem](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf) — Similarity and wall-stress scale only..

#### ex-fd-x09-application — Barotropic Kelvin and Bernoulli with exact hypotheses — worked interpretation

Claim and scope: Constructed exact barotropic Euler field with specified parameters; not an empirical claim about viscous fluids.

Argument: Evaluate circulation and Bernoulli difference for the exact solid-rotation barotropic field.

Dependency level 5; direct dependencies: pthm-fd-px09-prediction.

- [Mandre, Fluid Dynamics Lecture Notes](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html) — Chapter 5, barotropic Bernoulli relation..

#### ex-fd-x13-application — Exterior potential sphere and zero ideal force — worked interpretation

Claim and scope: Constructed parameter substitution into an inviscid impermeable-slip sphere solution, not a measured force or viscous-drag prediction.

Argument: Evaluate surface pressure at poles and equator and verify zero pressure-only resultant by symmetry.

Dependency level 5; direct dependencies: pthm-fd-px13-prediction.

- [Stewart, MIT 8.09, Fluid Mechanics](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) — §6.4, printed pp. 120–123..
- [Fitzpatrick, Fluid Mechanics, UT Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html) — Potential sphere and zero resultant..

## Dependency levels and authorship order

The item-level graph is acyclic. In-run suppliers are authored before consumers. Additional direct formulation inputs were declared where the actual local model interface is used: def-fd-incompressible-newtonian-model for PX04 and PX08; def-fd-incompressible-euler-system for the new local Euler definition; and def-countable-choice for PX06 and its example because thm-fd-x06 explicitly assumes ACω. These additions preserve the planned dependency roles and do not replace or weaken any planned input. Levels recomputed from the live item manifest and dependencies: level 3 — def-fd-incompressible-euler-model, post-fd-creeping-force-balance; level 4 — pthm-fd-px04-prediction, pthm-fd-px05-prediction, def-fd-creeping-stokes-model, pthm-fd-px08-prediction, pthm-fd-px09-prediction, pthm-fd-px13-prediction; level 5 — pthm-fd-px06-prediction, ex-fd-x04-application, ex-fd-x05-application, ex-fd-x08-application, ex-fd-x09-application, ex-fd-x13-application; level 6 — ex-fd-x06-application.

The batch dependency-level check passed for the whole current run: 304 items across 94 pages, maximum level 9; no assigned item had a level mismatch. The scoped depcheck resolves the transitive page context through fd-f01 and countability-and-uncountability (the latter comes from the explicit ACω input); neither is a new direct page prerequisite. These transitive observations are recorded here, not as extra cross-batch review rows.

## Supplier readiness and exact interfaces

Current loadStep1Record plus step1Decision inspection returned ready for all in-run direct suppliers used here: thm-fd-x04, thm-fd-x05, thm-fd-x06, thm-fd-x08, thm-fd-x09, thm-fd-x13, def-fd-incompressible-euler-system, post-fd-continuum-balances, post-fd-boundary-data, post-fd-newtonian-fourier, def-fd-barotropic-euler-model, and def-fd-incompressible-newtonian-model. Their current carriers were read at the exact interfaces and, where applicable, complete proofs; consuming statements preserve the actual hypotheses and limitations.

def-countable-choice is a published imported mathematical definition with proof not applicable; its full statement was inspected and gives ACω as a choice function for every sequence of nonempty sets. It is explicitly retained as the set-theoretic assumption on the exterior Stokes uniqueness result and example. It is outside this run, so no in-run Step 1 readiness record is expected for that immutable published definition.

Current suppliers are authored in their own batches. No absent carrier blocks this batch. The live interfaces were checked after F02/F03 manifests changed. Draft status, verification.precheck pending, and missing independent approval are not treated as prerequisite failures.

## Source harvest, retrieval and resolution

Authoritative full text was read from the MIT 8.09 complete fluid-mechanics course PDF, Fitzpatrick’s UT Austin course notes and topical nodes, Mandre’s full Cambridge lecture-note chapters, the University of Washington Chapter 6 textbook chapter, and the MIT 2.25 Stokes-first-problem solution. The source-anchored ledger is research/fluid-dynamics-all-47-2026-10-23-batch-13.coverage.json; it records every source URL, locator, harvested heading/result, disposition, supported item, fetch status and recovery history.

Independent primary treatments are MIT 8.09, Fitzpatrick/UT Austin, and Mandre/Cambridge; Washington provides a textbook treatment of constitutive mechanics. The MIT 2.25 four-page solution supports only similarity and wall-stress scaling, not the exact erfc profile. UT node 63 is out-of-scope for the barotropic claim because that treatment is restricted to incompressible constant-density flow. Washington heat-flux material is out-of-scope for these mechanical predictions.

The source-fetch check stamped 13/16 URLs. UT nodes 62, 63, and 140 returned HTML bodies below the tool’s 2,048-character full-text floor on the initial fetch plus five recovery retries (six attempts each). Their URLs, timestamps, outcomes and alternative searches remain in the coverage ledger as certain drops; those failed URLs were removed from item citations. Independent full treatments and local proofs preserve all retained claims. No mathematical result was dropped.

The final source-fetch check reports 16/16 sources resolved (13 full-text stamps, 3 documented drops). Coverage checklist reports 24 harvested results, 0 errors and 0 warnings.

## Cross-batch interfaces

research/fluid-dynamics-all-47-2026-10-23-batch-13.cross-batch-dependencies.json is a JSON array with one row per external direct item edge and one row for each of the three page prerequisites. It has 35 rows: 32 item edges and 3 page edges, all verified after checking current carriers/hypotheses and readiness. Verified records the scoped interface check only, not independent proof approval. Transitive F01 observations remain in these notes, not as unsupported review rows.

## Contracts and validation

The proof-contract file covers all 15 items. It maps every proof step and linked fact, stores exact supplier-section excerpts, boundary dispositions and applicable finite arithmetic checks. The adopted creeping-force postulate is reviewed as an assumption; its contract does not manufacture a proof or finite worksheet.

proof-contract.mjs --strict: 15/15 items, 0 errors, 0 warnings. proof-layout.mjs on the 15 explicitly changed items: 15 items, 43 proof steps, 0 defects. item-dependency-levels.mjs check --run passed as recorded above.

## Readiness decisions and next action

All mathematical arguments, complete A/B pages, manifest records, contracts, source coverage and cross-batch inputs are authored. The 15 assigned Step 1 records were recorded with node tools/physics-support/step1-decisions.mjs record in supplier-before-consumer order, without --owner; the PX04 numerical example readiness hash was refreshed after the dimensionless-coordinate clarification. A final loadStep1Record/step1Decision check found all 15 records closed and ready against their current item/dependency hashes. No open prerequisite gap remains. These records assert Step 1 authoring readiness only; they do not grant independent proof acceptance or publication.
