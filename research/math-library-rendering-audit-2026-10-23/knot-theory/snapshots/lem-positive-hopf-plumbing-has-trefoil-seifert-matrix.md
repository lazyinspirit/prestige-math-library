---
id: lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
kind: lemma
title: "A positive Hopf plumbing gives the trefoil Seifert matrix"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-axiom-of-choice
  - thm-linking-number-equals-signed-intersection
  - lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "§8.A, printed pp. 200–202"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Example 6.2.11, printed pp. 45–46"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the full Axiom of Choice. A positive Hopf band is an oriented annulus with unknotted core whose two boundary components, with their induced orientations, have linking number $+1$. Let $F$ be the genus-one Seifert surface obtained by plumbing two positive Hopf bands in a square, with oriented core curves $a,b$ forming a positive handle basis, and choose the plumbing side so that $a^+$ bounds a disk in $S^3$ disjoint from $b$. The oriented boundary of this standard positive two-band plumbing is the right-handed trefoil. In the positive-push convention $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ with ordered basis $(a,b)$, the Seifert matrix is
$$
V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}.
$$

More generally, the same matrix conclusion holds for any genus-one Seifert surface obtained by plumbing two oriented annuli with induced boundary linking number $+1$, provided their core curves form the stated positive handle basis and the stated disk for $a^+$ is disjoint from $b$. This broader matrix assertion does not identify the boundary knot.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push convention on ordered core curves]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The skew part of a Seifert matrix is the oriented surface intersection matrix]]

## Facts & Assumptions

**Given:** The stated positive Hopf plumbing, its oriented core curves $a,b$, the positive-push convention, and full AC for the knot Seifert-pairing interface.

[A1] Full AC is the choice-function axiom assumed by the knot Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] The Seifert matrix entry is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, with the stated positive normal. [[def-knot-seifert-pairing-and-matrix]]

[F2] The stated plumbing convention gives $a\cdot_F b=1$ and the specified bounding disk for $a^+$ is disjoint from $b$; each Hopf annulus has boundary linking $+1$ by the definition in the Statement.

[F4] The canonical three-positive-crossing closure has a genus-one disk-and-band surface, whose three pair-of-band Hopf annuli all have core self-pairing $-1$. [[lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form]]

[F3] The skew matrix of the positive-push form is the oriented intersection matrix in the same ordered basis. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

## Proof

1.1 For the positive Hopf bands with unknotted cores, the standard plumbing has the three crossing bands of the positive two-strand three-crossing closure: its two annular strips use successive pairs of the three bands, and their common disk is the plumbing square with its four alternating attaching edges. In oriented braid coordinates $(x,y,t)$ use $(X,Y,Z)=(x,-t,y)$, of determinant $+1$, to draw the closure on the $(X,Y)$ page with viewer $+Z$. The overpass runs down-left and the underpass down-right at each of the three crossings, while the two outside closure arcs are crossing-free. This is precisely the right-hand trefoil diagram of Rolfsen printed146, identified as right-hand on printed201; the comparison fixes the handedness using actual crossing data. The two core classes have intersection number $a\cdot_F b=1$ by [F2]. Since $F$ has genus one and one boundary component, its first homology has rank two; the intersection matrix in the core classes has determinant $1$. Therefore $a,b$ form an integral basis. [A1, F2, F4, given, algebra]

2.1 The following calculation also proves the broader matrix assertion: it uses only the stated annulus boundary linkings, positive handle basis, and disjoint disk, so unknotted cores are unnecessary here. By [F1], each diagonal is the self-linking of an annulus core. Equally oriented parallel cores transport to the two boundary components with one orientation reversed, so their linking is minus the boundary linking, namely $-1$. A small positive normal push returns to the first core through curves disjoint from the second. Thus $V_{11}=V_{22}=-1$. The disk specified in [F2] bounds $a^+$ in the complement of $b$, hence $\operatorname{lk}(a^+,b)=0$ and $V_{12}=0$. By [F3], $V_{12}-V_{21}=a\cdot_F b=1$, so $V_{21}=-1$. These four entries give the displayed matrix. [A1, F1, F2, F3, step 1.1, algebra] ∎

## Diagram

This schematic shows the plumbing square and the oriented core classes. Red and blue identify the two Hopf bands; the horizontal core is $a$ and the vertical core is $b$. The orientation of the core tangents and the oriented surface gives $a\cdot_F b=+1$. The diagram records the local basis convention only; the matrix proof uses the linking and intersection calculations above.

~~~tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \fill[red!14] (-2,-0.35) rectangle (2,0.35);
  \fill[blue!14] (-0.35,-2) rectangle (0.35,2);
  \draw[thick,red,->] (-2,0) -- (2,0);
  \draw[thick,blue,->] (0,-2) -- (0,2);
  \draw[dashed] (-0.35,-0.35) rectangle (0.35,0.35);
  \node[red] at (-1.3,0.55) {$a$};
  \node[blue] at (0.55,1.3) {$b$};
  \node at (0,-0.62) {plumbing square};
\end{tikzpicture}
~~~
