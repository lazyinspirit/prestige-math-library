---
id: lem-virtual-weyl-combinations-detect-q-schur-block-separation
kind: lemma
title: "Virtual Weyl combinations detect q-Schur block separation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-type-a-q-schur-algebra-and-weyl-modules, def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents, def-grothendieck-group-of-an-essentially-small-abelian-category, lem-semistandard-weight-dimensions-detect-virtual-weyl-classes]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.30 with its proof and Lemma 5.35 with its proof, printed pp. 58-61"
    - title: "Sinead Lyle and Andrew Mathas, Blocks of affine and cyclotomic Hecke algebras, author-hosted complete 19-page preprint (published in Math. Z.)"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf"
      locator: "Lemma 2.4 and its use in the first half of Proposition 2.9, printed pp. 5-7: linear independence of the Weyl classes and the block-projection argument"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, $d,n\ge1$, and let $S=S(d,n)$ be the
$q$-Schur algebra over $F$ with Weyl modules $W^{\lambda}$ for
$\lambda\in\Lambda^{+}(d,n)$
([[def-type-a-q-schur-algebra-and-weyl-modules]]). Let $M$ be a finite
dimensional right $S$-module all of whose composition factors lie in a single
block $B$ of $S$
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]),
and let integers $a_{\lambda}$, $\lambda\in\Lambda^{+}(d,n)$, satisfy
$$[M]=\sum_{\lambda\in\Lambda^{+}(d,n)}a_{\lambda}[W^{\lambda}]$$
in the Grothendieck group $G_0(S\text{-mod})$
([[def-grothendieck-group-of-an-essentially-small-abelian-category]]). Then
$W^{\lambda}$ lies in $B$ whenever $a_{\lambda}\ne0$. In particular no nonzero
virtual combination of Weyl classes all of whose terms lie outside $B$ can
equal the class of a module in $B$.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$, $d,n\ge1$, the algebra $S=S(d,n)$
with Weyl modules $W^{\lambda}$, $\lambda\in\Lambda^{+}(d,n)$, a finite
dimensional right $S$-module $M$ whose composition factors all lie in one
block $B$, and integers $a_{\lambda}$ with
$[M]=\sum_{\lambda}a_{\lambda}[W^{\lambda}]$ in $G_0(S\text{-mod})$
([[def-type-a-q-schur-algebra-and-weyl-modules]],
[[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

[F1] Blocks: $1=\sum_i\epsilon_i$ is the unique decomposition of the identity
of $S$ into pairwise orthogonal primitive central idempotents, the blocks are
the two-sided ideals $B_i=S\epsilon_i=\epsilon_iS$, and for every right
$S$-module $N$ one has $N=\bigoplus_iN\epsilon_i$; a simple module $L$ lies in
exactly one block and satisfies $L\epsilon_i=L$ for that $i$
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).
We write $\epsilon_B$ for the idempotent of the block $B$ of the statement.

[F2] Each Weyl module $W^{\lambda}$ has simple head $L^{\lambda}$, with
$[W^{\lambda}:L^{\lambda}]=1$ and $[W^{\lambda}:L^{\mu}]\neq0\Rightarrow
\lambda\unrhd\mu$; in particular every composition factor of $W^{\lambda}$ lies
in the block containing the simple module $L^{\lambda}$, and this is the block
of $W^{\lambda}$ ([[def-type-a-q-schur-algebra-and-weyl-modules]], [F1]).

[F3] $G_0(S\text{-mod})$ is the free abelian group on the classes $[L]$ of the
simple modules, the classes $[W^{\lambda}]$ form a $\mathbb Z$-basis as well,
and a finite-dimensional $S$-module $N$ has class
$[N]=\sum_{\lambda}c_{\lambda}[W^{\lambda}]$ only for its actual Weyl
multiplicities; equivalently, a finite identity
$\sum_{\lambda}c_{\lambda}[W^{\lambda}]=0$ in $G_0(S\text{-mod})$ forces
$c_{\lambda}=0$ for all $\lambda$
([[def-grothendieck-group-of-an-essentially-small-abelian-category]],
[[lem-semistandard-weight-dimensions-detect-virtual-weyl-classes]]).

[F4] An exact functor between abelian categories induces a homomorphism of
Grothendieck groups, and the finite-dimensional $S$-modules form an abelian
category in which $G_0$ is computed by composition multiplicities
([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

## Proof


**Proof technique:** direct.

1.1 Multiplication by the central idempotent $\epsilon_B$ is the projection of every right $S$-module onto its $B$-summand: $N=\bigoplus_iN\epsilon_i$ by [F1], so $N\epsilon_B$ is that direct summand and is a submodule, and $N\epsilon_B=N$ exactly when all composition factors of $N$ lie in $B$. The assignment $N\mapsto N\epsilon_B$ is exact, because it is the projection onto a direct summand of the identity functor: for $f:N\to N'$ one has $f(N\epsilon_B)=f(N)\epsilon_B$, $\ker(f|_{N\epsilon_B})=(\ker f)\epsilon_B$ and $\operatorname{im}(f|_{N\epsilon_B})=(\operatorname{im}f)\epsilon_B$, so it preserves kernels and images. [F1, F4]

1.2 For a Weyl module $W^{\lambda}$ the projection $W^{\lambda}\epsilon_B$ is $W^{\lambda}$ if $W^{\lambda}$ lies in $B$ and is $0$ otherwise. Indeed $W^{\lambda}$ has simple head $L^{\lambda}$ and all its composition factors lie in the block of $L^{\lambda}$ by [F2]; since $W^{\lambda}$ is indecomposable, it lies in a single block, namely that of $L^{\lambda}$, so $W^{\lambda}\epsilon_B$ is $W^{\lambda}$ for that $B$ and vanishes for every other block idempotent. [F1, F2]

2.1 Apply the exact projection of step 1.1 to the class identity of the hypothesis. Since $M\epsilon_B=M$ by the hypothesis that all composition factors of $M$ lie in $B$, and since $W^{\lambda}\epsilon_B$ is $W^{\lambda}$ or $0$ by step 1.2, the induced identity in $G_0$ reads $$[M]=\sum_{\lambda:\,W^{\lambda}\in B}a_{\lambda}[W^{\lambda}].$$ Subtracting it from the given identity $[M]=\sum_{\lambda}a_{\lambda}[W^{\lambda}]$ yields $$\sum_{\lambda:\,W^{\lambda}\notin B}a_{\lambda}[W^{\lambda}]=0$$ in $G_0(S\text{-mod})$. [F4, step 1.1, step 1.2, algebra]

3.1 By the linear independence of the Weyl classes [F3], all coefficients in the vanishing combination of step 2.1 are zero: $a_{\lambda}=0$ for every $\lambda$ with $W^{\lambda}\notin B$, which is the contrapositive of the assertion that $a_{\lambda}\ne0$ implies $W^{\lambda}\in B$. [F3, step 2.1] ∎
