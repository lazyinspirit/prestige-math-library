---
id: ex-ip-inverse-coordinate-credible-interval-undercoverage
kind: example
title: A proper Gaussian prior yields a credible interval with undercoverage
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-credible-set-and-frequency-coverage
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - thm-intermediate-value
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: AC is inherited through the standard-normal probability-law supplier; no additional choice principle is used.
---

## Example

Assume AC. Observe $Y=\theta+Z$ with fixed truth $\theta\in\mathbb R$, $Z\sim N(0,1)$, and proper prior $\theta\sim N(0,1)$. Let $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ and $\Phi(y)=\int_{-\infty}^y\phi(x)\,dx$, let $z>0$ be the unique number satisfying $\Phi(z)=0.975$, and put $r=z/\sqrt2$. The posterior is $N(Y/2,1/2)$, so the central interval $I(Y)=[Y/2-r,Y/2+r]$ has posterior mass exactly $0.95$ for every $Y$. At the fixed truth $\theta_*=2r+1$, its frequentist coverage is $P\{1\le Z\le4r+1\}<0.95$.

## Facts & Assumptions

**Given:** AC and the one-dimensional normal likelihood and proper normal prior in the Example, with $z=\Phi^{-1}(0.975)$ and $r=z/\sqrt2$.

[A1] AC states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] [[def-ip-credible-set-and-frequency-coverage]]: posterior mass is computed under the data-indexed posterior kernel, while frequentist coverage is the fixed-truth sampling probability of set membership.

[F2] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has a positive symmetric standard normal density, and $N(m,\sigma^2)$ is its affine image under $x\mapsto m+\sigma x$.

[F3] If $f$ is continuous on a closed interval $[a,b]$, then every value between $f(a)$ and $f(b)$ equals $f(c)$ for some $c\in[a,b]$. [[thm-intermediate-value]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 Under [A1], the standard normal probability law of [F2] is supplied. Its density $\phi$ is positive and symmetric and integrates to one, so $\Phi$ is continuous and strictly increasing, with $\Phi(0)=1/2$ and $\Phi(y)\to1$ as $y\to\infty$. Choose $B>0$ with $\Phi(B)>0.975$. By [F3] on $[0,B]$, there is a unique $z>0$ with $\Phi(z)=0.975$. [A1, F2, F3, given, choose]

1.2 The prior density times likelihood is proportional to $\exp\{-\tfrac12[\theta^2+(Y-\theta)^2]\}=\exp\{-(\theta-Y/2)^2\}$ times a factor independent of $\theta$. Normalization gives posterior law $N(Y/2,1/2)$. [A1, F2, given, algebra]

1.3 Under the fixed truth $\theta_*=2r+1$, write $Y=\theta_*+Z$. The event $\theta_*\in I(Y)$ is equivalent to $|Z-\theta_*|\le2r$, hence to $1\le Z\le4r+1$. [F1, F2, given, algebra]

2.1 The interval membership graph is $\{(Y,\theta):|\theta-Y/2|\le r\}$, the inverse image of the closed interval $[-r,r]$ under a continuous map. It is closed, hence Borel, so the sampling membership event is measurable. [F1, given, step 1.1, algebra]

2.2 Under that posterior, $(\theta-Y/2)/\sqrt{1/2}$ is standard normal. The interval radius $r=z/\sqrt2$ therefore gives posterior mass $\Phi(z)-\Phi(-z)=0.975-0.025=0.95$ for every observed $Y$. [F1, F2, given, step 1.1, step 1.2, algebra]

3.1 Since the standard normal density is positive and symmetric, $P(1\le Z\le4r+1)<P(Z\ge0)=1/2<0.95$. Thus the interval has posterior mass $0.95$ but frequentist coverage below $0.95$ at $\theta_*$. [F2, step 2.2, step 1.3, algebra] ∎

## Remarks

A separate one-observation Bernoulli example with a uniform prior has zero coverage at the truth $\theta=0.005$; that conclusion is specific to its Bernoulli likelihood and prior. The Gaussian calculation above uses a different proper prior and sampling law.

## Remarks references

[[ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage|Posterior credibility does not ensure nominal frequentist coverage in the stated Bernoulli model.]]
