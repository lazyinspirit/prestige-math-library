---
id: def-critical-point-and-critical-value-of-a-smooth-function
kind: definition
title: "Critical points and critical values of a smooth function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-and-critical-points-and-values, def-differential-of-a-smooth-real-valued-function]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Definition

Let $f:M\to \mathbb R$ be a smooth function and let $p\in M$.

- The point $p$ is a **critical point** of $f$ when $df_p=0$
  ([[def-differential-of-a-smooth-real-valued-function]]).
- A real number $c$ is a **critical value** of $f$ when $c=f(p)$ for some
  critical point $p$.

This is the specialization of
[[def-regular-and-critical-points-and-values]] to real-valued functions: for a
map to $\mathbb R$, the empty-fibre case is still regular, so a value is
critical exactly when it is attained at a critical point.
