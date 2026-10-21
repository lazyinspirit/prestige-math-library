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
    - title: "Lassas, Liimatainen, Lin, and Salo, Inverse problems for elliptic equations with power type nonlinearities (2019 preprint; 2021 publication)"
      url: "https://arxiv.org/pdf/1903.12562v1"
      locator: "Proposition 5.1, PDF p. 14, and Theorem 1.3, pp. 5-6; external smooth harmonic-product density. Complete Proposition 5.1 proof in Section 5, PDF pp. 14-23, including Lemma 5.2, inspected for this repair but not reconstructed locally. DOI 10.1016/j.matpur.2020.11.006."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorem 4.2, PDF p. 42; Section 4.4, third-linearization and intersecting-ray discussion, pp. 55-57 (sketch, not the full four-factor proof)."
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

[F5] The four-factor supplier imports the smooth harmonic-product density theorem of Lassas--Liimatainen--Lin--Salo, Proposition 5.1, PDF p. 14; its hypotheses are a compact oriented CTA manifold of dimension at least three, a $C^1$ coefficient, and four or more smooth harmonic factors. The orientation hypothesis follows here because the local simple-surface definition [F1] agrees with Paternain--Salo--Uhlmann, Definition 3.8.1: their Theorem 3.8.2 and Propositions 3.8.4--3.8.5 yield unique geodesics and show $M_0$ is diffeomorphic to a closed disk, hence orientable; $M$ inherits the product orientation. See *Geometric inverse problems, with emphasis on two dimensions*, Section 3.8 ([author-hosted full text](https://users.jyu.fi/~salomi/pub/GIP2D_driver.pdf)). The complete proof of LL--LS Proposition 5.1 in Section 5, PDF pp. 14--23, including Lemma 5.2, was inspected for this repair; only its density conclusion is imported, not locally reconstructed. The four-factor witnesses are smooth on $\overline M$, depend on the coefficient being tested, and are constant in $\tau$, so the smooth-boundary identity [F2] applies directly; no extension of that identity to arbitrary $H^1$ boundary traces is required. Theorem 1.3, pp. 5--6, is the corresponding nonlinear uniqueness theorem, not a replacement local proof here.

## Proof

**Given:** the data in the statement.

1.1 Fix four smooth boundary directions $h_1,h_2,h_3,h_4$. Equality of the finite-parameter DN maps for $q_1$ and $q_2$ implies equality of their mixed third derivatives at the origin. Applying [F2] to each coefficient and subtracting gives $$\int_M(q_1-q_2)v_1v_2v_3\overline{v_4}\,dV_g=0$$ for every four harmonic functions $v_j$ arising from smooth boundary data. [A1, A2, F1, F2, given, algebra]

2.1 The identity in step 1.1 holds also for complex smooth harmonic functions: write their boundary values as real and imaginary parts and expand the separately linear or conjugate-linear expression. Since the Laplacian has real coefficients, conjugation preserves harmonicity; replacing the fourth function by its conjugate therefore gives $\int_M Qw_1w_2w_3w_4\,dV=0$ for every four smooth complex harmonic functions, where $Q=q_1-q_2$. [F2, step 1.1, algebra]

3.1 Fix $p\in M_0^\circ$ and $\xi\in\mathbb R$. Choose the transverse boundary-to-boundary geodesic segments through $p$ supplied by [F3] (their existence is established in that supplier's proof). Apply [F3] with $Q=q_1-q_2$. Its witnesses are smooth by [F5], so their product integral is zero for every $\tau$ by step 2.1. Taking their stated limit gives $$c(p,\gamma_1,\gamma_2)\int_{I_p}e^{-i\xi x_1}(q_1-q_2)(x_1,p)\,dx_1=0,$$ where $c>0$ is the crossing normalization. The coefficient transform therefore vanishes for every $\xi$ and every $p$. [A1, A2, F3, F5, step 2.1]

4.1 For each $p$, extend $x_1\mapsto(q_1-q_2)(x_1,p)$ by zero outside $I_p$. It is a compactly supported $L^1(\mathbb R)$ function. By step 3.1, [F4] makes this section zero almost everywhere; its smoothness in the interior of $M$ then makes $q_1-q_2=0$ on $M^\circ$, and continuity gives equality on $\overline M$. Thus the theorem follows. [F4, step 3.1, algebra] ∎

