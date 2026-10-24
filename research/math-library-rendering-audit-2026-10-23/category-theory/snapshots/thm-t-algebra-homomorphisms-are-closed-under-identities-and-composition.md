---
id: thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition
kind: theorem
title: "Algebra homomorphisms are closed under identities and composition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t-algebra-and-algebra-homomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a monad $T$, identity morphisms are $T$-algebra homomorphisms, and the composite of two $T$-algebra homomorphisms is a $T$-algebra homomorphism. These operations inherit associativity and identity laws from the base category.

## Facts & Assumptions

**Given:** $T$-algebras and their homomorphisms as in [[def-t-algebra-and-algebra-homomorphism]].

## Proof

**Proof technique:** direct.

1.1 For an algebra $(A,a)$, functoriality gives $T(1_A)=1_{TA}$, so $1_A\circ a=a=a\circ T(1_A)$ and $1_A$ is an algebra homomorphism. [given]

2.1 If $f:(A,a)\to(B,b)$ and $g:(B,b)\to(C,c)$ are algebra homomorphisms, then $(g\circ f)\circ a=g\circ b\circ T(f)=c\circ T(g)\circ T(f)=c\circ T(g\circ f)$, so their composite is one too. [given, step 1.1]

3.1 Composition of these morphisms is the composition in $\mathcal C$; step 1.1 supplies its identities and step 2.1 its closure, while associativity and the identity laws are inherited from $\mathcal C$. [step 1.1, step 2.1] ∎
