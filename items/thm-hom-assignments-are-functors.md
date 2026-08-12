---
id: thm-hom-assignments-are-functors
kind: theorem
title: "The assignments $\\mathcal C(a,-)$ and $\\mathcal C(-,a)$ are functors to $\\mathbf{Set}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-functors-and-hom-bifunctor,
       def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 2, Section 2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Definitions 4.1.1 and 4.1.16"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a locally small category and let $a$ be an object. The
covariant hom-assignment $\mathcal C(a,-):\mathcal C\to\mathbf{Set}$ and the
contravariant hom-assignment
$\mathcal C(-,a):\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ of
[[def-hom-functors-and-hom-bifunctor]] are functors.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$, an object $a$, morphisms $u:b\to c$ and $v:c\to d$, and the identity and associativity axioms of $\mathcal C$.

[F1] The covariant assignment sends $u:b\to c$ to $u_*:f\mapsto u\circ f$, while the contravariant assignment sends it to $u^*:g\mapsto g\circ u$ ([[def-hom-functors-and-hom-bifunctor]]).

[F2] A covariant functor preserves identities and composites; a contravariant functor from $\mathcal C$ means a covariant functor from $\mathcal C^{\mathrm{op}}$ ([[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 The maps in [F1] have the asserted source and target: if $f:a\to b$ then $u\circ f:a\to c$, and if $g:c\to a$ then $g\circ u:b\to a$. [given, F1]

1.2 Postcomposition by $1_b$ fixes every $f:a\to b$, and precomposition by $1_b$ fixes every $g:b\to a$. [given, F1]

1.3 For $f:a\to b$, one has $(v\circ u)_*(f)=(v\circ u)\circ f=v\circ(u\circ f)=v_*(u_*(f))$. [given, F1]

1.4 For $g:d\to a$, one has $(v\circ u)^*(g)=g\circ(v\circ u)=(g\circ v)\circ u=u^*(v^*(g))$, which is the composition law in $\mathcal C^{\mathrm{op}}$. [given, F1]

2.1 Steps 1.1--1.4 give the identity and composition laws required by [F2], so both hom-assignments are functors to $\mathbf{Set}$. [step 1.1, step 1.2, step 1.3, step 1.4, F2] ∎
