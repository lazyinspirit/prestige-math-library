---
id: lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
kind: lemma
title: "Framed cobordant submanifolds have homotopic Pontryagin-Thom maps"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
  - def-pontryagin-thom-collapse-of-a-framed-neat-cobordism
  - lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-framed-cobordism-of-embedded-submanifolds
  - def-homotopy-relative-and-path-homotopy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Theorem B, first direction, printed p.50"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "well-definedness of the inverse map: a framed bordism gives a collapse map, printed p.27"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "Theorem 3.14, printed pp.25-26"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X$ be a closed smooth manifold and let
$(N_0,\varphi_0)$, $(N_1,\varphi_1)$ be closed framed codimension-$k$
submanifolds of $X$, $k\ge0$. If they are framed cobordant
([[def-framed-cobordism-of-embedded-submanifolds]]), then their
Pontryagin-Thom maps $X\to S^k$
([[def-pontryagin-thom-map-of-a-framed-submanifold]]) are homotopic, indeed
based homotopic as maps $X_+\to S^k$; a framed cobordism supplies an explicit
homotopy $X\times I\to S^k$ whose restrictions at the two ends are the two
Pontryagin-Thom maps up to based homotopy.

## Facts & Assumptions

**Given:** A framed cobordism $(W,\varepsilon,\Psi)$ in $X\times I$ from $(N_0,\varphi_0)$ to $(N_1,\varphi_1)$.

[F1] The collapse $c_W:X\times I\to S^k$ of the framed cobordism is continuous and based, and its restrictions to $X\times\{0\}$ and $X\times\{1\}$ are collapses of $(N_0,\varphi_0)$ and $(N_1,\varphi_1)$ computed with the induced boundary tube data, hence representatives of the corresponding Pontryagin-Thom classes ([[def-pontryagin-thom-collapse-of-a-framed-neat-cobordism]]).

[F2] Pontryagin-Thom maps of a fixed framed submanifold built from different compatible tube data, metrics and radii are based homotopic ([[lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy]]).

[F3] The Pontryagin-Thom map is the based map $p\circ\Phi_\varphi\circ c:X_+\to S^k$ built from the collapse and the framing-induced homeomorphism ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F4] Homotopies of based maps can be concatenated, reversed and composed with continuous maps in the time variable, and reversed homotopies are homotopies ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

1.1 (The collapse is a homotopy between the end maps.) Choose tube data for the normal datum of $W$ in $X\times I$ as in [F1] and form the collapse $c_W:X\times I\to S^k$. By [F1], $c_W$ is continuous and based, and its restrictions $c_W(\cdot,0)$ and $c_W(\cdot,1)$ are the Pontryagin-Thom maps of $(N_0,\varphi_0)$ and $(N_1,\varphi_1)$ computed with the induced boundary tube data. Reading $c_W$ as a based homotopy $X_+\times I\to S^k$ between those two end maps, [F4] turns it into a based homotopy between the end maps. [F1, F3, F4, given]

2.1 (Replacing the induced tube data.) The induced boundary tube data are compatible tube data for $N_i$ in $X$; by [F2] the Pontryagin-Thom map of $N_i$ computed with them is based homotopic to the Pontryagin-Thom map of $(N_i,\varphi_i)$ computed with any other compatible tube data, in particular with the data used to define $f_{(N_i,\varphi_i)}$. Concatenating these two based homotopies with the end maps of step 1.1 yields a based homotopy $X_+\times I\to S^k$ from $f_{(N_0,\varphi_0)}$ to $f_{(N_1,\varphi_1)}$, by [F4]. [F2, F3, F4, step 1.1]

3.1 (Conclusion.) Step 2.1 exhibits the required based homotopy; ignoring basepoints gives the homotopy of maps $X\to S^k$, and the explicit homotopy is the collapse $c_W$ together with the two tube-comparison homotopies at the ends. For empty ends the maps are constant at the basepoint. For $k=0$, each path $t\mapsto c_W(x,t)$ in the discrete space $S^0$ is constant, so the end characteristic maps agree. No choice beyond the inherited $\mathrm{AC}_\omega$ is used. [F1, F2, F4, step 1.1, step 2.1] ∎
