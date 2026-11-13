---
title: Numerical amplification argument for alpha 0.0816
status: draft
research_item: lem-expander-sync-numeric-amplification
dependency_level: 15
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 29–30, Table 1 and proof of Theorem 1.4, equations (5.1)–(5.3)
      statement: The article applies three small-set amplification steps and then
        large-set amplification at alpha 0.0816, using the displayed constants
        and a geometric tail to reach a contradiction.
      hypotheses: A normalized stable state on a connected regular expander, with a
        nonempty phase tail at pi/2, in the conventions of the cited proof.
      reading_limits: The supplied article text at PDF pp. 29–30 was inspected for
        attribution and the displayed argument. The local proof uses the
        declared mathematical suppliers; the article is not used as proof of the
        conclusion.
---

PDF p. 29: ` Proof of Theorem 1.4 and Table 1 `; PDF p. 30: ` Proof of Theorem 1.4; equations (5.2), (5.3) `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [ex-expander-sync-table-1](item-ex-expander-sync-table-1)
- [lem-author-2e2d9953c21a-regular-numerical-replay](item-lem-author-2e2d9953c21a-regular-numerical-replay)
- [lem-expander-sync-regular-numeric-contradiction](item-lem-expander-sync-regular-numeric-contradiction)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected $d$-regular graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and loops counted once in degrees. Suppose $\|A-(d/n)J\|\le 0.0816d$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum of the energy $\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. Rotate its phases so that $n^{-1}\sum_x e^{i\theta_x}$ is real and nonnegative. Use representatives $\theta_x\in(-\pi,\pi]$ and define $\mathcal C_\beta=\{x\in V:|\theta_x|\ge\beta\}$ for $0\le\beta\le\pi$. Then $\mathcal C_{\pi/2}$ is empty.

More precisely, if $r=|\mathcal C_{\pi/2}|>0$, the amplification construction starts with $a=2.4093$, $q=2.1274$, $u=\arcsin(0.3272)$, $c_i=a^i$ and $\beta_i=\pi/2-iu$ for $0\le i\le3$; subsequently $c_{3+k}=a^3q^k$ and $\beta_{i+1}=\beta_i-\arcsin(3.168/c_i)$. The three first transitions have cap $0.031n$, and subsequent transitions have cap $n/2$. All angles exceed $0.1356$, while the uncapped lower bounds $c_i r$ grow without bound. Both cap alternatives contradict the stated regular-graph threshold.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] Under the stated graph, state, normalization and $r>0$ hypotheses, the table supplier gives the exact recurrence above, the lower bound $\beta_i>0.1356$, the first three inequalities $|\mathcal C_{\beta_{i+1}}|\ge\min\{a|\mathcal C_{\beta_i}|,0.031n\}$, and the later inequalities $|\mathcal C_{\beta_{i+1}}|\ge\min\{q|\mathcal C_{\beta_i}|,n/2\}$ whenever $|\mathcal C_{\beta_i}|\ge c_i r$. Before a cap occurs, the lower bounds are $|\mathcal C_{\beta_i}|\ge c_i r$, and $c_i\to\infty$ ([ex-expander-sync-table-1](item-ex-expander-sync-table-1)).

[F2] The same exact recurrence has $\beta_3\ge0.570$ and $c_3=13.985327532357>13.985$. Its numerical replay proves $0.031\sin^2(0.570)>5(0.0816)^2/4$ and $\sin^2(0.131)>5(0.0816)^2/2$ ([lem-author-2e2d9953c21a-regular-numerical-replay](item-lem-author-2e2d9953c21a-regular-numerical-replay)).

[F3] Under the stated graph and state hypotheses, no $\xi\in(0,\pi/2)$ can satisfy $|\mathcal C_\xi|\ge0.00832n/\sin^2\xi$ ([lem-expander-sync-regular-numeric-contradiction](item-lem-expander-sync-regular-numeric-contradiction)).

[F4] Sine is nonnegative on $[0,\pi/2]$; the principal inverse sine takes values in $[-\pi/2,\pi/2]$ ([prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)). Sine is increasing on $[0,\pi/2]$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), with $m=0$ and restriction to this subinterval). The tail sets use the principal phase representatives stated above ([def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

## Proof

**Given:** The graph, expansion bound, normalized stable state and countable choice in the statement.

**Goal:** Prove that $r=|\mathcal C_{\pi/2}|$ is zero.

1.1 Suppose $r>0$. Apply [F1]. The first three angles after $\beta_0=\pi/2$ lie in $(0,\pi/2)$ and are at least $\beta_3\ge0.570$: their decrements are positive and [F2] gives the lower bound. Since $5(0.0816)^2/4=0.0083232>0.00832$, [F2] and [F4] imply $0.031\sin^2\beta_i>0.00832$ for $i=1,2,3$. Thus, if a first-stage cap occurs, its tail cardinality is at least $0.031n>0.00832n/\sin^2\beta_i$, contrary to [F3]. Consequently all three first-stage updates give the uncapped lower bound, including $|\mathcal C_{\beta_3}|\ge c_3r$. [given, F1, F2, F3, F4, algebra, assume-contra]

2.1 For each later update, [F1] gives an angle in $(0,\pi/2)$ exceeding $0.1356>0.131$. By [F2] and [F4], $\sin^2\beta_{i+1}\ge\sin^2(0.131)>5(0.0816)^2/2>2(0.00832)$. A cap $|\mathcal C_{\beta_{i+1}}|\ge n/2$ therefore violates [F3]. With no cap at any stage, [F1] yields $|\mathcal C_{\beta_i}|\ge c_i r$ for every $i$, while $c_i\to\infty$ and $r\ge1$. This eventually exceeds $n$, impossible for a subset of $V$. The supposition $r>0$ is false, so $\mathcal C_{\pi/2}$ is empty. [F1, F2, F3, F4, step 1.1, algebra, discharge-contradiction] ∎

## Source notes

The article’s proof uses $\varepsilon=0.23$ and $\rho=0.38$ for the first stage, and $\varepsilon=0.184$ for the second. It records the lower-bound entries $0.570$, $13.985$, $0.131$ and $63.295$, and bounds the later decrements by $3.326/c_i$. The exact recurrence is not restarted at a rounded table entry. The article’s displayed tail estimate is at least $0.131$, and it uses $\sin^2(0.131)\ge0.016646$; [F2] gives a stronger certified comparison. The prose immediately before that display says the sequence will never produce an angle with $\beta_M\ge0.131$, reversing the direction of the displayed lower bound. The source attribution is to the proof of Theorem 1.4 on PDF pp. 29–30; the argument above uses the stated suppliers.
