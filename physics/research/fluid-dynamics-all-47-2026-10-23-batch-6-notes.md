# Batch 6 authoring notes — fd-x02

Run: fluid-dynamics-all-47-2026-10-23  
Batch: 6  
Pair: fd-x02 / fd-x02-examples  
Category/library: fluid-dynamics-mathematics / mathematics

## Controlling design and plan comparison

- The controlling design is research/plan-fluid-dynamics-refresh-track.md, § “Plane and pipe Couette–Poiseuille verification” at lines 174–203. Its 2026-10-18 owner-refresh notice supersedes the historical design and names the current successor inventory at research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json.
- The listed historical section in research/plan-fluid-dynamics-track.md, lines 154–177, reserves the same A/B page identities, titles, order, required pages and six A/six B item IDs, but points to the superseded 2026-10-03 inventory. The refresh-track and its successor inventory control.
- research/plan-spec.json agrees with the controlling mathematical pair on page IDs, titles, category/library, companions, order 371/372 and requirements. Its items arrays are empty pre-authoring scaffolds; they do not supersede the six A and six B IDs in the controlling inventory.
- The refresh-track location at line 411 is the separate downstream physical pair fd-px02. It requires fd-x02 and uses the mathematical results as exact conditional predictions. research/plan-spec.json agrees on fd-px02 identity, order 385 and its required pages. The mathematical suppliers must preserve these qualifications: exact infinite or fully developed fields; axis C² regularity for the pipe; no entrance-length, finite-Re error, existence, empirical applicability or universal-flow uniqueness claim; the exterior Stokes result is a separate creeping-flow model; the vortex and potential-sphere branches use constant-density pressure multipliers, not the barotropic EOS branch; the potential-sphere boundary condition is slip/no-through, not no-slip.
- The planned fd-x13 → thm-fd-x09 item edge needs an explicit exact interface. The x09 statement will state and prove the generic vector identity used by x13 separately from its barotropic Euler conclusions. The x13 proof uses only that identity, not the barotropic Bernoulli conclusion.

## Assigned inventory and dependency levels

The controlling FD-X02 reservation is exactly six original A theorems and six B formal examples. The required missing prerequisite interface was not present in x00, so one local mathematical definition, `def-fd-incompressible-euler-system`, was added to the A page as authorized by the authoring rules. All 13 items are mathematical and use only mathematical-premise dependencies; the pages remain well below the 100-item cap.

| Item | Side | Direct suppliers | Planned dependency level |
|---|---|---|---:|
| thm-fd-x04 | A | def-fd-x00 | 1 |
| thm-fd-x05 | A | def-fd-x00 | 1 |
| thm-fd-x06 | A | def-fd-x00; thm-divergence-theorem-for-bounded-c-one-euclidean-domains; def-countable-choice | 1 |
| thm-fd-x08 | A | def-fd-x00 | 1 |
| thm-fd-x09 | A | def-fd-x00 | 1 |
| def-fd-incompressible-euler-system | A | def-fd-x00 | 1 |
| thm-fd-x13 | A | def-fd-x00; def-fd-incompressible-euler-system; thm-fd-x09 | 2 |
| ex-fd-x04-formal-verification | B | thm-fd-x04 | 2 |
| ex-fd-x05-formal-verification | B | thm-fd-x05 | 2 |
| ex-fd-x06-formal-verification | B | thm-fd-x06 | 2 |
| ex-fd-x08-formal-verification | B | thm-fd-x08 | 2 |
| ex-fd-x09-formal-verification | B | thm-fd-x09 | 2 |
| ex-fd-x13-formal-verification | B | thm-fd-x13 | 3 |

The run's batch-dependency-levels.json sets batch 5 to level 0 and batch 6 to level 1 because fd-x02 requires fd-x01. The item levels above use the planned def-fd-x00 level 0, then one plus the maximum level of actual in-run item suppliers. The current graph is acyclic.

## Current supplier inspection and readiness

