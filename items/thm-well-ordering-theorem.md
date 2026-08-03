---
id: thm-well-ordering-theorem
kind: theorem
title: "The well-ordering theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zorn, def-axiom-of-choice, def-well-order, def-partial-order, def-initial-segment, def-upper-bound, def-maximal-element, def-chain]
justified_by: []
external_refs: [rem-cohen-forcing-ac-independent]
aliases: [zermelo-well-ordering-theorem, thm-every-set-well-orderable]
landmark: true
short: "AC implies every set carries a well-order"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Well-ordering theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "The Well-Ordering Problem (Open Logic Project)"
      url: "https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf"
    - title: "Formalization of the Axiom of Choice and its Equivalent Theorems"
      url: "https://arxiv.org/abs/1906.03930"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Then **every set $X$ can
be well ordered**: there is a relation on $X$ making it a well-ordered set
([[def-well-order]]).

The Axiom of Choice is used only inside [[thm-zorn]], and nowhere else in the
argument below.

## Facts & Assumptions

**Given:** A set $X$, the axioms of ZF, and the Axiom of Choice. Write $(B, R) \preceq (B', R')$ for **end extension**: $B \subseteq B'$, the relation $R'$ restricted to $B$ is $R$, and $B$ is an initial segment of $(B', R')$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A partial order is reflexive, antisymmetric and transitive, and its strict part is $x < y$ meaning $x \le y$ with $x \ne y$ ([[def-partial-order]]).

[L3] A chain is a subset any two of whose elements are comparable, and the empty set is a chain ([[def-chain]]).

[L4] An upper bound of a subset is an element weakly above every member of it ([[def-upper-bound]]).

[L5] A maximal element has nothing strictly above it ([[def-maximal-element]]).

[L6] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

[L7] An initial segment is a downward closed subset ([[def-initial-segment]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be the collection of pairs $(B, R)$ with $B \subseteq X$ and $R \subseteq B \times B$ a well-order of $B$; this is a set by Power Set and Separation applied to $\mathcal{P}(X) \times \mathcal{P}(X \times X)$, and it is nonempty because $(\emptyset, \emptyset) \in P$. [L6, construct]

2.1 Order $P$ by end extension; this relation is reflexive, transitive, and antisymmetric, since mutual end extension forces the underlying sets and relations to coincide, so $(P, \preceq)$ is a poset. [step 1.1, L2, L7, construct]

3.1 The empty chain has an upper bound in $P$, namely $(\emptyset, \emptyset)$, so the hypothesis of Zorn's lemma is not vacuous at the bottom. [step 1.1, step 2.1, L3, L4]

3.2 Let $\mathcal{C} \subseteq P$ be a nonempty chain and put $B^{*} = \bigcup \{B : (B, R) \in \mathcal{C}\}$ and $R^{*} = \bigcup \{R : (B, R) \in \mathcal{C}\}$. [step 2.1, L3, construct]

4.1 $R^{*}$ is a strict total order on $B^{*}$: any two elements of $B^{*}$ lie in members of $\mathcal{C}$ one of which end extends the other, hence lie together in the larger member and are comparable there, and the comparisons made in different members agree, because along the chain each relation is the restriction of every larger one. [step 3.2, step 2.1, L2, L3]

5.1 $R^{*}$ well-orders $B^{*}$: given $\emptyset \ne S \subseteq B^{*}$, choose a member $(B, R)$ of $\mathcal{C}$ meeting $S$ and let $\ell$ be the $R$-least element of $S \cap B$; if some $t \in S$ satisfied $t \mathbin{R^{*}} \ell$ then $t$ and $\ell$ would lie in a common member $(B', R')$ of $\mathcal{C}$, and either $(B', R') \preceq (B, R)$, giving $t \in B' \subseteq B$, or $(B, R) \preceq (B', R')$, in which case $B$ is an initial segment of $(B', R')$ and $t \mathbin{R'} \ell \in B$ again gives $t \in B$; either way $t \in S \cap B$ with $t \mathbin{R} \ell$, contradicting minimality of $\ell$. [step 4.1, step 3.2, step 2.1, L6, L7]

6.1 Hence $(B^{*}, R^{*}) \in P$, and it end extends every member of $\mathcal{C}$: the inclusions and restrictions are immediate, and $B$ is an initial segment of $(B^{*}, R^{*})$ by the case analysis of step 5.1; so every nonempty chain has an upper bound. [step 5.1, step 4.1, step 2.1, L4, L7]

7.1 Zorn's lemma applies to the nonempty poset $(P, \preceq)$, in which every chain has an upper bound, and yields a maximal element $(M, R_M)$; this is the one and only place the Axiom of Choice is spent, and it is spent inside Zorn's lemma. [step 6.1, step 3.1, step 1.1, L1, L5, A1]

8.1 $M = X$: otherwise there is $x \in X \setminus M$, and putting $M' = M \cup \{x\}$ with $R' = R_M \cup \{(m, x) : m \in M\}$ gives a well-order of $M'$, because a nonempty $S \subseteq M'$ has as least element the $R_M$-least element of $S \cap M$ when that is nonempty and $x$ otherwise, while $(M, R_M) \preceq (M', R')$ with $M \ne M'$ contradicts the maximality of $(M, R_M)$. [step 7.1, L5, L6, L7]

9.1 Therefore $R_M$ is a well-order of $M = X$, and $X$ can be well ordered. [step 8.1, step 7.1] ∎

## Remarks

**Where the Axiom of Choice is.** Only in step 7.1, and only through [[thm-zorn]], whose proof spends it exactly once. Everything else here is plain ZF: forming $P$ is Power Set and Separation, and the chain bound is a union. The word "choose" in step 5.1 names one object whose existence has just been asserted, which is ordinary existential instantiation and not a choice principle; a choice principle is needed only when infinitely many such namings must be made at once. This bookkeeping is the reason Zorn is proved as a separate item rather than inlined.

**End extension is doing real work.** Ordering $P$ merely by "$R$ is the restriction of $R'$" is not enough. Without the requirement that $B$ be an initial segment of $B'$, a union of a chain of well-orders can fail to be a well-order, because a set $S$ could keep acquiring smaller elements as one moves up the chain and end with no least element. Step 5.1 is exactly the point where initial segments rule that out.

**Maximal, not greatest.** Zorn's lemma concludes that a maximal element exists, never that a greatest one does, and maximal does not imply greatest ([[fs-maximal-is-greatest]]). The argument is arranged so that maximality suffices: step 8.1 shows a maximal well-ordered piece cannot omit a point, because a point could always be appended on top.

**The converse holds.** Every set being well orderable implies the Axiom of Choice ([[thm-well-ordering-implies-ac]]), so the two are equivalent over ZF, as is Zorn's lemma ([[cor-ac-iff-well-ordering]]). That the well-ordering theorem is not a theorem of ZF alone is recorded, conditionally on the consistency of ZF, in [[fs-every-set-well-orderable-in-zf]]; the external result that item quotes is Cohen's independence theorem ([[rem-cohen-forcing-ac-independent]]), which this library records with references and does not prove.

**Zermelo 1904.** The original proof does not go through Zorn's lemma; it uses a choice function on $\mathcal{P}(X) \setminus \{\emptyset\}$ directly and builds the well-order by transfinite recursion ([[thm-transfinite-recursion]]), taking at each stage the chosen element of the set of points not yet used. That route is available here too, and it makes the use of choice even more visible: one choice function, consulted at every stage.
