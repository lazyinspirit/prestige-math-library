---
id: lem-figure-eight-complement-punctured-torus-bundle
kind: lemma
title: "The figure-eight complement is a punctured-torus bundle"
status: published
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
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

[F3] **External input.** Calegari, *Foliations and the Geometry of 3-Manifolds*, §5.8.1, Construction 5.37 and Theorem 5.38 (printed pp.206–207), states that the Murasugi sum of fiber surfaces is a fiber surface and its monodromy is the composition of the monodromies extended by the identity. Example 5.39 identifies the sum of oppositely handed Hopf bands as a figure-eight fiber surface. We use this theorem as an input; its proof is not reconstructed here.

## Proof

1.1 In $S^3=\{(z_1,z_2)\in\mathbb C^2:|z_1|^2+|z_2|^2=1\}$, the standard Hopf link is $H=\{z_1z_2=0\}$. On its complement, $f(z_1,z_2)=z_1z_2/|z_1z_2|$ is a submersion to $S^1$. Writing $r=|z_1|^2$, $\theta=\arg z_1$, and $\phi=\arg z_2$, a fiber is $0<r<1$, $\phi=-\theta+\text{constant}$, hence an annulus. For base angle $s\in[0,2\pi]$, transport by $\theta_s=\theta+\chi(r)s$, $\phi_s=\phi+(1-\chi(r))s$, where $\chi=1$ near $r=0$ and $\chi=0$ near $r=1$, fixes both boundary circles at $s=2\pi$ and makes one full annular twist between them. The sign is determined by the signed linking of the positive normal push-off of the core with the core: changing the handedness of the Hopf band reverses the twist. With $a\cdot_F b=+1$, the positive twist about $a$ acts by $b\mapsto a+b$, while the negative twist about $b$ acts by $a\mapsto a+b$. Hence the two band monodromies have the stated actions $R_a$ and $L_b$. [given, A1, F2, construct]

2.1 The square plumbing is the Murasugi sum in Construction 5.37 of [F3]. Theorem 5.38 of [F3] gives a fibration with fiber $F$ and return map the composition of the two Hopf-band monodromies extended by the identity; in the stipulated order, step 1.1 identifies it as $R_a\circ L_b$. Example 5.39 of [F3] identifies the boundary of the opposite-handed sum as the standard figure-eight knot. Deleting the binding neighborhood as in [F1] therefore gives the stated exterior as the mapping torus. [F1, F3, given, step 1.1, construct]

3.1 Each annulus has Euler characteristic $0$, and the plumbing square has Euler characteristic $1$, so $\chi(F)=0+0-1=-1$. The plumbing is connected, oriented, and has one boundary component by the stated gluing; hence $\chi(F)=1-2g(F)$ gives $g(F)=1$. Thus $F$ is a once-punctured torus. [given, step 2.1, algebra]

4.1 In the ordered basis $([a],[b])$, the columns of $R_a$ are $(1,0)$ and $(1,1)$, while the columns of $L_b$ are $(1,1)$ and $(0,1)$. Their product is $\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\1&1\end{pmatrix}=\begin{pmatrix}2&1\\1&1\end{pmatrix}$. Inclusion of the once-punctured torus into the torus obtained by capping its sole boundary induces an isomorphism on $H_1$, since attaching a disk along the boundary adds no 1-cycle or 2-cycle relation in degree one. Extending the boundary-fixing monodromy by the identity on that disk therefore has the same displayed action. [given, step 2.1, algebra] ∎

## Diagram

The horizontal and vertical bands are plumbed along the shaded square $D$. The oriented core arcs cross once in $D$, with the indicated order giving $a\cdot_F b=+1$; their closures in the annuli are omitted from this schematic. The “positive” and “negative” labels record the Hopf-band handedness, equivalently the signs of their core push-off linking numbers. This is not a planar projection of the knot. The proof uses the explicit open-book map and product gluing, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[fill=blue!10,thick,rounded corners] (-3,-0.8) rectangle (3,0.8);
  \draw[fill=orange!10,thick,rounded corners] (-0.8,-2) rectangle (0.8,2);
  \fill[gray!40] (-0.8,-0.8) rectangle (0.8,0.8);
  \draw[blue!70!black,thick,->] (-2.45,0) -- (2.45,0) node[right] {$a$};
  \draw[orange!80!black,thick,->] (0,-1.45) -- (0,1.45) node[above] {$b$};
  \node at (-2,0.45) {positive Hopf band};
  \node at (0,1.72) {negative Hopf band};
  \node[below right] at (0.8,-0.8) {$D$};
\end{tikzpicture}
```

## Sources

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37, Theorem 5.38, Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[Kenneth Lee Baker, *Knots on Once-Punctured Torus Fibers*, §3.1 and Appendix B, Figure B.1](https://www.math.miami.edu/~kenken/Baker-Diss-07-02-04.pdf)
