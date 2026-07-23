---
id: lem-int-equivalence
kind: lemma
title: "The integer-defining relation is an equivalence relation"
status: published
origin: session
deps: [def-integers]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The relation $(a,b) \sim (c,d) \iff a + d = b + c$ on
$\mathbb{N} \times \mathbb{N}$ ([[def-integers]]) is an equivalence relation.

## Facts & Assumptions

**Given:** The relation $(a,b) \sim (c,d) \iff a + d = b + c$ on $\mathbb{N} \times \mathbb{N}$.

[A1] Addition on $\mathbb{N}$ is commutative and associative.

[A2] Cancellation in $\mathbb{N}$: if $x + z = y + z$ then $x = y$.

## Proof

**Proof technique:** direct.

1.1 Reflexivity: for any $(a,b)$ we have $a + b = b + a$, so $(a,b) \sim (a,b)$. [A1]

1.2 Symmetry: suppose $(a,b) \sim (c,d)$, i.e. $a + d = b + c$. Then $c + b = d + a$, which is the defining equation for $(c,d) \sim (a,b)$. [A1]

1.3 Suppose $(a,b) \sim (c,d)$ and $(c,d) \sim (e,f)$, i.e. $a + d = b + c$ and $c + f = d + e$. [given]

2.1 Adding the two equations: $(a + d) + (c + f) = (b + c) + (d + e)$. [step 1.3, algebra]

3.1 Regrouping both sides: $(a + f) + (c + d) = (b + e) + (c + d)$. [step 2.1, A1]

4.1 Cancelling $(c + d)$: $a + f = b + e$, so $(a,b) \sim (e,f)$; the relation is transitive. [step 3.1, A2]

5.1 The relation is reflexive, symmetric, and transitive, hence an equivalence relation. [step 1.1, step 1.2, step 4.1] ∎
