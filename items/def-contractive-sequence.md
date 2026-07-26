---
id: def-contractive-sequence
kind: definition
title: "Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$"
status: draft
origin: session
deps: [def-sequence, def-real-order, lem-of-abs-value]
justified_by: []
forward_refs: [ex-contractive-sequence-fixed-point, cex-strictly-decreasing-gaps-no-limit]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5 (contractive sequences)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
---

## Definition

A sequence $(x_k)$ of reals ([[def-sequence]]) is **contractive** when there is a
real $c$ with

$$0 < c < 1 \qquad \text{and} \qquad |x_{k+2} - x_{k+1}| \;\le\; c\,|x_{k+1} - x_k| \quad \text{for every } k \in \mathbb{N},$$

the order and the absolute value being those of $\mathbb{R}$
([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction
constant** for $(x_k)$.

**The constant must not depend on $k$.** This is the whole content of the
definition and the only place it can go wrong. A sequence whose consecutive gaps
each shrink, so that

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is *not* contractive on that evidence: what is required is a single $c < 1$
working at every index simultaneously. The two conditions really are different:
there is a sequence satisfying the second that satisfies the first for no
$c < 1$ and does not converge, and it is the named counterexample of the
companion page, recalled in the remarks below.

**The constant is not unique.** If $c$ is a contraction constant then so is every
$c'$ with $c \le c' < 1$, since $c\,|x_{k+1} - x_k| \le c'\,|x_{k+1} - x_k|$ when
$|x_{k+1} - x_k| \ge 0$ ([[lem-of-abs-value]]). Statements about contractive
sequences therefore quantify over a *chosen* constant, and the error bound in
[[thm-contractive-implies-cauchy]] is sharper for a smaller $c$.

**Degenerate cases are included.** A constant sequence is contractive with every
$c \in (0,1)$, all the gaps being $0$. A sequence that is eventually constant is
contractive as soon as the inequality holds at the finitely many earlier indices.
Nothing in the definition forces the gaps to be positive.

## Remarks

- **Where the name comes from.** The typical contractive sequence arises by
  iterating a map: if $f : \mathbb{R} \to \mathbb{R}$ satisfies
  $|f(u) - f(v)| \le c\,|u - v|$ for all $u, v$, with $0 < c < 1$, and
  $x_{k+1} = f(x_k)$, then $(x_k)$ is contractive with the same $c$, because
  $|x_{k+2} - x_{k+1}| = |f(x_{k+1}) - f(x_k)| \le c\,|x_{k+1} - x_k|$. This is
  the elementary shadow of the Banach fixed point theorem, and
  [[ex-contractive-sequence-fixed-point]] is the simplest instance.

- **The definition says nothing about a limit, and that is deliberate.** It is a
  condition on consecutive differences only, checkable without knowing where the
  sequence is going, which is exactly what makes
  [[thm-contractive-implies-cauchy]] useful: convergence and an explicit error
  bound both fall out of a hypothesis that never mentions the limit.

- **Contractive implies the gaps are null but not conversely.** From the
  definition the gaps satisfy $|x_{k+1} - x_k| \le c^{k-1}|x_2 - x_1|$ for
  $k \ge 1$, which tends to $0$ ([[lem-geometric-sequence-null]]); the first
  gap $|x_1 - x_0|$ is unconstrained, having no predecessor
  ([[thm-contractive-implies-cauchy]]). The converse implication fails
  badly: gaps tending to $0$ do not even give a Cauchy sequence, which is
  [[fs-consecutive-differences-null-implies-cauchy]].

- **The witness separating the two conditions** is
  [[cex-strictly-decreasing-gaps-no-limit]]: its consecutive gaps strictly
  decrease, every ratio of consecutive gaps is below $1$, and still no single
  $c < 1$ works, because those ratios approach $1$. It is what the uniformity
  requirement above exists to exclude.
