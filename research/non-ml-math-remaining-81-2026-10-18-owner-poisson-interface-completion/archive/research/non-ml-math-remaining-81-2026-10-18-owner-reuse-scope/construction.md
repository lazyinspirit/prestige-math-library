# Proposed owner construction direction: reuse gateways

This is an owner-decision proposal, not an installed direction, proof acceptance, or readiness receipt. It changes no engine input. Native batch 40 completed successfully at 2026-10-17T15:16:05.203Z and explicitly reported that its empty inventory prevents Step 1 acceptance. Its archived result is the factual basis. The mathematical scope of the exact 81 pairs is retained; the historical prose-splice placement prohibition would be replaced only for distinct interface carriers and genuinely new worked verifications.

## Batch 40 / PA-09: smallest concrete construction

Keep all existing Poisson, Hamiltonian-field, moment-map and example carriers at their canonical homes. Keep their proofs and all original pair claims. Do not re-prove that smooth functions form a Poisson algebra or repackage equivariance iff the component bracket identity as a second theorem. Continue the existing page synthesis with two A items and one B item as follows. IDs below are proposals, absent from the current active item search at this investigation, and must be checked again by the assigned author.

### A: `def-symplectic-comoment-map-and-hamiltonian-observable-action`

For a symplectic manifold (M,omega) with the library convention i_XH omega=dH and {F,G}=X_G(F), and a real Lie algebra g, define a **comoment map** to be a real-linear J:g -> C∞(M,R) with J([xi,eta])={J(xi),J(eta)}. Define its observable operators rho_J(xi)F={J(xi),F}. Say explicitly that a Poisson derivation D preserves both operations: D(FG)=D(F)G+FD(G) and D{F,G}={DF,G}+{F,DG}. This defines the missing representation interface; it does not define another geometric moment map, assert integrability to a group action, or define a general degenerate Poisson manifold. No new Poisson structure beyond the approved symplectic setting is introduced.

Logical deps: `thm-smooth-functions-form-a-poisson-algebra`, `def-poisson-bracket-on-a-symplectic-manifold`, `def-representation-of-a-lie-algebra`, `def-lie-algebra-over-a-field`. A separate general Poisson-algebra definition is unnecessary for this smallest repair. The first supplier provides the actual algebra and the displayed axioms identify the structure used here.

### A: `prop-comoment-maps-act-on-observables-by-poisson-derivations`

For the preceding J, rho_J is a real Lie-algebra representation on C∞(M,R), each rho_J(xi) is a Poisson derivation, and rho_J(xi)=-X_{J(xi)} as an operator on functions. For an equivariant moment map mu for the existing symplectic left G-action, J(xi)=mu^xi is such a comoment map and rho_J(xi)F=xi_M(F). Carry AC_omega wherever the invoked moment-map supplier requires it. No connectedness assumption is needed for this forward direction. For the converse reading route cite the original equivariance proposition: connected G gives the converse and general G gives only G^0 without extra component checks. Do not claim that every representation by Hamiltonian derivations has a chosen J, an equivariant mu, or an integrated group action.

Full local proof route, with no quoted conclusion replacing calculation:

1. Bilinearity proves linearity in xi and F. For F fixed, expand the commutator using Jacobi:
   [rho(xi),rho(eta)]F={Jxi,{Jeta,F}}-{Jeta,{Jxi,F}}={{Jxi,Jeta},F}={J[xi,eta],F}.
2. Apply the existing biderivation identity to {Jxi,FG}; this gives the product Leibniz rule term by term. Apply Jacobi again as {Jxi,{F,G}}={{Jxi,F},G}+{F,{Jxi,G}} to get preservation of the Poisson bracket. These calculations prove the two-operation compatibility, beyond merely copying the finite-dimensional adjoint definition.
3. The bracket definition gives {Jxi,F}=-X_Jxi(F). For J=mu-components, the original equivariance supplier gives the comoment identity and component linearity comes from `def-moment-map-and-component-hamiltonian`. The existing field supplier gives X_mu^xi=-xi_M, so rho(xi)=xi_M on observables.

