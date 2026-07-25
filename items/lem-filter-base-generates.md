---
id: lem-filter-base-generates
kind: lemma
title: "The upward closure of a filter base is the smallest filter containing it"
status: draft
origin: session
deps: [def-filter-base, def-filter]
justified_by: []
aliases: []
landmark: false
short: "$\\langle\\mathcal{B}\\rangle$ is the smallest filter $\\supseteq\\mathcal{B}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal{B}$ be a filter base on $X$
([[def-filter-base]]), with upward closure

$$\langle \mathcal{B} \rangle = \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

Then:

1. $\langle \mathcal{B} \rangle$ is a filter on $X$ ([[def-filter]]);
2. $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, and
   $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$ for every filter
   $\mathcal{F}$ on $X$ with $\mathcal{B} \subseteq \mathcal{F}$, so
   $\langle \mathcal{B} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{B}$;
3. every filter $\mathcal{F}$ on $X$ is itself a filter base, and it generates
   itself: $\langle \mathcal{F} \rangle = \mathcal{F}$.

## Facts & Assumptions

**Given:** A set $X$, a filter base $\mathcal{B} \subseteq \mathcal{P}(X)$, and $\langle \mathcal{B} \rangle$ as displayed in the statement.

[A1] $\mathcal{B} \neq \emptyset$, $\emptyset \notin \mathcal{B}$, and for all $B_1, B_2 \in \mathcal{B}$ there is $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$ ([[def-filter-base]]).

[L1] A filter on $X$ is a family $\mathcal{F} \subseteq \mathcal{P}(X)$ with $X \in \mathcal{F}$, $\emptyset \notin \mathcal{F}$, $A \cap B \in \mathcal{F}$ whenever $A, B \in \mathcal{F}$, and $B \in \mathcal{F}$ whenever $A \in \mathcal{F}$ and $A \subseteq B \subseteq X$ ([[def-filter]]).

[L2] A filter base on $X$ is a nonempty family of subsets of $X$ that omits $\emptyset$ and is downward directed, the three conditions listed in [A1] ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Every member of $\langle \mathcal{B} \rangle$ is a subset of $X$ by definition, so $\langle \mathcal{B} \rangle \subseteq \mathcal{P}(X)$; and $X \in \langle \mathcal{B} \rangle$, since $\mathcal{B}$ has a member $B$ and $B \subseteq X$. [given, A1]

1.2 $\emptyset \notin \langle \mathcal{B} \rangle$: if $B \subseteq \emptyset$ for some $B \in \mathcal{B}$ then $B = \emptyset$, and $\emptyset \notin \mathcal{B}$. [given, A1]

1.3 $\langle \mathcal{B} \rangle$ is closed upward in $X$: if $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A$ with $B \in \mathcal{B}$, and $A \subseteq A' \subseteq X$, then $B \subseteq A'$, so $A' \in \langle \mathcal{B} \rangle$. [given]

1.4 $\langle \mathcal{B} \rangle$ is closed under pairwise intersection: given $A_1, A_2 \in \langle \mathcal{B} \rangle$ pick $B_1, B_2 \in \mathcal{B}$ with $B_i \subseteq A_i$, and then $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2 \subseteq A_1 \cap A_2 \subseteq X$, so $A_1 \cap A_2 \in \langle \mathcal{B} \rangle$. [given, A1]

1.5 $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, because $B \subseteq B$ and $B \subseteq X$ for every $B \in \mathcal{B}$. [given]

1.6 If $\mathcal{F}$ is a filter on $X$ with $\mathcal{B} \subseteq \mathcal{F}$ and $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A \subseteq X$ with $B \in \mathcal{B} \subseteq \mathcal{F}$, then upward closure of $\mathcal{F}$ gives $A \in \mathcal{F}$; hence $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$. [given, L1]

1.7 Every filter $\mathcal{F}$ on $X$ is a filter base: $X \in \mathcal{F}$ gives $\mathcal{F} \neq \emptyset$, properness gives $\emptyset \notin \mathcal{F}$, and for $B_1, B_2 \in \mathcal{F}$ the member $B_3 = B_1 \cap B_2$ of $\mathcal{F}$ satisfies $B_3 \subseteq B_1 \cap B_2$. [L1, L2]

2.1 $\langle \mathcal{B} \rangle$ satisfies all four filter axioms, so it is a filter on $X$. [step 1.1, step 1.2, step 1.3, step 1.4, L1]

2.2 For a filter $\mathcal{F}$ on $X$, applying step 1.5 and step 1.6 to the filter base $\mathcal{F}$ gives $\mathcal{F} \subseteq \langle \mathcal{F} \rangle$ and $\langle \mathcal{F} \rangle \subseteq \mathcal{F}$, that is $\langle \mathcal{F} \rangle = \mathcal{F}$. [step 1.7, step 1.5, step 1.6]

3.1 So $\langle \mathcal{B} \rangle$ is a filter containing $\mathcal{B}$ and contained in every filter that contains $\mathcal{B}$, hence the smallest such filter, and every filter is a filter base generating itself. [step 2.1, step 2.2, step 1.5, step 1.6] ∎

## Remarks

- The only place directedness (B3) is used is step 1.4, the intersection axiom.
  Drop it and the upward closure of $\mathcal{B}$ is still closed upward and still
  proper, but it need not be closed under intersection: on $X = \{0, 1\}$ the
  family $\mathcal{B} = \{\{0\}, \{1\}\}$ has upward closure
  $\{\{0\}, \{1\}, X\}$, which does not contain $\{0\} \cap \{1\} = \emptyset$ and
  is not a filter.
- Part 3 is what licenses the phrase "the filter generated by" being applied to a
  filter: generation is idempotent, so nothing is gained by generating twice.
- Smallest is meant in the inclusion order on $\mathrm{Filt}(X)$ and is a genuine
  least element of the set of filters containing $\mathcal{B}$, not merely a
  minimal one, since part 2 compares $\langle \mathcal{B} \rangle$ with every such
  filter. This is the opposite situation to [[def-ultrafilter]], where only
  maximality is available.
