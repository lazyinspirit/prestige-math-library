---
id: lem-strong-wolfe-step-exists-on-a-bounded-below-ray
kind: lemma
title: "A strong Wolfe step exists on a bounded-below descent ray"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-chain-rule-for-total-derivatives
  - def-derivative
  - cor-mean-value-theorem
  - thm-infimum-property
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.1, Lemma 3.1, printed pp. 35–36 / PDF pp. 53–54: existence of Wolfe and strong Wolfe intervals."
---

## Statement

Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$, and
let $x\in D$ and $p\ne0$ satisfy $x+tp\in D$ for every $t\ge0$. Let
$\phi(t)=f(x+tp)$ and suppose $\phi'(0)<0$ and $\phi$ is bounded below on
$[0,\infty)$. For the constants $0<c_1<c_2<1/2$ of
[[def-wolfe-and-strong-wolfe-conditions]], the set of positive strong Wolfe
steps contains a nonempty open interval.

## Facts & Assumptions

**Given:** $D,f,x,p,\phi,c_1,c_2$ as in the Statement.

[F1] [[def-wolfe-and-strong-wolfe-conditions]]: $\phi(t)=f(x+tp)$; a strong Wolfe step satisfies $\phi(t)\le\phi(0)+c_1t\phi'(0)$ and $|\phi'(t)|\le c_2|\phi'(0)|$, with $0<c_1<c_2<1/2$.

[F2] [[cor-mean-value-theorem]]: if a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, then for some $c\in(a,b)$ its endpoint increment equals $f'(c)(b-a)$.

[F3] [[def-derivative]]: $\psi'(0)=\lim_{t\to0}(\psi(t)-\psi(0))/t$ when the derivative exists at $0$.

[F4] [[thm-infimum-property]]: every nonempty subset of $\mathbb R$ that is bounded below has an infimum, characterized as its greatest lower bound.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 The chain rule in [F1] makes $\phi$ continuously differentiable on a neighborhood of each finite point of $[0,\infty)$. Define $\psi(t):=\phi(t)-\phi(0)-c_1t\phi'(0)$. Then $\psi(0)=0$ and $d:=\psi'(0)=(1-c_1)\phi'(0)<0$. By [F3], $\psi(t)/t\to d$ as $t\to0$. Choose $\delta>0$ so that $\psi(t)/t<d/2<0$ for $0<t<\delta$; hence $\psi(t)<0$ there. [given, F1, F3, algebra, choose]

2.1 Since $\phi$ is bounded below and $-c_1\phi'(0)>0$, $\psi(t)\to+\infty$ as $t\to+\infty$. Thus $S:=\{t>0:\psi(t)\ge0\}$ is nonempty and bounded below by $0$, so [F4] gives $t_*:=\inf S$. Step 1.1 shows that $S$ has no points near $0$, hence $t_*>0$. Every $s\in(0,t_*)$ has $\psi(s)<0$, while the defining approximation property of the infimum gives points of $S$ arbitrarily close above $t_*$. Continuity of $\psi$ therefore forces $\psi(t_*)=0$. [given, F4, step 1.1, choose, algebra]

3.1 Every $s\in(0,t_*)$ has $\psi(s)<0$, so Armijo holds strictly throughout that interval. Apply [F2] to $\phi$ on $[0,t_*]$ to get $\xi\in(0,t_*)$ with $\phi'(\xi)=(\phi(t_*)-\phi(0))/t_*=c_1\phi'(0)$. Hence $|\phi'(\xi)|=c_1|\phi'(0)|<c_2|\phi'(0)|$, so the strong curvature inequality holds strictly at $\xi$. [given, F1, F2, step 2.1, algebra]

4.1 The strict Armijo inequality holds at every point of $(0,t_*)$, including $\xi$, and both $\phi$ and $\phi'$ are continuous there. Therefore both strict inequalities persist on some open interval about $\xi$ contained in $(0,t_*)$. Every point of that interval is a strong Wolfe step, proving the asserted nonemptiness. [step 1.1, step 2.1, step 3.1, F1] ∎
