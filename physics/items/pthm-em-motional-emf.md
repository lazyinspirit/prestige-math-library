---
id: pthm-em-motional-emf
kind: physics-theorem
title: "Motional emf for a moving material circuit: emf = -flux derivative"
domain: physics
status: draft
origin: session
dependency_level: 19
proof_strategy: direct
deps:
  - def-em-moving-circuit-geometry
  - lem-em-moving-flux
  - def-em-fixed-test-geometry
  - pthm-em-integral-maxwell
  - def-em-fields
  - def-em-si-conventions
  - def-em-sources
  - post-em-vacuum-maxwell
  - post-em-lorentz-coupling
  - def-euclidean-inner-product
  - thm-linearity-of-the-integral
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - def-countable-choice
  - lem-em-parameter-integrals
  - lem-riemann-lebesgue-comparison-for-distribution-test-integrands
  - thm-the-classical-stokes-theorem-for-a-c2-surface-patch
  - def-positive-orientation-for-elementary-region-boundaries
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - lem-the-divergence-and-curl-of-a-cross-product
dependency_roles:
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  thm-the-classical-stokes-theorem-for-a-c2-surface-patch: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  def-em-moving-circuit-geometry: formulation-prerequisite
  lem-em-moving-flux: mathematical-premise
  def-em-fixed-test-geometry: formulation-prerequisite
  pthm-em-integral-maxwell: physical-result
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  post-em-lorentz-coupling: physical-assumption
  def-euclidean-inner-product: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "§4.1.1 printed pp. 69-71 (the general moving loop C(t) with velocity field v and the swept-surface derivation of dPhi/dt = -∮(E+v×B)·dr); read in the retained complete text of the 236-page printing."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "§7.1.3 printed pp. 294-296 (the moving loop, the emf as the line integral of the force per unit charge and the flux rule for motional emf); read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: "§4.2 printed pp. 104-108 (Faraday's law in the form emf around a closed loop equals minus the rate of change of magnetic flux, with the fixed-loop integral identity obtained from Stokes' theorem); read in the fetched complete 364-page course book."
physical_scope: "The moving-loop flux rule for the strict branch of the adopted framework: a C2 embedded material sheet swept over a compact finite elementary Green region with a single-valued C1 material velocity, in a jointly C2 vacuum-Maxwell field branch on a compact subinterval with no singularity crossing. It asserts no formula for loops crossing singular sources, no fixed-loop formula for arbitrary moving loops, no field uniqueness and no empirical claim; the Lorentz reading of the integrand is the adopted coupling and is not used in the algebraic identity."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]], inherited from the Maxwell and transport suppliers below. Let $\Omega\times I$ be the laboratory region with $c>0$, $\varepsilon_0$, $\mu_0$ the constants of [[def-em-si-conventions]]; let $E,B$ be fields and $\rho,J$ source fields of [[def-em-fields]] and [[def-em-sources]], jointly of class $C^2$ and $C^1$ respectively on $\Omega\times I$, satisfying the smooth branch of [[post-em-vacuum-maxwell]] pointwise on $\Omega\times I$. Let $(D,r,v)$ be a moving material circuit of [[def-em-moving-circuit-geometry]] with time interval $I$, and fix a compact subinterval $K\subseteq I$ such that the swept set $r(D\times K)$ is compactly contained in $\Omega$ (no singularity crossing). Put $S(t)=r(D,t)$ and let $\gamma_t$ be the oriented boundary chain of (b) of the definition, with trace $C(t)=\partial S(t)$.

