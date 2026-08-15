---
id: thm-representable-second-proof-of-rapl-under-local-smallness
kind: theorem
title: 'Under local smallness, representable functors give a second proof that right adjoints preserve small limits'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-adjunction-hom-set-bijection-under-local-smallness, thm-representable-functors-preserve-small-limits, lem-canonical-comparison-characterises-limit-preservation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 6.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $F\dashv G:\mathcal D\to\mathcal C$ be an adjunction between locally small categories. For every small diagram $D:\mathcal J\to\mathcal D$ with a limit, the representable-functor calculation identifies $G(\lim D)$ as a limit of $GD$. Equivalently, the canonical comparison

$$G(\lim D)\longrightarrow\lim(GD)$$

is an isomorphism whenever the displayed chosen limits are supplied.

## Facts & Assumptions

**Given:** The locally small adjunction and small diagram in the Statement.

[F1] A covariantly representable Set-valued functor on a locally small category preserves every small limit that exists ([[thm-representable-functors-preserve-small-limits]]).

[F2] A functor preserves a chosen limit exactly when its canonical comparison to the chosen limit of the image diagram is an isomorphism ([[lem-canonical-comparison-characterises-limit-preservation]]).

[L1] The adjunction gives natural bijections $\mathcal C(c,Gd)\cong\mathcal D(Fc,d)$ ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 For every $c\in\mathcal C$, [L1] gives $\mathcal C(c,G\lim D)\cong\mathcal D(Fc,\lim D)$. [L1]

2.1 By [F1], the right side is naturally isomorphic to $\lim_j\mathcal D(Fc,D_j)$, since $\mathcal D(Fc,-)$ is representable and $\mathcal J$ is small. [step 1.1, F1]

3.1 Applying [L1] componentwise identifies this limit with $\lim_j\mathcal C(c,GD_j)$. The composite is natural in $c$. [step 2.1, L1]

4.1 Hence the cone $G(\lim D)\to GD$ represents the cone functor and is limiting. If a chosen limit of $GD$ is also supplied, uniqueness of limits makes the canonical comparison an isomorphism, exactly as stated in [F2]. [step 3.1, F2] ∎
