---
id: lem-ordinal-sum-as-an-order-type
kind: lemma
title: "$\\alpha + \\beta$ is the order type of $\\alpha$ followed by $\\beta$"
status: published
origin: session
deps: [def-ordinal-addition, thm-mostowski-collapse, def-well-order, def-order-isomorphism, def-initial-segment, thm-transfinite-induction, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal]
justified_by: []
aliases: [lem-ordered-sum-order-type]
landmark: true
short: "$\\mathrm{ot}(A \\oplus B) = \\mathrm{ot}(A) + \\mathrm{ot}(B)$"
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
    - title: "Order type (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_type"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $(A, <_A)$ and $(B, <_B)$ be well-orders ([[def-well-order]]) with order
types $\alpha = \mathrm{ot}(A)$ and $\beta = \mathrm{ot}(B)$
([[thm-mostowski-collapse]]). Their **ordered sum** $A \oplus B$ is the set
$(\{0\} \times A) \cup (\{1\} \times B)$ with

$$(i, x) < (j, y) \ :\iff\ i \in j, \ \text{ or } \ \big(i = j = 0 \text{ and } x <_A y\big), \ \text{ or } \ \big(i = j = 1 \text{ and } x <_B y\big),$$

that is, a copy of $A$ with a copy of $B$ placed entirely above it. Then:

**(a)** $A \oplus B$ is a well-order and
$\mathrm{ot}(A \oplus B) = \alpha + \beta$ ([[def-ordinal-addition]]). In
particular, taking $A = \alpha$ and $B = \beta$ with their membership orders,
$\alpha + \beta$ **is** the order type of a copy of $\alpha$ followed by a copy
of $\beta$.

**(b)** If $(W, <)$ is a well-order and $I \subseteq W$ is an initial segment
([[def-initial-segment]]), then, with $I$ and $W \setminus I$ carrying the order
inherited from $W$,

$$\mathrm{ot}(W) = \mathrm{ot}(I) + \mathrm{ot}(W \setminus I).$$

**No choice principle is used**; the whole argument runs on
[[thm-mostowski-collapse]], which is itself choice free.

## Facts & Assumptions

**Given:** Well-orders $(A, <_A)$, $(B, <_B)$ and $(W, <)$. Ordinals carry the membership order, and $\mathrm{ot}$ denotes order type. Subsets of a well-order always carry the inherited order, which is again a well-order ([[def-well-order]], [[def-initial-segment]]).

[L1] Every well-order is order isomorphic to exactly one ordinal, its order type, and order isomorphic well-orders have the same order type ([[thm-mostowski-collapse]]).

[L2] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

[L3] An order isomorphism is a bijection with $x < y \iff f(x) < f(y)$; a strictly increasing bijection between total orders is one; identities, inverses and composites of order isomorphisms are order isomorphisms; and an order isomorphism carries the initial segment below a point onto the initial segment below its image ([[def-order-isomorphism]]).

[L4] $W_{<a} = \{x \in W : x < a\}$; an initial segment is a downward closed subset; every initial segment is itself a well-order ([[def-initial-segment]]).

[L5] $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \bigcup\{\alpha + \beta : \beta \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L6] An ordinal is a transitive set strictly well ordered by $\in$, so for ordinals $\mu \in \theta$ the initial segment of $\theta$ determined by $\mu$ is $\mu$ itself; $\mu^{+}$ is an ordinal and $\mu$ is its greatest element ([[def-ordinal]], [[lem-ordinal-basics]]).

[L7] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$ and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$; since every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]) and the initial segment of $\beta_0^{+}$ below $\xi$ is $\xi$, it follows that if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

