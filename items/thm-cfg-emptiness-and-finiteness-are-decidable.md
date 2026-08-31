---
id: thm-cfg-emptiness-and-finiteness-are-decidable
kind: theorem
title: "CFG emptiness and finiteness are decidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-generated-by-a-cfg, thm-elimination-of-useless-symbols, thm-elimination-of-epsilon-productions, thm-elimination-of-unit-productions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 11"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html"
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Statement

Given a context-free grammar $G$, one can decide whether $L(G)$ is empty and
whether $L(G)$ is finite.

## Facts & Assumptions

**Given:** A context-free grammar $G=(V,\Sigma,P,S)$.

[L1] By [[def-language-generated-by-a-cfg]], the language of $G$ is the set of words derivable from the start symbol $S$.

[L2] By [[thm-elimination-of-useless-symbols]], useless symbols can be removed without changing the generated language.

[L3] By [[thm-elimination-of-epsilon-productions]], epsilon-productions can be removed except for the standard start-symbol exception.

[L4] By [[thm-elimination-of-unit-productions]], unit productions can be removed without changing the generated language.

## Proof

**Proof technique:** direct.

1.1 To decide emptiness, compute the least set of generating variables: start with variables that have a production to a terminal word, and repeatedly add a variable $A$ once some production $A\to\alpha$ has every variable occurring in $\alpha$ already marked generating. Because $V$ is finite, this fixed-point computation halts. By [L1], the language is empty exactly when the start variable $S$ never becomes generating. [L1, given, construct]

1.2 For finiteness, first replace $G$ by an equivalent grammar $G'$ using [L2], [L3], and [L4], so that every remaining variable is useful, there are no unit productions, and there are no epsilon-productions except possibly the start-symbol exception. Build the directed dependency graph on the variables of $G'$ with an edge $A\to B$ whenever some production for $A$ contains $B$ on its right-hand side. [L2, L3, L4, construct]

2.1 If some reachable variable $A$ lies on a directed cycle of this graph, then usefulness gives a terminal derivation from each variable on the cycle, while the removal of unit and nonstart epsilon-productions forces at least one terminal symbol to be added when the cycle is traversed once. Hence there is a derivation $A\Rightarrow_{G'}^* xAy$ with $|xy|\ge 1$. Repeating that cycle any number of times and then finishing to terminals yields words of arbitrarily large length in $L(G')=L(G)$, so the language is infinite. [L1, step 1.2]

2.2 Conversely, if the reachable part of the dependency graph is acyclic, then no root-to-leaf path in a parse tree can repeat a reachable variable. So parse trees have uniformly bounded depth. Because $G'$ has only finitely many productions and bounded branching, only finitely many parse trees can occur, and therefore only finitely many terminal yields occur. Thus $L(G)$ is finite. [step 1.2]

3.1 Step 1.1 decides emptiness, and steps 2.1-2.2 decide finiteness by a finite graph-cycle test. [step 1.1, step 2.1, step 2.2] ∎
