---
id: lem-cut-archimedean
kind: lemma
title: "The Dedekind reals are Archimedean"
status: published
origin: session
deps: [def-real-dedekind, def-cut-order, lem-rat-cut-embeds, lem-rat-archimedean, thm-reals-dedekind-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{R}$ (Dedekind cuts) is **Archimedean**: for every cut $A$ there is a
natural number $n$ with $A < n^{*}$. Equivalently, the rational cuts
$(n^{*})_{n \in \mathbb{N}}$ are cofinal in $\mathbb{R}$: no single cut is an
upper bound for all of them.

## Facts & Assumptions

**Given:** A cut $A$.

[L1] A cut is a proper subset of $\mathbb{Q}$ ($A \ne \mathbb{Q}$), and $a \in A$, $b \notin A \Rightarrow a < b$ ([[def-real-dedekind]]).

[L2] Rational Archimedean property: for every $q \in \mathbb{Q}$ there is a natural number $n$ with $n > q$ ([[lem-rat-archimedean]]).

[L3] The embedding preserves order: $p < q \Rightarrow p^{*} \subsetneq q^{*}$, i.e. $p^{*} < q^{*}$ ([[lem-rat-cut-embeds]]).

[L4] Inclusion order, and transitivity of $<$ in the totally ordered field ([[def-cut-order]], [[thm-reals-dedekind-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $A \ne \mathbb{Q}$, choose a rational $q \notin A$. [L1, choose]

1.2 By the rational Archimedean property, choose a natural number $n$ with $n > q$. [L2, choose]

2.1 $A \subseteq q^{*}$: for $a \in A$, the separation property gives $a < q$ (as $q \notin A$), so $a \in q^{*}$. [step 1.1, L1]

2.2 $q^{*} < n^{*}$: from $q < n$ and order preservation, $q^{*} \subsetneq n^{*}$. [step 1.2, L3]

3.1 Hence $A \subseteq q^{*} \subsetneq n^{*}$, so $A < n^{*}$: the rational cuts are cofinal and $\mathbb{R}$ is Archimedean. [step 2.1, step 2.2, L4] ∎
