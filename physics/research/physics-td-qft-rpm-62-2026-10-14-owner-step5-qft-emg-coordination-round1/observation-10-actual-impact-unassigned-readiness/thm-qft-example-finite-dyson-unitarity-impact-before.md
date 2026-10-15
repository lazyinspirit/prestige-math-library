---
id: thm-qft-example-finite-dyson-unitarity
kind: theorem
domain: mathematics
title: Finite Dyson remainder, coefficient unitarity, and regulator counterexamples
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-countable-choice
  - def-qft-example-data
  - thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§3.1.1 and 3.6.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: R. Fitzpatrick, Quantum Mechanics, Chapter 13, finite-time perturbation and two-state system
      url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §9, problem 9.5(b)–(g), printed pp. 84–85
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: "Problem 9.5(b)–(g), printed pp. 84–85, equations (9.34)–(9.36): unitary interaction-picture evolution, differential equation, time-ordered expansion, and composition/adjoint identities. The local finite-dimensional theorem supplies its own convergence proof."
---

## Statement

Assume the Countable Choice axiom $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $d\ge1$, $T>0$, $\hbar>0$, and $\lambda\in\mathbb R$. Let $H_0=H_0^\dagger$ be a $d\times d$ Hermitian matrix with entries in joules, and let $V:[0,T]\to M_d(\mathbb C)$ be norm-continuous, Hermitian-valued, and in joules. Define
$$V_I(t)=e^{itH_0/\hbar}V(t)e^{-itH_0/\hbar},\qquad B=\sup_{0\le t\le T}\|V_I(t)\|,\qquad z=\frac{|\lambda|BT}{\hbar}.$$
The coupling $\lambda$ is dimensionless and $z$ is dimensionless. Put $S_0(t)=I$ and
$$S_{n+1}(t)=-\frac{i}{\hbar}\int_0^t V_I(r)S_n(r)\,dr,\qquad S(t)=\sum_{n=0}^{\infty}\lambda^nS_n(t).$$
Then the series converges in operator norm on $[0,T]$, $S$ is the unique solution of $\dot S=-i\lambda V_I S/\hbar$, $S(0)=I$, and $S(t)$ is unitary. For every $N\ge0$,
$$\left\|S(T)-\sum_{n=0}^N\lambda^nS_n(T)\right\| \le e^z\frac{z^{N+1}}{(N+1)!}.$$

Define $S(T;\lambda)=I+iT(\lambda)$ and $T(\lambda)=\sum_{n\ge1}\lambda^nT_n$. For every pair of basis indices $f,i$, exact unitarity gives
$$2\,\operatorname{Im}T_{ii}(\lambda)=\sum_f|T_{fi}(\lambda)|^2,$$
and coefficient comparison gives $T_1=T_1^\dagger$ and $2\,\operatorname{Im}T_2=T_1^\dagger T_1$. These are identities for this finite matrix model.

For $H=g_E\sigma_x$ on $\mathbb C^2$, where $g_E>0$ is in joules and $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, the evolution matrix is
$$e^{-itH/\hbar}=\cos(g_Et/\hbar)I-i\sin(g_Et/\hbar)\sigma_x.$$
Its exact off-diagonal matrix-element square is $\sin^2(g_Et/\hbar)$; its first-order squared coefficient is $(g_Et/\hbar)^2$, which can exceed $1$. For every positive rate $\Gamma$ in $\mathrm{s}^{-1}$, the survival matrix-element square $\cos^2(g_Et/\hbar)$ is not $e^{-\Gamma t}$.

For an integer $N\ge0$, on the finite basis $|0\rangle,\ldots,|N\rangle$ define $a_N|n\rangle=\sqrt n\,|n-1\rangle$ (zero at $n=0$) and $a_N^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$ for $n<N$, with $a_N^\dagger|N\rangle=0$. Then
$$[a_N,a_N^\dagger]=I-(N+1)|N\rangle\langle N|.$$
No finite-dimensional matrices can satisfy $[A,B]=I$, because the trace of a commutator is zero while the trace of $I$ is the dimension.

## Facts & Assumptions

**Given:** $d\ge1$, $T>0$, $\hbar>0$, real dimensionless $\lambda$, Hermitian $H_0$, and a norm-continuous Hermitian matrix family $V(t)$ on $[0,T]$, all with the units fixed in [[def-qft-example-data]].

[F1] [[def-qft-example-data]]: $\hbar$ has units $\mathrm{J\,s}$, energy matrices have units joules, $\lambda$ is dimensionless, and finite matrices use the operator norm.

[F2] [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]: for the stated norm-continuous bounded self-adjoint operator family, the Volterra equation has a unique continuous solution.

[F3] [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]: every propagator supplied by that theorem is unitary; its full statement also supplies the norm-Dyson convergence and factorial bound.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the choice principle assumed by the exact controlled-dynamics supplier; no stronger choice principle is used.

## Proof

