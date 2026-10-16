---
id: lem-qa-24-qsvt-robustness-amplitude-bound
kind: lemma
title: Operator perturbation bound for QSVT
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-24-pue-svd-data
  - def-qa-24-singular-value-transform
  - lem-qa-24-singular-transform-basis-independence
  - thm-qa-24-qsvt-singular-space-action
  - thm-singular-value-decomposition
  - def-qc-dirac-notation-conversion
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-orthogonal-projection
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - prop-adjoint-algebra
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the proof uses finite SVDs, explicit finite unitary completions, and norm estimates."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 22"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 23–24. The estimate is reproved here by a finite block-unitary interpolation."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 146–147; PDF pp. 154–155, the exact singular-plane action used in the local proof."
---

## Statement

Let $A,B:H_R\to H_L$ be contractions between the same finite-dimensional complex-inner-product spaces, let $P$ be the scalar polynomial of an exact degree-$d$ QSVT phase sequence, and put $\delta=\|A-B\|_{\mathrm{op}}$. Then, for the corresponding odd or even singular-value transforms,

$$\|P^{\mathrm{SV}}(A)-P^{\mathrm{SV}}(B)\|_{\mathrm{op}}\le4d\sqrt{\delta}.$$

For $d=0$ the transform is constant on the relevant singular space and the difference is zero. The lemma is an operator statement; the unitary completions used in the proof are finite-dimensional existence constructions and do not supply an efficient implementation or any additional query access.

## Facts & Assumptions

**Given:** Same-dimension contractions $A,B:H_R\to H_L$ and an exact degree-$d$ QSVT phase sequence with scalar polynomial $P$.

[F1] [[def-qa-24-pue-svd-data]]: a PUE compression has singular values in $[0,1]$ and its finite SVD uses orthonormal left and right bases.

[F2] [[thm-singular-value-decomposition]]: every finite-dimensional map has complete orthonormal singular bases and a positive-term SVD formula.

[F3] [[thm-qa-24-qsvt-singular-space-action]]: for any PUE realization of a contraction $C$, the phase sequence's projected block is $P^{\mathrm{SV}}(C)$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum action on unit vectors, and the zero-domain norm is zero.

[F5] [[cor-triangle-inequality-for-inner-product-norm]]: the vector norm satisfies the triangle inequality.

[F6] [[def-orthogonal-projection]]: range and orthogonal-complement components give the orthogonal decomposition defining a projection.

[F7] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: orthogonal components have squared norms that add.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F9] [[prop-adjoint-algebra]]: adjoints reverse composition and $T^{**}=T$.

[F10] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary preserves vector norms.

[F11] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}\|T\|_{\mathrm{op}}$.

## Proof

1.1 If either $H_R$ or $H_L$ is zero, both maps are zero and the odd transforms agree; when $H_R=0$ the even right transforms are also the same scalar map on the zero space, and when $H_L=0$ the even right transforms are $P(0)I_{H_R}$ for both. The inequality is then immediate. Assume both dimensions are positive. Let $m=\dim H_L$, $n=\dim H_R$, $q=\min(m,n)$, and extend an SVD of any contraction $C:H_R\to H_L$ to orthonormal bases $u_1,\ldots,u_m$ and $v_1,\ldots,v_n$, with $\sigma_j=0$ for any missing singular values up to $q$. [F1, F2, F4, algebra]

1.2 On $K=H_L\oplus H_R$, choose orthonormal input bases $a_1,\ldots,a_m$ in the first summand and $v_1,\ldots,v_n$ in the second, and output bases $u_1,\ldots,u_m$ and $b_1,\ldots,b_n$ in the two summands. For $1\le j\le q$, define $V_Ca_j=\sqrt{1-\sigma_j^2}\,u_j-\sigma_j b_j$ and $V_Cv_j=\sigma_j u_j+\sqrt{1-\sigma_j^2}\,b_j$. These two images are orthonormal by direct expansion; map any remaining $a_j$ to the corresponding unused $u_j$, and any remaining $v_j$ to the corresponding unused $b_j$. The resulting images form an orthonormal basis, so $V_C$ is unitary. If $\Pi_R^0$ projects onto the second summand and $\Pi_L^0$ onto the first, then $\Pi_L^0V_C\Pi_R^0|_{H_R}=C$ by the SVD formula. Thus every finite contraction has a PUE unitary completion with fixed subspaces of dimensions $n,m$. [F1, F2, F4, F6, F7, F10, construct, algebra]

