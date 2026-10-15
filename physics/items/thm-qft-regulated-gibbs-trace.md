---
id: thm-qft-regulated-gibbs-trace
kind: theorem
domain: mathematics
title: Finite-regulator Gibbs trace and bounded expectations
status: published
origin: pipeline
dependency_level: 5
deps: [def-qft-regulated-polynomial-hamiltonian, thm-qft-self-adjoint-regulated-interaction, lem-qft-hermite-oscillator-research-supplier, lem-qft-coercive-polynomial-form-domain, thm-hilbert-space-fourier-expansion, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, lem-nuclear-series-characterizes-trace-norm, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-is-absolutely-convergent-and-basis-independent, def-bounded-linear-operator, def-countable-choice]
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §§2.3 and 6.3, pp.76–83 and 163–169"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§2.3, form realization; §6.3, trace ideals and eigenvalue sums for positive operators."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapters 8–9, pp.48–54"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 8, confining-well compactness; Chapter 9, variational comparison of eigenvalues."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice and use the finite-mode data, form domain $Q$, and
self-adjoint $h$ from [[thm-qft-self-adjoint-regulated-interaction]]. Let
$\lambda_0\le\lambda_1\le\cdots$ be its eigenvalues repeated with
multiplicity, and let $\psi_k$ be a corresponding orthonormal eigenbasis. For
$\beta>0$ define the finite-rank truncations
$$\rho_{\beta,M}f:=\sum_{k=0}^M e^{-\beta\lambda_k}\langle f,\psi_k\rangle\psi_k.$$
The proof establishes their operator-norm limit $\rho_\beta$, with action
$$\rho_\beta f:=\sum_{k\ge0}e^{-\beta\lambda_k}\langle f,\psi_k\rangle\psi_k.$$
Put $\alpha_j:=\sqrt{a_jc}$ and let the oscillator eigenvalues
$\epsilon_k$ be the nondecreasing ordering, with multiplicity, of
$$\epsilon_{\mathbf n}=\sum_{j=1}^N(2n_j+1)\alpha_j, \qquad\mathbf n\in\mathbb N_0^N.$$
Then $\rho_\beta$ is positive trace class and its trace
$$Z_\beta:=\operatorname{Tr}(\rho_\beta)=\sum_{k\ge0}e^{-\beta\lambda_k}$$
satisfies the finite bound
$$0<Z_\beta\le e^{\beta C_0} \prod_{j=1}^N\frac{e^{-\beta\alpha_j}}{1-e^{-2\beta\alpha_j}}<\infty.$$
For every bounded linear operator $B:H_N\to H_N$, the normalized trace
expectation is well defined and
$$Z_\beta^{-1}\operatorname{Tr}(\rho_\beta B) =Z_\beta^{-1}\sum_{k\ge0}e^{-\beta\lambda_k} \langle B\psi_k,\psi_k\rangle,$$
with absolute convergence. This is a finite-$N$ mathematical trace result;
it assumes no statistical data and makes no continuum-limit claim.

## Facts & Assumptions

**Given:** Countable Choice, finite data $N,a_j,c,C_0,V$, the form domain $Q$, and $\beta>0$.

[A1] [[def-countable-choice]]: countable eigenbasis choices are permitted.

[F1] [[thm-qft-self-adjoint-regulated-interaction]]: $h$ is self-adjoint and has a complete orthonormal eigenbasis with real eigenvalues $\lambda_k\to+\infty$ and $\lambda_k\ge-C_0$; for $u\in Q$ its form has the coefficient expansion $q_h(u)=\sum_k\lambda_k|\langle u,\psi_k\rangle|^2$.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: for the form with potential $c|q|^2$, the product Hermite basis has energies $\epsilon_{\mathbf n}$ and its form is the coefficient sum $\sum_{\mathbf n}\epsilon_{\mathbf n}|\langle u,\psi_{\mathbf n}^{\mathrm{osc}}\rangle|^2$.

[F3] [[def-qft-regulated-polynomial-hamiltonian]] and [[lem-qft-coercive-polynomial-form-domain]]: $H_N$ is a complex Hilbert space, and the interacting form norm is the completion norm with weight $W+1=V+C_0+2$, controlling the weak derivatives and weighted function.

[F4] [[lem-nuclear-series-characterizes-trace-norm]]: under Countable Choice, a compact bounded operator that is the operator-norm limit of rank-one partial sums $\sum_{k\le M}\langle\cdot,u_k\rangle v_k$ with $\sum_k\|u_k\|\|v_k\|<\infty$ is trace class, with trace norm at most that coefficient sum.

