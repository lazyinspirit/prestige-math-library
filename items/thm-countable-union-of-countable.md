---
id: thm-countable-union-of-countable
kind: theorem
title: "Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$"
status: draft
origin: session
deps: [def-countable-choice, thm-n-cross-n-countable, lem-countable-iff-surjection-from-n, def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: false
short: "countable union of countables (needs $\\mathrm{AC}_\\omega$)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

## Facts & Assumptions

**Given:** A family $(A_n)_{n \in \mathbb{N}}$ of at most countable sets, its union $U = \bigcup_{n \in \mathbb{N}} A_n$, and the Axiom of Countable Choice as an explicit hypothesis.

[L1] Finite, countably infinite, at most countable; $\varnothing$ is finite ([[def-countable]]).

[L2] A nonempty set $X$ is at most countable if and only if there is a surjection $\mathbb{N} \to X$ ([[lem-countable-iff-surjection-from-n]]).

[L3] $\mathrm{AC}_\omega$: for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets there is $f$ with $f(n) \in X_n$ for all $n$ ([[def-countable-choice]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] A composition of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $U = \varnothing$ then $U$ is finite, hence at most countable. [given, L1]

1.2 Assume instead $U \ne \varnothing$; then $J := \{\, n \in \mathbb{N} : A_n \ne \varnothing \,\}$ is nonempty, so it has a least element $n_0$ by [L5]. [given, L5]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L4]. [L4]

2.1 For $n \in J$ let $S_n$ be the set of all surjections $\mathbb{N} \to A_n$, which is nonempty by [L2] since $A_n$ is nonempty and at most countable; for $n \notin J$ put $S_n := S_{n_0}$, also nonempty. This makes $(S_n)_{n \in \mathbb{N}}$ a family of nonempty sets indexed by $\mathbb{N}$, defined with no choices. [step 1.2, given, L2, construct]

3.1 **This is the step that uses choice.** Apply $\mathrm{AC}_\omega$ [L3] to the family $(S_n)_{n \in \mathbb{N}}$ of step 2.1: it delivers a function $n \mapsto s_n$ with $s_n \in S_n$ for every $n$, that is, one surjection $s_n : \mathbb{N} \to A_n$ selected simultaneously for every $n \in J$. Nothing in the hypotheses names a particular surjection onto $A_n$, so this selection cannot be replaced by a definition; it is exactly here, and nowhere else in the proof, that the theorem leaves ZF. [step 2.1, L3, choose]

4.1 Define $t : \mathbb{N} \times \mathbb{N} \to U$ by $t(n,k) = s_n(k)$; the value lies in $A_n \subseteq U$ for $n \in J$ and in $A_{n_0} \subseteq U$ otherwise, so $t$ is well defined. It is surjective: any $x \in U$ lies in some $A_n$, which is then nonempty, so $n \in J$ and $x = s_n(k)$ for some $k$ because $s_n$ is onto $A_n$. [step 3.1, given]

5.1 Hence $t \circ \beta : \mathbb{N} \to U$ is a surjection by [L6], and $U \ne \varnothing$, so $U$ is at most countable by [L2]. [step 1.3, step 4.1, L2, L6]

6.1 In both cases $U$ is at most countable, which is the assertion. [step 1.1, step 5.1, L1] ∎

## Remarks

- **An at most countable index set is no more general.** If $I$ is at most countable and $(A_i)_{i \in I}$ are at most countable, then either $I$ is empty, and the union is $\varnothing$, or a surjection $r : \mathbb{N} \to I$ exists ([[lem-countable-iff-surjection-from-n]]) and $\bigcup_{i \in I} A_i = \bigcup_{n \in \mathbb{N}} A_{r(n)}$, which the theorem covers. That reindexing uses no choice.

- **The two-set union needs no choice at all**, and neither does any union of finitely many sets: with $A$ and $B$ both at most countable and nonempty, fix surjections $f, g : \mathbb{N} \to A, B$ (two choices made one after the other, which is ordinary existential instantiation, not a choice principle) and put $u(0,k) = f(k)$ and $u(n,k) = g(k)$ for $n \ne 0$, a surjection $\mathbb{N} \times \mathbb{N} \to A \cup B$. This is the form used in [[cor-irrationals-uncountable]], and keeping it separate from the countable case is the whole point of flagging step 3.1.

- The failure without choice is not a technicality about exotic sets: if ZF is consistent, then it is consistent with ZF that $\mathbb{R}$ itself is a countable union of countable sets ([[fs-countable-union-theorem-of-zf]]), even though $\mathbb{R}$ is provably uncountable in ZF ([[thm-r-uncountable]]).
