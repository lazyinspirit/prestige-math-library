---
id: cex-cm-collinear-labeling-admits-a-nontrivial-rotation
kind: counterexample
title: "A collinear labeling admits a nontrivial rotation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-special-orthogonal-group, lem-cm-rigid-labeling-stabilizer, def-matrix-product-and-identity-matrix, prop-transpose-laws, thm-determinant-multiplicative]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-rigid-labeling-stabilizer: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement refuted

Every nonempty labeling $S\subseteq\mathbb R^3$ determines the rotation: if $R\in SO(3)$ satisfies $Rs=s$ for every $s\in S$, then $R=I_3$.

## Facts & Assumptions

**Given:** The set $S=\{0,e_3\}\subseteq\mathbb R^3$ and the matrix $R=\operatorname{diag}(-1,-1,1)$.

[L1] $R\in SO(3)$ means $R^{\mathsf T}R=I_3$ and $\det R=1$ ([[def-cm-special-orthogonal-group]], [[def-matrix-product-and-identity-matrix]]).

[L2] For matrices, $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$, transposition is involutive, and the determinant is multiplicative with $\det\operatorname{diag}(a,b,c)=abc$ for diagonal matrices ([[prop-transpose-laws]], [[thm-determinant-multiplicative]]).

## Counterexample

**Proof technique:** direct; exhibit a nontrivial rotation fixing a nonempty labeling.

1.1 Take $S=\{0,e_3\}\subseteq\mathbb R^3$ and $R=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}$. Then $Re_3=e_3$ and $R0=0$, while $R\ne I_3$ because $Re_1=-e_1$. [given, algebra]

2.1 The matrix $R$ lies in $SO(3)$: its transpose equals itself, so $R^{\mathsf T}R=R^2=\operatorname{diag}(1,1,1)=I_3$, and $\det R=(-1)\cdot(-1)\cdot1=1$ by multiplicativity of the determinant on diagonal matrices. [step 1.1, L1, L2, algebra] ∎

## Remarks

- The labeling $S=\{0,e_3\}$ is collinear: all its points lie on the line $\mathbb Re_3$. The companion lemma [[lem-cm-rigid-labeling-stabilizer]] shows that the conclusion holds as soon as $S$ contains the origin and two linearly independent vectors; the counterexample shows that this independence hypothesis is not removable. The hypothesis that $S$ contains the origin is inessential for the lemma (two independent vectors alone span a frame modulo translation) and is imposed only for a common labeling convention.

- The rotation exhibited is a half-turn about the axis $\mathbb Re_3$; more generally every rotation about that axis fixes $S$ pointwise, so the stabilizer is a one-parameter family. This is a statement about the mathematical action, not about any physical body.
