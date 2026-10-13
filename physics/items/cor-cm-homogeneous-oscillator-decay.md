---
id: cor-cm-homogeneous-oscillator-decay
kind: corollary
title: "Strictly damped homogeneous oscillator with $k>0$: every solution tends to zero"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-homogeneous-oscillator-solution-classification, def-cm-oscillator-model-and-phase-system, thm-exponential-limits-and-range, thm-nonnegative-series-bounded-partial-sums, def-real-exponential-function-and-e, thm-sine-cosine-signs-monotonicity-and-ranges, def-limits-at-infinity, def-interval, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity]
dependency_roles:
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-interval: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.9)-(5.12): exponential decay of the free damped oscillations with time constant $\\tau=1/\\delta$ and the quality factor, printed pages 2-3 of Chapter 5 (PDF pages 88-89)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.16): the transient term of the linearised oscillator decays away exponentially, printed page 148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$, $c>0$ and $k>0$, let $x:\mathbb R\to\mathbb R$ be a solution of the homogeneous model $m\,x''+c\,x'+k\,x=0$ with time domain $I=\mathbb R$ and $f\equiv0$ ([[def-cm-oscillator-model-and-phase-system]], [[thm-cm-homogeneous-oscillator-solution-classification]]), and write $\Delta=c^2-4mk$, $\gamma=c/(2m)$, $\lambda_\pm=(-c\pm\sqrt\Delta)/(2m)$ in case $\Delta>0$ and $\lambda=-c/(2m)$ in case $\Delta=0$. Then $x(t)\to0$ as $t\to+\infty$ ([[def-limits-at-infinity]]); more precisely, with the coefficients $A,B$ of the solution in the notation of [[thm-cm-homogeneous-oscillator-solution-classification]]:

1. if $\Delta>0$: $\lambda_+<0$ and $|x(t)|\le(|A|+|B|)e^{\lambda_+t}$ for all $t\ge0$;
2. if $\Delta=0$: $\lambda<0$ and $|x(t)|\le(|A|+|B|t)e^{\lambda t}$ for all $t\ge0$;
3. if $\Delta<0$: $\gamma>0$ and $|x(t)|\le(|A|+|B|)e^{-\gamma t}$ for all $t\ge0$.

## Facts & Assumptions

**Given:** $m>0$, $c>0$, $k>0$, a solution $x$ of the homogeneous model, and the notation $\Delta,\gamma,\lambda_\pm,\lambda$ of the statement.

[F1] The solution is one of the three explicit families of [[thm-cm-homogeneous-oscillator-solution-classification]], on all of $\mathbb R$, with the coefficients $A,B$ of the relevant case. [given]

[F2] Signs: if $\Delta>0$ then $\lambda_+=\frac{-c+\sqrt\Delta}{2m}<\frac{-c+c}{2m}=0$ because $k>0$ gives $\Delta<c^2$ and hence $\sqrt\Delta<c$; if $\Delta=0$ then $\lambda=-c/(2m)<0$; and $\gamma=c/(2m)>0$. [F1, algebra]

[F3] Ranges: $|\cos u|\le1$ and $|\sin u|\le1$ for every real $u$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F4] Exponential limits: $\exp(u)\to0$ as $u\to-\infty$ and $\exp(u)\to+\infty$ as $u\to+\infty$ ([[thm-exponential-limits-and-range]]); consequently for $\lambda<0$, $\exp(\lambda t)\to0$ as $t\to+\infty$. The reciprocal identity $e^{\lambda t}=1/e^{-\lambda t}$ and positivity hold by [[cor-exponential-reciprocal-and-positivity]]. For $t>0$ and $\lambda<0$, the exponential series has nonnegative terms, so $\exp(-\lambda t)\ge(-\lambda t)^2/2$ and hence $0\le t\,e^{\lambda t}\le\frac{2}{\lambda^2t}$ ([[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]]).

[F5] Convergence to $0$ at $+\infty$ is the quantified assertion of [[def-limits-at-infinity]]: for every $\varepsilon>0$ there is $T$ with $|u(t)|<\varepsilon$ for all $t>T$.

[F6] The real exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]), so $u\le v$ implies $e^u\le e^v$.

## Proof

**Proof technique:** cases; read the three explicit solution families off the classification theorem, bound them with the sign and range facts, and take the limits.

1.1 Bounds for the three families. [assume-case 1, assume-case 2, assume-case 3] By [F1], in case 1 the solution is $x(t)=Ae^{\lambda_+t}+Be^{\lambda_-t}$ with $\lambda_-<\lambda_+$; since $t\ge0$ and $\lambda_-<\lambda_+$ give $\lambda_-t\le\lambda_+t$, [F6] gives $e^{\lambda_-t}\le e^{\lambda_+t}$, the triangle inequality yields $|x(t)|\le(|A|+|B|)e^{\lambda_+t}$. In case 2, $|x(t)|=|A+Bt|e^{\lambda t}\le(|A|+|B|t)e^{\lambda t}$. In case 3, $|x(t)|=e^{-\gamma t}|A\cos(\omega t)+B\sin(\omega t)|\le(|A|+|B|)e^{-\gamma t}$ by [F3]. [F1, F3, F6]

2.1 The three majorants tend to zero at $+\infty$. By [F2] the exponents $\lambda_+,\lambda,-\gamma$ are negative, so $e^{\lambda_+t}\to0$ and $e^{-\gamma t}\to0$ by [F4]. For the middle case, [F4] gives $0\le t e^{\lambda t}\le2/(\lambda^2t)\to0$: given $\varepsilon>0$, every $t>2/(\lambda^2\varepsilon)$ has $te^{\lambda t}<\varepsilon$; hence $t e^{\lambda t}\to0$ and therefore $(|A|+|B|t)e^{\lambda t}=|A|e^{\lambda t}+|B|\,te^{\lambda t}\to0$. [step 1.1, F2, F4, F5]

3.1 Since $|x(t)|$ is bounded above in each case by the corresponding majorant, and all three majorants tend to $0$, [F5] gives $x(t)\to0$ as $t\to+\infty$ in each case; the estimates are those displayed in clause 1. [cases-exhaustive: the three discriminant cases, step 1.1, step 2.1, F5] ∎
