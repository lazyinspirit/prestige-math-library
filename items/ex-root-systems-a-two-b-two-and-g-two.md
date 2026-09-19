---
id: ex-root-systems-a-two-b-two-and-g-two
kind: example
title: Rank-two systems A_2, B_2 and G_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system, def-cartan-matrix-of-a-based-root-system, thm-rank-two-root-system-classification]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Theorem 21.10 and its picture, printed p. 113"
landmark: false
proof_strategy: direct
---

## Example

The following configurations with six, eight and twelve roots in the plane
realize $A_2,B_2$ and $G_2$: for $A_2$ the six unit vectors spaced by
$60^{\circ}$, for $B_2$ the eight vectors $\pm e_1,\pm e_2,\pm e_1\pm e_2$,
and for $G_2$ the twelve vectors of the explicit model. The off-diagonal
Cartan products are $1,2,3$ respectively.

## Facts & Assumptions

**Given:** The standard plane $\mathbb R^{2}$ with orthonormal basis $e_1,e_2$ and the six unit vectors $u_k=(\cos(k\pi/3),\sin(k\pi/3))$, $0\le k\le5$.

[L1] The irreducible reduced crystallographic rank-two root systems are exactly $A_2,B_2\cong C_2,G_2$, and for nonproportional roots the product of the two Cartan integers is $4\cos^{2}\theta\in\{0,1,2,3\}$ with the corresponding length ratio ([[thm-rank-two-root-system-classification]]).

[L2] A reduced crystallographic Euclidean root system is a finite spanning set of nonzero vectors that is reduced, is preserved by every root reflection, and has integral Cartan integers; for a base $(\alpha_1,\alpha_2)$ its Cartan matrix has entries $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$ ([[def-reduced-crystallographic-euclidean-root-system]], [[def-cartan-matrix-of-a-based-root-system]]).

## Verification

**Proof technique:** direct.

1.1 For $A_2$ take $\Phi_A=\{u_0,\ldots,u_5\}$. This finite set spans the plane, is reduced, and each root reflection is a symmetry of the regular hexagon. Its Cartan integers are $2\cos\theta\in\{0,\pm1,\pm2\}$. Put $\alpha=u_0$ and $\beta=u_2$; then $\Phi_A^+=\{\alpha,\beta,\alpha+\beta\}$ is a positive system with base $(\alpha,\beta)$, and $(\alpha,\beta)=-1/2$. Thus its Cartan matrix is $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ and its off-diagonal Cartan product is $1$. [L2, algebra]

1.2 For $B_2$ take $\Phi_B=\{\pm e_1,\pm e_2,\pm e_1\pm e_2\}$. This finite set spans the plane, omits zero, and is reduced. The reflections in the coordinate roots change one sign, while those in $e_1\pm e_2$ interchange the coordinates with possible sign changes, so every root reflection preserves $\Phi_B$; direct pairings give Cartan integers in $\{0,\pm1,\pm2\}$. The roots $\alpha=e_1-e_2$ and $\beta=e_2$ form a base, since the positive roots are $\alpha,\beta,\alpha+\beta,\alpha+2\beta$. Moreover $(\alpha,\alpha)=2$, $(\beta,\beta)=1$, and $(\alpha,\beta)=-1$, so the Cartan matrix for $(\alpha,\beta)$ is $\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$ and its off-diagonal Cartan product is $2$. [L2, algebra]

1.3 For $G_2$, choose $\alpha,\beta$ with $(\alpha,\alpha)=6$, $(\beta,\beta)=2$, $(\alpha,\beta)=-3$ and put
$$\Phi_G=\{\pm\alpha,\pm\beta,\pm(\alpha+\beta),\pm(\alpha+2\beta),\pm(\alpha+3\beta),\pm(2\alpha+3\beta)\}.$$
The Gram determinant is positive, so $\alpha,\beta$ form a basis; the displayed coefficient pairs then show that $\Phi_G$ is finite, spans the plane, omits zero, and is reduced. The reflection $s_\alpha$ interchanges $\beta$ with $\alpha+\beta$ and $\alpha+3\beta$ with $2\alpha+3\beta$, and fixes $\alpha+2\beta$; the reflection $s_\beta$ interchanges $\alpha$ with $\alpha+3\beta$ and $\alpha+\beta$ with $\alpha+2\beta$, and fixes $2\alpha+3\beta$. Together with the images of $\alpha$ and $\beta$, these permutations show that the long and short roots are the two orbits of the simple reflections. Conjugating $s_\alpha$ or $s_\beta$ therefore proves reflection closure for every root. Direct pairings give integral Cartan integers in $\{0,\pm1,\pm2,\pm3\}$. The six displayed unnegated roots are positive and have base $(\alpha,\beta)$, whose Cartan matrix is $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$ and whose off-diagonal Cartan product is $3$. [L2, algebra]

2.1 By [L1] the three systems are exactly the irreducible rank-two reduced crystallographic systems, and the displayed Cartan products $1,2,3$ are those of $A_2,B_2,G_2$ respectively. [L1, step 1.1, step 1.2, step 1.3, algebra] ∎
