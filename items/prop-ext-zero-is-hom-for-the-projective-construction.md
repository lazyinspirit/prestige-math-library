---
id: prop-ext-zero-is-hom-for-the-projective-construction
kind: proposition
title: "The degree-zero projective construction of Ext is Hom"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-a-projective-resolution-of-the-first-variable, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

For $\cdots\to P_1\xrightarrow {d_1}P_0\xrightarrow\varepsilon M\to0$, precomposition with $\varepsilon$ gives a natural isomorphism $\operatorname{Hom}(M,N)\cong\operatorname{Ext}^0_P(M,N)$.

## Facts & Assumptions

**Given:** The displayed projective resolution and an object $N$.

## Proof

**Proof technique:** direct.

1.1 A map $h:P_0\to N$ is a zero-cocycle exactly if $hd_1=0$, equivalently if it vanishes on $\ker\varepsilon=\operatorname{im}d_1$. [given, construct]

2.1 Thus $h$ factors uniquely as $f\varepsilon$; there are no negative-degree coboundaries.  This is the asserted isomorphism and is natural under pre- and postcomposition. [step 1.1, algebra] ∎
