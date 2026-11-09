---
id: thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input
kind: theorem
title: "Perfect determinant with true-triangle additivity: precise external input"
status: published
domain: mathematics
external_input: true
deps:
  - def-scheme-perfect-complexes
  - def-exterior-determinant-bundles
  - math:def-axiom-of-choice
dependency_roles:
  def-scheme-perfect-complexes: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Knudsen–Mumford, The projectivity of the moduli space of stable curves
        I: Preliminaries on det and Div, Math. Scand. 39 (1976), 19–55"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: Chapter I, pp.20–21 and31; Definition2 p.37 and remark p.38;
        perfect-complex definition and Proposition4 p.39; Definition4 pp.40–42;
        Theorem2 p.42; warning and Proposition7 p.44
      statement: The global graded determinant of perfect complexes is invariant under
        derived isomorphisms and additive on true short-exact complex diagrams.
        It agrees locally with alternating exterior determinants and commutes
        with derived pullback. True-triangle naturality does not assert
        naturality under arbitrary morphisms of ordinary derived triangles.
      hypotheses: Arbitrary schemes, perfect complexes locally quasi-isomorphic to
        bounded finite locally free complexes, and true triangles in the derived
        category of actual short-exact complex diagrams. The reducedness
        hypothesis of Proposition7 concerns its stronger ordinary-triangle
        extension and is not a hypothesis of Theorem2.
      reading_limits: This proposal visually read cached primary scanned printed
        pp.20–21,31,37–42 and44; PDF SHA256
        59b28ddc3e8f7cc75d227a944c96ea57af0efa16190f9e333880f9feea970c39.
        Theorem2 and its reduction to Proposition4 were read; the proof left to
        the reader in Proposition4 and the full determinant construction were
        not reconstructed. Direct web retrieval of the publisher URL failed. No
        MTW/BGT K-space bridge is imported here.
dependency_level: 5
---

## Statement
Under AC and fixed universes for the sheaf-derived model, let $X$ be a scheme and let its perfect complexes mean objects locally represented by bounded finite locally free complexes. There is a global graded determinant functor on their derived isomorphisms. Its value is a line with locally constant integer Euler rank. For every actual short-exact complex diagram $0\to P\to Q\to R\to0$ with perfect terms, its true-triangle additivity supplies an isomorphism $\det(P)\otimes\det(R)\cong\det(Q)$. The determinant of zero is the trivial graded line. On a bounded finite locally free representative its underlying line is $\bigotimes_i(\det P^i)^{(-1)^i}$. It commutes with derived pullback, with the source's composition compatibility.

## Statement references
[[def-scheme-perfect-complexes]]

[[def-exterior-determinant-bundles]]

[[math:def-axiom-of-choice]]

## External input
Knudsen–Mumford Definition4 and Theorem2 are the external input, under the exact hypotheses and reading limits in the source record. Their perfect-complex definition agrees with the supplied local sheaf-derived definition. Their true triangles retain actual short-exact complex diagrams; one cannot replace all their morphisms by arbitrary commuting ordinary derived-triangle diagrams. The graded-line symmetry is retained before taking Picard classes.

For applications to cofiber classes, an actual complex map has the termwise split short-exact diagram from its target to its mapping cone to its shifted source. This is within the imported true-triangle contract even when no global bounded bundle representative exists. No resolution property, separatedness, regularity or finite-type condition is imposed on $X$. This input supplies the global line and its descent isomorphisms; it supplies no enhanced K-space map or unrestricted ordinary-triangle naturality. No local proof of the imported determinant theorem is claimed.
