---
id: lem-finite-flat-curve-fibre-degree
kind: lemma
title: "Fibre degree of the finite locally free map to the projective line"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - lem-proper-normal-curve-rational-function-map
  - def-order-codimension-one-rational-function
  - thm-dvr-ideal-and-module-length
  - def-degree-divisor-proper-curve
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-relative-projective-space-standard-charts
  - def-finite-morphism-schemes
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-scheme-fibre-stalk-quotient
  - lem-points-of-fibre-primes-over-point
  - thm-affine-fibre-coordinate-ring
  - thm-structure-theorem-for-artinian-rings
  - def-composition-series-and-length-of-a-module
  - cor-tensor-product-with-a-quotient-ring
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-first-isomorphism-theorem-rings
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms, §29.49 finite locally free morphisms"
      url: "https://stacks.math.columbia.edu/tag/02K9"
    - title: "The Stacks Project, Morphisms, §29.58 universally bounded fibres"
      url: "https://stacks.math.columbia.edu/tag/03J3"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$C$ be a normal proper curve over $k$ ([[def-degree-divisor-proper-curve]]) with
function field $K=k(C)$, let $f\in K^{\times}$ be transcendental over $k$, and
let $\varphi_f:C\to\mathbb P^1_k$ be the finite locally free morphism of degree
$d=[K:k(f)]$ with $\varphi_f^{\#}(t)=f$ constructed in
[[lem-proper-normal-curve-rational-function-map]]. Here
$\mathbb P^1_k=U_0\cup U_1$ with $U_0=\operatorname{Spec}k[t]$ and
$U_1=\operatorname{Spec}k[u]$, $u=t^{-1}$, is the standard cover
([[def-relative-projective-space-standard-charts]]).

1. **Zero fibre.** The fibre over the origin satisfies
$$\sum_{x\in C:\ \varphi_f(x)=0}\operatorname{ord}_x(f)\,[\kappa(x):k]=d.$$
2. **Pole fibre.** The fibre over the point at infinity satisfies
$$\sum_{x\in C:\ \varphi_f(x)=\infty}\bigl(-\operatorname{ord}_x(f)\bigr)\,[\kappa(x):k]=d.$$

Both sums are finite, every summand is a positive integer, and
$\operatorname{ord}_x$ is the order at $x$ of
[[def-order-codimension-one-rational-function]].

## Facts & Assumptions

**Given:** A field $k$, a normal proper curve $C$ over $k$ with generic point $\eta$ and function field $K=\mathcal O_{C,\eta}$, the Axiom of Choice, an element $f\in K^{\times}$ transcendental over $k$, and the finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $d=[K:k(f)]$ with $\varphi_f^{\#}(t)=f$ on $U_0=\operatorname{Spec}k[t]$ and $\varphi_f^{\#}(u)=f^{-1}$ on $U_1=\operatorname{Spec}k[u]$ ([[lem-proper-normal-curve-rational-function-map]]).

[F1] $\varphi_f$ is finite, and for each standard affine chart $V$ of $\mathbb P^1_k$ the preimage $\varphi_f^{-1}(V)$ is affine with coordinate ring $B_V$; for $V=U_0$ the ring $B_0$ is a free $k[t]$-module of rank $d$ with $k[t]\to B_0$, $t\mapsto f$, and for $V=U_1$ the ring $B_1$ is a free $k[u]$-module of rank $d$ with $u\mapsto f^{-1}$ ([[lem-proper-normal-curve-rational-function-map]], [[def-finite-morphism-schemes]]).

[F2] $\mathbb P^1_k$ is covered by $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$ glued along $tu=1$; the origin $0$ is the closed point $t=0$ of $U_0$ with residue field $k$, the point at infinity $\infty$ is the closed point $u=0$ of $U_1$, also with residue field $k$, and $\mathbb P^1_k$ is separated over $k$ ([[def-relative-projective-space-standard-charts]]).

[F3] $C$ is an integral, proper, one-dimensional $k$-scheme; it is Noetherian, so its underlying space is Noetherian, and every open subset of $C$ is quasi-compact. For a closed point $x$ the residue field $\kappa(x)$ is a finite extension of $k$ ([[def-degree-divisor-proper-curve]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[F4] Let $x$ be a closed point of $C$. Then $\mathcal O_{C,x}$ is a discrete valuation ring with fraction field $K$, and the normalized valuation of $f\in K^{\times}$ is $\operatorname{ord}_x(f)$; a uniformiser of $\mathcal O_{C,x}$ is denoted $\pi_x$ ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[def-order-codimension-one-rational-function]]).

[F5] If $V$ is a discrete valuation ring with uniformiser $\pi$ and $y=u\pi^n$ with $u\in V^{\times}$ and $n\ge0$, then $V/(y)$ has length $n$ as a $V$-module ([[thm-dvr-ideal-and-module-length]]).

[F6] For $\varphi_f:X\to S$, a point $x\in X$, $s=\varphi_f(x)$ and the fibre $X_s$, there is a canonical isomorphism $\mathcal O_{X_s,x}\cong\mathcal O_{X,x}/\mathfrak m_s\mathcal O_{X,x}$ ([[lem-scheme-fibre-stalk-quotient]]).

[F7] For a ring map $A\to B$ and a prime $\mathfrak p\subseteq A$ the fibre of $\operatorname{Spec}B\to\operatorname{Spec}A$ over $\mathfrak p$ is $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$; moreover the points of the fibre correspond exactly to the points of $\operatorname{Spec}B$ contracting to $\mathfrak p$, with unchanged residue fields ([[thm-affine-fibre-coordinate-ring]], [[lem-points-of-fibre-primes-over-point]]).

[F8] For an ideal $I\subseteq R$ and an $R$-module $M$ there is a natural isomorphism $M\otimes_R(R/I)\cong M/IM$; tensor products commute with direct sums; and evaluation of polynomials at $0$ identifies $k[t]/(t)\cong k$ ([[cor-tensor-product-with-a-quotient-ring]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-first-isomorphism-theorem-rings]]).

[F9] A finite-dimensional $k$-algebra is Artinian: every descending chain of
ideals stabilizes because their finite $k$-dimensions cannot keep decreasing.
Under AC an Artinian ring $R$ is canonically the product of its localizations
at its finitely many maximal ideals
([[thm-structure-theorem-for-artinian-rings]]). For a finite-dimensional
$k$-algebra this is a $k$-algebra isomorphism, so
$\dim_k R=\sum_{\mathfrak m}\dim_k R_{\mathfrak m}$.
For a local finite-dimensional $k$-algebra $S$ with residue field $\lambda$,
a composition series with $r$ factors isomorphic to $\lambda$ gives
$\dim_k S=r[\lambda:k]$, by additivity of $k$-dimension in the filtration
([[def-composition-series-and-length-of-a-module]]). This does not require
a $\lambda$-vector-space structure on $S$.

[F10] The base change of a finite morphism is finite; a finite morphism is affine, so the preimage of every affine open is affine ([[def-finite-morphism-schemes]]).

## Proof

1.1 The fibre $C_0:=C\times_{\mathbb P^1_k}\operatorname{Spec}k$ over $0$ is canonically $\operatorname{Spec}(B_0/tB_0)$, and $\dim_k\Gamma(C_0,\mathcal O_{C_0})=d$.
Since $0\in U_0$ and $U_0$ is open, the structure morphism $\operatorname{Spec}k\to\mathbb P^1_k$ with image $0$ factors through $U_0$, so $C_0\cong\varphi_f^{-1}(U_0)\times_{U_0}\operatorname{Spec}k$. By [F10] and [F1] the scheme $\varphi_f^{-1}(U_0)=\operatorname{Spec}B_0$ is affine and $\operatorname{Spec}B_0\to U_0=\operatorname{Spec}k[t]$ is affine, so [F7] identifies $C_0$ with $\operatorname{Spec}(B_0\otimes_{k[t]}k)$, which is $\operatorname{Spec}(B_0/tB_0)$ by [F8]. Since $B_0$ is a free $k[t]$-module of rank $d$, [F8] gives $B_0/tB_0\cong(k[t]/(t))^d\cong k^d$ as $k$-vector spaces, so the coordinate ring has $k$-dimension $d$. A base change of a finite morphism is finite, so $C_0$ is finite over $\operatorname{Spec}k$ and has finitely many points.
[F1, F2, F6, F7, F8, F10]

1.2 The underlying set of $C_0$ is exactly the set of closed points $x$ of $C$ with $\operatorname{ord}_x(f)>0$.
By [F7] the points of $C_0$ are the points $x$ of $C$ with $\varphi_f(x)=0$; since $C_0$ is finite over $k$ by 1.1, its points are closed in $C_0$ and are closed points of the one-dimensional $k$-scheme $C$ (the generic point $\eta$ maps to the generic point of $\mathbb P^1_k$ because $\varphi_f$ is nonconstant and $C$ is integral, so $\eta\notin C_0$). A point $x$ maps to $0$ exactly when $x$ lies in $\varphi_f^{-1}(U_0)$, so that $f$ is regular at $x$, and the image of $f$ in $\kappa(x)$ is zero; for the discrete valuation ring $\mathcal O_{C,x}$ this is exactly the condition $\operatorname{ord}_x(f)>0$.
[F2, F3, F4, F7, 1.1]

1.3 For every $x\in C_0$ one has $\mathcal O_{C_0,x}\cong\mathcal O_{C,x}/(f)$ and $\dim_k\mathcal O_{C_0,x}=\operatorname{ord}_x(f)\,[\kappa(x):k]$.
By 1.2 the point $x$ is a closed point with $n:=\operatorname{ord}_x(f)>0$ and $f=u\pi_x^n$ with $u$ a unit of the discrete valuation ring $\mathcal O_{C,x}$. By [F6] applied to $\varphi_f$ and the point $0\in\mathbb P^1_k$, $\mathcal O_{C_0,x}\cong\mathcal O_{C,x}/\mathfrak m_0\mathcal O_{C,x}$; since $\varphi_f^{\#}(t)=f$, the ideal $\mathfrak m_0\mathcal O_{C,x}$ is $(f)$, so $\mathcal O_{C_0,x}\cong\mathcal O_{C,x}/(f)$. By [F5] this is a module of length $n$ over $\mathcal O_{C,x}$, with a composition series whose $n$ factors are isomorphic to $\kappa(x)$; each factor has $k$-dimension $[\kappa(x):k]$ by [F3], and dimensions add along this filtration of $k$-vector spaces by [F9]. Hence $\dim_k\mathcal O_{C_0,x}=n\,[\kappa(x):k]$.
[F3, F4, F5, F6, F9, 1.2]

1.4 The identity $\sum_{x\in C_0}\operatorname{ord}_x(f)[\kappa(x):k]=\dim_k\Gamma(C_0,\mathcal O_{C_0})=d$ holds.
By 1.1 the ring $\Gamma(C_0,\mathcal O_{C_0})=B_0/tB_0$ is a finite-dimensional $k$-algebra, hence Artinian, and its maximal ideals are the finitely many points $x\in C_0$ with local rings $\mathcal O_{C_0,x}$. By [F9] it is the product of those local rings, so its $k$-dimension is the sum of the $k$-dimensions computed in 1.3, namely $\sum_{x\in C_0}\operatorname{ord}_x(f)[\kappa(x):k]$; by 1.1 this equals $d$. This is the zero-fibre identity.
[F9, 1.1, 1.2, 1.3]

1.5 **Pole fibre.** The fibre $C_\infty:=C\times_{\mathbb P^1_k}\operatorname{Spec}k$ over the point at infinity is $\operatorname{Spec}(B_1/uB_1)$, $\dim_k\Gamma(C_\infty,\mathcal O_{C_\infty})=d$, its points are exactly the closed points $x$ with $\operatorname{ord}_x(f)<0$, and $\dim_k\mathcal O_{C_\infty,x}=(-\operatorname{ord}_x(f))[\kappa(x):k]$ for such $x$.
The point $\infty$ lies in $U_1=\operatorname{Spec}k[u]$ and has residue field $k$, so the argument of steps 1.1 and 1.2 applies verbatim to the chart $U_1$ and the coordinate $u$, whose pullback is $f^{-1}$: the fibre is $\operatorname{Spec}(B_1\otimes_{k[u]}k)=\operatorname{Spec}(B_1/uB_1)$, and $B_1/uB_1\cong k^d$ because $B_1$ is free of rank $d$ over $k[u]$. A point $x$ of $C$ maps to $\infty$ exactly when $x\in\varphi_f^{-1}(U_1)$ and $f^{-1}\in\mathfrak m_x$, i.e. $\operatorname{ord}_x(f)<0$; since $f^{-1}=u\pi_x^{-n}$ with $-n=\operatorname{ord}_x(f^{-1})>0$, [F5] gives length $-n$ and step 1.3 gives $\dim_k\mathcal O_{C_\infty,x}=(-n)[\kappa(x):k]$. The Artinian product argument of step 1.4 now yields $\sum_{x\in C_\infty}(-\operatorname{ord}_x(f))[\kappa(x):k] =\dim_k\Gamma(C_\infty,\mathcal O_{C_\infty})=d$.
[F1, F2, F4, F5, F6, F7, F8, F9]

2.1 Both displayed identities hold: for every normal proper curve $C/k$ and every $f\in K^{\times}$ transcendental over $k$, the zero and pole fibres of the finite locally free morphism $\varphi_f$ have degree $d=[K:k(f)]$, computed respectively as $\sum\operatorname{ord}_x(f)[\kappa(x):k]$ and $\sum(-\operatorname{ord}_x(f))[\kappa(x):k]$. The Axiom of Choice is used exactly as declared, through the construction input [F1] and the Artinian decomposition input [F9]; no further choice is made. [F1, F2, 1.4, 1.5] ∎
