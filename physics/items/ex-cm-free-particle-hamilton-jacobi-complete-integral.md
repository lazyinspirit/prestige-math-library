---
id: ex-cm-free-particle-hamilton-jacobi-complete-integral
kind: example
title: "The free particle: the complete integral $S=q\\alpha-t\\alpha^2/(2m)$, its characteristics and its canonical labels"
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-hamilton-jacobi-equation-and-complete-integral, thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, def-pullback-of-a-differential-form, def-wedge-product-of-differential-forms, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-interval, def-metric-topology]
dependency_roles:
  def-cm-hamilton-jacobi-equation-and-complete-integral: mathematical-premise
  thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-interval: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 (the free particle as the simplest Hamilton-Jacobi example), printed pages 121-126"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4 (Jacobi's complete integral and worked Hamilton-Jacobi examples)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Let $m>0$ and let $H:\mathbb R\times\mathbb R\times\mathbb R\to\mathbb R$,
$H(t,q,p):=p^2/(2m)$, be the free-particle Hamiltonian
([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]), and let
$S:\mathbb R\times\mathbb R\times\mathbb R\to\mathbb R$, $S(t,q,\alpha):=q\alpha-t\alpha^2/(2m)$. Then:

1. $S$ solves the Hamilton-Jacobi equation $S_t+H(t,q,S_q)=0$ on $\mathbb R^3$ and is a complete
   integral at every point, with $S_{q\alpha}=1$
   ([[def-cm-hamilton-jacobi-equation-and-complete-integral]]);
2. the Jacobi constants are $\beta:=S_\alpha=q-t\alpha/m$, so the characteristics are
   $q(t)=\beta+t\alpha/m$ with momentum $p=\alpha$; these satisfy $q'=p/m$, $p'=0$, and $\beta$ is
   constant along them ([[thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral]]);
3. on $\mathbb R^3$ at fixed $t$ one has $dq\wedge dp=d\beta\wedge d\alpha$: the pair $(\beta,\alpha)$
   is canonically conjugate to $(q,p)$.

## Facts & Assumptions

**Given:** The mass $m>0$, the free-particle Hamiltonian $H=p^2/(2m)$ and the function $S=q\alpha-t\alpha^2/(2m)$ on $\mathbb R^3$.

[F1] Partial derivatives ([[def-directional-and-partial-derivatives]]): $S_t=-\alpha^2/(2m)$, $S_q=\alpha$, $S_\alpha=q-t\alpha/m$, $S_{q\alpha}=1$.

[F2] Complete integral and characteristics ([[def-cm-hamilton-jacobi-equation-and-complete-integral]], [[thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral]]): a $C^3$ function with $S_t+H(t,q,S_q)=0$ and $\det S_{q\alpha}\ne0$ is a complete integral, and the characteristic equations $q'=H_p(t,q,S_q)$, $p=S_q$ then satisfy Hamilton's equations, with $S_\alpha$ constant.

[F3] Two-form calculus ([[def-cm-phase-domain-and-standard-symplectic-two-form]], [[def-pullback-of-a-differential-form]], [[def-wedge-product-of-differential-forms]]): on a phase domain with coordinates $(q,p)$ the standard form is $dq\wedge dp$, and $d\beta\wedge d\alpha$ is computed from the differentials $dq,d\alpha$ by bilinearity and alternation.

## Verification

**Proof technique:** direct; compute the derivatives, check the Hamilton-Jacobi equation and the characteristics, then compare the two two-forms.

1.1 By [F1], $S_t+H(t,q,S_q)=-\alpha^2/(2m)+\alpha^2/(2m)=0$ on $\mathbb R^3$; since $S_{q\alpha}=1\ne0$, $S$ is a complete integral at every point by [F2], proving clause 1. [F1, F2, algebra]

1.2 Clause 2: by [F1], $\beta=S_\alpha=q-t\alpha/m$, so for fixed $\alpha$ and $\beta$ the characteristic curve is $q(t)=\beta+t\alpha/m$ with $p(t)=S_q=\alpha$; then $q'=\alpha/m=H_p(t,q,p)$ and $p'=0=-H_q$, and $\beta$ is constant along the curve by construction. [F1, F2, algebra]

2.1 Clause 3: at fixed $t$, $d\beta=dq-(t/m)d\alpha$ and $dp=d\alpha$; hence $d\beta\wedge d\alpha=(dq-(t/m)d\alpha)\wedge d\alpha=dq\wedge d\alpha=dq\wedge dp$, since $d\alpha\wedge d\alpha=0$. [F3, step 1.2, algebra] ∎
