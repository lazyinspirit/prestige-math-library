---
id: lem-ip-cubic-dn-small-data-differentiability
kind: lemma
title: "Small-data solvability and third differentiability of the cubic DN map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-ip-transversally-anisotropic-product-domain
  - lem-ip-conductivity-map-wellposedness
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-collar-neighborhood-theorem
  - def-classical-normal-derivative
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Feizmohammadi and Oksanen, An inverse problem for a semi-linear elliptic equation in Riemannian geometries (2019)"
      url: "https://arxiv.org/pdf/1904.00608v3"
      locator: "Sections 2.1-2.2, Proposition 1 and analytic dependence on boundary parameters, PDF pp. 7-12."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 4.4, the small-data cubic equation and third linearization, PDF pp. 55-56."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a compact transversally anisotropic product domain of dimension $n\geq3$ and let $q\in C^\infty(M,\mathbb R)$. Fix an integer $s>n/2+2$ and a finite family $h_1,\ldots,h_m\in C^\infty(\partial M,\mathbb C)$. For $\epsilon=(\epsilon_1,\ldots,\epsilon_m)\in\mathbb R^m$ sufficiently near zero, the equation
$$-\Delta_g u+q u^3=0\quad\text{in }M^\circ,\qquad u|_{\partial M}=\sum_{j=1}^m\epsilon_jh_j$$
has a unique solution in a fixed small $H^s(M)$ ball. The parameter map $\epsilon\mapsto u_\epsilon$ is $C^3$ into $H^s(M)$, and the corresponding nonlinear Dirichlet-to-Neumann data $\partial_{\nu_{\rm out}}u_\epsilon|_{\partial M}$ is $C^3$ into $C^0(\partial M)$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product geometry and Laplacian convention]]

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Chartwise Sobolev spaces]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Dirichlet inverse and higher regularity]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is assumed by the Sobolev algebra, embedding, and Banach implicit-function suppliers [F4]--[F6].

[A2] [[def-countable-choice]] is assumed by the Sobolev and elliptic regularity interfaces [F1], [F3].

**Given:** the product domain, real smooth $q$, integer $s>n/2+2$, and the fixed finite smooth boundary directions.

[F1] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: the chartwise integer Sobolev spaces are Banach spaces, and $H_0^1(M)$ is the closed zero-trace subspace.

[F2] [[lem-ip-conductivity-map-wellposedness]]: on a compact connected domain, $\|w\|_{L^2}\leq C_P\|\nabla w\|_{L^2}$ for zero-trace $w$.

[F3] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: the zero Dirichlet operator $-\Delta_g$ is invertible; for integer $k\geq0$, zero-trace $F\in H^k$ gives $u\in H^{k+2}$ with $\|u\|_{H^{k+2}}\leq C_k\|F\|_{H^k}$.

[F4] [[cor-sobolev-algebra-above-the-critical-index]]: for integer $s$ with $2s>n$ on a bounded smooth domain, multiplication is continuous in $W^{s,2}$, so the Sobolev space is a Banach algebra.

[F5] [[thm-higher-order-sobolev-embedding]]: for $s>n/2+2$ on a bounded smooth domain, $H^s$ embeds continuously in $C^2(\overline M)$.

[F6] [[thm-implicit-function-theorem-for-banach-spaces]]: if a $C^3$ map between Banach spaces vanishes at a point and its derivative in the unknown variable is a bounded isomorphism, its nearby zero set is the graph of a unique $C^3$ map.

[F7] [[thm-collar-neighborhood-theorem]]: boundary data on a compact smooth boundary extend smoothly into a collar by constant normal extension followed by a smooth cutoff and finite patching.

## Proof

**Given:** the data in the statement.

1.1 For $q=0$, the Dirichlet kernel of $-\Delta_g$ is trivial: if $w\in H_0^1(M)$ is weakly harmonic, testing with $w$ gives $\int_M|\nabla w|^2dV_g=0$, and the zero-trace Poincare inequality in [F2] gives $w=0$. Thus [F3] supplies the zero-boundary inverse $G=(-\Delta_g)^{-1}:H^{s-2}(M)\to X_s$, where $X_s=\{w\in H^s(M):w\in H_0^1(M)\}$. The high-order estimate in [F3], together with its bounded $H^1$ inverse, makes $G$ bounded. [A2, F1, F2, F3, given, algebra]

1.2 Since $s>n/2+2$, [F4] makes $H^s(M)$ an algebra by localizing to finitely many smooth charts, extending each localized representative to a bounded Euclidean chart domain, applying the Euclidean algebra estimate, and summing the finite norms. Thus the map $(\epsilon,w)\mapsto q(Ef_\epsilon+w)^3$ is a continuous polynomial from $\mathbb R^m\times X_s$ into $H^{s-2}(M)$, where $f_\epsilon=\sum_j\epsilon_jh_j$ and $Ef_\epsilon$ is the smooth collar extension from [F7]. Define
$$\mathcal F(\epsilon,w)=w-G\big[\Delta_g(Ef_\epsilon)-q(Ef_\epsilon+w)^3\big]\in X_s.$$
It is $C^3$ (indeed polynomial plus bounded linear maps) and $\mathcal F(0,0)=0$. [A1, A2, F1, F2, F3, F4, F6, F7, given, construct]

2.1 At $(0,0)$, the derivative $D_w\mathcal F(0,0)$ is the identity on $X_s$, because the derivative of $u\mapsto q u^3$ at $u=0$ vanishes. By [F6], there is a neighborhood of $\epsilon=0$ and a unique $C^3$ map $w(\epsilon)\in X_s$ near zero such that $\mathcal F(\epsilon,w(\epsilon))=0$. The fixed-point equation is exactly $-\Delta_g(Ef_\epsilon+w)+q(Ef_\epsilon+w)^3=0$ with boundary trace $f_\epsilon$, so $u_\epsilon=Ef_\epsilon+w(\epsilon)$ gives the unique small solution. [A1, F6, step 1.2, algebra]

2.2 By [F5], $u_\epsilon\in C^2(\overline M)$ and the outward normal derivative has a continuous boundary trace. The trace map from $C^1(\overline M)$ to $C^0(\partial M)$ is bounded in the chartwise norms, so composing the $C^3$ map $\epsilon\mapsto u_\epsilon$ with this bounded linear trace of $\partial_{\nu_{\rm out}}$ proves $C^3$ dependence of the nonlinear DN data. [A1, F5, step 2.1, algebra] ∎

