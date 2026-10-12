---
id: lem-ordered-pairs-lie-in-the-double-power-set
kind: lemma
title: "If $a \\in A$ and $b \\in B$ then $(a,b) \\in \\mathcal{P}(\\mathcal{P}(A \\cup B))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-pair, def-power-set, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-subset-and-proper-subset, def-unordered-pair-and-singleton]
justified_by: []
aliases: []
landmark: false
short: "pairs live in the double power set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.4"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets. If $a \in A$ and $b \in B$, then
$(a,b) \in \mathcal{P}(\mathcal{P}(A \cup B))$.

## Facts & Assumptions

**Given:** sets $A$ and $B$, and elements $a \in A$ and $b \in B$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L6] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Proof

**Proof technique:** direct.

1.1 $a \in A$ gives $a \in A \cup B$, and $b \in B$ gives $b \in A \cup B$. [L3, L6, given]

2.1 The elements of $\{a\}$ are $a$ alone and the elements of $\{a,b\}$ are $a$ and $b$, so both sets are included in $A \cup B$ and are therefore elements of $\mathcal{P}(A \cup B)$. [L2, L4, L5, step 1.1]

3.1 The elements of $\{\{a\},\{a,b\}\}$ are $\{a\}$ and $\{a,b\}$, so that set is included in $\mathcal{P}(A \cup B)$ and is therefore an element of $\mathcal{P}(\mathcal{P}(A \cup B))$; and that set is $(a,b)$. [L1, L2, L4, L5, step 2.1] ∎
