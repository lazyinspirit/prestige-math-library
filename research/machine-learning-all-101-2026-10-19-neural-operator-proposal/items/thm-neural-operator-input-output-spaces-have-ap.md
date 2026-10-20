---
id: thm-neural-operator-input-output-spaces-have-ap
kind: theorem
title: The neural-operator input and output spaces have the approximation property
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-countable-choice
  - def-approximation-property-and-bounded-approximation-property
  - lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains
  - def-sobolev-space-wkp-and-its-norm
  - lem-sobolev-norm-is-well-defined-and-definite
  - thm-riesz-fischer-completeness-of-l-p
  - thm-holder-inequality-for-integrals
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf
      locator: "Appendix B, Lemma 26 and complete proof, printed/PDF pp. 78–80"
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be a bounded Lipschitz domain. Each of the real spaces $L^p(D)$ for $1\le p<\infty$, $W^{m,p}(D)$ for $m\in\mathbb N$ and $1\le p<\infty$, and $C^m(\bar D)$ for $m\in\mathbb N_0$ has the approximation property: on every norm-compact subset, the identity can be approximated uniformly by bounded finite-rank linear maps. Here the $C^m$ norm is the maximum of the uniform norms of the derivatives through order $m$, extended continuously to $\bar D$. The same conclusion holds for the output-space list with its dimension and regularity parameters.

## Statement references

[[def-countable-choice]]

[[def-approximation-property-and-bounded-approximation-property]]

[Kovachki et al., Lemma 26](https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain and one of the listed real function spaces.

[F1] For every listed space, every norm-compact set and every positive error, a bounded finite-rank map with that compact-uniform error exists, with range consisting of restrictions of compactly supported ambient smooth functions ([[lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains]]).

[F2] AP for a Banach space means uniform approximation of the identity on each norm-compact subset by bounded finite-rank linear maps ([[def-approximation-property-and-bounded-approximation-property]]).

[F3] Under Countable Choice, the integer-order Sobolev formula is a norm and $W^{0,p}=L^p$, and real $L^p$ is complete ([[def-sobolev-space-wkp-and-its-norm]], [[lem-sobolev-norm-is-well-defined-and-definite]], [[thm-riesz-fischer-completeness-of-l-p]]).

[F4] Hölder bounds the integral pairing by the product of conjugate norms, including conjugate exponents $1$ and $\infty$ ([[thm-holder-inequality-for-integrals]]).

[F5] For a continuously differentiable real curve on a compact interval, the integral of its derivative is its endpoint difference; a continuous integrand has its integral as a differentiable primitive ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

**Choice use:** Countable Choice supplies the $L^p$ completeness and weak-derivative interfaces in [F3], the calculus interface [F5], and the inward-mollification lemma [F1]. The final passage to AP makes no additional selections from infinite families.

## Proof

1.1 The listed Sobolev spaces are Banach under the stated Countable Choice hypothesis. Indeed, let $(u_n)$ be Cauchy in $W^{m,p}(D)$. By [F3], for each of the finitely many $|\alpha|\le m$, $D^\alpha u_n$ converges in $L^p$ to a class $v_\alpha$; put $u=v_0$. For any $\phi\in C_c^\infty(D)$, its derivatives are bounded with compact support, hence belong to the conjugate $L^{p'}$ space, including $p'=\infty$ when $p=1$. By [F4], both integrals in $\int_Du_nD^\alpha\phi=(-1)^{|\alpha|}\int_DD^\alpha u_n\phi$ converge to the corresponding integrals of $u$ and $v_\alpha$. Thus $v_\alpha$ is the weak derivative $D^\alpha u$ by [F3], so $u\in W^{m,p}(D)$, and the finite norm sum gives $u_n\to u$ in that norm. This includes $m=0$, which gives $L^p(D)$. [F3, F4, given, construct]

1.2 The listed $C^m(\bar D)$ spaces are Banach as well. If $(u_n)$ is Cauchy in their norm, every derivative sequence has a uniform limit $g_\alpha$ on $\bar D$: pointwise real completeness gives the limit, and the uniform Cauchy estimate gives uniform convergence. Each $g_\alpha$ is continuous, since for a positive error one first approximates it uniformly by a fixed continuous $D^\alpha u_n$ and then applies continuity of that fixed function. Put $u=g_0$. For $|\alpha|<m$, an interior point $x$, and a coordinate direction $e_i$, take $h$ small enough that the segment $x+[0,h]e_i$ lies in $D$. By [F5], $D^\alpha u_n(x+he_i)-D^\alpha u_n(x)=\int_0^hD^{\alpha+e_i}u_n(x+se_i)\,ds$. Uniform convergence passes this identity to $g_\alpha(x+he_i)-g_\alpha(x)=\int_0^h g_{\alpha+e_i}(x+se_i)\,ds$, since the integral error is bounded by $|h|$ times the uniform error. By [F5], $\partial_i g_\alpha=g_{\alpha+e_i}$. Induction in $|\alpha|$ yields $D^\alpha u=g_\alpha$ in $D$ through order $m$, with the continuous extensions already supplied on $\bar D$. Thus $u\in C^m(\bar D)$ and $u_n\to u$ in norm. For $m=0$ only the uniform-limit continuity argument is needed. The displayed maximum is a norm because its order-zero term detects zero functions and the remaining norm axioms hold termwise. [F5, given, construct, algebra]

2.1 Fix one listed space $X$, a norm-compact $K\subseteq X$, and $\varepsilon>0$. Its Banach-space status was established in the two preceding steps. Apply [F1], using $W^{0,p}=L^p$ in the Lebesgue case, to obtain a bounded finite-rank $F:X\to X$ with $\sup_{u\in K}\|Fu-u\|_X<\varepsilon$. These are exactly the quantified requirements of [F2], so every listed space has AP, including every $p=1$ case. [F1, F2, F3, step 1.1, step 1.2, given]

3.1 The argument in step 2.1 holds for every Euclidean dimension, every nonnegative integer regularity and every finite exponent in the stated ranges. Applying it with the output dimension and output regularity parameters proves the output-space clause. The proof establishes AP for $C^m(\bar D)$ without any basis assertion. [step 2.1, given] ∎
