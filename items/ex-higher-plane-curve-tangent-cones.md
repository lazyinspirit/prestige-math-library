---
id: ex-higher-plane-curve-tangent-cones
kind: example
title: "Different singularities can share a tangent cone"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - cor-units-in-a-polynomial-ring-over-a-domain
  - def-algebraically-closed-field
  - def-generated-and-principal-ideals
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-jacobian-matrix-affine-algebraic-set
  - def-monomials-multidegree-and-total-degree
  - def-multiplicity-hypersurface-point
  - def-polynomial-ring-over-a-commutative-ring
  - def-ring-characteristic
  - def-tangent-cone-point
  - lem-evaluation-ideal-is-maximal
  - lem-field-is-a-commutative-ring
  - lem-tangent-cone-initial-ideal-presentation
  - thm-affine-scheme-ring-anti-equivalence
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-generated-ideal-description-in-a-commutative-ring
  - thm-monic-polynomial-division
  - thm-quotient-ring-universal-property
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Examples 4.13-4.17 (printed pp. 84-85)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Example

Let $k$ be an algebraically closed field of characteristic $0$, let
$P=k[x,y]=k[x][y]$, and for $i=1,\ldots,5$ let
$$ X_i=\operatorname{Spec}\bigl(k[x,y]/(f_i)\bigr)\subseteq\mathbb A^2_k $$
be the plane curve cut out by
$$ f_1=2x^4-3x^2y+y^2-2y^3+y^4,\qquad f_2=x^4+x^2y^2-2x^2y-xy^2-y^2, $$
$$ f_3=(x^2+y^2)^2+3x^2y-y^3,\qquad f_4=(x^2+y^2)^3-4x^2y^2,\qquad f_5=x^6-x^2y^3-y^5. $$
At the origin $0=(0,0)$:

- the multiplicities of the five equations are $2,2,3,4,5$, with lowest
  nonzero homogeneous parts $y^2$, $-y^2$, $y(3x^2-y^2)$, $-4x^2y^2$ and
  $-y^3(x^2+y^2)$ respectively;
- the scheme-theoretic tangent cones are the closed subschemes
  $\operatorname{Spec}(k[x,y]/(y^2))$ for both $X_1$ and $X_2$,
  $\operatorname{Spec}(k[x,y]/(y(3x^2-y^2)))$ for $X_3$,
  $\operatorname{Spec}(k[x,y]/(x^2y^2))$ for $X_4$, and
  $\operatorname{Spec}(k[x,y]/(y^3(x^2+y^2)))$ for $X_5$ of $\mathbb A^2_k$;
- each tangent space $T_0X_i$ is canonically isomorphic to $k^2$, of
  dimension two;
- the cone equations factor over $k$ as
  $$ y\cdot y,\qquad y(\sqrt3x-y)(\sqrt3x+y),\qquad x\cdot x\cdot y\cdot y,\qquad y\cdot y\cdot y\,(x+iy)(x-iy), $$
  where $\sqrt3$ and $i$ are elements of $k$ with $(\sqrt3)^2=3$ and
  $i^2=-1$; the distinct factors in each product are pairwise non-proportional, so
  these cones are the line $y=0$ doubled, three distinct lines, the two
  coordinate axes each doubled, and the line $y=0$ tripled together with two
  distinct further lines.

The first two equations therefore define different closed subschemes of
$\mathbb A^2_k$ whose multiplicity at the origin, tangent cone and tangent
space all agree. The nilpotent class of $y$ in $k[x,y]/(y^2)$ is nonzero with
square zero, so the doubling is retained and no reduction is performed in any
of the cone computations.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ of characteristic $0$, the polynomial ring $P=k[x,y]=k[x][y]$ over $k$, and the five polynomials $f_1,\ldots,f_5$ displayed above with their principal ideals $I_i=(f_i)$ and the closed subschemes $X_i=\operatorname{Spec}(P/I_i)\subseteq\mathbb A^2_k$, all studied at the origin $0=(0,0)$ of $\mathbb A^2_k$.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: for a commutative ring $R$ the polynomial ring $R[x]$ is the set of finitely supported functions $\mathbb N\to R$ with $(a+b)_n=a_n+b_n$ and $(ab)_n=\sum_{i+j=n}a_ib_j$, and $x$ is the coefficient sequence with $1$ at index $1$; iterating gives $k[x,y]=k[x][y]$.