Then the flux $\Phi_B:I\to\mathbb R$ of [[def-em-moving-circuit-geometry]] is differentiable at every $t\in I$ with
$$\Phi_B'(t)=\int_{S(t)}\partial_tB(\cdot,t)\cdot n\,dS-\oint_{C(t)}(v\times B)(\cdot,t)\cdot d\mathbf r,$$
for every $t\in K$ each elementary-piece frozen patch $(D_i,r(\cdot,\cdot,t)|_{D_i})$ is a test geometry of [[def-em-fixed-test-geometry]], the fixed-patch Faraday identity
$$\int_{S(t)}\partial_tB(\cdot,t)\cdot n\,dS=-\oint_{C(t)}E(\cdot,t)\cdot d\mathbf r$$
holds, and consequently the electromotive force of the circuit satisfies
$$\mathrm{emf}(t)=\oint_{C(t)}(E+v\times B)(\cdot,t)\cdot d\mathbf r=-\Phi_B'(t)\qquad\text{for every }t\in K.$$
For subluminal material speeds and the external test-charge premises of [[post-em-lorentz-coupling]](i) with the tensor and worldline conventions in [[def-em-moving-circuit-geometry]](c), $E+v\times B$ is the instantaneous laboratory momentum force per unit nonzero charge. Its oriented circulation equals minus the flux derivative; this adds a force interpretation without asserting a charge's actual work along a spacetime traversal of the circuit. The result is conditional on the joint regularity, the smooth Maxwell branch and the no-singularity-crossing hypothesis; it asserts no fixed-loop formula for arbitrary moving loops, no field uniqueness, no statement about singular supports and no empirical claim.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the laboratory region $U\cong I\times\Omega$, constants $c>0,\varepsilon_0>0,\mu_0>0$, fields $E,B$ jointly $C^2$ and sources $\rho,J$ of class $C^1$ satisfying the smooth branch of the vacuum Maxwell equations pointwise on $\Omega\times I$, a moving material circuit $(D,r,v)$ with time interval $I$, and a compact subinterval $K\subseteq I$ with the swept set $r(D\times K)$ compactly contained in $\Omega$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] A moving material circuit is the data $(D,r,v)$: $D$ a compact finite elementary Green region with its positive boundary chain, $r:D\times I\to\Omega$ extending to a $C^2$ map on a neighbourhood of $D\times I$ with $r_u\times r_v\ne0$ on the interior of $D$ and $r(\cdot,t)$ injective on $D$ for every $t\in I$, and $v$ a $C^1$ single-valued velocity field with $v(r(u,w,t),t)=\partial_tr(u,w,t)$ on a neighbourhood of the swept set. ([[def-em-moving-circuit-geometry]]).

[F2] The electromotive force of the circuit at $t$ is the vector line integral $\mathrm{emf}(t)=\oint_{\gamma_t}\langle E(\cdot,t)+v(\cdot,t)\times B(\cdot,t),d\mathbf r\rangle$ over the oriented boundary chain $\gamma_t$ with trace $C(t)=r(\partial D,t)$, in the piecewise $C^1$ convention, with unit V; the definition asserts no relation between emf and $\Phi_B'$. ([[def-em-moving-circuit-geometry]]).

[F3] The transport formula needed here is established in step 1.1 from the explicitly typed circuit data and the calculus and Stokes suppliers below. [[lem-em-moving-flux]] supplies the general parametrized formula; the present argument independently derives the identity for the explicitly typed material circuit.

[F4] A patch test geometry in $\Omega$ is a regular $C^2$ surface patch $(D,r)$ over a finite elementary Green region: $D\subseteq\mathbb R^2$ finite elementary Green region, $r$ of class $C^2$ on an open neighbourhood of $D$, $r_u\times r_v\ne0$ on the interior of $D$, and no interior parameter point shares its image with a distinct point of $D$; its induced boundary chain is $r(\partial D)$ with the circulation of the piecewise $C^1$ convention, and its oriented flux is $\int_SF\cdot n_S\,dS=\int_D(F\circ r)\cdot(r_u\times r_v)\,dudv$. ([[def-em-fixed-test-geometry]]).

