---
id: lem-zero-dimensional-projective-scheme-has-finite-local-charts
kind: lemma
title: "A zero-dimensional projective scheme has finitely many closed points with finite-dimensional local rings"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-scheme-from-a-homogeneous-quotient, lem-projective-standard-chart-prime-and-local-ring-correspondence, def-finite-type-and-module-finite-algebras, def-composition-series-and-length-of-a-module, def-simple-module, cor-noether-normalisation-module-finiteness, thm-integrality-and-finite-module-equivalences, thm-lying-over, cor-integral-extension-lifts-finite-prime-chains, cor-polynomial-ring-over-a-domain-is-a-domain, thm-quotient-is-domain-iff-ideal-prime, def-krull-dimension-of-a-ring, def-artinian-ring, thm-proper-ideal-contained-in-maximal-ideal, thm-artinian-ring-has-finitely-many-maximal-ideals, thm-structure-theorem-for-artinian-rings, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
short: "zero-dimensional Proj has finite closed points"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Chapter 6 (Proj and dimension), and Michael Artin, Algebraic Geometry notes"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Andreas Gathmann, Algebraic Geometry class notes (2002), Section 6.1, pp. 92-94"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
pipeline_run: frontier-35-ten-categories
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $I\subseteq k[x_0,\ldots,x_n]$
be a homogeneous ideal, let $S=k[x_0,\ldots,x_n]/I$ be the standard graded
quotient, and let $X=\operatorname{Proj}S$ with its standard charts
$D_+(x_i)=\operatorname{Spec}(A_i)$, $A_i=(S_{x_i})_0$
([[def-projective-scheme-from-a-homogeneous-quotient]]). Assume that every
chart ring $A_i$ is either zero or of Krull dimension $0$
([[def-krull-dimension-of-a-ring]]) — the zero-dimensional case. Then:

1. Each $A_i$ is a finitely generated $k$-algebra and a finite-dimensional
   $k$-vector space. If $A_i\ne0$ it is Artinian, its prime ideals are its
   finitely many maximal ideals $\mathfrak m_{i,1},\ldots,\mathfrak m_{i,r_i}$,
   and $A_i\cong\prod_{j=1}^{r_i}(A_i)_{\mathfrak m_{i,j}}$, each factor being a
   finite-dimensional local $k$-algebra with nilpotent maximal ideal.
2. $X$ has finitely many points, every point of $X$ is closed, and the
   underlying topological space of $X$ is finite and discrete.
3. For every point $x\in X$ the local ring $\mathcal O_{X,x}$ is a
   finite-dimensional local $k$-algebra with nilpotent maximal ideal and
   residue field $\kappa(x)$ finite over $k$, and $\mathcal O_{X,x}$ has finite
   length as a module over itself. It equals the local factor of the chart ring
   of every standard chart containing $x$.
4. Each chart is the disjoint union of the spectra of these local rings,
   $\operatorname{Spec}(A_i)=\bigsqcup_{x\in D_+(x_i)}\operatorname{Spec}(\mathcal O_{X,x})$,
   and these decompositions agree on the overlaps; hence $X$ is the finite
   disjoint union of the spectra of the finite-dimensional local $k$-algebras
   $\mathcal O_{X,x}$, $x\in X$.

The hypothesis is exactly the chartwise form of the zero-dimensionality of
$\operatorname{Proj}$; the Axiom of Choice is used only in the cited
prime-existence, prime-lifting and Artinian-structure suppliers.

## Facts & Assumptions

**Given:** A field $k$, a homogeneous ideal $I\subseteq k[x_0,\ldots,x_n]$, the quotient $S=k[x_0,\ldots,x_n]/I$, the projective scheme $X=\operatorname{Proj}S$ with standard charts $D_+(x_i)=\operatorname{Spec}(A_i)$, and the hypothesis that every $A_i$ is zero or of Krull dimension $0$.

