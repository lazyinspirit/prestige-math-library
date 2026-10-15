---
id: cex-observed-first-cause-does-not-identify-latent-failure-times
kind: counterexample
title: "The observed first time and cause do not identify the latent joint failure-time law"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - def-observational-equivalence
  - def-parametric-statistical-model
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Tian and Richard Olshen, Competing Risk and Alternatives to Cox Model, Stanford University STAT331, slide 3"
      url: "https://web.stanford.edu/~lutian/coursepdf/survweek11.pdf"
    - title: "Janne Pitkäniemi and Esa Läärä, Survival analysis with competing risks, Statistical Practice in Epidemiology using R, University of Tartu, slides 13–24"
      url: "https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf"
    - title: "Peter C. Austin, D. S. Lee, and Jason P. Fine, Introduction to the Analysis of Survival Data in the Presence of Competing Risks, Circulation 133(6) (2016), pp. 601–609"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4741409/"
---

## Statement refuted

Without restrictions on the joint law of the latent cause-specific times, the
law of the observed first time and cause uniquely determines that latent joint
law.

## Facts & Assumptions

**Given:** A parametric model whose parameter is the full joint law of two
latent cause-specific event times and whose observation is only the first time
and its cause. Refute identifiability of the latent joint law.

[F1] [[def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence]]: $(T,D)$ is obtained by mapping latent cause times to their unique minimum and its cause.

[F2] [[def-parametric-statistical-model]]: a model is a parameter map $\theta\mapsto P_\theta$ of sampling laws.

[F3] [[def-observational-equivalence]]: $\theta$ and $\eta$ are observationally equivalent exactly when $P_\theta=P_\eta$.

[F4] [[def-estimand-on-a-statistical-model]]: an estimand is a specified function of the model parameter.

[F5] [[def-identifiability-of-an-estimand]]: an estimand is identifiable only if equal sampling laws imply equal target values.

## Counterexample

Use two causes and parameter set $\Theta=\{0,1\}$. Under $\theta=0$, give
$(T_1,T_2)$ mass $1/2$ at $(1,2)$ and mass $1/2$ at $(2,1)$. Under
$\theta=1$, give it mass $1/2$ at $(1,3)$ and mass $1/2$ at $(3,1)$. Each law
has finite positive times and no simultaneous first causes. The sampling law
is the pushforward under $(T_1,T_2)\mapsto(T,D)$, where
$T=\min(T_1,T_2)$ and $D$ is the unique minimizing cause.

1.1 Let $\psi(\theta)$ be the full joint law of $(T_1,T_2)$ under parameter $\theta$. This is an estimand by [F4]. The two laws specified above differ: under $\theta=0$, $\mathbb P(T_2=2)=1/2$, while under $\theta=1$, $\mathbb P(T_2=2)=0$. [given, F4, algebra]

1.2 Under either parameter, the first event is at time $1$. The outcome $(T,D)=(1,1)$ has probability $1/2$ from the atom with $T_1=1$, and $(T,D)=(1,2)$ has probability $1/2$ from the atom with $T_2=1$; no other observed pair occurs. Thus the two pushforward sampling laws are equal, so the parameters are observationally equivalent by [F2]–[F3]. [given, F1, F2, F3, algebra]

2.1 Step 1.1 gives $\psi(0)\ne\psi(1)$, while step 1.2 gives equal sampling laws. This violates the defining implication in [F5], so the latent joint law is not identifiable from the observed first time and cause. [step 1.1, step 1.2, F5] ∎

