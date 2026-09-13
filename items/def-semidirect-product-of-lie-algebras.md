---
id: def-semidirect-product-of-lie-algebras
kind: definition
title: Semidirect products of Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, def-direct-product-and-direct-sum-of-lie-algebras, def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, semidirect-product convention in §3.3"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

By [[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]],
$\operatorname{Der}(\mathfrak h)$ is a Lie algebra under the commutator. Let
$\rho:\mathfrak g\to\operatorname{Der}(\mathfrak h)$ be a Lie-algebra
homomorphism. On $\mathfrak g\oplus\mathfrak h$ define the candidate bracket

$$[(x,u),(y,v)]=([x,y],\rho(x)v-\rho(y)u+[u,v]).$$

The next lemma proves that this bracket satisfies Jacobi. The resulting Lie
algebra is the **semidirect product** $\mathfrak g\ltimes_\rho\mathfrak h$.
The subspace $0\oplus\mathfrak h$ is an ideal, the projection to
$\mathfrak g$ is a Lie homomorphism, and the inclusion of $\mathfrak g$ is a
section. When $\rho=0$, this is the direct sum Lie algebra.