[L1] $\operatorname{Proj}S$ has as points the homogeneous primes of $S$ with $S_+\nsubseteq\mathfrak p$, its standard charts are the affine schemes $\operatorname{Spec}(A_i)$ with $A_i=(S_{x_i})_0$, and these finitely many charts cover $X$ ([[def-projective-scheme-from-a-homogeneous-quotient]]); on each chart the points are the primes of $A_i$ and the stalk at such a point is the localization of $A_i$ at it, and the chart correspondences and local rings agree on overlaps ([[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L2] A commutative $R$-algebra $A$ is of finite type over $R$ when $A=R[a_1,\ldots,a_n]$ for some finitely many elements $a_i$, and module-finite when $A$ is finitely generated as an $R$-module; over a field, module-finite means finite-dimensional ([[def-finite-type-and-module-finite-algebras]]).

[L3] A composition series is a finite chain whose successive quotients are simple, and the length of a module admitting one is the number of factors; a one-dimensional vector space over a field is simple as a module over that field ([[def-composition-series-and-length-of-a-module]], [[def-simple-module]]).

[L4] A nonzero finite-type $k$-algebra $A$ admits algebraically independent $z_1,\ldots,z_d$ with $A$ module-finite over $k[z_1,\ldots,z_d]$ ([[cor-noether-normalisation-module-finiteness]]).

[L5] For $A\subseteq B$ commutative rings with $A\ne0$, an element is integral over $A$ exactly when it generates a module-finite $A$-subalgebra or when it acts faithfully on a module finitely generated over $A$ ([[thm-integrality-and-finite-module-equivalences]]); in particular a module-finite extension is integral, since $B$ is a faithful $A[b]$-module for every $b\in B$.

[L6] Assume AC. For an integral ring map $f:A\to B$ and a prime $\mathfrak p$ of $A$ with $\ker f\subseteq\mathfrak p$ there is a prime of $B$ contracting to $\mathfrak p$ (lying over, [[thm-lying-over]]), and a finite chain of primes of $A$ starting at the contraction of a given prime of $B$ lifts to a chain of primes of $B$ of the same length ([[cor-integral-extension-lifts-finite-prime-chains]]).

[L7] $k[z_1,\ldots,z_d]$ is an integral domain and $(z_1)$ is a prime ideal of it for $d\ge1$, its quotient being $k[z_2,\ldots,z_d]$ ([[cor-polynomial-ring-over-a-domain-is-a-domain]], [[thm-quotient-is-domain-iff-ideal-prime]]).

[L8] A commutative ring is Artinian when it satisfies the descending chain condition on ideals ([[def-artinian-ring]]); in a nonzero commutative ring every proper ideal lies in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]); an Artinian ring has only finitely many maximal ideals ([[thm-artinian-ring-has-finitely-many-maximal-ideals]]) and is isomorphic to the product of the localizations at them, as well as to the product of the quotients by powers of them, so each maximal ideal is nilpotent modulo the corresponding power ([[thm-structure-theorem-for-artinian-rings]]).

[L9] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Each $A_i$ is generated as a $k$-algebra by the finitely many ratios $x_j/x_i$, $j\ne i$, computed in $S_{x_i}$: an element of $A_i$ has the form $s/x_i^e$ with $s\in S$ homogeneous of degree $e$, the degree-$e$ piece of $S$ is spanned by the images of the monomials $x_0^{a_0}\cdots x_n^{a_n}$ with $a_0+\cdots+a_n=e$, and such a monomial satisfies $x_0^{a_0}\cdots x_n^{a_n}/x_i^e=\prod_{j\ne i}(x_j/x_i)^{a_j}$. Hence each $A_i$ is a finitely generated $k$-algebra, and $A_i=0$ exactly when the chart $D_+(x_i)$ is empty; by [L1] the finitely many nonempty charts cover $X$. [L1, L2, algebra]

1.2 If $C$ is a finite-dimensional $k$-algebra, every $C$-submodule of $C$ is a $k$-subspace, and a strict inclusion of $C$-submodules strictly raises $k$-dimension. Starting with $C_0=C$, if $C_j\ne0$, choose a proper $C$-submodule $C_{j+1}\subsetneq C_j$ of largest possible $k$-dimension; $0$ is one candidate, and the possible dimensions lie in the finite set $\{0,\ldots,\dim_k C_j-1\}$. No submodule lies strictly between $C_{j+1}$ and $C_j$, since it would have larger dimension, so $C_j/C_{j+1}$ is simple. The dimensions strictly decrease, hence the process reaches $0$ in at most $\dim_kC$ steps and gives a composition series of $C$-modules. Thus $\ell_C(C)\le\dim_kC$. A flag of arbitrary $k$-basis spans would not suffice, because those spans need not be $C$-submodules. [L3, algebra]

2.1 If $A_i\ne0$, then by [L4] there are algebraically independent $z_1,\ldots,z_d\in A_i$ such that $A_i$ is module-finite over $B=k[z_1,\ldots,z_d]$. The inclusion $B\subseteq A_i$ is then integral by [L5] and has zero kernel, so the kernel hypothesis of lying over is satisfied for $(0)$. If $d\ge1$, then $(0)\subsetneq(z_1)$ is a strict chain of primes of $B$ by [L7], lying over [L6] gives a prime $\mathfrak q_0$ of $A_i$ contracting to $(0)$, and the chain-lifting part of [L6] produces a prime $\mathfrak q_1\supseteq\mathfrak q_0$ contracting to $(z_1)$; since the two contractions differ, $\mathfrak q_0\ne\mathfrak q_1$, so $A_i$ contains a strict chain of two primes, contradicting $\dim A_i=0$. Hence $d=0$, so $B=k$ and $A_i$ is a finite-dimensional $k$-vector space. In particular $A_i$ is Artinian by [L8]: a strictly descending chain of ideals of $A_i$ is a strictly descending chain of $k$-subspaces, and every strict inclusion strictly lowers the $k$-dimension, so no infinite strictly descending chain exists. [L4, L5, L6, L7, L8, step 1.1]

