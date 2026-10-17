---
id: pthm-csm-ising-ring-correlation
kind: physics-theorem
title: "Finite periodic Ising-ring correlations and exact decay"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - thm-tdmath-ising-chain-limit
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - def-real-analytic-function
  - thm-power-series-sums-are-real-analytic
  - thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-log-one-plus-x-power-series
  - thm-natural-logarithm-laws
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  thm-tdmath-ising-chain-limit: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-analytic-function: mathematical-premise
  thm-power-series-sums-are-real-analytic: mathematical-premise
  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: mathematical-premise
  thm-log-one-plus-x-power-series: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
physical_scope: "Finite periodic one-dimensional nearest-neighbor Ising ring with N>=2, exactly N indexed bonds, J>=0, zero field, and finite beta>0; no general long-range or higher-dimensional claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §5.3.1, the one-dimensional Ising chain"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, IV.G (Fall 2013), finite spin partition examples"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: pass
---

## Statement

Use the real exponential $\exp(x)=\sum_{n\ge0}x^n/\iota(n!)$ of [[def-real-exponential-function-and-e]] and the hyperbolic functions $\cosh x=(\exp x+\exp(-x))/2$, $\sinh x=(\exp x-\exp(-x))/2$. Define $\tanh x:=\sinh x/\cosh x$; the denominator is positive for every real $x$. Let $N\ge2$, let $\Omega_N=\{-1,1\}^N$ with cyclic indexing $s_{N+1}=s_1$, and count exactly the $N$ indexed periodic bonds (so $N=2$ has two bonds). For coupling $J\ge0$ in joules, zero field, and $\beta>0$ in J$^{-1}$, adopt the finite canonical law
$$\mathbb P_N(s)=Z_N^{-1}\exp\!\left(\beta J\sum_{i=1}^Ns_is_{i+1}\right).$$
Set $t=\tanh(\beta J)\in[0,1)$. For $1\le r\le N-1$,
$$\mathbb E_N[s_i]=0,\qquad \mathbb E_N[s_i s_{i+r}]=\frac{t^r+t^{N-r}}{1+t^N}.$$
For each fixed positive integer separation $r$ and $N\to\infty$, the correlation tends to $t^r$, with absolute error at most $t^{N-r}+t^{N+r}$. When $J>0$, define the limiting correlation length $\xi>0$ in lattice spacings as the unique number satisfying $t^r=e^{-r/\xi}$ for every positive integer separation $r$; equivalently, $\xi=-1/\log t$. The zero-field susceptibility per spin, defined by $\chi_N:=N^{-1}\partial_h\mathbb E_{N,h}[\sum_i s_i]|_{h=0}$ for the field-coupled law with energy $-\!J\sum_i s_is_{i+1}-h\sum_i s_i$, where the field parameter $h\in\mathbb R$ is in joules, has limit
$$\chi_\infty=\beta\frac{1+t}{1-t}.$$
Both $\chi_N$ and $\chi_\infty$ have units J$^{-1}$ per spin (the spin variables are dimensionless).
Define the finite-ring model free energy by $F_N:=-\beta^{-1}\log Z_N$ and its limiting free energy per spin, when the limit exists, by $f_\infty:=\lim_{N\to\infty}F_N/N$. Then $f_\infty=-\beta^{-1}\log(2\cosh(\beta J))$, analytic at every finite positive temperature. No statement is made for arbitrary one-dimensional interactions.

## Facts & Assumptions

**Given:** The finite spin space $\Omega_N$, the stated bond convention, $N\ge2$, $J\ge0$, and finite $\beta>0$.

[F1] [[post-csm-examples-ensemble-preparations]]: each finite model uses its explicitly adopted canonical probability on the stated reference/counting space; the preparation is a model assumption.

[F2] [[thm-tdmath-ising-chain-limit]]: for the periodic nearest-neighbor ring with $N\ge2$, finite real $J,h$ and $\beta>0$, the same $\cosh$ and $\sinh$ definitions give $T_{s,t}=\exp(\beta Jst+\beta h(s+t)/2)$ and $Z_N=\operatorname{tr}(T^N)$. Its explicit eigenvalues satisfy $\lambda_+>|\lambda_-|$, and the logarithmic partition limit and each fixed finite order of parameter derivatives converge uniformly on compact subsets of $(0,\infty)\times\mathbb R^2$. This is the current published mathematical supplier for the exact indexed-bond model used here.

[F3] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ for every real $x$, hence the defined $\cosh x$ is positive and $\tanh x$ is well-defined.

[F4] [[thm-exponential-is-strictly-increasing]]: $\exp$ is continuous and $x\le y$ implies $\exp(x)\le\exp(y)$.

[F5] [[def-real-analytic-function]]: a real-valued function on an open interval is real analytic when each point has a neighborhood on which the function equals a convergent real power series.

[F6] [[thm-power-series-sums-are-real-analytic]]: the sum of a real power series is real analytic on the interior of its radius of convergence; the exponential series has infinite radius.

[F7] [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]]: sums, products, quotients with nonzero denominator, and compositions of real-analytic functions on their open domains are real analytic.

