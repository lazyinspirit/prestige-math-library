---
id: lem-divisor-order-monotonicity-sections
kind: lemma
title: Monotonicity of L(D) in the divisor
status: draft
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-order-codimension-one-rational-function
  - def-principal-weil-divisor-and-class-group
  - def-riemann-roch-space-of-divisor
  - def-residue-field-scheme-point
  - lem-quotient-basis-lifts-to-an-adapted-basis
  - lem-riemann-roch-space-finite-dimensional
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-dimension-of-a-linear-subspace
  - thm-first-isomorphism-theorem-for-vector-spaces
  - thm-local-ring-smooth-curve-dvr
  - thm-rank-nullity
  - thm-line-bundle-rational-section-cartier-divisor
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the local-DVR, divisor and
finite-dimensionality suppliers. Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) and let $D\le E$ be divisors on
$C$ ([[def-divisor-smooth-proper-curve]]), so that $E-D$ is effective. Then
$L(D)\subseteq L(E)$ as $k$-subspaces of the function field $k(C)$;
equivalently, the natural morphism of invertible subsheaves of the constant
sheaf of rational functions $\mathcal O_C(D)\to\mathcal O_C(E)$ is injective.

If in addition $E=D+p$ for a single closed point $p$, choose a uniformizer
$t$ of $\mathcal O_{C,p}$ and put $a=n_p(D)$. The canonical evaluation map
from $L(D+p)=H^0(C,\mathcal O_C(D+p))$ to the fiber
$\mathcal O_C(D+p)|_p$ has, in the frame $t^{-a-1}$, the coordinate
$$L(D+p)\longrightarrow\kappa(p),\qquad f\longmapsto t^{a+1}f\bmod(t).$$
In this chosen coordinate its kernel is $L(D)$, so the quotient $L(D+p)/L(D)$
embeds $k$-linearly into $\kappa(p)$. The coordinate map depends on the chosen
uniformizer; the kernel and dimension bound do not. Consequently
$$\dim_kL(D+p)/L(D)\le[\kappa(p):k].$$

In particular
$$l(D)\le l(E)\le l(D)+\deg_k(E-D)$$
for all divisors $D\le E$ ([[def-little-l-divisor]],
[[def-degree-divisor-proper-curve]]).

The current interfaces
[[def-riemann-roch-space-of-divisor]],
[[def-principal-weil-divisor-and-class-group]],
[[def-invertible-sheaf-of-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]] supply the spaces, divisors and
sheaves used below. The Cartier-to-Weil route requires Dependent Choice, which
the stated Axiom of Choice supplies through
[[thm-choice-implies-dependent-implies-countable-choice]]. The rational-section
identification uses [[thm-line-bundle-rational-section-cartier-divisor]].

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the local-DVR, divisor and finite-dimensionality suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over $k$, and divisors $D\le E$ on $C$.

[F1] A divisor on $C$ is a finite formal sum $D=\sum_xn_x[x]$ over the closed points of $C$ with integer coefficients; $D\le E$ means that the coefficients satisfy $n_x\le m_x$ for all $x$, equivalently that $E-D$ is effective; the degree is additive, $\deg_k(E-D)=\sum_x(m_x-n_x)[\kappa(x):k]$, the sum over the finite support, and each residue field $\kappa(x)$ is a finite extension of $k$ with $[\kappa(x):k]=\dim_k\kappa(x)\ge1$ ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]], [[def-divisor-support-positive-negative-parts]]).

[F2] The current [[def-riemann-roch-space-of-divisor]] identifies $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ as a $k$-subspace of $k(C)$ with the image of $H^0(C,\mathcal O_C(D))$. It uses the principal Weil divisor interface [[def-principal-weil-divisor-and-class-group]], the local-equation construction [[def-invertible-sheaf-of-cartier-divisor]], and the curve Cartier-to-Weil identification [[thm-cartier-weil-divisors-curves-agree]]. The latter's Dependent Choice premise is supplied by AC through [[thm-choice-implies-dependent-implies-countable-choice]]. The rational-section dictionary [[thm-line-bundle-rational-section-cartier-divisor]] identifies the global sections with the stated rational functions. These interfaces give the section and stalk descriptions used below.

[F3] For a normal locally Noetherian integral scheme the order along a prime divisor is a group homomorphism $\operatorname{ord}_Z:K(X)^\times\to\mathbb Z$ with $\operatorname{ord}_Z(fg)=\operatorname{ord}_Z(f)+\operatorname{ord}_Z(g)$ and $\operatorname{ord}_Z(f^{-1})=-\operatorname{ord}_Z(f)$, and on an integral scheme $\operatorname{ord}_Z(f)\ge0$ if and only if $f$ lies in the local ring, with equality to zero exactly for units ([[def-order-codimension-one-rational-function]]). The closed points of the smooth curve $C$ are its codimension-one points ([[def-divisor-smooth-proper-curve]]). For the order inequalities below only, put $\operatorname{ord}_x(0)=+\infty$; zero belongs to every $L(D)$ by [F2].

