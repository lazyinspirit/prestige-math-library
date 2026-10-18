---
id: cex-self-adjoint-part-need-not-be-associative-subalgebra
kind: counterexample
title: The self-adjoint part need not be an associative subalgebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-involutive-complex-associative-algebra, thm-associative-symmetrization-satisfies-jordan-identity]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, PDF pp. 20–21"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

In $A=M_2(\mathbb C)$ with conjugate-transpose involution, the self-adjoint
part is closed under the symmetrized product but not under the original
associative multiplication. For
$$ X=E_{11},\qquad Y=E_{12}+E_{21}, $$
both $X,Y$ are self-adjoint while $XY=E_{12}$ is not.

## Facts & Assumptions

**Given:** $A=M_2(\mathbb C)$, with ordinary matrix multiplication and
$Z^*=\overline Z^{\mathsf T}$.

[F1] A complex associative algebra with involution has a self-adjoint part
$A_{\rm sa}=\{Z:Z^*=Z\}$, and the involution reverses products
([[def-involutive-complex-associative-algebra]]).

[F2] For $a,b\in\{1,2\}$, $E_{ab}$ is the matrix with $1$ in position
$(a,b)$ and zeros elsewhere; these units obey $E_{ab}E_{cd}=\delta_{bc}E_{ad}$.
Conjugate transpose fixes real matrix units and interchanges $E_{12}$ with $E_{21}$. The
self-adjoint part is closed under the symmetrized Jordan product by
[[thm-associative-symmetrization-satisfies-jordan-identity]].

## Proof
1.1 Since $E_{11}^*=E_{11}$ and $(E_{12}+E_{21})^*=E_{21}+E_{12}$, both $X$ and $Y$ belong to $A_{\rm sa}$. The matrix-unit rule gives $XY=E_{12}$. [given, F1, F2, algebra]

2.1 But $(XY)^*=E_{21}\ne E_{12}=XY$, so $XY\notin A_{\rm sa}$. Hence the self-adjoint part is not an associative subalgebra, even though it is closed under the symmetrized Jordan product by [F2]. [given, F1, F2, step 1.1, algebra] ∎
