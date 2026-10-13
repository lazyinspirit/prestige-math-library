---
id: lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes
kind: lemma
title: "Selfadjoint weight Gram valuations detect Jantzen classes"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [lem-dvr-cellular-jantzen-filtration-and-gram-valuation,
       def-grothendieck-group-of-an-essentially-small-abelian-category,
       def-left-and-right-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Extracted text PDF pp. 5–6 Definition 2.5/Theorem 2.6 actually read. Original JM full proof unread; complete independent local alternative supplied."
    - title: "Mathas, Positive Jantzen sum formulas for cyclotomic Hecke algebras, arXiv:2106.15486v2"
      url: "https://arxiv.org/pdf/2106.15486v2"
      locator: "Extracted text PDF pp. 14–15 §4.1/Lemma 4.1/Proposition 4.3 actually read; elementary DVR/weight principle, no Specht-to-Schur converse."
---

## Statement

Let $O$ be a discrete valuation ring with uniformizer $\pi$ and residue field
$F$, and let $M$ be a finite free $O$-module with an $O$-valued bilinear form
$b$ whose scalar extension to $\operatorname{Frac}(O)$ is nondegenerate, as in
[[lem-dvr-cellular-jantzen-filtration-and-gram-valuation]] (the "(DVR leaf)"). Suppose
$1=\sum_\nu e_\nu$ is a finite decomposition into pairwise orthogonal
idempotents of an $O$-algebra $A$ acting on $M$, with $e_\nu^*=e_\nu$ for an
anti-involution $*$ satisfying $b(ax,y)=b(x,a^*y)$. Write
$M_\nu:=e_\nu M$ and let $G_\nu$ be the restricted Gram matrix. Then each
$M_\nu$ is finite free, each restricted generic form is nondegenerate, and
$$\sum_{s>0}\dim_F e_\nu M_F^s=\nu_\pi(\det G_\nu).$$
For a split finite-dimensional highest-weight algebra $S_F$ whose standard
classes $[\Delta(\mu)]$ form a $\mathbb Z$-basis of $K_0$ and whose matrix
$K_{\mu\nu}=\dim e_\nu\Delta(\mu)$ has a square unitriangular submatrix
containing every standard row $\mu$ and a selected set of partition-weight
columns $\nu$ of the same cardinality
([[def-grothendieck-group-of-an-essentially-small-abelian-category]]), the
weight-character map
$$\operatorname{ch}\colon K_0\to\mathbb Z^{\{\text{weights}\}},\qquad [N]\mapsto(\dim e_\nu N)_\nu,$$
is injective. Consequently a class equality involving Jantzen pieces is
equivalent to the corresponding equalities of weight Gram valuations.

## Facts & Assumptions

**Given:** The DVR $O$ with uniformizer $\pi$ and residue field $F$, the finite
free $O$-module $M$ with nondegenerate generic form $b$, the orthogonal
idempotent decomposition $1=\sum_\nu e_\nu$ with $e_\nu^*=e_\nu$, and the
summands $M_\nu=e_\nu M$.

[F1] (DVR leaf) For the free module $M$ with form $b$ one has
$\sum_{s>0}\dim_FM_F^s=\nu_\pi(\det G)$ for any Gram matrix $G$, the reduced filtration
$M_F^s$ terminates, and the subspace $M_F^1$ is the radical of the reduced form
([[lem-dvr-cellular-jantzen-filtration-and-gram-valuation]]).

[F2] Modules carry the unital actions of [[def-left-and-right-modules]]. Submodule freeness and exactness of $N\mapsto e_\nu N$ are proved locally below.

[F3] By hypothesis the standard classes form a $\mathbb Z$-basis and the indicated finite weight submatrix contains every standard row and is unitriangular. The Grothendieck-group relation is additivity on short exact sequences ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]); triangular invertibility is proved in step 1.4.

## Proof

**Proof technique:** direct.

**Given:** The data of the Statement and [F1]–[F3].

