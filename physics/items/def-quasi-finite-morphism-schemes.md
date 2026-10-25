---
id: def-quasi-finite-morphism-schemes
kind: definition
title: Quasi-finite morphisms of schemes
status: published
origin: pipeline
deps:
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.21 Definition 29.21.1 and Lemma 29.21.6"
      url: "https://stacks.math.columbia.edu/tag/01TC"
    - title: "Stacks Project, Commutative Algebra, §10.122 Definition 10.122.3"
      url: "https://stacks.math.columbia.edu/tag/00PL"
---

## Definition

A morphism of schemes $f:X\to S$ is **quasi-finite** if it is of finite type
([[def-locally-finite-type-and-finite-type-morphism]]) and, for every point
$x\in X$, there are affine neighbourhoods $U=\operatorname{Spec}(B)$ of $x$
and $V=\operatorname{Spec}(A)$ of $f(x)$ such that $f(U)\subseteq V$ and the
induced finite-type ring map $A\to B$ is quasi-finite at the prime
$\mathfrak q\subset B$ corresponding to $x$, in the sense of
[[def-quasi-finite-at-a-prime-for-finite-type-algebras]]. If
$\mathfrak p=\mathfrak q\cap A$, the local algebra in that condition is
$$B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}.$$
It is the local ring of the scheme-theoretic fibre $X_{f(x)}$ at $x$
([[def-scheme-theoretic-fibre]]).

The empty source satisfies the pointwise condition vacuously. No separatedness
condition is part of the definition; any theorem that also needs separatedness
states it separately.
