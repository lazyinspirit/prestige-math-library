---
id: ex-antichain-sealing-in-countable-tree-forcing
kind: example
title: "Sealing a named maximal antichain"
status: published
origin: pipeline
deps: [thm-countably-closed-forcing-adds-a-normal-suslin-tree, def-countable-normal-tree-end-extension-forcing, lem-countable-tree-antichain-sealing, thm-closure-distributivity-and-no-short-sequences, lem-forcing-monotonicity-density-and-decision, def-forcing-relation-for-atomic-formulas, thm-forcing-theorem, thm-countable-union-of-countable, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, proof of Theorem 4.25, printed p. 25"
      url: https://karagila.org/files/Forcing-2023.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $p_0$ force that $\dot A$ is a maximal antichain of the canonical generic
tree $\dot T$ for the countable normal-tree end-extension forcing. Below any
$r_0\leq p_0$, an explicit two-dimensional fusion produces a countable ground
antichain $A^*$ in a countable limit tree $U$. Adding one top for each selected
cofinal branch through $U$ seals $A^*$ and gives a condition $q\leq r_0$ such
that

$$q\Vdash\dot A=\check A^*.$$

The ground set $A^*$ is assembled from decisions about the name $\dot A$; it is
not an arbitrary antichain of the starting condition.

## Facts & Assumptions

**Given:** $p_0$, $\dot A$, and $r_0\leq p_0$ as above. Work in ZFC and use the
stronger-is-smaller convention.

[F1] The tree forcing is countably closed and forces its canonical union name
to be a normal splitting Suslin tree. [[thm-countably-closed-forcing-adds-a-normal-suslin-tree]]

[F2] A stronger end extension leaves every old level and predecessor relation
literally unchanged and adds only higher levels. [[def-countable-normal-tree-end-extension-forcing]]

[F3] A maximal antichain in a countable normal tree of nonzero countable limit
height can be sealed by a countable top level whose every node extends that
antichain. [[lem-countable-tree-antichain-sealing]]

[F4] Countably closed forcing adds no new countable sequences of ground-model
elements. [[thm-closure-distributivity-and-no-short-sequences]]

[F5] Forcing decisions are dense and persist to stronger conditions.
[[lem-forcing-monotonicity-density-and-decision]]

[F6] Atomic membership in a name is witnessed densely by a coefficient of that
name below the current condition. [[def-forcing-relation-for-atomic-formulas]]

[F7] The forcing theorem supplies the definable forcing relation and truth
lemma without asserting that a generic over the universe exists.
[[thm-forcing-theorem]]

[F8] Under countable choice, a countable union of countable sets is countable.
[[thm-countable-union-of-countable]]

[F9] Transfinite recursion constructs the two indexed descending systems from
their specified earlier-stage rules. [[thm-transfinite-recursion]]

[A1] AC supplies the simultaneous enumerations and choices of deciding
extensions used in the fusion. [[def-axiom-of-choice]]

## Verification

1.1 First distinguish the two objects. For a ground condition $p$, a set $B\subseteq T_p$ is already a ground antichain and its membership is settled. By contrast, $\dot A$ is a name for a subset of the eventual union: $p_0$ need not decide its members, and its value need not be contained in $T_{p_0}$. Maximality of $\dot A$ says that every node of $\dot T$ is comparable with some named member, not that the intersection $\dot A\cap\check T_{p_0}$ is already maximal in $T_{p_0}$. [F1, F2, F7, given]

2.1 Put $p_0^*=r_0$. At outer round $n$, enumerate the countable tree $T_{p_n^*}$ as $(t_{n,m})_{m<\omega}$. Starting with $p_{n,0}=p_n^*$, construct a descending sequence. Because $p_{n,m}$ still forces $\dot A$ maximal, it forces that some member of $\dot A$ is comparable with $t_{n,m}$. The existential forcing clause from [F7], dense decision from [F5], and [F4] let us strengthen to $p_{n,m+1}$ and decide such a member as a ground countable sequence $a_{n,m}$. The atomic clause [F6] permits a further strengthening whose tree actually contains $a_{n,m}$. Thus $$p_{n,m+1}\Vdash\check a_{n,m}\in\dot A\text{ and }\check a_{n,m}\parallel\check t_{n,m}.$$ Countable closure gives a lower bound $\bar p_n$ for the inner sequence. Strengthen once more to $p_{n+1}^*\leq\bar p_n$ with strictly larger top height. Use [F9] and [A1] for all $n,m<\omega$. [F1, F4, F5, F6, F7, F9, A1, step 1.1, construct]

3.1 Let $$U=\bigcup_{n<\omega}T_{p_n^*},\qquad A^*=\{a_{n,m}:n,m<\omega\}.$$ The strictly increasing top heights make $U$ a normal splitting tree of nonzero countable limit height; $U$ itself has no top and is not yet a forcing condition. It is countable by [F8]. Every $t\in U$ lies in some $T_{p_n^*}$ and appears in that round's enumeration, so it is comparable with the corresponding $a_{n,m}\in A^*$. If two distinct elements of $A^*$ were comparable, a sufficiently late condition would contain them both and, by persistence in [F5], force both into the antichain $\dot A$, a contradiction. Hence $A^*$ is an antichain and the preceding coverage makes it maximal in $U$. Repeated decisions may yield the same $a_{n,m}$; set formation removes repetitions. [F2, F5, F8, step 2.1]

4.1 Apply [F3] to $(U,A^*)$. Choose a countable covering family of cofinal branches of $U$, each meeting $A^*$, and add one distinct top node for each distinct branch. The result is a countable normal splitting tree $T_q$ with a genuine new top, hence a condition $q$. It end extends every fusion condition, so $q\leq r_0$, and persistence gives $$q\Vdash\check A^*\subseteq\dot A.$$ Every node of $T_q$ is comparable with a member of $A^*$, including each new top by construction. [F2, F3, F5, step 2.1, step 3.1]

5.1 Let $s\leq q$. Literal end extension [F2] preserves $T_q$. Any node of $T_s$ already in $T_q$ is comparable with $A^*$ by step 4.1. Any new node has a unique predecessor on the top level of $T_q$; that top extends a member of $A^*$, so the new node does too. Thus every future node remains comparable with $A^*$, and density plus [F5] gives $$q\Vdash\check A^*\text{ is maximal in }\dot T.$$ Since $q$ also forces that $\dot A$ is an antichain containing $A^*$, no distinct member can be added to $A^*$; therefore $q\Vdash\dot A=\check A^*$. [F2, F3, F5, step 4.1]

6.1 The root handles a starting tree with only one node and shows that the forced maximal antichain cannot be empty. The indices $n=m=0$ give the first actual decision; zero outer rounds would not cover even the starting tree and are not used. The omega-union deliberately loses a top, and step 4.1 restores one. Empty or repeated branch/decision lists are not silently counted as new nodes: repetitions are removed, while nonemptiness follows from the root comparison. All names and assertions remain inside the forcing relation of [F7]; no universe-generic is claimed. Choice is spent in [A1] on the evolving tree enumerations and deciding extensions and through [F8], while the ground sealing operation [F3] itself is choice-free. [F3, F7, F8, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- Sealing a preselected maximal antichain of one condition would not by itself
  decide a name whose value may include later generic nodes. The fusion first
  extracts the correct ground antichain from persistent decisions about that
  name.
- The outer omega-loop is essential: decision conditions can add nodes not in
  the tree enumerated at the start of the current round. The next round
  enumerates those nodes before the final union is sealed.
