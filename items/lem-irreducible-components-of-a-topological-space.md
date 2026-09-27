---
id: "lem-irreducible-components-of-a-topological-space"
kind: "lemma"
title: "Existence and basic properties of irreducible components"
status: published
origin: pipeline
deps: [def-topological-space, def-irreducible-topological-space-and-subset, def-irreducible-component-of-a-topological-space, def-interior-closure-boundary-top, thm-closure-characterisation-top, thm-subspace-closure-and-interior, def-subspace-topology-top, def-maximal-element, thm-zorn, def-axiom-of-choice]
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space ([[def-topological-space]]), irreducible subsets being those of
[[def-irreducible-topological-space-and-subset]] and irreducible components those
of [[def-irreducible-component-of-a-topological-space]]. Then:

1. if $T\subseteq X$ is irreducible, then the closure $\overline{T}$ of $T$ in
   $X$ ([[def-interior-closure-boundary-top]]) is irreducible;
2. every irreducible component of $X$ is a closed subset of $X$;
3. every irreducible subset of $X$ is contained in an irreducible component of
   $X$; in particular every point of $X$ lies in an irreducible component, so
   $X$ is the union of its irreducible components;
4. if $X$ is nonempty and irreducible, then $X$ is the unique irreducible
   component of $X$;
5. if $X=X_1\cup\cdots\cup X_n$ with each $X_i$ an irreducible closed subset of
   $X$, and no $X_i$ is contained in $\bigcup_{j\ne i}X_j$, then the irreducible
   components of $X$ are exactly $X_1,\ldots,X_n$;
6. if $C\subseteq X$ is irreducible and $W\subseteq X$ is closed with
   $X=C\cup W$ and $C\not\subseteq W$, then $X\setminus W$ is a nonempty subset
   of $C$ whose closure in $X$ is irreducible.

## Facts & Assumptions

[F1] $X$ is irreducible when $X\ne\varnothing$ and every decomposition $X=F_1\cup F_2$ into closed subsets has $X=F_1$ or $X=F_2$; a subset is irreducible when its subspace is ([[def-irreducible-topological-space-and-subset]]).

[F2] The closure of $A\subseteq X$ is the intersection of all closed subsets containing $A$ ([[def-interior-closure-boundary-top]]).

[F3] $\overline{A}$ is closed, contains $A$, and is contained in every closed $F\subseteq X$ with $A\subseteq F$, so it is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]]).

[F4] For $A\subseteq S\subseteq X$ the closure of $A$ in the subspace $S$ is $\operatorname{cl}_S(A)=\overline{A}\cap S$ ([[thm-subspace-closure-and-interior]]).

[F5] A subset $C$ of a subspace $S\subseteq X$ is closed in $S$ if and only if $C=F\cap S$ for a closed $F\subseteq X$ ([[def-subspace-topology-top]]).

[F6] A topology is closed under arbitrary unions, and closed subsets are the complements of open subsets ([[def-topological-space]]).

[F7] Under the Axiom of Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[F8] $m\in P$ is maximal when there is no $x\in P$ with $m<x$, equivalently when $m\le x$ implies $x=m$ ([[def-maximal-element]]).

[F9] The Axiom of Choice is assumed in the statement and is the hypothesis of Zorn's lemma ([[def-axiom-of-choice]]).

[F10] An irreducible component of $X$ is an irreducible subset maximal under inclusion: if $D\subseteq X$ is irreducible and $C\subseteq D$ then $D=C$ ([[def-irreducible-component-of-a-topological-space]]).

## Proof

**Given:** A topological space $X$, the notions of irreducible subset and irreducible component of [F1] and [F10], and the Axiom of Choice of [F9].

1.1 Let $T\subseteq X$ be irreducible and let $\overline{T}$ be its closure in $X$ [F2]. Suppose $\overline{T}=Z_1\cup Z_2$ with $Z_1,Z_2$ closed in the subspace $\overline{T}$. By [F5] each $Z_i$ is the trace $Z_i=\overline{T}\cap F_i$ of a closed $F_i\subseteq X$, so each intersection $T\cap Z_i$ is closed in $T$; and $T=(T\cap Z_1)\cup(T\cap Z_2)$. Since $T$ is irreducible and nonempty by [F1], $T=T\cap Z_i$ for at least one $i$, that is, $T\subseteq Z_i$. The closure of $T$ computed inside the subspace $\overline{T}$ equals $\overline{T}$ by [F4], and it is contained in $Z_i$ because $Z_i$ is closed in $\overline{T}$ and contains $T$; hence $Z_i=\overline{T}$. So $\overline{T}$ admits no decomposition into two proper closed subsets and is irreducible, which is clause 1. [F1, F2, F4, F5]

