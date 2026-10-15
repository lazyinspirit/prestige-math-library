---
id: def-hh-canonical-hecke-trace-and-symmetrizing-form
kind: definition
title: "The canonical Hecke trace and symmetrizing form"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-coxeter-matrix-word-group-and-length, def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: [thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL lecture notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed pp. 6-7: the finite-Coxeter Hecke algebra, its standard basis, and the canonical coefficient-at-identity trace formula"
    - title: "Andrew Mathas, Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group (self-contained notes, 1998; complete 79-page text)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2, printed pp. 4-5: the coefficient-of-identity form and Proposition 1.14 for the symmetric-group Hecke algebra"
verification:
  precheck: n/a
---

## Definition

Let $(S,m)$, $W$, $R$, $H$, and $\{T_w:w\in W\}$ be as in [[def-hh-coxeter-matrix-word-group-and-length]], [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], and [[thm-hh-generic-coxeter-hecke-standard-basis]], and assume $W$ is finite. For the unique standard-basis expansion $h=\sum_{w\in W}r_wT_w$, define the **canonical Hecke trace**
$$
\tau:H\to R,\qquad \tau(h):=r_1.
$$

The associated $R$-bilinear form is $B_\tau(a,b):=\tau(ab)$. A trace is **symmetric** when $\tau(ab)=\tau(ba)$ for every $a,b\in H$. The form is **perfect** when the $R$-linear map
$$
H\longrightarrow\operatorname{Hom}_R(H,R),\qquad a\longmapsto[b\longmapsto\tau(ab)]
$$
is an isomorphism. A **symmetrizing trace** is a trace for which this form is symmetric and perfect. This is an integral definition over $R$; it assumes no field, semisimplicity, or nondegeneracy after passing to a fraction field. The theorem [[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]] proves these properties for $\tau$ and every commutative base change of $R$.
