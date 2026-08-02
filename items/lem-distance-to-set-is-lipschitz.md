---
id: lem-distance-to-set-is-lipschitz
kind: lemma
title: "$|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-bounded-diameter, lem-metric-reverse-triangle, thm-infimum-property,
       def-metric-space, def-infimum, lem-of-abs-value, def-abs-value,
       lem-of-add-order, def-ordered-field, def-complete-ordered-field,
       lem-metric-nonnegativity]
justified_by: []
aliases: []
landmark: false
short: "$d(\\cdot,A)$ is $1$-Lipschitz"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a nonempty $A \subseteq X$, and points $x, y \in X$; write $E(u) := \{\, d(u,a) : a \in A \,\}$ for $u \in X$.

[A1] The triangle inequality (M3) of [[def-metric-space]]: $d(u,a) \le d(u,v) + d(v,a)$ for all $u, v \in X$ and $a \in A$.

[L1] For nonempty $A$ the real number $d(u,A) = \inf E(u)$ exists, because $E(u)$ is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]]).

[L2] The infimum is a lower bound of its set and is the greatest such: $\inf S \le s$ for every $s \in S$, and $\ell \le \inf S$ for every lower bound $\ell$ of $S$ ([[def-infimum]]).

[L3] Adding a constant to an inequality: if $a \le b$ then $a + c \le b + c$. [[lem-of-add-order]] states the strict form only; the nonstrict form used here is that form together with the case $a = b$, settled by totality of the order ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] For every real $u$, $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Both $d(x,A)$ and $d(y,A)$ are defined real numbers, since $A$ is nonempty. [given, L1]

1.2 For every $a \in A$: $d(x,a) \le d(x,y) + d(y,a)$. [A1]

1.3 For every $a \in A$: $d(y,a) \le d(y,x) + d(x,a)$, and $d(y,x) = d(x,y)$ by symmetry (M2), so $d(y,a) \le d(x,y) + d(x,a)$. [A1]

2.1 For every $a \in A$: $d(x,A) \le d(x,a)$, since $d(x,A)$ is a lower bound of $E(x)$ and $d(x,a) \in E(x)$; combining with step 1.2 gives $d(x,A) \le d(x,y) + d(y,a)$, hence $d(x,A) - d(x,y) \le d(y,a)$. [step 1.1, step 1.2, L2, L3]

2.2 For every $a \in A$: $d(y,A) \le d(y,a) \le d(x,y) + d(x,a)$ by the same reasoning with the roles of $x$ and $y$ exchanged, hence $d(y,A) - d(x,y) \le d(x,a)$. [step 1.1, step 1.3, L2, L3]

3.1 The real number $d(x,A) - d(x,y)$ is therefore a lower bound of $E(y)$, so it is at most the greatest lower bound: $d(x,A) - d(x,y) \le d(y,A)$, that is $d(x,A) - d(y,A) \le d(x,y)$. [step 2.1, L2, L3]

3.2 Symmetrically $d(y,A) - d(x,y)$ is a lower bound of $E(x)$, so $d(y,A) - d(x,A) \le d(x,y)$. [step 2.2, L2, L3]

4.1 By [L4] the value $|d(x,A) - d(y,A)|$ is $d(x,A) - d(y,A)$ or its negative $d(y,A) - d(x,A)$, and steps 3.1 and 3.2 bound both by $d(x,y)$; hence $|d(x,A) - d(y,A)| \le d(x,y)$. [step 3.1, step 3.2, L4] ∎

## Remarks

- **Where the nonemptiness is used.** Twice, and both times essentially: it is
  what makes $d(x,A)$ and $d(y,A)$ exist at all
  ([[def-metric-bounded-diameter]]), and it is what makes $E(x)$ and $E(y)$
  nonempty so that "greatest lower bound" has content. For $A = \emptyset$ the
  statement has no meaning in this library, since $\inf \emptyset$ is undefined.
- **The point case is [[lem-metric-reverse-triangle]]**: taking $A = \{z\}$ gives
  $E(u) = \{d(u,z)\}$, whose infimum is $d(u,z)$, and the conclusion becomes
  $|d(x,z) - d(y,z)| \le d(x,y)$.
- The constant $1$ is best possible in general: on $\mathbb{R}$ with
  $A = \{0\}$ the function is $u \mapsto |u|$, and $\big||x| - |y|\big| = |x-y|$
  whenever $x$ and $y$ have the same sign.
