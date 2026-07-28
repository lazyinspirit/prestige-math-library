---
id: ex-the-ordinal-spaces-omega-plus-one-and-omega-one
kind: example
title: "$\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment"
status: draft
origin: session
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3,
       def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal,
       thm-countable-subsets-of-omega-one-are-bounded, def-cofinal-subset-of-an-ordinal,
       def-ordinal-addition, def-limit-ordinal, lem-omega-least-limit-ordinal,
       def-sequence-convergence-top, def-countable, lem-countable-iff-surjection-from-n,
       def-countable-choice, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the ordinal spaces $\\omega+1$ and $[0,\\omega_1)$"
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
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §39-43"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Give every ordinal its order topology ([[def-order-topology-on-an-ordinal]]),
under which it is $T_3$ — that is $T_1$, Hausdorff and regular
([[lem-ordinal-order-topology-is-t3]]). Two ordinals are worked here.

**The space $\omega + 1$.** By the successor clause of ordinal addition
([[def-ordinal-addition]]), $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$,
so the space is the set of natural numbers together with one extra point on top
([[lem-omega-least-limit-ordinal]]). Then:

1. Every $n \in \omega$ is isolated: $\{0\} = [0,0]$ and
   $\{m^{+}\} = (m, m^{+}]$ are basic open sets.
2. The sequence $x_k := k$ ($k \in \mathbb{N}$) converges to $\omega$
   ([[def-sequence-convergence-top]]), and it converges to no other point of
   $\omega+1$.

So $\omega + 1$ is, as a topological space, exactly a convergent sequence
together with its limit, and $\omega$ is its unique non-isolated point.

**The space $[0,\omega_1) = \omega_1$.** Let $\omega_1$ be the first uncountable
ordinal ([[def-first-uncountable-ordinal]]), so that $\omega_1$ is a limit
ordinal, every ordinal below it is at most countable, and $\omega_1$ itself is
uncountable ([[thm-omega-one-is-the-least-uncountable-ordinal]]). As a set,
$[0,\omega_1)$ *is* $\omega_1$, an ordinal being the set of ordinals below it
([[def-ordinal]]). **Assuming the Axiom of Countable Choice**
([[def-countable-choice]]):

3. Every sequence $(x_k)$ in $\omega_1$ has an at most countable range, so there
   is $\alpha < \omega_1$ with $x_k \le \alpha$ for all $k$; hence the whole
   sequence lies inside the initial segment
   $[0,\alpha] = \alpha^{+}$, which is an ordinal below $\omega_1$ and is at most
   countable.
4. Consequently no sequence in $\omega_1$ has a range cofinal in $\omega_1$
   ([[def-cofinal-subset-of-an-ordinal]]).

Clause 3 is the fact the deleted Tychonoff plank consumes, and it is the reason
$[0,\omega_1)$ behaves unlike any metrizable space: a sequence can never
approach the "top" of $\omega_1$, because there is no top to approach along a
sequence.

## Facts & Assumptions

**Given:** Ordinals with their order topologies; the natural numbers $\omega$; the first uncountable ordinal $\omega_1$; a sequence $(x_k)_{k \in \mathbb{N}}$ in $\omega_1$; and the Axiom of Countable Choice where stated.

[A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$; they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topological-space]]).

[A2] $\alpha + 1 = \alpha^{+}$, by the clauses of ordinal addition at $0$ and at a successor ([[def-ordinal-addition]]).

[L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).

[L2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

[L4] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ is bounded below $\omega_1$: there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi$ in the subset ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-countable-choice]]).

[L5] The range of a sequence is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds; $\alpha^{+}$ is an ordinal, and $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L7] A subset $S$ of a limit ordinal $\gamma$ is cofinal in $\gamma$ when for every $\xi \in \gamma$ there is $\sigma \in S$ with $\xi \le \sigma$ ([[def-cofinal-subset-of-an-ordinal]]).

