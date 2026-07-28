---
id: thm-the-separation-implication-chain
kind: theorem
title: "The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them"
status: draft
origin: session
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       thm-t1-iff-singletons-are-closed, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       thm-completely-regular-implies-regular, thm-t4-implies-t3,
       thm-completely-normal-implies-normal, thm-perfectly-normal-implies-completely-normal,
       thm-metric-spaces-are-completely-normal, thm-metric-spaces-are-tychonoff-and-perfectly-normal,
       def-metrizable-space, def-countable-choice, def-topological-space]
justified_by: []
aliases: [thm-separation-chain]
landmark: true
short: "the separation implication chain"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §13-15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). The
following implications hold, and each is proved by an earlier item of this page.

1. **Perfectly normal implies completely normal**, assuming the Axiom of
   Countable Choice ([[def-countable-choice]]).
2. **Completely normal implies normal**, and **perfectly normal implies normal**.
3. **Normal together with $T_1$ implies $T_3$**, that is regular together with
   $T_1$.
4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**.
5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**,
   which implies **$T_1$**, which implies **$T_0$**.
6. **Metrizable implies every property named above**: a metrizable space is
   perfectly normal, completely normal, normal, Tychonoff, completely regular,
   $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle
   used.

Reading the numbered axioms in order, clauses 1 to 5 give

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$

the first arrow under $\mathrm{AC}_\omega$, together with
$T_{3\frac12} \Rightarrow T_3$.

**This is the whole of the classical chain that this page proves, and it is one
arrow short of the classical chain.** The implication $T_4 \Rightarrow
T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma
and is not available at this point in the reading order. Its absence is recorded,
with what would license it, in this page's conventions remark; it is
deliberately **not** asserted here,
and no clause above may be read as giving it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, and the definitions of $T_0$, $T_1$, Hausdorff, Urysohn, regular, completely regular, normal, completely normal and perfectly normal ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]], [[def-urysohn-space]], [[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]], [[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] Assuming $\mathrm{AC}_\omega$, every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]], [[def-countable-choice]]).

[L2] Every completely normal space is normal, and every perfectly normal space is normal ([[thm-completely-normal-implies-normal]]).

[L3] A normal $T_1$ space is regular, hence $T_3$ ([[thm-t4-implies-t3]]).

[L4] Every completely regular space is regular, and every Tychonoff space is $T_3$ ([[thm-completely-regular-implies-regular]]).

[L5] Every regular $T_1$ space is Urysohn, every Urysohn space is Hausdorff, and every Hausdorff space is $T_1$ and hence $T_0$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]).

[L6] Every $T_1$ space has closed singletons, and conversely ([[thm-t1-iff-singletons-are-closed]]).

[L7] Every metric space is completely normal, hence normal, with no choice principle used ([[thm-metric-spaces-are-completely-normal]]).

[L8] Every metrizable space is Tychonoff and perfectly normal, and hence satisfies every axiom named in clause 6 ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1 is [L1], whose hypothesis $\mathrm{AC}_\omega$ is carried into clause 1 unchanged. [L1]

1.2 Clause 2 is [L2]. [L2]

1.3 Clause 3 is [L3]. [L3]

1.4 Clause 4 is [L4]. [L4]

1.5 Clause 5 is [L5], the first implication of which uses [L6] inside its own proof and needs nothing further here. [L5, L6]

1.6 Clause 6 is [L7] together with [L8]. [L7, L8]

2.1 The displayed chain of numbered axioms is read off from steps 1.1 to 1.5, each numbered axiom being the corresponding unnumbered property together with $T_1$, which is carried along every arrow: $T_6$ gives completely normal by step 1.1, hence $T_5$; $T_5$ gives normal by step 1.2, hence $T_4$; $T_4$ gives $T_3$ by step 1.3; and $T_3$ gives Urysohn, Hausdorff, $T_1$ and $T_0$ by step 1.5. [step 1.1, step 1.2, step 1.3, step 1.5]

2.2 The side arrow $T_{3\frac12} \Rightarrow T_3$ is the second half of step 1.4. [step 1.4]

3.1 Steps 1.1 to 1.6, 2.1 and 2.2 are exactly clauses 1 to 6 and the two displayed chains, and no other implication is asserted. [step 1.6, step 2.1, step 2.2] ∎

## Remarks

- **Every clause above is an implication and none is an equivalence.** This page refutes four of the possible converses among its false statements — $T_1$ does not give Hausdorff, normal does not give Hausdorff, Hausdorff does not give regular, and unique sequential limits do not give Hausdorff — and asserts nothing about the others.

- **The $T_1$ hypothesis is where the numerals differ from the adjectives.** *Regular*, *completely regular*, *normal*, *completely normal* and *perfectly normal* carry no $T_1$ in this library; $T_3$, $T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ are the conjunctions with $T_1$. Clauses 3 and 5 are the two places the conjunction is genuinely needed for the next arrow, and they are what makes the numbered chain descend at all.

- **The countable choice in clause 1 is inherited, not introduced.** It is spent in the proof of [[thm-perfectly-normal-implies-completely-normal]] and nowhere else on this page; clause 6 in particular is choice free, since the metric proofs construct their open sets explicitly.
