---
id: thm-ip-semilinear-cubic-dn-identification
kind: theorem
title: "Cubic semilinear DN identification by third linearization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-ip-simple-surface-and-geodesic-xray-transform
  - lem-ip-cubic-dn-small-data-differentiability
  - thm-ip-cgo-solvability-and-remainder-bound
  - lem-ip-cubic-dn-third-linearization-identity
  - lem-ip-intersecting-gaussian-beam-four-factor-limit
  - cor-uniqueness-of-the-l-one-fourier-transform
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.4, Theorem 4.2, third-linearization identity, and intersecting-ray discussion, PDF pp. 54-57."
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semi-linear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Theorem 1 and proof, especially Proposition 6, PDF pp. 29-32."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a three-dimensional transversally anisotropic product domain with compact connected simple surface transversal $(M_0,g_0)$. Let $q_1,q_2\in C^\infty(\overline M,\mathbb R)$. Suppose that for every finite family of smooth boundary directions, the corresponding small-data nonlinear Dirichlet-to-Neumann maps for
$$-\Delta_g u+q_j u^3=0$$
agree for all sufficiently small real parameter values. Then $q_1=q_2$ on $\overline M$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product geometry]]

[[lem-ip-cubic-dn-small-data-differentiability|Small-data nonlinear DN maps]]

[[lem-ip-cubic-dn-third-linearization-identity|Third derivative identity]]

[[lem-ip-intersecting-gaussian-beam-four-factor-limit|Four-factor concentration]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the small-data, third-linearization, and four-factor suppliers [F1]--[F3].

[A2] [[def-countable-choice]] is inherited from the small-data, third-linearization, and four-factor suppliers [F1]--[F3].

**Given:** the CTA product with simple surface transversal, real smooth cubic coefficients, and equality of the finite-parameter nonlinear DN maps for every finite list of smooth boundary directions.

[F1] [[lem-ip-cubic-dn-small-data-differentiability]]: each finite-parameter solution and its nonlinear DN data are $C^3$ in the real parameters near zero.

[F2] [[lem-ip-cubic-dn-third-linearization-identity]]: the third DN derivative determines $6\int_Mq\,v_1v_2v_3\overline{v_4}\,dV_g$ for any four harmonic boundary solutions.

[F3] [[lem-ip-intersecting-gaussian-beam-four-factor-limit]]: the claimed four-factor limit at any transversal intersection is a nonzero constant times the longitudinal Fourier transform of the coefficient difference.

[F4] [[cor-uniqueness-of-the-l-one-fourier-transform]]: an $L^1(\mathbb R)$ function with identically zero Fourier transform vanishes almost everywhere.

[L1] The proof of [[lem-ip-intersecting-gaussian-beam-four-factor-limit]] is incomplete. Its exact-solution product profile, high-order remainder estimates, and longitudinal phase construction are required to conclude this theorem. The source lecture sketches these steps but does not prove them; this theorem remains escalated until that supplier is completed.

## Proof

**Given:** the data in the statement.

1.1 Fix four smooth boundary directions $h_1,h_2,h_3,h_4$. Equality of the finite-parameter DN maps for $q_1$ and $q_2$ implies equality of their mixed third derivatives at the origin. Applying [F2] to each coefficient and subtracting gives
$$\int_M(q_1-q_2)v_1v_2v_3\overline{v_4}\,dV_g=0$$
for every four harmonic functions $v_j$ arising from smooth boundary data. [A1, A2, F1, F2, given, algebra]

2.1 Fix $p\in M_0^\circ$ and $\xi\in\mathbb R$. Applying the four-factor limit [F3] to the integral identity in step 1.1 would give
$$c(p,\gamma_1,\gamma_2)\int_{I_p}e^{-i\xi x_1}(q_1-q_2)(x_1,p)\,dx_1=0,$$
where $c>0$ is the crossing normalization. The coefficient transform therefore vanishes for every $\xi$ and every $p$, provided [F3] is fully proved. This implication is conditional on the unresolved supplier check [L1]. [A1, A2, F3, L1, step 1.1]

2.2 For each $p$, extend $x_1\mapsto(q_1-q_2)(x_1,p)$ by zero outside $I_p$. It is a compactly supported $L^1(\mathbb R)$ function. If the transform conclusion of step 2.1 holds, [F4] makes this section zero almost everywhere; its smoothness in the interior of $M$ then makes $q_1-q_2=0$ on $M^\circ$, and continuity gives equality on $\overline M$. Thus the theorem follows once [L1] is resolved. [F4, L1, step 2.1, algebra] ∎

