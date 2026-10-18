---
id: cex-place-permutation-is-not-a-nondegenerate-hecke-generator
kind: counterexample
title: "A place permutation is not the nondegenerate Hecke generator at xi=-1"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-category-o-klr-and-hecke-route-conventions
  - def-affine-and-cyclotomic-type-a-hecke-algebras
  - def-nondegenerate-root-of-unity-level-one-hecke-regime
  - def-arakawa-suzuki-casimir-operators-on-tensor-functors
  - thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations
  - thm-tensor-product-basis-from-bases
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, AMS University Lecture Series 15 manuscript, complete 79-page book text"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2, printed pp. 5–9: the quadratic Hecke relation and the parameter-one group-algebra specialization."
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998), complete 16-page preprint"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "§2.2, printed pp. 6–7: the place-permutation generator in the degenerate tensor-functor action."

---

## Statement

Let $M=\mathbb C$ be the trivial $\mathfrak{gl}_2(\mathbb C)$-module and let
$V=\mathbb C^2$. On $M\otimes V^{\otimes2}\cong V\otimes V$, let
$P=P_{12}$ interchange the two natural factors. On the basis vector
$v=e_1\otimes e_1$, one has $Pv=v$.
For the nondegenerate type-A Hecke algebra at parameter $\xi=-1$, its
generator $T_1$ must satisfy
$$T_1^2=-2T_1-1.$$
Consequently the assignment $T_1\mapsto P$ is not a representation of this
Hecke algebra. This refutes the naive identification of the degenerate
place-permutation generator with the nondegenerate generator at this
parameter; it does not rule out other Hecke–KLR or Schur–Weyl maps.

## Facts & Assumptions

**Given:** $F=\mathbb C$, $\xi=-1$, the trivial $\mathfrak{gl}_2$-module
$M=\mathbb C$, $V=\mathbb C^2$ with basis $e_1,e_2$, and the place
permutation $P$ on $M\otimes V^{\otimes2}\cong V\otimes V$.

[F1] [[def-category-o-klr-and-hecke-route-conventions]]: the Category-O
tensor-functor generator belongs to the degenerate affine route, while $\xi$
denotes the separate nondegenerate finite-Hecke parameter.

[F2] [[def-nondegenerate-root-of-unity-level-one-hecke-regime]]: the
nondegenerate branch has $\xi\ne1$ and finite quantum characteristic.

[F3] [[def-affine-and-cyclotomic-type-a-hecke-algebras]]: the nondegenerate
quadratic relation is $T_i^2=(q-1)T_i+q$.

[F4] [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]:
$s_i=P_{i,i+1}$ is the place-permutation operator in the degenerate tensor
action.

[F5] [[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]:
the operators $s_i=P_{i,i+1}$ satisfy the degenerate affine Hecke relations
on $M\otimes V^{\otimes d}$.

[F6] [[thm-tensor-product-basis-from-bases]]: tensor products of basis vectors
form a basis of the tensor product, so $e_1\otimes e_1\ne0$.

## Proof

1.1 The place permutation satisfies $P(e_1\otimes e_1)=e_1\otimes e_1=v$ by [F4], and $v\ne0$ because tensor products of basis vectors form a basis [F6]; hence $P^2v=v$. [given, F4, F6, algebra]

1.2 The parameter $\xi=-1\ne1$ has order two in $\mathbb C$, so [F2] puts it in the nondegenerate finite-$e$ branch with $e=2$. On the nonzero vector $v=e_1\otimes e_1$, [F4] gives $Pv=v$ and [F6] gives $v\ne0$. The quadratic relation [F3] at $q=\xi=-1$ is $T_1^2=-2T_1-1$; assigning $T_1=P$ would require $v=-2v-v=-3v$, hence $4v=0$, a contradiction over $\mathbb C$. Thus the defining relation fails. [given, F2, F3, F4, F6, algebra]

2.1 This only refutes the specified assignment: other parameter conversions or homomorphisms remain outside this calculation, and the cited degenerate action [F5] is still valid. [given, F1, F5, algebra] ∎
