# Batch 42 — Physical phase-field model adoption

Run: fluid-dynamics-all-47-2026-10-23  
Batch: 42, beta  
Pages: fd-pmp01 (689) and fd-pmp01-examples (690)

## Plan and design comparison

The controlling design section is research/plan-fluid-dynamics-refresh-track.md, “Physical phase-field model adoption” (L1347–1374). Its page IDs, titles, fluid-dynamics category, physics library, orders, companions, and requirements fd-f01 and fd-mp01 match the current research/plan-spec.json rows and the original batch-42 manifest. The plan rows and starting manifest had empty item inventories, which are populated here from the controlling design; this is not a plan/design conflict.

The design and linked research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json specify the planned A items post-fd-diffuse-interface-material-law and pthm-fd-phase-field-conditional-energy, and B example ex-fd-phase-outside-unit-interval, with the planned dependency chain through post-fd-continuum-balances, def-fd-diffuse-interface-equations, and thm-fd-diffuse-interface-energy. I added the local A-page definition def-fd-phase-field-dimensionalization: the mathematical supplier explicitly assigns dimensionless variables and says physical identification requires density, phase, free-energy, length/time, and chemical-potential scales. The new definition supplies that required local interface before the physical postulate and theorem use it.

The physical formulation preserves the M1 caveats: the phase is an internal order parameter, no pointwise phase bound or mass-density interpretation is imposed, the model is periodic and isothermal, the free-energy identity is conditional on a smooth solution, no calibration is supplied, and no sharp-interface or physical-immiscibility result is claimed. The theorem's decaying functional is kinetic plus phase-field free energy, not complete thermodynamic energy.

## Inventory, dependencies, and levels

The current batch-level evidence read before authoring records batch 42 at level 2 with prerequisite batches 3 and 41. The current plan and manifest page edges are fd-pmp01 → fd-f01, fd-pmp01 → fd-mp01, and the same-batch companion edge fd-pmp01-examples → fd-pmp01.

| Item | Direct dependencies | Level | Role |
|---|---|---:|---|
| def-fd-phase-field-dimensionalization | def-fd-diffuse-interface-equations | 2 | mathematical premise |
| post-fd-diffuse-interface-material-law | post-fd-continuum-balances, def-fd-diffuse-interface-equations, def-fd-phase-field-dimensionalization | 3 | physical assumption; mathematical premise; formulation prerequisite |
| pthm-fd-phase-field-conditional-energy | post-fd-diffuse-interface-material-law, thm-fd-diffuse-interface-energy, def-fd-phase-field-dimensionalization | 4 | physical assumption; mathematical premise; formulation prerequisite |
| ex-fd-phase-outside-unit-interval | pthm-fd-phase-field-conditional-energy | 5 | physical result |

The page dependency level remains 2: batch 3 is level 0 and batch 41 is level 1. Item levels are computed from actual in-run item edges, not page order.

The postulate adopts the current physical continuum framework as context and states the isothermal phase-field closure independently. Its scalar phase is not total mass density, so the adopted phase relaxation equation is not a total-mass diffusion equation. The full thermodynamic, heat, entropy, and species-mass interpretation is outside this reduced model.

## Supplier inspection and current readiness

