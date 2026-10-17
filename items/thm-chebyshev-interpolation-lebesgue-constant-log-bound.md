---
id: thm-chebyshev-interpolation-lebesgue-constant-log-bound
kind: theorem
title: "Chebyshev-root and Lobatto interpolation norms have logarithmic upper bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-cardinal-lagrange-interpolation-and-operator-norm
  - lem-chebyshev-cardinal-polynomial-formulas
  - lem-sine-chord-and-lipschitz-bounds
  - thm-sine-and-cosine-subtraction-formulas
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-logarithm-derivative-and-integral
  - def-natural-logarithm
  - def-canonical-natural
  - lem-of-naturals-positive
  - thm-quarter-turn-values-and-shift-formulas
  - def-pi-via-first-positive-cosine-zero
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - thm-intermediate-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chs. 2–6"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Chs. 2–3 and 5 give node/cardinal formulas; Ch. 6 discusses density. The logarithmic cardinal-sum proof is supplied locally."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation and conditioning"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete polynomial-interpolation article; no Chebyshev Lebesgue-constant proof"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Problems and conditioning"
      url: "https://fncbook.com/conditioning/"
      locator: "Complete §1.2 article; conditioning and algorithm choice are distinguished"
verification:
  precheck: pass
---

## Statement

For $n\geq1$, let $\Lambda_n^R$ be the operator norm of interpolation at
the $n+1$ roots of $T_{n+1}$, and let $\Lambda_n^L$ be the operator norm
at the $n+1$ Chebyshev–Lobatto nodes. With the conventions in
[[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]],
$$\Lambda_n^R\leq C\log(n+1),\qquad \Lambda_n^L\leq C\log(n+1),\qquad C:=4+\frac{\pi+4}{\log2}.$$
Here $\log$ is the natural logarithm of [[def-natural-logarithm]]. For $n=0$, both one-node operators have norm $1$; the logarithmic estimate is stated for $n\geq1$.

## Facts & Assumptions
**Given:** An integer $n\geq1$, $\theta\in[0,\pi]$, and either angular node family.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]] defines $I_n^\sigma$, $\Lambda_n^\sigma$, and the equally spaced root and Lobatto angles.

[F2] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: $\Lambda_n^\sigma=\sup_{x\in[-1,1]}\sum_j|\ell_{j,n}^\sigma(x)|$.

[F3] [[lem-chebyshev-cardinal-polynomial-formulas]]: for roots, $|\ell_j(\cos\theta)|=|\cos((n+1)\theta)|\sin\theta_j/((n+1)|\cos\theta-\cos\theta_j|)$; for Lobatto nodes, $|\ell_j(\cos\theta)|=c_j|\sin\theta\,\sin(n\theta)|/(n|\cos\theta-\cos\theta_j|)$, with $c_j\leq1$.

[F4] [[lem-sine-chord-and-lipschitz-bounds]]: $\sin u\geq2u/\pi$ for $0\leq u\leq\pi/2$, and $|\sin u-\sin v|\leq|u-v|$ for all real $u,v$.

[F5] [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-subtraction-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], and [[thm-quarter-turn-values-and-shift-formulas]]: the addition/subtraction formulas give $\cos\theta-\cos\phi=-2\sin((\theta+\phi)/2)\sin((\theta-\phi)/2)$ and $\sin(s\pm t)=\sin s\cos t\pm\cos s\sin t$; on $[0,\pi]$, sine is nonnegative, increasing up to $\pi/2$, and satisfies $\sin(\pi-s)=\sin s$, while $|\cos u|\leq1$ for every real $u$.

[F6] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log x=\int_1^x dt/t$.

[F7] [[def-natural-logarithm]]: $\log$ is the natural logarithm; [[def-canonical-natural]] and [[lem-of-naturals-positive]]: natural indices in real expressions use their canonical images, and positive natural indices have positive real image.

[F8] Cosine is continuous on $[0,\pi]$ by [[thm-sine-and-cosine-derivatives]] and [[cor-differentiable-implies-continuous]]. Its endpoint values are $\cos0=1$ and $\cos\pi=-1$ by [[thm-quarter-turn-values-and-shift-formulas]], and $\pi>0$ by [[def-pi-via-first-positive-cosine-zero]]. The intermediate value theorem [[thm-intermediate-value]] therefore shows that every value in $[-1,1]$ is $\cos\theta$ for some $\theta\in[0,\pi]$. Conversely, cosine has range $[-1,1]$ by [[thm-sine-cosine-signs-monotonicity-and-ranges]], so $\cos([0,\pi])=[-1,1]$.

