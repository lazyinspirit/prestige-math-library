---
id: lem-coprime-polynomial-factorization-lifts-etale-locally
kind: lemma
title: "Coprime polynomial factorisations lift after an etale localisation"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - thm-jacobian-criterion-smooth-morphism
  - def-ag-standard-smooth-algebra
  - def-relative-dimension-smooth-morphism
  - def-smooth-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-principal-localisation
  - thm-prime-spectrum-of-a-localisation-bijection
  - lem-primes-of-a-localisation-avoid-the-multiplicative-set
  - thm-localisation-commutes-with-quotients
  - cor-residue-field-of-a-localisation-at-a-prime
  - cor-inverse-matrix-by-adjugate
  - def-determinant-of-a-square-matrix
  - thm-rank-nullity
  - def-finitely-presented-module-and-algebra
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra, Lemma 10.143.13 and Section 10.143 (etale local factorization of a polynomial)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 (standard etale and the Jacobian criterion)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a commutative
ring, let $r,s\ge1$ and let
$$f(T)=T^{n}+a_1T^{n-1}+\cdots+a_n\in R[T],\qquad n=r+s,$$
be monic of degree $n$, and let $\mathfrak p\in\operatorname{Spec}R$. Suppose
that the image $\bar f\in\kappa(\mathfrak p)[T]$ admits a factorisation
$$\bar f=\bar g\,\bar h$$
with $\bar g,\bar h$ monic of degrees $r$ and $s$ and **coprime** in the strong
form
$$\bar a\,\bar g+\bar b\,\bar h=1\qquad\text{for some }\bar a,\bar b\in\kappa(\mathfrak p)[T].$$

Then there exist a finitely presented $R$-algebra $R'$ and a prime
$\mathfrak p'\subseteq R'$ lying over $\mathfrak p$ with
$\kappa(\mathfrak p')=\kappa(\mathfrak p)$ such that

1. the structure morphism $\operatorname{Spec}R'\to\operatorname{Spec}R$ is
   \'etale at every point
   ([[def-etale-morphism-schemes]]), and
2. $f=gh$ in $R'[T]$ for monic $g,h\in R'[T]$ of degrees $r$ and $s$ that are
   coprime in $R'[T]$: there are $a,b\in R'[T]$ with $ag+bh=1$.

Explicitly one may take $A=R[b_1,\dots,b_r,c_1,\dots,c_s]$,
$$g_u=T^{r}+b_1T^{r-1}+\cdots+b_r,\qquad h_u=T^{s}+c_1T^{s-1}+\cdots+c_s,$$
let $\phi_1,\dots,\phi_n\in A$ be the coefficients of $g_uh_u-f$ in the basis
$T^{n-1},\dots,T,1$, put $R^\circ=A/(\phi_1,\dots,\phi_n)$, let
$\mathfrak p_0\subseteq R^\circ$ be the kernel of the substitution sending
$b_i,c_j$ to the coefficients of $\bar g,\bar h$, and put
$R'=(R^\circ)_d$, $\mathfrak p'=\mathfrak p_0R'$, where $d\in R^\circ$ is the
determinant of the Jacobian matrix
$\bigl(\partial\phi_k/\partial b_i,\ \partial\phi_k/\partial c_j\bigr)$.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume AC. Let $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ be a presentation of an affine chart of a locally finitely presented morphism in which some $r\times r$ minor of the Jacobian matrix $(\partial f_j/\partial t_i)$ becomes a unit; then the morphism is smooth at the point and exhibits relative dimension $m-r$ there, and conversely every smooth point admits such a chart ([[thm-jacobian-criterion-smooth-morphism]], [[def-ag-standard-smooth-algebra]], [[def-locally-finite-presentation-morphism]]).

[F2] \'Etale at a point means smooth at that point of relative dimension $0$: locally of finite presentation, flat, geometrically regular fibres, and local fibre dimension $0$ at each point over it; a chart of relative dimension $m-r$ with $m=r$ therefore witnesses \'etaleness ([[def-etale-morphism-schemes]], [[def-relative-dimension-smooth-morphism]], [[def-smooth-morphism-schemes]]).

[F3] For $d\in R^\circ$ the principal localisation $(R^\circ)_d$ has spectrum the primes of $R^\circ$ avoiding $d$, extension and contraction are inverse bijections preserving strict inclusion, and localisation commutes with quotients, so for a prime $\mathfrak p_0\not\ni d$ with image $\mathfrak p'$ the quotient ring satisfies $R'/\mathfrak p'\cong(R^\circ/\mathfrak p_0)_{d}$, and its fraction field is the residue field $\kappa(\mathfrak p')$ ([[def-principal-localisation]], [[thm-prime-spectrum-of-a-localisation-bijection]], [[lem-primes-of-a-localisation-avoid-the-multiplicative-set]], [[thm-localisation-commutes-with-quotients]], [[cor-residue-field-of-a-localisation-at-a-prime]]).

