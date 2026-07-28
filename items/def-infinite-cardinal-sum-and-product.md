---
id: def-infinite-cardinal-sum-and-product
kind: definition
title: "The sum $\\sum_{i \\in I} \\kappa_i$ and the product $\\prod_{i \\in I} \\kappa_i$ of an indexed family of cardinals, defined under the Axiom of Choice"
status: published
origin: session
deps: [def-cardinal-arithmetic, lem-cardinal-operations-are-well-defined, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-axiom-of-choice, def-choice-function, thm-well-ordering-theorem, def-injection-surjection-bijection]
justified_by: []
aliases: [def-infinite-cardinal-sum, def-infinite-cardinal-product]
landmark: false
short: "$\\sum_{i} \\kappa_i$, $\\prod_{i} \\kappa_i$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "König's theorem (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_(set_theory)"
pipeline_run: null
---

## Definition

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $I$ be a set and
$(\kappa_i)_{i \in I}$ a family of cardinals ([[def-cardinal]]), that is, a
function on $I$ whose value at $i$ is the cardinal $\kappa_i$. Put

$$\textstyle\bigsqcup_{i \in I} \kappa_i \;:=\; \bigcup_{i \in I} \big(\{i\} \times \kappa_i\big), \qquad \prod^{\mathrm{set}}_{i \in I} \kappa_i \;:=\; \{\, f : f \text{ is a function on } I \text{ with } f(i) \in \kappa_i \text{ for all } i \in I \,\},$$

both sets by Replacement, Union and Power Set. The **sum** and **product** of the
family are their cardinalities:

$$\sum_{i \in I} \kappa_i \;:=\; \Big\lvert \textstyle\bigsqcup_{i \in I} \kappa_i \Big\rvert, \qquad \prod_{i \in I} \kappa_i \;:=\; \Big\lvert \prod^{\mathrm{set}}_{i \in I} \kappa_i \Big\rvert .$$

**Why the hypothesis is in the definition.** Both right-hand sides are
cardinalities of sets that ZF does not well-order. Under the Axiom of Choice
every set is well-orderable ([[thm-well-ordering-theorem]]) and both values exist
([[lem-cardinality-of-a-well-orderable-set]]). Nothing else is being assumed: the
two sets themselves are constructed in ZF, and the family
$(\kappa_i)_{i \in I}$ is a *function*, so no representative is selected.

**The finite cases are the operations already defined.** Take $I = 2 = \{0,1\}$.
Then $\bigsqcup_{i \in 2} \kappa_i = (\{0\} \times \kappa_0) \cup (\{1\} \times \kappa_1)
= \kappa_0 \sqcup \kappa_1$ literally, so
$\sum_{i \in 2} \kappa_i = \kappa_0 \oplus \kappa_1$
([[def-cardinal-arithmetic]]); and $f \mapsto (f(0), f(1))$ is a bijection from
$\prod^{\mathrm{set}}_{i \in 2} \kappa_i$ onto $\kappa_0 \times \kappa_1$, with
inverse $(a,b) \mapsto \{(0,a),(1,b)\}$, so
$\prod_{i \in 2} \kappa_i = \kappa_0 \otimes \kappa_1$ by
[[lem-cardinality-of-a-well-orderable-set]].

**A constant family recovers $\otimes$ and exponentiation.** If $\kappa_i = \kappa$
for every $i \in I$ and $\lambda = \lvert I \rvert$, then
$\bigsqcup_{i \in I} \kappa = I \times \kappa$ and
$\prod^{\mathrm{set}}_{i \in I} \kappa = {}^{I}\kappa$, so

$$\sum_{i \in I} \kappa = \lambda \otimes \kappa, \qquad \prod_{i \in I} \kappa = \kappa^{\lambda},$$

by the transport clause of [[def-cardinal-arithmetic]] together with
[[lem-cardinal-operations-are-well-defined]] and
[[def-injection-surjection-bijection]].

## Remarks

**The product set is the set of choice functions.** An element of
$\prod^{\mathrm{set}}_{i \in I} \kappa_i$ picks one element of $\kappa_i$ for
every $i$, which is exactly a choice function for the family
([[def-choice-function]]). So the assertion "the product set is nonempty when
every $\kappa_i$ is nonempty" **is** the Axiom of Choice for that family, in the
formulation recorded in [[def-axiom-of-choice]], and it is not an incidental
consequence of the definition.

**Why the sum tags its blocks.** Without the tag $\{i\} \times \kappa_i$ the
union $\bigcup_i \kappa_i$ would be a union of ordinals, which is the
*supremum* of the family and not its sum: with $\kappa_i = 1$ for every
$i \in \omega$ the untagged union is $1$, while the sum is $\aleph_0$, and the
difference is exactly that the tagged blocks are disjoint. The tagging is the
same device
[[def-cardinal-arithmetic]] uses for $\oplus$, applied to an arbitrary index set.

**What is not defined here.** Nothing is said about $\sum$ and $\prod$ over an
index set for which the family has no cardinal values, and nothing is said in ZF
alone. The theorem this definition exists for,
[[thm-konig]], carries the same hypothesis for the same reason.
