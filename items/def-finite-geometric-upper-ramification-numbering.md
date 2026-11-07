---
id: def-finite-geometric-upper-ramification-numbering
kind: definition
title: "Upper numbering for a finite geometric local extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - lem-geometric-lower-ramification-groups-normal-and-terminate
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: n/a
---
## Definition

Let $L/K$ be a finite Galois extension of complete discretely valued fields of characteristic $p>0$ with algebraically closed residue field, group $G$, and lower groups $G_i$. For real $t>0$ set $G_t=G_{\lceil t\rceil}$ and set $G_0$ equal to the inertia group. Define
$$\varphi_{L/K}(u)=\int_0^u (G_0:G_t)^{-1}\,dt\quad (u\geq0).$$
The **Herbrand function** $\varphi_{L/K}$ is a strictly increasing bijection of $[0,\infty)$ onto itself; write $\psi_{L/K}=\varphi_{L/K}^{-1}$ and define the upper-numbered group $G^v=G_{\psi_{L/K}(v)}$ for $v\geq0$.

## Definition references

[[def-lower-ramification-groups-of-a-geometric-local-extension|Lower ramification groups of a geometric local extension]]

[[lem-geometric-lower-ramification-groups-normal-and-terminate|Geometric lower ramification groups are normal and terminate]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §2.3.1](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** The finite Galois extension and the lower groups in the Definition.

[F1] [[def-lower-ramification-groups-of-a-geometric-local-extension]]: $G_0=G$ in the algebraically closed residue-field case.

[F2] [[lem-geometric-lower-ramification-groups-normal-and-terminate]]: the lower groups decrease and are trivial for all sufficiently large integer indices.

## Proof

1.1 On each interval $(n-1,n]$, the group $G_t=G_n$ is constant, so the integrand is constant there. It is positive because $G_t$ is a subgroup of the finite group $G_0$; hence $\varphi$ is continuous and strictly increasing with $\varphi(0)=0$. [F1, given, algebra]

2.1 By [F2], for all sufficiently large $t$ the group $G_t$ is trivial. Then the integrand is the positive constant $1/|G_0|$, so $\varphi(u)\to\infty$ as $u\to\infty$. Continuity, strict increase, and the intermediate-value theorem show that $\varphi$ maps $[0,\infty)$ bijectively onto $[0,\infty)$ and has a unique inverse $\psi$. [F1, F2, step 1.1, algebra] ∎
