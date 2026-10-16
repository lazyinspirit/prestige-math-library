---
id: lem-qa-33-fixed-arity-local-measurement-synthesis
kind: lemma
title: Uniform finite-arity local-energy measurement synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-33-k-local-hamiltonian-promise
  - lem-qa-33-bernstein-square-root-bound
  - lem-qa-33-near-unitary-polar-correction
  - lem-qa-33-finite-dimensional-unitary-synthesis
  - def-qc-povm-and-outcome-law
justified_by: []
proof_strategy: direct
axiom_use: None; finite spectral calculus, polynomial approximation and explicit circuit synthesis suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §2, local measurements, PDF pp. 3–4
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.2, PDF pp. 116–118
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 2, PDF pp. 15–18
---

## Statement

Fix $k$. Let $K$ be a Hermitian matrix on at most $k$ qubits with rational or effectively encoded algebraic entries of bit length $b$, let $B\ge\|K\|$ be a positive rational of bit length $b$, and set $E=(I-K/B)/2$. For any rational $0<\eta<1/2$, a deterministic polynomial-time generator in $b+\ell(\eta)+1/\eta$ outputs a finite QC14 circuit with one flag bit whose measured outcome $1$ has effect $\widetilde E$ satisfying $\|\widetilde E-E\|\le\eta$. Let $U_0$ be the Naimark block unitary of the proof and define $U_{acc}=(X_{flag}\otimes I)U_0$. The construction supplies polynomial-time Cauchy names for $U_{acc}$ and a standalone dilation circuit whose unitary is within $\eta/2$, up to global phase, of $U_{acc}$. With one selector bit, [[lem-qa-33-finite-dimensional-unitary-synthesis]] compiles the full block diagonal matrix $I\oplus U_{acc}$ from those Cauchy names. Circuit size and generator bit time are polynomial in $b+\ell(\eta)+1/\eta$, where $\ell(\eta)$ is the binary encoding length of the rational tolerance. No local matrix is treated as a free gate or oracle.

## Facts & Assumptions

**Given:** Fixed $k$, encoded Hermitian $K$, rational $B>0$ with $B\ge\|K\|$, and rational $0<\eta<1/2$.

[F1] [[lem-qa-33-bernstein-square-root-bound]]: degree $d\ge1/(4\delta^4)$ Bernstein polynomials approximate $\sqrt{x}$ on $[0,1]$ uniformly within $\delta$.

[F2] [[lem-qa-33-near-unitary-polar-correction]]: if $\|M-U\|\le\varepsilon\le1/8$ for unitary $U$, the polar unitary $Q$ satisfies $\|Q-U\|\le2\varepsilon$.

[F3] [[lem-qa-33-finite-dimensional-unitary-synthesis]]: a fixed-dimensional unitary with polynomial-time Cauchy entries can be compiled to operator error $\zeta$ up to a global scalar phase, with polynomial bit cost and size.

[F4] [[def-qc-povm-and-outcome-law]]: measuring a two-outcome projective flag and ignoring the unmeasured data register yields the corresponding compressed effect on the input.

[F5] [[def-qa-33-k-local-hamiltonian-promise]]: each local term is an effectively encoded finite Hermitian matrix on at most fixed $k$ qubits.

## Proof

1.1 The effective encoding and fixed arity in [F5] give a fixed-dimensional matrix with computable entries. By Hermiticity and the norm bound, every eigenvalue $\lambda$ of $K/B$ lies in $[-1,1]$; hence the eigenvalues of $E$ lie in $[0,1]$. The finite-dimensional spectral theorem therefore gives positive square roots $S=\sqrt E$ and $R=\sqrt{I-E}$. The block matrix $U_0=U=\begin{pmatrix}S&R\\R&-S\end{pmatrix}$ is unitary: $S,R$ are commuting functions of $E$, $S^2+R^2=I$, and the off-diagonal products cancel. For input flag $0$, its flag-$0$ block is $S$. Follow the dilation by $X$ on the flag, so the accepted branch is labeled outcome $1$; define the marked-accept dilation $U_{acc}$ to be this full unitary. Its accepted effect is $S^*S=E$. [given, F5, algebra]

