---
id: fs-a-subobject-classifier-is-any-object-representing-monomorphisms
kind: false-statement
title: "FALSE: a subobject classifier is any object representing monomorphisms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subobject-classifier, def-subobject-and-quotient-object, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.26"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
---

## Statement

A subobject classifier is any object representing monomorphisms.

## Facts & Assumptions

**Given:** The set $X=\{0,1\}$ and the two singleton inclusions $m:\{a\}\to X$, $n:\{b\}\to X$ with $m(a)=0=n(b)$.

[L1] A subobject classifier classifies subobjects, meaning mutual-factorization classes of monomorphisms, and the classifying map is unique for that class ([[def-subobject-classifier]], [[def-subobject-and-quotient-object]]).

[L2] Two monomorphisms representing the same subobject class need only be isomorphic, not literally equal as arrows ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

## Refutation

**Proof technique:** direct.

1.1 The monomorphisms $m$ and $n$ have different domains and are different arrows, but they factor through each other via the unique bijection $\{a\}\cong\{b\}$. So [L2] says that they represent the same subobject of $X$. [given, L2]

2.1 Any classifier must assign the same characteristic map to the subobject class represented by $m$ and $n$, because [L1] classifies subobjects rather than literal presenting monomorphisms. Therefore no object representing monomorphisms as bare arrows can be the right notion. [step 1.1, L1]

3.1 So the statement is false. [step 2.1] ∎
