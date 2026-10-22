---
id: lem-wirtinger-local-meridian-conjugacy
kind: lemma
title: "Local meridian conjugacy at a Wirtinger crossing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-knot-planar-code,
       lem-wirtinger-crossing-ball-cover,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       thm-seifert-van-kampen,
       thm-group-pushout-as-an-amalgamated-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, printed pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification: {precheck: pass}
---

## Statement

At a crossing of an oriented knot diagram, let $o$ be the over-arc. Use an oriented local chart in which the over-tangent points in the positive horizontal direction; order the under-sides as left and right using this direction and the orientation of the projection plane. Let $u_L,u_R$ be the under-arcs on those sides. Choose a basepoint in the complement and paths to positive meridians $m_o,m_L,m_R$ that agree outside the crossing ball. In the chart where the oriented under-tangent passes from the left side to the right side, the based loops satisfy
$$m_R=m_o m_Lm_o^{-1};$$
when the oriented under-tangent passes from the right side to the left side, they satisfy
$$m_R=m_o^{-1}m_Lm_o.$$
Reversing the orientation of any meridian loop replaces its class by its group inverse. Replacing the common path from the basepoint to the crossing chart conjugates all three based classes by the same element.

## Statement references

[[def-knot-planar-code|Crossing orientation data and the left/right under-arc convention]]

[[lem-wirtinger-crossing-ball-cover|Annular crossing overlap and its local crossing-ball model]]

## Local crossing chart

The arrows mark strand orientations; the white gap is the under-strand hidden by the overpass. The symbols $m_o,m_L,m_R$ denote meridian loops in small normal disks, based by access paths outside this chart; they are not additional projected strands.

```tikz
\begin{tikzpicture}[>=stealth, line width=0.9pt]
  % The diagonal is the under-branch; the horizontal gap records the overpass.
  \draw (-1.2,-1.2) -- (1.2,1.2);
  \draw[white,line width=3.8pt] (-0.28,0) -- (0.28,0);
  \draw[->] (-1.4,0) -- (1.4,0) node[right] {$o$};
  \draw[->] (-0.42,-0.42) -- (-1.05,-1.05);
  \draw[->] (1.05,1.05) -- (0.42,0.42);
  \node[below left] at (-0.78,-0.78) {$u_R,m_R$};
  \node[above right] at (0.78,0.78) {$u_L,m_L$};
  \node[above] at (0.85,0.08) {$m_o$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The crossing-ball cover and its annular overlap, a fixed basepoint, and common basing paths outside the crossing chart.

[F1] The finite code records the oriented over-branch, the two oriented under-branches, and their cyclic order; it stores no algebraic crossing sign. [[def-knot-planar-code]]

[F2] The crossing piece is contractible and its overlap with the meridian region is an annulus with core a small circle around the crossing strand. [[lem-wirtinger-crossing-ball-cover]]

[F3] A based loop represents its based homotopy class in the fundamental group, with multiplication represented by concatenation. [[def-based-loops-and-fundamental-group]]

[F4] Reversing a based loop represents the inverse class, and homotopic based loops represent the same class. [[thm-fundamental-group-laws]]

[F5] Van Kampen identifies the inclusion maps of a path-connected overlap by a group pushout. [[thm-seifert-van-kampen]]

[F6] If one member of that pushout is trivial, the group is the other group modulo the normal closure of the overlap image. [[thm-group-pushout-as-an-amalgamated-quotient]]

## Proof

1.1 Use a crossing chart in which the over-strand is a horizontal product interval directed to the right and the under-strand passes from the left side to the right side. The annulus core in [F2], based by the shared path, is homotopic to the loop that goes once around the over-meridian, then around the left under-meridian, then oppositely around the over-meridian, and finally oppositely around the right under-meridian. Its word is $m_om_Lm_o^{-1}m_R^{-1}$. The chart with the opposite orientation reverses the over-meridian circuit. [given, F1, F2, F3, construct]

2.1 The core bounds a disk in the contractible crossing piece, so its overlap image is killed normally in the pushout by [F5] and [F6]. Thus the crossing word from step 1.1 is the identity, which gives $m_R=m_om_Lm_o^{-1}$; reversing the chart replaces the conjugating loop by its inverse. [F2, F4, F5, F6, step 1.1, algebra]

3.1 Reversing a meridian parametrization reverses its loop, so its class is the inverse by [F4]. If the common access path is changed from $\alpha$ to $\lambda\alpha$, with $\lambda$ a loop at the basepoint, each based meridian $[\alpha\mu\alpha^{-1}]$ becomes $[\lambda][\alpha\mu\alpha^{-1}][\lambda]^{-1}$. Thus all three classes are conjugated by the same element. [F3, F4, construct, algebra] ∎