Current carrier inspected: items/def-fd-x00.md. Its exact current Definition matches the FD-X02 uses: nonempty open spatial Ω in R³ and open time interval I; continuous first time, first spatial and second spatial derivatives for u; continuous first spatial derivatives for p; positive constant density and viscosity with ν=μ/ρ₀; pointwise constant-density incompressible Navier–Stokes equation N(u,p)=0 and div u=0; steady Stokes omits both time derivative and convection; row-component Dₓu; componentwise Laplacian; stress, circulation, flux, traction, streamline and material-loop conventions; optional SI dimensions. It also defines the distinct positive-density barotropic Euler branch with P∈C² and scalar potential V. The current definition has six mathematical definition suppliers: def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, and def-oriented-unit-normal-and-flux-of-a-surface-patch. Their relevant definitions were inspected; they are transitive through def-fd-x00 and are not repeated as direct item edges.

The current batch-5 manifest lists def-fd-x00 and the other FD-X01 items on fd-x01, both page carriers exist with empty bodies, and `loadStep1Record`/`step1Decision` returns closed with decision `ready` and a matching hash for def-fd-x00. The actual current definition was checked against every FD-X02 use; the Cartesian operators, constant-density and barotropic equations, stress/observable conventions and regularity hypotheses match. The fd-x01 page is draft, which is not a prerequisite gap, and its required theorem page the-divergence-theorem-and-classical-stokes is published. The two other FD-X02 page requirements, countability-and-uncountability and euclidean-surface-measure-divergence-and-green-identities, are also present as published pages. All eight recorded cross-batch edges are `verified`; this is a scoped interface/placement check, not independent proof approval.

For thm-fd-x06, the imported thm-divergence-theorem-for-bounded-c-one-euclidean-domains statement and complete proof were inspected. Its exact interface assumes ACω, n≥2, a bounded C¹ Euclidean domain, and F∈C¹ on its closure, with the outward normal on every boundary component. The annular uniqueness argument uses this theorem only on bounded smooth spherical annuli. def-countable-choice is used at its indexed ACω statement; the proof does not use arbitrary-index choice. The theorem's transitive mathematical inputs are lem-surface-integral-is-independent-of-c-one-boundary-charts, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-local-graph-flux-from-fubini-and-the-fundamental-theorem, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-algebra-of-derivatives, and lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness. These remain the imported theorem's own proof inputs, not new direct FD-X02 edges.

## Source reading and disposition

The source set is two independent full lecture-note treatments for the A page, with a third full chapter for the unsteady diffusion result:

- Iain W. Stewart, MIT 8.09/8.309, Chapter 6, full 199-page PDF. Inspected §§6.4, 6.7 and 6.8 at the relevant complete arguments. §§6.7–6.8 support channel/pipe profiles and the explicit Stokes-sphere field/force; the local proofs supply the complete axis-regularity and exterior decay-class uniqueness arguments. §6.4 supports the explicit potential-sphere construction and pressure symmetry, but its general “curl-free implies conservative” sentence is not used without a topology hypothesis, and its vorticity-along-streamlines sentence does not state the full stretching equation. The x05 and x13 proofs supply their claims directly and do not inherit either broad inference.
- David Tong, Cambridge Fluid Mechanics lecture notes, parts 1 and 2, full PDFs. Part 1 §§2.2.1–2.2.2, 2.3.2–2.3.3 and 2.4.1 support vorticity/circulation, Kelvin/Bernoulli context, the explicit potential sphere and ideal pressure-force calculation. Part 2 §§3.2.2–3.2.3 support Couette and plane/pipe Poiseuille; §§3.4.1–3.4.2 provide the Stokes sphere/drag and a shorter uniqueness argument. Tong’s sphere uniqueness discussion does not state the exact O(r⁻¹), O(r⁻²) exterior class used here; the local proof supplies it.
- Shreyas Mandre, University of Cambridge, Fluid Dynamics Lecture Notes, Chapter 3, complete HTML text. §§3.2.1–3.2.2 support plane Poiseuille and Hagen–Poiseuille; §3.3.1 gives the complete Stokes first-problem similarity calculation and complementary-error-function profile. The pipe proof here uses the assigned full-axis C² regularity to exclude the logarithmic mode; it does not use the source’s separate internal-cylinder force interpretation.
- MIT 2.25 Advanced Fluid Mechanics, complete four-page “Solution to Stokes First Problem ATP.” It gives the setup and √(νt) similarity scale, not the exact error-function profile; the exact profile and tail estimate are derived locally.

The old Tong URL https://www.davidtong.org/fluids/fluids.pdf has an inherited 2026-10-03 HTTP-404 report. The current official teaching page links to split full-text chapter PDFs. Its 11,323,490-byte combined-PDF link exceeded the web text viewer’s retrieval limit; the two relevant chapter PDFs were found and read, so the old/combined URLs are not active source dependencies. No active source is dropped. Exact locators, per-item argument/dependency mappings, recoveries and fetch stamps are recorded in research/fluid-dynamics-all-47-2026-10-23-batch-6.coverage.json.

