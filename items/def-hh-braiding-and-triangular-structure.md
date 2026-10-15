---
id: def-hh-braiding-and-triangular-structure
kind: definition
title: "Braiding on the module category and triangular structures"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-leg-notation-and-quasitriangular-hopf-algebra, def-hh-module-category-and-tensor-action, thm-hh-bialgebra-module-tensor-coherence]
justified_by: [thm-hh-r-matrix-constructs-a-module-braiding]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "Proposition 4.10 and Lemma 4.11, printed pp. 66–68: the natural module maps and two hexagons"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Definition 3.3 and Remark 3.6, PDF pp. 11–12; Definition 3.28 and Remark 3.31, PDF p. 17"
verification:
  precheck: n/a
---

## Definition

Let $H$ be a Hopf algebra over a field $k$ and let $H\text{-Mod}$ denote the category of all left $H$-modules and all $H$-linear maps, with tensor action and associators as in [[def-hh-module-category-and-tensor-action]] and [[thm-hh-bialgebra-module-tensor-coherence]]. A braiding on this category is a family of $H$-linear isomorphisms
$c_{V,W}:V\otimes W\longrightarrow W\otimes V$
for all left $H$-modules $V,W$, natural in both variables, for which the following equalities hold after inserting the canonical associators of the module category:
$c_{U,V\otimes W}=(\operatorname{id}_V\otimes c_{U,W})\circ(c_{U,V}\otimes\operatorname{id}_W),\qquad c_{U\otimes V,W}=(c_{U,W}\otimes\operatorname{id}_V)\circ(\operatorname{id}_U\otimes c_{V,W}).$
A quasitriangular structure $R$ is triangular if $R_{21}R=1_H\otimes1_H$. A braiding is symmetric if $c_{W,V}\circ c_{V,W}=\operatorname{id}_{V\otimes W}$ for every $V,W$. No finite-dimensional restriction is imposed on $H$ or on the modules in $H\text{-Mod}$.

## Remarks

For $R=\sum_i a_i\otimes b_i$, the candidate braiding associated with $R$ is $c_{V,W}(v\otimes w)=\sum_i b_iw\otimes a_iv$. Its well-definedness, module-linearity, naturality, hexagons, and the converse reconstruction from regular modules are supplied by [[thm-hh-r-matrix-constructs-a-module-braiding]].