1.2 Let $T\subseteq X$ be irreducible [F1] and let $P$ be the poset of those irreducible $T'$ with $T\subseteq T'\subseteq X$, ordered by inclusion; $P$ is nonempty because $T\in P$. Every chain in $P$ has an upper bound in $P$: for a chain $\mathcal C\subseteq P$ put $E:=\bigcup_{T'\in\mathcal C}T'$, so that $T\subseteq E$, and $E$ is irreducible, because if $E=Z_1\cup Z_2$ with $Z_i$ closed in $E$ [F5], then for every $T'\in\mathcal C$ the pair $(T'\cap Z_1,T'\cap Z_2)$ is a decomposition of the irreducible nonempty set $T'$ into closed subsets [F1], so $T'\subseteq Z_1$ or $T'\subseteq Z_2$; if every $T'$ is contained in $Z_1$ then $E=Z_1$, and otherwise some $T'_0\in\mathcal C$ satisfies $T'_0\not\subseteq Z_1$, whence $T'_0\subseteq Z_2$, and for any $T'\in\mathcal C$ either $T'\subseteq T'_0$, which gives $T'\subseteq Z_2$, or $T'_0\subseteq T'$, in which case $T'\not\subseteq Z_1$ and irreducibility of $T'$ gives $T'\subseteq Z_2$; so $E=Z_2$ in that case too. Thus every chain in $P$ has an upper bound, and Zorn's lemma [F7], which is a consequence of the Axiom of Choice [F9] assumed in the statement, produces a maximal element $C\in P$ [F8]. Then $C$ is an irreducible component: it is irreducible and contains $T$, and if $D$ is irreducible with $C\subseteq D\subseteq X$ then $T\subseteq D$, so $D\in P$ and maximality of $C$ in $P$ gives $D=C$. [F1, F5, F7, F8, F9]

1.3 Let $C\subseteq X$ be irreducible [F1] and let $W\subseteq X$ be closed with $X=C\cup W$ and $C\not\subseteq W$. Then $C\setminus W\ne\varnothing$, and $X\setminus W=C\setminus W\subseteq C$ because $X=C\cup W$; in particular the set whose closure is taken in clause 6 is nonempty. Put $Z':=\overline{X\setminus W}$ [F2]. Then $Z'$ is closed in $X$ by [F3], and $C\subseteq Z'\cup W$, so $C=(C\cap Z')\cup(C\cap W)$ with $C\cap Z'$ and $C\cap W$ closed in $C$ [F5]. Since $C$ is irreducible and nonempty [F1], one of the two sets equals $C$; the alternative $C=C\cap W$ would give $C\subseteq W$, which is excluded, so $C=C\cap Z'$ and $C\subseteq Z'$. Now suppose $Z'=E_1\cup E_2$ with $E_1,E_2$ closed in $Z'$ and $E_i\ne Z'$. Each $E_i$ is a trace of a closed subset of $X$ [F5], hence closed in $X$ because $Z'$ is closed in $X$ [F3]; and $C=(C\cap E_1)\cup(C\cap E_2)$ with each $C\cap E_i$ closed in $C$, so irreducibility and nonemptiness of $C$ [F1] give $C\subseteq E_i$ for some $i$. Then $X\setminus W\subseteq C\subseteq E_i$ with $E_i$ closed in $X$, so $Z'=\overline{X\setminus W}\subseteq E_i$ by [F3], whence $E_i=Z'$, contradicting $E_i\ne Z'$. Therefore $Z'$ is irreducible, and together with the nonemptiness and the inclusion $X\setminus W\subseteq C$ this is clause 6. [F1, F2, F3, F5]

2.1 Let $C\subseteq X$ be an irreducible component [F10]. Then $C$ is irreducible, so its closure $\overline{C}$ is irreducible by [step 1.1], and $C\subseteq\overline{C}$. Maximality in [F10] applied to the irreducible subset $\overline{C}$ gives $\overline{C}=C$, and $\overline{C}$ is closed by [F3]; hence $C$ is a closed subset of $X$, which is clause 2. [F3, F10, step 1.1]

2.2 A singleton subset $\{x\}\subseteq X$ is irreducible: it is nonempty, and in any decomposition $\{x\}=F_1\cup F_2$ into closed subsets the point $x$ lies in $F_1$ or in $F_2$, so the corresponding $F_i$ equals $\{x\}$ [F1]. Applying [step 1.2] to $T=\{x\}$ produces an irreducible component of $X$ containing $x$; hence every point of $X$ lies in an irreducible component and $X$ is the union of its irreducible components, which completes clause 3. If moreover $X$ is nonempty and irreducible, then $X$ is itself an irreducible subset of $X$ contained in no larger irreducible subset, so $X$ is an irreducible component by [F10]; and every irreducible component $C\subseteq X$ satisfies $C=X$ by maximality in [F10]. Thus $X$ is the unique irreducible component of $X$, which is clause 4. [F1, F10, step 1.2]

3.1 Let $X=X_1\cup\cdots\cup X_n$ with each $X_i$ irreducible and closed in $X$, and suppose no $X_i$ is contained in $\bigcup_{j\ne i}X_j$. Let $C\subseteq X$ be an irreducible component. Then $C=(C\cap X_1)\cup\cdots\cup(C\cap X_n)$, and each $C\cap X_i$ is closed in $C$ because $X_i$ is closed in $X$ [F5]; since $C$ is irreducible and nonempty [F1], $C=C\cap X_i$ for some $i$, that is $C\subseteq X_i$, and maximality in [F10] applied to the irreducible subset $X_i$ gives $C=X_i$. Conversely, for a given $i$ the set $X_i$ is contained in an irreducible component $C$ by [step 2.2], and $C=X_j$ for some $j$ by what was just proved; then $X_i\subseteq X_j$, and $j\ne i$ would put $X_i$ inside the union of the other members, so $j=i$ and $X_i=C$ is an irreducible component. Hence the irreducible components of $X$ are exactly $X_1,\ldots,X_n$, which is clause 5. [F1, F5, F10, step 2.2]

4.1 Clause 1 is [step 1.1], clause 2 is [step 2.1], clause 3 is [step 1.2] together with [step 2.2], clause 4 is [step 2.2], clause 5 is [step 3.1] and clause 6 is [step 1.3], so all six clauses are proved. The Axiom of Choice [F9] is used at exactly one point, in [step 1.2], through Zorn's lemma [F7] applied to the poset of irreducible subsets containing a fixed irreducible subset; the verification of the chain condition there is a direct computation with unions and closed subsets [F6], and the remaining arguments use no choice principle. ∎ [F6, F7, F9, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 1.3]
