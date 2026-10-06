---
id: lem-projective-space-products-have-triangular-characteristic-number-matrix
kind: lemma
title: "Products of complex projective spaces have an invertible Pontryagin-number matrix"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes, lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas, lem-kronecker-pairing-is-multiplicative-under-cross-products, lem-fundamental-class-of-a-product-of-closed-manifolds, def-pontryagin-number-of-a-closed-oriented-manifold, def-kronecker-evaluation-pairing, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, thm-cartesian-product-makes-bordism-a-graded-ring, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, cor-field-kunneth-isomorphism-for-homology-of-products, def-unoriented-and-oriented-bordism-groups, thm-newtons-identities, thm-pontryagin-whitney-product-away-from-two, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 16.8 and its proof, printed pp. 193-195: triangularity for symmetric characteristic polynomials s_I; Problem 16-A, printed p. 195: Newton identities. The power-sum-product comparison and its repeated-part factorial are proved locally here."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 13, printed pp. 25-26: s-number triangularity; the ordinary Pontryagin-number matrix is obtained here by a locally proved Newton change of basis."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 12.16 and (12.17), printed pp. 104-105: the two-by-two matrix for the degree-eight check"
dependency_level: 2
---

## Statement

Assume AC as inherited from the characteristic-class suppliers. For a
partition $J=(j_1,\dots,j_r)$ of $k\ge0$, let
$P_J=\mathbb{CP}^{2j_1}\times\cdots\times\mathbb{CP}^{2j_r}$ with its product
complex orientation, and write $p_I=p_{i_1}\cdots p_{i_t}$ for a partition $I$
of $k$. The ordinary Pontryagin-number matrix
$A_{I,J}=\langle p_I(TP_J),[P_J]\rangle$ is invertible over $\mathbb Q$. Its
triangular comparison matrix is obtained from the Newton power-sum
characteristic classes $s_m(p)$, defined uniquely by the polynomial recurrence
$$s_m=(-1)^{m-1}m p_m+\sum_{a=1}^{m-1}(-1)^{a-1}p_a s_{m-a}.$$
For $s_I=\prod_a s_{i_a}$, set $B_{I,J}=\langle s_I(TP_J),[P_J]\rangle$. Say
that $I$ refines $J$ when the labeled parts of $I$ can be grouped into blocks
whose sums are the parts of $J$. Then $B_{I,J}=0$ unless $I$ refines $J$. Order
the partitions with every proper refinement earlier than the partition it
refines; $B$ is upper triangular and
$$B_{J,J}=\left(\prod_{d\ge1}m_d(J)!\right)\prod_{a=1}^r(2j_a+1)\ne0,$$
where $m_d(J)$ is the multiplicity of $d$ in $J$. The Newton substitutions
give an invertible rational change of row basis between $B$ and $A$. The
ordinary matrix $A$ itself need not be triangular: in degree eight, with rows
$(2),(1,1)$ and columns $\mathbb{CP}^4,\mathbb{CP}^2\times\mathbb{CP}^2$, it is
$\begin{pmatrix}10&9\\25&18\end{pmatrix}$, while the corresponding $s$-matrix
is $\begin{pmatrix}5&0\\25&18\end{pmatrix}$. At $k=0$ the empty partition gives
the point and the one-by-one matrix $(1)$.

## Facts & Assumptions

**Given:** An integer $k\ge0$ and partitions $I,J$ of $k$, the products $P_J$ with their product complex orientations, and the universal polynomials $s_m$ defined by the recurrence of the statement.

