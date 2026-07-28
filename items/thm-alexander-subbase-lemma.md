---
id: thm-alexander-subbase-lemma
kind: theorem
title: "Alexander's subbase lemma: if every cover by members of a fixed subbasis has a finite subcover then the space is compact; the proof is an application of Zorn's lemma"
status: draft
origin: session
deps: [def-compact-space, def-topology-basis-subbasis, thm-basis-criterion, thm-zorn, cor-ac-iff-zorn, def-axiom-of-choice, def-chain, def-maximal-element, def-partial-order, def-upper-bound, def-topological-space, lem-finite-choice, thm-induction-principle]
justified_by: []
aliases: [thm-alexander-subbasis-theorem]
landmark: true
short: "Alexander subbase lemma"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander subbase theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexander_subbase_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), in the form of Zorn's
lemma ([[thm-zorn]]), the two being equivalent over ZF ([[cor-ac-iff-zorn]]).

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{S}$ be a subbasis for $\mathcal{T}$
([[def-topology-basis-subbasis]]). Suppose that

> every family $\mathcal{S}_0 \subseteq \mathcal{S}$ with
> $X = \bigcup \mathcal{S}_0$ has a finite subfamily whose union is $X$.

Then $(X, \mathcal{T})$ is compact ([[def-compact-space]]).

The converse is immediate and is not the content: a compact space has a finite
subcover for **every** open cover, subbasic or not. What the lemma says is that
the subbasic covers alone already decide compactness, and that is what makes it
usable — a product topology is presented by a subbasis, and the subbasic covers
of a product are far easier to handle than its arbitrary open covers.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$, a subbasis $\mathcal{S}$ for $\mathcal{T}$, and the Axiom of Choice.

[A1] Every family $\mathcal{S}_0 \subseteq \mathcal{S}$ with $X = \bigcup \mathcal{S}_0$ has a finite subfamily whose union is $X$.

[L1] A space is compact exactly when every family of open sets with union the space has a finite subfamily with union the space, a family being finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$; the empty space is compact ([[def-compact-space]]).

[L2] Inclusion is a partial order on any family of sets, and a chain in it is a subfamily any two of whose members are comparable under inclusion ([[def-partial-order]], [[def-chain]]).

[L3] Of finitely many pairwise comparable sets one contains all the others: for $\mathcal{D}_0, \dots, \mathcal{D}_n$ pairwise comparable, induction on $n$ gives such a member, the successor step comparing the member found for $\mathcal{D}_0, \dots, \mathcal{D}_n$ with $\mathcal{D}_{n+1}$ ([[def-chain]], [[thm-induction-principle]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L5] An upper bound of a subset of a poset is an element above all of its members ([[def-upper-bound]]); a maximal element is one with nothing strictly above it ([[def-maximal-element]]).

[L6] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L7] The intersections of finitely many members of $\mathcal{S}$ form a basis for $\mathcal{T}$, the intersection of none being $X$; and for a basis $\mathcal{B}$, every open $O$ and every $x \in O$ admit $B \in \mathcal{B}$ with $x \in B \subseteq O$ ([[thm-basis-criterion]], claim 2; [[def-topology-basis-subbasis]]).