2.1 Choose degree $d\ge1/(4\delta^4)$ and use [F1] to form Bernstein polynomials $S_d=B_d(E)$ and $R_d=B_d(I-E)$. Functional calculus on the eigenbasis gives $\|S_d-S\|,\|R_d-R\|\le\delta$. Thus the block matrix $M=\begin{pmatrix}S_d&R_d\\R_d&-S_d\end{pmatrix}$ satisfies $\|M-U\|\le2\delta$ by the triangle inequality for its two block columns. Taking $\delta\le1/16$ and applying [F2] gives an exactly unitary polar correction $Q$ with $\|Q-U\|\le4\delta$. [F1, F2, step 1.1, algebra]

2.2 Polynomial-time Cauchy names for the ideal dilation require a precision-polynomial construction. For $A=E$ or $I-E$, put $X_0=I$, $X_{j+1}=(X_j+AX_j^{-1})/2$. On each eigenvalue $a\in[0,1]$, the scalar iterate satisfies $x_j\ge\max\{\sqrt a,2^{-j}\}$ and $0\le x_{j+1}-\sqrt a=(x_j-\sqrt a)^2/(2x_j)\le(x_j-\sqrt a)/2$. Thus $\|X_j-\sqrt A\|\le2^{-j}$ and $\|X_j^{-1}\|\le2^j$, even when $a=0$. For error $2^{-p}$, take $m=p+3$, approximate $A$ once to operator error $h=2^{-10(m+1)^2}$, and round every iterate to dyadic entries with total operator rounding error at most $h$. If the iterate error is $e_j\le2^{-j-1}$, the inverse identity bounds inverse error by $2^{2j+1}e_j$ and approximate inverse norm by $2^{j+1}$. Therefore $e_{j+1}\le2^{2j+2}e_j+2^{j+1}h+h$. With $e_0=0$, this gives $e_j\le2^{2(m+1)^2}h$ for $j\le m$, smaller than $2^{-m}$ and $2^{-j-1}$, so the bounds hold throughout. In fixed local dimension $D$, rational inversion by adjugate and determinant uses a fixed number of arithmetic operations; the approximate iterates have least singular value at least $2^{-j-1}$ and determinant modulus at least $2^{-D(j+1)}$. Rounding after each iteration keeps all stored entries at $O_D(m^2)$ bits. The $m$ iterations and the input approximation consequently cost polynomial time in the encoding length and $p$. They supply polynomial-time Cauchy names for $S,R$ and $U_{acc}$. [F5, step 1.1, algebra]

3.1 Select $\delta\le\eta/16$, and compile $Q$ to a circuit with a phase representative $V'$ satisfying $\|V'-Q\|\le\eta/4$ using [F3]. The accepted flag outcome effect of the physical circuit is $\widetilde E=V_{00}^*V_{00}$, where $V_{00}$ is the flag-$0$ compression before the final $X$ relabeling; the global scalar relating the physical unitary to $V'$ cancels in this effect. Compressions are contractions, so $\|\widetilde E-E\|\le\|V'^*P_0V'-U^*P_0U\|\le2\|V'-U\|\le2(\eta/4+4\delta)\le\eta.$ The fixed dimension is at most $2^{k+1}$; Bernstein degree is $O(\eta^{-4})$, and its coefficients and matrix products have polynomially many bits at the needed precision. The polar series and fixed-width synthesis also have polynomial generator cost by [F2]–[F3]. Step 2.2 supplies polynomial-time Cauchy entries for $U_{acc}=(X_{flag}\otimes I)U_0$, so the same fixed-dimensional synthesis applies to the block diagonal matrix $I\oplus U_{acc}$ after adding one selector bit. Thus no controlled operation is assumed without synthesis. [F2, F3, F4, step 2.1, step 2.2, algebra] ∎
