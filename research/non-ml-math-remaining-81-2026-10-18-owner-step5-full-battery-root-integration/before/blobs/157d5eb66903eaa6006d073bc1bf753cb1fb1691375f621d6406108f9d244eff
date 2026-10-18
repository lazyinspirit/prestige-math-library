---
id: def-complexified-four-dimensional-n1-super-poincare-bracket-data
kind: definition
title: Complexified four-dimensional N=1 super-Poincare bracket data
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-classical-complex-matrix-lie-algebras
  - def-lie-superalgebra-over-complex-numbers
  - def-vector-space
  - lem-field-is-a-commutative-ring
  - def-algebraic-dual-and-linear-functional
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-universal-property-of-module-tensor-products
  - thm-commutative-ring-module-structure-on-a-tensor-product
justified_by:
  - thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "José Miguel Figueroa-O'Farrill, BUSSTEPP Lectures on Supersymmetry, §I.3 and Appendix A.2–A.3"
      url: https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/BUSSTEPP.pdf
      locator: "Printed pp. 10–11 and 71–73: four-dimensional N=1 super-Poincare brackets, superbracket signs, and Minkowski conventions. The abstract bracket is verified locally."
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.1–2.2"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 10–15: graded vector spaces and Lie-superbracket axioms."
verification:
  precheck: n/a
---

## Definition

Let $S_+=\mathbb C^2$, $S_-=(\mathbb C^2)^*$, where the algebraic dual is defined in [[def-algebraic-dual-and-linear-functional]], and set $V=S_+\otimes_{\mathbb C}S_-$. By [[lem-field-is-a-commutative-ring]], $\mathbb C$ is a commutative ring; use the scalar actions to regard $S_+$ as a right module and $S_-$ as a left module. Use their module tensor product from [[def-tensor-product-of-modules-by-generators-and-relations]]; its universal property is [[thm-universal-property-of-module-tensor-products]], and its unique $\mathbb C$-module structure is given by [[thm-commutative-ring-module-structure-on-a-tensor-product]]. Thus $V$ is a complex vector space, every tensor is a finite sum of elementary tensors, and bilinear formulas on $S_+\times S_-$ descend to linear maps on $V$.

Let
$$ \mathfrak l=\mathfrak{sl}(S_+)\oplus\mathfrak{sl}(\mathbb C^2). $$
Using the standard basis of $S_+$, both summands are copies of $\mathfrak{sl}_2(\mathbb C)$, the traceless complex matrix Lie algebra with commutator from [[def-classical-complex-matrix-lie-algebras]].
Use the natural action of the first factor on $S_+$, the dual action $B\cdot\phi=-\phi B$ of the second factor on $S_-$, and the tensor action on $V=S_+\otimes S_-$:
$$ (A,B)\cdot(u\otimes\phi)=Au\otimes\phi-u\otimes\phi B. $$
Let the even part be $\mathfrak g_{\bar0}=\mathfrak l\oplus V$, with bracket
$$ [(L,v),(L',v')]=([L,L'],L\cdot v'-L'\cdot v), $$
and let the odd part be $\mathfrak g_{\bar1}=S_+\oplus S_-$. The even action on the odd part is $(L,v)\cdot s=L\cdot s$, so translations $V$ act trivially. Define the odd bracket by
$$ [u,u']=0,\qquad[\phi,\phi']=0,\qquad[u,\phi]=[\phi,u]=u\otimes\phi $$
for $u,u'\in S_+$ and $\phi,\phi'\in S_-$. Extend all brackets bilinearly and by graded skew symmetry. This is the **complexified spinor-form bracket data** for the four-dimensional $N=1$ super-Poincare algebra. A separate theorem proves that the data satisfy the Lie-superalgebra axioms. The ordinary real form, its unitary representations, and a field-theoretic realization are not included in this definition.
