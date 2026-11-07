---
id: thm-function-field-dynamical-height-growth-and-functional-equation
kind: theorem
title: Canonical height limit and functional equation for a rational map over a function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-dynamical-canonical-height-over-function-field
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - def-rational-map-on-projective-line-degree
  - thm-bezout-identity-for-polynomials
  - def-algebraic-closure
  - thm-binary-resultant-zero-iff-common-geometric-projective-root
  - lem-binary-form-resultant-bezout-identities
  - lem-function-field-pole-height-invariant-under-finite-extension
  - def-order-codimension-one-rational-function
  - thm-reals-cauchy-complete
  - lem-archimedean-property-from-completeness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical Heights on Varieties with Morphisms, §1"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Arizona Winter School 2010 lecture notes, §§5.1–5.2"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field datum with exact constants,
let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a rational self-map of degree
$d\ge2$, and let $P\in\mathbb P^1(\overline K)$. The limit
$$\widehat h_{\phi,K}(P)=\lim_{n\to\infty}d^{-n}h_K(\phi^{\circ n}(P))$$
exists, is independent of the finite field used to define $P$, and is
nonnegative. There is a constant $C_\phi\ge0$, independent of $P$, such that
$$|\widehat h_{\phi,K}(P)-h_K(P)|\le C_\phi.$$ 
It satisfies
$$\widehat h_{\phi,K}(\phi(P))=d\widehat h_{\phi,K}(P).$$

## Statement references

[[def-axiom-of-choice]]

[[def-dynamical-canonical-height-over-function-field]]

[[def-function-field-height-on-projective-line]]

[[def-one-variable-function-field-with-constant-field]]