2.1 Let $\delta>0$ and set $D=(B-A)/\delta$. Homogeneity of the operator norm gives $\|D\|_{\mathrm{op}}=1$, so $D$ is a contraction. By step 1.2, choose unitary completions $V_A,V_D$ of $A,D$ on the same $K$ with the same projectors $\Pi_R^0,\Pi_L^0$. On $K\oplus K$, let $V=V_A\oplus V_D$ and let $\Pi_R,\Pi_L$ select the right and left subspaces, respectively, in the first copy only. Put $c=(1+\delta)^{-1/2}$, $s=\sqrt{\delta/(1+\delta)}$, and $W=\begin{pmatrix}cI&-sI\\sI&cI\end{pmatrix}$; $c^2+s^2=1$ makes $W$ unitary. For $x$ in the first-copy right subspace, $W(x,0)=(cx,sx)$, $V$ maps this to $(cV_Ax,sV_Dx)$, and $W^*$ returns first component $c^2V_Ax+s^2V_Dx$. Projection to the first-copy left subspace therefore gives $c^2Ax+s^2Dx=(A+\delta D)x/(1+\delta)=Bx/(1+\delta)$. Since $V$ and $W$ are unitary, [F8]–[F9] show $V'=W^*VW$ is unitary; it is a PUE completion of $B/(1+\delta)$ for the same projectors. [F1, F2, F4, F8, F9, F10, step 1.2, construct, algebra]

3.1 Direct multiplication gives $(W-I)^*(W-I)=2(1-c)I$, hence $\|W-I\|_{\mathrm{op}}=\sqrt{2-2c}$. With $t=\sqrt{1+\delta}\ge1$, the inequality $2-2/t\le t^2-1$ follows from $(t-1)^2(t+2)\ge0$, so $\|W-I\|_{\mathrm{op}}\le\sqrt{\delta}$. For every unit $x$, write $Vx-W^*VW x=(I-W^*)Vx+W^*V(I-W)x$. By [F10], $V$ and $W^*$ preserve norms; the two summands therefore have norms at most $\|W-I\|_{\mathrm{op}}$. Using [F5] and [F4] gives $\|V-V'\|_{\mathrm{op}}\le2\sqrt{\delta}$. [F4, F5, F10, step 2.1, algebra]

4.1 The exact QSVT phase product contains $d$ signal factors, each either $V$ or $V^*$; its remaining phase factors are identical for $V$ and $V'$. Telescoping the two products one signal factor at a time gives operator-norm difference at most $d\|V-V'\|_{\mathrm{op}}$: the factor differences for $V$ have that norm, and for $V^*$ the identity $V^*-V'^*=V^*(V'-V)V'^*$ plus [F10]–[F11] gives the same norm; multiplying by unchanged unitary factors preserves the bound. Compression by orthogonal projections cannot increase the bound, since projections are contractions by [F6]–[F7]. By [F3], the compressed blocks are $P^{\mathrm{SV}}(A)$ and $P^{\mathrm{SV}}(B/(1+\delta))$. Steps 2.1 and 3.1 therefore give $\|P^{\mathrm{SV}}(A)-P^{\mathrm{SV}}(B/(1+\delta))\|_{\mathrm{op}}\le2d\sqrt{\delta}$. [F3, F4, F5, F6, F7, F10, F11, step 2.1, step 3.1, algebra]

5.1 For the second comparison, use step 1.2 to choose completions $V_B,V_0$ of $B$ and the zero map on the same $K$, and put $T=V_B\oplus V_0$. With the same projectors and the same $W,c,s$ from step 2.1, $T$ compresses to $B$, while $W^*TW$ compresses to $c^2B+s^2 0=B/(1+\delta)$. The calculation of step 3.1 gives $\|T-W^*TW\|_{\mathrm{op}}\le2\sqrt\delta$; the telescoping and compression argument of step 4.1 therefore gives $\|P^{\mathrm{SV}}(B)-P^{\mathrm{SV}}(B/(1+\delta))\|_{\mathrm{op}}\le2d\sqrt\delta$. Combining this with step 4.1 by the triangle inequality proves the asserted $4d\sqrt\delta$ bound. If $\delta=0$ the two transforms are identical, and if $d=0$ the transform is independent of the input; both cases satisfy the same bound. [F3, F4, F5, step 1.2, step 2.1, step 3.1, step 4.1, algebra] ∎
