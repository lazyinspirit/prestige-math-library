---
id: fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes
kind: false-statement
title: "FALSE: every quasi-isomorphism is an isomorphism of complexes"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quasi-isomorphism,
       prop-isomorphisms-of-complexes-are-quasi-isomorphisms,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
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

Every quasi-isomorphism of chain complexes is an isomorphism in
$\operatorname{Ch}(\mathcal A)$.

## Facts & Assumptions

**Given:** The zero map from the acyclic complex $$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0$$ to the zero complex.

[L1] A quasi-isomorphism is a chain map inducing isomorphisms on homology ([[def-quasi-isomorphism]]).

[L2] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Refutation

**Proof technique:** direct.

1.1 As in the standard identity-complex computation, the source complex is acyclic and the target zero complex is also acyclic, so every homology object on both sides is zero. Therefore the zero chain map induces isomorphisms on all homology objects and is a quasi-isomorphism by [L1]. [L1, L2, given, algebra]

2.1 The source complex is nonzero while the target is zero, so no inverse chain map can exist. Thus this quasi-isomorphism is not an isomorphism of complexes. [step 1.1, algebra] ∎
