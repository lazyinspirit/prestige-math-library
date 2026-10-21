---
id: lem-ip-intersecting-gaussian-beam-four-factor-limit
kind: lemma
title: "Four-harmonic-product realization of a longitudinal Fourier integral"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-simple-surface-and-geodesic-xray-transform
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
      locator: "Proposition 5.1, PDF p. 14 (density of products of at least four smooth harmonic functions); complete proof in Section 5, PDF pp. 14-23, including Lemma 5.2, inspected for this repair but not reconstructed locally. DOI 10.1016/j.matpur.2020.11.006."
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
where $I_p=\{x_1\in\mathbb R:(x_1,p)\in M^\circ\}$ and $c(p,\gamma_1,\gamma_2)=|\sin\angle(\dot\gamma_1(p),\dot\gamma_2(p))|^{-1}>0$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product domain]]

[[def-ip-simple-surface-and-geodesic-xray-transform|Simple transversal and nontangential geodesics]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is explicitly assumed in the Statement.

[A2] [[def-countable-choice]] is explicitly assumed in the Statement.

**Given:** the simple surface product, an interior transversal point, two crossing nontangential geodesics, a longitudinal frequency $\xi$, and $Q\in C^\infty(\overline M)$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: strict convexity and unique geodesic segments define the simple surface convention.

[F3] **External input:** Lassas--Liimatainen--Lin--Salo, Proposition 5.1, arXiv:1903.12562v1, PDF p. 14: on a compact oriented transversally anisotropic manifold of dimension at least three, if $f\in C^1(M)$ satisfies $\int_M f v_1\cdots v_m\,dV=0$ for all smooth harmonic $v_j$, with $m\ge4$, then $f=0$. We import this density statement; its proof is not reconstructed here.

[F4] The literal quantifiers in the statement permit the four witnesses to depend on $Q$. They impose no uniformity in $Q$, no nonzero-solution requirement, and no quantitative remainder or beam-profile estimate. The proof below uses density to obtain smooth witnesses constant in $\tau$; it does not assert a uniform Gaussian-beam family.

[F5] **External geometric input:** Paternain--Salo--Uhlmann, *Geometric inverse problems, with emphasis on two dimensions*, Section 3.8, Theorem 3.8.2 and Propositions 3.8.4--3.8.5 ([author-hosted full text](https://users.jyu.fi/~salomi/pub/GIP2D_driver.pdf)). The local simple-surface conditions in [F1] agree with their Definition 3.8.1. Under these hypotheses Theorem 3.8.2 gives the equivalent simple-manifold formulations, Proposition 3.8.4 gives a unique minimizing geodesic between any two points, and Proposition 3.8.5 gives a diffeomorphism with a closed ball. Thus $M_0$ is diffeomorphic to a disk and is orientable; the isometric embedding of $M$ in $\mathbb R\times M_0^\circ$ gives $M$ the product orientation. These consequences verify the orientation hypothesis of [F3] and the uniqueness use in step 1.1.

## Proof

**Given:** the data in the statement.

1.1 Since $M_0$ is a surface, choose two unit directions $v_1,v_2\in S_pM_0$ with $v_2\ne\pm v_1$. Nontrapping extends each geodesic through $p$ in both directions to a boundary-to-boundary segment, and strict convexity makes its boundary intersections nontangential. Their distinct tangent lines make the segments transverse at $p$. If they met again at a distinct point $z$, the two different subsegments from $p$ to $z$ would violate the unique-geodesic conclusion of [F5]. Thus the only intersection is $p$. [F1, F5, given, algebra]

2.1 Put $T=c\int_{I_p}e^{-i\xi x_1}Q(x_1,p)\,dx_1$, which is finite because $M$ is compact and $Q$ is bounded. If $Q=0$, four constant harmonic functions give the assertion. Otherwise, since [F5] verifies the orientation hypothesis of [F3], contraposition of [F3] gives smooth harmonic functions $w_1,w_2,w_3,w_4$ with $S=\int_M Qw_1w_2w_3w_4\,dV\ne0$. For every $\tau$ set $$u_{\tau,1}^+=(T/S)w_1,\quad u_{\tau,1}^-=w_2,\quad u_{\tau,2}^+=w_3,\quad u_{\tau,2}^-=w_4.$$ They are exact harmonic smooth functions, hence belong to $H^1(M)$, with no prescribed boundary values. Their product integral equals $T$ for every $\tau$, so the required limit holds. This includes $T=0$. These are explicitly $Q$-dependent, constant-parameter witnesses; the statement asserts no uniformity in $Q$ or quantitative remainder estimate. [A1, A2, F3, F4, F5, step 1.1, algebra] ∎

