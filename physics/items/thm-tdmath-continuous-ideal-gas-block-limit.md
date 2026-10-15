---
id: thm-tdmath-continuous-ideal-gas-block-limit
kind: theorem
title: "Continuous ideal-gas bulk limit and finite-block bridge"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["thm-linearity-of-the-lebesgue-integral-on-l-one","prop-order-and-scalar-rules-for-the-nonnegative-integral","def-countable-choice","thm-lebesgue-measure-is-a-complete-measure","prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets","thm-lebesgue-measure-of-a-box-of-every-kind","thm-borel-sets-are-lebesgue-measurable","thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures","thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line","thm-heine-borel-rn","thm-heine-cantor-metric","cor-integral-logarithm-is-strictly-increasing","def-integrable-real-and-complex-functions-and-their-integrals","def-lebesgue-measure-and-the-lebesgue-sigma-algebra","def-natural-logarithm","def-product-measure-on-sigma-finite-spaces","thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions","thm-exponential-beats-every-polynomial","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces","thm-gaussian-integral","thm-integration-by-parts","thm-logarithm-derivative-and-integral","thm-of-square-roots","thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique","thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: []
dependency_roles: {"thm-linearity-of-the-lebesgue-integral-on-l-one":"mathematical-premise","prop-order-and-scalar-rules-for-the-nonnegative-integral":"mathematical-premise","def-countable-choice":"mathematical-premise","thm-lebesgue-measure-is-a-complete-measure":"mathematical-premise","prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets":"mathematical-premise","thm-lebesgue-measure-of-a-box-of-every-kind":"mathematical-premise","thm-borel-sets-are-lebesgue-measurable":"mathematical-premise","thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures":"mathematical-premise","thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line":"mathematical-premise","thm-heine-borel-rn":"mathematical-premise","thm-heine-cantor-metric":"mathematical-premise","cor-integral-logarithm-is-strictly-increasing":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise","def-lebesgue-measure-and-the-lebesgue-sigma-algebra":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-product-measure-on-sigma-finite-spaces":"mathematical-premise","thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions":"mathematical-premise","thm-exponential-beats-every-polynomial":"mathematical-premise","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces":"mathematical-premise","thm-gaussian-integral":"mathematical-premise","thm-integration-by-parts":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-of-square-roots":"mathematical-premise","thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique":"mathematical-premise","thm-tonelli-theorem-for-sigma-finite-product-spaces":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
      locator: "Complete author-hosted HTML chapter read; ideal-gas phase-space integrals and canonical Gaussian momentum distribution."
    - title: "Hocky Research Group, Statistical Mechanics Lecture 5: Ideal Gas"
      url: https://hockygroup.com/teaching/statmech/notes/2021/Lecture5-IdealGas.pdf
      locator: "Complete 8-page lecture notes retrieved and read; pp.1–8, classical phase-space normalization and ideal-gas thermodynamics."
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix dimension $d\ge1$, particle mass $m>0$, action reference $h>0$, inverse energy $\beta>0$, and positive cube volumes $V_N$ with $N/V_N\to\rho\in(0,\infty)$. For $N$ indistinguishable classical noninteracting particles in a cube of volume $V_N$, use the phase-space reference $dq\,dp/(N!h^{dN})$ and Hamiltonian $H_N(q,p)=\sum_{i=1}^N|p_i|^2/(2m)$. Define $\lambda_\beta=h\sqrt{\beta/(2\pi m)}$. Then the dimensionless partition integral and free-energy limits are
$$Z_N=\frac{V_N^N}{N!\lambda_\beta^{dN}},\quad\frac{-\beta^{-1}\log Z_N}{N}\longrightarrow\beta^{-1}[\log(\rho\lambda_\beta^d)-1],\quad\frac{-\beta^{-1}\log Z_N}{V_N}\longrightarrow\beta^{-1}\rho[\log(\rho\lambda_\beta^d)-1].$$
There is also the following finite-momentum-block limit. Let $M=dN$, let $G_1,\ldots,G_M$ be independent standard normal variables, set $A_N=M^{-1}\sum_{a=1}^MG_a^2$, and define canonical momenta $P_a^{\rm can}=\sqrt{m/\beta}\,G_a$ and shell-prepared momenta $P_a^{\rm sh}=\sqrt{m/\beta}\,G_a/\sqrt{A_N}$. On the null event $A_N=0$, set the shell-prepared vector to $(\sqrt{mM/\beta},0,\ldots,0)$. The shell-prepared vector has exactly energy $dN/(2\beta)$, and for every fixed $r$ and bounded continuous $\psi:\mathbb R^r\to\mathbb R$,
$$\mathbb E\psi(P_1^{\rm sh},\ldots,P_r^{\rm sh})\longrightarrow\mathbb E\psi(P_1^{\rm can},\ldots,P_r^{\rm can}).$$
This is weak convergence for each fixed block in this free-particle model. The shell preparation is the stated normalized-Gaussian construction, and no finite-width shell or interacting-gas equivalence is asserted.

## Facts & Assumptions

**Given:** The free-particle Hamiltonian, phase-space normalization, and normalized-Gaussian shell preparation.

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]), as required by the Lebesgue-measure construction and change-of-variables suppliers below. $d,N\ge1$, $m,h,\beta,V_N>0$, $N/V_N\to\rho\in(0,\infty)$, and the $N$-particle Hamiltonian is additive kinetic energy in a cubic position box.

