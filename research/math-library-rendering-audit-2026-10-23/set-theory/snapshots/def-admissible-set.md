---
id: def-admissible-set
kind: definition
title: "Admissible subset (Bourbaki–Witt)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-chain-complete-poset]
justified_by: []
aliases: []
landmark: false
short: "admissible set"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Mathlib, Order.BourbakiWitt"
      url: "https://leanprover-community.github.io/mathlib4_docs/Mathlib/Order/BourbakiWitt.html"
    - title: "Bourbaki-Witt Principle (Menemui Matematik 39(1), 2017)"
      url: "https://persama.org.my/images/Menemui_Matematik/2017/MMv391_8_21.pdf"
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
  This is the first of four places on this page where insisting that the empty
  set counts as a chain removes a case rather than creating one; the others are
  [[lem-extremal-cut-closed-under-sups]], [[lem-sup-of-extremals]] and
  [[lem-all-extremal]].
- The suprema in (C2) are taken in $P$ and exist there by chain-completeness;
  the condition is that they land back inside $A$.
- $P$ itself is admissible, so admissible sets exist. The content of
  [[lem-admissible-set-exists]] is that there is a *smallest* one, and its
  minimality is what carries the two decisive steps of the Bourbaki–Witt
  argument, [[lem-extremal-comparability]] and [[lem-all-extremal]]: to prove
  that all elements of the smallest admissible set $M$ have some property, one
  shows that the elements of $M$ with that property again form an admissible
  set. The remaining lemmas use only admissibility of $M$, progressivity of $f$,
  and the order axioms.
- Nothing here assumes $f$ is monotone, injective, or continuous in any sense.
  Only (C1), (C2) and progressivity are ever used.
