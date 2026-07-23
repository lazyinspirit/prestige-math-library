---
id: lem-int-add-well-defined
kind: lemma
title: "Integer addition and negation are well defined"
status: draft
origin: session
deps: [def-integers, def-int-operations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - "T. Tao, Analysis I, 3rd ed., §4.1"
pipeline_run: null
---

## Statement

The operations $[(a,b)] + [(c,d)] = [(a+c, b+d)]$ and $-[(a,b)] = [(b,a)]$ on
$\mathbb{Z}$ ([[def-int-operations]]) are independent of the chosen
representatives.

## Proof

**Given:** Pairs with $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$ in the sense of [[def-integers]].
**Facts:**
[A1] Addition on $\mathbb{N}$ is commutative and associative.

1.1 By hypothesis $a + b' = b + a'$. [given]
1.2 By hypothesis $c + d' = d + c'$. [given]
2.1 Adding the two equations: $(a + b') + (c + d') = (b + a') + (d + c')$. [step 1.1, step 1.2, algebra]
2.2 Commuting the equation of step 1.1: $b + a' = a + b'$, which is the defining equation for $(b,a) \sim (b',a')$; negation is well defined. [step 1.1, A1]
3.1 Regrouping both sides: $(a+c) + (b'+d') = (b+d) + (a'+c')$, which is the defining equation for $(a+c,\, b+d) \sim (a'+c',\, b'+d')$; addition is well defined. [step 2.1, A1]
4.1 Both operations are independent of representatives. [step 3.1, step 2.2] ∎