## Item checkpoints

### Completed: thm-fd-x04

- Claim and conventions: the exact stationary plane-channel profile with arbitrary wall speeds and pressure gradient, its flux and shear components; and the exact regular-axis circular-pipe profile and volume flux. Both solve the full constant-density Navier–Stokes and steady Stokes equations because the time and convective terms vanish. Uniqueness is only within the specified ansatz; the pipe profile is C² on the full disk. No finite entrance/exit claim or Reynolds-number approximation is made.
- Dependencies: def-fd-x00, mathematical-premise; dependency_level 1. The actual current definition was read and matches the use. It defines ν, the PDE and regularity conventions, componentwise derivatives, stress, and observables. The batch-5 page and item are now placed, and def-fd-x00 has a current Step-1 readiness record marked ready.
- Source locators: Stewart, MIT 8.09/8.309, Chapter 6 §6.7, printed pp. 130–133, https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf; Tong, Fluid Mechanics Chapter 2 §§3.2.2–3.2.3, printed pp. 65–68/PDF pp. 10–14, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf; Mandre, Chapter 3 §§3.2.1–3.2.2, https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html. Harvest dispositions are in the batch coverage file.
- Placement and decisions: the item is assigned to the A inventory; its full statement makes geometry, regularity, units, axis condition, exact equations, fluxes, stress signs and restricted uniqueness explicit. Its B example remains a later consumer.
- At that authoring checkpoint validation was pending; final scoped results are recorded in the reconciliation section below.
- This item’s current x00 interface, placement and ready record were rechecked after the batch-5 carrier appeared; see the final reconciliation below.
- At the initial authoring checkpoint these checks were pending; their final results are recorded below.

### Completed: thm-fd-x05

- Claim and conventions: on the punctured-axis domain the explicit vortex has zero divergence and curl, zero Laplacian, nonzero circulation and no single-valued global potential; its pressure balances the centripetal convective term in the constant-density model. On the whole-space solid-rotation branch, the prescribed multiplier yields a steady solution whose Bernoulli quantity is constant on each circular streamline but varies with radius. No barotropic equation of state is assumed.
- Dependencies: `def-fd-x00` (mathematical-premise), level 1. The current definition supplies the Cartesian operators, constant-density equation and pressure-multiplier interpretation. Its page placement/readiness is now verified by the current batch-5 manifest, fd-x01 page, and ready def-fd-x00 record.
- Sources and locators: Stewart, MIT 8.09/8.309 Chapter 6 §6.4, printed pp. 120–123, `https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf`; Tong, Fluid Mechanics Chapter 1 §§2.2.1 and 2.4.1, printed pp. 22–26 and 42–45, `https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf`. Stewart's broad curl-free-to-potential and vorticity-conservation prose is not used; the topology and equations are verified directly. Source disposition and fetch evidence will be recorded in coverage.
- Placement: A-page theorem; statement is uninterrupted and states both domains, constants, regularity, exact fields, model equation, circulation, Bernoulli scope and optional SI interpretation. Corrected the TikZ source to use single TeX command slashes.
- At the initial authoring checkpoint validation was pending; current prerequisite status and final check results are recorded below.
- Next: finish thm-fd-x06, then record its exact assumptions, imported theorem use and validation state.

### Completed: thm-fd-x06

- Claim and conventions: explicit exterior-sphere Stokes velocity and pressure, zero no-slip trace, uniform constant far field, exact formal stress resultant with normal `n=x/a`, and uniqueness among classical Stokes fields in the explicitly stated `O(r^-1)`, `O(r^-2)`, `O(r^-2)` velocity/gradient/pressure class. This is a Stokes-only result, with no finite-Reynolds-number error assertion.
- Dependencies: `def-fd-x00`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `def-countable-choice`, all mathematical-premise; level 1 because the in-run x00 supplier is level 0 and the imported mathematical suppliers are base inputs. The divergence theorem is applied only to bounded smooth annuli and its exact `ACω` hypothesis is stated. The current x00 interface, fd-x01 placement and ready record match.
- Sources and locators: Stewart, MIT 8.09/8.309 Chapter 6 §6.8, printed pp. 137–139, `https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf`; Tong, Fluid Mechanics Chapter 2 §§3.4.1–3.4.2, printed pp. 82–85, `https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf`. The local proof supplies the explicit decay-class uniqueness route beyond Tong's shorter discussion. Source disposition and fetch evidence will be recorded in coverage.
- Placement: A-page theorem; statement defines exterior domain, regularity, PDE, normal orientation, exact decay class, pressure normalization, units and model limitation. ACω appears both in Statement and as the exact imported fact used by the annular integration argument.
- Validation at the authoring checkpoint was pending; final scoped results and readiness decisions are recorded below.
- Next at this checkpoint: thm-fd-x08 was the next item; its completed argument is recorded below.

