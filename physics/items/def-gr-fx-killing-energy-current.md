---
id: def-gr-fx-killing-energy-current
kind: definition
title: "Killing-multiplier current and its observer density"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "Pure mathematical contraction convention; it asserts no conservation, positivity, matter realization, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-smooth-covariant-two-tensor-field
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-gr-observer-and-rest-space
  - def-gr-killing-field
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.5-7.6, PDF pp. 97-103"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §10, PDF pp. 30-31"
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

Let $(\mathcal M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, let
$U\subseteq\mathcal M$ be open, let $S_{ab}$ be a smooth symmetric covariant
$2$-tensor field on $U$, and let $X$ be a smooth Killing field on $U$. For
$X_b:=g_{bc}X^c$ and $S^{ab}:=g^{ac}g^{bd}S_{cd}$, define the
**Killing-multiplier current** by

$$j_X^a:=-S^{ab}X_b.$$

At a point $p\in U$ and for an observer $n\in T_p\mathcal M$ with
$g_p(n,n)=-1$ and $n$ future-directed, define the associated
**Killing-multiplier density** by

$$\rho_X(p;n):=-g_p(n,j_X)=S_{ab}(p)n^aX^b.$$

The current and density are defined for every such $S,X,n$. The definition
imposes no conservation equation, sign condition, or coercivity property.

## Definition references

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-smooth-covariant-two-tensor-field]]

[[def-gr-inverse-metric-and-musical-isomorphisms]]

[[def-gr-observer-and-rest-space]]

[[def-gr-killing-field]]

[[def-countable-choice]]

## Remarks

The definition makes no conservation, positivity, or coercivity claim for
$j_X$ or $\rho_X$.

The smooth tangent-bundle convention assumes only countable choice
$\mathrm{AC}_\omega$; no stronger choice principle is used.
