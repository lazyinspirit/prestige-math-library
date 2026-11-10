---
title: "Perfect determinant with true-triangle additivity: precise external input"
status: published
research_item: thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input
dependency_level: 5
---

PDF p. 8: Proposition3.2, perfect determinant; precise KM true-triangle input

## Prerequisites

- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Knudsen–Mumford, The projectivity of the moduli space of stable curves I: Preliminaries on det and Div, Math. Scand. 39 (1976), 19–55 · Chapter I, pp.20–21 and31; Definition2 p.37 and remark p.38; perfect-complex definition and Proposition4 p.39; Definition4 pp.40–42; Theorem2 p.42; warning and Proposition7 p.44](https://journals.msp.org/mscand/article/download/2000/1999)

## Statement
Under AC and fixed universes for the sheaf-derived model, let $X$ be a scheme and let its perfect complexes mean objects locally represented by bounded finite locally free complexes. There is a global graded determinant functor on their derived isomorphisms. Its value is a line with locally constant integer Euler rank. For every actual short-exact complex diagram $0\to P\to Q\to R\to0$ with perfect terms, its true-triangle additivity supplies an isomorphism $\det(P)\otimes\det(R)\cong\det(Q)$. The determinant of zero is the trivial graded line. On a bounded finite locally free representative its underlying line is $\bigotimes_i(\det P^i)^{(-1)^i}$. It commutes with derived pullback, with the source's composition compatibility.

## Statement references
[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## External input
Knudsen–Mumford Definition4 and Theorem2 are the external input, under the exact hypotheses and reading limits in the source record. Their perfect-complex definition agrees with the supplied local sheaf-derived definition. Their true triangles retain actual short-exact complex diagrams; one cannot replace all their morphisms by arbitrary commuting ordinary derived-triangle diagrams. The graded-line symmetry is retained before taking Picard classes.

For applications to cofiber classes, an actual complex map has the termwise split short-exact diagram from its target to its mapping cone to its shifted source. This is within the imported true-triangle contract even when no global bounded bundle representative exists. No resolution property, separatedness, regularity or finite-type condition is imposed on $X$. This input supplies the global line and its descent isomorphisms; it supplies no enhanced K-space map or unrestricted ordinary-triangle naturality. No local proof of the imported determinant theorem is claimed.
