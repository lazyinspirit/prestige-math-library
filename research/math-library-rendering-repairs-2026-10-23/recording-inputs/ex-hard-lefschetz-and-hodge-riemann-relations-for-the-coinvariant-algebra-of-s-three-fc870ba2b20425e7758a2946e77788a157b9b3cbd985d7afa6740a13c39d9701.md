---
id: ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three
kind: example
title: "Hard Lefschetz and the Hodge-Riemann signs for the coinvariant algebra of S₃"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.1, the paragraph after Theorem 1.4 on the coinvariant ring, the canonical symmetric form and left multiplication by any rho in the interior of the dominant chamber"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Satz 6.14 and the discussion of the coinvariant ring in the introduction"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.2, the case of a finite Weyl group"
verification:
  precheck: pass
---

## Example

For $n=3$ identify the centered reduced longest-element module with $C(3)$, where $C=\mathbb R[x_1,x_2,x_3]/(e_1,e_2,e_3)$ has dimensions $1,2,2,1$ in degrees $0,2,4,6$, so that the centered degrees are $-3,-1,1,3$. For every strictly dominant $\rho$ hard Lefschetz is the pair of isomorphisms $\rho^3:C(3)^{-3}\to C(3)^3$ and $\rho:C(3)^{-1}\to C(3)^1$. The primitive spaces used in the Hodge-Riemann relations are $P^{-3}=C(3)^{-3}$ of dimension one and $P^{-1}=\ker(\rho^2:C(3)^{-1}\to C(3)^3)$ of dimension one; their Lefschetz forms are respectively positive and negative definite, and the primitive decomposition consists of one length-four $\rho$-string and one length-two $\rho$-string. For an explicit strictly dominant choice let $x=x_1$, $y=x_2$, $x_3=-x-y$, $\rho=x_1-x_3=2x+y$ and normalize $\operatorname{Tr}(x^2y)=1$. Then $C=\mathbb R[x,y]/(x^2+xy+y^2,x^3)$, with basis $1;x,y;x^2,xy;x^2y$; the $\rho$-map from degree $2$ to degree $4$ has the matrix $\begin{pmatrix}2&-1\\1&1\end{pmatrix}$, $\rho^3(1)=6x^2y$, $P^{-1}=\mathbb Ry$ and $\operatorname{Tr}(y\rho y)=-2$. These computations verify hard Lefschetz and the primitive signs directly in rank two.

## Verification

**Proof technique:** direct; elimination of the linear invariant, reduction to a two-variable model, and explicit matrix and trace computations in both the special and the general dominant chamber.

**Given:** The coinvariant algebra $C=\mathbb R[x_1,x_2,x_3]/(e_1,e_2,e_3)$ and the identification with the centered reduced module of $B_{w_0}$ ([[ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule]]), the operator $\rho\cdot(-)$ of left multiplication by a strictly dominant degree-two element and the trace normalization ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]), and the hard-Lefschetz and Hodge-Riemann dictionary with the sign $(-1)^{(d-i)/2}$ for lowest degree $-d$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]], [[lem-hard-lefschetz-implies-primitive-decomposition]]).

