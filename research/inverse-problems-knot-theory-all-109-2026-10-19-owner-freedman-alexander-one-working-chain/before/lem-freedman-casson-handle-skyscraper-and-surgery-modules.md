---
id: lem-freedman-casson-handle-skyscraper-and-surgery-modules
kind: lemma
title: "Casson-handle tower and surgery modules for disk embedding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-freedman-good-group-and-disk-embedding-data
  - def-countable-choice
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§§3.3, 3.8, printed pp.50–60; Chapter 4, printed pp.62–83"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapters 12–18 and 24–28: grope/tower construction and standardness"
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ be a compact oriented topological $4$-manifold, and let a finite algebraically unobstructed disk-embedding datum in $X$ be given. A kinky handle is a framed $2$-handle whose core disk has finitely many transverse self-plumbings. A Casson-handle tower is a nested sequence of framed stages in which each self-plumbing point of one stage is replaced by a kinky handle at the next stage, with attaching regions matched. The required module asserts that the disks and their algebraic dual spheres can be organized into a countable tower of such stages, with the original attaching circles and framings preserved, so that the later surgery and standardness modules apply to the tower.

## Statement references

[[def-freedman-good-group-and-disk-embedding-data|The precise relative disk data, obstruction groups, and dual-sphere conditions]]

[[def-countable-choice|Axiom of Countable Choice used to select countably many construction stages]]

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §§3.3, 3.8 and Chapter 4, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

## Facts & Assumptions

**Given:** Countable choice and an algebraically unobstructed disk-embedding datum in $X$.

[F1] [[def-freedman-good-group-and-disk-embedding-data]]: The datum has proper immersed disks, framed algebraically dual spheres, and vanishing Wall obstructions in the stated group-ring conventions.

[A1] [[def-countable-choice]]: Every countable family of nonempty sets admits a choice function.

## Proof

1.1 The hypotheses provide the finite relative disk data and the zero obstruction conditions required to start the Casson-handle construction. [F1, given, construct]

1.2 The necessary next claim is the existence of compatible framed stages at every height and the controlled surgery/standardness properties of their limit. The cited source proof uses the capped-grope height-raising and tower convergence arguments in §§3–4; those arguments have not been reconstructed here, so this lemma is not proved in this carrier. [A1, step 1.1]

## Unresolved proof obligation

Supply a complete local construction of the framed capped-grope/Casson-handle tower, including the Whitney-disk framing corrections, dual-sphere preservation, countable-stage compatibility, and the exact hypotheses needed for the later standardness theorem. Countable choice alone does not establish that the finite-stage choices exist.

## Diagram

This rooted-tree schematic records only the attachment pattern: each node is a framed stage, and an edge labelled $p_i$ means that a new stage is attached at the self-plumbing point $p_i$ of its parent. Only two branches and two levels are shown; an actual tower can have more double points at every stage and continues through countably many stages. The diagram records no intersection signs, framings, or group-ring labels, and none of the proof claims follows from the picture.

```tikz
\begin{tikzpicture}[level distance=13mm,sibling distance=34mm,>=stealth,
  every node/.style={draw,rounded corners,align=center,font=\small},
  edge from parent/.style={draw,->}]
  \node {stage 0}
    child { node {stage 1}
      edge from parent node[left] {$p_1$}
      child { node {stage 2} edge from parent node[left] {$p_{11}$} }
      child { node {stage 2} edge from parent node[right] {$p_{12}$} }
    }
    child { node {stage 1}
      edge from parent node[right] {$p_2$}
      child { node {stage 2} edge from parent node[right] {$p_{21}$} }
    };
\end{tikzpicture}
```

