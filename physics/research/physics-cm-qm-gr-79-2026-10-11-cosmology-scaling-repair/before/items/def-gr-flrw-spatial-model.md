---
id: def-gr-flrw-spatial-model
kind: definition
title: "The constant-curvature spatial model of a homogeneous cosmology"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-riemannian-metric-and-riemannian-manifold, def-smooth-manifold, def-ricci-curvature, lem-gr-constant-rescaling-preserves-levi-civita-and-curvature, ex-the-round-sphere-has-positive-constant-sectional-curvature, ex-euclidean-space-has-zero-curvature, def-countable-choice]
dependency_roles:
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-ricci-curvature: mathematical-premise
  lem-gr-constant-rescaling-preserves-levi-civita-and-curvature: mathematical-premise
  ex-the-round-sphere-has-positive-constant-sectional-curvature: mathematical-premise
  ex-euclidean-space-has-zero-curvature: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 'Cosmology': isotropy and homogeneity, the maximally symmetric three-metric and (8.2)-(8.3), (3)R_ijkl = k(gamma_ik gamma_jl - gamma_il gamma_jk), (3)R_jl = 2k gamma_jl, printed pp. 217-219 (PDF pp. 224-226)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1: the three constant-curvature spatial metrics S^3, R^3 and H^3 and the FRW ansatz, printed pp. 198-200 (PDF pp. 205-207)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.1: the flat, positively curved and negatively curved homogeneous and isotropic three-spaces (1.1)-(1.11) and the unified constant-curvature metric, printed pp. 7-9 (PDF pp. 13-15)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Definition

This item assumes $\mathrm{AC}_\omega$ as inherited through the Riemannian
items cited below ([[def-countable-choice]]); no further choice principle is
used.

**(a) The datum.** Let $\Sigma$ be a connected smooth three-manifold without
boundary ([[def-smooth-manifold]]) and let $\gamma$ be a Riemannian metric on
$\Sigma$ ([[def-riemannian-metric-and-riemannian-manifold]]). Let
$k\in\{-1,0,1\}$. The pair $(\Sigma,\gamma)$ is a **spatial model of constant
normalized curvature $k$**, with **normalized curvature parameter** $k$, when

$$\operatorname{Ric}(\gamma)=2k\,\gamma\qquad\text{at every point of }\Sigma ,$$

where $\operatorname{Ric}(\gamma)$ is the Ricci curvature of $\gamma$
([[def-ricci-curvature]]). We then call $(\Sigma,\gamma,k)$ a **spatial model
datum**. The signs are named for orientation only: $k=+1$ is called the
**closed** or **positively curved** case, $k=0$ the **flat** case and $k=-1$
the **open** or **negatively curved** case; no topological content is attached
to these names by this definition.

**(b) Status of the condition.** The condition in (a) is pointwise and local.
It neither asserts nor implies that $\Sigma$ is complete, compact, simply
connected or geodesically complete, and it does not determine the global
model: this definition proves no classification theorem and this page assumes
none. In dimension three the condition is equivalent to the statement that
$\gamma$ has constant sectional curvature $k$; the companion lemma on
constant-curvature three-manifolds, recorded in the Remarks, proves that
equivalence. What is used by the cosmological deductions of this page is
exactly the Ricci form displayed in (a).

**(c) Normalization and scale.** The condition (a) normalizes the curvature
parameter to the three signs $\pm1,0$: if $\gamma$ is replaced by
$\lambda^2\gamma$ with a constant $\lambda>0$, then
$\operatorname{Ric}(\lambda^2\gamma)=\operatorname{Ric}(\gamma)$
([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]]), so the
replacement preserves the datum. A physical model that assigns a length scale
to the spatial geometry does so by a further factor recorded in the model
postulate, not by this mathematical definition.

**(d) Standard models.** For each $k\in\{-1,0,1\}$ at least one complete
simply connected model satisfying (a) is available: the round unit sphere
$S^3\subset\mathbb R^4$ with its induced metric has constant sectional
curvature $+1$ ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]]);
Euclidean space $\mathbb R^3$ with the standard metric has constant
sectional curvature $0$ ([[ex-euclidean-space-has-zero-curvature]]); and the
upper half-space $\{x\in\mathbb R^3:x^3>0\}$ with the metric
$y^{-2}\sum_{a=1}^{3}dx^a\otimes dx^a$, $y=x^3$, is a complete connected
simply connected Riemannian three-manifold of constant sectional curvature
$-1$. The last fact is the $n=3$, $a=1$ instance of the published
differential-geometry proposition `prop-half-space-model-geometry`, where it
is proved; that proposition's page is not declared in this run's plan, so the
fact is recorded here in prose with its exact data rather than as a formal
dependency, and this is the only use made of it. By the companion lemma
recorded in the Remarks each of these models satisfies
$\operatorname{Ric}(\gamma)=2k\gamma$ for the stated $k$, so each sign is
realized; a model datum restricts to one of them only when its postulate says
so.

## Remarks

- **Why a Ricci condition and not a metric formula.** The displayed form
  $\operatorname{Ric}(\gamma)=2k\gamma$ is the exact input of the Einstein
  reduction performed later on this page: the warped-product computation of
  the four-dimensional Ricci tensor uses only $\operatorname{Ric}(\gamma)$,
  never the explicit coordinate form of a constant-curvature metric. The
  equivalence with constant sectional curvature in clause (b) is what allows
  the standard models of clause (d), and the physical reading of the parameter,
  to be described in the usual geometric language.

- **Local does not mean global.** A quotient of a standard model by a free
  proper group of isometries inherits the local curvature condition without
  automatically inheriting global homogeneity or isotropy of the quotient.
  This page makes no such claim and no classification claim; when a physical
  model is formulated, the global spatial model is part of the adopted model
  data. The point is recorded rather than proved here, and no deduction of this
  page depends on it.

- **Companion items on this page.** The equivalence between the Ricci
  condition of clause (a) and constant sectional curvature in dimension three,
  used in clauses (b) and (d), is
  [[lem-gr-constant-curvature-three-manifold-ricci]]. The invariance of the
  Ricci tensor under a constant rescaling of the metric, used in clause (c), is
  [[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]].

- **Choice convention.** The cited Riemannian suppliers assume
  $\mathrm{AC}_\omega$ through the construction of sectional curvature,
  geodesic domains and orthonormal frames; this definition inherits that
  assumption and uses no further choice principle.
