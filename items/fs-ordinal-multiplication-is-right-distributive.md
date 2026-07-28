---
id: fs-ordinal-multiplication-is-right-distributive
kind: false-statement
title: "FALSE: $(\\beta + \\gamma)\\cdot\\alpha = \\beta\\cdot\\alpha + \\gamma\\cdot\\alpha$ for all ordinals"
status: draft
origin: session
deps: [def-ordinal-multiplication, def-ordinal-addition, thm-ordinal-multiplication-associative-and-left-distributive, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$(1+1)\\omega = \\omega$ but $1\\omega + 1\\omega = \\omega\\cdot2$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
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

**FALSE.** Ordinal multiplication distributes over addition on the right:

$$(\beta + \gamma) \cdot \alpha = \beta \cdot \alpha + \gamma \cdot \alpha \qquad \text{for all ordinals } \alpha, \beta, \gamma.$$

Distributivity on the **left** is a theorem
([[thm-ordinal-multiplication-associative-and-left-distributive]]):
$\alpha \cdot (\beta + \gamma) = \alpha\beta + \alpha\gamma$. The right-hand law
is a different statement, and it fails at $\beta = \gamma = 1$,
$\alpha = \omega$.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-addition]] and [[def-ordinal-multiplication]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]). Here $2 = 1^{+}$, so $1 + 1 = 1^{+} = 2$ by [[def-ordinal-addition]].

[L1] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]); $\alpha + 0 = \alpha$ and $\alpha + 1 = \alpha^{+}$ ([[def-ordinal-addition]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$ (claim (a)); $\nu < \theta$ implies $\alpha + \nu < \alpha + \theta$ (claim (b)); $\mu \le \nu$ implies $\mu\gamma \le \nu\gamma$ (claim (e)).

[L3] For $m, n \in \omega$ the ordinal $m \cdot n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ and $0 \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

## Refutation

**Proof technique:** direct.

1.1 For every $n \in \omega$ the ordinal $2 \cdot n$ lies in $\omega$ by [L3], hence $2 \cdot n \subseteq \omega$ by [L4]; and $n = 1 \cdot n \le 2 \cdot n$ by [L2], since $1 \le 2$, hence $n \subseteq 2 \cdot n$. [L2, L3, L4]

1.2 The right-hand side of the claimed law at $\beta = \gamma = 1$, $\alpha = \omega$ is $1 \cdot \omega + 1 \cdot \omega = \omega + \omega$ by [L2], and $\omega + \omega \ne \omega$, because $0 \in \omega$ gives $\omega = \omega + 0 < \omega + \omega$ by [L1] and [L2], while $\mu \notin \mu$ by [L4]. [L1, L2, L4]

2.1 The left-hand side is $(1 + 1) \cdot \omega = 2 \cdot \omega = \bigcup\{2 \cdot n : n \in \omega\}$ by [L1], and that union equals $\omega$: it is contained in $\omega$ because each $2 \cdot n \subseteq \omega$ by step 1.1, and it contains $\omega$ because $\omega = \bigcup \omega = \bigcup\{n : n \in \omega\}$ by [L4] and each $n \subseteq 2 \cdot n$ by step 1.1. [step 1.1, L1, L4]

3.1 Therefore $(1 + 1) \cdot \omega = \omega$ while $1 \cdot \omega + 1 \cdot \omega = \omega + \omega \ne \omega$, so the claimed right distributive law fails. [step 2.1, step 1.2] ∎

## Remarks

**Why the two laws are genuinely different.** $\alpha \cdot (\beta + \gamma)$ is "$\beta + \gamma$ copies of $\alpha$", which is $\beta$ copies followed by $\gamma$ copies, and that is exactly $\alpha\beta + \alpha\gamma$; the left law is therefore a statement about concatenating blocks and it is true. $(\beta + \gamma) \cdot \alpha$ is "$\alpha$ copies of the block $\beta + \gamma$", and interleaving $\alpha$ copies of a two part block is not the same as $\alpha$ copies of the first part followed by $\alpha$ copies of the second. The witness above is the smallest instance of that difference.

**The computation is repeated on purpose.** The value $2 \cdot \omega = \omega$ also appears in [[fs-ordinal-multiplication-is-commutative]], and it is recomputed here from the limit clause rather than quoted from that item, so that this refutation rests only on definitions and theorems.

**The failure is not a failure of associativity.** $\cdot$ is associative ([[thm-ordinal-multiplication-associative-and-left-distributive]]); what fails is the interaction of $\cdot$ with $+$ on one particular side. So the ordinals under $+$ and $\cdot$ satisfy every semiring law except commutativity of the two operations and right distributivity, and each of those three failures is refuted separately on this page.
