---
page: clifford-universal-algebras-and-pbw
title: "Universal Clifford Algebras and Their PBW Basis"
status: draft
items:
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-exterior-wedge-contraction-relations
  - lem-clifford-polarized-relations
  - lem-clifford-quotient-factorization
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
examples: []
---

For a finite-dimensional vector space $V$ over a field $k$ with $\operatorname{char}(k)\ne2$ and symmetric bilinear form $B$, set $Q(v)=B(v,v)$. This page fixes the **plus-$Q$ convention** $\mathrm{Cl}(V,Q)=T_k(V)/(v^2-Q(v)1)$ and permits degenerate $B$. Its scope is the universal quotient and its finite-dimensional PBW basis; real and complex classification, graded products, and Pin/Spin groups belong to later pages.

The quotient map $i_Q:V\to\mathrm{Cl}(V,Q)$ is universal for linear maps to a unital associative $k$-algebra satisfying the same square relation. The diagram records that universal factorization: its triangle commutes exactly when $\bar f(i_Q(v))=f(v)$ for every $v$.

```tikzcd
V \arrow[r, "i_Q"] \arrow[dr, "f"'] & \mathrm{Cl}(V,Q) \arrow[d, "{\exists!\,\bar f}"] \\
& A
```

The diagram describes the interface; the proofs below establish it from the quotient and do not rely on the drawing.

## Reading route

The proposed route begins with [[algebraic-representation-and-tensor-symmetry-map]] for module and tensor-algebra context. The exact tensor-algebra and exterior-algebra statements used here are linked from the item facts.

## Local construction and proof route

- [[def-clifford-algebra-of-a-quadratic-space]] defines $J_Q$ as the smallest two-sided ideal containing $v^2-Q(v)1$, then defines the quotient and canonical map.
- [[lem-clifford-polarized-relations]] derives $vw+wv=2B(v,w)1$ by expanding the relation for $v+w$.
- [[lem-clifford-quotient-factorization]] proves the kernel-and-ideal step needed to descend a tensor-algebra homomorphism.
- [[thm-universal-property-of-clifford-algebra]] proves existence and uniqueness of the extension to the quotient.
- [[lem-clifford-exterior-wedge-contraction-relations]] constructs contraction from the arbitrary symmetric form, including degenerate forms, and proves the wedge/contraction identities. The positive real inner-product contraction in the existing library does not cover this case.
- [[thm-clifford-pbw-basis-and-associated-graded]] proves spanning by a terminating word reduction, independence by the exterior-action top-degree argument, and only then identifies $\operatorname{gr}\mathrm{Cl}(V,Q)$ with $\Lambda V$.

The normal-word proof needs no diagonalization or nondegeneracy. The exterior algebra is the associated graded algebra; this does not assert an ungraded algebra isomorphism $\mathrm{Cl}(V,Q)\cong\Lambda V$ for general $Q$. A zero form is a degenerate example and is treated on the companion page.

Companion: [[clifford-universal-algebras-and-pbw-examples]].
