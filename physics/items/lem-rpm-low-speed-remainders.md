---
id: lem-rpm-low-speed-remainders
kind: lemma
title: "Explicit low-speed momentum and energy remainders"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - cor-mean-value-theorem
  - thm-cauchy-mean-value
dependency_roles:
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-cauchy-mean-value: mathematical-premise
sources:
  references:
    - title: "OpenStax, University Physics Volume 3, complete textbook, Chapter 5"
      url: "https://openstax.org/books/university-physics-volume-3/pages/5-8-relativistic-momentum"
      locator: "§§5.8–5.9, Relativistic Momentum and Relativistic Energy: inertial-frame momentum, energy, mass shell and low-speed kinetic-energy expansion."
---

## Statement

Let $m,c>0$, let $0<\delta<1$, and let $v\in\mathbb R^3$ have Euclidean norm satisfying $|v|/c\le\delta$. Put

$$z:=\frac{|v|^2}{c^2},\qquad \gamma:=(1-z)^{-1/2},\qquad p:=m\gamma v,\qquad E:=\gamma mc^2.$$

Then

$$0\le\gamma-1\le\frac{z}{2(1-\delta^2)^{3/2}},\qquad 0\le\gamma-1-\frac z2\le\frac{3z^2}{8(1-\delta^2)^{5/2}},$$

and

$$|p-mv|\le\frac{m|v|^3}{2c^2(1-\delta^2)^{3/2}},\qquad 0\le E-mc^2-\frac12m|v|^2\le\frac{3m|v|^4}{8c^2(1-\delta^2)^{5/2}}.$$

If assigned SI kinematic units, $m$ is in kilograms, $c,v$ in metres per second, $p$ in kilogram metres per second and $E$ in joules. These are pointwise algebraic inequalities; they assume no equation of motion or empirical input.

## Facts & Assumptions

**Given:** Positive real parameters $m,c$, $0<\delta<1$, a vector $v\in\mathbb R^3$ with $|v|/c\le\delta$, and the definitions of $z,\gamma,p,E$ in the Statement.

[L1] For $x>0$ and $\alpha\in\mathbb R$, $(x^\alpha)'=\alpha x^{\alpha-1}$, and the positive-base real-power function is continuous and differentiable on $(0,\infty)$ ([[thm-real-power-continuity-and-derivatives]]).

[L2] The chain rule gives $(f\circ g)'(x)=f'(g(x))g'(x)$ under its differentiability hypotheses ([[thm-chain-rule]]).

[L3] If a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, its endpoint difference equals its derivative at an interior point times $b-a$ ([[cor-mean-value-theorem]]).

[L4] If two real functions are continuous on $[a,b]$ and differentiable on $(a,b)$, Cauchy's mean value theorem gives an interior point $c$ with $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$ ([[thm-cauchy-mean-value]]).

## Proof

**Proof technique:** apply the mean value theorem twice to the square-root power and Cauchy's mean value theorem to its second-order remainder.

1.1 On $[0,\delta^2]$ define $f(s)=(1-s)^{-1/2}$. Since $1-s>0$ throughout a neighborhood of that interval, [L1] and [L2] show that $f$ is continuous there, differentiable on $(0,\delta^2)$, and $f'(s)=\frac12(1-s)^{-3/2}$, $f''(s)=\frac34(1-s)^{-5/2}$. Both derivatives are positive. Differentiating the displayed powers gives $f'''(s)=\frac{15}{8}(1-s)^{-7/2}>0$ on $(0,\delta^2)$, so $f''$ is increasing there; the formula for $f''$ also shows that $f'$ is increasing. [L1, L2, algebra]

2.1 If $z=0$, then $v=0$, $\gamma=1$, $p=0$, and $E=mc^2$, so every asserted inequality holds with equality. If $z>0$, [L3] applied to $f$ on $[0,z]$ gives $\xi\in(0,z)$ with $\gamma-1=f'(\xi)z$. Since $f'(\xi)>0$ and $f'(\xi)\le f'(\delta^2)$ by the monotonicity established in step 1.1, this proves $0\le\gamma-1\le z/[2(1-\delta^2)^{3/2}]$. [given, step 1.1, L3, algebra]

3.1 For $z>0$, define $q(s)=f(s)-1-s/2$ and $g(s)=s^2$ on $[0,z]$. Cauchy's mean value theorem [L4] gives $\xi\in(0,z)$ such that $q(z)g'(\xi)=g(z)q'(\xi)$, because $q(0)=g(0)=0$. Since $g'(\xi)=2\xi>0$, this is $q(z)=z^2(f'(\xi)-1/2)/(2\xi)$. Applying [L3] to $f'$ on $[0,\xi]$ gives $\eta\in(0,\xi)$ with $f'(\xi)-f'(0)=\xi f''(\eta)$. As $f'(0)=1/2$, substitution yields $q(z)=\frac12 f''(\eta)z^2$. Thus $q(z)\ge0$ and, because $f''$ is increasing and $\eta<z\le\delta^2$, $q(z)\le\frac12 f''(\delta^2)z^2=3z^2/[8(1-\delta^2)^{5/2}]$. For $z=0$ the same bound is equality by step 2.1. [given, step 1.1, step 2.1, L3, L4, algebra]

4.1 The definitions give $|p-mv|=m|v|(\gamma-1)$ and $E-mc^2-\frac12m|v|^2=mc^2(\gamma-1-z/2)$. Applying steps 2.1 and 3.1, multiplying by the nonnegative factors $m|v|$ and $mc^2$, and substituting $z=|v|^2/c^2$ gives the two remaining inequalities. Their lower bounds follow from the nonnegativity in those same steps. [given, step 2.1, step 3.1, algebra] ∎

## Remarks

The constant depends only on the speed cutoff $\delta$. A small pointwise remainder does not by itself control trajectories over a time interval.
