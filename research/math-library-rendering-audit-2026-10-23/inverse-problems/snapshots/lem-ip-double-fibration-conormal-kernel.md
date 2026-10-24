---
id: lem-ip-double-fibration-conormal-kernel
kind: lemma
title: "Incidence-coordinate conormal kernel and canonical relation"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-double-fibration-transform
  - cor-local-normal-form-for-submersions
  - def-density-bundle-and-smooth-density
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§2.2, Lemma 2.4 and Theorem 2.2 proof, printed pp. 13–15."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Definition 6.1, printed p. 37, for local cotangent conventions."
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $Z\subseteq G\times X$ be an embedded incidence submanifold of codimension $k>0$, and let $(g_0,x_0)\in Z$. Choose coordinates near this point and a submersion $F:G\times X\to\mathbb R^k$ with $Z=\{F=0\}$. Write $F=(F_1,\ldots,F_k)$. For every $\tau\in\mathbb R^k\setminus\{0\}$, the conormal covector at $(g,x)\in Z$ is
$$
(g,x;D_gF(g,x)^T\tau,\ D_xF(g,x)^T\tau).
$$
Consequently the incidence kernel has local delta representation $b(g,x)\delta(F(g,x))|dg\,dx|$, with a smooth density coefficient $b$, and its cotangent relation consists exactly of
$$
(g,D_gF^T\tau;\ x,-D_xF^T\tau),\qquad (g,x)\in Z,\quad \tau\ne0.
$$
No general Fourier-integral-operator composition calculus is used.

## Statement references

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence kernel and relation convention]]

[[def-ip-analytic-double-fibration-transform|Analytic incidence data]]

[[cor-local-normal-form-for-submersions|Submersion normal form]]

[[def-density-bundle-and-smooth-density|Density transformation rule]]

## Facts & Assumptions

**Given:** The incidence submanifold $Z$, its two submersions, and a local defining submersion $F$ of codimension $k$.

[F1] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: the kernel is integration on $Z$ against a smooth density, and the relation pairs conormal $(\eta,-\xi)$.

[F2] [[def-ip-analytic-double-fibration-transform]]: $Z$ is embedded and both projections are submersions.

[F3] [[cor-local-normal-form-for-submersions]]: a submersion is locally equivalent to coordinate projection.

[F4] [[def-density-bundle-and-smooth-density]]: density coefficients transform by absolute Jacobians.

## Proof

**Given:** The data in the statement.

1.1 Since $F$ is a submersion, its differential has rank $k$. The tangent space of its zero level is $T_{(g,x)}Z=\ker DF(g,x)$. In finite-dimensional linear algebra, the annihilator of the kernel of a rank-$k$ linear map is the image of its transpose: inclusion follows from $\tau^TDFv=0$ for $v\in\ker DF$, and both spaces have dimension $k$. Hence every conormal is uniquely $DF^T\tau=(D_gF^T\tau,D_xF^T\tau)$. [F2, F3, algebra]

1.2 By [F1], the incidence functional is integration of a test function against a smooth density on $Z$. Complete $F$ to submersion coordinates $(s,t)$ with $t=F(g,x)$, using [F3]. In these coordinates its action is $\int_{t=0}\Phi(s,0)c(s)|ds|$ for a smooth coefficient $c$. Rewriting the ambient density as $|dg\,dx|$ and applying the ordinary change-of-variables rule gives $b(g,x)\delta(F(g,x))|dg\,dx|$ for a smooth $b$; the Jacobian factor is nonzero because the coordinate map is a diffeomorphism. [F1, F3, F4, algebra]

2.1 The cotangent relation uses the conormal $(\eta,-\xi)$ by [F1]. Substituting the formula from step 1.1 gives $\eta=D_gF^T\tau$ and $-\xi=D_xF^T\tau$, so $\xi=-D_xF^T\tau$. Since $DF^T$ is injective, $\tau\ne0$ gives a nonzero conormal. This proves the displayed relation, with every sign fixed by the kernel convention. [F1, step 1.1, algebra] ∎
