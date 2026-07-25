---
id: lem-union-of-chain-of-filters
kind: lemma
title: "The union of a nonempty chain of filters is a filter"
status: draft
origin: session
deps: [def-filter, def-chain, def-partial-order, def-upper-bound]
justified_by: []
aliases: []
landmark: false
short: "$\\bigcup\\mathcal{D}$ is a filter, $\\mathcal{D}\\neq\\emptyset$"
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
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal{D}$ be a **nonempty** chain ([[def-chain]]) in
the set of filters on $X$ ordered by inclusion ([[def-filter]],
[[def-partial-order]]): every member of $\mathcal{D}$ is a filter on $X$, and any
two members of $\mathcal{D}$ are comparable under $\subseteq$. Then
$\bigcup \mathcal{D}$ is a filter on $X$, and it is an upper bound of
$\mathcal{D}$ for inclusion.

The hypothesis $\mathcal{D} \neq \emptyset$ cannot be dropped:
$\bigcup \emptyset = \emptyset$ contains no set at all, in particular not $X$, so
it is not a filter.

## Facts & Assumptions

**Given:** A set $X$ and a nonempty family $\mathcal{D}$ of filters on $X$, any two members of which are comparable under inclusion.

[A1] $\mathcal{D} \neq \emptyset$; every $\mathcal{F} \in \mathcal{D}$ is a filter on $X$; and for all $\mathcal{F}_1, \mathcal{F}_2 \in \mathcal{D}$ either $\mathcal{F}_1 \subseteq \mathcal{F}_2$ or $\mathcal{F}_2 \subseteq \mathcal{F}_1$ ([[def-chain]]).

[L1] A filter on $X$ is a family of subsets of $X$ containing $X$, omitting $\emptyset$, closed under pairwise intersection, and closed upward in $X$ ([[def-filter]]).

[L2] Inclusion is a partial order on any set of sets ([[def-partial-order]]), and $u$ is an upper bound of $S$ when $s \subseteq u$ for every $s \in S$ ([[def-upper-bound]]).

## Proof

**Proof technique:** direct.

1.1 Fix a member $\mathcal{F}_{\ast} \in \mathcal{D}$, which exists because $\mathcal{D}$ is nonempty. [A1, choose]

1.2 $\bigcup \mathcal{D} \subseteq \mathcal{P}(X)$: a member of the union belongs to some filter on $X$, hence is a subset of $X$. [A1, L1]

1.3 $\emptyset \notin \bigcup \mathcal{D}$: a member of the union belongs to some $\mathcal{F} \in \mathcal{D}$, and $\emptyset \notin \mathcal{F}$. [A1, L1]

1.4 $\bigcup \mathcal{D}$ is closed upward in $X$: if $A \in \mathcal{F} \in \mathcal{D}$ and $A \subseteq B \subseteq X$ then $B \in \mathcal{F} \subseteq \bigcup \mathcal{D}$. [A1, L1]

1.5 $\bigcup \mathcal{D}$ is closed under pairwise intersection: let $A \in \mathcal{F}_1$ and $B \in \mathcal{F}_2$ with $\mathcal{F}_1, \mathcal{F}_2 \in \mathcal{D}$; comparability puts one of the two inside the other, so $A$ and $B$ both belong to the larger one, which contains $A \cap B$, and $A \cap B \in \bigcup \mathcal{D}$. [A1, L1]

1.6 Every $\mathcal{F} \in \mathcal{D}$ satisfies $\mathcal{F} \subseteq \bigcup \mathcal{D}$, so $\bigcup \mathcal{D}$ is an upper bound of $\mathcal{D}$ for inclusion. [A1, L2]

1.7 If instead $\mathcal{D} = \emptyset$ then $\bigcup \mathcal{D} = \emptyset$, which fails the requirement $X \in \bigcup \mathcal{D}$, so nonemptiness of $\mathcal{D}$ is genuinely used and cannot be removed. [L1]

2.1 $X \in \bigcup \mathcal{D}$, because $X \in \mathcal{F}_{\ast}$ and $\mathcal{F}_{\ast} \subseteq \bigcup \mathcal{D}$. [step 1.1, A1, L1]

3.1 So $\bigcup \mathcal{D}$ satisfies all four filter axioms and is an upper bound of $\mathcal{D}$: it is a filter on $X$ above every member of $\mathcal{D}$. [step 2.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, L1] ∎

## Remarks

- **Nonemptiness is used exactly once**, at step 1.1, and only for the axiom $X \in \bigcup \mathcal{D}$. The other three axioms hold vacuously for the empty chain, which is precisely why the failure is easy to overlook: three of the four checks go through and the one that does not is the one nobody writes out.
- This is the chain-bound half of the hypothesis of Zorn's lemma ([[thm-zorn]]), and the empty chain is the other half. In [[thm-ultrafilter-lemma]] the empty chain is bounded not by this lemma but by the given filter $\mathcal{F}_0$, which is why that proof must treat the two cases separately.
- Unions of chains are used rather than unions of arbitrary families because an arbitrary union of filters is almost never a filter: for $x \neq y$ the union of the principal filters at $x$ and at $y$ contains $\{x\}$ and $\{y\}$ but not $\emptyset = \{x\} \cap \{y\}$, so it is not closed under intersection. Comparability at step 1.5 is what repairs this.
