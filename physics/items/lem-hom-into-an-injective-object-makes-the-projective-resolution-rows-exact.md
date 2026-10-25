---
id: lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact
kind: lemma
title: "Hom into an injective makes projective-resolution rows exact"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution, thm-injective-object-characterisations]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Let $\cdots\to P_1\to P_0\to M\to0$ be a projective resolution and
$N\to I^\bullet$ an injective resolution. For every $q\ge0$, the augmented row
$$0\longrightarrow\operatorname{Hom}(M,I^q)\longrightarrow\operatorname{Hom}(P_0,I^q)\longrightarrow\operatorname{Hom}(P_1,I^q)\longrightarrow\cdots$$
is exact. These augmentations commute with postcomposition by $d_I$, so their
edge complex is $\operatorname{Hom}(M,I^\bullet)$ and maps naturally to the
total Hom complex.

## Facts & Assumptions

**Given:** The two resolutions in the statement and the Hom double complex $K^{p,q}=\operatorname{Hom}(P_p,I^q)$.

## Proof

**Proof technique:** direct.

1.1 Each $I^q$ is injective, so $\operatorname{Hom}(-,I^q)$ is exact. Applying it to the augmented projective resolution gives the displayed exact row. Naturality of Hom shows that these augmentations commute with postcomposition by $d_I$. [given, algebra]

2.1 The objects in horizontal degree $-1$ are $\operatorname{Hom}(M,I^q)$, with vertical differential given by postcomposition by $d_I$. They therefore form $\operatorname{Hom}(M,I^\bullet)$ and give the asserted natural edge map to the total complex. [step 1.1, algebra] ∎
