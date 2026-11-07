---
id: lem-s-unit-ext-is-global-cohomology-for-finite-modules
kind: lemma
title: S-unit Ext is global cohomology for finite modules
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-idele-class-module-of-a-global-field
  - lem-finite-module-ext-cohomology-for-divisible-coefficients
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for the S-idèle module, local unramified extensions and continuous Ext comparison.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.12(a), printed p.59. The unramified radical and actual finite-module Ext argument are supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field, $S$ a nonempty set of its places containing every archimedean place, and $M$ a finite continuous $G_{K,S}$-module with exponent $n$ a unit outside $S$ and prime to $\operatorname{char}K$ when the characteristic is positive. Write $E_{K,S}$ for the discrete direct-limit S-unit module and $M^D=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times)$. Then multiplication by $n$ on $E_{K,S}$ is surjective, the canonical evaluation map identifies $M$ with $\operatorname{Hom}_{\mathbb Z}(M^D,E_{K,S})$, and for every $r\ge0$ the actual Ext/cochain comparison is a natural isomorphism
$$\operatorname{Ext}^r_{G_{K,S}}(M^D,E_{K,S})\xrightarrow{\sim}H^r(G_{K,S},M).$$
These maps preserve the actual Yoneda/cup evaluation pairing. No global Poitou–Tate exactness is asserted.

## Facts & Assumptions

**Given:** The global field, nonempty $S$, finite module, exponent, characteristic hypotheses and explicit AC/CC/DC in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The S-unit module is the direct limit of units at finite stages of the maximal outside-S unramified tower. [[def-s-idele-class-module-of-a-global-field]]

[F2] Finite-module Ext with an $n$-divisible coefficient is the cohomology of its Hom module, compatibly with actual Yoneda/cup evaluation. [[lem-finite-module-ext-cohomology-for-divisible-coefficients]]

[F3] Finite residue extensions lift uniquely to unramified local extensions, and simple residue roots lift over a complete valued field. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

**Proof technique:** take radicals of actual S-units in the S-tower, then use the finite-module Ext/cochain comparison.

1.1 Let $F\subset K_S$ be finite and let $u$ be an $S_F$-unit. At every finite place $v\notin S_F$, the residue characteristic is prime to $n$ and $u$ is a unit. Choose a finite extension of the finite residue field in which $X^n-\bar u$ splits, lift it to a finite unramified extension by [F3], and lift each simple residue root by [F3]. Hence the splitting field of $X^n-u$ over $F_v$ is unramified. Its global splitting field over $F$ is finite and unramified at every place outside $S_F$; its normal closure over $K$ is unramified outside $S$ because $F/K$ is. Therefore it lies in $K_S$. Each root $a$ satisfies $n v(a)=v(u)=0$ outside $S$, so it is an S-unit. This proves $nE_{K,S}=E_{K,S}$, using additive notation for the multiplicative module. Applying the same argument to $u=1$ shows $\mu_n\subset K_S$. [A1, F1, F3, given, choose, construct, algebra]

2.1 Every value of $M^D$ lies in $\mu_n\subset E_{K,S}$, so $\operatorname{Hom}(M^D,E_{K,S})=\operatorname{Hom}(M^D,\mu_n)$. Since $n$ is invertible in the field characteristic, $\mu_n$ is cyclic of order $n$; the evaluation pairing identifies a finite group killed by $n$ with its double dual and is $G_{K,S}$-equivariant. Thus the actual evaluation isomorphism identifies this Hom module with $M$. [step 1.1, given, construct, algebra]

3.1 The finite module $M^D$ is killed by $n$ and the coefficient $E_{K,S}$ is $n$-divisible by step 1.1. Apply [F2], then substitute the actual evaluation isomorphism from step 2.1. The stated Ext/cohomology isomorphisms and the Yoneda/cup normalization follow in every nonnegative degree. The zero module and $n=1$ are included. [F2, step 1.1, step 2.1, algebra] ∎
