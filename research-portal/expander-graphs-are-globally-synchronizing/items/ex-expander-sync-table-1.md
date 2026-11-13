---
id: ex-expander-sync-table-1
title: Published amplification parameters and bounds — Table 1
kind: example
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-phase-arcs
  - def-expander-sync-amplification-sequences
  - lem-expander-sync-amp-small
  - lem-expander-sync-amp-large
  - prop-expander-sync-regular-two-sided
  - prop-expander-prereq-geometric-growth-budget
  - lem-author-2e2d9953c21a-regular-numerical-replay
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-phase-arcs: mathematical-premise
  def-expander-sync-amplification-sequences: mathematical-premise
  lem-expander-sync-amp-small: mathematical-premise
  lem-expander-sync-amp-large: mathematical-premise
  prop-expander-sync-regular-two-sided: mathematical-premise
  prop-expander-prereq-geometric-growth-budget: mathematical-premise
  lem-author-2e2d9953c21a-regular-numerical-replay: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 29–30, Table 1 and proof of Theorem 1.4
      statement: Table 1 lists the displayed angles, multipliers and amplification
        parameters for alpha at most 0.0816; the surrounding proof describes the
        two amplification stages and an infinite geometric tail.
      hypotheses: The table concerns the regular-expander amplification argument at
        alpha at most 0.0816, with a normalized stable state and the phase-tail
        conventions of Section 4.
      reading_limits: PDF pages 28–30 were inspected for the table and surrounding
        argument. The citation attributes the table; the deductions below use
        the declared mathematical suppliers. No independent audit of the full
        article proof is claimed.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 13
---

## Example

Assume countable choice. Let $G=(V,E)$ be a finite connected $d$-regular $(n,d,\alpha)$-expander with $n>0$ and $0\le\alpha\le0.0816$. Thus its binary symmetric adjacency matrix $A$ satisfies $\|A-(d/n)J\|\le\alpha d$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum of the graph energy, with its first order parameter $n^{-1}\sum_{x\in V}e^{i\theta_x}$ real and nonnegative. Represent phases in $(-\pi,\pi]$ and set $\mathcal C_\beta=\{x\in V:|\theta_x|\ge\beta\}$ and $r=|\mathcal C_{\pi/2}|$. Suppose $r>0$.

All decimals below are exact rationals. Set $a=2.4093$, $q=2.1274$, $u=\arcsin(0.3272)$, $c_i=a^i$ and $\beta_i=\pi/2-iu$ for $0\le i\le3$. For $k\ge0$, put $c_{3+k}=a^3q^k$ and $\beta_{4+k}=\beta_{3+k}-\arcsin(3.168/c_{3+k})$. The inverse sine is the principal inverse on $[-1,1]$.

The following are simultaneous lower bounds for the exact recurrence values, not instructions to restart the recurrence at rounded entries:

| $i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $\infty$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $\beta_i$ | $\pi/2$ | $1.237$ | $0.904$ | $0.570$ | $0.342$ | $0.235$ | $0.131$ |
| $c_i$ | $1.0$ | $2.409$ | $5.804$ | $13.985$ | $29.752$ | $63.295$ | $\infty$ |

Here the last angle is a lower bound for the limiting angle, while $c_i\to\infty$. In fact every $\beta_i$ exceeds $0.1356$, so the sequence is also bounded below by $0.132$. Table 1 attributes the first three transitions to Lemma 4.2 with $\varepsilon=0.23$ and $\rho=0.38$, and the later transitions to Lemma 4.3 with $\varepsilon=0.184$.

For $i=0,1,2$, the small-set lemma gives $|\mathcal C_{\beta_{i+1}}|\ge\min\{a|\mathcal C_{\beta_i}|,0.031n\}$. For $i\ge3$, whenever $|\mathcal C_{\beta_i}|\ge c_i r$, the large-set lemma gives $|\mathcal C_{\beta_{i+1}}|\ge\min\{q|\mathcal C_{\beta_i}|,n/2\}$. Consequently, as long as the cap alternative has not occurred, induction gives $|\mathcal C_{\beta_i}|\ge c_i r$. The table records these uncapped lower bounds; it does not assert that an actual finite graph has an infinite phase-tail cardinality.

