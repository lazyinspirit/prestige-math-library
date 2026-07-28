---
id: fs-ordinal-multiplication-is-commutative
kind: false-statement
title: "FALSE: ordinal multiplication is commutative"
status: published
origin: session
deps: [def-ordinal-multiplication, def-ordinal-addition, lem-ordinal-product-as-an-order-type, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$2\\cdot\\omega = \\omega \\ne \\omega+\\omega = \\omega\\cdot2$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

**FALSE.** Ordinal multiplication ([[def-ordinal-multiplication]]) is
commutative: $\alpha \cdot \beta = \beta \cdot \alpha$ for all ordinals $\alpha$
and $\beta$.

It fails at the smallest possible place: $2 \cdot \omega = \omega$, while
$\omega \cdot 2 = \omega + \omega$, which is strictly larger.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-addition]] and [[def-ordinal-multiplication]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]).

[L1] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]); $\alpha + 0 = \alpha$ ([[def-ordinal-addition]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$ (claim (a)); $\nu < \theta$ implies $\alpha + \nu < \alpha + \theta$ (claim (b)); $\mu \le \nu$ implies $\mu \gamma \le \nu \gamma$ (claim (e)).

[L3] For $m, n \in \omega$ the ordinal $m \cdot n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ and $0 \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L5] $\alpha \cdot \beta$ is the order type of $\alpha \times \beta$ under last differences, that is $\beta$ copies of $\alpha$ ([[lem-ordinal-product-as-an-order-type]]).

## Refutation

**Proof technique:** direct.

1.1 For every $n \in \omega$ the ordinal $2 \cdot n$ lies in $\omega$ by [L3], hence $2 \cdot n \subseteq \omega$ by [L4]; and $n = 1 \cdot n \le 2 \cdot n$ by [L2], since $1 \le 2$, hence $n \subseteq 2 \cdot n$. [L2, L3, L4]

1.2 $\omega \cdot 2 = \omega \cdot 1^{+} = \omega \cdot 1 + \omega = \omega + \omega$ by [L1] and [L2]. [L1, L2]

2.1 $2 \cdot \omega = \bigcup\{2 \cdot n : n \in \omega\}$ by [L1], and that union equals $\omega$: it is contained in $\omega$ because each $2 \cdot n \subseteq \omega$ by step 1.1, and it contains $\omega$ because $\omega = \bigcup \omega = \bigcup\{n : n \in \omega\}$ by [L4] and each $n \subseteq 2 \cdot n$ by step 1.1. [step 1.1, L1, L4]

2.2 $\omega + \omega \ne \omega$: since $0 \in \omega$, claim (b) of [L2] gives $\omega = \omega + 0 < \omega + \omega$, and $\mu \notin \mu$ by [L4]. [step 1.2, L1, L2, L4]

3.1 Therefore $2 \cdot \omega = \omega$ while $\omega \cdot 2 = \omega + \omega \ne \omega$, so $2 \cdot \omega \ne \omega \cdot 2$ and ordinal multiplication is not commutative. [step 2.1, step 2.2, step 1.2] ∎

## Remarks

**The picture.** By [L5], $2 \cdot \omega$ is $\omega$ copies of a two element set, laid end to end: that is a copy of $\omega$, since relabelling gives $0, 1, 2, \dots$ again. And $\omega \cdot 2$ is two copies of $\omega$, one entirely above the other, which is $\omega + \omega$ and has no greatest element but does have an element with infinitely many predecessors. The convention that fixes which is which is stated in [[def-ordinal-multiplication]]: the successor clause appends a copy of $\alpha$ on the right, so $\alpha \cdot \beta$ is $\beta$ copies of $\alpha$.

**What survives.** Multiplication is still associative and still distributes over addition **on the left** ([[thm-ordinal-multiplication-associative-and-left-distributive]]), and it is still strictly increasing and cancellative in the right argument when the left factor is nonzero ([[thm-ordinal-arithmetic-monotonicity]]). Right distributivity is a separate casualty, refuted in [[fs-ordinal-multiplication-is-right-distributive]].

**Finite ordinals are not a counterexample to anything.** On $\omega$ the ordinal product is the Peano product ([[thm-ordinal-arithmetic-agrees-on-omega]]), which is commutative. The failure is purely infinitary, and $2$ and $\omega$ are the smallest pair that exhibits it.
