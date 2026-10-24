---
id: thm-qc-tqc-hexagon-coordinates
kind: theorem
title: Hexagon in F/R coordinates
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-qc-tqc-f-symbol, def-qc-tqc-r-symbol, def-braiding, lem-qc-tqc-fusion-tree-dimension]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.1, Definition 8.1.1, the two hexagon identities."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: multiplicity-aware F-matrix coordinates."
---

## Statement

Let $\mathcal C$ be a unitary braided fusion category with associator $\alpha$ and
braiding $c$. For all objects $X,Y,Z$, its two hexagons are

$$\alpha_{Y,Z,X}\circ c_{X,Y\otimes Z}\circ\alpha_{X,Y,Z} =(\operatorname{id}_Y\otimes c_{X,Z})\circ\alpha_{Y,X,Z} \circ(c_{X,Y}\otimes\operatorname{id}_Z),$$

$$\alpha_{Z,X,Y}^{-1}\circ c_{X\otimes Y,Z}\circ\alpha_{X,Y,Z}^{-1} =(c_{X,Z}\otimes\operatorname{id}_Y)\circ\alpha_{X,Z,Y}^{-1} \circ(\operatorname{id}_X\otimes c_{Y,Z}).$$

For simple input charges and a fixed simple total charge, the two route matrices
in each equation are equal in fusion-tree coordinates. Each entry is the sum
over all intermediate simple charges and multiplicity indices of the products
of the corresponding F- and R-block entries.

## Facts & Assumptions

**Given:** a braided fusion category, simple input charges, a simple total
charge, and the orthonormal fusion-tree bases.

[F1] [[def-braiding]]: the braiding is a natural isomorphism and satisfies the
two hexagon equations displayed in the Statement.

[F2] [[def-qc-tqc-f-symbol]]: each associator change between tree bases is
represented by the corresponding F block, with all multiplicity indices.

[F3] [[def-qc-tqc-r-symbol]]: each braiding exchange on a channel is represented
by the corresponding typed R block.

[F4] [[lem-qc-tqc-fusion-tree-dimension]]: each intermediate tree space has a
complete basis indexed by all admissible simple labels and vertex multiplicity
indices.

## Proof
1.1 On a fixed fusion-tree basis, the matrix of each associator factor is the appropriate F block by [F2], and the matrix of each channel exchange is the appropriate R block by [F3]. An identity factor preserves all untouched labels and multiplicity indices. If a braiding input is a tensor product rather than a simple charge, decompose it into its finite simple summands; its matrix is the resulting finite block matrix, with the summand and multiplicity indices kept. Thus every factor in either hexagon composite has a specified finite matrix. [F2, F3, F4, construct]

2.1 For the first hexagon, let $M_1,M_2,M_3$ be the matrices of $\alpha_{X,Y,Z}$, $c_{X,Y\otimes Z}$, and $\alpha_{Y,Z,X}$ in order along its left route, and let $N_1,N_2,N_3$ be those of $c_{X,Y}\otimes\operatorname{id}_Z$, $\alpha_{Y,X,Z}$, and $\operatorname{id}_Y\otimes c_{X,Z}$ along its right route. For fixed endpoint indices $x,z$, the entries are respectively $\sum_{u,v}(M_3)_{z,v}(M_2)_{v,u}(M_1)_{u,x}$ and $\sum_{u',v'}(N_3)_{z,v'}(N_2)_{v',u'}(N_1)_{u',x}$. Every intermediate index is the full tuple of simple charges and vertex multiplicity indices for that tree. The two structural maps are equal by the first hexagon [F1], so their coordinate entries and these finite sums are equal. [F1, F2, F3, F4, step 1.1, algebra]

2.2 For the second hexagon, let $P_1,P_2,P_3$ be the matrices of $\alpha_{X,Y,Z}^{-1}$, $c_{X\otimes Y,Z}$, and $\alpha_{Z,X,Y}^{-1}$ along its left route; let $Q_1,Q_2,Q_3$ be those of $\operatorname{id}_X\otimes c_{Y,Z}$, $\alpha_{X,Z,Y}^{-1}$, and $c_{X,Z}\otimes\operatorname{id}_Y$ along its right route. The entries at fixed endpoints are $\sum_{u,v}(P_3)_{z,v}(P_2)_{v,u}(P_1)_{u,x}$ and $\sum_{u',v'}(Q_3)_{z,v'}(Q_2)_{v',u'}(Q_1)_{u',x}$. The indices again range over every simple intermediate charge and multiplicity coordinate. The second root hexagon [F1] makes the structural maps equal, so the two finite sums agree. [F1, F2, F3, F4, step 1.1, algebra]

3.1 The two matrix equalities in steps 2.1 and 2.2 are the coordinate forms of the first and second hexagons, respectively, and each includes all admissible intermediate labels and multiplicities. [step 2.1, step 2.2] ∎
## Hexagon diagrams

The first diagram shows the two routes from $(X\otimes Y)\otimes Z$ to
$Y\otimes(Z\otimes X)$; the second shows the routes from
$X\otimes(Y\otimes Z)$ to $(Z\otimes X)\otimes Y$. The arrow labels are
exactly the maps in the two displayed equations. They illustrate the equations;
the proof above uses the typed composites and their matrix coefficients.

```tikzcd
\Large
\begin{tikzcd}[column sep=huge, row sep=huge, scale=1.5, transform shape]
((X\otimes Y)\otimes Z)
  \arrow[r,"\alpha_{X,Y,Z}"]
  \arrow[d,"c_{X,Y}\otimes\mathrm{id}_Z"']
& X\otimes(Y\otimes Z)
  \arrow[r,"c_{X,Y\otimes Z}"]
& (Y\otimes Z)\otimes X
  \arrow[d,"\alpha_{Y,Z,X}"] \\
(Y\otimes X)\otimes Z
  \arrow[r,"\alpha_{Y,X,Z}"']
& Y\otimes(X\otimes Z)
  \arrow[r,"\mathrm{id}_Y\otimes c_{X,Z}"']
& Y\otimes(Z\otimes X)
\end{tikzcd}
```

```tikzcd
\Large
\begin{tikzcd}[column sep=huge, row sep=huge, scale=1.5, transform shape]
X\otimes(Y\otimes Z)
  \arrow[r,"\mathrm{id}_X\otimes c_{Y,Z}"]
  \arrow[d,"\alpha_{X,Y,Z}^{-1}"']
& X\otimes(Z\otimes Y)
  \arrow[r,"\alpha_{X,Z,Y}^{-1}"]
& (X\otimes Z)\otimes Y
  \arrow[d,"c_{X,Z}\otimes\mathrm{id}_Y"] \\
(X\otimes Y)\otimes Z
  \arrow[r,"c_{X\otimes Y,Z}"']
& Z\otimes(X\otimes Y)
  \arrow[r,"\alpha_{Z,X,Y}^{-1}"']
& (Z\otimes X)\otimes Y
\end{tikzcd}
```
