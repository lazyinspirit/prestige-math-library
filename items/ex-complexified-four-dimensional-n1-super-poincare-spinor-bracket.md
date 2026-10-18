---
id: ex-complexified-four-dimensional-n1-super-poincare-spinor-bracket
kind: example
title: The N=1 supercharge bracket is a translation
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-complexified-four-dimensional-n1-super-poincare-bracket-data
  - thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi
  - def-associative-superalgebra-over-complex-numbers
  - thm-tensor-product-basis-from-bases
  - def-algebraic-dual-and-linear-functional
  - lem-field-is-a-commutative-ring
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "José Miguel Figueroa-O'Farrill, BUSSTEPP Lectures on Supersymmetry, §I.3 and Appendix A.2–A.3"
      url: https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/BUSSTEPP.pdf
      locator: "Printed pp. 10–11 and 71–73: the N=1 odd bracket, Lorentz spinors, translations, and Minkowski conventions."
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §2.2"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 12–15: odd–odd superbrackets are symmetric and take values in the even part."
---

## Example

Use the complexified algebra of [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]] and [[thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi]]. Let $u_1=(1,0),u_2=(0,1)$ be the standard basis of $S_+$, and let $\phi_1(z_1,z_2)=z_1,\phi_2(z_1,z_2)=z_2$ be the coordinate-dual basis of $S_-$. Set $Q_\alpha=u_\alpha$, $\overline Q_{\dot\beta}=\phi_\beta$, and $P_{\alpha\dot\beta}=u_\alpha\otimes\phi_\beta$. These four $P_{\alpha\dot\beta}$ form a basis of the translation space, and
$$ [Q_\alpha,\overline Q_{\dot\beta}]=[\overline Q_{\dot\beta},Q_\alpha]=P_{\alpha\dot\beta}. $$
For the explicit Pauli basis and dual-basis translation elements defined in step 3.1, this becomes the familiar convention $\{Q_\alpha,\overline Q_{\dot\beta}\}=2i\sigma^\mu_{\alpha\dot\beta}P_\mu$. The braces denote the superbracket of two odd elements, hence the anticommutator whenever the action is realized by odd elements of an associative superalgebra.

## Facts & Assumptions

**Given:** The bracket data of the complexified N=1 super-Poincare superalgebra and the tensor-product translation space $V=S_+\otimes S_-$.

[F1] [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]]: $[u,\phi]=u\otimes\phi$ for $u\in S_+$, $\phi\in S_-$, and the translation space is $V=S_+\otimes S_-$.

[F2] [[thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi]]: this bracket data define a complex Lie superalgebra.

[F3] [[def-associative-superalgebra-over-complex-numbers]]: in a graded associative representation, the superbracket of odd operators is their anticommutator.

[F4] [[thm-tensor-product-basis-from-bases]]: for free modules over a commutative ring with specified bases, the elementary tensors form a basis of their tensor product.

[F5] [[def-algebraic-dual-and-linear-functional]]: the algebraic dual consists of all complex-linear maps from $S_+$ to $\mathbb C$.

[F6] [[lem-field-is-a-commutative-ring]]: the complex field is a commutative ring.

## Verification

**Proof technique:** direct.


1.1 The coordinate forms $\phi_1,\phi_2$ are linear by [F5]. For any $\phi\in S_-$ and $(z_1,z_2)\in S_+$, linearity gives $\phi(z_1,z_2)=z_1\phi(u_1)+z_2\phi(u_2)$, hence $\phi=\phi(u_1)\phi_1+\phi(u_2)\phi_2$; evaluating at $u_1,u_2$ proves their independence. Thus $u_1,u_2$ and $\phi_1,\phi_2$ are bases of the two free $\mathbb C$-modules. By [F6], the scalar ring is commutative; [F4] then makes their four elementary tensors a basis of $S_+\otimes S_-$ and hence of the translation space. [given, F1, F4, F5, F6, algebra]


2.1 The bracket formula in [F1] gives $[Q_\alpha,\overline Q_{\dot\beta}]=P_{\alpha\dot\beta}$. Because both entries are odd, graded skew symmetry makes this bracket symmetric; in a graded associative representation [F3] identifies it with the anticommutator. Same-chirality odd brackets vanish and translations commute by the definition in [F1]. [F1, F2, F3, step 1.1, algebra]


3.1 Let $\sigma^0=I$, $\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Direct multiplication gives $\operatorname{tr}(\sigma^\mu\sigma^\nu)=2\delta_{\mu\nu}$, so $\tau^\mu=\sigma^\mu/2$ is trace-dual to the four $\sigma^\nu$. The trace-pairing identity makes the $\sigma^\mu$ linearly independent; since a $2\times2$ matrix has four entries, they form a basis of $M_2(\mathbb C)$. Regard $P=(P_{\alpha\dot\beta})$ as a matrix with entries in $V$, and define $P_\mu=(2i)^{-1}\operatorname{tr}(\tau^\mu P)$. The dual-basis expansion gives $P=\sum_\mu\sigma^\mu\operatorname{tr}(\tau^\mu P)=2i\sum_\mu\sigma^\mu P_\mu$. This is an invertible coordinate change followed by multiplication by the nonzero scalar $(2i)^{-1}$, so the $P_\mu$ form a basis of translations and the displayed normalization follows. The dotted bar on $\overline Q$ is a chiral label, not complex conjugation. This algebraic normalization supplies no real form, positive-energy representation, or field-theoretic off-shell closure. [given, F1, F4, step 1.1, algebra] ∎
