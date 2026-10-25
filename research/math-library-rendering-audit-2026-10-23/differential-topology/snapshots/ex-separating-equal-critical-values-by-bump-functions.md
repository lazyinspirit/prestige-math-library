---
id: ex-separating-equal-critical-values-by-bump-functions
kind: example
title: "Two equal critical levels can be separated by adding disjoint bump perturbations near the corresponding critical points"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-finitely-many-critical-values-can-be-separated-locally, def-morse-function-and-excellent-morse-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct construction
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Example

On the flat torus $T^2=\mathbb R^2/\mathbb Z^2$, the Morse function
$$f([x],[y])=\cos(2\pi x)+\cos(2\pi y)$$
has two saddle points at the common critical value $0$. Choosing disjoint bump
functions near those saddles and adding opposite tiny constants separates the
two critical levels while leaving the Hessians unchanged.

## Facts & Assumptions

**Given:** The torus function $f([x],[y])=\cos(2\pi x)+\cos(2\pi y)$.

[F1] Morse and excellent Morse functions have the meanings fixed on the A page ([[def-morse-function-and-excellent-morse-function]]).

[L1] Repeated critical values of a compact Morse function can be separated by disjoint local bump perturbations without changing the critical Hessians ([[lem-finitely-many-critical-values-can-be-separated-locally]]).

## Verification

**Proof technique:** direct construction.

1.1 The partial derivatives are $\partial f/\partial x=-2\pi\sin(2\pi x)$ and $\partial f/\partial y=-2\pi\sin(2\pi y)$, so the critical points are exactly the four points with $x,y\in\{0,\tfrac12\}$ modulo $\mathbb Z$. At the two saddles $(0,\tfrac12)$ and $(\tfrac12,0)$ the critical value is $0$. [given, algebra]

2.1 The Hessian is diagonal with entries $-4\pi^2\cos(2\pi x)$ and $-4\pi^2\cos(2\pi y)$, so all four critical points are nondegenerate. By [F1], $f$ is Morse. Choose pairwise disjoint neighbourhoods of the two saddles and bump functions $\rho_1,\rho_2$ that are identically $1$ near the corresponding saddle and supported away from the other one. [F1, step 1.1, choose, algebra]

3.1 For sufficiently small $\varepsilon>0$, define $$g:=f+\varepsilon\rho_1-\varepsilon\rho_2.$$ The compact perturbation argument from [L1] applies to these two fixed bumps: for small enough $\varepsilon$, the function $g$ has the same critical points as $f$ and the same Hessians at those critical points. Near the first saddle one has $g=f+\varepsilon$, and near the second one has $g=f-\varepsilon$, so the two saddle critical values become $\varepsilon$ and $-\varepsilon$. [L1, step 2.1, construct]

4.1 Hence two equal critical levels can be separated by disjoint bump perturbations without changing the local Hessians. [step 3.1] ∎
