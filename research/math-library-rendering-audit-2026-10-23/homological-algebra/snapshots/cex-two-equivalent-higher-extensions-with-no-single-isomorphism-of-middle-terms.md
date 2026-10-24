---
id: cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms
kind: counterexample
title: "Equivalent higher extensions need not have one middle-term isomorphism"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-equivalence-of-n-fold-extensions]
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement refuted

Give a zigzag of endpoint-identity chain maps between two two-fold extensions whose middle-object shapes prevent a single isomorphism, illustrating the generated equivalence relation.

## Facts & Assumptions

**Given:** $M=N=\mathbb Z$ in abelian groups and the two two-fold extensions below.

## Counterexample

**Proof technique:** direct.

1.1 Let $E$ be $0\to\mathbb Z\xrightarrow{1}\mathbb Z\xrightarrow{0}\mathbb Z\xrightarrow{1}\mathbb Z\to0$, and let $E'$ be $0\to\mathbb Z\to\mathbb Z^2\xrightarrow{(a,c)\mapsto(0,c)}\mathbb Z^2\xrightarrow{(b,c)\mapsto b}\mathbb Z\to0$, where the left inclusion is $a\mapsto(a,0)$. Both are exact. [given, construct]

2.1 The maps $(a)\mapsto(a,0)$ and $(b)\mapsto(b,0)$ give an endpoint-identity chain map $E\to E'$, while the coordinate projections give one $E'\to E$. Thus the two extensions are equivalent in the generated sense. But their first middle terms are $\mathbb Z$ and $\mathbb Z^2$, which are not isomorphic, so no single middle-term isomorphism can witness this equivalence. [step 1.1, algebra] ∎
