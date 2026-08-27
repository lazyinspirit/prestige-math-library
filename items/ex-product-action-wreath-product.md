---
id: ex-product-action-wreath-product
kind: example
title: "A primitive product-action wreath product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Example

Let $H=S_5$ acting naturally on $\Delta=\{1,2,3,4,5\}$ and let $K=S_2$ act on
two coordinates. Then $H \wr K$ is primitive on $\Delta^2$ and is of
O'Nan--Scott product-action type.

## Facts & Assumptions

**Given:** The standard product action of $S_5 \wr S_2$ on $\{1,2,3,4,5\}^2$.

[L1] Under the standard hypotheses, product-action wreath products are
primitive
([[lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses]]).

[L2] Product action is one of the five coarse O'Nan-Scott types
([[def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]]).

## Verification

**Proof technique:** direct.

1.1 The action of $S_5$ on five points is primitive and not regular, and the action of $S_2$ on the two coordinates is transitive. Therefore [L1] applies to $S_5 \wr S_2$ on $\{1,2,3,4,5\}^2$. [given, L1]

2.1 The socle of the wreath product is $A_5^2$, which is nonabelian and acts coordinatewise. Thus the action is primitive and has the product-action socle data in [L2], rather than affine socle data. [L2, step 1.1, algebra] ∎ 
