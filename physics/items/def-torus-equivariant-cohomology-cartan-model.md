---
id: def-torus-equivariant-cohomology-cartan-model
kind: definition
title: "Borel and Cartan equivariant cohomology for a compact torus"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-standard-product-torus-as-a-compact-lie-group
  - def-smooth-manifold
  - def-smooth-left-action-of-a-lie-group
  - def-fundamental-vector-field-of-a-left-action
  - def-smooth-differential-k-form
  - def-symmetric-algebra-of-a-vector-space
  - def-wedge-product-of-differential-forms
  - prop-differential-forms-form-a-graded-commutative-algebra
  - def-singular-cohomology-with-coefficients
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cup-product-on-cochains
  - prop-cup-product-is-natural-unital-and-associative
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-interior-product-of-a-form-by-a-vector-field
  - def-lie-derivative-of-a-differential-form
  - def-lie-derivative-of-a-tensor-field
  - thm-the-exterior-derivative-squares-to-zero
  - thm-the-exterior-derivative-is-a-graded-derivation
  - prop-interior-product-is-a-graded-antiderivation
  - thm-the-exterior-derivative-commutes-with-pullback
  - thm-cartans-magic-formula
  - lem-torus-classifying-space-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-standard-product-torus-as-a-compact-lie-group: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-smooth-left-action-of-a-lie-group: mathematical-premise
  def-fundamental-vector-field-of-a-left-action: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-symmetric-algebra-of-a-vector-space: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  prop-differential-forms-form-a-graded-commutative-algebra: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cup-product-on-cochains: mathematical-premise
  prop-cup-product-is-natural-unital-and-associative: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  prop-interior-product-is-a-graded-antiderivation: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  lem-torus-classifying-space-cohomology: mathematical-premise
justified_by: []
axiom_strength: "ZF + AC"
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jonas Menzi and Finn Michler, A Brief Introduction to Equivariant Cohomology"
      url: "https://people.math.ethz.ch/~acannas/Teaching/Moment_Map_2026/Papers/09_Introduction_to_Equivariant_Cohomology.pdf"
      locator: "Definitions 2.1 and 2.3, Example 2.4 (PDF pp. 2–3); Definition 2.11, formula (3), Remark 2.12, Lemma 2.14, and Proposition–Definition 2.15 (PDF pp. 5–6)."
    - title: "Qiuyu Ren, Equivariant de Rham Theory, complete lecture notes"
      url: "https://math.berkeley.edu/~qiuyu/papers/Equivariant_de_Rham_Theory.pdf"
      locator: "§2.1, Definition 2.3 (PDF pp. 9–10); §§4.3–4.4, Theorem 4.9 and Proposition 4.12 (PDF pp. 20–22)."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "§3.2, Theorem 3.19, printed pp. 221–222: the projective-space coefficient ring used by the torus coefficient lemma."
landmark: false
---

## Definition

For a nonnegative integer $r$, let $T=(\mathbb R/\mathbb Z)^r$ be a compact torus with its standard product Lie-group smooth structure and period-one basis, and let $M$ be a smooth manifold without boundary, not assumed compact, with a smooth left action $a:T\times M\to M$. Work over $\mathbb R$ and use the chosen product Milnor model $ET=(E_{S^1})^r$ and $BT=ET/T$ from the preceding coefficient lemma. Give $ET\times M$ the right diagonal action $(e,p)\cdot t=(e\cdot t,t^{-1}\cdot p)$ and define
$$ET\times_T M:=(ET\times M)/T.$$
The **Borel equivariant cohomology** is the graded ring
$$H_T^*(M;\mathbb R):=H_{\mathrm{sing}}^*(ET\times_T M;\mathbb R).$$
For $M=\{\ast\}$ this gives $H_T^*(\ast;\mathbb R)=H^*(BT;\mathbb R)$; the selected degree-two normalization in $\operatorname{Sym}_{\mathbb R}(\mathfrak t^*)$ is the isomorphism established in the preceding coefficient lemma.

