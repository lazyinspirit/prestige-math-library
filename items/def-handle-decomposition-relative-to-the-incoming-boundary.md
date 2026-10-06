---
id: def-handle-decomposition-relative-to-the-incoming-boundary
kind: definition
title: "Handle decomposition relative to the incoming boundary"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-smooth-cobordism-triad-for-morse-theory, def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-smooth-collar-of-a-manifold-boundary]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "definition"
---

## Definition

Let $(W;M_0,M_1)$ be a smooth cobordism triad with its fixed collars
([[def-smooth-cobordism-triad-for-morse-theory]]). A **finite handle
decomposition of $(W;M_0,M_1)$ relative to $M_0$** is a finite ordered list of
indices $k_1,\dots,k_r$, together with, for each $i$, an embedding of the
attaching region $S^{k_i-1}\times D^{n-k_i}$ of a standard $k_i$-handle
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]) into the
outgoing boundary of the manifold built so far (away from the retained $M_0$), such that $W$ is diffeomorphic, relative
to $M_0$, to the manifold obtained from the collar $M_0\times[0,\varepsilon]$
by successively attaching the handles in the given order with corners rounded
([[def-attaching-a-smooth-handle-with-corner-rounding]]).

The stages of the decomposition are the manifolds $W_0:=M_0\times[0,\varepsilon]$
and $W_i$, the result of attaching the first $i$ handles; the last stage $W_r$
is diffeomorphic to $W$ relative to $M_0$. The ordered indices are the
**indices of the handles**; the number of handles of index $k$ is the
multiplicity of $k$ in the list.

The endpoint cases are part of the definition, not exceptions.

- If $M_0=\varnothing$ the initial stage is the empty manifold, and the first
  handle of any presentation whose later stages are nonempty is a $0$-handle,
  which is a disjoint copy of $D^n$ attached along $S^{-1}\times D^n=\varnothing$.
- A $k$-handle with $k=0$ is a disjoint $n$-disk; a $k$-handle with $k=n$
  attaches along its whole boundary sphere $S^{n-1}\times D^0=S^{n-1}$ and has
  empty outgoing region.
- The empty list $r=0$ is allowed: it presents the collar $M_0\times[0,\varepsilon]$
  itself, and, when $M_0=\varnothing$, the empty manifold.

The definition fixes the geometric data only up to the corner-rounding
convention of the cited attachment definition. Existence, uniqueness up to
diffeomorphism and the correspondence with Morse functions are not asserted
here; they are the content of later items of this page.
