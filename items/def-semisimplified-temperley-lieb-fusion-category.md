---
id: def-semisimplified-temperley-lieb-fusion-category
kind: definition
title: "Semisimplified Temperley–Lieb quotient at the BHMV root"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - def-temperley-lieb-negligible-morphisms
  - lem-temperley-lieb-negligible-morphisms-form-tensor-ideal
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: the quotient, finite additive envelope, and idempotent completion are algebraic constructions."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), §§3–4"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Razvan Gelca, Topological Quantum Field Theory with Corners Based on the Kauffman Bracket, §§2–4"
      url: "https://www.math.ttu.edu/~rgelca/bra3.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, §§5.1–5.4"
      url: "https://arxiv.org/pdf/1502.06845v1"
---

## Definition

Fix an even integer $p\ge4$, a primitive $2p$-th root $A\in\mathbb C$, $r=p/2$, and loop value $\delta=-A^2-A^{-2}$. Let $\mathcal T_\delta$ be the complex Temperley–Lieb diagram category with objects the nonnegative integers and morphisms finite linear combinations of perfect matchings of bottom and top boundary points with no intersecting arcs. Compose by stacking and remove each closed component with factor $\delta$. Define $\mathcal N_\delta(m,n)$ to be the subspace of morphisms $f:m\to n$ such that $\operatorname{Tr}_m(g\circ f)=0$ for every reverse morphism $g:n\to m$, where $\operatorname{Tr}$ is the unnormalized diagram-closure trace. Form the quotient category with the same objects and morphism spaces $\operatorname{Hom}_{\mathcal T_\delta}(m,n)/\mathcal N_\delta(m,n)$. Its additive envelope adjoins finite formal direct sums, with matrix morphisms and matrix composition. Its idempotent completion adjoins objects $(X,e)$ for idempotents $e\in\operatorname{End}(X)$ with $e^2=e$, and morphisms $(X,e)\to(Y,f)$ are morphisms $a:X\to Y$ satisfying $a=fae$. Juxtaposition, planar cup-cap duality, and the induced trace descend to this completed quotient. This definition makes no assertion that it is semisimple, that its simple objects have a specified label set, or that any braid, twist, or modularity identities hold.

## Definition references

[[def-sl-two-root-of-unity-skein-parameter|Root, loop, and quantum-integer conventions]]

[[def-temperley-lieb-diagram-category|Noncrossing matching diagrams and stacking]]

[[def-temperley-lieb-negligible-morphisms|The exact closure-trace test defining negligible morphisms]]

[[lem-temperley-lieb-negligible-morphisms-form-tensor-ideal|Closure of negligible morphisms under composition and tensor product]]

[[thm-temperley-lieb-diagram-category-laws|Category and monoidal laws for the diagram operations]]
