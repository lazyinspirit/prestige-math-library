---
id: lem-s-tower-local-primary-ext-comparison
kind: lemma
title: Local primary Ext comparison for an S-tower
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-s-tower-kills-local-primary-brauer-classes
  - lem-primary-ext-inflation-from-low-normal-cohomology
  - lem-finite-module-ext-cohomology-for-divisible-coefficients
  - thm-hilbert-90-for-absolute-galois-group
  - lem-local-invariant-restriction-scaling
  - lem-local-unramified-degree-two-cohomology-and-inflation
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for local completions, continuous Ext and normalized local cohomology.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.13, printed pp.59–61. The closed-subgroup continuity, primary inflation and actual Ext/cochain comparison are supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field, $S$ a set of places containing all archimedean places, and $K_S$ its maximal extension unramified outside $S$. Let $\ell$ be a prime such that every place of a number field $K$ above $\ell$ lies in $S$, or $\ell\ne\operatorname{char}K$ for a function field. Fix a finite place $v$, a separable closure $K_{v,s}$ and a compatible embedding of $K_S$. Let $E_v\subset K_{v,s}$ be the union of the images of the completions $F_w$ for finite $F\subset K_S$, put $G_v=\operatorname{Gal}(K_{v,s}/K_v)$ and $Q_v=\operatorname{Gal}(E_v/K_v)$. For every finite continuous $\ell$-primary $Q_v$-module $M$, inflation and the actual cochain comparison induce natural isomorphisms
$$\operatorname{Ext}^r_{Q_v}(M,E_v^\times)\xrightarrow{\sim}H^r(G_v,\operatorname{Hom}_{\mathbb Z}(M,K_{v,s}^\times))\qquad(r=0,1,2).$$
The maps preserve the actual Yoneda/cup evaluation pairing. This does not assert that $E_v=K_{v,s}$, compare restricted products, or prove Poitou–Tate exactness.

## Facts & Assumptions

**Given:** The global field, tower, prime, finite place, compatible embedding, module and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The permitted S-tower has unbounded $\ell$-adic local degrees at every finite place; local restriction multiplies normalized degree-two invariants by local degree. [[lem-s-tower-kills-local-primary-brauer-classes]] [[lem-local-invariant-restriction-scaling]] [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F2] If a closed normal subgroup has zero $H^1$ and zero $\ell$-primary $H^2$, actual Ext inflation for finite $\ell$-primary coefficients is an isomorphism in degrees zero through two. [[lem-primary-ext-inflation-from-low-normal-cohomology]]

[F3] If multiplication by the annihilator of a finite module is onto the coefficient, its actual continuous Ext is cohomology of the Hom module, compatibly with Yoneda/cup evaluation. [[lem-finite-module-ext-cohomology-for-divisible-coefficients]]

[F4] Absolute Hilbert 90 gives zero first cohomology for the multiplicative group of a separable closure of any field. [[thm-hilbert-90-for-absolute-galois-group]]

## Proof

**Proof technique:** kill low normal-subgroup cohomology by local cyclotomic degrees, then apply primary Ext inflation and divisible-coefficient comparison.

1.1 The union $E_v$ is an algebraic Galois extension of $K_v$: $K_S/K$ is normal, and the decomposition group at the chosen place acts continuously on all finite local stages. Thus $H_v=\operatorname{Gal}(K_{v,s}/E_v)$ is closed normal in $G_v$ with quotient $Q_v$, and $K_{v,s}$ is a separable closure of $E_v$. Hence $H^1(H_v,K_{v,s}^\times)=0$ by [F4]. [F4, given, construct, algebra]

1.2 Continuous cohomology of a closed subgroup is the filtered limit of the cohomologies of its open neighborhoods. Indeed a continuous cochain on the compact power of $H_v$ has finite image and factors through a finite quotient; choose an open normal subgroup of $G_v$ fixing its values and making that factorization valid. The isomorphism $H_vN/N\cong H_v/(H_v\cap N)$ extends the cochain to $H_vN$ with fixed coefficients and preserves its differential. A finite-image primitive extends in the same way, so the induced map on the filtered limit is injective as well as surjective. The fixed fields of these open neighborhoods are finite subextensions of $E_v/K_v$, each contained in some completion $F_w$ from a finite global stage. Thus any $\ell$-primary degree-two class of $H_v$ is represented by an $\ell$-primary class over some $F_w$: if an $\ell$-power multiple is already zero in the limit, enlarge the stage until that multiple is zero. [A1, given, choose, construct, algebra]

2.1 Fix such a finite stage $F_w$ and an $\ell$-primary invariant of order dividing $\ell^a$. By [F1], local degrees of finite stages over $K_v$ have unbounded $\ell$-valuation. Choose one with valuation at least $a+v_\ell([F_w:K_v])$ and take its global compositum with $F$ inside $K_S$; a completion of the compositum contains both local stages. Its degree over $F_w$ is divisible by $\ell^a$, since the degree over $K_v$ is divisible by the degree of the chosen high-degree local stage. The actual restriction-scaling formula [F1] kills the invariant and hence the class. Step 1.2 therefore gives $H^2(H_v,K_{v,s}^\times)(\ell)=0$. [F1, step 1.2, given, choose, construct, algebra]

3.1 By steps 1.1 and 2.1, [F2] gives actual inflation isomorphisms $\operatorname{Ext}^r_{Q_v}(M,E_v^\times)\cong\operatorname{Ext}^r_{G_v}(M,K_{v,s}^\times)$ for $r=0,1,2$. If $\ell^a M=0$, multiplication by $\ell^a$ is onto $K_{v,s}^\times$: the equation $X^{\ell^a}=b$ is separable in the permitted characteristic and has a root in the separable closure. Applying [F3] gives the stated cohomology groups and the actual Yoneda/cup compatibility. The zero module is included. [F2, F3, step 1.1, step 2.1, algebra] ∎
