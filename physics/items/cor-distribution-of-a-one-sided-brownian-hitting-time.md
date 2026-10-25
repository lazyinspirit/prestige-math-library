---
id: cor-distribution-of-a-one-sided-brownian-hitting-time
kind: corollary
title: "Distribution of a one-sided Brownian hitting time"
status: published
origin: pipeline
deps: [cor-law-of-the-brownian-maximum, lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times, def-standard-normal-and-normal-laws, def-cumulative-distribution-function-of-a-random-variable, lem-normal-density-has-total-mass-one, def-brownian-motion, thm-substitution, thm-monotone-convergence-for-the-integral, thm-probability-law-and-distribution-function-correspondence, def-countable-choice, def-axiom-of-choice, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-extreme-value-r, thm-intermediate-value, thm-heine-borel-r, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice, let $B$ be a standard Brownian motion
[[def-brownian-motion]]. Use the everywhere-continuous, zero-start
representative of [[cor-law-of-the-brownian-maximum]]: replace paths by zero
outside a measurable probability-one event of continuity and zero start,
retaining the notation $B$. Let $a>0$ and
$\tau_a:=\inf\{t\ge0:B_t=a\}$, with $\inf\varnothing=+\infty$.
This is a measurable $[0,\infty]$-valued hitting time for this representative;
its distribution does not depend on the chosen full-measure event. With $\Phi$ the standard normal distribution
function [[def-standard-normal-and-normal-laws]]
[[def-cumulative-distribution-function-of-a-random-variable]],
$$P(\tau_a\le t)=2\left(1-\Phi\!\left(\frac{a}{\sqrt t}\right)\right)\qquad(t>0),$$
and on $t>0$ the law of $\tau_a$ has the density
$$g(t)=\frac{a}{(2\pi t^3)^{1/2}}\exp\!\left(-\frac{a^2}{2t}\right).$$
Moreover $\lim_{t\to\infty}P(\tau_a\le t)=1$, so $\tau_a$ is finite almost surely
and there is no mass at infinity, and $P(\tau_a=0)=0$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ in this everywhere-continuous zero-start representative, $a>0$ and $t>0$.

[F1] For the representative in the statement, $M_t=\sup_{[0,t]}B$ is a finite measurable random variable and $P(M_t\le x)=2\Phi(x/\sqrt t)-1$ for $x\ge0$ ([[cor-law-of-the-brownian-maximum]]). The closed-set hitting-time lemma applies to an everywhere-continuous Brownian process with its own natural filtration ([[lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times]]). Brownian motion supplies a measurable full-measure continuity and zero-start event ([[def-brownian-motion]]).

[F2] Limits of the standard normal distribution function: $\lim_{x\to+\infty}\Phi(x)=1$, $\Phi(0)=1/2$ and $\Phi$ is continuous, and $\Phi(v)-\Phi(u)=\int_u^v\varphi(x)dx$ for $u<v$; $\varphi(u)=e^{-u^2/2}/\sqrt{2\pi}$. [[def-standard-normal-and-normal-laws]] [[def-cumulative-distribution-function-of-a-random-variable]] [[lem-normal-density-has-total-mass-one]]

[F3] Substitution on compact intervals for the continuous integrand $2\varphi$, and monotone convergence for the limits at the endpoints. [[thm-substitution]] [[thm-monotone-convergence-for-the-integral]]. The compact integrals agree with their Lebesgue counterparts under Countable Choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F4] A probability measure on $\mathbb R$ is determined by its distribution function; countable choice, which AC supplies, is used there. [[thm-probability-law-and-distribution-function-correspondence]] [[def-countable-choice]] [[def-axiom-of-choice]]

[F5] Closed bounded real intervals are compact, a continuous function attains its maximum on a nonempty compact set, and the intermediate value theorem holds on real intervals ([[thm-heine-borel-r]], [[thm-extreme-value-r]], [[thm-intermediate-value]]). A nonnegative measurable density defines a measure by integration ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

## Proof

**Proof technique:** direct.

1.1 Fix the measurable full-measure event $A$ specified in the statement. Replacing the original path by zero on $A^c$ preserves every finite-dimensional law and makes every path continuous with $B_0=0$. Each coordinate remains measurable because $A$ is measurable. Two such choices agree on the intersection of their events, so the resulting measurable hitting times agree there and have the same distribution. By [F1] applied to the closed singleton $\{a\}$, $\tau_a$ is a stopping time for the chosen process's own raw natural filtration, hence an extended nonnegative measurable random variable. No stopping-time claim for the original raw filtration is used. [F1, given]

