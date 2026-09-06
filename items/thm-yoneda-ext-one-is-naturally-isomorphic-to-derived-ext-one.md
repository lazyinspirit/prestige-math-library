---
id: thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one
kind: theorem
title: "Yoneda Ext one is naturally isomorphic to derived Ext one"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, thm-baer-sum-makes-extension-classes-an-abelian-group, prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject, lem-equivalent-extensions-have-the-same-ext-class, lem-every-ext-one-class-is-represented-by-an-extension, lem-two-extensions-with-the-same-ext-class-are-equivalent]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice, the balanced-Ext hypotheses of
[[def-balanced-ext-bifunctor]], and that the extension classes in question form
a set. Sending an extension of $M$ by $N$ to the connecting image of $1_M$
gives a natural isomorphism of abelian groups
$$\operatorname{YExt}^1(M,N)\cong\operatorname{Ext}^1(M,N).$$

## Facts & Assumptions

**Given:** Objects $M,N$ under the stated resolution hypotheses.

## Proof

**Proof technique:** direct.

1.1 The assignment is well-defined by [[lem-equivalent-extensions-have-the-same-ext-class]], surjective by [[lem-every-ext-one-class-is-represented-by-an-extension]], and injective by [[lem-two-extensions-with-the-same-ext-class-are-equivalent]]. [given, construct]

2.1 For $a:M'\to M$, the pullback extension and the original extension form a morphism of short exact sequences; naturality of the connecting morphism sends $1_M$ to the pullback of its class along $a$. For $b:N\to N'$, the analogous pushout square sends the class forward along $b$. These are exactly the two maps in [[prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject]], so the bijection is natural in both variables. The diagonal-pullback and codiagonal-pushout defining Baer sum correspond, by the same two naturality squares, to addition in Ext; hence the bijection is additive. [step 1.1, algebra] ∎