- post-fd-continuum-balances was read in full. It adopts smooth nonpolar continuum mass, momentum, total-energy, and entropy balances; its physical status does not derive those balances from mathematics or establish universal empirical validity. A fresh live step1Decision after authoring reports this item ready. The scoped edge to it is recorded verified.
- def-fd-diffuse-interface-equations was read in full. It defines a dimensionless periodic model with W ∈ C²(R) bounded below, positive dimensionless coefficients, a chemical-potential formula, and an explicit kinetic-plus-phase functional. Its direct suppliers def-fd-x00 and def-fd-periodic-torus-domain were inspected. The current def-fd-x00 carrier exists on fd-x01 and its current Step-1 record is ready; the former batch-41 note that it was absent is stale.
- The batch-41 thm-fd-diffuse-interface-energy Statement and complete proof were read. For its stated smooth class, the proof differentiates the phase and kinetic terms, uses periodic integration by parts, and cancels the transport/capillary exchange terms. Its direct periodic-calculus lemma and complete coordinate proof were also inspected. The theorem is a draft mathematical supplier; its content is used only conditionally and no independent proof approval is inferred.
- The live supplier readiness changed while this batch was being authored. At the time the four local escalations were recorded, post-fd-continuum-balances, def-fd-diffuse-interface-equations, and thm-fd-diffuse-interface-energy had no current Step-1 records. A later fresh check reports post-fd-continuum-balances ready, while the latter two now have escalated records. The batch-42 Step-1 rows were not overwritten. The current batch-41 escalation says its all-dimensional periodic definition uses def-fd-x00, whose actual differential-operator interface is on open subsets of R³; that interface does not cover the batch-41 claim for arbitrary d ≥ 1. This is a genuine wider-scope mathematical interface issue, not a missing carrier: fd-x01 and def-fd-x00 are present, and def-fd-x00 is currently ready.
- This batch's physical theorem and scale definition use only d=3. The current R³ pointwise operators and the periodic-lift definition on T³ match that actual use. The cross-batch checks are therefore recorded verified for the scoped three-dimensional interface, without clearing batch 41's broader all-dimensional escalation or approving its proof. The current batch-41 theorem proof itself is complete for the displayed smooth periodic equations.
- def-fd-smooth-motion and lem-fd-transport-and-density are present and have current ready records. The current def-fd-quantity-and-frame-conventions item contains an old “Authoring status” note saying the smooth-motion supplier is absent; the live smooth-motion carrier and its ready record show that note is stale. It is outside this batch's write scope and was not edited.
- Older batch-41 notes also say fd-x01 and def-fd-x00 are absent. The live page, batch-5 manifest, current definition carrier, and ready record show those particular blocker claims are historical. No such absence is used here.

The broader all-dimensional interface issue affects def-fd-diffuse-interface-equations, thm-fd-diffuse-interface-energy, and their consumers. Proposed owner resolution: add or designate a mathematically explicit formal periodic-PDE/operator definition for arbitrary d on the mathematical A page fd-x01, then check the existing definition and its consumers against that interface. Batch 42 does not edit batch 5 or batch 41. The local physical items retain their d=3 scope and their Step-1 escalated records.

## Source reading and dispositions

Three independent full-text treatments were inspected for A page fd-pmp01, including Oden's full lecture notes. Exact URLs, locators, per-item arguments, dispositions, reading limits, and fetch stamps are in research/fluid-dynamics-all-47-2026-10-23-batch-42.coverage.json.

| Source | Inspected locator | Use and limits |
|---|---|---|
| J. Tinsley Oden, Lecture Notes, Chapter 11 | §§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10), (11.16)–(11.21); complete 230-page PDF | Supports the phase free energy, chemical potential, and nonnegative chemical-potential mobility structure. The local SI coefficients are separately defined and are not claimed to be Oden's exact coefficient convention. |
| Stefanos Georgiadis, “Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility” | Complete 8-page version of record; §1 equations (1.1)–(1.10), Theorem 1, and complete §2 proof | Supports periodic matched-density phase-flow context. The paper's phase bound [-1,1], singular-potential assumptions, weak-solution class, Korteweg-force gauge, and symmetric-gradient viscosity are not imported. |
| V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, “Computation of multiphase systems with phase field models” | Complete 27-page PDF; §§2.1–2.4, pp. 372–374, equations (1)–(15) | Independently treats the physical order parameter, free energy, chemical potential, convective Cahn–Hilliard equation, coupled flow, and nondimensionalization. Its binary-fluid and variable-coefficient scope is not claimed as universal. |

source-fetch-check --stamp returned 3/3 sources fetch-verified, with one newly stamped full 27-page Badalassi PDF (1,530,371 bytes; SHA-256 prefix 77c4512b0d6d7b0b). Oden and the DNB version-of-record stamps were reused from batch 41 for the same successful URLs; batch-41's Springer cookie-wall attempts and dropped endpoint remain unchanged there. No source was dropped in batch 42.

## Proof route and example

The physical postulate defines a dimensional chemical potential and capillary Cauchy stress. In proof step 1.1, the coordinate product rule gives div(sigma_c) = -varphi grad(mu) and incompressibility gives div(2 eta D) = eta Delta(u). The explicit coefficient map then reduces the dimensional model to the exact dimensionless Cahn–Hilliard/incompressible-flow equations. Step 2.1 applies the complete conditional mathematical energy theorem and rescales both dissipation terms by rho_* U^3 L^2. The result is a conditional decay law for kinetic plus phase-field free energy; it claims no solution existence, empirical truth, or complete thermodynamic energy balance.