### Completed: thm-fd-x08

- Claim and conventions: on `t>0,y>0`, the complementary-error-function wall profile solves the unsteady Stokes equation and the full constant-density Navier–Stokes equation because convection vanishes; its wall/initial limits are stated with the incompatible initial-wall corner excluded, and the explicit Gaussian tail gives the thickness bound. A distinct periodic sine-shear solution carries an explicitly parameterized smooth material ellipse with exponentially decaying circulation.
- Dependencies: `def-fd-x00` (mathematical-premise), level 1. The current ready x00 statement supplies the constant-density model equation, Cartesian operators and componentwise Laplacian; its fd-x01 placement is present.
- Sources and locators: Mandre, Fluid Dynamics Lecture Notes Chapter 3 §3.3.1, `https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html`, supports the full Stokes first-problem similarity profile; MIT 2.25 Advanced Fluid Mechanics, “Solution to Stokes First Problem ATP”, complete four-page PDF, `https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf`, supports setup and diffusion scaling but not the exact profile. Exact tail and circulation arguments are local. Source dispositions and fetch evidence will be recorded in coverage.
- Placement: A-page theorem; exact domains, regularity corner, positive constants, loop geometry, parameter conditions, units and empirical/model limits are included in the uninterrupted Statement.
- At the initial authoring checkpoint validation was pending; current prerequisite status and final check results are recorded below.
- Next at this checkpoint: thm-fd-x09 was the next item; its completed argument is recorded below.

### Completed: thm-fd-x09

- Claim and conventions: for classical positive-density barotropic Euler with $P\in C^2$ and time-independent conservative potential, the theorem proves the enthalpy-gradient relation, streamline Bernoulli constancy, the connected-component constant under irrotationality, and Kelvin circulation for the stated closed C¹ material loops. It separately states and proves the general vector identity $(u\cdot\nabla)u=\nabla(|u|^2/2)-u\times\operatorname{curl}u$, which is the exact subclaim consumed by x13. It does not transfer barotropic hypotheses to x13’s constant-density pressure multiplier.
- Dependencies: `def-fd-x00` (mathematical-premise), level 1; exact current equations, derivative conventions and streamline definition inspected. x00 page placement/readiness is now verified.
- Sources and locators: Stewart, MIT 8.09/8.309 Chapter 6 §6.4, printed pp. 120–123, `https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf`; Tong, Fluid Mechanics Chapter 1 §§2.2.1–2.2.2, printed pp. 22–27, `https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf`. Stewart’s overly broad curl-free and streamline-vorticity wording is not adopted. Source dispositions/fetch evidence will be recorded in coverage.
- Placement: A-page theorem; every definition and equation needed by its result is explicit; external definition links are outside the uninterrupted Statement.
- Validation at the authoring checkpoint was pending; final scoped results are recorded below.
- Next at that checkpoint: add the missing local Euler definition and author x13; both are recorded below.

### Added local prerequisite: def-fd-incompressible-euler-system

- Gap and placement: x00 defines the viscous constant-density system and a distinct barotropic Euler branch, but not the formal constant-density inviscid system and its pressure-only stress used by planned x13. A mathematical theorem cannot use the separate physical postulate as a logical premise, so this new local definition is on A page `fd-x02`, with dependency `def-fd-x00` for derivative/regularity conventions and dependency level 1.
- Exact definition: pointwise three-dimensional equations $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p=0$, $\operatorname{div}u=0$, for constant $\rho_0>0$ and x00 regularity; formal stress $\sigma_E=-pI_3$ and surface resultant $\int_S\sigma_En_S\,dS$. It asserts no physical applicability or existence.
- Sources and locators: Stewart §6.4, printed pp. 120–123, `https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf`; Tong Chapter 1 §§2.3.2–2.3.3, printed pp. 35–42, `https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf`. The definition itself is direct and mathematical.
- Validation/readiness: the new item is now present in the A page, batch manifest, proof contracts and coverage. Its x00 dependency is currently ready; final scoped results are recorded below.
- Next at that checkpoint: author x13 using this definition and the exact identity in x09; x13 is recorded below.

