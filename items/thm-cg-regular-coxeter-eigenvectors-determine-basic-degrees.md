---
id: thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees
kind: theorem
title: "A regular Coxeter eigenvector determines the basic degrees: the exponent-residue identification and the complete degree tables for all finite Coxeter types"
status: draft
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
  - def-cg-dual-chambers-and-reflection-hyperplanes
  - def-cg-real-coxeter-form-and-reflection
  - def-characteristic-polynomial-of-a-matrix
  - def-determinant-of-a-square-matrix
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-finite-linear-invariant-and-coinvariant-polynomial-algebras
  - def-multivariate-polynomial-ring-by-iteration
  - def-roots-of-unity-in-a-field
  - lem-cg-basic-degrees-independent-and-coinvariant-series
  - lem-cg-classical-coxeter-spectra-from-reflection-models
  - lem-cg-complexification-satisfies-reflection-invariant-hypotheses
  - lem-cg-diagram-products-and-invariant-form-comparison
  - lem-cg-exceptional-coxeter-spectra-from-exact-certificates
  - lem-cg-formal-rational-differentials-and-invariant-jacobian
  - lem-cg-steinberg-bipartite-root-enumeration
  - thm-cg-coinvariant-top-degree-and-discriminant
  - thm-cg-finite-coxeter-classification-including-h-and-dihedral
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-complex-nth-roots-and-roots-of-unity
justified_by: []
dependency_level: 19
proof_strategy: direct
axiom_use: "The Axiom of Choice is consumed exactly through the invariant-degree machinery: the $n$-element basic family and the Molien/Hilbert suppliers of [[thm-cg-coinvariant-top-degree-and-discriminant]] and [[lem-cg-basic-degrees-independent-and-coinvariant-series]]. The Coxeter-plane, eigenvalue and residue computations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Josh Swanson, On eigenvalues of representations of reflection groups and wreath products (University of Washington CAT seminar notes, 7-page PDF)
      url: https://www.jpswanson.org/talks/2016_eigenvalues.pdf
      locator: "Theorem 11, printed p. 2: for a finite Coxeter group acting as a complex reflection group, the degrees are one plus the cyclic exponents of a Coxeter element. This is an independent statement-level check; the current proof re-establishes the result and does not use the theorem as a supplier."
    - title: Vivien Ripoll (Strobl seminar notes, joint with Reiner and Stump), Coxeter elements in well-generated reflection groups (57-page PDF)
      url: https://www.normalesup.org/~vripoll/Strobl_Coxelt.pdf
      locator: "Slide 25: h equals the highest invariant degree; a Coxeter element preserves a plane and acts there by rotation through 2 pi/h, hence has eigenvalue exp(2 pi i/h). Used as an independent statement-level check only. The avoidance of reflecting hyperplanes is proved locally from the root-trace enumeration."
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: https://www.math.ubc.ca/~cass/research/pdf/Element.pdf
      locator: Proposition 3.2, printed p. 6, states that a Coxeter element has no eigenvalue 1; Theorem 3.11, printed p. 9, gives the rotation angle 2 pi/h on the Coxeter plane; the type table is printed p. 11. These are independent consistency checks only, not proof suppliers.
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be an irreducible Coxeter system of finite type, $n=|S|$, with $V$, $B$, $\rho_{\mathbb C}$, $\Phi_+$, $T$, chamber and longest-element conventions ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-root-sign-and-simple-reflection-positivity]], [[def-cg-dual-chambers-and-reflection-hyperplanes]]), let $c$ be the bipartite Coxeter element with order $h$ and Coxeter plane $P=\mathrm{span}(u,v)$, prefix roots $\rho_i$ and the conclusion $|\Phi_+|=nh/2$ ([[def-cg-bipartite-coxeter-element-and-root-recursion]], [[lem-cg-steinberg-bipartite-root-enumeration]]), and let $d_1\le\dots\le d_n$ and $e_i=d_i-1$ be the basic degrees and exponents of [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]]. Put $N:=|\Phi_+|$. Then:

