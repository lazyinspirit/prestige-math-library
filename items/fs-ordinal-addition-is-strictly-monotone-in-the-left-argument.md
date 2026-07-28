---
id: fs-ordinal-addition-is-strictly-monotone-in-the-left-argument
kind: false-statement
title: "FALSE: $\\beta < \\gamma$ implies $\\beta + \\alpha < \\gamma + \\alpha$"
status: published
origin: session
deps: [def-ordinal-addition, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$0 < 1$ but $0+\\omega = 1+\\omega = \\omega$"
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

**FALSE.** Ordinal addition ([[def-ordinal-addition]]) is strictly increasing in
its **left** argument:

$$\beta < \gamma \ \Longrightarrow \ \beta + \alpha < \gamma + \alpha \qquad \text{for all ordinals } \alpha, \beta, \gamma.$$

What is true is the **weak** inequality
$\beta \le \gamma \Rightarrow \beta + \alpha \le \gamma + \alpha$, which is
claim (c) of [[thm-ordinal-arithmetic-monotonicity]]. The strict version fails
already at $\beta = 0$, $\gamma = 1$, $\alpha = \omega$, so the weak form is
best possible. Right cancellation fails with it: $0 + \omega = 1 + \omega$ with
$0 \ne 1$.

## Facts & Assumptions

**Given:** The ordinals with the operation of [[def-ordinal-addition]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]).

[L1] $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \bigcup\{\alpha + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L2] $0 + \mu = \mu$ (claim (a) of [[thm-ordinal-arithmetic-monotonicity]]) and $\beta \le \alpha + \beta$ (claim (c) of the same).

[L3] For $m, n \in \omega$ the ordinal $m + n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]); and $0 \in 1$, so $0 < 1$.

## Refutation

**Proof technique:** direct.

1.1 For every $n \in \omega$ the ordinal $1 + n$ lies in $\omega$ by [L3], hence $1 + n \subseteq \omega$ by [L4]; and $n \le 1 + n$ by [L2], hence $n \subseteq 1 + n$. [L2, L3, L4]

1.2 $0 + \omega = \omega$ by [L2]. [L1, L2]

2.1 $1 + \omega = \bigcup\{1 + n : n \in \omega\}$ by [L1], and that union equals $\omega$: it is contained in $\omega$ because each $1 + n \subseteq \omega$ by step 1.1, and it contains $\omega$ because $\omega = \bigcup \omega = \bigcup\{n : n \in \omega\}$ by [L4] and each $n \subseteq 1 + n$ by step 1.1. [step 1.1, L1, L4]

3.1 So $0 < 1$ while $0 + \omega = \omega = 1 + \omega$, which refutes the strict inequality and also refutes right cancellation, since $0 \ne 1$. [step 2.1, step 1.2, L4] ∎

## Remarks

**Why the left argument is the weak side.** The recursion of [[def-ordinal-addition]] runs on the right argument, and at a limit it takes a supremum; a finite head placed on the left is swallowed by that supremum. Concretely, prepending finitely many points to a copy of $\omega$ gives a copy of $\omega$ again. On the right nothing is swallowed, and there the inequality really is strict, which is claim (b) of [[thm-ordinal-arithmetic-monotonicity]].

**How much can be lost on the left.** As much as one likes below the limit: $n + \omega = \omega$ for every $n \in \omega$, by the same computation as step 2.1 with $1$ replaced by $n$. So the map $\beta \mapsto \beta + \omega$ is constant on $\omega$ and collapses infinitely many values.

**Left cancellation is unaffected.** $\alpha + \beta = \alpha + \gamma$ still forces $\beta = \gamma$, because addition is strictly increasing in the right argument. The two cancellation laws are not a package, and this item is exactly the difference.
