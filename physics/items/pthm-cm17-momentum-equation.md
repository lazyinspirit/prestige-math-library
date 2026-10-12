---
id: pthm-cm17-momentum-equation
kind: physics-theorem
title: "The momentum equation of the continuum model: local form rho D_t u = rho b + div sigma"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [post-cm17-momentum-balance, post-cm17-mass-balance, post-cm17-contact-force-model, pthm-cm17-continuity-equation, pthm-cm17-stress-matrix-and-symmetry, pthm-cm17-transport-and-material-derivative, thm-cm-local-momentum-balance, def-cm17-density-and-mass, def-cm17-traction-and-stress, def-cm17-continuum-body-and-units, def-cm-euclidean-spatial-calculus, def-cm-continuum-motion, def-countable-choice, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, def-interval]
dependency_roles:
  post-cm17-momentum-balance: physical-assumption
  post-cm17-mass-balance: physical-assumption
  post-cm17-contact-force-model: physical-assumption
  pthm-cm17-continuity-equation: physical-result
  pthm-cm17-stress-matrix-and-symmetry: physical-result
  pthm-cm17-transport-and-material-derivative: physical-result
  thm-cm-local-momentum-balance: mathematical-premise
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm17-traction-and-stress: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted mass-balance and momentum-balance postulates and on the Axiom of Countable Choice used by the transport and divergence machinery: the force-form balance on every admissible region, together with the continuity equation and the transport identity, is equivalent to the local momentum equation rho D_t u = rho b + div sigma on the current regions, where sigma is the stress matrix produced by the balance principles. The result is a conditional model deduction; it asserts no existence of solutions, no constitutive relation and no measured value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 4.4-4.6 (balance of momentum and the local field equations)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (the key equation of continuum dynamics, Eq. (7.25))"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let the model of [[post-cm17-momentum-balance]] be
given with the mass-balance postulate of [[post-cm17-mass-balance]]: a motion
$\chi$ with spatial velocity $u$ and material acceleration $a=D_tu$
([[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]]), a $C^1$
positive density field $\rho$ ([[def-cm17-density-and-mass]]), continuous
body forces and $C^1$ tractions ([[post-cm17-contact-force-model]]), and the
balance principles (F) and (T). Let $J_0\subseteq I$ have compact closure in
the time window. For localization, use the material subregions whose current images are bounded $C^1$ domains with closure in the open field domain ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]), with boundary surface integral as in [[def-surface-integral-on-a-compact-c-one-hypersurface]]; this class includes the inverse images of all sufficiently small current balls.

Let $\sigma$ be the stress matrix of
[[pthm-cm17-stress-matrix-and-symmetry]] on the current regions (whose
existence and symmetry follow from the same balance principles), and define
the row divergence

$$g_i:=\sum_{j=1}^{3}\partial_j\sigma_{ij}\qquad(i=1,2,3).$$

Then for every $(t,x)\in J_0\times\chi_t(B)$,

$$\rho(t,x)\,D_tu(t,x)=\rho(t,x)\,b(t,x)+g(t,x), \tag{M}$$

and for a symmetric $\sigma$ the row divergence $g$ coincides with the column
divergence, so (M) may be written $\rho D_tu=\rho b+\operatorname{div}\sigma$.
Conversely, with the same kinematics, positive density satisfying the continuity equation, and a $C^1$ symmetric stress representing the traction, (M) implies force balance (F) on every admissible region and integral momentum balance (L) on every admissible smooth material image. Thus these force and integral momentum formulations are equivalent to (M) under the stated regularity and continuity hypotheses. The statement is a conditional deduction from the adopted balances; it
asserts no solution existence, no boundary condition, no constitutive
relation and no empirical value.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the model fields; the mass-balance postulate; the balance principles (F) and (T); the admissibility of smooth current-image test regions, including inverse images of sufficiently small current balls.

[F1] Stress matrix and symmetry ([[pthm-cm17-stress-matrix-and-symmetry]]): on every bounded region inside the current configuration there is a unique continuous (indeed $C^1$) stress matrix with $t(t,y,n)=\sigma(t,y)n$, $t(t,y,-n)=-t(t,y,n)$ and $\sigma(t,y)^{\mathsf T}=\sigma(t,y)$.

[F2] Continuity equation and transport ([[pthm-cm17-continuity-equation]], [[pthm-cm17-transport-and-material-derivative]]): under the mass-balance postulate, $\partial_t\rho+\operatorname{div}(\rho u)=0$, and for every material subregion the componentwise transport identity holds for the field $\rho u_i$; together with the product rule this gives $\frac{d}{dt}\int_{\chi_t(B')}\rho u_i\,dx=\int_{\chi_t(B')}\rho\,(D_tu)_i\,dx$.

