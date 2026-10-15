---
id: lem-finite-window-gibbs-density-ratio-is-papangelou
kind: lemma
title: "A positive finite-window Gibbs density has its density-ratio Papangelou intensity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-window-spatial-observation
  - def-dirac-measure
  - def-finite-window-gibbs-density
  - def-papangelou-conditional-intensity
  - lem-deletion-of-one-point-is-measurable
  - lem-finite-intensity-mecke-identity
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The finite-window measure uses Countable Choice through Lebesgue measure. The density-ratio argument itself uses no choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.5, Theorem 4.1 and Example 4.8, PDF pp. 65–66: conditional intensity as a density ratio relative to unit Poisson."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, Theorem 4.1 and finite-intensity proof, PDF pp. 39–43: Mecke identity and mixed-binomial reindexing."
verification:
  precheck: pending
---

## Statement

Let $Q$ be the unit-rate Poisson law on $\mathcal C(W)$ from
[[def-finite-window-spatial-observation]]. Suppose $g:\mathcal C(W)\to(0,\infty)$
is measurable, finite everywhere, and $\int g\,dQ=1$. Let $P=gQ$ and define
$$\lambda_g(u;\eta):=\frac{g(\eta+\delta_u)}{g(\eta)}.$$
Then $\lambda_g$ is a Papangelou conditional intensity for $P$ relative to
$\ell_W$ in the sense of
[[def-papangelou-conditional-intensity]].

## Facts & Assumptions

**Given:** The hypotheses in the Statement and a nonnegative
product-measurable test function $h$ on $W\times\mathcal C(W)$.

[F1] For a finite-intensity Poisson process $\xi$ and every nonnegative
measurable $k$, the add-one Mecke identity is
$$\mathbb E_Q\sum_{x\in\xi}k(x,\xi)=\int_W\mathbb E_Q[k(u,\xi+\delta_u)]\,\ell_W(du).$$
([[lem-finite-intensity-mecke-identity]])

[F2] On the measurable domain where an occurrence at $x$ is present,
$(x,\eta)\mapsto\eta-\delta_x$ is measurable and deletes one occurrence.
([[lem-deletion-of-one-point-is-measurable]])

[F3] A Papangelou conditional intensity is characterized by the deletion
form of the Georgii–Nguyen–Zessin identity.
([[def-papangelou-conditional-intensity]])

[F4] Evaluation maps generate the configuration sigma-algebra, and the Dirac
mass at $u$ evaluates to $1_B(u)$; hence
$(\eta+\delta_u)(B)=\eta(B)+1_B(u)$ is measurable.
([[def-finite-window-spatial-observation]], [[def-dirac-measure]])

[F5] The finite Poisson reference with intensity $1_W\ell_d$ is concentrated
on $\mathcal C(W)$, since its mixed-binomial locations lie in $W$.
([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]],
[[def-finite-window-spatial-observation]])

[F6] Tonelli's theorem interchanges the nonnegative expectation and window
integral. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

**Given:** $g$ is a positive finite density relative to the finite unit-rate
Poisson law $Q$.

1.1 Extend $g$ and $h$ by zero outside $\mathcal C(W)$ and $W\times\mathcal C(W)$, respectively; [F5] makes these measurable extensions. For a test function $h$ as in the Statement, define on the domain where $(x,\zeta)$ contains an occurrence at $x$ $k(x,\zeta):=g(\zeta)h(x,\zeta-\delta_x),$ and set $k=0$ off that domain. The domain and deletion map are measurable by [F2]; the extensions, addition operation, and $g,h$ are measurable by [F4, F5], so $k$ is a nonnegative measurable test function for [F1]. Also the addition map is measurable by [F4], and since $g$ is finite and strictly positive, its ratio $\lambda_g(u;\eta)=g(\eta+\delta_u)/g(\eta)$ is a measurable function on $W\times\mathcal C(W)$. [given, F1, F2, F4, F5, construct]

2.1 The left side of [F1] with this $k$ is $\mathbb E_Q\left[g(\xi)\sum_{x\in\xi}h(x,\xi-\delta_x)\right]=\mathbb E_P\sum_{x\in\eta}h(x,\eta-\delta_x).$ On the right side, $(u,\xi+\delta_u)$ is in the deletion domain and $(\xi+\delta_u)-\delta_u=\xi$, so the integrand is $g(\xi+\delta_u)h(u,\xi)=g(\xi)\lambda_g(u;\xi)h(u,\xi)$. Consequently [F1] gives, after Tonelli's interchange [F6], $\mathbb E_P\sum_{x\in\eta}h(x,\eta-\delta_x)=\mathbb E_P\int_W h(u,\eta)\lambda_g(u;\eta)\,\ell_W(du).$ which is the defining identity [F3]. [step 1.1, F1, F3, F5, F6, algebra]

3.1 Step 2.1 proves the claimed Papangelou identity for every admissible nonnegative $h$, hence proves the Statement. [step 2.1] ∎