[F2] [[def-monomials-multidegree-and-total-degree]]: every polynomial in the iterated ring $F[x_1,\ldots,x_n]$ over a field $F$ has a unique finite expansion $\sum_{\mathbf t}c_{\mathbf t}x^{\mathbf t}$, so coefficients of polynomials can be compared one monomial at a time, and each monomial has a total degree.

[F3] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is homogeneous of degree $d$ when every occurring monomial has total degree $d$, and the homogeneous parts of a polynomial are grouped by total degree.

[F4] [[def-multiplicity-hypersurface-point]]: for $0\ne f$ with $f(a)=0$, writing $f(a+t)=\sum_{j\ge0}f_j(t)$ as its finite homogeneous decomposition, the multiplicity $\operatorname{mult}_a(f)$ is the least $j$ with $f_j\ne0$, and it equals the $\mathfrak m$-adic order of $f$ in the local ring at $a$.

[F5] [[lem-tangent-cone-initial-ideal-presentation]]: for $I\subseteq \mathfrak q=(t_1,\ldots,t_n)$ in $P=k[t_1,\ldots,t_n]$, the canonical graded map $P/\operatorname{in}_{\mathfrak q}(I)\to\operatorname{gr}_{\mathfrak m_x} \mathcal O_{X,x}$ is an isomorphism, so $\operatorname{Cone}_x(X)\cong\operatorname{Spec}(P/\operatorname{in}_{\mathfrak q}(I))$, and for a principal ideal $I=(f)$ with $f\ne0$ one has $\operatorname{in}_{\mathfrak q}(I)=(f_{\min})$.

[F6] [[def-tangent-cone-point]]: for a locally Noetherian scheme and a point $x$, the scheme-theoretic tangent cone is $\operatorname{Cone}_x(X)=\operatorname{Spec}(\operatorname{gr}_{\mathfrak m_x} \mathcal O_{X,x})$; the full associated graded ring is used without quotienting by nilpotents.

[F7] [[def-jacobian-matrix-affine-algebraic-set]]: for an ideal with a finite generating list and a point $a$ with $f(a)=0$ for all $f\in I$, the Jacobian matrix at $a$ has rows $(\partial f_i/\partial t_j(a))$, with formal monomial derivatives whose integer coefficients are read in $k$.

[F8] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J(a)$, independent of the chosen list.

[F9] [[lem-evaluation-ideal-is-maximal]]: for $a\in k^n$ the evaluation map $k[x_1,\ldots,x_n]\to k$ has kernel $(x_1-a_1,\ldots,x_n-a_n)$, which is a maximal ideal.

[F10] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains an ideal $I$ factors uniquely through the quotient ring.

[F11] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to \operatorname{Spec}A$, so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of $\operatorname{Spec}A$.

[F12] [[def-generated-and-principal-ideals]]: $(S)$ is the smallest ideal containing the set $S$, and $(f)$ denotes the principal ideal generated by a single element $f$.

[F13] [[thm-generated-ideal-description-in-a-commutative-ring]]: in a commutative ring an ideal generated by a set consists of finite sums of ring multiples of its generators; in particular the elements of $(f)$ are exactly the multiples $gf$.

[F14] [[def-algebraically-closed-field]]: a field $F$ is algebraically closed when every nonconstant polynomial $p\in F[X]$ has a root in $F$.

[F15] [[def-ring-characteristic]]: the characteristic of a ring $R$ is the least positive $n$ with $n\cdot1_R=0$ if such an $n$ exists, and $0$ otherwise; so in characteristic $0$ one has $n\cdot1\ne0$ for every $n\ge1$.

[F16] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring with $1\ne0$, an integral domain and a division ring, so every nonzero element of a field is invertible.

[F17] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: if $R$ is an integral domain then $R[x_1,\ldots,x_n]$ is an integral domain for every finite $n$.

[F18] [[cor-units-in-a-polynomial-ring-over-a-domain]]: for an integral domain $R$, a polynomial in $R[x]$ is a unit exactly when it is a constant polynomial whose constant value is a unit of $R$.

[F19] [[thm-binomial-theorem-over-a-commutative-ring]]: in a commutative ring, $(u+v)^n=\sum_{k=0}^n\binom nku^kv^{n-k}$ for every $n\in\mathbb N$, the natural-number coefficients acting by repeated addition.

[F20] [[thm-monic-polynomial-division]]: for a monic $g\in R[x]$ and any $f\in R[x]$ there are unique $q,r\in R[x]$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$.




## Verification

**Proof technique:** direct.

