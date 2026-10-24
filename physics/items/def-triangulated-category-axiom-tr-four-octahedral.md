---
id: def-triangulated-category-axiom-tr-four-octahedral
kind: definition
title: "Triangulated-category axiom TR4 (octahedral)"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-distinguished-triangle, def-morphism-and-isomorphism-of-triangles, def-rotation-of-a-triangle]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

For composable $X\xrightarrow fY\xrightarrow gZ$, choose distinguished
triangles
$$X\xrightarrow fY\xrightarrow{p_f}Q_f\xrightarrow{d_f}X[1],\qquad X\xrightarrow{gf}Z\xrightarrow{p_{gf}}Q_{gf}\xrightarrow{d_{gf}}X[1],$$
and
$$Y\xrightarrow gZ\xrightarrow{p_g}Q_g\xrightarrow{d_g}Y[1].$$
**TR4** requires maps $a:Q_f\to Q_{gf}$ and $b:Q_{gf}\to Q_g$ such that
$$Q_f\xrightarrow aQ_{gf}\xrightarrow bQ_g\xrightarrow{p_f[1]\circ d_g}Q_f[1]$$
is distinguished, while $(1_X,g,a)$ is a morphism from the first chosen
triangle to the second and $(f,1_Z,b)$ is a morphism from the second to the
third.  These are the typed faces and commutativity conditions of the
octahedron.
