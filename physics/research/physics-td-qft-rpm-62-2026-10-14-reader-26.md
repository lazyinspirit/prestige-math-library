# Step 3a reader report — batch 26

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `26`

## Opened inventory

Pages reviewed:

- `rpm-symmetries-hamilton-jacobi` (A)
- `rpm-symmetries-hamilton-jacobi-examples` (B)

All 16 assigned items were read independently:

- A: `def-rpm-h-poincare-charge-space`, `def-rpm-h-first-class-constraint-family`, `thm-rpm-h-local-hamilton-jacobi`, `thm-rpm-h-poincare-moment-map-and-algebra`, `thm-rpm-h-positive-spin-orbit`, `post-rpm-h-classical-spin-orbit-model`, `thm-rpm-h-spinless-kks-identification`, `pthm-rpm-h-classical-orbit-evolution`, `thm-rpm-h-killing-shell-first-integral`, `pthm-rpm-h-free-symmetry-conservation`, `thm-rpm-h-complete-integral-coordinates`, `pthm-rpm-h-hj-trajectories`.
- B: `cex-rpm-h-instantaneous-potential-free-boost`, `ex-rpm-h-two-shell-consistency-obstruction`, `cex-rpm-h-relativistic-hj-caustic`, `ex-rpm-h-free-relativistic-complete-integral`.

I opened the load-bearing current-run suppliers used by these items, including the cotangent-space, canonical-flow, constraint-consistency, first-class reduction, flat-shell reduction, inertial-time reduction, Dirac-bracket, first-order action/geodesic, massive-shell, temporal-shell, postulate, and temporal-chart carriers. Relevant published mathematical context included the cotangent and symplectic definitions, regular-level theorem, Lorentz cone and proper-time results, inverse-function and ODE results, coadjoint-orbit/KKS results, and the GR connection and Killing-field results.

I also opened the cited source passages used for the physical and HJ formulations: Henneaux–Regge–Teitelboim, Chapter I equation (1.21), PDF p. 10, and Chapter II pp. 27–30; Chagas-Filho, §§1–2, pp. 1–3; van der Schaaf, §9.3, pp. 78–79 and §10.2.2, pp. 81–82; MIT OCW 8.09, Chapter 4 §4.4, equations (4.104)–(4.107); and Gourgoulhon, §§3.3.1–3.3.3 and 4.2.2–4.2.3. The reviewed items contain no experimental dataset or empirical-result claim.

## Edits

- `pthm-rpm-h-hj-trajectories`: defined the physical-time chart domain as the preimage of the chart's length-valued first coordinate under `t ↦ ct`, pulled back lapse, shift, and spatial-metric data by `x⁰=ct`, restricted the Hamiltonian and HJ graph to that open domain, and made the same substitution explicit in the lifted shell proof. This preserves the stated local trajectory claim while making the time and chart domains agree. Updated its proof contract, including the step 2.1 derivation and bound statement excerpt. No stale `verification.judge` record was present.
- `thm-rpm-h-local-hamilton-jacobi`: replaced the undefined caustic reference in the limitation sentence with the exact characteristic-projection invertibility condition.
- `thm-rpm-h-complete-integral-coordinates`: clarified the local HJ supplier's limitation in terms of projection invertibility.
- `cex-rpm-h-relativistic-hj-caustic`: narrowed the title to the one exhibited datum and defined a caustic point for this family as a point where `(t,a) ↦ (t,q(t,a))` is not locally invertible. Updated its finite-check contract note. No stale `verification.judge` record was present.
- `thm-rpm-h-poincare-moment-map-and-algebra`: replaced “global ray quotient” with the supplier's exact object, the global quotient by complete characteristic lines, and reconciled its proof-contract summary wording.
- `thm-rpm-h-spinless-kks-identification`: updated the H8 context to name the quotient by characteristic lines, and reconciled its proof-contract quotation with the current moment-map statement.
- A-page summary: defined “caustic” by characteristic-projection failure and stated the resulting continuation limit explicitly. B-page prose was not edited.

For all six changed items, reflow completed with `unchanged` output and precheck passed. The required final proof-layout command was run once on all six paths, but the renderer failed before item rendering because it could not resolve `@/components` from `web/components/library/ItemBody.tsx`; no proof-layout pass is claimed.

No changed item had a stale `verification.judge` record to remove. Proof derivation mappings were unchanged except for the updated HJ-trajectory step 2.1 contract entry.

## Uneditable findings

1. `thm-rpm-h-second-class-dirac-bracket`, proof step 4.1: with the declared convention `\{F,G\}=X_G(F)`, the proof computes `X_F^D(G)` but identifies it with `\{F,G\}_D`. It is `\{G,F\}_D`, the negative of the stated bracket. For example, on `T*R²` with constraints `q₂=p₂=0` and observables `F=q₁`, `G=p₁`, the restricted bracket is `\{F,G\}_D=1`, while `X_F^D(G)=-1`. The statement's Dirac-bracket formula is consistent with the convention; the proof step needs its Hamiltonian-field arguments reversed. This current-run batch-25 dependency reaches assigned consumer `thm-rpm-h-poincare-moment-map-and-algebra` through the inertial-time reduction. I did not edit batch 25. HRT equation (1.21) gives the standard bracket formula; the local sign check above is independent of it.

2. `thm-rpm-h-temporal-shell-reduction`, Statement at the definitions of `κ`, `p₀`, and `H(t,q,p)`: the cited chart definition gives `N, β, h` as functions on the chart domain whose first coordinate is `x⁰` in metres. H9 later fixes `x⁰=ct`, but the formulas do not explicitly define the physical-time pullback or its domain. The intended substitution is inferable from that gauge condition, yet the function arguments remain unstated in the supplier. Assigned consumer `pthm-rpm-h-hj-trajectories` directly depends on H9; I made the pullback explicit in that consumer but could not edit H9. H9 changed during review: the first observed raw digest was `2dba3a6b12fe27bac8ad11f53eb434223c5eb206464eaf6802c0055313fa8f9c`; I reopened the current carrier, whose digest at split is `7c84dc67965486ff6714e38c2091ea6a54cdd5b8c94fb44b2396a4212d521c75`. The finding describes only the current bytes; the earlier version is not bound to an immutable producer snapshot.

## Page verdicts

- `rpm-symmetries-hamilton-jacobi`: the assigned definitions, conditional model postulate, orbit/KKS claims, conservation results, and HJ arguments are supported by the stated premises on their declared domains. The current-run Dirac-bracket proof issue and temporal-chart argument-clarity issue remain routed dependencies. Verdict: reviewed with dependency holds.
- `rpm-symmetries-hamilton-jacobi-examples`: the explicit boost-algebra counterexample, regular two-shell witness, caustic calculation, and free complete-integral calculation check under their stated assumptions. Several examples inherit the Dirac-bracket dependency hold through H8. The B-page summary's “caustic” usage is defined on its required A page. Verdict: reviewed with a dependency hold.

## Blockers and coverage limits

The only mechanical blocker was proof-layout's renderer import failure described above. All assigned carriers and both pages were read. I checked the mathematical clauses actually used from direct suppliers and consulted the cited passages listed above; this was not a whole-library audit of every transitive proof behind published foundational items. No empirical data, experimental uncertainty, or statistical inference was present in this batch.
