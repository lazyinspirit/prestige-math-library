---
id: lem-figure-eight-complement-punctured-torus-bundle
kind: lemma
title: "The figure-eight complement is a punctured-torus bundle"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-knot-exterior
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "Chapter 5, §5.8.1, Construction 5.37, Theorem 5.38, Example 5.39, printed pp.206–207"
    - title: "Kenneth Lee Baker, Knots on Once-Punctured Torus Fibers, Ph.D. dissertation"
      url: "https://www.math.miami.edu/~kenken/Baker-Diss-07-02-04.pdf"
      locator: "§3.1, Figure 3.2 and printed p.27; Appendix B, Figure B.1 and printed pp.142–143"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice for the chosen smooth knot-exterior data. Let $K_8$ be the standard figure-eight knot, presented as the boundary of the square plumbing of one positive and one negative Hopf band, with one boundary component. A positive Hopf band is an oriented annulus whose positive normal push-off of its core has linking number $+1$ with the core; a negative Hopf band has linking number $-1$. A square plumbing identifies a square in the boundary collars of the annuli with the four boundary edges alternating between the annuli, then smooths corners. Let $F$ be this plumbed surface, and choose the compact exterior by deleting the interior of the binding neighborhood $N(K_8)\cong\partial F\times D^2$ supplied by the open book; on every page this neighborhood meets the page in an annular collar of $\partial F$. Let $a,b$ be the core curves, ordered so that $a$ is the positive-band core and $a\cdot_F b=+1$. The exterior $E_{K_8}$ fibers over $S^1$ with fiber $F$. With the twist convention that the positive twist $R_a$ sends $a\mapsto a$, $b\mapsto a+b$, and the negative twist $L_b$ sends $a\mapsto a+b$, $b\mapsto b$, the monodromy is $R_a\circ L_b$. After capping $\partial F$ by a disk, its action on the ordered homology basis $([a],[b])$ is represented by $\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

## Statement references

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Chapter 5, §5.8.1, Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[Kenneth Lee Baker, *Knots on Once-Punctured Torus Fibers*, §3.1 and Appendix B](https://www.math.miami.edu/~kenken/Baker-Diss-07-02-04.pdf)

## Facts & Assumptions

**Given:** The explicitly plumbed oriented knot $K_8$, the chosen compact exterior $E_{K_8}$, and the square-plumbing surface with ordered core curves $a,b$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, is the hypothesis of the smooth exterior convention [[def-countable-choice]].

[F1] [[def-knot-exterior]]: the chosen exterior is $S^3$ with the interior of the supplied closed tubular neighborhood removed.

[F2] [[def-oriented-link-in-s-three-and-ambient-isotopy]]: a knot is a smooth oriented circle embedded in the standard oriented $S^3$, considered up to orientation-preserving ambient isotopy.

## Proof

1.1 In $S^3=\{(z_1,z_2)\in\mathbb C^2:|z_1|^2+|z_2|^2=1\}$, the standard Hopf link is $H=\{z_1z_2=0\}$. On its complement, $f(z_1,z_2)=z_1z_2/|z_1z_2|$ is a submersion to $S^1$. Writing $r=|z_1|^2$, $\theta=\arg z_1$, and $\phi=\arg z_2$, a fiber is $0<r<1$, $\phi=-\theta+\text{constant}$, hence an annulus. For base angle $s\in[0,2\pi]$, transport by $\theta_s=\theta+\chi(r)s$, $\phi_s=\phi+(1-\chi(r))s$, where $\chi=1$ near $r=0$ and $\chi=0$ near $r=1$, fixes both boundary circles at $s=2\pi$ and makes one full annular twist between them. The sign is determined by the signed linking of the positive normal push-off of the core with the core: changing the handedness of the Hopf band reverses the twist. With $a\cdot_F b=+1$, the positive twist about $a$ acts by $b\mapsto a+b$, while the negative twist about $b$ acts by $a\mapsto a+b$. Hence the two band monodromies have the stated actions $R_a$ and $L_b$. [given, A1, F2, construct]

2.1 Cutting a fibered exterior open along its page gives page $\times[0,1]$, with the two ends reidentified by the monodromy. In the square plumbing, the two annulus pages meet in the plumbing square $D$ and their product collars meet in $D\times[0,1]$. The interval coordinates agree on this product, so gluing the cut-open product pieces gives $(A\mathbin{\natural_D}B)\times[0,1]=F\times[0,1]$, where $A\mathbin{\natural_D}B$ denotes the surface obtained by gluing the two annuli along $D$. Reidentifying the interval ends extends each band map by the identity outside its annulus. The first return map is the composition in the stipulated plumbing order; choosing the positive band first gives $R_a\circ L_b$. The boundary knot is the standard figure-eight isotopy class by the specified plumbing presentation and [F2], and the chosen exterior is formed by deleting the binding neighborhood as in [F1]. Thus the exterior is the mapping torus of $F$ with that monodromy. [F1, F2, given, step 1.1, construct]

3.1 Each annulus has Euler characteristic $0$, and the plumbing square has Euler characteristic $1$, so $\chi(F)=0+0-1=-1$. The plumbing is connected, oriented, and has one boundary component by the stated gluing; hence $\chi(F)=1-2g(F)$ gives $g(F)=1$. Thus $F$ is a once-punctured torus. [given, step 2.1, algebra]

4.1 In the ordered basis $([a],[b])$, the columns of $R_a$ are $(1,0)$ and $(1,1)$, while the columns of $L_b$ are $(1,1)$ and $(0,1)$. Their product is $\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\1&1\end{pmatrix}=\begin{pmatrix}2&1\\1&1\end{pmatrix}$. Inclusion of the once-punctured torus into the torus obtained by capping its sole boundary induces an isomorphism on $H_1$, since attaching a disk along the boundary adds no 1-cycle or 2-cycle relation in degree one. Extending the boundary-fixing monodromy by the identity on that disk therefore has the same displayed action. [given, step 2.1, algebra] ∎

## Diagram

The two rectangles are the Hopf-band annuli, placed on opposite sides of the plumbing square $D$. The arrows mark the ordered core curves; the labels $+$ and $-$ record their signed core push-off linking numbers. This is a plumbing schematic, not a planar projection of the knot. The proof uses the explicit open-book map and product gluing, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[fill=blue!10,thick,rounded corners] (-3,-1) rectangle (-0.5,1);
  \draw[fill=orange!10,thick,rounded corners] (0.5,-1) rectangle (3,1);
  \fill[gray!40] (-0.5,-0.35) rectangle (0.5,0.35);
  \draw[thick,->] (-2.6,0) ellipse (0.45 and 0.2);
  \draw[thick,->] (2.6,0) ellipse (0.45 and 0.2);
  \node at (-1.75,0.68) {positive Hopf band};
  \node at (1.75,0.68) {negative Hopf band};
  \node at (-2.6,-0.55) {$a$};
  \node at (2.6,-0.55) {$b$};
  \node at (0,-0.55) {$D$};
\end{tikzpicture}
```

## Sources

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37, Theorem 5.38, Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[Kenneth Lee Baker, *Knots on Once-Punctured Torus Fibers*, §3.1 and Appendix B, Figure B.1](https://www.math.miami.edu/~kenken/Baker-Diss-07-02-04.pdf)
