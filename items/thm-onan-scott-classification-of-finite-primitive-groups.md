---
id: thm-onan-scott-classification-of-finite-primitive-groups
kind: theorem
title: "The O'Nan-Scott classification of finite primitive groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups, def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, def-almost-simple-finite-group, lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses, prop-unique-abelian-minimal-normal-subgroup-gives-affine-type, rem-onan-scott-eight-type-and-five-type-conventions]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups, section 'The O'Nan-Scott theorem'"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Every finite primitive permutation group of degree at least $2$ belongs to exactly one of the five
coarse O'Nan-Scott types used on this page: affine, almost simple, diagonal,
product action, or twisted wreath.

## Facts & Assumptions

**Given:** A finite primitive permutation group $G \le \operatorname{Sym}(\Omega)$ of degree at least $2$.

[A1] In a primitive action of degree at least $2$, every nontrivial normal subgroup is transitive and the socle is a direct product of one or two minimal normal subgroups.

[A2] The finite O'Nan-Scott analysis organizes exactly those socle patterns into the five coarse families used on this page.

[L1] The local items on this page define those five types and explain their
socle data
([[def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]]).

## Proof

**Proof technique:** direct.

1.1 Because the action has degree at least $2$, it is nontrivial. The socle analysis [A1] therefore applies to $G$ and reduces the action to the structure of one or two minimal normal subgroups. [given, A1]

2.1 The source theorem [A2] says that those socle configurations fall into exactly five families, and [L1] records the names and defining data of those families in the convention used here. Hence $G$ belongs to exactly one of the five listed types. [A2, L1, step 1.1] ∎