[F5] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: for a self-adjoint positive trace-class operator the trace is the sum of its eigenvalues with multiplicity.

[F6] [[thm-riesz-representation-for-hilbert-space]]: every bounded linear functional on a complex Hilbert space is represented by a unique inner-product vector, with representing-vector norm equal to the functional norm.

[F7] [[thm-trace-is-absolutely-convergent-and-basis-independent]]: a trace-class operator has an absolutely convergent basis trace, equal to the trace computed from any nuclear representation.

[F8] [[def-bounded-linear-operator]]: a bounded linear $B$ satisfies $\|Bx\|\le\|B\|\|x\|$.

[F9] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ in $H_N$.

[F10] [[lem-finite-rank-operators-are-compact]]: every bounded linear operator with finite-dimensional range is compact.

[F11] [[thm-norm-limit-of-compact-operators-is-compact]]: under Countable Choice, an operator-norm limit of compact operators into a Banach space is compact.

[F12] [[thm-hilbert-space-fourier-expansion]]: for a complete orthonormal family in $H_N$, Parseval gives $\sum_k|\langle f,\psi_k\rangle|^2=\|f\|_2^2$.

## Proof

**Proof technique:** direct.

**Given:** $N\ge1$, $a_j,c>0$, $V(q)\ge c|q|^2-C_0$, the interacting form, and $\beta>0$.

1.1 Each $\epsilon_{\mathbf n}$ is finite, and only finitely many multi-indices have $\epsilon_{\mathbf n}\le M$ for any real $M$: for $M\ge0$, that inequality bounds every nonnegative integer $n_j$ by $M/(2\alpha_j)$, while for $M<0$ there are none. Fix the explicit degree-then-lexicographic enumeration of $\mathbb N_0^N$. Recursively, among the remaining tuples choose one of least energy, breaking a tie by that fixed enumeration; such a least energy exists because below the energy of the first remaining tuple there are only finitely many candidates. Every tuple is eventually listed, since only finitely many tuples have energy at most its energy. This gives the nondecreasing list $(\epsilon_k)_{k\ge0}$ with multiplicity. [F2, algebra]

1.2 On $C_c^\infty$, the shifted interacting form has weight $V+C_0+2\ge c|q|^2+2$, so it dominates the shifted oscillator form from [F2]. Therefore a Cauchy sequence in $Q$ is Cauchy in the oscillator form norm; the identity map extends to a continuous map $Q\to Q_{\mathrm{osc}}$, with the same $L^2$ representative because both completions inject into $H_N$ by [F3]. Subtracting the shifts in the two form norms gives
$$q_h(u)=a(u,u)-(C_0+2)\|u\|_2^2\ge q_{\mathrm{osc}}(u)-C_0\|u\|_2^2\qquad(u\in Q).$$
[F2, F3, algebra]

2.1 Fix $k\ge0$ and let $L_k=\operatorname{span}\{\psi_0,\ldots,\psi_k\}$. The linear map from $L_k$ to the span of the first $k$ oscillator eigenvectors, sending $u$ to its $k$ oscillator coefficients, has a nonzero kernel because $\dim L_k=k+1>k$. Choose $u\ne0$ in that kernel. Since $u$ lies in the span of the first $k+1$ interacting eigenvectors, [F1] gives $q_h(u)\le\lambda_k\|u\|_2^2$. Its oscillator coefficients at indices below $k$ vanish, so [F2] gives $q_{\mathrm{osc}}(u)\ge\epsilon_k\|u\|_2^2$. Step 1.2 now yields $\lambda_k\|u\|_2^2\ge q_h(u)\ge(\epsilon_k-C_0)\|u\|_2^2$, hence
$$\lambda_k\ge\epsilon_k-C_0.$$
This argument also covers $k=0$, when the span of zero oscillator vectors is $\{0\}$. [A1, F1, F2, step 1.2, algebra]

3.1 By step 2.1 and $\beta>0$,
$$\sum_{k\ge0}e^{-\beta\lambda_k} \le e^{\beta C_0}\sum_{\mathbf n\in\mathbb N_0^N} e^{-\beta\epsilon_{\mathbf n}} =e^{\beta C_0}\prod_{j=1}^N \left(\sum_{n_j\ge0}e^{-\beta(2n_j+1)\alpha_j}\right) =e^{\beta C_0}\prod_{j=1}^N \frac{e^{-\beta\alpha_j}}{1-e^{-2\beta\alpha_j}}.$$
The factorization follows first for finite rectangular sums by distributivity and then by increasing limits of nonnegative sums. Each denominator is positive because $0<e^{-2\beta\alpha_j}<1$. The lower bound $Z_\beta>0$ follows from its positive ground term. [F2, step 2.1, algebra]

