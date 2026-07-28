---
id: thm-compactness-variants-hierarchy
kind: theorem
title: "Compact implies countably compact, Lindel\\\"of and limit point compact; countably compact together with Lindel\\\"of implies compact; and, at the cost of countable or dependent choice, sequentially compact implies countably compact, countably compact implies limit point compact, and the converse holds when every singleton is closed"
status: draft
origin: session
deps: [def-compactness-variants, def-compact-space, def-topological-space, def-countable, lem-countable-iff-surjection-from-n, def-countable-choice, def-dependent-choice, def-sequence-convergence-top, def-sequence, lem-index-map-grows, def-interior-closure-boundary-top, thm-closure-characterisation-top, def-neighbourhood-top, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: [thm-compactness-hierarchy]
landmark: true
short: "the compactness hierarchy"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
compactness as in [[def-compact-space]] and the variants as in
[[def-compactness-variants]]. Then:

1. **Theorems of ZF.**
   - (a) If $X$ is compact it is countably compact and Lindel&ouml;f.
   - (b) If $X$ is countably compact and Lindel&ouml;f it is compact.
   - (c) If $X$ is compact it is limit point compact.
   - (d) If $X$ is countably compact then every countably infinite subset of $X$
     ([[def-countable]]) has a limit point in $X$.
2. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): if $X$
   is sequentially compact it is countably compact.
3. **Assuming the Axiom of Dependent Choice** ([[def-dependent-choice]]): if $X$
   is countably compact it is limit point compact.
4. **Assuming the Axiom of Countable Choice, and that every singleton
   $\{x\} \subseteq X$ is closed:** if $X$ is limit point compact it is countably
   compact.

**Every hypothesis is stated where it is spent.** Claim 1 uses no choice
principle at all. Claim 2 spends countable choice once, to pick a point outside
each of countably many nonempty sets; claim 4 spends it in the same place; claim 3
spends dependent choice once, to extract a countably infinite subset from an
infinite set. Each is an upper bound on the cost of the proof given here, never a
claim of necessity.

**The hypothesis of claim 4 is written out rather than named.** "Every singleton
is closed" is a separation axiom, and separation axioms are not available at this
point in the reading order; the condition is used exactly as stated and nothing
about the axiom it belongs to is asserted.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $X$ is compact when every open cover has a finite subcover; countably compact when every at most countable open cover has a finite subcover; Lindel&ouml;f when every open cover has an at most countable subcover; sequentially compact when every sequence has a convergent subsequence; limit point compact when every infinite subset has a limit point in $X$ ([[def-compact-space]], [[def-compactness-variants]]).

[L2] A finite family is at most countable, and *infinite* means not finite ([[def-countable]]).

[L3] $\overline{A} = A \cup A'$, where $A'$ is the set of limit points of $A$, and $A$ is closed exactly when $A = \overline{A}$; a limit point of a subset of $B$ is a limit point of $B$, since a neighbourhood meeting the smaller set meets the larger ([[thm-closure-characterisation-top]], claim 3; [[def-interior-closure-boundary-top]]).

[L4] $\varnothing$ and $X$ are open, unions of open sets are open, a union of finitely many closed sets is closed, and a set is closed exactly when its complement is open; a neighbourhood of a point contains an open set containing that point, and an open set containing a point is a neighbourhood of it ([[def-topological-space]], [[def-neighbourhood-top]]).

[L5] Countable choice: for every family $(Y_n)_{n \in \mathbb{N}}$ of nonempty sets there is a function $f$ on $\mathbb{N}$ with $f(n) \in Y_n$ for every $n$ ([[def-countable-choice]]).

[L6] Dependent choice: for every nonempty set $S$, every relation $R$ entire on $S$ and every $a \in S$ there is a sequence $(s_k)$ in $S$ with $s_0 = a$ and $s_k \mathbin{R} s_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L7] A nonempty at most countable family admits a surjection from $\mathbb{N}$, so it may be listed as $(U_n)_{n \in \mathbb{N}}$ with repetitions allowed, and no choice principle is involved ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] A sequence is a function on $\mathbb{N}$ and $\mathbb{N}$ contains $0$; $x_k \to p$ means $x_k$ lies in each neighbourhood of $p$ from some index on; and a strictly increasing index map satisfies $n_j \ge j$ ([[def-sequence]], [[def-sequence-convergence-top]], [[lem-index-map-grows]], [[def-natural-numbers]]).

