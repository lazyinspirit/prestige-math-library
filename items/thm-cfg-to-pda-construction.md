---
id: thm-cfg-to-pda-construction
kind: theorem
title: "Every context-free grammar has an equivalent PDA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-context-free-grammar, def-language-generated-by-a-cfg, def-leftmost-and-rightmost-derivation, def-pda-acceptance-by-empty-stack]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $G=(V,\Sigma,P,S)$ be a context-free grammar. Then there exists a PDA
$M_G$ such that
$$ N(M_G)=L(G). $$

## Facts & Assumptions

**Given:** A context-free grammar $G=(V,\Sigma,P,S)$.

[L1] By [[def-language-generated-by-a-cfg]], $L(G)$ is the set of terminal words derivable from the start variable $S$.

[L2] By [[def-leftmost-and-rightmost-derivation]], a leftmost derivation rewrites the leftmost variable at each production step.

[L3] By [[def-pda-acceptance-by-empty-stack]], a PDA accepts by empty stack exactly when some full computation consumes the input and empties the stack.

## Proof

**Proof technique:** direct.

1.1 Define a one-state PDA $M_G$ whose initial stack symbol is $S$. If the top stack symbol is a variable $A$ and $A\to\alpha$ is a production of $G$, the machine has an $\varepsilon$-move replacing $A$ by $\alpha$; if the top stack symbol is a terminal $a$, the machine may read an input symbol $a$ and pop it. [given, construct]

2.1 Every leftmost derivation of a word $w$ in $G$ yields an accepting computation of $M_G$: keep the current sentential form on the stack, use the step from 1.1 to expand its leftmost variable exactly as the derivation does, and then match terminals against the input once only terminals remain on top. Therefore [L1], [L2], and [L3] give $L(G)\subseteq N(M_G)$. [L1, L2, L3, step 1.1]

2.2 Conversely, every accepting computation of $M_G$ determines a leftmost derivation in $G$, because the only $\varepsilon$-moves replace the current top variable by the right-hand side of one production and the only input-consuming moves match the current top terminal against the next input symbol. Reading those stack-replacement moves in order reconstructs a leftmost derivation of the accepted word. Hence $N(M_G)\subseteq L(G)$. [L1, L2, L3, step 1.1]

3.1 Steps 2.1 and 2.2 prove $N(M_G)=L(G)$. [step 2.1, step 2.2] ∎
