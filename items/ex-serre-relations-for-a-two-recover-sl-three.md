---
id: ex-serre-relations-for-a-two-recover-sl-three
kind: example
title: Serre relations for A_2 recover sl_3
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-serre-presentation-theorem, def-serre-lie-algebra-of-a-finite-type-cartan-matrix, def-classical-complex-matrix-lie-algebras, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 24, Theorem 24.1 and Example 19.14"
landmark: false
proof_strategy: direct
---

## Example

Assume the Axiom of Choice; it is inherited from the Serre presentation theorem used below.

For $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ the Serre generators map to
$e_1\mapsto E_{12}$, $e_2\mapsto E_{23}$, $f_1\mapsto E_{21}$,
$f_2\mapsto E_{32}$, $h_1\mapsto E_{11}-E_{22}$,
$h_2\mapsto E_{22}-E_{33}$ in $\mathfrak{sl}_3(\mathbb C)$, and this
assignment is an isomorphism $\mathfrak g(A)\to\mathfrak{sl}_3(\mathbb C)$.

## Facts & Assumptions

**Given:** The Cartan matrix $A$ of $A_2$, the Serre algebra $\mathfrak g(A)$ and the matrices in $\mathfrak{sl}_3(\mathbb C)$.

[L1] $\mathfrak g(A)$ is presented by the Serre generators and relations, and is finite-dimensional semisimple with Cartan matrix $A$ and root system $A_2$, of dimension $2+6=8$ ([[def-serre-lie-algebra-of-a-finite-type-cartan-matrix]], [[thm-serre-presentation-theorem]]).

[L2] $\mathfrak{sl}_3(\mathbb C)$ is the Lie algebra of traceless $3\times3$ matrices with the commutator, and $E_{ij}E_{kl}=\delta_{jk}E_{il}$ ([[def-classical-complex-matrix-lie-algebras]], [[def-special-linear-lie-algebra-sl-two]]).

## Verification

**Proof technique:** direct.

1.1 The images satisfy the defining relations: $[h_i,h_j]=0$; $[h_1,E_{12}]=2E_{12}$, $[h_1,E_{23}]=-E_{23}$, $[h_2,E_{12}]=-E_{12}$, $[h_2,E_{23}]=2E_{23}$ and the negatives on the $f$'s; $[E_{12},E_{21}]=h_1$, $[E_{23},E_{32}]=h_2$ and cross brackets vanish; and the Serre relations hold since $(\operatorname{ad}E_{12})^{2}E_{23}=0$ and $(\operatorname{ad}E_{32})^{2}E_{21}=0$ by the multiplication rule of [L2]. [L1, L2, algebra]

2.1 The images generate $\mathfrak{sl}_3(\mathbb C)$: $[E_{12},E_{23}]=E_{13}$ and $[E_{23},E_{12}]=0$, $[E_{21},E_{32}]=-E_{31}$, and the diagonal images $h_1,h_2$ together with $E_{13},E_{31}$ and the six matrix units span the eight-dimensional space of traceless matrices. Hence the induced homomorphism $\mathfrak g(A)\to\mathfrak{sl}_3(\mathbb C)$ is surjective. [L2, step 1.1, algebra]

3.1 Both sides have dimension $8$: $\dim\mathfrak g(A)=2+6$ by [L1] and $\dim\mathfrak{sl}_3(\mathbb C)=3^{2}-1=8$ by [L2]; a surjective linear map between spaces of equal finite dimension is an isomorphism, so the assignment is an isomorphism of Lie algebras. [L1, step 2.1, algebra] ∎
