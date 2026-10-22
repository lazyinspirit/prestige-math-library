---
id: lem-ip-borel-jet-realization-and-beam-patching
kind: lemma
title: "Parameter-uniform Borel jet realization and ray-tube patching"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse problems for real principal type operators"
      url: "https://arxiv.org/pdf/2001.07599v2"
      locator: "§3, proof of Theorem 3.1, Step 3, PDF pp. 25–26: coordinate-compatible Borel summation along a compact bicharacteristic segment."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, full author lecture notes"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.4.3–3.4.5, PDF pp. 35–38: phase and amplitude jets solved along a curve and Borel realized."
proof_strategy: direct
---

## Statement

Let $X$ be a smooth manifold with an auxiliary smooth Riemannian metric, let $J=[a,b]$ be a compact interval, and let $\beta:J\to X$ be a smooth embedding with nonzero derivative. The normal fiber at $s$ is $N_s\beta=\{v\in T_{\beta(s)}X:g(v,\dot\beta(s))=0\}$. A **formal scalar jet along $\beta$** means a family of symmetric coordinate Taylor coefficients $T_{i,\alpha}(s)$ on a finite coordinate cover of a tubular neighborhood, smooth in $s\in J$, whose formal Taylor series transform on overlaps by the ordinary chain rule for a scalar function. Then there is an open neighborhood $U$ of $\beta(J)$ and, for either scalar field $\mathbb K=\mathbb R$ or $\mathbb C$, an $F\in C^\infty(U;\mathbb K)$ whose transverse derivatives along $\beta$ realize every prescribed coefficient $T_{i,\alpha}(s)$. The construction is uniform for a compact parameter family of such jets when all coefficient seminorms are uniformly bounded. The same assertion holds for finitely many embedded compact segments whose local formal jets are compatible on overlaps.

## Statement references

[[def-riemannian-metric-and-riemannian-manifold]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]

## Facts & Assumptions

**Given:** A smooth manifold $X$ with an auxiliary Riemannian metric; a compact interval $J$; an embedded smooth curve $\beta$ with $\dot\beta\ne0$; and compatible smooth formal scalar jets $T_{i,\alpha}(s)$ on a finite coordinate cover of a tube around $\beta(J)$.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: the auxiliary metric is smooth and positive definite; [[thm-fundamental-theorem-of-riemannian-geometry]] supplies its Levi–Civita connection.

[F2] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: the geodesic ODE has local solutions with smooth dependence on initial data, so the normal exponential map is smooth and has the identity differential on each zero-section fiber.

## Proof

**Proof technique:** direct.

1.1 The normal exponential map $E(s,y)=(\exp_{\beta(s)}y,s)$ from the normal bundle of $\beta$ into $X\times J$ is a local diffeomorphism along the zero section by [F2]. It is injective on that zero section because $\beta$ is embedded. If no uniform tube radius made $E$ injective, compactness would give two colliding sequences converging to the same zero-section point, contradicting local injectivity there. Thus a fixed-radius tube and a finite coordinate cover exist. [F1, F2, given, choose]

1.2 In one tube chart write the prescribed transverse Taylor series as $\sum_{k\ge0}P_k(s,y)$, where $P_k$ is homogeneous of degree $k$ in the transverse coordinate $y$. Fix $\chi\in C_c^\infty([0,\infty))$ equal to $1$ near $0$ and supported in $[0,1)$. For each $k\ge1$, compactness of $J$ bounds all coefficient derivatives. For each $m<k$ let $C_{k,m}$ bound all derivatives of total order at most $m$ of $P_k(s,y)\chi(|y|/\epsilon)$ after the factor $\epsilon^{k-m}$ is removed. Choose explicitly
$$
\epsilon_k=\min\left\{2^{-k},\ \min_{0\le m<k}\left(\frac{2^{-k}}{1+C_{k,m}}\right)^{1/(k-m)}\right\}.
$$
Then every derivative of order $m<k$ of $P_k\chi(|y|/\epsilon_k)$ is bounded by $2^{-k}$ uniformly in $s$. For any fixed derivative order $m$, the tail over $k>m$ therefore converges uniformly with all derivatives of order at most $m$; the first $m+1$ terms are finite. Hence $F_i(s,y)=\sum_{k\ge0}P_k(s,y)\chi(|y|/\epsilon_k)$ is smooth. Since each cutoff equals $1$ near $y=0$, the $k$th homogeneous polynomial contributes exactly its degree-$k$ jet there and no other degree, so $F_i$ realizes every prescribed coefficient in that chart. The explicit choice of $\epsilon_k$ is uniform over the stated bounded parameter families. [given, construct, algebra]

2.1 Cover the compact curve by finitely many smaller tube charts and choose smooth bump functions $\rho_i$ supported in the original charts whose sum is positive on a neighborhood of the curve. Put $\psi_i=\rho_i/(\sum_j\rho_j)$ there. On overlaps, the prescribed jets are compatible by hypothesis, so each local realization $F_i$ has the same formal jet when written in the same coordinates. Therefore $F=\sum_i\psi_iF_i$ has that same jet: the Leibniz formula reduces its derivatives on the curve to the common jet times derivatives of $\sum_i\psi_i$, and $\sum_i\psi_i=1$ near the curve. This gives a global smooth realization on a smaller tube. Applying the same construction to the finitely many compatible segment charts proves the final assertion. [step 1.1, step 1.2, given, construct, algebra] ∎