4.1 The coefficients satisfy $0<e^{-\beta\lambda_k}\le e^{\beta C_0}$ by [F1]. For each $f$, Parseval makes the finite partial sums in the defining series for $\rho_\beta f$ Cauchy in $H_N$, so the series converges; its coefficient formula gives linearity and $\|\rho_\beta f\|_2\le e^{\beta C_0}\|f\|_2$. Moreover Parseval gives
$$\|\rho_\beta-\rho_{\beta,M}\|\le\sup_{k>M}e^{-\beta\lambda_k}\longrightarrow0,$$
since $\lambda_k\to+\infty$ and $\beta>0$. Each truncation is finite rank and hence compact by [F10], so the operator-norm limit $\rho_\beta$ is compact by [F11]. The same convergence makes its rank-one partial sums converge in operator norm, and their coefficient sum is $\sum_ke^{-\beta\lambda_k}=Z_\beta<\infty$; thus $\rho_\beta$ is trace class by [F4]. [A1, F1, F2, F4, F10, F11, F12, step 3.1, algebra]

5.1 Since each $e^{-\beta\lambda_k}$ is real, the Fourier expansion [F12] gives
$$\langle\rho_\beta f,g\rangle=\sum_k e^{-\beta\lambda_k}\langle f,\psi_k\rangle\langle\psi_k,g\rangle=\langle f,\rho_\beta g\rangle$$
for all $f,g\in H_N$; the series is absolutely convergent by Cauchy--Schwarz
for the coefficient sequences and boundedness of the weights. Thus
$\rho_\beta$ is self-adjoint. It is positive because
$$\langle\rho_\beta f,f\rangle =\sum_ke^{-\beta\lambda_k}|\langle f,\psi_k\rangle|^2\ge0.$$
The defining series gives $\rho_\beta\psi_k=e^{-\beta\lambda_k}\psi_k$. If $\rho_\beta x=\mu x$, taking Fourier coefficients shows $(e^{-\beta\lambda_k}-\mu)\langle x,\psi_k\rangle=0$ for every $k$. Completeness [F1, F12] then implies that every nonzero eigenspace is exactly the span of basis vectors with the corresponding repeated diagonal value; since every diagonal value is positive, $0$ is not an eigenvalue. Thus the eigenvalues with multiplicity are precisely $(e^{-\beta\lambda_k})$, and [F5] gives $\operatorname{Tr}(\rho_\beta)=Z_\beta$. For bounded $B$, each $\rho_{\beta,M}B$ is finite rank and hence compact by [F10], while
$$\|\rho_{\beta,M}B-\rho_\beta B\|\le\|\rho_{\beta,M}-\rho_\beta\|\,\|B\|\to0$$
by step 4.1. Therefore $\rho_\beta B$ is compact by [F11]. The functional $x\mapsto\langle Bx,\psi_k\rangle$ is linear and has norm at most $\|B\|$ by [F9] and [F8]. By [F6] it is represented by a vector $w_k$ with $\|w_k\|\le\|B\|$ and $\langle Bx,\psi_k\rangle=\langle x,w_k\rangle$. Hence
$$\rho_\beta Bx=\sum_k\langle x,w_k\rangle e^{-\beta\lambda_k}\psi_k.$$
The partial sums converge in operator norm: the norm of the tail after $M$ is at most $\|B\|\sum_{k>M}e^{-\beta\lambda_k}\to0$ by step 3.1. This nuclear representation has coefficient sum at most $\|B\|Z_\beta$. Since $\rho_\beta B$ is compact as shown above, [F4] gives that it is trace class. Its basis trace in $(\psi_k)$ is absolutely convergent and equals the trace by [F7]. The $k$th diagonal entry is
$$\langle \rho_\beta B\psi_k,\psi_k\rangle =e^{-\beta\lambda_k}\langle B\psi_k,\psi_k\rangle,$$
so this basis sum is the asserted numerator. Each term is bounded in modulus by $e^{-\beta\lambda_k}\|B\|$ by [F8] and [F9], giving the stated absolute bound. Division by $Z_\beta>0$ proves the expectation formula. [A1, F1, F4, F5, F6, F7, F8, F9, F10, F11, F12, step 3.1, step 4.1, algebra] ∎