Logical deps: the new definition; `thm-poisson-bracket-satisfies-the-jacobi-identity`; `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry`; `def-poisson-bracket-on-a-symplectic-manifold`; `def-moment-map-and-component-hamiltonian`; `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity`; `prop-moment-map-components-generate-the-negative-infinitesimal-action`; `def-countable-choice`. Use `def-representation-of-a-lie-algebra` directly if its definition is quoted. Do not import `def-adjoint-representation-of-a-lie-algebra` as the C∞ adjoint supplier: that carrier explicitly assumes finite dimension.

### B: `ex-quadratic-sl2-comoment-action-on-the-symplectic-plane`

On R² with omega=dq wedge dp, use {F,G}=F_q G_p-F_p G_q. Let g=sl2(R) with matrices H=diag(1,-1), E=[[0,1],[0,0]], F=[[0,0],[1,0]], so [H,E]=2E, [H,F]=-2F, [E,F]=H. Define J(H)=-qp, J(E)=q²/2, J(F)=-p²/2, extending linearly.

Full verification must (i) multiply the three matrix pairs to establish the source brackets, (ii) differentiate all three functions and compute the three target brackets to be 2J(E), -2J(F), J(H), then use bilinearity/alternation to cover every pair of elements, and (iii) compute the operators

rho(H)=q partial_q-p partial_p, rho(E)=q partial_p, rho(F)=p partial_q.

Check their commutators directly on an arbitrary smooth test function, with cancellation of mixed second derivatives, and check at least one nontrivial product and Poisson-bracket preservation calculation, while the A proposition supplies the all-functions result. This is a new explicit Hamiltonian observable representation, not another verification of just {q,p}=1, circle rotation, or cotangent angular momentum. Do not add group integration or classify sl2 representations. The example's generated statement, if tagged ai-generated, is an example with generation.role=example and must never be a logical supplier.

Logical deps: the new definition and proposition, `prop-coordinate-formula-for-the-poisson-bracket`, `def-special-linear-lie-algebra` only if its actual ID/body exists and supplies exactly the chosen matrix convention. Otherwise define this particular matrix Lie subalgebra explicitly inside the example and cite the actual matrix-commutator Lie supplier after inspection; do not invent a dependency ID. The example is not a proof supplier for A.

The A definition precedes its proposition; B follows both. Existing suppliers are external context and are linked in prose, not listed as new homes. All new carriers remain draft. The author must supply actual source references, full local proofs/verifications, proof contracts, manifest deps and item levels, source evidence, pages and readiness via the ordinary native route. Owner alone integrates direction, reconciles native retry/recovery, rehashes and recertifies.

## Why this stays inside the approved claims

Original PA-09 claim 1 is the symplectic Poisson construction and its Lie/derivation identities. Claim 2 is the moment-map bridge with exact equivariance/connectedness hypotheses. The new interface turns precisely those already selected identities into an actual representation on observables, which is already in the pair's name and symmetry-interface consumer. The only B calculation exhibits that interface concretely. The original canonical theorems remain prerequisites, not newly homed duplicates. General Poisson tensors, quantization, cohomological obstruction theory, central extensions, representation classification and group integration are excluded from this proposal. The historical instruction 'no additional result is claimed' must therefore be replaced explicitly by the owner for these interface consequences; it cannot be silently ignored by the author.

## Existing source route and limits

The archived batch-40.source-coverage.json records earlier worker full-text inspection and fetch stamps for Cannas da Silva Lecture 18 §§18.3–18.4 and Lecture 22 §22.1; Meinrenken §4.2 and §7.3 Lemma 7.14; Moshayedi §§2.7.3–2.7.15 and §2.8.4. This investigator read the local carrier statements/proofs and original planning contracts; I do not claim new external PDF reading or source-fetch verification. The author should inspect those full texts for comoment terminology and the exact sign translation. Cannas da Silva and Moshayedi assign some bracket proofs as exercises; the local published suppliers, not those exercises, establish the prerequisites. Source choice does not establish any new claim until its local argument is authored.