## Facts & Assumptions

[F1] The phase-tail definition supplies the principal representatives and the displayed sets; the amplification-sequence definition identifies $|\mathcal C_{\pi/2}|$ as the initial tail mass ([[def-expander-sync-phase-arcs]], [[def-expander-sync-amplification-sequences]]).

[F2] A regular $(n,d,\alpha_0)$-expander is an $(n,d,\alpha_0,-\alpha_0,\alpha_0)$-expander ([[prop-expander-sync-regular-two-sided]]).

[F3] The small-set and large-set amplification lemmas give their respective minimum bounds under the stated angle, sine, denominator, normalization and countable-choice hypotheses ([[lem-expander-sync-amp-small]], [[lem-expander-sync-amp-large]], [[math:def-countable-choice]]).

[F4] The exact scalar replay gives the displayed lower bounds, positivity of all recurrence angles, the strict lower bound $0.1356$, and the parameter comparisons $2(1+0.38)\alpha_0/(1-\alpha_0-0.23)<0.3272$, $1+0.23/(2\alpha_0)>a$, $0.38\alpha_0>0.031$, $2(1+2\alpha_0)/(1-\alpha_0-0.184)<3.168$, and $1+0.184/(2\alpha_0)>q$, where $\alpha_0=0.0816$ ([[lem-author-2e2d9953c21a-regular-numerical-replay]]).

[F5] A positive geometric sequence with ratio greater than one is unbounded; a recurrence bounded below by geometric growth reaches any positive finite cap ([[prop-expander-prereq-geometric-growth-budget]]).

## Verification

**Given:** The graph, state, positive initial tail mass and exact scalar recurrences in the example.

**Goal:** Verify the table bounds and the conditional amplification statements.

1.1 Put $\alpha_0=0.0816$. Since $d$ is a nonnegative degree and $\alpha\le\alpha_0$, the given adjacency norm bound also holds with $\alpha_0$. By [F2], the graph has two-sided parameters $c^-=-\alpha_0$ and $c^+=\alpha_0$. The denominators in [F4] are positive, $0<0.23,0.184<1-\alpha_0$, and $c^+-c^-=2\alpha_0>0$. The state is connected and normalized as required by [F3]. [given, F2, F3, F4, algebra]

2.1 For the first three transitions, [F4] gives $0<\beta_{i+1}<\beta_i\le\pi/2$ and $\sin(\beta_i-\beta_{i+1})=0.3272$ above the small-set threshold. Applying [F3] and the comparisons in [F4] yields the stated minimum with $0.031n$; the additional $n/2$ alternative in the lemma is no smaller than $0.031n$. The starting bound is $|\mathcal C_{\beta_0}|=r=c_0r$. If the cap is not attained at a transition, the minimum bound forces the geometric alternative, so induction gives $|\mathcal C_{\beta_i}|\ge c_i r$ through the first stage. [given, F1, F3, F4, step 1.1, algebra, induction]

2.2 For $i\ge3$, assume $|\mathcal C_{\beta_i}|\ge c_i r>0$. The angle difference has sine $3.168/c_i$, and [F4] bounds the large-set threshold by $3.168r/|\mathcal C_{\beta_i}|\le3.168/c_i$. The angle and denominator hypotheses hold by [F4] and positivity of $r$. Applying [F3] and its growth-factor comparison in [F4] gives the stated minimum. If its $n/2$ cap is not attained, it gives $|\mathcal C_{\beta_{i+1}}|\ge q c_i r=c_{i+1}r$. Induction continues the lower bound for every uncapped transition. [given, F3, F4, step 1.1, algebra, induction]

3.1 The exact replay [F4] proves each displayed numerical lower bound and the uniform angle bound, including the infinite inverse-sine tail. Since $q>1$, [F5] gives $c_i\to\infty$. Thus the last table column describes limiting scalar bounds; on a finite graph the uncapped cardinality inequalities cannot persist indefinitely because every tail is a subset of $V$. This verifies the example. [F1, F4, F5, step 2.2, algebra] ∎

## Source notes

The table and the stated choices of $\varepsilon$ and $\rho$ are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 29. The exact recurrence and its certified lower bounds are supplied by the independent local scalar replay; the article citation is attribution, not proof of that replay.
