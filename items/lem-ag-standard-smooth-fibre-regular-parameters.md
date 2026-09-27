---
id: "lem-ag-standard-smooth-fibre-regular-parameters"
kind: "lemma"
title: "Invertible Jacobian minor gives regular parameters in a polynomial fibre"
status: draft
origin: "pipeline"
deps: ["lem-ag-polynomial-quotient-differentials", "thm-localisation-and-polynomial-extension-of-regular-rings", "def-embedding-dimension-and-regular-local-ring", "def-regular-noetherian-ring", "lem-regular-system-of-parameters-equivalent-basis", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "def-regular-system-of-parameters", "thm-every-independent-set-extends-to-a-basis", "thm-localisation-of-modules-is-exact", "thm-quotient-is-domain-iff-ideal-prime", "thm-noetherian-ring-ideal-characterisations", "def-field", "def-krull-dimension-of-a-ring", "def-local-ring", "def-localisation-at-a-prime-ideal", "thm-localisation-at-a-prime-is-local", "cor-residue-field-of-a-localisation-at-a-prime", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.137.4 and 10.106.3"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$n\ge0$, let $P=k[x_1,\dots,x_n]$, let $\mathfrak q\subseteq P$ be a prime ideal
and put $A=P_{\mathfrak q}$, with maximal ideal $\mathfrak m=\mathfrak qA$ and
residue field $\kappa=A/\mathfrak m$
([[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]]).
Let $f_1,\dots,f_c\in\mathfrak q$ and suppose that the leading $c\times c$ minor
$$h=\det\Bigl(\frac{\partial f_j}{\partial x_i}\Bigr)_{1\le i,j\le c}$$
of the Jacobian matrix of [[lem-ag-polynomial-quotient-differentials]] satisfies
$h\notin\mathfrak q$. Then:

1. the classes of $f_1,\dots,f_c$ in $\mathfrak m/\mathfrak m^2$ are
   $\kappa$-linearly independent;
2. $A$ is a regular local ring, $(f_1,\dots,f_c)$ is a regular sequence in $A$,
   and $A/(f_1,\dots,f_c)$ is a regular local ring with
   $\dim A/(f_1,\dots,f_c)=\dim A-c$.

This is the fibre computation used when a standard smooth presentation is
examined over a field.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $P=k[x_1,\dots,x_n]$, a prime
$\mathfrak q\subseteq P$, the localisation $A=P_{\mathfrak q}$ with maximal
ideal $\mathfrak m$ and residue field $\kappa$, and elements
$f_1,\dots,f_c\in\mathfrak q$ whose leading $c\times c$ Jacobian minor $h$ is not
in $\mathfrak q$; and the Axiom of Choice.

[F1] [[lem-ag-polynomial-quotient-differentials]]: $\Omega_{P/k}$ is free on $\mathrm dx_1,\dots,\mathrm dx_n$; the partial derivatives $\partial_i$ are defined on the monomial basis by $\partial_i(x^a)=a_ix^{a-e_i}$ and extended $k$-linearly, satisfy the Leibniz rule, and $\mathrm df=\sum_i\partial_if\,\mathrm dx_i$; for $I=(f_1,\dots,f_c)$ the module $\Omega_{P/I/k}$ is the cokernel of the Jacobian matrix $(\partial_if_j)_{i,j}$.

[F2] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: under the Axiom of Choice, localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular, and regularity can equivalently be tested at maximal ideals.

[F3] [[def-embedding-dimension-and-regular-local-ring]]: for a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$ one has $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local exactly when $\operatorname{edim}R=\dim R$.

[F4] [[def-regular-noetherian-ring]]: a commutative Noetherian ring is regular when every prime localisation is a regular local ring.

[F5] [[lem-regular-system-of-parameters-equivalent-basis]]: under the Axiom of Choice, for a nonzero Noetherian local ring $(R,\mathfrak m,k)$ of dimension $d$ and $\mathbf x=(x_1,\dots,x_d)\in\mathfrak m^d$, the tuple is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^2$; in particular every lift of a cotangent basis generates $\mathfrak m$ and is a system of parameters.

[F6] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under the Axiom of Choice, a regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay, and for every regular system $(y_1,\dots,y_d)$ of parameters the tuple is $R$-regular and $R/(y_1,\dots,y_c)$ is regular local of dimension $d-c$ for every $0\le c\le d$.

[F7] [[def-regular-system-of-parameters]]: in a regular local ring of dimension $d$, a regular system of parameters is an ordered minimal generating tuple of the maximal ideal, of length $d$; the empty tuple when $d=0$.

[F8] [[thm-every-independent-set-extends-to-a-basis]]: under the Axiom of Choice, a linearly independent subset of a vector space extends to a basis.

[F9] [[thm-localisation-of-modules-is-exact]]: localisation at a multiplicative set preserves short exact sequences.

[F10] [[thm-quotient-is-domain-iff-ideal-prime]]: $R/P$ is an integral domain if and only if $P$ is a prime ideal; in particular $(0)$ is prime in a domain.

[F11] [[thm-noetherian-ring-ideal-characterisations]]: a commutative ring is Noetherian if and only if every ideal is finitely generated.

[F12] [[def-field]]: a field is a commutative ring with $0\ne1$ in which every nonzero element has a multiplicative inverse.

[F13] [[def-krull-dimension-of-a-ring]]: the Krull dimension of a nonzero commutative ring is the supremum of the lengths of strict chains of prime ideals.

[F14] [[def-local-ring]]: a local ring is a commutative ring with exactly one maximal ideal; its residue field is the quotient by that ideal.

[F15] [[def-localisation-at-a-prime-ideal]]: $P_{\mathfrak q}$ is the localisation at the multiplicative set $P\smallsetminus\mathfrak q$.

[F16] [[thm-localisation-at-a-prime-is-local]]: $P_{\mathfrak q}$ is a local ring with maximal ideal $\mathfrak qP_{\mathfrak q}$.

[F17] [[cor-residue-field-of-a-localisation-at-a-prime]]: the residue field of $P_{\mathfrak q}$ is the fraction field of $P/\mathfrak q$.

[F18] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

## Proof

1.1 The field $k$ is a regular Noetherian ring. Its ideals are $0$ and $k$: a nonzero ideal contains a nonzero element, which is a unit by [F12], hence contains $1$ and equals $k$. Both ideals are finitely generated, so $k$ is Noetherian by [F11]. The only prime ideal of $k$ is $(0)$: it is prime because $k/(0)\cong k$ is a domain and every nonzero ideal equals $k$, which is not prime; so $k$ has exactly one maximal ideal, namely $(0)$, and is a local ring in the sense of [F14] with residue field $k$. There is no strict chain of primes, so $\dim k=0$ by [F13]; and $\operatorname{edim}k=\dim_k((0)/(0)^2)=\dim_k0=0=\dim k$, so $k$ is regular local by [F3]. Every prime localisation of $k$ is $k$ itself, hence regular local, so $k$ is a regular Noetherian ring by [F4]. [F3, F4, F11, F12, F13, F14, F10, F18]

2.1 The local ring $A$ is regular. By [F2] applied to the regular Noetherian ring $k$ of step 1.1, the polynomial ring $P=k[x_1,\dots,x_n]$ is regular, and its localisation $A=P_{\mathfrak q}$ at the prime $\mathfrak q$ is regular as well; by [F4] this says that every prime localisation of the Noetherian ring $A$ is a regular local ring, in particular $A$ itself, whose only maximal ideal is $\mathfrak m=\mathfrak qA$ by [F16]. Hence $A$ is a regular local ring with residue field $\kappa=A/\mathfrak m$ [F17], and $\dim A=\operatorname{edim}A=\dim_\kappa(\mathfrak m/\mathfrak m^2)$ by [F3]. [F2, F3, F4, step 1.1, F16, F17]

3.1 The differential map $\delta\colon\mathfrak m/\mathfrak m^2\to\kappa^n$. Localising the exact sequence of $P$-modules $\mathfrak q^2\to\mathfrak q\to\mathfrak q/\mathfrak q^2\to0$ at $P\smallsetminus\mathfrak q$ and using [F9] identifies $\mathfrak m/\mathfrak m^2=(\mathfrak q/\mathfrak q^2)\otimes_PA$. The assignment $(F\bmod\mathfrak q^2,a)\mapsto a\cdot(\partial_if\bmod\mathfrak q)_i$ is $P$-balanced: for $F\in\mathfrak q$ and $G\in P$ the Leibniz rule of [F1] gives $\partial_i(FG)-G\partial_iF=F\partial_iG\in\mathfrak q$, and for $F\in\mathfrak q^2$ one has $\partial_iF\in\mathfrak q$ by the same rule applied to a product of two elements of $\mathfrak q$. Hence it induces an $A$-linear map $(\mathfrak q/\mathfrak q^2)\otimes_PA\to\kappa^n$, that is, a $\kappa$-linear map $\delta$ on $\mathfrak m/\mathfrak m^2$, which sends the class of $f_j$ to the $j$-th Jacobian column $(\partial_if_j\bmod\mathfrak q)_i$. [F1, F9, F15, step 2.1]

4.1 The classes of $f_1,\dots,f_c$ are linearly independent. Let $\lambda_1,\dots,\lambda_c\in A$ satisfy $\sum_j\lambda_j\overline{f_j}=0$ in $\mathfrak m/\mathfrak m^2$. Applying $\delta$ of step 3.1 and using its $\kappa$-linearity gives $\sum_j\overline{\lambda_j}\,(\partial_if_j\bmod\mathfrak q)_i=0$ in $\kappa^n$. The first $c$ coordinates are the matrix equation $\overline M^{\mathsf T}\overline\lambda=0$, where $\overline M$ is the image in $\kappa$ of the $c\times c$ matrix $(\partial_if_j)_{1\le i,j\le c}$; its determinant is the image of $h$, which is nonzero because $h\notin\mathfrak q$ and $\kappa=k[x]_{\mathfrak q}/\mathfrak qk[x]_{\mathfrak q}$ has kernel exactly $\mathfrak q$ on $P$. Hence $\overline M$ is invertible over the field $\kappa$ and $\overline\lambda=0$, that is, every $\lambda_j\in\mathfrak m$. Therefore no nontrivial $\kappa$-linear relation exists among the classes of $f_1,\dots,f_c$. [F1, F17, step 2.1, step 3.1, algebra]

5.1 A regular system of parameters. Put $d:=\dim A=\dim_\kappa(\mathfrak m/\mathfrak m^2)$ by step 2.1. By step 4.1 the family of classes $(\overline{f_1},\dots,\overline{f_c})$ in the $\kappa$-vector space $\mathfrak m/\mathfrak m^2$ is linearly independent, so by [F8] it extends to a $\kappa$-basis $(\overline{f_1},\dots,\overline{f_c},\overline{z_{c+1}},\dots,\overline{z_d})$ with $z_i\in\mathfrak m$; here $c\le d$ because the independent family has at most $\dim_\kappa(\mathfrak m/\mathfrak m^2)=d$ members. Define $y_i:=f_i$ for $1\le i\le c$ and $y_i:=z_i$ for $c<i\le d$. The classes of $y_1,\dots,y_d$ form a $\kappa$-basis of $\mathfrak m/\mathfrak m^2$, so $(y_1,\dots,y_d)$ is a regular system of parameters of $A$ by [F5], of length $d=\dim A$ as required by [F7]. [F5, F7, F8, step 2.1, step 4.1]

6.1 Conclusion. By [F6] applied to the regular local ring $A$ of step 2.1 and its regular system of parameters $(y_1,\dots,y_d)$ of step 5.1, the tuple $(y_1,\dots,y_d)$ is an $A$-regular sequence and $A/(y_1,\dots,y_c)$ is a regular local ring of dimension $d-c=\dim A-c$. Since $y_i=f_i$ for $i\le c$, the quotient $A/(y_1,\dots,y_c)$ is $A/(f_1,\dots,f_c)$ and the initial segment $(f_1,\dots,f_c)$ is a regular sequence. This proves both assertions. [F6, step 2.1, step 5.1] ∎
