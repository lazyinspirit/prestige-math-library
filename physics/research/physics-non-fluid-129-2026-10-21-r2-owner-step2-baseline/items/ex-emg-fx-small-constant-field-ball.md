---
id: ex-emg-fx-small-constant-field-ball
kind: example
title: Constant-field branch on a ball
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - thm-emg-fx-small-dirichlet-data
  - def-emg-fx-dirichlet-constraint-problem
dependency_roles:
  thm-emg-fx-small-dirichlet-data: mathematical-premise
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.1)-(3.12); geometric-normalized seed fields and the time-symmetric scalar constraint."
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order (2001)"
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "Chapter 4, Theorems 4.6 and 4.8; the local example's linear Dirichlet coefficient is computed directly."
verification:
  precheck: pass
---

## Example

Let $\Omega=B_R(0)\subset\mathbb R^3$ for a fixed length $R>0$, let $\bar E_0=a\,e_1$ be a constant Euclidean base vector with $a\geq0$ of units inverse length, and let $\bar B_0=0$. The actual fields are $\bar E_\varepsilon=\varepsilon\bar E_0$, $\bar B_\varepsilon=\varepsilon\bar B_0$, so $S=|\bar E_0|^2+|\bar B_0|^2=a^2$ is nonnegative and Hölder continuous, both actual seed fields are divergence-free, and $\varepsilon$ is dimensionless. Under the hypotheses of *Small charged Dirichlet conformal branch*, the bounded-domain equation has a unique local branch with

$$\psi_\varepsilon(x)=1+\varepsilon^2\frac{a^2}{24}\bigl(R^2-|x|^2\bigr)+O_{C^{2,\alpha}}(\varepsilon^4),\qquad \psi_\varepsilon\geq1.$$

This example concerns only the fixed ball and its Dirichlet data.

## Example references

[[thm-emg-fx-small-dirichlet-data]]

## Facts & Assumptions

**Given:** $R>0$, $a\geq0$, the base seed fields and their $\varepsilon$-scaled actual fields from the Statement, and the small-branch theorem.

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: for a nonnegative $S\in C^{0,\alpha}(\overline\Omega)$, the equation is $-8\Delta\psi=2\varepsilon^2S\psi^{-3}$ with $\psi=1$ on the boundary.

[F2] [[thm-emg-fx-small-dirichlet-data]]: for sufficiently small $|\varepsilon|$, the solution is unique in a fixed $C^{2,\alpha}$ neighborhood, is at least $1$, and equals $1+\varepsilon^2v+O_{C^{2,\alpha}}(\varepsilon^4)$, where $-8\Delta v=2S$ with zero boundary values.

## Verification

1.1 The base fields are smooth and $\partial_i\bar E_0^i=\partial_i\bar B_0^i=0$, so the source in [F1] is the constant $S=a^2$, and scaling them by $\varepsilon$ preserves their zero divergences. The units are consistent: $a^2$ and $\Delta$ have units of inverse length squared, while $\psi$ and $\varepsilon$ are dimensionless. [given, F1, algebra]

2.1 On $B_R(0)$, define $v(x):=\frac{a^2}{24}(R^2-|x|^2)$. It vanishes on $\partial B_R$, and $\Delta |x|^2=6$ in $\mathbb R^3$, so $-8\Delta v= -8(-6a^2/24)=2a^2=2S$. By the uniqueness in [F2], this is the coefficient $v$ in the branch expansion. [F1, F2, step 1.1, algebra]

3.1 Apply [F2] to this fixed domain and source. Substitution of the $v$ computed in step 2.1 yields the stated expansion, local uniqueness, and positivity; no conclusion is made for other boundary conditions or domains. [F2, step 2.1, algebra] ∎
