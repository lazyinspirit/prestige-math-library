---
id: ex-cm-flow-derivative-of-the-isotropic-oscillator
kind: example
title: "The isotropic oscillator: the explicit flow, $Y^{\\mathsf T}JY=J$ and $\\det Y=1$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, def-cm-phase-domain-and-standard-symplectic-two-form, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, def-sine-and-cosine-by-power-series, def-hessian-and-euclidean-critical-point, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix]
dependency_roles:
  prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.1-4.2 (the harmonic oscillator in phase space and the linearised flow), printed pages 80-92"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2 (phase-space flows of the harmonic oscillator)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Let $n=1$, $U=\mathbb R^2$ with coordinates $(q,p)$, and $H(q,p)=(p^2+q^2)/2$. Then:

1. $X_H=(p,-q)$ and its flow is
   $\Phi_t(q,p)=\bigl(q\cos t+p\sin t,\ -q\sin t+p\cos t\bigr)$, defined for all $t\in\mathbb R$;
2. the derivative $Y(t)=D\Phi_t(q,p)=\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}$
   satisfies $Y'(t)=J\,\mathrm{Hess}\,H\,Y(t)$, $Y(0)=I_2$,
   $Y(t)^{\mathsf T}J\,Y(t)=J$ and $\det Y(t)=1$ for all $t$, in accordance with
   [[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]].

## Facts & Assumptions

**Given:** The Hamiltonian $H(q,p)=(p^2+q^2)/2$ on $\mathbb R^2$ and the matrix $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

[F1] Hamiltonian field ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]): $H_q=q$, $H_p=p$, so $X_H=(H_p,-H_q)=(p,-q)$; hence the flow solves $q'=p$, $p'=-q$.

[F2] Trigonometric calculus ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[def-sine-and-cosine-by-power-series]]): $\sin'=\cos$, $\cos'=-\sin$, and $\Phi_t$ as displayed is the solution of the linear system with $\Phi_0=\mathrm{id}$, since differentiating the displayed expressions gives $q'=-q\sin t+p\cos t=p(t)$ and $p'=-q\cos t-p\sin t=-q(t)$.

[F3] The matrix identity ([[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]], [[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[def-hessian-and-euclidean-critical-point]]): for a $C^2$ Hamiltonian the flow derivative satisfies $Y'=J\,\mathrm{Hess}\,H\,Y$, $Y^{\mathsf T}JY=J$ and $\det Y=1$, the Hessian being the matrix of second partial derivatives; here $\mathrm{Hess}\,H=I_2$.

## Verification

**Proof technique:** direct; verify the displayed flow by differentiation and multiply the two-by-two matrices.

1.1 Clause 1: by [F1] the field is $X_H=(p,-q)$ and the flow solves the linear system; the displayed $\Phi_t$ satisfies $\Phi_0=\mathrm{id}$ and, by [F2], its derivatives are $q'=p(t)$ and $p'=-q(t)$, so by uniqueness it is the flow, defined for all real $t$. [F1, F2, algebra]

1.2 Clause 2: differentiating $Y(t)$ entrywise gives $Y'(t)=\begin{pmatrix}-\sin t&\cos t\\-\cos t&-\sin t\end{pmatrix}$, while $J\,\mathrm{Hess}\,H\,Y=JY=\begin{pmatrix}-\sin t&\cos t\\-\cos t&-\sin t\end{pmatrix}$; thus $Y'=JY$ with $Y(0)=I_2$. [F3, algebra]

2.1 The orthogonality of $Y(t)$ gives $Y^{\mathsf T}JY=J$ by direct multiplication, and $\det Y=\cos^2t+\sin^2t=1$; hence both conclusions of [F3] hold explicitly for this flow. [F3, step 1.2, algebra] ∎
