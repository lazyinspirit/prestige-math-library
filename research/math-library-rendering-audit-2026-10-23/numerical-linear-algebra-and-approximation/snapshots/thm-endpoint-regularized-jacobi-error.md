---
id: thm-endpoint-regularized-jacobi-error
kind: theorem
title: Error bound after endpoint power regularization
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [alg-endpoint-power-regularized-jacobi-quadrature, thm-gauss-jacobi-exactness-and-derivative-error, lem-log-power-regularity-after-endpoint-substitution, def-countable-choice, thm-substitution, thm-ftc-second-part, def-higher-derivatives-and-smoothness, thm-real-power-continuity-and-derivatives, thm-algebra-of-derivatives, thm-chain-rule, thm-logarithm-derivative-and-integral, def-factorial-and-falling-factorial, lem-nat-finite-sum-laws-and-the-canonical-embedding, thm-real-power-laws, thm-natural-logarithm-laws]
proof_strategy: direct
axiom_use: Countable Choice enters only through the Gauss–Jacobi measure; the endpoint substitutions and their integrability proof are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: Positive-base powers and logarithms.
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, Gauss–Jacobi derivative remainder.
---

## Statement

Assume Countable Choice and the inputs of [[alg-endpoint-power-regularized-jacobi-quadrature]]. Let $F_L,F_R$ be its transformed functions and define
$$C_n=\frac{1}{(2n)!_{\mathbb R}}\int_0^1\widetilde p_n(s)^2\,ds,$$
where $\widetilde p_n$ is the monic degree-$n$ polynomial orthogonal for Lebesgue measure on $[0,1]$. Then the improper integral $I=\int_a^b f(x)\,dx$ exists, the algorithm's output is $\widehat I=\widetilde Q_n(F_L)+\widetilde Q_n(F_R)$, and
$$|I-\widehat I|\le C_n\left(\|F_L^{(2n)}\|_\infty+\|F_R^{(2n)}\|_\infty\right).$$
Here $\widetilde Q_n(H)=\frac12\sum_{j=1}^nw_jH((1+z_j)/2)$ is the affine image on $[0,1]$ of the $n$-node $\alpha=\beta=0$ rule on $[-1,1]$.

## Facts & Assumptions

**Given:** Countable Choice, $a<b$, $n\ge1$, $\alpha,\beta>-1$, nonnegative integers $m_a,m_b$, $h\in C^{2n}([a,b])$, and positive integers $q_a,q_b$ with $q_a(\alpha+1)-1>2n$ and $q_b(\beta+1)-1>2n$.

[A1] [[def-countable-choice]]: this axiom is used only to form the Lebesgue-density Gaussian rule.

[F1] [[alg-endpoint-power-regularized-jacobi-quadrature]]: $x_L(t)=a+(c-a)t^{q_a}$ and $x_R(t)=b-(b-c)t^{q_b}$, and $F_{L,R}=f(x_{L,R})|x'_{L,R}|$ on $(0,1]$, extended by zero at $0$; the output is the sum of the two shifted $n$-node Gauss–Jacobi values.

[F2] [[lem-log-power-regularity-after-endpoint-substitution]]: if $\delta>r$, then $t^\delta P(\log t)$, extended by zero at $0$ for any polynomial $P$, is $C^r$ on $[0,1]$ with its first $r$ derivatives zero at $0$.

[F3] [[thm-gauss-jacobi-exactness-and-derivative-error]]: for the weight $1$ on $[-1,1]$, the $n$-node Gaussian rule has error constant $(2n)!^{-1}\int_{-1}^1p_n^2$ multiplying the supremum norm of the $2n$-th derivative.

[F4] [[thm-substitution]]: on a compact interval, differentiable substitution with integrable derivative gives the corresponding oriented change-of-variable identity for continuous integrands.

[F5] [[def-higher-derivatives-and-smoothness]]: $C^{2n}$ means continuous derivatives through order $2n$, including one-sided endpoint derivatives.

[F6] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: $(2n)!_{\mathbb R}$ is the positive real image of $\prod_{j=1}^{2n}j$.

