---
id: ex-aqft-finite-groupoid-point-normalization
kind: example
title: The normalized sum on a one-object finite groupoid
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-aqft-background-gauging-data
dependency_roles:
  def-aqft-background-gauging-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references: []
generation:
  role: example
---

## Example

Let $G=C_2=\{1,s\}$ with $s^2=1$. Let $BG$ be the category with one object $*$, with morphisms $\operatorname{Hom}(*,*)=G$ and composition given by multiplication in $G$. Give its unique object the weight $W(*)=1$. The normalized gauging sum of this finite background groupoid is $1/2$.

## Example references

[[def-aqft-background-gauging-data]]

## Facts & Assumptions

**Given:** The one-object category $BG$ and the constant weight $W(*)=1$.

[F1] [[def-aqft-background-gauging-data]]: the normalized gauging sum is the sum over isomorphism classes of the weight divided by the order of the object's automorphism group.

## Proof

1.1 The unique object of $BG$ has automorphism group $G$, which has order two, and there is exactly one isomorphism class. [given, F1, construct]

2.1 Substituting $W(*)=1$ and $|\operatorname{Aut}_{BG}(*)|=2$ into the normalized sum gives $Z(BG,1)=1/2$. [given, F1, step 1.1, algebra] ∎