[F3] Local momentum balance ([[thm-cm-local-momentum-balance]]): if $\rho$ satisfies (K) $\partial_t\rho+\operatorname{div}(\rho u)=0$ on the current regions and if (L), for each $t\in J_0$ and material subregion whose current image is a bounded $C^1$ domain with closure in the field domain, $\frac{d}{dt}\int_{\chi_t(B')}\rho u\,dx=\int_{\chi_t(B')}\rho b\,dx+\int_{\partial\chi_t(B')}\sigma\nu\,dS$, then $\rho D_tu=\rho b+g$ on $J_0\times\chi_t(B)$ with $g_i=\sum_j\partial_j\sigma_{ij}$.

[F4] Balance in force form ([[post-cm17-momentum-balance]] clause (iii)): for every admissible region $D$ at time $t$, $\int_{\partial D}t(t,y,\nu_D)\,dS+\int_D(\rho b-\rho a)(t,y)\,dy=0$, with $a=D_tu$.

[F5] Algebra ([[def-cm-euclidean-spatial-calculus]], [[thm-algebra-of-derivatives]]): the product rule for the divergence and the componentwise computation of the row divergence; for a symmetric matrix the row and column divergences agree.

## Proof

**Proof technique:** direct; convert the force-form balance on material subregions into the integral momentum balance with the transport identity and the continuity equation, then instantiate the mathematical localization theorem.

1.1 Fix a material subregion $B'$ and $t\in J_0$. By hypothesis $\chi_t(B')$ is an admissible region at time $t$; the force balance [F4] with $D:=\chi_t(B')$ reads $\int_{\partial\chi_t(B')}t(t,y,\nu)\,dS+\int_{\chi_t(B')}(\rho b-\rho D_tu)\,dy=0$. Replacing $t(t,y,\nu)=\sigma(t,y)\nu$ by [F1] and rearranging gives $\int_{\chi_t(B')}\rho\,D_tu\,dy=\int_{\chi_t(B')}\rho b\,dy+\int_{\partial\chi_t(B')}\sigma\nu\,dS$. [given, F1, F4, algebra]

1.2 Conversely suppose (M) holds with the same continuous fields and a $C^1$ stress representing $t$. At fixed time extend the stress to the field neighborhood by its columns $\sigma e_j=t(e_j)$, which are $C^1$; on the current region this agrees with [F1], and continuity carries the traction identity to the boundary of every admissible $D\subseteq\Omega_t$. Apply [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] componentwise to these rows on $D$: $\int_{\partial D}\sigma\nu_D\,dS=\int_D g\,dx$. Integrating (M) therefore gives $\int_{\partial D}t\,dS+\int_D(\rho b-\rho a)dx=0$, precisely (F). On a smooth material image, [F2] identifies $\int_D\rho a$ with the derivative of its momentum integral, giving (L) too. This proves the converse without assuming either balance in that direction. [given, F1, F2, F5, algebra]

2.1 The transport identity of [F2] applied componentwise to the field $\rho u_i$ and the continuity equation give $\frac{d}{dt}\int_{\chi_t(B')}\rho u_i\,dx=\int_{\chi_t(B')}\bigl(\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)\bigr)dx=\int_{\chi_t(B')}\rho\,(D_tu)_i\,dx$; comparing with step 1.1 shows that the integral momentum balance (L) of [F3] holds for every material subregion and every $t\in J_0$. [given, step 1.1, F2, F5, algebra]

3.1 The continuity equation (K) of [F3] holds by [F2] under the mass-balance postulate, and the admissible test class includes inverse images of all sufficiently small current balls, whose images are bounded $C^1$ domains with closure in the field domain; step 2.1 supplies (L) for every such admissible pair. Applying [F3] therefore gives $\rho(t,x)D_tu(t,x)=\rho(t,x)b(t,x)+g(t,x)$ for every $(t,x)\in J_0\times\chi_t(B)$, with $g$ the row divergence. [given, step 2.1, F2, F3]

4.1 Reading: by [F1] the matrix $\sigma$ is symmetric, so $\sum_j\partial_j\sigma_{ij}=\sum_j\partial_j\sigma_{ji}$ and the row divergence equals the column divergence; with the dimensions of [[def-cm17-continuum-body-and-units]], both sides of (M) have dimension $\mu\ell^{-2}\tau^{-2}$ (force per volume), so the equation is dimensionally consistent. No further conclusion is drawn. [step 3.1, step 1.2, F1, F5, algebra] ∎

## Remarks

- **Two equivalent forms.** Steps 1.1-4.1 show that the force-form balance on
  material subregions, the continuity equation and the transport identity
  together are equivalent to the integral momentum balance (L); the local
  equation (M) is the localization of either form. In a model in which the
  mass balance carries source terms, the continuity equation changes and the
  equivalence with (M) is lost.

- **What is not claimed.** Equation (M) is an identity satisfied by any motion
  of the model; it neither asserts that motions exist for given data nor
  determines them without a constitutive law relating $\sigma$ to the
  motion. The elastic and fluid items below supply such laws, and the local
  well-posedness theorem of this page uses them.
