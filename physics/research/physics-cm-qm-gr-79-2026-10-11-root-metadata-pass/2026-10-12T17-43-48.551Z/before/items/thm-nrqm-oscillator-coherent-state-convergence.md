---
id: thm-nrqm-oscillator-coherent-state-convergence
aliases: [nrqm-oscillator-coherent-state-convergence]
kind: theorem
domain: mathematics
title: "Coherent-state convergence"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, thm-nrqm-oscillator-hermite-completeness, lem-nrqm-oscillator-closed-ladder-domains, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-geometric-series, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §§4.2-4.4 pp. 28-36 (coherent states and their expansion in the energy basis)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (oscillator algebra underlying the coherent-state series)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H=L^2(\mathbb R,dy)$ with inner product linear in the first argument, let $(g_n)_{n\in\mathbb N}$ be the Hermite family of [[thm-nrqm-oscillator-hermite-recurrence]], and let $a,a^\dagger,N$ be the closed ladder operators and number operator of [[lem-nrqm-oscillator-closed-ladder-domains]] with domains $D(a),D(a^\dagger),D(N)$ and $N=a^\dagger a$ on $D(N)$. For $z\in\mathbb C$ put

$$\psi_z:=e^{-|z|^2/2}\sum_{n=0}^{\infty}\frac{z^n}{\sqrt{n!}}\,g_n ,$$

the series being taken in $L^2$. Then:

(a) the series converges in $L^2$, $\|\psi_z\|=1$, and $\psi_z=e^{-|z|^2/2}\sum_{n=0}^{\infty}\frac{z^n}{\sqrt{n!}}g_n$ is the unique element of $L^2$ with coefficients $c_n=e^{-|z|^2/2}z^n/\sqrt{n!}$ in the basis $(g_n)$;

(b) $\psi_z\in D(N^k)$ for every $k\in\mathbb N$, where $N^k$ is the $k$-fold iterate of $N$ with domain $D(N^k)=\{x:\sum_nn^{2k}|\langle x,g_n\rangle|^2<\infty\}$; in particular

$$\sum_nn^{2k}|c_n|^2=e^{-|z|^2}\sum_{n=0}^{\infty}\frac{n^{2k}|z|^{2n}}{n!}<\infty;$$

(c) $a\psi_z=z\psi_z$ (so $\psi_z$ is a unit eigenvector of the annihilation operator with eigenvalue $z$), and $\|a\psi_z\|^2=|z|^2$;

(d) $\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2+z\overline w}=e^{-|z-w|^2/2}e^{i\operatorname{Im}(z\overline w)}$ for all $z,w\in\mathbb C$, so $\|\psi_z-\psi_w\|^2=2\bigl(1-e^{-|z-w|^2/2}\cos(\operatorname{Im}(z\overline w))\bigr)$ and the map $z\mapsto\psi_z$ is injective;

(e) $\langle N\psi_z,\psi_z\rangle=|z|^2$ and $\|a^\dagger\psi_z\|^2=|z|^2+1$, and $\psi_0=g_0$.

The completeness of $(g_n)$ ([[thm-nrqm-oscillator-hermite-completeness]]) is used only to invoke the closed ladder operators of [[lem-nrqm-oscillator-closed-ladder-domains]] on a complete orthonormal family; the convergence, normalization and moment statements (a)-(e) then use the orthonormality of [[thm-nrqm-oscillator-hermite-orthogonality]] and those operator domains.

## Facts & Assumptions

**Given:** the Hermite family $(g_n)$ with its ladder operators $a,a^\dagger,N$; a complex number $z$; the numbers $c_n=e^{-|z|^2/2}z^n/\sqrt{n!}$.

[F1] $\langle g_n,g_m\rangle=\delta_{nm}$; a series $\sum_na_ng_n$ converges in $L^2$ exactly when $\sum_n|a_n|^2<\infty$, and then $\bigl\|\sum_na_ng_n\bigr\|^2=\sum_n|a_n|^2$ ([[thm-nrqm-oscillator-hermite-orthogonality]](a), [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] On $D(N)$ one has $a^\dagger a=N$, $aa^\dagger=N+I$; $D(aa^\dagger)=D(a^\dagger a)=D(N)$; and $a$ is closed with $a^*=a^\dagger$ ([[lem-nrqm-oscillator-closed-ladder-domains]](b),(d)).

[F3] $e^{t}=\sum_{n\ge0}t^n/n!$ for complex $t$, the series converging absolutely ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]); powers and integer powers of complex numbers are those of the library's power conventions.

[F4] If $0\le a_{n+1}\le\frac12a_n$ for all $n\ge N$, then $\sum_{n\ge N}a_n\le2a_N$, by comparison with the geometric series $\sum_k2^{-k}=2$ ([[thm-geometric-series]]).

[F5] $ag_n=\sqrt n\,g_{n-1}$ for $n\ge1$ with $ag_0=0$; $a^\dagger g_n=\sqrt{n+1}g_{n+1}$ ([[thm-nrqm-oscillator-hermite-recurrence]](e)).

