---
id: cex-quadratic-pure-birth-reaction-network-explodes
kind: counterexample
title: "Quadratic pure-birth rates can explode"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-measure-with-density
  - def-real-exponential-function-and-e
  - def-reaction-network-propensity-system-and-generator
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
  - thm-ftc-second-part
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-series-bounded-partial-sums
  - thm-countable-state-reaction-networks-lyapunov-nonexplosion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 6 §6.2, Proposition 6.2.2 and Example 6.2.3, PDF pp.154–157: quadratic pure-birth explosion; the holding-time expectation proof is supplied locally."
---

## Statement

Let $E=\{1,2,\ldots\}$, use one increment $\nu=1$, and set the propensity $a(n)=n^2$. Starting at $X_0=1$, the minimal reaction process has explosion time
$$\tau_\infty=\sum_{n=1}^{\infty}W_n,$$
where the independent holding times satisfy $W_n\sim\operatorname{Exp}(n^2)$. This sum is finite almost surely, so finite per-state rates alone do not prevent explosion. The sufficient criterion in [[thm-countable-state-reaction-networks-lyapunov-nonexplosion]] does not apply with $V(n)=n$, since its local expression $QV(n)=n^2$ is not bounded by $cn$ for any finite $c$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the reaction system above, and an independent stream of unit exponential variables.

[F1] A reaction system permits countable $E\subseteq\mathbb Z^d$, a finite set of increments and finite total rate at each state, with active poststates in $E$. ([[def-reaction-network-propensity-system-and-generator]])

[F2] A unit exponential law has density $e^{-t}$ for $t>0$ and survival $e^{-t}$; rescaling by $n^2$ gives an exponential holding time with rate $n^2$. ([[thm-exponential-and-weibull-survival-laws]])

[F3] Expectation is integration against the probability measure. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[F4] Increasing limits of nonnegative measurable functions pass through the integral. ([[thm-monotone-convergence-for-the-integral]])

[F5] On bounded intervals, the Lebesgue integral of a continuous function equals its Riemann integral, and the fundamental theorem evaluates that integral from an antiderivative. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-ftc-second-part]])

[F6] The derivative of $e^{-t}$ is $-e^{-t}$; for $u\ge0$, the exponential series has nonnegative terms and dominates $u^3/3!=u^3/6$. ([[thm-exponential-and-weibull-survival-laws]], [[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]])

[F7] A proper $V\ge1$ with the local generator bound $QV\le cV$ is a sufficient hypothesis for countable-state nonexplosion. ([[thm-countable-state-reaction-networks-lyapunov-nonexplosion]])

[A1] Countable Choice supplies the exponential law. ([[def-countable-choice]])

[A2] Dependent Choice is used for the countable product probability space of holding-time inputs. ([[def-dependent-choice]], [[thm-countable-product-of-probability-spaces]])

## Proof

**Proof technique:** direct.

1.1 At state $n$, the only active channel has finite rate $n^2$ and moves to $n+1\in E$, so [F1] defines a valid countable-state network. With independent unit exponentials $E_n$, its $n$th holding time is $W_n=E_n/n^2$; [F2] gives the stated law and the recursive path visits $1,2,3,\ldots$ until its limiting time. [A1, A2, F1, F2, given, construct]

2.1 The density of $W_n$ is $n^2e^{-n^2t}$ for $t>0$. For $b>0$, [F5] and differentiation of the displayed antiderivative give $\mathbb E[W_n\mathbf1_{\{W_n\le b\}}]=\int_0^b t n^2e^{-n^2t}\,dt=\frac{1-(n^2b+1)e^{-n^2b}}{n^2}.$ As $b\to\infty$, $(n^2b+1)e^{-n^2b}\to0$: setting $u=n^2b$, the exponential series gives $e^u\ge u^3/6$, so $(u+1)e^{-u}\le6(u+1)/u^3\to0$. Applying [F4] to the increasing truncations yields $\mathbb E W_n=1/n^2$. [F3, F4, F5, F6, step 1.1, algebra]

3.1 For $n\ge2$, $1/n^2\le1/(n(n-1))=1/(n-1)-1/n$. Therefore $\mathbb E\sum_{n=1}^mW_n=\sum_{n=1}^m1/n^2\le2$. Since the partial sums increase, [F4] gives $\mathbb E\tau_\infty=\mathbb E\lim_m\sum_{n=1}^mW_n\le2$. If $p=\mathbb P(\tau_\infty=\infty)>0$, then $\mathbb E\tau_\infty\ge kp$ for every integer $k$, contradicting this finite bound. Thus $\tau_\infty<\infty$ almost surely. [F3, F4, step 2.1, given, algebra]

4.1 For $V(n)=n$, the finite local generator sum is $QV(n)=n^2((n+1)-n)=n^2$. If $QV\le cV$ for all $n$, then $n\le c$ for all positive integers, impossible; thus [F7] does not apply although step 3.1 proves explosion. [F1, F7, step 1.1, step 3.1, algebra] ∎