3.1 Let $A_i\ne0$. By 2.1 it is Artinian, and its primes are maximal: a prime $\mathfrak p$ is contained in some maximal ideal $\mathfrak m$ by [L8], and $\mathfrak p\subsetneq\mathfrak m$ would be a strict chain of two primes, contradicting $\dim A_i=0$. There are therefore only finitely many primes, they are the maximal ideals $\mathfrak m_{i,1},\ldots,\mathfrak m_{i,r_i}$ of $A_i$, and the structure theorem [L8] gives an isomorphism $A_i\cong\prod_j(A_i)_{\mathfrak m_{i,j}}$, under which the factor $(A_i)_{\mathfrak m_{i,j}}$ is a quotient of the finite-dimensional $k$-algebra $A_i$, hence finite-dimensional, local as a localization at a maximal ideal, and has nilpotent maximal ideal because $A_i\cong\prod_jA_i/\mathfrak m_{i,j}^{n_j}$. The points of the chart $\operatorname{Spec}(A_i)$ are exactly these maximal ideals by [L1]. [L1, L8, step 2.1]

4.1 $X$ has finitely many points, all closed, whence its underlying space is finite and discrete. The charts are finitely many and each chart has the finitely many points $\mathfrak m_{i,1},\ldots,\mathfrak m_{i,r_i}$ of 3.1, so $X$ is finite. A subset $Z\subseteq X$ is closed exactly when every trace $Z\cap D_+(x_i)$ is closed in $D_+(x_i)$, because the charts are an open cover; for a point $x\in X$ the trace is empty whenever $x\notin D_+(x_i)$, and otherwise it is the singleton $\{x\}\subseteq\operatorname{Spec}(A_i)$, which is closed because $x$ corresponds to a maximal ideal of $A_i$ by 3.1. Hence every point of $X$ is closed, and in a finite space with all points closed every subset is a finite union of closed points, so the space is discrete. [L1, step 1.1, step 3.1]

4.2 Let $x\in X$ and let $D_+(x_i)$ be any standard chart containing it. By 3.1 the point corresponds to a maximal ideal $\mathfrak m$ of the chart ring $A_i$, and by [L1] we have $\mathcal O_{X,x}\cong(A_i)_{\mathfrak m}$. By 3.1 this factor is a finite-dimensional local $k$-algebra with nilpotent maximal ideal and is a quotient of $A_i$; its residue field is $A_i/\mathfrak m$, a quotient of the finite-dimensional $k$-algebra $A_i$, hence finite-dimensional over $k$; and it has finite length as a module over itself by 1.2. The same description holds for every chart containing $x$, and different charts give isomorphic local rings by the overlap statement in [L1]. [L1, step 1.2, step 3.1]

4.3 Let $A_i\ne0$. With the notation of step 3.1, write $A_i\cong\prod_jB_j$ where $B_j=(A_i)_{\mathfrak m_{i,j}}$. If $e_j$ is the coordinate idempotent of this product, a prime contains all but exactly one $e_j$: two omitted idempotents would have product zero, contrary to primality, and all cannot belong to a proper ideal because their sum is $1$. Thus every prime comes from one factor $B_j$. The maximal ideal of each local factor is nilpotent by step 3.1, so every prime contains it and must equal it; each factor has exactly one prime. Hence $\operatorname{Spec}(A_i)$ is the disjoint union of the spectra of the factors. By [L1] and step 3.1 each $B_j$ is the local ring $\mathcal O_{X,x}$ at the corresponding point $x$, so $\operatorname{Spec}(A_i)=\bigsqcup_{x\in D_+(x_i)}\operatorname{Spec}(\mathcal O_{X,x})$. For a point lying in two charts, [L1] identifies the point and the two local rings, so the decompositions agree on the overlap; since the standard charts cover $X$, this glues them into the finite disjoint union of the spectra of the local rings at all points of $X$. [L1, step 3.1]

5.1 Claim 1 is 1.1 and 3.1, claim 2 is 4.1, claim 3 is 4.2, and claim 4 is 4.3. The zero-dimensional hypothesis was used only through the chart rings $A_i$; the Axiom of Choice enters in the lying-over and chain-lifting suppliers of [L6], in the maximal-ideal and Artinian-structure suppliers of [L8], and it is the standing assumption [L9]. No finiteness of $X$ or Noetherianity was assumed in advance. [L9, step 1.1, step 3.1, step 4.1, step 4.2, step 4.3] ∎
