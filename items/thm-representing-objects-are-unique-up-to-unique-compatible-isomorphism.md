---
id: thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism
kind: theorem
title: "Representing objects are unique up to a unique isomorphism compatible with their universal elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-elements-and-universal-factorisations,
       def-isomorphism-groupoid-and-connected-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 2.3.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Corollary 4.3.10"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathbf{Set}$ have universal elements $(R,u)$ and
$(R',u')$. There is a unique isomorphism $i:R\to R'$ satisfying
$F(i)(u)=u'$.

If instead $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ has universal elements
$(R,u)$ and $(R',u')$, there is a unique isomorphism $i:R\to R'$ satisfying
$P(i)(u')=u$.

Hence a representing object is unique up to the unique isomorphism compatible
with the chosen universal elements, in either variance.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and the two universal elements for the same covariant functor or presheaf appearing in the statement.

[L1] For a covariant universal element $(R,u)$, every $x\in F(c)$ has a unique expression $F(f)(u)$ with $f:R\to c$; for a presheaf universal element, every $x\in P(c)$ has a unique expression $P(f)(u)$ with $f:c\to R$ ([[thm-universal-elements-and-universal-factorisations]]).

[F1] A morphism is an isomorphism when it admits a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 In the covariant case, apply [L1] for $(R,u)$ to $u'\in F(R')$ and for $(R',u')$ to $u\in F(R)$, obtaining unique morphisms $i:R\to R'$ and $j:R'\to R$ with $F(i)(u)=u'$ and $F(j)(u')=u$. [given, L1]

1.2 In the presheaf case, [L1] applied to $u\in P(R)$ and $u'\in P(R')$ gives unique $i:R\to R'$ and $j:R'\to R$ with $P(i)(u')=u$ and $P(j)(u)=u'$. [given, L1]

2.1 Functoriality gives $F(j\circ i)(u)=u=F(1_R)(u)$; uniqueness in [L1] for $(R,u)$ gives $j\circ i=1_R$. Similarly, $i\circ j=1_{R'}$. [step 1.1, L1]

3.1 By [F1], $i$ is an isomorphism. Any compatible morphism $k:R\to R'$ satisfies $F(k)(u)=u'$ and therefore equals $i$ by [L1], proving uniqueness even among all compatible morphisms. [step 1.1, step 2.1, L1, F1]

4.1 Contravariant functoriality and the same uniqueness argument give $j\circ i=1_R$ and $i\circ j=1_{R'}$; [F1] and uniqueness in [L1] then make $i$ the unique compatible isomorphism. [step 1.2, L1, F1] ∎