[L8] An arbitrary union of open sets is open, and so is an intersection of finitely many open sets when at least one is taken ([[def-topological-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(X, \mathcal{T})$ is not compact. Then $X \ne \varnothing$, the empty space being compact by [L1], and the family $\mathcal{P}$ of those open covers of $X$ that have no finite subcover is a nonempty subfamily of the power set of $\mathcal{T}$, partially ordered by inclusion. [L1, L2, assume-contra]

2.1 Every chain $\mathcal{C} \subseteq \mathcal{P}$ has an upper bound in $\mathcal{P}$. For $\mathcal{C} = \varnothing$ any member of $\mathcal{P}$ is an upper bound, and $\mathcal{P}$ is nonempty by step 1.1. For $\mathcal{C} \ne \varnothing$ take $\mathcal{B} := \bigcup \mathcal{C}$, a family of open sets whose union is $X$ because the union of any one member of $\mathcal{C}$ already is; were $\mathcal{B}$ to have a finite subcover $U_0, \dots, U_n$, then for each $j \le n$ the set of members of $\mathcal{C}$ containing $U_j$ is nonempty, [L4] would supply $\mathcal{D}_0, \dots, \mathcal{D}_n \in \mathcal{C}$ with $U_j \in \mathcal{D}_j$, and [L3] would put all of them inside one $\mathcal{D} \in \mathcal{C}$, which would then have the finite subcover $U_0, \dots, U_n$ and could not lie in $\mathcal{P}$. So $\mathcal{B} \in \mathcal{P}$, and it contains every member of $\mathcal{C}$. [L2, L3, L4, L5, step 1.1]

3.1 By [L6] the poset $\mathcal{P}$ has a maximal element $\mathcal{M}$: an open cover of $X$ with no finite subcover such that the only member of $\mathcal{P}$ containing it is itself. [L5, L6, step 1.1, step 2.1]

4.1 For every open $U \notin \mathcal{M}$ there is a finite $\mathcal{F} \subseteq \mathcal{M}$ with $X = U \cup \bigcup \mathcal{F}$. Indeed $\mathcal{M} \cup \{U\}$ is an open cover strictly containing $\mathcal{M}$, so by maximality it is not in $\mathcal{P}$ and has a finite subcover; that subcover must contain $U$, since otherwise it would be a finite subcover of $\mathcal{M}$ itself, and the members other than $U$ form the required finite $\mathcal{F} \subseteq \mathcal{M}$. [L1, step 3.1]

4.2 Let $x \in X$. Since $\mathcal{M}$ covers $X$ there is $M \in \mathcal{M}$ with $x \in M$, and by [L7] there are $m \in \mathbb{N}$ and $S_0, \dots, S_m \in \mathcal{S}$ with $x \in S_0 \cap \dots \cap S_m \subseteq M$; the remaining alternative of [L7], that no member of $\mathcal{S}$ is taken and the basic set is $X$ itself, would give $X \subseteq M$ and so make $\{M\}$ a finite subcover of $\mathcal{M}$, which step 3.1 forbids. [L7, step 3.1]

5.1 Some $S_j$ lies in $\mathcal{M}$. For if none did, then by step 4.1 the set of finite $\mathcal{F} \subseteq \mathcal{M}$ with $X = S_j \cup \bigcup \mathcal{F}$ is nonempty for each $j \le m$, so [L4] supplies $\mathcal{F}_0, \dots, \mathcal{F}_m$; every $y \in X$ either lies in $S_0 \cap \dots \cap S_m$ or fails to lie in some $S_j$ and then lies in $\bigcup \mathcal{F}_j$, so $X = (S_0 \cap \dots \cap S_m) \cup \bigcup \mathcal{F}_0 \cup \dots \cup \bigcup \mathcal{F}_m \subseteq M \cup \bigcup \mathcal{F}_0 \cup \dots \cup \bigcup \mathcal{F}_m$, exhibiting a finite subfamily of $\mathcal{M}$ with union $X$ — a union of finitely many listable families being listed by concatenation — which step 3.1 forbids. [L1, L4, step 3.1, step 4.1, step 4.2]

6.1 Hence $\mathcal{S} \cap \mathcal{M}$ covers $X$: every $x \in X$ lies in some $S_j$ of step 4.2 that belongs to $\mathcal{M}$ by step 5.1, and $x \in S_0 \cap \dots \cap S_m \subseteq S_j$. [step 4.2, step 5.1]

7.1 By [A1] the cover $\mathcal{S} \cap \mathcal{M}$ of $X$ by members of $\mathcal{S}$ has a finite subfamily with union $X$; that subfamily is a finite subfamily of $\mathcal{M}$ with union $X$, contradicting the choice of $\mathcal{M}$ at step 3.1. So the supposition of step 1.1 is untenable and $(X, \mathcal{T})$ is compact. [A1, step 3.1, step 6.1, discharge-contradiction] ∎

## Remarks

**Where the Axiom of Choice is spent.** Exactly once, at step 3.1, through Zorn's lemma. The finite selections at steps 2.1 and 5.1 are instances of [[lem-finite-choice]] and cost nothing. That single use is inherited by [[thm-tychonoff]], which is proved from this lemma, and it cannot be avoided there: Tychonoff's theorem implies the Axiom of Choice.

**Why maximality is the right tool.** A cover with no finite subcover that cannot be enlarged is very close to being a filter of complements, and step 4.1 is what that closeness amounts to: any open set outside $\mathcal{M}$ already finishes the job when finitely many members of $\mathcal{M}$ are added. Step 5.1 then says a basic set of $\mathcal{M}$ cannot have *all* of its subbasic factors outside $\mathcal{M}$, which is the only place the subbasis hypothesis is used.

**The hypothesis is about one fixed subbasis.** A space may have many subbases, and the lemma is applied with whichever one presents the topology most conveniently. For a product that is the family of preimages of open sets under the projections ([[def-product-topology]]), and it is exactly the fact that a subbasic cover of a product moves one coordinate at a time that makes [[thm-tychonoff]] a short argument.
