---
id: cex-nonradical-ideal-can-have-the-same-tangent-space
kind: counterexample
title: "A nonradical ideal need not enlarge every tangent space"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-generated-and-principal-ideals
  - def-jacobian-matrix-affine-algebraic-set
  - def-left-right-and-two-sided-ideal
  - def-localisation-at-a-prime-ideal
  - def-multiplicative-subset-and-localisation
  - def-multivariate-polynomial-ring-by-iteration
  - def-polynomial-ring-over-a-commutative-ring
  - def-radical-of-an-ideal
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - lem-evaluation-ideal-is-maximal
  - lem-field-is-a-commutative-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-localisation-commutes-with-quotients
  - thm-monic-polynomial-division
  - thm-quotient-ring-universal-property
  - thm-stalk-structure-sheaf-prime-localization
  - thm-universal-property-of-a-polynomial-ring
  - thm-zariski-tangent-space-jacobian-kernel
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-9 (printed p.99) and its solution (printed p.223)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim (a nonradical ideal enlarges every tangent space): let $k$ be a
field, let $I\subseteq k[x,y]$ be an ideal with $I\subsetneq\sqrt I$, and put
$X=\operatorname{Spec}(k[x,y]/I)$ and $Y=\operatorname{Spec}(k[x,y]/\sqrt I)$.
Then at every $k$-rational point $a$ of $X$ the tangent space $T_aX$ is
strictly larger than $T_aY$, both being viewed as subspaces of
$T_a\mathbb A^2_k=k^2$ through the coordinate-velocity maps of the
Jacobian-kernel theorem.

Refutation. Let $k$ be any field and let
$$ I=(x^2,xy)\subseteq k[x,y]=k[x][y],\qquad \sqrt I=(x)=J. $$
Then $I\subsetneq J$: the element $x$ lies in $J$ but not in $I$. The points
$(0,1)$ and $(0,0)$ are $k$-rational points of $X$ and of the reduced line
$Y=\operatorname{Spec}(k[x,y]/(x))$, and at $(0,1)$ the two Jacobian matrices
have the same kernel $k\cdot(0,1)\subseteq k^2$, so
$$ T_{(0,1)}X\cong k\cdot(0,1)\cong T_{(0,1)}Y $$
are the same one-dimensional tangent space: the nonradical ideal does not
enlarge the tangent space there. The reason is that $y$ is a unit in the local
ring at $(0,1)$, so $I$ and $(x)$ agree after localisation at that point, and
the tangent space depends only on the local ring. At the origin, by contrast,
the tangent space of $X$ is all of $k^2$, of dimension two, while the reduced
line has the one-dimensional tangent space $k\cdot(0,1)$; so the naive tangent
space is strictly larger there. The witness works over an arbitrary field and
in every characteristic, retains the nilpotents of $k[x,y]/I$, performs no
reduction, and uses no Axiom of Choice.

## Facts & Assumptions

**Given:** A field $k$, the ring $R=k[x,y]=k[x][y]$, the ideals $I=(x^2,xy)$ and $J=(x)$ of $R$, and the closed subschemes $X=\operatorname{Spec}(R/I)$ and $Y=\operatorname{Spec}(R/J)$.

[F1] [[def-multivariate-polynomial-ring-by-iteration]]: the iterated polynomial ring is defined by $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$, so $k[x,y]=k[x][y]$ and each coefficient ring embeds as the constants.

[F2] [[def-polynomial-ring-over-a-commutative-ring]]: the polynomial ring $A[y]$ is the set of finitely supported coefficient functions, written $\sum_j a_jy^j$ with $a_j\in A$; the coefficient sequence is the element, so coefficients are unique and a polynomial is zero exactly when all its coefficients are zero.

[F3] [[def-left-right-and-two-sided-ideal]]: a two-sided ideal of a ring is an additive subgroup closed under multiplication by ring elements on both sides, and in a commutative ring the left, right and two-sided notions agree.

[F4] [[def-generated-and-principal-ideals]]: for $S\subseteq R$ the ideal $(S)$ is the intersection of all two-sided ideals containing $S$, hence an ideal containing $S$ and contained in every ideal containing $S$; for $a\in R$ one writes $(a)$ for $(\{a\})$ and calls it principal.

