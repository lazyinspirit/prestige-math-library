---
id: def-modular-ribbon-category-and-hopf-link-data
kind: definition
title: "Modular ribbon fusion category and Hopf-link data"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-fusion-and-multifusion-category, def-braided-monoidal-category, def-rigid-object-and-rigid-monoidal-category, def-pivotal-structure, def-spherical-structure, def-twist-and-ribbon-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-a-braided-rigid-category-has-a-drinfeld-morphism]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§8.13–8.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§3.1–3.2"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Definition

Let $\mathcal C$ be a complex finite semisimple rigid tensor category with simple unit $\mathbf 1$ and a finite set $I$ of isomorphism classes of simple objects. Fix a braiding $c$ and a ribbon twist $\theta$. The induced pivotal map is $j_X=u_X\theta_X:X\to X^{\vee\vee}$, where $u$ is the Drinfeld morphism of [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]. Throughout this pair we use the associated spherical pivotal structure: $j$ is part of the data, and sphericality means $\dim_j(X)=\dim_j(X^\vee)$ for every object, as in [[def-spherical-structure]]. Its trace is $\operatorname{tr}_j(f)=\operatorname{Tr}_L(j_Xf)$ for $f\in\operatorname{End}(X)$.

Write $0$ for the unit label and $i^*$ for the dual of $i$. Put $N_{ij}^k=\dim_{\mathbb C}\operatorname{Hom}(k,i\otimes j)$, $d_i=\operatorname{tr}_j(1_i)$, and $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$. Define $D^2=\sum_{i\in I}d_i^2$. The unnormalized Hopf-link matrix is $s=(s_{ij})$. The ribbon fusion category is **modular** when $s$ is invertible. When $D^2\ne0$, either square root $D$ defines the normalized matrix $S=s/D$; for a modular category, [[lem-modular-hopf-matrix-squared]] proves this nonvanishing. No positivity of the general $d_i$ or of $D$ is assumed.

## Convention

The trace in $d_i$ and $s_{ij}$ uses the pivotal map $j=u\theta$ and the chosen left duals. Thus $s_{ij}$ is the trace of the double braiding on $i\otimes j$, not the trace of a bare endomorphism without a pivotal comparison. The labels and order in $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$ are fixed throughout this pair.
