---
id: ex-localised-hom-needs-finite-presentation
kind: example
title: "Localised Hom can fail without finite presentation of the source"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-of-hom-for-finitely-presented-modules, thm-localisation-of-modules-commutes-with-quotients-and-sums, thm-universal-property-of-module-direct-sums, def-direct-sum-of-a-family-of-modules]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 12.26"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Fix a prime number $p$, let $S=\{p^n:n\in\mathbb N\}$, let
$$
M=\bigoplus_{n\ge0}\mathbb Z e_n,
$$
and let $N=\mathbb Z$. The source $M$ is not finitely presented, and the natural map
$$
S^{-1}\!\operatorname{Hom}_{\mathbb Z}(M,N)\longrightarrow\operatorname{Hom}_{\mathbb Z[1/p]}(S^{-1}M,S^{-1}N)
$$
is not surjective.

## Facts & Assumptions

**Given:** A prime number $p$, the multiplicative set $S=\{p^n:n\in\mathbb N\}$, the free $\mathbb Z$-module $M=\bigoplus_{n\ge0}\mathbb Z e_n$, and the target module $N=\mathbb Z$.

[L1] The finite-presentation theorem gives an isomorphism only under finite-presentation hypotheses on the source ([[thm-localisation-of-hom-for-finitely-presented-modules]]).

[L2] Localisation commutes with direct sums, so $S^{-1}M \cong \bigoplus_{n\ge0}\mathbb Z[1/p] e_n$ ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L3] A homomorphism out of a direct sum is determined by its values on the coordinate inclusions ([[thm-universal-property-of-module-direct-sums]], [[def-direct-sum-of-a-family-of-modules]]).

## Verification

**Proof technique:** direct.

1.1 The module $M$ is free on countably many generators, so it is not finitely generated and therefore not finitely presented. [L3, algebra]

1.2 By [L2] and [L3], there is a $\mathbb Z[1/p]$-linear map $\varphi:S^{-1}M \to \mathbb Z[1/p]$ with $\varphi(e_n)=1/p^n$ for every $n \ge 0$. [L2, L3, construct]

2.1 Suppose $\varphi$ were in the image of the localisation-of-Hom map. Then there would be a homomorphism $f:M \to \mathbb Z$ and an integer $r \ge 0$ such that $\varphi(e_n)=f(e_n)/p^r$ for every $n$. Taking $n>r$ gives $f(e_n)=p^{r-n}$, impossible in $\mathbb Z$. Therefore $\varphi$ is not in the image. [step 1.2, algebra]

3.1 So the localisation-of-Hom map fails to be surjective for this non-finitely-presented source, exactly as warned by [L1]. [L1, step 1.1, step 2.1] ∎
