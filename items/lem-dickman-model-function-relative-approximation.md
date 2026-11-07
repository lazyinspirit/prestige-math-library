---
id: lem-dickman-model-function-relative-approximation
kind: lemma
title: Relative Dickman model-function approximation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
proof_strategy: direct
axiom_use: No choice axiom is used; the displayed model is a finite sum and compact integral.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-dickman-uniform-backward-saddle-ratio
- lem-dickman-saddle-parameter-and-central-gaussian-estimate
- lem-dickman-saddle-inversion-and-outer-tail
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-ftc-second-part
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Lemma 3.1 and equation 3.3, printed p. 431. The compact-integral estimate is supplied locally.
---

## Statement

Let $y\ge e^{10}$, $x=y^u$, $u\ge2$, $v=\log y$, and let $\xi=\xi(u)$ be the positive solution of $e^\xi=1+u\xi$. Assume $\xi\le v/2$. Define
$$\Lambda(x,y)=x\sum_{1\le n\le x}\frac{\rho(u-\log n/v)}n-xv\int_0^u\rho(u-w)\lfloor y^w\rfloor e^{-vw}dw.$$
Then, with an absolute implied constant,
$$\Lambda(x,y)=x\rho(u)\left(1+O\!\left(\frac{\xi}{v}\right)\right).$$
The sum includes the integer endpoint $n=x$. The model is explicitly defined by a finite sum and a compact ordinary integral; no claim about $\Psi(x,y)$ is made.

## Facts & Assumptions

**Given:** $x,y,u,v,\xi$ satisfying the Statement.

[F1] For $0\le a\le u$, $\rho(u-a)\le C\rho(u)e^{a\xi(u)}$. [[lem-dickman-uniform-backward-saddle-ratio]]

[F2] For $u\ge2$, $\log u<\xi(u)<2\log u$ and $u/2\le V(u)\le u$. [[lem-dickman-saddle-parameter-and-central-gaussian-estimate]]

[F3] The full saddle estimate gives $\rho(u)=\exp(\gamma-u\xi+I(\xi))(2\pi V(u))^{-1/2}(1+O(u^{-1/5}))$, with $I(\xi)\ge0$. [[lem-dickman-saddle-inversion-and-outer-tail]]

[F4] $\rho$ is continuous and positive, equals one on $[0,1]$, and $\rho'(t)=-\rho(t-1)/t$ for $t>1$. [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[F5] Compact integrals of continuous derivatives evaluate by endpoint differences. [[thm-ftc-second-part]]

## Proof

1.1 Put $h(w)=\{y^w\}e^{-vw}$ for $w\ge0$. On each interval between consecutive numbers $w_n=(\log n)/v$, the derivative of $1-h(w)=\lfloor y^w\rfloor e^{-vw}$ is $-v\lfloor y^w\rfloor e^{-vw}$, and at $w_n$ its jump is $1/n$. Add the compact integration-by-parts identities over the finitely many such intervals and include the initial jump at $w=0$. Since $h(0)=0$, $\rho(0)=1$, and $h(u)=\{x\}/x\le e^{-uv}$ even at an integer endpoint, the result is $$\left|\frac{\Lambda(x,y)}x-\rho(u)\right|\le e^{-uv}+\int_0^{u-1}|\rho'(u-w)|e^{-vw}dw.$$ The part with $u-w\le1$ vanishes because $\rho$ is constant there. The finite-sum definition makes the endpoint convention explicit. [F4, F5, given, algebra]

2.1 By [F1] and [F4], for $0\le w\le u-1$ one has $$|\rho'(u-w)|=\frac{\rho(u-w-1)}{u-w}\le\frac{C\rho(u)e^{(w+1)\xi}}{u-w}.$$ Split the integral at $u/2$. On the first part $1/(u-w)\le2/u$, so the contribution is at most $$\frac{C\rho(u)e^\xi}{u(v-\xi)}\ll\rho(u)\frac\xi v,$$ because $e^\xi/u=1/u+\xi\ll\xi$ and $v-\xi\ge v/2$. On the second part use $1/(u-w)\le1$; its contribution is at most $$\frac{C\rho(u)e^\xi}{v-\xi}e^{-(v-\xi)u/2}\ll\rho(u)\frac\xi v,$$ since $e^\xi=1+u\xi$, $\xi\ge\log2$, $v\ge10$, and $(u+1/\xi)e^{-uv/4}$ is uniformly bounded. [F1, F2, F4, step 1.1, algebra]

3.1 By [F3] for large $u$, $\rho(u)\gg u^{-1/2}e^{-u\xi}$, since $I(\xi)\ge0$ and [F2] gives $V(u)\le u$. Hence $$\frac{e^{-uv}}{\rho(u)}\ll\sqrt u\,e^{-u(v-\xi)}\ll\frac\xi v,$$ using $v-\xi\ge v/2$ and $\xi\ge\log2$. For $u$ in the remaining bounded interval, the same inequality follows after enlarging the constant from positivity and continuity of $\rho$ and the elementary exponential decay in $v$. Combining this endpoint bound with steps 1.1–2.1 proves the asserted relative approximation. [F2, F3, F4, step 1.1, step 2.1, algebra] ∎
