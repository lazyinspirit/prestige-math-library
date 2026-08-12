---
id: thm-hom-assignment-is-a-bifunctor
kind: theorem
title: "The hom-assignment $\\mathcal C(-,-):\\mathcal C^{\\mathrm{op}}\\times\\mathcal C\\to\\mathbf{Set}$ is a bifunctor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-functors-and-hom-bifunctor,
       thm-hom-assignments-are-functors, def-product-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Definition 4.1.22 and Remarks 4.1.23"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
    - title: "Emily Riehl, Category Theory in Context, Chapter 2, Section 2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For every locally small category $\mathcal C$, the hom-assignment

$$\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\longrightarrow\mathbf{Set}$$

of [[def-hom-functors-and-hom-bifunctor]] is a functor. Its restrictions in the
two variables are the contravariant and covariant hom-functors of
[[thm-hom-assignments-are-functors]].

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$; morphisms $h:a'\to a$, $k:a''\to a'$, $u:b\to b'$, and $v:b'\to b''$; and the category axioms of $\mathcal C$.

[L1] The one-variable assignments $\mathcal C(a,-)$ and $\mathcal C(-,a)$ are functors to $\mathbf{Set}$ ([[thm-hom-assignments-are-functors]]).

[F1] A morphism in a product category is a pair, and identities and composition are componentwise ([[def-product-category]]).

[F2] The hom-assignment sends $(h,u)$ to $f\mapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

## Proof

**Proof technique:** direct.

1.1 If $f:a\to b$, then $u\circ f\circ h:a'\to b'$, so [F2] defines a function $\mathcal C(a,b)\to\mathcal C(a',b')$. [given, F2]

1.2 For every $f:a\to b$, the identity pair acts by $1_b\circ f\circ1_a=f$. [given, F1, F2]

1.3 Applying $(h,u)$ and then $(k,v)$ sends $f$ to $v\circ(u\circ f\circ h)\circ k=(v\circ u)\circ f\circ(h\circ k)$, which is the action of their componentwise composite in $\mathcal C^{\mathrm{op}}\times\mathcal C$. [given, F1, F2]

2.1 Steps 1.1--1.3 prove the functor laws, and fixing either variable recovers the postcomposition or precomposition action of [L1]; hence the hom-assignment is the asserted bifunctor. [step 1.1, step 1.2, step 1.3, L1] ∎
