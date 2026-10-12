---
id: def-shape-operator
kind: definition
title: Shape operator
status: published
origin: pipeline
deps: ["def-normal-connection", "def-tangential-and-normal-projections-along-a-riemannian-submanifold", "prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, definition and pointwise normal-linearity of A_v, printed pages 23–24
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 14.1.4(1), printed page 103, and hypersurface Definition 14.2.1, printed page 104
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. For a normal field
$\nu\in\Gamma(\nu M)$ along an embedded Riemannian submanifold and a tangent
field $X\in\Gamma(TM)$, define the **shape operator in the normal direction
$\nu$** by

$$S_\nu X:=-\bigl(\overline\nabla_X\nu\bigr)^\top.$$

The ambient derivative of a normal field along $M$ is well defined by the
local calculation recorded in [[def-normal-connection]], and the tangent
projection is the smooth projection of
[[def-tangential-and-normal-projections-along-a-riemannian-submanifold]].
The minus sign is part of the convention.

The value at $p$ depends only on $X_p$ and $\nu_p$. Function-linearity in the
direction gives $S_\nu(fX)=fS_\nu X$, while the section Leibniz rule gives

$$S_{f\nu}X=-\bigl(X(f)\nu+f\overline\nabla_X\nu\bigr)^\top=fS_\nu X,$$

because $X(f)\nu$ is normal. Real linearity follows from the same connection
laws. Consequently the assignment is a smooth fibrewise bilinear map

$$\nu M\times_M TM\longrightarrow TM,\qquad (\nu_p,X_p)\longmapsto S_{\nu_p}X_p,$$

or equivalently a smooth bundle map $\nu M\to\operatorname{End}(TM)$. Its
self-adjointness is proved in the next theorem and is not assumed here.

The hypothesis $\mathrm{AC}_\omega$ is inherited exactly through the smooth
normal-bundle and projection construction; the formula introduces no further
choice. If $M$ is empty, if $TM$ has rank zero, or if $\nu M$ has rank zero,
the bilinear map is uniquely zero. Rank-one and boundary cases use the same
formula, and degenerate metrics are outside the Riemannian hypothesis.
