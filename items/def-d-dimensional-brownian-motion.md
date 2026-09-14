---
id: def-d-dimensional-brownian-motion
kind: definition
title: "$d$-dimensional Brownian motion"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, lem-characteristic-function-of-a-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, def-independent-random-elements, thm-rectangle-criterion-for-independent-random-elements, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence, def-coordinate-maps-and-cylinder-sigma-algebra, lem-finite-coordinate-cylinders-form-a-pi-system, thm-pi-system-criterion-for-independent-sigma-algebras, thm-componentwise-limits-and-continuity, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Definition 6.1.1, Lemma 6.1.3, and Proposition 6.1.4"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Definition

Assume the Axiom of Choice and let $d\ge1$ be a finite integer. An
$\mathbb R^d$-valued process $B=(B_t)_{t\ge0}$ is a **standard
$d$-dimensional Brownian motion** if:

1. $B_0=0$ almost surely;
2. for every finite list $0=t_0<t_1<\cdots<t_n$, the vector increments
   $$B_{t_j}-B_{t_{j-1}},\qquad 1\le j\le n,$$
   are mutually independent and have laws
   $N_d(0,(t_j-t_{j-1})I_d)$; and
3. there is one measurable event $A$ with $P(A)=1$ such that
   $t\mapsto B_t(\omega)$ is continuous from $[0,\infty)$ to
   $\mathbb R^d$ for every $\omega\in A$.

Equivalently, its $d$ coordinate processes $B^\alpha=(B_t^\alpha)_{t\ge0}$
are independent standard one-dimensional Brownian motions. Here independence
of the processes means the following precise assertion. Put
$I=[0,\infty)$ and equip $\mathbb R^I$ with its cylinder sigma-algebra. The
maps
$$ \Phi_\alpha:\Omega\longrightarrow\mathbb R^I, \qquad \Phi_\alpha(\omega)(t)=B_t^\alpha(\omega), \qquad 1\le\alpha\le d, $$
are independent random elements.

## Facts & Assumptions

**Given:** AC, a finite integer $d\ge1$, and an $\mathbb R^d$-valued process
$B=(B_t)_{t\ge0}$.

[F1] Standard one-dimensional Brownian motion starts at zero, has independent
normal increments on every finite increasing time list, and has one common
probability-one continuity event. [[def-brownian-motion]]

[F2] Under AC, $N_d(m,\Sigma)$ exists for every positive semidefinite
$\Sigma$, is realized as $m+\Sigma^{1/2}Z$ with independent standard-normal
coordinates, and is determined by the characteristic function
$\exp(iu\cdot m-u^T\Sigma u/2)$, including when $\Sigma$ is singular.
[[def-multivariate-normal-law]]
[[lem-characteristic-function-of-a-multivariate-normal-law]]