[L9] A set is countably infinite exactly when it is equinumerous with $\mathbb{N}$, and the range of an injection $\mathbb{N} \to A$ is a countably infinite subset of $A$ ([[def-countable]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1(a): an at most countable open cover of $X$ is in particular an open cover, so compactness gives it a finite subcover, and $X$ is countably compact; and a finite subcover of an open cover is an at most countable subcover by [L2], so $X$ is Lindel&ouml;f. [L1, L2]

1.2 Claim 1(b): let $\mathcal{U}$ be an open cover of a countably compact Lindel&ouml;f space; Lindel&ouml;fness gives an at most countable subcover $\mathcal{V} \subseteq \mathcal{U}$, countable compactness gives a finite subfamily of $\mathcal{V}$ with union $X$, and that subfamily is a finite subfamily of $\mathcal{U}$ with union $X$. [L1, L2]

1.3 Claim 1(c): let $X$ be compact and let $A \subseteq X$ have no limit point in $X$; then $\mathcal{U} := \{\, U \in \mathcal{T} : U \cap A \text{ has at most one element} \,\}$ covers $X$, since each $x \in X$ has a neighbourhood $N$ with $N \cap (A \setminus \{x\}) = \varnothing$ and an open $U$ with $x \in U \subseteq N$, so that $U \cap A \subseteq \{x\}$; compactness gives $U_0, \dots, U_n \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_n$, whence $A = (U_0 \cap A) \cup \dots \cup (U_n \cap A)$ is listable and so finite by [L2]. Contraposing, every infinite subset of $X$ has a limit point. [L1, L2, L4, algebra]

1.4 For claim 2 assume countable choice, let $X$ be sequentially compact and let $\mathcal{U}$ be an at most countable open cover of $X$ with no finite subcover; then $\mathcal{U} \ne \varnothing$, since the empty family covers only the empty space, so [L7] lists it as $(U_n)_{n \in \mathbb{N}}$, and $E_n := X \setminus (U_0 \cup \dots \cup U_n)$ is nonempty for every $n$, so [L5] supplies a sequence $(x_n)$ with $x_n \in E_n$ for every $n$. [L1, L5, L7]

1.5 For claim 1(d) let $X$ be countably compact and let $B \subseteq X$ be countably infinite with no limit point in $X$; fix a bijection $k \mapsto b_k$ of $\mathbb{N}$ onto $B$ and put $C_n := \{\, b_k : k \ge n \,\}$. Each $C_n$ is a subset of $B$, so it has no limit point either by [L3], and therefore $\overline{C_n} = C_n \cup \varnothing = C_n$ and $C_n$ is closed. [L1, L3, L9]

1.6 For claim 3 assume dependent choice and let $A \subseteq X$ be infinite. Let $S$ be the set of injections $s : n \to A$ with $n \in \mathbb{N}$, nonempty because the empty function belongs to it, and relate $s$ to $t$ when $t$ is an injection $\sigma(n) \to A$ extending $s : n \to A$; this relation is entire on $S$, since an injection $s : n \to A$ cannot have range $A$, as that would make $A$ finite, so some $a \in A \setminus \operatorname{ran}(s)$ gives the extension $s \cup \{(n,a)\}$. By [L6] there is a sequence $(s_k)$ in $S$ with $s_0$ the empty function and each $s_{k+1}$ extending $s_k$, so each $s_k$ is an injection $k \to A$ and $b_k := s_{k+1}(k)$ defines an injection $\mathbb{N} \to A$ whose range is a countably infinite subset of $A$. [L2, L6, L9]

2.1 For claim 4 assume countable choice, let $X$ be limit point compact with every singleton closed, and let $\mathcal{U}$ be an at most countable open cover of $X$ with no finite subcover; as at step 1.4 the family is nonempty, [L7] lists it as $(U_n)_{n \in \mathbb{N}}$, the sets $E_n := X \setminus (U_0 \cup \dots \cup U_n)$ are nonempty, and [L5] supplies a sequence $(x_n)$ with $x_n \in E_n$ for every $n$. [L1, L5, L7]

2.2 Sequential compactness gives a strictly increasing $j \mapsto n_j$ and $p \in X$ with $x_{n_j} \to p$; some $U_m$ contains $p$ and is a neighbourhood of it by [L4], so $x_{n_j} \in U_m$ for all large $j$, while $n_j \ge j$ by [L8] gives $n_j \ge m$ for all large $j$ and hence $x_{n_j} \notin U_0 \cup \dots \cup U_{n_j} \supseteq U_m$ for those $j$ — impossible. So no such $\mathcal{U}$ exists and $X$ is countably compact, which is claim 2. [L1, L4, L8, step 1.4]

2.3 The sets $C_n$ satisfy $\bigcap_{n \in \mathbb{N}} C_n = \varnothing$: a point outside $B$ lies in no $C_n$, and $b_k \notin C_{k+1}$ because $k \mapsto b_k$ is injective. So $\mathcal{V} := \{\, X \setminus C_n : n \in \mathbb{N} \,\}$ is an at most countable family of open sets whose union is $X$. [L4, L7, step 1.5]

3.1 The set $A := \{\, x_n : n \in \mathbb{N} \,\}$ of step 2.1 is infinite. Were it finite, then for each $a \in A$ the least $m$ with $a \in U_m$ exists, since $(U_n)$ covers $X$, and the largest $M$ of those finitely many least indices exists; but $x_M \in E_M$ misses $U_0 \cup \dots \cup U_M$ while $x_M \in A$ lies in $U_{m}$ for some $m \le M$. [L1, algebra, step 2.1]

3.2 Countable compactness applied to $\mathcal{V}$ gives a finite subfamily $V_0, \dots, V_p$ with union $X$; each $V_j$ is $X \setminus C_{m}$ for some $m$, and taking $N_j$ to be the least such $m$ and $N$ the largest of $N_0, \dots, N_p$ gives $V_j = X \setminus C_{N_j} \subseteq X \setminus C_N$ for every $j$, since the $C_n$ decrease. Hence $X = X \setminus C_N$ and $C_N = \varnothing$, contradicting $b_N \in C_N$. So a countably infinite subset of a countably compact space has a limit point in it, which is claim 1(d). [L1, algebra, step 1.5, step 2.3]

4.1 Limit point compactness gives a limit point $p$ of the infinite set $A$; some $U_m$ contains $p$, the set $F := \{x_0, \dots, x_m\} \setminus \{p\}$ is closed by [L4] as a union of finitely many closed singletons, and $W := U_m \setminus F$ is therefore open and contains $p$, hence is a neighbourhood of $p$ meeting $A \setminus \{p\}$: there is $n$ with $x_n \in W$ and $x_n \ne p$. [L1, L4, step 2.1, step 3.1]

4.2 Claim 3: given an infinite $A \subseteq X$ with $X$ countably compact, step 1.6 produces a countably infinite $B \subseteq A$, step 3.2 gives $B$ a limit point $p$ in $X$, and $p$ is then a limit point of $A$ by [L3], since $B \subseteq A$. So $X$ is limit point compact. [L1, L3, step 1.6, step 3.2]

5.1 If $n \le m$ then $x_n$ is one of $x_0, \dots, x_m$ and differs from $p$, so $x_n \in F$, contradicting $x_n \in W = U_m \setminus F$; hence $n > m$, so $U_m \subseteq U_0 \cup \dots \cup U_n$ and $x_n \in W \subseteq U_m$ contradicts $x_n \in E_n$. No such $\mathcal{U}$ exists, so $X$ is countably compact, which is claim 4. [L1, step 2.1, step 4.1]

6.1 Claims 1(a), 1(b), 1(c) and 1(d) are steps 1.1, 1.2, 1.3 and 3.2; claim 2 is step 2.2; claim 3 is step 4.2; and claim 4 is step 5.1. [step 1.1, step 1.2, step 1.3, step 2.2, step 4.2, step 5.1] ∎

## Remarks

**That an infinite set has a countably infinite subset is not a theorem of ZF**, which is what claim 3 pays dependent choice for ([[fs-infinite-has-countable-subset-in-zf]]). Claim 1(d), the part of claim 3 that speaks only about countably infinite subsets, is free of that cost and is proved in ZF.

**Why claim 4 needs the singleton hypothesis and claim 1(c) does not.** A limit point of the set $A$ built at step 2.1 need not be one of the $x_n$ with large index unless the finitely many early terms can be cut away, and cutting them away is exactly what closedness of singletons permits. Without that hypothesis the implication fails, and the witness is worked on this page's companion, as `cex-limit-point-compact-without-countable-compactness`: a space in which every nonempty subset has a limit point, for the trivial reason that each point has a partner it cannot be separated from, and which has a countable open cover with no finite subcover.

**None of the reverse implications holds in general.** Compactness is strictly stronger than countable compactness ([[fs-countably-compact-implies-compact]]), sequential compactness neither implies nor is implied by compactness ([[fs-compact-implies-sequentially-compact]], [[fs-sequentially-compact-implies-compact]]), and each of those false statements carries a witness reachable from this page.

**For a metrizable space the picture collapses.** Compactness, countable compactness, sequential compactness and limit point compactness are all equivalent there ([[thm-metric-compactness-equivalences]]), at a choice cost recorded arrow by arrow in [[rem-compactness-choice-ledger-metric]]; the implications proved without choice in the metric setting are [[thm-compact-implies-the-other-compactness-forms]]. Nothing in that collapse is available here, and the counterexamples of this page are all non-metrizable.
