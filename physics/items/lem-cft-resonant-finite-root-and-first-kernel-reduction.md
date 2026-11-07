---
id: lem-cft-resonant-finite-root-and-first-kernel-reduction
kind: lemma
title: Finite resonant roots and the first top-disjoint kernel
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - lem-cft-resonant-universal-top-jacobi-realization
  - lem-cft-resonant-zhu-associative-algebra
  - def-conformal-vertex-algebra
  - def-admissible-vertex-algebra-module
  - def-ordinary-vertex-module
dependency_roles:
  lem-cft-resonant-universal-top-jacobi-realization: mathematical-premise
  lem-cft-resonant-zhu-associative-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§3, first-singular-layer reduction in Theorem 3.4; the countable-dimensional finite-Zhu argument and the precise resonance list are proved locally here."
verification:
  precheck: pending
---

## Statement

Let \(V\) be simple of CFT type over \(\mathbb C\). Assume the regular left Zhu module \(A(V)\) is semisimple and every irreducible admissible \(V\)-module is ordinary. Then \(A(V)\) is finite dimensional and has finitely many simple modules \(U_i\); write \(h_i\) for the lowest conformal weight of the normalized ordinary module with top \(U_i\). On every grade \(M(U_i)(n)\), \(L(0)=h_i+n\). If the largest graded submodule \(J(U_i)\subseteq M(U_i)\) disjoint from the grade-zero top is nonzero, its first occupied degree is an element of the finite set
\[
D_i=\{h_j-h_i: h_j-h_i\in\mathbb Z_{>0}\}
\]
and that grade contains a simple \(A(V)\)-submodule \(U_j\) of \(\Omega_0(M(U_i))\). Consequently, if \(\operatorname{Hom}_{A(V)}(U_j,\Omega_0(M(U_i))(h_j-h_i))=0\) for every positive integral difference \(h_j-h_i\), then every \(M(U_i)\) is simple. No finite-dimensionality of induced grades is assumed.

## Statement references

[[lem-cft-resonant-universal-top-jacobi-realization]]

[[def-ordinary-vertex-module]]

## Facts & Assumptions

**Given:** The simple CFT-type VOA, semisimple regular Zhu module, and ordinarity assumption in the Statement.

[F1] [[lem-cft-resonant-universal-top-jacobi-realization]] gives a finite state top \(M(U)(0)=U\), the universal property, simple-top correspondence, and the actual admissible grading on \(M(U)\).

[F2] [[lem-cft-resonant-zhu-associative-algebra]] proves that \([\omega]\) is central in the Zhu algebra and the degree-zero action uses its scalar on a simple top.

[F3] [[def-conformal-vertex-algebra]]: \(V=\bigoplus_{r\ge0}V_r\), each state grade is finite dimensional, and \(\omega\in V_2\).

[F4] [[def-admissible-vertex-algebra-module]]: a mode \(a_{(m)}\), \(a\in V_r\), shifts the specified grade by \(r-m-1\). [[def-ordinary-vertex-module]] means \(L(0)\) acts semisimply with finite-dimensional eigenspaces bounded below in real part.

## Proof

1.1 Since \(V\) is a countable direct sum of finite-dimensional spaces, \(A(V)\) is at most countable dimensional. Semisimplicity of its regular left module writes \(A(V)\) as a direct sum of simple left ideals; the vector \(1\) has finite support in that direct sum, and every \(a\in A(V)\) equals \(a\cdot1\), so those finitely many ideals already span \(A(V)\). Each simple left ideal \(S\) is countable dimensional. Its endomorphism ring is a division algebra over \(\mathbb C\), and every such endomorphism is scalar: if \(T\) were nonscalar, then \(T-\lambda\) would be invertible for every \(\lambda\in\mathbb C\), while \((T-\lambda)^{-1}u\) for fixed \(u\ne0\) are linearly independent, because a finite dependence yields a nonzero polynomial in \(T\) annihilating \(u\); that polynomial is invertible after factoring over \(\mathbb C\). Uncountably many independent vectors contradict countable dimension. Therefore \(\operatorname{End}_{A(V)}(S)=\mathbb C\). The decomposition of the regular module has finitely many simple summands, so \(\operatorname{End}_{A(V)}(A(V))\) is finite dimensional; right multiplication identifies this endomorphism algebra with \(A(V)^{\mathrm{op}}\). Thus \(A(V)\) is finite dimensional and has a finite simple list \(U_1,\ldots,U_s\). [F1, F3, algebra]

2.1 The central element \([\omega]\) acts by a scalar \(h_i\) on each simple \(U_i\). The normalized simple module \(L_i\) with top \(U_i\) is ordinary by hypothesis, so \(h_i\) is its lowest conformal weight. On \(M(U_i)\), every generating word of total operator degree \(n\) shifts the \(L(0)\)-eigenvalue on the top from \(h_i\) to \(h_i+n\), by the conformal mode commutator. Since every vector of \(M(U_i)(n)\) is a sum of such words, \(L(0)=h_i+n\) on the entire grade. [F1, F2, F4, algebra]

3.1 Suppose \(J(U_i)\ne0\), and choose its first nonzero admissible grade \(d\). Since \(J(U_i)(0)=0\), \(d>0\). Every mode of negative operator degree maps \(J(U_i)(d)\) into a smaller grade of \(J(U_i)\), which is zero; hence \(J(U_i)(d)\subseteq\Omega_0(M(U_i))\). By [F1], this is a unital \(A(V)\)-module. Semisimplicity supplies a simple submodule isomorphic to some \(U_j\). On that submodule the zero mode of \(\omega\) acts both by \(h_i+d\), from step 2.1, and by \(h_j\), from its simple top action. Therefore \(d=h_j-h_i\in D_i\). The set \(D_i\) is finite because the simple list is finite. [F1, F2, step 2.1, algebra]

4.1 If \(J(U_i)\ne0\), its first-grade simple submodule gives a nonzero \(A(V)\)-map \(U_j\to\Omega_0(M(U_i))(d)\) for some \(d\in D_i\). Thus vanishing of every Hom space in the Statement forces \(J(U_i)=0\). Any nonzero graded submodule of \(M(U_i)\) either has zero degree-zero part and lies in \(J(U_i)\), or intersects the simple top nontrivially and therefore contains the top, which generates all of \(M(U_i)\). So \(M(U_i)\) is graded-simple. The scalar \(L(0)=h_i+n\) on its grades makes every weak submodule graded by polynomial interpolation on each vector's finite grade support; hence \(M(U_i)\) is simple as a weak module. [F1, step 3.1, algebra] ∎
