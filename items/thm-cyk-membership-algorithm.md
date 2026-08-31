---
id: thm-cyk-membership-algorithm
kind: theorem
title: "The CYK algorithm decides membership for CNF grammars"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-cyk-table-invariant, def-language-generated-by-a-cfg]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Statement

Let $G=(V,\Sigma,P,S)$ be a grammar in Chomsky normal form.

- On input $\varepsilon$, accept exactly when $S\to\varepsilon$ is a production
  of $G$.
- On input a nonempty word $w=a_1\cdots a_n$, fill the CYK table of $G$ on $w$
  and accept exactly when $S\in T[1,n]$.

This procedure decides whether $w\in L(G)$.

## Facts & Assumptions

**Given:** A CNF grammar $G=(V,\Sigma,P,S)$ and an input word $w$.

[L1] By [[lem-cyk-table-invariant]], for a nonempty input word, $A\in T[i,\ell]$ exactly when $A$ derives the corresponding span.

[L2] By [[def-language-generated-by-a-cfg]], a word lies in $L(G)$ exactly when it is derivable from the start symbol $S$.

## Proof

**Proof technique:** direct.

1.1 If $w=\varepsilon$, then by the definition of Chomsky normal form the only way to derive $\varepsilon$ is the exceptional start production $S\to\varepsilon$. So the empty-word branch is correct. [L2, given]

1.2 Suppose $w=a_1\cdots a_n$ is nonempty. By [L1], the condition $S\in T[1,n]$ is equivalent to $S\Rightarrow_G^* w$. By [L2], that is equivalent to $w\in L(G)$. Therefore the table branch accepts exactly the generated nonempty words. [L1, L2, given]

2.1 The two branches together decide membership in $L(G)$. [step 1.1, step 1.2] ∎
