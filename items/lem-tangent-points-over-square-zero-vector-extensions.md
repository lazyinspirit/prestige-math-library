---
id: lem-tangent-points-over-square-zero-vector-extensions
kind: lemma
title: "Square-zero vector extensions encode tangent vectors with coefficients"
status: published
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-tangent-vectors-as-dual-number-points
  - def-classical-affine-variety-interface
  - def-classical-affine-coordinate-ring
  - def-classical-vanishing-ideal
  - thm-universal-property-of-a-polynomial-ring
  - def-affine-scheme-spectrum
  - def-affine-scheme
  - def-prime-and-maximal-ideals
  - def-localisation-at-a-prime-ideal
  - thm-localisation-at-a-prime-is-local
  - thm-stalk-structure-sheaf-prime-localization
  - lem-cotangent-localization-at-rational-point
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - thm-hom-from-a-finite-dimensional-space-as-a-tensor-product
  - thm-universal-property-of-module-tensor-products
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4f, items 4.27–4.30, and Exercise 4-10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Let $k$ be algebraically closed, let $X$ be a classical affine variety over
$k$, and write $A=k[X]$. Regard $X$ with its associated affine scheme
$\operatorname{Spec}A$ when forming $T_xX$. For a finite-dimensional
$k$-vector space $W$, give $R_W=k\oplus W$ the square-zero $k$-algebra
structure
$$ (a,w)(b,v)=(ab,av+bw),\qquad (a,w),(b,v)\in k\oplus W. $$
Then reduction by the augmentation $\pi:R_W\to k$, $\pi(a,w)=a$, defines a
natural bijection
$$ \operatorname{Hom}_{k\text{-alg}}(A,R_W)\cong\{(x,t):x\in X(k),\ t\in W\otimes_k T_xX\}. $$

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a classical affine variety
$X\subseteq k^n$, its coordinate ring $A=k[X]$, and a finite-dimensional
$k$-vector space $W$. The product on $R_W$ is the one displayed above.

[F1] A classical affine variety over an algebraically closed field is a
nonempty irreducible affine algebraic set $X\subseteq k^n$
([[def-classical-affine-variety-interface]]).

[F2] $A=k[t_1,\ldots,t_n]/I(X)$, and the coordinate classes generate $A$ as
a $k$-algebra. The zero algebra is allowed, so $k[\varnothing]=0$
([[def-classical-affine-coordinate-ring]]).

[F3] $I(X)$ consists exactly of the polynomials vanishing at every point of
$X$ ([[def-classical-vanishing-ideal]]).

[F4] For a commutative ring $R$, a homomorphism $R[t]\to S$ is uniquely
determined by its coefficient map and the image of $t$; iteration gives
evaluation on $k[t_1,\ldots,t_n]$
([[thm-universal-property-of-a-polynomial-ring]]).

[F5] An affine scheme is a locally ringed space isomorphic to
$(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$
([[def-affine-scheme]]).

[F6] The underlying topological spectrum has the prime ideals of $A$ as its
points ([[def-affine-scheme-spectrum]]).

[F7] A proper ideal $P$ is prime when $ab\in P$ implies $a\in P$ or
$b\in P$ ([[def-prime-and-maximal-ideals]]).

[F8] For a prime ideal $\mathfrak p$, $A_{\mathfrak p}$ is the localization
using denominators outside $\mathfrak p$
([[def-localisation-at-a-prime-ideal]]).

[F9] $A_{\mathfrak p}$ is local with unique maximal ideal
$\mathfrak pA_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]).

[F10] The stalk of the affine structure sheaf at $\mathfrak p$ is canonically
$A_{\mathfrak p}$ ([[thm-stalk-structure-sheaf-prime-localization]]).

[F11] If $A/\mathfrak m=k$ via the structure map, localization canonically
identifies $\mathfrak m/\mathfrak m^2$ with
$\mathfrak mA_{\mathfrak m}/(\mathfrak mA_{\mathfrak m})^2$
([[lem-cotangent-localization-at-rational-point]]).

[F12] The intrinsic cotangent space at $x$ is the maximal ideal of
$\mathcal O_{X,x}$ modulo its square ([[def-zariski-cotangent-space-point]]).

[F13] $T_xX=\operatorname{Hom}_k(C_xX,k)$ at a $k$-rational point
([[def-zariski-tangent-space-point]]).

[F14] If $V$ is finite-dimensional, the canonical map
$V^*\otimes_k W\to\operatorname{Hom}_k(V,W)$ is a natural isomorphism
([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]]).

