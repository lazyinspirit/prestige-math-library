---
id: fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis
kind: false-statement
title: 'The hom-set form of an adjunction needs no size hypothesis'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-small-locally-small-and-large-category, def-ordinal-addition, thm-ordinal-addition-associative, thm-burali-forti]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Definition 2.1.1'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

The hom-set formulation $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ of an adjunction is meaningful without any local-smallness hypothesis.

## Facts & Assumptions

**Given:** The class $\mathbf{Ord}$ of all ordinals.

[F1] A category is locally small exactly when every hom-class is a set; a large category may still be locally small ([[def-small-locally-small-and-large-category]]).

[F2] Ordinal addition is specified by $\alpha+0=\alpha$, $\alpha+(\beta+1)=(\alpha+\beta)+1$, and $\alpha+\lambda=\bigcup_{\beta<\lambda}(\alpha+\beta)$ for nonzero limit $\lambda$ ([[def-ordinal-addition]]).

[F3] Ordinal addition is associative: $(\alpha+\beta)+\gamma=\alpha+(\beta+\gamma)$ for all ordinals $\alpha,\beta,\gamma$ ([[thm-ordinal-addition-associative]]).

[F4] The ordinals form a proper class: no set contains every ordinal ([[thm-burali-forti]]).

[L1] An adjunction is specified by functors, a unit, a counit, and the two triangle identities, without a hom-set hypothesis ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Refutation

**Proof technique:** direct.

1.1 Form a one-object category $\mathcal O$ whose endomorphism class is $\mathbf{Ord}$, whose identity is $0$, and whose composition is ordinal addition. The zero clause in [F2] gives $\alpha+0=\alpha$ directly. The other identity law $0+\alpha=\alpha$ needs all three clauses and transfinite induction on $\alpha$: the zero clause gives $0+0=0$; the successor clause gives $0+(\beta+1)=(0+\beta)+1=\beta+1$ from the inductive hypothesis; and for a nonzero limit $\lambda$ the limit clause gives $0+\lambda=\bigcup_{\beta<\lambda}(0+\beta)=\bigcup_{\beta<\lambda}\beta=\lambda$. Associativity is [F3]. [F2, F3, induction, construct]

2.1 Its only hom-class is the proper class $\mathbf{Ord}$ by [F4], so $\mathcal O$ is not locally small by [F1]. Consequently $\mathcal O(*,*)$ is not a hom-set and cannot be an object of $\mathbf{Set}$. [step 1.1, F1, F4]

3.1 Thus a Set-valued hom-set bijection is not even meaningful in this example, whereas [L1] explains why unit-counit data remain the size-free formulation. The statement is false. [step 2.1, L1] ∎