1.1 The decomposition is direct and its summands are free. The map $M\to\bigoplus_\nu M_\nu$, $x\mapsto(e_\nu x)_\nu$, is an $O$-linear isomorphism with inverse $(x_\nu)_\nu\mapsto\sum_\nu x_\nu$ (the $e_\nu$ are orthogonal idempotents summing to $1$), so $M=\bigoplus_\nu M_\nu$. To prove freeness, induct on $r$ for an arbitrary submodule $N\subseteq O^r$. The assertion is immediate for $r=0$. The first-coordinate image is an ideal $J$; if nonzero, the minimum valuation among its nonzero elements is attained by some $a\in J$, and every element of $J$ is divisible by $a$, so $J=aO$. Lift $a$ to $u\in N$. Subtracting multiples of $u$ gives $N=Ou\oplus\ker(\operatorname{pr}_1|_N)$, with the kernel a submodule of $O^{r-1}$; if $J=0$, all of $N$ lies in $O^{r-1}$. The induction proves finite freeness and rank at most $r$. Apply it to each $M_\nu\subseteq M$. [F2, algebra]

1.2 The summands are pairwise orthogonal and the restricted forms are nondegenerate. For $\nu\ne\rho$ and $x,y\in M$, $b(e_\nu x,e_\rho y)=b(x,e_\nu^*e_\rho y)=b(x,e_\nu e_\rho y)=0$ by $e_\nu^*=e_\nu$ and orthogonality, so $M_\nu$ and $M_\rho$ are orthogonal for $b$. If $x\in M_\nu$ is orthogonal to $M_\nu$, then it is orthogonal to every $M_\rho$ (orthogonality) and hence to $M$, so $x=0$ by generic nondegeneracy of $b$; the identical orthogonality argument after scalar extension handles every generic vector, and thus the restriction of $b$ to $M_\nu$ is nondegenerate over $\operatorname{Frac}(O)$. [F2, algebra]

1.3 Exactness and the character map. The functor $N\mapsto e_\nu N$ on $A$-modules is exact: a morphism commutes with $e_\nu$, so its kernel on $e_\nu N$ is $e_\nu$ times its kernel on $N$; if $y=e_\nu y$ lies in the image of a quotient map, any preimage $x$ may be replaced by $e_\nu x$ with the same image. Hence $\operatorname{ch}$ is an additive map on the Grothendieck group $K_0$ by [F3]. [F2, F3, algebra]

1.4 Injectivity of the weight character. Write a class in $K_0$ as $\sum_\mu a_\mu[\Delta(\mu)]$ with $a_\mu\in\mathbb Z$. Its coordinates on the partition weights are the row vector $a=(a_\mu)$ multiplied by the matrix $K=(K_{\mu\nu})$, $K_{\mu\nu}=\dim e_\nu\Delta(\mu)$. Restricting only the columns to the selected partition weights retains every coefficient $a_\mu$; the resulting square unitriangular matrix is invertible over $\mathbb Z$ by finite triangular elimination (all diagonal entries are $1$); if $\operatorname{ch}(a)=0$, then the coordinates on that submatrix vanish and the triangular system forces $a_\mu=0$ for every $\mu$. Hence $\operatorname{ch}$ is injective. [F3, algebra]

2.1 The Jantzen filtration decomposes. For each $s$ the orthogonality of the summands gives $M(s)=\bigoplus_\nu M_\nu(s)$ with $M_\nu(s)=\{x\in M_\nu:b(x,M_\nu)\subseteq\pi^sO\}$, because the components of $x$ in the other summands pair trivially; consequently $M_F^s=\bigoplus_\nu(M_\nu(s)+\pi M_\nu)/\pi M_\nu=\bigoplus_\nu e_\nu M_F^s$. For a zero-rank summand $M_\nu=0$, each $e_\nu M_F^s=0$, its empty Gram determinant is $1$ as specified by the DVR leaf, and both sides of the identity are $0$. Applying the DVR leaf [F1] to the free module $M_\nu$ with its restricted form and Gram matrix $G_\nu$ gives the displayed equality $\sum_{s>0}\dim_Fe_\nu M_F^s=\nu_\pi(\det G_\nu)$. [F1, step 1.1, step 1.2]

3.1 Conclusion. By step 2.1, the multiplicities appearing in a Jantzen class equality are exactly the weight Gram valuations $\nu_\pi(\det G_\nu)$; by step 1.4 the weight character detects class equalities, so a class equality involving Jantzen pieces holds if and only if the corresponding equalities of weight Gram valuations hold. No Schur functor, residue-sequence character, rationalization or semisimple Hecke Grothendieck group is used anywhere. [step 2.1, step 1.4] ∎

## Remarks

The lemma is the bridge that turns the exact DVR sum formula into a statement
about characters: orthogonal selfadjoint idempotents split both the module and
its Jantzen filtration, and a unitriangular standard-multiplicity matrix makes
the weight character faithful. The argument is finite and choice-free.