[F1] [[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]: $H^*(\mathbb{CP}^{2j};\mathbb Z)=\mathbb Z[x]/(x^{2j+1})$ with $\langle x^{2j},[\mathbb{CP}^{2j}]\rangle=1$, $x^{2j+1}=0$, and $p(T\mathbb{CP}^{2j})=(1+x^2)^{2j+1}$, so $p_m(T\mathbb{CP}^{2j})=\binom{2j+1}{m}x^{2m}$.

[F2] [[lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas]]: for complex-manifold factors the integral class identity $p(T(P_J))=\prod_bp(T\mathbb{CP}^{2j_b})$ holds for the external product, the fundamental class is the cross product of the factors' fundamental classes, and Pontryagin numbers expand over the splittings of the multi-index.

[F3] [[lem-kronecker-pairing-is-multiplicative-under-cross-products]]: $\langle\alpha\times\beta,c\times d\rangle=\langle\alpha,c\rangle\langle\beta,d\rangle$; [[def-pontryagin-number-of-a-closed-oriented-manifold]] defines the numbers as evaluations and gives the wrong-degree value $0$; [[def-kronecker-evaluation-pairing]] is the pairing.

[F4] [[thm-pontryagin-whitney-product-away-from-two]]: $p(E\oplus F)=p(E)p(F)$ over $\mathbb Z[1/2]$, with no integral multiplicativity asserted; [[thm-newtons-identities]] relates elementary symmetric functions to power sums over every commutative ring.

[F5] [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]] gives the truncated polynomial rings, [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] the external product and its multiplicativity, [[cor-field-kunneth-isomorphism-for-homology-of-products]] the tensor decomposition of the homology of a product, and [[thm-cartesian-product-makes-bordism-a-graded-ring]] with [[def-unoriented-and-oriented-bordism-groups]] record that products of closed oriented manifolds represent bordism classes; [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

## Proof

1.1 Newton power-sum classes. The recurrence defines $s_m$ uniquely in $\mathbb Z[p_1,\dots,p_m]$: the coefficient of $p_m$ is $(-1)^{m-1}m$ and the remaining terms involve only $p_1,\dots,p_{m-1}$. Substitution of cohomology classes is therefore well defined, natural under pullback, and stable under adjoining trivial summands, since it is a finite polynomial expression in the Pontryagin classes. For a formal total class $P(t)=1+\sum_{a\ge1}p_at^a$ with $P(0)=1$ the recurrence is equivalent to the coefficient identity $tP'(t)P(t)^{-1}=\sum_{m\ge1}(-1)^{m-1}s_m(p)t^m$, because $tP'=\bigl(\sum_{a\ge1}ap_at^a\bigr)$ and $P^{-1}$ is the unique inverse series. Newton's identities [F4] identify these polynomials with the power sums of the Chern roots when the $p_a$ are elementary symmetric functions, so no choice of roots or splitting space is needed. The product rule shows that the logarithmic derivative of $P_EQ_F$ is the sum of the logarithmic derivatives of $P_E$ and $P_F$; comparing coefficients and using the rational Whitney multiplicativity [F4] gives $s_m(E\oplus F)=s_m(E)+s_m(F)$ over $\mathbb Q$. [F4]

2.1 Values on projective factors. For $\mathbb{CP}^{2j}$ the total class is $P(t)=(1+x^2t)^{2j+1}$ by [F1], a finite polynomial; differentiating, $tP'/P=(2j+1)x^2t(1+x^2t)^{-1}=(2j+1)\sum_{m\ge1}(-1)^{m-1}x^{2m}t^m$, so $s_m(T\mathbb{CP}^{2j})=(2j+1)x^{2m}$ in the truncated ring. On $P_J$, the product decomposition and external-product multiplicativity of [F5], the integral class identity of [F2], the additivity of step 1.1 and naturality give $s_m(TP_J)=\sum_{b=1}^r(2j_b+1)x_b^{2m}$, where $x_b$ is the pullback of the generator of the $b$-th factor. [F1, F2, F5, step 1.1]

3.1 Refinement vanishing. Expanding $s_I=\prod_{a}s_{i_a}$ by step 2.1, $$s_I(TP_J)=\sum_{\varphi}\prod_{a=1}^t(2j_{\varphi(a)}+1)\,x_{\varphi(a)}^{2i_a},$$ the sum over all assignments $\varphi$ of the labeled parts of $I$ to the $r$ factors. A term depends on $\varphi$ only through the block sums $n_b=\sum_{\varphi(a)=b}i_a$ and the multiplicities $k_b=\#\{a:\varphi(a)=b\}$, and equals $\prod_b(2j_b+1)^{k_b}x_b^{2n_b}$; since $\sum_b n_b=k=\sum_b j_b$, any unequal block sums force $n_b>j_b$ for some $b$, making that term zero in the truncated ring [F1]. If all $n_b=j_b$, the degree-matched cross-product pairing [F3] evaluates the term on $[P_J]$ as $\prod_b(2j_b+1)^{k_b}$, because every factor has $\langle x_b^{2j_b},[\mathbb{CP}^{2j_b}]\rangle=1$ [F1]. Thus $B_{I,J}\ne0$ requires the block sums of $I$ to be exactly the parts $j_b$ of $J$, which is the stated refinement relation; otherwise $B_{I,J}=0$. [F1, F2, F3, step 2.1]

4.1 Diagonal and triangularity. Take $I=J$, so both have $r$ parts. A contributing assignment must assign parts to factors with block sums $j_b$, and since there are $r$ parts and $r$ factors each block is nonempty; hence each factor receives exactly one part, necessarily its own $j_b$. Each of the $\prod_dm_d(J)!$ permutations of equal parts gives such an assignment and contributes the factor $\prod_b(2j_b+1)$ of step 2.1, so $B_{J,J}=\bigl(\prod_dm_d(J)!\bigr)\prod_b(2j_b+1)\ne0$. Since proper refinement is a strict partial order, choose a total order of the partitions of $k$ extending it, with every proper refinement earlier; by step 3.1 the matrix $B$ in that order is upper triangular with the nonzero displayed diagonal, hence invertible over $\mathbb Q$. [step 2.1, step 3.1]

5.1 Newton substitution and invertibility of $A$. The recurrence shows $s_m=(-1)^{m-1}mp_m+$ (a polynomial in $p_1,\dots,p_{m-1}$), so recursively $p_m$ is a rational polynomial in $s_1,\dots,s_m$ with $p_m\equiv\pm s_m/m$ modulo lower weight, and the substitution is weight-preserving and triangular with nonzero diagonal in the same order. On weight $k$ the monomials in the $p$-classes correspond exactly to the partitions of $k$, so this is a finite invertible rational row transformation $C$ expressing the $s$-classes in the $p$-classes; explicitly $B_{I,J}=\sum_K C_{I,K}A_{K,J}$ and $C$ is invertible, hence $A=C^{-1}B$ is invertible over $\mathbb Q$ as well. [step 4.1]

6.1 Degree-eight and degree-zero checks. For $\mathbb{CP}^4$, $p(T\mathbb{CP}^4)=(1+x^2)^5$ gives $p_1=5x^2$, $p_2=10x^4$, so $p_1^2[\,\mathbb{CP}^4]=25$ and $p_2[\mathbb{CP}^4]=10$. For $N=\mathbb{CP}^2\times\mathbb{CP}^2$, the class identity of [F2] and the multiplicativity of the external product [F5] give $p_1=3x^2\otimes1+1\otimes3y^2$ and $p_2=9x^2\otimes y^2$, hence $p_1^2=9x^4\otimes1+18x^2\otimes y^2+1\otimes9y^4$ with only the middle term surviving the evaluations ($x^3=y^3=0$, and $x^4,y^4$ exceed the top degrees), so $p_1^2[N]=18$ and $p_2[N]=9$; the displayed two-by-two matrices and the determinant $-45$ of $A$ follow, and the $s$-matrix row is $s_2=p_1^2-2p_2$ with values $25-20=5$ and $18-18=0$. For $k=0$ the empty partition gives the point, $A$ and $B$ are the one-by-one matrix $(1)$, and the conventions of [F3] cover the empty product. AC is used only through the cited suppliers, which carry their own declarations. [F1, F2, F3, F5, step 4.1, step 5.1] ∎