[F5] [[def-radical-of-an-ideal]]: the radical of an ideal $I$ is $\sqrt I=\{x\in R:x^n\in I\text{ for some integer }n\ge1\}$, and $I$ is radical when $I=\sqrt I$.

[F6] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: if $R$ is an integral domain then $R[x_1,\ldots,x_n]$ is an integral domain for every $n$, including $n=0$.

[F7] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring with $1\ne0$ and is an integral domain.

[F8] [[thm-universal-property-of-a-polynomial-ring]]: for commutative rings $R,S$, a unital ring homomorphism $\varphi:R\to S$ and an element $s\in S$ there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ and sending $x$ to $s$, given by the evaluation formula.

[F9] [[thm-monic-polynomial-division]]: for a monic polynomial $g\in R[x]$ and any $f\in R[x]$ there are unique $q,r$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$.

[F10] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains an ideal $I$ factors uniquely through the quotient $R/I$.

[F11] [[lem-evaluation-ideal-is-maximal]]: for a field $k$ and $a\in k^n$ the evaluation map $k[x_1,\ldots,x_n]\to k$ has kernel $(x_1-a_1,\ldots,x_n-a_n)$, which is a maximal ideal.

[F12] [[thm-affine-scheme-ring-anti-equivalence]]: $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$, so $k$-algebra homomorphisms $A\to k$ are exactly the $k$-rational points of $\operatorname{Spec}A$.

[F13] [[def-jacobian-matrix-affine-algebraic-set]]: for an ideal with a finite generating list $f_1,\ldots,f_r$ and a point $a$ with $f(a)=0$ for all $f\in I$, the equation-row Jacobian matrix is $J_{(f_1,\ldots,f_r)}(a)=(\partial f_i/\partial t_j(a))$, the formal monomial derivatives reading integer coefficients in $k$ and using the actual scheme ideal.

[F14] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J_{(f_1,\ldots,f_r)}(a)$.

[F15] [[def-zariski-cotangent-space-point]]: the intrinsic cotangent space is $C_xX=\mathfrak m_x/\mathfrak m_x^2$ for the maximal ideal of the local ring $\mathcal O_{X,x}$, a vector space over the residue field.

[F16] [[def-zariski-tangent-space-point]]: the intrinsic tangent space is $T_xX=\operatorname{Hom}_{\kappa(x)}(C_xX,\kappa(x))$, so it is computed from the local ring $\mathcal O_{X,x}$ and its maximal ideal alone.

[F17] [[def-localisation-at-a-prime-ideal]]: for a prime ideal $\mathfrak p$ the localisation $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ consists of fractions $r/s$ with $s\notin\mathfrak p$.

[F18] [[def-multiplicative-subset-and-localisation]]: for a multiplicative subset $S$ the localisation map $\lambda_S:R\to S^{-1}R$ sends every $s\in S$ to a unit.

[F19] [[thm-localisation-commutes-with-quotients]]: for an ideal $I$, a multiplicative subset $S$ and its image $\bar S$ in $R/I$ there is a canonical isomorphism $(S^{-1}R)/(S^{-1}I)\cong\bar S^{-1}(R/I)$.

[F20] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

## Counterexample

**Proof technique:** direct.

1.1 The ring $R=k[x,y]=k[x][y]$ is a commutative ring and an integral domain in which $1\ne0$, every element of $R$ has a unique expression as a finite sum $f=\sum_j a_j(x)y^j$ with coefficients $a_j\in k[x]$, and for every commutative ring $S$, every unital ring homomorphism $\varphi:k\to S$ and every pair $s_1,s_2\in S$ there is a unique unital ring homomorphism $R\to S$ extending $\varphi$ with $x\mapsto s_1$ and $y\mapsto s_2$. [given, F1, F2, F6, F7, F8]

1.2 The ideals $I=(x^2,xy)$ and $J=(x)$ of $R$ satisfy $I\subseteq J$ with $x^2,xy\in I$ and $x\in J$; every element of $I$ is a finite sum $ax^2+bxy$ and every element of $J$ is a multiple $xh$ with $a,b,h\in R$, and every ideal of $R$ is an additive subgroup closed under multiplication by elements of $R$. [given, F3, F4, algebra]