[F5] Assume the smooth branch of the vacuum Maxwell postulate holds pointwise with $E,B$ jointly $C^2$ and $\rho,J$ of class $C^1$. Then for every patch test geometry $(D,r)$ the flux functions $t\mapsto\int_SB(\cdot,t)\cdot n_S\,dS$ and $t\mapsto\int_SE(\cdot,t)\cdot n_S\,dS$ are differentiable on $I$ and, for every $t\in I$, $\oint_{\partial S}E(\cdot,t)\cdot d\mathbf r=-\frac{d}{dt}\int_SB(\cdot,t)\cdot n_S\,dS$. ([[pthm-em-integral-maxwell]]).

[F6] A field of class $C^k$ is a map $\Omega\times I\to\mathbb R^3$ of class $C^k$; $E$ carries V m$^{-1}$ and $B$ carries T. ([[def-em-fields]]).

[F7] The framework adopts the SI constants $c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$, with time in seconds and the emf unit V; no numerical value of $\mu_0$ is asserted. ([[def-em-si-conventions]]).

[F8] The source fields $\rho$ (C m$^{-3}$) and $J$ (A m$^{-2}$) are maps on $\Omega\times I$. ([[def-em-sources]]).

[F9] In the smooth branch, jointly $C^1$ fields with the additional derivatives required by each equation existing and continuous and continuous sources satisfy $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ pointwise. ([[post-em-vacuum-maxwell]]).

[F10] The adopted coupling gives the continuum force density $\rho E+J\times B$ for matter interacting with the field through an explicitly stated matter model, and the covariant per-charge equation of motion for a test charge; the nonrelativistic coordinate statement is not adopted as exact. ([[post-em-lorentz-coupling]]).

[F11] The Euclidean inner product is additive in each argument: $\langle x+y,z\rangle=\langle x,z\rangle+\langle y,z\rangle$. ([[def-euclidean-inner-product]]).

[F12] For $a<b$ and integrable $f,g$ on $[a,b]$, $f+g$ is integrable and $\int_a^b(f+g)=\int_a^bf+\int_a^bg$. ([[thm-linearity-of-the-integral]]).

[F13] For a piecewise $C^1$ path $\gamma:[a,b]\to\mathbb R^n$ with $a<b$ and a continuous vector field $F$ on a set containing the trace, $\int_\gamma F\cdot d\mathbf r:=\sum_i\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt$; the value is independent of the admissible partition. ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).



[F14] For a compact measurable parameter set and an integrand with continuous time derivative on its neighbourhood, differentiation passes through its Lebesgue integral on a compact nondegenerate time interval ([[lem-em-parameter-integrals]]). Under $\mathrm{AC}_\omega$, bounded Borel Riemann-integrable functions on a rectangle have equal Riemann and Lebesgue integrals; this includes zero extensions of continuous integrands from compact Jordan regions ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F15] Stokes on each admissible regular $C^2$ elementary patch gives the curl flux as the circulation of its induced boundary chain ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]). Internal pairs of arcs cancel in the positive finite Green boundary chain ([[def-positive-orientation-for-elementary-region-boundaries]]).

[F16] The chain, product and mixed-partial rules apply to the stated $C^2$ map; for $C^1$ spatial fields, $\operatorname{curl}(v\times B)=v\operatorname{div}B-B\operatorname{div}v+(D_xv)B-(D_xB)v$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[lem-the-divergence-and-curl-of-a-cross-product]]).

## Proof

**Proof technique:** direct differentiation on the parameter region and finite-piece Stokes.

