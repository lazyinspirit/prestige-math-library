---
id: thm-regular-expression-to-epsilon-nfa
kind: theorem
title: "Every regular expression has an equivalent epsilon-NFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-expression-denotation, lem-denotation-is-structurally-well-defined, def-nfa-with-epsilon-moves, def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

For every regular expression $R$ over an alphabet $\Sigma$, there exists an
epsilon-NFA $N_R$ over $\Sigma$ such that
$$ L(N_R)=\mathcal L(R). $$

## Facts & Assumptions

**Given:** A regular expression $R$ over $\Sigma$.

[L1] By [[def-regular-expression-denotation]], the denotation of a regular expression is computed from the denotations of its immediate subexpressions by the base, union, concatenation, and star clauses.

[L2] By [[lem-denotation-is-structurally-well-defined]], each regular expression has a uniquely determined denoted language.

[L3] By [[def-nfa-acceptance-and-recognized-language]], an epsilon-NFA recognizes exactly the words for which some computation reaches an accepting state after reading the whole word.

## Proof

**Proof technique:** direct.

1.1 We construct $N_R$ by induction on the structure of $R$, maintaining one designated start state and one designated accepting state, with that designated state as the entire accepting set. For the base expressions, use: a two-state gadget with no transition to its accepting state for $\varnothing$; a two-state gadget joined by one $\varepsilon$-edge for $\varepsilon$; and a two-state gadget with one $a$-edge for a letter $a\in\Sigma$. [given, construct]

2.1 For $R+S$, add a fresh start state with $\varepsilon$-edges to the starts of the machines for $R$ and $S$, and a fresh accepting state reached by $\varepsilon$-edges from their old accepting states; only the fresh state is accepting. For $RS$, connect the accepting state of the machine for $R$ to the start state of the machine for $S$ by an $\varepsilon$-edge, make the former nonaccepting, and retain only the accepting state of the machine for $S$. For $R^*$, add fresh start and accepting states, an $\varepsilon$-edge from the new start to the new accept, an $\varepsilon$-edge from the new start into the old start, and $\varepsilon$-edges from the old accept both back to the old start and to the new accept; only the new accept is accepting. [construct, step 1.1]

3.1 The base gadgets recognize exactly $\varnothing$, $\{\varepsilon\}$, and $\{a\}$. By [L3], the union gadget accepts exactly when one branch accepts, the concatenation gadget accepts exactly when a word splits into a word accepted by the first machine followed by one accepted by the second, and the star gadget accepts exactly when the input is a concatenation of finitely many words accepted by the submachine. Using [L1] and the uniqueness from [L2], the induction follows for every constructor. [L1, L2, L3, step 1.1, step 2.1, induction]

4.1 Hence the constructed epsilon-NFA $N_R$ recognizes precisely $\mathcal L(R)$. [step 3.1] ∎
