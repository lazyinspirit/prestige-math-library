---
id: lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
kind: lemma
title: "Standard-normal CDF, tail, and quantile identities for power calculations"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-axiom-of-choice-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - def-cumulative-distribution-function-of-a-random-variable
  - lem-probability-measure-basic-identities
  - thm-derivative-of-exponential
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-extreme-value-r
  - thm-continuity-from-below-for-measures
  - thm-continuity-from-above-for-measures
  - thm-intermediate-value
  - thm-substitution-for-improper-integrals
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-integral-over-a-null-set-vanishes
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the standard-normal law and implies countable choice; countable choice is used only with the zero-width-box theorem to show singleton normal probabilities vanish."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §§7.1–7.4, printed pp. 149–159"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §7.2.2.2, PDF pp. 2019–2021"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/E-Handbook.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC. Let $Z\sim N(0,1)$ and $\Phi(x)=P(Z\le x)$. Then $\Phi$ is continuous and strictly increasing, with limits $0$ and $1$ at $-\infty$ and $+\infty$; $P(Z=x)=0$ for every $x\in\mathbb R$; and $\Phi(-x)=1-\Phi(x)$. For each $q\in(0,1)$, there is a unique real $z_q$ with $\Phi(z_q)=q$, and $z_{1-q}=-z_q$, in particular $z_{1/2}=0$.

## Facts & Assumptions

**Given:** AC, the standard normal law $N(0,1)$, and its cumulative distribution function $\Phi$.

[A1] The standard-normal law is constructed under AC, and AC implies countable choice. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]] [[lem-axiom-of-choice-implies-countable-choice]]

[F1] The standard-normal law is the probability measure with density $g(t)=e^{-t^2/2}/\sqrt{2\pi}$; this density is positive, Borel, and has integral one. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F2] The function $g$ is continuous because the exponential is smooth, $t\mapsto -t^2/2$ is continuous, and a composite and scalar multiple of continuous functions are continuous. [[thm-derivative-of-exponential]] [[thm-algebra-of-continuous-functions]] [[thm-composition-of-continuous-functions]]

[F3] A continuous real-valued function on a nonempty compact interval attains finite maximum and minimum values. [[thm-extreme-value-r]]

[F4] Probability is continuous on increasing event sequences and on decreasing event sequences, the latter because all probabilities are finite. [[thm-continuity-from-below-for-measures]] [[thm-continuity-from-above-for-measures]]

[F5] A continuous function on a closed interval takes every value between its endpoint values. [[thm-intermediate-value]]

[F6] Under countable choice, a singleton is a zero-width box of Lebesgue measure zero, and the integral of a nonnegative measurable density over a null set is zero. [[def-countable-choice]] [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[cor-integral-over-a-null-set-vanishes]]

[F7] Substitution $u=-t$ in a convergent improper integral is valid for the monotone differentiable bijection $t\mapsto-t$; its derivative reverses orientation. [[thm-substitution-for-improper-integrals]]

[F8] If $A\subseteq B$, then $P(B\setminus A)=P(B)-P(A)$, and $P(A^c)=1-P(A)$. [[lem-probability-measure-basic-identities]]

[F9] The CDF is $\Phi(x)=P(Z\le x)$. [[def-cumulative-distribution-function-of-a-random-variable]]

## Proof

1.1 For $a<b$, [F8] and [F9] give $\Phi(b)-\Phi(a)=P(a<Z\le b)=\int_{(a,b]}g(t)\,dt$. By [F2] and [F3], $g$ has a minimum $c$ on $[a,b]$; [F1] makes $c>0$, so $\Phi(b)-\Phi(a)\ge c(b-a)>0$, proving strict increase. For a fixed $x$, [F2] and [F3] bound $g$ by some $M<\infty$ on $[x-1,x+1]$; whenever $|y-x|<1$, $|\Phi(y)-\Phi(x)|\le M|y-x|$, proving continuity at $x$. Since $x$ was arbitrary, $\Phi$ is continuous. [A1, F1, F2, F3, F8, F9, algebra]

2.1 The events $\{Z\le k\}$ increase to the whole space and $\{Z\le-k\}$ decrease to the empty set as positive integers $k\to\infty$. By [F1] and [F4], $\Phi(k)\to1$ and $\Phi(-k)\to0$. Given $q\in(0,1)$, choose $k$ with $\Phi(-k)<q<\Phi(k)$; [F5] on $[-k,k]$ gives $z_q$ with $\Phi(z_q)=q$, and strict increase from step 1.1 makes it unique. [F1, F4, F5, step 1.1, choose]

3.1 By [A1] and [F6], $P(Z=x)=\int_{\{x\}}g\,d\lambda=0$ for every $x$. The density $g$ is even; applying [F7] gives $\Phi(-x)=\int_x^\infty g(t)\,dt$. Since $P(Z=x)=0$, [F8] identifies this upper tail with $1-\Phi(x)$. Thus $\Phi(-x)=1-\Phi(x)$. Taking $x=z_q$ and using the uniqueness in step 2.1 gives $\Phi(-z_q)=1-q$ and $z_{1-q}=-z_q$; at $q=1/2$, this yields $z_{1/2}=0$. [A1, F1, F6, F7, F8, step 2.1, algebra] ∎