---
id: cex-free-ultrafilter-finitely-additive-probability
kind: counterexample
title: "A free ultrafilter induces a finitely additive zero-one probability that is not countably additive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-additive-set-function, thm-ultrafilter-lemma, def-ultrafilter, thm-ultrafilter-characterisation, def-filter-base, lem-filter-base-generates, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-discrete, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Galvin, Ultrafilters, with Applications to Analysis, Social Choice and Combinatorics, §2"
      url: "https://www3.nd.edu/~dgalvin1/pdf/ultrafilters.pdf"
pipeline_run: null
---

## Statement refuted

A finitely additive set function of total mass $1$ need not be countably additive, even when it takes only the values $0$ and $1$. Assuming the Axiom of Choice, a free ultrafilter on $\mathbb N$ gives such a set function.

## Facts & Assumptions

**Given:** The Axiom of Choice and the tails $B_n=\{k\in\mathbb N:n\le k\}$.

[L1] A filter base is nonempty, excludes $\varnothing$, and is downward directed; its upward closure is the filter it generates ([[def-filter-base]], [[lem-filter-base-generates]]).

[L2] Under the Axiom of Choice, every filter is contained in an ultrafilter ([[def-axiom-of-choice]], [[thm-ultrafilter-lemma]]), and an ultrafilter contains exactly one of each set and its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).

[L3] The natural numbers begin at $0$ ([[def-natural-numbers]]), their order is total ([[def-nat-order]], [[thm-nat-linear-order]]), and $n+1$ is the immediate successor of $n$ ([[lem-nat-discrete]]).

[L4] A finitely additive nonnegative set function vanishes at the empty set and is additive on disjoint pairs ([[def-finitely-additive-set-function]]).

## Counterexample

**Proof technique:** direct.

1.1 The family $\mathcal B=\{B_n:n\in\mathbb N\}$ is a filter base: $B_0=\mathbb N$, no tail is empty, and $B_{\max(m,n)}\subseteq B_m\cap B_n$. Let $\mathcal F=\langle\mathcal B\rangle$. [given, L1, L3]

2.1 By [L2], extend $\mathcal F$ to an ultrafilter $\mathcal U$. It is free: if $\{m\}\in\mathcal U$, then $B_{m+1}\in\mathcal F\subseteq\mathcal U$, so closure under intersections would put $\varnothing=\{m\}\cap B_{m+1}$ in the filter. [step 1.1, L2, L3]

3.1 Define $q(A)=1$ when $A\in\mathcal U$ and $q(A)=0$ otherwise. Then $q(\varnothing)=0$ and $q(\mathbb N)=1$. [step 2.1, L2]

4.1 If $A,B$ are disjoint, then $A\cup B\in\mathcal U$ exactly when one of $A,B$ lies in $\mathcal U$: the reverse implication is upward closure; for the forward implication, if $A\notin\mathcal U$, then $A^c\in\mathcal U$ and $(A\cup B)\cap A^c=B$ lies in $\mathcal U$. Disjointness prevents both from lying in $\mathcal U$. Thus $q(A\cup B)=q(A)+q(B)$, so $q$ is finitely additive. [step 2.1, step 3.1, L2, L4]

4.2 Every singleton has value $0$ because $\mathcal U$ is free, but their disjoint union is $\mathbb N$ and has value $1$. Hence countable additivity fails. [step 2.1, step 3.1, L3]

5.1 Steps 4.1 and 4.2 give a finitely additive zero-one probability that is not countably additive, refuting the proposed implication. [step 4.1, step 4.2] ∎