[F7] [[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[thm-logarithm-derivative-and-integral]]: away from the singular endpoint, the positive real powers, logarithms, and their products with $h$ have continuous derivatives through order $2n$.

[F8] [[thm-real-power-laws]] and [[thm-natural-logarithm-laws]]: positive-base powers obey product and iterated-power laws, while $\log(uv)=\log u+\log v$. For a positive integer $q$, iterating the logarithm product law gives $\log(t^q)=q\log t$.

## Proof

1.1 Put $c=(a+b)/2$. On the left half, $x_L(t)-a=(c-a)t^{q_a}$ and $b-x_L(t)=(b-a)(1-t^{q_a}/2)\ge(b-a)/2$. The endpoint logarithm is $\log((c-a)/(b-a))+q_a\log t$, so its $m_a$-th power is a polynomial in $\log t$; the opposite power and logarithm and $h(x_L(t))$ have $C^{2n}$ derivatives because their arguments remain positive and bounded away from zero, by [F7]. Hence $F_L(t)=t^{\delta_L}P_L(\log t)\phi_L(t)$ times a constant, where $\delta_L=q_a(\alpha+1)-1>2n$, $\deg P_L\le m_a$, and $\phi_L\in C^{2n}([0,1])$. By [F2] and the product rule, $F_L$ extends to $C^{2n}$ at zero with the assigned value. [A1, F1, F2, F5, F7, F8, given, algebra]

1.2 On the right half, $b-x_R(t)=(b-c)t^{q_b}$ and $x_R(t)-a=(b-a)(1-t^{q_b}/2)\ge(b-a)/2$. Its singular logarithm is $\log((b-c)/(b-a))+q_b\log t$, while the opposite factors and $h(x_R(t))$ have $C^{2n}$ derivatives by [F7]. The same factorization has $\delta_R=q_b(\beta+1)-1>2n$ and a polynomial in $\log t$ of degree at most $m_b$; [F2] therefore gives $F_R\in C^{2n}([0,1])$. [F1, F2, F5, F7, F8, given, algebra]

1.3 For $H\in C^{2n}([0,1])$, apply [F3] to $H((1+t)/2)$ on $[-1,1]$ and multiply the integral and quadrature values by $1/2$. The chain rule contributes $2^{-2n}$ to the $2n$-th derivative, so the shifted rule's error constant is $2^{-2n-1}(2n)!_{\mathbb R}^{-1}\int_{-1}^1p_n(t)^2dt=(2n)!_{\mathbb R}^{-1}\int_0^1\widetilde p_n(s)^2ds=C_n$; the affine node polynomial is $\widetilde p_n(s)=2^{-n}p_n(2s-1)$. Consequently its error is at most $C_n\|H^{(2n)}\|_\infty$. [F3, F6, given, algebra]

2.1 For every $0<\varepsilon<1$, apply [F4] on $[\varepsilon,1]$. Since $x_L$ is increasing, $\int_\varepsilon^1F_L(t)\,dt=\int_{x_L(\varepsilon)}^c f(x)\,dx$. Since $x_R$ is decreasing and $F_R(t)=-f(x_R(t))x_R'(t)$, the oriented substitution gives $\int_\varepsilon^1F_R(t)\,dt=\int_c^{x_R(\varepsilon)}f(x)\,dx$. Letting $\varepsilon\downarrow0$, the endpoints tend to $a$ and $b$, while $F_L,F_R$ are continuous on $[0,1]$ by steps 1.1–1.2. Thus both improper half-integrals converge and their sum is $I=\int_0^1F_L+\int_0^1F_R$. [F1, F4, step 1.1, step 1.2]

3.1 Apply step 1.3 to $F_L$ and $F_R$, whose required smoothness was proved in steps 1.1–1.2. Since $I$ is their integral sum by step 2.1 and $\widehat I$ is their quadrature sum by [F1], the triangle inequality gives the stated error bound. [F1, step 1.1, step 1.2, step 2.1, step 1.3, algebra] ∎

