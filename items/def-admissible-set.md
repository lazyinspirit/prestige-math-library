---
id: def-admissible-set
kind: definition
title: "Admissible subset (Bourbaki–Witt)"
status: draft
origin: session
deps: [def-chain-complete-poset]
justified_by: []
aliases: []
landmark: false
short: "admissible set"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a chain-complete poset and $f : P \to P$ a progressive map
([[def-chain-complete-poset]]). A subset $A \subseteq P$ is **$f$-admissible**
(or simply **admissible**, when $f$ is fixed) if:

- **(C1)** *closed under $f$*: $f(x) \in A$ for every $x \in A$;
- **(C2)** *closed under chain suprema*: $\sup C \in A$ for every chain
  $C \subseteq A$.

## Remarks

- **(C2) already forces $\bot \in A$.** The empty set is a chain contained in
  $A$ ([[def-chain]]), and $\sup \emptyset = \bot$, so every admissible set
  contains the least element of $P$. Presentations that list "$\bot \in A$" as a
  third condition are therefore stating a consequence, not an extra hypothesis.
  This is the one place where insisting that the empty set counts as a chain pays
  for itself.
- The suprema in (C2) are taken in $P$ and exist there by chain-completeness;
  the condition is that they land back inside $A$.
- $P$ itself is admissible, so admissible sets exist. The content of
  [[lem-admissible-set-exists]] is that there is a *smallest* one, and every
  subsequent step of the Bourbaki–Witt argument is an application of its
  minimality: to prove that all elements of the smallest admissible set $M$ have
  some property, one shows that the elements of $M$ with that property again form
  an admissible set.
- Nothing here assumes $f$ is monotone, injective, or continuous in any sense.
  Only (C1), (C2) and progressivity are ever used.