**(1) Exponent-residue identification.** The multiset of exponents equals the multiset of spectral exponents of $\rho_{\mathbb C}(c)$: after relabelling, $e_i=r_i$, where $r_1,\dots,r_n\in\{1,\dots,h-1\}$ are the residues with $\rho_{\mathbb C}(c)$-eigenvalues $\zeta_h^{r_1},\dots,\zeta_h^{r_n}$ (each eigenvalue counted with multiplicity). Consequently $\sum_i e_i=N=|\Phi_+|=nh/2$, the eigenvalues of $\rho_{\mathbb C}(c)$ are exactly $\zeta_h^{e_1},\dots,\zeta_h^{e_n}$, and $h=\max_i d_i$, $\min_i d_i=2$.

**(2) Complete degree tables.** Combining (1) with the classical and exceptional spectra: $$A_n:\ 2,3,\dots,n+1;\quad B_n:\ 2,4,\dots,2n;\quad D_n:\ 2,4,\dots,2n-2\ \text{and}\ n;$$ $$I_2(m):\ 2,m;\quad E_6:\ 2,5,6,8,9,12;\quad E_7:\ 2,6,8,10,12,14,18;\quad E_8:\ 2,8,12,14,18,20,24,30;$$ $$F_4:\ 2,6,8,12;\quad H_3:\ 2,6,10;\quad H_4:\ 2,12,20,30.$$

These degree lists are multisets; when $n$ is even, the degree $n$ in type $D_n$ is counted twice. With the conventions $A_1$: degree $2$; the coincidences $A_2=I_2(3)$, $B_2=I_2(4)$, $G_2=I_2(6)$, $A_3=D_3$ and $A_1\times A_1=I_2(2)$ of [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (4) (for the extended convention $I_2(2)=A_1\times A_1$ the multiset is $\{2,2\}$, covered by (3)); and products of these degree multisets for reducible types as in (3). In each case $\prod_i d_i=|W|$.

**(3) Reducible systems.** If $(W,S)=(W_{S_1}\times\cdots\times W_{S_k})$ with connected components $S_1,\dots,S_k$ and $V_{\mathbb C}=\bigoplus_j V_{\mathbb C,j}$ the $B_{\mathbb C}$-orthogonal decomposition ([[lem-cg-diagram-products-and-invariant-form-comparison]]), then $\mathbb C[V_{\mathbb C}]^{W}=\bigotimes_j\mathbb C[V_{\mathbb C,j}]^{W_{S_j}}$ as graded algebras, the degree multiset of $W$ is the union of the component degree multisets, and the coinvariant algebra is the tensor product of the component coinvariant algebras. There is no single global Coxeter number in general.

**(4) Conventions and abstentions.** For $n=1$ ($A_1$) the assertions are direct; for $n=0$ they are empty. Nothing is imported about a common length function, about Poincaré polynomial growth, or about the regular-representation structure of the coinvariant algebra; the tables are derived from the spectral data, not assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice; for the irreducible clause, a finite irreducible Coxeter system $(W,S)$ of rank $n\ge2$, its complex reflection representation, bipartite Coxeter element $c$ of order $h$, Coxeter plane, positive roots, reflecting hyperplanes and fixed homogeneous basic invariants $p_1,\dots,p_n$ with degrees $d_1\le\dots\le d_n$; rank zero and rank one are treated separately below.

[F1] Under AC, the fixed basic family exists, its degrees satisfy $d_i\ge2$, and its exponents are $e_i=d_i-1>0$; each $p_i$ is homogeneous, $W$-invariant, and the invariant ring is generated by these algebraically independent polynomials ([[def-cg-coxeter-basic-degrees-and-graded-coinvariants]] (1)-(3), [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]] (4), [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]], [[def-axiom-of-choice]]).

