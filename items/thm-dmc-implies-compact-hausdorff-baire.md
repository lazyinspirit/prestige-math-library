---
id: thm-dmc-implies-compact-hausdorff-baire
kind: theorem
title: "DMC makes every compact Hausdorff space Baire"
status: draft
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, def-compact-space, def-baire-space, def-normal-and-t4-spaces, def-hausdorff-space, thm-a-compact-hausdorff-space-is-regular-and-normal, def-regular-and-t3-spaces, lem-regularity-via-closed-neighbourhoods, def-compactness-variants, thm-compactness-variants-hierarchy, def-interior-closure-boundary-top, def-dense-top, def-natural-numbers, def-finite-intersection-property, thm-subset-of-a-finite-set, def-topological-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "David H. Fremlin, Dependent multiple choice and Baire's theorem (following Fossy and Morillon)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/n04j06.ps"
      locator: "Proposition 2 and Theorem 4, printed pp. 1-3"
---

## Statement

$\mathrm{ZF} + \mathrm{DMC}$ proves that every compact Hausdorff space is a Baire
space ([[def-compact-space]], [[def-hausdorff-space]], [[def-baire-space]]).

DMC is the principle of
[[def-dependent-multiple-choice-finite-level-tree]], used below in its
successor-menu form: every serial relation on a nonempty set admits nonempty
finite successor menus.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$; a sequence $(G_n)_{n\in\mathbb{N}}$ of dense open subsets of $X$; a nonempty open $W \subseteq X$; the principle DMC.

[F1] A compact Hausdorff space is regular and $T_1$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

[F2] Regularity in the shrinking form: if $U$ is open and $x \in U$ then there is open $V$ with $x \in V \subseteq \overline{V} \subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F3] A compact space is countably compact ([[def-compactness-variants]], [[thm-compactness-variants-hierarchy]]).

[F4] DMC: if $R$ is serial on a nonempty set $P$, there are nonempty finite $F_n \subseteq P$ with every $x \in F_n$ having an $R$-successor in $F_{n+1}$ ([[def-dependent-multiple-choice-finite-level-tree]]).

[L1] Dense means meeting every nonempty open set; an open set is a set whose every point has an open neighbourhood inside it; closures are as in [[def-interior-closure-boundary-top]], and a set is closed exactly when its complement is open ([[def-dense-top]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).

[L2] Finite intersections of dense open sets are dense and open, by induction on the number of factors, and finite unions of closed sets are closed ([[def-dense-top]], [[def-interior-closure-boundary-top]]).

[L3] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]); the empty sequence is not used as a menu.

## Proof

**Proof technique:** direct.

1.1 Assume DMC. Let $X$ be compact Hausdorff, let $(G_n)$ be dense open, and let $W$ be nonempty open; if $X = \varnothing$ there is no such $W$ and the Baire condition is vacuous, so assume henceforth $X \ne \varnothing$. [given, F4]

2.1 If $X = \varnothing$ the conclusion of step 1.1 is vacuous: a space with empty underlying set has no nonempty open subset, so every sequence of dense open sets trivially has dense intersection. [step 1.1, L1]

2.2 Assume $X \ne \varnothing$; by [F1] and [F2] $X$ is regular, and by [F3] it is countably compact. [step 1.1, F1, F2, F3]

2.3 Put $G'_k := \bigcap_{j<k} G_j$ for $k \in \mathbb{N}$, so that $G'_0 = X$, each $G'_k$ is dense and open by [L2], and $G'_{k+1} \subseteq G'_k$. [step 1.1, L2]

2.4 Let $\mathcal{V}$ be the family of nonempty open subsets of $W$. [step 1.1, L1]

3.1 Define $U \succ V$ for $U, V \in \mathcal{V}$ to mean that there is $k$ with $\overline{V} \subseteq U \cap G'_k$ and $U \not\subseteq G'_k$. If some $U \in \mathcal{V}$ satisfies $U \subseteq G'_k$ for every $k$, then $U \subseteq W \cap \bigcap_k G_k \ne \varnothing$ and the conclusion already holds; assume therefore that every $U \in \mathcal{V}$ fails this, and note that the relation $\succ$ is then serial on $\mathcal{V}$: given $U \in \mathcal{V}$, fix $x \in U$ with $x \notin G'_k$ for some $k$, and fix $y \in U \cap G'_k$, which is nonempty because $G'_k$ is dense and $U$ is nonempty open; by step 2.2 and [F2] there is nonempty open $V$ with $V \subseteq \overline{V} \subseteq U \cap G'_k$, and $V \subseteq U \subseteq W$ so $V \in \mathcal{V}$ and $U \succ V$. [step 2.2, step 2.3, step 2.4, F2, L1, L2]

