---
id: cor-residue-quotient-simple-zero
kind: corollary
title: "Residues of p over q at a simple zero of q"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-residue-simple-pole, lem-continuous-function-holomorphic-off-a-point-is-holomorphic, cor-complex-differentiability-implies-continuity, thm-algebra-of-complex-derivatives]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Statement

Let $p$ and $q$ be holomorphic near $a$, and suppose $q(a)=0$ and $q'(a)\ne0$.
Then

$$\operatorname{Res}\!\left(\frac{p}{q},a\right)=\frac{p(a)}{q'(a)}.$$

## Facts & Assumptions

**Given:** Holomorphic functions $p$ and $q$ near $a$, with $q(a)=0$ and $q'(a)\ne0$.

[L1] If a function has a simple pole at $a$, its residue is the limit of $(z-a)f(z)$ ([[lem-residue-simple-pole]]).

[L2] A function continuous at $a$ and holomorphic off $a$ is holomorphic at $a$ ([[lem-continuous-function-holomorphic-off-a-point-is-holomorphic]]).

[L3] Holomorphic functions are continuous, and quotient and reciprocal rules hold where the denominator is nonzero ([[cor-complex-differentiability-implies-continuity]], [[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Define $$h(z):=\begin{cases}\dfrac{q(z)}{z-a},&z\ne a,\\[6pt] q'(a),&z=a.\end{cases}$$ Because $q'(a)=\lim_{z\to a}(q(z)-q(a))/(z-a)$ and $q(a)=0$, the function $h$ is continuous at $a$ and holomorphic away from $a$; [L2] therefore makes $h$ holomorphic near $a$. [given, L2]

2.1 Step 1.1 gives $q(z)=(z-a)h(z)$ and $h(a)=q'(a)\ne0$, so shrinking the neighbourhood if necessary makes $h$ nonzero there. Hence $k:=p/h$ is holomorphic near $a$ by [L3], and on the punctured neighbourhood one has $(p/q)(z)=k(z)/(z-a)$. [step 1.1, L3]

2.2 If $p(a)=0$, define $$s(z):=\begin{cases}\dfrac{p(z)}{z-a},&z\ne a,\\[6pt] p'(a),&z=a.\end{cases}$$ The same argument as in step 1.1, using that $p$ is holomorphic and $p(a)=0$, shows that $s$ is holomorphic near $a$. Then step 1.1 gives $$\frac{p(z)}{q(z)}=\frac{(z-a)s(z)}{(z-a)h(z)}=\frac{s(z)}{h(z)}$$ on the punctured neighbourhood, so $p/q$ is holomorphic at $a$ and its residue there is $0=p(a)/q'(a)$. [step 1.1, L2, L3]

3.1 If $p(a)\ne0$, then $k(a)=p(a)/h(a)\ne0$, so step 2.1 makes $p/q$ a simple pole at $a$. Applying [L1] gives $$\operatorname{Res}\!\left(\frac{p}{q},a\right)=\lim_{z\to a}(z-a)\frac{p(z)}{q(z)}=\lim_{z\to a}k(z)=k(a)=\frac{p(a)}{q'(a)}.$$ [step 2.1, L1, L3]

4.1 Steps 3.1 and 2.2 cover the cases $p(a)\ne0$ and $p(a)=0$, so in all cases $$\operatorname{Res}\!\left(\frac{p}{q},a\right)=\frac{p(a)}{q'(a)}.$$ [step 3.1, step 2.2] ∎
