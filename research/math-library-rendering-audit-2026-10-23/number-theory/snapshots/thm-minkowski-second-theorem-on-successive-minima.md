---
id: thm-minkowski-second-theorem-on-successive-minima
kind: theorem
title: "Minkowski second theorem on successive minima"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-successive-minima-of-a-convex-body-with-respect-to-a-lattice
  - lem-successive-minima-attainment-and-adapted-flag
  - lem-minkowski-successive-minima-volume-deformation
  - lem-blichfeldt-lattice-point-principle
  - lem-full-lattice-fundamental-domain-and-bounded-points
  - def-convex-subset-of-euclidean-space
  - def-full-euclidean-lattice-and-covolume
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Additive Combinatorics, Lecture 3 §3.7"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf"
      locator: "Lecture 3 §3.7 Theorem 3.3, pp.27-28."
    - title: "Martin Henk, Successive Minima and Lattice Points"
      url: "https://arxiv.org/pdf/math/0204158"
      locator: "§3 pp.5-7, independent upper bound."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $C\subseteq\mathbb R^n$
be compact, convex, centrally symmetric
([[def-convex-subset-of-euclidean-space]]) with nonempty interior, and let
$\Lambda\subseteq\mathbb R^n$ be a full lattice with
$\operatorname{covol}(\Lambda)>0$
([[def-full-euclidean-lattice-and-covolume]]). Let
$\lambda_1\le\cdots\le\lambda_n$ be the successive minima of $C$ with respect
to $\Lambda$ ([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]).
Then

$$\frac{2^n}{n!}\operatorname{covol}(\Lambda)\;\le\; \Bigl(\prod_{i=1}^n\lambda_i\Bigr)\operatorname{vol}(C)\;\le\; 2^n\operatorname{covol}(\Lambda).$$

## Facts & Assumptions

**Given:** A compact convex centrally symmetric $C\subseteq\mathbb R^n$ with nonempty interior, a full lattice $\Lambda$ with $\operatorname{covol}(\Lambda)>0$, and the successive minima $\lambda_1\le\cdots\le\lambda_n$ of $C$ with respect to $\Lambda$.

[A1] The Axiom of Choice implies the Axiom of Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]), which supplies the hypotheses of the linear-change-of-variables fact [F6] invoked in steps 1.3 and 4.1, and of the Lebesgue-measure and Tonelli facts [F7] invoked in steps 2.1 and 3.1; no other selection is made.

[F1] The successive minima are defined by $\lambda_i=\inf\{t>0:\dim\operatorname{span}(tC\cap\Lambda)\ge i\}$, and for $C$ compact with nonempty interior and $\Lambda$ full one has $0<\lambda_1\le\cdots\le\lambda_n<\infty$; also $\lambda_0:=0$ by convention ([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]).

[F2] There exist linearly independent $a_1,\dots,a_n\in\Lambda$ with $a_i\in\lambda_iC$ for every $i$ ([[lem-successive-minima-attainment-and-adapted-flag]]).

[F3] With $U:=\operatorname{int}(C)$ the centroid map $\Phi:U\to\mathbb R^n$ of [[lem-minkowski-successive-minima-volume-deformation]] is Borel measurable, has $\operatorname{vol}(\Phi(U))=(\prod_i\lambda_i)\operatorname{vol}(C)$, and no two distinct points of $\Phi(U)$ differ by an element of $2\Lambda$ ([[lem-minkowski-successive-minima-volume-deformation]]).

[F4] Blichfeldt's principle: for a Lebesgue measurable $S\subseteq\mathbb R^n$ with $\operatorname{vol}(S)>\operatorname{covol}(\Lambda)$ there are distinct $x,y\in S$ with $x-y\in\Lambda$ ([[lem-blichfeldt-lattice-point-principle]]).

