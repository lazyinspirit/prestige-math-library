---
id: cor-urysohns-lemma-closes-the-separation-chain
kind: corollary
title: "Under dependent choice a normal $T_1$ space is completely regular, so $T_4 \\Rightarrow T_{3\\frac{1}{2}}$, and together with the implications already proved this is the whole classical chain"
status: draft
origin: session
deps: [thm-urysohn-lemma, def-normal-and-t4-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-completely-regular-and-tychonoff-spaces,
       thm-the-separation-implication-chain, def-dependent-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "$T_4 \\Rightarrow T_{3\\frac12}$ (DC)"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is normal and $T_1$, that is $T_4$
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]), then $X$ is
completely regular ([[def-completely-regular-and-tychonoff-spaces]]). Since $X$
is also $T_1$, $X$ is Tychonoff, and $T_4 \Rightarrow T_{3\frac12}$.

Combined with [[thm-the-separation-implication-chain]], every arrow of

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$$

now holds: the first arrow under the Axiom of Countable Choice
([[def-countable-choice]]), the arrow $T_4 \Rightarrow T_{3\frac12}$ proved here
under dependent choice, and every other arrow with no choice principle at all.
No arrow of this chain is asserted to reverse.

## Facts & Assumptions

**Given:** A normal, $T_1$ topological space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is normal ([[def-normal-and-t4-spaces]]) and $T_1$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] $X$ is completely regular when for every closed $C$ and every $x_0 \in X \setminus C$ there is a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L4] Clauses 3 and 4 of [[thm-the-separation-implication-chain]]: normal with $T_1$ implies $T_3$; completely regular implies regular, and Tychonoff implies $T_3$; and clauses 1, 2 and 5 give the remaining arrows of the displayed chain, clause 1 — perfectly normal implies completely normal, that is $T_6 \Rightarrow T_5$ — under the Axiom of Countable Choice.

## Proof

**Proof technique:** direct.

1.1 $\{x_0\}$ is closed, since $X$ is $T_1$ by [A1]. [A1, L1]

1.2 $\{x_0\} \cap C = \varnothing$, since $x_0 \notin C$. [given]

2.1 By [A1] $X$ is normal, so [L2] applies to the disjoint closed sets $C$ and $\{x_0\}$: there is a continuous $f : X \to [0,1]$ with $C \subseteq f^{-1}(\{0\})$ and $\{x_0\} \subseteq f^{-1}(\{1\})$, that is $f \equiv 0$ on $C$ and $f(x_0) = 1$. [step 1.1, step 1.2, A1, L2]

3.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 2.1 exhibits, for every closed $C$ and every $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$; by [L3] this makes $X$ completely regular. [step 2.1, L3]

4.1 Since $X$ is also $T_1$ by [A1], $X$ is Tychonoff, so $T_4 \Rightarrow T_{3\frac12}$. [step 3.1, A1]

5.1 By [L4], $T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$ and $T_6 \Rightarrow T_5 \Rightarrow T_4$ all hold, the arrow $T_6 \Rightarrow T_5$ under countable choice; combined with step 4.1, every arrow of the displayed chain holds. [step 4.1, L4] ∎

## Remarks

- **This corollary supplies exactly the one arrow the published `separation-axioms` page could not reach.** That page's own `rem-separation-axiom-conventions` names the missing arrow as *normal $T_1$ implies completely regular* and records that no rearrangement of material already on that page could supply it, since the implication is Urysohn's lemma. Nothing in this corollary revisits or amends that page; it only supplies, at a later point in the reading order, the theorem that page named as absent.

- **The chain above is not asserted to be a theorem of ZF.** Its weakest link is this corollary's own dependent-choice hypothesis, and the first arrow separately costs countable choice; neither cost is removed by combining the arrows, and no clause of [[thm-the-separation-implication-chain]] is reproved here.
