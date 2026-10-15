---
id: ex-frontdoor-adjustment-binary-model
kind: example
title: "A binary SCM where front-door adjustment works"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-recursive-structural-causal-model-and-dag
  - thm-frontdoor-adjustment-sufficiency
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
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-2, pp. 675–676"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Point 7.4, p. 101"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $U\sim\mathrm{Bernoulli}(1/2)$,
$E_A\sim\mathrm{Bernoulli}(1/4)$, and
$E_M\sim\mathrm{Bernoulli}(1/5)$ be mutually independent. Set
$$A=U\mathbin{\mathrm{xor}}E_A,\qquad M=A\mathbin{\mathrm{xor}}E_M,\qquad Y=M\lor U.$$
The full graph is $U\to A$, $U\to Y$, $A\to M$, $M\to Y$. The only directed
$A$-to-$Y$ path passes through $M$. The path $A\leftarrow U\to Y\leftarrow M$
is blocked by its collider $Y$, so $A$ and $M$ are d-separated by the empty
set in $G_{\underline A}$. The path $M\leftarrow A\leftarrow U\to Y$ is
blocked by $A$ when checking the other front-door condition. Both mediator
values have positive probability conditional on either
treatment value, so the nested conditional laws have the required support.

## Facts & Assumptions

**Given:** The finite SCM and independent Bernoulli laws in the Example.

[F1] The exogenous family has its finite product law.
[[def-independent-random-elements]], [[thm-independent-random-elements-have-product-joint-law]]

[F2] The front-door theorem states the observed functional and its graph and
support hypotheses. [[thm-frontdoor-adjustment-sufficiency]]

[F3] Interventions replace only the named structural equation.
[[def-recursive-structural-causal-model-and-dag]]

## Verification
**Proof technique:** evaluate the observed front-door functional and the interventional model directly.

**Given:** [F1]–[F3] and the SCM in the Example.

1.1 Since $P(A=1)=1/2$, Bayes' rule gives $P(U=1\mid A=1)=3/4$ and $P(U=1\mid A=0)=1/4$. Since $E_M$ is independent of $(U,A)$, $P(M=1\mid A=1)=4/5$ and $P(M=1\mid A=0)=1/5$. Thus for each $a\in\{0,1\}$ both mediator outcomes have positive conditional probability; the nested-law support condition in [F2] holds. [F1, F2, algebra]

2.1 If $M=1$, then $Y=1$. If $M=0$, then $Y=U$, so $E(Y\mid M=0,A=1)=3/4$ and $E(Y\mid M=0,A=0)=1/4$. Averaging over the marginal law of $A$ gives $\int E(Y\mid M=0,A=a')P_A(da')=1/2$, while the same inner average for $M=1$ is $1$. The front-door formula [F2] therefore gives $\tfrac45\cdot1+\tfrac15\cdot\tfrac12=\tfrac9{10}.$ [step 1.1, F1, F2, algebra]

3.1 Under $do(A=1)$, $M=1$ with probability $4/5$ and $M=0$ with probability $1/5$. The exogenous $U$ remains Bernoulli$(1/2)$ and independent of $E_M$, so $E(Y\mid do(A=1),M=1)=1$ and $E(Y\mid do(A=1),M=0)=1/2$. Hence $E[Y^{1}]=\tfrac45\cdot1+\tfrac15\cdot\tfrac12=9/10$, agreeing with the observed functional. [F1, F3, step 1.1, step 2.1, algebra] ∎