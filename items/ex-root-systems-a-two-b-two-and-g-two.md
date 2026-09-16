---
id: ex-root-systems-a-two-b-two-and-g-two
kind: example
title: Rank-two systems A_2, B_2 and G_2
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-rank-two-root-system-classification, thm-existence-of-each-classified-root-system]
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

The regular configurations with six, eight and twelve roots in the plane
realize $A_2,B_2$ and $G_2$: for $A_2$ the six unit vectors at mutual angles
$60^{\circ}$, for $B_2$ the eight vectors $\pm e_1,\pm e_2,\pm e_1\pm e_2$,
and for $G_2$ the twelve vectors of the explicit model. The off-diagonal
Cartan products are $1,2,3$ respectively.

## Facts & Assumptions

**Given:** The standard plane $\mathbb R^{2}$ with orthonormal basis $e_1,e_2$, the six unit vectors at angles $k\pi/3$, and the models of [[thm-existence-of-each-classified-root-system]].

[L1] The irreducible reduced crystallographic rank-two root systems are exactly $A_2,B_2\cong C_2,G_2$, and for nonproportional roots the product of the two Cartan integers is $4\cos^{2}\theta\in\{0,1,2,3\}$ with the corresponding length ratio ([[thm-rank-two-root-system-classification]]).

[L2] The explicit models of $A_2$, $B_2$ and $G_2$ are reduced crystallographic root systems with the indicated Cartan matrices ([[thm-existence-of-each-classified-root-system]]).

## Verification

**Proof technique:** direct.

1.1 For $A_2$ take the six unit vectors $u_k=(\cos(k\pi/3),\sin(k\pi/3))$, $k=0,\dots,5$: the reflections $s_{u}$ preserve the set because the dihedral group of the hexagon permutes it, all Cartan integers are $2\cos\theta\in\{0,\pm1,\pm2\}$ with $\theta$ a multiple of $60^{\circ}$, and adjacent roots at $60^{\circ}$ give the Cartan product $4\cos^{2}60^{\circ}=1$ with equal lengths; this is the $A_2$ system with Cartan matrix $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$. [L2, algebra]

1.2 For $B_2$ take $\Phi=\{\pm e_1,\pm e_2,\pm e_1\pm e_2\}$; the reflections $s_{e_1\pm e_2}$ and $s_{e_i}$ permute the set, the Cartan integers are integers in $\{0,\pm1,\pm2\}$, and the adjacent pair $e_1,e_1+e_2$ has Cartan product $4\cos^{2}45^{\circ}=2$ with length ratio $2$; the Cartan matrix is $\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$ for the ordering $(e_1,e_2)$ of simple roots, which is $B_2\cong C_2$. [L2, algebra]

1.3 For $G_2$ use the twelve-vector model with $(\alpha,\alpha)=6$, $(\beta,\beta)=2$, $(\alpha,\beta)=-3$; the reflection closure is verified by the explicit images of the six positive roots under $s_\alpha$ and $s_\beta$, the Cartan integers lie in $\{0,\pm1,\pm2,\pm3\}$, and the simple pair $(\alpha,\beta)$ has Cartan product $4\cos^{2}150^{\circ}=3$ with length ratio $3$; the Cartan matrix is $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$, which is $G_2$. [L2, algebra]

2.1 By [L1] the three systems are exactly the irreducible rank-two reduced crystallographic systems, and the displayed Cartan products $1,2,3$ are those of $A_2,B_2,G_2$ respectively. [L1, step 1.1, step 1.2, step 1.3, algebra] ∎
