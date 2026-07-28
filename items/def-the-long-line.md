---
id: def-the-long-line
kind: definition
title: "The closed long ray $\\omega_1 \\times [0,1)$ under the lexicographic order, and the long line, with the order topology"
status: draft
origin: session
deps: [def-order-topology-on-a-linearly-ordered-set, def-first-uncountable-ordinal,
       thm-omega-one-is-the-least-uncountable-ordinal, def-ordinal, lem-ordinal-basics,
       lem-ordinal-trichotomy, def-interval, def-partial-order, def-real-order,
       def-ordered-field, def-complete-ordered-field, def-limit-ordinal,
       def-topological-space]
justified_by: [thm-the-long-line-is-a-connected-linear-continuum]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
    - title: "J. R. Munkres, Topology, 2nd ed., §24 exercises"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Definition

Let $\omega_1$ be the first uncountable ordinal
([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]]),
whose elements are the at most countable ordinals ([[def-ordinal]]) ordered by
membership ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]), and let

$$[0,1) \;=\; \{\, t \in \mathbb{R} : 0 \le t < 1 \,\}$$

be the half-open unit interval of the complete ordered field $\mathbb{R}$
([[def-interval]], [[def-real-order]], [[def-ordered-field]],
[[def-complete-ordered-field]]).

**The closed long ray** is the set

$$R \;:=\; \omega_1 \times [0,1)$$

with the **lexicographic order**

$$(\alpha, s) \;<\; (\beta, t) \quad :\Longleftrightarrow \quad \alpha < \beta, \ \text{ or } \ \bigl(\alpha = \beta \text{ and } s < t\bigr),$$

and $(\alpha,s) \le (\beta,t)$ meaning $(\alpha,s) < (\beta,t)$ or
$(\alpha,s) = (\beta,t)$; $R$ carries the order topology of this order
([[def-order-topology-on-a-linearly-ordered-set]], [[def-topological-space]]).

**The lexicographic order is a linear order, and this is discharged here.**
*Antisymmetry and irreflexivity of $<$:* if $(\alpha,s) < (\beta,t)$ then either
$\alpha < \beta$, which by trichotomy of the ordinals
([[lem-ordinal-trichotomy]]) forbids $\beta \le \alpha$ and hence forbids
$(\beta,t) < (\alpha,s)$, or $\alpha = \beta$ and $s < t$, which by trichotomy in
$\mathbb{R}$ ([[def-ordered-field]]) forbids $t < s$; in particular no element is
$<$ itself. *Transitivity:* if $(\alpha,s) < (\beta,t) < (\gamma,u)$ then
$\alpha \le \beta \le \gamma$, so $\alpha \le \gamma$; if $\alpha < \gamma$ we
are done, and if $\alpha = \gamma$ then $\alpha = \beta = \gamma$ and
$s < t < u$ gives $s < u$. *Comparability:* given two elements, compare the first
coordinates by [[lem-ordinal-trichotomy]] and, if they are equal, the second by
trichotomy in $\mathbb{R}$. So $(R, \le)$ is a totally ordered set
([[def-partial-order]]).

**Least element, and the open long ray.** $R$ has the least element
$0_R := (0, 0)$, since $0 = \varnothing$ is the least ordinal and $0$ the least
element of $[0,1)$. The **open long ray** is $R \setminus \{0_R\}$ with the
restricted order and its order topology. $R$ has **no greatest element**: given
$(\alpha, s)$, the element $(\alpha^{+}, 0)$ is strictly above it, and
$\alpha^{+} \in \omega_1$ because $\alpha^{+}$ is again at most countable
([[lem-ordinal-basics]], [[thm-omega-one-is-the-least-uncountable-ordinal]]).

**The long line.** Let $R' := R \setminus \{0_R\}$ be the open long ray. The
**long line** is the set

$$\mathbb{L} \;:=\; (\{0\} \times R') \;\cup\; (\{1\} \times R)$$

with the order

$$(0,x) < (0,y) :\Longleftrightarrow y < x, \qquad (0,x) < (1,y) \ \text{ always}, \qquad (1,x) < (1,y) :\Longleftrightarrow x < y,$$

that is: a reversed copy of the **open** long ray laid before a copy of the
**closed** long ray, the two halves meeting at the single centre point
$(1, 0_R)$. This is again a total order, by the same three checks applied within
each copy and by the third clause across them, and $\mathbb{L}$ carries its
order topology. One copy is open and one is closed deliberately: were both
copies open, each half would be a union of open rays of $\mathbb{L}$, so the two
halves would form a pair of disjoint nonempty open sets covering $\mathbb{L}$ —
a separation — and the order would have a gap at the seam instead of the centre
point $(1, 0_R)$ that closes it.

**Blocks.** The set
$\{0\} \times [0,1)$ is an initial segment of $R$ order-isomorphic to $[0,1)$,
and for each $\alpha \in \omega_1$ the **block** $\{\alpha\} \times [0,1)$ is
order-isomorphic to $[0,1)$; the blocks are laid end to end in the order type of
$\omega_1$. A block $\{\alpha\} \times [0,1)$ has a least element $(\alpha,0)$
and no greatest element. **No element of $R$ has an immediate predecessor or an
immediate successor.** Within a block this is the corresponding fact for
$[0,1)$. At a block boundary $(\alpha, 0)$ with $\alpha \ne 0$: if
$\alpha = \beta^{+}$ then the elements below it are the $(\beta,s)$, $s < 1$,
among which there is no greatest, so it has no immediate predecessor; and if
$\alpha$ is a limit ordinal ([[def-limit-ordinal]]) the elements below it
include $(\xi, 0)$ for every $\xi < \alpha$, again with no greatest, since
$\alpha$ is a limit. Immediate successors fail because no block has a greatest
element.

## Remarks

- **Why $[0,1)$ and not $[0,1]$.** With $[0,1]$ the element $(\alpha, 1)$ would
  be the greatest element of its block and $(\alpha^{+}, 0)$ would be its
  immediate successor, producing a jump; the order would then fail to be
  order-dense and the long ray would be disconnected. Half-open blocks glue
  without a seam, which is the whole point of the construction.

- **Why $\omega_1$ and not a larger ordinal.** The construction makes sense for
  any ordinal, and for $\omega$ it produces an order isomorphic to
  $[0,\infty)$. What is special about $\omega_1$ is that it is uncountable while
  each of its elements is at most countable
  ([[thm-omega-one-is-the-least-uncountable-ordinal]]), which is what makes every
  proper initial segment of $R$ look like an ordinary half-line while $R$ itself
  does not.

- **Naming.** The obligation that the long ray deserves to be called a
  continuum — that it is order-dense and has the least upper bound property — is
  discharged by [[thm-the-long-line-is-a-connected-linear-continuum]], recorded
  in this item's `justified_by`, and is not assumed anywhere above.

- **What is not defined here.** Nothing above asserts that $R$ or $\mathbb{L}$ is
  path-connected, or metrizable, or that either is homeomorphic to any space
  built earlier. Those questions need machinery this page does not develop, and
  no statement on this page depends on their answers.
