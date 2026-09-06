---
id: thm-riemann-von-mangoldt-zero-counting
kind: theorem
title: "The Riemann--von Mangoldt zero count"
status: draft
origin: pipeline
deps: [def-riemann-zeta-zero-counting, def-riemann-xi-function, thm-completed-riemann-zeta-functional-equation, thm-argument-principle-null-homologous-cycle, thm-stirling-formula-gamma, thm-hadamard-product-for-riemann-xi, thm-trivial-zeros-and-critical-strip, thm-von-mangoldt-logarithmic-derivative-zeta]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, §11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For $T\ge2$,
$$N(T)=\frac{T}{2\pi}\log\frac{T}{2\pi}-\frac{T}{2\pi}+O(\log T).$$

## Facts & Assumptions

[L1] The completed zeta function satisfies $\Lambda(s)=\Lambda(1-s)$
([[thm-completed-riemann-zeta-functional-equation]]).

## Proof

**Given:** $T\ge2$. We first treat sufficiently large $T$ not equal to a zero ordinate.

1.1 The Hadamard product [[thm-hadamard-product-for-riemann-xi]] gives $\xi'/\xi(s)=B+\sum_\rho(1/(s-\rho)+1/\rho)$. Write $\rho=\beta+i\gamma$, with $0<\beta<1$ by [[thm-trivial-zeros-and-critical-strip]]. Since $\sum_\rho|\rho|^{-2}<\infty$, the sum of $\Re(1/\rho)=\beta/|\rho|^2$ converges. At $s_0=2+iT$, the xi identity, Stirling's formula and [[thm-von-mangoldt-logarithmic-derivative-zeta]] give $\xi'/\xi(s_0)=O(\log T)$: the zeta term is bounded by $\sum_{n\ge2}(\log n)n^{-2}$, and the Gamma term is $O(\log T)$. Differentiating Stirling here is justified by Cauchy's estimate for its analytic remainder on disks of radius proportional to $|s_0|$ in a larger sector. Taking real parts of the product formula, all variable summands are positive and $$\sum_\rho\frac1{4+(T-\gamma)^2}\le\sum_\rho\frac{2-\beta}{(2-\beta)^2+(T-\gamma)^2}=O(\log T).$$ In particular there are $O(\log T)$ zeros with $|T-\gamma|<1$, without using the present theorem or its unit-interval corollary. [given, algebra]

2.1 On the horizontal segment $s=\sigma+iT$, $1/2\le\sigma\le2$, subtract the product formula at $s_0$. For $|T-\gamma|\ge1$, $$\left|\frac1{s-\rho}-\frac1{s_0-\rho}\right|\le\frac{3/2}{(T-\gamma)^2}\le\frac{15/2}{4+(T-\gamma)^2}.$$ Thus step 1.1 bounds the nonlocal difference sum by $O(\log T)$, uniformly in $\sigma$. The local subtracted terms $1/(s_0-\rho)$ also total $O(\log T)$. The integral of the imaginary part of each remaining local term $1/(\sigma+iT-\rho)$ is the argument change of a horizontal segment missing zero, of absolute value at most $\pi$. Their number is $O(\log T)$. Including the reference value $\xi'/\xi(s_0)$, the total argument change of $\xi$ on the top segment from $2+iT$ to $1/2+iT$ is therefore $O(\log T)$. [step 1.1, algebra]

3.1 Fix a height $t_0\in(0,2)$ not equal to any zero ordinate. On the vertical segment from $2+it_0$ to $2+iT$, the factors $s$ and $s-1$ in $\xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ have bounded argument changes. The zeta factor also has bounded argument change: $|\zeta(2+it)-1|\le\sum_{n\ge2}n^{-2}<1$, so it remains in a fixed right half-plane. Stirling with a continuous logarithm in the right half-plane gives $$\Im\log\Gamma(1+iT/2)=\frac T2\log\frac T2-\frac T2+O(1).$$ Consequently the argument change along this vertical segment is $$\frac T2\log\frac{T}{2\pi}-\frac T2+O(1).$$ [step 2.1, algebra]

4.1 By [L1], $\xi(s)=\xi(1-s)$, and conjugation symmetry gives $\xi(1-\bar s)=\overline{\xi(s)}$. Apply the argument principle to the rectangle with real sides $-1,2$ and heights $t_0,T$. Its zeros are precisely the nontrivial zeta zeros in that height range. Reflection in $\Re s=1/2$ pairs the two vertical edges and the two halves of each horizontal edge, doubling the argument change on the right vertical edge followed by the right half of the top; the bottom contributes a constant independent of $T$. Thus $$N(T)=\frac1\pi\left(\Delta_{2+it_0\to2+iT}\arg\xi+\Delta_{2+iT\to1/2+iT}\arg\xi\right)+O(1).$$ Steps 2.1 and 3.1 yield the claimed main term and $O(\log T)$ error. [L1, step 2.1, step 3.1, algebra]

5.1 If $T$ is a zero ordinate, take nonzero-ordinate heights decreasing to $T$. Discreteness of zeros in the bounded strip makes their counts eventually equal to the convention $0<\gamma\le T$, with full multiplicities. The preceding error constant is independent of the distance to zero ordinates, so passage to the limit preserves the estimate. Finally compact heights $2\le T\le T_0$ are covered by enlarging the constant. [step 4.1, algebra] ∎