[F4] The polynomial ring $R[b_1,\dots,b_r,c_1,\dots,c_s]$ is the free commutative $R$-algebra on $n=r+s$ indeterminates, with coefficients extracted by the $R$-linear coefficient functionals; a quotient of a polynomial algebra by a finitely generated ideal is a finitely presented algebra, so $\operatorname{Spec}$ of it over $\operatorname{Spec}R$ is locally of finite presentation ([[def-polynomial-ring-on-a-family-of-indeterminates]], [[def-finitely-presented-module-and-algebra]], [[def-locally-finite-presentation-morphism]]).

[F5] For a square matrix over a commutative ring with invertible determinant $d$, the inverse exists and equals $d^{-1}\operatorname{adj}(A)$, so every linear system with that matrix has a unique solution ([[cor-inverse-matrix-by-adjugate]], [[def-determinant-of-a-square-matrix]]); over a field, a square matrix is invertible if and only if its kernel is zero, by rank--nullity ([[thm-rank-nullity]]).

[F6] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The universal coefficient algebra and the point. Put $A=R[b_1,\dots,b_r,c_1,\dots,c_s]$, $g_u=T^{r}+\sum_{i=1}^{r}b_iT^{r-i}$, $h_u=T^{s}+\sum_{j=1}^{s}c_jT^{s-j}$ and let $\phi_1,\dots,\phi_n\in A$ be the coefficients of $g_uh_u-f$ in the basis $T^{n-1},\dots,T,1$, so that $R^\circ=A/(\phi_1,\dots,\phi_n)$ is a finitely presented $R$-algebra [F4] and $f=g_uh_u$ holds in $R^\circ[T]$ by construction. Substituting for $b_i,c_j$ the coefficients of $\bar g,\bar h$ defines an $R$-algebra map $R^\circ\to\kappa(\mathfrak p)$ because $\bar g\bar h=\bar f$ makes all $\phi_k$ vanish; let $\mathfrak p_0$ be its kernel. The composite $R\to R^\circ\to\kappa(\mathfrak p)$ is the canonical map, so $\mathfrak p_0$ lies over $\mathfrak p$, and $R^\circ/\mathfrak p_0\to\kappa(\mathfrak p)$ is injective by definition of the kernel and its image contains $R/\mathfrak p$; because it lies in $\kappa(\mathfrak p)=\operatorname{Frac}(R/\mathfrak p)$, the fraction field of $R^\circ/\mathfrak p_0$ is exactly $\kappa(\mathfrak p_0)=\kappa(\mathfrak p)$. [F4]

1.2 The Jacobian is a Sylvester matrix. Writing the coefficient vector of a polynomial of degree $\le n-1$ in the basis $T^{n-1},\dots,T,1$, the $n\times n$ Jacobian matrix $J$ with entries $\partial\phi_k/\partial b_i$ and $\partial\phi_k/\partial c_j$ is the matrix of the $R$-linear map $(\delta b,\delta c)\mapsto(\delta g)h_u+g_u(\delta h)$, where $\delta g=\sum_i\delta b_iT^{r-i}$ ranges over polynomials of degree $\le r-1$ and $\delta h=\sum_j\delta c_jT^{s-j}$ over polynomials of degree $\le s-1$: this is the product rule applied to the coefficient functionals $\phi_k$ of $g_uh_u$, the term $f$ contributing no derivatives. Reducing modulo $\mathfrak p_0$ gives the matrix $\bar J$ over the field $\kappa(\mathfrak p_0)=\kappa(\mathfrak p)$ of the map $(\delta g,\delta h)\mapsto(\delta g)\bar h+\bar g(\delta h)$. [F4]

