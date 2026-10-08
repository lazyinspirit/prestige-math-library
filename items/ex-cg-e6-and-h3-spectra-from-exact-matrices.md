---
id: ex-cg-e6-and-h3-spectra-from-exact-matrices
kind: example
title: "The exceptional spectra for E_6 and H_3 computed exactly: characteristic polynomials, cyclotomic factorisations and the resulting degree tables"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps:
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero
  - def-axiom-of-choice
  - def-cg-bipartite-coxeter-element-and-root-recursion
  - def-cg-canonical-reflection-homomorphism
  - def-cg-coxeter-basic-degrees-and-graded-coinvariants
  - def-cg-coxeter-diagram-components-and-finite-type
  - def-cg-real-coxeter-form-and-reflection
  - def-characteristic-polynomial-of-a-matrix
  - def-complex-numbers-and-arithmetic
  - def-cyclotomic-polynomial
  - def-determinant-of-a-square-matrix
  - def-formal-derivative-of-a-polynomial
  - def-matrix-minors-cofactors-and-adjugate
  - def-roots-of-unity-in-a-field
  - def-trace-of-a-square-matrix-over-a-commutative-ring
  - lem-cg-complexification-satisfies-reflection-invariant-hypotheses
  - lem-cg-exceptional-coxeter-spectra-from-exact-certificates
  - lem-derivative-of-det-i-minus-xa
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-cg-finite-coxeter-classification-including-h-and-dihedral
  - thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-eulers-formula
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
justified_by: []
dependency_level: 20
proof_strategy: direct
axiom_use: The Axiom of Choice is used only through the basic-family definition and the regular-Coxeter degree theorem to interpret the computed residues as basic degrees. The matrices, trace recurrence, cyclotomic factorisations and order checks are exact finite computations and use no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: https://www.math.ubc.ca/~cass/research/pdf/Element.pdf
      locator: "Section 2, the H3 icosahedron example, printed p. 5: the Coxeter element acts as a 2 pi/10 rotation and has eigenvalues exp(2 pi i/10), -1, exp(-2 pi i/10); the type table on printed p. 11 gives h(E6)=12. Used as independent checks only."
    - title: Josh Swanson, On eigenvalues of representations of reflection groups and wreath products (University of Washington CAT seminar notes, 7-page PDF)
      url: https://www.jpswanson.org/talks/2016_eigenvalues.pdf
      locator: "Theorem 11, printed p. 2: finite Coxeter degrees are one plus the cyclic exponents of a Coxeter element. Used as an independent statement-level check; the degree transfer here cites the local regular-Coxeter theorem."
---

## Statement

Assume the Axiom of Choice. Take the exceptional types $E_6$ and $H_3$ with the node numberings of the recorded certificate: $E_6$ is the path $0-1-2-3-4$ with a leaf $5$ attached to node $2$, all edges labelled $3$; $H_3$ is the path $0-1-2$ with edges labelled $5$ and $3$. Let $c$ be the bipartite Coxeter element, applied in the recorded orders $[0,2,4,1,3,5]$ and $[0,2,1]$, and let $\rho$ be the canonical reflection representation on $V=\mathbb R^S$ with $B(e_s,e_t)=-\cos(\pi/m_{st})$ and $r_t(v)=v-2B(v,e_t)e_t$. Put $h:=\operatorname{ord}(c)$ and $\zeta_h:=e^{2\pi i/h}$. Then:

**(1) $E_6$.** Here $h=12$, and the Coxeter element in the simple-root basis has characteristic polynomial $$\det(XI-\rho(c))=X^6+X^5-X^3+X+1=\Phi_3(X)\Phi_{12}(X),$$ spectral exponents $1,4,5,7,8,11$, and basic degrees $2,5,6,8,9,12$, whose product is $51840=|W(E_6)|$.

**(2) $H_3$.** Here $h=10$. Put $\varphi:=2\cos(\pi/5)$, so $\varphi^2=\varphi+1$ and $\varphi=1+\zeta_{10}^2+\zeta_{10}^{-2}$. The Coxeter element has characteristic polynomial $$\det(XI-\rho(c))=X^3+(1-\varphi)X^2+(1-\varphi)X+1=(X+1)(X^2-\varphi X+1),$$ spectral exponents $1,5,9$, and basic degrees $2,6,10$, whose product is $120=|W(H_3)|$.

**(3)** The residue sums are $36=6\cdot12/2$ and $15=3\cdot10/2$, matching $|\Phi_+|$ in each type. The operator orders are exactly $12$ and $10$; the characteristic polynomials have the primitive roots $\zeta_{12}$ and $\zeta_{10}$, respectively.