[F4] The local ring $\mathcal O_{C,p}$ of a closed point of the smooth curve $C$ is a discrete valuation ring with maximal ideal generated by a uniformizer $t$; every nonzero $f\in k(C)^\times$ is $f=t^{m}u$ with $m=\operatorname{ord}_p(f)\in\mathbb Z$ and $u$ a unit, and $\kappa(p)=\mathcal O_{C,p}/(t)$ is a field, the residue field, of $k$-dimension $[\kappa(p):k]$ ([[thm-local-ring-smooth-curve-dvr]], [[def-residue-field-scheme-point]], [[def-degree-divisor-proper-curve]]).

[F5] $L(D)=H^0(C,\mathcal O_C(D))$ is a finite-dimensional $k$-vector space and $l(D)=\dim_kL(D)=h^0(D)$ is a nonnegative integer; the same holds with $D$ replaced by $D+p$ ([[lem-riemann-roch-space-finite-dimensional]], [[def-little-l-divisor]], [[def-dimension]]).

[F6] Linear algebra over $k$: for a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_kV=\dim_k\ker T+\dim_k\operatorname{im}T$ ([[thm-rank-nullity]]); the formula $\widetilde T(v+\ker T)=T(v)$ defines a linear isomorphism $V/\ker T\to\operatorname{im}T$ ([[thm-first-isomorphism-theorem-for-vector-spaces]]); a subspace of a finite-dimensional space has dimension at most that of the ambient space ([[thm-dimension-of-a-linear-subspace]]); and for $W\le V$ with $V$ finite-dimensional, $\dim_k(V/W)=\dim_kV-\dim_kW$ ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

