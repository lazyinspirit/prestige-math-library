---
id: cor-representable-presheaves-detect-isomorphism-of-objects
kind: corollary
title: "Objects $a$ and $b$ are isomorphic exactly when $\\mathcal C(-,a)$ and $\\mathcal C(-,b)$ are naturally isomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-yoneda-embedding-is-fully-faithful, def-natural-isomorphism,
       def-isomorphism-groupoid-and-connected-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 2.3.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Corollary 4.3.10"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $a$ and $b$ be objects of a locally small category $\mathcal C$. Then

$$a\cong b\quad\Longleftrightarrow\quad\mathcal C(-,a)\cong\mathcal C(-,b)$$

by a natural isomorphism of presheaves.

## Facts & Assumptions

**Given:** Objects $a,b$ of a locally small category $\mathcal C$.

[L1] The Yoneda assignment induces a bijection $\mathcal C(x,y)\cong\operatorname{Nat}(\mathcal C(-,x),\mathcal C(-,y))$ for every $x,y$ ([[thm-yoneda-embedding-is-fully-faithful]]).

[F1] A natural isomorphism $\alpha:F\Rightarrow G$ has a natural transformation $\beta:G\Rightarrow F$ with $\beta\circ\alpha=1_F$ and $\alpha\circ\beta=1_G$ ([[def-natural-isomorphism]]).

[F2] An isomorphism $f:a\to b$ has a morphism $f^{-1}:b\to a$ with $f^{-1}f=1_a$ and $ff^{-1}=1_b$ ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 If $f:a\to b$ is an isomorphism, its Yoneda image $y(f)$ has inverse $y(f^{-1})$, since the postcomposition formulas give $y(f^{-1})y(f)=y(1_a)$ and $y(f)y(f^{-1})=y(1_b)$; hence the representable presheaves are naturally isomorphic. [given, L1, F2]

1.2 Conversely, let $\alpha:\mathcal C(-,a)\Rightarrow\mathcal C(-,b)$ be a natural isomorphism with inverse $\beta$. By the surjectivity in [L1], there are $f:a\to b$ and $g:b\to a$ with $y(f)=\alpha$ and $y(g)=\beta$. [L1, F1, choose]

2.1 The inverse equations of [F1] give $y(gf)=y(g)y(f)=1_{y(a)}=y(1_a)$ and $y(fg)=y(1_b)$; injectivity in [L1] therefore gives $gf=1_a$ and $fg=1_b$, so $f$ is an isomorphism. [step 1.2, L1, F1, F2]

3.1 Step 1.1 proves the forward implication and steps 1.2--2.1 prove the reverse implication. [step 1.1, step 2.1] ∎
