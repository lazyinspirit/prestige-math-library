---
id: lem-it-dmc-capacity-output-law-is-unique
kind: lemma
title: The capacity-achieving output law is unique
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel, def-it-finite-mutual-information, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-logarithm-slower-than-every-positive-power]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the input simplex and all output alphabets are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Expand finite mutual information as output entropy minus a linear conditional-entropy term.
  - Rule out two distinct capacity-achieving output laws by strict concavity, including zero coordinates.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapters 19 and 22"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 19 §19.1 and Chapter 22 §22.1; finite-DMC capacity optimizers and output laws.
---

## Statement

For a finite DMC $W$, every input law attaining $C(W)=\max_P I(P,W)$ induces the same output law $Q^*$. This output law is unique even when the capacity-achieving input law is not.

## Facts & Assumptions

**Given:** A finite DMC $W$ and $C(W)=\max_P I(P,W)$.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]]: at least one input law attains $C(W)$.

[F2] [[def-discrete-memoryless-channel-information-capacity]]: $C(W)$ is the maximum of $I(P,W)$ over input probability vectors.

[F3] [[def-it-finite-mutual-information]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite mutual information is the finite joint/product KL sum and $H(q)=-\sum_{y:q_y>0}q_y\ln q_y$.

[F4] [[def-discrete-memoryless-channel]]: every row $W(\cdot\mid x)$ is a probability vector and $PW$ is the induced output law.

[F5] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: logarithmic differentiation and the product rule apply on positive coordinates.

[F6] [[thm-logarithm-slower-than-every-positive-power]]: $t\ln t\to0$ as $t\downarrow0$.

## Proof

1.1 Expanding the finite KL sum in [F3] for the joint law $P(x)W(y\mid x)$ and grouping its finite terms gives $I(P,W)=H(PW)-\sum_xP(x)H(W(\cdot\mid x)).$ Terms with zero probability are omitted, so this identity also holds on the boundary of the input simplex. [F3, F4, given, algebra]

1.2 Suppose capacity-achieving laws $P_0,P_1$ have distinct outputs $Q_0,Q_1$. Their midpoint input $\bar P=(P_0+P_1)/2$ has output $\bar Q=(Q_0+Q_1)/2$. The scalar function $-t\ln t$ is strictly concave for $t>0$ because its second derivative, computed using [F3] and the product rule, is $-1/t$; continuity at $0$ from [F6] and the direct identity $-\frac t2\ln\frac t2> -\frac t2\ln t$ when one endpoint is zero extend strict concavity to the closed interval. Hence finite entropy is strictly concave and $H(\bar Q)>(H(Q_0)+H(Q_1))/2$. [F3, F4, F5, F6, given]

2.1 The second term in step 1.1 is linear in $P$, so step 1.2 gives $I(\bar P,W)>(I(P_0,W)+I(P_1,W))/2=C(W)$, contradicting [F2]. Existence in [F1] and this contradiction show that all capacity-achieving input laws induce one common output law. [F1, F2, step 1.1, step 1.2, assume-contra, discharge-contradiction] ∎
