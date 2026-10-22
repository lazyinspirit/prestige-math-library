---
id: def-seifert-surface-arc-surgery
kind: definition
title: Embedded arc surgery on a spanning surface
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts
        in Mathematics 175, Springer (1997)
      url: https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf
      locator: Chapter 8, Definition 8.1, printed p. 79; the full 213-page book PDF was inspected.
---
## Definition

Let $F$ be a compact oriented embedded surface in the oriented $3$-sphere. An **embedded arc surgery** on $F$ is the following operation. Choose an embedded solid cylinder $C=[0,1]\times D^2$ whose intersection with $F$ is exactly its two end disks $\{0,1\}\times D^2$, both contained in the interior of $F$, and whose interior approaches the same cooriented local side of $F$ at both disks. Require the lateral annulus $[0,1]\times\partial D^2$ to admit an orientation agreeing along both attaching circles with the orientation on the remaining part of $F$. Replace the two disks by that annulus, then round the two seams in disjoint neighbourhoods of the attaching circles to obtain a smooth embedded surface $F_C$. The core $[0,1]\times\{0\}$ is the surgery arc. The operation preserves $\partial F$ and its boundary orientation; its reverse is called an arc-surgery reduction.

```tikz
\begin{tikzpicture}[scale=0.95,>=stealth]
  \draw[thick] (-3,0) .. controls (-2.4,0.65) and (-1.8,0.65) .. (-1.2,0);
  \draw[thick] (-3,0.18) .. controls (-2.4,0.83) and (-1.8,0.83) .. (-1.2,0.18);
  \draw[dashed] (-2.7,0.1) -- (-1.5,0.1);
  \node at (-2.1,-0.45) {two end disks on $F$};
  \draw[->] (-0.85,0.15) -- (-0.15,0.15);
  \draw[thick] (0.35,0) .. controls (0.8,0.65) and (1.5,0.65) .. (2.15,0);
  \draw[thick] (0.35,0.18) .. controls (0.8,0.83) and (1.5,0.83) .. (2.15,0.18);
  \draw[thick,blue] (0.35,0.09) .. controls (0.8,0.4) and (1.5,0.4) .. (2.15,0.09);
  \node at (1.25,-0.45) {tube replaces disks};
\end{tikzpicture}
```

The drawing is a side-view schematic: the two short boundary circles are the attaching circles, the blue arc depicts one boundary of the lateral annulus, and the cylinder interior is not part of the surface. The move is defined by the embedded product cylinder above, not by the sketch.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|The oriented ambient three-sphere and embedded links]]