[F2] The canonical representation is a real group homomorphism and its complexification is faithful; since $c^h=1$, its complexified operator $C=\rho_{\mathbb C}(c)$ satisfies $C^h=I$. The root-sign and chamber conventions specify the positive roots and reflecting hyperplanes, and the bipartite element has the ordered root data of its definition ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]] (1), [[def-cg-coxeter-diagram-components-and-finite-type]], [[def-cg-dual-chambers-and-reflection-hyperplanes]], [[thm-cg-root-sign-and-simple-reflection-positivity]], [[def-cg-bipartite-coxeter-element-and-root-recursion]]).

[F3] For irreducible finite type, $c$ acts on its Coxeter plane $P$ as rotation by $2\pi/h$; the traces $H_\alpha\cap P$ are exactly the $h$ reflection lines, $c-\mathrm{id}$ is invertible (so its complexification $C-I$ is invertible), and $\Phi_+=\{\rho_1,\dots,\rho_{nh/2}\}$, so $|\Phi_+|=nh/2$ ([[lem-cg-steinberg-bipartite-root-enumeration]] (2)-(4)).

[F4] The invariant Jacobian $\mathbf J=\det(dp_i/dx_j)$ is nonzero; it is a nonzero scalar multiple of the discriminant $\Delta=\prod_{\alpha\in\Phi_+}\ell_\alpha$, whose zero set is the union of the complexified reflecting hyperplanes; and $\sum_i e_i=|\Phi_+|=|T|$ ([[lem-cg-formal-rational-differentials-and-invariant-jacobian]] (3), [[thm-cg-coinvariant-top-degree-and-discriminant]] (1)-(2)).

[F5] For a finite type Coxeter system under AC, $\dim_\mathbb C A=\prod_i d_i=|W|$, and for a reducible diagram the basic-degree multiset is the union of the component multisets ([[lem-cg-basic-degrees-independent-and-coinvariant-series]] (3),(5)).

[F6] The real matrix $\rho_{\mathbb C}(c)$ has characteristic polynomial with real coefficients; its nonreal eigenvalues therefore occur with their complex conjugates and with equal algebraic multiplicities. A finite-order complex operator is diagonalisable. For any matrix $M$, $\chi_{M^{\mathsf T}}(X)=\det((XI-M)^{\mathsf T})=\det(XI-M)=\chi_M(X)$, by $\det(A^{\mathsf T})=\det(A)$, so the eigenvalues of $M$ and $M^{\mathsf T}$ agree with multiplicity ([[cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero]], [[def-characteristic-polynomial-of-a-matrix]], [[def-determinant-of-a-square-matrix]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-roots-of-unity-in-a-field]], [[thm-complex-nth-roots-and-roots-of-unity]]). Over a field, a positive-sized square matrix is invertible exactly when its determinant is nonzero ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]); hence $\det(\lambda I-M)=0$ exactly when $\lambda$ is an eigenvalue.

[F7] The exact irreducible finite diagrams, standard coincidences, direct-product decomposition, and orthogonal decomposition of the representation are as stated in the finite classification and product theorem ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)-(4), [[lem-cg-diagram-products-and-invariant-form-comparison]] (1)-(2)). Polynomial functions on a direct sum decompose into the tensor product of the coordinate polynomial algebras; expansion in the block monomial basis is finite ([[def-multivariate-polynomial-ring-by-iteration]], [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]]).

[F8] The exact classical and exceptional Coxeter characteristic polynomials and spectral-exponent multisets are those proved in the two preceding spectrum items ([[lem-cg-classical-coxeter-spectra-from-reflection-models]], [[lem-cg-exceptional-coxeter-spectra-from-exact-certificates]]).

## Proof



**Proof technique:** At a regular Coxeter eigenvector the gradients of the basic invariants form a basis. Their covariance gives the degrees modulo $h$; a real-spectrum sum and the discriminant degree remove all possible multiples of $h$.



