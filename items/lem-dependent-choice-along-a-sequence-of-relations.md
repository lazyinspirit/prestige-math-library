---
id: lem-dependent-choice-along-a-sequence-of-relations
kind: lemma
title: "Dependent choice along a sequence of relations: if $R_n$ is entire on $A$ for every $n$, then from any $a$ there is a sequence with $a_n \\mathbin{R_n} a_{n+1}$"
status: draft
origin: session
deps: [def-dependent-choice, def-sequence, def-natural-numbers, thm-induction-principle]
justified_by: []
aliases: [lem-stagewise-dependent-choice]
landmark: false
short: "DC along a sequence of relations"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]).

Let $A$ be a nonempty set and let $(R_n)_{n \in \mathbb{N}}$ be a family of binary
relations on $A$, indexed by $\mathbb{N}$ ([[def-natural-numbers]]), such that

$$\text{for every } n \in \mathbb{N} \text{ and every } u \in A \text{ there is } v \in A \text{ with } u \mathbin{R_n} v .$$

Then for every $a_0 \in A$ there is a function $a : \mathbb{N} \to A$
([[def-sequence]]) with

$$a(0) = a_0 \qquad \text{and} \qquad a(n) \mathbin{R_n} a(n+1) \ \text{ for every } n \in \mathbb{N} .$$

**Why this is not [[def-dependent-choice]] read off.** That axiom is stated for
**one** relation $R$, entire on one set, fixed before any step is taken. What is
needed here is a relation that changes with the stage: at step $n$ the admissible
successors are the $R_n$-successors, and $R_n$ is a different relation for each
$n$. A family of relations on $A$ is not a relation on $A$, so the axiom does not
apply to it directly, and applying it as if it did would be a genuine gap. The
proof below removes the gap by carrying the stage inside the set.

## Facts & Assumptions

**Given:** A nonempty set $A$, a family $(R_n)_{n \in \mathbb{N}}$ of binary relations on $A$, a point $a_0 \in A$, and the Axiom of Dependent Choice.

[A1] For every $n \in \mathbb{N}$ and every $u \in A$ there is $v \in A$ with $u \mathbin{R_n} v$.

[L1] Dependent choice: for every nonempty set $X$, every relation $S$ on $X$ that is entire on $X$ — meaning every element of $X$ is related to some element of $X$ — and every $p \in X$, there is a function $x : \mathbb{N} \to X$ with $x_0 = p$ and $x_n \mathbin{S} x_{n+1}$ for every $n \in \mathbb{N}$ ([[def-dependent-choice]], [[def-sequence]]).

[L2] $\mathbb{N}$ contains $0$ and every natural has the successor $n+1$ ([[def-natural-numbers]]).

[L3] If $S \subseteq \mathbb{N}$ contains $0$ and contains $n+1$ whenever it contains $n$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Put $X := \mathbb{N} \times A$, a nonempty set since $A$ is nonempty and $0 \in \mathbb{N}$, and define a relation $S$ on $X$ by declaring $(n,u) \mathbin{S} (m,v)$ to hold exactly when $m = n+1$ and $u \mathbin{R_n} v$. [L2, construct]

2.1 $S$ is entire on $X$: given $(n,u) \in X$, [A1] supplies $v \in A$ with $u \mathbin{R_n} v$, and then $(n+1, v)$ lies in $X$ and satisfies $(n,u) \mathbin{S} (n+1,v)$. [A1, L2, step 1.1]

3.1 By [L1] applied to $X$, $S$ and the point $(0, a_0)$ there is $x : \mathbb{N} \to X$ with $x_0 = (0,a_0)$ and $x_n \mathbin{S} x_{n+1}$ for every $n$; write $x_n = (k_n, a_n)$ with $k_n \in \mathbb{N}$ and $a_n \in A$, so that $k_0 = 0$, $a_0$ is the given point, and $k_{n+1} = k_n + 1$ with $a_n \mathbin{R_{k_n}} a_{n+1}$ for every $n$. [L1, step 1.1, step 2.1]

4.1 $k_n = n$ for every $n \in \mathbb{N}$: the set $\{\, n \in \mathbb{N} : k_n = n \,\}$ contains $0$ because $k_0 = 0$, and contains $n+1$ whenever it contains $n$ because $k_{n+1} = k_n + 1 = n + 1$; so [L3] makes it all of $\mathbb{N}$. [L3, step 3.1]

5.1 Therefore $a : n \mapsto a_n$ is a function $\mathbb{N} \to A$ with $a(0) = a_0$ and $a(n) \mathbin{R_n} a(n+1)$ for every $n$, the relation at stage $n$ being $R_{k_n} = R_n$ by step 4.1. [step 3.1, step 4.1] ∎

## Remarks

**The device is the standard one and it is worth naming.** Carrying the stage as a first coordinate turns a family of relations into a single relation on a larger set, at the cost of having to check afterwards that the first coordinate really counts $0, 1, 2, \dots$; that check is step 4.1 and it is an ordinary induction on $\mathbb{N}$, not a second appeal to choice.

**Nothing beyond dependent choice is spent.** The hypothesis [A1] is a pure existence statement, asserting for each stage and each element that *some* successor exists; it names none. All the selecting is done once, by [L1], and the lemma adds nothing to its cost.
