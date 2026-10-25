---
id: def-ip-analytic-wavefront-fbi-transform
kind: definition
title: "Analytic wavefront set by Gaussian FBI packets"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-real-analytic-germ-in-several-variables
  - def-multivariable-power-series
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Definition 6.1 and Proposition 6.2, printed pp. 37–38."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5.1, FBI transform and wavefront convention, printed pp. 27–29."
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Let $u$ be a distribution, not necessarily compactly supported, or a distributional density (a continuous functional on compactly supported smooth scalar functions), on a real-analytic $n$-manifold $X$. Let $x_0$ lie in an analytic coordinate chart and let $\xi_0\in T^*_{x_0}X\setminus\{0\}$ have coordinate components in that chart. For $\chi\in C_c^\infty$ supported in the chart and equal to $1$ near $x_0$, define the Gaussian FBI packet
$$
\mathcal F_\chi u(x,\lambda\omega) =\left\langle u(y),\chi(y) \exp\!\left(i\lambda(x-y)\cdot\omega-\tfrac{\lambda}{2}|x-y|^2\right)\right\rangle, \quad \lambda\ge1,\quad |\omega|=1.
$$
When $u$ is a scalar distribution, the pairing is with the displayed function times coordinate density $|dy|$; when $u$ is a distributional density, the pairing is with the displayed scalar function. In both cases $\lambda\omega$ is the cotangent frequency. The covector $(x_0,\xi_0)$ is analytically regular for $u$ in this chart if there are such a cutoff $\chi$, a neighborhood $U$ of $x_0$, an open neighborhood $\Gamma$ of $\xi_0/|\xi_0|$ in the unit sphere, and constants $c,C>0$ such that
$$
|\mathcal F_\chi u(x,\lambda\omega)|\le C e^{-c\lambda} \quad(x\in U,\ \omega\in\Gamma,\ \lambda\ge1).
$$
The analytic wavefront set $\operatorname{WF}_A(u)$ is the set of nonzero cotangent vectors for which this exponential estimate fails. This is a chart-local definition. The separate local FBI-invariance claim needed for a geometric interpretation is stated by the companion lemma.

## Definition references

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Distribution and density pairing]]

[[def-real-analytic-germ-in-several-variables|Analytic coordinate charts]]

[[def-multivariable-power-series|Power-series convention]]

## Facts & Assumptions

**Given:** A distribution or distributional density $u$, an analytic chart, a point $x_0$, and a nonzero cotangent vector $\xi_0$.

[F1] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: distributions act continuously on compactly supported smooth densities; multiplication by the compactly supported cutoff localizes any distribution to the chart.

[F2] [[def-real-analytic-germ-in-several-variables]]: analytic charts have holomorphic complexifications near each point.

[F3] [[def-multivariable-power-series]]: the chart complexifications and their derivatives are represented by convergent power series on smaller polydiscs.

## Proof

**Given:** The data in the definition.

1.1 For fixed $x,\lambda,\omega$, the function of $y$ in the displayed pairing is smooth and supported in $\operatorname{supp}\chi$, hence it is a test density. Therefore the packet is a well-defined complex number by [F1]. [given, F1, algebra]

1.2 Replacing $\xi_0$ by a positive multiple leaves the unit direction $\xi_0/|\xi_0|$ unchanged; the definition quantifies over all $\lambda\ge1$ and an open cone of unit directions. Thus analytic regularity is conic in the cotangent variable, and its complement defines a conic subset of $T^*X\setminus0$. [given, algebra]

2.1 By [F2]–[F3], an analytic coordinate change near $x_0$ extends to a holomorphic map on a smaller complex neighborhood, so its cotangent action and Gaussian packet phase are locally defined there. The definition makes no claim that the numeric packet is unchanged under this change; the next lemma proves equivalence for the packet families actually used on this page. [F2, F3, given] ∎
