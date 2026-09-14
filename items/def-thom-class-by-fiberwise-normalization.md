---
id: def-thom-class-by-fiberwise-normalization
kind: definition
title: Thom class by fiberwise normalization
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-r-oriented-vector-bundle-and-orientation-local-system, def-relative-singular-cochain-complex]
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom class normalization, printed pp.194–196"
---

## Definition

Let $\xi\to B$ be an $R$-oriented metric rank-$n$ bundle with orientation
section $o=(o_b)$.  For the inclusion of pairs
$$i_b:(D(\xi_b),S(\xi_b))\longrightarrow(D(\xi),S(\xi)),$$
a **Thom class normalized by $o$** is a class
$$u_\xi\in H^n(D(\xi),S(\xi);R)$$
such that $i_b^*u_\xi=o_b$ for every $b\in B$.

Relative singular cochains make every restriction $i_b^*$ well typed.  This
is a normalization condition only: the definition asserts neither existence
nor uniqueness, which are proved later.  For $B=\varnothing$ the condition is
vacuous and the unique class in the zero relative group is normalized.  In
rank zero, $D(\xi)=B$, $S(\xi)=\varnothing$, and normalization says that the
degree-zero class restricts to the chosen unit on every point.  The zero ring,
one-point bases, identity inclusions, and empty sphere fibers cause no
exception.  No representative or family of classes is selected, so the
definition is choice-free.
