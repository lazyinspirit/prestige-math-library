---
id: cex-regular-bijection-not-isomorphism-cusp
kind: counterexample
title: "The cusp parametrization t mapsto (t^2,t^3) is bijective but not an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-classical-varieties, thm-affine-morphisms-coordinate-ring-anti-equivalence]
justified_by: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Example 3.29(a)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Example 2.5.7"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement refuted

A bijective morphism of affine varieties need not be an isomorphism.

Let
$$ C:=V(v^2-u^3)\subseteq \mathbf A_k^2, $$
and define
$$ \nu:\mathbf A_k^1\to C,\qquad t\mapsto (t^2,t^3). $$
Every point of $C$ has the form $(a^2,a^3)$ for a unique $a \in k$, so $\nu$ is
bijection on points.

Its pullback on coordinate rings is
$$ k[C]=k[u,v]/(v^2-u^3)\longrightarrow k[t],\qquad u\mapsto t^2,\quad v\mapsto t^3. $$
This homomorphism is injective but not surjective, because $t$ is not in its
image. Hence [[thm-affine-morphisms-coordinate-ring-anti-equivalence]] shows
that $\nu$ is not an isomorphism.
