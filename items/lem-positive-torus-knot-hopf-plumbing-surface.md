---
id: lem-positive-torus-knot-hopf-plumbing-surface
kind: lemma
title: "A positive Hopf-plumbed surface for a torus knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-coprime-torus-knot
  - def-oriented-seifert-surface
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§5.3.2, printed pp. 31–32"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.2, printed pp. 24–26"
    - title: "Selman Akbulut and Burak Ozbagci, Lefschetz Fibrations on Compact Stein Surfaces"
      url: "https://msp.org/gt/2001/5-1/gt-v5-n1-p10-p.pdf"
      locator: "§2, Theorem 1 and the gate-by-gate Hopf-plumbing construction, printed pp. 324–326"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $p,q\ge2$ be coprime integers. There is a connected compact smooth oriented embedded surface $F_{p,q}\subset S^3$ whose oriented boundary is $T(p,q)$ and whose genus is $(p-1)(q-1)/2$. It can be constructed from a disk by plumbing $(p-1)(q-1)$ positive Hopf bands: a positive Hopf band is the oriented annulus spanning the positively linked Hopf link, and plumbing along a square glues square neighborhoods of properly embedded arcs in two surfaces on opposite sides of a 3-ball, with the four boundary edges alternating between the surfaces and with orientations agreeing on the square. For a connected compact oriented surface with one boundary component, genus is defined by $\chi(F)=1-2g(F)$.

## Statement references

[[def-coprime-torus-knot|The parameterized primitive torus-knot slope]]

[[def-oriented-seifert-surface|The connected compact oriented spanning-surface convention]]

[Cattabriga and Francaviglia, §5.3.2](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Calegari, §3.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Akbulut and Ozbagci, §2](https://msp.org/gt/2001/5-1/gt-v5-n1-p10-p.pdf)

## Facts & Assumptions

**Given:** Countable Choice and coprime integers $p,q\ge2$.

[A1] Countable Choice is the choice-function principle for sequences of nonempty sets ([[def-countable-choice]]).

[F1] [[def-coprime-torus-knot]] parameterizes $T(p,q)$ on the standard Heegaard torus by the primitive slope $p\alpha+q\beta$.

[F2] [[def-oriented-seifert-surface]] defines a Seifert surface as a connected compact smooth oriented embedded surface with the knot as its oriented boundary, and gives $\chi(F)=1-2g(F)$ for a one-boundary-component surface.

## Proof

1.1 Use the solid-torus side with core the first-coordinate circle, so the second coordinate is the meridional disk coordinate. At longitudinal angle $u\in\mathbb R/\mathbb Z$ in the first coordinate, the knot meets this disk at the $p$ points with second-coordinate angles $2\pi q(u+k)/p$, $k=0,\ldots,p-1$. Place these points at the vertices of a regular $p$-gon. A counterclockwise rotation by $2\pi/p$, tapered to fix the disk boundary, carries each point to the next and crosses consecutive points once in the order $\sigma_1,\ldots,\sigma_{p-1}$; each $\sigma_i$ is the positive half twist of adjacent points. Thus one such increment is the braid block $\delta=\sigma_1\cdots\sigma_{p-1}$, and the rotation through $2\pi q/p$ gives $\delta^q$. The lifted curve has winding vector $(p,q)$ in the fixed Heegaard-torus coordinates, exactly the parameterization in [F1]. The braid block permutes the points by a $p$-cycle, so its $q$th power has one cycle because $\gcd(p,q)=1$. [F1, given, construct]

2.1 At each positive crossing replace the crossing by the orientation-compatible smoothing and then attach one half-twisted rectangle in the original crossing ball; this is the oriented braid Seifert-surface construction. It gives $p$ disks joined by $q(p-1)$ positively half-twisted bands, one for each crossing. The first block has one band between each adjacent pair of disks, so its incidence graph is a path; attaching bands along a tree joins the disks to a disk. Each of the remaining $q-1$ blocks has $p-1$ bands. [A1, F1, F2, step 1.1, construct]

3.1 Add the remaining blocks in order, and within each block add the bands in the order $\sigma_1,\ldots,\sigma_{p-1}$. For each added band, a small ball containing it and the corresponding band from the preceding block can be chosen disjoint from the other crossing balls after sliding their strand rectangles along the Seifert disks. The two bands are positive half twists on the same adjacent pair; their union with the two intervening disk strips is an annulus whose boundary components have linking number $+1$, hence a positive Hopf band. The old band meets the already-built surface in a square, the new annulus lies on the opposite side of that square, and the orientations agree because both bands come from positive crossings. Thus each added band is exactly a plumbing along a square as defined in the Statement. Repeating this for all $(q-1)(p-1)$ later bands gives the stated grid of positive Hopf plumbings. [F1, step 1.1, step 2.1, construct]

4.1 A plumbing replaces the old square and the Hopf annulus by their union, so inclusion-exclusion for Euler characteristic gives $\chi(F_{p,q})=\chi(F_{p,q}^{\mathrm{old}})+0-1=\chi(F_{p,q}^{\mathrm{old}})-1$. Starting from the disk in step 2.1, after $(p-1)(q-1)$ plumbings the surface is connected and has $\chi(F_{p,q})=1-(p-1)(q-1)$. [F2, step 2.1, step 3.1, algebra]

4.2 The boundary of the constructed surface is the closure of the braid in step 1.1. Its permutation has one cycle, so the boundary has one component; the construction is connected and oriented at every band attachment. It is therefore a Seifert surface for $T(p,q)$ in the sense of [F2]. [F1, F2, step 1.1, step 3.1, construct]

5.1 Since $(p-1)(q-1)$ is even, the one-boundary-component identity $\chi(F)=1-2g(F)$ and step 4.1 give $g(F_{p,q})=(p-1)(q-1)/2$. [F2, step 4.1, step 4.2, algebra] ∎

## Diagram

For $T(3,4)$ the grid has $(3-1)(4-1)=6$ positive Hopf-band plumbings. The three columns are the three later braid blocks and the two rows are their adjacent crossing bands; process columns left to right and each column in the crossing order from step 3.1. Each rectangle represents one annulus. The proof checks the boundary, orientation, connectedness, and Euler characteristic from the braid bands; it does not infer them from the drawing.

```tikz
\begin{tikzpicture}[scale=0.95]
  \foreach \x in {0,1,2} {
    \foreach \y in {0,1} {
      \draw[thick,rounded corners=1pt] (\x,\y) rectangle +(0.82,0.62);
      \node at (\x+0.41,\y+0.31) {$H^+$};
    }
  }
  \draw[->,thick] (0.4,1.9)--(1.45,1.9);
  \draw[->,thick] (1.5,1.9)--(2.55,1.9);
  \node[above] at (1.4,2.0) {plumb along the rectangular grid};
  \node[below] at (1.25,-0.25) {six positive Hopf bands};
\end{tikzpicture}
```

