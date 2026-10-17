---
id: thm-qsm-dt-trace-contraction
kind: theorem
title: Schwarz and trace-norm channel contraction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-qsm-dt-channel-definition
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-channel-duality
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-channel-duality: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 3, §3.3, Theorem 3.39 and Corollary 3.40
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.3.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §§3.5–3.6
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement

Let $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ be a finite channel, and define $\|X\|_\infty=\sup_{\|v\|=1}\|Xv\|$ and $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$. Its trace dual $\Phi^\dagger:M_e(\mathbb C)\to M_d(\mathbb C)$ from [[thm-qsm-dt-channel-duality]] satisfies

$$\|\Phi^\dagger(A)\|_\infty\leq\|A\|_\infty\qquad(A\in M_e(\mathbb C)).$$ For every $X\in M_d(\mathbb C)$, the Schrödinger map contracts the trace norm: $$\|\Phi(X)\|_1\leq\|X\|_1.$$

The second inequality applies to arbitrary complex matrices, not only density matrices.

## Facts & Assumptions

**Given:** Integers $d,e\geq1$, a finite channel $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$, and finite matrix operator and trace norms as defined in the Statement.

[F1] [[def-qsm-dt-channel-definition]]: complete positivity includes positivity of the ancilla extension $\operatorname{id}_2\otimes\Phi$, and trace preservation is exact on all input matrices.

[F2] [[thm-qsm-dt-channel-duality]]: the trace dual is unital and completely positive and satisfies $\operatorname{Tr}(\Phi(X)A)=\operatorname{Tr}(X\Phi^\dagger(A))$.

[F3] [[lem-qsm-matrix-state-calculus]]: the standard finite-dimensional inner product is taken linear in its first argument; finite Hermitian matrices have orthonormal spectral decompositions and positive matrices have positive square roots defined by spectral calculus; the finite trace is cyclic.

## Proof




1.1 By [F2], $\Phi^\dagger$ is positive. For any Hermitian $H\in M_e(\mathbb C)$, its finite spectral decomposition [F3] is $H=\sum_\lambda\lambda P_\lambda$, where each $\lambda$ is real and each spectral projection $P_\lambda$ is positive semidefinite. Hence every $\Phi^\dagger(P_\lambda)$ is Hermitian, so $\Phi^\dagger(H)$ is Hermitian. Write an arbitrary $A$ as $A=H+iK$, where $H=(A+A^*)/2$ and $K=(A-A^*)/(2i)$ are Hermitian. By complex linearity, $\Phi^\dagger(A^*)=\Phi^\dagger(H)-i\Phi^\dagger(K)=\Phi^\dagger(A)^*$. [given, F2, F3, algebra]

1.2 For $A\in M_e(\mathbb C)$, the block matrix $\begin{pmatrix}A^*A&A^*\\A&I_e\end{pmatrix}$ is positive semidefinite because its quadratic form at $(x,y)$ is $\|Ax+y\|^2$. Apply $\operatorname{id}_2\otimes\Phi^\dagger$, which preserves positivity by [F2]. By unitality in [F2] and adjoint preservation from step 1.1, the resulting block is $\begin{pmatrix}\Phi^\dagger(A^*A)&\Phi^\dagger(A)^*\\\Phi^\dagger(A)&I_d\end{pmatrix}\geq0$. [given, F2, step 1.1, algebra]

1.3 For any $n\geq1$ and $Z\in M_n(\mathbb C)$, use the standard inner product $\langle u,v\rangle=\sum_k u_k\overline{v_k}$, linear in its first argument, and define $|u\rangle\langle v|$ as the map $x\mapsto\langle x,v\rangle u$. Since $Z^*Z$ is positive, with $\langle Z^*Zv,v\rangle=\|Zv\|^2$, [F3] diagonalizes it in an orthonormal basis $(v_j)$ with eigenvalues $s_j^2\geq0$. For each $s_j>0$, put $u_j=Zv_j/s_j$. Then $\langle u_j,u_k\rangle=\delta_{jk}$, and $Z=\sum_{s_j>0}s_j|u_j\rangle\langle v_j|$. The positive square root of $Z^*Z$ has eigenvalues $s_j$, so $\|Z\|_1=\sum_j s_j$. [given, F3, construct, algebra]

2.1 In the positive block from step 1.2, evaluate the quadratic form at $(x,-\Phi^\dagger(A)x)$. This gives $\langle(\Phi^\dagger(A^*A)-\Phi^\dagger(A)^*\Phi^\dagger(A))x,x\rangle\geq0$ for every $x$, so $\Phi^\dagger(A)^*\Phi^\dagger(A)\leq\Phi^\dagger(A^*A)$. Also $A^*A\leq\|A\|_\infty^2I_e$; positivity and unitality in [F2] then give $\Phi^\dagger(A)^*\Phi^\dagger(A)\leq\|A\|_\infty^2I_d$, proving $\|\Phi^\dagger(A)\|_\infty\leq\|A\|_\infty$. [step 1.2, F2, F3, algebra]

2.2 For any $n\geq1$, $Z\in M_n(\mathbb C)$, and $B\in M_n(\mathbb C)$ with $\|B\|_\infty\leq1$, write $Z_{ab}=\sum_{s_j>0}s_j(u_j)_a\overline{(v_j)_b}$ using step 1.3. Expanding both diagonal-sum traces gives $\operatorname{Tr}(BZ)=\sum_{a,b}B_{ab}Z_{ba}=\sum_{s_j>0}s_j\sum_{a,b}B_{ab}(u_j)_b\overline{(v_j)_a}$ and $\operatorname{Tr}(ZB)=\sum_{a,b}Z_{ab}B_{ba}=\sum_{s_j>0}s_j\sum_{a,b}B_{ab}(u_j)_b\overline{(v_j)_a}$. The inner sum is $\langle Bu_j,v_j\rangle$ for the inner product fixed in step 1.3. For each unit $v_j$, $0\leq\|Bu_j-\langle Bu_j,v_j\rangle v_j\|^2=\|Bu_j\|^2-|\langle Bu_j,v_j\rangle|^2$, so both trace magnitudes are at most $\sum_js_j=\|Z\|_1$. Extend the two finite orthonormal lists $(u_j)$, $(v_j)$ to orthonormal bases and choose a unitary $B$ carrying each $u_j$ to $v_j$; then both trace magnitudes equal $\sum_js_j$. Thus $\|Z\|_1=\sup_{\|B\|_\infty\leq1}|\operatorname{Tr}(BZ)|=\sup_{\|B\|_\infty\leq1}|\operatorname{Tr}(ZB)|$, including $Z=0$. [step 1.3, F3, choose, algebra]

3.1 Apply the second dual norm formula from step 2.2 in output dimension $e$ to $\Phi(X)$. For each $A\in M_e(\mathbb C)$ with $\|A\|_\infty\leq1$, step 2.1 gives $\|\Phi^\dagger(A)\|_\infty\leq1$, so the same formula in input dimension $d$ bounds $|\operatorname{Tr}(X\Phi^\dagger(A))|\leq\|X\|_1$. The trace-pairing identity [F2] therefore gives $\|\Phi(X)\|_1=\sup_{\|A\|_\infty\leq1}|\operatorname{Tr}(\Phi(X)A)|=\sup_{\|A\|_\infty\leq1}|\operatorname{Tr}(X\Phi^\dagger(A))|\leq\|X\|_1$. [step 2.1, step 2.2, F2, algebra] ∎

