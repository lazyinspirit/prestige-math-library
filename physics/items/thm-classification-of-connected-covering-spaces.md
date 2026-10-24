---
id: thm-classification-of-connected-covering-spaces
kind: theorem
title: "Connected covering spaces are classified by conjugacy classes of fundamental-group subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-subgroup-quotient-of-universal-cover,
       cor-based-connected-coverings-isomorphic-iff-equal-subgroups,
       lem-covering-basepoint-change-conjugates-subgroup, def-path-connected,
       def-semilocally-simply-connected-space,
       def-map-and-isomorphism-of-covering-spaces,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected,
       thm-path-lifting-for-covering-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.38"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $B$ be nonempty, path-connected, locally path-connected, and semilocally simply connected, fix $b_0\in B$, and put $G=\pi_1(B,b_0)$.

1. The assignment $$[p:(E,e_0)\to(B,b_0)]\longmapsto p_*\pi_1(E,e_0)$$ is a bijection from based-isomorphism classes of based connected coverings of $B$ to subgroups of $G$.
2. After forgetting the chosen point in the fibre, the assignment to the conjugacy class of $p_*\pi_1(E,e_0)$ is a bijection from isomorphism classes of connected coverings of $B$ to conjugacy classes of subgroups of $G$.

## Facts & Assumptions

**Given:** The base space and group $G$ in the Statement.

[L1] Every subgroup $H\le G$ is realized as the induced subgroup of a based connected quotient covering of a universal cover ([[lem-subgroup-quotient-of-universal-cover]]).

[L2] Over a path-connected locally path-connected base, based coverings with connected total spaces are isomorphic exactly when their induced subgroups are equal ([[cor-based-connected-coverings-isomorphic-iff-equal-subgroups]]).

[L3] For a covering with path-connected total space, changing the chosen point over $b_0$ conjugates the induced subgroup, and every fibre point is obtained by a lifted loop ([[lem-covering-basepoint-change-conjugates-subgroup]]).

[F1] Local path-connectedness lifts from the base of a covering to its total space ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F2] A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F3] Every path in the base of a covering has a unique lift from a prescribed point of the fibre ([[thm-path-lifting-for-covering-maps]]).

## Proof

**Proof technique:** direct.

1.1 Every connected covering under consideration has locally path-connected total space by [F1], because $B$ is locally path-connected, and therefore has path-connected total space by [F2]. For the based correspondence, [L1] proves surjectivity: every subgroup occurs. [given, L1, F1, F2]

2.1 For the based correspondence, [L2] applies under the base hypotheses and the path-connectedness established in step 1.1, and proves injectivity: two based connected coverings determine the same subgroup exactly when they are based-isomorphic. Thus claim 1 is a bijection. [step 1.1, L2]

2.2 For claim 2, the path-connectedness from step 1.1 licenses [L3], which shows that changing the chosen point over $b_0$ replaces the subgroup by a conjugate. Hence the conjugacy class depends only on the unbased covering. Every conjugacy class occurs by step 1.1. [step 1.1, L3]

3.1 Suppose two unbased connected coverings determine the same conjugacy class. Choose fibre points with induced subgroups $H_1,H_2$, and write $H_1=g^{-1}H_2g$. By [F3], lift a loop representing $g$ from the second fibre point. By [L3], its endpoint gives a new fibre point whose induced subgroup is $H_1$; [L2] then gives a based isomorphism and hence an unbased isomorphism. Conversely, any unbased isomorphism carries a chosen fibre point to a fibre point of the other cover, so [L2] and [L3] make the subgroups conjugate. This proves injectivity and completes claim 2. [step 2.1, L2, L3, F3] ∎
