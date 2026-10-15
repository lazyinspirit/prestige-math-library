---
id: def-hh-frobenius-functional-and-associative-pairing
kind: definition
title: "Frobenius functionals and associative pairings"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-algebraic-dual-and-linear-functional]
justified_by: [thm-hh-finite-hopf-algebras-are-frobenius]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§4.3, Proposition 4.13, PDF pp. 23–24: Frobenius systems, associative nondegenerate pairings, and equivalent finite-projective characterizations"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 6, Theorem 6.4 and Definition 6.5, PDF pp. 15–16: nondegenerate associative forms and the Frobenius-algebra convention"
verification:
  precheck: n/a
---

## Definition

Let $k$ be a field and $A$ a finite-dimensional unital associative $k$-algebra ([[def-algebra-over-a-commutative-ring]]). A bilinear form $\beta:A\times A\to k$ is **associative** when $\beta(ab,c)=\beta(a,bc)$ for all $a,b,c\in A$. It is **nondegenerate** when both linear maps
$$
A\to A^*,\qquad a\mapsto[b\mapsto\beta(a,b)],\qquad b\mapsto[a\mapsto\beta(a,b)]
$$
are isomorphisms. A linear functional $\lambda:A\to k$ is a **Frobenius functional** when $\beta_\lambda(a,b):=\lambda(ab)$ is nondegenerate. Associativity of $\beta_\lambda$ follows from associativity of multiplication. The algebra $A$ is **Frobenius** when it has at least one Frobenius functional.
