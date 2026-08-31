---
id: thm-cfls-are-closed-under-reversal
kind: theorem
title: "Context-free languages are closed under reversal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-context-free-grammar, def-language-generated-by-a-cfg, def-word-and-language-reversal, thm-derivation-parse-tree-correspondence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 11"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html"
---

## Statement

If $L\subseteq\Sigma^*$ is context-free, then its reversal
$$ L^R:=\{w^R:w\in L\} $$
is also context-free.

## Facts & Assumptions

**Given:** A context-free language $L$.

[L1] By [[def-context-free-grammar]], a context-free grammar is a finite set of productions $A\to\alpha$ with one variable on the left.

[L2] By [[def-language-generated-by-a-cfg]], a language is context-free exactly when some CFG generates it.

[L3] By [[def-word-and-language-reversal]], reversing a word reverses the order of its letters, and $L^R$ is the set of reversals of words of $L$.

[L4] By [[thm-derivation-parse-tree-correspondence]], parse trees and derivations determine exactly the generated words of a CFG.

## Proof

**Proof technique:** direct.

1.1 Choose a grammar $G=(V,\Sigma,P,S)$ with $L=L(G)$ by [L2]. Define a new grammar $G^R=(V,\Sigma,P^R,S)$ by putting a production $A\to \alpha^R$ in $P^R$ whenever $A\to\alpha$ belongs to $P$. This is again a context-free grammar by [L1]. [L1, L2, given, construct]

2.1 Mirror every parse tree of $G$ by reversing the left-to-right order of the children at each internal node. The mirrored tree uses exactly the reversed productions from step 1.1, so by [L4] it is a parse tree of $G^R$. Its yield is the reversal of the original yield, by [L3]. Therefore $w\in L$ implies $w^R\in L(G^R)$. Mirroring back proves the converse implication. [L3, L4, step 1.1]

3.1 Hence $L(G^R)=L^R$, so $L^R$ is context-free by [L2]. [L2, step 2.1] ∎
