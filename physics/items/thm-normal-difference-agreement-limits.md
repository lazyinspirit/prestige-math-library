---
id: thm-normal-difference-agreement-limits
kind: theorem
title: "Normal differences have limits at their central quantiles"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-method-agreement-and-limits
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - lem-probability-measure-basic-identities
  - def-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-integral-over-a-null-set-vanishes
  - thm-exponential-definition-equivalence
  - thm-derivative-of-exponential
  - cor-mean-value-theorem
  - thm-substitution
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-intermediate-value
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. M. Bland and D. G. Altman, Statistical methods for assessing agreement between two methods of clinical measurement, Lancet 1986; 327(8476):307–310, complete author-hosted reproduction"
      url: https://www-users.york.ac.uk/~mb55/meas/ba.pdf
    - title: "M. Bland, An Introduction to Medical Statistics, 4th ed., Oxford University Press 2015, §20.5"
      url: https://faculty.ksu.edu.sa/sites/default/files/An-Introduction-to-Medical-Statistics-Martin-Bland.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume the Axiom of Choice. Use $D$, $\mu_D$, and $\sigma_D$ from
[[def-method-agreement-and-limits]], and suppose the law of $D$ is
$N(\mu_D,\sigma_D^2)$ with $\sigma_D\ge0$. Put
$$\Phi(x):=N(0,1)((-\infty,x]),\qquad z_{.975}:=\inf\{x\in\mathbb R:\Phi(x)\ge .975\}.$$
For $D$, put $F_D(x):=\mathbb P(D\le x)$ and, for $0<p<1$, define the lower
$p$-quantile by
$$q_p(D):=\inf\{x\in\mathbb R:F_D(x)\ge p\}.$$
Then $z_{.975}$ is the unique real number with $\Phi(z_{.975})=.975$, and
$z_{.975}>0$. The exact central normal quantiles satisfy
$$q_{.025}(D)=\mu_D-z_{.975}\sigma_D,\qquad q_{.975}(D)=\mu_D+z_{.975}\sigma_D.$$
If $\sigma_D>0$, the closed interval
$[q_{.025}(D),q_{.975}(D)]$ has probability $0.95$. If $\sigma_D=0$, both
quantiles equal $\mu_D$ and the singleton has probability $1$. Thus
$\mu_D\pm1.96\sigma_D$ is the customary rounded display; the exact endpoints
use $z_{.975}$.

## Facts & Assumptions

**Given:** AC; a square-integrable paired difference $D=A-B$ under a declared probability model; the law identity $\mathcal L(D)=N(\mu_D,\sigma_D^2)$ with $\sigma_D\ge0$; $F_D(x)=\mathbb P(D\le x)$; and the definitions of $\Phi$, $z_{.975}$, and $q_p(D)$ in the Statement.

[A1] The Axiom of Choice says that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] Assume AC. The standard normal law has density $\phi(t)=e^{-t^2/2}/\sqrt{2\pi}$, and $N(m,\sigma^2)$ is the law of $x\mapsto m+\sigma x$ under $N(0,1)$ for $\sigma\ge0$; when $\sigma=0$, $N(m,0)=\delta_m$. [[def-standard-normal-and-normal-laws]]

[F2] Under AC, $\phi$ is positive and Borel measurable on $\mathbb R$ and has Lebesgue integral one. [[lem-normal-density-has-total-mass-one]]

[F3] The Axiom of Countable Choice says every sequence of nonempty sets has a choice sequence. [[def-countable-choice]]

[F4] A one-dimensional box with equal endpoints has Lebesgue measure zero; the box theorem assumes countable choice. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] The nonnegative integral over a measurable null set is zero. [[cor-integral-over-a-null-set-vanishes]]

[F6] The real exponential maps $\mathbb R$ into $(0,\infty)$. [[thm-exponential-definition-equivalence]]

[F7] The real exponential is smooth with derivative equal to itself. [[thm-derivative-of-exponential]]

[F8] The mean value theorem gives $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$ when $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$. [[cor-mean-value-theorem]]

[F9] Probability measures are continuous from below and, for decreasing events, continuous from above. [[lem-probability-measure-basic-identities]]

[F10] For a differentiable change of variable on a compact interval and a continuous integrand, the oriented integral obeys the substitution formula. [[thm-substitution]]

[F11] The paired difference is $D=A-B$, with bias $\mu_D=\mathbb E[D]$ and spread $\sigma_D=\sqrt{\operatorname{Var}(D)}$. [[def-method-agreement-and-limits]]

