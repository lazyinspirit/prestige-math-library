---
id: def-lower-ramification-groups-of-a-geometric-local-extension
kind: definition
title: "Lower ramification groups of a geometric local extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-geometric-local-field-at-a-curve-point
  - def-separable-closure-in-an-algebraic-extension
  - def-finite-galois-extension-and-galois-group
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
verification:
  precheck: n/a
---
## Definition

Let $K=k((t))$ be a complete discretely valued field of characteristic $p>0$ with algebraically closed residue field $k$, let $K^{\mathrm{sep}}$ be a separable closure, and let $L/K$ be a finite Galois subextension with group $G$. Let $v_L:L^\times\to\mathbb Z$ be the normalized valuation extending that of $K$, and let $\mathcal O_L$ be its valuation ring. The residue field of $L$ is $k$, so every element of $G$ acts trivially on the residue field. For each integer $i\geq0$, the **lower ramification group** is
$$G_i(L/K)=\{\sigma\in G: v_L(\sigma(a)-a)\geq i+1\text{ for every }a\in\mathcal O_L\},$$
where $v_L(0)=+\infty$. In particular $G_0(L/K)=G$.

## Definition references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-separable-closure-in-an-algebraic-extension|The separable closure of the base inside an algebraic extension]]

[[def-finite-galois-extension-and-galois-group|Finite Galois extensions and $\operatorname{Gal}(K/F)$]]

[[def-finite-galois-extension-and-galois-group|Finite Galois extensions and $\operatorname{Gal}(K/F)$]]

[[thm-unique-extension-of-a-nonarchimedean-absolute-value|Unique extension of a nonarchimedean absolute value]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §2.2.2](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

[SGA 5, Exposé X §4.2](https://grothendiecksga.com/read/sga5/en/X-4.html)