[F7] The Axiom of Choice enters through the DVR supplier of [F4], the finiteness suppliers of [F5] and the Cartier-to-Weil route of [F2]. In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]], supplying the DC premise of [[thm-cartier-weil-divisors-curves-agree]]. The chosen uniformizer in step 2.3 only specifies a coordinate on the fiber; the kernel is independent of it, and no additional choice principle is used ([[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct; read $L(D)$ through orders of vanishing at closed points, prove the containment and the one-point kernel computation via the local uniformizer, and iterate the one-point bound over the finite support of $E-D$.

1.1 Set-up and coefficients. By [F1] write $D=\sum_xn_x[x]$ and $E=\sum_xm_x[x]$ with $n_x\le m_x$ for every closed point $x$, both sums having finite support, and write $c_x:=m_x-n_x\ge0$ for the coefficient of $E-D$; the degree is $\deg_k(E-D)=\sum_xc_x[\kappa(x):k]$. [F1]

1.2 Order description of the Riemann-Roch space. By [F2], for $f\in k(C)^\times$ one has $f\in L(D)$ if and only if $\operatorname{div}(f)+D\ge0$, and by [F3] this is equivalent to the coefficientwise condition $\operatorname{ord}_x(f)+n_x\ge0$ for every closed point $x$; moreover $L(D)$ is a $k$-subspace of $k(C)$ and $0\in L(D)$. [F2, F3]

2.1 The sheaf picture. By [F2] the attached invertible sheaves are subsheaves $\mathcal O_C(D)\subseteq\mathcal O_C(E)\subseteq K_C$ of the constant sheaf of rational functions, with stalks cut out by the very order conditions of step 1.2 and with $H^0(C,\mathcal O_C(D))=L(D)$ and $H^0(C,\mathcal O_C(E))=L(E)$. [F2, step 1.2]

2.2 Monotonicity of the spaces. Let $f\in L(D)$. By step 1.2, $\operatorname{ord}_x(f)+n_x\ge0$ for every closed point $x$; since $n_x\le m_x$ by step 1.1, also $\operatorname{ord}_x(f)+m_x\ge0$ for every $x$, so $f\in L(E)$ by step 1.2 again. Hence $L(D)\subseteq L(E)$ as subsets of $k(C)$, and both are $k$-subspaces by [F2]. [F2, step 1.1, step 1.2]

2.3 The one-point case: the evaluation map. Now let $E=D+p$ for a single closed point $p$, and let $a:=n_p$ be the coefficient of $D$ at $p$. Choose a uniformizer $t$ of the discrete valuation ring $\mathcal O_{C,p}$. The canonical evaluation of sections of $\mathcal O_C(D+p)$ at $p$ has target fiber $\mathcal O_C(D+p)|_p$; in the local frame $t^{-a-1}$, its coordinate is $\varphi_t(f)=t^{a+1}f\bmod(t)\in\kappa(p)$. This coordinate description depends on $t$, but is well defined: $f\in L(D+p)$ gives $\operatorname{ord}_p(f)\ge-a-1$, hence $\operatorname{ord}_p(t^{a+1}f)\ge0$ and $t^{a+1}f\in\mathcal O_{C,p}$ by [F3] and [F4]. The map $\varphi_t:L(D+p)\to\kappa(p)$ is $k$-linear, since multiplication by $t^{a+1}$ and reduction modulo $(t)$ are $k$-linear on $\mathcal O_{C,p}$. [F3, F4, step 1.2]

2.4 Its kernel is $L(D)$. If $f\in L(D)$ then $\operatorname{ord}_p(f)\ge-a$, so $t^{a+1}f\in(t)$, and $\varphi(f)=0$. Conversely, if $\varphi(f)=0$ then $t^{a+1}f\in(t)$, that is, $\operatorname{ord}_p(t^{a+1}f)\ge1$, so $\operatorname{ord}_p(f)\ge-a$ by [F3]; for points $x\ne p$ the conditions $f\in L(D)$ and $f\in L(D+p)$ coincide because $D$ and $D+p$ have the same coefficients away from $p$; hence $f\in L(D)$ by step 1.2. Therefore $\ker\varphi=L(D)$. [F3, F4, step 1.2]

3.1 The morphism of invertible subsheaves. Both $\mathcal O_C(D)$ and $\mathcal O_C(E)$ are invertible subsheaves of the constant sheaf $K_C$ by [F2]; the stalkwise inclusion of step 2.1, given by the coefficientwise comparison of step 2.2, defines the natural morphism $\mathcal O_C(D)\to\mathcal O_C(E)$, which is injective on every stalk and hence on sections; the induced map on global sections is the inclusion $L(D)\subseteq L(E)$, and the dimension formula $l(D)\le l(E)$ follows from [F5] and [F6]. [F2, F5, F6, step 2.1, step 2.2]

3.2 The quotient embeds in the residue field. By step 2.4 and [F6] the first isomorphism theorem gives a $k$-linear isomorphism $L(D+p)/L(D)\to\operatorname{im}\varphi$, so $L(D+p)/L(D)$ embeds $k$-linearly into $\kappa(p)$; since $L(D+p)$ is finite-dimensional by [F5], rank-nullity together with the quotient formula gives $$\dim_kL(D+p)/L(D)=\dim_kL(D+p)-\dim_kL(D)=\dim_k\operatorname{im}\varphi\le\dim_k\kappa(p)=[\kappa(p):k],$$ the inequality by subspace monotonicity and the last equality by [F4]. In particular $l(D+p)=\dim_kL(D+p)\le l(D)+[\kappa(p):k]$. [F4, F5, F6, step 2.4]

4.1 Iteration over the support. Enumerate the finite support of $E-D$ as points $x_1,\dots,x_r$ and let $c_i=c_{x_i}\ge1$ be the multiplicities of step 1.1. Consider the finite chain of divisors starting at $D$ and adding one copy of $[x_i]$ at a time, $c_i$ times for each $i$, ending at $E$; every successive difference is a single closed point $q$, so step 3.2 applied to the pair of consecutive divisors gives an increase of $l$ by at most $[\kappa(q):k]$. Summing the $r$ chains of inequalities gives $l(E)\le l(D)+\sum_i c_i[\kappa(x_i):k]=l(D)+\deg_k(E-D)$ by step 1.1. [F1, step 1.1, step 3.2]

5.1 Conclusion and choice accounting. Step 2.2 gives $L(D)\subseteq L(E)$ and step 3.1 the injective morphism of invertible subsheaves together with $l(D)\le l(E)$; steps 2.3 and 2.4 identify $L(D)$ as the kernel of the evaluation $L(D+p)\to\kappa(p)$, step 3.2 embeds the quotient in $\kappa(p)$ with the bound $\dim_kL(D+p)/L(D)\le[\kappa(p):k]$, and step 4.1 gives $l(E)\le l(D)+\deg_k(E-D)$ in general. The Axiom of Choice is used only through the suppliers recorded in [F7], namely the DVR structure of [F4], the finiteness results of [F5], and the Cartier-to-Weil route of [F2]; no further selection is made above. [F7, step 2.2, step 3.1, step 3.2, step 4.1] ∎