### Completed: thm-fd-x13

- Claim and conventions: exterior sphere potential $\phi=(U\cdot x)(1+a^3/(2r^3))$, its explicit gradient, slip/no-through boundary condition, exact steady incompressible Euler pressure multiplier, and zero pressure-only formal resultant by antipodal symmetry. It is neither a viscous/no-slip result nor an observation.
- Dependencies: `def-fd-x00`, `def-fd-incompressible-euler-system`, and `thm-fd-x09`, all mathematical-premise; level 2. x09 is load-bearing only through its universally quantified vector identity, not its barotropic Bernoulli conclusion. x00 page placement/readiness is now verified.
- Sources and locators: Stewart, MIT 8.09/8.309 Chapter 6 §6.4, printed pp. 120–123, `https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf`; Tong, Fluid Mechanics Chapter 1 §§2.3.2–2.3.3, printed pp. 35–42, `https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf`. The exact field, topology-safe potential, boundary condition and resultant are verified locally. Source dispositions/fetch evidence will be recorded in coverage.
- Placement: A-page theorem with complete uninterrupted statement, SI interpretation, exact model interface and a labelled schematic explained as nonproof.
- At the initial authoring checkpoint validation was pending; current prerequisite status and final check results are recorded below.
- Next at this checkpoint: the six B examples are drafted; final manifest reconciliation and scoped checks are recorded below.

## Completed B-page examples

### ex-fd-x04-formal-verification

- Claim: substitute $(h,V_0,V_1,G,\mu,\rho_0)=(2,0,1,4,2,1)$ in the plane channel and $(a,G,\mu,\rho_0)=(1,8,2,1)$ in the pipe; obtain $v=5y/2-y^2$, channel flux $7/3$, shear components $5,-3$, pipe $w=1-r^2$ smooth on the disk, and flux $\pi/2$.
- Dependency: `thm-fd-x04`, mathematical-premise, level 2. Both fields match the actual A statement exactly. Sources are the same three inspected treatments cited by x04; this B result is a direct finite substitution, not an independent source claim.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

## Final reconciliation and validation

