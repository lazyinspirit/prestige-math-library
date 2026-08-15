---
id: lem-regularity-is-robust-under-small-edits
kind: lemma
title: "Regularity survives sufficiently small changes of vertices and cross-edges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-epsilon-regular-pair]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Exercise 2.1.6"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $0<\epsilon<\epsilon'\le1$. There is $\delta>0$ with the following property. If $(X,Y)$ is $\epsilon$-regular, $X',Y'$ are obtained by adding or deleting at most $\delta|X|$ and $\delta|Y|$ vertices respectively, and at most $\delta|X||Y|$ cross-edge incidences are changed, then $(X',Y')$ is $\epsilon'$-regular.

## Facts & Assumptions

**Given:** Parameters and an edited pair as in the Statement.

[L1] In an $\epsilon$-regular pair, every subpair meeting the $\epsilon$ relative-size thresholds has density within $\epsilon$ of the original density ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** contradiction.

1.1 Choose $\delta>0$ so small that $2\delta<\epsilon'-\epsilon$, $\delta<1/2$, and $20\delta/\epsilon^2<\epsilon'-\epsilon$. [given, choose]

2.1 Suppose, for contradiction, that $A'\subseteq X'$ and $B'\subseteq Y'$ witness failure of $\epsilon'$-regularity. Put $A=A'\cap X$ and $B=B'\cap Y$. The vertex-change bounds and step 1.1 give $|A|\ge\epsilon|X|$ and $|B|\ge\epsilon|Y|$. [assume-contra, step 1.1, algebra]

3.1 Removing the added vertices and accounting for the changed incidences changes either the witness density or the full-pair density by at most $10\delta/\epsilon^2$; this follows by dividing at most the affected rows, columns, and $\delta|X||Y|$ changed incidences by the lower bounds $|A'||B'|\ge\epsilon^2(1-\delta)^2|X||Y|$. [step 1.1, step 2.1, algebra]

4.1 Hence $|d(A,B)-d(X,Y)|>\epsilon'-20\delta/\epsilon^2>\epsilon$, contradicting [L1]. [step 3.1, L1, algebra]

5.1 The contradiction proves that every sufficiently small edit, in particular the chosen $\delta$, leaves the pair $\epsilon'$-regular. [step 4.1, discharge-contradiction] ∎
