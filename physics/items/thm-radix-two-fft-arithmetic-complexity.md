---
id: thm-radix-two-fft-arithmetic-complexity
kind: theorem
title: "The radix-two FFT uses $O(N\\log_2N)$ complex arithmetic operations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
deps: [def-finite-sum-in-a-commutative-monoid,
       def-logarithm-to-a-base,
       def-natural-logarithm,
       def-natural-numbers,
       def-real-power,
       def-recursive-radix-two-fast-fourier-transform,
       lem-power-laws,
       thm-induction-principle,
       thm-natural-logarithm-laws,
       thm-real-power-agrees-with-rational-exponent,
       thm-recursion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, the cost paragraph after (12.13): after $k$ iterations the computation takes $kn$ additions and $kn/2$ multiplications of complex numbers, $n=2^k$, plus the direct-evaluation baseline $n^2$ multiplications and $n(n-1)$ additions of (12.1)"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: at each reduction $s$ additions, $s$ subtractions and $s$ multiplications reduce the problem by a factor of two"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $T_m$ be the number of complex-number multiplications and additions performed by the recursion of [[def-recursive-radix-two-fast-fourier-transform]] on an input of length $N=2^{m}$, counted as the operations of the two recursive subproblems of length $2^{m-1}$ plus, at the top level, the $2^{m}$ twiddle multiplications $e^{-2\pi ik/2^{m}}O(k)$ and the $2^{m}$ additions $E(k)+\cdot$ needed to form all $2^{m}$ output values, and with no other operations counted. Then $T_0=0$, $T_m\le2T_{m-1}+2\cdot2^{m}$ for $m\ge1$, and

$$T_m\le2m\,2^{m}=2N\log_2N\qquad(m\ge0).$$

In particular there is the explicit constant $C=2$ with $T_m\le C\,m\,2^{m}$ for every $m$, so at length $N=2^{m}$ the algorithm uses at most $2N\log_2N$ complex arithmetic operations, whereas independent direct evaluation of all $N$ coefficients uses $N(N-1)$ additions and $N^{2}$ multiplications. The count is of arithmetic operations only: integer index arithmetic, twiddle evaluation, memory access and bit complexity are not counted, and no numerical-stability claim is made.

## Facts & Assumptions

**Given:** Natural numbers $m,n$ and the operation counts $T_m$ of the radix-two recursion on inputs of length $2^{m}$.

[F1] $\operatorname{FFT}_m$ is defined by recursion on $m$, with $\operatorname{FFT}_0=\mathrm{id}$ and, for $m\ge1$, two recursive calls $\operatorname{FFT}_{m-1}$ on the even and odd parts followed by the combine $\operatorname{FFT}_m(f)(k)=E(k)+e^{-2\pi ik/2^{m}}O(k)$ for each of the $2^{m}$ output values ([[def-recursive-radix-two-fast-fourier-transform]]).

[F2] The operation model of the Statement: $T_m$ counts exactly the complex multiplications and additions of the two subproblems and of the $2^{m}$ twiddle multiplications and $2^{m}$ combine additions at the top level, and nothing else. In particular $T_0=0$ and $T_m=2T_{m-1}+2\cdot2^{m}$ for the counted operations, so the upper bound $T_m\le2T_{m-1}+2\cdot2^{m}$ holds for $m\ge1$.

[L1] Powers: $2^{m}>0$, $2^{m+1}=2\cdot2^{m}$, and $2^{m}/2^{m-1}=2$ for $m\ge1$ ([[lem-power-laws]], [[def-natural-numbers]]); $2^{0}=1$.

[L2] The logarithm and real powers: $2^{m}=\exp(m\log2)$ for $m\in\mathbb N$, $\log(\exp y)=y$, $\log$ is injective, and $\log2\ne0$ ([[def-real-power]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-real-power-agrees-with-rational-exponent]]); hence $\log_2(2^{m})=\log(2^{m})/\log2=m$ ([[def-logarithm-to-a-base]]).

[L3] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Local asymptotic notation: for nonnegative sequences $a_m,b_m$ with $b_m>0$ for all sufficiently large $m$, $a_m=O(b_m)$ means that there are constants $C>0$ and $m_0$ such that $a_m\le Cb_m$ for every $m\ge m_0$.

## Proof

**Proof technique:** direct.

1.1 The counted recurrence: $T_0=0$, since the base case returns the input without performing a complex multiplication or addition, and $T_m\le2T_{m-1}+2\cdot2^{m}$ for $m\ge1$, because the recursion performs the two subproblem computations and then, at the top level, one twiddle multiplication and one addition for each of the $2^{m}$ output values [F2]; no other operation is counted. [F1, F2, given]

2.1 Dividing by the level size: put $U_m:=T_m/2^{m}$, a real number. Dividing the inequality of step 1.1 by $2^{m}>0$ and using $2^{m}=2\cdot2^{m-1}$ gives $U_m\le T_{m-1}/2^{m-1}+2=U_{m-1}+2$ for $m\ge1$, and $U_0=T_0=0$. [L1, step 1.1]

3.1 The unrolled bound: $U_m\le2m$ for every $m\in\mathbb N$. At $m=0$ this reads $U_0=0\le0$; and if $U_m\le2m$, then $U_{m+1}\le U_m+2\le2m+2=2(m+1)$ by step 2.1, so induction [L3] gives the bound at every natural. [L3, step 2.1]

4.1 Consequently $T_m=2^{m}U_m\le2^{m}\cdot2m=2m\,2^{m}$ for every $m$, by [L1] and step 3.1. [L1, step 3.1]

5.1 Constant form and the logarithmic reading: the bound of step 4.1 is $T_m\le C\,m\,2^{m}$ for every $m$ with the explicit constant $C=2$, so [L4] gives $T_m=O(m2^m)$. Since $N=2^{m}$ and $\log_2(2^{m})=m$ by [L2], this is $T_m=O(N\log_2N)$ and the explicit bound is $T_m\le2N\log_2N$ at every power-of-two length; this proves the claimed complexity and completes the proof. [L2, L4, step 4.1] ∎

## Remarks

- **The direct-evaluation baseline.** For $N=2^{m}$ the unnormalised transform of [[def-unnormalised-engineering-dft-and-conversion]] evaluates each of the $N$ coefficients $X_k(f)=\sum_{x=0}^{N-1}f([x]_N)e^{-2\pi ikx/N}$ as a sum of $N$ terms, needing $N-1$ additions and (if each term is formed separately) $N$ multiplications per coefficient, hence $N(N-1)$ additions and $N^{2}$ multiplications in total; this is the baseline of Taylor §12 and the reason the bound of step 4.1 is an improvement for large $N$. The comparison concerns the counted operation model only: the two bounds ignore different constants and neither says anything about rounding error.

- **What is not counted, and why that matters.** Twiddle-factor evaluation, index arithmetic, memory traffic, bit complexity and numerical stability are all outside the model fixed in the Statement; the theorem is a statement about the number of complex multiplications and additions in the recursion as defined, not a machine-level running-time or accuracy claim. The bounded model is stated explicitly so that no later use silently strengthens it.

- **Asymptotic reading.** By the local convention [L4], the explicit constant-form estimate gives $T_m=O(m\,2^{m})$, hence $T_m=O(N\log_2N)$ at length $N=2^{m}$. The explicit constant $C=2$ and bound $T_m\le2m\,2^{m}$ remain the load-bearing quantitative result.
