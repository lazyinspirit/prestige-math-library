---
id: thm-finitely-generated-fi-modules-have-eventual-character-polynomials
kind: theorem
title: "Finitely generated FI-modules have eventual character polynomials"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [thm-finite-generation-is-equivalent-to-uniform-representation-stability,
       def-character-polynomial-in-cycle-counts,
       lem-padded-irreducible-characters-have-character-polynomials,
       def-weight-of-a-characteristic-zero-fi-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       prop-specht-constituents-of-an-fi-module-have-bounded-first-row,
       def-first-row-padding-of-a-partition,
       prop-weight-and-stability-degree-give-uniform-representation-stability-range,
       lem-generation-degree-bounds-surjectivity-degree-and-weight,
       lem-free-fi-modules-have-explicit-weight-and-stability-bounds,
       thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       def-free-fi-module-generated-by-an-sm-module,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       def-trace-of-a-square-matrix,
       def-polytabloid-specht-module-over-an-arbitrary-field,
       def-fi-category-and-fi-module,
       def-finite-generation-and-generation-degree-of-an-fi-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Theorem 3.3.4 with its complete proof, printed pp. 23–24: for $V$ finitely generated over a field of characteristic $0$ there is a unique character polynomial of weighted degree $\\le\\operatorname{weight}(V)$ representing the characters for all $n\\ge\\operatorname{stab-deg}(V)+\\operatorname{weight}(V)$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example I.7.14, printed pp. 122–124 (existence and degree bound for each padded irreducible family)"
---

## Statement

Let $k$ be a field of characteristic $0$ and let $V$ be a finitely generated
FI-module over $k$ with finite-dimensional values
([[def-fi-category-and-fi-module]]). Put
$d:=\operatorname{weight}(V)$ and $s:=\operatorname{stab-deg}(V)$; both are
finite because $V$ is finitely generated
([[def-weight-of-a-characteristic-zero-fi-module]],
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]). Then
there is a unique character polynomial $P_V\in\mathbb Q[X_1,X_2,\dots]$ of
weighted degree at most $d$ such that

$$\chi_{V_n}(\sigma)=P_V\bigl(X_1(\sigma),X_2(\sigma),\dots\bigr)$$

for every $n\ge s+d$ and every $\sigma\in S_n$, where
$\chi_{V_n}(\sigma):=\operatorname{tr}(\sigma;V_n)$ is the character of the
$kS_n$-module $V_n$ ([[def-character-polynomial-in-cycle-counts]],
[[def-trace-of-a-square-matrix]]). No choice principle is used.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$, a finitely generated FI-module $V$ over $k$ with finite-dimensional values, generated in degree $\le g$ for some $g\ge0$, and the character functions $\chi_{V_n}(\sigma)=\operatorname{tr}(\sigma;V_n)$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]], [[def-trace-of-a-square-matrix]]).

[F1] Generation in degree $\le d$ is equivalent to the existence of a surjection $\bigoplus_{i\in I}M(m_i)\twoheadrightarrow V$ with all $m_i\le d$, and $V$ is finitely generated exactly when some such presentation has finite index set (for some finite degree bound); $M(m)=M(k[S_m])$ is the free FI-module on the regular $kS_m$-module ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]], [[def-free-fi-module-generated-by-an-sm-module]]).

[F2] Generation in degree $\le d$ implies $\operatorname{surj-deg}(V)\le d$, and over a characteristic-zero field it implies $\operatorname{weight}(V)\le d$ ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]]).

[F3] $\operatorname{inj-deg}(M(W))=0$ for every FB-module $W$ ([[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]]).

[F4] Every sub-FI-module of a finitely generated FI-module over a commutative Noetherian ring containing $\mathbb Q$ is finitely generated ([[thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category]]).

