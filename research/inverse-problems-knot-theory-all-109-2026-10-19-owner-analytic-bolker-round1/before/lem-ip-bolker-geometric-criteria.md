---
id: lem-ip-bolker-geometric-criteria
kind: lemma
title: "Global fiber and local differential criteria for Bolker"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-double-fibration-transform
  - def-ip-bolker-condition
  - lem-ip-double-fibration-conormal-kernel
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§3, Lemmas 3.2–3.3 and their proofs, printed pp. 19–24."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Proposition 6.2, printed pp. 41–45, for cotangent-coordinate invariance."
proof_strategy: direct
---

## Statement

Let $Z\subset G\times X$ be an analytic double fibration, and fix a local parameterization of its fibers over $G$,
$$
(g,s)\longmapsto (g,x(g,s)),
$$
where $s\in\mathbb R^d$ and $D_sx$ has rank $d$. Define
$$
E_g=\{(s,\xi):\xi\in T^*_{x(g,s)}X\setminus0,\ (D_sx(g,s))^T\xi=0\},
\qquad
L_g(s,\xi)=(D_gx(g,s))^T\xi.
$$
On the cotangent relation over this incidence chart, the left projection is
$$
(g,s,\xi)\longmapsto(g,L_g(s,\xi)).
$$
Consequently it is injective on this chart portion exactly when each map $(s,\xi)\mapsto L_g(s,\xi)$ is injective on $E_g$. Its differential is injective exactly when the only $(\dot s,\dot\xi)$ satisfying
$$
(D_sx)^T\dot\xi+(D_s^2x[\dot s,\cdot])^T\xi=0,\qquad
(D_sD_gx[\dot s,\cdot])^T\xi+(D_gx)^T\dot\xi=0
$$
is $(0,0)$. At a specified point of the full relation, the Bolker condition also requires that no point outside this chart portion has the same data covector; this is the global fiber-singleton clause. The displayed system is the local differential rank test.

## Statement references

[[def-ip-analytic-double-fibration-transform|Analytic double fibration]]

[[def-ip-bolker-condition|Bolker condition]]

[[lem-ip-double-fibration-conormal-kernel|Incidence conormal coordinates]]

## Facts & Assumptions

**Given:** The local fiber parameterization and its analytic double-fibration hypotheses.

[F1] [[def-ip-analytic-double-fibration-transform]]: $\pi_G$ and $\pi_X$ are submersions and the incidence relation is defined by the conormal bundle.

[F2] [[def-ip-bolker-condition]]: Bolker means global injectivity and injectivity of the differential of the left projection.

[F3] [[lem-ip-double-fibration-conormal-kernel]]: local defining functions give the conormal relation with sign convention $(\eta,-\xi)$.

## Proof

**Given:** The parameterization $(g,s)\mapsto(g,x(g,s))$.

1.1 A tangent vector to $Z$ at $(g,x(g,s))$ has the form
$$
(\dot g,D_gx\,\dot g+D_sx\,\dot s).
$$
A pair $(\eta,-\xi)$ annihilates every such tangent vector exactly when $(D_sx)^T\xi=0$ and $\eta=(D_gx)^T\xi$. This follows by setting $\dot g=0$ and then varying $\dot g$ arbitrarily. Thus all conormal pairs, except the zero pair, are parameterized by $(g,s,\xi)\in E_g$. The rank condition on $D_sx$ makes this conormal parameterization smooth. [F1, F3, given, algebra]

1.2 Under this parameterization, the left projection sends $(g,s,\xi)$ to $(g,(D_gx)^T\xi)$, as stated. Because the first component is retained, two points in this chart portion have the same left image exactly when their $g$ coordinates agree and their values under $L_g$ agree. This proves the chart-portion injectivity criterion; it says nothing about a second preimage outside this chart. [step 1.1, F2]

2.1 A tangent vector in the kernel of the differential of the left projection has $\dot g=0$. Differentiating the defining equation $(D_sx)^T\xi=0$ along $(\dot s,\dot\xi)$ gives
$$
(D_sx)^T\dot\xi+(D_s^2x[\dot s, \cdot])^T\xi=0.
$$
Differentiating its output $(D_gx)^T\xi$ gives the second displayed equation in the statement. Therefore the differential is injective exactly when the simultaneous system has only the zero solution. This is the asserted rank test, and by [F2] it is precisely the local immersion clause of Bolker. [F2, step 1.1, algebra] ∎
