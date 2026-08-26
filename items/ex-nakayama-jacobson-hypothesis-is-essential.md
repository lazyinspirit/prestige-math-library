---
id: ex-nakayama-jacobson-hypothesis-is-essential
kind: example
title: "Over Z, the ideal (2) acts surjectively on Z/3Z but does not kill it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-jacobson-radical-of-a-ring, def-product-of-an-ideal-and-a-module, thm-integers-modulo-n-basic-algebra]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 3.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Take $R=\mathbb Z$, $I=(2)$, and $M=\mathbb Z/3\mathbb Z$. Then $IM=M$ but $M\neq0$, and $I \nsubseteq J(R)$. So Nakayama's conclusion fails if the Jacobson-radical hypothesis is removed.

## Facts & Assumptions

**Given:** The ring $R=\mathbb Z$, the ideal $I=(2)$, and the $R$-module $M=\mathbb Z/3\mathbb Z$.

[L1] The Jacobson radical is the intersection of the maximal ideals ([[def-jacobson-radical-of-a-ring]]).

[L2] The submodule $IM$ consists of finite sums of products $im$ ([[def-product-of-an-ideal-and-a-module]]).

[L3] In $\mathbb Z/3\mathbb Z$, multiplication by $2$ is a bijection because $[2]_3[2]_3=[1]_3$ ([[thm-integers-modulo-n-basic-algebra]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], every class in $\mathbb Z/3\mathbb Z$ is $2$ times another class, so $IM=M$. [L2, L3]

1.2 The module $M$ is nonzero because $[1]_3 \neq [0]_3$. Moreover $2 \notin J(\mathbb Z)$ because $2 \notin (3)$, while $(3)$ is a maximal ideal of $\mathbb Z$ and [L1] makes $J(\mathbb Z)$ lie in every maximal ideal. [L1, L3, algebra]

2.1 Thus $IM=M$ and $M\neq0$ hold with $I \nsubseteq J(R)$, exactly exhibiting why the Jacobson-radical hypothesis cannot be dropped. [step 1.1, step 1.2] ∎
