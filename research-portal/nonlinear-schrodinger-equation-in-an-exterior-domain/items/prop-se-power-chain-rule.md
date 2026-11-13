---
id: prop-se-power-chain-rule
kind: proposition
domain: mathematics
title: Power nonlinearity preserves the zero-boundary energy space
status: published
deps:
  - def-se-internal-systems
  - def-se-foundation-integer-sobolev-notation
  - def-se-dirichlet-scale
  - lem-se-exterior-dirichlet-realization
  - lem-se-complex-polynomial-energy-rule
  - math:def-axiom-of-choice
dependency_roles:
  def-se-internal-systems: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  lem-se-exterior-dirichlet-realization: mathematical-premise
  lem-se-complex-polynomial-energy-rule: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose that $\Omega=\mathbb R^n\setminus\Theta$ is connected. Let $m\in\{3,5\}$, $\lambda\in\mathbb R\setminus\{0\}$, and $g(z)=\lambda|z|^{m-1}z$. Let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega;\mathbb C)$ in the complex weak-derivative norm $\|u\|_{H^1}^2=\|u\|_2^2+\sum_{j=1}^n\|D_ju\|_2^2$. The $L^\infty$ norm is the essential supremum. For $v\in H^1_0(\Omega)\cap L^\infty(\Omega)$, $g(v)\in H^1_0(\Omega)$ and, almost everywhere,

$$\nabla g(v)=\lambda\left(\frac{m+1}{2}|v|^{m-1}\nabla v+\frac{m-1}{2}|v|^{m-3}v^2\nabla\overline v\right).$$

With the displayed $H^1$ norm on $H^1_0(\Omega)$,

$$\|g(v)\|_{H^1_0}\le m|\lambda|\,\|v\|_{L^\infty}^{m-1}\|v\|_{H^1_0}.$$

This is also the norm of $v$ in the spectral space $H_D^1(\Omega)$ associated with $I-\Delta_D$.

## Statement references

[[def-se-internal-systems]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-dirichlet-scale]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement.

[F1] The complex polynomial energy rule [[lem-se-complex-polynomial-energy-rule]] applies under Choice on any open subset of Euclidean space. For bounded $H^1$ functions it supplies the weak derivative formula for $\lambda v^a\overline v^b$, with $a=(m+1)/2$ and $b=(m-1)/2$, and it preserves $H^1_0$.

[F2] The weak Sobolev norm and the zero-boundary closure are as in [[def-se-foundation-integer-sobolev-notation]]. The exterior geometry and the nonlinear function $g$ are those of [[def-se-internal-systems]], and the assumed Choice is recorded by [[math:def-axiom-of-choice]].

[F3] The Dirichlet scale [[def-se-dirichlet-scale]] uses $H_D^1=D((I-\Delta_D)^{1/2})$. The exterior Dirichlet realization [[lem-se-exterior-dirichlet-realization]] identifies this space with $H^1_0(\Omega)$ and its spectral norm squared with $\|u\|_2^2+\sum_j\|D_ju\|_2^2$.

## Proof

**Given:** The hypotheses and notation in the Statement.

[F1] The complex polynomial energy rule [[lem-se-complex-polynomial-energy-rule]] applies under Choice on any open subset of Euclidean space. For bounded $H^1$ functions it supplies the weak derivative formula for $\lambda v^a\overline v^b$, with $a=(m+1)/2$ and $b=(m-1)/2$, and it preserves $H^1_0$.

[F2] The weak Sobolev norm and the zero-boundary closure are as in [[def-se-foundation-integer-sobolev-notation]]. The exterior geometry and the nonlinear function $g$ are those of [[def-se-internal-systems]], and the assumed Choice is recorded by [[math:def-axiom-of-choice]].

[F3] The Dirichlet scale [[def-se-dirichlet-scale]] uses $H_D^1=D((I-\Delta_D)^{1/2})$. The exterior Dirichlet realization [[lem-se-exterior-dirichlet-realization]] identifies this space with $H^1_0(\Omega)$ and its spectral norm squared with $\|u\|_2^2+\sum_j\|D_ju\|_2^2$.



**Given:** The hypotheses and data in the Statement.

**Goal:** Prove zero-boundary preservation, the gradient formula, and the stated norm estimate.

1.1 Put $a=(m+1)/2$ and $b=(m-1)/2$. These are positive integers, and $v^a\overline v^b=|v|^{m-1}v$. The exterior is open, so the polynomial energy rule applies to $v$ and gives $g(v)\in H^1_0(\Omega)$ and $D_jg(v)=\lambda(a v^{a-1}\overline v^bD_jv+bv^a\overline v^{b-1}\overline{D_jv})$ almost everywhere. Since $v^{a-1}\overline v^b=|v|^{m-1}$ and $v^a\overline v^{b-1}=|v|^{m-3}v^2$, this is the displayed gradient formula; $D_j\overline v=\overline{D_jv}$ in the weak sense. [F1, F2, given, algebra]

2.1 Set $M=\|v\|_{L^\infty}$. The formula in step 1.1 and $a+b=m$ give $|D_jg(v)|\le m|\lambda|M^{m-1}|D_jv|$ almost everywhere. Also $|g(v)|\le |\lambda|M^{m-1}|v|$. Squaring, integrating and summing the value and derivative bounds yields $\|g(v)\|_{H^1_0}\le m|\lambda|M^{m-1}\|v\|_{H^1_0}$, including the case $M=0$. The form-norm identity in [F3] gives the final spectral-norm assertion. [F2, F3, step 1.1, algebra] ∎

## Source notes

The article is cited for attribution of the polynomial identity, gradient formula and estimate in Proposition 3.9. The proof above uses the separately supplied polynomial energy rule and Dirichlet realization.