[F5] If $b_1,\dots,b_n$ is a $\mathbb Z$-basis of a full lattice $\Lambda$, then $\operatorname{covol}(\Lambda)=|\det(b_1,\dots,b_n)|$; consequently $\operatorname{covol}(2\Lambda)=|\det(2b_1,\dots,2b_n)|=2^n\operatorname{covol}(\Lambda)$ ([[def-full-euclidean-lattice-and-covolume]], [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

[F6] Assume the Axiom of Countable Choice. For a linear $T:\mathbb R^n\to\mathbb R^n$ with matrix $A$, if $\det A\ne0$ then $T[E]$ is measurable and $\lambda_n(T[E])=|\det A|\,\lambda_n(E)$ for every Lebesgue measurable $E$; if $\det A=0$, then $T[E]$ is measurable and null for every $E\subseteq\mathbb R^n$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F7] Under the Axiom of Countable Choice, product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets, and Tonelli's theorem permits iterated integration; thus the volume of a Borel subset of $\mathbb R^n$ can be computed by its coordinate integrals (for $n=1$, use the one-dimensional integral directly) ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). Also under Countable Choice, $\lambda_n$ is a complete measure and is therefore additive over finite unions of pairwise disjoint measurable sets ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F8] A convex set contains every convex combination of finitely many of its points, and central symmetry means $-C=C$ ([[def-convex-subset-of-euclidean-space]]).

[F9] For $A\in M_n(\mathbb Z)$ with $\det A\ne0$ the index $[\mathbb Z^n:A\mathbb Z^n]$ equals $|\det A|$ and is a positive integer; for real square matrices $\det(AB)=\det(A)\det(B)$ and $\det(2I_n)=2^n$ ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]], [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

## Proof

1.1 The minima satisfy $0<\lambda_1\le\cdots\le\lambda_n<\infty$, so every $\lambda_i$ is a positive finite real number. [F1, given]

1.2 Let $\Delta:=\{y\in\mathbb R^n:\sum_{i=1}^n|y_i|\le1\}$ and $S:=\{y\in\mathbb R^n:y_i\ge0,\ \sum_iy_i\le1\}$. [given]

1.3 For each sign vector $\varepsilon=(\varepsilon_1,\dots,\varepsilon_n)\in\{\pm1\}^n$ let $\varepsilon S:=\{(\varepsilon_1y_1,\dots,\varepsilon_ny_n):y\in S\}$. These $2^n$ measurable sets cover $\Delta$. If $\varepsilon\ne\varepsilon'$, choose $i$ with $\varepsilon_i\ne\varepsilon'_i$; then $\varepsilon S\cap\varepsilon'S$ lies in the coordinate hyperplane $H_i=\{y:y_i=0\}$. The projection onto $H_i$ is singular and has image $H_i$, so [F6] and [A1] give $\lambda_n(H_i)=0$. Thus the sign pieces overlap only on null sets. Each sign map is an invertible diagonal linear map with determinant of absolute value $1$, so [F6] and [A1] give $\lambda_n(\varepsilon S)=\lambda_n(S)$. [F6, A1, algebra]

1.4 For the upper bound, [F3] gives $\operatorname{vol}(\Phi(U))=(\prod_i\lambda_i)\operatorname{vol}(C)$ for the Borel set $\Phi(U)$, and $\operatorname{covol}(2\Lambda)=2^n\operatorname{covol}(\Lambda)$ by [F5]. [F3, F5]

2.1 By Tonelli's theorem [F7] applied to the indicator of the simplex, $\lambda_n(S)=\int_0^1\int_0^{1-x_1}\cdots\int_0^{1-x_1-\cdots-x_{n-1}}1\,dx_n\cdots dx_1=\frac{1}{n!}$. [F7, step 1.2]

2.2 $\Delta=\operatorname{conv}\{\pm e_1,\dots,\pm e_n\}$: every $y$ with $\sum_i|y_i|\le1$ is $\sum_iy_ie_i$, a convex combination of the vectors $\pm e_i$ after moving negative coefficients and adding the origin, and conversely every convex combination of the $\pm e_i$ satisfies the inequality. [step 1.2, algebra]

2.3 Choose linearly independent $a_1,\dots,a_n\in\Lambda$ with $a_i\in\lambda_iC$ by [F2], and let $B$ be the matrix with columns $a_1/\lambda_1,\dots,a_n/\lambda_n$; by step 1.1 the columns are well defined, and they are linearly independent, so $B$ is invertible and $P:=B[\Delta]=\{By:\sum_i|y_i|\le1\}$ is measurable. [F2, step 1.1]

2.4 If $\operatorname{vol}(\Phi(U))>\operatorname{covol}(2\Lambda)$ then [F4] applied to the lattice $2\Lambda$ produces distinct $x,y\in\Phi(U)$ with $x-y\in2\Lambda$, contradicting the collision-free clause of [F3]; hence $\operatorname{vol}(\Phi(U))\le\operatorname{covol}(2\Lambda)=2^n\operatorname{covol}(\Lambda)$. [F3, F4, F5, step 1.4]

3.1 Disjointifying the finite cover in step 1.3 changes each piece only by a null set, so finite additivity and steps 1.3 and 2.1 give $\operatorname{vol}(\Delta)=\sum_\varepsilon\lambda_n(\varepsilon S)=2^n/n!$. [F7, step 1.3, step 2.1]

3.2 Each $a_i/\lambda_i$ lies in $C$, and $-a_i/\lambda_i$ lies in $C$ by central symmetry; hence every convex combination of the $2n$ points $\pm a_i/\lambda_i$ lies in $C$ by [F8]. Since $B[\Delta]=\{\sum_iy_i(a_i/\lambda_i):\sum_i|y_i|\le1\}=\operatorname{conv}\{\pm a_i/\lambda_i\}$ by the same convex-combination identity as step 2.2, we have $P\subseteq C$. [F8, step 2.2, step 2.3]

3.3 Let $b_1,\dots,b_n$ be a $\mathbb Z$-basis of $\Lambda$ and $M=(b_1\ \cdots\ b_n)$, so $\operatorname{covol}(\Lambda)=|\det M|$; each $a_i\in\Lambda$ has $a_i=Mc_i$ with a unique $c_i\in\mathbb Z^n$, and $A=MD$ for $D=(c_1\ \cdots\ c_n)\in M_n(\mathbb Z)$. [F5, step 2.3]

4.1 Therefore $\operatorname{vol}(C)\ge\operatorname{vol}(P)=|\det B|\operatorname{vol}(\Delta)=2^n|\det B|/n!$ by [F6], whose Countable Choice hypothesis is supplied by [A1], and steps 3.1 and 3.2; writing $A=(a_1\ \cdots\ a_n)$ we have $B=A\operatorname{diag}(1/\lambda_1,\dots,1/\lambda_n)$, so $\det B=\det A/\prod_i\lambda_i$ by [F9], and multiplying the volume inequality by $\prod_i\lambda_i>0$ gives $(\prod_i\lambda_i)\operatorname{vol}(C)\ge2^n|\det A|/n!$. [F6, F9, A1, step 3.1, step 2.3, step 3.2]

4.2 Since $A$ is invertible and $\det A=\det M\det D$ by [F9], also $\det D\ne0$; hence $|\det D|=[\mathbb Z^n:D\mathbb Z^n]$ is a positive integer by [F9], in particular at least $1$. [F9, step 2.3, step 3.3]

5.1 It follows that $|\det A|=|\det M||\det D|\ge|\det M|=\operatorname{covol}(\Lambda)$, and combining with step 4.1 gives $(\prod_i\lambda_i)\operatorname{vol}(C)\ge2^n|\det A|/n!\ge(2^n/n!)\operatorname{covol}(\Lambda)$. [F5, step 4.1, step 3.3, step 4.2]

6.1 Steps 5.1 and 2.4 combine into $(2^n/n!)\operatorname{covol}(\Lambda)\le(\prod_i\lambda_i)\operatorname{vol}(C)\le2^n\operatorname{covol}(\Lambda)$. [step 5.1, step 2.4] ∎

## Remarks

The two bounds have different shapes. The lower bound is geometric: the adapted vectors $a_i\in\lambda_iC$ turn the cross-polytope of side data into a subset of $C$, and the determinant comparison against a lattice basis produces the index factor $|\det D|\ge1$. The upper bound is measure theoretic: the centroid deformation of [F3] has volume $(\prod_i\lambda_i)\operatorname{vol}(C)$ and avoids collisions modulo $2\Lambda$, so Blichfeldt's principle bounds that volume by $\operatorname{covol}(2\Lambda)$. For $\Lambda=\mathbb Z^n$, the cube $C=[-1,1]^n$ attains the upper bound: all $\lambda_i=1$ and $\operatorname{vol}(C)=2^n$. The cross-polytope $C=\{x:\sum_i|x_i|\le1\}$ attains the lower bound: again all $\lambda_i=1$, since $C$ contains the standard basis vectors and no $tC$ with $t<1$ contains a nonzero lattice point, while $\operatorname{vol}(C)=2^n/n!$ by step 3.1. The cube attains both bounds only when $n=1$.
