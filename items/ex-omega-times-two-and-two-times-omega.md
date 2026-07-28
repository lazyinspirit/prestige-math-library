---
id: ex-omega-times-two-and-two-times-omega
kind: example
title: "$2 \\cdot \\omega = \\omega$ while $\\omega \\cdot 2 = \\omega + \\omega$, pictured as order types"
status: published
origin: session
deps: [def-ordinal-multiplication, def-ordinal-addition, lem-ordinal-product-as-an-order-type, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-order-isomorphism, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$2\\cdot\\omega=\\omega$, $\\omega\\cdot2=\\omega+\\omega$"
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

## Example

$$2 \cdot \omega = \omega, \qquad \omega \cdot 2 = \omega + \omega > \omega.$$

Under the convention of [[def-ordinal-multiplication]], $\alpha \cdot \beta$ is
**$\beta$ copies of $\alpha$** ([[lem-ordinal-product-as-an-order-type]]). So
$2 \cdot \omega$ is $\omega$ copies of a two element set, laid end to end:

$$\underbrace{\bullet\ \bullet}_{}\ \ \underbrace{\bullet\ \bullet}_{}\ \ \underbrace{\bullet\ \bullet}_{}\ \ \cdots$$

which is a copy of $\omega$ once the points are counted off $0, 1, 2, \dots$.
And $\omega \cdot 2$ is two copies of $\omega$, one entirely above the other:

$$0, 1, 2, \dots \ \ \text{then} \ \ 0', 1', 2', \dots$$

which is $\omega + \omega$ and is strictly larger than $\omega$.

Both values are computed below from the recursive clauses, and both pictures are
justified by the order-type lemmas rather than left as pictures.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-addition]] and [[def-ordinal-multiplication]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \bigcup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]); $\alpha + 0 = \alpha$ ([[def-ordinal-addition]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$ (claim (a)); $\nu < \theta$ implies $\alpha + \nu < \alpha + \theta$ (claim (b)); $\mu \le \nu$ implies $\mu\gamma \le \nu\gamma$ (claim (e)).

[L3] For $m, n \in \omega$ the ordinal $m \cdot n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ and $0 \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L5] $\alpha \cdot \beta$ is the order type of $\alpha \times \beta$ under last differences, that is $\beta$ copies of $\alpha$ ([[lem-ordinal-product-as-an-order-type]]); $\alpha + \beta$ is the order type of a copy of $\alpha$ followed by a copy of $\beta$ ([[lem-ordinal-sum-as-an-order-type]]); order types are unique ([[thm-mostowski-collapse]]) and a strictly increasing bijection between total orders is an order isomorphism ([[def-order-isomorphism]]).

## Verification

**Proof technique:** direct.

1.1 For $n \in \omega$ the ordinal $2 \cdot n$ lies in $\omega$ by [L3], hence $2 \cdot n \subseteq \omega$ by [L4]; and $n = 1 \cdot n \le 2 \cdot n$ by [L2], since $1 \le 2$, hence $n \subseteq 2 \cdot n$. [L2, L3, L4]

1.2 $\omega \cdot 2 = \omega \cdot 1^{+} = \omega \cdot 1 + \omega = \omega + \omega$ by [L1] and [L2]; and $\omega + \omega > \omega + 0 = \omega$ by [L1] and claim (b) of [L2], since $0 \in \omega$. [L1, L2, L4]

2.1 $2 \cdot \omega = \bigcup\{2 \cdot n : n \in \omega\}$ by [L1], and this equals $\omega$: it is contained in $\omega$ by step 1.1, and it contains $\bigcup\{n : n \in \omega\} = \bigcup \omega = \omega$ by step 1.1 and [L4]. [step 1.1, L1, L4]

3.1 The pictures are the order-type lemmas, not extra assumptions: by [L5], $2 \cdot \omega$ is the order type of $2 \times \omega$ under last differences, which is $\omega$ blocks of two, and step 2.1 evaluates that order type as $\omega$; while $\omega \cdot 2$ is the order type of $\omega \times 2$ under last differences, which is two blocks of $\omega$, and by [L5] again that is the order type of a copy of $\omega$ followed by a copy of $\omega$, namely $\omega + \omega$, in agreement with step 1.2. [step 2.1, step 1.2, L5]

4.1 Therefore $2 \cdot \omega = \omega$ and $\omega \cdot 2 = \omega + \omega \ne \omega$, so the two products differ. [step 2.1, step 3.1, step 1.2] ∎

## Remarks

**Which convention this depends on.** Everything above uses the convention fixed in [[def-ordinal-multiplication]], that the successor clause appends a copy of the left factor on the right. Under the opposite convention the two values are exchanged, and $2 \cdot \omega$ would be $\omega + \omega$. Both conventions appear in the literature; this library uses the one stated, throughout.

**The general statement.** That ordinal multiplication is not commutative is [[fs-ordinal-multiplication-is-commutative]], whose refutation is the computation of step 2.1 and step 1.2. The related failure of right distributivity, $(1+1) \cdot \omega \ne 1 \cdot \omega + 1 \cdot \omega$, is [[fs-ordinal-multiplication-is-right-distributive]] and uses the same value $2 \cdot \omega = \omega$.

**Why the block picture is a proof and not an illustration.** [[lem-ordinal-product-as-an-order-type]] says the product **is** the order type of the block arrangement, so reading a value off the picture is legitimate once the picture is identified with $\alpha \times \beta$ under last differences. What is not legitimate is reading it off an unlabelled diagram, which is why step 3.1 names the lemma at each use.