## Facts & Assumptions

**Given:** AC; one of the two finite Coxeter systems and the recorded bipartite reflection order from the Statement.

[F1] The canonical representation is a homomorphism with $\rho(s)=r_{e_s}$, and its complexification is faithful; for a finite Coxeter group these matrices have finite order. The simple-root Gram form and reflection formula are the ones in the Statement ([[def-cg-canonical-reflection-homomorphism]], [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]] (1), [[def-cg-real-coxeter-form-and-reflection]]).

[F2] The diagrams are finite type; the bipartite element is the product of the two commuting color-class products, and reversing class order gives a conjugate. The diagram lists, finite group property and Coxeter conventions are as stated in the classification ([[def-cg-bipartite-coxeter-element-and-root-recursion]], [[def-cg-coxeter-diagram-components-and-finite-type]], [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)).

[F3] For a square matrix $M$, $\det(XI-M)$ is its characteristic polynomial; $A\operatorname{adj}(A)=\det(A)I$; formal differentiation gives $\frac{d}{dt}\det(I-tM)=-\operatorname{tr}(\operatorname{adj}(I-tM)M)$; trace is the diagonal sum, so it is linear and $\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\sum_{j,i}b_{ji}a_{ij}=\operatorname{tr}(BA)$; and a finite-order operator over $\mathbb C$ is diagonalisable ([[def-characteristic-polynomial-of-a-matrix]], [[def-determinant-of-a-square-matrix]], [[def-matrix-minors-cofactors-and-adjugate]], [[thm-adjugate-identity-over-a-commutative-ring]], [[lem-derivative-of-det-i-minus-xa]], [[def-formal-derivative-of-a-polynomial]], [[def-trace-of-a-square-matrix-over-a-commutative-ring]], [[cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero]]). Over a field, a positive-sized square matrix is invertible exactly when its determinant is nonzero ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]); hence $\det(\lambda I-M)=0$ exactly when $\lambda$ is an eigenvalue.

[F4] The cyclotomic polynomial $\Phi_m$ has precisely the primitive $m$th roots of unity as its roots; $\zeta_h$ has order $h$, and Euler's formula gives $e^{i\theta}+e^{-i\theta}=2\cos\theta$ ([[def-cyclotomic-polynomial]], [[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[thm-complex-nth-roots-and-roots-of-unity]], [[def-roots-of-unity-in-a-field]], [[def-complex-numbers-and-arithmetic]], [[thm-eulers-formula]]).

[F5] The exact E6 and H3 reflection matrices in the recorded root orders, their exact power-sum lists, the H3 identity $\varphi^2=\varphi+1$, the embeddings of $\varphi$ in the corresponding cyclotomic fields, and the positive-root counts $|\Phi_+|=nh/2$ are the outputs established in the preceding exceptional-spectrum item ([[lem-cg-exceptional-coxeter-spectra-from-exact-certificates]] (2.1),(4.1),(5.1)-(5.2)).

