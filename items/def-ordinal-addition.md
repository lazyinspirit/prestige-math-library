---
id: def-ordinal-addition
kind: definition
title: "Ordinal addition $\\alpha + \\beta$"
status: draft
origin: session
deps: [cor-ordinal-addition-well-defined, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-omega-least-limit-ordinal]
justified_by: []
aliases: [def-ordinal-sum]
landmark: true
short: "$\\alpha+0=\\alpha$, $\\alpha+\\beta^{+}=(\\alpha+\\beta)^{+}$, sup at limits"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **sum**
$\alpha + \beta$ is defined by recursion on $\beta$, in the three cases of
[[def-limit-ordinal]]:

$$\alpha + 0 = \alpha, \qquad \alpha + \beta^{+} = (\alpha + \beta)^{+}, \qquad \alpha + \lambda = \bigcup\{\, \alpha + \beta : \beta \in \lambda \,\} \quad (\lambda \text{ a limit ordinal}).$$

That exactly one operation satisfies these three clauses, and that all its
values are ordinals, is [[cor-ordinal-addition-well-defined]], proved
immediately above. The union in the limit clause is the least upper bound of the
values already produced (claim (e) of [[lem-ordinal-basics]]), so it may be
written $\sup$ and the clause read as "at a limit, take the supremum".

**Notation.** We write $1 = 0^{+}$, $2 = 1^{+}$, and so on for the finite
ordinals, and $\sup$ for $\bigcup$ applied to a set of ordinals. The successor
operation is now a special case of addition:

$$\alpha + 1 = \alpha + 0^{+} = (\alpha + 0)^{+} = \alpha^{+},$$

so from here on $\alpha + 1$ and $\alpha^{+}$ denote the same ordinal, and both
notations are used, whichever reads better.

## Remarks

- **The recursion is on the right argument only.** The left argument $\alpha$ is
  a parameter, frozen before the recursion starts. This asymmetry is not an
  artefact of the presentation: ordinal addition is genuinely asymmetric, and
  the asymmetry is exactly what [[fs-ordinal-addition-is-commutative]] and
  [[fs-ordinal-addition-is-strictly-monotone-in-the-left-argument]] exhibit
  later on this page.

- **What the clauses say concretely.** $\alpha + \beta$ is "$\alpha$, and then
  $\beta$ more steps". [[lem-ordinal-sum-as-an-order-type]] turns that picture
  into a theorem: $\alpha + \beta$ is the order type of a copy of $\alpha$
  followed by a copy of $\beta$. The order-type description is usually the one
  to compute with; the recursion is the one that makes the definition legitimate.

- **The first interesting value.** $\omega$ is the least limit ordinal
  ([[lem-omega-least-limit-ordinal]]), and it is the least ordinal at which the
  third clause fires at all: below $\omega$ every ordinal is $0$ or a successor,
  so below $\omega$ this recursion is literally the Peano recursion for
  addition on $\mathbb{N}$. That the two agree there is
  [[thm-ordinal-arithmetic-agrees-on-omega]], and it is a theorem, not a
  convention.

- **Suprema need no completeness axiom.** The limit clause takes the union of a
  set of ordinals, which is an ordinal and is their least upper bound, by claim
  (e) of [[lem-ordinal-basics]] and the remark following it. Nothing resembling
  the least upper bound property of $\mathbb{R}$ is assumed; it is a closure
  property of the ordinals themselves.

- **Left addition of a limit is a limit.** For a limit $\lambda$, the values
  $\alpha + \beta$ for $\beta \in \lambda$ are strictly increasing and their
  supremum is not attained, so $\alpha + \lambda$ is again a limit ordinal. This
  is recorded as a clause of [[thm-ordinal-arithmetic-monotonicity]], where it
  is proved.