1.3 The universal property gives unique unital ring homomorphisms $\mathrm{ev}_{(0,1)},\mathrm{ev}_{(0,0)},\mathrm{ev}_{(1,0)}:R\to k$ with values $x\mapsto0$, $y\mapsto1$; $x\mapsto0$, $y\mapsto0$; $x\mapsto1$, $y\mapsto0$, and a unique homomorphism $\mathrm{ev}:R\to k[y]$ with $x\mapsto0$ and $y\mapsto y$; the restriction of $\mathrm{ev}$ to $k[x]$ is the unique homomorphism $k[x]\to k$ with $x\mapsto0$, so $\mathrm{ev}(f)=\sum_j a_j(0)y^j$ for $f=\sum_j a_j(x)y^j$, where $a_j(0)$ denotes the image of $a_j$ under that map; since $\mathrm{ev}_{(1,0)}(x)=1\ne0$ and the unique homomorphism $k[y]\to k$ with $y\mapsto1$ sends $y$ to $1\ne0$, both $x\ne0$ in $R$ and $y\ne0$ in $k[y]$. [given, F1, F2, F7, F8]

2.1 Each of $\mathrm{ev}_{(0,1)}$, $\mathrm{ev}_{(0,0)}$ and $\mathrm{ev}$ sends $x$ to $0$ and hence kills $x^2$ and $xy$; their kernels are additive subgroups closed under multiplication by ring elements, hence ideals, so these kernels contain the generators $x^2,xy$ and therefore contain $I=(x^2,xy)$, and they contain $x$ and therefore contain $J=(x)$; in particular $I\subseteq\ker\mathrm{ev}$. [step 1.3, F3, F4, algebra]

2.2 The inclusion $I\subsetneq J$ is strict: $x\in J$ by step 1.2 and $x\notin I$, since $x\in I$ would give $x=ax^2+bxy=x(ax+by)$ for some $a,b\in R$, whence $x(1-ax-by)=0$; $R$ is an integral domain with $x\ne0$ by steps 1.1 and 1.3, so $ax+by=1$, and applying $\mathrm{ev}_{(0,0)}$ gives $0=1$ in $k$, contradicting $1\ne0$. [step 1.1, step 1.2, step 1.3, F6, F7, F8, algebra]

3.1 The kernel of $\mathrm{ev}$ is $J=(x)$: if $f=\sum_j a_j(x)y^j$ lies in the kernel, then $\sum_j a_j(0)y^j=0$ in $k[y]$ by step 1.3, so every coefficient $a_j(0)$ is zero; dividing $a_j$ by the monic polynomial $x$ gives $a_j=q_jx+r_j$ with $r_j$ a constant, and applying the homomorphism $k[x]\to k$ with $x\mapsto0$ gives $r_j=a_j(0)=0$, so $a_j=q_jx\in(x)$ and $f=x\sum_jq_jy^j\in(x)$; the reverse inclusion is step 2.1. [step 1.3, step 2.1, F2, F4, F8, F9, algebra]

3.2 The points $(0,1)$ and $(0,0)$: by step 2.1 the homomorphisms $\mathrm{ev}_{(0,1)}$ and $\mathrm{ev}_{(0,0)}$ kill $I$ and $J$, so by the quotient universal property they induce $k$-algebra homomorphisms $R/I\to k$ and $R/J\to k$; under the affine anti-equivalence these are $k$-rational points of $X=\operatorname{Spec}(R/I)$ and of $Y=\operatorname{Spec}(R/J)$ with coordinate tuples $(0,1)$ and $(0,0)$, so the Jacobian-kernel theorem applies to both schemes at both points; also $I$ and $J$ are proper, because $I\subseteq\ker\mathrm{ev}_{(0,1)}=(x,y-1)$ and $J\subseteq(x,y-1)$ with $(x,y-1)$ maximal by the evaluation-ideal lemma. [step 2.1, F10, F11, F12, F14, given]

