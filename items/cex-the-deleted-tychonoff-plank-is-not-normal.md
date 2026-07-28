---
id: cex-the-deleted-tychonoff-plank-is-not-normal
kind: counterexample
title: "Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal"
status: published
origin: session
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3,
       def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal,
       thm-countable-subsets-of-omega-one-are-bounded, def-cofinal-subset-of-an-ordinal,
       def-ordinal-addition, def-product-topology, def-subspace-topology-top,
       thm-subspace-closure-and-interior, def-normal-and-t4-spaces, def-hausdorff-space,
       def-t0-and-t1-spaces, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, thm-basis-criterion, def-topology-basis-subbasis,
       def-countable, lem-countable-iff-surjection-from-n, def-countable-choice,
       lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics,
       lem-ordinal-trichotomy, def-ordinal, def-topological-space]
justified_by: []
aliases: [cex-deleted-tychonoff-plank]
landmark: true
short: "the deleted Tychonoff plank is not normal"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tychonoff plank (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_plank"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §86-87"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Statement refuted

**False claim:** every Hausdorff space obtained from ordinals with their order
topologies ([[def-order-topology-on-an-ordinal]]) by forming a product
([[def-product-topology]]) and passing to a subspace
([[def-subspace-topology-top]]) is normal ([[def-normal-and-t4-spaces]]).

**The witness is the deleted Tychonoff plank.** Write $W := \omega_1 + 1$ and
$Z := \omega + 1$, which by the successor clause of ordinal addition
([[def-ordinal-addition]]) are $\omega_1^{+}$ and $\omega^{+}$; give each its
order topology and $W \times Z$ the product topology, and put

$$T \;:=\; (W \times Z) \setminus \{(\omega_1, \omega)\}$$

with the subspace topology. Then $T$ is Hausdorff ([[def-hausdorff-space]]) and
$T$ is **not** normal: the two sets

$$A \;:=\; \{\, (\omega_1, n) : n \in \omega \,\}, \qquad B \;:=\; \{\, (\xi, \omega) : \xi \in \omega_1 \,\}$$

are disjoint and closed in $T$ and have no disjoint open neighbourhoods.

**Assuming the Axiom of Countable Choice** ([[def-countable-choice]]). The cost
is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]], which is
the single step of the argument that spends it; everything else below is a
theorem of ZF, the ordinals $\alpha_n$ being defined as *least* elements rather
than selected.

**What is and is not claimed.** $T$ is Hausdorff and not normal, and that is all.
Nothing here asserts that $T$ is regular, nor that $W \times Z$ itself is normal,
nor anything about which separation axioms are hereditary or productive; those
questions need machinery this page does not have.

## Facts & Assumptions

**Given:** $W = \omega_1 + 1$ and $Z = \omega + 1$ with their order topologies, the product $W \times Z$, the subspace $T = (W \times Z) \setminus \{(\omega_1,\omega)\}$, and the sets $A$ and $B$ above.

[A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$, and they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[A2] For a binary product the basic product-open sets are exactly the boxes $P \times Q$ with $P$ and $Q$ open, and the boxes $P_0 \times Q_0$ with $P_0$, $Q_0$ basic in the factors also form a basis: given $(x,y) \in P \times Q$, basic $P_0 \ni x$ inside $P$ and $Q_0 \ni y$ inside $Q$ give $(x,y) \in P_0 \times Q_0 \subseteq P \times Q$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[A3] The open sets of $T$ are the traces $U' \cap T$ of the open sets of $W \times Z$, the closed sets of $T$ are the traces of the closed sets, and the traces of a basis form a basis ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

[L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

[L2] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds, and every nonempty set of ordinals has a least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ has an upper bound $\alpha \in \omega_1$, and no such subset is cofinal in $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-cofinal-subset-of-an-ordinal]], [[def-countable-choice]]).

[L4] The image of $\mathbb{N}$ under a function is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L5] Every ordinal with its order topology is $T_1$, Hausdorff and regular ([[lem-ordinal-order-topology-is-t3]], [[def-t0-and-t1-spaces]]).

