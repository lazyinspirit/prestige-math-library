---
id: lem-total-variation-seminorm-laws
kind: lemma
title: "Homogeneity and subadditivity of total variation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-variation-and-total-variation, def-partition-and-refinement,
       def-finite-sum, lem-finite-sum-laws, lem-of-abs-value,
       lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

For bounded-variation functions $f,g:[a,b]\to\mathbb R$ and $c\in\mathbb R$,

$$\operatorname{Var}(cf)=|c|\operatorname{Var}(f),\qquad \operatorname{Var}(f+g)\le\operatorname{Var}(f)+\operatorname{Var}(g).$$

Thus $-f$, $f+g$, and every finite linear combination of BV functions are BV;
in particular $\operatorname{Var}(-f)=\operatorname{Var}(f)$.

## Facts & Assumptions

**Given:** BV functions $f,g:[a,b]\to\mathbb R$ and a scalar $c$.

[L1] Total variation is the supremum of partition variation sums ([[def-bounded-variation-and-total-variation]]).

[L2] A partition is a finite increasing point list ([[def-partition-and-refinement]]).

[L3] Finite sums distribute over scalar multiplication and addition ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] $|cu|=|c||u|$ ([[lem-of-abs-value]]).

[L5] $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 For every partition $P$, [L4] and [L3] give $V(cf,P)=|c|V(f,P)$. Taking suprema gives $\operatorname{Var}(cf)=|c|\operatorname{Var}(f)$, including $c=0$ and the singleton interval. [L1, L2, L3, L4]

1.2 For every partition, [L5] applied to each increment and then [L3] give $V(f+g,P)\le V(f,P)+V(g,P)\le\operatorname{Var}(f)+\operatorname{Var}(g)$. Taking the supremum proves subadditivity. [L1, L2, L3, L5]

2.1 Step 1.1 with $c=-1$ gives $\operatorname{Var}(-f)=\operatorname{Var}(f)$. Repeated use of steps 1.1 and 1.2 proves closure under every finite linear combination. [step 1.1, step 1.2, L3] ∎