[F8] [[thm-log-one-plus-x-power-series]]: for $|u|<1$, $\log(1+u)=\sum_{n=1}^\infty(-1)^{n+1}u^n/n$, so $u\mapsto\log(1+u)$ is real analytic near $u=0$.

[F9] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\log(xy)=\log x+\log y$.

[A1] For the response clause, the field-coupled finite law is $\mathbb P_{N,h}(s)\propto\exp(\beta J\sum_i s_is_{i+1}+\beta h\sum_i s_i)$ for real field parameter $h$ in joules; this is a finite model family, not an empirical magnetic law.

## Proof
1.1 In the zero-field case the transfer matrix in [F2] is $T_{s,t}=e^{Kst}$ with $K=\beta J$, so $T=\begin{pmatrix}e^K&e^{-K}\\e^{-K}&e^K\end{pmatrix}$. Direct multiplication gives orthonormal eigenvectors $u_+=(1,1)/\sqrt2$, $u_-=(1,-1)/\sqrt2$ with eigenvalues $\lambda_+=2\cosh K$ and $\lambda_-=2\sinh K$. Hence $Z_N=\operatorname{tr}(T^N)=\lambda_+^N+\lambda_-^N=\lambda_+^N(1+t^N)$, where $t=\lambda_-/\lambda_+=\tanh K$. Since $K\ge0$, [F4] gives $e^K\ge e^{-K}$, so $\lambda_-=e^K-e^{-K}\ge0$; [F2] gives $\lambda_+>|\lambda_-|$. Thus $t\in[0,1)$. [given, F2, F4, algebra]



2.1 By the finite preparation [F1], the partition sum is the normalization for the adopted law. Put $D_0=\operatorname{diag}(1,-1)$; then $D_0u_+=u_-$ and $D_0u_-=u_+$. Expanding the finite canonical sum over the $N$ cyclic indices with $s_i s_{i+r}$ inserted gives numerator $\operatorname{tr}(D_0T^rD_0T^{N-r})$. Evaluating this trace in the eigenbasis yields $\lambda_-^r\lambda_+^{N-r}+\lambda_+^r\lambda_-^{N-r}$. Dividing by $Z_N$ from step 1.1 gives the stated correlation formula. [A1, F1, F2, step 1.1, algebra]



3.1 The map $s\mapsto-s$ preserves every bond product and reverses $\sum_i s_i$, so at zero field $\mathbb E_N[s_i]=0$. For fixed $r$, subtracting $t^r$ from the formula of step 2.1 gives $(t^{N-r}-t^{N+r})/(1+t^N)$; its absolute value is at most $t^{N-r}+t^{N+r}$ because $0\le t<1$. Thus the fixed-distance limit is $t^r$. When $0<t<1$, writing $t^r=e^{-r/\xi}$ gives $\xi=-1/\log t$; for $J=0$, $t=0$ and all nonzero-separation correlations vanish. [step 2.1, algebra]



3.2 For the field-coupled finite law [A1], differentiating its finite numerator and denominator sums gives $\partial_h\mathbb E_{N,h}[M]=\beta(\mathbb E_{N,h}[M^2]-\mathbb E_{N,h}[M]^2)$, where $M=\sum_i s_i$. At $h=0$, spin-flip symmetry gives $\mathbb E M=0$ and translation invariance gives $$\frac1N\mathbb E[M^2]=1+\sum_{r=1}^{N-1}\mathbb E[s_1s_{1+r}]=1+\frac{2\sum_{r=1}^{N-1}t^r}{1+t^N}.$$ The finite geometric sum tends to $2t/(1-t)$ as $N\to\infty$, so $\chi_N\to\beta(1+t)/(1-t)$. This also gives $\chi_N=\beta$ when $J=0$. [A1, step 2.1, algebra]



4.1 From step 1.1, $N^{-1}\log Z_N=\log(2\cosh(\beta J))+N^{-1}\log(1+t^N)$. Since $1\le1+t^N\le2$, the second term tends to zero, so $f_\infty=-\beta^{-1}\log(2\cosh(\beta J))$. The correlation length diverges only in the excluded zero-temperature limit $\beta J\to\infty$. [step 1.1, step 3.1, algebra]

4.2 Fix any $\beta_0>0$ and put $A(\beta):=2\cosh(\beta J)$ and $u(\beta):=A(\beta)/A(\beta_0)-1$. By [F5, F6, F7], $A$ and $u$ are real analytic near $\beta_0$; $A(\beta_0)>0$ by [F3] and $u(\beta_0)=0$. Continuity from [F4] allows a smaller neighborhood where $|u(\beta)|<1$. By [F8], [F6], and the product law [F9], $\log A(\beta)=\log A(\beta_0)+\log(1+u(\beta))$ is real analytic there, and [F7] makes $f_\infty(\beta)=-\beta^{-1}\log A(\beta)$ real analytic since $\beta\ne0$. The relation $\beta=(k_BT)^{-1}$ is real analytic for $T>0$, so the limit is analytic at every finite positive temperature as well. [F3, F4, F5, F6, F7, F8, F9, step 4.1] ∎

## Remarks

The transfer-matrix premise uses the published exact periodic-chain theorem. The local spin-insertion and finite-response arguments prove the additional correlation and susceptibility formulas. No Gaussian-tail research token is used as a supplier.

