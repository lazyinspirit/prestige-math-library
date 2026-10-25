---
id: ex-x-minus-half-log-x-gauss-jacobi
kind: example
title: Gauss–Jacobi regularization for x to the minus one half times log x
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [alg-endpoint-power-regularized-jacobi-quadrature, thm-endpoint-regularized-jacobi-error, thm-gauss-jacobi-exactness-and-derivative-error, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-ftc-second-part, lem-log-power-regularity-after-endpoint-substitution, thm-real-power-continuity-and-derivatives, thm-algebra-of-derivatives, thm-chain-rule]
proof_strategy: direct
axiom_use: Countable Choice is used only for the Gauss–Jacobi rules in the stated approximation; the improper integral calculation itself is choice-free.
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
      locator: §§5.4.1–5.4.2, logarithmic endpoint growth and real powers.
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, Gauss–Jacobi derivative remainder.
---

## Statement

The improper integral is
$$\int_0^1x^{-1/2}\log x\,dx=-4.$$
For example, [[alg-endpoint-power-regularized-jacobi-quadrature]] applies with $n=1$, $\alpha=-1/2$, $\beta=0$, $m_a=1$, $m_b=0$, $h(x)=1$, $q_a=7$, and $q_b=4$. The transformed functions are $C^2$ and [[thm-endpoint-regularized-jacobi-error]] gives an explicit error bound $C_1(\|F_L''\|_\infty+\|F_R''\|_\infty)$ for the returned two-node sum.

## Facts & Assumptions

**Given:** The integrand $f(x)=x^{-1/2}\log x$ on $(0,1]$ and the specified endpoint-regularization inputs.

[F1] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with derivative $1/x$.

[F2] [[lem-log-power-regularity-after-endpoint-substitution]]: $t^\delta P(\log t)$ extends to $C^r([0,1])$ when $\delta>r$ and $P$ is a polynomial.

[F3] [[alg-endpoint-power-regularized-jacobi-quadrature]]: the left and right substitution orders $q_a,q_b$ and the shifted Gauss–Jacobi sums define the stated finite output.

[F4] [[thm-endpoint-regularized-jacobi-error]]: when the substituted functions are $C^{2n}$, the improper integral exists and the error is bounded by the displayed derivative constant.

[F5] [[thm-ftc-second-part]]: on $[\varepsilon,1]$, the integral of a derivative equals the primitive's endpoint difference.

[F6] [[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]], and [[thm-chain-rule]]: real powers, products, and compositions have the derivatives used for the primitive below.

## Proof

1.1 A primitive on $(0,1]$ is $P(x)=2\sqrt{x}\log x-4\sqrt{x}$ by [F1] and [F6]. The endpoint term $\sqrt{x}\log x$ tends to zero by the power-regularity lemma [F2] with $r=0$, $\delta=1/2$, and polynomial $z$. Hence $P(x)\to0$ as $x\downarrow0$. Applying [F5] on $[\varepsilon,1]$ and taking $\varepsilon\downarrow0$ gives the improper integral $P(1)-0=-4$. [F1, F2, F5, F6, algebra]

1.2 For the left substitution, $\delta_L=q_a(\alpha+1)-1=7/2-1=5/2>2$; its transformed function is a constant times $t^{5/2}$ times a polynomial of degree one in $\log t$ and a smooth factor bounded with two continuous derivatives. For the right substitution, $\delta_R=q_b(\beta+1)-1=3>2$ and the remaining factors are smooth on $[0,1]$. Therefore both transformed functions are $C^2$ by [F2], and [F3] applies. [F2, F3, given, algebra]

2.1 Apply [F4] with $n=1$ to the functions in step 1.2. Its error constant is $C_1$ and the output is the stated sum, so the claimed error bound follows. The value $-4$ from step 1.1 is the integral being approximated. [F3, F4, step 1.1, step 1.2] ∎
