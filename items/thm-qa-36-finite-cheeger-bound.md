---
id: thm-qa-36-finite-cheeger-bound
kind: theorem
title: Finite reversible Cheeger inequality
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-reversible-measure-and-detailed-balance
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite sums and finite-dimensional spectral theory only.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Theorem 2.5, PDF p. 10; finite reversible-chain conductance bound.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 171–176; history-path spectral-gap comparison.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\Omega$ be a finite set with $|\Omega|\ge2$. Let $P=(P(x,y))_{x,y\in\Omega}$ be an irreducible row-stochastic matrix and let $\pi$ be a strictly positive stationary probability satisfying detailed balance
$$\pi(x)P(x,y)=\pi(y)P(y,x).$$
For $S\subseteq\Omega$, put $Q(S,S^c)=\sum_{x\in S,\,y\notin S}\pi(x)P(x,y)$, and define the conductance
$$\phi=\min_{0<\pi(S)\le1/2}\frac{Q(S,S^c)}{\pi(S)}.$$
If $1=\lambda_1>\lambda_2\ge\cdots$ are the eigenvalues of $P$ in the weighted inner product $\langle f,g\rangle_\pi=\sum_x\pi(x)f(x)\overline{g(x)}$, then the algebraic gap satisfies
$$1-\lambda_2\ge\frac{\phi^2}{2}.$$
No absolute-gap or aperiodicity assertion is made.

## Facts & Assumptions

**Given:** A finite state set, a row-stochastic irreducible matrix $P$, and a strictly positive stationary probability $\pi$ satisfying the displayed detailed-balance equations.

[F1] A transition matrix is row-stochastic: $P(x,y)\ge0$ and $\sum_yP(x,y)=1$ ([[def-transition-matrix-and-n-step-transition-probabilities]]).

[F2] Stationarity means $\sum_x\pi(x)P(x,y)=\pi(y)$ ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]).

[F3] Detailed balance makes $\pi(x)P(x,y)$ symmetric in $x,y$ ([[def-reversible-measure-and-detailed-balance]]).

[F4] A self-adjoint endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis ([[def-self-adjoint-and-normal-endomorphism]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] Cauchy–Schwarz holds in the weighted finite-dimensional inner-product space ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 Set $q_{xy}=\pi(x)P(x,y)$. By [F3], $q_{xy}=q_{yx}$; by [F1] its row sums are $\pi(x)$, and by [F2] its column sums are also $\pi(y)$. For a real-valued function $f$ define $\displaystyle \mathcal E(f)=\frac12\sum_{x,y}q_{xy}(f(x)-f(y))^2.$ Expanding the square and using these row and column sums gives $\mathcal E(f)=\langle f,(I-P)f\rangle_\pi$. [given, F1, F2, F3, algebra]

2.1 Suppose $f\ge0$ and its support has $\pi$-mass at most $1/2$. For $t\ge0$, let $S_t=\{x:f(x)^2>t\}$. The finite layer-cake identities give $\int_0^\infty\pi(S_t)\,dt=\sum_x\pi(x)f(x)^2$ and $\int_0^\infty Q(S_t,S_t^c)\,dt=\frac12\sum_{x,y}q_{xy}|f(x)^2-f(y)^2|$. Every nonempty $S_t$ is admissible in the definition of $\phi$, so the latter integral is at least $\phi\|f\|_{2,\pi}^2$. Apply [F5] to the finite weighted sum with weights $q_{xy}/2$ and the factors $f(x)-f(y)$ and $f(x)+f(y)$. It bounds the integral above by $\sqrt{\mathcal E(f)\cdot\frac12\sum_{x,y}q_{xy}(f(x)+f(y))^2}$; using $(a+b)^2\le2a^2+2b^2$ and the row and column sums makes the second factor at most $2\|f\|_{2,\pi}^2$. If $f\ne0$, division yields $\mathcal E(f)\ge(\phi^2/2)\|f\|_{2,\pi}^2$; for $f=0$ it is immediate. [given, F1, F2, F5, step 1.1, algebra]

2.2 Let $g$ be a real function with $\sum_x\pi(x)g(x)=0$. A weighted median $m$ exists by sorting the finitely many values of $g$ until their cumulative $\pi$-mass reaches $1/2$; hence each of $g_+=(g-m)_+$ and $g_-=(m-g)_+$ has support mass at most $1/2$. For every pair $x,y$, $((g-m)(x)-(g-m)(y))^2\ge(g_+(x)-g_+(y))^2+(g_-(x)-g_-(y))^2$. Therefore step 1.1 gives $\mathcal E(g)=\mathcal E(g-m)\ge\mathcal E(g_+)+\mathcal E(g_-)$. [given, F1, F2, F3, step 1.1, choose, algebra]

3.1 Apply steps 2.1 and 2.2 to $g_+$ and $g_-$. Their squared norms sum to $\|g-m\|_{2,\pi}^2=\|g\|_{2,\pi}^2+m^2\ge\|g\|_{2,\pi}^2$ because $g$ has mean zero. Thus $\mathcal E(g)\ge(\phi^2/2)\|g\|_{2,\pi}^2$. [step 2.1, step 2.2, algebra]

4.1 Detailed balance makes $P$ self-adjoint for $\langle\cdot,\cdot\rangle_\pi$, since exchanging $x,y$ in the finite sum proves $\langle f,Pg\rangle_\pi=\langle Pf,g\rangle_\pi$. Constants are $1$-eigenvectors. For any complex-valued $f$, weighted Cauchy–Schwarz and the row sums give $|Pf(x)|^2=|\sum_yP(x,y)f(y)|^2\le\sum_yP(x,y)|f(y)|^2$. Summing against $\pi(x)$ and using stationarity gives $\|Pf\|_{2,\pi}\le\|f\|_{2,\pi}$. Thus every eigenvalue is at most $1$ and $1$ is the top eigenvalue. If a real function satisfies $Pf=f$, choose a state where it attains its maximum. Its value is a convex average of neighboring values, so every state reached with positive transition probability has the same maximum; irreducibility propagates this to every state. Thus the real $1$-eigenspace consists only of constants. For a complex $1$-eigenvector, its real and imaginary parts are real $1$-eigenvectors, so the same conclusion holds. By [F4], choose an orthonormal eigenbasis with first vector the normalized constant vector and eigenvalues $1=\lambda_1>\lambda_2\ge\cdots$. Expanding any mean-zero vector in the remaining basis vectors shows directly that its Rayleigh quotient for $I-P$ is a weighted average of $1-\lambda_j$, whose minimum is $1-\lambda_2$. Step 3.1 bounds every real mean-zero quotient below by $\phi^2/2$; applying that inequality to the real and imaginary parts gives the same bound for complex vectors. This proves the claim. A possible negative eigenvalue near $-1$ does not affect the algebraic gap. [given, F2, F3, F4, F5, step 3.1, algebra] ∎
