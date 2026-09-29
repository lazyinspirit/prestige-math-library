---
id: "thm-embedding-dimension-at-least-local-dimension"
kind: theorem
title: "Tangent dimension bounds local dimension"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-zariski-tangent-space-point
  - thm-dimension-at-most-embedding-dimension
  - lem-local-dimension-reduced-variety-components
  - def-axiom-of-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - thm-stalk-structure-sheaf-prime-localization
  - def-localisation-at-a-prime-ideal
  - thm-localisation-at-a-prime-is-local
  - def-noetherian-ring-and-module
  - def-zariski-cotangent-space-point
  - def-residue-field-scheme-point
  - def-dual-numbers-scheme
  - def-prime-and-maximal-ideals
  - def-krull-dimension-of-a-ring
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4i, Theorem 4.44, with its cited arguments in 4.36 and 3.45"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. For every point $x$ of a locally Noetherian
scheme $X$,
$$\dim_{\kappa(x)}T_xX\geq\dim\mathcal O_{X,x}.$$
For a reduced classical finite-type variety $X$ over an algebraically closed
field and a closed point $x$, this gives
$$\dim T_xX\geq\dim_xX,$$
where $\dim_xX:=\max_{x\in X_i}\dim X_i$ over the irreducible components
$X_i$ containing $x$.

## Facts & Assumptions

**Given:** AC, a locally Noetherian scheme $X$, and a point $x\in X$. The classical specialization additionally assumes that $X$ is a reduced finite-type variety over an algebraically closed field and that $x$ is closed.

[F1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[F2] [[def-scheme]]: A **scheme** is a locally ringed space $(X,\mathcal O_X)$ such that every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme.

[F3] [[def-locally-noetherian-and-noetherian-scheme]]: if it has an affine open cover by spectra of Noetherian rings.

[F4] [[def-affine-open-subscheme]]: For a scheme $X$ and an open set $U\subseteq X$, the open subscheme $U$ means $(U,\mathcal O_X|_U)$.

[F5] [[def-affine-scheme-spectrum]]: whose points are the prime ideals of $A$.

[F6] [[thm-stalk-structure-sheaf-prime-localization]]: there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F7] [[def-localisation-at-a-prime-ideal]]: $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$.

[F8] [[thm-localisation-at-a-prime-is-local]]: $R_{\mathfrak p}$ is a nonzero local ring. Its unique maximal ideal is

[F9] [[def-residue-field-scheme-point]]: $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$.

[F10] [[def-noetherian-ring-and-module]]: Equivalently, every ideal of $R$ is finitely generated.

[F11] [[def-zariski-cotangent-space-point]]: $C_xX:=\mathfrak m_x/\mathfrak m_x^2$.

[F12] [[def-zariski-tangent-space-point]]: $T_xX:=\operatorname{Hom}_{\kappa(x)}(C_xX,\kappa(x))$.

[F13] [[def-embedding-dimension-and-regular-local-ring]]: define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$.

[F14] [[thm-dimension-at-most-embedding-dimension]]: every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\leq\operatorname{edim}R<\infty$.

[F15] [[lem-local-dimension-reduced-variety-components]]: $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$.

[F16] [[def-dual-numbers-scheme]]: $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$.

[F17] [[def-prime-and-maximal-ideals]]: A proper ideal $P\subsetneq R$ is **prime** when $ab\in P$ implies $a\in P$ or $b\in P$.

[F18] [[def-prime-and-maximal-ideals]]: there is no proper ideal strictly between $M$ and $R$.

[F19] [[def-krull-dimension-of-a-ring]]: the Krull dimension of $R$ is the supremum of all integers $n\geq0$ for which such a chain exists.

## Proof

**Proof technique:** direct.

