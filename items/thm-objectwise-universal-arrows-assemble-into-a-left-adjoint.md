---
id: thm-objectwise-universal-arrows-assemble-into-a-left-adjoint
kind: theorem
title: 'Chosen objectwise universal arrows assemble uniquely into a left adjoint'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object, def-universal-arrow-to-and-from-a-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Theorem 2.3.6'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Let $G:\mathcal D\to\mathcal C$ be a functor. Suppose that for every $c\in\mathcal C$ a universal arrow $(Fc,\eta_c:c\to GFc)$ from $c$ to $G$ is supplied. There is a unique functor structure on the object assignment $c\mapsto Fc$ for which $\eta:1_{\mathcal C}\Rightarrow GF$ is natural, and with that structure $F\dashv G$.

## Facts & Assumptions

**Given:** The functor $G$ and the supplied universal arrows in the Statement.

[F1] Universality means that every $f:c\to Gd$ factors uniquely as $f=G(h)\circ\eta_c$ for a morphism $h:Fc\to d$ ([[def-universal-arrow-to-and-from-a-functor]]).

[L1] Chosen initial objects $(Fc,\eta_c)$ in all $(c\downarrow G)$ determine a unique left adjoint functor ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 For $a:c\to c'$, apply [F1] to $\eta_{c'}a:c\to GFc'$ and define $F(a)$ as the unique morphism satisfying $G(F(a))\eta_c=\eta_{c'}a$. [F1, construct]

2.1 The uniqueness clause in [F1] gives $F(1_c)=1_{Fc}$ and $F(ba)=F(b)F(a)$, because the proposed right sides satisfy the same defining equations. [step 1.1, F1]

3.1 Hence $F$ is a functor and the equations in step 1.1 say exactly that $\eta$ is natural. The same universal factorisations give the adjunction $F\dashv G$ by [L1]. [step 1.1, step 2.1, L1]

4.1 Any other compatible functor structure would have to satisfy the defining equation in step 1.1, so [F1] makes it identical to this one on every morphism. [step 1.1, F1] ∎
