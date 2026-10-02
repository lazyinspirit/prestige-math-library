---
id: lem-minkowski-successive-minima-volume-deformation
kind: lemma
title: "Successive-minima volume deformation and collision avoidance"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-successive-minima-of-a-convex-body-with-respect-to-a-lattice
  - lem-successive-minima-attainment-and-adapted-flag
  - lem-triangular-borel-maps-scale-euclidean-volume
  - def-convex-subset-of-euclidean-space
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-measure
  - def-full-euclidean-lattice-and-covolume
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
      locator: "Lecture 3 §3.7 Theorem 3.3 proof, pp.27-28."
    - title: "Martin Henk, Successive Minima and Lattice Points"
      url: "https://arxiv.org/pdf/math/0204158"
      locator: "§3 pp.5-7, independent upper-bound proof."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$C\subseteq\mathbb R^n$ be compact, convex, centrally symmetric with nonempty
interior, let $\Lambda$ be a full lattice, let
$\lambda_1\le\cdots\le\lambda_n$ be the successive minima of $C$ with respect
to $\Lambda$
([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]), and
let $a_1,\dots,a_n\in\Lambda$ be an adapted basis as in clause 2 of
[[lem-successive-minima-attainment-and-adapted-flag]]. Put $U:=\operatorname{int}(C)$
and $\lambda_0:=0$, and write $x=\sum_ix_ia_i$ for the coordinates of $x$ in
the real basis $a_1,\dots,a_n$. For $x\in U$ and $1\le j\le n$ let

$$F_j(x):=\{z\in C:z_i=x_i\ \text{for}\ i\ge j\}$$

be the slice of $C$ through $x$ parallel to $\operatorname{span}(a_1,\dots,a_{j-1})$;
define $\varphi_1(x):=x$ and, for $j\ge2$, let $\varphi_j(x)$ be the centroid
of $F_j(x)$, that is the mean vector of $F_j(x)$ with respect to
$(j-1)$-dimensional Lebesgue measure on its affine hull. Define

$$\Phi(x):=\sum_{j=1}^n(\lambda_j-\lambda_{j-1})\,\varphi_j(x),\qquad x\in U .$$

Then:

1. each $\varphi_j:U\to C$ is Borel, its $i$-th coordinate equals $x_i$ for
   $i\ge j$, and for $i<j$ its $i$-th coordinate is a Borel function of
   $(x_j,\dots,x_n)$ alone;
2. $\Phi$ is Borel and odd, and in coordinates
   $\Phi_i(x)=\lambda_ix_i+\psi_i(x_{i+1},\dots,x_n)$ for Borel functions
   $\psi_i:\mathbb R^{n-i}\to\mathbb R$;
3. $\operatorname{vol}\bigl(\Phi(U)\bigr)=\bigl(\prod_{i=1}^n\lambda_i\bigr)\operatorname{vol}(C)$;
4. no two distinct points of $\Phi(U)$ differ by an element of $2\Lambda$, and
   $\Phi(U)\cap\Lambda=\{0\}$.

Convexity of the image $\Phi(U)$ is not asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, a compact convex centrally symmetric body
$C\subseteq\mathbb R^n$ with nonempty interior, a full lattice $\Lambda$, the
successive minima $\lambda_1\le\cdots\le\lambda_n$, an adapted basis
$a_1,\dots,a_n\in\Lambda$, and $U=\operatorname{int}(C)$.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), which discharges
the Countable Choice hypotheses of the product-measure fact [F4] and of the
volume-scaling fact [F6], invoked in steps 5.1 and 2.2 respectively; the
triangular map fact [F3] is applied under the Axiom of Choice assumed in the
statement, and the only arbitrary pick below is the single point $x_0\in U$
fixed in step 2.2, which requires no choice principle.

[F1] $\lambda_i=\inf\{t>0:\dim\operatorname{span}(tC\cap\Lambda)\ge i\}$,
$0<\lambda_1\le\cdots\le\lambda_n<\infty$, $sC\subseteq tC$ for $0<s<t$, and
$tC$ is compact and convex for every $t>0$
([[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]]).

[F2] $a_1,\dots,a_n$ are linearly independent vectors of $\Lambda$ with
$a_i\in\lambda_iC$,
$\operatorname{span}(\lambda_iC\cap\Lambda)=\operatorname{span}\{a_j:\lambda_j\le\lambda_i\}$,
and $\operatorname{span}\bigl(\operatorname{int}(\lambda_iC)\cap\Lambda\bigr)\subseteq
\operatorname{span}\{a_j:\lambda_j<\lambda_i\}$
([[lem-successive-minima-attainment-and-adapted-flag]]).