## Proof

1.1 In either angular grid the spacing is $h=\pi/(n+1)$ for roots and $h=\pi/n$ for Lobatto nodes. Choose a nearest grid angle $\theta_k$ and put $d_j=|\theta-\theta_j|$. Then $d_k\leq h/2$; if $|j-k|=r\geq1$, the triangle inequality gives $d_j\geq rh-d_k\geq(r-\tfrac12)h$. At most two indices occur for each $r$. [given, F1, choose, algebra]

2.1 For $\theta\ne\theta_j$, put $s=(\theta+\theta_j)/2$ and $d=\theta-\theta_j$. Since the two angles lie in $[0,\pi]$, $|d|/2\leq\min(s,\pi-s)$. The addition/subtraction formulas in [F5] give $\sin\theta_j,\sin\theta\leq\sin s+|\sin(d/2)|$; the monotonicity and supplementary identity in [F5] then give $|\sin(d/2)|\leq\sin s$, so each numerator is at most $2\sin s$. Those same formulas give $|\cos\theta-\cos\theta_j|=2\sin s\sin(|d|/2)$, and [F4] gives $\sin(|d|/2)\geq|d|/\pi$. Thus both ratios $\sin\theta_j/|\cos\theta-\cos\theta_j|$ and $\sin\theta/|\cos\theta-\cos\theta_j|$ are at most $\pi/d_j$. [given, F4, F5, step 1.1, algebra]

3.1 For roots, [F3] and step 2.1 give $|\ell_{j,n}^R(\cos\theta)|\leq\pi|\cos((n+1)\theta)|/((n+1)d_j)$. At the nearest node $k$, $\cos((n+1)\theta_k)=0$, and the cosine addition formula plus [F4] gives $|\cos((n+1)\theta)|\leq(n+1)d_k$, so its term is at most $\pi$. For other nodes use $|\cos((n+1)\theta)|\leq1$ and step 1.1; summing over at most two nodes per distance rank yields $\sum_j|\ell_{j,n}^R(\cos\theta)|\leq\pi+2\sum_{r=1}^n1/(r-\tfrac12)$. At a node the cardinal sum is $1$. [given, F3, F4, F5, step 1.1, step 2.1, algebra]

3.2 For Lobatto nodes, [F3] and step 2.1 give $|\ell_{j,n}^L(\cos\theta)|\leq\pi c_j|\sin(n\theta)|/(nd_j)$. At the nearest node $k$, $\sin(n\theta_k)=0$, so [F4] gives $|\sin(n\theta)|\leq nd_k$ and its term is at most $\pi$ because $c_k\leq1$. For other nodes use $|\sin(n\theta)|\leq1$ and step 1.1; summing over at most two nodes per distance rank yields $\sum_j|\ell_{j,n}^L(\cos\theta)|\leq\pi+2\sum_{r=1}^n1/(r-\tfrac12)$. At a node the cardinal sum is $1$. [given, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Since $1/(r-\tfrac12)\leq2/r$, the shifted sum is at most $2H_n$, where $H_n=\sum_{r=1}^n1/r$. For $r\geq2$, $1/r\leq\int_{r-1}^r dt/t$, so [F6] gives $H_n\leq1+\log n$. Positivity of the real image of $n$ is [F7], so these logarithms are defined. The integral formula also gives $0=\log1\leq\log n\leq\log(n+1)$ and $\log2\leq\log(n+1)$ by integrating $1/t>0$ over $[1,n]$, $[n,n+1]$, and $[2,n+1]$. Since $\log2=\int_1^2dt/t>0$ and $\pi>0$, we have $C>0$ and $1<C\log2$. Thus both sums are at most $\pi+4+4\log n\leq(4+(\pi+4)/\log2)\log(n+1)$. By [F8], the angular supremum is over exactly $[-1,1]$; taking it and using [F2] proves both bounds. At $n=0$, each one-node operator has norm $1$ directly. [given, F2, F6, F7, F8, step 3.1, step 3.2, algebra] ∎
