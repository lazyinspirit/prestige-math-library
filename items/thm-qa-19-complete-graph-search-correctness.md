---
id: thm-qa-19-complete-graph-search-correctness
kind: theorem
title: Exact and approximate success of complete-graph continuous-time search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-19-complete-graph-spatial-search
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - def-qa-19-hamiltonian-access-cost-model
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - thm-qa-19-measurement-distribution
  - lem-qa-19-single-outcome-probability-stability
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-quarter-turn-values-and-shift-formulas
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): finite graph-Hamiltonian evolution. The complete-graph two-dimensional calculation is proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: the finite Hamiltonian convention. The exact complete-graph calculation is proved locally."
---

## Statement

For every integer $N\ge2$, every marked label $w\in[N]$, and every encoded
complete-graph search instance of
[[alg-qa-19-complete-graph-spatial-search]] whose supplied preparation produces
$e_s=N^{-1/2}\sum_xe_{\mathsf{enc}(x)}$, exact evolution under
$H=-A/N-|e_{\mathsf{enc}(w)}\rangle\langle e_{\mathsf{enc}(w)}|$ at
$t=\pi\sqrt N/2$ places the search register in the marked basis ray with
probability exactly $1$. If that evolution is replaced by a unitary $V$ with
$\|V-U_H(t)\|_{\rm op}\le\rho$ for $\rho\ge0$, the measured probability of
the marked label is at least $1-2\rho$.

## Facts & Assumptions
**Given:** The finite encoded register, $N\ge2$, marked label $w$, complete-graph generator and uniform state from the algorithm, real time $t=\pi\sqrt N/2$, and, for the approximation clause, a unitary simulator $V$ with the stated operator-norm error bound.

[F1] [[alg-qa-19-complete-graph-spatial-search]]: on the active label subspace, $A e_{\mathsf{enc}(x)}=\sum_{y\ne x}e_{\mathsf{enc}(y)}$, the marked projector is $P_w=|e_{\mathsf{enc}(w)}\rangle\langle e_{\mathsf{enc}(w)}|$, $H=-A/N-P_w$, and $e_s=N^{-1/2}\sum_xe_{\mathsf{enc}(x)}$.

[F2] [[def-qa-19-finite-matrix-dynamics]]: for a finite self-adjoint matrix, $U_H(t)$ is the spectral sum with coefficient $e^{-it\lambda}$ on the $\lambda$-eigenspace.

[F3] [[thm-qa-19-matrix-exponential-unitary-properties]]: $U_H(t)$ is unitary.

[F4] [[thm-qc-computational-basis-orthonormal]]: for every $d\ge1$, the ordered computational basis of $Q_d$ is orthonormal; in particular, each qubit factor basis $(e_0,e_1)$ is orthonormal.

[F5] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle x$.

[F6] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$.

[F7] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{ix}=\cos x+i\sin x$ for real $x$.

[F8] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos(\pi/2)=0$ and $\sin(\pi/2)=1$.

[F9] [[thm-qa-19-measurement-distribution]]: for a unit register state, the probability of basis outcome $y$ is the squared modulus of its $y$-coordinate.

[F10] [[lem-qa-19-single-outcome-probability-stability]]: for unitary outputs with operator-norm separation at most $\rho$, any one basis-outcome probability changes by at most $2\rho$.

[F11] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F12] [[def-qc-tensor-register-and-permutation]]: an ordered tensor register uses the lexicographic product basis and product inner product; with the orthonormal qubit bases from [F4], the full computational basis is orthonormal.

## Proof

**Proof technique:** direct.

