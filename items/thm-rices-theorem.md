---
id: thm-rices-theorem
kind: theorem
title: "Every nontrivial extensional property of Turing-machine languages is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-many-one-reduction, def-index-set-and-extensional-machine-property, lem-rice-witness-machine-construction, thm-machine-acceptance-is-undecidable]
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. G. Rice, Classes of Recursively Enumerable Sets and Their Decision Problems"
      url: "https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6"
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement

Let $\mathcal P$ be a nontrivial extensional property of recognizable
languages. Then its index set
$$ I_{\mathcal P}=\{\ulcorner M\urcorner : L(M)\in\mathcal P\} $$
is undecidable.

## Facts & Assumptions

**Given:** A nontrivial extensional property $\mathcal P$ and its index set $I_{\mathcal P}$.

[L1] For such a property, [[lem-rice-witness-machine-construction]] gives a recognizable language $W$ opposite to $\varnothing$ with respect to $\mathcal P$ and a total computable map $g$ such that $x\in A_{TM}$ implies $L(N_x)=W$ while $x\notin A_{TM}$ implies $L(N_x)=\varnothing$. 

[L2] The language $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Proof

**Proof technique:** contradiction.

1.1 Assume for contradiction that $I_{\mathcal P}$ is decidable. Fix the map $g$ and the language $W$ from [L1]. Because $W$ and $\varnothing$ lie on opposite sides of $\mathcal P$, exactly one of the two conditions $W\in\mathcal P$ and $\varnothing\in\mathcal P$ holds. [assume-contra, L1, given]

2.1 On input $x$, compute $g(x)=\ulcorner N_x\urcorner$ and run the assumed decider for $I_{\mathcal P}$ on that code. If $W\in\mathcal P$, answer exactly as the decider answers; if $\varnothing\in\mathcal P$, flip the decider's answer. By [L1], this procedure accepts exactly those $x$ in $A_{TM}$, so it decides $A_{TM}$. [L1, step 1.1, construct]

3.1 Step 2.1 contradicts [L2]. Therefore the assumption in step 1.1 was false, and $I_{\mathcal P}$ is undecidable. [L2, step 2.1, contradiction, discharge-contradiction: a decider for the index set would decide A_TM] ∎