[F6] Under AC, the general theorem identifies basic degrees with one plus the spectral exponents, gives $h=\max_i d_i$, and gives $\prod_i d_i=|W|$ ([[def-cg-coxeter-basic-degrees-and-graded-coinvariants]], [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (1)-(2), [[def-axiom-of-choice]]).

## Proof

**Proof technique:** Construct the two matrices from the reflection formula, derive the exact trace recurrence for the characteristic polynomial, and identify their roots with roots of unity.

1.1 For either diagram, let $R_t$ denote the matrix of $r_t$. Its $j$th column is $e_j-2B(e_j,e_t)e_t$ by [F1]. If the recorded application order is $i_1,\dots,i_n$, then $M=R_{i_n}\cdots R_{i_1}$ is the matrix of the corresponding bipartite Coxeter element. The Gram entries are $-1/2$ on each label-$3$ edge, $-\varphi/2$ on the label-$5$ edge of $H_3$, and $0$ off the diagram. Applying the column rule gives $$M_{E_6}=\begin{pmatrix}-1&1&0&0&0&0\\-1&1&-1&1&0&1\\0&1&-1&1&0&1\\0&1&-1&1&-1&1\\0&0&0&1&-1&0\\0&1&-1&1&0&0\end{pmatrix},\qquad M_{H_3}=\begin{pmatrix}-1&\varphi&0\\-\varphi&1+\varphi&-1\\0&1&-1\end{pmatrix}.$$ These are the matrices for the stated application orders; the reflections preserve $B$, so the products are finite-order matrices of the corresponding Coxeter elements [F1, F2]. [F1, F2, algebra]

1.2 For either matrix $M$, write $\det(I-tM)=\sum_{k=0}^{n}q_kt^k$, with $q_0=1$, and $\operatorname{adj}(I-tM)=\sum_{k=0}^{n-1}B_kt^k$. The adjugate identity gives $B_0=I$ and, by comparing the coefficient of $t^k$, $B_k=MB_{k-1}+q_kI$ for $1\le k<n$. The derivative identity in [F3] gives $kq_k=-\operatorname{tr}(B_{k-1}M)=-\operatorname{tr}(MB_{k-1})$ for $1\le k\le n$, using trace cyclicity. Thus the exact recurrence is $q_k=-\operatorname{tr}(MB_{k-1})/k$, $B_k=MB_{k-1}+q_kI$; for $k=n$, only $q_n$ is needed [F3, algebra]. Since $\det(XI-M)=X^n\det(I-X^{-1}M)$, the same $q_k$ are the coefficients of $X^{n-k}$ in the characteristic polynomial [F3, algebra]. [F3]

2.1 Exact multiplication of the displayed matrices gives the following power traces and recurrence traces. For $E_6$, $(\operatorname{tr}M,\dots,\operatorname{tr}M^6)=(-1,1,2,-3,-1,-2)$ and $(\operatorname{tr}(MB_0),\dots,\operatorname{tr}(MB_5))=(-1,0,3,0,-5,-6)$, so $(q_1,\dots,q_6)=(1,0,-1,0,1,1)$. For $H_3$, using $\varphi^2=\varphi+1$, $(\operatorname{tr}M,\operatorname{tr}M^2,\operatorname{tr}M^3)=(\varphi-1,\varphi,-\varphi)$ and $(\operatorname{tr}(MB_0),\operatorname{tr}(MB_1),\operatorname{tr}(MB_2))=(\varphi-1,2(\varphi-1),-3)$, so $(q_1,q_2,q_3)=(1-\varphi,1-\varphi,1)$. Substituting these coefficients into $\det(XI-M)=X^n+q_1X^{n-1}+\cdots+q_n$ yields the two displayed characteristic polynomials in (1) and (2). [F3, F5, step 1.2, algebra]

3.1 Use the fixed integers $H=12$ for E6 and $H=10$ for H3 in this root calculation, independently of the unknown group order $h$; throughout this step $\zeta_H=\exp(2\pi i/H)$. For E6, $\Phi_3(X)=X^2+X+1$ and $\Phi_{12}(X)=X^4-X^2+1$; multiplying gives $X^6+X^5-X^3+X+1$, the polynomial computed in 2.1. The roots of $\Phi_3$ are $\zeta_{12}^4,\zeta_{12}^8$, and the roots of $\Phi_{12}$ are $\zeta_{12}^1,\zeta_{12}^5,\zeta_{12}^7,\zeta_{12}^{11}$. Thus the E6 spectral exponents are $1,4,5,7,8,11$. All these eigenvalues are twelfth roots and $\zeta_{12}$ occurs. For H3, the polynomial in 2.1 factors as $(X+1)(X^2-\varphi X+1)$. By [F4]-[F5], $\zeta_{10}+\zeta_{10}^{-1}=2\cos(\pi/5)=\varphi$, so the quadratic roots are $\zeta_{10},\zeta_{10}^{-1}$; the linear root is $-1=\zeta_{10}^5$. Thus its spectral exponents are $1,5,9$, all tenth roots with $\zeta_{10}$ occurring. [F4, F5, step 2.1, algebra]

4.1 By [F1]-[F3], each matrix is finite order and diagonalisable. Step 3.1 shows that in E6 all eigenvalues are twelfth roots of unity and $\zeta_{12}$ occurs, so $M^{12}=I$ while $M^k\ne I$ for every positive $k<12$; in H3 all eigenvalues are tenth roots and $\zeta_{10}$ occurs, so $M^{10}=I$ while $M^k\ne I$ for every positive $k<10$. Thus the matrix orders are exactly $12$ and $10$. Faithfulness in [F1] implies the orders of $c$ and $M=\rho_{\mathbb C}(c)$ agree, so $h=12$ and $h=10$, respectively. The residue sums are $1+4+5+7+8+11=36=6\cdot12/2$ and $1+5+9=15=3\cdot10/2$, which equal $|\Phi_+|$ by [F5]. Under AC, [F6] gives the degrees $e_i+1$: E6 has $2,5,6,8,9,12$, and H3 has $2,6,10$. Their products are $51840$ and $120$, respectively, so [F6] gives the stated group orders. The Axiom of Choice is used only for this basic-degree transfer; all matrix, trace and root calculations are finite and exact. [F1, F3, F5, F6, step 3.1, algebra] ∎