[A2] For the block limit, the $G_a$ are independent with density $(2\pi)^{-1/2}e^{-x^2/2}$ and $r$ is fixed while $N\to\infty$.

[F1] Under [A1], [[thm-lebesgue-measure-is-a-complete-measure]] makes the set function of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] a complete measure, and [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] makes it sigma-finite. [[thm-borel-sets-are-lebesgue-measurable]] makes continuous densities and their Borel level sets measurable; [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives the position cube its stated volume and gives singletons measure zero. [[def-integrable-real-and-complex-functions-and-their-integrals]] defines the signed integrals used below; [[thm-linearity-of-the-lebesgue-integral-on-l-one]] makes them linear, and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] gives the nonnegative monotonicity and homogeneity used in moment and tail bounds.

[F2] [[def-product-measure-on-sigma-finite-spaces]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: finite products of the sigma-finite Lebesgue factors carry the rectangular product measure. [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]] identifies its completion with Euclidean Lebesgue measure, so the displayed Borel densities have the same integrals in either convention.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: nonnegative product integrals factor by Tonelli; integrable products may be evaluated iteratively.

[F4] [[thm-gaussian-integral]]: the improper Riemann Gaussian integral is $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$. [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]] identifies each convergent nonnegative improper integral on $[0,\infty)$ with its Lebesgue integral. Apply it to the continuous even Gaussian and its even polynomial moments; reflection gives the negative half-line. Thus the improper integral evaluations below also evaluate their Lebesgue integrals.

[F5] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] and [[thm-of-square-roots]]: the scaling substitution $u=\sqrt c\,x$ is valid for $c>0$, so $\int_{\mathbb R}e^{-cx^2}\,dx=\sqrt{\pi/c}$.

[F6] [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], and [[cor-integral-logarithm-is-strictly-increasing]]: the library natural logarithm equals the integral logarithm and is strictly increasing on positive reals.

[F7] [[thm-integration-by-parts]]: on each finite interval, differentiable factors with integrable derivatives obey the ordinary integration-by-parts identity.

[F8] [[thm-exponential-beats-every-polynomial]]: $R^k e^{-R^2/2}\to0$ for each fixed nonnegative integer $k$, by setting $x=R^2/2$ and bounding $x^{k/2}$ by a larger integer power.

[F9] [[thm-heine-borel-rn]] makes each closed bounded Euclidean ball compact, and [[thm-heine-cantor-metric]] makes a continuous test function uniformly continuous on that ball.

## Proof



**Given:** [A1] and, for the second conclusion, [A2].

1.1 The integrand is nonnegative, so [F3] factors the position and momentum integrals: $$Z_N=\frac1{N!h^{dN}}\int_{\Lambda_N^N}\int_{\mathbb R^{dN}} e^{-\beta\sum_i|p_i|^2/(2m)}\,dp\,dq =\frac{V_N^N}{N!h^{dN}}\left(\int_\mathbb R e^{-\beta p^2/(2m)}\,dp\right)^{dN}.$$ By [F4]–[F5] the one-coordinate integral is $\sqrt{2\pi m/\beta}$, proving the stated exact formula with $\lambda_\beta=h\sqrt{\beta/(2\pi m)}$. The dimensions are consistent: $\lambda_\beta$ is a length, so $V_N^N/\lambda_\beta^{dN}$ and $Z_N$ are dimensionless. [A1, F1, F2, F3, F4, F5]

