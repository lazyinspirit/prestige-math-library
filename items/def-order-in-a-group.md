---
id: def-order-in-a-group
kind: definition
title: "The order $|G|$ of a finite group and the order $\\operatorname{ord}(g)$ of an element, with $\\operatorname{ord}(g) = \\infty$ when no positive power of $g$ is the identity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group, def-group-power, lem-order-of-element-exists, thm-well-ordering-principle, def-countable, def-equinumerous, lem-pigeonhole, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [def-order-of-an-element, def-order-of-a-group]
landmark: true
short: "$|G|$ and $\\operatorname{ord}(g)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Order (group theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_(group_theory)"
pipeline_run: null
---

## Definition

**The order of a finite group.** Let $G$ be a group ([[def-group]]) whose
underlying set is finite ([[def-countable]]), so that $G \approx n$ for some
$n \in \mathbb{N}$ ([[def-equinumerous]]). That natural number is unique: if
$G \approx n$ and $G \approx n'$ then $n \approx n'$, since $\approx$ is
symmetric and transitive, and then $n = n'$ by claim 3 of [[lem-pigeonhole]]. The
**order of $G$** is that unique natural number, written $|G|$. A group is
**infinite** when its underlying set is not finite, and $|G|$ is then not
defined.

**The order of an element.** Let $G$ be any group and $g \in G$, with natural
powers as in [[def-group-power]]. Put

$$S_g \;:=\; \{\, k \in \mathbb{N} \;:\; k \ge 1 \text{ and } g^{k} = e \,\} \;\subseteq\; \mathbb{N}.$$

- If $S_g \ne \varnothing$, the **order of $g$** is its least element,

  $$\operatorname{ord}(g) \;:=\; \min S_g \;\in\; \mathbb{N},$$

  which exists by the well-ordering principle ([[thm-well-ordering-principle]]):
  every nonempty subset of $\mathbb{N}$ has a least element, and that element is
  unique, being $\le$ every element of $S_g$ and a member of it. We then say $g$
  has **finite order**.
- If $S_g = \varnothing$ we say $g$ has **infinite order** and write
  $\operatorname{ord}(g) = \infty$, where $\infty$ is a symbol reserved for this
  case and is not a natural number. No arithmetic is performed with it here.

By construction $\operatorname{ord}(g) \ge 1$ whenever it is finite, and
$\operatorname{ord}(g) = 1$ exactly when $g = e$, since $g^{1} = g$.

**Every element of a finite group has finite order.** If $G$ is finite then
$S_g \ne \varnothing$ for every $g \in G$, by [[lem-order-of-element-exists]], so
$\operatorname{ord}(g)$ is a natural number.

## Remarks

- **Two well-definedness obligations, both discharged above and neither
  parenthetical.** For $|G|$ it is that a finite set is equinumerous with exactly
  one natural number, which is claim 3 of [[lem-pigeonhole]]. For
  $\operatorname{ord}(g)$ it is that the set $S_g$ has a least element when it is
  nonempty, which is [[thm-well-ordering-principle]], and that it is nonempty at
  all in the finite case, which is [[lem-order-of-element-exists]]. Neither
  quantity is definable before those three items.

- **$|G|$ and $\operatorname{ord}(g)$ are the same kind of thing, and that is not
  an accident.** [[lem-order-characterisation]] proves
  $|\langle g \rangle| = \operatorname{ord}(g)$: the order of an element is the
  order of the group it generates. The shared word and the shared notation are
  justified by that identity, not by convention.

- **$\infty$ is not a value in $\mathbb{N}$**, so a statement such as
  "$\operatorname{ord}(g) \mid k$" is asserted only when the order is finite;
  the infinite case is always stated separately. The order on $\mathbb{N}$ used
  above is the additive one of [[def-nat-order]], and $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]), which is why $S_g$ carries the condition $k \ge 1$:
  $g^{0} = e$ holds for every $g$ and says nothing.
