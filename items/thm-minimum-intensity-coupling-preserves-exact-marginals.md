---
id: thm-minimum-intensity-coupling-preserves-exact-marginals
kind: theorem
title: "The minimum-intensity reaction coupling preserves both marginals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-minimum-intensity-coupling-for-reaction-networks
  - def-countable-choice
  - def-dependent-choice
  - def-reaction-network-propensity-system-and-generator
  - thm-dominating-thinning-exactly-simulates-reaction-rates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.3.1, common Poisson-clock coupling, PDF pp. 202–204."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.4, Poisson superposition and channel-thinning construction, PDF pp. 10–12."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Let $X$ and $Y$ be finite-state reaction systems with the same $R$ channel labels, respective increments $\nu_j^X,\nu_j^Y$ and propensities $a_j^X(x),a_j^Y(y)$, and fixed initial states $(x_0,y_0)$. Run [[alg-minimum-intensity-coupling-for-reaction-networks]] with an unlimited candidate budget. Then each coordinate path has exactly the law of its own reaction process run by the Gillespie direct method. At each pair state $(x,y)$ and channel $j$, shared events have rate $\min(a_j^X(x),a_j^Y(y))$, $X$-only events have rate $(a_j^X(x)-a_j^Y(y))_+$, and $Y$-only events have rate $(a_j^Y(y)-a_j^X(x))_+$. The expected total number of paired candidates on $[0,T]$ is $MT$, where $M=\sum_jM_j$ is defined in the algorithm; hence the coupled construction has finitely many events almost surely. If $M=0$, both paths are constant.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, two finite-state reaction systems, initial states, and the independent exponential and uniform candidate streams.

[F1] Each system has finite channels, admissible increments, and finite propensities; its reaction rate and marked transition convention are those in the reaction-system definition. ([[def-reaction-network-propensity-system-and-generator]])

[F2] The coupling algorithm uses a rate-$M$ candidate stream, fixed disjoint channel blocks of lengths $M_j/M$, and within-block nested acceptance intervals of lengths $a_j^X(x)/M$ and $a_j^Y(y)/M$. ([[alg-minimum-intensity-coupling-for-reaction-networks]])

[F3] Dominating thinning has the prescribed first-event and full path laws for pairwise-disjoint mark sets with the required channel measures and product-measurable time-mark regions. The sets induced by this algorithm are fixed intervals for each coordinate state, so their time-mark regions are product-measurable. ([[thm-dominating-thinning-exactly-simulates-reaction-rates]])

[A1] Countable Choice is assumed by the exponential, Lebesgue-measure and countable-product existence results used to realize the candidate inputs in [F2] and [F3]. ([[def-countable-choice]])

[A2] Dependent Choice is used in the countable-product construction of the independent input sequence. ([[def-dependent-choice]])

## Proof

**Proof technique:** direct.

1.1 If $M=0$, every $M_j=0$, so all propensities in both systems vanish and the constant paths are exact. Suppose $M>0$. The candidate process has rate $M$. If $M_j=0$, both channel-$j$ propensities vanish everywhere and its empty block is omitted. If $M_j>0$, its mark block has length $M_j/M$, and the $X$-acceptance portion has length $(M_j/M)(a_j^X(x)/M_j)=a_j^X(x)/M$; the corresponding $Y$ portion has length $a_j^Y(y)/M$. These portions are disjoint across channels for either coordinate and depend only on that coordinate's own current state. [A1, A2, F2, given, algebra]

2.1 For fixed $x$, the disjoint $X$ mark sets have measures $a_j^X(x)/M$ and the total accepted mark measure is $\sum_j a_j^X(x)/M\le1$. Apply the generalized mark-set case of [F3] with constant rates $a_j^X(x)$ and envelope $M$: it gives the exact first-event time and channel law from $x$ and, after each event, the same conditional law at the new state. Thus the $X$ coordinate has the exact marginal path law. The same argument with the $Y$ mark sets, whose measures are $a_j^Y(y)/M$, proves the exact $Y$ marginal. [F1, F2, F3, step 1.1, given]

3.1 Within channel block $j$, the acceptance intervals for $X$ and $Y$ share their left endpoint. Their intersection has length $\min(a_j^X(x),a_j^Y(y))/M$, the $X$-only difference has length $(a_j^X(x)-a_j^Y(y))_+/M$, and the $Y$-only difference has length $(a_j^Y(y)-a_j^X(x))_+/M$. Multiplying each mark length by candidate rate $M$ gives the three stated event intensities. Candidate events are a Poisson process of finite mean $MT$, so the total number of candidates is finite almost surely and bounds all shared and residual events. [F2, F3, step 1.1, algebra] ∎
