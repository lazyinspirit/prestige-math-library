---
id: ex-fd-two-mode-one-sensor
kind: example
title: One sensor cannot identify two independent coefficients
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - prop-fd-finite-observation-identifiability
dependency_roles:
  prop-fd-finite-observation-identifiability: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, §7E"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §2.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Example

Let $V=\operatorname{span}\{\phi_1,\phi_2\}$ have the ordered basis $(\phi_1,\phi_2)$, and represent a candidate field by the coefficient vector $a=(a_1,a_2)^T\in\mathbb R^2$. A single sensor has the linear observation matrix $G=[1\ 0]\in\mathbb R^{1\times2}$, the weighting covariance is $R=[1]$, and a datum is $y=Ga+e$ for a fixed realized error $e\in\mathbb R$. The sensor depends on $a_1$ alone, so it cannot determine $a_2$ on the full two-dimensional coefficient space.

## Example references

[[prop-fd-finite-observation-identifiability]]

[Axler, Linear Algebra Done Right, §7E, pp. 270–278](https://linear.axler.net/LADR4e.pdf)

[Law, Stuart, and Zygalakis, Chapter 2 §2.1, pp. 25–26](https://arxiv.org/pdf/1506.07825v1)

[[def-fd-fluid-coefficient-observation-model]]

## Facts & Assumptions

**Given:** The two-dimensional coefficient space, the matrix $G=[1\ 0]$, the scalar weighting covariance $R=[1]$, and fixed realized error $e$ in the Example.

[F1] Identifiability is injectivity of the observation map on the chosen coefficient subspace; a nonzero kernel vector makes distinct coefficients observationally indistinguishable. [[prop-fd-finite-observation-identifiability]]

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 Direct multiplication gives $G(a_1,a_2)^T=a_1$ and $G(0,1)^T=0$, while $(0,1)^T\ne0$. Thus $v=(0,1)^T$ is a nonzero vector in the kernel of $G$. [given, algebra]

2.1 For every $a\in\mathbb R^2$ and every $t\in\mathbb R$, linearity gives $G(a+tv)=Ga+tGv=Ga$. Taking any $t\ne0$ produces a distinct coefficient vector with the same predicted observation and the same realized error $e$; by [F1], the coefficient vector is not identifiable. [F1, step 1.1, algebra] ∎

