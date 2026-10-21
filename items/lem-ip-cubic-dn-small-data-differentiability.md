---
id: lem-ip-cubic-dn-small-data-differentiability
kind: lemma
title: "Small-data solvability and third differentiability of the cubic DN map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-riemannian-metric-and-riemannian-manifold
  - lem-ip-conductivity-map-wellposedness
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-collar-neighborhood-theorem
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

Let $(M,g)$ be a compact smooth Riemannian domain of dimension $n\geq1$ with smooth nonempty boundary, assume every connected component of $M$ meets the boundary, and let $q\in C^\infty(M,\mathbb R)$. Fix an integer $s>n/2+2$ and a finite family $h_1,\ldots,h_m\in C^\infty(\partial M,\mathbb C)$. For $\epsilon=(\epsilon_1,\ldots,\epsilon_m)\in\mathbb R^m$ sufficiently near zero, the equation
$$-\Delta_g u+q u^3=0\quad\text{in }M^\circ,\qquad u|_{\partial M}=\sum_{j=1}^m\epsilon_jh_j$$
has a unique solution in a fixed small $H^s(M)$ ball. The parameter map $\epsilon\mapsto u_\epsilon$ is $C^3$ into $H^s(M)$, and the corresponding nonlinear Dirichlet-to-Neumann data $\partial_{\nu_{\rm out}}u_\epsilon|_{\partial M}$ is $C^3$ into $C^0(\partial M)$. For each such finite family, write $N_{q;h_1,\ldots,h_m}(\epsilon)=\partial_{\nu_{\rm out}}u_\epsilon|_{\partial M}$ for this parameterized data map.

## Statement references

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Chartwise Sobolev spaces]]

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metric and boundary normal]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Dirichlet inverse and higher regularity]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is assumed by the Sobolev algebra, embedding, and Banach implicit-function suppliers [F4]--[F6].

[A2] [[def-countable-choice]] is assumed by the Sobolev and elliptic regularity interfaces [F1], [F3].

**Given:** the compact smooth Riemannian domain, real smooth $q$, integer $s>n/2+2$, and the fixed finite smooth boundary directions.

[F1] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: the chartwise integer Sobolev spaces are Banach spaces, and $H_0^1(M)$ is the $H^1$ closure of interior compactly supported smooth functions. Since $H^s(M)\hookrightarrow H^1(M)$ continuously, $X_s=H^s(M)\cap H_0^1(M)$ is closed in $H^s(M)$.

[F2] [[lem-ip-conductivity-map-wellposedness]]: on each compact connected component with nonempty boundary, $\|w\|_{L^2}\leq C_{P,j}\|\nabla w\|_{L^2}$ for zero-trace $w$. Compactness and local connectedness give finitely many components, so the maximum of these constants gives the inequality on $M$.

[F3] [[lem-ip-smooth-manifold-elliptic-nonresonant-regularity]]: the zero Dirichlet operator $-\Delta_g$ is invertible; for integer $k\geq0$, zero-trace $F\in H^k$ gives $u\in H^{k+2}$ with $\|u\|_{H^{k+2}}\leq C_k\|F\|_{H^k}$.

[F4] For $n\geq2$, [[cor-sobolev-algebra-above-the-critical-index]] gives the Banach-algebra bound for integer $s$ with $2s>n$ on bounded smooth chart domains; finite localization gives it on $M$. For $n=1$, the one-dimensional fundamental theorem of calculus gives $\|z\|_{L^\infty}\le C\|z\|_{H^1}$ on bounded intervals. Apply this to derivatives through order $s-1$ and use the product rule to bound each derivative of $uv$ through order $s$ in $L^2$; this gives the same algebra bound on each chart and hence on $M$.

[F5] For $n\geq2$, [[thm-higher-order-sobolev-embedding]] gives $H^s\hookrightarrow C^2(\overline M)$ when $s>n/2+2$. For $n=1$, $s\geq3$; apply the one-dimensional $H^1\hookrightarrow C^0$ estimate to derivatives through order two.