1.1 Assume first that $W$ is irreducible and $n\ge2$. Let $P=\operatorname{span}_{\mathbb R}(u,v)$ be the Coxeter plane. Choose real vectors $\xi,\eta$ forming a basis of $P$ so that $x=\xi+i\eta$ is an eigenvector of $C:=\rho_{\mathbb C}(c)$ with eigenvalue $\zeta_h^{-1}$; this is possible because $C|_P$ is rotation by $2\pi/h$ [F2, F3]. If $x$ lay in a complexified reflecting hyperplane $H_\alpha\otimes_{\mathbb R}\mathbb C$, then its real and imaginary parts $\xi,\eta$ would both lie in $H_\alpha$, so $P\subseteq H_\alpha$. But $H_\alpha\cap P$ is a line by [F3], so no reflecting hyperplane contains $P$. Therefore every factor of $\Delta(x)$ is nonzero and $\mathbf J(x)\ne0$ by [F4]. The matrix $(dp_i(x))_{i=1}^n$ is thus invertible, and $dp_1(x),\dots,dp_n(x)$ form a basis of $V_{\mathbb C}^*$ [F4]. [F2, F3, F4, F6, algebra]

1.2 Let the connected components of a reducible diagram be $S_1,\dots,S_k$, with corresponding spaces $V_{\mathbb C,j}$ and groups $W_j$. By [F7], $W=\prod_jW_j$ acts on $V_{\mathbb C}=\bigoplus_jV_{\mathbb C,j}$ factorwise, and the coordinate polynomial algebra is $\mathbb C[V_{\mathbb C}]=\bigotimes_j\mathbb C[V_{\mathbb C,j}]$. To compute invariants, expand any polynomial as a finite sum of block monomials with coefficients in the other blocks. Invariance under $W_j$ forces every coefficient in the $j$-th block to be $W_j$-invariant; doing this for each factor proves $\mathbb C[V_{\mathbb C}]^W=\bigotimes_j\mathbb C[V_{\mathbb C,j}]^{W_j}$, and the reverse inclusion follows because each factor acts trivially on the other blocks [F7]. Each component invariant ring is polynomial on its homogeneous basic family, so the tensor product is polynomial on the union of these families. Its degrees are therefore the union of the component degree multisets, also as in [F5]. If $I_j$ is the ideal generated by positive-degree invariants in the $j$-th block, then the positive-degree ideal of $\bigotimes_j\mathbb C[V_{\mathbb C,j}]^{W_j}$ generates precisely $I=\sum_j I_j\,\mathbb C[V_{\mathbb C}]$: every positive-degree pure tensor has at least one positive-degree factor, and each $I_j$ is generated by invariants of the full product. The tensor-product quotient is consequently $\mathbb C[V_{\mathbb C}]/I\cong\bigotimes_j(\mathbb C[V_{\mathbb C,j}]/I_j)$, which is the asserted tensor decomposition of coinvariant algebras. By [F5] the product of all degrees is $|W|=\prod_j|W_j|$. There is no common Coxeter number for unequal component orders, and this clause uses no global $h$. [F5, F7, algebra]

2.1 For each $i$ and all $y\in V_{\mathbb C}$, $p_i(Cy)=p_i(y)$ because $p_i$ is invariant [F1]. Differentiate this identity at $y=x$ in an arbitrary direction $v$ to get $dp_i(Cx)(Cv)=dp_i(x)(v)$, or $dp_i(Cx)\circ C=dp_i(x)$. Since $Cx=\zeta_h^{-1}x$ and $p_i$ is homogeneous of degree $d_i$, $dp_i(\zeta_h^{-1}x)=\zeta_h^{-(d_i-1)}dp_i(x)$; hence $dp_i(x)\circ C=\zeta_h^{d_i-1}dp_i(x)=\zeta_h^{e_i}dp_i(x)$. These covectors form a basis by 1.1, so the eigenvalue multiset of the transpose action is $\{\zeta_h^{e_i}\}_{i=1}^n$. A matrix and its transpose have the same characteristic polynomial, so this is also the eigenvalue multiset of $C$, with multiplicity [F1, F2, F6, step 1.1, algebra]. By [F3], $C-I$ is invertible, so $1$ is not an eigenvalue. Thus each $e_i$ is congruent modulo $h$ to a unique residue in $\{1,\dots,h-1\}$, and these residues, counted with multiplicity, are exactly the spectral exponents $r_1,\dots,r_n$ of the statement [F2, F3, F6]. [F1, F2, F3, F6, step 1.1]

