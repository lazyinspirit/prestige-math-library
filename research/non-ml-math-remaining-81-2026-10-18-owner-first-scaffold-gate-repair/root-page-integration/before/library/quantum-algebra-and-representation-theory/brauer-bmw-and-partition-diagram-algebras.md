---
page: brauer-bmw-and-partition-diagram-algebras
title: "Brauer, BMW, and Partition Diagram Algebras"
status: draft
items:
  - def-brauer-and-partition-diagram-categories
  - def-polynomial-invariants-for-a-rational-linear-action
  - lem-gram-map-fibers-and-rank-strata
  - lem-multilinear-minor-pfaffian-ideal-components
  - lem-even-row-tableau-generating-identity
  - lem-generic-symmetric-minor-straightening
  - lem-generic-pfaffian-straightening
  - lem-brauer-and-partition-composition-is-associative
  - lem-brauer-and-partition-diagram-basis-ranks
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - lem-generic-symmetric-determinantal-ring-normal
  - lem-generic-pfaffian-ring-normal
  - thm-brauer-generator-presentation
  - lem-bmw-cubic-relation-and-hecke-quotient
  - lem-symmetric-and-alternating-rank-coordinate-rings
  - thm-partition-diagram-orbit-basis-centralizer
  - lem-framed-kauffman-link-evaluation
  - thm-bmw-kauffman-tangle-basis
  - lem-gram-map-torsor-descent-and-codimension-extension
  - lem-brauer-contraction-functor-and-bending
  - thm-orthogonal-and-symplectic-polynomial-contraction-invariants
  - thm-orthogonal-and-symplectic-multilinear-fft-sft
  - thm-brauer-orthogonal-symplectic-tensor-centralizers
examples: []
---

This page defines typed Brauer and partition diagrams, a fixed BMW presentation, and their composition rules. The Brauer–orthogonal/symplectic results are scoped to the full groups over algebraically closed characteristic-zero fields. Their tensor centralizer maps are faithful only for $r\le m$ in the orthogonal case and $r\le n$ in the symplectic case, where $\dim V=m$ or $2n$. The partition centralizer and its orbit-basis kernel are proved over every field. The BMW basis has its own scalar-evaluation, descending-tangle, and algebraic-presentation proofs. The invariant-theory branch explicitly assumes the Axiom of Choice through its canonical commutative-algebra suppliers. No $SO(V)$, positive-characteristic orthogonal/symplectic, reverse-commutant, or BMW quantum-centralizer assertion is made.

Companion: [[brauer-bmw-and-partition-diagram-algebras-examples]]. The first picture joins the two top vertices by a cap and the two bottom vertices by a cup, so it is the cup-cap basis matching, not the identity diagram. The definitions and algebraic proofs are in the linked items.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \draw (0,1) node[above] {$1$} to[out=0,in=180] (1,1) node[above] {$2$};
  \draw (0,0) node[below] {$1'$} to[out=0,in=180] (1,0) node[below] {$2'$};
\end{tikzpicture}
```

For the BMW crossing convention, the left input passes over the right input in the first sketch. The uninterrupted strand is the overstrand; the white gap marks the understrand. The inverse generator has these same endpoints with the over/under choices reversed. This is a convention picture; the items supply the complete skein, untwisting, and basis arguments without relying on the sketches.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \node[above] at (0,1) {$i$};
  \node[above] at (1,1) {$i+1$};
  \node[below] at (0,0) {$(i+1)'$};
  \node[below] at (1,0) {$i'$};
  \draw (1,1) -- (0,0);
  \draw[white,line width=3pt] (0,1) -- (1,0);
  \draw (0,1) -- (1,0);
  \node at (1.38,0.5) {$g_i$};
\end{tikzpicture}
```

## Reading prerequisites

Proposed reading order: [[algebraic-representation-and-tensor-symmetry-map]]. Its associative-algebra module interface differs from the rational algebraic-group coaction defined locally in [[def-polynomial-invariants-for-a-rational-linear-action]]. The page-level edge is a reading route. The local rank-ring, Gram, invariant-theory, and diagram arguments list their exact logical suppliers in the items, including the canonical commutative-algebra results used for normality and descent.
