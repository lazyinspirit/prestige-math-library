---
id: lem-log-rational-current-independent-of-resolution
kind: lemma
title: "Resolution independence of logarithmic currents of rational functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-ag-geometrically-regular-algebra-and-fibre
  - def-smooth-morphism-schemes
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-principalization-of-ideals
  - thm-resolution-of-singularities-in-characteristic-zero
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§§1.1–1.4 and §3.3.3, printed pp. 97–109 and 126–128"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§§2.1.2–2.1.3, printed pp. 22–24"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. Let $Y$ be an integral separated scheme of finite type over $\mathbb C$, let $f\in K(Y)^\times$, and let $\rho_i:Y_i\to Y$ for $i=1,2$ be proper birational morphisms with $Y_i$ smooth and with the support of $\operatorname{div}(f\circ\rho_i)$ a simple normal crossings divisor. Regard $\log|f\circ\rho_i|^2$ as a locally integrable current on $Y_i$, and push it to $Y$. The resulting currents are equal:
$$ (\rho_1)_*[\log|f\circ\rho_1|^2]=(\rho_2)_*[\log|f\circ\rho_2|^2]. $$

## Statement references

[Gillet–Soulé, §§1.1–1.4 and §3.3.3](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, §§2.1.2–2.1.3](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, an integral separated finite-type complex scheme $Y$, a nonzero rational function $f$ on $Y$, and two proper birational resolutions whose pulled-back divisors have simple normal crossings support.

[A1] The Axiom of Choice is assumed by the characteristic-zero resolution and principalization suppliers ([[def-axiom-of-choice]]).

[F1] Resolution of singularities supplies proper birational smooth models in characteristic zero. Smooth finite-type schemes over a field are locally factorial, so the support of the pulled-back divisor has a coherent ideal; principalization makes its total transform have simple normal crossings support ([[thm-resolution-of-singularities-in-characteristic-zero]], [[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-principalization-of-ideals]]).

[F2] On a smooth complex variety where a rational function has simple normal crossings divisor, it is locally $u\prod_j z_j^{m_j}$ with $u$ a holomorphic unit and $m_j\in\mathbb Z$; its logarithm is locally integrable.

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Near any point of $Y_i$, the local expression in [F2] gives $\log|f\circ\rho_i|^2=\log|u|^2+\sum_jm_j\log|z_j|^2$. The unit term is smooth, and each $\log|z_j|$ is integrable because $\int_0^\epsilon r|\log r|\,dr<\infty$. Thus this function defines a current on $Y_i$; properness of $\rho_i$ makes its pushforward a current on $Y$. [F2, given, construct]

2.1 The fibre product $Y_1\times_Y Y_2$ is proper over each $Y_i$ and contains the closure of the common dense open over which both $\rho_i$ are isomorphisms. Resolve the reduced closure of that open and principalize the coherent ideal of the pulled-back divisor support. By [F1] this gives a smooth $Z$ and proper birational maps $q_i:Z\to Y_i$ such that $\rho_1q_1=\rho_2q_2$ and all pulled-back logarithms are locally integrable. [A1, F1, given, construct]

2.2 Each $q_i$ is an isomorphism on a dense open $U_i\subseteq Y_i$; its complement and the complement of $q_i^{-1}(U_i)$ are proper analytic subsets, which have measure zero. For every compactly supported smooth test form $\eta$ on $Y_i$, change of variables on $U_i$ gives
$$\int_Z\log|f\circ\rho_i\circ q_i|^2q_i^*\eta=\int_{U_i}\log|f\circ\rho_i|^2\eta=\int_{Y_i}\log|f\circ\rho_i|^2\eta,$$
because the omitted sets have measure zero and the logarithms are locally integrable by steps 1.1 and 2.1. Hence $(q_i)_*[\log|f\circ\rho_i\circ q_i|^2]=[\log|f\circ\rho_i|^2]$. [step 1.1, step 2.1, construct, algebra]

3.1 Proper pushforward of currents composes, so pushing the equality in step 2.2 by $\rho_i$ identifies both currents with the pushforward from the common map $\rho_1q_1=\rho_2q_2$. Therefore the two currents in the Statement are equal. [step 2.2, algebra] ∎
