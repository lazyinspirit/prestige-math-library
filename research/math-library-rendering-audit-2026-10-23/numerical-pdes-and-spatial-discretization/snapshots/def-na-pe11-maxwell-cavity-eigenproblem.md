---
id: def-na-pe11-maxwell-cavity-eigenproblem
kind: definition
title: PEC Maxwell cavity eigenproblem and full-kernel gauge
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-na-curl-curl-kernel-quotient-gauge
  - def-matching-affine-simplicial-meshes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, pp. 6–8: mixed curl-curl gauge formulation; §3, pp. 8–10: finite element complex and topology conventions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\Omega\subset\mathbb R^3$ be a bounded connected open set whose
boundary is locally the graph of a Lipschitz function (a bounded Lipschitz
domain). The zero-tangential boundary condition is the perfect-electric-
conductor (PEC) condition. We use PEC to name the closure convention below;
for a smooth field this is the usual condition $n\times u=0$ on the boundary.
Its space is
$$V:=H_0(\operatorname{curl};\Omega),$$
with the graph norm and closure convention of
[[def-na-hcurl-space]] and [[def-na-zero-tangential-hcurl]]. For a positive
constant permittivity $\epsilon$ and a positive constant permeability $\mu$,
write
$$(u,v)_\epsilon:=\epsilon\int_\Omega u\cdot v\,dx,\qquad K:=\{u\in V:\operatorname{curl}u=0\},\qquad X:=V\cap K^{\perp_\epsilon}.$$
Thus $X$ removes the entire PEC curl kernel, without identifying that kernel
with a scalar gradient range.

For a bounded polyhedral subcase with a finite matching affine tetrahedral
mesh $\mathcal T_h$ as in [[def-matching-affine-simplicial-meshes]], let
$$V_h:=N_h^1\cap V,\qquad K_h:=\{v_h\in V_h:\operatorname{curl}v_h=0\},\qquad X_h:=V_h\cap K_h^{\perp_\epsilon},$$
where $N_h^1$ is the lowest-order first-family edge space of
[[def-na-lowest-order-whitney-de-rham-spaces]]. The notation for $K_h$ and
the $L^2$ quotient gauge follows [[def-na-curl-curl-kernel-quotient-gauge]],
restricted to this PEC subspace. The continuous PEC eigenproblem
is to find $\lambda>0$ and $0\ne u\in X$ such that
$$\mu^{-1}(\operatorname{curl}u,\operatorname{curl}v)_{L^2} =\lambda (u,v)_\epsilon\qquad(v\in X).$$
The discrete problem replaces $X$ by $X_h$ and tests against every $v_h\in X_h$.
The unquotiented PEC pencil on $V$ is to find $\lambda\ge0$ and
$0\ne u\in V$ such that the same weak equation holds for every $v\in V$.
The positive constants are homogeneous scalar coefficients. The coefficient
extensions to variable or tensor-valued media require their own weighted
compactness hypotheses and are not inferred from the unweighted PE09
discrete-compactness interface.

