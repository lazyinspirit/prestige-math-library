---
id: def-qftx-character-localization
kind: definition
title: Character localization in Borel equivariant cohomology
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-torus-equivariant-cohomology-cartan-model
  - lem-torus-classifying-space-cohomology
  - lem-qftx-rational-torus-classifying-space-cohomology
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
  lem-torus-classifying-space-cohomology: mathematical-premise
  lem-qftx-rational-torus-classifying-space-cohomology: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, localization of equivariant-cohomology modules, printed pp. 5–7.
    - title: Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey, and Theo van den Hurk, Hamiltonian Group Actions and Equivariant Cohomology
      url: https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf
      locator: Section 9.10, Borel localization theorem and localized modules, PDF pp. 86–87.
landmark: false
---

## Definition

Assume AC. Let \(T=(\mathbb R/\mathbb Z)^r\) and use the product Milnor model \(ET=(E_{S^1})^r\), \(BT=ET/T\), with right diagonal action \((e,x)\cdot t=(e\cdot t,t^{-1}\cdot x)\). For \(k\in\{\mathbb Q,\mathbb R\}\), put \(A_T(k)=H^*(BT;k)\cong k[u_1,\ldots,u_r]\), where \(u_i=c_1(L_{\chi_i})\) is the degree-two class of the \(i\)th coordinate character line. For a smooth character \(\chi:T\to S^1\), set \(L_\chi=ET\times_T\mathbb C_\chi\), with the right equivalence \((e,z)\cdot t=(e\cdot t,\chi(t)^{-1}z)\). If \(\chi=\chi_{\mathbf n}\) for \(\mathbf n\in\mathbb Z^r\), then \(c_1(L_\chi)=\sum_i n_i u_i\). Define \(\mathscr S_T(k)\) to consist of \(1\) and all finite products of \(c_1(L_\chi)\) for nontrivial characters \(\chi\). This is a multiplicative subset of \(A_T(k)\) with \(0\notin\mathscr S_T(k)\). For a topological space \(X\) with a continuous left \(T\)-action, set \(H_T^*(X;k)=H^*(ET\times_T X;k)\), with its \(A_T(k)\)-module structure induced by \(ET\times_T X\to BT\). For an \(A_T(k)\)-module \(N\), its localization \(\mathscr S_T(k)^{-1}N\) consists of fractions \(n/s\), with \(n\in N\), \(s\in\mathscr S_T(k)\), and \(n/s=n'/s'\) exactly when \(u(s'n-sn')=0\) for some \(u\in\mathscr S_T(k)\); addition is \((n/s)+(n'/s')=(s'n+sn')/(ss')\), and scalar multiplication is induced by the localized ring. The character-localized Borel equivariant cohomology is \(\mathscr S_T(k)^{-1}H_T^*(X;k)\). For \(r=0\), there are no nontrivial characters and \(\mathscr S_T(k)=\{1\}\).

## Definition references

[Borel equivariant cohomology and the product Milnor model] [[def-torus-equivariant-cohomology-cartan-model]]

[Real coefficient ring and degree-two normalization] [[lem-torus-classifying-space-cohomology]]

[Rational coefficient ring and character classes] [[lem-qftx-rational-torus-classifying-space-cohomology]]

[First Chern class of tensor, dual, and conjugate lines] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]

## Facts & Assumptions

**Given:** AC, \(T=(\mathbb R/\mathbb Z)^r\), its displayed product Milnor model, and \(k\in\{\mathbb Q,\mathbb R\}\).

[A1] Assume the Axiom of Choice, as required by the classifying-space coefficient suppliers and the first-Chern tensor formula. [[def-axiom-of-choice]]

[F1] For \(k=\mathbb R\), the selected Borel definition uses the same product Milnor model and gives \(A_T(\mathbb R)=\mathbb R[u_1,\ldots,u_r]\) with \(u_i\) the coordinate character class. [[def-torus-equivariant-cohomology-cartan-model]] [[lem-torus-classifying-space-cohomology]]

[F2] For \(k=\mathbb Q\), \(A_T(\mathbb Q)=\mathbb Q[u_1,\ldots,u_r]\), every smooth character has a unique integer weight vector \(\mathbf n\), and its associated line has class \(\sum_i n_i u_i\). [[lem-qftx-rational-torus-classifying-space-cohomology]]

[F3] First Chern classes are additive under tensor products, change sign for dual lines, and are natural under coefficient change. [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]

## Proof

**Given:** The data in the statement.

1.1 The rational character formula is [F2]. For the real formula, restrict a smooth character to the coordinate circles; the rational supplier [F2] gives its integer vector \(\mathbf n\). The associated one-dimensional representation \(\mathbb C_{\chi_{\mathbf n}}\) is the tensor product of the coordinate representations \(\mathbb C_{\chi_i}^{\otimes n_i}\), interpreting negative powers as duals; taking associated bundles preserves this tensor-product isomorphism. Additivity and duality in [F3] give \(c_1(L_{\chi_{\mathbf n}})=\sum_i n_i u_i\) over \(\mathbb R\) as well, since the real generators in [F1] are the coefficient images of the same tautological Euler classes. The formula is unique because restriction to each coordinate circle recovers \(n_i\). [A1, F1, F2, F3, construct]

2.1 The empty product is \(1\), concatenation of two finite character lists multiplies their products, so \(1\in\mathscr S_T(k)\) and \(\mathscr S_T(k)\) is multiplicatively closed. For each nontrivial character \(\mathbf n\ne0\), step 1.1 gives the nonzero linear polynomial \(\sum_i n_i u_i\); a polynomial ring over a field is an integral domain, so every finite product of these classes remains nonzero. If \(r=0\), the generating list is empty and the set is \(\{1\}\). Hence \(0\notin\mathscr S_T(k)\) in all cases. [F1, F2, step 1.1, algebra]

3.1 The fraction relation is reflexive using multiplier \(1\), symmetric by negating its witness equation, and transitive: if \(a(s'n-sn')=0\) and \(b(s''n'-s'n'')=0\), then \(ab s'(s''n-sn'')=0\), with \(ab s'\in\mathscr S_T(k)\). Thus it is an equivalence relation. If \(n/s\sim n'/s'\) with witness \(a\) and \(m/t\sim m'/t'\) with witness \(b\), then
\[
s't'(tn+sm)-st(t'n'+s'm')=tt'(s'n-sn')+ss'(t'm-tm').
\]
Multiplying by \(ab\) makes the right side zero, proving the displayed addition is independent of representatives. For the scalar action, if \(n/s\sim n'/s'\) with witness \(a\), then the cross-multiplied numerator difference between \((c/q)(n/s)\) and \((c/q)(n'/s')\) is \(cq(s'n-sn')\), killed by \(a\). If \(c/q\sim c'/q'\) with witness \(b\), the corresponding difference between \((c/q)(n/s)\) and \((c'/q')(n/s)\) is \(sn(q'c-qc')\), killed by \(b\). Thus the scalar action is independent of both representatives. These formulas define the stated localized module, and every \(s\in\mathscr S_T(k)\) acts invertibly with inverse \(1/s\). [given, step 2.1, algebra]

4.1 For a continuous left \(T\)-action on \(X\), the projection \(ET\times_T X\to BT\) makes singular cohomology a module over \(A_T(k)\) by pullback and cup product; pulling back first Chern classes defines the character actions used in the localization. The Borel space and module are defined for empty \(X\) as zero, and for \(r=0\) the localization changes no module because \(\mathscr S_T(k)=\{1\}\). This verifies the constructions in the Definition. [F1, F2, step 2.1, step 3.1, given] ∎
