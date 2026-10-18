---
id: cex-ordinary-tensor-product-fails-for-clifford-orthogonal-sums
kind: counterexample
title: "The ordinary tensor product does not model an orthogonal Clifford sum"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products-examples
dependency_level: 5
deps:
  - lem-real-clifford-low-dimensional-models
  - thm-clifford-graded-tensor-product-for-orthogonal-sums
justified_by: []
landmark: false
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references: []
---

## Statement refuted

For all quadratic spaces, the ordinary algebra tensor product $\mathrm{Cl}(V,Q)\otimes_{\mathbb R}\mathrm{Cl}(W,R)$, with multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$, is the Clifford algebra of the orthogonal sum with its canonical factor maps.

## Facts & Assumptions

**Given:** The real Clifford algebras use $v^2=Q(v)1$ and the ordinary tensor-product multiplication is the one displayed in the refuted statement.

[F1] $\mathrm{Cl}_{1,0}\cong\mathbb R\oplus\mathbb R$ and $\mathrm{Cl}_{2,0}\cong M_2(\mathbb R)$, with the specified positive-square-first convention ([[lem-real-clifford-low-dimensional-models]]).

## Counterexample

1.1 Choose $V=W=\mathbb R$ with positive quadratic form $x\mapsto x^2$. By [F1], each Clifford factor is $\mathbb R\oplus\mathbb R$, hence commutative. For simple tensors, $(a\otimes b)(c\otimes d)=ac\otimes bd=ca\otimes db=(c\otimes d)(a\otimes b)$, and bilinearity extends commutativity to the whole ordinary tensor product. [given, F1, choose, algebra]

2.1 By [F1], the orthogonal-sum Clifford algebra is $M_2(\mathbb R)$, which is noncommutative because $E_{11}E_{12}=E_{12}$ while $E_{12}E_{11}=0$. Thus it cannot be isomorphic as an algebra to the commutative ordinary tensor product in step 1.1, refuting the claim. [F1, step 1.1, algebra] ∎

## Remarks

The graded tensor product [[thm-clifford-graded-tensor-product-for-orthogonal-sums]] inserts the Koszul sign when the two odd generators are multiplied in the reverse order; that sign produces the required anticommutation.