[F3] A triangular Borel map $T(x)_i=a_ix_i+\psi_i(x_{i+1},\dots,x_n)$ with
$a_i>0$ and $\psi_i$ Borel is a Borel bijection of $\mathbb R^n$ with Borel
inverse, sends Borel sets to Borel sets, and
$\operatorname{vol}(T(E))=(\prod_ia_i)\operatorname{vol}(E)$ for every Borel
$E$ ([[lem-triangular-borel-maps-scale-euclidean-volume]]).

[F4] Tonelli: for product-measurable $f\ge0$ the partial integrals
$y\mapsto\int f(x,y)\,d\mu(x)$ are measurable, and iterated integrals agree
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the product measure
agrees with Lebesgue measure on Borel sets
([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).
For a signed first-moment integrand, apply Tonelli separately to its positive
and negative parts; for the compact set $C'$ in step 5.1 both parts have
bounded support and finite integrals.

[F5] If $K$ is nonempty, compact and convex in an affine subspace $H$ of
dimension $m\ge1$, and has positive $m$-dimensional relative volume, its
centroid with respect to relative Lebesgue measure on $H$ lies in $K$. Indeed,
choose an affine isometry $\psi:\mathbb R^m\to H$ and put
$K_0:=\psi^{-1}(K)$; relative measure and centroids correspond to ordinary
Lebesgue measure and centroids on $K_0$. Its coordinate functions are
integrable because $K_0$ is compact. If its centroid $c_0$ were outside the
closed convex set $K_0$, strict separation would give $u\ne0$ and $b$ with
$\langle u,z\rangle\le b<\langle u,c_0\rangle$ for every $z\in K_0$
([[thm-strict-separation-of-a-point-from-a-closed-convex-set]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]), while
linearity of the integral gives
$\langle u,c_0\rangle=\lambda_m(K_0)^{-1}\int_{K_0}\langle u,z\rangle\,dz\le b$,
a contradiction ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F6] Translations and nonzero dilations of Lebesgue measurable sets are
measurable and satisfy $\lambda_n(E+h)=\lambda_n(E)$,
$\lambda_n(tE)=|t|^n\lambda_n(E)$; invertible linear images satisfy
$\lambda_n(T[E])=|\det T|\lambda_n(E)$
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]],
[[thm-lebesgue-measure-under-dilations-and-reflections]],
[[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F7] For a measure $\mu$ and measurable sets $A_k\uparrow A$ one has
$\mu(A)=\lim_k\mu(A_k)=\sup_k\mu(A_k)$: this follows from countable additivity
by writing $A=A_1\sqcup\bigsqcup_k(A_{k+1}\setminus A_k)$
([[def-measure]]).

[F8] $C$ is convex and closed, $-C=C$, $0\in C$, and the interior $U$ of a
convex set is convex; if $u\in U$, $v\in C$ and $0\le s<1$, then
$(1-s)u+sv\in U$, because $B(u,\delta)\subseteq C$ for some $\delta>0$ and
convexity gives $B((1-s)u+sv,(1-s)\delta)\subseteq C$
([[def-convex-subset-of-euclidean-space]]).

## Proof

1.1 The vectors $a_1,\dots,a_n$ form a real basis by [F2], so $x=\sum_ix_ia_i$ is a well-defined coordinate representation; $L(t):=\sum_it_ia_i$ is an invertible linear map. [F2]

1.2 $U=\operatorname{int}(C)$ is open, convex, nonempty, bounded and symmetric ($U=-U$), and $0\in U$; also $\operatorname{int}(tC)=tU$ for every $t>0$. [F1, F8]

1.3 (Collision avoidance.) Let $x,y\in U$ be distinct with $\Phi(x)-\Phi(y)\in2\Lambda$, and put $\mu:=(\Phi(x)-\Phi(y))/2\in\Lambda$. Let $k$ be the largest index with $x_k\ne y_k$. [given]

1.4 (No nonzero lattice point in the image.) Let $\nu\in\Phi(U)\cap\Lambda$, say $\nu=\Phi(x)$ with $x\in U$, and suppose $x\ne0$; let $k$ be the largest index with $x_k\ne0$. [given]

2.1 For $x\in U$ and $j\ge2$ the slice $F_j(x)$ of the statement is compact and convex (an intersection of the convex set $C$ with the affine subspace $\{z_i=x_i,\ i\ge j\}$), it contains $x$, and it has positive $(j-1)$-dimensional volume: $B(x,\delta)\subseteq U$ for some $\delta>0$, and the relative ball $B(x,\delta)\cap(x+\operatorname{span}(a_1,\dots,a_{j-1}))$ lies in $F_j(x)$. For $j=1$, $F_1(x)=\{x\}$. [F1, F8, step 1.2]

2.2 (The interior has the same volume as the body.) Fix $x_0\in U$ and put $C_k:=(1-1/k)C+(1/k)x_0$ for $k\ge2$; every scale $1-1/k$ is positive. Each $C_k$ is compact and convex, and $C_k\subseteq U$ by [F8]. To see the sequence is increasing, for $c\in C$ set $c':=(1-1/k^2)c+(1/k^2)x_0\in C$; then $(1-1/k)c+(1/k)x_0=(1-1/(k+1))c'+(1/(k+1))x_0$, so $C_k\subseteq C_{k+1}$. For every $z\in U$, the points $c_k:=z+(z-x_0)/(k-1)$ tend to $z$, so for all sufficiently large $k$ openness of $U$ gives $c_k\in U\subseteq C$ and $z=(1-1/k)c_k+(1/k)x_0\in C_k$. Thus $U=\bigcup_{k\ge2}C_k$, and [F7] and [F6] give $\operatorname{vol}(U)=\lim_{k\to\infty}\operatorname{vol}(C_k) =\lim_{k\to\infty}(1-1/k)^n\operatorname{vol}(C)=\operatorname{vol}(C)$; the Countable Choice hypothesis of [F6] is supplied by [A1]. [F6, F7, F8, A1, step 1.2]

3.1 By [F5] applied to the compact convex slice $F_j(x)$, its centroid $\varphi_j(x)$ lies in $F_j(x)\subseteq C$; in particular $\varphi_1(x)=x\in U$. [F5, step 2.1]

4.1 For $z\in F_j(x)$ one has $z_i=x_i$ whenever $i\ge j$; hence the $i$-th coordinate of $\varphi_j(x)$ equals $x_i$ for $i\ge j$, and for $i<j$ the integral defining that coordinate is taken over the fibre of $C$ over $(x_j,\dots,x_n)$, so it depends only on those coordinates. [step 2.1, step 3.1, algebra]

4.2 $\varphi_j$ is odd: $x\mapsto-x$ maps $U$ onto $U$ and $F_j(x)$ onto $F_j(-x)=-F_j(x)$. On the affine hull of each slice this reflection is an affine isometry whose linear part has determinant of absolute value $1$, so it preserves relative Lebesgue measure by [F6]. Changing variables in the centroid integral therefore gives $\varphi_j(-x)=-\varphi_j(x)$. This uses the paired-slice identity $F_j(-x)=-F_j(x)$ and does not require an individual slice $F_j(x)$ to be symmetric. [F6, F8, step 3.1, algebra]

5.1 (Borelness of the centroids.) In the coordinate model of step 1.1 write $C'=L^{-1}(C)$, which is compact because $L$ is a homeomorphism, and write $U'=L^{-1}(U)$. Fix $j\ge2$ and split $t=(s,\tau)$ with $s\in\mathbb R^{j-1}$ and $\tau\in\mathbb R^{n-j+1}$. The functions $V_j(\tau):=\int_{\mathbb R^{j-1}}\mathbf 1_{C'}(s,\tau)\,ds$ and $M_{j,i}(\tau):=\int_{\mathbb R^{j-1}}s_i\mathbf 1_{C'}(s,\tau)\,ds$ are Borel by Tonelli [F4], with the signed moment split into positive and negative parts; compactness of $C'$ makes their supports bounded. Let $A_j$ be the matrix with columns $a_1,\dots,a_{j-1}$. The restriction of $L$ to the first $j-1$ coordinates scales intrinsic fibre measure by the constant $J_j=\sqrt{\det(A_j^{\mathsf T}A_j)}>0$, independent of $\tau$. Thus this factor cancels in the centroid ratios, and for $i<j$ the $i$-th coordinate of $\varphi_j$ in the $a$-basis is $M_{j,i}(\tau)/V_j(\tau)$. The projection of the open set $U'$ to the $\tau$-coordinates is open, and $V_j(\tau)>0$ there by step 2.1. Hence these ratios are Borel on that open set; extending them by $0$ outside gives globally Borel functions of $\tau$. [F4, A1, step 2.1, step 4.1]

5.2 $\Phi$ is odd, because each $\varphi_j$ is odd by step 4.2; in particular $\Phi(0)=0$. [step 4.2]

5.3 For $j>k$ the coordinates $(x_j,\dots,x_n)$ and $(y_j,\dots,y_n)$ agree, so $\varphi_j(x)=\varphi_j(y)$ by step 4.1; hence $\Phi(x)-\Phi(y)=\sum_{j\le k}(\lambda_j-\lambda_{j-1})(\varphi_j(x)-\varphi_j(y))$ and $\mu=\sum_{j\le k}(\lambda_j-\lambda_{j-1})u_j$ with $u_j:=(\varphi_j(x)-\varphi_j(y))/2$. [step 4.1, step 1.3]

6.1 Define $\Phi(x):=\sum_{j=1}^n(\lambda_j-\lambda_{j-1})\varphi_j(x)$ for $x\in U$. In coordinates, for fixed $i$ the coordinates of $\varphi_j$ with index $i<j$ depend only on $(x_j,\dots,x_n)$ by step 4.1, while for $j\le i$ the $i$-th coordinate of $\varphi_j$ equals $x_i$; hence $\Phi_i(x)=\sum_{j\le i}(\lambda_j-\lambda_{j-1})x_i+\sum_{j>i}(\lambda_j-\lambda_{j-1})(\varphi_j(x))_i=\lambda_ix_i+\psi_i(x_{i+1},\dots,x_n)$, where $\psi_i$ is Borel by step 5.1. [step 4.1, step 5.1, algebra]

6.2 Here $u_1=(x-y)/2\in U$ by step 1.2, and $u_j=(\varphi_j(x)+(-\varphi_j(y)))/2\in C$ for $j\ge2$ by step 3.1 and [F8]. The weights $\lambda_j-\lambda_{j-1}$ are nonnegative and sum to $\lambda_k$, with positive first weight $\lambda_1$ on the interior point $u_1$. Repeated application of [F8] (or induction on the finite number of terms) puts the convex combination $\mu/\lambda_k$ in $U$, that is $\mu\in\operatorname{int}(\lambda_kC)$ by step 1.2. [F1, F8, step 1.2, step 5.3]

7.1 By steps 6.1 and 5.2 and [F3] applied with $a_i=\lambda_i>0$ to the Borel set $E=U'$, the image $\Phi(U)$ is Borel and the conjugate $\Phi'=L^{-1}\circ\Phi\circ L$ satisfies $\operatorname{vol}(\Phi'(U'))=(\prod_i\lambda_i)\operatorname{vol}(U')$; conjugating by the invertible linear map $L$ and using [F6] gives $\operatorname{vol}(\Phi(U))=(\prod_i\lambda_i)\operatorname{vol}(U)$. [F1, F3, F6, step 1.1, step 6.1]

7.2 The $a_k$-coordinate of $\mu$ is $\lambda_k(x_k-y_k)/2\ne0$: for $j\le k$ the $a_k$-coordinate of $\varphi_j(x)-\varphi_j(y)$ is $x_k-y_k$ by step 4.1. Every vector in either $\operatorname{span}\{a_1,\dots,a_{k-1}\}$ or $\operatorname{span}\{a_j:\lambda_j<\lambda_k\}$ has zero $a_k$-coordinate, so $\mu$ lies in neither span. [step 4.1, step 6.2]

7.3 Since $\Phi(0)=0$ by step 5.2 and $\Phi(0)=\sum_j(\lambda_j-\lambda_{j-1})\varphi_j(0)$ with $\varphi_j(0)=0$ by step 4.2, the same computation as steps 5.3 and 6.2 with $y=0$ gives $\nu=\sum_{j\le k}(\lambda_j-\lambda_{j-1})\varphi_j(x)\in\operatorname{int}(\lambda_kC)$, and the $a_k$-coordinate of $\nu$ is $\lambda_kx_k\ne0$. [step 4.1, step 4.2, step 5.2, step 6.2, step 1.4]

8.1 Combining steps 7.1 and 2.2 gives $\operatorname{vol}(\Phi(U))=(\prod_i\lambda_i)\operatorname{vol}(C)$, which is clause 3. [step 7.1, step 2.2]

8.2 But $\mu\in\Lambda\cap\operatorname{int}(\lambda_kC)$, so clause 3 of [F2] forces $\mu\in\operatorname{span}\{a_j:\lambda_j<\lambda_k\}$, contradicting step 7.2. Hence no two distinct points of $\Phi(U)$ differ by an element of $2\Lambda$. [F2, step 6.2, step 7.2]

9.1 Again clause 3 of [F2] would put $\nu$ in $\operatorname{span}\{a_j:\lambda_j<\lambda_k\}$, contradicting the nonzero $a_k$-coordinate. Hence $x=0$, and since $\Phi(0)=0$ the only lattice point of $\Phi(U)$ is $0$, which is clause 4 together with step 8.2. [F2, step 7.3]

10.1 Clause 1 is step 4.1 with step 5.1, clause 2 is steps 6.1 and 5.2, clause 3 is step 8.1, and clause 4 is steps 8.2 and 9.1. [step 4.1, step 5.1, step 6.1, step 5.2, step 8.1, step 8.2, step 9.1] ∎
