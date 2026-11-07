---
id: thm-smith-involution-spin-split-hilbert-product
kind: theorem
title: "The split Hilbert product for an involution-spin input"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-diagonal-spin-square-local-correction, lem-smith-diagonal-spin-odd-unramified-local-calculation, lem-smith-diagonal-spin-split-local-identity, lem-smith-diagonal-spin-inert-dyadic-calculation, thm-hilbert-reciprocity-product-formula-for-number-fields, thm-real-hilbert-symbol-formula, lem-tame-local-hilbert-symbol-residue-formula, thm-local-hilbert-symbol-cup-product-norm-criterion, thm-local-artin-reciprocity-and-norm-index]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from global Hilbert reciprocity
  and the stated local-field interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, involution-spin hypotheses"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K=F(\sqrt\delta)$ be a quadratic extension of number fields, let $\kappa$ be its nontrivial automorphism, and let $\alpha\in\mathcal O_K\setminus\{0\}$ have coprime ideals $(\alpha)$ and $(\kappa\alpha)$. Suppose that $\alpha$ is a square in $K_w$ for every place $w$ of $K$ above a place ramified in $K/F$, and that $K_w(\sqrt\alpha)/K_w$ is unramified at every place $w$ above an inert place of $F$ dividing $2$.

At each place $v$ of $F$ splitting in $K$, write $K\otimes_FF_v\cong F_v\times F_v$ and let $(x_v,y_v)$ be the image of $\alpha$. Let $H_{v,2}$ be the quadratic Hilbert symbol, with the real and complex conventions of global Hilbert reciprocity. Then all but finitely many factors below equal $1$, and
$$\prod_{v\text{ split in }K}H_{v,2}(x_v,y_v)=1.$$
This is an exact split Hilbert-product identity. It does not identify the dyadic split factors with any particular convention for the global spin symbol.

## Statement references

[[lem-smith-diagonal-spin-square-local-correction]]

[[lem-smith-diagonal-spin-odd-unramified-local-calculation]]

[[lem-smith-diagonal-spin-split-local-identity]]

[[lem-smith-diagonal-spin-inert-dyadic-calculation]]

[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the quadratic number-field extension, and $\alpha$ with the stated ideal and local properties.

[F1] For a local square input at a nonsplit nonarchimedean place, the trace-norm factor is $H_2(2,-\delta)$. [[lem-smith-diagonal-spin-square-local-correction]]

[F2] At an odd unramified inert place with unit input, the trace-norm factor is $1$; at an odd place the quadratic Hilbert symbol of two units is $1$. [[lem-smith-diagonal-spin-odd-unramified-local-calculation]] [[lem-tame-local-hilbert-symbol-residue-formula]]

[F3] At a split nonarchimedean place, $H_2(x+y,-xy)=H_2(x,y)$. [[lem-smith-diagonal-spin-split-local-identity]]

[F4] The inert dyadic unramified-input trace-norm factor is $H_2(2,-\delta)$. [[lem-smith-diagonal-spin-inert-dyadic-calculation]]

[F5] Global quadratic Hilbert symbols have finite support and product $1$, with the stated real and complex conventions. [[thm-hilbert-reciprocity-product-formula-for-number-fields]] [[thm-real-hilbert-symbol-formula]]

[F6] At a nonarchimedean place the quadratic Hilbert symbol is symmetric and bilinear on square classes and satisfies the local norm criterion. [[thm-local-hilbert-symbol-cup-product-norm-criterion]] [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

1.1 Put $t=\operatorname{Tr}_{K/F}(\alpha)$ and $a=N_{K/F}(\alpha)$. If $t=0$, then at every split place $y_v=-x_v$ and $H_{v,2}(x_v,-x_v)=1$ by the quadratic norm criterion; the claimed product is $1$. Hence assume $t\ne0$. At a nonsplit finite place the conjugation fixes the unique prime of $K$ above it. Since $(\alpha)$ and $(\kappa\alpha)$ are coprime and $\alpha$ is integral, $\alpha$ is a unit at that prime. [F1, F3, F5, F6, given, algebra]

2.1 At a finite ramified place, $\alpha$ is a local square by hypothesis, so [F1] gives $H_{v,2}(t,-\delta a)=H_{v,2}(2,-\delta)$. At an odd unramified inert place, replace $\delta$ by a square-equivalent unit and apply step 1.1 and [F2] to get $H_{v,2}(t,-\delta a)=1$; also $H_{v,2}(2,-\delta)=1$ because $2$ and a unit representative of the unramified square class $-\delta$ are units. At an inert dyadic place, [F4] gives the same equality. At a real nonsplit place, $K_w=\mathbb C$ and both $-\delta a$ and $-\delta$ are positive, so [F5] gives $1$ on both sides. [F1, F2, F4, F5, step 1.1, given, algebra]

2.2 At a split nonarchimedean place, $\delta$ is a square in $F_v$, while $t=x_v+y_v$ and $a=x_vy_v$. Thus [F3] gives $H_{v,2}(t,-\delta a)=H_{v,2}(x_v,y_v)$. The factor $H_{v,2}(2,-\delta)=H_{v,2}(2,-1)$ is $1$: if $2$ is nonsquare, $-1$ is the norm of $1+\sqrt2$ from $F_v(\sqrt2)$, and the square case is immediate. At a real split place the same trace identity follows directly from [F5] by comparing signs, and $H_{v,2}(2,-\delta)=1$; complex factors are $1$. [F3, F5, F6, step 1.1, algebra]

3.1 Apply [F5] to the two global pairs $(t,-\delta a)$ and $(2,-\delta)$ and divide the two product identities. The nonsplit factors cancel by step 2.1, and step 2.2 identifies each split quotient with $H_{v,2}(x_v,y_v)$. This proves the product formula. It has finite support because [F5] gives finite support for the two global Hilbert products. The statement makes no claim about a separate dyadic spin-symbol normalization. [F5, step 2.1, step 2.2, algebra] ∎