The quotient map $q:ET\times M\to ET\times_T M$ and projection
$\pi([e,p])=[e]$ give the associated-space square
$$\begin{array}{ccc}ET\times M&\xrightarrow{q}&ET\times_T M\\\downarrow\operatorname{pr}_1&&\downarrow\pi\\ET&\xrightarrow{q_T}&BT\end{array}$$
Its TikZ source is
```latex
\begin{tikzcd}
ET\times M \arrow[r,"q"] \arrow[d,"\operatorname{pr}_1"'] & ET\times_T M \arrow[d,"\pi"]\\
ET \arrow[r,"q_T"'] & BT
\end{tikzcd}
```
where $q_T:ET\to BT$ is the orbit quotient. The projection $\pi$ is
well-defined because $[e\cdot t]=[e]$ for every $t\in T$. The square
commutes because both composites send $(e,p)$ to $[e]$.

Let $\mathfrak t=T_eT$, with basis $e_1,\ldots,e_r$ and dual basis $u_1,\ldots,u_r$. Regard $\operatorname{Sym}_{\mathbb R}(\mathfrak t^*)$ as a polynomial algebra by assigning each linear generator degree two. Use the trivial $T$-action on this polynomial factor, and the induced left action $t\cdot\alpha=(a_{t^{-1}})^*\alpha$ on forms. It is a left action because pullback reverses composition: $a_{t^{-1}}^*a_{s^{-1}}^*=(a_{s^{-1}}\circ a_{t^{-1}})^*=a_{(ts)^{-1}}^*$. The **Cartan complex** is the graded-commutative algebra
$$C_T(M):=\bigl(\operatorname{Sym}_{\mathbb R}(\mathfrak t^*)\otimes_{\mathbb R}\Omega^*(M)\bigr)^T,$$
with multiplication $(P\otimes\alpha)(Q\otimes\beta)=PQ\otimes(\alpha\wedge\beta)$, where $\wedge$ is the differential-form wedge product and all tensor products are algebraic. The superscript denotes the fixed subspace for the diagonal action, and a polynomial of degree $j$ tensored with a $k$-form has total degree $2j+k$. For $\xi\in\mathfrak t$, use the library fundamental vector field
$$X_\xi(p)=\left.\frac{d}{ds}\right|_{s=0}\exp_T(-s\xi)\cdot p.$$
On polynomial-valued forms define the degree-one Cartan operator
$$d_T(P\otimes\alpha)=P\otimes d\alpha-\sum_{i=1}^r(u_iP)\otimes\iota_{X_{e_i}}\alpha,$$
extended linearly. The tensor $\sum_i u_i\otimes X_{e_i}$ is basis-independent. The **Cartan equivariant cohomology** in this item means $H^*(C_T(M),d_T)$; the proof below establishes $d_T^2=0$ on $C_T(M)$.

This definition does not assert a general isomorphism between the Borel and Cartan cohomology rings. It defines neither equivariant Chow groups nor equivariant quotient-stack Borel–Moore homology, and no rational-coefficient comparison is being used in the real Cartan complex.

## Definition references

[Smooth manifold structure] [[def-smooth-manifold]]

[Jointly smooth left action] [[def-smooth-left-action-of-a-lie-group]]

[Standard product torus and period-one basis] [[def-standard-product-torus-as-a-compact-lie-group]]

[Negative-exponential fundamental-field convention] [[def-fundamental-vector-field-of-a-left-action]]

[Smooth differential forms] [[def-smooth-differential-k-form]]

[Symmetric algebra] [[def-symmetric-algebra-of-a-vector-space]]

[Differential-form wedge product] [[def-wedge-product-of-differential-forms]]

[Graded-commutative algebra of differential forms] [[prop-differential-forms-form-a-graded-commutative-algebra]]

[Singular cohomology and its cup product] [[def-singular-cohomology-with-coefficients]]

[Singular cochain complex] [[def-singular-cochain-complex-with-coefficients]]

[Singular cup product] [[def-singular-cup-product-on-cochains]]

[Singular cohomology ring structure] [[prop-cup-product-is-natural-unital-and-associative]]