1.1 The field $k$ is a commutative ring and an integral domain by [F16], so $k[x]$ and then $P=k[x,y]=k[x][y]$ are integral domains by [F17]; the five displayed polynomials are elements of $P$ by [F1, F2], each generates the principal ideal $I_i=(f_i)$ of [F12], and each quotient $A_i=P/I_i$ defines the closed subscheme $X_i=\operatorname{Spec}A_i$ of $\mathbb A^2_k$. [given, F1, F2, F12, F16, F17]

1.2 Homogeneous decomposition of the first three equations: by the unique monomial expansion [F2] and the notion of homogeneous part [F3] one has $f_1=y^2+(-3x^2y-2y^3)+(2x^4+y^4)$, $f_2=-y^2+(-2x^2y-xy^2)+(x^4+x^2y^2)$ and $f_3=(3x^2y-y^3)+(x^4+2x^2y^2+y^4)$, the last expansion using the binomial theorem for $(x^2+y^2)^2$ by [F19]; hence the lowest nonzero homogeneous parts are $y^2$, $-y^2$ and $3x^2y-y^3=y(3x^2-y^2)$, and none of $f_1,f_2,f_3$ has a term of degree $0$ or $1$. [given, F2, F3, F19, algebra]

1.3 Homogeneous decomposition of the remaining two equations: $f_4=(x^6+3x^4y^2+3x^2y^4+y^6)+(-4x^2y^2)$ and $f_5=x^6+(-x^2y^3-y^5)$ by [F2, F3] with $(x^2+y^2)^3$ expanded by the binomial theorem [F19], so the lowest nonzero homogeneous parts are $-4x^2y^2$ and $-y^3(x^2+y^2)=-x^2y^3-y^5$, and $f_4$ has no term of degree at most $3$ while $f_5$ has no term of degree at most $4$. [given, F2, F3, F19, algebra]

2.1 The origin is a $k$-rational point of every $X_i$: evaluation $\varepsilon$ at $(0,0)$ has the maximal kernel $(x,y)$ by [F9], each $f_i$ has zero constant term by steps 1.2 and 1.3 so $f_i\in(x,y)=\ker\varepsilon$, hence [F10] factors $\varepsilon$ through a $k$-algebra homomorphism $A_i\to k$, which [F11] exhibits as a $k$-rational point of $X_i$, namely the origin $0$. [step 1.2, step 1.3, F9, F10, F11]

2.2 The multiplicities of the five equations at the origin are $2,2,3,4,5$: at $a=0$ the translated expansion $f_i(0+t)=f_i(t)$ is exactly the homogeneous decomposition of steps 1.2 and 1.3, so the least $j$ with $f_{i,j}\ne0$ is $2,2,3,4,5$ for $i=1,\ldots,5$ by [F4], equivalently the $\mathfrak m$-adic orders of the $f_i$ in the local ring of $\mathbb A^2_k$ at the origin. [step 1.2, step 1.3, F4, algebra]

2.3 Factorization of the five lowest nonzero homogeneous parts over $k$: by [F14] the nonconstant polynomials $X^2-3$ and $X^2+1$ in $k[X]$ have roots $\sqrt3$ and $i$ in $k$ with $(\sqrt3)^2=3$ and $i^2=-1$; characteristic $0$ gives $2\cdot1\ne0$, $3\cdot1\ne0$ and $4\cdot1\ne0$ by [F15], so $3\ne0$, $2\ne0$ and $-1\ne0$, and since $k$ is a field [F16] the elements $\sqrt3$ and $i$ are nonzero, because $3=(\sqrt3)^2$ and $-1=i^2$ would otherwise vanish; consequently $3x^2y-y^3=y(\sqrt3x-y)(\sqrt3x+y)$ and $x^2+y^2=(x+iy)(x-iy)$, while $x^2y^2=x\cdot x\cdot y\cdot y$ and $y^3(x^2+y^2)=y\cdot y\cdot y\cdot(x+iy)(x-iy)$ are immediate from commutativity. [step 1.2, step 1.3, F14, F15, F16, algebra]

