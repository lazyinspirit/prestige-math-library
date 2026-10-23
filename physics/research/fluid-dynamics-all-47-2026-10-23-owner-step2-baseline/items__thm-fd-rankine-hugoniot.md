---
id: thm-fd-rankine-hugoniot
kind: theorem
title: Vector Rankine–Hugoniot condition
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-piecewise-traces
  - def-fd-conservation-system
  - def-distributional-derivative
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
dependency_roles:
  def-fd-piecewise-traces: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  def-distributional-derivative: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.1 and Chapter IV §4.3"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$).

Let $I\subseteq\mathbb R$ be open, $\Omega\subseteq\mathbb R^d$ be open, $\mathcal O\subseteq\mathbb R^m$ be open and convex, and $F_j\in C^1(\mathcal O;\mathbb R^m)$. Let $n\in\mathbb R^d$ have $|n|=1$, let $s\in\mathbb R$, and let $\Sigma=\{(t,x)\in I\times\Omega:n\cdot x=st\}$. Suppose $U$ is piecewise $C^1$ across $\Sigma$, satisfies $\partial_tU+\sum_j\partial_{x_j}(F_j(U))=0$ pointwise on both open sides, and $U,F_j(U)\in L^1_{\mathrm{loc}}$. With $[G]=G_R-G_L$, the distributional residual is
$$\partial_tU+\sum_{j=1}^d\partial_{x_j}F_j(U)=\left(\sum_{j=1}^dn_j[F_j(U)]-s[U]\right)\delta_\Sigma,$$
where the pairing of $A\delta_\Sigma$ with a test $\varphi$ is $\int_I\int_{\{x\in\Omega:n\cdot x=st\}}A(t,x)\cdot\varphi(t,x)\,d\mathcal H^{d-1}(x)\,dt$. Consequently, $U$ solves the conservation system in distributions if and only if
$$s[U]=\sum_{j=1}^dn_j[F_j(U)]\quad\text{at every point of }\Sigma.$$
This is a vector equality; no division by the vector jump is made.

## Statement references

[[def-fd-piecewise-traces|piecewise smooth traces and jump convention]]

[[def-fd-conservation-system|distributional conservation-system formulation]]

[[def-distributional-derivative|distributional derivative convention]]

[[thm-linear-change-of-variables-for-lebesgue-measure|linear change of variables for Lebesgue measure]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini theorem for integrable functions]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the open cylinder, fluxes, planar interface, piecewise $C^1$ field, and classical equations on the two open sides in the Statement.

[F1] [[def-fd-piecewise-traces]] defines $\Sigma$, its open sides, the one-sided traces $U_L,U_R$, and $[G]=G_R-G_L$. The side fields have $C^1$ extensions near each interface point.

[F2] [[def-fd-conservation-system]] defines the distributional residual by its action on compactly supported smooth vector tests; the derivative convention pairs a derivative with the negative test derivative.

[F3] [[def-distributional-derivative]] defines $\langle\partial_jT,\varphi\rangle=-\langle T,\partial_j\varphi\rangle$ for a distribution $T$.

[F4] [[thm-linear-change-of-variables-for-lebesgue-measure]]: under Countable Choice, an invertible linear transformation preserves Lebesgue integrals up to its absolute determinant.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits the iterated integrals of an integrable function on a sigma-finite product space.

[A1] On each open side of $\Sigma$, $U$ satisfies the classical equation $\partial_tU+\sum_j\partial_{x_j}(F_j(U))=0$ pointwise.

[A2] Countable Choice is assumed as in [F4].

## Proof

1.1 Fix a test $\varphi\in C_c^\infty(I\times\Omega;\mathbb R^m)$. In a local orthogonal spatial chart write $x=y+(st+r)n$, with $y\in n^\perp$ and $r=n\cdot x-st$. The resulting affine coordinate map $(t,y,r)\mapsto(t,x)$ has absolute determinant $1$; [F4] therefore gives the volume change and [F5] permits iterated integration of the compactly supported integrands. Let $H(r)=1$ for $r>0$ and $H(r)=0$ for $r<0$. By [F3], one-dimensional integration by parts in $r$ gives, for every $C^1$ coefficient field $a$, $\partial_t(aH)=H\partial_ta-s\,a|_\Sigma\delta_\Sigma$ and $\partial_{x_j}(aH)=H\partial_{x_j}a+n_j\,a|_\Sigma\delta_\Sigma$, where $\delta_\Sigma$ pairs with $dt\,d\mathcal H^{d-1}_x$ on the spatial plane. The time derivative is at fixed $x$, so in this chart $\partial_t|_x=\partial_t|_{y,r}-s\partial_r$; this produces the factor $-s$ and the stated normalization. Tangential spatial derivatives have no boundary term, while the normal derivative contributes $n_j$. [given, F1, F2, F3, F4, F5, A2, algebra]

2.1 On a neighborhood of $\Sigma$, write $U=U_L+[U]H$ and $F_j(U)=F_j(U_L)+[F_j(U)]H$, using the $C^1$ side extensions from [F1]. Apply the derivative formulas of step 1.1. The regular terms are the classical residuals on the two open sides, hence vanish by the given equations; the remaining interface term is $\left(\sum_jn_j[F_j(U)]-s[U]\right)\delta_\Sigma$. A partition of unity over the compact support of $\varphi$ gives the same formula throughout $I\times\Omega$. [given, A1, F1, step 1.1]

3.1 If the coefficient vanishes on $\Sigma$, the residual distribution is zero. Conversely, if it is nonzero at a point of $\Sigma$, continuity of the traces gives a neighborhood on which one component has a fixed strict sign. A nonnegative compactly supported test in that interface patch, placed in the corresponding vector component, has a nonzero pairing with the residual, contradicting that it is the zero distribution. If $\Sigma$ is empty in the cylinder, the equivalence is vacuous. Thus the residual vanishes exactly when the vector Rankine–Hugoniot equality holds pointwise on $\Sigma$. [given, F1, step 2.1] ∎