[F12] A continuous real function on a closed bounded interval attains every value between its endpoint values; the constructive theorem uses no additional choice principle. [[thm-intermediate-value]]

[F13] The nonnegative integral is monotone and homogeneous for positive scalars ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F14] A continuous real function on a compact nondegenerate interval is bounded and Riemann integrable. [[thm-continuous-implies-integrable]]

[F15] Under countable choice, a bounded Riemann integrable function on a compact interval has the same Lebesgue and Riemann integrals. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

## Proof

**Proof technique:** direct.

1.1 AC in [A1] applies to the normal-law construction [F1]. It also supplies countable choice: for any sequence of nonempty sets, apply AC to the family of its values and compose the resulting choice function with the sequence, which is the property in [F3]. Thus the countable-choice hypothesis in [F4] is available. Taking the one-dimensional box with equal endpoints $x=x$ in [F4] gives $\lambda(\{x\})=0$; the density in [F1] is nonnegative measurable by [F2], so [F5] gives $N(0,1)(\{x\})=0$. Thus the standard normal law has no atoms. [A1, F1, F2, F3, F4, F5, given, construct]

1.2 For $x<y$, probability subtraction and the density definition give $\Phi(y)-\Phi(x)=N(0,1)((x,y])=\int_{(x,y]}\phi\,d\lambda$. Let $M=\max\{|x|,|y|\}$. Positivity [F6], derivative [F7], and the mean value theorem [F8] show that the exponential is increasing. Hence on $[x,y]$, $\alpha:=e^{-M^2/2}/\sqrt{2\pi}\le\phi(t)\le\beta:=1/\sqrt{2\pi}$, with $\alpha>0$. By [F4, F13], $0<\alpha(y-x)\le\Phi(y)-\Phi(x)\le\beta(y-x)$. Therefore $\Phi$ is strictly increasing and continuous. [F1, F2, F4, F6, F7, F8, F9, F13, algebra]

2.1 By [F9], $\Phi(n)\to1$ and $\Phi(-n)\to0$ as $n\to\infty$. The density is continuous by [F7] and even. On each compact interval below, [F14, F15] identify its Riemann and Lebesgue integrals, using countable choice from step 1.1. For $n>|x|$, substitution $u=-t$ in [F10] gives $\int_{-n}^{-x}\phi(t)\,dt=\int_x^n\phi(u)\,du$. Passing to the tail limits gives $\Phi(-x)=\mathbb P(Z\ge x)$ for $Z\sim N(0,1)$. By the no-atom result in step 1.1, $\mathbb P(Z\ge x)=1-\Phi(x)$, so $\Phi(-x)=1-\Phi(x)$ and $\Phi(0)=1/2$. [F1, F7, F9, F10, F14, F15, step 1.1, step 1.2, algebra]

3.1 By step 2.1, choose an integer $b>0$ with $\Phi(b)>.975$, while $\Phi(0)=1/2<.975$. Step 1.2 makes $\Phi$ continuous on the finite closed interval $[0,b]$, so [F12] gives $z\in(0,b)$ with $\Phi(z)=.975$. Strict increase from step 1.2 makes $z$ unique, and step 2.1 gives $\Phi(-z)=.025$. Strict increase makes these the unique lower quantiles at those levels, so $z=z_{.975}$, the set $\{x:\Phi(x)\ge.975\}$ has infimum $z$, and the set $\{x:\Phi(x)\ge.025\}$ has infimum $-z$. [F12, step 1.2, step 2.1, choose, algebra]

4.1 If $\sigma_D>0$, [F1] gives $F_D(x)=\Phi((x-\mu_D)/\sigma_D)$, since $\mu_D+\sigma_D t\le x$ exactly when $t\le(x-\mu_D)/\sigma_D$. The increasing affine change of variable carries the quantiles from step 3.1 to $\mu_D-z_{.975}\sigma_D$ and $\mu_D+z_{.975}\sigma_D$. By [F1] and step 1.1, this affine image of the standard normal law has no atoms. The endpoint CDF values are $.025$ and $.975$, so the closed interval between them has probability $.975-.025=.95$, as stated. [F1, F11, step 1.1, step 3.1, algebra]

5.1 If $\sigma_D=0$, [F1] gives $N(\mu_D,0)=\delta_{\mu_D}$. Its distribution function is $0$ below $\mu_D$ and $1$ at or above $\mu_D$, so both lower quantiles are $\mu_D$ and the singleton has probability $1$. This is exactly the formula in the Statement with $\sigma_D=0$. [F1, F11, algebra] ∎
