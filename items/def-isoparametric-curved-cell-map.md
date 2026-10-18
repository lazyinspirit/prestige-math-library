---
id: def-isoparametric-curved-cell-map
kind: definition
title: "Admissible isoparametric curved cells"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matching-affine-simplicial-meshes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix a reference matching affine simplicial mesh as in [[def-matching-affine-simplicial-meshes]]. An admissible curved cell is the image of a closed reference simplex $\widehat K$ under a map $F_K\in C^2(\widehat K;\mathbb R^d)$ that extends to a diffeomorphism on a neighborhood, is orientation preserving, and satisfies $0<j_0\le J_K:=\det DF_K\le j_1$ and $\|DF_K\|+\|(DF_K)^{-1}\|+\|D^2F_K\|\le C_F$. The physical cells have disjoint interiors, cover the domain up to their shared facets, and maps agree on each common reference facet under the prescribed affine facet identification. Define the volume metric $G_K=DF_K^TDF_K$, volume factor $J_K=\sqrt{\det G_K}$, and for a reference facet parametrization $\widehat f$ the surface metric $G_{K,\widehat f}=D(F_K\circ\widehat f)^TD(F_K\circ\widehat f)$ and surface factor $\sqrt{\det G_{K,\widehat f}}$. The positive-Jacobian lower bound is the admissibility certificate; it is not inferred from a drawing or from Delaunay quality.

## Shape regularity and normals

Use the map and metric conventions in the Statement. A family is uniformly isoparametric shape regular if the reference affine family is shape regular and the displayed derivative, inverse-derivative, second-derivative, and positive-Jacobian bounds have constants independent of the cell. For an oriented reference facet normal $\widehat n$, the physical oriented normal is the normalization of $\operatorname{cof}(DF_K)\widehat n=J_KDF_K^{-T}\widehat n$. A map without a certified positive lower Jacobian is not an admissible cell map.
