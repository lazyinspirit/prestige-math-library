---
id: fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves
kind: false-statement
title: "Non-isomorphic objects can have naturally isomorphic representable presheaves"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-representable-presheaves-detect-isomorphism-of-objects,
       thm-yoneda-embedding-is-fully-faithful]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-13
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

**False claim:** in a locally small category, two non-isomorphic objects can
have naturally isomorphic representable presheaves
$\mathcal C(-,a)\cong\mathcal C(-,b)$.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and the false claim above.

[L1] Objects $a$ and $b$ are isomorphic if and only if the representable presheaves $\mathcal C(-,a)$ and $\mathcal C(-,b)$ are naturally isomorphic ([[cor-representable-presheaves-detect-isomorphism-of-objects]]).

[L2] The Yoneda hom-map $\mathcal C(a,b)\to\operatorname{Nat}(\mathcal C(-,a),\mathcal C(-,b))$ is a bijection and respects identities and composition ([[thm-yoneda-embedding-is-fully-faithful]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose there were non-isomorphic objects $a,b$ and a natural isomorphism $\alpha:\mathcal C(-,a)\xRightarrow{\cong}\mathcal C(-,b)$. [assume-contra]

2.1 By [L2], $\alpha$ and its natural inverse lift uniquely to morphisms $f:a\to b$ and $g:b\to a$. Because the Yoneda map respects identities and composition and is injective, the two equations $\alpha^{-1}\alpha=1$ and $\alpha\alpha^{-1}=1$ imply $g f=1_a$ and $f g=1_b$. [step 1.1, L2]

3.1 Thus $a$ and $b$ are isomorphic, also the reverse implication of [L1], contradicting the choice in step 1.1. [step 1.1, step 2.1, L1]

4.1 No such pair of non-isomorphic objects exists, so the claim is false. [step 3.1, discharge-contradiction] ∎
