---
id: lem-variation-additive-on-subintervals
kind: lemma
title: "Total variation is additive over adjacent subintervals and decreases under restriction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-variation-and-total-variation, def-partition-and-refinement,
       def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field,
       lem-sup-unique, def-interval]
justified_by: []
aliases: []
landmark: true
short: "variation is interval-additive"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $a\le c\le b$ and $f:[a,b]\to\mathbb R$, then $f$ has bounded variation on
$[a,b]$ if and only if its restrictions have bounded variation on $[a,c]$ and
$[c,b]$. In that case

$$\operatorname{Var}_{[a,b]}(f)=\operatorname{Var}_{[a,c]}(f)+\operatorname{Var}_{[c,b]}(f).$$

Consequently restriction to any subinterval cannot increase total variation.

## Facts & Assumptions

**Given:** Reals $a\le c\le b$ and a function $f:[a,b]\to\mathbb R$.

[L1] Total variation is the supremum of finite variation sums, and singleton variation is $0$ ([[def-bounded-variation-and-total-variation]]).

[L2] A partition is a finite strictly increasing endpoint list, and a refinement contains every point of the original partition ([[def-partition-and-refinement]]).

[L3] Finite sums telescope and split at an index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] A supremum is the least upper bound of a nonempty set bounded above, and is unique ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L5] Closed subintervals are the sets $[u,v]=\{x:u\le x\le v\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Given partitions $P_1$ of $[a,c]$ and $P_2$ of $[c,b]$, splice their point lists at $c$. The resulting partition $P$ of $[a,b]$ satisfies $V(f,P)=V(f,P_1)+V(f,P_2)$. Thus, whenever $f$ is BV on $[a,b]$, each restriction is BV and $\operatorname{Var}_{[a,c]}(f)+\operatorname{Var}_{[c,b]}(f)\le\operatorname{Var}_{[a,b]}(f)$. The assertion is unchanged when $c=a$ or $c=b$, because the singleton term is $0$. [L1, L2, L3, L5]

1.2 Conversely, insert $c$ into an arbitrary partition $P$ of $[a,b]$. The refined sum splits into a sum on $[a,c]$ and one on $[c,b]$, while inserting a point leaves the original sum unchanged because the corresponding increment is replaced by two increments whose absolute values dominate it. Hence $V(f,P)\le\operatorname{Var}_{[a,c]}(f)+\operatorname{Var}_{[c,b]}(f)$. [L1, L2, L3]

2.1 Taking the supremum over $P$ in step 1.2 and combining it with step 1.1 proves the equality and the equivalence of boundedness. Applying the equality twice to $[u,v]\subseteq[a,b]$ shows $\operatorname{Var}_{[u,v]}(f)\le\operatorname{Var}_{[a,b]}(f)$. [step 1.1, step 1.2, L1, L4, L5] ∎
