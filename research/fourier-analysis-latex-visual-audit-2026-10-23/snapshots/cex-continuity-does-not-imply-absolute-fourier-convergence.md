---
id: cex-continuity-does-not-imply-absolute-fourier-convergence
kind: counterexample
title: "Continuity does not imply absolute Fourier convergence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, Exercise 3.3.8"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement refuted

Every continuous function on $\mathbb T$ has absolutely summable Fourier coefficients.

## Facts & Assumptions

**Given:** For $k\ge2$, put $u_k(x):=e^{ik\log k}e^{2\pi ikx}$ and $A_N(x):=\sum_{k=2}^N u_k(x)$, and set $g(x):=\sum_{k=2}^\infty u_k(x)/k$.

[F1] Grafakos's Exercise 3.3.8 supplies the estimate $\sup_x|A_N(x)|\le C\sqrt N$ for every $N\ge2$ and gives summation by parts as the hint for this construction.

## Counterexample

1.1 Summation by parts and [F1] give, uniformly in $x$ and $L\ge M\ge2$, $\left|\sum_{k=M}^L u_k(x)/k\right|\le C_1M^{-1/2}$. Hence the series defining $g$ converges uniformly and $g$ is continuous. [F1, algebra]

1.2 In fact $g$ is Hölder-one-half. Let $0<H\le1/2$ be the circular size of a displacement $h$, choose its representative with $|h|=H$, put $N=\lfloor H^{-1}\rfloor$, and set $b_k=(e^{2\pi ikh}-1)/k$. Then $|b_N|\le2\pi H$ and $|b_k-b_{k+1}|\le4\pi H/k$ for $2\le k<N$. Summation by parts and [F1] now bound $\sum_{k=2}^N u_k(x)b_k$ by $C_2H\sqrt N\le C_2\sqrt H$. [F1, given, algebra]

2.1 Uniform convergence permits termwise integration, so $\widehat g(k)=e^{ik\log k}/k$ for $k\ge2$ and $\widehat g(k)$ vanishes otherwise. Therefore $\sum_k|\widehat g(k)|=\sum_{k=2}^\infty1/k=\infty$, and $g\notin A(\mathbb T)$. [step 1.1, algebra]

2.2 The terms with $k>N$ equal the difference of the two series tails at $x+h$ and $x$. Step 1.1 bounds their sum by $2C_1N^{-1/2}\le2\sqrt2C_1\sqrt H$. [step 1.1, algebra]

3.1 For $H=0$ the difference vanishes; for $H>0$, steps 1.2 and 2.2 give $|g(x+h)-g(x)|\le C_3H^{1/2}$. Thus this continuous $g$ has non-absolutely-summable Fourier coefficients and refutes the statement. [step 2.1, step 1.2, step 2.2] ∎
