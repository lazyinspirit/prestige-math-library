---
id: ex-omega-plus-omega-is-countable
kind: example
title: "$\\omega + \\omega$ is at most countable although it is not order isomorphic to $\\omega$: order type and cardinality are different invariants"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordinal-addition, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-countable, thm-product-of-countable, def-equinumerous, def-order-isomorphism, thm-ordinal-arithmetic-monotonicity, def-limit-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\omega+\\omega$ is countable and not a copy of $\\omega$"
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
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Example

The ordinal $\omega + \omega$ is **at most countable** as a set
([[def-countable]]), and it is **not order isomorphic to $\omega$**
([[def-order-isomorphism]]).

There is no tension. Countability is a statement about bijections and ignores
order; order type is a statement about order isomorphisms and is finer. Two
well-orders on the same countably infinite set can have different order types:
$\omega$ and $\omega + 1$ already show it, as the first example of this page
records, and $\omega$ and $\omega + \omega$ show it with the two copies visible.

$$\omega + \omega \;=\; \mathrm{ot}\big(\underbrace{0, 1, 2, \dots}_{\text{first copy}} \ \ \underbrace{0', 1', 2', \dots}_{\text{second copy}}\big).$$

## Facts & Assumptions

**Given:** The ordinals with the addition of [[def-ordinal-addition]], and $\omega = \mathbb{N}$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\omega + \omega = \mathrm{ot}(\omega \oplus \omega)$, where $\omega \oplus \omega$ is the set $(\{0\} \times \omega) \cup (\{1\} \times \omega)$ with the lexicographic order that puts the second copy above the first ([[lem-ordinal-sum-as-an-order-type]]).

[L2] Every well-order is order isomorphic to exactly one ordinal, its order type, and order isomorphic well-orders have the same order type; in particular an order isomorphism is a bijection ([[thm-mostowski-collapse]], [[def-order-isomorphism]]).

[L3] If $A$ and $B$ are at most countable then so is $A \times B$ ([[thm-product-of-countable]]); a set equinumerous with an at most countable set is at most countable, and $\approx$ is symmetric and transitive ([[def-countable]], [[def-equinumerous]]).

[L4] $\omega$ is at most countable, being equinumerous with $\mathbb{N}$ by the identity, and every natural number is at most countable ([[def-countable]], [[def-natural-numbers]]).

[L5] $\nu < \theta$ implies $\alpha + \nu < \alpha + \theta$, and $\alpha + 0 = \alpha$ (claims (a) and (b) of [[thm-ordinal-arithmetic-monotonicity]], [[def-ordinal-addition]]).

[L6] $0 \in \omega$; every ordinal is transitive and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-limit-ordinal]]).

## Verification

**Proof technique:** direct.

1.1 As a set, $\omega \oplus \omega = (\{0\} \times \omega) \cup (\{1\} \times \omega) = 2 \times \omega$, since $2 = \{0, 1\}$; and $2 \times \omega$ is at most countable by [L3] and [L4], both factors being at most countable. [L1, L3, L4]

1.2 $\omega + \omega \ne \omega$: since $0 \in \omega$, [L5] gives $\omega = \omega + 0 < \omega + \omega$, and $\mu \notin \mu$ by [L6]. [L5, L6]

2.1 The order isomorphism of [L1] and [L2] from $\omega \oplus \omega$ onto the ordinal $\omega + \omega$ is in particular a bijection, so $\omega + \omega$ is equinumerous with $2 \times \omega$ and hence at most countable by step 1.1 and [L3]. [step 1.1, L1, L2, L3]

2.2 $\omega + \omega$ is not order isomorphic to $\omega$: order isomorphic well-orders have the same order type by [L2], and $\omega$ and $\omega + \omega$ are distinct ordinals by step 1.2, each being its own order type. [step 1.2, L2]

3.1 So $\omega + \omega$ is an at most countable set carrying a well-order that is not a copy of the well-order $\omega$: cardinality and order type are different invariants. [step 2.1, step 2.2] ∎

## Remarks

**How far this goes.** Every ordinal strictly below $\omega_1$ is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]]), and there are a great many of them: $\omega + \omega$ and $\omega \cdot \omega = \omega^{2}$ are at most countable by the argument above, and no two distinct ordinals are isomorphic as orders. So a single countably infinite set carries uncountably many mutually non-isomorphic well-orders, one for each infinite ordinal below $\omega_1$. Nothing here says the same of $\omega^{\omega}$ or of $\varepsilon_0$ ([[ex-powers-of-omega-and-epsilon-zero]]): those are ordinals of larger *order type*, and their cardinality is a question no item on these pages settles, as that item's last remark records.

**Why the argument does not need a choice principle.** The bijection used at step 2.1 is the collapsing isomorphism of [[thm-mostowski-collapse]], which is unique and therefore never chosen, and [[thm-product-of-countable]] is choice free too. Countability of a *countable union* of countable sets is a different matter and does cost $\mathrm{AC}_\omega$; that is [[thm-countable-union-of-countable]] and it is not used here.

**The confusion this item exists to prevent.** "$\omega + \omega$ is bigger than $\omega$" is true as a statement about ordinals, where bigger means further along the ordinal order, and false as a statement about size. The two readings of "bigger" are exactly order type and cardinality.