3.1 The matrix $C$ is real by [F2], so its nonreal eigenvalues pair as $\zeta_h^r,\zeta_h^{-r}=\zeta_h^{h-r}$ with equal multiplicity; each such pair contributes $h$ to the sum of residues. The only real $h$-th roots of unity are $1$ and, when $h$ is even, $-1$; $1$ is excluded by 2.1, while each occurrence of $-1=\zeta_h^{h/2}$ contributes $h/2$. Partitioning the full eigenvalue multiset into these pairs and occurrences of $-1$ therefore gives $\sum_i r_i=nh/2$ [F2, F3, F6, algebra]. By [F4], $\sum_i e_i=|\Phi_+|=nh/2$ as well. Since each positive integer $e_i$ is congruent to a residue $r$ in $\{1,\dots,h-1\}$, it has the form $e_i=r+hq_i$ with an integer $q_i\ge0$; the residue multiset and exponent multiset have the same cardinality, and the equal sums force every $q_i=0$. Thus the exponent multiset is exactly the spectral-residue multiset, proving (1)'s identification and sum claim. [F1, F3, F4, step 2.1]

4.1 The rotation on $P$ has eigenvalues $\zeta_h$ and $\zeta_h^{-1}=\zeta_h^{h-1}$, so the spectral residues $1$ and $h-1$ both occur, counted with multiplicity (when $h=2$ these are the same residue and the eigenvalue occurs with multiplicity two on $P$). By 3.1 the same residues occur among the $e_i$. Therefore $\min_i e_i=1$ and $\max_i e_i=h-1$, which gives $\min_i d_i=2$ and $\max_i d_i=h$. [F3, step 3.1]

4.2 Add $1$ to each spectral exponent from the two computed spectrum suppliers. The classical lists give $A_n:2,3,\dots,n+1$, $B_n:2,4,\dots,2n$, $D_n:2,4,\dots,2n-2$ together with $n$, and $I_2(m):2,m$. The exceptional lists give $E_6:2,5,6,8,9,12$, $E_7:2,6,8,10,12,14,18$, $E_8:2,8,12,14,18,20,24,30$, $F_4:2,6,8,12$, $H_3:2,6,10$, and $H_4:2,12,20,30$ [F8, step 3.1]. The classification's coincidence conventions identify $A_2=I_2(3)$, $B_2=I_2(4)$, $G_2=I_2(6)$, $A_3=D_3$, and, with the extended notation, $A_1\times A_1=I_2(2)$; for the last case the degrees are the union $\{2,2\}$ [F7]. The product-degree formula $\prod_i d_i=|W|$ is [F5], so it holds for every listed irreducible type and for the reducible unions. [F5, F7]

5.1 If $n=0$, then $W$ is trivial, the invariant and coinvariant algebras are $\mathbb C$, and all degree, exponent and product assertions are empty, with empty products equal to $1$ [F1, F5]. If $n=1$, the irreducible system is $A_1$: its generator acts by $x\mapsto-x$, so the invariant ring is $\mathbb C[x^2]$, the basic degree is $2$, $c=s$ has order $h=2$ and eigenvalue $-1=\zeta_2$, the sole exponent/residue is $1$, $|\Phi_+|=1=nh/2$, and the coinvariant algebra is $\mathbb C[x]/(x^2)$. Thus all claims hold directly; for reducible rank one factors the componentwise argument of 1.2 applies [F1, F5, F7, algebra]. The Axiom of Choice is used only for the basic-family and invariant-theory supplier conclusions in [F1] and [F5]; the plane, derivative, residue and tensor calculations above use no further choice [F1, F5, def-axiom-of-choice]. [F1, F5, F7, algebra] ∎
