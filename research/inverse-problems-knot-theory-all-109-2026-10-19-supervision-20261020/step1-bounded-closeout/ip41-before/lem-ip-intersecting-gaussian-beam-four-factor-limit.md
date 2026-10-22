---
id: lem-ip-intersecting-gaussian-beam-four-factor-limit
kind: lemma
title: "Four-factor Gaussian-beam limit at a transversal intersection"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-simple-surface-and-geodesic-xray-transform
  - thm-ip-cgo-solvability-and-remainder-bound
  - lem-ip-cta-gaussian-beam-ray-limit
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.4, intersecting-geodesic concentration argument, PDF p. 57."
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semi-linear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Sections 3.1-3.2 and 5, Jacobi-weighted ray inversion and proof of Theorem 1."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $M\Subset\mathbb R\times M_0^\circ$ be a three-dimensional transversally anisotropic product domain with compact connected simple surface transversal $(M_0,g_0)$. For every $p\in M_0^\circ$ choose two nontangential unit-speed geodesic segments $\gamma_1,\gamma_2$ meeting transversely at $p$ and nowhere else. For every $\xi\in\mathbb R$ and every $Q\in C^\infty(\overline M)$, there are four exact harmonic solutions $u_{\tau,1}^+,u_{\tau,1}^-,u_{\tau,2}^+,u_{\tau,2}^-\in H^1(M)$, with no prescribed boundary values, such that
$$\lim_{\tau\to\infty}\int_MQ(x_1,x')u_{\tau,1}^+u_{\tau,1}^-u_{\tau,2}^+u_{\tau,2}^-\,dV_g =c(p,\gamma_1,\gamma_2)\int_{I_p}e^{-i\xi x_1}Q(x_1,p)\,dx_1,$$
where $I_p=\{x_1\in\mathbb R:(x_1,p)\in M^\circ\}$ and $c(p,\gamma_1,\gamma_2)>0$ is the nonzero Gaussian normalization divided by $|\sin\angle(\dot\gamma_1(p),\dot\gamma_2(p))|$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product domain]]

[[def-ip-simple-surface-and-geodesic-xray-transform|Simple transversal and nontangential geodesics]]

[[thm-ip-cgo-solvability-and-remainder-bound|Exact CGO solutions and remainder]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the CGO solver supplier [F2].

[A2] [[def-countable-choice]] is inherited from the CGO solver supplier [F2].

**Given:** the simple surface product, an interior transversal point, two crossing nontangential geodesics, a longitudinal frequency $\xi$, and $Q\in C^\infty(\overline M)$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: strict convexity and unique geodesic segments define the simple surface convention.

[F2] [[thm-ip-cgo-solvability-and-remainder-bound]]: the intended supplier constructs exact harmonic solutions from transport amplitudes and controls the correction in $L^2$.

[L1] The current proof of [[thm-ip-cgo-solvability-and-remainder-bound]] has not established that its correction belongs to $H^1(M)$. In addition, the required pair profiles and error estimates have not been proved: for each geodesic pair one needs $K_{j,\tau}(y)=(\tau/\pi)^{1/2}e^{-\tau d_j(y)^2}A_j(y)$ up to an error negligible in the product integral, with $A_j(p)\ne0$, and high enough bounds on exact remainders to control all mixed terms. One must also construct longitudinal phases whose four-factor product leaves $e^{-i\xi x_1}$. These are the exact unresolved obligations.

## Proof

**Given:** the data in the statement.

1.1 At $p$, choose two distinct non-tangential unit directions. Strict convexity and nontrapping extend them to maximal boundary-to-boundary segments. They meet transversely at $p$. If they met again at a distinct point $z$, the two different subsegments from $p$ to $z$ would violate uniqueness of geodesics on a simple surface. Thus the only intersection is $p$. [F1, given, algebra]

2.1 Assume the local profile part of [L1]. Choose coordinates with the two geodesic tangents as unit vectors $e_1,e_2$; their normal distance functions have linear parts $ell_j(y)$ with $|\det D(\ell_1,\ell_2)|=|\sin\angle(e_1,e_2)|$. Then
$$\frac{\tau}{\pi}e^{-\tau(\ell_1(y)^2+\ell_2(y)^2)}$$
has integral $|\sin\angle(e_1,e_2)|^{-1}$ on the tangent plane, by the linear change of variables $z_j=\sqrt\tau\,\ell_j(y)$. The quadratic remainders in the distance functions and the smooth coefficient $Q$ converge after the same scaling to their values at $p$ by dominated convergence. If the longitudinal phases leave $e^{-i\xi x_1}$, this local calculation yields a nonzero factor times $\int_{I_p}e^{-i\xi x_1}Q(x_1,p)dx_1$ for the principal profiles. The exact-solution error is precisely the unresolved mixed-term estimate in [L1]. [L1, given, algebra]

2.2 The estimates needed to replace the four principal beam factors by exact solutions and to control all mixed terms are not supplied by the current CGO remainder statement: its proven output is only an $L^2$ distributional correction, while products of four factors require stronger control. The longitudinal-frequency construction is also not locally proved here. These are the unresolved checks [L1], so the displayed four-factor theorem is not established by this carrier. [A1, A2, F2, L1, step 2.1] ∎

