---
id: lem-ordinal-product-as-an-order-type
kind: lemma
title: "$\\alpha \\cdot \\beta$ is the order type of $\\alpha \\times \\beta$ ordered by last differences, that is $\\beta$ copies of $\\alpha$"
status: draft
origin: session
deps: [def-ordinal-multiplication, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-well-order, def-order-isomorphism, def-initial-segment, thm-transfinite-induction, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal]
justified_by: []
aliases: [lem-ordinal-product-order-type]
landmark: true
short: "$\\alpha\\cdot\\beta = \\mathrm{ot}(\\alpha\\times\\beta)$, last differences"
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
    - title: "Order type (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_type"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). Order the Cartesian
product $\alpha \times \beta$ by **last differences**:

$$(x, y) < (x', y') \ :\iff\ y \in y', \ \text{ or } \ \big(y = y' \text{ and } x \in x'\big),$$

so the second coordinate is compared first and the first coordinate only breaks
a tie. Write $\alpha \otimes \beta$ for the resulting ordered set. Then
$\alpha \otimes \beta$ is a well-order ([[def-well-order]]) and

$$\mathrm{ot}(\alpha \otimes \beta) = \alpha \cdot \beta$$

([[thm-mostowski-collapse]], [[def-ordinal-multiplication]]). In words:
$\alpha \cdot \beta$ is **$\beta$ copies of $\alpha$**, laid end to end in the
order given by $\beta$, one copy $\alpha \times \{y\}$ for each $y \in \beta$.

**No choice principle is used.**

## Facts & Assumptions

**Given:** Ordinals $\alpha$ and $\beta$, and the ordered set $\alpha \otimes \beta$ described above. Ordinals carry the membership order and $\mathrm{ot}$ denotes order type.

[L1] Every well-order is order isomorphic to exactly one ordinal, its order type, and order isomorphic well-orders have the same order type ([[thm-mostowski-collapse]]).

[L2] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

[L3] An order isomorphism is a bijection with $x < y \iff f(x) < f(y)$; a strictly increasing bijection between total orders is one; and the restriction of an order isomorphism to a subset is an order isomorphism onto the image ([[def-order-isomorphism]]).

[L4] An initial segment is a downward closed subset, and every initial segment of a well-order is itself a well-order ([[def-initial-segment]]).

[L5] $\mathrm{ot}(W) = \mathrm{ot}(I) + \mathrm{ot}(W \setminus I)$ for every well-order $W$ and every initial segment $I$ of it (claim (b) of [[lem-ordinal-sum-as-an-order-type]]).

[L6] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]).

[L7] An ordinal is a transitive set strictly well ordered by $\in$, and every element of an ordinal is an ordinal ([[def-ordinal]], [[lem-ordinal-basics]]).

[L8] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$ and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$; since every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]) and the initial segment of $\beta_0^{+}$ below $\xi$ is $\xi$, it follows that if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

