---
id: thm-the-two-element-set-is-a-subobject-classifier-for-sets
kind: theorem
title: "The two-element set is a subobject classifier for Set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subobject-classifier, thm-a-subobject-classifier-represents-the-subobject-functor, prop-sets-and-functions-form-category-set, thm-monomorphisms-and-epimorphisms-in-set]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.9"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.26"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
---

## Statement

In $\mathbf{Set}$, the inclusion

$$\operatorname{true}:1=\{*\}\to 2=\{0,1\},\qquad *\mapsto 1,$$

is a subobject classifier.

## Facts & Assumptions

**Given:** A monomorphism $m:A\to X$ in $\mathbf{Set}$.

[L1] In $\mathbf{Set}$, morphisms are functions ([[prop-sets-and-functions-form-category-set]]).

[L2] Monomorphisms in $\mathbf{Set}$ are exactly injections ([[thm-monomorphisms-and-epimorphisms-in-set]]).

[L3] A subobject classifier is a monomorphism $\mathbf 1\to\Omega$ whose pullbacks classify all subobjects uniquely ([[def-subobject-classifier]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $m$ is an injection. Its image $m[A]\subseteq X$ is a subset, and the bijection $A\to m[A]$ identifies $m$ with the inclusion $m[A]\hookrightarrow X$. Define $\chi_m:X\to2$ by $\chi_m(x)=1$ for $x\in m[A]$ and $\chi_m(x)=0$ otherwise. [given, L1, L2, construct]

2.1 The pullback of $\operatorname{true}:1\to2$ along $\chi_m$ has underlying set $\chi_m^{-1}(1)=m[A]$, so its inclusion into $X$ represents the same subobject as $m$ via the bijection from step 1.1. [step 1.1, L1, algebra]

3.1 If $f:X\to2$ has a pullback representing the same subobject as $m$, then $f^{-1}(1)=m[A]$, so $f$ agrees pointwise with $\chi_m$. Hence the classifying map is unique. By [L3], $\operatorname{true}:1\to2$ is a subobject classifier. [step 2.1, L3, algebra] ∎
