---
id: lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic
kind: lemma
title: "A real affine-Hecke parameter greater than one has infinite quantum characteristic"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-quantum-characteristic-of-an-invertible-hecke-parameter]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§1.3, PDF pp. 9–10, and §3.2, PDF pp. 27–30: positive real affine parameters and the tempered/Langlands parameter regime."
---

## Statement

Let $q>1$ be a real affine-Hecke parameter, viewed as an element of $\mathbb C^\times$, and let $\xi\ne1$ be a root of unity in $\mathbb C$. With quantum characteristic as in [[def-quantum-characteristic-of-an-invertible-hecke-parameter]], $e(\mathbb C,q)=\infty$ and $e(\mathbb C,\xi)$ is the finite multiplicative order of $\xi$. In particular $q\ne\xi$. The statement compares scalar parameter regimes; it asserts no isomorphism, Morita equivalence, or classification relation between the corresponding algebras.

## Facts & Assumptions

**Given:** $q\in\mathbb R$, $q>1$, and a root of unity $\xi\in\mathbb C^\times$ with $\xi\ne1$.

[F1] The quantum characteristic is the least integer $e\ge2$ for which $1+u+\cdots+u^{e-1}=0$, and is $\infty$ if no such integer exists. If $u\ne1$, finite $e$ exists exactly when $u$ is a root of unity, and then it is its multiplicative order ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]).

## Proof

**Given:** The scalars $q$ and $\xi$ above.

1.1 For every integer $n\ge2$, $1+q+\cdots+q^{n-1}$ is a sum of positive real numbers and is therefore positive. No finite $n$ satisfies the defining vanishing condition in [F1], so $e(\mathbb C,q)=\infty$. [F1, given, algebra]

2.1 Since $\xi\ne1$, the identity $(1-\xi)(1+\xi+\cdots+\xi^{n-1})=1-\xi^n$ shows that the geometric sum vanishes exactly when $\xi^n=1$. Its least such positive exponent is the multiplicative order, which is at least $2$; hence [F1] gives $e(\mathbb C,\xi)=\operatorname{ord}(\xi)<\infty$. Also $|\xi|=1$ while $|q|=q>1$, so $q\ne\xi$. [F1, given, step 1.1, algebra] ∎