4.1 The radical of $I$ is $\sqrt I=J=(x)$: if $f\in\sqrt I$ then $f^n\in I$ for some $n\ge1$ by the definition of the radical, and $I\subseteq\ker\mathrm{ev}$ by step 2.1, so $\mathrm{ev}(f)^n=\mathrm{ev}(f^n)=0$ in the integral domain $k[y]$ and hence $\mathrm{ev}(f)=0$, which by step 3.1 gives $f\in(x)=J$; conversely $x^2\in I$ by step 1.2 gives $x\in\sqrt I$, and each $f=xh\in J$ has $f^2=x^2h^2\in I$ because $I$ is an ideal containing $x^2$, so $f\in\sqrt I$ and $J\subseteq\sqrt I$. [step 1.2, step 2.1, step 3.1, F4, F5, F6, algebra]

4.2 The Jacobian matrix of the two equations $x^2,xy$ has rows $(\partial_xx^2,\partial_yx^2)=(2x,0)$ and $(\partial_xxy,\partial_yxy)=(y,x)$; at the point $(0,1)$ these rows are $(0,0)$ and $(1,0)$, whose common kernel is $\{v:v_1=0\}=k\cdot(0,1)$, of dimension one, while at the origin both rows are zero and the kernel is all of $k^2$, of dimension two; since $(0,1)$ and $(0,0)$ are $k$-rational points of $X$ by step 3.2, the coordinate-velocity isomorphism of the Jacobian-kernel theorem gives $T_{(0,1)}X\cong k\cdot(0,1)$ and $T_{(0,0)}X\cong k^2$. [step 3.2, F13, F14, algebra]

4.3 The Jacobian matrix of the single equation $x$ is the row $(\partial_xx,\partial_yx)=(1,0)$, the same at $(0,1)$ and at $(0,0)$, with kernel $\{v:v_1=0\}=k\cdot(0,1)$, of dimension one; the Jacobian-kernel theorem, applicable by step 3.2, gives $T_{(0,1)}Y\cong k\cdot(0,1)\cong T_{(0,0)}Y$ for $Y=\operatorname{Spec}(R/J)$. [step 3.2, F13, F14, algebra]

5.1 Comparison of the two computations: at $(0,1)$ the two Jacobian kernels are the same subspace $k\cdot(0,1)$ of $k^2$, so under the coordinate-velocity identifications the tangent spaces $T_{(0,1)}X$ and $T_{(0,1)}Y$ coincide as one-dimensional spaces, and the nonradical ideal $I$ does not enlarge the tangent space there; at the origin the kernel $k^2$ of the Jacobian of $I$ strictly contains the kernel $k\cdot(0,1)$ of the Jacobian of $J$, so $T_{(0,0)}X=k^2$ is two-dimensional and strictly larger than the one-dimensional $T_{(0,0)}Y=k\cdot(0,1)$. [step 4.2, step 4.3]

5.2 Local reason for the coincidence: the point $(0,1)$ is the closed point $\mathfrak m/I$ of $X$ with $\mathfrak m=(x,y-1)=\ker\mathrm{ev}_{(0,1)}$, and $y\notin\mathfrak m$, since otherwise $1=y-(y-1)\in\mathfrak m$ against properness; hence $y$ is inverted in $R_{\mathfrak m}$ and is a unit of $R_{\mathfrak m}$, so $IR_{\mathfrak m}=JR_{\mathfrak m}$: the inclusion $IR_{\mathfrak m}\subseteq JR_{\mathfrak m}$ follows from $I\subseteq J$ in step 1.2, while $x=y^{-1}(xy)\in IR_{\mathfrak m}$ with $xy\in I$ gives $(x)R_{\mathfrak m}\subseteq IR_{\mathfrak m}$; the local rings of the two closed subschemes at the corresponding closed points are $\mathcal O_{X,x}\cong(R/I)_{\mathfrak m/I}\cong R_{\mathfrak m}/IR_{\mathfrak m}=R_{\mathfrak m}/JR_{\mathfrak m}\cong(R/J)_{\mathfrak m/J}\cong\mathcal O_{Y,x}$ by the affine stalk identification and the localisation-quotient isomorphism, and since the cotangent space and the tangent space at a point are computed from its local ring alone, this is why the tangent spaces at $(0,1)$ coincide, while at the origin the distinct tangent dimensions of steps 4.2 and 4.3 show that the local rings there are not isomorphic. [step 1.2, step 4.2, step 4.3, F4, F11, F15, F16, F17, F18, F19, F20, algebra]

