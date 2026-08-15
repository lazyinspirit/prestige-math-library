---
id: cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g
kind: corollary
title: 'A Galois connection between posets satisfies $FGF=F$ and $GFG=G$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-galois-connection, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Corollary 4.2.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Let $A,B$ be posets and let $F:A\to B$, $G:B\to A$ form a Galois connection. Then

$$FGF=F,\qquad GFG=G.$$

For preorders, the same argument gives pointwise equivalences $FGF\cong F$ and $GFG\cong G$ in the associated thin categories, but equality need not follow without antisymmetry.

## Facts & Assumptions

**Given:** Posets $A,B$ and a Galois connection $F\dashv G$.

[L1] A Galois connection satisfies $a\le GF(a)$ and $FG(b)\le b$, and both maps are monotone ([[def-galois-connection]]).

[F1] Antisymmetry says that $x\le y$ and $y\le x$ imply $x=y$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Applying $F$ to $a\le GF(a)$ gives $F(a)\le FGF(a)$, while the counit inequality at $F(a)$ gives $FGF(a)\le F(a)$. [L1]

1.2 Applying $G$ to $FG(b)\le b$ gives $GFG(b)\le G(b)$, while the unit inequality at $G(b)$ gives $G(b)\le GFG(b)$. [L1]

2.1 Antisymmetry applied to steps 1.1 and 1.2 gives $FGF(a)=F(a)$ and $GFG(b)=G(b)$ for every $a,b$, hence the two equalities of maps. [step 1.1, step 1.2, F1]

3.1 Without antisymmetry, steps 1.1 and 1.2 still give morphisms in both directions between the corresponding objects of each thin category, which are inverse because parallel morphisms are unique. [step 1.1, step 1.2] ∎
