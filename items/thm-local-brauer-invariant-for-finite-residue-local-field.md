---
id: thm-local-brauer-invariant-for-finite-residue-local-field
kind: theorem
title: The local Brauer invariant is an isomorphism for a finite-residue local field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-local-invariant-map-of-the-brauer-group
- lem-local-unramified-degree-two-cohomology-and-inflation
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- lem-local-division-algebra-has-unramified-maximal-subfield
- lem-finite-density-and-central-simple-base-change
- lem-unramified-local-unit-norms-and-cohomology
- lem-cyclic-group-cohomology-norm-and-inflation
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- cor-finite-extensions-of-finite-fields-are-simple
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: Romyar Sharifi, Algebraic Number Theory, Chapter 9, §9.1, Theorem 9.1.15
    url: https://www.math.ucla.edu/~sharifi/algnum.pdf
verification: {}
---

## Statement

Let $K$ be a complete discretely valued nonarchimedean field with finite
residue field. The normalized local invariant is a group isomorphism
$$\operatorname{inv}_K:\operatorname{Br}(K)\xrightarrow{\sim}\mathbb Q/\mathbb Z.$$
More precisely, inflation from the maximal unramified extension identifies
$\operatorname{Br}(K)$ with its unramified relative Brauer group, valuation
identifies that relative group with
$H^2(\operatorname{Gal}(K^{\mathrm{ur}}/K),\mathbb Z)$, and
$\operatorname{inv}_K$ is the Bockstein map followed by evaluation at
arithmetic Frobenius.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-invariant-map-of-the-brauer-group]]

[J. S. Milne, *Class Field Theory*, Chapter IV, §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Romyar Sharifi, *Algebraic Number Theory*, Chapter 9, §9.1, Theorem 9.1.15](https://www.math.ucla.edu/~sharifi/algnum.pdf)

## Facts & Assumptions

**Given:** The complete finite-residue local field and normalized invariant convention in the Statement. Here the Brauer group means the algebraic group of central simple similarity classes; the proof uses no arbitrary-field absolute cohomology comparison.

[F1] On unramified classes the normalization is valuation followed by inverse Bockstein and arithmetic Frobenius evaluation. [[def-local-invariant-map-of-the-brauer-group]]

[F2] The unqualified unramified comparison identifies algebraic Brauer classes with $H^2_{\mathrm{cts}}(\Gamma,(K^{\mathrm{ur}})^\times)$; valuation and the Bockstein are isomorphisms, and the finite valuation class $r\bmod n$ evaluates to $r/n\bmod\mathbb Z$. The separately qualified absolute comparison in that lemma is not used. [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F3] Algebraic Brauer classes form an abelian group. For each finite Galois splitting field, their relative group is isomorphic to finite $H^2$ via $b_E=-o_E$, with $b_E([A(c)])=[c]$, compatibly with enlargement. These assertions do not require a choice axiom. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F4] A central simple algebra has a division representative, and every local division representative splits over a finite unramified extension. [[lem-finite-density-and-central-simple-base-change]] [[lem-local-division-algebra-has-unramified-maximal-subfield]]

[F5] Unramified unit norms are onto. Cyclic degree-two cohomology is the norm quotient, and inflation on degree-two $\mathbb Z$-classes along $C_{an}\to C_n$ multiplies by $a$. [[lem-unramified-local-unit-norms-and-cohomology]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F6] Every positive unramified degree occurs; finite unramified extensions have cyclic Galois groups with arithmetic Frobenius generators, classified by their finite residue extensions. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F7] A finite residue-field extension is simple; simple residue roots lift uniquely in a complete field; and a finite local degree is ramification index times residue degree. [[cor-finite-extensions-of-finite-fields-are-simple]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

## Proof

**Proof technique:** finite unramified crossed products, followed by the unramified cochain comparison.

**Given:** The data above.

1.1 For an algebraic Brauer class $\alpha$, choose one finite unramified splitting field $E/K$ by [F4], and put $n=[E:K]$. By [F3,F5], its finite comparison class lies in $H^2(C_n,E^\times)=K^\times/N_{E/K}E^\times$. Unit norm surjectivity and $v_K(Nx)=n v_E(x)$ identify this quotient with $\mathbb Z/n\mathbb Z$ by valuation; the norm formula follows by multiplying the $n$ valuation-preserving conjugates, since the extension is unramified. Write its coordinate as $r\bmod n$ and assign $\alpha$ the value $r/n\bmod\mathbb Z$. This uses only one finite splitting field for the class under consideration. [F3, F4, F5, F6, given, choose, algebra]

2.1 This value is independent of the splitting field. Given two finite unramified fields of degrees $n,m$, take a finite unramified extension of degree $\operatorname{lcm}(n,m)$ by [F6]. Each embeds into it. Indeed its finite residue field embeds into the larger finite residue field because its degree divides the latter degree. Choose a primitive residue generator by [F7] and lift its monic degree-$n$ minimal polynomial coefficientwise to $P\in\mathcal O_K[T]$. Hensel gives in both the original degree-$n$ field and the larger field a root of $P$ with the specified residue. In the former, that root has degree at least $n$ by its residue degree and at most $n$ by $P$, so it generates the field and $P$ is its minimal polynomial. The root in the larger field therefore defines the required embedding; the same argument applies to degree $m$. Thus there is a common finite unramified splitting level without choosing a global closure. By [F3], the comparison classes enlarge by cochain inflation and coefficient inclusion. Valuation commutes with these maps, so [F5] sends $r\bmod n$ to $ar\bmod an$, preserving $r/n$. The maps at any common level are group homomorphisms, so the assigned value is additive. A change of the field embeddings does not affect it: each isomorphism preserves valuation and arithmetic Frobenius by [F6]. Defining the value as the unique such rational class for each $\alpha$ therefore defines one homomorphism without simultaneous choices of splitting fields. [F3, F5, F6, F7, step 1.1, construct, algebra]

3.1 If the value is zero, then $r=0\bmod n$ and the finite norm quotient in step 1.1 is zero, so injectivity of [F3] gives $\alpha=0$. Conversely, every $r/n\bmod\mathbb Z$ occurs: choose a degree-$n$ unramified extension by [F6] and the cyclic carry cocycle with parameter $\pi_K^r$. Its crossed product has finite comparison equal to that cocycle by [F3], and valuation coordinate $r$. Thus the homomorphism is injective and onto. Degree one and the zero class give value zero; mixed and equal characteristic are both included in [F4–F6]. [F3, F4, F5, F6, step 1.1, step 2.1, construct, algebra]

4.1 For any chosen maximal unramified extension, [F2] identifies this same algebraic group with its unramified relative cohomology, then with $H^2(\Gamma,\mathbb Z)$ by valuation. Inverse Bockstein and arithmetic Frobenius evaluation give exactly the finite coordinate $r/n$ computed in step 1.1. Hence the isomorphism of step 3.1 agrees with the normalized convention [F1] and proves all the more precise unramified identifications in the Statement. The algebraic isomorphism was already constructed by finite splitting fields, so no generic separable-closure existence or arbitrary-field absolute $H^2$ comparison is a premise of it. [F1, F2, step 1.1, step 3.1, algebra] ∎
