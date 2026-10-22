---
id: def-gr-fx-killing-tensor
kind: definition
title: "Killing tensors and quadratic geodesic integrals"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "Pure differential-geometric definition; no particular Kerr Killing tensor or irreducibility claim is made."
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-smooth-covariant-two-tensor-field
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-killing-field
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.5, PDF pp. 97-100"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §§5 and 9-10"
      url: "https://arxiv.org/pdf/0706.0622"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume $\mathrm{AC}_\omega$ for the tangent-bundle smooth structure of the
Lorentzian conventions.

Let $(\mathcal M,g,N)$ be a smooth time-oriented Lorentzian four-manifold with
its metric-selected connection $\nabla$. A smooth symmetric covariant
$2$-tensor field $K_{ab}$ is a **rank-two Killing tensor** when

$$\nabla_{(a}K_{bc)}:=\frac13\left(\nabla_aK_{bc}+\nabla_bK_{ca}+\nabla_cK_{ab}\right)=0.$$

For a smooth curve $\gamma:I\to\mathcal M$ with open interval domain and affine
parameter $\lambda$, write $v=\dot\gamma$. If $\nabla_vv=0$, the curve is an
affinely parametrized geodesic, and $K_{ab}v^av^b$ is its associated quadratic
geodesic integral. It is called **reducible** if it is a finite constant
linear combination of $g_{ab}$ and symmetric products
$\xi^\flat\odot\eta^\flat$, where $\xi,\eta$ are Killing fields,
$\xi^\flat:=g(\xi,\cdot)$, and
$\alpha\odot\beta:=(\alpha\otimes\beta+\beta\otimes\alpha)/2$.

## Definition references

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-smooth-covariant-two-tensor-field]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[def-gr-killing-field]]

[[def-countable-choice]]

## Remarks

This definition supplies the mechanism by which a Killing tensor yields a
quadratic geodesic integral. It does not exhibit a particular tensor for Kerr
and does not assert that any tensor is irreducible.

The smooth tangent-bundle and tensor-derivative conventions assume only
countable choice $\mathrm{AC}_\omega$; no stronger choice principle is used.
