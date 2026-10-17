---
id: post-emg-einstein-maxwell-equations
kind: postulate
title: "Equation-based Einstein–Maxwell model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emg-geometry-units
  - def-emg-lorentzian-forms
  - post-emg-covariant-maxwell
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-lorentzian-forms: mathematical-premise
  post-emg-covariant-maxwell: formulation-prerequisite
physical_scope: >
  An equation-based adoption for a specified smooth classical matter model on
  the selected oriented, time-oriented Lorentzian four-manifold. The matter
  current and stress are supplied by that model. This postulate does not assume
  a matter action, assert existence of solutions, include singular sources or
  establish empirical validity.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§3.2.5, PDF pp. 120–124 (printed pp. 113–117), curved Maxwell action and equations; §4.1, PDF pp. 148–151 (printed pp. 141–144), Einstein–Hilbert variation; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), Maxwell and scalar stress tensors. Source units and signs are converted to the local SI conventions."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.54)–(4.72), PDF pp. 120–125, Einstein–Hilbert and matter variations; Ch. 4, equations (4.69)–(4.72), PDF pp. 123–125, electromagnetic stress and coupling. Gaussian-unit and index conventions are not adopted."
verification:
  precheck: n/a
---

## Postulate

Let $M$ be the smooth, boundaryless, oriented and time-oriented Lorentzian
four-manifold of [[def-emg-geometry-units]], with metric $g$ of signature
$(-,+,+,+)$ and the curvature convention of
[[def-emg-lorentzian-forms]]. Let $U\subseteq M$ be open. Take a smooth real
two-form $F$ and smooth current vector $j$ on $U$, with
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ under the adopted convention of
[[post-emg-covariant-maxwell]]. A chosen smooth matter model supplies a smooth
symmetric covariant tensor $T^m_{ab}$ on $U$ and the current $j$; this postulate
does not assert that arbitrary independently prescribed $T^m$ and $j$ arise
from a matter model.

Define the Einstein tensor by $G_{ab}:=\operatorname{Ric}_{ab}
-\tfrac12 Rg_{ab}$, using the curvature contractions of
[[def-emg-lorentzian-forms]], and define the smooth-field electromagnetic
stress tensor by

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

For constant cosmological parameter $\Lambda\in\mathbb R$ and
$\kappa_E:=8\pi G_N/c^4$, adopt the additional equation-based gravitational
field law

$$G_{ab}+\Lambda g_{ab}=\kappa_E\left(T^{\mathrm{EM}}_{ab}+T^m_{ab}\right).$$

Here $c>0$, $G_N>0$, and $\mu_0>0$ have the SI roles and units fixed in
[[def-emg-geometry-units]]; in length coordinates, $G_{ab}$ and
$\Lambda g_{ab}$ have units $\mathrm{m^{-2}}$, $T^{\mathrm{EM}}$ and $T^m$
have units $\mathrm{J\,m^{-3}}$, and $\kappa_E$ has units
$\mathrm{m\,J^{-1}}$. The source-free and sourced Maxwell equations remain
smooth-field postulates: point or sheet sources, distribution-valued products,
material excitation laws, and a global potential are outside this scope.

This is an equation-based adoption. It does not assume or imply the existence
of a matter action and is not derived from an action principle. The sources give
formulations in their own conventions; they motivate comparison but do not
establish a physical law or a solution-existence theorem.
