---
id: fs-ordinal-addition-is-commutative
kind: false-statement
title: "FALSE: ordinal addition is commutative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordinal-addition, lem-ordinal-sum-as-an-order-type, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$1+\\omega = \\omega \\ne \\omega+1$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
pipeline_run: null
---

## Statement

**FALSE.** Ordinal addition ([[def-ordinal-addition]]) is commutative:
$\alpha + \beta = \beta + \alpha$ for all ordinals $\alpha$ and $\beta$.

The claim is plausible because it is true on $\mathbb{N}$, where ordinal
addition **is** the Peano addition ([[thm-ordinal-arithmetic-agrees-on-omega]]),
and that is the only case most readers have met. It fails at the very first
infinite ordinal: $1 + \omega = \omega$ while $\omega + 1$ is strictly larger.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-addition]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]).

[L1] $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \bigcup\{\alpha + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L2] $\beta \le \alpha + \beta$ (claim (c) of [[thm-ordinal-arithmetic-monotonicity]]); $\beta + 1 = \beta^{+}$ (claim (a) of the same).

[L3] For $m, n \in \omega$ the ordinal $m + n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

## Refutation

**Proof technique:** direct.

1.1 For every $n \in \omega$ the ordinal $1 + n$ lies in $\omega$ by [L3], hence $1 + n \subseteq \omega$ by [L4]; and $n \le 1 + n$ by [L2], hence $n \subseteq 1 + n$. [L2, L3, L4]

1.2 $\omega + 1 = \omega^{+} \ne \omega$, since $\omega \in \omega^{+}$ while $\omega \notin \omega$ by [L4]. [L1, L2, L4]

2.1 $1 + \omega = \bigcup\{1 + n : n \in \omega\}$ by [L1], and that union equals $\omega$: it is contained in $\omega$ because each $1 + n \subseteq \omega$ by step 1.1, and it contains $\omega$ because $\omega = \bigcup \omega = \bigcup\{n : n \in \omega\}$ by [L4] and each $n \subseteq 1 + n$ by step 1.1. [step 1.1, L1, L4]

3.1 Therefore $1 + \omega = \omega$ while $\omega + 1 \ne \omega$, so $1 + \omega \ne \omega + 1$ and ordinal addition is not commutative. [step 2.1, step 1.2, L4] ∎

## Remarks

**The picture.** By [[lem-ordinal-sum-as-an-order-type]], $1 + \omega$ is one point followed by a copy of $\omega$, and relabelling that as $0, 1, 2, \dots$ shows it is again a copy of $\omega$: prepending a single point to $\omega$ changes nothing. Whereas $\omega + 1$ is a copy of $\omega$ with one point placed above everything, which has a greatest element and so cannot be order isomorphic to $\omega$. This is the whole phenomenon: adding on the left is absorbed, adding on the right is not.

**What survives.** Addition is still associative ([[thm-ordinal-addition-associative]]), still strictly increasing and cancellative in the right argument, and still weakly increasing in the left ([[thm-ordinal-arithmetic-monotonicity]]). Addition is commutative on finite ordinals because it agrees there with Peano addition ([[thm-ordinal-arithmetic-agrees-on-omega]]). The displayed witness shows that ordinal addition is not commutative in general.

**A stronger failure lives next door.** Not only does $\alpha + \beta = \beta + \alpha$ fail; strict monotonicity in the left argument fails too, and for the same reason, since $0 + \omega = 1 + \omega$. That is [[fs-ordinal-addition-is-strictly-monotone-in-the-left-argument]].
