---
id: cex-an-adjunction-whose-triangle-identities-fail-for-a-wrong-counit
kind: counterexample
title: 'A wrong counit can be natural while both triangle identities fail'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
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

## Statement refuted

For identity functors, any natural choices of unit and counit give the identity adjunction.

## Facts & Assumptions

**Given:** The two-element group $C_2=\{1,z\}$ with $z^2=1$.

[F1] Every monoid is a one-object category, and it is a group exactly when every morphism is invertible ([[prop-monoids-and-groups-as-one-object-categories]]).

[F2] An adjunction requires $(\varepsilon F)(F\eta)=1_F$ and $(G\varepsilon)(\eta G)=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Counterexample

**Proof technique:** direct.

1.1 Regard $C_2$ as a one-object category $\mathcal C$ by [F1] and set $F=G=1_{\mathcal C}$. Choose the identity element as the component of $\eta$ and $z$ as the component of $\varepsilon$. [F1, construct]

2.1 Both transformations are natural because $C_2$ is abelian, but each triangle composite is $z1=z\ne1$. Hence both identities in [F2] fail. [step 1.1, F2, algebra]

3.1 Replacing $\varepsilon$ by the identity element makes both composites equal to $1$, recovering the identity adjunction and isolating the failure in the wrong counit. [step 2.1, F2] ∎
