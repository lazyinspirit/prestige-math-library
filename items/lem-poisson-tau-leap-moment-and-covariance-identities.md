---
id: lem-poisson-tau-leap-moment-and-covariance-identities
kind: lemma
title: "Conditional moments of one Poisson tau-leap increment"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§III, equations (16)–(18), journal pp. 1718–1719 / PDF pp. 3–4."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.1, tau-leap update and Poisson count parameters, PDF pp. 2–3."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Fix a state $x\in E$ and step $h\ge0$ in
[[alg-explicit-poisson-tau-leaping]]. Let
$\Delta Y=\sum_{j=1}^R\nu_jK_j$, where conditionally independent
$K_j\sim\operatorname{Pois}(a_j(x)h)$. Then
$$\mathbb E[\Delta Y\mid x]=h\sum_{j=1}^R a_j(x)\nu_j,$$
$$\operatorname{Cov}(\Delta Y\mid x)=h\sum_{j=1}^R a_j(x)\nu_j\nu_j^{\mathsf T},$$
and
$$\mathbb E[\|\Delta Y\|^2\mid x] =h\sum_{j=1}^R a_j(x)\|\nu_j\|^2 +h^2\left\|\sum_{j=1}^R a_j(x)\nu_j\right\|^2.$$

## Facts & Assumptions

**Given:** A state $x\in E$, a step $h\ge0$, the product count law in
[[alg-explicit-poisson-tau-leaping]], and the Poisson count laws below.

[F1] [[def-scalar-poisson-count-law]]: for $\lambda\ge0$, a
$\operatorname{Pois}(\lambda)$ count has masses
$e^{-\lambda}\lambda^k/k!$ (with a point mass at zero when $\lambda=0$).

[F2] [[lem-poisson-count-law-normalization-and-moments]]: if
$K\sim\operatorname{Pois}(\lambda)$, then
$\mathbb E K=\lambda$ and $\operatorname{Var}(K)=\lambda$.

[F3] [[alg-explicit-poisson-tau-leaping]]: the channel counts are conditionally
independent and the state increment is $\Delta Y=\sum_j\nu_jK_j$.

## Proof

**Given:** The inputs above.

1.1 Each parameter $a_j(x)h$ is finite, so [F1] defines the corresponding Poisson law and [F2] gives $\mathbb E[K_j\mid x]=a_j(x)h$. By [F3], conditional expectation is linear, hence $\mathbb E[\Delta Y\mid x]=\sum_j\nu_j a_j(x)h$. [given, F1, F2, F3, algebra]

1.2 Conditional independence in [F3] makes cross-channel covariances zero. The covariance of $\nu_jK_j$ is $\nu_j\nu_j^{\mathsf T}\operatorname{Var}(K_j\mid x) =h a_j(x)\nu_j\nu_j^{\mathsf T}$ by [F2]. Summing proves the covariance formula. [F2, F3, algebra]

2.1 For a square-integrable vector, $\mathbb E\|\Delta Y\|^2 =\operatorname{tr}\operatorname{Cov}(\Delta Y)+\|\mathbb E\Delta Y\|^2$. Substitution of steps 1.1 and 1.2 gives the asserted identity. [step 1.1, step 1.2, algebra] ∎
