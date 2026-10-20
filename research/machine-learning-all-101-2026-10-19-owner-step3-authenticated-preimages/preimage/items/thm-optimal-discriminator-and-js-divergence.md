---
id: thm-optimal-discriminator-and-js-divergence
kind: theorem
title: Optimal discriminator and Jensen–Shannon divergence in the unrestricted GAN game
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-gan-minimax-objective
  - def-gan-jensen-shannon-divergence
  - lem-gan-jensen-shannon-divergence-nonnegative-and-equality
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-coordinatewise-measurability-into-r-n
  - thm-composition-with-borel-functions-preserves-measurability
proof_strategy: direct
aliases: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
    - title: "Yingzhen Li, Lecture notes on generative adversarial networks (GANs), Deep Learning (Winter 2022, Imperial College London)"
      url: "https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $P,Q$ be probability measures with finite-valued nonnegative measurable densities $p,q$ relative to $\mu$, normalized by $\int p\,d\mu=\int q\,d\mu=1$. For every measurable discriminator $D:X\to[0,1]$, define
$$
V(D;P,Q)=\int p\ln D\,d\mu+\int q\ln(1-D)\,d\mu,
$$
extending $\ln0=-\infty$ and making each zero-density term $0\cdot(-\infty)$ equal to $0$. Let $C(P,Q)$ be the supremum of $V(D;P,Q)$ over all such $D$. Put $m=(p+q)/2$, $r=p/m$ and $s=q/m$ where $m>0$, set $r=s=0$ where $m=0$, define $\phi(0)=0$ and $\phi(t)=t\ln t$ for $t>0$, and set $\operatorname{JS}_\mu(P,Q)=\tfrac12\int m\phi(r)\,d\mu+\tfrac12\int m\phi(s)\,d\mu$. Then the measurable discriminator
$$
D^*(x)=\begin{cases}\dfrac{p(x)}{p(x)+q(x)},&p(x)+q(x)>0,\\[4pt]\dfrac12,&p(x)+q(x)=0\end{cases}
$$
maximizes $V$, and $C(P,Q)=-\ln4+2\operatorname{JS}_\mu(P,Q)$. Consequently $C(P,Q)\ge-\ln4$, with equality if and only if $P=Q$. Over the unrestricted class of probability densities, equality of the generator law with the data law is the unique global distribution optimum. This identity does not assert convergence of finite neural alternating optimization.

## Statement references

[[def-gan-minimax-objective|GAN minimax objective and density domain]]

[[def-gan-jensen-shannon-divergence|Density-defined Jensen–Shannon divergence]]

[[lem-gan-jensen-shannon-divergence-nonnegative-and-equality|Jensen–Shannon nonnegativity and equality]]

