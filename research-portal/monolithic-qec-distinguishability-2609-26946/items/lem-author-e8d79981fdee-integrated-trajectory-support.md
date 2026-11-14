---
id: lem-author-e8d79981fdee-integrated-trajectory-support
kind: lemma
domain: mathematics
title: Support of an integrated finite trajectory family
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - math:lem-qc-tensor-product-basis-and-dimension
  - math:def-linear-combination-and-span
  - math:def-dimension
  - math:def-rank-and-nullity
  - math:thm-dimension-of-a-linear-subspace
  - math:cor-double-orthogonal-complement-and-dimension
  - math:cor-dimension-of-a-direct-sum
  - math:def-countable-choice
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - math:lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - math:thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:def-nonnegative-lebesgue-integral
  - math:def-integral-of-a-nonnegative-simple-function
  - math:prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-qec-prereq-support-spectral-calculus
  - math:def-qc-choi-matrix
  - math:def-continuous-map-top
  - math:def-subspace-topology-top
  - math:def-metric-continuity
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:def-restriction-of-a-measure
  - math:prop-restriction-is-a-measure
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:lem-qc-tensor-product-basis-and-dimension: mathematical-premise
  math:def-linear-combination-and-span: mathematical-premise
  math:def-dimension: mathematical-premise
  math:def-rank-and-nullity: mathematical-premise
  math:thm-dimension-of-a-linear-subspace: mathematical-premise
  math:cor-double-orthogonal-complement-and-dimension: mathematical-premise
  math:cor-dimension-of-a-direct-sum: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  math:lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  math:thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:def-nonnegative-lebesgue-integral: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
  math:prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:def-continuous-map-top: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-metric-continuity: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:def-restriction-of-a-measure: mathematical-premise
  math:prop-restriction-is-a-measure: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Assume the Axiom of Countable Choice for the Lebesgue-measure results used below. Fix common input and output spaces $H=\mathbb C^d$ and $K=\mathbb C^e$, with $d,e\geq1$, and ordered orthonormal bases $(e_i)_{i=1}^d$ and $(f_j)_{j=1}^e$. Every matrix below is a linear map $H\to K$. Its matrix units are $U_{ji}=|f_j\rangle\langle e_i|$, and its input-first vectorization is $z(A)=|A\rangle\!\rangle=\sum_i e_i\otimes Ae_i$.

For each of finitely many indices $a$, choose an integer $n_a\geq1$ and real $\alpha_a<\beta_a$. Let $E_a=\{s\in\mathbb R^{n_a}:\alpha_a\leq s_1\leq\cdots\leq s_{n_a}\leq\beta_a\}$; the case $n_a=1$ is a compact interval. Its interior means $\alpha_a<s_1<\cdots<s_{n_a}<\beta_a$ in the ambient space $\mathbb R^{n_a}$. Let $K_a:E_a\to\mathcal L(H,K)$ be continuous in matrix coordinates, and include finitely many isolated matrices $D_b:H\to K$. Integrate with the restriction of $n_a$-dimensional Lebesgue measure $\lambda_{n_a}$ to $E_a$, taking every complex matrix entry separately. All these integrals exist.

Set $Q=\sum_b z(D_b)z(D_b)^\dagger+\sum_a\int_{E_a}z(K_a(s))z(K_a(s))^\dagger\,d\lambda_{n_a}(s)$, an operator on $H\otimes K$. Let $S\subseteq\mathcal L(H,K)$ be the complex linear span of the isolated matrices and all trajectory values. Then $Q$ is positive semidefinite, $\operatorname{supp}Q=z(S)$ and $\operatorname{rank}Q=\dim_{\mathbb C}S$. The same span is obtained using only interior trajectory values together with the isolated matrices. For any grouping of these generators into finitely many families supported in pairwise disjoint sets of matrix-unit coordinates $(j,i)$, their span dimensions add. A matrix is supported in a coordinate set when its entries outside that set are zero. Empty families and zero matrices are allowed, with empty span $\{0\}$ and rank zero when all generators vanish.

