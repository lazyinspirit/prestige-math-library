---
id: thm-harnack-inequality-on-a-ball
kind: theorem
title: "Harnack inequality on a ball"
status: draft
origin: pipeline
deps: [cor-ball-mean-value-property-for-harmonic-functions, lem-sphere-and-ball-measures-scale]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Lemma 5 and Exercise 11, p.8"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.22 local comparison proof, p.31"
---

## Statement

Let $n\ge2$, $R>0$, and let $u\ge0$ be harmonic on $B_R(a)\subset\mathbb R^n$. For every $x\in B_R(a)$,
$$u(x)\le\left(\frac R{R-|x-a|}\right)^n u(a).$$
For $0\le r<R$, set $m=\lceil4r/(R-r)\rceil+1$ and $C=2^{nm}$. Then $C^{-1}u(a)\le u(x)\le Cu(a)$ whenever $|x-a|\le r$. No trace on $\partial B_R(a)$ is assumed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a harmonic function, the value at a center equals its ball average whenever the closed ball is contained in its open domain. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F2] Ball volume is $|B_s|=\omega_{n-1}s^n/n$ with $0<\omega_{n-1}<\infty$. ([[lem-sphere-and-ball-measures-scale]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d=|x-a|$ and $d<s<R$. The closed ball of radius $s-d$ centered at $x$ lies in $B_R(a)$, and its open ball lies in $B_s(a)$. Nonnegativity and the ball mean property yield $u(x)\le |B_{s-d}|^{-1}\int_{B_s(a)}u=(s/(s-d))^n u(a)$. [F1, F2, given]

2.1 Let $s\uparrow R$ to obtain the first inequality. It is also valid for $x=a$, with equality. No integral at radius $R$ is needed. [step 1.1, algebra]

3.1 For $|x-a|\le r<R$, divide the segment from $a$ to $x$ into $m$ equal steps. Each has length at most $(R-r)/4$. Every segment point centers a ball of radius $\rho=(R-r)/2$ inside $B_R(a)$. Apply the first inequality from each endpoint of a step to the other, using these radius-$\rho$ balls: either value is at most $2^n$ times the other. Multiplying along the $m$ steps proves both comparisons with $C$. This uses no division by a value of $u$, so also covers $u(a)=0$. [step 2.1, algebra]

4.1 An additional consequence is Gantumur’s growth estimate. If an entire harmonic $u$ satisfies $u(x)\ge-p(|x|)$ for a nonnegative nondecreasing function $p$, fix $r=|x|>0$ and apply the first inequality to $u+p(2r)\ge0$ on $B_{2r}(0)$. It gives $u(x)\le2^n(u(0)+p(2r))-p(2r)\le2^n(u(0)+p(2r))$. At $x=0$ the sharper expression after subtracting $p(0)$ gives the same conclusion, since $u(0)+p(0)\ge0$. [step 2.1, algebra] ∎
