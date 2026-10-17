---
id: def-parabolic-ritz-projection
kind: definition
title: The elliptic Ritz projection for a conforming finite-element space
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-broken-and-conforming-polynomial-spaces
justified_by:
  - lem-parabolic-ritz-projection-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.2, PDF pp. 104–105: conforming spatial Galerkin subspaces for parabolic problems."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.2, pp. 4–5: the Ritz–Galerkin projection and the noncommuting semidiscrete operator diagram."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Definition

Let $(V,H,V^*)$ be a real evolution triple and let $V_h\subset V$ be a
finite-dimensional conforming subspace. In a mesh instance, the algebraic
piecewise-polynomial conventions are those of
[[def-broken-and-conforming-polynomial-spaces]]; the required inclusion into
$V$ is an explicit hypothesis of this definition. Let
$a:V\times V\to\mathbb R$ be time-independent,
bounded, and coercive as in
[[def-bounded-coercive-and-symmetric-sesquilinear-forms]], with constants
$M$ and $\alpha>0$. For $u\in V$, the equation for the unknown $z_h\in V_h$
$$a(z_h,v_h)=a(u,v_h)\qquad\text{for every }v_h\in V_h$$
is the **Ritz equation**; any solution $z_h$ is called a Ritz projection of
$u$. The item [[lem-parabolic-ritz-projection-well-defined]] proves that for
every $u$ there is exactly one solution, denoted $R_hu$, and that these
solutions define a bounded linear map $R_h:V\to V_h$. The form need not be
symmetric.
