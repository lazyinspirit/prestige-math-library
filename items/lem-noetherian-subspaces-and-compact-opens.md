---
id: "lem-noetherian-subspaces-and-compact-opens"
kind: "lemma"
title: "Subspaces of a Noetherian space and its compact open subsets"
status: draft
origin: pipeline
deps: [def-noetherian-topological-space, def-compact-space, def-subspace-topology-top, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Topology (Section 5.9, Noetherian topological spaces)"
      url: https://stacks.math.columbia.edu/tag/0050
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
Noetherian topological space ([[def-noetherian-topological-space]]). Then:

1. every subspace $Y\subseteq X$, with the subspace topology
   ([[def-subspace-topology-top]]), is again Noetherian;
2. every subspace $Y\subseteq X$ is compact ([[def-compact-space]]); in
   particular every open subset $U\subseteq X$ is compact;
3. the intersection of two compact open subsets of $X$ is a compact open
   subset of $X$.

## Facts & Assumptions

[F1] $X$ is Noetherian exactly when every ascending chain $U_0\subseteq U_1\subseteq U_2\subseteq\cdots$ of open subsets of $X$ stabilizes, equivalently when every descending chain of closed subsets stabilizes ([[def-noetherian-topological-space]]).

[F2] A subset $A\subseteq X$ is a compact subset of $X$ when the subspace $(A,\mathcal T_A)$ is a compact topological space, and a space is compact when every open cover of it has a finite subcover ([[def-compact-space]]).

[F3] The open subsets of the subspace $S\subseteq X$ are exactly the traces $U\cap S$ of open subsets $U\subseteq X$ ([[def-subspace-topology-top]]).

[F4] In ZF, $\mathrm{AC}\Longrightarrow\mathrm{DC}$, where DC includes a prescribed initial point ([[thm-choice-implies-dependent-implies-countable-choice]]); hence under the present hypothesis we may carry out a recursion in which each step selects a witness from a nonempty set ([[def-axiom-of-choice]]).

## Proof

**Given:** A Noetherian topological space $X$ and the Axiom of Choice.

1.1 Let $W\subseteq X$ be an open subset and let $(P_a)_{a\in A}$ be an open cover of the space $W$, so that each $P_a$ is an open subset of $W$. We show that finitely many $P_a$ cover $W$. Suppose not. Recursively choose finite unions of members of the given cover: put $V_0:=\varnothing$; since $P_{a_1}\cup\cdots\cup P_{a_n}=W$ fails for every finite list and $V_n\cap W=P_{a_1}\cup\cdots\cup P_{a_n}$ for a list of traces, the set $W\setminus V_n$ is nonempty, so we may choose $x_n\in W\setminus V_n$; because the family covers $W$ there is $a_{n+1}\in A$ with $x_n\in P_{a_{n+1}}$, and we put $V_{n+1}:=V_n\cup P_{a_{n+1}}$. Each $P_a$ is the trace of an open subset of $X$ by [F3], so each $V_n$ is an open subset of $X$, and $V_0\subseteq V_1\subseteq V_2\subseteq\cdots$ is an ascending chain with $V_{n+1}\ne V_n$ for every $n$ because $x_n\in V_{n+1}\setminus V_n$. Such a chain does not stabilize, contradicting [F1]. Hence finitely many $P_a$ cover $W$, so $W$ is compact by [F2]; the recursion uses the Axiom of Dependent Choice, available by [F4]. [F1, F2, F3, F4]

1.2 Let $Y\subseteq X$ be a subspace and let $V_0\subseteq V_1\subseteq V_2\subseteq\cdots$ be an ascending chain of open subsets of $Y$. By [F3] each $V_n$ is a trace $V_n=U_n\cap Y$ of an open subset $U_n\subseteq X$; the assignment $n\mapsto U_n$ is a sequence of choices, so we record it as a construction using [F4]. Put $W_n:=U_1\cup\cdots\cup U_n$, an open subset of $X$ with $W_n\subseteq W_{n+1}$. By [F1] the chain $W_1\subseteq W_2\subseteq\cdots$ stabilizes, so there is $N$ with $W_n=W_N$ for every $n\ge N$. For such $n$ one has $V_n=W_n\cap Y$ and $V_{n+1}=W_{n+1}\cap Y$, because $W_n\cap Y=(U_1\cap Y)\cup\cdots\cup(U_n\cap Y)=V_1\cup\cdots\cup V_n=V_n$ by the ascending hypothesis; hence $V_n=V_{n+1}$. Therefore the given chain in $Y$ stabilizes and $Y$ is Noetherian. [F1, F3, F4]

2.1 Let $Y\subseteq X$ be a subspace. By [step 1.2] the space $Y$ is Noetherian, so [step 1.1] applies to it with $W=Y$: every open cover of $Y$ has a finite subcover, that is, $Y$ is compact by [F2]. Taking $Y:=U$ for an open $U\subseteq X$ in particular shows that every open subset of $X$ is compact. [F2, step 1.1, step 1.2]

3.1 Let $U_1,U_2\subseteq X$ be compact open subsets. The intersection $U_1\cap U_2$ is open in $X$, hence compact by [step 2.1] applied to $U:=U_1\cap U_2$. Thus the compact open subsets of $X$ are closed under finite intersections. [step 2.1]

4.1 Assertion 1 is [step 1.2], assertion 2 is [step 2.1] and assertion 3 is [step 3.1]. The Axiom of Choice entered only through the Axiom of Dependent Choice of [F4], used for the recursive selection of the sequence $(V_n)$ in [step 1.1] and for the sequence of open sets representing the chain in [step 1.2]; no other selection is made. ∎ [F4, step 1.2, step 2.1, step 3.1]