The B example sets the quartic potential W(q)=(q²−1)²/4 and constructs the constant state u=0, varphi=2 Phi_*, p=0. It checks the stress-form equations, computes mu=6 beta/Phi_* and G=(9/4)(2 pi L)^3 beta, and shows the adopted equations do not impose varphi/Phi_* ∈ [-1,1]. It is a model example, not a reported observation or universal maximum-principle claim.

Source force conventions were checked explicitly. Badalassi et al. write the capillary force as +mu grad(phi); the identity mu grad(phi)=grad(phi mu)-phi grad(mu) gives the local force convention after shifting pressure to p_local=p_source-phi mu. Georgiadis et al. use -gamma div(grad(c) tensor grad(c)); when mu=F'(c)-gamma Delta(c), this equals -c grad(mu)+grad(c mu-F(c)-gamma|grad(c)|²/2), so the difference is another pressure gradient. The local theorem imports neither paper's energy proof or regularity class; its own capillary-stress identity and coefficient map are shown in step 1.1.

## Cross-batch edges

research/fluid-dynamics-all-47-2026-10-23-batch-42.cross-batch-dependencies.json contains one row for each of the six exact off-batch edges. Each row is verified for the scoped three-dimensional use after inspecting the actual current page/item statement and hypotheses; this is not independent proof approval and does not clear the broader batch-41 all-dimensional readiness escalation. No transitive observations about other batches are disguised as batch-42 edge reviews.

## Scoped validation

| Check | Result |
|---|---|
| source-fetch-check --coverage research/fluid-dynamics-all-47-2026-10-23-batch-42.coverage.json --stamp | Pass: 3/3 sources fetch-verified; 1 newly stamped. |
| tsx-run precheck on the four item paths | Pass: 3 proof-bearing items checked, 0 failing; the definition has precheck n/a. |
| proof-layout on the four item paths | Pass: 4 items, 4 steps, 0 defects. |
| proof-contract --strict on the batch-42 contract file | Pass: all 4 contracts checked; 0 errors or warnings. |
| citation-fidelity on the batch-42 contract file | Pass: 4 citations; no quote failures or widening candidates. |
| scoped rendercheck on four items and both pages | Pass: 6 files; YAML and mathematics parse. |
| content-policy on the batch-42 pages manifest | Pass: 4 items; 0 errors or warnings. |
| depcheck on the four batch-42 IDs | Pass: 4 selected items; 0 errors or warnings; 687 dependency-closure items and 114 pages checked. |

The targeted item-level calculation gives the declared and computed levels 2, 3, 4, and 5 for the four assigned items. The full-run item-dependency-levels check still reports empty scaffold inventories outside batch 42 for fd-px01, fd-px01-examples, fd-px02, fd-px02-examples, fd-px03, fd-px03-examples, fd-s03, fd-s03-examples, fd-ps01, fd-ps01-examples, fd-ps02, fd-ps02-examples, fd-w02, fd-w02-examples, fd-pn01, fd-pn01-examples, fd-pn02, fd-pn02-examples, fd-ples01, fd-ples01-examples, fd-bl01, fd-bl01-examples, and fd-pbl01-examples. It also reports two outside-batch level mismatches on fd-pbl01: post-fd-capillary-linear-free-surface declares 2 but computes 3 (its direct in-run suppliers compute 1 and 2), and pthm-fd-capillary-wave-model-prediction declares 3 but computes 4 from that postulate. These are not batch-42 items and were not edited.

The full batch-dependency-levels check reports the run-wide snapshot stale after the batch-42 page manifest changed. Recalculation gives batch 42 level 2 with requires ["3","41"], unchanged from the recorded levels, but the recorded input hash 34494e8b1e1d196116c2377a86254d2f85cf61c02bdc512f01010d2f28e50d3a differs from current input hash c5dbb2aa3ce93f34e1a7573e6057c941636e3126b4c068df301f61b9a409191a. This run-wide scheduling evidence is left for the owner to refresh at the drained construction join.

## Readiness and next action

All four batch-42 Step-1 records are escalated, with owner false; none is marked ready. The escalation records were written before the later live readiness change described above and were not overwritten. The current content and proof contracts are complete, but the broader batch-41 mathematical supplier remains escalated for its all-dimensional interface. The owner should reconcile that supplier scope, refresh the shared batch-level snapshot at the drained join, and then reassess the preserved batch-42 readiness rows against the current inputs.