[L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $\omega_1$ is open in $W$ and $\omega$ is open in $Z$: for $\xi < \omega_1$ the basic set $[0,\xi]$ lies inside $\omega_1$, and for $n < \omega$ the basic set $[0,n]$ lies inside $\omega$. [A1, L2]

1.2 $A$ and $B$ are subsets of $T$ and are disjoint: every point of $A$ has second coordinate in $\omega$ and every point of $B$ has second coordinate $\omega$, and $\omega \notin \omega$. [L1, L2]

1.3 $T$ is Hausdorff: let $(\xi,\eta) \ne (\xi',\eta')$ in $T$. If $\xi \ne \xi'$, [L5] gives disjoint open $P, P'$ in $W$ containing them, and $(P \times Z) \cap T$ and $(P' \times Z) \cap T$ are disjoint open sets of $T$ containing the two points by [A2] and [A3]; if $\eta \ne \eta'$ the same argument runs in the second factor. [A2, A3, L5, L6]

2.1 $T \setminus A = (\omega_1 \times Z) \cap T$: a point $(\xi,\eta) \in T$ with $\xi = \omega_1$ has $\eta \ne \omega$, hence $\eta \in \omega$ and $(\xi,\eta) \in A$; so the points of $T$ outside $A$ are exactly those with $\xi \in \omega_1$. [step 1.2, L1, L2]

2.2 $T \setminus B = (W \times \omega) \cap T$: a point $(\xi,\eta) \in T$ with $\eta = \omega$ has $\xi \ne \omega_1$, hence $\xi \in \omega_1$ and $(\xi,\eta) \in B$; so the points of $T$ outside $B$ are exactly those with $\eta \in \omega$. [step 1.2, L1, L2]

3.1 By steps 1.1, 2.1 and 2.2 and [A2] and [A3], the sets $T \setminus A$ and $T \setminus B$ are open in $T$, so $A$ and $B$ are closed in $T$. [step 1.1, step 2.1, step 2.2, A2, A3, L6]

4.1 Suppose $U$ and $V$ are disjoint open subsets of $T$ with $A \subseteq U$ and $B \subseteq V$. [step 3.1, L6, assume-contra]

5.1 Fix $n \in \omega$. Then $(\omega_1, n) \in U$, so by [A2] and [A3] there are basic $P$ in $W$ and $Q$ in $Z$ with $(\omega_1,n) \in (P \times Q) \cap T \subseteq U$. [step 4.1, A2, A3]

6.1 Under step 5.1: $P$ contains $\omega_1$, and $\omega_1$ is the largest element of $W$, so $P$ is $[0,\omega_1] = W$ or $(\alpha,\omega_1]$ with $\alpha \in \omega_1$; in either case $(\alpha, \omega_1] \subseteq P$ for some $\alpha \in \omega_1$, taking $\alpha := 0$ in the first case. [step 5.1, A1, L1, L2]

7.1 Under step 5.1: $(\alpha,\omega_1] \times \{n\} \subseteq (P \times Q) \cap T \subseteq U$, since $n \in Q$ and since every point of $(\alpha,\omega_1] \times \{n\}$ has second coordinate $n \ne \omega$ and so lies in $T$. [step 5.1, step 6.1, L1, L2]

8.1 For each $n \in \omega$ the set of $\alpha \in \omega_1$ with $(\alpha,\omega_1] \times \{n\} \subseteq U$ is nonempty by step 7.1, so it has a least element $\alpha_n$ by [L2]; this defines $\alpha_n$ from $n$ and $U$ alone and selects nothing. [step 7.1, L2]

9.1 The set $S := \{\, \alpha_n : n \in \omega \,\}$ is an at most countable subset of $\omega_1$ by [L4], so [L3] gives $\alpha \in \omega_1$ with $\alpha_n \le \alpha$ for every $n \in \omega$. [step 8.1, L3, L4]

10.1 Hence $(\alpha,\omega_1] \subseteq (\alpha_n,\omega_1]$ for every $n$, and therefore $(\alpha,\omega_1] \times \{n\} \subseteq U$ for every $n \in \omega$. [step 8.1, step 9.1, L2]

10.2 $\alpha^{+} \in \omega_1$, since $\omega_1$ is a limit ordinal and $\alpha \in \omega_1$; so $(\alpha^{+}, \omega) \in B \subseteq V$. [step 4.1, step 9.1, L1, L2]

11.1 By [A2] and [A3] there are basic $P'$ in $W$ and $Q'$ in $Z$ with $(\alpha^{+},\omega) \in (P' \times Q') \cap T \subseteq V$; and $Q'$ contains $\omega$, the largest element of $Z$, so $Q'$ is $[0,\omega] = Z$ or $(m,\omega]$ with $m \in \omega$, and in either case $(m,\omega] \subseteq Q'$ for some $m \in \omega$. [step 10.2, A1, A2, A3, L1, L2]

12.1 Put $z := (\alpha^{+}, m^{+})$. Then $m^{+} \in \omega$ because $\omega$ is a limit ordinal, and $m < m^{+} \le \omega$, so $m^{+} \in (m,\omega] \subseteq Q'$; also $\alpha^{+} \in P'$; and $z \in T$ because its first coordinate is $\alpha^{+} \ne \omega_1$. Hence $z \in (P' \times Q') \cap T \subseteq V$. [step 11.1, L1, L2]

13.1 Also $\alpha < \alpha^{+} \le \omega_1$, so $\alpha^{+} \in (\alpha,\omega_1]$, and $m^{+} \in \omega$; hence $z \in (\alpha,\omega_1] \times \{m^{+}\} \subseteq U$ by step 10.1. [step 10.1, step 12.1, L2]

14.1 Steps 12.1 and 13.1 put $z$ in $U \cap V$, contradicting the disjointness assumed in step 4.1; so no such $U$ and $V$ exist, the disjoint closed sets $A$ and $B$ of step 3.1 cannot be separated, and $T$ is not normal by [L6]. With step 1.3 the space $T$ is Hausdorff and not normal, which refutes the claim. [step 3.1, step 1.3, step 4.1, step 12.1, step 13.1, L6, discharge-contradiction] ∎

## Remarks

- **Where the uncountability of $\omega_1$ is spent, and where it is not.** The whole argument turns on step 9.1: a countable family of ordinals below $\omega_1$ is bounded below $\omega_1$, so a single $\alpha$ works for every $n$ at once. Nothing analogous holds in the second factor, and nothing analogous is needed: $\omega$ enters only through the fact that $m^{+}$ is again below $\omega$.

- **Why the point $(\omega_1,\omega)$ must be deleted.** With that corner present, the set $B$ would not be closed in the ambient space in the form used here, and the two sets $A$ and $B$ would both have the corner in their closures; deleting it is exactly what makes them disjoint closed sets with no room between them.

- **The ordinals $\alpha_n$ are defined, not chosen.** Taking the *least* $\alpha$ that works is what keeps the construction free of dependent choice; the only choice principle in the argument is the countable one inside [[thm-countable-subsets-of-omega-one-are-bounded]], and it is declared in the statement.

- **The classical use of this witness is not made here.** The plank is the standard example showing that normality is neither hereditary nor productive; both readings need the normality of $W \times Z$ itself, which this page does not prove and does not assert ([[def-normal-and-t4-spaces]]).