2.1 Invertibility of the reduced Jacobian. Let $\delta g,\delta h$ over $\kappa(\mathfrak p)$ satisfy $(\delta g)\bar h+\bar g(\delta h)=0$ with $\deg\delta g\le r-1$ and $\deg\delta h\le s-1$. Using the Bezout identity $\bar a\bar g+\bar b\bar h=1$, one has $\delta h=\delta h(\bar a\bar g+\bar b\bar h)=\bar a(\delta h\bar g)+\bar b(\delta h\bar h)=\bar h(\bar b\delta h-\bar a\delta g)$, so $\bar h$ divides $\delta h$; since $\deg\delta h<s=\deg\bar h$ and $\bar h\neq0$, this forces $\delta h=0$. Then $\bar g(\delta h)=0$ gives $(\delta g)\bar h=0$, and since $\kappa(\mathfrak p)[T]$ is a domain with $\bar h\neq0$ we get $\delta g=0$. Hence $\bar J$ has zero kernel between spaces of dimension $n$, so it is invertible and $\det(\bar J)\neq0$ by [F5]. Therefore $d:=\det J\in R^\circ$ has nonzero image in $\kappa(\mathfrak p_0)=\kappa(\mathfrak p)$ and $d\notin\mathfrak p_0$. [F5, step 1.1, step 1.2]

3.1 Localisation at the determinant. Put $R'=(R^\circ)_d$ and $\mathfrak p'=\mathfrak p_0R'$, a prime of $R'$ over $\mathfrak p$ because $d\notin\mathfrak p_0$ [F3]. In $R'$ the element $d$ is a unit, $\kappa(\mathfrak p')=\operatorname{Frac}((R^\circ/\mathfrak p_0)_{d})=\operatorname{Frac}(R^\circ/\mathfrak p_0)=\kappa(\mathfrak p)$ by step 1.1, since localizing a domain at a nonzero element does not change its fraction field, and the equation $f=g_uh_u$ of step 1.1 persists in $R'[T]$ with the images of $g_u,h_u$, which are monic of degrees $r,s$ because $R'\neq0$ and leading coefficient $1$ remains a unit. This gives claim 2 in the form $g=g_u$, $h=h_u$ inside $R'$. [F3, step 1.1, step 2.1]

4.1 \'Etaleness on the whole chart. The algebra $R'$ is the localisation at $d$ of the finitely presented $R$-algebra $R^\circ=A/(\phi_1,\dots,\phi_n)$, hence is finitely presented over $R$ [F4], and the full $n\times n$ Jacobian determinant is the unit $d$ of $R'$; the presentation $R'=(R[b_1,\dots,b_r,c_1,\dots,c_s]/(\phi_1,\dots,\phi_n))_d$ therefore has an invertible $n\times n$ minor with $m=n$ variables and $n$ equations. By the Jacobian criterion [F1] (AC) the morphism $\operatorname{Spec}R'\to\operatorname{Spec}R$ is smooth of relative dimension $n-n=0$ at every prime of $R'$, so it is \'etale everywhere by [F2]. This gives claim 1. [F1, F2, F4, step 3.1]

4.2 Coprimality of the lifted factors. Since $\det J=d$ is a unit of $R'$, the matrix $J$ is invertible over $R'$ with inverse $d^{-1}\operatorname{adj}(J)$ [F5]. In the identification of step 1.2 the same matrix $J$ represents the $R'$-linear map $(b,a)\mapsto ag+bh$, where $a$ runs over the polynomials of degree $\le s-1$ (coefficients the images of $c_1,\dots,c_s$) and $b$ over the polynomials of degree $\le r-1$ (coefficients the images of $b_1,\dots,b_r$), into the polynomials of degree $\le n-1$; invertibility of $J$ makes this map surjective, so there are $a,b\in R'[T]$ with $ag+bh=1$; in particular $g$ and $h$ are coprime in $R'[T]$. [F5, step 1.2, step 3.1]

5.1 Conclusion and choice accounting. Steps 1.1, 1.2 and 2.1 construct $R',\mathfrak p'$ with $\kappa(\mathfrak p')=\kappa(\mathfrak p)$, step 4.1 gives the \'etaleness of claim 1 and steps 3.1 and 4.2 the factorisation with coprime monic factors of claim 2. The Axiom of Choice [F6] is assumed in the Statement and used exactly through the Jacobian criterion [F1] in step 4.1; the coefficient construction, the residue-field identification and the linear algebra of steps 1.2, 2.1 and 4.2 are choice-free. [F1, F6, step 2.1, step 3.1, step 4.1, step 4.2] $\square$