## Other reuse-only pairs in this exact run

The original `proposed-pages.json` page_role explicitly says no new mathematical items for exactly seven A/B pairs (14 pages). They are archived in original-reuse-only-contracts.json. Conditional interface permission on PA-10, PA-33 and PA-44 coexists with that blanket page_role and needs owner reconciliation too.

| Batch | Pair | Conservative authoring direction |
|---|---|---|
| 32 / PA-01 | algebraic-representation-and-tensor-symmetry-map | Preserve the current author's distinct associative-algebra representation/module interface if already constructed; inspect it before adding anything. Complete its own B worked representation/tensor example. Do not mint ordinary PBW, enveloping algebra or Schur–Weyl duplicates. |
| 41 / PA-10 | dg-and-homological-algebra-foundations | Exercise the original explicit conditional permission for a missing signed DG algebra/module interface after exact active inventory comparison. Author the signed interface and a full differential/product verification example; reuse chain-complex, derived and Hochschild foundations. If current author has done this already, retain it. |
| 64 / PA-33 | hopf-hecke-and-quantum-symmetry-interfaces | Require an exact missing normalization/spectral interface before minting any result, as original claim 3 already says. Compare both PA-34 and canonical suppliers to ensure a unique owner. A distinct parameter-conversion interface and fully computed model is admissible only inside original parameter/spectral claims; never duplicate constant-R braid or generic centralizer theorems. No generic spectral theorem is authorized merely to populate the page. |
| 66 / PA-35 | category-o-klr-and-hecke-categorification-route | Select the smallest genuinely absent parameter/grading conversion interface from original claim 2 after inspecting exact source/target presentations. Prove both directions of that concrete normalization and verify a finite example, retaining every characteristic/weight restriction. Do not reproduce category O, Ariki, KLR or Soergel equivalences or assert transfer across regimes. |
| 74 / PA-43 | operator-algebraic-states-and-gns-representations | A missing explicit convention/bridge between first-variable-linear algebra-state GNS and group positive-type matrix coefficients is the relevant local interface candidate. Inspect both existing GNS carriers first; prove only the absent convention/compatibility map and a finite explicit state/coefficient example. Retain all topology, continuity, separability and choice assumptions; no second GNS existence theorem. |
| 75 / PA-44 | gauge-groups-and-representation-theory-interfaces | Exercise original permission for genuinely missing mathematical gauge-interface definitions only after inventory comparison. A missing bundle automorphism/associated representation compatibility interface and fully computed trivial-bundle example is within original claim 1; retain global group versus Lie algebra and global-form restrictions. Do not add path integrals or physical gauge postulates as premises. |

These are targeted assignment directions, not assertions that all proposed interfaces are absent. Only PA-09 received a concrete current body search and mathematical proposal here. For the others the next author must find a mathematically distinct interface inside the original claims, preserve work already in flight, and report a precise unresolved scope conflict if none exists. The owner should reconcile all seven directions before another empty completion occurs, without changing any current worker's files or granting acceptance.

## Native mechanism finding

No supported empty-inventory native reuse-only mechanism was found. `tools/item-dependency-levels.mjs` explicitly rejects every page with no items and rejects repeated ownership. `scaffoldFiles` in `tools/autopilot/stages/mathlib.mts` leaves the scaffold-incomplete sentinel despite a successful Beta result when actual inventory/readiness is incomplete. The existing splice hydration test supports only reuse of complete existing SAME-PAGE canonical-plan inventories with present carriers. It cannot move or repeat Poisson suppliers already homed elsewhere, and batch 40 has no same-page inventory to hydrate. Thus genuine reuse remains logical/source context, while these new approved page pairs require actual distinct carriers. No gate, command, or test was run during this investigation.