1.1 Choose an affine open neighborhood $U=\operatorname{Spec}A$ of $x$ with $A$ Noetherian by [F2, F3]. Since $U$ is an open subscheme with the restricted structure sheaf [F4], neighborhoods contained in $U$ are cofinal among neighborhoods of $x$, so $\mathcal O_{X,x}=\mathcal O_{U,x}$. The point $x$ corresponds to a prime $\mathfrak p\subset A$ by [F5], and [F6, F7] identify $R:=\mathcal O_{X,x}$ with $A_{\mathfrak p}$. By [F8], $R$ is a nonzero local ring with maximal ideal $\mathfrak m=\mathfrak pA_{\mathfrak p}$; [F9] identifies its residue field with $\kappa(x)$. [F2, F3, F4, F5, F6, F7, F8, F9, given, choose]

2.1 The local ring $R=A_{\mathfrak p}$ is Noetherian. Let $J$ be any ideal of $A_{\mathfrak p}$ and contract it to $I:=\{a\in A:a/1\in J\}$. Since $A$ is Noetherian, [F10] gives generators $a_1,\ldots,a_n$ of $I$. If $a/s\in J$ with $s\notin\mathfrak p$, then $a/1=(s/1)(a/s)\in J$, so $a\in I$ and $a=\sum_i c_i a_i$. Therefore $a/s=\sum_i(c_i/s)(a_i/1)$, while each $a_i/1$ lies in $J$. Thus the images $a_i/1$ generate $J$. As this holds for every $J$, [F10] implies that $R$ is Noetherian. [F7, F10, step 1.1, algebra]

3.1 The tangent dimension equals the embedding dimension of $R$. The maximal ideal $\mathfrak m$ is finitely generated because $R$ is Noetherian, so $\mathfrak m/\mathfrak m^2$ is a finite-dimensional vector space over $\kappa(x)$. By [F11] this quotient is $C_xX$, and by [F12] $T_xX$ is its $\kappa(x)$-linear dual; a finite-dimensional vector space and its dual have equal dimension. By [F13], this common dimension is $\operatorname{edim}R$. [F11, F12, F13, step 2.1, algebra]

4.1 Now [F8] and step 2.1 make $R=\mathcal O_{X,x}$ a nonzero Noetherian local ring, so the AC-dependent bound [F14] applies. Together with step 3.1 it gives $\dim\mathcal O_{X,x}\leq\operatorname{edim}R=\dim_{\kappa(x)}T_xX$. AC is used here through [F14], whose height-theorem input requires it; it is an explicit assumption, not a consequence of finite choice. [F1, F8, F14, step 2.1, step 3.1]

5.1 In the stated classical closed-point specialization, [F15] gives $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i=\dim_xX$. Substituting this equality into step 4.1 proves $\dim T_xX\geq\dim_xX$. This local-dimension supplier also assumes AC, already declared in the statement. [F1, F15, step 4.1, algebra]

6.1 At $X=\operatorname{Spec}k$, the only prime is $(0)$, so the unique local ring is $k$, its maximal ideal is zero, and [F19] gives local dimension zero; [F11, F12] give tangent dimension zero. The nonreduced dual-numbers scheme $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$ shows that the inequality may be strict. Its ring is a two-dimensional $k$-vector space, so every ideal, as a subspace, has a finite basis that generates it as an ideal; hence $D_k$ is Noetherian. Every prime contains $\epsilon$ because $\epsilon^2=0$ by [F17]. The ideal $(\epsilon)$ is proper because its elements are multiples of $\epsilon$ and cannot equal $1$. Any proper ideal strictly containing $(\epsilon)$ would contain $a+b\epsilon$ with $a\ne0$, a unit with inverse $a^{-1}-a^{-2}b\epsilon$. Thus $(\epsilon)$ is maximal by [F18] and, since every prime contains it, it is the unique prime. By [F5], $D_k$ has one point. Its local ring $D_{k,(\epsilon)}$ is $D_k$ since every denominator outside $(\epsilon)$ is a unit; by [F6, F7, F8, F19] its local dimension is zero. The residue field is $D_k/(\epsilon)\cong k$ by [F9], while the maximal ideal squares to zero, so $(\epsilon)/(\epsilon^2)$ is one-dimensional over the residue field. By [F11, F12], the tangent dimension is one. [F5, F6, F7, F8, F9, F11, F12, F16, F17, F18, F19, step 4.1, algebra] ∎
