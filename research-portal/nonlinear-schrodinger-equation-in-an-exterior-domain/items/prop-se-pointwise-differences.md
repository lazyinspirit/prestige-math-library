---
id: prop-se-pointwise-differences
kind: proposition
domain: mathematics
title: Pointwise and energy difference estimates for odd powers
status: published
deps:
  - prop-se-power-chain-rule
  - lem-se-complex-polynomial-energy-rule
  - def-se-foundation-integer-sobolev-notation
  - math:def-axiom-of-choice
dependency_roles:
  prop-se-power-chain-rule: mathematical-premise
  lem-se-complex-polynomial-energy-rule: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 15–16, proof of Proposition 3.9
dependency_level: 9
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose that $\Omega=\mathbb R^n\setminus\Theta$ is connected. Let $m\in\{3,5\}$, $\lambda\in\mathbb R\setminus\{0\}$, and $g(z)=\lambda|z|^{m-1}z$. Write $H^1_0(\Omega)$ for the closure of $C_c^\infty(\Omega;\mathbb C)$ in the norm $\|w\|_{H^1}=(\|w\|_2^2+\sum_{j=1}^n\|D_jw\|_2^2)^{1/2}$, where $D_j$ denotes the weak derivative. The $L^\infty$ norm is the essential supremum, and $|\nabla w|=(\sum_j|D_jw|^2)^{1/2}$.

There is a constant $C$ depending only on $m$ and $|\lambda|$ such that, for $u,v\in H^1_0(\Omega)\cap L^\infty(\Omega)$, $g(v)-g(u)\in H^1_0(\Omega)$ and almost everywhere

$$|g(v)-g(u)|\le C(|v|^{m-1}+|u|^{m-1})|v-u|,$$

$$|\nabla(g(v)-g(u))|\le C(|v|^{m-1}+|u|^{m-1})|\nabla(v-u)|+C(|v|^{m-2}+|u|^{m-2})(|\nabla v|+|\nabla u|)|v-u|.$$

Consequently, with the displayed norm on $H^1_0(\Omega)$,

$$\|g(v)-g(u)\|_{H^1_0}\le C(\|v\|_\infty^{m-1}+\|u\|_\infty^{m-1})\|v-u\|_{H^1_0}+C(\|v\|_\infty^{m-2}+\|u\|_\infty^{m-2})(\|v\|_{H^1_0}+\|u\|_{H^1_0})\|v-u\|_\infty.$$

## Statement references

[[prop-se-power-chain-rule]]

[[lem-se-complex-polynomial-energy-rule]]

[[def-se-foundation-integer-sobolev-notation]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement.

[F1] The complex Sobolev norm, weak derivatives, essential-supremum convention and zero-boundary closure are as in [[def-se-foundation-integer-sobolev-notation]]. The assumed Axiom of Choice is recorded in [[math:def-axiom-of-choice]].

[F2] Under these hypotheses [[prop-se-power-chain-rule]] gives $g(u),g(v)\in H^1_0(\Omega)$ and the weak gradient formula for $g$.

[F3] The polynomial energy rule [[lem-se-complex-polynomial-energy-rule]] applies under Choice on open sets to bounded $H^1$ functions. It gives $D_jg(w)=\lambda(a w^{a-1}\bar w^bD_jw+bw^a\bar w^{b-1}\overline{D_jw})$, where $a=(m+1)/2$ and $b=(m-1)/2$, and supplies the corresponding $H^1$ difference estimate.

## Proof

**Given:** The hypotheses and notation in the Statement.

[F1] The complex Sobolev norm, weak derivatives, essential-supremum convention and zero-boundary closure are as in [[def-se-foundation-integer-sobolev-notation]]. The assumed Axiom of Choice is recorded in [[math:def-axiom-of-choice]].

[F2] Under these hypotheses [[prop-se-power-chain-rule]] gives $g(u),g(v)\in H^1_0(\Omega)$ and the weak gradient formula for $g$.

[F3] The polynomial energy rule [[lem-se-complex-polynomial-energy-rule]] applies under Choice on open sets to bounded $H^1$ functions. It gives $D_jg(w)=\lambda(a w^{a-1}\bar w^bD_jw+bw^a\bar w^{b-1}\overline{D_jw})$, where $a=(m+1)/2$ and $b=(m-1)/2$, and supplies the corresponding $H^1$ difference estimate.



**Given:** The hypotheses and functions in the Statement.

**Goal:** Establish the two pointwise inequalities and the energy-norm inequality.

1.1 Put $h=v-u$, $a=(m+1)/2$ and $b=(m-1)/2$. Since $g(z)=\lambda z^a\bar z^b$, telescope the $m$ factors in $v^a\bar v^b-u^a\bar u^b$. Each summand has one factor $h$ or $\bar h$ and $m-1$ factors chosen from $u,\bar u,v,\bar v$. Hence $|g(v)-g(u)|\le m|\lambda|(|u|+|v|)^{m-1}|h|$. The elementary inequality $(x+y)^r\le 2^{r-1}(x^r+y^r)$ for $x,y\ge0$ and integer $r\ge1$ gives the first displayed bound. By [F2], both nonlinear terms lie in $H^1_0$, so their difference does as well. [F1, F2, given, algebra]

2.1 In the derivative formula of [F3], the two coefficient polynomials have degree $m-1$ in $w$ and $\bar w$. Their absolute values are bounded by a constant times $|w|^{m-1}$; telescoping their factors shows that each coefficient difference between $v$ and $u$ is bounded by a constant times $(|v|^{m-2}+|u|^{m-2})|h|$. Subtract the two formulas, writing each derivative of $v$ as the corresponding derivative of $u$ plus that of $h$. The triangle inequality in $\mathbb C^n$ then yields the stated gradient inequality, after increasing $C$; conjugation does not change the vector norm. [F3, step 1.1, algebra]

3.1 Take $L^2$ norms in the value and gradient inequalities, bound the coefficients and $h$ by their essential suprema, and use the triangle inequality for the value-and-gradient vector defining the $H^1$ norm. This gives the displayed energy bound, with a possibly larger $C$ depending only on $m$ and $|\lambda|$. The same norm inequality is also supplied directly by [F3]; [F1] identifies the norm on the zero-boundary subspace. [F1, F3, step 1.1, step 2.1, algebra] ∎

## Source notes

The article is cited for attribution of the pointwise and energy difference bounds used in Proposition 3.9. The argument above uses the separately supplied weak polynomial rule and zero-boundary preservation, not the article's claim as a premise.