2.4 The first two curves are genuinely different: if the ideals agreed, $(f_1)=(f_2)$, then $f_1\in(f_2)$ and $f_2\in(f_1)$, so by [F13] there are $h,g\in k[x,y]$ with $f_1=hf_2$ and $f_2=gf_1$; substituting gives $(1-hg)f_1=0$, and since $f_1\ne0$ by step 1.2 and $k[x,y]$ is a domain by [F17] we get $hg=1$, so $h$ is a unit of $k[x,y]$; two applications of [F18], first with the domain $R=k[x]$ (a domain by [F17]) and then with the field $R=k$, show that each unit of $k[x,y]$ is a nonzero constant $c\in k^\times$, and comparing the coefficient of $x^2y^2$ in $f_1=cf_2$ by the unique expansion [F2] gives $0=c$ on the left against $c\ne0$ on the right, a contradiction; hence $(f_1)\ne(f_2)$ and $X_1\ne X_2$ as closed subschemes of $\mathbb A^2_k$. [step 1.2, F2, F13, F16, F17, F18, algebra]

3.1 The tangent cones: each $f_i$ lies in $\mathfrak q=(x,y)$ because its value at the origin is zero, and $I_i=(f_i)$ is principal, so the principal case of [F5] gives $\operatorname{in}_{\mathfrak q}(I_i)=(f_{i,\min})$ and [F5, F6] identify the scheme-theoretic tangent cone as $\operatorname{Cone}_0(X_i)\cong\operatorname{Spec}\bigl(P/(f_{i,\min})\bigr)$; explicitly these are $P/(y^2)$ for $i=1$; $P/(y^2)$ for $i=2$, because the scalars $\pm1$ are nonzero and invertible in $k$ by [F15, F16] so $(-y^2)=(y^2)$ by [F13]; $P/(y(3x^2-y^2))$ for $i=3$, because $3x^2y-y^3=y(3x^2-y^2)$; $P/(x^2y^2)$ for $i=4$, because $-4$ is nonzero in characteristic $0$ by [F15] and invertible in $k$ by [F16], so $(-4x^2y^2)=(x^2y^2)$; and $P/(y^3(x^2+y^2))$ for $i=5$, because $-x^2y^3-y^5=-y^3(x^2+y^2)$. [step 1.2, step 1.3, step 2.1, F5, F6, F13, F15, F16, algebra]

3.2 All five tangent spaces are two-dimensional: none of the $f_i$ has a linear term by steps 1.2 and 1.3, so each formal partial derivative of [F7] has zero constant term and the $1\times2$ Jacobian matrix at the origin is the zero matrix $(0,0)$; the kernel of the zero map $k^2\to k$ is $k^2$, so [F8] gives canonical $k$-linear isomorphisms $T_0X_i\cong\ker(0:k^2\to k)=k^2$ of dimension $2$, for all five curves at once. [step 1.2, step 1.3, step 2.1, F7, F8, algebra]

4.1 The cone of the first two curves is a doubled line, retained nonreduced: in $R=k[x,y]/(y^2)$ the class $\bar y$ satisfies $\bar y^2=0$, and $\bar y\ne0$, since if $y\in(y^2)$ then [F13] would give $y=y^2h$ for some $h\in k[x,y]$, whereas division by the monic polynomial $y^2\in k[x][y]$ [F20] writes every $g\in k[x,y]$ uniquely as $g=qy^2+(a+by)$ with $a,b\in k[x]$, so the classes of $1$ and $\bar y$ form a $k[x]$-basis of $R$ and in particular $\bar y\ne0$; hence the cone $\operatorname{Spec}R$ is the line $y=0$, the $x$-axis of $\mathbb A^2_k$, with a first-order thickening, that is, the doubled line, and no reduction is performed in the cone computation. [step 3.1, F13, F20, algebra]

4.2 The distinct linear factors in each product are pairwise non-proportional; repeated factors record the stated line multiplicities. If $ay=b(\sqrt3x-y)$ then comparing coefficients by [F2] gives $b\sqrt3=0$ and then $a=0$, so $a=b=0$ because $\sqrt3\ne0$ and $k[x,y]$ is a domain by [F17]; if $a(\sqrt3x-y)=b(\sqrt3x+y)$ then $\sqrt3(a-b)=0$ and $a+b=0$, so $a=b=0$ because $2\ne0$ and $k$ is a field [F16]; the same coefficient comparisons using $i\ne0$ and $2i\ne0$ show that $y$, $x+iy$ and $x-iy$ are pairwise non-proportional, and $x$ and $y$ are non-proportional since $ay=bx$ forces $a=b=0$; hence the cone of $X_1$ and $X_2$ is the line $y=0$ occurring with multiplicity two, the cone of $X_3$ consists of the three distinct lines cut out by $y$, $\sqrt3x-y$ and $\sqrt3x+y$, each occurring once, the cone of $X_4$ is the product of the two coordinate axes each occurring twice, and the cone of $X_5$ is the line $y=0$ occurring three times together with the two distinct further lines cut out by $x+iy$ and $x-iy$. [step 3.1, step 2.3, F2, F15, F16, F17, algebra]

