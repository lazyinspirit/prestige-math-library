---
id: thm-ordinal-spaces-and-compactness
kind: theorem
title: "Every successor ordinal is compact in its order topology and every limit ordinal is not; and, assuming countable choice, $\\omega_1$ is countably compact and sequentially compact while $\\omega_1 + 1$ is compact"
status: published
origin: session
deps: [lem-the-order-topology-on-an-ordinal, def-compact-space, def-compactness-variants, thm-compactness-variants-hierarchy, def-order-topology-on-a-linearly-ordered-set, def-topology-basis-subbasis, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal-addition, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-sequence-convergence-top, def-sequence, lem-index-map-grows, thm-transfinite-induction, def-topological-space]
justified_by: []
aliases: [thm-ordinal-space-compactness]
landmark: true
short: "compactness of ordinal spaces"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Every ordinal carries the order topology of the membership order on it
([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the
clopen basis $\mathcal{B}_\gamma$ of
[[lem-the-order-topology-on-an-ordinal]]. Then:

1. **Successors are compact.** For every ordinal $\delta$ the successor ordinal
   $\delta^{+}$ is compact ([[def-compact-space]]).
2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the
   first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) is
   sequentially compact and countably compact ([[def-compactness-variants]]),
   and it is not compact; while $\omega_1 + 1$ is compact
   ([[def-ordinal-addition]]).

Claims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both
times through cited results that carry the hypothesis in their own statements:
[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the
boundedness of at most countable subsets of $\omega_1$, and claim 2 of
[[thm-compactness-variants-hierarchy]], which converts sequential compactness
into countable compactness; the extraction of a subsequence below selects
nothing, taking least elements throughout.

## Facts & Assumptions

**Given:** Ordinals with their order topologies, and the notation $[0,\beta]$, $(\alpha,\beta]$ of [[lem-the-order-topology-on-an-ordinal]].

[A1] The Axiom of Countable Choice, for claim 3 only ([[def-countable-choice]]).

[L1] A space is compact when every open cover has a finite subcover ([[def-compact-space]], [[def-topological-space]]).

[L2] On an ordinal $\gamma$ the sets $[0,\beta]$ and $(\alpha,\beta]$ with $\alpha, \beta \in \gamma$ are clopen and form a basis $\mathcal{B}_\gamma$, so every open $U$ and every $\eta \in U$ admit a member of $\mathcal{B}_\gamma$ between them ([[lem-the-order-topology-on-an-ordinal]], claim 1; [[def-topology-basis-subbasis]]).

[L3] Ordinals are linearly ordered by membership; $\beta < \alpha$ holds exactly when $\beta^{+} \le \alpha$; a nonempty set of ordinals has a least element, and a nonempty set listed as $\{\beta_0, \dots, \beta_n\}$ has a greatest, by induction on $n$ using trichotomy; and $\beta \in \lambda$ with $\lambda$ a limit ordinal gives $\beta^{+} \in \lambda$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-limit-ordinal]]).

[L4] Transfinite induction: if $S$ is a subset of a well-ordered set $W$ containing every $a$ all of whose strict predecessors lie in $S$, then $S = W$ ([[thm-transfinite-induction]]).

[L5] $\omega_1$ is the least uncountable ordinal, it is a limit ordinal, and every ordinal below it is at most countable ([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-countable]]).

[L6] Assuming $\mathrm{AC}_\omega$, every at most countable $A \subseteq \omega_1$ satisfies $\sup A = \bigcup A \in \omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], claim (a)).

[L7] The range of a function with domain $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] An infinite subset $P \subseteq \mathbb{N}$ carries a strictly increasing enumeration $i \mapsto m_i$ of $\mathbb{N}$ onto $P$, built by taking least elements and using no choice principle; and a strictly increasing index map satisfies $m_i \ge i$ ([[lem-subset-of-countable]], [[lem-index-map-grows]]).

[L9] A sequence in a space is a function on $\mathbb{N}$, and $y_k \to p$ means that every open set containing $p$ contains $y_k$ from some index on; a subsequence is given by a strictly increasing index map ([[def-sequence-convergence-top]], [[def-sequence]]).

[L10] Assuming $\mathrm{AC}_\omega$, a sequentially compact space is countably compact ([[thm-compactness-variants-hierarchy]], claim 2; [[def-compactness-variants]]).

