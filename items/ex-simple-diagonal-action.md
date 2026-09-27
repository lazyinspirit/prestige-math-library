---
id: ex-simple-diagonal-action
kind: example
title: "A simple diagonal action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Let $T$ be a nonabelian finite simple group. The action of $T \times T$ on the
right cosets of the diagonal subgroup

$$\Delta(T)=\{(t,t): t \in T\}$$

is the basic diagonal-type example.

## Facts & Assumptions

**Given:** A nonabelian finite simple group $T$ and the coset action of $T \times T$ on $(T \times T)/\Delta(T)$.

[A1] In this action the socle is $T \times T$, and the diagonal subgroup identifies the two factors in the stabilizer.

[L1] The diagonal-type definition specifies a primitive coset action of a direct product of isomorphic nonabelian simple groups with diagonal point stabilizer ([[def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]]).

## Verification

**Proof technique:** direct.

1.1 The socle of the acting group is $T \times T$, a direct product of two isomorphic nonabelian simple factors, and the point stabilizer is the diagonal subgroup $\Delta(T)$ by construction.  This stabilizer is maximal: if $\Delta(T)<L\le T\times T$, choose $(a,b)\in L\setminus\Delta(T)$. Multiplying by $(a^{-1},a^{-1})$ gives $(1,ba^{-1})\in L$ with $ba^{-1}\ne1$. Conjugation by $\Delta(T)$ and simplicity of $T$ then give $1\times T\le L$, and $\Delta(T)(1\times T)=T\times T$. Thus $L=T\times T$. [given, A1, choose, algebra]

2.1 A coset action is primitive exactly when its stabilizer is maximal, so step 1.1 makes this action primitive. Its socle and stabilizer are then exactly the defining features in [L1], and the action is a simple diagonal action. [L1, step 1.1] ∎ 
