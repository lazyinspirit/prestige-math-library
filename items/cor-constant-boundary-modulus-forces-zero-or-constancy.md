---
id: cor-constant-boundary-modulus-forces-zero-or-constancy
kind: corollary
title: "Constant boundary modulus forces an interior zero or constancy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-boundary-maximum-modulus-principle, thm-minimum-modulus-principle, thm-algebra-of-complex-derivatives]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 3.3.20"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If a holomorphic function has constant modulus on the boundary of a bounded domain, then it is constant or has a zero in the domain.

Precisely, let $\Omega$ be a bounded complex domain and let $f$ be continuous on $\overline\Omega$ and holomorphic on $\Omega$. If $|f(\zeta)|=M$ for every $\zeta\in\partial\Omega$, then either $f$ is constant on $\Omega$ or some $a\in\Omega$ satisfies $f(a)=0$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$, a function $f$ continuous on $\overline\Omega$ and holomorphic on $\Omega$, and a real $M\ge0$ such that $|f|=M$ on $\partial\Omega$. A nonvanishing holomorphic function has a holomorphic reciprocal ([[thm-algebra-of-complex-derivatives]]).

[L1] If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[L2] A nowhere-zero holomorphic function on a complex domain cannot have an interior local modulus minimum unless it is constant ([[thm-minimum-modulus-principle]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then [L1] gives $|f|\le0$ on $\overline\Omega$, so $f$ is the zero function and is constant. [L1, given]

1.2 Suppose $M>0$ and $f$ has no zero in $\Omega$. On $\partial\Omega$ one has $|f|=M>0$, so $f$ has no zero on $\overline\Omega$. At a point $c\in\overline\Omega$ the identity $1/f(z)-1/f(c)=(f(c)-f(z))/(f(z)f(c))$ together with $|f(z)|\ge|f(c)|/2$ for $z$ near $c$ bounds $|1/f(z)-1/f(c)|$ by $2|f(z)-f(c)|/|f(c)|^2$, so $1/f$ is continuous on $\overline\Omega$; the given reciprocal law makes it holomorphic on $\Omega$. Applying [L1] to $f$ and to $1/f$ gives $|f|\le M$ and $1/|f|\le1/M$ on $\overline\Omega$. Hence $|f|=M$ throughout $\Omega$. [L1, given, algebra]

2.1 The equality in step 1.2 makes every interior point a local minimum of $|f|$, so [L2] makes $f$ constant. [step 1.2, L2]

3.1 Thus the zero-boundary case is constant, and in the positive-boundary case either $f$ is constant or the supposition in step 1.2 fails and $f$ has a zero in $\Omega$. [step 1.1, step 1.2, step 2.1] ∎
