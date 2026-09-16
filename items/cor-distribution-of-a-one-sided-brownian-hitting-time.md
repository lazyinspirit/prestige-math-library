---
id: cor-distribution-of-a-one-sided-brownian-hitting-time
kind: corollary
title: "Distribution of a one-sided Brownian hitting time"
status: draft
origin: pipeline
deps: [cor-law-of-the-brownian-maximum, lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times, def-standard-normal-and-normal-laws, def-cumulative-distribution-function-of-a-random-variable, lem-normal-density-has-total-mass-one, def-brownian-motion, thm-substitution, thm-monotone-convergence-for-the-integral, thm-probability-law-and-distribution-function-correspondence, def-countable-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, equation (7.4.6) after Example 7.4.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Example 2.7.1"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice, let $B$ be a standard Brownian motion
[[def-brownian-motion]], let $a>0$ and
$\tau_a:=\inf\{t\ge0:B_t=a\}$. With $\Phi$ the standard normal distribution
function [[def-standard-normal-and-normal-laws]]
[[def-cumulative-distribution-function-of-a-random-variable]],
$$P(\tau_a\le t)=2\left(1-\Phi\!\left(\frac{a}{\sqrt t}\right)\right)\qquad(t>0),$$
and on $t>0$ the law of $\tau_a$ has the density
$$g(t)=\frac{a}{(2\pi t^3)^{1/2}}\exp\!\left(-\frac{a^2}{2t}\right).$$
Moreover $\lim_{t\to\infty}P(\tau_a\le t)=1$, so $\tau_a$ is finite almost surely
and there is no mass at infinity, and $P(\tau_a=0)=0$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, $a>0$ and $t>0$.

[F1] $M_t=\sup_{[0,t]}B$ satisfies $P(M_t\le x)=2\Phi(x/\sqrt t)-1$ for $x\ge0$, with the underlying distribution function of the standard normal $\Phi$; and $\{\tau_a\le t\}=\{M_t\ge a\}$ because the path is continuous. [[cor-law-of-the-brownian-maximum]] [[lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times]] [[def-brownian-motion]]

[F2] Limits of the standard normal distribution function: $\lim_{x\to+\infty}\Phi(x)=1$, $\Phi(0)=1/2$ and $\Phi$ is continuous, with $2\varphi$ as the continuous density of $2\Phi$; $\varphi(u)=e^{-u^2/2}/\sqrt{2\pi}$. [[def-standard-normal-and-normal-laws]] [[def-cumulative-distribution-function-of-a-random-variable]] [[lem-normal-density-has-total-mass-one]]

[F3] Substitution on compact intervals for the continuous integrand $2\varphi$, and monotone convergence for the limits at the endpoints. [[thm-substitution]] [[thm-monotone-convergence-for-the-integral]]

[F4] A probability measure on $\mathbb R$ is determined by its distribution function; countable choice, which AC supplies, is used there. [[thm-probability-law-and-distribution-function-correspondence]] [[def-countable-choice]] [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F1], $P(\tau_a\le t)=P(M_t\ge a)=1-\bigl(2\Phi(a/\sqrt t)-1\bigr)=2\bigl(1-\Phi(a/\sqrt t)\bigr)$ for $t>0$ and $a>0$, which is the stated distribution function; as $t\to\infty$ one has $a/\sqrt t\to0$ and $\Phi(a/\sqrt t)\to\Phi(0)=1/2$, so the limit is $1$ and no mass escapes to infinity. [F1, F2, given]

1.2 Define $g(s)=a(2\pi s^3)^{-1/2}e^{-a^2/(2s)}$ for $s>0$. For $0<\varepsilon<t$, the substitution $u=a/\sqrt s$ on $[\varepsilon,t]$, whose derivative $-a/(2s^{3/2})$ is continuous and $2\varphi$ is continuous, gives $\int_\varepsilon^t g(s)\,ds=\int_{a/\sqrt t}^{a/\sqrt\varepsilon}2\varphi(u)\,du=2\bigl(\Phi(a/\sqrt\varepsilon)-\Phi(a/\sqrt t)\bigr)$ by the oriented substitution formula and the fact that $2\Phi$ is a primitive of $2\varphi$. [F2, F3]

2.1 Letting $\varepsilon\downarrow0$ in step 1.2, and using $\Phi(a/\sqrt\varepsilon)\to1$ together with monotone convergence for the increasing limit of the nonnegative integrand at $0$, gives $\int_0^t g(s)\,ds=2(1-\Phi(a/\sqrt t))=P(\tau_a\le t)$ for every $t>0$; in particular $\int_0^\infty g=1$. [F2, F3, step 1.1, step 1.2]

3.1 The measure on $(0,\infty)$ with density $g$, extended by zero at $0$, is a probability measure whose distribution function at $t>0$ is $\int_0^tg=P(\tau_a\le t)$; by [F4] it agrees with the law of $\tau_a$, so the law of $\tau_a$ has density $g$ on $t>0$ and no atom anywhere. [F4, step 2.1]

4.1 The endpoint cases are covered: $t>0$ is assumed throughout, $a=0$ is excluded by the hypothesis $a>0$, the limit $t\to\infty$ is step 1.1, and the value $t=0$ gives $P(\tau_a\le0)=P(B_0=a)=0$ because $B_0=0<a$ almost surely, matching $g$'s integral over the empty interval. Countable choice is used only in [F4]. [F1, F4, given, step 2.1] ∎

## Source notes

Durrett, equation (7.4.6), and Lawler, Example 2.7.1, give this first-passage law. The density is obtained by an explicit substitution followed by the distribution-function correspondence, and no differentiation of an integral with a movable endpoint is invoked.