1.1 Write $a=r_u\times r_w$ and $h(p,t)=\langle B(r(p,t),t),a(p,t)\rangle$. These functions have continuous time derivatives on a neighbourhood of $D\times I$. Fix any $t\in I$ and a compact nondegenerate time interval around it contained in $I$; [F14], with the Riemann/Lebesgue comparison on a bounding rectangle, gives $\Phi_B'(t)=\int_D\partial_th\,dp$. Put $M=D_xv$. Compatibility and [F16] give $\partial_t r_u=Mr_u$, $\partial_t r_w=Mr_w$. The elementary determinant identity $\det[Mq_0,q_1,q_2]+\det[q_0,Mq_1,q_2]+\det[q_0,q_1,Mq_2]=\operatorname{tr}(M)\det[q_0,q_1,q_2]$ follows by expanding in the three columns and checking the standard-basis triples (repeated indices cancel; distinct indices give the trace). With $q_0=B$, $q_1=r_u$, $q_2=r_w$ it yields $\langle B,\partial_ta\rangle=\langle (\operatorname{div}v)B-MB,a\rangle$. Thus [F16] gives $\partial_th=\langle\partial_tB+(D_xB)v+(\operatorname{div}v)B-(D_xv)B,a\rangle=\langle\partial_tB+v\operatorname{div}B-\operatorname{curl}(v\times B),a\rangle$. Here all spatial derivatives are at fixed laboratory time on the open time slice of $W\cap(\Omega\times I)$. Since $\operatorname{div}B=0$ by [F9], integrating and applying [F15] on each elementary piece, then cancelling oppositely oriented internal arcs, gives $\Phi_B'(t)=\int_{S(t)}\partial_tB\cdot n\,dS-\oint_{\gamma_t}(v\times B)\cdot d\mathbf r$. Parameter integrals add over the pieces because they have disjoint interiors and null boundaries; [F14] transfers this finite Lebesgue additivity to the Riemann integrals. This argument applies at every $t\in I$. [F1, F2, F6, F9, F14, F15, F16, algebra]

1.2 Fix $t\in K$. Every elementary $D_i$ is the closure of its nonempty connected interior, hence is a compact Jordan parameter region. The frozen restriction of $r$ is $C^2$, has nonzero parameter cross product on that interior, and is injective, so it is a patch test geometry of [F4]. Apply [F5] to each such fixed spatial patch, differentiating its flux with respect to a separate field time $s$ and evaluating at $s=t$. Sum the resulting identities and cancel internal arcs as in [F15]. This gives $\int_{S(t)}\partial_tB(\cdot,t)\cdot n\,dS=-\oint_{\gamma_t}E(\cdot,t)\cdot d\mathbf r$. The separate variable $s$ keeps this fixed-patch derivative distinct from the moving flux derivative. [F1, F4, F5, F6, F8, F9, F14, F15, algebra]

2.1 On each arc of $\gamma_t$, additivity of the Euclidean pairing [F11] and Riemann integral linearity [F12] split the line integral of $E+v\times B$ into those of $E$ and $v\times B$; summing the arcs gives $\mathrm{emf}=\oint_{\gamma_t}E\cdot d\mathbf r+\oint_{\gamma_t}(v\times B)\cdot d\mathbf r$ by [F2] and [F13]. Substitution of step 1.2 into step 1.1 proves $\mathrm{emf}(t)=-\Phi_B'(t)$ for every $t\in K$. [F2, F11, F12, F13, step 1.1, step 1.2, algebra]

3.1 The claimed differentiability, transport formula, elementary-piece test geometries, fixed-patch Faraday formula and emf identity follow from steps 1.1–2.1. The transport identity agrees with the general parametrized formula of [F3]. The additional subluminal external-test-charge reading is the local coordinate-force calculation of [[def-em-moving-circuit-geometry]](c) from [[post-em-lorentz-coupling]](i); it does not replace relativistic momentum by $mv$ and is unused in the integral algebra. Countable Choice is carried through the comparison and Maxwell interfaces. The regular fields and compact swept graph on $D\times K$ exclude singularity crossings. No empirical or full matter-dynamical assertion is made. [A1, F3, F6, F7, F10, F14, step 1.1, step 1.2, step 2.1] ∎

## Source notes

Tong §4.1.1, printed pp. 69–71, gives the moving-loop transport signs and emf convention. The strict regularity and finite-piece proof are supplied locally.