4.1 Assume from now on that the first alternative of step 3.1 fails, so that $\succ$ is serial on the nonempty $\mathcal{V}$. [step 3.1]

5.1 Apply DMC of [F4] to $\succ$ on $\mathcal{V}$: there are nonempty finite sets $V_n \subseteq \mathcal{V}$ with every $U \in V_n$ having a $\succ$-successor in $V_{n+1}$. [step 4.1, F4]

6.1 Prune the menus: put $V'_0 := V_0$ and $V'_{n+1} := \{\, V \in V_{n+1} : U \succ V \text{ for some } U \in V'_n \,\}$. Then each $V'_n$ is a nonempty finite subset of $V_n$: nonemptiness is by induction, since each $U \in V'_n$ has a $\succ$-successor in $V_{n+1}$ which then lies in $V'_{n+1}$, and finiteness is [L3]. [step 5.1, L3]

7.1 Induction on $n$: every $U \in V'_n$ satisfies $\overline{U} \subseteq G'_n$. For $n = 0$ this is $\overline{U} \subseteq X = G'_0$. For the step, let $V \in V'_{n+1}$ and fix $U \in V'_n$ with $U \succ V$; then $\overline{V} \subseteq U \cap G'_k$ for some $k$ with $U \not\subseteq G'_k$. By the induction hypothesis $U \subseteq \overline{U} \subseteq G'_n$, so $k > n$: otherwise $G'_k \supseteq G'_n \supseteq U$, contradicting $U \not\subseteq G'_k$. Hence $\overline{V} \subseteq G'_k \subseteq G'_{n+1}$. [step 3.1, step 6.1, step 2.3]

8.1 Put $W_n := \bigcup V'_n$, a nonempty set with $W_n \subseteq G'_n$ by step 6.1, and $W_{n+1} \subseteq W_n$: every $V \in V'_{n+1}$ satisfies $V \subseteq \overline{V} \subseteq U$ for some $U \in V'_n \subseteq W_n$. Put $K_n := \bigcup \{\, \overline{V} : V \in V'_n \,\}$, a nonempty closed set by [L2], with $K_{n+1} \subseteq W_n \subseteq K_n$ and $K_n \subseteq G'_n$. [step 6.1, step 7.1, L2]

9.1 The sequence $K_n$ is a decreasing sequence of nonempty closed subsets of the countably compact space $X$ of step 2.2, so $\bigcap_n K_n \ne \varnothing$: otherwise the open sets $X \setminus K_n$ would cover $X$, and a finite subcover $X \setminus K_{n_1}, \dots, X \setminus K_{n_m}$ would give $K_{\max n_j} = \varnothing$ by [L2], contradicting nonemptiness. [step 2.2, step 8.1, F3, L2]

10.1 Fix $x \in \bigcap_n K_n$; then $x \in K_1 \subseteq W_0 \subseteq W$ by steps 7.1 and 8.1, so $x \in W$, and for every $n$ we have $x \in K_{n+1} \subseteq W_n \subseteq G'_n \subseteq G_{n-1}$ for $n \ge 1$, so $x \in \bigcap_n G_n$; thus $W \cap \bigcap_n G_n \ne \varnothing$. [step 8.1, step 9.1]

11.1 Steps 2.1 and 10.1 cover the empty and nonempty cases of the ambient space, and the only choice principle used was DMC in step 5.1; hence every compact Hausdorff space is Baire. [step 2.1, step 10.1, F4] ∎

## Remarks

- **Which hypothesis of the source is used.** Fossy and Morillon state the result for countably compact regular spaces; compactness makes the space regular and countably compact in step 2.2, and countable compactness gives the common point of the decreasing closed sets in step 9.1. Hausdorffness is used only through the compact-Hausdorff regularity theorem.

- **Why the sets $G'_k$ are not closed.** They are finite intersections of dense open sets, hence dense and open, and they are decreasing; the closed sets whose intersection is taken in step 9.1 are the finite unions of closures of the pruned menus, which is why the pruning of step 6.1 is needed.