1.2 Define $g(s)=a(2\pi s^3)^{-1/2}e^{-a^2/(2s)}$ for $s>0$. For $0<\varepsilon<t$, the substitution $u=a/\sqrt s$ on $[\varepsilon,t]$, whose derivative $-a/(2s^{3/2})$ is continuous and $2\varphi$ is continuous, gives $\int_\varepsilon^t g(s)\,ds=\int_{a/\sqrt t}^{a/\sqrt\varepsilon}2\varphi(u)\,du=2\bigl(\Phi(a/\sqrt\varepsilon)-\Phi(a/\sqrt t)\bigr)$ by oriented substitution, the compact Riemann/Lebesgue bridge, and the density-integral identity for increments of $\Phi$. [F2, F3]

2.1 For $t>0$, if $\tau_a\le t$, the first hit is attained by continuity (as in the closed-set hitting lemma), so $M_t\ge a$. Conversely $M_t\ge a$ gives a time $s\in[0,t]$ with $B_s=M_t$ by [F5]; since $B_0=0<a\le B_s$, the intermediate value theorem gives a hit by time $s$. Hence $\{\tau_a\le t\}=\{M_t\ge a\}$ as exact measurable events for this representative. Continuity at zero also gives $\tau_a>0$ on every path, since $B_0=0<a$. [F1, F5, step 1.1]

3.1 The normal CDF obeys $|\Phi(v)-\Phi(u)|\le|v-u|/\sqrt{2\pi}$, by its density bound, hence is continuous. Symmetry and total mass one give $\Phi(0)=1/2$; monotone convergence of density integrals gives $\Phi(x)\to1$ as $x\to\infty$. Put $x_n=a(1-1/n)$ for $n\ge1$. The measurable events $\{M_t\le x_n\}$ increase to $\{M_t<a\}$, so [F3] and [F1] give $P(M_t<a)=\lim_n(2\Phi(x_n/\sqrt t)-1)=2\Phi(a/\sqrt t)-1=P(M_t\le a)$. Thus $P(M_t=a)=0$, and step 2.1 yields $P(\tau_a\le t)=2(1-\Phi(a/\sqrt t))$. Taking integer $t\to\infty$ and monotone convergence of the events $\{\tau_a\le t\}$ gives $P(\tau_a<\infty)=1$. [F1, F2, F3, step 2.1]

4.1 Let $\varepsilon=t/n$ in step 1.2 and let integers $n\ge2$ tend to infinity. The nonnegative integrals increase to $\int_0^t g(s)ds$, and $\Phi(a/\sqrt\varepsilon)\to1$, so $\int_0^t g(s)ds=2(1-\Phi(a/\sqrt t))=P(\tau_a\le t)$. Letting integer $t\to\infty$ now gives $\int_0^\infty g=1$. [F2, F3, step 3.1, step 1.2]

5.1 Extend $g$ by zero on $(-\infty,0]$. It is nonnegative Borel measurable, and [F5] and step 4.1 make its density measure a Borel probability measure on $\mathbb R$. To use [F4] with a real random variable, replace $\tau_a=\infty$ by the value $1$ on its measurable null event, obtaining $\widetilde\tau_a$. This leaves every finite-time distribution probability unchanged, and $\widetilde\tau_a>0$ by step 2.1. The density measure and $\widetilde\tau_a$ have CDF zero for nonpositive arguments, and the same CDF at every positive argument by step 4.1. Thus [F4] identifies the laws. In particular the original extended hitting time has density $g$ on $(0,\infty)$, no atom there or at zero, and no mass at infinity. [F4, F5, step 2.1, step 3.1, step 4.1]

6.1 The parameter $a>0$ and compact substitution bounds $0<\varepsilon<t$ ensure every denominator is positive. At $t=0$, step 2.1 gives $P(\tau_a=0)=0$. The infinity limit and total density mass were proved in steps 3.1 and 4.1. AC supplies the Countable Choice hypotheses of both the compact integration bridge and [F4], and the Brownian and hitting-time suppliers. The event equality uses the declared continuous representative throughout. [F1, F3, F4, step 2.1, step 3.1, step 4.1, step 5.1] ∎



The proof combines the Brownian maximum law with an exact continuous-path hitting identity. It computes the density integral by compact substitution, the Riemann/Lebesgue bridge and monotone limits, then identifies probability laws through their CDFs on all real arguments.