[[def-rational-map-on-projective-line-degree]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-variable function-field datum
$(K,k,M_K)$ with exact constants, a rational self-map $\phi$ of degree $d\ge2$, a point
$P\in\mathbb P^1(\overline K)$, and a finite extension $L/K$ containing
coordinates of $P$. Write $m=[k_L:k]$ and $D=[L:K]$.

[F1] Write $\phi=p/q$ in reduced form with $p,q\in K[z]$, and let
$F(X,Y)=Y^dp(X/Y)$ and $G(X,Y)=Y^dq(X/Y)$. They are homogeneous degree-$d$
forms. They have no common affine zero over $\overline K$, since a Bezout
identity for coprime $p,q$ remains valid over $\overline K$; they do not both
vanish at infinity because $d=\max(\deg p,\deg q)$. Thus their Sylvester
resultant $R$ is nonzero.
([[def-rational-map-on-projective-line-degree]],
[[thm-bezout-identity-for-polynomials]], [[def-algebraic-closure]],
[[thm-binary-resultant-zero-iff-common-geometric-projective-root]])

[F2] Since $R\ne0$, there are homogeneous degree-$(d-1)$ forms
$A_X,B_X,A_Y,B_Y\in K[X,Y]$ with
$$A_XF+B_XG=RX^{2d-1},\qquad A_YF+B_YG=RY^{2d-1}.$$
([[lem-binary-form-resultant-bezout-identities]])

[F3] For $Q=[x:y]\in\mathbb P^1(L)$ and a closed point $u$ of $C_L$, put
$\mu_u(Q)=\min(\operatorname{ord}_u(x),\operatorname{ord}_u(y))$, with
$\operatorname{ord}_u(0)=+\infty$. Then
$$h_K(Q)=\frac{c_km}{D}\sum_u-\mu_u(Q)[\kappa(u):k_L].$$
This sum is finite and independent of the chosen representative and field of
definition. ([[def-function-field-height-on-projective-line]],
[[thm-function-field-projective-height-well-defined]])

[F4] For each $c\in K^\times$, its normalized pole degree is unchanged on
finite extension:
$$\frac{m}{D}\sum_u\max(0,-\operatorname{ord}_u(c))[\kappa(u):k_L]
=\sum_v\max(0,-\operatorname{ord}_v(c))[\kappa(v):k].$$
The same equality for $c^{-1}$ controls the positive orders of $c$.
([[lem-function-field-pole-height-invariant-under-finite-extension]])

[F5] At every closed point, the order is a discrete valuation:
$\operatorname{ord}(ab)=\operatorname{ord}(a)+\operatorname{ord}(b)$ and
$\operatorname{ord}(a+b)\ge\min(\operatorname{ord}(a),\operatorname{ord}(b))$.
([[def-order-codimension-one-rational-function]])

[F6] Every Cauchy sequence of real numbers converges, and the natural numbers
are unbounded above. ([[thm-reals-cauchy-complete]],
[[lem-archimedean-property-from-completeness]])

[A1] The Axiom of Choice is part of the one-variable curve datum; the degree
estimates and Cauchy argument below use no additional choice.
([[def-axiom-of-choice]],
[[def-one-variable-function-field-with-constant-field]])

## Proof

1.1 Let $\mu_u=\mu_u(P)$ and
$\mu'_u=\min(\operatorname{ord}_u(F(x,y)),\operatorname{ord}_u(G(x,y)))$.
By [F1], $F(x,y)$ and $G(x,y)$ are not both zero. Let $S$ be the finite set
of nonzero coefficients of $F,G,A_X,B_X,A_Y,B_Y,R$. Define $b_u$ to be the
minimum order of the nonzero coefficients of $F,G$, and define $a_{X,u}$ and
$a_{Y,u}$ as the minimum order among the nonzero coefficients of $(A_X,B_X)$
and $(A_Y,B_Y)$, respectively. Homogeneity and [F5] give
$\mu'_u\ge d\mu_u+b_u$. If $\operatorname{ord}_u(x)=\mu_u$, the first
identity of [F2] gives
$\mu'_u\le d\mu_u+\operatorname{ord}_u(R)-a_{X,u}$; if
$\operatorname{ord}_u(y)=\mu_u$, the second identity gives the analogous
bound with $a_{Y,u}$. Hence, for
$$B_u=\max\{|b_u|,|\operatorname{ord}_u(R)-a_{X,u}|,
|\operatorname{ord}_u(R)-a_{Y,u}|\},$$
one has $|\mu'_u-d\mu_u|\le B_u$. [F1, F2, F5, algebra]

1.2 Each $B_u$ is zero except at the finitely many points where some element
of $S$ has nonzero order. Moreover
$B_u\le\sum_{c\in S}|\operatorname{ord}_u(c)|$: each minimum-order term is
bounded by the sum of absolute orders in its coefficient list, and each
resultant-minus-minimum term is bounded by the absolute order of $R$ plus
that coefficient-list sum. [F2, F5, step 1.1]

2.1 Apply [F3] to $P$ and $\phi(P)$ in the same field $L$. Subtracting their
height sums and using step 1.1 gives
$$|h_K(\phi(P))-d h_K(P)|
\le\frac{c_km}{D}\sum_uB_u[\kappa(u):k_L]
\le c_k\sum_{c\in S}\frac{m}{D}\sum_u|\operatorname{ord}_u(c)|[\kappa(u):k_L].$$
For each $c\in S$, the last normalized sum is the sum of the normalized pole
degrees of $c$ and $c^{-1}$, so [F4] makes it a finite number depending only
on $c$ over $K$. The resulting bound is a constant $C_\phi$ independent of
$L$ and $P$; denote this one-step bound by $\Delta_\phi$.
[A1, F3, F4, step 1.1, step 1.2]

2.2 Let $\Delta_\phi$ be the uniform one-step bound obtained in step 2.1 and
put $a_n=d^{-n}h_K(\phi^{\circ n}(P))$. For $r>s$, summing the one-step
differences gives
$$|a_r-a_s|\le\Delta_\phi\sum_{j=s}^{r-1}d^{-j-1}
\le\frac{\Delta_\phi}{d-1}d^{-s}.$$
The finite geometric-sum inequality follows by multiplying the sum by
$1-d^{-1}$. Since $d\ge2$, induction gives $d^s\ge s+1$; by [F6] the
right side tends to zero. Thus $(a_n)$ is Cauchy and converges by [F6].
Letting $r\to\infty$ and then using $s=0$ gives
$$|\widehat h_{\phi,K}(P)-h_K(P)|\le\frac{\Delta_\phi}{d-1}.$$
Set $C_\phi=\Delta_\phi/(d-1)$. Every term $a_n$ is nonnegative by the
height theorem, so its limit is nonnegative. [F3, F6, step 2.1, algebra]

3.1 Finally,
$$\widehat h_{\phi,K}(\phi(P))
=\lim_{n\to\infty}d^{-n}h_K(\phi^{\circ(n+1)}(P))
=d\lim_{n\to\infty}d^{-(n+1)}h_K(\phi^{\circ(n+1)}(P))
=d\widehat h_{\phi,K}(P).$$
The uniform bound in step 2.1 applies over every finite field of definition,
and the height theorem identifies their ordinary heights; therefore the limit
is independent of that field. [step 2.1, F3, algebra] ∎
