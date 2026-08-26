---
id: thm-localisation-of-modules-is-tensor-product
kind: theorem
title: "Localisation of modules is extension of scalars"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-localisation-of-a-module, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced, thm-commutative-ring-module-structure-on-a-tensor-product, thm-localisation-equivalence-and-ring-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary 12.13"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.9: Localization"
      url: "https://stacks.math.columbia.edu/tag/00CM"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S \subseteq R$ be multiplicative, and let $M$ be a left $R$-module. The map
$$
\Phi:(S^{-1}R)\otimes_R M \longrightarrow S^{-1}M, \qquad \Phi\bigl((a/s)\otimes m\bigr)=am/s,
$$
is an isomorphism of $S^{-1}R$-modules. Its inverse is
$$
\Psi:S^{-1}M \longrightarrow (S^{-1}R)\otimes_R M, \qquad \Psi(m/s)=(1/s)\otimes m.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, and a left $R$-module $M$.

[L1] A balanced pairing on $(S^{-1}R) \times M$ induces a unique homomorphism from $(S^{-1}R)\otimes_R M$ ([[thm-universal-property-of-module-tensor-products]], [[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

[L2] Over a commutative ring, a tensor product carries the scalar action $r(x \otimes m)=(rx)\otimes m$ ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

[L3] The localisation map $M \to S^{-1}M$ is universal for maps into $S^{-1}R$-modules ([[thm-universal-property-localisation-of-a-module]]).

[L4] In $S^{-1}R$, fraction arithmetic is well defined and every $s/1$ with $s \in S$ is a unit with inverse $1/s$ ([[thm-localisation-equivalence-and-ring-laws]]).

## Proof

**Proof technique:** direct.

1.1 The pairing $q((a/s),m)=am/s$ is balanced because it is additive in each variable and $q(((a/s)r),m)=arm/s=q(a/s,rm)$ for every $r \in R$. [L1, L4, algebra]

1.2 The map $i:M \to (S^{-1}R)\otimes_R M$, $i(m)=(1/1)\otimes m$, is $R$-linear, and every $s \in S$ acts invertibly on the target because $(s/1)^{-1}=1/s$ in $S^{-1}R$. [L2, L4, algebra]

2.1 By [L1], step 1.1 induces a unique homomorphism $\Phi:(S^{-1}R)\otimes_R M \to S^{-1}M$ with $\Phi((a/s)\otimes m)=am/s$. [step 1.1, L1, construct]

2.2 By [L3], step 1.2 induces a unique $S^{-1}R$-linear map $\Psi:S^{-1}M \to (S^{-1}R)\otimes_R M$ with $\Psi(m/s)=(1/s)\otimes m$. [step 1.2, L3, construct]

3.1 For every $m/s \in S^{-1}M$, $(\Phi \Psi)(m/s)=\Phi((1/s)\otimes m)=m/s$. [step 2.1, step 2.2]

3.2 For every elementary tensor $(a/s)\otimes m$, $(\Psi \Phi)((a/s)\otimes m)=\Psi(am/s)=(1/s)\otimes am=(a/s)\otimes m$ by the tensor scalar action of [L2]. [step 2.1, step 2.2, L2, algebra]

4.1 Steps 3.1 and 3.2 show that $\Phi$ and $\Psi$ are inverse $S^{-1}R$-linear isomorphisms. [step 3.1, step 3.2] ∎
