---
id: lem-it-operator-jensen-negative-log
kind: lemma
title: The compression Jensen inequality for the negative logarithm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-it-inverse-compression-resolvent, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-real-and-complex-inner-product-space, def-non-negative-and-positive-operator, thm-natural-logarithm-laws, thm-continuous-implies-integrable, thm-ftc-second-part, thm-non-negative-operator-characterisations]
aliases: [lem-it-negative-log-integral-resolvent-jensen]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, let $T:K\to K$ be positive definite, and let $V:H\to K$ satisfy $V^*V=I_H$. Then, in the non-negative operator order,

$$-\ln(V^*TV)\preceq V^*(-\ln T)V,$$

where $R\preceq S$ means $S-R$ is non-negative and logarithms of positive-definite operators are defined by finite spectral calculus.

## Facts & Assumptions

**Given:** $H,K,T,V$ as in the Statement.

[F1] [[lem-it-inverse-compression-resolvent]]: $V^*(T+sI_K)^{-1}V\succeq(V^*TV+sI_H)^{-1}$ for every $s\ge0$.

[F2] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: the natural logarithm is defined on positive reals and has derivative $1/t$.

[F3] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint with nonnegative quadratic form.

[F4] [[thm-natural-logarithm-laws]]: the natural logarithm is continuous on positive reals, has $\ln1=0$, and obeys $\ln(u/v)=\ln u-\ln v$.

[F5] [[thm-continuous-implies-integrable]]: every real continuous function on a compact interval is Riemann integrable.

[F6] [[thm-ftc-second-part]]: an everywhere differentiable primitive on a closed interval, including one-sided endpoint derivatives, with integrable derivative has derivative integral equal to its endpoint increment.

[F7] [[thm-non-negative-operator-characterisations]]: positive-definite finite-dimensional operators have orthonormal eigenbases with strictly positive eigenvalues.

## Proof

1.1 For $t>0$ and $R>0$, set $F_t(s)=\ln(t+s)-\ln(1+s)$ on $s>-\min(t,1)$. Translated difference quotients in [F2] give $F_t'(s)=(t+s)^{-1}-(1+s)^{-1}$, including the one-sided derivatives on $[0,R]$. For $s,u\in[0,R]$, $|(t+s)^{-1}-(t+u)^{-1}|\le|s-u|/t^2$ and $|(1+s)^{-1}-(1+u)^{-1}|\le|s-u|$, so the derivative is continuous and integrable by [F5]. Thus [F6] and [F4] give $\int_0^R((t+s)^{-1}-(1+s)^{-1})\,ds=\ln((t+R)/(1+R))-\ln t$. As $R\to\infty$, the quotient tends to $1$, so [F4] gives the limit $-\ln t$ (also when $t=1$). Applying this scalar identity to each of the finitely many positive eigenvalues in [F7] yields the corresponding operator integral identity in norm, since the maximum of finitely many scalar errors tends to zero. On a zero-dimensional space the empty spectral formula is the unique endomorphism, so the same assertion is vacuous and valid. [given, F2, F4, F5, F6, F7, algebra]

2.1 Since $V^*V=I_H$ and $T$ is positive definite, $V^*TV$ is positive definite on nonzero $H$: for $x\ne0$, $Vx\ne0$ and $\langle V^*TVx,x\rangle=\langle TVx,Vx\rangle>0$. Apply [F1] at each $s\ge0$. Subtracting $(1+s)^{-1}I_H$ preserves the order inequality. For every $x$, integrating the resulting quadratic-form inequality over $[0,R]$ gives a non-negative quadratic form; the operator norm limits as $R\to\infty$ exist by step 1.1, and the limit remains non-negative because quadratic forms are continuous. The limit is $-\ln(V^*TV)\preceq V^*(-\ln T)V$, as required. [given, F1, F3, step 1.1, algebra] ∎

