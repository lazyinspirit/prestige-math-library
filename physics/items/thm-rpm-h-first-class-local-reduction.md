---
id: thm-rpm-h-first-class-local-reduction
kind: theorem
title: "Regular first-class constraints admit local symplectic reduction"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-poisson-bracket-on-a-symplectic-manifold, def-countable-choice, def-rpm-h-regular-constraint-system, def-symplectic-form-and-symplectic-manifold, def-symplectic-orthogonal-complement, prop-symplectic-double-orthogonal-and-dimension-identities, thm-frobenius-local-coordinate-theorem, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-rpm-h-canonical-poisson-and-flow]
dependency_roles:
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-symplectic-orthogonal-complement: mathematical-premise
  prop-symplectic-double-orthogonal-and-dimension-identities: mathematical-premise
  thm-frobenius-local-coordinate-theorem: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
sources:
  references:
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, printed pp. 7–11."
physical_scope: "Local differential-geometric quotient only; no global Hausdorff quotient or global gauge-fixing assertion."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $(P^{2n},\omega)$ be symplectic, and let $N=\{\chi_1=\cdots=\chi_r=0\}$ be a regular embedded level surface with $\{\chi_a,\chi_b\}=0$ on $N$. Then $\ker(\omega|_N)$ is exactly the rank-$r$ distribution spanned by the restricted Hamiltonian vector fields $X_{\chi_a}$. This distribution is involutive. Around every point of $N$, its leaves admit smooth Frobenius coordinates $(s^1,\ldots,s^r,y^1,\ldots,y^{2n-2r})$, and the local leaf space has a unique smooth closed nondegenerate two-form $\omega_{\mathrm{red}}$ whose pullback is $\omega|_N$. Thus regular first-class constraints yield a local symplectic quotient. No global orbit-space regularity follows from these hypotheses.

## Facts & Assumptions

**Given:** A $2n$-dimensional symplectic manifold, a regular common level $N$, and constraints whose mutual brackets vanish on $N$.

[A1] [[def-countable-choice]]: assume countable choice ACω, the exact choice strength used by the cotangent smooth-structure supplier; no full axiom of choice is assumed.

[F1] [[def-rpm-h-regular-constraint-system]]: $T_zN=\cap_a\ker d\chi_a(z)$.

[F2] [[def-symplectic-form-and-symplectic-manifold]]: $\omega$ is a smooth closed nondegenerate two-form.

[F3] [[def-symplectic-orthogonal-complement]]: $W^\omega=\{v:\omega(v,w)=0\text{ for all }w\in W\}$, equivalently the inverse image of the annihilator under $\omega^\flat$.

[F4] [[prop-symplectic-double-orthogonal-and-dimension-identities]]: for each tangent subspace $W$, $\dim W+\dim W^\omega=\dim P$.

[F5] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: smooth linear ODEs have unique local solutions smoothly dependent on parameters.

[F6] [[thm-frobenius-local-coordinate-theorem]]: a smooth involutive rank-$r$ distribution has local coordinates in which leaves are the $s$-coordinate slices with $y$ constant.

[F7] [[def-poisson-bracket-on-a-symplectic-manifold]] defines $\{F,G\}=dF(X_G)=X_G(F)$ on any symplectic manifold, with $\iota_{X_H}\omega=dH$. Nondegeneracy makes $X_H$ unique, and inversion of the smooth nonsingular local matrix of $\omega$ makes it smooth. This agrees with the cotangent convention in [[thm-rpm-h-canonical-poisson-and-flow]].


## Proof

1.1 For $w\in T_zN$, [F1] gives $d\chi_a(w)=0$, hence $\omega(X_{\chi_a},w)=0$ and each $X_{\chi_a}\in(T_zN)^\omega$. The $d\chi_a$ are independent, so their images under the isomorphism $\omega^\flat$ are independent; therefore these $r$ vectors are independent. The level has codimension $r$, and [F4] gives $\dim(T_zN)^\omega=r$, so they span the symplectic orthogonal. [given, A1, F1, F2, F3, F4, F7, algebra]

2.1 On $N$, $d\chi_b(X_{\chi_a})=\{\chi_b,\chi_a\}=0$ by first-classness and [F7], so each $X_{\chi_a}$ is tangent. Their independence from step 1.1 implies $r\le\dim N=2n-r$, hence $r\le n$. The radical of the restricted form is $T_zN\cap(T_zN)^\omega$; since the orthogonal is already spanned by tangent $X_{\chi_a}$, this intersection is exactly that span. [given, F1, F2, F3, F7, step 1.1, algebra]

3.1 For smooth kernel fields $U,V$ and any tangent field $W$, apply $d\omega_N=0$ to $(U,V,W)$. All terms containing contractions with $U$ or $V$ vanish, leaving $\omega_N([U,V],W)=0$. Thus ([U,V]) is again in the kernel and the distribution is involutive. [given, F2, step 2.1, algebra]

4.1 The Frobenius frame proof solves a transverse linear matrix ODE to straighten a local frame. Its coefficients are smooth, so [F5] gives a smooth local solution in transverse coordinates; the initial matrix is identity, so its determinant remains nonzero after shrinking the coordinate neighborhood. The resulting frame is involutive and [F6] supplies local $(s,y)$ coordinates. This explicitly supplies the parameter dependence needed in that construction. [given, F5, F6, step 3.1]

5.1 Since every $\omega_N$-kernel vector is tangent to the $s$-leaves, the contraction of $\omega_N$ with $\partial_{s^a}$ vanishes. Therefore its coordinate expression has no $ds^a$ factor. [step 2.1, step 4.1, algebra]

6.1 In the Frobenius chart, step 5.1 writes $\omega_N=\tfrac12\sum_{i,j}\omega_{ij}(s,y)\,dy^i\wedge dy^j$. Since $d\omega_N=0$, the coefficient of each independent form $ds^a\wedge dy^i\wedge dy^j$ with $i<j$ is $\partial_{s^a}\omega_{ij}=0$. If the $y$-space has dimension less than two, the displayed two-form is zero and is already independent of $s$. Thus the coefficients define a form $\omega_{\mathrm{red}}$ on the local $y$-space, and the coordinate projection pulls it back to $\omega_N$; the remaining $dy$-components of $d\omega_N=0$ show $d\omega_{\mathrm{red}}=0$. Its kernel would lift to a vector in $TN$ orthogonal to all of $TN$, hence to the already-quotiented kernel, so $\omega_{\mathrm{red}}$ is nondegenerate. [given, F2, step 4.1, step 5.1, algebra] ∎

