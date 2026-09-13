---
id: def-normal-connection
kind: definition
title: Normal connection
status: draft
origin: pipeline
deps: ["def-tangential-and-normal-projections-along-a-riemannian-submanifold", "def-induced-connection-and-second-fundamental-form", "def-levi-civita-connection", "prop-connection-laws-in-directional-form", "def-metric-compatible-connection-on-a-riemannian-vector-bundle"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, definition of the induced normal connection and its adapted-frame formula, printed pages 25–26
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M\subseteq\overline M$ be an embedded
Riemannian submanifold. For a tangent field $X\in\Gamma(TM)$ and a normal
field $\nu\in\Gamma(\nu M)$, define the **normal connection** by

$$\nabla^\perp_X\nu:=\bigl(\overline\nabla_X\nu\bigr)^\perp.$$

Here $\overline\nabla_X\nu$ is well defined along $M$: the local
extension-independence calculation in
[[def-induced-connection-and-second-fundamental-form]] applies verbatim to
any smooth field along $M$, including a normal one. Smoothness then follows
locally before applying the smooth normal projection from
[[def-tangential-and-normal-projections-along-a-riemannian-submanifold]].

This operation is a connection on $\nu M$. Indeed, the directional connection
laws give

$$\nabla^\perp_{fX}\nu=f\nabla^\perp_X\nu,\qquad \nabla^\perp_X(f\nu)=X(f)\nu+f\nabla^\perp_X\nu,$$

with real linearity in the other arguments. It is compatible with the metric
induced on $\nu M$: for normal fields $\nu,\mu$,

$$X\overline g(\nu,\mu)=\overline g(\nabla^\perp_X\nu,\mu)+\overline g(\nu,\nabla^\perp_X\mu),$$

because tangent components of the two ambient derivatives are orthogonal to
normal fields. This is metric compatibility in the sense of
[[def-metric-compatible-connection-on-a-riemannian-vector-bundle]].

The assumption $\mathrm{AC}_\omega$ is inherited exactly through the smooth
restricted normal-bundle and projection construction; the displayed
operation adds no choice. For the empty submanifold or a rank-zero normal
bundle it is the unique zero connection. The same formulas apply in rank one,
in tangent dimension zero, and at boundary points. Degenerate normal metrics
are excluded by the Riemannian hypothesis.
