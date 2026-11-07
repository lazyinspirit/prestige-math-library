---
id: ex-erdos-kac-centering-and-scaling
kind: example
title: "Centering and scaling the prime-divisor count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-erdos-kac-limit-law-for-omega
  - def-axiom-of-choice
  - def-uniform-finite-probability-space
  - def-convergence-in-distribution-for-real-random-variables
  - thm-second-mertens-theorem-for-primes
  - thm-slutsky-for-real-random-variables
  - def-convergence-in-probability
justified_by: []
proof_strategy: direct mean calculation and Slutsky
axiom_use: "The Axiom of Choice is inherited only through the Erdős–Kac theorem used in the example."
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, Probabilistic Number Theory, Chapter 2.3, Theorem 2.3.1"
      url: "https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf"
      locator: "2021 ETH Zürich notes, PDF pp. 30–31, Erdős–Kac normalization by log log N in the uniform integer model."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23.3"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF pp. 22–23, limiting distribution for real additive functions."
---

## Example

Assume the Axiom of Choice. For $N\ge3$, let $U_N$ be uniform on $\{1,\ldots,N\}$, set $L_N=\log\log N$, and let $\mu_N=\mathbb E\omega(U_N)$. Then
$$\mu_N=L_N+O(1),\qquad \frac{\omega(U_N)-\mu_N}{\sqrt{L_N}}\Rightarrow N(0,1).$$
Thus replacing the conventional center $\log\log N$ by the exact finite-$N$ mean leaves the Erdős–Kac limit unchanged.

## Example references

[Kowalski, *Probabilistic Number Theory*, Chapter 2.3, Theorem 2.3.1](https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23.3](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $N\ge3$, and $U_N$ uniform on $\{1,\ldots,N\}$.

[A1] Assume the Axiom of Choice; then $(\omega(U_N)-L_N)/\sqrt{L_N}\Rightarrow N(0,1)$. ([[def-axiom-of-choice]], [[thm-erdos-kac-limit-law-for-omega]])

[F1] On the finite uniform space, $\mathbb P(p\mid U_N)=\lfloor N/p\rfloor/N$. ([[def-uniform-finite-probability-space]])

[F2] $\sum_{p\le N}1/p=\log\log N+O(1)$. ([[thm-second-mertens-theorem-for-primes]])

[F3] If $X_N\Rightarrow X$ and $Y_N\to c$ in probability, then $X_N+Y_N\Rightarrow X+c$. ([[thm-slutsky-for-real-random-variables]])

## Proof

**Proof technique:** direct mean calculation and Slutsky.

1.1 By the definition of $\omega$ in [A1] and uniform averaging on the finite space [F1],
$$\mu_N=\frac1N\sum_{n=1}^N\omega(n)=\frac1N\sum_{n=1}^N\sum_{p\le N}\mathbf1_{p\mid n}=\sum_{p\le N}\frac1N\#\{n\le N:p\mid n\}=\sum_{p\le N}\frac{\lfloor N/p\rfloor}{N},$$
where the middle equality interchanges finite sums. For each $p$, $|\lfloor N/p\rfloor/N-1/p|<1/N$, so the total difference from $\sum_{p\le N}1/p$ is $O(\pi(N)/N)=O(1)$; [F2] gives $\mu_N=L_N+O(1)$. [A1, F1, F2, algebra]

2.1 The difference between the exact-mean and conventional normalizations is the deterministic quantity $(L_N-\mu_N)/\sqrt{L_N}$, which tends to $0$ because $L_N\to\infty$ and step 1.1 bounds its numerator. It therefore tends to $0$ in probability. Apply [F3] to [A1] and this shift to obtain the stated standard-normal limit. [given, A1, F3, step 1.1, algebra] ∎

## Proof references

[[thm-erdos-kac-limit-law-for-omega]]

[[def-uniform-finite-probability-space]]

[[thm-second-mertens-theorem-for-primes]]

[[thm-slutsky-for-real-random-variables]]

[[def-convergence-in-probability]]
