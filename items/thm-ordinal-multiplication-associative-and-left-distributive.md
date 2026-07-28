---
id: thm-ordinal-multiplication-associative-and-left-distributive
kind: theorem
title: "Ordinal multiplication is associative, and $\\alpha \\cdot (\\beta + \\gamma) = \\alpha\\cdot\\beta + \\alpha\\cdot\\gamma$"
status: draft
origin: session
deps: [def-ordinal-multiplication, def-ordinal-addition, thm-ordinal-addition-associative, thm-ordinal-arithmetic-monotonicity, thm-transfinite-induction, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: [thm-ordinal-left-distributivity]
landmark: true
short: "$(\\alpha\\beta)\\gamma=\\alpha(\\beta\\gamma)$ and $\\alpha(\\beta+\\gamma)=\\alpha\\beta+\\alpha\\gamma$"
proof_strategy: direct
verification:
  precheck: pass
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

For all ordinals $\alpha$, $\beta$, $\gamma$ ([[def-ordinal]]), with $+$ and
$\cdot$ as in [[def-ordinal-addition]] and [[def-ordinal-multiplication]]:

**(a) Left distributivity.**
$\alpha \cdot (\beta + \gamma) = \alpha \cdot \beta + \alpha \cdot \gamma$.

**(b) Associativity.**
$(\alpha \cdot \beta) \cdot \gamma = \alpha \cdot (\beta \cdot \gamma)$.

**Distributivity holds on the left only.** The right-hand law
$(\beta + \gamma) \cdot \alpha = \beta \cdot \alpha + \gamma \cdot \alpha$ is
false, and so is commutativity of $\cdot$; both are refuted among this page's
false statements, and both refutations are named in the Remarks below.

**No choice principle is used.**

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, $\gamma$. For a set $A$ of ordinals, $\sup A = \bigcup A$ is its least upper bound ([[lem-ordinal-basics]], claim (e)).

[L1] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \sup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]).

[L2] $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \sup\{\alpha + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L3] Ordinal addition is associative ([[thm-ordinal-addition-associative]]).

[L4] From [[thm-ordinal-arithmetic-monotonicity]]: $\beta \cdot 0 = 0 \cdot \beta = 0$ and $\beta + 0 = 0 + \beta = \beta$ (claim (a)); $\beta < \gamma$ implies $\alpha + \beta < \alpha + \gamma$ (claim (b)); for $\alpha > 0$, $\beta < \gamma$ implies $\alpha\beta < \alpha\gamma$, and $\alpha \cdot \beta = 0$ exactly when $\alpha = 0$ or $\beta = 0$ (claim (d)); if $\mu$ is a limit ordinal and $D \subseteq \mu$ is nonempty with $\sup D = \mu$, then $\alpha + \mu = \sup\{\alpha + \eta : \eta \in D\}$ and, for $\alpha > 0$, $\alpha \cdot \mu = \sup\{\alpha \cdot \eta : \eta \in D\}$ (claim (f)); and $\beta + \lambda$ and, for $\beta > 0$, $\beta \cdot \lambda$ are limit ordinals whenever $\lambda$ is (claim (g)).

[L5] Every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]).

[L6] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$ and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$; since every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]), it follows that if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

## Proof

**Proof technique:** direct.

1.1 Claim (a) at $\gamma = 0$ and at a successor: $\alpha \cdot (\beta + 0) = \alpha \cdot \beta = \alpha \cdot \beta + 0 = \alpha \cdot \beta + \alpha \cdot 0$; and assuming $\alpha(\beta + \delta) = \alpha\beta + \alpha\delta$, the successor clauses give $\alpha(\beta + \delta^{+}) = \alpha((\beta + \delta)^{+}) = \alpha(\beta + \delta) + \alpha = (\alpha\beta + \alpha\delta) + \alpha = \alpha\beta + (\alpha\delta + \alpha) = \alpha\beta + \alpha\delta^{+}$, the middle equality by [L3]. [L1, L2, L3, L4]

1.2 Claim (a) at a limit $\gamma = \lambda$ when $\alpha = 0$: both sides are $0$, since $0 \cdot \mu = 0$ for every $\mu$ by [L4]. [L4]

