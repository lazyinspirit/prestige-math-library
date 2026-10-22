---
id: def-the-set-of-functions-from-one-set-to-another
kind: definition
title: "The set $B^{A}$ of all functions $A \\to B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-the-set-of-functions-between-two-sets-is-a-set, def-function]
justified_by: []
forward_refs: [rem-ordinal-versus-cardinal-exponentiation, def-function-space]
aliases: [def-function-set]
landmark: false
short: "the set of functions"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets. By
[[lem-the-set-of-functions-between-two-sets-is-a-set]] the functions
$A \to B$ ([[def-function]]) form a set; it is written

$$B^{A} := \{\, f : f \text{ is a function with } \operatorname{dom} f = A \text{ and } \operatorname{ran} f \subseteq B \,\}.$$

Thus $f \in B^{A}$ holds if and only if $f : A \to B$.

## Remarks

- **The notation collides with exponentiation, and the collision is deliberate.**
  $B^{A}$ is the same symbol the library already uses for a space of functions in
  [[def-function-space]], where $F^{X}$ is the set of functions $X \to F$ carrying
  a vector-space structure; the underlying set there is the one defined here.
  Some set-theory texts write ${}^{A}B$ instead, reserving $B^{A}$ for ordinal and
  cardinal exponentiation. This library keeps $B^{A}$ for the function set, and
  [[rem-ordinal-versus-cardinal-exponentiation]] is where the arithmetic
  exponentiations are distinguished from one another.

- **Degenerate cases.** $B^{\varnothing}$ has exactly one element, the empty
  function, for every $B$, since a function with empty domain has no elements at
  all. $\varnothing^{A}$ is empty whenever $A$ is nonempty, since a function with
  domain $A$ must take a value at each point of $A$, and $\varnothing^{\varnothing}$
  again has the empty function as its only element.
