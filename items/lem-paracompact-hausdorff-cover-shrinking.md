---
id: lem-paracompact-hausdorff-cover-shrinking
kind: lemma
title: 'Under choice, every open cover of a paracompact Hausdorff space has locally finite open refinements $\{V_s\}$ and $\{W_s\}$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$'
status: published
origin: session
deps: [lem-paracompact-hausdorff-is-regular, lem-locally-finite-unions-and-closures, def-paracompact-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. If $X$ is paracompact and Hausdorff and
$\mathcal U$ is an open cover, there are a set $S$, a map $s\mapsto U_s$ from
$S$ into $\mathcal U$, and locally finite open covers $\{V_s\}_{s\in S}$ and
$\{W_s\}_{s\in S}$ with
$$\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s\quad(s\in S).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] The space is regular, and $x\in O$ open gives open $R$ with $x\in R\subseteq\overline R\subseteq O$ ([[lem-paracompact-hausdorff-is-regular]]).

[F1] Every open cover has a locally finite open refinement ([[def-paracompact-space]]).

[L2] Locally finite unions commute with closure ([[lem-locally-finite-unions-and-closures]]).

## Proof

**Proof technique:** constructive.

1.1 We first prove a one-shrink construction for any open cover $\mathcal C$. Let $\mathcal R$ be the family of all open $R$ for which $\overline R\subseteq C$ for some $C\in\mathcal C$. By [L1], $\mathcal R$ covers $X$. Take a locally finite open refining cover $\mathcal A$ of $\mathcal R$ by [F1], discard its empty members, and use [A1] to assign to each $A\in\mathcal A$ sets $R(A)\in\mathcal R$ and $C(A)\in\mathcal C$ with $$A\subseteq R(A)\subseteq\overline{R(A)}\subseteq C(A).$$ Then $\overline A\subseteq\overline{R(A)}\subseteq C(A)$. [A1, L1, F1, construct]

2.1 Apply step 1.1 to $\mathcal U$. This gives a locally finite open cover $\{W_s\}_{s\in S}$ and assigned $U_s\in\mathcal U$ such that $\overline{W_s}\subseteq U_s$. [step 1.1]

3.1 Apply step 1.1 again, now to the cover $\{W_s:s\in S\}$. Obtain a locally finite open cover $\{A_t\}_{t\in T}$ and a map $t\mapsto s(t)$ such that $\overline{A_t}\subseteq W_{s(t)}$. For $s\in S$ put $$V_s:=\bigcup\{A_t:s(t)=s\}.$$ The family $\{V_s\}_{s\in S}$ is an open cover. It is locally finite because any neighbourhood meeting only finitely many $A_t$ meets only the corresponding finitely many grouped unions $V_s$. [step 1.1, step 2.1, construct]

4.1 Each subfamily $\{A_t:s(t)=s\}$ is locally finite, so [L2] gives $$\overline{V_s} =\bigcup_{s(t)=s}\overline{A_t}\subseteq W_s.$$ Together with step 2.1 this yields $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ for every $s$, with both displayed families locally finite open covers. [L2, step 2.1, step 3.1, discharge-construct] ∎

## Remarks

The Axiom of Choice is used to retain the assignments to cover members through the two locally finite refinements. This is a sufficient hypothesis for this construction; no claim is made that it is the exact choice strength.