[L8] Every ordinal with its order topology is $T_1$, Hausdorff and regular ([[lem-ordinal-order-topology-is-t3]]).

## Verification

**Proof technique:** direct.

1.1 $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$ by [A2], so the points of the space are the natural numbers together with $\omega$. [A2, L1]

1.2 Let $N$ be a neighbourhood of $\omega$ in $\omega+1$; by [A1] and [L2] there is a basic set $B$ with $\omega \in B \subseteq N$, and $B$ is $[0,\beta]$ with $\omega \le \beta$ or $(\alpha,\beta]$ with $\alpha < \omega \le \beta$. In either case $(\alpha, \omega] \subseteq B$ for some $\alpha \in \omega$, taking $\alpha := 0$ in the first case. [A1, L2, L6]

1.3 Let $(x_k)$ be a sequence in $\omega_1$; its range $R := \{\, x_k : k \in \mathbb{N} \,\}$ is an at most countable subset of $\omega_1$ by [L5]. [L5]

2.1 Each $n \in \omega$ is $0$ or a successor $m^{+}$ by [L1]; in the first case $\{n\} = [0,0]$ and in the second $\{n\} = (m, m^{+}]$, both basic open sets of $\omega+1$ by [A1], since $0 \in \omega+1$ and $m < m^{+} = n$ in $\omega + 1$. So every $n \in \omega$ is isolated, which is claim 1. [step 1.1, A1, L1]

2.2 Under step 1.2: $\alpha \in \omega$, so for every $k > \alpha$ one has $\alpha < k \le \omega$ and hence $x_k = k \in (\alpha,\omega] \subseteq N$; so $x_k \to \omega$ by [L2]. [step 1.2, L1, L2, L6]

2.3 By [L4] there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi \in R$, hence $x_k \le \alpha$ for every $k$. [step 1.3, L4]

3.1 The sequence converges to no $n \in \omega$: by step 2.1 the set $\{n\}$ is an open neighbourhood of $n$, and $x_k = k \ne n$ for every $k > n$, so the sequence is not eventually in $\{n\}$. [step 2.1, L1, L2]

3.2 By [L6] the set $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ contains every $x_k$, and $\alpha^{+} \in \omega_1$ because $\omega_1$ is a limit ordinal and $\alpha \in \omega_1$; so $\alpha^{+}$ is an ordinal below $\omega_1$ and is at most countable by [L3]. This is claim 3. [step 2.3, L3, L6]

4.1 Steps 2.2 and 3.1 are claim 2. [step 2.2, step 3.1]

4.2 If some sequence had range cofinal in $\omega_1$, then by [L7] every $\xi \in \omega_1$ would satisfy $\xi \le x_k$ for some $k$; taking $\xi := \alpha^{+}$ of step 3.2 gives $\alpha^{+} \le x_k \le \alpha$ for some $k$, contradicting $\alpha < \alpha^{+}$ by [L6]. So claim 4 holds. [step 2.3, step 3.2, L6, L7]

5.1 Both spaces are $T_3$ by [L8], and steps 2.1, 4.1, 3.2 and 4.2 are claims 1 to 4. [step 2.1, step 4.1, step 3.2, step 4.2, L8] ∎

## Remarks

- **$\omega + 1$ is the smallest interesting ordinal space.** Every ordinal $\gamma \le \omega$ is discrete ([[def-order-topology-on-an-ordinal]]), so $\omega+1$ is where a non-isolated point appears for the first time, and it appears as the limit of the obvious sequence.

- **Clause 3 is where the countable choice enters and where it stays.** It is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]] and from nothing else on this page; clauses 1, 2 and the $T_3$ property of both spaces are theorems of ZF ([[lem-ordinal-order-topology-is-t3]]).

- **What clause 4 rules out.** No sequence in $[0,\omega_1)$ can be used to approximate the space from below, which is why arguments about $\omega_1$ are written with arbitrary at most countable sets rather than with sequences, and why the plank argument on this page bounds a *set* of ordinals rather than taking a limit of a sequence.
