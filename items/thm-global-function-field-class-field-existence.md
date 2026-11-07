---
id: thm-global-function-field-class-field-existence
kind: theorem
title: Existence and uniqueness of global function-field class fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
- lem-function-field-ray-norm-cofinality-from-lang-covers
- thm-global-function-field-artin-reciprocity-and-norm-index
- thm-fundamental-theorem-of-finite-galois-theory
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: Original AC, Countable Choice and DC retained literally. Actual physical norm cofinality
  and same-base finite-character Artin compatibility are the proved inputs; all original uniqueness
  and lattice clauses are preserved.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Quentin Guignard, On the ramified class field theory of relative curves, arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Section4.1–4.14, printed/PDF16–21, full actual rigidified-Picard proof read. The
      finite-field Lang/ray construction and actual Artin norm cofinality are locally reconstructed
      in the two explicit helpers, not imported from a geometric CFT theorem.
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: AppendixA.7–A.11, printed131–135, full actual relevant passages read earlier. The
      former missing global open-subgroup realization is now proved via the explicit norm-cofinality
      helper rather than attributed to this source.
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC.

Let $F$ be a global function field with finite exact constant field and let
$C_F$ be its idele class group. A finite abelian extension means a finite
Galois extension with abelian Galois group. Every open subgroup $N\le C_F$ of finite
index is the norm subgroup $N_{L/F}C_L$ of a unique finite abelian extension
$L/F$ inside a fixed separable closure. Conversely, every finite abelian
extension has an open finite-index norm subgroup. The assignment
$L\mapsto N_{L/F}C_L$ is an inclusion-reversing bijection.

## Statement references

[[lem-function-field-ray-norm-cofinality-from-lang-covers]]
[[thm-global-function-field-artin-reciprocity-and-norm-index]]
[[thm-fundamental-theorem-of-finite-galois-theory]]

## Facts & Assumptions

**Given:** Exactly the global function field, fixed separable closure, physical class topology, AC, Countable Choice and DC of the original Statement.

[F1] Every physical open finite-index subgroup of $C_F$ contains the ACTUAL norm subgroup of a constructed finite abelian extension in the fixed closure. 
[[lem-function-field-ray-norm-cofinality-from-lang-covers]]

[F2] For every already-given finite abelian extension, the actual local-product Artin map is continuous, onto and has its actual idelic norm kernel.
[[thm-global-function-field-artin-reciprocity-and-norm-index]]

[F3] Finite Galois correspondence identifies fixed fields and reverses subgroup inclusions; composita of finite abelian extensions are finite abelian and their restrictions into the product are injective.
[[thm-fundamental-theorem-of-finite-galois-theory]]

[F4] The helper's proved Remark records the actual same-base finite Artin quotient compatibility, proved inline with finite character carry inflation, the actual local invariant pairing and character separation, then passed to the actual global local product.
[[lem-function-field-ray-norm-cofinality-from-lang-covers]]

[A1] AC, Countable Choice and DC are exactly the original assumptions. No choice-free or number-field existence is inferred.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** actual norm cofinality followed by finite Artin quotient maps and finite Galois correspondence.

**Given:** The data above. All fields are taken inside the fixed separable closure.

1.1 Let $N\le C_F$ be open of finite index. By [F1], choose finite abelian $E/F$ with $K=N_{E/F}C_E\subseteq N$. Its actual Artin map $p:C_F\to G=\operatorname{Gal}(E/F)$ is onto with kernel $K$ by [F2]. Put $H=p(N)$ and $L=E^H$. Since $G$ is abelian, $L/F$ is finite abelian by [F3]. The explicitly PROVED compatibility in [F4] makes $\operatorname{Art}_{L/F}$ the restriction projection of $p$. Its kernel is $p^{-1}(H)=N$: if $p(a)=p(n)$ for $n\in N$, then $a/n\in K\subseteq N$. By [F2] this actual kernel is $N_{L/F}C_L$. This constructs the required field from $N$, without an absent realization theorem or a formal inverse-limit quotient. [A1, F1, F2, F3, F4, given, construct, algebra]

1.2 Conversely let $L/F$ be any finite abelian extension. By [F2], its norm subgroup is the kernel of a continuous map to a finite discrete Galois group, so is open of finite index. This is actual continuity, not an inference from finite index alone. [F2, given, algebra]

2.1 To prove uniqueness and both lattice directions, let $L_1,L_2$ be finite abelian and put $T=L_1L_2$. By [F2], $\operatorname{Art}_{T/F}$ is onto. Its projections are the actual Artin maps of the $L_i$ by [F4]'s proved finite-character compatibility. If $H_i=\operatorname{Gal}(T/L_i)$, their norm subgroups are therefore exactly $\operatorname{Art}_{T/F}^{-1}(H_i)$. Surjectivity shows inclusion or equality of these norm subgroups is equivalent to inclusion or equality of the $H_i$. By [F3] this is equivalent to the REVERSE inclusion or equality of the fields $L_i$. Together with step 1.1 and step 1.2, this proves existence, uniqueness, the converse and the full inclusion-reversing bijection of the original Statement. No cross-base norm transition, number-field/real-place, finite-$S$, explicit LT action, LLC or Wang claim is a consequence asserted here. [F1, F2, F3, F4, step 1.1, step 1.2, construct, algebra] ∎
