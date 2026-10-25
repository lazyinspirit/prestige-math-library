---
id: lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact
kind: lemma
title: "Hom from a projective makes injective-resolution columns exact"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution, thm-projective-object-characterisations]
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

Let $P_\bullet\to M$ be a projective resolution and
$0\to N\to I^0\to I^1\to\cdots$ an injective resolution. For every $p\ge0$,
the augmented column
$$0\longrightarrow\operatorname{Hom}(P_p,N)\longrightarrow\operatorname{Hom}(P_p,I^0)\longrightarrow\operatorname{Hom}(P_p,I^1)\longrightarrow\cdots$$
is exact. These augmentations commute with precomposition by $d_P$, so their
edge complex is $\operatorname{Hom}(P_\bullet,N)$ and maps naturally to the
total Hom complex.

## Facts & Assumptions

**Given:** The two resolutions in the statement and the Hom double complex $K^{p,q}=\operatorname{Hom}(P_p,I^q)$.

## Proof

**Proof technique:** direct.

1.1 Each $P_p$ is projective, so $\operatorname{Hom}(P_p,-)$ is exact. Applying it to the augmented injective resolution gives the displayed exact column. Naturality of Hom shows that these augmentations commute with precomposition by $d_P$. [given, algebra]

2.1 The objects in vertical degree $-1$ are $\operatorname{Hom}(P_p,N)$, with horizontal differential given by precomposition by $d_P$. They therefore form $\operatorname{Hom}(P_\bullet,N)$ and give the asserted natural edge map to the total complex. [step 1.1, algebra] ∎