## Proof

1.1 [Convergence and normalization] For $N\ge M$, the partial sums $S_N:=e^{-|z|^2/2}\sum_{n\le N}\frac{z^n}{\sqrt{n!}}g_n$ satisfy $\|S_N-S_M\|^2=e^{-|z|^2}\sum_{M<n\le N}\frac{|z|^{2n}}{n!}$ by [F1]. As $N,M\to\infty$ the right side tends to $0$ because $\sum_n\frac{|z|^{2n}}{n!}=e^{|z|^2}<\infty$ by [F3]; hence $(S_N)$ is Cauchy and $\psi_z:=\lim_NS_N\in L^2$ exists, and taking limits in the same identity gives $\|\psi_z\|^2=e^{-|z|^2}\sum_n\frac{|z|^{2n}}{n!}=1$. Uniqueness of the coefficient sequence is orthonormality [F1]. [given, F1, F3]

2.1 [Number domains] Fix $k\in\mathbb N$ and let $a_n:=n^{2k}|z|^{2n}/n!\ge0$. If $z=0$, $\psi_0=g_0$, which lies in every $D(N^k)$ and all terms $a_n$ with $n\ge1$ vanish. If $z\ne0$, for $n\ge1$, $\frac{a_{n+1}}{a_n}=(\frac{n+1}{n})^{2k}\frac{|z|^2}{n+1}\to0$, so there is $N$ with $a_{n+1}\le\frac12a_n$ for $n\ge N$; by [F4], $\sum_{n\ge N}a_n\le2a_N<\infty$, and the finitely many initial terms are finite. Hence $\sum_nn^{2k}|c_n|^2=e^{-|z|^2}\sum_na_n<\infty$. Since $D(N^k)=\{x:\sum_nn^{2k}|\langle x,g_n\rangle|^2<\infty\}$ (inducting the domain formula of [[lem-nrqm-oscillator-closed-ladder-domains]](a) for $N$), this says $\psi_z\in D(N^k)$. [step 1.1, F1, F4, algebra]

2.2 [$a\psi_z=z\psi_z$] Each partial sum $S_N$ is a finite combination of the $g_n$, so $S_N\in D(N)\subseteq D(a)$; by [F5], $aS_N=e^{-|z|^2/2}\sum_{n=1}^Nz^n\sqrt n\,g_{n-1}/\sqrt{n!}=ze^{-|z|^2/2}\sum_{m=0}^{N-1}\frac{z^m}{\sqrt{m!}}g_m=zS_{N-1}$. As $N\to\infty$, $S_N\to\psi_z$ and $aS_N\to z\psi_z$ by step 1.1; since $a$ is closed [F2], $\psi_z\in D(a)$ and $a\psi_z=z\psi_z$. Taking norms, $\|a\psi_z\|=|z|$ by (a). [step 1.1, F2, F5, algebra]

2.3 [Inner products] For $z,w\in\mathbb C$, $\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2}\sum_n\frac{z^n\overline w^{\,n}}{n!}$ by [F1] applied to the two convergent series, and $\sum_n\frac{(z\overline w)^n}{n!}=e^{z\overline w}$ by [F3] applied to the series of the complex number $z\overline w$; hence $\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2+z\overline w}=e^{-|z-w|^2/2}e^{i\operatorname{Im}(z\overline w)}$. Its modulus is $e^{-|z-w|^2/2}$. Then $\|\psi_z-\psi_w\|^2=\|\psi_z\|^2+\|\psi_w\|^2-2\operatorname{Re}\langle\psi_z,\psi_w\rangle=2(1-e^{-|z-w|^2/2}\cos(\operatorname{Im}(z\overline w)))$. When $z\ne w$ the overlap modulus is strictly less than $1$, so this distance is positive; when $z=w$ it is zero; the map is injective. [step 1.1, F1, F3, algebra]

3.1 [Number and creation moments] By step 2.1 with $k=1$, $\psi_z\in D(N)$ and $N\psi_z$ has coefficients $nc_n$; hence $\langle N\psi_z,\psi_z\rangle=\sum_nn|c_n|^2=e^{-|z|^2}\sum_n\frac{n|z|^{2n}}{n!}$. The series reindexes as $|z|^2\sum_{m\ge0}\frac{|z|^{2m}}{m!}=|z|^2e^{|z|^2}$ by [F3], so the value is $|z|^2$. Next, $\|a^\dagger\psi_z\|^2=\langle a^\dagger\psi_z,a^\dagger\psi_z\rangle=\langle\psi_z,aa^\dagger\psi_z\rangle=\langle\psi_z,(N+I)\psi_z\rangle=|z|^2+1$ using [F2] and $\psi_z\in D(N)$. Finally $\psi_0=g_0$ since all coefficients with $n\ge1$ vanish and $\|\psi_0\|=1$. [step 1.1, step 2.1, F1, F2, F3, algebra] ∎
