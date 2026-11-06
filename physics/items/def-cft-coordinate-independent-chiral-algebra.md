---
id: def-cft-coordinate-independent-chiral-algebra
kind: definition
title: Coordinate-independent chiral algebra attached to a VOA
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-cft-smooth-projective-complex-curve
  - def-cft-aut-o-formal-coordinate-group
  - lem-cft-formal-coordinate-fibre-is-aut-o-torsor
  - lem-cft-aut-o-action-and-coordinate-covariance
  - lem-cft-chiral-operation-well-defined
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-cft-smooth-projective-complex-curve: mathematical-premise
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  lem-cft-formal-coordinate-fibre-is-aut-o-torsor: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  lem-cft-chiral-operation-well-defined: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3, §§3.1.1–3.1.2 and 3.3.1–3.3.3
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: Right D-modules, chiral operations, diagonal support, Jacobi, skew-symmetry, and the unit.
    - title: Edward Frenkel, Vertex Algebras and Algebraic Curves, Séminaire Bourbaki 875 (2000), §§4.1–4.3 and §7
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Aut O twisting, coordinate covariance, and the chiral-algebra interface.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§10.1–10.9
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal coordinate action and covariance.
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type, $X$ a smooth projective complex curve, and $\operatorname{Coord}_X\to X$ its formal-coordinate torsor. On each finite-dimensional filtration stage $V_{\le N}=\bigoplus_{0\le d\le N}V_d$, the Aut O action preserves the stage because positive Virasoro modes lower weight. Glue these stages by the transition $R_V(\rho_z)$ supplied by the preceding covariance identity to form the filtered bundle $V_X$; its ind-bundle is $\bigcup_NV_{\le N,X}$. Let $\omega_X$ be the line bundle of holomorphic one-forms, set $V_X^r:=\omega_X\otimes V_X$, and use the left connection $\nabla_{\partial_t}=\partial_t+T$. The associated right-$\mathcal D_X$ action is defined in a local coordinate by
$$\bigl(f(t)dt\otimes v(t)\bigr)\cdot\partial_t=-f'(t)dt\otimes v(t)-f(t)dt\otimes\bigl(\partial_t+T\bigr)v(t).$$

This definition is conditional on the formal local singular operation satisfying the local chiral Jacobi hypothesis established in the preceding chiral-operation lemma. Under that hypothesis, the glued map is $j_*j^*(V_X^r\boxtimes V_X^r)\to\Delta_!V_X^r$, where $j:X^2\setminus\Delta\hookrightarrow X^2$ and $\Delta:X\hookrightarrow X^2$; locally its sections are finite sums of delta derivatives supported on the diagonal. It satisfies chiral Jacobi, skew-symmetry, and the vacuum identity. This item does not claim that the current imported vertex-algebra axioms alone prove the local chiral Jacobi hypothesis.

For an open $U\subseteq X$, the right-module de Rham complex is $\Gamma(U,V_X^r\otimes\mathcal T_X)\xrightarrow{a\otimes\xi\mapsto a\cdot\xi}\Gamma(U,V_X^r)$ in degrees $-1,0$; its degree-zero cohomology is the cokernel of global right derivatives. No finite rank, local freeness, analytic-block equivalence, moduli-stack construction, or sewing theorem is part of this definition.

## Definition references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-state-field]]

[[def-cft-smooth-projective-complex-curve]]

[[def-cft-aut-o-formal-coordinate-group]]

[[lem-cft-formal-coordinate-fibre-is-aut-o-torsor]]

[[lem-cft-aut-o-action-and-coordinate-covariance]]

[[lem-cft-chiral-operation-well-defined]]