- Current supplier state: `def-fd-x00` is placed in the current batch-5 manifest and on fd-x01; `loadStep1Record`/`step1Decision` confirms its current Step-1 record is closed with `ready` and a matching hash. The actual Definition was checked against every FD-X02 use. The fd-x01 page is draft, which alone is not a prerequisite gap; its required theorem page is published. The two other fd-x02 page prerequisites are also present and published.
- Step-1 decisions: all 13 batch-6 items have current `ready` records with their direct dependencies and evidence. This records complete authoring readiness only; independent proof approval remains a later review gate.
- Cross-batch evidence: the fd-x02 → fd-x01 page edge and all seven direct def-fd-x00 item edges are `verified` after checking current statements, placement and readiness. The batch file is an eight-row JSON array and contains no transitive-only edges.
- Page and manifest state: fd-x02 contains seven A items (six planned theorems plus the required local Euler-system definition); fd-x02-examples contains the six planned B examples. The pages are frontmatter-only with empty bodies. Final item statements and metadata are mirrored in the pages manifest; no page exceeds the 100-item cap.
- Sources: coverage records five inspected full-text treatments and all harvested result dispositions. `source-fetch-check --stamp` reports 5/5 active sources fetch-verified and zero active-source drops. The old Tong HTTP 404 and combined-PDF viewer limit, the official split-chapter recovery, current search evidence, and per-item arguments/dependencies remain in `source_resolution`.
- Scoped validation: all 12 proof-bearing items pass precheck; proof-layout reports 13 changed items, 37 steps, zero defects; rendercheck passes all 15 item/page files; focused depcheck has zero errors/warnings; content-policy passes all 13 items; strict proof-contract validation passes all 13 contracts; coverage-checklist reports 31 harvested results with zero errors/warnings. The statement-link and empty-page-body check also reports zero defects.
- Dependency levels: the scoped dependency graph, using the actual fd-x01 def-fd-x00 item at level 0, is acyclic and has no errors. It computes x04/x05/x06/x08/x09/def-fd-incompressible-euler-system at level 1, x13 at level 2, B examples x04/x05/x06/x08/x09 at level 2, and B x13 at level 3.
- The native full-run dependency-level command still exits 1 on 42 out-of-scope entries: 34 empty scaffold inventories (`fd-f03`, `fd-f03-examples`, `fd-px01`, `fd-px01-examples`, `fd-px02`, `fd-px02-examples`, `fd-px03`, `fd-px03-examples`, `fd-s03`, `fd-s03-examples`, `fd-ps01`, `fd-ps01-examples`, `fd-ps02`, `fd-ps02-examples`, `fd-w02`, `fd-w02-examples`, `fd-pn01`, `fd-pn01-examples`, `fd-pn02`, `fd-pn02-examples`, `fd-pda01`, `fd-pda01-examples`, `fd-ples01`, `fd-ples01-examples`, `fd-pg01`, `fd-pg01-examples`, `fd-pmp01`, `fd-pmp01-examples`, `fd-l01`, `fd-l01-examples`, `fd-bl01`, `fd-bl01-examples`, `fd-pbl01`, `fd-pbl01-examples`) and eight existing dependency-level mismatches (`post-fd-boundary-data`, `pthm-fd-cauchy-momentum-angular`, `pthm-fd-control-volume-balances`, `pthm-fd-energy-decomposition`, `post-fd-weak-balances`, `pthm-fd-conservation-jump-laws`, `ex-fd-conduction-energy-entropy`, `cex-fd-vacuum-velocity-determination`). It reports no batch-6 level error; the scoped calculation passes. These other pairs remain outside this assignment and are recorded for the run owner; no out-of-scope items were modified.

No batch-6 prerequisite, source, placement, capacity or validation blocker remains.

### ex-fd-x05-formal-verification

- Claim: the $κ=1$, $\rho_0=2$ punctured-axis vortex has pressure $-r^{-2}$ and circulation $2\pi$ at radius two; separate $Ω_0=1$ solid rotation has $p=r^2$ and Bernoulli value $r^2$.
- Dependency: `thm-fd-x05`, mathematical-premise, level 2. Explicit pressure-gradient/convective cancellation and closed-loop potential contradiction are computed; the solid rotation value is checked directly. Sources are the A item’s Stewart/Tong pair; the theorem supplier carries those source qualifications.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

### ex-fd-x06-formal-verification

- Claim: set $a=\mu=\rho_0=1$, $p_\infty=0$, $U=e_z$ in the exact exterior Stokes sphere field; verify the zero unit-sphere trace, uniform far-field limit and formal resultant $6\pi e_z$.
- Dependency: `thm-fd-x06`, mathematical-premise, level 2. It retains the exact Stokes-only scope and `ACω` assumption of x06; it asserts no finite-Re error. Sources inherit x06’s Stewart/Tong treatments.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

### ex-fd-x08-formal-verification

- Claim: evaluate the tail bound at $(\nu,U,t,y)=(1,1,1,2)$ with $\epsilon=e^{-1}$; for the periodic loop take $(L_x,L_y,L_z,m,k,A,c,b)=(4,2\pi,1,1,1,2,1,\pi/2)$, giving $\alpha=\pi/2$ and exact circulation $\Gamma(t)=2C_{\pi/2}e^{-t}$, where $C_{\pi/2}=\int_0^{2\pi}\cos\theta\sin((\pi/2)\cos\theta)\,d\theta>0$.
- Dependency: `thm-fd-x08`, mathematical-premise, level 2. The two example calculations are separate and retain the initial-wall corner exclusion; the periodic loop is the smooth parametrized ellipse from the current supplier statement. Sources inherit Mandre §3.3.1 and the MIT 2.25 first-problem solution from x08.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

### ex-fd-x09-formal-verification

- Claim: the uniform solution with $P(q)=q$, $\rho=1$, $V=0$, $u=e_x$ has $h(q)=\log q$, Bernoulli value $1/2$, and an explicitly advected unit circle with circulation zero.
- Dependency: `thm-fd-x09`, mathematical-premise, level 2. Both Euler equations and loop regularity are checked directly; sources inherit x09’s Stewart/Tong pair.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

