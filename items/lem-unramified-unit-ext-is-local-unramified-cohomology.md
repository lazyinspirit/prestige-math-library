---
id: lem-unramified-unit-ext-is-local-unramified-cohomology
kind: lemma
title: Unramified unit Ext is unramified cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - lem-primary-ext-inflation-from-low-normal-cohomology
  - lem-finite-module-ext-cohomology-for-divisible-coefficients
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - lem-cyclic-group-cohomology-norm-and-inflation
proof_strategy: direct
axiom_use: AC and DC are explicit for continuous Ext, unramified unit cohomology and finite-quotient limits.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemmas 4.12–4.13, printed pp.59–60. The finite-stage unramified-unit identification is supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a nonarchimedean local field with finite residue field of characteristic $p$, let $K^{\rm ur}$ be its maximal unramified extension, and put $\Gamma=\operatorname{Gal}(K^{\rm ur}/K)$. Let $E/K$ be finite unramified, $D=\operatorname{Gal}(E/K)$, and let $M$ be a finite $D$-module of order prime to $p$. With $M^D=\operatorname{Hom}_{\mathbb Z}(M,\mu_n(K_s))$ for any annihilator $n$ prime to $p$, the actual inflation and Ext/cochain maps give natural isomorphisms
$$\operatorname{Ext}^r_D(M,\mathcal O_E^\times)\xrightarrow{\sim}H^r(\Gamma,M^D)\qquad(r=0,1,2).$$
The right side is zero for $r=2$. All isomorphisms preserve the actual Yoneda/cup evaluation maps. This is a finite-stage unramified-unit statement, not the global restricted-product assembly.

## Facts & Assumptions

**Given:** The local field, finite unramified extension, finite module, prime-to-residue annihilator and explicit AC/DC in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Units in every finite unramified Galois extension have vanishing positive group cohomology. Continuous cohomology is the filtered limit of finite-quotient cohomology. [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F2] Actual finite-primary Ext inflation is an isomorphism in degrees zero through two if the normal subgroup has zero $H^1$ and zero primary $H^2$; finite-module Ext for an $n$-divisible coefficient is cohomology of its Hom, with actual Yoneda/cup normalization. [[lem-primary-ext-inflation-from-low-normal-cohomology]] [[lem-finite-module-ext-cohomology-for-divisible-coefficients]]

[F3] The unramified Galois group is procyclic with Frobenius generator; finite residue extensions lift uniquely to unramified local extensions, and simple residue roots lift. [[thm-absolute-galois-group-of-finite-field-is-procyclic]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] Finite cyclic degree-two cohomology is the invariant quotient by the norm, and inflation along a quotient of degree multiplied by $a$ multiplies its class by $a$. [[lem-cyclic-group-cohomology-norm-and-inflation]]

## Proof

**Proof technique:** unramified-unit acyclicity, actual Ext inflation and prime-to-residue Hensel divisibility.

1.1 Write $H=\operatorname{Gal}(K^{\rm ur}/E)$ and $U=\mathcal O_{K^{\rm ur}}^\times=\varinjlim_{E'/E\text{ finite unramified}}\mathcal O_{E'}^\times$ as a discrete $\Gamma$-module. Its $H$-invariants are $\mathcal O_E^\times$. By [F1], the finite-quotient comparison gives $H^r(H,U)=0$ for every $r>0$, since every finite unramified unit group has zero positive cohomology. [F1, given, construct, algebra]

1.2 Multiplication by $n$ is onto $U$: for a unit $u$ in a finite unramified stage, adjoin a finite residue-field extension containing an $n$th root of its residue, lift that extension unramified by [F3], and lift the simple root of $X^n-u$ by Hensel since $p\nmid n$. The $n$th roots of unity themselves occur in such unramified stages, so $\operatorname{Hom}(M,U)=M^D$ with its actual Frobenius action. [F3, given, choose, construct, algebra]

2.1 Decompose $M$ into its canonical primary $D$-submodules. Apply the first part of [F2] to each primary part and the extension $1\to H\to\Gamma\to D\to1$: step 1.1 makes its hypotheses true, and the source coefficient is $U^H=\mathcal O_E^\times$. The second part of [F2] applies to $U$ by step 1.2. Finite direct sums give the stated actual isomorphisms for $r=0,1,2$ and their Yoneda/cup compatibility. [F2, step 1.1, step 1.2, algebra]

3.1 The right degree-two group is zero. By [F3] the acting group is $\widehat{\mathbb Z}$; every class with finite coefficient $M^D$ descends to a finite cyclic quotient. By [F4], enlarging that quotient by a factor divisible by the coefficient exponent multiplies the degree-two representative by that factor and kills it. This also covers the zero module and trivial extension. [F3, F4, step 2.1, algebra] ∎
