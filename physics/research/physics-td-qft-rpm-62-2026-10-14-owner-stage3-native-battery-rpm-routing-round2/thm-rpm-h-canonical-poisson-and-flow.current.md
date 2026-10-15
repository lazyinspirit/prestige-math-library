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
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, printed pp. 7–11: canonical Hamiltonian conventions in constrained mechanics."
    - title: "Ghanashyam Date, Lectures on Constrained Systems, arXiv:1010.2062"
      url: "https://arxiv.org/pdf/1010.2062"
      locator: "§§3–4, printed pp. 12–22: phase-space Poisson bracket convention."
physical_scope: "Mathematical cotangent phase space; physical dimensions are interpreted only when a model assigns units to coordinates and observables."
---

## Statement

Let $Q$ be a finite-dimensional smooth manifold as in [[def-rpm-h-cotangent-phase-space]], and write its cotangent phase space in induced coordinates $(q^i,p_i)$. With $\omega=dq^i\wedge dp_i$, define $X_H$ by $\iota_{X_H}\omega=dH$ and define the Poisson bracket by $\{F,G\}:=X_G(F)$. Then

$$X_H=\frac{\partial H}{\partial p_i}\frac{\partial}{\partial q^i}-\frac{\partial H}{\partial q^i}\frac{\partial}{\partial p_i},\qquad \{F,G\}=F_{q^i}G_{p_i}-F_{p_i}G_{q^i}.$$

The bracket is coordinate independent and makes smooth functions a Poisson algebra. If $H_t$ is smooth on an open time-dependent domain $D\subset\mathbb R\times T^*Q$, each solution of $\dot z=X_{H_t}(z)$ has local uniqueness and smooth dependence on initial data and parameters; on its actual interval,

$$\frac{d}{dt}F(t,z(t))=\partial_tF+\{F,H_t\}.$$

No completeness or global flow is asserted. If $H$ is smooth, each local time-$t$ flow map preserves ω.

## Facts & Assumptions

**Given:** $Q$, its canonical symplectic cotangent phase space, a smooth $H$, and where used a smooth time-dependent Hamiltonian $H_t$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-cotangent-phase-space]]: in induced coordinates $\omega=\sum_i dq^i\wedge dp_i$; observables are smooth real functions.

[F2] [[thm-smooth-functions-form-a-poisson-algebra]]: the symplectic bracket is coordinate independent, skew, bilinear, satisfies Leibniz and Jacobi.

[F3] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: a $C^1$ locally Lipschitz vector field has unique local solutions, and a smooth vector field depending smoothly on initial data and parameters has smooth local solution dependence.

## Proof

1.1 Write $X_H=A^i\partial_{q^i}+B_i\partial_{p_i}$. Contraction gives $\iota_{X_H}\omega=A^i dp_i-B_i dq^i$. Equating with $dH=H_{q^i}dq^i+H_{p_i}dp_i$ yields $A^i=H_{p_i}$, $B_i=-H_{q^i}$. [given, A1, F1, algebra]

2.1 Substitution into $X_G(F)$ gives the displayed coordinate bracket. Its intrinsic definition from ω makes the formula invariant under cotangent coordinate changes; [F2] supplies the Poisson identities. [given, F1, F2, step 1.1, algebra]

2.2 Along a solution, the chain rule gives $dF/dt=F_t+dF(X_{H_t})$; the definition of the bracket and skewness give $dF(X_{H_t})=X_{H_t}(F)=\{F,H_t\}$. [given, F2, step 1.1, algebra]

2.3 Smoothness of $H_t$ makes its coordinate Hamiltonian vector field smooth. Applying [F3] on the open domain yields unique local solutions and smooth dependence wherever solutions remain in that domain. This conclusion says nothing about extension beyond that interval. [given, F3, step 1.1]

3.1 For smooth autonomous $H$, let $z=(q,p)$ and let $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$, so that $\omega(u,v)=u^{\mathsf T}Jv$. By step 1.1, $X_H=J\nabla H$ and $DX_H=J K$, where $K=D^2H$ is symmetric. Hence $(DX_H)^{\mathsf T}J+JDX_H=K^{\mathsf T}J^{\mathsf T}J+J^2K=K-K=0$. For a local flow map $\phi_t$, its derivative $A(t)=D\phi_t(z)$ exists by [F3] and satisfies $\dot A=DX_H(\phi_t(z))A$. Therefore $\frac d{dt}(A^{\mathsf T}JA)=A^{\mathsf T}((DX_H)^{\mathsf T}J+JDX_H)A=0$. Since $A(0)=I$, $A(t)^{\mathsf T}JA(t)=J$, which is exactly $\phi_t^*\omega=\omega$ on the actual local flow domain. [given, F1, F3, step 1.1, algebra] ∎