1.3 Claim (a) at a limit $\gamma = \lambda$ when $\alpha > 0$, assuming $\alpha(\beta + \xi) = \alpha\beta + \alpha\xi$ for every $\xi \in \lambda$: the set $D = \{\beta + \xi : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\beta + \lambda$ with $\sup D = \beta + \lambda$ by [L2] and [L4], so $\alpha(\beta + \lambda) = \sup\{\alpha(\beta + \xi) : \xi \in \lambda\} = \sup\{\alpha\beta + \alpha\xi : \xi \in \lambda\}$ by [L4]; and $E = \{\alpha\xi : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\alpha \cdot \lambda$ with $\sup E = \alpha \cdot \lambda$ by [L1] and [L4], so $\alpha\beta + \alpha\lambda = \sup\{\alpha\beta + \alpha\xi : \xi \in \lambda\}$ by [L4]; the two right-hand sides are the same set's supremum. [L1, L2, L4]

2.1 The three cases of [L5] are exhaustive and steps 1.1, 1.2 and 1.3 derive claim (a) at $\gamma$ from claim (a) at every ordinal in $\gamma$, so by [L6] claim (a) holds for all ordinals $\alpha$, $\beta$, $\gamma$. [step 1.1, step 1.2, step 1.3, L5, L6]

3.1 Claim (b), by induction on $\gamma$. At $\gamma = 0$ both sides are $0$ by [L1] and [L4]. At $\gamma = \delta^{+}$, assuming $(\alpha\beta)\delta = \alpha(\beta\delta)$: $(\alpha\beta)\delta^{+} = (\alpha\beta)\delta + \alpha\beta = \alpha(\beta\delta) + \alpha\beta = \alpha(\beta\delta + \beta) = \alpha(\beta\delta^{+})$, the third equality being step 2.1. At $\gamma = \lambda$ a limit: if $\alpha = 0$ or $\beta = 0$ then both sides are $0$ by [L4], since $\alpha\beta = 0$ in that case and $\alpha \cdot (\beta \cdot \lambda)$ is $0$ either because $\alpha = 0$ or because $\beta \cdot \lambda = 0$; otherwise $\alpha > 0$ and $\beta > 0$, so $\alpha\beta > 0$ by [L4], and assuming $(\alpha\beta)\xi = \alpha(\beta\xi)$ for every $\xi \in \lambda$ one gets $(\alpha\beta)\lambda = \sup\{(\alpha\beta)\xi : \xi \in \lambda\} = \sup\{\alpha(\beta\xi) : \xi \in \lambda\}$ by [L1], while $D = \{\beta\xi : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\beta \cdot \lambda$ with $\sup D = \beta \cdot \lambda$, so $\alpha(\beta\lambda) = \sup\{\alpha(\beta\xi) : \xi \in \lambda\}$ by [L4]; the three cases of [L5] are exhaustive, so [L6] gives claim (b) for all $\gamma$. [step 2.1, L1, L4, L5, L6]

4.1 Claims (a) and (b) are established. [step 2.1, step 3.1] ∎

## Remarks

**Where the limit cases really need the continuity clause.** In both inductions the limit step is the assertion that multiplication on the left commutes with a supremum taken over any set unbounded in a limit ordinal. That is claim (f) of [[thm-ordinal-arithmetic-monotonicity]] in its refined form, and it is used twice in step 1.3 and once in step 3.1. Without it one is left comparing $\sup\{\alpha(\beta + \xi)\}$ with $\sup\{\alpha\beta + \eta : \eta < \alpha\lambda\}$, which are indexed by different sets.

**The degenerate cases are not decoration.** At $\alpha = 0$ the ordinal $\alpha \cdot \lambda$ is $0$, not a limit, so the continuity clause does not apply and the case has to be handled separately; the same happens in claim (b) at $\beta = 0$. Both are one line, and both are wrong to skip.

**Right distributivity is false, so the two laws are not a package.** $(1 + 1) \cdot \omega = 2 \cdot \omega = \omega$, while $1 \cdot \omega + 1 \cdot \omega = \omega + \omega$, which is strictly larger. That computation is [[fs-ordinal-multiplication-is-right-distributive]].

**Commutativity fails too, and separately.** $2 \cdot \omega = \omega$ while $\omega \cdot 2 = \omega + \omega$, so associativity and left distributivity are the whole of what survives; the computation is [[fs-ordinal-multiplication-is-commutative]]. These are the two refutations the Statement above points at.
