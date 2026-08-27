---
id: ex-almost-simple-type-from-an-alternating-group
kind: example
title: "The natural action of $A_n$ is almost simple type"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, def-almost-simple-finite-group]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Example

For $n \ge 5$, the natural action of $A_n$ on $\{1,\dots,n\}$ is of almost
simple type.

## Facts & Assumptions

**Given:** An integer $n \ge 5$ and the natural action of $A_n$ on $\{1,\dots,n\}$.

[L1] A finite group is almost simple when it lies between a nonabelian simple
group and its automorphism group
([[def-almost-simple-finite-group]]).

[A1] For $n \ge 5$, the alternating group $A_n$ is nonabelian simple.

## Verification

**Proof technique:** direct.

1.1 The acting group is $A_n$ itself, and [A1] makes it a nonabelian simple group. Thus $A_n \le A_n \le \operatorname{Aut}(A_n)$, so [L1] shows that $A_n$ is almost simple. [A1, L1]

2.1 In the natural primitive action, the socle is therefore $A_n$ itself, and this is the almost-simple branch of the O'Nan-Scott dictionary. [step 1.1] ∎ 