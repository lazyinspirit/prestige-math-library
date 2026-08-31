---
id: lem-height-and-yield-bound-for-cnf-trees
kind: lemma
title: "A Chomsky-normal-form parse tree of height $h$ has yield length at most $2^{h-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-parse-tree-and-yield, def-chomsky-normal-form, def-nat-power]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Statement

Let $G$ be a context-free grammar in Chomsky normal form, and let $T$ be a
parse tree for $G$ of height $h\ge 1$. If $y(T)$ is the yield of $T$, then
$$ |y(T)|\le 2^{h-1}. $$

## Facts & Assumptions

**Given:** A Chomsky-normal-form grammar $G$ and a parse tree $T$ of height $h\ge 1$.

[L1] By [[def-parse-tree-and-yield]], the yield of a parse tree is the left-to-right list of its terminal leaves, and every internal node is labeled by a variable together with one production used at that node.

[L2] By [[def-chomsky-normal-form]], every production in a CNF grammar is either $A\to BC$, $A\to a$, or the exceptional start rule $S\to\varepsilon$.

## Proof

**Proof technique:** direct.

1.1 We induct on the height $h$. If $h=1$, then the root is already a leaf. By [L1], a leaf at the root can only be the variable leaf corresponding to the exceptional CNF rule $S\to\varepsilon$ from [L2]. Thus $y(T)=\varepsilon$, so $|y(T)|=0\le 1=2^0$. [L1, L2, given]

2.1 Suppose $h>1$. If the root uses a terminal production $A\to a$, then the yield has length $1$, so the bound is immediate. Otherwise the root uses a binary production $A\to BC$ by [L2]. The two child subtrees have heights at most $h-1$, so by the induction hypothesis each contributes at most $2^{h-2}$ terminal leaves. Therefore $|y(T)|\le 2^{h-2}+2^{h-2}=2^{h-1}$. [L1, L2, step 1.1, induction]

3.1 The bound holds for height $1$ and is preserved when the height increases, so every CNF parse tree of height $h$ has yield length at most $2^{h-1}$. [step 1.1, step 2.1] ∎
