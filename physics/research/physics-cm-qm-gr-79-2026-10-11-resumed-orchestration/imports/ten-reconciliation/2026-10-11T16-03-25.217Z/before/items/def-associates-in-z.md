---
id: def-associates-in-z
kind: definition
title: "Associates in $\\mathbb{Z}$: integers each of which divides the other"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-divides-in-z, def-equivalence-relation]
justified_by: []
aliases: []
landmark: false
short: "$a \\sim b$ iff $a \\mid b$ and $b \\mid a$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Divisibility (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisibility_(ring_theory)"
pipeline_run: null
---

## Definition

Integers $a$ and $b$ are **associates**, written $a \sim b$, when each divides
the other ([[def-divides-in-z]]):

$$a \sim b \quad :\Longleftrightarrow \quad a \mid b \ \text{ and } \ b \mid a .$$

As a **binary relation** in the sense of [[def-equivalence-relation]] this is the
subset

$$R \;=\; \{\, (a,b) \in \mathbb{Z} \times \mathbb{Z} \;:\; a \mid b \ \text{ and } \ b \mid a \,\}$$

of $\mathbb{Z} \times \mathbb{Z}$, and $a \sim b$ abbreviates $(a,b) \in R$.

**Nothing is claimed here beyond the definition.** That $R$ is an *equivalence*
relation — reflexive, symmetric and transitive — is a statement about $R$ that
has to be proved, and it is proved next, in
[[lem-associates-characterisation]], together with the identification of the
class of $a$ as $\{a, -a\}$. Until then the symbol $\sim$ is notation for
membership of $R$ and carries no further content; in particular the language of
equivalence classes is not used above.

## Remarks

- **Why the notion is worth naming.** Divisibility does not distinguish an
  integer from its negative ([[lem-divisibility-basic]]), so it is a preorder
  rather than an order: $2 \mid -2$ and $-2 \mid 2$ while $2 \ne -2$. Associates
  are exactly the pairs that divisibility cannot tell apart, and naming them is
  what lets the greatest common divisor be pinned down by a sign convention
  rather than left ambiguous up to that failure.

- **The classes have at most two elements**, which is special to $\mathbb{Z}$ and
  comes from its group of units being $\{1,-1\}$ ([[lem-units-of-z]]). The
  class of $0$ is $\{0\}$ alone.
