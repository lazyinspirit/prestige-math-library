---
id: thm-ordinal-addition-associative
kind: theorem
title: "Ordinal addition is associative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordinal-addition, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-order-isomorphism, def-well-order, def-ordinal]
justified_by: []
aliases: []
landmark: false
short: "$(\\alpha+\\beta)+\\gamma = \\alpha+(\\beta+\\gamma)$"
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
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
    - title: "Open Logic Project, Open Logic Text"
      url: "https://builds.openlogicproject.org/open-logic-complete.pdf"
pipeline_run: null
---

## Statement

For all ordinals $\alpha$, $\beta$, $\gamma$ ([[def-ordinal]]),

$$(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma),$$

with $+$ as in [[def-ordinal-addition]]. Sums of ordinals may therefore be
written without brackets, and this library does so from here on.

**No choice principle is used.** Associativity is **not** accompanied by
commutativity, which is refuted among this page's false statements.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, $\gamma$, each regarded as a well-order under membership. For well-orders $(X, <_X)$ and $(Y, <_Y)$, $X \oplus Y$ is the ordered sum on $(\{0\} \times X) \cup (\{1\} \times Y)$, a copy of $X$ with a copy of $Y$ placed entirely above it ([[lem-ordinal-sum-as-an-order-type]]).

[L1] For well-orders $X$ and $Y$, $X \oplus Y$ is a well-order and $\mathrm{ot}(X \oplus Y) = \mathrm{ot}(X) + \mathrm{ot}(Y)$ (claim (a) of [[lem-ordinal-sum-as-an-order-type]]).

[L2] Every well-order is order isomorphic to exactly one ordinal, its order type ([[thm-mostowski-collapse]]).

[L3] A strictly increasing bijection between total orders is an order isomorphism, and order isomorphic well-orders have the same order type ([[def-order-isomorphism]], [[thm-mostowski-collapse]]).

[L4] An ordinal is a transitive set strictly well ordered by membership, so it is a well-order ([[def-ordinal]], [[def-well-order]]).

## Proof

**Proof technique:** direct.

1.1 For an ordinal $\mu$ the identity map is an order isomorphism of $\mu$ onto $\mu$, so $\mathrm{ot}(\mu) = \mu$ by the uniqueness in [L2]. [L2, L4]

1.2 The elements of $(\alpha \oplus \beta) \oplus \gamma$ are exactly the triples of shapes $(0,(0,a))$ with $a \in \alpha$, $(0,(1,b))$ with $b \in \beta$, and $(1,c)$ with $c \in \gamma$; those of $\alpha \oplus (\beta \oplus \gamma)$ are exactly $(0,a)$, $(1,(0,b))$ and $(1,(1,c))$ with the same ranges; and in each of the two ordered sets the three families occur as three consecutive blocks, in the order $\alpha$-block, then $\beta$-block, then $\gamma$-block, with each block carrying its own order. [L1, L4]

2.1 The map $\psi$ sending $(0,(0,a)) \mapsto (0,a)$, $(0,(1,b)) \mapsto (1,(0,b))$ and $(1,c) \mapsto (1,(1,c))$ is therefore a bijection preserving the block a point belongs to and its position inside that block, hence strictly increasing, hence an order isomorphism of $(\alpha \oplus \beta) \oplus \gamma$ onto $\alpha \oplus (\beta \oplus \gamma)$ by [L3]. [step 1.2, L1, L3]

2.2 Computing both order types with [L1] and step 1.1: $\mathrm{ot}((\alpha \oplus \beta) \oplus \gamma) = \mathrm{ot}(\alpha \oplus \beta) + \mathrm{ot}(\gamma) = (\alpha + \beta) + \gamma$, and $\mathrm{ot}(\alpha \oplus (\beta \oplus \gamma)) = \mathrm{ot}(\alpha) + \mathrm{ot}(\beta \oplus \gamma) = \alpha + (\beta + \gamma)$. [step 1.1, L1]

3.1 The two well-orders are order isomorphic by step 2.1, so their order types agree by [L3], giving $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$. [step 2.2, step 2.1, L3] ∎

## Remarks

**Why the order-type route rather than a recursion.** Associativity can also be proved by transfinite induction on $\gamma$, and the limit case then needs the continuity clause of [[thm-ordinal-arithmetic-monotonicity]] together with the fact that $\{\beta + \xi : \xi \in \lambda\}$ is unbounded in $\beta + \lambda$. The order-type argument avoids the case analysis entirely: concatenation of well-orders is visibly associative, and [[lem-ordinal-sum-as-an-order-type]] transports that to the arithmetic.

**Associativity does not rescue commutativity.** The two are independent: the ordinals under $+$ form a semigroup with identity $0$ and nothing more. $1 + \omega = \omega$ while $\omega + 1 = \omega^{+} \ne \omega$, which is computed in [[fs-ordinal-addition-is-commutative]]; and left cancellation holds while right cancellation fails, since $0 + \omega = 1 + \omega$ ([[fs-ordinal-addition-is-strictly-monotone-in-the-left-argument]]).

**Brackets are dropped from here on.** Cantor normal forms such as $\omega^{2} + \omega \cdot 3 + 5$ ([[thm-cantor-normal-form]]) are written unbracketed precisely because of this theorem.
