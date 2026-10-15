---
id: thm-tdmath-discrete-quantum-cesaro-dephasing
kind: theorem
title: "Trace-norm Cesàro dephasing for a discrete Gibbs spectrum"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: ["def-complex-exponential","def-real-and-complex-inner-product-space","def-trace-class-operator","lem-finite-rank-compressions-converge-in-trace-norm","thm-complex-exponential-addition-and-real-extension","thm-cyclicity-of-the-trace","thm-trace-class-is-a-two-sided-banach-operator-ideal","thm-trace-is-absolutely-convergent-and-basis-independent","thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues","thm-tdmath-general-trace-gibbs-model"]
justified_by: []
dependency_roles: {"def-complex-exponential":"mathematical-premise","def-real-and-complex-inner-product-space":"mathematical-premise","def-trace-class-operator":"mathematical-premise","lem-finite-rank-compressions-converge-in-trace-norm":"mathematical-premise","thm-complex-exponential-addition-and-real-extension":"mathematical-premise","thm-cyclicity-of-the-trace":"mathematical-premise","thm-trace-class-is-a-two-sided-banach-operator-ideal":"mathematical-premise","thm-trace-is-absolutely-convergent-and-basis-independent":"mathematical-premise","thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues":"mathematical-premise","thm-tdmath-general-trace-gibbs-model":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement

Assume the Axiom of Choice and the exact first-clause interface of [[thm-tdmath-general-trace-gibbs-model]]: a nonzero complex Hilbert space has a finite or countable complete orthonormal energy eigenbasis $(u_j)$ for a self-adjoint semibounded $A$, with each energy eigenspace finite-dimensional. The supplier is a current draft whose statement and complete argument have been inspected; this theorem is conditional on that interface and does not claim its independent acceptance. Let $\hbar>0$, define $U_tu_j=e^{-iE_jt/\hbar}u_j$, and extend linearly and continuously. For any positive trace-class density operator $\rho$ with $\operatorname{Tr}\rho=1$, set $\rho_t=U_t\rho U_t^*$. If $P_E$ denotes the projection onto the full eigenspace of energy $E$, then the trace-norm Riemann average
$$\bar\rho_T:=\frac1T\int_0^T\rho_t\,dt$$
converges as $T\to\infty$ to
$$\rho_{\rm diag}:=\sum_E P_E\rho P_E$$
in trace norm. The full degenerate energy blocks are retained. Thus expectations of every bounded observable converge to their diagonal-ensemble values. This asserts Cesàro convergence, not convergence of $\rho_t$ at individual late times, and is restricted to the stated discrete trace-class spectrum.

## Facts & Assumptions

**Given:** The inspected discrete eigenbasis interface, a positive trace-one trace-class density, and the unitary phase convention.

[A1] AC is adopted; the actual draft supplier statement [[thm-tdmath-general-trace-gibbs-model]] assumes a nonzero complex Hilbert space, self-adjoint $A$ with spectral support in $[a,\infty)$, $\beta>0$, and positive trace-class Gibbs operator $K_\beta$. Its first clause supplies a finite or countable complete orthonormal basis of eigenvectors $Au_j=E_ju_j$, finite multiplicity for each energy, and a positive finite partition trace. Its complete proof is present as draft; the dependency is used conditionally.

[A2] $\rho$ is positive trace class with trace one; $\hbar>0$ is fixed and the phase is $e^{-iE_jt/\hbar}$.

[F1] [[def-trace-class-operator]]: trace-class operators have finite trace norm and form the space on which the trace and trace norm are defined.

[F2] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: trace class is a Banach space, and $\|ARB\|_1\le\|A\|\|R\|_1\|B\|$ for bounded $A,B$.

[F3] [[lem-finite-rank-compressions-converge-in-trace-norm]]: if finite-rank orthogonal projections converge strongly to the identity on a separable Hilbert space, their two-sided compressions of a trace-class operator converge in trace norm.

[F4] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]] and [[thm-trace-is-absolutely-convergent-and-basis-independent]]: positive trace is the sum of diagonal eigenbasis entries, and the trace is basis independent.

[F5] [[thm-cyclicity-of-the-trace]]: for trace-class $S$ and bounded $B$, $\operatorname{Tr}(SB)=\operatorname{Tr}(BS)$.

[F6] [[def-complex-exponential]] and [[thm-complex-exponential-addition-and-real-extension]]: $e^{ix}$ is continuous, has modulus one for real $x$, and has the usual phase addition and antiderivative formulas.

[F7] [[def-real-and-complex-inner-product-space]]: the Hilbert inner product is linear in the first argument.

## Proof



**Given:** [A1]–[A2] and [F1]–[F7].

