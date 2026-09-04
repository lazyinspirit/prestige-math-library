---
id: lem-rice-witness-machine-construction
kind: lemma
title: "A nontrivial extensional property admits a uniform witness machine construction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-index-set-and-extensional-machine-property, def-turing-machine-acceptance-problem, def-effective-encoding-of-turing-machines, lem-finite-tuples-admit-effective-prefix-free-encodings]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
    - title: "H. G. Rice, Classes of Recursively Enumerable Sets and Their Decision Problems"
      url: "https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6"
---

## Statement

Let $\mathcal P$ be a nontrivial extensional property of recognizable
languages. Then there exists a recognizable language $W$ such that $W$ and
$\varnothing$ lie on opposite sides of $\mathcal P$, and there is a total
computable map
$$ g:\{0,1\}^*\to\{0,1\}^* $$
with the following property: for every coded pair
$x=\langle\ulcorner M\urcorner,\widehat w\rangle$,
if $g(x)=\ulcorner N_x\urcorner$, then

- when $x\in A_{TM}$ one has $L(N_x)=W$, and
- when $x\notin A_{TM}$ one has $L(N_x)=\varnothing$.

## Facts & Assumptions

**Given:** A nontrivial extensional property $\mathcal P$.

[L1] A nontrivial extensional property has at least one recognizable witness language inside the property and at least one recognizable witness language outside it, by [[def-index-set-and-extensional-machine-property]].

[L2] A coded pair belongs to $A_{TM}$ exactly when the coded machine accepts the coded input word, by [[def-turing-machine-acceptance-problem]].

## Proof

**Proof technique:** direct.

1.1 If $\varnothing\notin\mathcal P$, choose a recognizable language $W\in\mathcal P$. If instead $\varnothing\in\mathcal P$, choose a recognizable language $W\notin\mathcal P$. In either case, this choice fixes a recognizable language $W$ that lies on the opposite side of $\mathcal P$ from $\varnothing$. [L1, given, construct]

2.1 Fix a recognizer $R_W$ for $W$. For each coded pair $x=\langle\ulcorner M\urcorner,\widehat w\rangle$, build a machine $N_x$ that on input $y$ simulates $M$ on $w$; if that simulation ever accepts, $N_x$ starts a simulation of $R_W$ on $y$, and if the simulation of $M$ never accepts then $N_x$ never accepts $y$. Because the code of $R_W$ is fixed and $x$ is inserted as data, the map $x\mapsto \ulcorner N_x\urcorner$ is total and computable. [L2, step 1.1, construct]

3.1 If $x\in A_{TM}$, then [L2] says that $M$ accepts $w$, so step 2.1 eventually releases the simulation of $R_W$ on every input $y$; hence $L(N_x)=W$. If $x\notin A_{TM}$, the simulation of $M$ on $w$ never accepts, so $N_x$ accepts no input and $L(N_x)=\varnothing$. This is exactly the required witness-machine construction. [L2, step 2.1] ∎
