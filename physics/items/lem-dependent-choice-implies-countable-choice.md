---
id: lem-dependent-choice-implies-countable-choice
kind: lemma
title: Dependent choice implies countable choice
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-dependent-choice, def-countable-choice, def-choice-function, def-function, def-natural-numbers, def-indexed-union-and-intersection, def-power-set, def-axiom-schema-of-separation, def-ordered-pair, lem-the-set-of-functions-between-two-sets-is-a-set, thm-induction-principle, thm-well-ordering-principle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876 — the finite-history proof that DC implies AC_omega"
      url: "https://link.springer.com/book/10.1007/11601562"
---

## Statement

In ZF, the Axiom of Dependent Choice implies the Axiom of Countable Choice:
every at most countable family of nonempty sets has a choice function
([[def-countable-choice]], [[def-choice-function]],
[[def-dependent-choice]]).

## Facts & Assumptions

[A1] $\mathrm{DC}$: for every nonempty set $X$, every relation $R\subseteq X\times X$ entire on $X$ and every $a\in X$ there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n$ ([[def-dependent-choice]], [[def-natural-numbers]], [[def-function]]).

[A2] $\mathrm{AC}_\omega$: for every family $(E_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ with domain $\mathbb N$ and $f(n)\in E_n$ for all $n$ ([[def-countable-choice]]). A choice function on the set $\mathcal E:=\{E_n:n\in\mathbb N\}$ instead has domain $\mathcal E$ and selects an element of each of its members ([[def-choice-function]]).

[A3] For sets $A$ and $B$ the collection of functions $A\to B$ is a set ([[lem-the-set-of-functions-between-two-sets-is-a-set]], [[def-power-set]], [[def-axiom-schema-of-separation]], [[def-ordered-pair]]); unions and intersections of indexed families are available ([[def-indexed-union-and-intersection]]), induction on $\mathbb N$ is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]); a natural number is the set of its predecessors, so $\bigcup_{n\in\mathbb N}n=\mathbb N$.

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{DC}$ and a family $(E_n)_{n\in\mathbb N}$ of nonempty sets.

1.1 Let $H$ be the set of all functions $s$ with $\operatorname{dom}s\in\mathbb N$ and $s(j)\in E_j$ for every $j<\operatorname{dom}s$: this is a set by [A3] applied inside $\bigcup_{n\in\mathbb N}E_n$, and the empty function lies in $H$, so $H\ne\varnothing$. [A3]

2.1 Define $R\subseteq H\times H$ by $s\mathbin R t$ if and only if $\operatorname{dom}t=\operatorname{dom}s+1$ and $t(j)=s(j)$ for every $j<\operatorname{dom}s$. Then $R$ is entire on $H$: given $s\in H$, the set $E_{\operatorname{dom}s}$ is nonempty, and for any $x\in E_{\operatorname{dom}s}$ the function $t:=s\cup\{(\operatorname{dom}s,x)\}$ lies in $H$ with $s\mathbin R t$. [step 1.1, A1]

3.1 By [A1] applied to $H$, $R$ and the empty function there is a sequence $(s_n)_{n\in\mathbb N}$ in $H$ with $s_0=\varnothing$ and $s_n\mathbin R s_{n+1}$ for every $n$. [step 1.1, step 2.1, A1]

4.1 For every $n$ one has $\operatorname{dom}s_n=n$, by induction on $n$ from [A3]: $\operatorname{dom}s_0=\operatorname{dom}\varnothing=0$, and $\operatorname{dom}s_{n+1}=\operatorname{dom}s_n+1=n+1$. [step 3.1, A3]

4.2 The union $f:=\bigcup_{n\in\mathbb N}s_n$ is a function: if $(j,y)$ and $(j,y')$ lie in $f$, they lie in $s_m$ and $s_{m'}$ for some $m,m'$, and with $m\le m'$ the relation gives $s_m\subseteq s_{m'}$, so $y=y'$. [step 3.1, A3]

5.1 Its domain is $\mathbb N$: $\operatorname{dom}f=\bigcup_n\operatorname{dom}s_n=\bigcup_nn=\mathbb N$ by [step 4.1] and [A3]. [step 4.1, A3]

5.2 For every $n\in\mathbb N$ one has $f(n)=s_{n+1}(n)\in E_n$: the point $n$ lies in $\operatorname{dom}s_{n+1}$ by [step 4.1] and $s_{n+1}\in H$ with $\operatorname{dom}s_{n+1}=n+1>n$. [step 4.1]

6.1 Put $\mathcal E:=\{E_n:n\in\mathbb N\}$. For each $E\in\mathcal E$, the set $\{n:E_n=E\}$ is a nonempty subset of $\mathbb N$, so let $n(E)$ be its least element and define $c(E):=f(n(E))$. Then $c$ has domain $\mathcal E$ and $c(E)\in E_{n(E)}=E$, so $c$ is a choice function on the set of members even when the indexed family has repetitions. [step 5.2, A2, A3]

7.1 Hence $f$ is a function with domain $\mathbb N$ and $f(n)\in E_n$ for every $n$, which is exactly the indexed conclusion of [A2], while $c$ is the corresponding choice function on the set of member sets. Since the family was arbitrary, $\mathrm{DC}$ implies $\mathrm{AC}_\omega$. [step 4.2, step 5.1, step 5.2, step 6.1, A2] ∎