1.1 Each multiplier $e^{-iE_jt/\hbar}$ has modulus one by [F6]. Thus $U_t$ preserves the norm of finite linear combinations of the complete orthonormal basis; it extends by density to an isometry on the Hilbert space. The similarly defined $U_{-t}$ is its inverse, so $U_t$ is unitary and depends continuously on $t$ on each finite-dimensional energy span. The arguments $E_jt/\hbar$ are dimensionless. [A1, A2, F6, F7]

2.1 By [F2], $\rho_t=U_t\rho U_t^*$ is trace class. It is positive because $\langle\rho_t x,x\rangle=\langle\rho U_t^*x,U_t^*x\rangle\ge0$, and cyclicity [F5] gives $\operatorname{Tr}\rho_t=\operatorname{Tr}\rho=1$. [A2, F2, F5, F7, step 1.1]

2.2 Enumerate the distinct energy eigenspaces and let $P_N$ project onto the first $N$ of them, with $P_N=I$ after the list is exhausted if it is finite. Their union spans the eigenbasis, so $P_N\to I$ strongly. The Hilbert space is separable by the countable complete basis in [A1]. Therefore [F3] gives $\|P_N\rho P_N-\rho\|_1\to0$. Unitary invariance of trace norm follows from [F2] in both directions: $\|U_tRU_t^*\|_1\le\|R\|_1$ and $R=U_t^*(U_tRU_t^*)U_t$ gives the reverse inequality. Consequently $$\|U_tP_N\rho P_NU_t^*-\rho_t\|_1=\|P_N\rho P_N-\rho\|_1$$ uniformly in $t$. [A1, A2, F2, F3, step 1.1]

3.1 For fixed $N$, the matrix of $U_tP_N\rho P_NU_t^*$ on its finite-dimensional range has continuous entries, hence is continuous in trace norm. Step 2.2 makes $\rho_t$ a uniform trace-norm limit on compact time intervals of these continuous maps; therefore $t\mapsto\rho_t$ is trace-norm continuous. On $[0,T]$ it is uniformly continuous. Riemann sums for a uniformly continuous Banach-valued function are Cauchy: two sums are compared on a common refinement and their difference is bounded by $T$ times the modulus of continuity at the larger mesh. Completeness in [F2] supplies the trace-class integral and its usual norm bound. [F2, step 2.2]

4.1 In the eigenbasis, the $(i,j)$ matrix entry of $U_tP_N\rho P_NU_t^*$ is $\langle\rho u_j,u_i\rangle e^{-i(E_j-E_i)t/\hbar}$. Its time-average factor is $1$ if $E_i=E_j$; if $E_i\ne E_j$, direct integration using [F6] gives absolute value at most $2\hbar/(T|E_j-E_i|)$, which tends to zero. Since the compression is finite dimensional, entrywise convergence implies trace-norm convergence. Hence the finite compressed average tends to $\sum_{E\text{ among the first }N}P_E\rho P_E$. [A1, A2, F6, F7, step 3.1]

5.1 Each block $P_E\rho P_E$ is positive trace class. The sum of their traces is $$\sum_E\sum_{u_j\in\operatorname{ran}P_E}\langle\rho u_j,u_j\rangle =\operatorname{Tr}\rho=1$$ by [F4] and the complete basis in [A1]. Therefore their finite partial sums are Cauchy in trace norm: for a positive finite block tail its trace norm equals its trace, and the scalar trace tail tends to zero. Their limit $\rho_{\rm diag}$ exists in trace norm, is positive, and has trace one. [A1, A2, F1, F4, step 4.1]

6.1 Given $\epsilon>0$, choose $N$ so the compression error in 2.1 and the diagonal tail in 3.2 are each below $\epsilon/3$. The norm bound for the Riemann integral in 2.2 makes the average of the compression error at most $\epsilon/3$, uniformly in $T$. For this fixed $N$, step 4.1 makes the finite compressed average differ from its finite diagonal limit by less than $\epsilon/3$ for all sufficiently large $T$. The triangle inequality then gives $\|\bar\rho_T-\rho_{\rm diag}\|_1<\epsilon$. [F2, step 2.2, step 3.1, step 4.1, step 5.1]

7.1 For bounded observable $B$, the trace-class ideal and trace estimates in [F2] and [F4] give $|\operatorname{Tr}((\bar\rho_T-\rho_{\rm diag})B)|\le\|\bar\rho_T-\rho_{\rm diag}\|_1\|B\|$. Step 6.1 sends the right-hand side to zero. The conclusion is only convergence of time-averaged states in the stated trace norm. [A2, F2, F4, step 6.1] ∎
