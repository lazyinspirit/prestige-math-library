---
id: prop-two-transitive-groups-have-affine-or-almost-simple-socle-type
kind: proposition
title: "Finite 2-transitive groups have affine or almost simple socle type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-almost-simple-finite-group, def-k-transitive-and-k-homogeneous-actions, prop-doubly-transitive-actions-are-primitive, thm-onan-scott-classification-of-finite-primitive-groups]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Every finite $2$-transitive permutation group of degree at least $2$ is of affine type or almost simple type.

## Facts & Assumptions

**Given:** A finite $2$-transitive permutation group $G \le \operatorname{Sym}(\Omega)$ of degree at least $2$.

[L1] Every doubly transitive action is primitive
([[prop-doubly-transitive-actions-are-primitive]]).

[A1] In the finite O'Nan-Scott classification, the diagonal, product-action,
and twisted-wreath types do not occur for $2$-transitive groups.

## Proof

**Proof technique:** direct.

1.1 By [L1], the $2$-transitive action of $G$ is primitive, so the O'Nan-Scott classification applies to it. [given, L1]

2.1 The source fact [A1] removes the diagonal, product-action, and twisted-wreath branches from the primitive classification. Therefore the only remaining possibilities are affine type and almost simple type. [A1, step 1.1] ∎ 
