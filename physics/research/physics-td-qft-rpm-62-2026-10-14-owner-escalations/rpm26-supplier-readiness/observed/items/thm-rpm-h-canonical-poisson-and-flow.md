---
id: thm-rpm-h-canonical-poisson-and-flow
kind: theorem
title: "Canonical Poisson brackets and local Hamiltonian flow"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-cotangent-phase-space, thm-smooth-functions-form-a-poisson-algebra, thm-smooth-dependence-of-ode-solutions-on-parameters]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  thm-smooth-functions-form-a-poisson-algebra: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
sources:
  references:
    - title: "David Tong, Classical Dynamics, complete Cambridge lecture notes, §§4.1.1–4.1.2 and §4.3"
      url: "https://www.damtp.cam.ac.uk/user/dt281/dynamics/clas.pdf"
      locator: "Printed pp. 82–84 and 93–95."
physical_scope: "Mathematical cotangent phase space; physical dimensions are interpreted only when a model assigns units to coordinates and observables."
---

## Statement

Let $Q$ be a finite-dimensional smooth manifold as in [[def-rpm-h-cotangent-phase-space]], and write its cotangent phase space in induced coordinates $(q^i,p_i)$. With $omega=dq^i\wedge dp_i$, define $X_H$ by $iota_{X_H}omega=dH$ and ${F,G}:=X_G(F)$. Then

$$X_H=\frac{\partial H}{\partial p_i}\frac{\partial}{\partial q^i}-\frac{\partial H}{\partial q^i}\frac{\partial}{\partial p_i},\qquad \{F,G\}=F_{q^i}G_{p_i}-F_{p_i}G_{q^i}.$$

The bracket is coordinate independent and makes smooth functions a Poisson algebra. If $H_t$ is $C^2$ on an open time-dependent domain $D\subset\mathbb R\times T^*Q$, each solution of $\dot z=X_{H_t}(z)$ has the local uniqueness and smooth parameter dependence of the ODE theorem; on its actual interval,

$$\frac{d}{dt}F(t,z(t))=\partial_tF+\{F,H_t\}.$$

No completeness or global flow is asserted. If $H$ is smooth, each local time-$t$ flow map preserves ω.

## Facts & Assumptions

**Given:** $Q$, its canonical symplectic cotangent phase space, a smooth $H$, and where used a $C^2$ time-dependent Hamiltonian $H_t$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-cotangent-phase-space]]: in induced coordinates ω=∑ dq^i∧dp_i; observables are smooth real functions.

[F2] [[thm-smooth-functions-form-a-poisson-algebra]]: the symplectic bracket is coordinate independent, skew, bilinear, satisfies Leibniz and Jacobi.

[F3] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: a $C^1$ locally Lipschitz vector field has unique local solutions, and a smooth vector field depending smoothly on initial data and parameters has smooth local solution dependence.

## Proof

1.1 Write $X_H=A^i\partial_{q^i}+B_i\partial_{p_i}$. Contraction gives ι$_{X_H}\omega=A^i dp_i-B_i dq^i$. Equating with $dH=H_{q^i}dq^i+H_{p_i}dp_i$ yields $A^i=H_{p_i}$, $B_i=-H_{q^i}$. [given, A1, F1, algebra]

1.2 Substitution into $X_G(F)$ gives the displayed coordinate bracket. Its intrinsic definition from ω makes the formula invariant under cotangent coordinate changes; [F2] supplies the Poisson identities. [given, F1, F2, step 1.1, algebra]

2.1 Along a solution, the chain rule gives $dF/dt=F_t+dF(X_{H_t})$; the definition of the bracket and skewness give $dF(X_{H_t})=X_{H_t}(F)=\{F,H_t\}$. [given, F2, step 1.1, calculus]

2.2 The coordinate Hamilton vector field is $C^1$ for $C^2$ $H_t$, hence locally Lipschitz; applying [F3] to the open domain yields unique local solutions and smooth dependence wherever solutions remain in that domain. This conclusion says nothing about extension beyond that interval. [given, F3, step 1.1]

3.1 For smooth autonomous $H$, $d\omega=0$ and $\iota_{X_H}\omega=dH$ imply $\mathcal L_{X_H}\omega=d\iota_{X_H}\omega+\iota_{X_H}d\omega=d^2H=0$; differentiating the pullback along the local flow therefore gives zero, and its initial value is ω, so the flow preserves ω. [given, F1, step 1.1, calculus] ∎