1.2 Let $G$ have the density in [A2]. By [F4]–[F5], it is normalized. The polynomial and Gaussian factors have continuous derivatives on every finite interval, so apply [F7] on $[-R,R]$ first with $u(x)=x$, $v'(x)=xe^{-x^2/2}$, and then with $u(x)=x^3$, $v'(x)=xe^{-x^2/2}$. In each case $v(x)=-e^{-x^2/2}$. Letting $R\to\infty$, the endpoint terms vanish by [F8], giving $\mathbb E G^2=1$ and $\mathbb E G^4=3$. Thus $\mathbb E(G^2-1)=0$ and $\mathbb E(G^2-1)^2=2$. The independence in [A2] and [F3] factor the cross integrals, so expanding the square gives $$\mathbb E(A_N-1)^2=M^{-2}\sum_{a=1}^M2=2/M.$$ For any $\eta>0$, $\eta^2\mathbf1_{\{|A_N-1|>\eta\}}\le(A_N-1)^2$, so integration proves $P(|A_N-1|>\eta)\le2/(M\eta^2)\to0$. Hence $A_N\to1$ in probability. [A2, F1, F2, F3, F4, F5, F7, F8, algebra]

2.1 Monotonicity of $\log$ from [F6] gives $\int_1^N\log x\,dx\le\log N!\le\int_1^{N+1}\log x\,dx$, hence $\log N!=N\log N-N+O(\log(N+1))$. Again by [F6], $0\le\log x=\int_1^xdt/t\le2\sqrt{x}$ for $x\ge1$, so $\log(N+1)/N\le2\sqrt{N+1}/N\to0$. Substituting the exact $Z_N$ yields $$N^{-1}\log Z_N=\log(V_N/N)+1-d\log\lambda_\beta+o(1)\to-\log\rho+1-d\log\lambda_\beta.$$ Multiplication by $-\beta^{-1}$ proves the per-particle limit; multiplying by $N/V_N\to\rho$ proves the per-volume limit. [A1, F6, step 1.1, algebra]

2.2 Since $A_N>0$ almost surely, the shell-prepared formulas define random variables on a probability-one set. On the null event $A_N=0$, assign the fixed shell vector $(\sqrt{mM/\beta},0,\ldots,0)$; this measurable extension leaves every expectation unchanged and has the same stated energy. On $A_N>0$, algebra gives $$\sum_{a=1}^{dN}\frac{(P_a^{\rm sh})^2}{2m} =\frac1{2\beta A_N}\sum_aG_a^2=\frac{M}{2\beta}=\frac{dN}{2\beta}.$$ This exact energy constraint holds on every outcome where $A_N>0$, an event of probability one since the joint Gaussian density assigns zero mass to the origin. [A2, step 1.2]

2.3 For fixed $r$, the scalar multiplier $A_N^{-1/2}$ tends to $1$ in probability by continuity at $1$ and step 1.2. Therefore $(P_1^{\rm sh},\ldots,P_r^{\rm sh})-(P_1^{\rm can},\ldots,P_r^{\rm can})$ tends to zero in probability: restrict first to the event $\sum_{a=1}^rG_a^2\le R^2$, where its norm is at most $\sqrt{m/\beta}R|A_N^{-1/2}-1|$, and then bound the complement by $P(\sum_{a=1}^rG_a^2>R^2)\le r/R^2$ using the second moment. For bounded continuous $\psi$, choose $R$ so this tail is small and additionally restrict to $|A_N^{-1/2}-1|\le1$, whose complement has probability tending to zero. On this event both blocks lie in the ball of radius $2\sqrt{m/\beta}R$. Use uniform continuity of $\psi$ on the compact ball of radius $2\sqrt{m/\beta}R$, and then use convergence in probability of the difference. For any $\epsilon>0$, choose $\delta>0$ by that uniform continuity. The expectation difference is at most $\epsilon+2\|\psi\|_\infty[r/R^2+P(|A_N^{-1/2}-1|>1)+P(\|P_{1:r}^{\rm sh}-P_{1:r}^{\rm can}\|>\delta)]$, with the multiplier assigned arbitrarily on its null exceptional event. Sending first $N\to\infty$ and then $R\to\infty$ proves the claimed expectation limit. [A2, F1, F3, F9, step 1.2]

3.1 If positions are included, choose them independently and uniformly in the same cube under both preparations. After coordinatewise rescaling by the side length, every fixed position block already has the same uniform law in both models and is independent of the momentum vector. The same bounded-continuous test argument as in 2.3, first on compact sets and then on their small tails, proves the joint fixed-block limit. This does not change the energy computation because the Hamiltonian has no position dependence. [A1, A2, F1, step 2.3] ∎
