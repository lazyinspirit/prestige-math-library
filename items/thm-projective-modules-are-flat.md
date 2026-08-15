---
id: thm-projective-modules-are-flat
kind: theorem
title: "Every projective module over a commutative ring is flat"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-flatness-criteria-by-injections-and-ideals, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, thm-projective-module-characterizations, prop-functoriality-of-module-tensor-products]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Barr, Acyclic Models, Chapter 2"
      url: "https://math.mit.edu/~hrm/palestine/barr-acyclic-models.pdf"
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Statement

Every projective module over a commutative ring is flat. This implication requires no form of the Axiom of Choice.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a projective $R$-module $P$.

[L1] A module is flat exactly when tensoring with it preserves injections ([[thm-flatness-criteria-by-injections-and-ideals]]).

[L2] Tensor products commute with arbitrary direct sums in either variable; in particular $A\otimes_R\bigoplus_{x\in X}R\cong\bigoplus_{x\in X}(A\otimes_RR)$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L3] The regular module is a tensor unit ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L4] Every projective module is, without choice, a direct summand of its canonical free cover ([[thm-projective-module-characterizations]]).

[L5] Tensor maps preserve identities and compositions ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Every free module $F=\bigoplus_{x\in X}R$ is flat: for an injection $u:A\to B$, [L2] and [L3] identify $u\otimes1_F$ with the direct sum of copies of $u$, which is injective coordinatewise; now apply [L1]. [L1, L2, L3]

1.2 By [L4], there are a free module $F$ and homomorphisms $i:P\to F$, $p:F\to P$ with $p i=\operatorname{id}_P$. [given, L4]

2.1 Let $u:A\to B$ be injective and suppose $x\in A\otimes_RP$ satisfies $(u\otimes1_P)(x)=0$. Functoriality [L5] gives $(u\otimes1_F)((1_A\otimes i)(x))=(1_B\otimes i)((u\otimes1_P)(x))=0$. [step 1.2, L5]

3.1 The map $u\otimes1_F$ is injective by step 1.1, so $(1_A\otimes i)(x)=0$; applying $1_A\otimes p$ and using $(1_A\otimes p)(1_A\otimes i)=1_A\otimes(pi)=\operatorname{id}$ gives $x=0$. [step 1.1, step 1.2, step 2.1, L5]

4.1 Thus $-\otimes_RP$ preserves every injection, and [L1] makes $P$ flat. The proof used the canonical splitting supplied by projectivity and made no family of choices. [step 3.1, L1, L4] ∎
