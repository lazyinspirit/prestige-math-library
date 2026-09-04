---
id: thm-riemann-xi-is-entire-of-order-one
kind: theorem
title: "The Riemann xi function is entire of order one, real on the real axis, and symmetric under $s\\mapsto1-s$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-xi-function, thm-riemann-zeta-meromorphic-continuation, thm-completed-riemann-zeta-functional-equation, thm-stirling-formula-gamma, def-riemann-zeta-function]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8, Theorems 1 and 3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

The function

$$\xi(s)=\frac12 s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$$

extends to an entire function of order $1$. It satisfies

$$\xi(s)=\xi(1-s),$$

and $\xi(x)\in\mathbb R$ for every real $x$.

## Facts & Assumptions

**Given:** The completed function and its symmetry.

[L1] The xi function is $\xi(s)=\tfrac12 s(s-1)\Lambda(s)$ ([[def-riemann-xi-function]]).

[L3] The completed function has simple poles at $0$ and $1$ and satisfies $$\Lambda(s)=\Lambda(1-s)$$ ([[thm-completed-riemann-zeta-functional-equation]]).

[L4] Stirling's formula gives $$\Gamma(z)=\sqrt{2\pi}\,z^{z-1/2}e^{-z}\left(1+O(|z|^{-1})\right)$$ uniformly on closed sectors away from the negative real axis ([[thm-stirling-formula-gamma]]).

[L5] For $\operatorname{Re}s>1$, one has $\zeta(s)=\sum_{n\ge1}n^{-s}$ ([[def-riemann-zeta-function]]).

[A1] If two entire functions agree on a set with an accumulation point, then they agree everywhere.

## Proof

**Proof technique:** direct.

1.1 By [L3], $\Lambda$ has simple poles at $0$ and $1$. Multiplying by $\tfrac12 s(s-1)$ in [L1] cancels exactly those poles, so $\xi$ is entire. The same two facts give $$\xi(1-s)=\frac12(1-s)(-s)\Lambda(1-s)=\frac12 s(s-1)\Lambda(s)=\xi(s).$$ [L1, L3, given, algebra]

1.2 For real $x>1$, the Dirichlet series in [L5] is a sum of positive real terms, so $\zeta(x)\in\mathbb R$. The remaining factors in [L1] are also real there, hence $\xi(x)\in\mathbb R$ for all $x>1$. Therefore the entire functions $s\mapsto \xi(s)$ and $s\mapsto \overline{\xi(\overline s)}$ agree on $(1,\infty)$, so [A1] makes them equal on all of $\mathbb C$. In particular $\xi(x)$ is real for every real $x$. [L1, L5, A1, algebra]

2.1 On the half-plane $\operatorname{Re}s\ge2$, [L5] gives $|\zeta(s)|\le\sum_{n\ge1}n^{-2}$. Applying [L4] to $z=s/2$ on that sector shows $$|\Gamma(s/2)|\le \exp(C|s|\log(2+|s|))$$ for some constant $C$, hence [L1] gives $$|\xi(s)|\le \exp(C_1|s|\log(2+|s|))\qquad(\operatorname{Re}s\ge2).$$ By the symmetry from step 1.1, the same bound holds on $\operatorname{Re}s\le-1$. On the strip $-1\le\operatorname{Re}s\le2$, the explicit split formula in [L3] gives $$\xi(s)=\frac12+\frac14 s(s-1)\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt.$$ For $t\ge1$ and $-1\le\operatorname{Re}s\le2$, both powers of $t$ have modulus at most $1$, while $\theta(t)-1$ decays exponentially in $t$. Hence the integral is uniformly bounded on the strip, so $|\xi(s)|\le C_2(1+|s|^2)$ there. Therefore the same exponential bound holds on all of $\mathbb C$, and $\xi$ has order at most $1$. [step 1.1, L1, L3, L4, L5, algebra]

3.1 Along the positive real axis, $\zeta(r)\to1$ as $r\to\infty$ by [L5], so [L1] and [L4] give $$\log |\xi(r)|=\frac{r}{2}\log r+O(r)\qquad(r\to\infty).$$ Thus $\log\log M_\xi(r)\ge \log\log|\xi(r)|=\log r+o(\log r)$, which rules out order smaller than $1$. Combining this with step 2.1 shows that $\xi$ has order exactly $1$. [step 2.1, L1, L4, L5, algebra] ∎
