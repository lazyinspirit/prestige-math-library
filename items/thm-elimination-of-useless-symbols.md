---
id: thm-elimination-of-useless-symbols
kind: theorem
title: "Eliminating useless symbols preserves the generated language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nullable-generating-and-reachable-variable, def-language-generated-by-a-cfg]
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

For every context-free grammar $G$ there exists a context-free grammar $G'$
such that $L(G')=L(G)$ and either:

1. $L(G)=\varnothing$ and $G'$ is the evident empty-language grammar, or
2. every variable of $G'$ is both generating and reachable.

## Facts & Assumptions

**Given:** A context-free grammar $G=(V,\Sigma,P,S)$.

[L1] Variables may be nullable, generating, reachable, or useful exactly as in
[[def-nullable-generating-and-reachable-variable]].

[L2] The generated language is
$L(G)=\{w\in\Sigma^*:S\Rightarrow_G^* w\}$, by
[[def-language-generated-by-a-cfg]].

## Proof

**Proof technique:** direct.

1.1 Let $T\subseteq V$ be the generating variables of $G$, and let $P_1$ consist of the productions whose left-hand side lies in $T$ and whose right-hand side contains no variable outside $T$. If $S\notin T$, then no terminal word is derivable from $S$, so [L2] gives $L(G)=\varnothing$ and we may take $G'$ to be any fixed grammar generating the empty language. If $S\in T$, set $G_1:=(T,\Sigma,P_1,S)$. [L1, L2, given, construct]

1.2 In the case $S\in T$, let $R\subseteq T$ be the variables reachable from $S$ in $G_1$, let $P_2$ consist of the productions in $P_1$ whose left-hand side lies in $R$ and whose right-hand side contains no variable outside $R$, and set $G_2:=(R,\Sigma,P_2,S)$. Every derivation beginning at $S$ stays inside $R$ by definition of reachability. [L1, given, construct]

2.1 Assume now that $S\in T$. Any derivation of a terminal word can use only generating variables, because every variable appearing in that derivation must eventually derive a terminal subword. Conversely, every rule kept in $G_1$ was already a rule of $G$. Hence $L(G_1)=L(G)$. [L1, L2, step 1.1]

3.1 Therefore deleting the unreachable variables changes no derivation from $S$ to a terminal word, while every variable remaining in $G_2$ is both generating and reachable. So $L(G_2)=L(G_1)=L(G)$. [step 2.1, step 1.2]

4.1 Taking $G'=G_2$ in the case $S\in T$ and the empty-language grammar in the case $S\notin T$ proves the theorem. [step 1.1, step 3.1] ∎
