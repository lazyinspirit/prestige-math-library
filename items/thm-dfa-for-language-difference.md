---
id: thm-dfa-for-language-difference
kind: theorem
title: "The product construction gives a DFA for language difference"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dfa-acceptance-and-recognized-language, def-language-boolean-operations, lem-extended-dfa-transition-respects-concatenation, thm-product-dfa-for-union-and-intersection]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $D_1$ and $D_2$ be DFA's over the same alphabet $\Sigma$, with recognized
languages $L_1$ and $L_2$. Then there is a DFA over $\Sigma$ recognizing
$$ L_1\setminus L_2. $$

## Facts & Assumptions

**Given:** Two DFA's $D_1=(Q_1,\Sigma,\delta_1,q_1,F_1)$ and
$D_2=(Q_2,\Sigma,\delta_2,q_2,F_2)$ over the same alphabet.

[L1] For languages over a fixed alphabet, the difference is
$L\setminus K$, by [[def-language-boolean-operations]].

[L2] The product construction tracks the two component runs in parallel, by
[[thm-product-dfa-for-union-and-intersection]].

[L3] A word is accepted exactly when its final state lies in the accepting set,
by [[def-dfa-acceptance-and-recognized-language]].

## Proof

**Proof technique:** direct.

1.1 Use the same product machine as in [L2], with state set $Q_1\times Q_2$, start state $(q_1,q_2)$, and product transition function. This machine reaches the pair of component states reached by $D_1$ and $D_2$ on the same input word. [L2, construct]

1.2 Declare a pair $(p,r)$ accepting exactly when $p\in F_1$ and $r\notin F_2$, that is, take accepting set $F:=F_1\times(Q_2\setminus F_2)$. [construct]

2.1 By step 1.1 and [L3], a word $w$ is accepted by this product machine exactly when $D_1$ accepts $w$ and $D_2$ does not accept $w$. [L3, step 1.1, step 1.2]

3.1 By [L1], that condition is exactly $w\in L_1\setminus L_2$. So the constructed machine recognizes the language difference. [L1, step 2.1] ∎
