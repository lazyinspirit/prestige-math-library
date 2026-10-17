---
id: thm-qsm-dt-algebraic-kubo
kind: theorem
title: Bounded C-star Dyson response for finite-range spin dynamics
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-consistent-local-states
  - thm-qsm-finite-range-spin-dynamics
  - lem-qsm-dt-banach-volterra-dyson
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  lem-qsm-dt-banach-volterra-dyson: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorem 3.3.12 and proof, printed pp. 69–71
      url: https://arxiv.org/pdf/1311.2717
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.2"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Use $\Gamma=\mathbb Z^d$, $d\ge1$, finite on-site dimension $q\ge1$, and a uniformly bounded finite-range interaction $\Phi$ with parameters $M\ge1$, $R<\infty$, $\kappa<\infty$, and $\hbar>0$ as in [[def-qsm-bounded-finite-range-interaction]]. Assume Countable Choice and the exact finite-matrix C$^*$-identity condition supplied in [[lem-qsm-finite-matrix-cstar-and-state-duality]]. Let $\mathcal A$ be the norm-completed quasi-local spin algebra of [[def-qsm-quasilocal-spin-algebra]], and let $\alpha_t$ be the strongly continuous automorphism group of [[thm-qsm-finite-range-spin-dynamics]]. Let $\{\rho_\Lambda\}$ be consistent positive trace-one local density matrices; write $\phi$ for their unique state extension supplied by [[lem-qsm-consistent-local-states]], and additionally assume $\phi\circ\alpha_t=\phi$ for every $t\in\mathbb R$. This is an algebraic state on $\mathcal A$, not a trace-class density on an infinite tensor-product Hilbert space.

For $A\in\mathcal A$, $B=B^*\in\mathcal A$, continuous real $h:[0,T]\to\mathbb R$, finite $T>0$, and dimensionless $\epsilon\in\mathbb R$, put $B_t=\alpha_t(B)$ and let $W_\epsilon$ solve
$$W_\epsilon'(t)=\frac{i\epsilon h(t)}{\hbar}B_tW_\epsilon(t),\qquad W_\epsilon(0)=I.$$
The C$^*$-algebra Dyson solution is unitary. Define $\alpha_t^\epsilon(A)=W_\epsilon(t)^*\alpha_t(A)W_\epsilon(t)$,
$$R_{AB}(u)=\frac{i}{\hbar}\phi([\alpha_u(A),B]),\qquad C_T=\frac2\hbar\int_0^T|h(s)|\,\|B\|\,ds.$$
Then
$$\phi(\alpha_t^\epsilon(A))=\phi(\alpha_t(A))+\epsilon\int_0^t h(s)R_{AB}(t-s)\,ds+r_\epsilon(t),\qquad |r_\epsilon(t)|\le\|A\|\frac{(|\epsilon|C_T)^2e^{|\epsilon|C_T}}2.$$
When energy is the interpretation of $H_\Lambda$ and $hB$, their units are J, $t$ is s, $\hbar$ is J s, and $C_T$ is dimensionless. No global trace Hamiltonian, spatial-to-temporal decay implication, or dc coefficient follows.

## Facts & Assumptions

**Given:** Countable Choice, the finite local spin system and interaction, the finite-matrix identity, the completed quasi-local algebra and group, consistent local densities, an invariant extension $\phi$, bounded $A,B$, continuous $h$, and finite $T$.

[A1] [[def-countable-choice]]: Countable Choice is used for the norm-completion construction; no full Axiom of Choice is assumed here.

[F1] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: every nonzero finite local matrix algebra with its induced norm satisfies $\|T^*T\|=\|T\|^2$.

[F2] [[def-qsm-bounded-finite-range-interaction]]: $\Phi(Z)$ is self-adjoint, vanishes for $|Z|>M$ or diameter above $R$, has per-site norm sum $\kappa$, and defines the free-boundary finite-volume Hamiltonians.

[F3] [[def-qsm-quasilocal-spin-algebra]]: $\mathcal A$ is the norm completion of the directed union of finite local matrix algebras, with no selected global tensor-product Hilbert space.

[F4] [[lem-qsm-consistent-local-states]]: consistent positive trace-one local densities extend uniquely to a bounded normalized positive functional $\phi$ on $\mathcal A$.

[F5] [[thm-qsm-finite-range-spin-dynamics]]: under [A1] and [F1]–[F3], the finite-volume dynamics converge to a strongly continuous one-parameter group $\alpha_t$ of isometric $*$-automorphisms.

[F6] [[lem-qsm-dt-banach-volterra-dyson]]: on a unital C$^*$-algebra, a norm-continuous skew-adjoint coefficient has a unique unitary Dyson solution; on a Banach space, the Volterra series has the stated norm remainder.

## Proof


**Proof technique:** apply the Volterra series to the dual Banach space of bounded functionals and identify its solution with unitary conjugation.

**Given:** [A1], [F1]–[F6], and the invariant-state condition in the Statement.

1.1 The finite-range group application uses Countable Choice [A1], the local matrix C$^*$ identity [F1], the finite-range interaction [F2], the quasi-local completion [F3], and the exact group conclusion [F5]. The extension $\phi$ exists by [F4]. Since $t\mapsto\alpha_t(B)$ is norm-continuous by [F5], $B_t$ is norm-continuous and $K_t^*(\psi)(X):=\frac{i h(t)}{\hbar}\psi([X,B_t])$ is a norm-continuous bounded operator on the continuous dual $\mathcal A^*$. Its norm is at most $2|h(t)|\|B\|/\hbar$, because automorphisms are isometric and $\|[X,B_t]\|\le2\|X\|\|B\|$. The dual $\mathcal A^*$ is complete: a Cauchy sequence of bounded functionals has pointwise scalar limits, and the uniform Cauchy bound passes to that limit in the dual norm. [given, A1, F1, F2, F3, F4, F5, algebra]


2.1 By [F6], the initial functional $\phi$ has a unique Volterra solution $\psi_\epsilon(t)$ in $\mathcal A^*$ with first-order term $\epsilon\int_0^tK_s^*(\phi)\,ds$ and remainder dual norm at most $(|\epsilon|C_T)^2e^{|\epsilon|C_T}/2$, since $\|\phi\|=1$. The C$^*$-algebra clause of [F6] gives a norm-differentiable unitary $W_\epsilon$. Differentiating $X\mapsto\phi(W_\epsilon(t)^*XW_\epsilon(t))$ shows this functional solves the same dual Volterra equation, so uniqueness gives $\psi_\epsilon(t)(X)=\phi(W_\epsilon(t)^*XW_\epsilon(t))$. [given, F4, F6, step 1.1, algebra]


3.1 Evaluate the first-order functional term at $X=\alpha_t(A)$. It is $\frac{i\epsilon}{\hbar}\int_0^t h(s)\phi([\alpha_t(A),B_s])\,ds$. The group law gives $[\alpha_t(A),B_s]=\alpha_s([\alpha_{t-s}(A),B])$, and invariance of $\phi$ removes $\alpha_s$. This is the stated convolution. [given, F5, step 2.1, algebra]


4.1 Since $\|\alpha_t(A)\|=\|A\|$, evaluating the dual-norm remainder from step 2.1 at $\alpha_t(A)$ gives the bound in the Statement. If $A=A^*$ as well as $B=B^*$, positivity and Hermiticity of $\phi$ make $R_{AB}(u)$ real. [given, F4, step 2.1, step 3.1, algebra] ∎