6.1 Conclusion: by steps 2.2 and 4.1 the ideal $I=(x^2,xy)$ is strictly smaller than its radical $\sqrt I=(x)=J$, so $Y=\operatorname{Spec}(R/J)$ is the reduced subscheme $\operatorname{Spec}(R/\sqrt I)$ of $X=\operatorname{Spec}(R/I)$; over an arbitrary field $k$, at the $k$-rational point $(0,1)$ the tangent spaces of $X$ and $Y$ coincide with the common line $k\cdot(0,1)$ of dimension one, while at the origin $T_{(0,0)}X=k^2$ strictly contains $T_{(0,0)}Y=k\cdot(0,1)$; hence a nonradical ideal does not always enlarge the tangent space, and the false claim stated above is refuted by this single ideal; the computation is valid in every characteristic, the integer coefficients of the formal derivatives being read in $k$ and $1\ne0$ in $k$, and no reduction of $I$ is performed. [step 2.2, step 4.1, step 5.1, step 5.2, F5, F7, F13, given]

7.1 Boundary and scope dispositions: $X$ and $Y$ are nonempty, since $(0,1)$ and $(0,0)$ are $k$-rational points of both by step 3.2; the zero case appears at the origin, where the Jacobian rows of $I$ vanish identically and the kernel is all of $k^2$ by step 4.2, the zero velocity lying in every kernel as a subspace; $J$ is generated by the single element $x$ with the one-dimensional tangent spaces of step 4.3, while $I$ needs the two generators $x^2,xy$; the example is itself the degenerate case of a nonradical ideal, $I\subsetneq\sqrt I$ by steps 2.2 and 4.1, with all nilpotents of $R/I$ retained and no reduction performed, the equality at $(0,1)$ in step 5.1 showing that the nilpotent direction is invisible there; the points $(0,1)$ and $(0,0)$ are the two extreme cases $x=0,y=1$ and $x=y=0$ of the reduced line $x=0$, and characteristic $2$ is included because the entry $2x$ of the Jacobian is evaluated at $x=0$, where it vanishes by the formal monomial rule in every characteristic; no Axiom of Choice or dependent choice is used, all objects being exhibited explicitly from the single field $k$. [step 2.2, step 3.2, step 4.1, step 4.2, step 4.3, step 5.1, F13, algebra] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, Exercise 4-9 (printed p.99) asks whether,
for $V=V(\mathfrak a)$ with $\mathfrak a\ne I(V)$ and $T'_{\mathbf a}$ defined
by the equations $(df)_{\mathbf a}=0$ for $f\in\mathfrak a$, the spaces
$T'_{\mathbf a}$ and $T_{\mathbf a}(V)$ must always be different. The official
solution (printed p.223) answers no: for $\mathfrak a=(X^2Y)$ one has
$V(\mathfrak a)$ equal to the union of the coordinate axes and
$I(V(\mathfrak a))=(XY)$, and at the points $(a,b)$ with $a\ne0$, $b=0$ the two
systems of first-order equations have the same solutions. The witness used
here is the ideal $(x^2,xy)=x\cdot(x,y)$ promised by the scaffold, whose radical
is $(x)$; the coincidence now occurs at the points $(0,b)$ with $b\ne0$ of the
reduced line, where $y$ is a unit of the local ring and $(x^2,xy)$ localises to
$(x)$, while at the origin the two tangent spaces differ. Both examples give
the same answer to the question. The source states the phenomenon and its
official solution; the ideal, the two Jacobian computations, the localisation
argument and the conclusion are proved here from the library's own suppliers,
using the Jacobian-kernel theorem as the scheme-theoretic form of the classical
comparison $T'\supset T$. The source works over an algebraically closed field;
the item imposes no such hypothesis and works over an arbitrary field and in
every characteristic.
