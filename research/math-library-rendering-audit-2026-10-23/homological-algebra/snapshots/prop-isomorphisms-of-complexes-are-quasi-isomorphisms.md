---
id: prop-isomorphisms-of-complexes-are-quasi-isomorphisms
kind: proposition
title: "Isomorphisms of complexes are quasi-isomorphisms"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quasi-isomorphism,
       prop-homology-respects-identities-and-composition,
       def-category-of-chain-complexes]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Every isomorphism in $\operatorname{Ch}(\mathcal A)$ is a quasi-isomorphism.

## Facts & Assumptions

**Given:** An isomorphism of chain complexes $f:C\to D$ with inverse $g:D\to C$.

[L1] A quasi-isomorphism is a chain map inducing isomorphisms on all homology objects ([[def-quasi-isomorphism]]).

[L2] Homology respects identities and composition ([[prop-homology-respects-identities-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Since $g f=1_C$ and $f g=1_D$, [L2] gives $$H_n(g)H_n(f)=1_{H_n(C)},\qquad H_n(f)H_n(g)=1_{H_n(D)}$$ for every $n$. Thus each $H_n(f)$ is an isomorphism. [L2, given, algebra]

2.1 By [L1], that means $f$ is a quasi-isomorphism. [L1, step 1.1] ∎
