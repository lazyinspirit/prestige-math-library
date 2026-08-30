---
id: thm-elimination-of-epsilon-productions
kind: theorem
title: "Epsilon-productions can be eliminated except possibly at the start symbol"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nullable-generating-and-reachable-variable, def-language-generated-by-a-cfg]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

For every context-free grammar $G$ there exists a context-free grammar $G_\varepsilon$
such that:

1. $G_\varepsilon$ has no $\varepsilon$-productions and
   $$ L(G_\varepsilon)=L(G)\setminus\{\varepsilon\}. $$
2. If $\varepsilon\in L(G)$, then there exists a context-free grammar $G'$ with
   $L(G')=L(G)$ whose only $\varepsilon$-production is a start-symbol rule
   $S_0\to\varepsilon$, where $S_0$ does not occur on any right-hand side.

## Facts & Assumptions

**Given:** A context-free grammar $G=(V,\Sigma,P,S)$.

[L1] A variable is nullable exactly when it derives $\varepsilon$, by
[[def-nullable-generating-and-reachable-variable]].

[L2] The generated language is defined by derivability from the start symbol, by
[[def-language-generated-by-a-cfg]].

## Proof

**Proof technique:** direct.

1.1 Let $N$ be the nullable variables of $G$. Form a grammar $G_\varepsilon$ by deleting every production $A\to\varepsilon$ and, for each remaining production $A\to x_1\cdots x_k$, adding every nonempty right-hand side obtained by deleting any chosen subset of nullable occurrences among the $x_i$. [L1, construct]

1.2 If $\varepsilon\notin L(G)$, clause 1 already proves the theorem. Assume instead that $\varepsilon\in L(G)$. Introduce a fresh start variable $S_0$ and add the two productions $S_0\to S$ and $S_0\to\varepsilon$, leaving all productions of $G_\varepsilon$ unchanged. [given, construct]

2.1 Any derivation of a nonempty terminal word in $G$ can be shortened to one in $G_\varepsilon$ by collapsing each maximal family of nullable subderivations into a single use of one of the added productions. Conversely, every added production in $G_\varepsilon$ can be expanded back in $G$ by re-inserting derivations of the deleted nullable variables to $\varepsilon$. Therefore [L2] gives $L(G_\varepsilon)=L(G)\setminus\{\varepsilon\}$. [L1, L2, step 1.1]

3.1 The rule $S_0\to\varepsilon$ restores the missing empty word, while step 2.1 already preserved every nonempty terminal word. Because $S_0$ is fresh, it appears on no right-hand side, so this is the only $\varepsilon$-production of the new grammar $G'$. Hence $L(G')=L(G)$. [step 2.1, step 1.2] ∎