1.1 Write $|w\rangle:=e_{\mathsf{enc}(w)}$ and $|r\rangle:=(N-1)^{-1/2}\sum_{x\ne w}e_{\mathsf{enc}(x)}$. By [F4], [F12] these are orthonormal; the sum defining $|r\rangle$ has $N-1\ge1$ terms. In their ordered basis, [F1] gives $A|w\rangle=\sqrt{N-1}|r\rangle$ and $A|r\rangle=\sqrt{N-1}|w\rangle+(N-2)|r\rangle$. By [F5], $P_w|w\rangle=|w\rangle$ and $P_w|r\rangle=0$, so its restricted matrix is $\operatorname{diag}(1,0)$. Thus their span $S$ is invariant under $H$, and the restricted matrices are $A=\begin{pmatrix}0&\sqrt{N-1}\\\sqrt{N-1}&N-2\end{pmatrix},\qquad H=\begin{pmatrix}-1&-\sqrt{N-1}/N\\-\sqrt{N-1}/N&-(N-2)/N\end{pmatrix}.$ In the full orthonormal computational basis [F12], $A$ has real symmetric entries between distinct encoded labels and zero entries elsewhere; [F5] makes $P_w$ diagonal with a single $1$. Hence the matrix of $H=-A/N-P_w$ is real symmetric, so $\langle Hx,y\rangle=\langle x,Hy\rangle$ for all $x,y$ and [F11] gives $H=H^*$. For $z\in S^\perp$ and $v\in S$, self-adjointness and invariance of $S$ give $\langle Hz,v\rangle=\langle z,Hv\rangle=0$, so $S^\perp$ is invariant too. Thus $H$ splits into self-adjoint blocks on $S$ and $S^\perp$. The input state is $|s\rangle=N^{-1/2}|w\rangle+\sqrt{(N-1)/N}|r\rangle$, which is unit because $|w\rangle,|r\rangle$ are orthonormal and the squared coefficients sum to $1$. [given, F1, F4, F5, F11, F12, algebra]

2.1 On this two-dimensional invariant span put $K:=H+(N-1)I/N$. Then $K=\frac1N\begin{pmatrix}-1&-\sqrt{N-1}\\-\sqrt{N-1}&1\end{pmatrix},\qquad K^2=I/N,\qquad \sqrt N K|s\rangle=-|w\rangle.$ The first two equalities follow by direct multiplication; for the last, the first coordinate of $K|s\rangle$ is $-1/\sqrt N$ and the second is $0$. [step 1.1, algebra]

3.1 Let $P_\pm=(I\pm\sqrt N K)/2$. Step 2.1 and self-adjointness of $K$ give $P_\pm^2=P_\pm=P_\pm^*$, $P_+P_-=0$, $P_++P_-=I$, and $KP_\pm=\pm P_\pm/\sqrt N$. By step 1.1, each eigenspace of $H$ is the orthogonal sum of the corresponding eigenspaces of its two blocks: projecting $Hz=\lambda z$ onto either invariant summand preserves that equation. Therefore the spectral sum [F2] restricts on $S$ to the sum determined by $P_\pm$. On $S$, $H=K-(N-1)I/N$, so [F2] and [F6] give, for $a=t/\sqrt N$, $U_H(t)|_{S}=e^{it(N-1)/N}(e^{-ia}P_++e^{ia}P_-)$. By [F7], this is $e^{it(N-1)/N}(\cos a\,I-i\sqrt N\sin a\,K)$. [step 1.1, step 2.1, F2, F6, F7, algebra]

4.1 At $t=\pi\sqrt N/2$, [F8] gives $a=\pi/2$, so step 3.1 and $\sqrt N K|s\rangle=-|w\rangle$ give $U_H(t)|s\rangle=i e^{it(N-1)/N}|w\rangle$. The coefficient has modulus one by [F7], hence [F9] assigns probability exactly $1$ to the marked label. [step 2.1, step 3.1, F7, F8, F9, algebra]

5.1 In the approximate branch, both $V$ and $U_H(t)$ are unitary and the prepared input $|s\rangle$ is unit. Applying [F10] to the marked basis outcome shows its probability differs from the exact probability in step 4.1 by at most $2\rho$. Since that exact probability is $1$, the simulated success probability is at least $1-2\rho$. [given, F3, F10, step 4.1, algebra] ∎