[F15] A balanced bilinear map out of two modules induces a unique map from
their tensor product ([[thm-universal-property-of-module-tensor-products]]).

[F16] At a rational point, tangent vectors are naturally the based points of
the dual-numbers scheme ([[lem-tangent-vectors-as-dual-number-points]]).

[F17] The coordinate ring convention allows the zero algebra and gives
$k[\varnothing]=0$ ([[def-classical-affine-coordinate-ring]]).

## Proof

**Proof technique:** direct.

1.1 For $\phi:A\to R_W$, compose with $\pi$ and put $a_i=(\pi\phi)(\bar t_i)$. Every $f\in I(X)$ satisfies $f(a_1,\ldots,a_n)=(\pi\phi)(\bar f)=0$, so $a=(a_i)\in V(I(X))=X$ by [F1, F2, F3, F4]; conversely evaluation at each $x\in X(k)$ is a $k$-algebra map $e_x:A\to k$, and the coordinate classes generate $A$, so this identifies $\operatorname{Hom}_{k\text{-alg}}(A,k)$ with $X(k)$. [F1, F2, F3, F4, given, algebra]

1.2 Fix $x=(a_1,\ldots,a_n)$ and put $\mathfrak m=\ker e_x$; evaluation is surjective on constants, so $A/\mathfrak m=k$, which makes $\mathfrak m$ proper, maximal, and prime. Since $I(X)$ is contained in the polynomial evaluation kernel at $a$ by [F3], and that kernel is generated by $t_1-a_1,\ldots,t_n-a_n$ by telescoping each monomial's factors using [F4], their classes generate $\mathfrak m$ and $C_A:=\mathfrak m/\mathfrak m^2$ is finite-dimensional. By [F5, F6, F8, F9, F10, F11], $\mathcal O_{X,x}=A_{\mathfrak m}$ has maximal ideal $\mathfrak mA_{\mathfrak m}$ and localization induces a canonical isomorphism $\theta:C_A\xrightarrow{\sim}C_xX$. [F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, algebra]

2.1 Among maps whose reduction is $e_x$, write uniquely $\phi(a)=e_x(a)+D(a)$ with $D(a)\in W$; comparing products in $R_W$ shows $D$ is a $k$-derivation for the $A$-module structure on $W$ through $e_x$, with $D(ab)=e_x(a)D(b)+e_x(b)D(a)$, and conversely every such derivation gives a map because $W^2=0$. It kills $\mathfrak m^2$ and restricts to a linear map $C_A\to W$; conversely, for $h:C_A\to W$, $D(a)=h([a-e_x(a)1])$ defines the inverse derivation, since writing $a=e_x(a)1+u$, $b=e_x(b)1+v$ with $u,v\in\mathfrak m$ leaves only the terms $e_x(a)v+e_x(b)u$ modulo $\mathfrak m^2$. [step 1.1, step 1.2, given, algebra]

3.1 The canonical tensor-Hom map sends $w\otimes\lambda$ to $[c\mapsto\lambda(c)w]$; by [F14] and the canonical tensor symmetry obtained from [F15], it identifies $W\otimes_k C_A^*$ with $\operatorname{Hom}_k(C_A,W)$. Dualizing $\theta$ identifies this with $W\otimes_k T_xX$ by [F12, F13], so $\phi$ maps to $(x,t)$ where $x$ is its reduction and $t$ encodes its induced map $C_A\to W$, and the inverse sends $(x,t)$ to evaluation plus the corresponding derivation from step 1.2. These constructions are canonical and natural in $W$; when $W=k$, $k[\epsilon]/(\epsilon^2)\to R_k$, $\epsilon\mapsto(0,1)$, identifies this with [F16]. [F12, F13, F14, F15, F16, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $W=0$, then $R_W=k$ and the bijection is $\phi=e_x\leftrightarrow(x,0)$; if $C_xX=0$, then $T_xX=0$ and every map over $x$ is evaluation. For the empty algebraic set, outside the variety hypothesis, $k[X]=0$ and no unital map $k[X]\to R_W$ exists, matching the absence of pairs. The construction works for every tensor $t$, including $t=0$, and has no reverse implication. Only the finite coordinate presentation of this fixed $X$ is used to prove finite-dimensionality; the tensor-Hom map is canonical, no family of bases or points is selected, and no Axiom of Choice is used. [F1, F17, F14, step 1.1, step 1.2, step 2.1, step 3.1, given, algebra] ∎