[L9] Every ordinal is exactly one of $0$, a successor, or a limit; a nonzero ordinal $\lambda$ is a limit if and only if $\xi \in \lambda$ implies $\xi^{+} \in \lambda$ ([[def-limit-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 $\alpha \otimes \beta$ is a well-order: the relation is irreflexive, transitive and trichotomous because $\in$ is so on $\beta$ and on $\alpha$ and the rule compares second coordinates first; and a nonempty $S \subseteq \alpha \times \beta$ has a least element, obtained by taking $y_0$ the $\in$-least second coordinate occurring in $S$ and then $x_0$ the $\in$-least first coordinate with $(x_0, y_0) \in S$, both existing by [L2] applied inside $\beta$ and inside $\alpha$. [L2, L7, construct]

1.2 For an ordinal $\xi$ with $\xi \subseteq \beta$ the set $\alpha \times \xi$ is downward closed in $\alpha \otimes \beta$, because $(x', y') < (x, y)$ with $y \in \xi$ gives $y' \in y$ or $y' = y$ and hence $y' \in \xi$ by transitivity of $\xi$; and a downward closed subset $J$ of an ordinal $\theta$ is itself an ordinal, being transitive and strictly well ordered by $\in$. [L4, L7]

2.1 Case $\beta = 0$: $\alpha \times 0 = \varnothing$, whose order type is $0 = \alpha \cdot 0$. [step 1.1, L1, L6]

2.2 Case $\beta = \delta^{+}$, assuming $\mathrm{ot}(\alpha \otimes \delta) = \alpha \cdot \delta$: the set $\alpha \times \delta$ is an initial segment of $\alpha \otimes \delta^{+}$ by step 1.2, its complement is $\alpha \times \{\delta\}$, and $(x, \delta) \mapsto x$ is an order isomorphism of that complement onto $\alpha$, since two points of it are compared by their first coordinates; and $\mathrm{ot}(\alpha) = \alpha$, because the identity is an order isomorphism and order types are unique by [L1]; so [L5] gives $\mathrm{ot}(\alpha \otimes \delta^{+}) = \mathrm{ot}(\alpha \otimes \delta) + \mathrm{ot}(\alpha) = \alpha \cdot \delta + \alpha = \alpha \cdot \delta^{+}$. [step 1.1, step 1.2, L1, L3, L5, L6]

2.3 Case $\beta = \lambda$ a limit, assuming $\mathrm{ot}(\alpha \otimes \xi) = \alpha \cdot \xi$ for every $\xi \in \lambda$: let $g$ be the order isomorphism of $\alpha \otimes \lambda$ onto $\theta = \mathrm{ot}(\alpha \otimes \lambda)$; for $\xi \in \lambda$ the set $\alpha \times \xi$ is downward closed, so $g[\alpha \times \xi]$ is downward closed in $\theta$ and hence an ordinal by step 1.2, and $g$ restricts to an order isomorphism of $\alpha \otimes \xi$ onto it, giving $g[\alpha \times \xi] = \mathrm{ot}(\alpha \otimes \xi) = \alpha \cdot \xi$; every point $(x,y)$ of $\alpha \times \lambda$ lies in $\alpha \times y^{+}$ with $y^{+} \in \lambda$ by [L9]; hence $\theta = g[\alpha \times \lambda] = \bigcup\{g[\alpha \times \xi] : \xi \in \lambda\} = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\} = \alpha \cdot \lambda$. [step 1.1, step 1.2, L1, L3, L6, L9]

3.1 The three cases of [L9] are exhaustive, and each of steps 2.1, 2.2 and 2.3 derives the claim at $\beta$ from the claim at every ordinal in $\beta$, so by [L8] $\mathrm{ot}(\alpha \otimes \beta) = \alpha \cdot \beta$ for all ordinals $\alpha$ and $\beta$. [step 2.1, step 2.2, step 2.3, L8, L9]

4.1 $\alpha \otimes \beta$ is therefore a well-order of order type $\alpha \cdot \beta$. [step 3.1, step 1.1] ∎

## Remarks

**Why last differences and not first differences.** With the order above, the copy $\alpha \times \{y\}$ sits below the copy $\alpha \times \{y'\}$ whenever $y \in y'$, so the picture is "$\beta$ copies of $\alpha$", matching the successor clause $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$ of [[def-ordinal-multiplication]], which appends a copy of $\alpha$ on the right. Ordering by *first* differences would give "$\alpha$ copies of $\beta$", which is the product under the opposite convention and is a different ordinal in general.

**The two standard computations.** $2 \cdot \omega$ is $\omega$ copies of a two element set, which is a copy of $\omega$; $\omega \cdot 2$ is two copies of $\omega$, which is $\omega + \omega$. Both are carried out in [[fs-ordinal-multiplication-is-commutative]], and they are the shortest possible demonstration that ordinal multiplication is not commutative.

**Where the sum lemma enters.** Only at step 2.2, through clause (b) of [[lem-ordinal-sum-as-an-order-type]]: cutting the product at the last copy of $\alpha$ splits it into an initial segment and a remainder, and the order type of a split is the sum of the two order types. The limit case needs no such cut, only that the initial pieces exhaust the whole.