1.1 The matrix exponential is defined by its norm-convergent power series; termwise differentiation on compact time intervals gives $W'(t)=iH_0W(t)/\hbar$ for $W(t)=e^{itH_0/\hbar}$. Hence $(W(t)^\dagger W(t))'=0$ and $W(0)^\dagger W(0)=I$, so $W$ is unitary (in finite dimension a left inverse is an inverse). Therefore $V_I(t)=W(t)V(t)W(t)^\dagger$ is Hermitian and norm-continuous. Its norm is bounded on compact $[0,T]$, so $B<\infty$. [given, F1, algebra]

1.2 Recursion expresses $\lambda^nS_n(T)$ as an $n$-fold ordered integral with integrand of norm at most $(|\lambda|B/\hbar)^n$. The volume of $0<t_n<\cdots<t_1<T$ is $T^n/n!$: induction integrates the preceding volume $t^{n-1}/(n-1)!$ from $0$ to $T$. Thus $\|\lambda^nS_n(T)\|\le z^n/n!$ and the same bound with $T$ replaced by any $t\in[0,T]$ holds uniformly. The scalar exponential series proves uniform absolute convergence. [given, F1, algebra]

1.3 For $\sigma_x^2=I$, separate the even and odd powers in the absolutely convergent exponential series: $$e^{-iz\sigma_x}=\sum_{k\ge0}\frac{(-1)^kz^{2k}}{(2k)!}I -i\sum_{k\ge0}\frac{(-1)^kz^{2k+1}}{(2k+1)!}\sigma_x =\cos z\,I-i\sin z\,\sigma_x,$$ where $z=g_Et/\hbar$. Its off-diagonal entry has modulus square $\sin^2z$, and the first-order term has modulus square $z^2$. Taking $|z|>1$ makes the latter exceed $1$. Also $\cos^2z$ has derivative $0$ at $t=0$, whereas $e^{-\Gamma t}$ has derivative $-\Gamma<0$ there; so they cannot agree for all $t$ when $\Gamma>0$. [given, F1, algebra]

2.1 For the tail, write $n=N+1+k$. Then $$\sum_{n=N+1}^\infty\frac{z^n}{n!} =\frac{z^{N+1}}{(N+1)!}\sum_{k=0}^\infty \frac{z^k}{(N+2)\cdots(N+1+k)} \le \frac{z^{N+1}}{(N+1)!}\sum_{k=0}^\infty\frac{z^k}{k!} =e^z\frac{z^{N+1}}{(N+1)!},$$ where an empty product is $1$ and $(N+2)\cdots(N+1+k)\ge k!$. The norm tail is bounded by this scalar tail. [step 1.2, algebra]

2.2 The family $\mathcal H(t)=\lambda V_I(t)$ satisfies the exact hypotheses of [F2] and [F3] on the compact interval $[0,T]$: it is bounded, norm-continuous and self-adjoint, and the required $\mathrm{AC}_\omega$ is [A1]. The recursion above is its Dyson recursion, so [F2] supplies the Volterra equation and uniqueness, [F3] supplies unitarity of $S(t)$, and step 1.2 supplies the displayed sharper bound with $B$. [given, A1, F2, F3, step 1.2]

3.1 From $S=I+iT$, $S^\dagger S=I$ expands to $i(T-T^\dagger)+T^\dagger T=0$. Its $ii$ entry is $-2\,\operatorname{Im}T_{ii}+\sum_f|T_{fi}|^2=0$, proving the exact identity. The norm-convergent power series makes $T(\lambda)$ analytic near $0$ (indeed entire), so coefficient comparison is valid: the $\lambda$ term gives $T_1=T_1^\dagger$, and the $\lambda^2$ term gives $i(T_2-T_2^\dagger)+T_1^\dagger T_1=0$, hence $2\,\operatorname{Im}T_2=T_1^\dagger T_1$. [step 1.2, step 2.2, algebra]

4.1 For the linear truncation $S_{\rm tr}=I+i\lambda T_1$ with $T_1=T_1^\dagger$, multiplication gives $S_{\rm tr}^\dagger S_{\rm tr}=I+\lambda^2T_1^2$. If $\lambda T_1\ne0$, then $T_1^2$ is nonzero positive semidefinite because $\langle T_1^2v,v\rangle=\|T_1v\|^2$; hence this truncation is not unitary. The exact coefficient relation in step 3.1 therefore requires the higher-order correction whenever its right side is nonzero. [step 3.1, algebra]

5.1 For $n<N$, direct application gives $a_Na_N^\dagger|n\rangle=(n+1)|n\rangle$ and $a_N^\dagger a_N|n\rangle=n|n\rangle$, so the commutator equals $|n\rangle$. At $n=N$, the two terms are $0$ and $N|N\rangle$, so their difference is $-N|N\rangle$. These are exactly the values of $I-(N+1)|N\rangle\langle N|$ on each basis vector. For arbitrary finite matrices $A,B$, $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{tr}(BA)$ by swapping dummy indices, so $\operatorname{tr}[A,B]=0$; but $\operatorname{tr}I=d>0$. Thus the unmodified canonical commutator cannot hold on a finite-dimensional space. [given, F1, algebra] ∎