[Goodfellow et al., §4.1, Proposition 1, Theorem 1, equations (2)–(6), complete 9-page paper](https://arxiv.org/pdf/1406.2661)

[Li, §1.2, equations (9)–(11), complete 6-page lecture note](https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf)

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, probability measures $P,Q$ with finite-valued nonnegative measurable densities $p,q$, and a measurable discriminator $D:X\to[0,1]$.

[F1] [[def-gan-minimax-objective]]: $V(D;P,Q)=-\int p(-\ln D)\,d\mu-\int q(-\ln(1-D))\,d\mu$, where $0\cdot(+\infty)=0$, and $C(P,Q)$ is the supremum over every measurable $D:X\to[0,1]$.

[F2] [[def-gan-jensen-shannon-divergence]]: with $m=(p+q)/2$, $r=p/m$, $s=q/m$ on $m>0$ and $r=s=0$ otherwise, $\operatorname{JS}_\mu(P,Q)=\tfrac12\int m\phi(r)\,d\mu+\tfrac12\int m\phi(s)\,d\mu$.

[F3] [[lem-gan-jensen-shannon-divergence-nonnegative-and-equality]]: the two integrands $m\phi(r)$ and $m\phi(s)$ are integrable, and $\operatorname{JS}_\mu(P,Q)$ is finite and nonnegative, with equality exactly when $P=Q$.

[F4] [[thm-logarithm-derivative-and-integral]]: $\ln$ is differentiable on $(0,\infty)$ with derivative $1/t$.

[F5] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing, $\ln1=0$, and $\ln(xy)=\ln x+\ln y$ for $x,y>0$.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the Lebesgue integral is linear on integrable functions.

[F8] [[thm-coordinatewise-measurability-into-r-n]]: a map into $\mathbb R^2$ is measurable if its two coordinates are measurable.

[F9] [[thm-composition-with-borel-functions-preserves-measurability]]: composing a measurable map with a Borel map preserves measurability.

[F10] [[thm-chain-rule]]: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $(f\circ g)'(c)=f'(g(c))g'(c)$.

[F11] [[thm-algebra-of-derivatives]]: sums and scalar multiples of differentiable functions are differentiable, with the sum and scalar-multiple derivative formulas.

[F12] [[cor-differentiable-implies-continuous]]: a function differentiable at every point of an open interval is continuous at every point of that interval.

[F13] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable on its interior has a point where its derivative equals the average rate of change across the interval.

## Proof

1.1 Define $F:[0,\infty)^2\to[0,1]$ by $F(a,b)=a/(a+b)$ when $a+b>0$ and $F(0,0)=1/2$. It is continuous on the Borel set $\{a+b>0\}$ and constant on its singleton complement, hence Borel. By [F8], $x\mapsto(p(x),q(x))$ is measurable, and [F9] makes $D^*=F(p,q)$ measurable. [F8, F9, construct]

1.2 Fix $x$ and write $a=p(x)$ and $b=q(x)$. If $a,b>0$, the function $f(y)=a\ln y+b\ln(1-y)$ on $0<y<1$ is differentiable with $f'(y)=a/y-b/(1-y)=(a-(a+b)y)/(y(1-y))$: the derivative of $1-y$ is $-1$ by its difference quotient, [F4] differentiates $\ln$, [F10] applies the chain rule, and [F11] gives the sum and scalar rules. The denominator is positive; the numerator is positive for $y<y^*:=a/(a+b)$ and negative for $y>y^*$. By [F12], $f$ is continuous on every closed subinterval of $(0,1)$. For any $y\in(0,y^*)$, [F13] on $[y,y^*]$ gives $c\in(y,y^*)$ with $f(y^*)-f(y)=f'(c)(y^*-y)>0$. For any $y\in(y^*,1)$, [F13] on $[y^*,y]$ gives $c\in(y^*,y)$ with $f(y)-f(y^*)=f'(c)(y-y^*)<0$. At $y=0,1$ the payoff is $-\infty$. If $a=0<b$, then $f(y)=b\ln(1-y)\le0=f(0)$, with equality at $y=0$. If $b=0<a$, then $f(y)=a\ln y\le0=f(1)$, with equality at $y=1$. If $a=b=0$, every $y$ gives value $0$. In all four cases, $D^*(x)$ maximizes the pointwise payoff. [given, F4, F5, F10, F11, F12, F13, algebra]

2.1 For any measurable $D$, step 1.2 gives the pointwise loss inequality $p(-\ln D)+q(-\ln(1-D))\ge p(-\ln D^*)+q(-\ln(1-D^*))$, with zero-density endpoint terms interpreted as in [F1]. Monotonicity [F6] of the nonnegative integral therefore gives $V(D;P,Q)\le V(D^*;P,Q)$. Since $D^*$ is measurable by step 1.1, the supremum is attained and $C(P,Q)=V(D^*;P,Q)$. [F1, F6, step 1.1, step 1.2]

3.1 On $m>0$, one has $p=mr$, $q=ms$, $D^*=r/2$ and $1-D^*=s/2$. Using $0\ln0=0$ when $r=0$ or $s=0$, the pointwise optimized payoff is $m\phi(r)+m\phi(s)-m(r+s)\ln2=m\phi(r)+m\phi(s)-2m\ln2$. On $m=0$, both densities and all displayed products are zero, so the same identity holds. The first two terms are integrable by [F3]; [F1] and [F7] give $\int m\,d\mu=1$. Hence [F7], [F2] and $\ln4=2\ln2$ give $C(P,Q)=2\operatorname{JS}_\mu(P,Q)-\ln4$. [F1, F2, F3, F7, step 2.1, algebra]

4.1 By [F3], $\operatorname{JS}_\mu(P,Q)\ge0$, and it vanishes exactly when $P=Q$. Step 3.1 therefore gives $C(P,Q)\ge-\ln4$ with equality exactly at $P=Q$. The unrestricted density class contains the data law itself, so this value is attained there and no other generator law attains it. The argument establishes only the distribution-space optimum stated here. [F3, step 3.1, algebra] ∎
