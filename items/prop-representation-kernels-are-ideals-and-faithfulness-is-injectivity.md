---
id: prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity
kind: proposition
title: Representation kernels are ideals
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.1, printed pp. 49–50"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

For a representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$, the kernel is an
ideal of $\mathfrak g$, and the representation is faithful if and only if this
kernel is zero.

## Facts & Assumptions

**Given:** A representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$ over $k$.

[L1] A representation map is a Lie-algebra homomorphism
([[def-representation-of-a-lie-algebra]]).

[L2] The kernel of a Lie-algebra homomorphism is an ideal
([[prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras]]).

[L3] Faithful means that $\rho$ is injective
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L2] to the homomorphism in [L1] shows that $\ker\rho$ is an ideal. [L1, L2]

1.2 A linear map is injective exactly when its kernel is zero; by [L3], this says that the representation is faithful exactly when $\ker\rho=0$. [given, L3, algebra]

2.1 Thus both assertions hold, including for $V=0$: in that case $\rho$ is faithful precisely when $\mathfrak g=0$. [step 1.1, step 1.2] ∎
