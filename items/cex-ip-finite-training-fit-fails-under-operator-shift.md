---
id: cex-ip-finite-training-fit-fails-under-operator-shift
kind: counterexample
title: Zero training loss can fail under an operator shift
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-learned-reconstruction-estimator
  - def-ip-unrolled-regularization-architecture
  - thm-continuous-preimages-of-borel-sets-are-borel
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the training and test laws are explicit finite probability measures."
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences"
      url: "https://arxiv.org/pdf/2503.11043v2"
      locator: "Full versioned 29-page ICLR 2025 paper, §§4.1 and 4.3–5: finite dataset splits and reported out-of-distribution prior-mismatch behavior; empirical context only."
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems"
      url: "https://arxiv.org/pdf/2410.00083v1"
      locator: "Full versioned 38-page survey, §§2.4.4 and 3.3: distinctions among finite-computation approximations and method-specific asymptotic claims; context only."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Let $X=Y=\mathbb R$ and consider the one-step learned update $F_\theta(a,y)=\theta ay$ on the declared domain of all scalar operator/data pairs. For a Borel point rule $g$ and a joint input-target probability law $P$, define squared risk by $R_P(g)=\int |g(a,y)-x^\dagger|^2\,P(d((a,y),x^\dagger))$. Let $P_\mathcal S$ be the probability law assigning mass one to $((a,y),x^\dagger)=((1,1),1)$, and let $Q_t$ assign mass one to $((a,y),x^\dagger)=((t,t),1)$ for each shift $t>1$. Define the training risk $L_\mathcal S(\theta)=R_{P_\mathcal S}(F_\theta)$ and the test risk $R_{Q_t}(\theta)=R_{Q_t}(F_\theta)$. The forward residual is $r_t=|tF_\theta(t,t)-t|$. The assertion refuted is that some finite constant $C$ bounds both $r_t$ and $R_{Q_t}(\theta)$ for every $t>1$ whenever $L_\mathcal S(\theta)=0$.

## Statement references

[[def-ip-unrolled-regularization-architecture|The one-step unrolled update convention.]]

[[def-ip-learned-reconstruction-estimator|Borel point-estimator and finite learned-update interface.]]

[[def-ip-inverse-risk-under-train-and-test-laws|Expected loss under joint train and test laws.]]

[Zheng et al., dataset-scoped out-of-distribution experiments (empirical context only)](https://arxiv.org/abs/2503.11043v2)

[Daras et al., finite-computation and method-specific asymptotic discussion (context only)](https://arxiv.org/abs/2410.00083v1)

## Facts & Assumptions

**Given:** A scalar one-step architecture with initialization $x_0=0$, identity update block, trainable layer step $\theta$, training sample $(1,1,1)$, and test laws $Q_t$ for $t>1$.

[F1] [[def-ip-unrolled-regularization-architecture]]: for one layer, the update applies its declared block to the data-consistency-corrected input, and the deployed output is the finite one-step composition.

[F2] [[def-ip-learned-reconstruction-estimator]]: a point reconstruction rule is Borel, and a finite unrolled learned update uses a Borel initialization, Borel layer maps, and has a point-valued output.

[F3] [[def-ip-inverse-risk-under-train-and-test-laws]]: a deterministic Borel point rule has risk equal to its extended nonnegative loss integral under a joint input-target law.

[F4] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map between topological spaces has Borel preimages of Borel sets.

## Counterexample

**Proof technique:** direct.

**Given:** The data in the Statement refuted.

1.1 Choose the initialization $I_\theta(a,y)=0$, identity block $B_{\theta_0}((a,y),v)=v$, and layer parameter $\tau_0=\theta$. By [F1], this is an admissible one-step architecture and $F_\theta(a,y)=\theta a(y-a\cdot0)=\theta ay$. This polynomial map is continuous and hence Borel by [F4], so it satisfies the learned point-rule interface [F2]. [F1, F2, F4, given, construct, algebra]

2.1 At the training point, $F_\theta(1,1)=\theta$. The law $P_\mathcal S$ assigns mass one to that point, so [F3] gives $L_\mathcal S(\theta)=R_{P_\mathcal S}(F_\theta)=|\theta-1|^2$. It is zero exactly at $\theta=1$. [F3, step 1.1, given, algebra]

3.1 For that zero-loss parameter and any $t>1$, $F_1(t,t)=t^2$, so $r_t=|t\,t^2-t|=t(t^2-1)$. [step 2.1, given, algebra]

4.1 The test law $Q_t$ assigns mass one to its displayed point, so [F3] gives $R_{Q_t}(1)=|t^2-1|^2=(t^2-1)^2$. Both $r_t$ and $R_{Q_t}(1)$ tend to $+\infty$ as $t\to+\infty$. For every finite $C$, choosing $t$ sufficiently large violates at least one claimed bound (in fact both), while the training risk remains zero by step 2.1. Therefore the refuted assertion is false. [F3, step 2.1, step 3.1, algebra] ∎

## Remark

In the separate empirical InverseBench study, [Figure 5(a)](https://arxiv.org/pdf/2503.11043v2#page=10) and §4.3 report that most tested plug-and-play diffusion methods on black-hole digit inputs exhibit a ring feature characteristic of the diffusion prior. [Figure 5(b)](https://arxiv.org/pdf/2503.11043v2#page=10) shows inverse-scattering sources with nine cells while the prior was trained on images with one to six cells; §4.3 presents this case as one where the methods recover effectively when the source is close to the prior. These observations concern those methods and datasets only; they are not premises in the scalar proof above. The cited diffusion survey describes certain posterior-sampling procedures as asymptotically exact only in method-specific infinite-computation limits and notes that practical scaling remains unresolved; this sampling discussion also supplies no premise to the counterexample.

## Remark references

[Zheng et al., InverseBench, out-of-distribution tests and discussion](https://arxiv.org/abs/2503.11043v2)

[Daras et al., survey, asymptotically exact methods](https://arxiv.org/abs/2410.00083v1)