[F1] The centered module $C(3)$ has lowest degree $-3$, graded dimensions $1,2,2,1$ in degrees $-3,-1,1,3$ and a non-degenerate invariant form normalized by the positive bottom value; for it, hard Lefschetz is $\rho^3:C^{-3}\to C^3$ together with $\rho:C^{-1}\to C^1$, and the standard sign in degree $-i$ is $(-1)^{(3-i)/2}$, so the primitive space $P^{-1}\subset C^{-1}$ must be negative definite and $P^{-3}=C^{-3}$ positive definite ([[ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

[F2] In the quotient the relations $e_1=e_2=e_3=0$ hold and, after the substitution $x_3=-x-y$, are equivalent to $x^2+xy+y^2=0$ and $x^3=0$; the reduction of the intersection form is the standard top trace with $\operatorname{Tr}(x^2y)=1$, and $C$ is spanned by the six monomials of the display ([[ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule]]; the trace identification is checked in step 2.1).

1.1 **The two-variable model.** Put $x=x_1$, $y=x_2$ and $x_3=-x-y$. Then $e_1=x+y+x_3=0$, while $e_2=x_1x_2+x_1x_3+x_2x_3=xy+x(-x-y)+y(-x-y)=-(x^2+xy+y^2)$ and $e_3=x_1x_2x_3=-x^2y-xy^2$; hence the coinvariant ideal is generated by $x^2+xy+y^2$ and $x^2y+xy^2$, and since $x^3=x(x^2+xy+y^2)-x^2y-xy^2$ the second relation can be replaced by $x^3=0$, giving $C=\mathbb R[x,y]/(x^2+xy+y^2,x^3)$. The monomials $1;x,y;x^2,xy;x^2y$ span it: the relations $x^2=-xy-y^2$ and $x^3=0$, together with $xy^2=-x^2y$ and $y^3=0$, reduce every monomial of degree $\ge 2$ in $x$ to one of them, and their independence follows by monic division by $y^2+xy+x^2$ over $\mathbb R[x]/(x^3)$, which gives the free basis $1,y$ over that ring. [given, F2]

2.1 **The trace and pairing.** The rank-two summand map $j(p\otimes q)=p\otimes1\otimes1\otimes q$ pulls the Bott–Samelson trace back to $\partial_1\partial_2\partial_1(p)q$, as follows by taking the right-coefficient trace successively in the three slots; this is the explicit trace calculation in the rank-two decomposition proof, also obtained directly from the rank-one trace convention. After right reduction it is the top trace on $C$, since $\partial_1(x_1^2x_2)=x_1x_2$, $\partial_2(x_1x_2)=x_1$ and $\partial_1(x_1)=1$. Hence $\operatorname{Tr}(x^2y)=1$ and all degrees other than $6$ have zero trace. The complementary-degree pairings are $1$ in degrees $0,6$ and $\begin{pmatrix}0&1\\1&-1\end{pmatrix}$ in degrees $2,4$, of determinant $-1$; they prove nondegeneracy directly. The form used below is therefore the actual induced reduced intersection form, without invoking the general Hodge theorem. [step 1.1, given, F2, algebra]

3.1 **The special dominant element.** For $\rho=2x+y$ one computes $\rho x=2x^2+xy$ and $\rho y=2xy+y^2=-x^2+xy$ using $y^2=-x^2-xy$; the matrix of $\rho$ from the degree-$2$ block with basis $(x,y)$ to the degree-$4$ block with basis $(x^2,xy)$ is therefore $\begin{pmatrix}2&-1\\1&1\end{pmatrix}$, whose determinant is $3\ne0$, so $\rho:C^{-1}\to C^{1}$ is an isomorphism. Moreover $\rho^2x=3x^2y$ and $\rho^2y=0$: indeed $x^2\rho=x^2(2x+y)=2x^3+x^2y=x^2y$, $xy\rho=xy(2x+y)=2x^2y+xy^2=x^2y$; hence $\rho^2x=2\cdot x^2y+x^2y=3x^2y$ and $\rho^2y=-x^2y+x^2y=0$; hence $P^{-1}=\ker(\rho^2)=\mathbb Ry$ and $\rho^3(1)=\rho^2(2x+y)=6x^2y\ne0$, so $\rho^3:C^{-3}\to C^{3}$ is an isomorphism as both sides are one-dimensional. [step 1.1, step 2.1]

4.1 **The signs for the special element.** With the normalization $\operatorname{Tr}(x^2y)=1$, the bottom primitive form is $(1,1)=\operatorname{Tr}(1\cdot\rho^3(1))=\operatorname{Tr}(6x^2y)=6>0$, positive as required in degree $-3$; the middle primitive form is $(y,y)=\operatorname{Tr}(y\cdot\rho y)=\operatorname{Tr}(y(-x^2+xy))=\operatorname{Tr}(-x^2y+xy^2)=-1-1=-2<0$, negative as required in degree $-1$, where the standard sign is $(-1)^{(3-1)/2}=-1$. The primitive decomposition is read off from the two strings: $1\mapsto 2x+y\mapsto 3x^2+3xy\mapsto 6x^2y$ spans the four degrees with one vector each, and $y\mapsto -x^2+xy$ spans degrees $-1$ and $+1$; together they account for all four graded pieces and their dimensions, so there are exactly one length-four string and one length-two string. [step 3.1, F1]

5.1 **The general dominant chamber.** Let $\rho=c_1x_1+c_2x_2+c_3x_3$ be strictly dominant, so $c_1>c_2>c_3$; subtracting a multiple of $e_1$ (which is zero in $C$) writes its class as $\rho=ax+by$ with $a=c_1-c_3>b=c_2-c_3>0$. Then $\rho x=ax^2+bxy$ and $\rho y=-bx^2+(a-b)xy$, so the middle matrix is $\begin{pmatrix}a&-b\\b&a-b\end{pmatrix}$ with determinant $D=a^2-ab+b^2>0$, and $\rho^3(1)=3ab(a-b)x^2y$: indeed $\rho^2x=b(2a-b)x^2y$ and $\rho^2y=a(a-2b)x^2y$, so $p:=a(a-2b)x-b(2a-b)y$ satisfies $\rho^2p=0$, and expanding gives $\operatorname{Tr}(p\rho p)=A^2b-B^2a+2AB(b-a)$ with $A=a(a-2b)$, $B=b(2a-b)$, which simplifies to $-3ab(a-b)(a^2-ab+b^2)<0$. Hence $P^{-1}=\mathbb Rp$ (one-dimensional, since $p\ne0$ for $a>b>0$) carries a negative definite Lefschetz form, the bottom form $\operatorname{Tr}(3ab(a-b)x^2y)>0$ is positive, and every strictly dominant $\rho$ satisfies hard Lefschetz with the standard signs on both primitive spaces. [step 4.1, F1]

6.1 **Conclusion.** Steps 2.1 and 3.1 verify the displayed isomorphisms, the two primitive spaces and their signs for the explicit choice, and step 5.1 shows the same for every strictly dominant element; the primitive decomposition has the two strings claimed. This verifies the example by its quotient and trace calculations. [step 4.1, step 5.1, F1] ∎

## Remarks

- Define the top trace to be zero off degree $6$ and to send $x^2y$ to $1$. Its multiplication pairing is non-degenerate: the degree-$0$ and degree-$6$ pieces pair by $1$, and the degree-$2$ and degree-$4$ pairing in the displayed bases has matrix $\begin{pmatrix}0&1\\1&-1\end{pmatrix}$, of determinant $-1$. The divided-difference normalization agrees, since $\partial_1(x_1^2x_2)=x_1x_2$, $\partial_2(x_1x_2)=x_1$ and $\partial_1(x_1)=1$. This is a positive scalar normalization of the invariant form, as its bottom Lefschetz value is positive.
- The example is an illustration in rank two and is not used as a supplier in the simultaneous induction; the general statement for $w_0$ is proved on the axiom page by the induction itself.