[L11] $\alpha + 1 = \alpha^{+}$ for every ordinal $\alpha$ ([[def-ordinal-addition]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 let $\gamma := \delta^{+}$, so that $\delta$ is the greatest element of $\gamma$ and $[0,\delta] = \gamma$; let $\mathcal{U}$ be an open cover of $\gamma$ and put $S := \{\, \eta \in \gamma : \text{finitely many members of } \mathcal{U} \text{ cover } [0,\eta] \,\}$. [L1, L3, construct]

1.2 For claim 2 let $\lambda$ be a limit ordinal; the family $\{\, [0,\beta] : \beta \in \lambda \,\}$ consists of open sets by [L2] and covers $\lambda$, since $\xi \in [0,\xi]$ for every $\xi \in \lambda$. [L2, L3]

1.3 For claim 3 assume $\mathrm{AC}_\omega$ and let $(y_k)$ be a sequence in $\omega_1$; its range is at most countable by [L7], so [L6] gives $\sigma := \sup\{\, y_k : k \in \mathbb{N} \,\} \in \omega_1$, and the set $\{\, k \in \mathbb{N} : y_k \le \sigma \,\}$ is all of $\mathbb{N}$ and in particular infinite. [A1, L6, L7]

2.1 Let $\eta \in \gamma$ and suppose $[0,\zeta]$ is covered by finitely many members of $\mathcal{U}$ for every $\zeta < \eta$. Some $U \in \mathcal{U}$ contains $\eta$, and [L2] gives $B \in \mathcal{B}_\gamma$ with $\eta \in B \subseteq U$. If $B = [0,\beta]$ then $\eta \le \beta$ and $[0,\eta] \subseteq [0,\beta] \subseteq U$, so $\{U\}$ covers $[0,\eta]$. If $B = (\alpha,\beta]$ then $\alpha < \eta \le \beta$, and $[0,\eta] \subseteq [0,\alpha] \cup (\alpha,\eta] \subseteq [0,\alpha] \cup U$ by [L3], so a finite cover of $[0,\alpha]$ with $U$ adjoined covers $[0,\eta]$. Either way $\eta \in S$. [L2, L3, step 1.1]

2.2 A finite subfamily of the cover of step 1.2 is empty, and then covers only $\varnothing \ne \lambda$, or is $[0,\beta_0], \dots, [0,\beta_n]$ with union $[0,\beta]$ for $\beta$ the greatest of the $\beta_j$, which exists by [L3]; and $\beta^{+} \in \lambda$ by [L3] while $\beta^{+} \notin [0,\beta]$. So no finite subfamily covers $\lambda$ and $\lambda$ is not compact, which is claim 2. [L1, L3, step 1.2]

2.3 By [L5] and [L6] the set $\{\, \xi \in \omega_1 : \{k : y_k \le \xi\} \text{ is infinite} \,\}$ is a nonempty set of ordinals, $\sigma$ belonging to it by step 1.3, so it has a least element $\tau$ by [L3]; then $P := \{\, k \in \mathbb{N} : y_k \le \tau \,\}$ is infinite while $\{\, k : y_k \le \alpha \,\}$ is finite for every $\alpha < \tau$. [L3, L5, step 1.3]

3.1 By [L4] applied to the well-ordered $\gamma$, step 2.1 gives $S = \gamma$; in particular $\delta \in S$, so finitely many members of $\mathcal{U}$ cover $[0,\delta] = \gamma$. As $\mathcal{U}$ was arbitrary, $\gamma = \delta^{+}$ is compact, which is claim 1. [L1, L4, step 1.1, step 2.1]

3.2 Let $i \mapsto m_i$ be the strictly increasing enumeration of $P$ given by [L8]; then $(y_{m_i})$ is a subsequence of $(y_k)$ by [L9], and every one of its terms satisfies $y_{m_i} \le \tau$. [L8, L9, step 2.3]

4.1 $y_{m_i} \to \tau$. Let $U$ be open with $\tau \in U$ and take $B \in \mathcal{B}_{\omega_1}$ with $\tau \in B \subseteq U$ by [L2]. If $B = [0,\beta]$ then $\tau \le \beta$ and every term satisfies $y_{m_i} \le \tau \le \beta$, so all terms lie in $B$. If $B = (\alpha,\beta]$ then $\alpha < \tau \le \beta$, the set $\{k : y_k \le \alpha\}$ is finite by step 2.3, so $\{\, i : y_{m_i} \le \alpha \,\}$ is finite, the map $i \mapsto m_i$ being injective; hence $\alpha < y_{m_i} \le \tau \le \beta$ for all large $i$ and the terms lie in $B$ from some index on. So $\omega_1$ is sequentially compact. [L2, L9, step 2.3, step 3.2]

5.1 By [L10] the space $\omega_1$ is therefore countably compact; it is not compact by step 2.2, being a limit ordinal by [L5]; and $\omega_1 + 1 = \omega_1^{+}$ is compact by step 3.1 and [L11]. This is claim 3, and with claims 1 and 2 at steps 3.1 and 2.2 the theorem is proved. [L5, L10, L11, step 2.2, step 3.1, step 4.1] ∎

## Remarks

**Why claim 1 is a transfinite induction and not an ordinary one.** The statement being proved at $\eta$ uses the statement at $\alpha$ for a single $\alpha < \eta$ produced by the cover, not at the predecessor of $\eta$, and $\eta$ may have no predecessor. What the induction of [L4] gives is exactly the right shape: the step assumes the statement below $\eta$ and proves it at $\eta$, with no separate limit clause to write.

**$\omega_1$ separates sequential compactness from compactness.** It is sequentially compact and countably compact and not compact, so neither of those two properties implies compactness; that is the content of [[fs-sequentially-compact-implies-compact]] and [[fs-countably-compact-implies-compact]], both of which take their witness from here. The reason is visible in the proof: countably many terms cannot escape from $\omega_1$, because a countable set of countable ordinals has a countable supremum, while the uncountable cover by the initial segments has no finite subfamily covering everything.

**The hypothesis of countable choice is inherited, not added.** It enters through two cited results whose own statements carry it — [[thm-countable-subsets-of-omega-one-are-bounded]] at the boundedness step, and claim 2 of [[thm-compactness-variants-hierarchy]] at the passage from sequential to countable compactness; the boundedness of an at most countable subset of $\omega_1$ is what claim 3 rests on, and everything else in the argument takes least elements.
