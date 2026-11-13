---
id: lem-author-062cb22743bb-free-no-return
kind: lemma
domain: mathematics
title: An outward Euclidean exit cannot return
status: draft
deps:
  - prop-se-generalized-ray-contract
  - math:thm-compact-subset-of-a-hausdorff-space-is-closed
dependency_roles:
  prop-se-generalized-ray-contract: mathematical-premise
  math:thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $d\ge2$ and let $\Theta\subset\mathbb R^d$ be a compact obstacle whose exterior $\Omega=\mathbb R^d\setminus\Theta$ has smooth one-sided boundary. Fix $R>0$ with $\Theta\subset B_R$, where $B_R=\{z\in\mathbb R^d:|z|<R\}$ and $\overline B_R=\{z\in\mathbb R^d:|z|\le R\}$; thus the compact obstacle is contained in the open ball. Quantify over complete unit-speed generalized rays $x:\mathbb R\to\overline\Omega$ in the stationary Euclidean generalized-ray convention. In particular, each ray is defined for all forward times. If $|x(0)|\le R$ and $|x(\tau)|>R$ at some $\tau>0$, then $|x(t)|>R$ for every $t\ge\tau$ and $|x(t)|\to\infty$ as $t\to\infty$.

More precisely, suppose there is $L>0$ such that every complete admissible ray $y$ with $|y(0)|\le R$ has a time $s\in(0,L]$ satisfying $|y(s)|>R$. This is the common exterior-hitting bound. Then every such $y$ remains outside $\overline B_R$ for all $t\ge L$ and tends to spatial infinity. Every complete ray initially outside $\overline B_R$ also eventually remains outside $\overline B_R$ and tends to spatial infinity. No common time for this last assertion, measured from the initial point outside the ball, is claimed.

## Statement references

[[prop-se-generalized-ray-contract]]

[[math:thm-compact-subset-of-a-hausdorff-space-is-closed]]

## Facts & Assumptions

[F1] The convention of [[prop-se-generalized-ray-contract]] supplies continuous spatial projections of complete rays on $\mathbb R$. In the Euclidean interior its Hamilton rule for $p=-\tau^2+|\xi|^2$ keeps $\tau$ and $\xi$ constant, with $dt/ds=-2\tau$ and $dx/ds=2\xi$. A nonzero characteristic covector has $|\xi|=|\tau|>0$, so physical-time velocity is the constant unit vector $-\xi/\tau$. Its local rules are stationary, so $t\mapsto x(q+t)$ is again a complete admissible ray for every real $q$. These are properties of the specified complete curves; no extension of an arbitrary ray segment is used.

[F2] A compact subset of Euclidean space is closed by [[math:thm-compact-subset-of-a-hausdorff-space-is-closed]], since Euclidean space is Hausdorff (distinct points have disjoint balls of radius one third their distance). Hence $\Omega$ is open. Every point with $|z|\ge R$ is outside $\Theta$ and has an obstacle-free neighborhood in $\Omega$. Smoothness of this exterior is assumed explicitly, as required by the generalized-ray convention.

## Proof

**Given:** The smooth compact-obstacle setting and complete rays specified above, and the exterior-hitting bound when proving the consequence. **Goal:** No return after exit, divergence to infinity, and eventual escape for all initial locations.

1.1 Fix a ray with $|x(0)|\le R$ and $|x(\tau)|>R$. By continuity, the connected component of $\{t>0:|x(t)|>R\}$ containing $\tau$ is an interval $(a,b)$ with $0\le a<\tau<b\le\infty$, and $|x(a)|=R$. Indeed, if $a>0$ an exterior value at $a$ would extend the component to the left, whereas a strictly interior value would contradict the exterior points immediately to its right; if $a=0$, continuity and $|x(0)|\le R$ give the same equality. On $(a,b)$ there is no obstacle boundary. The interior rule gives a single constant unit velocity $v$ on this interval: its locally constant velocities agree on overlapping interior intervals, and the interval is connected. Taking the limit at $a$ gives $x(a+s)=x(a)+sv$ for $0<s<b-a$. Expanding the squared norm for arbitrarily small positive $s$ shows $x(a)\cdot v\ge0$, since a negative value would give $|x(a+s)|^2=R^2+2s\,x(a)\cdot v+s^2<R^2$ for sufficiently small $s$. [given, F1, F2, algebra]

2.1 If $b<\infty$, the ray is defined and continuous at $b$ by completeness. The line formula from step 1.1 gives $|x(b)|^2=R^2+2(b-a)x(a)\cdot v+(b-a)^2>R^2$, contradicting that $b$ is the right endpoint of the exterior component: continuity would put a whole neighborhood of $b$ in the same exterior set. Thus $b=\infty$. The same formula gives $|x(a+s)|^2\ge R^2+s^2$ for all $s>0$, proving both no return and divergence to infinity. This is an argument about an already complete ray, not a global existence or continuation theorem. [F1, step 1.1, algebra]

3.1 Assume the stated common exterior-hitting bound. For any complete ray $y$ initially in $\overline B_R$, take its exterior-hitting time $s\in(0,L]$. Steps 1.1 and 2.1 imply $|y(t)|>R$ for every $t\ge s$, hence for every $t\ge L$, and $|y(t)|\to\infty$. The bound is quantified over complete rays themselves, including every admissible branch at glancing, so no uniqueness of a ray from its initial state is needed. [given, step 1.1, step 2.1]

4.1 Let $x$ instead start outside $\overline B_R$. If it never enters $\overline B_R$ at a nonnegative time, its whole forward path lies in the interior of $\Omega$, so $x(t)=x(0)+tv$ for a fixed unit vector $v$; the inequality $|x(0)+tv|\ge t-|x(0)|$ proves divergence. Otherwise let $q$ be its first entrance time into $\overline B_R$. Continuity gives $q>0$, $q<\infty$ and $|x(q)|=R$. Stationarity makes $y(t)=x(q+t)$ a complete admissible ray initially in $\overline B_R$. Step 3.1 applies, so $x$ remains outside for all $t\ge q+L$ and tends to infinity. This proves the asserted consequence for every initial location. [given, F1, F2, step 3.1] ∎
