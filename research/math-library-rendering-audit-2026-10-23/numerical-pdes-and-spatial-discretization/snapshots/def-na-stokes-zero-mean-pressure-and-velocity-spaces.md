---
id: def-na-stokes-zero-mean-pressure-and-velocity-spaces
kind: definition
title: "Stokes velocity and pressure spaces and weak forms"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    "lem-na-homogeneous-dirichlet-poincare",
    "def-countable-choice",
    "def-wkp-zero-as-a-sobolev-closure",
    "def-sobolev-space-wkp-and-its-norm",
    "thm-holder-inequality-for-integrals"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification: { precheck: n/a , judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
---

## Definition

Assume Countable Choice. Let $d\in\{2,3\}$ and let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz open set, where Lipschitz means that $\partial D$ has a finite rigidly moved graph-chart atlas. Here $H^1_0(D)$ is the $H^1$-closure of $C_c^\infty(D)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]). Since $D$ has finite measure, Holder makes every $L^2$ class integrable, so the zero-mean condition is well-defined ([[thm-holder-inequality-for-integrals]]). Define
$$V:=H^1_0(D;\mathbb R^d),\qquad Q:=L^2_0(D):=\{q\in L^2(D;\mathbb R):\int_Dq=0\}.$$
Equip $V$ with $\|v\|_V:=\|\nabla v\|_{L^2(D)}$ and $Q$ with $\|q\|_Q:=\|q\|_{L^2(D)}$. The local Poincare inequality [[lem-na-homogeneous-dirichlet-poincare]] makes the first a norm equivalent to the usual $H^1$ norm. For $v\in V$, define $\varepsilon(v):=(\nabla v+\nabla v^T)/2$ and $b(v,q):=-\int_Dq\,\operatorname{div}v$. For viscosity $\nu>0$, set $a_\nu(u,v):=2\nu\int_D\varepsilon(u):\varepsilon(v)$, where $X:Y=\sum_{i,j}X_{ij}Y_{ij}$. The continuous domain class is all bounded connected Lipschitz $D$; the exact mini-element mesh class is the narrower polygonal/polyhedral conforming affine simplicial class.
