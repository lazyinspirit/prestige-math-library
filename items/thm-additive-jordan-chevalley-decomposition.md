---
id: thm-additive-jordan-chevalley-decomposition
kind: theorem
title: "Over a perfect field, every endomorphism has a unique commuting semisimple-plus-nilpotent decomposition, polynomial in the endomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-and-nilpotent-endomorphisms, def-algebraic-closure, def-perfect-field, cor-algebraic-extensions-of-perfect-fields-are-separable, cor-primary-projections-are-polynomials-in-the-endomorphism, thm-jordan-form-exists-iff-the-characteristic-polynomial-splits, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, thm-finite-galois-extension-characterizations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Meinolf Geck, On the Jordan-Chevalley decomposition of a matrix"
      url: "https://arxiv.org/pdf/2205.05432"
    - title: "Joo Heon Yoo, The Jordan-Chevalley decomposition"
      url: "https://math.uchicago.edu/~may/REU2014/REUPapers/Yoo.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $V$ be a finite-dimensional vector space over a perfect field $F$, and let
$T:V\to V$ be linear. Then there exist unique endomorphisms $T_s,T_n:V\to V$
such that

$$T=T_s+T_n,\qquad T_sT_n=T_nT_s,$$

$T_s$ is semisimple, $T_n$ is nilpotent, and both $T_s$ and $T_n$ are
polynomials in $T$ with coefficients in $F$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. Let $V$ be a finite-dimensional vector space over a perfect field $F$, and let $T:V\to V$ be a linear endomorphism.

[L1] Every algebraic extension of a perfect field is separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[L2] If the characteristic polynomial splits, then Jordan form exists ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[L3] In a primary decomposition, each primary projection is a polynomial in the endomorphism ([[cor-primary-projections-are-polynomials-in-the-endomorphism]]).

[L4] A finite extension is Galois exactly when it is the splitting field of a separable polynomial, and then the fixed field of its full Galois group is the base field ([[thm-finite-galois-extension-characterizations]]).

[L5] An endomorphism is diagonalisable exactly when its minimal polynomial splits with distinct roots ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

## Proof

**Proof technique:** direct.

1.1 Choose an algebraic closure $\Omega/F$ as in [[def-algebraic-closure]]. Let $q$ be the product of the distinct monic irreducible factors of the characteristic polynomial of $T$, and let $E\subseteq\Omega$ be its splitting field. By [L1], the polynomial $q$ is separable, so [L4] makes $E/F$ finite Galois with fixed field $E^{\operatorname{Gal}(E/F)}=F$. The characteristic polynomial splits over $E$, and [L2] gives Jordan form for the matrix of $T$ over $E$. Thus $E^n$ decomposes as the direct sum of generalized eigenspaces $G_\lambda$, and $(T_E-\lambda I)|_{G_\lambda}$ is nilpotent. [L1, L2, L4]

2.1 Let $P_\lambda$ be the projection onto $G_\lambda$ along the sum of the other generalized eigenspaces. By [L3], each $P_\lambda$ is a polynomial in $T_E$. Define $S_E:=\sum_\lambda \lambda P_\lambda$ and $N_E:=T_E-S_E=\sum_\lambda (T_E-\lambda I)P_\lambda$. Then $T_E=S_E+N_E$, the operators commute because they are polynomials in $T_E$, the minimal polynomial of $S_E$ divides $\prod_\lambda (x-\lambda)$ and therefore has distinct roots, so [L5] makes $S_E$ semisimple, and $N_E$ is nilpotent because its restriction to each $G_\lambda$ is $(T_E-\lambda I)|_{G_\lambda}$. [L3, L5, step 1.1]

3.1 Suppose also that $T_E=S'_E+N'_E$ with $S'_E$ semisimple, $N'_E$ nilpotent, and $S'_EN'_E=N'_ES'_E$. Because $N'_E$ commutes with $T_E$, every generalized eigenspace $G_\lambda$ from step 1.1 is invariant under both $S'_E$ and $N'_E$. On $G_\lambda$, the operator $T_E$ has only the eigenvalue $\lambda$, while $N'_E$ has only the eigenvalue $0$; hence the semisimple operator $S'_E|_{G_\lambda}$ has only the eigenvalue $\lambda$, so $S'_E=\lambda I$ on $G_\lambda$ and therefore $N'_E=T_E-\lambda I$ there. Thus $S'_E=S_E$ and $N'_E=N_E$. [step 1.1, step 2.1, algebra]

4.1 Let $\sigma\in\operatorname{Gal}(E/F)$. Acting entrywise, $\sigma$ fixes the matrix of $T_E$ and permutes the roots of its characteristic polynomial. Applying $\sigma$ to the construction in step 2.1 therefore produces another commuting semisimple-plus-nilpotent decomposition of $T_E$. Uniqueness in step 3.1 forces $\sigma(S_E)=S_E$ and $\sigma(N_E)=N_E$. [step 2.1, step 3.1, L4]

5.1 Choose an $F$-basis $B_1,\dots,B_d$ of the finite-dimensional algebra $F[T]$. The same matrices form an $E$-basis of $E[T_E]$. Write $S_E=\sum_i c_iB_i$ with $c_i\in E$. Step 4.1 and uniqueness of coordinates give $\sigma(c_i)=c_i$ for every $\sigma\in\operatorname{Gal}(E/F)$, so [L4] gives $c_i\in F$. Hence $S_E$ is the scalar extension of a polynomial $T_s=p(T)$ with $p\in F[x]$. The same argument applies to $N_E$, giving $T_n=q(T)$ with $q\in F[x]$. Extending the identities of step 2.1 back down to $F$ gives $T=T_s+T_n$ and $T_sT_n=T_nT_s$; semisimplicity and nilpotence descend because their minimal-polynomial identities have coefficients in $F$. Uniqueness follows after extension to $E$ from step 3.1. [step 2.1, step 3.1, step 4.1, L4] ∎