[L8] Every ordinal is exactly one of $0$, a successor, or a limit; a nonzero ordinal $\lambda$ is a limit if and only if $\xi \in \lambda$ implies $\xi^{+} \in \lambda$ ([[def-limit-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 $A \oplus B$ is a well-order: the relation is total, since two points with different first coordinates are compared by $0 \in 1$ and two points with equal first coordinates are compared inside $A$ or inside $B$, and it is transitive and irreflexive for the same reason; and a nonempty $S \subseteq A \oplus B$ has a least element, namely $(0, \min\{x : (0,x) \in S\})$ if $S$ meets $\{0\} \times A$, and $(1, \min\{y : (1,y) \in S\})$ otherwise, the two minima existing by [L2]. [L2, construct]

1.2 If $f : A \to A'$ and $g : B \to B'$ are order isomorphisms of well-orders then $(0,x) \mapsto (0, f(x))$ and $(1,y) \mapsto (1, g(y))$ define an order isomorphism $A \oplus B \to A' \oplus B'$; taking $A' = \alpha$ and $B' = \beta$ with the isomorphisms supplied by [L1], $A \oplus B$ and $\alpha \oplus \beta$ have the same order type. [L1, L3]

2.1 Case $\beta = 0$: $\alpha \oplus 0 = \{0\} \times \alpha$ and $(0,x) \mapsto x$ is an order isomorphism onto $\alpha$, so $\mathrm{ot}(\alpha \oplus 0) = \alpha = \alpha + 0$. [step 1.1, L1, L3, L5]

2.2 Case $\beta = \delta^{+}$, assuming $\mathrm{ot}(\alpha \oplus \delta) = \alpha + \delta$: the set of points of $\alpha \oplus \delta^{+}$ strictly below $(1, \delta)$ is exactly $\alpha \oplus \delta$, with the same order, and $(1,\delta)$ is the greatest element of $\alpha \oplus \delta^{+}$ because every other point is $(0,x)$ or $(1,y)$ with $y \in \delta$; so extending an order isomorphism $h : \alpha \oplus \delta \to \alpha + \delta$ by $h(1,\delta) := \alpha + \delta$ gives an order isomorphism onto $(\alpha + \delta) \cup \{\alpha + \delta\} = (\alpha + \delta)^{+}$, whence $\mathrm{ot}(\alpha \oplus \delta^{+}) = (\alpha + \delta)^{+} = \alpha + \delta^{+}$. [step 1.1, L1, L3, L5, L6]

2.3 Case $\beta = \lambda$ a limit, assuming $\mathrm{ot}(\alpha \oplus \xi) = \alpha + \xi$ for every $\xi \in \lambda$: let $g$ be the order isomorphism of $\alpha \oplus \lambda$ onto $\theta = \mathrm{ot}(\alpha \oplus \lambda)$; for $\xi \in \lambda$ the points below $(1,\xi)$ form exactly $\alpha \oplus \xi$, so $g$ carries $\alpha \oplus \xi$ onto the initial segment of $\theta$ below $g(1,\xi)$, which is the ordinal $g(1,\xi)$, giving $g[\alpha \oplus \xi] = \mathrm{ot}(\alpha \oplus \xi) = \alpha + \xi$; moreover every point of $\alpha \oplus \lambda$ lies in some $\alpha \oplus \xi$ with $\xi \in \lambda$, since $(0,x)$ lies in $\alpha \oplus 0$ and $(1,y)$ with $y \in \lambda$ lies in $\alpha \oplus y^{+}$ with $y^{+} \in \lambda$ by [L8]; hence $\theta = g[\alpha \oplus \lambda] = \bigcup\{g[\alpha \oplus \xi] : \xi \in \lambda\} = \bigcup\{\alpha + \xi : \xi \in \lambda\} = \alpha + \lambda$. [step 1.1, L1, L3, L4, L5, L6, L8]

3.1 The three cases of [L8] are exhaustive, and each of steps 2.1, 2.2 and 2.3 derives the claim at $\beta$ from the claim at every ordinal in $\beta$, so by [L7] $\mathrm{ot}(\alpha \oplus \beta) = \alpha + \beta$ for every ordinal $\beta$ and every ordinal $\alpha$. [step 2.1, step 2.2, step 2.3, L7, L8]

4.1 Claim (a): $A \oplus B$ is a well-order by step 1.1, and $\mathrm{ot}(A \oplus B) = \mathrm{ot}(\alpha \oplus \beta) = \alpha + \beta$ by step 1.2 and step 3.1. [step 3.1, step 1.2, step 1.1]

5.1 Claim (b): let $I$ be an initial segment of $W$ and define $\varphi : W \to I \oplus (W \setminus I)$ by $\varphi(x) = (0,x)$ for $x \in I$ and $\varphi(x) = (1,x)$ otherwise; $\varphi$ is a bijection, and it is strictly increasing, because $x < y$ with $x \notin I$ forces $y \notin I$ by downward closure of $I$, so the only mixed case is $x \in I$, $y \notin I$, where $\varphi(x) = (0,x) < (1,y) = \varphi(y)$; hence $\varphi$ is an order isomorphism by [L3] and $\mathrm{ot}(W) = \mathrm{ot}(I \oplus (W \setminus I)) = \mathrm{ot}(I) + \mathrm{ot}(W \setminus I)$ by step 4.1. [step 4.1, step 1.1, L1, L3, L4]

6.1 Claims (a) and (b) are established. [step 4.1, step 5.1] ∎

## Remarks

**What this buys.** The recursive definition of $+$ is what makes the operation legitimate, but it is a poor tool for computing. The order-type description is the tool: $1 + \omega$ is one point followed by a copy of $\omega$, which is again a copy of $\omega$, so $1 + \omega = \omega$; while $\omega + 1$ is a copy of $\omega$ with a point on top, which has a greatest element and so is not a copy of $\omega$. Both computations are carried out in [[fs-ordinal-addition-is-commutative]].

**Clause (b) is the one used later.** Splitting a well-order at an initial segment is exactly the move behind [[thm-ordinal-subtraction]]: an ordinal $\alpha$ below $\beta$ is an initial segment of $\beta$, so $\beta = \alpha + \mathrm{ot}(\beta \setminus \alpha)$ outright, with no recursion at all.

**The tags $0$ and $1$ are there only to force disjointness.** $A$ and $B$ may overlap, or be equal; the ordered sum has to keep the two copies apart, and the pair encoding is the cheapest way to do it. Nothing in the argument depends on the particular tags.
