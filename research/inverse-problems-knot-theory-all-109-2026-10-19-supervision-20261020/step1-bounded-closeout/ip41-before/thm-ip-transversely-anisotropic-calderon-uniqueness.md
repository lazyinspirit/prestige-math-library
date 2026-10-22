---
id: thm-ip-transversely-anisotropic-calderon-uniqueness
kind: theorem
title: "Conditional uniqueness in the transversely anisotropic Calderon problem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-conductivity-dirichlet-to-neumann-map
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-ip-injective-geodesic-ray-transform
  - lem-ip-alessandrini-identity
  - thm-ip-cgo-solvability-and-remainder-bound
  - lem-ip-cta-gaussian-beam-ray-limit
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
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Theorems 1.2-1.4 and proof of Theorem 1.2, PDF pp. 4-24."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.2, CTA potential uniqueness and the attenuation-to-Fourier reduction."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a transversally anisotropic product domain of dimension $n\geq3$, with compact transversal $(M_0,g_0)$, and let $q_1,q_2\in C_c^\infty(M^\circ,\mathbb R)$. Assume zero is not a Dirichlet eigenvalue of either $-\Delta_g+q_j$, assume the unweighted scalar geodesic ray transform on $M_0$ is injective on compactly supported smooth functions, and suppose the full Schrödinger Dirichlet-to-Neumann maps agree:
$$\Lambda_{q_1}=\Lambda_{q_2}:H^{1/2}(\partial M)\to H^{-1/2}(\partial M).$$
Then $q_1=q_2$ on $M$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product domain and distinguished coordinate]]

[[def-ip-injective-geodesic-ray-transform|Unweighted transversal ray transform]]

[[def-ip-conductivity-dirichlet-to-neumann-map|Full Schrödinger DN map]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the DN identity and CGO solver suppliers [F1]--[F2].

[A2] [[def-countable-choice]] is inherited from the DN identity and CGO solver suppliers [F1]--[F2].

**Given:** the compact CTA product, real smooth interior-supported potentials, nonresonance of both operators, injectivity of the real scalar ray transform, and equality of full DN maps.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: under nonresonance, each Schrödinger DN map is a full boundary map on $H^{1/2}(\partial M)$ with normal derivative convention.

[F2] [[lem-ip-alessandrini-identity]]: equal full Schrödinger DN maps imply $\int_M(q_1-q_2)u_1\overline{u_2}\,dV_g=0$ for every pair of exact solutions of the two equations.

[F3] [[def-ip-injective-geodesic-ray-transform]]: if a real compactly supported smooth function has zero unweighted integrals over all nontangential transversal geodesics, then it is zero; the same implication for complex functions follows by applying the real statement to real and imaginary parts.

[F4] [[cor-uniqueness-of-the-l-one-fourier-transform]]: two $L^1(\mathbb R)$ functions with equal Fourier transforms are equal almost everywhere.

[L1] [[thm-ip-cgo-solvability-and-remainder-bound]] states an exact CGO solution with an $O(\tau^{-1})$ remainder, but its current proof only constructs a distributional $L^2$ correction. The additional $H^1$ boundary regularity required to use those solutions in [F2] is unresolved.

[L2] [[lem-ip-cta-gaussian-beam-ray-limit]] states the needed Gaussian-beam ray concentration, but its self-intersection patching and cross-term estimates remain unproved. A complete local derivation of the attenuated ray identity from exact solutions is therefore still required.

## Proof

**Given:** the data in the statement.

1.1 For any exact solutions $u_j\in H^1(M)$ with their respective equations, [F2] and the equality $\Lambda_{q_1}=\Lambda_{q_2}$ give
$$\int_M Q(x_1,x')u_1(x_1,x')\overline{u_2(x_1,x')}\,dV_g=0,\qquad Q=q_1-q_2.$$
Because $q_j\in C_c^\infty(M^\circ)$ and $M\Subset\mathbb R\times M_0^\circ$, extension of $Q$ by zero gives a smooth compactly supported function on $\mathbb R\times M_0$. [F1, F2, given]

2.1 To continue, one must construct exact CGO solutions whose opposite-frequency products are the Gaussian-beam quasimodes of [L2], with a fixed longitudinal frequency $2\lambda$, and prove that all products involving their exact remainders vanish in the limit. This has not been established in the current carrier, so the following Fourier reduction is conditional on that missing ray-identity step. [A1, A2, L1, L2]

3.1 Suppose step 2.1 has supplied
$$\int_{\gamma}\widehat Q_\lambda(\gamma(t))e^{-2\lambda t}\,dt=0 \quad\text{for every real }\lambda\text{ and every nontangential geodesic }\gamma,$$
where $\widehat Q_\lambda(x')=\int_{\mathbb R}e^{-2i\lambda x_1}Q(x_1,x')\,dx_1$. At $\lambda=0$, [F3] gives $\widehat Q_0=0$. Assume inductively that $\partial_\lambda^j\widehat Q_0=0$ for every $j<k$. Differentiate the ray identity $k$ times at $\lambda=0$. Differentiation under the finite geodesic integral is valid because $Q$ is smooth with compact $x_1$ support. Leibniz' rule leaves the unweighted ray integral of $\partial_\lambda^k\widehat Q_0$; all other terms contain lower derivatives and vanish by the induction hypothesis. Thus [F3], applied to real and imaginary parts, gives $\partial_\lambda^k\widehat Q_0=0$. Induction proves that every Taylor coefficient of $\lambda\mapsto\widehat Q_\lambda(x')$ vanishes for each fixed $x'$. [F3, given, step 2.1, induction, algebra]

3.2 For each fixed $x'$, compact $x_1$ support makes $\widehat Q_\lambda(x')$ entire in $\lambda$, so its zero Taylor series implies it vanishes for all real $\lambda$. This is the Fourier transform of the $L^1(\mathbb R)$ function $Q(\cdot,x')$ at every frequency $2\lambda$; [F4] gives $Q(\cdot,x')=0$ almost everywhere. Smoothness of $Q$ then yields $Q=0$ on $M$. [F4, step 3.1, algebra] ∎