5.1 Conclusion: the five singular plane curves have the tangent spaces $T_0X_i\cong k^2$ by step 3.2 and the multiplicities $2,2,3,4,5$ by step 2.2, with the tangents of the third, fourth and fifth visualized as three distinct lines, the two coordinate axes each doubled, and a triple line with two further lines by steps 2.3 and 4.2; the curves $X_1$ and $X_2$ are different closed subschemes by step 2.4, yet their multiplicity $2$, their tangent cone $\operatorname{Spec}(k[x,y]/(y^2))$ and their tangent space $k^2$ all agree, so two different equation singularities, distinguished by the source as a tacnode and a ramphoid cusp, share one tangent cone. [step 2.2, step 3.1, step 3.2, step 2.3, step 4.2, step 2.4]

6.1 Boundary and scope dispositions: every curve and cone is nonempty, the origin being a $k$-rational point of each $X_i$ by step 2.1; the zero cases are the zero Jacobian matrix $(0,0)$ of step 3.2 with kernel all of $k^2$ and the nilpotent $\bar y$ with $\bar y^2=0$ and $\bar y\ne0$ of step 4.1; each curve has one defining equation, one Jacobian row and one cone equation by steps 1.1, 3.1 and 3.2; the degenerate case is the nonreduced cone $k[x,y]/(y^2)$, retained with its nilpotent and reduced nowhere in steps 3.1, 4.1 and 4.2; the endpoint of the degree filtration is the lowest nonzero homogeneous part, which exists because each $f_i$ is a nonzero polynomial with a finite expansion by steps 1.2 and 1.3 and is attained at degrees $2,2,3,4,5$ by step 2.2, and the extremal lines $y=0$ and the conjugate pair $x\pm iy=0$ are treated in steps 2.3 and 4.2; no choice principle is used, since $\sqrt3$ and $i$ are single roots supplied by algebraic closedness in step 2.3, every ideal, cone, Jacobian and factorization is exhibited explicitly, and all cited suppliers are choice-free; no biconditional is asserted or needed, the only two-sided statement used being the characterization of units in step 2.4, whose forward direction is applied to the unit $h$ and never in reverse, so both iff cases are vacuous. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 3.2, step 2.3, step 4.2, algebra] ∎




## Source qualification

The source is Milne, *Algebraic Geometry* v6.10, Examples 4.13–4.17 (printed pp. 84–85), a block adapted from Walker 1950 under the standing assumption "We assume that the characteristic of $k$ is 0" and the book-wide convention that $k$ is algebraically closed. The source's Example 4.13 ($2X^4-3X^2Y+Y^2-2Y^3+Y^4$) calls the origin a tacnode with tangent cone defined by $Y^2$; Example 4.14 ($X^4+X^2Y^2-2X^2Y-XY^2-Y^2$) calls it a ramphoid cusp with the same tangent cone $Y^2$; Example 4.15 ($(X^2+Y^2)^2+3X^2Y-Y^3$) is an ordinary triple point with tangent cone $3X^2Y-Y^3$, which the source also writes as the triple of lines $Y=0$, $Y=\pm\sqrt3X$; Example 4.16 ($(X^2+Y^2)^3-4X^2Y^2$) has multiplicity $4$ and tangent cone $4X^2Y^2$, the union of the $X$ and $Y$ axes each doubled; and Example 4.17 ($X^6-X^2Y^3-Y^5$) has tangent cone $X^2Y^3+Y^5$, consisting of the triple line $Y^3=0$ together with the pair of lines $Y=\pm iX$.

This item verifies, from the library's own suppliers, the displayed leading forms, the five multiplicities, the four cone generators, the factorization of those generators into the linear forms above, the non-proportionality of the factors and the vanishing of the five Jacobians at the origin; it also proves that Example 4.13 and Example 4.14 define different closed subschemes while sharing multiplicity, tangent cone and tangent space. It does not re-derive the source's classification of the first two singularities as a tacnode and a ramphoid cusp: those names describe the analytic branching behaviour of the two curves, finer invariants that this computation does not touch, in accordance with the scaffolded strategy. The hypotheses "algebraically closed" and "characteristic $0$" are used exactly where the factorization into linear forms $\sqrt3x\pm y$ and $x\pm iy$ and the distinction of the factors require them, as steps 2.3 and 4.2 record.