[Exterior derivative] [[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[Interior product] [[def-interior-product-of-a-form-by-a-vector-field]]

[Lie derivative] [[def-lie-derivative-of-a-differential-form]]

[Graded-derivation rule for the exterior derivative] [[thm-the-exterior-derivative-is-a-graded-derivation]]

[Graded-antiderivation rule for contraction] [[prop-interior-product-is-a-graded-antiderivation]]

[Naturality of the exterior derivative under pullback] [[thm-the-exterior-derivative-commutes-with-pullback]]

[Cartan formula] [[thm-cartans-magic-formula]]

## Facts & Assumptions

**Given:** AC, a nonnegative integer $r$, the fixed product torus presentation, the smooth manifold $M$, and its smooth left $T$-action.

[A1] Assume the full Axiom of Choice, as required by the coefficient calculation. [[def-axiom-of-choice]]

[F1] For the selected product Milnor model, $H^*(BT;\mathbb R)\cong\operatorname{Sym}_{\mathbb R}(\mathfrak t^*)$ with the stated degree-two normalization. [[lem-torus-classifying-space-cohomology]]

[F2] A smooth left action is a jointly smooth map satisfying the left action law, so each $a_t$ is a diffeomorphism. [[def-smooth-left-action-of-a-lie-group]]

[F3] The fundamental field is $X_\xi(p)=\left.\frac{d}{ds}\right|_0\exp_T(-s\xi)\cdot p$, and $\xi\mapsto X_\xi$ is linear as part of the stated Lie-algebra-homomorphism convention. [[def-fundamental-vector-field-of-a-left-action]]

[F4] A smooth differential $k$-form is a smooth section of $\bigwedge^kT^*M$; the exterior derivative maps $\Omega^k(M)$ to $\Omega^{k+1}(M)$. [[def-smooth-differential-k-form]] [[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[F5] Singular cohomology with real coefficients is the cocycle quotient of the real singular cochain complex. [[def-singular-cohomology-with-coefficients]]

[F6] The singular cup product is defined by the front/back-face cochain formula. [[def-singular-cup-product-on-cochains]]

[F7] Singular cohomology with this cup product is a unital graded ring. [[prop-cup-product-is-natural-unital-and-associative]]

[F8] The exterior derivative satisfies $d^2=0$. [[thm-the-exterior-derivative-squares-to-zero]]

[F9] The interior product is pointwise insertion of the vector field into the first slot of an alternating form; hence two insertions anticommute. [[def-interior-product-of-a-form-by-a-vector-field]]

[F10] The Lie derivative of a form is defined by differentiating pullback along the local flow. [[def-lie-derivative-of-a-differential-form]] [[def-lie-derivative-of-a-tensor-field]]

[F11] The exterior derivative is a degree-one graded derivation of the algebra of forms. [[thm-the-exterior-derivative-is-a-graded-derivation]]

[F12] Contraction by a vector field is a degree-minus-one graded antiderivation. [[prop-interior-product-is-a-graded-antiderivation]]

[F13] For every smooth map $F$, $d(F^*\omega)=F^*(d\omega)$. [[thm-the-exterior-derivative-commutes-with-pullback]]

[F14] For every vector field $X$ and form $\alpha$, $\mathcal L_X\alpha=d(\iota_X\alpha)+\iota_X(d\alpha)$. [[thm-cartans-magic-formula]]

[F15] The symmetric algebra is the commutative graded quotient of the tensor algebra by $v\otimes w-w\otimes v$. [[def-symmetric-algebra-of-a-vector-space]]

[F16] Differential forms form an associative graded-commutative algebra under the pointwise wedge product. [[def-wedge-product-of-differential-forms]] [[prop-differential-forms-form-a-graded-commutative-algebra]]

[F17] The countable-choice hypothesis $\mathrm{AC}_\omega$ requires an indexed selector for every sequence of nonempty sets. [[def-countable-choice]]

[F18] The fixed product torus is a compact connected abelian Lie group, and each period-one basis vector exponentiates to its coordinate circle subgroup as specified in the local torus definition. [[def-standard-product-torus-as-a-compact-lie-group]]

[F19] For the empty space there are no singular simplices, so all singular cochain groups and its singular cohomology vanish. [[def-singular-cochain-complex-with-coefficients]]

## Proof

1.1 The right diagonal action is a group action by homeomorphisms, so its orbit quotient $ET\times_T M$ is a topological space. By [F5]–[F7] its real singular cohomology has the stated cup-product ring structure; at $M=\{\ast\}$ the quotient is $BT$, whose coefficient ring is identified by [F1]. [A1, F1, F5, F6, F7, given]

1.2 Pullback by each $a_{t^{-1}}$ preserves wedge products: evaluating on tangent vectors shows that pulling back the pointwise alternating product gives the product of the pullbacks. Thus the diagonal $T$-action is by algebra automorphisms and its fixed subspace is closed under the multiplication defined by the algebraic tensor-product rule and [F15]–[F16]. Since each polynomial generator has degree two, $d$ raises form degree by one, and contraction lowers form degree by one, both summands in $d_T$ raise total degree by one. By [F11] and [F12], each summand is a degree-one derivation because each $u_i$ has even degree. Under a change of basis of $\mathfrak t$, the polynomial basis and vector-field basis transform contragrediently; linearity in [F3] then makes $\sum_i u_i\otimes X_{e_i}$ basis-independent, so $d_T$ is unchanged. [F2, F3, F4, F9, F11, F12, F15, F16, algebra]

1.3 Let $(A_n)_{n\in\mathbb N}$ be any sequence of nonempty sets and let $\mathcal F=\{A_n:n\in\mathbb N\}$. By [A1], choose a function $g$ on $\mathcal F$ with $g(S)\in S$ for every $S\in\mathcal F$. Then $c(n):=g(A_n)$ is a function on $\mathbb N$, including when different indices have equal sets, and $c(n)\in A_n$ for every $n$. This is exactly the indexed selector in [F17], so the countable-choice hypothesis of [F3] is satisfied. [A1, F3, F17, construct]

2.1 Pullback naturality [F13] shows that $d$ preserves the $T$-fixed forms. For $t\in T$, the left action law and commutativity give $a_t\circ a_{\exp(-s e_i)}=a_{\exp(-s e_i)}\circ a_t$; differentiating at $s=0$ shows $(a_t)_*X_{e_i}=X_{e_i}$. By the pointwise definition [F9], contraction by each $X_{e_i}$ preserves invariant forms, while $u_i$ is fixed by the stipulated trivial action on the polynomial factor. Both terms therefore preserve the diagonal $T$-fixed subspace, so $d_T:C_T(M)\to C_T(M)$ is well-defined. [F2, F3, F9, F13, F18, step 1.2, step 1.3]

2.2 On polynomial-valued forms, expand the square as
$$d_T^2=d^2-\sum_i u_i(d\iota_{X_{e_i}}+\iota_{X_{e_i}}d)+\sum_{i,j}u_iu_j\iota_{X_{e_i}}\iota_{X_{e_j}}.$$
The first term is zero by [F8]. The last sum is zero because $u_i u_j=u_j u_i$ while insertions into alternating forms anticommute by [F9]. The middle sum is $-\sum_i u_i\mathcal L_{X_{e_i}}$ by [F14]. Hence $d_T^2\alpha=-\sum_i u_i\mathcal L_{X_{e_i}}\alpha$ for every $\alpha\in C_T(M)$. [F8, F9, F14, step 1.2, algebra]

3.1 Put $\phi_s=a_{\exp(-s e_i)}$. The local torus definition [F18] identifies $\exp(-s e_i)$ with the coordinate one-parameter subgroup, so the group law gives $\phi_{s+h}=\phi_s\circ\phi_h$. Differentiating at $h=0$ gives $\frac{d}{ds}\phi_s(p)=(d\phi_s)_pX_{e_i}(p)=X_{e_i}(\phi_s(p))$ by step 2.1. Thus $\phi_s$ is the flow of $X_{e_i}$. For an invariant form $\alpha$, $\phi_s^*\alpha=\alpha$ for every $s$; differentiating at zero and using [F10] gives $\mathcal L_{X_{e_i}}\alpha=0$. Substitution in step 2.2 proves $d_T^2\alpha=0$ on $C_T(M)$. [F3, F10, F18, step 2.1, step 2.2]

4.1 If $r=0$, the sum in $d_T$ is empty and $d_T=d$, whose square is zero by [F8]. If the action is trivial, every $X_{e_i}=0$ and again $d_T=d$ on invariant forms. If $M=\varnothing$, the form complex is the zero complex and the Borel construction is the empty space, whose singular cohomology is zero by [F19]. No compactness of $M$, symplectic form, or Hamiltonian hypothesis was used. [F2, F3, F5, F8, F19, step 3.1] ∎
