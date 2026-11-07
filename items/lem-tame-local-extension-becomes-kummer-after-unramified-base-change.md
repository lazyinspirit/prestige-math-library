---
id: lem-tame-local-extension-becomes-kummer-after-unramified-base-change
kind: lemma
title: "A finite totally ramified tame extension becomes Kummer after unramified base change"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-nonarchimedean-local-valuations-are-intrinsic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-fundamental-theorem-of-finite-galois-theory
  - cor-finite-subgroups-of-units-in-a-domain-are-cyclic
  - lem-hensel-factor-lifting-over-a-complete-valued-field
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, Chapter IV, §8.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §5.3"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $K$ be a nonarchimedean local field with finite
residue field of characteristic $p$, let $\pi_K$ be a uniformizer, and let
$L/K$ be a finite totally ramified extension of ramification index $e$ with
$p\nmid e$. Then there is a finite unramified extension $K'/K$ and an element
$\beta\in LK'$ such that
$$LK'=K'(\beta),\qquad \beta^e=\pi_K,$$
and $K'$ contains the $e$th roots of unity, where $\mu_e(F)=\{z\in F^\times:z^e=1\}$. Thus
$LK'/K'$ is cyclic Galois of degree $e$, with its automorphisms acting by
$\beta\mapsto\zeta\beta$ for $\zeta\in\mu_e$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, §8.2, printed p. 169](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §5.3, printed pp. 31–32](https://masaooi.github.io/LLC.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $K$, $L/K$, $p$, $e$, and $\pi_K$ as in the
Statement.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a
choice function; this is the axiom used by [F2] and [F3].

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: $K$
and $L$ are complete discretely valued fields with finite residue fields.

[F2] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]:
for a finite local extension, $[L:K]=e(L/K)[k_L:k]$.

[F3] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]:
every finite extension of $k$ is realized as the residue extension of a
finite unramified extension of $K$.

[F4] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]:
finite extensions of finite fields are cyclic Galois, and their degree-$d$
extension is the splitting field of $X^{|k|^d}-X$.

[F5] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]:
a simple root in the residue field of a complete valued field lifts uniquely
to a root in its valuation ring.

[F6] [[thm-fundamental-theorem-of-finite-galois-theory]]: for a finite
Galois extension, the fixed field of the restriction image determines that
image by the Galois correspondence.

[F7] [[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]: a finite subgroup of the multiplicative group of a field is cyclic, with no Choice assumption.

[F8] [[lem-nonarchimedean-local-valuations-are-intrinsic]]: under CC the given complete local valuations in a finite extension are the normalized extending ones, with restriction multiplied by the positive ramification index.

## Proof

1.1 Under [A1], [F8] identifies the given valuations with those constructed by [F2], so $v_L(\pi_K)=e$. Equip all finite intermediate and compositum fields below with their complete normalized extending valuations from [F2]; [F8] identifies them with any given local valuations and makes their restriction data compatible. Let $\varpi_L$ be a uniformizer of $L$ and put $u=\varpi_L^e/\pi_K\in\mathcal O_L^\times$. Its residue $\bar u$ lies in $k^\times$, because $L/K$ is totally ramified. Choose a finite extension $k'/k$ containing $\mu_e$ and an $e$th root of $\bar u$; adjoining these finitely many algebraic elements gives such a finite extension, and [F3] realizes it as the residue field of a finite unramified extension $K'/K$. Every $\zeta\in\mu_e(k')$ is a simple root of $X^e-1$, since $p\nmid e$; by [F5] its lift is an $e$th root of unity in $K'$. The $e$ distinct residue roots give all of $\mu_e$, so $K'$ contains $\mu_e$. Let $M=L\cap K'$. Since $M/K$ is both unramified and totally ramified, [F2] gives $[M:K]=e(M/K)f(M/K)=1$. Put $F=LK'$. Because $K'/K$ is Galois, $F/L$ is Galois. The image $H$ of $\mathrm{Gal}(F/L)$ in $\mathrm{Gal}(K'/K)$ has fixed field $K'\cap F^{\mathrm{Gal}(F/L)} =K'\cap L=K$; by [F6], $H=\mathrm{Gal}(K'/K)$. Hence $[F:L]=[K':K]$ and $[LK':K']=[L:K]=e$ by [F2]. [A1, F1, F2, F3, F4, F5, F6, F8, given, construct, choose]

2.1 In $LK'$, the residue of $u$ has an $e$th root in $k'$. Since $p\nmid e$, the derivative of $X^e-u$ at that residue root is nonzero. By [F5], there is $v\in\mathcal O_{LK'}^\times$ with $v^e=u$. Set $\beta=\varpi_L/v$. Then $\beta^e=\pi_K$. The extended valuation with $v_{K'}(\pi_K)=1$ has $v(\beta)=1/e$. Therefore the ramification index of $K'(\beta)/K'$ is at least $e$. Its degree is at least that index by [F2] and at most $e$ because $\beta$ satisfies $X^e-\pi_K$, so $[K'(\beta):K']=e$. Since $K'(\beta)\subseteq LK'$ and both extensions have degree $e$ over $K'$ by step 1.1, they are equal. [F1, F2, F5, step 1.1, algebra, construct]

3.1 The roots of $X^e-\pi_K$ are $\zeta\beta$ for $\zeta\in\mu_e$, and $K'$ contains all of $\mu_e$ by construction. The polynomial is separable because $p\nmid e$ and $\beta\ne0$, so it splits into distinct roots in $K'(\beta)=LK'$. Therefore $LK'/K'$ is Galois; its degree is $e$, and the automorphisms are exactly the $e$ maps $\beta\mapsto\zeta\beta$. Composition identifies its group with $\mu_e(K')$, a finite subgroup of $K'^\times$, which is cyclic by [F7]. [F7, step 1.1, step 2.1, algebra] ∎
