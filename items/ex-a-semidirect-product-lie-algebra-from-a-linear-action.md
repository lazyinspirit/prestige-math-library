---
id: ex-a-semidirect-product-lie-algebra-from-a-linear-action
kind: example
title: A semidirect-product Lie algebra from a linear action
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-semidirect-product-of-lie-algebras, lem-semidirect-product-bracket-satisfies-jacobi]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, semidirect products in §3.3 and representations in §4.1"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

If $\rho:\mathfrak g\to\mathfrak{gl}(V)$ is a representation and $V$ is
regarded as an abelian Lie algebra, then

$$[(x,u),(y,v)]=([x,y],\rho(x)v-\rho(y)u)$$

makes $\mathfrak g\oplus V$ a Lie algebra $\mathfrak g\ltimes_\rho V$, with
$V$ an abelian ideal.

## Facts & Assumptions

**Given:** A Lie-algebra representation $\rho$ on a vector space $V$.

[L1] The semidirect construction uses a Lie map into derivations ([[def-semidirect-product-of-lie-algebras]]), and its bracket satisfies Jacobi ([[lem-semidirect-product-bracket-satisfies-jacobi]]).

## Verification

**Proof technique:** direct.

1.1 The zero bracket makes $V$ abelian, and every endomorphism of $V$ is then a derivation because both sides of the derivation identity are zero. Thus $\rho$ has the target required by [L1], and substituting the zero bracket on $V$ gives the displayed formula. [given, L1, algebra]

2.1 For $u,v\in V$, $[(0,u),(0,v)]=(0,0)$, while $[(x,w),(0,v)]=(0,\rho(x)v)$ lies in $0\oplus V$. Hence $V$ is an abelian ideal; it is also the kernel of the projection to $\mathfrak g$. [step 1.1, algebra]

3.1 The Jacobi lemma in [L1] and steps 1.1–2.1 verify the claimed semidirect Lie algebra and its ideal. [step 1.1, step 2.1, L1] ∎
