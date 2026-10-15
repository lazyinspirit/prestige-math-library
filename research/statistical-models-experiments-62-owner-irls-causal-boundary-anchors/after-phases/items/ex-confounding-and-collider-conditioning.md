---
id: ex-confounding-and-collider-conditioning
kind: example
title: "A confounder and a conditioned collider"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-d-separation-in-a-dag
  - def-recursive-structural-causal-model-and-dag
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1 and §3-1, pp. 671–675"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1 and §7.1, pp. 78, 85–86"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Example

Consider first a confounding SCM with independent $U\sim\mathrm{Bernoulli}(1/2)$
and $E\sim\mathrm{Bernoulli}(1/4)$, observed $A=U\mathbin{\mathrm{xor}}E$,
and observed $Y=U$. Its DAG is $U\to A$ and $U\to Y$. The only path between
$A$ and $Y$ is the backdoor path $A\leftarrow U\to Y$.

For collider conditioning, let independent $B,C\sim\mathrm{Bernoulli}(1/2)$,
and set $D=B\lor C$. Its DAG is $B\to D\leftarrow C$.

## Facts & Assumptions

**Given:** The finite-valued recursive models and mutually independent Bernoulli exogenous variables specified above.

[F1] Mutual independence gives the product joint law for each finite
exogenous family. [[def-independent-random-elements]],
[[thm-independent-random-elements-have-product-joint-law]]

[F2] A noncollider conditioned on blocks a path, while conditioning on a
collider activates it. [[def-d-separation-in-a-dag]]

[F3] The causal response is obtained by replacing only the treatment
equation. [[def-recursive-structural-causal-model-and-dag]]

## Verification
**Proof technique:** calculate the two finite joint laws and compare their conditional probabilities.

**Given:** [F1]–[F3] and the two models in the Example.

1.1 In the confounding model, $P(A=1)=P(U=0,E=1)+P(U=1,E=0)=\tfrac12\cdot\tfrac14+\tfrac12\cdot\tfrac34=\tfrac12$. Also $P(U=1,A=1)=\tfrac12\cdot\tfrac34=\tfrac38$ and $P(U=1,A=0)=\tfrac12\cdot\tfrac14=\tfrac18$. Thus $P(Y=1\mid A=1)=3/4$ and $P(Y=1\mid A=0)=1/4$, although under $do(A=a)$ the variable $Y=U$ remains Bernoulli$(1/2)$. The difference between the observational conditionals and the intervention law is caused by the open backdoor path through $U$; conditioning on $U$ blocks that path and the adjusted mean is $\sum_{u\in\{0,1\}}P(Y=1\mid A=a,U=u)P(U=u)=1/2$. [F1, F2, F3, algebra]

2.1 For the collider model, $P(B=1,C=1)=1/4=P(B=1)P(C=1)$ by [F1], so the variables are independent before conditioning. But $D=1$ on exactly the three equiprobable pairs $(1,1),(1,0),(0,1)$. Hence $P(B=1\mid D=1)=P(C=1\mid D=1)=2/3$ while $P(B=1,C=1\mid D=1)=1/3\ne4/9$. Conditioning on the collider $D$ therefore creates dependence, exactly as the active-path rule [F2] predicts. [F1, F2, algebra] ∎