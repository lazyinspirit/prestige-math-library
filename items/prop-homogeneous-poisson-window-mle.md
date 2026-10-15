---
id: prop-homogeneous-poisson-window-mle
kind: proposition
title: "Homogeneous Poisson rate MLE in a positive-volume window"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-window-spatial-observation
  - thm-finite-window-spatial-poisson-likelihood
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited through the window's Lebesgue measure; no further choice is used."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, Example 4.12, PDF p. 70: homogeneous finite-window Poisson maximum likelihood."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Proposition 3.8, PDF p. 34: the finite-window Poisson count and conditional point locations."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $W$ be as in [[def-finite-window-spatial-observation]] and suppose
$v=|W|>0$. Consider the homogeneous family $\lambda_\rho(x)=\rho$ with
parameter space either $[0,\infty)$ or $(0,\infty)$. For an observed
configuration with $n=\eta(W)$ occurrences, if $n>0$ the unique maximum
likelihood estimate is $\widehat\rho=n/v$. If $n=0$, the likelihood is
maximized at $\rho=0$ when zero is in the parameter space; on $(0,\infty)$ its
supremum is the boundary value at $\rho\downarrow0$ and is not attained.

## Facts & Assumptions

**Given:** $v>0$, a finite configuration $\eta$ with count $n=\eta(W)$, and
the homogeneous intensity $\lambda_\rho=\rho$.

[F1] For $\rho>0$, the log likelihood up to a parameter-independent constant
is $n\log\rho-v\rho$; for a zero event factor the likelihood is zero.
([[thm-finite-window-spatial-poisson-likelihood]])

[F2] $\log$ is differentiable on $(0,\infty)$ with derivative $1/t$, is
continuous and strictly increasing, and obeys the quotient law.
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[thm-logarithm-derivative-and-integral]])

[F3] A function continuous on a closed real interval and differentiable on
its interior satisfies the mean value theorem.
([[cor-mean-value-theorem]])

## Proof

**Given:** The hypotheses in the Statement.

1.1 Suppose $n>0$ and put $\widehat\rho=n/v>0$. For $\rho>0$ set $t=\rho/\widehat\rho$. By [F1] and the logarithm quotient law [F2], the log-likelihood difference is $\ell(\rho)-\ell(\widehat\rho)=n(\log t-t+1)$. [given, F1, F2, algebra]

1.2 Suppose $n=0$. For $\rho>0$, [F1] gives log likelihood $-v\rho$, which is strictly below $0$ and tends to $0$ as $\rho\downarrow0$. At $\rho=0$, the empty product is $1$ and the density in [[thm-finite-window-spatial-poisson-likelihood]] has log likelihood equal to its parameter-independent constant, so the normalized log likelihood value is $0$. Thus zero is the maximizer when admitted and is only a supremum when the parameter space is $(0,\infty)$. [given, F1, algebra]

2.1 Let $\psi(t)=\log t-t+1$. For each $s>0$, $\frac{\psi(s+h)-\psi(s)}{h}=\frac{\log(s+h)-\log s}{h}-1\longrightarrow\frac1s-1$ as $h\to0$, by [F2]; hence $\psi'(s)=1/s-1$. If $t>1$, apply [F3] on $[1,t]$: its intermediate point $c>1$ has $\psi'(c)<0$, so $\psi(t)<\psi(1)=0$. If $0<t<1$, apply [F3] on $[t,1]$: its intermediate point has $\psi'(c)>0$, so again $\psi(t)<\psi(1)=0$. Equality holds at $t=1$. Therefore [F1] and step 1.1 give the unique maximum at $\rho=\widehat\rho$ among positive rates; at $\rho=0$ the observed nonempty configuration has likelihood zero. [given, step 1.1, F1, F2, F3, algebra]

3.1 Steps 1.1 and 2.1 prove the positive-count claim, and step 1.2 proves the zero-count boundary claim. [step 1.1, step 2.1, step 1.2] ∎