Moreover, the linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$ given by $\Phi(X)=\sum_bD_bXD_b^\dagger+\sum_a\int_{E_a}K_a(s)XK_a(s)^\dagger\,d\lambda_{n_a}(s)$ has input-first Choi matrix $J(\Phi)=Q$. This identity does not require trace preservation.

## Statement references

[[def-qec-prereq-finite-operator-conventions]]

[[math:lem-qc-tensor-product-basis-and-dimension]]

[[math:def-linear-combination-and-span]]

[[math:def-dimension]]

[[math:def-rank-and-nullity]]

[[math:thm-dimension-of-a-linear-subspace]]

[[math:cor-double-orthogonal-complement-and-dimension]]

[[math:cor-dimension-of-a-direct-sum]]

[[math:def-countable-choice]]

[[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[math:thm-borel-sets-are-lebesgue-measurable]]

[[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[[math:lem-euclidean-balls-have-positive-finite-lebesgue-measure]]

[[math:thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]

[[math:def-integrable-real-and-complex-functions-and-their-integrals]]

[[math:def-nonnegative-lebesgue-integral]]

[[math:def-integral-of-a-nonnegative-simple-function]]

[[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[[def-qec-prereq-support-spectral-calculus]]

[[math:def-qc-choi-matrix]]

[[math:def-continuous-map-top]]

[[math:def-subspace-topology-top]]

[[math:def-metric-continuity]]

[[math:thm-lebesgue-measure-is-a-complete-measure]]

[[math:def-restriction-of-a-measure]]

[[math:prop-restriction-is-a-measure]]

## Facts & Assumptions

[F1] Finite coordinates, adjoints and ordered tensor registers use the operator conventions. The vectors $e_i\otimes f_j$ form an orthonormal basis of $H\otimes K$. [[def-qec-prereq-finite-operator-conventions]] [[math:lem-qc-tensor-product-basis-and-dimension]]

[F2] Span is the smallest containing linear subspace; finite dimension is the size of a finite basis, and rank is image dimension. Every subspace of a finite-dimensional space is finite-dimensional. In finite dimension $W^{\perp\perp}=W$ for every subspace $W$. The dimension of a finite direct sum is the sum of its summand dimensions. [[math:def-linear-combination-and-span]] [[math:def-dimension]] [[math:def-rank-and-nullity]] [[math:thm-dimension-of-a-linear-subspace]] [[math:cor-double-orthogonal-complement-and-dimension]] [[math:cor-dimension-of-a-direct-sum]]

[F3] Under Countable Choice, Borel subsets of Euclidean space are Lebesgue measurable, compact subsets have finite Lebesgue measure, and every Euclidean ball of positive radius has positive finite Lebesgue measure. Use the Lebesgue measure and Countable Choice conventions in the cited definitions. [[math:def-countable-choice]] [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] [[math:lem-euclidean-balls-have-positive-finite-lebesgue-measure]]

[F4] A nonempty compact subset of $\mathbb R^n$ is closed and bounded, and every continuous real-valued function on it attains a finite maximum and minimum. [[math:thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]

[F5] Complex integration is defined by real and imaginary parts, and integrability means finite integral of the modulus. The nonnegative integral is the supremum over simple minorants, agrees with the simple integral, and is monotone and nonnegatively homogeneous. In particular $\int c\mathbf1_B\,d\mu=c\mu(B)$ for $c\geq0$ and measurable $B$ of finite measure. The integral is complex-linear on integrable functions. [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:def-nonnegative-lebesgue-integral]] [[math:def-integral-of-a-nonnegative-simple-function]] [[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F6] For a finite positive semidefinite operator, an orthonormal spectral decomposition has nonnegative eigenvalues. Its kernel is spanned by its zero-eigenvalue vectors, its support is the orthogonal complement of its kernel, and its positive-eigenvalue vectors span that support. [[def-qec-prereq-support-spectral-calculus]]

[F7] For any complex-linear map $\Psi:\mathcal L(H)\to\mathcal L(K)$, its input-first Choi matrix is $J(\Psi)=\sum_{i,l}|e_i\rangle\langle e_l|\otimes\Psi(|e_i\rangle\langle e_l|)$ in the fixed input basis. [[math:def-qc-choi-matrix]]

[F8] On $E_a$, use the Euclidean subspace topology and the restricted Euclidean metric. A relatively open set has the form $E_a\cap O$ for an ambient open set $O$. Topological continuity at a point means that every open neighbourhood of its image contains the image of some relatively open neighbourhood of the point. Such a neighbourhood contains $E_a\cap B(s,r)$ for some $r>0$, giving the metric condition: for every $\varepsilon>0$ there is $\delta>0$ such that $s'\in E_a$ and $\|s'-s\|<\delta$ imply $|h(s')-h(s)|<\varepsilon$ for a continuous scalar coordinate $h$. [[math:def-continuous-map-top]] [[math:def-subspace-topology-top]] [[math:def-metric-continuity]]

[F9] Under Countable Choice, $\lambda_n$ is a complete measure on $\mathcal L(\mathbb R^n)$ for $n\geq1$. For measurable $E\subseteq\mathbb R^n$, its same-ambient restriction $\mu_E(B)=\lambda_n(B\cap E)$ is a measure on that same sigma-algebra. Interpret integrals over $E_a$ using $\mu_a=\mu_{E_a}$ and integrands extended by zero outside $E_a$. Then $\mu_a(\mathbb R^{n_a})=\lambda_{n_a}(E_a)$ and $\mu_a(B)=\lambda_{n_a}(B)$ for measurable $B\subseteq E_a$. [[math:thm-lebesgue-measure-is-a-complete-measure]] [[math:def-restriction-of-a-measure]] [[math:prop-restriction-is-a-measure]]

## Proof

**Given:** The common spaces, finite families, continuous trajectories, full-dimensional ordered domains and Countable Choice assumption in the Statement.

**Goal:** Establish integrability, the support and rank formulas, dimension additivity and the Choi identity.

1.1 Each $E_a$ is closed and bounded by its defining inequalities. Its strict inequalities have a solution, for example $s_i=\alpha_a+i(\beta_a-\alpha_a)/(n_a+1)$, so it is nonempty and [F4] makes it compact. Its closedness also makes it Lebesgue measurable by [F3], so [F9] supplies the restricted measure $\mu_a$. For a continuous real scalar function on $E_a$, continuity in [F8] makes the inverse image of an open set relatively open: it is the union of relatively open neighbourhoods mapped into that set. Thus it has the form $E_a\cap O$ for some ambient open set $O$. Since $E_a$ is closed, these inverse images are Borel, hence Lebesgue measurable by [F3]. Thus its extension by zero off $E_a$ is measurable (an open set containing zero also includes the measurable complement of $E_a$ in its inverse image). By [F4] it is bounded. Apply this argument to the real and imaginary parts of each entry of $z(K_a(s))z(K_a(s))^\dagger$ and, for fixed $X$, of $K_a(s)XK_a(s)^\dagger$, and to their moduli. All are continuous on $E_a$. A bounded modulus is at most some finite constant $M$ there, so [F5] and [F9] bound its integral by $M\mu_a(\mathbb R^{n_a})=M\lambda_{n_a}(E_a)<\infty$, using [F3]. This proves every asserted entrywise integral exists. [given, F1, F3, F4, F5, F8, F9, algebra]

2.1 Entrywise complex conjugation commutes with integration by the real-and-imaginary-part definition in [F5], so $Q=Q^\dagger$. For $v\in H\otimes K$, finite-sum linearity gives $v^\dagger Qv=\sum_b|v^\dagger z(D_b)|^2+\sum_a\int_{E_a}|v^\dagger z(K_a(s))|^2\,d\lambda_{n_a}(s)$. These terms are finite by step 1.1 and nonnegative by [F5]. Hence $Q$ is positive semidefinite. [F1, F5, step 1.1, algebra]

3.1 If the continuous scalar $g(s)=v^\dagger z(K_a(s))$ is nonzero at an interior point $s_0$, [F8] applied to the open disc of radius $|g(s_0)|/2$ about $g(s_0)$ gives a relatively open neighbourhood of $s_0$ on which $|g(s)|\geq |g(s_0)|/2>0$. Interiority lets us choose an ambient ball $B(s_0,r)\subseteq E_a$ inside that neighbourhood. On that ball [F9] gives $\mu_a(B(s_0,r))=\lambda_{n_a}(B(s_0,r))$. By [F3] and [F5], its contribution to the integral in step 2.1 is at least $|g(s_0)|^2\lambda_{n_a}(B(s_0,r))/4>0$. Thus a zero quadratic form forces orthogonality to every isolated vector and every interior trajectory vector. Conversely, orthogonality to these vectors extends to every boundary trajectory vector by continuity: fix a strict interior point $c$ from step 1.1 and use $(1-\varepsilon)s+\varepsilon c$ for $0<\varepsilon<1$, which is interior and tends to any given $s\in E_a$ as $\varepsilon\downarrow0$. Indeed its distance to $s$ is $\varepsilon\|c-s\|$, so the metric continuity condition in [F8] makes $g((1-\varepsilon)s+\varepsilon c)$ tend to $g(s)$. All integrands and isolated terms then vanish. [F1, F3, F5, F8, F9, step 1.1, step 2.1, algebra]

4.1 Let $W$ be the complex span in $H\otimes K$ of the isolated vectors and interior trajectory vectors. Orthogonality to its generators is equivalent to membership in $W^\perp$, since the vectors orthogonal to any fixed $v$ form a linear subspace. The boundary-limit argument in step 3.1 shows every boundary vector is orthogonal to $W^\perp$, hence belongs to $W^{\perp\perp}=W$ by [F2]. Thus $W$ is also the span of all the vectorized generators. In a spectral decomposition of $Q$ from [F6], the quadratic form is a sum of nonnegative eigenvalues times squared coordinates, so it vanishes exactly on $\ker Q$. Steps 2.1 and 3.1 therefore give $\ker Q=W^\perp$, and $\operatorname{supp}Q=(\ker Q)^\perp=W$. The positive eigenvectors also span the image of $Q$, so its rank is $\dim W$. Finally $z(U_{ji})=e_i\otimes f_j$, so [F1] makes $z$ a linear bijection from the matrix space to $H\otimes K$; consequently $W=z(S)$ and $\dim W=\dim_{\mathbb C}S$. These arguments include the zero subspace. [F1, F2, F6, step 2.1, step 3.1, algebra]

5.1 The span of a family supported in a coordinate set remains supported in that set, because these support conditions define a linear subspace. If the sets for distinct families are disjoint and a sum of one vector from each span is zero, restriction to the coordinates of any one family forces its vector to be zero. The sum of the spans is therefore direct. Each is finite-dimensional as a subspace of the common finite matrix space, and [F2] gives the asserted sum of dimensions, including empty families. In vector coordinates these subspaces are also orthogonal by [F1]. [given, F1, F2, step 4.1, algebra]

6.1 The entrywise integrability in step 1.1 and linearity in [F5] show that $\Phi$ is a complex-linear map. For an arbitrary $A:H\to K$, expand [F7]: $J(X\mapsto AXA^\dagger)=\sum_{i,l}|e_i\rangle\langle e_l|\otimes|Ae_i\rangle\langle Ae_l|=z(A)z(A)^\dagger$. This calculation uses only the common bases and finite tensor coordinates in [F1]. Apply it to each isolated matrix and to $K_a(s)$ at each $s$. The finite Choi sum passes through each entrywise integral by [F5], giving $J(\Phi)=\sum_bz(D_b)z(D_b)^\dagger+\sum_a\int_{E_a}z(K_a(s))z(K_a(s))^\dagger\,d\lambda_{n_a}(s)=Q$. Thus the Choi assertion holds for the stated linear map without a trace-preservation assumption. [F1, F5, F7, step 1.1, algebra] ∎
