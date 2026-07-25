---
id: thm-ultrafilter-characterisation
kind: theorem
title: "Characterisation of ultrafilters: every set or its complement"
status: draft
origin: session
deps: [def-ultrafilter, def-filter, def-maximal-element, lem-fip-generates-filter]
justified_by: []
aliases: []
landmark: true
short: "$A\\in\\mathcal{U}$ or $X\\setminus A\\in\\mathcal{U}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement

Let $X$ be a set and $\mathcal{U}$ a filter on $X$ ([[def-filter]]). The following
are equivalent:

1. $\mathcal{U}$ is an ultrafilter on $X$ ([[def-ultrafilter]]);
2. for every $A \subseteq X$, either $A \in \mathcal{U}$ or
   $X \setminus A \in \mathcal{U}$.

Moreover, for any filter the two alternatives are exclusive: never both
$A \in \mathcal{U}$ and $X \setminus A \in \mathcal{U}$. So an ultrafilter decides
every subset of $X$, containing exactly one of $A$ and $X \setminus A$.

## Facts & Assumptions

**Given:** A set $X$ and a filter $\mathcal{U}$ on $X$.

[A1] $\mathcal{U}$ is a filter on $X$: $X \in \mathcal{U}$, $\emptyset \notin \mathcal{U}$, $\mathcal{U}$ is closed under pairwise intersection, and $B \in \mathcal{U}$ whenever $A \in \mathcal{U}$ and $A \subseteq B \subseteq X$ ([[def-filter]]).

[L1] An ultrafilter on $X$ is a filter that is maximal for inclusion among the filters on $X$; maximality of $m$ says that $m \leq x$ forces $x = m$ ([[def-ultrafilter]], [[def-maximal-element]]).

## Proof

**Proof technique:** direct.

1.1 **Exclusivity, for any filter.** If $A$ and $X \setminus A$ both lay in $\mathcal{U}$ then so would $A \cap (X \setminus A) = \emptyset$, which properness forbids. [A1]

1.2 **Forward.** Assume statement 1, let $A \subseteq X$, and suppose $X \setminus A \notin \mathcal{U}$; the goal is $A \in \mathcal{U}$. [assume-hyp]

1.3 **Forward.** Let $\mathcal{G} = \{\, B \subseteq X : C \cap A \subseteq B \text{ for some } C \in \mathcal{U} \,\}$. [construct]

2.1 **Forward.** Every $C \in \mathcal{U}$ satisfies $C \cap A \neq \emptyset$: from $C \cap A = \emptyset$ one gets $C \subseteq X \setminus A$, and upward closure would then put $X \setminus A$ into $\mathcal{U}$, which step 1.2 excludes. [step 1.2, A1]

2.2 **Forward.** $\mathcal{U} \subseteq \mathcal{G}$, since $C \cap A \subseteq C$ for $C \in \mathcal{U}$; and $A \in \mathcal{G}$, since $X \in \mathcal{U}$ and $X \cap A \subseteq A \subseteq X$. [step 1.3, A1]

2.3 **Converse.** Assume statement 2 and let $\mathcal{H}$ be any filter on $X$ with $\mathcal{U} \subseteq \mathcal{H}$; for $A \in \mathcal{H}$ one cannot have $X \setminus A \in \mathcal{U}$, since then $X \setminus A \in \mathcal{H}$ and $\emptyset = A \cap (X \setminus A) \in \mathcal{H}$, against properness of $\mathcal{H}$. [step 1.1, A1, assume-hyp]

3.1 **Forward.** $\mathcal{G}$ is a filter on $X$: its members are subsets of $X$ by definition; $X \in \mathcal{G}$ by step 2.2; $\emptyset \notin \mathcal{G}$, because $C \cap A \subseteq \emptyset$ would make $C \cap A$ empty against step 2.1; it is closed upward in $X$ by transitivity of $\subseteq$; and if $C_1 \cap A \subseteq B_1$ and $C_2 \cap A \subseteq B_2$ with $C_1, C_2 \in \mathcal{U}$ then $(C_1 \cap C_2) \cap A \subseteq B_1 \cap B_2$ with $C_1 \cap C_2 \in \mathcal{U}$, so $B_1 \cap B_2 \in \mathcal{G}$. [step 1.3, step 2.1, step 2.2, A1]

3.2 **Converse.** So $A \in \mathcal{U}$ for every $A \in \mathcal{H}$ by statement 2, giving $\mathcal{H} \subseteq \mathcal{U}$ and hence $\mathcal{H} = \mathcal{U}$; no filter strictly contains $\mathcal{U}$, so $\mathcal{U}$ is maximal and statement 2 implies statement 1. [step 2.3, L1]

4.1 **Forward.** Maximality of $\mathcal{U}$ applied to the filter $\mathcal{G} \supseteq \mathcal{U}$ gives $\mathcal{G} = \mathcal{U}$, hence $A \in \mathcal{U}$ by step 2.2; so statement 1 implies statement 2. [step 3.1, step 2.2, step 1.2, L1]

5.1 The two statements are therefore equivalent, and by step 1.1 an ultrafilter contains exactly one of $A$ and $X \setminus A$ for each $A \subseteq X$. [step 4.1, step 3.2, step 1.1] ∎

## Remarks

- **This is the working form of the definition.** Maximality is a statement about
  the whole poset of filters; deciding complements is a statement about
  $\mathcal{U}$ alone, and it is what one actually checks and uses. Every later
  fact about ultrafilters in this library goes through statement 2, starting with
  [[lem-ultrafilter-prime]].
- **The two directions run as separate threads**, and the mechanical
  stratification interleaves them, so each step is labelled Forward or Converse.
  They share nothing except the filter $\mathcal{U}$ and the exclusivity of
  step 1.1: the forward thread builds a specific filter $\mathcal{G}$, the
  converse thread argues about an arbitrary filter $\mathcal{H}$ above
  $\mathcal{U}$.
- The filter $\mathcal{G}$ built at step 1.3 is the filter generated by
  $\mathcal{U} \cup \{A\}$ ([[lem-fip-generates-filter]]): its members are the
  supersets of the sets $C \cap A$ with $C \in \mathcal{U}$. Those sets are not
  *all* the intersections of finite lists drawn from $\mathcal{U} \cup \{A\}$, since
  a list omitting $A$ intersects to a member $C$ of $\mathcal{U}$ and not to a set
  of the form $C \cap A$. The two families generate the same filter all the same:
  finitely many members of $\mathcal{U}$ intersect to a single $C \in \mathcal{U}$,
  so every such finite intersection either is a $C$ or is a $C \cap A$, and in the
  first case it contains $C \cap A$; conversely each $C \cap A$ is itself one of
  the finite intersections. The upward closures therefore coincide, which is all
  that "generated by" asks. Step 2.1 is the check that
  $\mathcal{U} \cup \{A\}$ has the finite intersection property, and that check is
  exactly where $X \setminus A \notin \mathcal{U}$ is used.
- **Exclusivity is a property of filters, not of ultrafilters**, and it holds for
  the trivial reason that $A$ and $X \setminus A$ are disjoint. What maximality
  buys is only the "at least one" half. Reading the characterisation as a
  two-valued decision on $\mathcal{P}(X)$ makes an ultrafilter a finitely additive
  $\{0,1\}$-valued measure on $X$, which is the standard way it is used.
- The characterisation makes ultrafilters visibly rigid: $\mathcal{U}$ is
  determined by which of each complementary pair it takes, so an ultrafilter is a
  consistent choice on all of $\mathcal{P}(X)$ at once. This is why producing one
  in general requires a choice principle ([[thm-ultrafilter-lemma]]).