[F5] $\Phi_a$ is exact over fields of characteristic $0$, natural in the FI-module variable, and preserves finite direct sums, so the transition map of a direct sum is the direct sum of the transition maps ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F6] $\operatorname{stab-deg}(V)=\max(\operatorname{inj-deg}(V),\operatorname{surj-deg}(V))$, where $\operatorname{inj-deg}$ and $\operatorname{surj-deg}$ are the least thresholds beyond which all transition maps are injective, respectively surjective ([[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).

[F7] If an FI-module over a characteristic-zero field has finite-dimensional values and finite weight $d$ and stability degree $s$, then its consistent sequence is uniformly representation stable with stable range $n\ge d+s$; consequently the multiplicity $c_{\lambda,n}$ of $V(\lambda)_n$ in $V_n$ is independent of $n$ for $n\ge d+s$ ([[prop-weight-and-stability-degree-give-uniform-representation-stability-range]], [[def-weight-of-a-characteristic-zero-fi-module]]).

[F8] Every constituent $V(\lambda)_n$ of $V_n$ satisfies $\lambda_1\le s$ whenever $s=\operatorname{stab-deg}(V)$ is finite ([[prop-specht-constituents-of-an-fi-module-have-bounded-first-row]]).

[F9] For a partition $\lambda$ with $|\lambda|=m$ there is a character polynomial $P_\lambda\in\mathbb Q[X_1,X_2,\dots]$ of weighted degree at most $m$ such that the character of the padded Specht module satisfies $\chi^{\lambda[n]}(\sigma)=P_\lambda(X_1(\sigma),X_2(\sigma),\dots)$ for all $n\ge m+\lambda_1$ and all $\sigma\in S_n$ ([[lem-padded-irreducible-characters-have-character-polynomials]], [[def-first-row-padding-of-a-partition]]).

[F10] The field-valued Specht modules are the scalar extensions of the single $\mathbb Z$-model $S^\lambda_{\mathbb Z}$ built from polytabloids ([[def-polytabloid-specht-module-over-an-arbitrary-field]]), and the $kS_n$-module $V(\lambda)_n$ is $k\otimes_{\mathbb Q}S^{\lambda[n]}_{\mathbb Q}$, the irreducible with label $\lambda[n]$ ([[def-weight-of-a-characteristic-zero-fi-module]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]). Consequently the trace of $\sigma\in S_n$ on $V(\lambda)_n$ is the image under $\mathbb Z\to k$ of an integer and equals the value of the character polynomial of [F9] evaluated at the cycle counts of $\sigma$.

[F11] If two character polynomials agree as functions on $S_n$ for infinitely many $n$, they are equal; the weighted degree of a sum is at most the maximum of the weighted degrees of the summands ([[def-character-polynomial-in-cycle-counts]]).

[F12] The trace on a finite direct sum is the sum of the block traces. Also $\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\operatorname{tr}(BA)$, so $\operatorname{tr}(B^{-1}AB)=\operatorname{tr}(A)$ for invertible $B$. These follow from the diagonal-sum definition ([[def-trace-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Since $V$ is generated in degree $\le g$, [F2] gives $\operatorname{weight}(V)\le g$, so $d\le g<\infty$. By [F1] there is a finite surjection $M:=\bigoplus_{i=1}^{r}M(m_i)\twoheadrightarrow V$ with all $m_i\le g$; let $K$ be its kernel. The module $M$ is finitely generated, so $K$ is finitely generated by [F4] applied over the field $k$; say $K$ is generated in degree $\le r'$. [F1, F2, F4]

2.1 We show that $s=\operatorname{stab-deg}(V)\le\max(g,r')<\infty$. For every $a$ the exactness of $\Phi_a$ gives an exact sequence $0\to\Phi_a(K)\to\Phi_a(M)\to\Phi_a(V)\to0$ by [F5]. The transition map of $M$ is the direct sum of the transition maps of the finitely many free modules $M(m_i)$, each injective in every degree by [F3] and [F5], so $T\colon\Phi_a(M)_n\to\Phi_a(M)_{n+1}$ is injective for all $n$; and $T\colon\Phi_a(K)_n\to\Phi_a(K)_{n+1}$ is surjective for $n\ge r'$ by [F2]. Then $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is injective for $n\ge r'$: a lift $\tilde x$ of $x$ with $Tx=0$ has $T\tilde x$ in the image of $\Phi_a(K)$, so $T\tilde x=T\tilde y$ for some $\tilde y\in\Phi_a(K)_n$, and injectivity on $\Phi_a(M)$ gives $\tilde x=\tilde y$, whence $x=0$. Hence $\operatorname{inj-deg}(V)\le r'$; since also $\operatorname{surj-deg}(V)\le g$ by [F2], [F6] gives $s\le\max(g,r')<\infty$. [F2, F3, F5, F6, step 1.1]

3.1 By [F7] applied with the finite numbers $d$ and $s$ of step 2.1, the consistent sequence of $V$ is uniformly representation stable with stable range $n\ge s+d$; that is, for every $n\ge s+d$ the multiplicities $c_{\lambda,n}$ of the irreducibles $V(\lambda)_n$ in $V_n$ are independent of $n$, so with $c_\lambda:=c_{\lambda,n}$ one has $V_n\cong\bigoplus_\lambda c_\lambda V(\lambda)_n$ for all $n\ge s+d$, the sum being finite because only labels with $|\lambda|\le d$ occur. Moreover every $\lambda$ with $c_\lambda\ne0$ satisfies $|\lambda|\le d$ by the definition of weight and $\lambda_1\le s$ by [F8]; hence $|\lambda|+\lambda_1\le d+s\le n$ throughout the range. [F7, F8, step 2.1]

4.1 For each $\lambda$ with $c_\lambda\ne0$, [F9] and [F10] give a character polynomial $P_\lambda$ of weighted degree at most $|\lambda|$ with $\chi_{V(\lambda)_n}(\sigma)=P_\lambda(X_1(\sigma),X_2(\sigma),\dots)$ for all $n\ge|\lambda|+\lambda_1$ and all $\sigma\in S_n$. Define $P_V:=\sum_\lambda c_\lambda P_\lambda$, a finite sum; every summand has weighted degree at most $d$, so $P_V$ does too by [F11], including the empty sum $P_V=0$. For $n\ge s+d$ and $\sigma\in S_n$, additivity of the trace over the direct sum [F12] gives $\chi_{V_n}(\sigma)=\sum_\lambda c_\lambda\chi_{V(\lambda)_n}(\sigma)$, and by step 3.1 every summand satisfies $n\ge|\lambda|+\lambda_1$, so this equals $\sum_\lambda c_\lambda P_\lambda(X(\sigma))=P_V(X(\sigma))$. [F9, F10, F11, F12, step 3.1]

5.1 The polynomial $P_V$ of step 4.1 has the required degree bound and represents $\chi_{V_n}$ for all $n\ge s+d$ and all $\sigma\in S_n$. It is unique: two character polynomials agreeing on $S_n$ for all $n\ge s+d$ agree on infinitely many $S_n$, hence are equal by [F11]. This proves the theorem. [F11, step 4.1] ∎
