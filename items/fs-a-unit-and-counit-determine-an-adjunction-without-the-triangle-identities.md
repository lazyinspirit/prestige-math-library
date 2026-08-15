---
id: fs-a-unit-and-counit-determine-an-adjunction-without-the-triangle-identities
kind: false-statement
title: 'A unit and counit determine an adjunction without the triangle identities'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, prop-monoids-and-groups-as-one-object-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.2.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

If functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$ admit natural transformations $\eta:1_{\mathcal C}\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_{\mathcal D}$, then $F\dashv G$ even when the triangle identities have not been checked.

## Facts & Assumptions

**Given:** The two-element group $C_2=\{1,z\}$ with $z^2=1$.

[F1] Every monoid is a one-object category, and it is a group exactly when every morphism in that category is invertible ([[prop-monoids-and-groups-as-one-object-categories]]).

[F2] An adjunction requires natural transformations $\eta$ and $\varepsilon$ satisfying $(\varepsilon F)(F\eta)=1_F$ and $(G\varepsilon)(\eta G)=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Refutation

**Proof technique:** direct.

1.1 Regard $C_2$ as the one-object category $\mathcal C$ supplied by [F1], and take $F=G=1_{\mathcal C}$. [F1, construct]

2.1 Let the sole component of $\eta$ be $1$ and the sole component of $\varepsilon$ be $z$. Both are natural because $C_2$ is abelian, so each component commutes with every morphism. [step 1.1, algebra]

3.1 Each triangle composite is $z1=z$, which is not the identity morphism $1$. Thus the data fail both identities in [F2] and do not form an adjunction. [step 2.1, F2, algebra] ∎
