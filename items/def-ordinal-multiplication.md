---
id: def-ordinal-multiplication
kind: definition
title: "Ordinal multiplication $\\alpha \\cdot \\beta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-ordinal-multiplication-well-defined, def-ordinal-addition, def-ordinal, def-limit-ordinal, lem-ordinal-basics]
justified_by: []
aliases: [def-ordinal-product]
landmark: true
short: "$\\alpha\\cdot0=0$, $\\alpha\\cdot\\beta^{+}=\\alpha\\cdot\\beta+\\alpha$, sup at limits"
verification:
  precheck: n/a
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

## Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **product**
$\alpha \cdot \beta$, also written $\alpha\beta$, is defined by recursion on
$\beta$, in the three cases of [[def-limit-ordinal]]:

$$\alpha \cdot 0 = 0, \qquad \alpha \cdot \beta^{+} = \alpha \cdot \beta + \alpha, \qquad \alpha \cdot \lambda = \bigcup\{\, \alpha \cdot \beta : \beta \in \lambda \,\} \quad (\lambda \text{ a limit ordinal}),$$

with $+$ the ordinal addition of [[def-ordinal-addition]]. That exactly one
operation satisfies these three clauses, and that all its values are ordinals,
is [[cor-ordinal-multiplication-well-defined]], proved immediately above. The
union in the limit clause is the least upper bound of the values already
produced (claim (e) of [[lem-ordinal-basics]]).

**The convention, stated where it is made.** The successor clause appends a copy
of $\alpha$ **on the right**, so $\alpha \cdot \beta$ is
"**$\beta$ copies of $\alpha$**", laid end to end in the order given by $\beta$.
Made precise, this is [[lem-ordinal-product-as-an-order-type]]:
$\alpha \cdot \beta$ is the order type of $\alpha \times \beta$ ordered by
**last differences**, that is, by comparing the $\beta$-coordinate first and
using the $\alpha$-coordinate only to break a tie.

Both conventions occur in the literature and they give genuinely different
operations, since multiplication is not commutative. Under the one adopted here
$\omega \cdot 2 = \omega + \omega$ while $2 \cdot \omega = \omega$; under the
opposite convention those two values are exchanged. This library always uses the
convention above, which is the one of Jech and of the Wikipedia article cited
below.

## Remarks

- **Why $\alpha \cdot 0 = 0$ and not $1$.** The empty concatenation of copies of
  $\alpha$ is empty. The multiplicative unit appears one clause later:
  $\alpha \cdot 1 = \alpha \cdot 0^{+} = \alpha \cdot 0 + \alpha = 0 + \alpha$,
  and $0 + \alpha = \alpha$ is proved in
  [[thm-ordinal-arithmetic-monotonicity]], so $\alpha \cdot 1 = \alpha$.

- **The limit clause is a supremum, and it is where the product loses
  commutativity.** $2 \cdot \omega = \sup\{2 \cdot n : n \in \omega\}$, and each
  $2 \cdot n$ is a finite ordinal, so the supremum is $\omega$; whereas
  $\omega \cdot 2 = \omega \cdot 1 + \omega = \omega + \omega$, which is strictly
  larger. Both computations are carried out in
  [[fs-ordinal-multiplication-is-commutative]].

- **Notation.** $\alpha\beta$ abbreviates $\alpha \cdot \beta$, and the product
  binds tighter than the sum, so $\alpha\beta + \gamma$ means
  $(\alpha \cdot \beta) + \gamma$. Ordinal expressions in this library are always
  written with that convention.

- **Agreement with the natural numbers.** Below $\omega$ the limit clause never
  fires, and the two remaining clauses are literally the Peano clauses for
  multiplication on $\mathbb{N}$. That the ordinal product of two natural
  numbers is their natural-number product is
  [[thm-ordinal-arithmetic-agrees-on-omega]].