### ex-fd-x13-formal-verification

- Claim: for $a=\rho_0=1$, $p_\infty=0$, $U=e_x$, the unit-sphere boundary speed is $(3/2)(e_x-n_xn)$, the pressure is $-5/8+(9/8)n_x^2$, and the pressure-only formal resultant vanishes by antipodal symmetry.
- Dependency: `thm-fd-x13`, mathematical-premise, level 3. This example uses x13’s exact Euler system definition and x09 identity only through its A supplier; no barotropic conclusion or no-slip condition is imported. Sources inherit x13’s Stewart/Tong pair.
- Validation/readiness: current theorem supplier and transitive x00 prerequisite are ready; final scoped checks pass, and the Step-1 record is ready.

## Final reconciliation and validation

- Current supplier state: `def-fd-x00` is on the current batch-5 `fd-x01` manifest and page, and `loadStep1Record`/`step1Decision` returns a current `ready` record with a matching hash. Its complete current Definition was compared with each direct FD-X02 use. The direct item edges and the required `fd-x02` → `fd-x01` page edge are all recorded `verified` in the batch cross-dependency file. The published countability, Euclidean surface-measure, and divergence/Stokes page prerequisites are present. The local `def-fd-incompressible-euler-system` is the one necessary A-page addition; it defines the exact inviscid equation and pressure-only stress consumed by x13.
- Step-1 decisions: all 13 batch-6 items have current `ready` records. This records complete authoring inputs, placement and contracts; independent proof approval remains a later gate.
- Page/manifest state: `fd-x02` contains seven A items (six planned theorems plus the local Euler definition), `fd-x02-examples` contains the six planned B examples, both page bodies are empty, and the item statement mirrors were refreshed from the final uninterrupted sections. The pages remain below the 100-item cap.
- Source evidence: five active sources are listed in coverage with item locators and dispositions; `source-fetch-check --stamp` reports 5/5 fetch-verified and 0 documented active-source drops. The historical Tong 404 and combined-PDF viewer-limit routes, the official split-chapter recovery, search evidence, and per-item arguments/dependencies are retained under `source_resolution`.
- Scoped checks: precheck passed on all 12 proof-bearing items; `proof-layout` passed on all 13 changed items (37 numbered steps, zero defects); `rendercheck` passed on 15 item/page files; focused `depcheck` passed with zero errors/warnings; `content-policy` passed on 13 items; strict proof-contract validation passed on all 13 items; coverage checklist reports one A page, 31 harvested results, zero errors/warnings.
- Dependency levels: the scoped dependency graph, using the actual `def-fd-x00` batch-5 item at level 0, has no cycles or errors and computes x04/x05/x06/x08/x09/local Euler definition at level 1, x13 at level 2, B examples x04/x05/x06/x08/x09 at level 2, and B x13 at level 3. The native full-run `item-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` still exits 1 on 42 out-of-scope run entries: 34 empty scaffold inventories (`fd-f03`, `fd-f03-examples`, `fd-px01`, `fd-px01-examples`, `fd-px02`, `fd-px02-examples`, `fd-px03`, `fd-px03-examples`, `fd-s03`, `fd-s03-examples`, `fd-ps01`, `fd-ps01-examples`, `fd-ps02`, `fd-ps02-examples`, `fd-w02`, `fd-w02-examples`, `fd-pn01`, `fd-pn01-examples`, `fd-pn02`, `fd-pn02-examples`, `fd-pda01`, `fd-pda01-examples`, `fd-ples01`, `fd-ples01-examples`, `fd-pg01`, `fd-pg01-examples`, `fd-pmp01`, `fd-pmp01-examples`, `fd-l01`, `fd-l01-examples`, `fd-bl01`, `fd-bl01-examples`, `fd-pbl01`, `fd-pbl01-examples`) and eight existing dependency-level mismatches (`post-fd-boundary-data`, `pthm-fd-cauchy-momentum-angular`, `pthm-fd-control-volume-balances`, `pthm-fd-energy-decomposition`, `post-fd-weak-balances`, `pthm-fd-conservation-jump-laws`, `ex-fd-conduction-energy-entropy`, `cex-fd-vacuum-velocity-determination`). It reports no batch-6 level error. These other pairs remain outside this assignment and should be routed to the run owner; no out-of-scope items were modified.
- No batch-6 prerequisite, source, placement, page-capacity, or validation blocker remains.
