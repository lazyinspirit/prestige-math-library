---
id: def-type-a-q-schur-algebra-and-weyl-modules
kind: definition
title: "The type-A q-Schur algebra and its Weyl modules"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cellular-algebra-basis-and-cell-module, def-direct-sum-of-a-family-of-modules, def-dominance-order-on-partitions, def-generic-type-a-hecke-algebra, def-left-and-right-modules, def-murphy-elements-and-murphy-tableau-elements, def-semistandard-tableau-and-kostka-number, def-young-subgroup-tabloid-and-permutation-module, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: true
dependency_level: 2
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 4 Section 1, printed pp. 36-44: Theorem 4.8 (a basis of Hom_H(M^mu,M^nu) indexed by row-semistandard tableaux), (4.13) and Corollaries 4.9/4.12 (the elements phi_{ST}), Theorem 4.14 (R. Green's Semistandard Basis Theorem), (4.15) (the Weyl modules W^lambda and their bases), Theorem 4.16 and Corollary 4.18 (the nonzero simple heads, completeness and dominance unitriangularity)"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844; Bull. Amer. Math. Soc. 47 (2010) 419-481; complete 66-page arXiv survey, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 6.2, printed pp. 28-30: the q-Schur algebra S(d,n) as the endomorphism algebra of the sum of permutation modules, and the Weyl modules"
---

## Definition

Let $R$ be a commutative ring, $q\in R^{\times}$, $d,n\ge0$, and
$H=H_{R,q}(S_n)$ ([[def-generic-type-a-hecke-algebra]]). Let $\Lambda(d,n)$ be
the set of compositions $\mu=(\mu_1,\dots,\mu_d)$ of $n$ (so $\mu_i\in\mathbb N$
and $\sum_i\mu_i=n$). For $\mu\in\Lambda(d,n)$ let
$m_\mu=\sum_{w\in S_\mu}T_w$
([[def-murphy-elements-and-murphy-tableau-elements]]) and let $M^{\mu}:=m_\mu H$
be the right ideal it generates, the **(Hecke) permutation module**; $M^{\mu}$
is free over $R$ with basis
$\{m_\mu T_{d(t)}:t\text{ row-standard }\mu\text{-tableau}\}$ and is the Hecke
analogue of the module induced from the trivial representation of the Young
subgroup ([[def-young-subgroup-tabloid-and-permutation-module]]).

Here is the freeness statement in detail: the cosets $S_\mu d$ with $d\in D_\mu$
partition $S_n$, and $\ell(ud)=\ell(u)+\ell(d)$ for $u\in S_\mu$, $d\in D_\mu$
([[def-murphy-elements-and-murphy-tableau-elements]]), so the standard basis
theorem ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]) gives
$T_uT_{d(t)}=T_{ud(t)}$ and
$m_\mu T_{d(t)}=\sum_{u\in S_\mu}T_{u\,d(t)}$; these are the standard basis
elements indexed by the single coset $S_\mu d(t)$, and the cosets are disjoint,
whence $M^\mu=\bigoplus_tR\,m_\mu T_{d(t)}$ is free with the displayed basis as
$t$ runs over the row-standard $\mu$-tableaux.

Put $M:=\bigoplus_{\mu\in\Lambda(d,n)}M^{\mu}$
([[def-direct-sum-of-a-family-of-modules]]) and define the **q-Schur algebra**
$$S(d,n):=\mathrm{End}_H(M),$$
the $R$-algebra of right $H$-module endomorphisms of $M$
([[def-left-and-right-modules]]).

**Cellular structure.** For all $\mu,\nu\in\Lambda(d,n)$,
$\mathrm{Hom}_H(M^{\mu},M^{\nu})$ is free with a basis indexed by row-semistandard
tableaux; for every partition $\lambda$ of $n$ with at most $d$ parts and all
semistandard $\lambda$-tableaux $S,T$ there is an element
$\varphi_{ST}\in S(d,n)$
([[def-semistandard-tableau-and-kostka-number]]), and the family
$$\{\varphi_{ST}:\lambda\in\Lambda^{+}(d,n),\ S,T\in T_0(\lambda)\},$$
where $\Lambda^{+}(d,n)$ is the set of partitions of $n$ with at most $d$ parts
ordered by dominance $\unrhd$ ([[def-dominance-order-on-partitions]]), is an
$R$-basis of $S(d,n)$; the map $\varphi_{ST}\mapsto\varphi_{TS}$ is an algebra
anti-automorphism and the triangular axiom holds modulo the span of the
$\varphi_{UV}$ with $\mu\rhd\lambda$. Hence
$(\varphi,\Lambda^{+}(d,n))$ is a dominance-cellular basis of $S(d,n)$
([[def-cellular-algebra-basis-and-cell-module]]) and its cell modules are the
**Weyl modules** $W^{\lambda}$, free over $R$ with basis
$\{\varphi_T:T\in T_0(\lambda)\}$. Over a field $F$, $W^{\lambda}$ has nonzero
simple head $L^{\lambda}$, the $L^{\lambda}$ for
$\lambda\in\Lambda^{+}(d,n)$ form a complete set of pairwise non-isomorphic
absolutely irreducible $S(d,n)$-modules, and the decomposition matrix satisfies
$d_{\lambda\lambda}=1$ and $d_{\lambda\mu}\ne0\Rightarrow\lambda\unrhd\mu$.

**Semistandard idempotents and weight spaces.** In the same semistandard basis
the diagonal elements are orthogonal idempotents: $\varphi_{TT}^2=\varphi_{TT}$
and $\varphi_{SS}\varphi_{TT}=0$ for $S\ne T$ (Mathas Theorem 4.14, R. Green's
Semistandard Basis Theorem, printed p. 42; equivalently Dipper-James-Mathas,
The (Q,q)-Schur algebra, Section 5, where the diagonal semistandard elements
form a set of orthogonal idempotents whose sum is the identity of the Schur
algebra). For each composition $\nu\in\Lambda(d,n)$ let $T^{\nu}$ be the
row-semistandard $\nu$-tableau with all entries in row $i$ equal to $i$, so
that $T^{\nu}$ has shape $\nu$ and type $\nu$; the element
$\varphi_{T^{\nu}T^{\nu}}$ is the projection onto the $\nu$-weight space.
Over a field $F$ the weight-space dimensions of the Weyl modules are the Kostka
numbers:
$$\dim_F\bigl(W^{\lambda}\varphi_{T^{\nu}T^{\nu}}\bigr)=K_{\lambda\nu}=|T_0(\lambda,\nu)|$$
for $\lambda\in\Lambda^{+}(d,n)$ and $\nu\in\Lambda(d,n)$ (Mathas Lemma 5.30
with Theorem 4.16, printed pp. 55-60; [[def-semistandard-tableau-and-kostka-number]]).
