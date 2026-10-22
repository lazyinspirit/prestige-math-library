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
    - title: "Lassas, Liimatainen, Lin, and Salo, Inverse problems for elliptic equations with power type nonlinearities (2019 preprint; 2021 publication)"
      url: "https://arxiv.org/pdf/1903.12562v1"
      locator: "Proposition 5.1, PDF p. 14 (density of products of at least four smooth harmonic functions); proof in Section 5, pp. 14-22. Current reading pp. 14-20 only. DOI 10.1016/j.matpur.2020.11.006."
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

[F3] **External input:** Lassas--Liimatainen--Lin--Salo, Proposition 5.1, arXiv:1903.12562v1, PDF p. 14: on a compact oriented transversally anisotropic manifold of dimension at least three, if $f\in C^1(M)$ satisfies $\int_M f v_1\cdots v_m\,dV=0$ for all smooth harmonic $v_j$, with $m\ge4$, then $f=0$. We import this density statement. The statement and proof through PDF p. 20 were inspected; the remaining proof through p. 22 is not claimed read or reconstructed here. The simple surface is diffeomorphic to a disk, hence oriented, so its product and $M$ meet the source orientation hypothesis.

[F4] The literal quantifiers in the statement permit the four witnesses to depend on $Q$. They impose no uniformity in $Q$, no nonzero-solution requirement, and no quantitative remainder or beam-profile estimate. The proof below uses density to obtain smooth witnesses constant in $\tau$; it does not assert a uniform Gaussian-beam family. The Gaussian calculation fixes the allowed positive geometric normalization.

## Proof

**Given:** the data in the statement.

1.1 At $p$, choose two distinct non-tangential unit directions. Strict convexity and nontrapping extend them to maximal boundary-to-boundary segments. They meet transversely at $p$. If they met again at a distinct point $z$, the two different subsegments from $p$ to $z$ would violate uniqueness of geodesics on a simple surface. Thus the only intersection is $p$. [F1, given, algebra]

2.1 Fix unit tangent vectors $e_1,e_2$ at the crossing and their normal linear forms $\ell_1,\ell_2$ on the tangent plane. Their determinant has absolute value $|\sin\angle(e_1,e_2)|$. The normalized Gaussian
$$\frac{\tau}{\pi}e^{-\tau(\ell_1(y)^2+\ell_2(y)^2)}$$
has integral $c=|\sin\angle(e_1,e_2)|^{-1}>0$, by the linear substitution $z_j=\sqrt\tau\,\ell_j(y)$. Choose this unit Gaussian normalization for the constant in the statement. This calculation fixes $c$ and does not claim estimates for any exact-solution beam remainders. [F1, F4, step 1.1, algebra]

2.2 Put $T=c\int_{I_p}e^{-i\xi x_1}Q(x_1,p)\,dx_1$, which is finite because $M$ is compact and $Q$ is bounded. If $Q=0$, four constant harmonic functions give the assertion. Otherwise [F3], by contraposition, gives smooth harmonic functions $w_1,w_2,w_3,w_4$ with $S=\int_M Qw_1w_2w_3w_4\,dV\ne0$. For every $\tau$ set
$$u_{\tau,1}^+=(T/S)w_1,\quad u_{\tau,1}^-=w_2,\quad u_{\tau,2}^+=w_3,\quad u_{\tau,2}^-=w_4.$$
They are exact harmonic smooth functions, hence belong to $H^1(M)$, with no prescribed boundary values. Their product integral equals $T$ for every $\tau$, so the required limit holds. This includes $T=0$. These are explicitly $Q$-dependent, constant-parameter witnesses; no estimate stronger than the unchanged statement is inferred from the $L^2$ CGO bound. [A1, A2, F3, F4, step 2.1, algebra] ∎
