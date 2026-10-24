---
id: "lem-noetherian-space-has-finitely-many-irreducible-components"
kind: "lemma"
title: "A Noetherian space is a finite union of irreducible closed subsets"
status: published
origin: pipeline
deps: [def-noetherian-topological-space, def-irreducible-topological-space-and-subset, def-irreducible-component-of-a-topological-space, lem-irreducible-components-of-a-topological-space, def-subspace-topology-top, def-topological-space, def-maximal-element, def-axiom-of-choice, def-dependent-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Topology"
      url: https://stacks.math.columbia.edu/download/topology.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Noetherian
topological space ([[def-noetherian-topological-space]]) and let irreducible
components be those of [[def-irreducible-component-of-a-topological-space]]. Then
$X$ is a finite union of irreducible closed subsets of $X$, and consequently $X$
has only finitely many irreducible components.

## Facts & Assumptions

[F1] $X$ is Noetherian if and only if every descending chain $F_0\supseteq F_1\supseteq F_2\supseteq\cdots$ of closed subsets of $X$ stabilizes ([[def-noetherian-topological-space]]).

[F2] $X$ is irreducible when $X\ne\varnothing$ and every decomposition $X=F_1\cup F_2$ into closed subsets has $X=F_1$ or $X=F_2$ ([[def-irreducible-topological-space-and-subset]]).

[F3] A subset $C$ of a subspace $S$ is closed in $S$ if and only if $C=F\cap S$ for some closed $F\subseteq X$ ([[def-subspace-topology-top]]).

[F4] A topology is closed under finite intersections, so the complements of finite unions of closed subsets are open and finite unions of closed subsets are closed ([[def-topological-space]]).

[F5] $m\in P$ is a minimal element of $P$ exactly when no element of $P$ is strictly below it ([[def-maximal-element]]).

[F6] The Axiom of Dependent Choice says that for a nonempty set $X$, a relation $R$ entire on $X$ and a point $a\in X$ there is a sequence $x_0=a$, $x_n\mathbin{R}x_{n+1}$ ([[def-dependent-choice]]).

[F7] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] The Axiom of Choice is assumed in the statement ([[def-axiom-of-choice]]).

[F9] If $X=X_1\cup\cdots\cup X_n$ with each $X_i$ irreducible and closed in $X$ and no $X_i$ contained in $\bigcup_{j\ne i}X_j$, then the irreducible components of $X$ are exactly $X_1,\ldots,X_n$ ([[lem-irreducible-components-of-a-topological-space]]).

[F10] An irreducible component of $X$ is an irreducible subset maximal under inclusion ([[def-irreducible-component-of-a-topological-space]]).

## Proof

**Given:** A Noetherian topological space $X$, the family of closed subsets of $X$ that are not finite unions of irreducible closed subsets of $X$, and the Axiom of Choice of [F8].

1.1 Let $\mathcal A$ be the family of closed subsets of $X$ which are not a finite union of irreducible closed subsets of $X$, and suppose $\mathcal A\ne\varnothing$. I claim $\mathcal A$ has a minimal element [F5]. Otherwise every $F\in\mathcal A$ would have some $F'\in\mathcal A$ with $F'\subsetneq F$, so the relation $R$ on $\mathcal A$ with $F\mathbin{R}F'$ exactly when $F'\subsetneq F$ would be entire on the nonempty set $\mathcal A$; choosing $F_0\in\mathcal A$ and applying dependent choice [F6], which is available by [F7] from the Axiom of Choice [F8] assumed in the statement, produces a sequence $F_0\supsetneq F_1\supsetneq F_2\supsetneq\cdots$ of closed subsets of $X$, contradicting [F1]. Hence $\mathcal A$ has a minimal element $F$. [F1, F5, F6, F7, F8]

2.1 Let $F$ be a minimal element of $\mathcal A$ as in [step 1.1]. Then $F\ne\varnothing$, because the empty family is a finite union of irreducible closed subsets of $X$ and so $\varnothing\notin\mathcal A$; and $F$ is not irreducible, because an irreducible closed subset is the one-member union of itself. Since $F\ne\varnothing$, the failure of irreducibility [F2] supplies closed subsets $F_1,F_2$ of the subspace $F$ with $F=F_1\cup F_2$ and $F_1\ne F\ne F_2$; by [F3] there are closed subsets $G_1,G_2\subseteq X$ with $F_i=F\cap G_i$, so that $F_1$ and $F_2$ are closed in $X$ [F4], and $F_1\subsetneq F$ and $F_2\subsetneq F$. [F2, F3, F4, step 1.1]

3.1 By minimality of $F$ in $\mathcal A$, the strictly smaller closed subsets $F_1,F_2$ of [step 2.1] are not members of $\mathcal A$, so each of them is a finite union of irreducible closed subsets of $X$; the union of those two finite unions exhibits $F=F_1\cup F_2$ [F4] as a finite union of irreducible closed subsets of $X$, contradicting $F\in\mathcal A$. Hence $\mathcal A=\varnothing$: every closed subset of $X$, and in particular $X$ itself, is a finite union of irreducible closed subsets of $X$. [F4, step 2.1]

4.1 Write $X=Y_1\cup\cdots\cup Y_m$ with each $Y_i$ irreducible and closed in $X$, as [step 3.1] provides. If some member is contained in the union of the others, delete the one of least index; each deletion lowers the number of members by one, so after finitely many deletions no choice is needed and one arrives at a subfamily $X=X_1\cup\cdots\cup X_n$ in which each $X_i$ is still irreducible and closed in $X$ and no $X_i$ is contained in $\bigcup_{j\ne i}X_j$. By [F9] the irreducible components of $X$ are exactly $X_1,\ldots,X_n$; in particular $X$ has finitely many irreducible components, and the theorem together with the definition [F10] is proved. The Axiom of Choice is used at exactly one point, in [step 1.1], where it provides dependent choice [F7]; the splitting, the finite-union arguments and the deletion process use no choice principle. ∎ [F7, F8, F9, F10, step 1.1]