[F6] [[thm-implicit-function-theorem-for-banach-spaces]]: if a $C^3$ map between Banach spaces vanishes at a point and its derivative in the unknown variable is a bounded isomorphism, its nearby zero set is the graph of a unique $C^3$ map.

[F7] [[thm-collar-neighborhood-theorem]]: boundary data on a compact smooth boundary extend smoothly into a collar by constant normal extension followed by a smooth cutoff and finite patching.

[F8] In boundary charts, the $g$-orthogonal complement of $T\partial M$ is a smooth line bundle, and the outward choice defines a smooth unit normal. Thus $u\mapsto g(\nabla_g u,\nu_{\rm out})|_{\partial M}$ is bounded from $C^1(\overline M)$ to $C^0(\partial M)$.

## Proof

**Given:** the data in the statement.

1.1 For $q=0$, the Dirichlet kernel of $-\Delta_g$ is trivial: if $w\in H_0^1(M)$ is weakly harmonic, testing with $w$ gives $\int_M|\nabla w|^2dV_g=0$, and the zero-trace Poincare inequality in [F2] gives $w=0$. Thus [F3] supplies the zero-boundary inverse $G=(-\Delta_g)^{-1}:H^{s-2}(M)\to X_s$, where $X_s=\{w\in H^s(M):w\in H_0^1(M)\}$. The high-order estimate in [F3], together with its bounded $H^1$ inverse, makes $G$ bounded. [A2, F1, F2, F3, given, algebra]

1.2 Regard the complex Sobolev spaces as real Banach spaces, since the parameters are real. For $n\geq2$, [F4] and localization to the fixed finite atlas make $H^s(M)$ a Banach algebra. If $n=1$, then $s\geq3$; the one-dimensional estimate $H^1\hookrightarrow L^\infty$ and the Leibniz rule give the same algebra bound in each chart, hence on $M$. Thus $(\epsilon,w)\mapsto q(Ef_\epsilon+w)^3$ is a continuous polynomial from $\mathbb R^m\times X_s$ into $H^{s-2}(M)$, where $f_\epsilon=\sum_j\epsilon_jh_j$ and $Ef_\epsilon$ is the smooth collar extension from [F7]. Define $$\mathcal F(\epsilon,w)=w-G\big[\Delta_g(Ef_\epsilon)-q(Ef_\epsilon+w)^3\big]\in X_s.$$ It is $C^3$ (indeed polynomial plus bounded linear maps) and $\mathcal F(0,0)=0$. [A1, A2, F1, F2, F3, F4, F6, F7, given, construct]

2.1 At $(0,0)$, the derivative $D_w\mathcal F(0,0)$ is the identity on $X_s$, because the derivative of $u\mapsto q u^3$ at $u=0$ vanishes. By [F6], there is a neighborhood of $\epsilon=0$ and a unique $C^3$ map $w(\epsilon)\in X_s$ near zero such that $\mathcal F(\epsilon,w(\epsilon))=0$. The fixed-point equation is exactly $-\Delta_g(Ef_\epsilon+w)+q(Ef_\epsilon+w)^3=0$ with boundary trace $f_\epsilon$, so $u_\epsilon=Ef_\epsilon+w(\epsilon)$ gives the unique small solution. [A1, F6, step 1.2, algebra]

3.1 For $n\geq2$, [F5] gives $H^s(M)\hookrightarrow C^2(\overline M)$; for $n=1$, $s\geq3$ gives the same embedding by the one-dimensional Sobolev estimate. By [F8], $u\mapsto\partial_{\nu_{\rm out}}u|_{\partial M}$ is bounded from $C^1(\overline M)$ to $C^0(\partial M)$. Composing it with the $C^3$ parameter map proves the asserted $C^3$ dependence of $N_{q;h_1,\ldots,h_m}$. [A1, F5, F8, step 2.1, algebra] ∎

