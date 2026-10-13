---
id: cex-cm-collinear-labeling-admits-a-nontrivial-rotation
kind: counterexample
title: "A collinear labeling admits a nontrivial rotation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-special-orthogonal-group, lem-cm-rigid-labeling-stabilizer, def-matrix-product-and-identity-matrix, prop-transpose-laws, def-determinant-of-a-square-matrix]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-rigid-labeling-stabilizer: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
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

**Given:** Write $e_1=(1,0,0)$ and $e_3=(0,0,1)$, where the tuple lists the values at the imported indices $0,1,2$. Matrix-vector action is $(Av)(k)=\sum_{j<3}A(k,j)v(j)$, the sole column of the rectangular product with $C_v(j,0)=v(j)$. The set $S=\{0,e_3\}\subseteq\mathbb R^3$ and the matrix $R=\operatorname{diag}(-1,-1,1)$.

[L1] $R\in SO(3)$ means $R^{\mathsf T}R=I_3$ and $\det R=1$ ([[def-cm-special-orthogonal-group]], [[def-matrix-product-and-identity-matrix]]).

[L2] Transposition is involutive and reverses matrix products ([[prop-transpose-laws]]). The determinant is the finite Leibniz sum $\det A=\sum_{\pi\in S_3}\operatorname{sgn}(\pi)\prod_{i<3}A(\pi(i),i)$ ([[def-determinant-of-a-square-matrix]]).

## Counterexample

**Proof technique:** direct; exhibit a nontrivial rotation fixing a nonempty labeling.

1.1 Take $S=\{0,e_3\}\subseteq\mathbb R^3$ and $R=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}$. Then $Re_3=e_3$ and $R0=0$, while $R\ne I_3$ because $Re_1=-e_1$. [given, algebra]

2.1 The matrix $R$ lies in $SO(3)$: its transpose equals itself, so $R^{\mathsf T}R=R^2=\operatorname{diag}(1,1,1)=I_3$, and in the Leibniz sum of [L2] every nonidentity permutation has an index $i$ with $\pi(i)\ne i$, giving a zero off-diagonal factor. Only the identity permutation contributes, with sign $1$, so $\det R=(-1)\cdot(-1)\cdot1=1$. [step 1.1, L1, L2, algebra] ∎

## Remarks

- The set $S=\{0,e_3\}$ is collinear: all its points lie on the line $\mathbb Re_3$. Its pointwise stabilizer is defined in [[lem-cm-rigid-labeling-stabilizer]]. The witness includes $0$ because every linear map fixes $0$; that lemma requires only two independent vectors in $S$ and makes no separate origin assumption.

- The displayed matrix fixes the axis $\mathbb Re_3$ and sends $e_1$ to $-e_1$; this verifies its nonidentity and its action on $S$ directly. No physical-body claim is made.
