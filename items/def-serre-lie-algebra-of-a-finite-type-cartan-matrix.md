---
id: def-serre-lie-algebra-of-a-finite-type-cartan-matrix
kind: definition
title: Serre Lie algebra of a finite-type Cartan matrix
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-presented-by-generators-and-relations, prop-finite-type-cartan-matrix-properties]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §9, the Serre relations and the algebra g(A), printed pp. 188-189"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 24, Section 24.1 and Theorem 24.2"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Let $A=(a_{ij})$ be a finite-type Cartan matrix of size $r$
([[prop-finite-type-cartan-matrix-properties]]) and let $V$ be the complex
vector space with basis $e_1,\dots,e_r,f_1,\dots,f_r,h_1,\dots,h_r$. The
**Serre Lie algebra** $\mathfrak g(A)$ is the Lie algebra presented by the
generators $e_i,f_i,h_i$ and the relations
$$[h_i,h_j]=0,\qquad [h_i,e_j]=a_{ij}e_j,\qquad [h_i,f_j]=-a_{ij}f_j,\qquad [e_i,f_j]=\delta_{ij}h_i,$$
together with the **Serre relations**
$$(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0,\qquad (\operatorname{ad}f_i)^{1-a_{ij}}f_j=0\qquad(i\ne j),$$
in the sense of [[def-lie-algebra-presented-by-generators-and-relations]].
The exponents are positive integers because $a_{ij}\le0$, and for $a_{ij}=0$
the Serre relations reduce to $[e_i,e_j]=0$ and $[f_i,f_j]=0$. The relations
express the standard presentation of a complex semisimple Lie algebra
relative to simple-root $\mathfrak{sl}_2$ triples; the algebra $\mathfrak g(A)$
is shown to be finite-dimensional semisimple with Cartan matrix $A$ in
[[thm-serre-presentation-theorem]].
