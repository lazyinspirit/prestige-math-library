---
id: thm-elimination-of-unit-productions
kind: theorem
title: "Unit productions can be eliminated"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nullable-generating-and-reachable-variable, thm-elimination-of-epsilon-productions, def-language-generated-by-a-cfg]
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

A **unit production** is a production $A\to B$ whose left- and right-hand sides
are both single variables.

For every context-free grammar $G$ there exists a context-free grammar $H$ such
that $L(H)=L(G)$ and $H$ has no unit productions.

## Facts & Assumptions

**Given:** A context-free grammar $G$.

[L1] By [[thm-elimination-of-epsilon-productions]], we may first replace $G$ by
an equivalent grammar whose only possible $\varepsilon$-production is a special
start-symbol rule.

[L2] The generated language is defined by derivability from the start symbol, by
[[def-language-generated-by-a-cfg]].

## Proof

**Proof technique:** direct.

1.1 Replace $G$ by an equivalent grammar $G_1$ as in [L1]. For variables $A,B$, write $A\leadsto B$ when $A\Rightarrow_{G_1}^* B$ using only unit productions. Now form $H$ by deleting all unit productions and, whenever $A\leadsto B$ and $B\to\alpha$ is a nonunit production of $G_1$, adding the copied production $A\to\alpha$. [L1, construct]

2.1 Any derivation of a terminal word in $G_1$ can be compressed to a derivation in $H$ by replacing each maximal block of unit productions followed by one nonunit production $B\to\alpha$ with the copied rule $A\to\alpha$ placed into $H$. Therefore every word of $L(G_1)$ lies in $L(H)$. [step 1.1, L2]

2.2 Conversely, every copied production $A\to\alpha$ of $H$ came from some unit chain $A\leadsto B$ in $G_1$ and a nonunit production $B\to\alpha$ of $G_1$. Expanding one use of $A\to\alpha$ back into that unit chain followed by $B\to\alpha$ turns any derivation in $H$ into a derivation in $G_1$. So every word of $L(H)$ lies in $L(G_1)$. [step 1.1, L2]

3.1 Steps 2.1 and 2.2 give $L(H)=L(G_1)=L(G)$, and $H$ has no unit productions by construction. [L1, step 2.1, step 2.2] ∎
