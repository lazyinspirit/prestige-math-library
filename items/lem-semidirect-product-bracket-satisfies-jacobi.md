---
id: lem-semidirect-product-bracket-satisfies-jacobi
kind: lemma
title: The semidirect-product bracket satisfies Jacobi
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-semidirect-product-of-lie-algebras]
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
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, semidirect products in §3.3"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

The bracket defining $\mathfrak g\ltimes_\rho\mathfrak h$ is bilinear,
alternating, and satisfies the Jacobi identity.

## Facts & Assumptions

**Given:** Lie algebras $\mathfrak g,\mathfrak h$ and a Lie homomorphism
$\rho:\mathfrak g\to\operatorname{Der}(\mathfrak h)$, with the bracket of
[[def-semidirect-product-of-lie-algebras]].

[L1] Each $\rho(x)$ is a derivation:
$\rho(x)[u,v]=[\rho(x)u,v]+[u,\rho(x)v]$.

[L2] Bracket preservation says
$[\rho(x),\rho(y)]=\rho([x,y])$.

## Proof

**Proof technique:** direct.

1.1 Every term in the displayed bracket is bilinear. Substituting the same pair twice gives $([x,x],\rho(x)u-\rho(x)u+[u,u])=(0,0)$, so the bracket is alternating. [given, algebra]

1.2 The first component of the cyclic Jacobi sum for $(x,u),(y,v),(z,w)$ is $[x,{[y,z]}]+[y,{[z,x]}]+[z,{[x,y]}]=0$ by Jacobi in $\mathfrak g$. [given]

1.3 In the second component, the terms containing two elements of $\mathfrak h$ and one action are, cyclically, $\rho(x)[v,w]-[\rho(x)v,w]-[v,\rho(x)w]$; each vanishes by [L1]. The terms with three elements of $\mathfrak h$ form their Jacobi sum and vanish. [L1, algebra]

1.4 The remaining terms are $([\rho(x),\rho(y)]-\rho([x,y]))w$ and its two cyclic analogues. They vanish by [L2]. Thus the entire second component is zero. [L2, algebra]

2.1 Both components of the Jacobi sum vanish, proving the claim. If one summand is zero, or if $\rho=0$, the calculation reduces to the componentwise Jacobi identity, so all boundary cases are already included and no choices are made. [step 1.2, step 1.3, step 1.4] ∎