[F3] Scalar normal characteristic functions and characteristic functions of
finite independent sums have their usual formulas.
[[lem-characteristic-function-of-a-normal-law]]
[[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[F4] Independence of random elements is characterized by finite rectangle
probabilities. Disjoint groups of an independent sigma-algebra family remain
independent, and measurable coordinatewise functions preserve independence.
[[def-independent-random-elements]]
[[thm-rectangle-criterion-for-independent-random-elements]]
[[thm-grouping-independent-sigma-algebras]]
[[lem-measurable-functions-preserve-independence]]

[F5] Finite-coordinate cylinders generate the cylinder sigma-algebra and form
a pi-system; independent pi-systems containing the whole space generate
independent sigma-algebras.
[[def-coordinate-maps-and-cylinder-sigma-algebra]]
[[lem-finite-coordinate-cylinders-form-a-pi-system]]
[[thm-pi-system-criterion-for-independent-sigma-algebras]]

[F6] Continuity of a map into finite-dimensional Euclidean space is equivalent
to continuity of all its coordinates. A finite intersection of
probability-one events has probability one.
[[thm-componentwise-limits-and-continuity]]
[[lem-probability-measure-basic-identities]]

[F7] AC supplies the normal-law and Brownian interfaces used above.
[[def-axiom-of-choice]]

## Proof

**Proof technique:** direct proof of the asserted equivalence.

1.1 We first record the diagonal-Gaussian fact used in both directions. If $X\sim N_d(0,hI_d)$ for $h\ge0$, [F2] realizes that law as $\sqrt h\,Z$, where the coordinates of $Z$ are independent standard normals. Equality of vector laws preserves every rectangle probability, so the coordinates of $X$ are independent and each has law $N(0,h)$. This includes $h=0$, when every coordinate is the constant zero variable. [F2, F4]

1.2 Conversely, suppose that $X_1,\ldots,X_d$ are independent and each has law $N(0,h)$. For $u\in\mathbb R^d$, [F3] gives $$ \mathbb E e^{iu\cdot X}=\prod_{\alpha=1}^d\mathbb E e^{iu_\alpha X_\alpha}=\exp\!\left(-\frac h2\sum_{\alpha=1}^d u_\alpha^2\right). $$ This is the characteristic function of the existing law $N_d(0,hI_d)$ by [F2], and the uniqueness clause of [F2] identifies the vector laws. Thus $X\sim N_d(0,hI_d)$. For $d=1$ this says exactly that $N_1(0,h)$ is the scalar $N(0,h)$ law; for $h=0$ both sides are the point mass at zero. [F2, F3]

1.3 Each $\Phi_\alpha$ in the Definition is a random element: for every finite $F\subseteq I$, the finite observation map $\omega\mapsto(B_t^\alpha(\omega))_{t\in F}$ is measurable because the inverse image of each coordinate generator is measurable. Therefore the inverse images of all finite-coordinate cylinders, and hence of their generated cylinder sigma-algebra, are measurable. [F5]

2.1 Assume first that $B$ satisfies the three vector clauses of the Definition. Fix $0=t_0<\cdots<t_n$ and put $Z_j=B_{t_j}-B_{t_{j-1}}$. The random vectors $Z_j$ are independent, and by step 1.1 the coordinates $(Z_j^\alpha)_{\alpha=1}^d$ within each fixed $j$ are independent $N(0,t_j-t_{j-1})$ variables. Hence, for arbitrary Borel sets $A_{j,\alpha}\subseteq\mathbb R$, $$ \begin{aligned} P\!\left(\bigcap_{j=1}^n\bigcap_{\alpha=1}^d \{Z_j^\alpha\in A_{j,\alpha}\}\right)&=\prod_{j=1}^n P\!\left(Z_j\in\prod_{\alpha=1}^d A_{j,\alpha}\right)\\ &=\prod_{j=1}^n\prod_{\alpha=1}^d P(Z_j^\alpha\in A_{j,\alpha}). \end{aligned} $$ The rectangle criterion [F4] therefore makes the whole finite family $(Z_j^\alpha)_{j,\alpha}$ mutually independent. [step 1.1, F4]

3.1 For a fixed $\alpha$, step 2.1 gives independent increments with the required scalar normal laws. The vector condition at time zero gives $B_0^\alpha=0$ almost surely. On the vector continuity event every coordinate path is continuous by [F6]. Consequently each $B^\alpha$ is standard one-dimensional Brownian motion by [F1]. [F1, F6, step 2.1]

3.2 For each $\alpha$, let $\Pi_\alpha$ be the pullbacks by $\Phi_\alpha$ of finite-coordinate cylinders. These classes are pi-systems containing $\Omega$ by [F5], and $\sigma(\Pi_\alpha)=\sigma(\Phi_\alpha)$. To check their independence, choose one cylinder from every member of any finite subfamily of the coordinates and take the sorted union of their finitely many time supports, adjoining time zero. On the probability-one event $\{B_0=0\}$, each coordinate's finite observation vector equals a measurable affine function of its own block of scalar increments. Thus its cylinder probabilities equal those of that affine function. Step 2.1 makes all scalar increments independent; [F4] first groups them by $\alpha$ and then preserves independence under these measurable affine maps. The chosen cylinder probabilities therefore factor. Thus the pi-systems $\Pi_\alpha$ are independent, and [F5] makes the full random elements $\Phi_1,\ldots,\Phi_d$ independent. This proves the forward implication. Empty-support cylinders give $\Omega$ or $\varnothing$ and obey the same formula. [given, F4, F5, step 2.1, step 1.3]

3.3 Conversely, assume that the random elements $\Phi_1,\ldots,\Phi_d$ are independent and that every $B^\alpha$ is a standard one-dimensional Brownian motion. Fix $0=t_0<\cdots<t_n$ and let $$ U_\alpha=(B_{t_j}^\alpha-B_{t_{j-1}}^\alpha)_{j=1}^n. $$ This is a measurable function of $\Phi_\alpha$, so [F4] makes $U_1,\ldots,U_d$ independent. Within each $U_\alpha$, the scalar Brownian increments are independent and the $j$th has law $N(0,t_j-t_{j-1})$ by [F1]. For arbitrary Borel $A_{j,\alpha}$, the same two-stage rectangle calculation as in step 2.1, now first over $\alpha$ and then over $j$, gives $$ P\!\left(\bigcap_{\alpha=1}^d\bigcap_{j=1}^n \{U_{\alpha,j}\in A_{j,\alpha}\}\right)=\prod_{\alpha=1}^d\prod_{j=1}^n P(U_{\alpha,j}\in A_{j,\alpha}). $$ Hence all the scalar variables $U_{\alpha,j}$ are mutually independent. [F1, F4]

4.1 Group the independent scalar variables of step 3.3 by their time index $j$. By [F4], the resulting sigma-algebras are independent. Each vector increment $$ Z_j=(U_{1,j},\ldots,U_{d,j})=B_{t_j}-B_{t_{j-1}} $$ is measurable with respect to the $j$th grouped sigma-algebra, so the vectors $Z_1,\ldots,Z_n$ are independent. For fixed $j$, its coordinates are independent $N(0,t_j-t_{j-1})$ variables; step 1.2 therefore gives $Z_j\sim N_d(0,(t_j-t_{j-1})I_d)$. [F4, step 1.2, step 3.3]

5.1 For every $\alpha$, let $C_\alpha$ be a probability-one event on which the path $B^\alpha$ is continuous, and let $E_\alpha=\{B_0^\alpha=0\}$. Because $d$ is finite, repeated finite subadditivity in [F6] gives $$ P\!\left(\bigcap_{\alpha=1}^d(C_\alpha\cap E_\alpha)\right)=1. $$ On this one event, $B_0=0$ and the vector path is continuous by the coordinatewise criterion [F6]. Together with step 4.1 this proves the three vector clauses, and hence the reverse implication. [F1, F6, step 4.1]

6.1 The empty increment list is vacuous; a one-increment list is covered by steps 2.1 and 4.1; repeated times and zero-length increments are excluded by the strictly increasing convention, while time zero and the singular zero-variance law are handled in steps 1.1, 1.2, 3.1, and 5.1. The assumption $d\ge1$ excludes the empty-coordinate process. AC is used through [F1]--[F3] for the normal-law and Brownian interfaces and their law uniqueness; the finite regrouping, cylinder, and continuity arguments add no further choice. [F1, F2, F3, F7, step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 3.2, step 3.3, step 4.1, step 5.1] ∎

## Source notes

Yoshida Definition 6.1.1 gives the vector-increment definition, Lemma 6.1.3
identifies diagonal multivariate-normal increments with the scalar-coordinate
increment family, and Proposition 6.1.4 states the coordinate-process
equivalence. The proof above supplies the cylinder-sigma-algebra promotion
needed for the word “independent” to apply to whole coordinate processes.
Sousi Section 6.2 constructs the vector process from independent scalar
Brownian motions.
