---
id: ex-node-two-tangent-directions
kind: example
title: "A node has two distinct tangent directions"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
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
  - thm-quotient-ring-universal-property
  - thm-zariski-tangent-space-jacobian-kernel
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Example 4.4 (printed p. 82) and Example 4.10 (printed p. 84)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Let $k$ be a field with $\operatorname{char}k\ne2$, and let
$$ C=\operatorname{Spec}\bigl(k[x,y]/(y^2-x^3-x^2)\bigr)\subseteq\mathbb A^2_k $$
be the nodal plane cubic defined by $y^2=x^2+x^3$, with origin $0=(0,0)$.
Then:

- the tangent space at the origin is $T_0C\cong k^2$;
- the multiplicity of the equation $y^2-x^3-x^2$ at the origin is $2$, with
  lowest nonzero homogeneous part $y^2-x^2$;
- the scheme-theoretic tangent cone is
  $\operatorname{Cone}_0(C)\cong\operatorname{Spec}(k[x,y]/(y^2-x^2))$;
- the leading form factors as $y^2-x^2=(y-x)(y+x)$, and the two linear
  factors are non-proportional because $\operatorname{char}k\ne2$; the cone
  presents the two distinct lines $y=x$ and $y=-x$ through the origin, the
  two distinct tangent directions of the node, each occurring with
  multiplicity one in the leading form.

No reduction is performed in computing the cone: the quotient is taken by the
actual ideal, and the two linear factors of the degree-two leading form are
exhibited explicitly.

## Facts & Assumptions

**Given:** A field $k$ with characteristic not $2$, the polynomial ring
$k[x,y]=k[x][y]$, the polynomial $f=y^2-x^3-x^2$, the principal ideal $I=(f)$,
the quotient ring $A=k[x,y]/(f)$, the plane cubic
$C=\operatorname{Spec}A\subseteq\mathbb A^2_k$, and its origin $0=(0,0)$.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $k[x]$ is the set of
finitely supported coefficient functions $\mathbb N\to k$ with $(a+b)_n=a_n+b_n$
and $(ab)_n=\sum_{i+j=n}a_ib_j$, and the commutative-ring axioms hold, so
products of polynomials expand by distributivity.

[F2] [[def-monomials-multidegree-and-total-degree]]: every polynomial in the
iterated ring $k[x,y]=k[x][y]$ has a unique finite expansion
$\sum c_{\mathbf t}x^{\mathbf t}$ over finitely many multi-indices, with each
monomial having a total degree, and a scalar is the coefficient of a monomial
in exactly this expansion.

[F3] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is
homogeneous of degree $d$ when each occurring monomial has total degree $d$,
and $0$ is homogeneous in every degree.

[F4] [[def-multiplicity-hypersurface-point]]: for $0\ne f$ with $f(a)=0$,
writing $f(a+t)=\sum_{j\ge0}f_j(t)$ as its homogeneous decomposition, the
multiplicity $\operatorname{mult}_a(f)$ is the least $j$ with $f_j\ne0$.

[F5] [[lem-tangent-cone-initial-ideal-presentation]]: for
$I\subseteq\mathfrak q=(t_1,\ldots,t_n)$ in $P=k[t_1,\ldots,t_n]$, the
spectrum $\operatorname{Spec}(P/\operatorname{in}_{\mathfrak q}(I))$ is the
tangent cone at the rational origin, and for a principal ideal $I=(f)$ with
$f\ne0$ one has $\operatorname{in}_{\mathfrak q}(I)=(f_{\min})$.

[F6] [[def-tangent-cone-point]]: the scheme-theoretic tangent cone of a
locally Noetherian scheme at a point is
$\operatorname{Spec}(\operatorname{gr}_{\mathfrak m_x}\mathcal O_{X,x})$, the
full associated graded ring being used without quotienting by its nilpotents.

[F7] [[def-jacobian-matrix-affine-algebraic-set]]: for an ideal with a
specified finite generating list and a point $a$ satisfying $f(a)=0$ for all
$f\in I$, the Jacobian matrix at $a$ has rows
$(\partial f_i/\partial t_j(a))$, with formal monomial derivatives whose
integer coefficients are read in $k$, and it uses the actual scheme ideal.

[F8] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal
$I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational
point $a\in X(k)$ and any finite generating list of $I$, the
coordinate-velocity map gives a canonical $k$-linear isomorphism
$T_aX\cong\ker J(a)$.

[F9] [[lem-evaluation-ideal-is-maximal]]: for $a\in k^n$ the evaluation map
$k[x_1,\ldots,x_n]\to k$ has kernel $(x_1-a_1,\ldots,x_n-a_n)$, which is a
maximal ideal.

[F10] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose
kernel contains a two-sided ideal factors uniquely through the quotient ring.

[F11] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$
correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$,
so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of
$\operatorname{Spec}A$.

[F12] [[def-generated-and-principal-ideals]]: $(S)$ is the intersection of all
two-sided ideals containing $S$, and $(a)$ denotes the principal ideal
generated by $a$.

[F13] [[def-ring-characteristic]]: the characteristic of $R$ is the least
$n\ge1$ with $n\cdot1_R=0_R$, and $0$ when there is none; thus
$\operatorname{char}k\ne2$ says that $2\cdot1_k=1+1$ is not $0_k$, that is,
$1\ne-1$ in $k$.

[F14] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring
with $1\ne0$ and is an integral domain.




## Verification

**Proof technique:** direct.

1.1 The polynomial $f=y^2-x^3-x^2\in k[x,y]$ has the unique monomial expansion $y^2-x^3-x^2$ by [F2], with homogeneous parts $f_2=y^2-x^2$ of degree $2$ and $f_3=-x^3$ of degree $3$ by [F3], and it generates the principal ideal $I=(f)$ by [F12]; the quotient ring $A=k[x,y]/(f)$ defines the closed subscheme $C=\operatorname{Spec}A$ of $\mathbb A^2_k$, and $k[x,y]=k[x][y]$ is a commutative polynomial ring by [F1]. [given, F1, F2, F3, F12]

2.1 The multiplicity of the equation $f$ at the origin is $2$: the coefficient of $y^2$ in $f$ is $1\ne0$ by [F2] and [F14], so $f\ne0$; every monomial of $f$ has total degree at least $2$, so $f$ has no constant term and $f(0)=0$; the translated expansion $f(t_1,t_2)=t_2^2-t_1^3-t_1^2$ is $f_2+f_3$ with $f_2=t_2^2-t_1^2\ne0$ homogeneous of degree $2$ and $f_3=-t_1^3$ homogeneous of degree $3$, and there is no part in degree $0$ or $1$, so the least $j$ with $f_j\ne0$ is $j=2$ and $\operatorname{mult}_0(f)=2$ by [F4]. [step 1.1, F2, F3, F4, F14, algebra]

3.1 The origin is a $k$-rational point of $C$: the evaluation map $\varepsilon:k[x,y]\to k$ at $(0,0)$ has kernel $(x,y)$, which is maximal by [F9]; $f\in(x,y)$ because $f$ has no constant term, so [F10] factors $\varepsilon$ through a $k$-algebra homomorphism $A\to k$, and [F11] exhibits the origin as a $k$-rational point $0=(0,0)$ of $C$. [step 1.1, step 2.1, F9, F10, F11, algebra]

3.2 The scheme-theoretic tangent cone: $f\in\mathfrak q=(x,y)$ and $I=(f)$ with $f\ne0$, so [F5] applies with $P=k[x,y]$ and gives $\operatorname{Cone}_0(C)\cong\operatorname{Spec}(k[x,y]/\operatorname{in}_{\mathfrak q}(I))$ with $\operatorname{in}_{\mathfrak q}(I)=(f_{\min})=(y^2-x^2)$ in the principal case; by [F6] this spectrum is the scheme-theoretic tangent cone, so $\operatorname{Cone}_0(C)\cong\operatorname{Spec}(k[x,y]/(y^2-x^2))$, presented by its actual ideal with no reduction performed. [step 1.1, step 2.1, F5, F6, algebra]

4.1 The tangent space is $k^2$: since $I=(f)$ is generated by the single equation $f=y^2-x^3-x^2$, the Jacobian matrix of the list $(f)$ at the origin is the $1\times2$ matrix $\bigl(-3x^2-2x,\;2y\bigr)$ evaluated at $(0,0)$, namely $(0,0)$, by [F7]; its kernel is all of $k^2$, so [F8] gives a canonical $k$-linear isomorphism $T_0C\cong\ker(0:k^2\to k)=k^2$. Both entries are multiples of $x$ or of $y$ and vanish at the origin in every characteristic, so the computation does not use the nonvanishing of $2$ or $3$. [step 3.1, F7, F8, algebra]

4.2 The two factors: in $k[x,y]$, $(y-x)(y+x)=y^2+yx-xy-x^2=y^2-x^2$ by distributivity and commutativity [F1]; if the two linear forms were proportional, then $y-x=c(y+x)$ for some $c\in k$, and comparing the coefficients of $y$ and of $x$ in the unique expansion [F2] gives $1=c$ and $-1=c$, hence $1=-1$ in $k$; that equality means $1+1=0$, contradicting $\operatorname{char}k\ne2$ by [F13] together with $1\ne0$ by [F14]. Hence $y-x$ and $y+x$ are non-proportional, and the cone $\operatorname{Spec}(k[x,y]/((y-x)(y+x)))$ of step 3.2 presents the two distinct lines $y=x$ and $y=-x$ through the origin, each factor entering once in the degree-two leading form. [step 3.2, F1, F2, F13, F14, algebra]

5.1 Conclusion: at the origin of the nodal plane cubic $C$ defined by $y^2=x^2+x^3$ the multiplicity of the equation is $2$ (step 2.1), the tangent space is $T_0C\cong k^2$ (step 4.1) and the scheme-theoretic tangent cone is $\operatorname{Spec}(k[x,y]/(y^2-x^2))$, the two distinct lines $y=x$ and $y=-x$ (steps 3.2 and 4.2), so the singularity has two distinct tangent directions and its leading form is neither a power of one line nor an irreducible quadratic. [step 2.1, step 4.1, step 3.2, step 4.2]

6.1 Boundary and scope dispositions: $C$ is nonempty because the origin is a $k$-rational point of it by step 3.1, and the cone is a spectrum over $k$ presenting the two lines of step 4.2, so no object here is empty; the zero cases are the vanishing Jacobian row $(0,0)$ of step 4.1 with kernel $k^2$, the zero constant and linear parts of $f$ in step 2.1, and the zero $xy$-coefficient in $y^2-x^2$ used up in the coefficient comparison of step 4.2; there is one equation, one Jacobian row, one cone equation and one occurrence of each linear factor (steps 1.1, 3.2, 4.1, 4.2); the degenerate case is exactly characteristic $2$, where $y^2-x^2=(y+x)^2$ and the two factors collapse to a doubled line, so the hypothesis $\operatorname{char}k\ne2$ is used once, at step 4.2, to make the two tangent directions distinct, while multiplicity and tangent space are computed without it; the endpoints of the degree filtration are the least nonzero degree $2$ and the top degree $3$ of $f$ by step 2.1; no Axiom of Choice or dependent choice is used, since the equation, the Jacobian, the initial form and the coefficient comparison are all exhibited explicitly and every cited supplier is choice-free; and no biconditional is asserted or used, non-proportionality in step 4.2 being obtained by a one-directional coefficient comparison from a hypothetical proportionality, not by an equivalence. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2, F1, F2, F3, F4, F5, F7, F13, F14, algebra] ∎



## Source qualification

Milne, *Algebraic Geometry* v6.10, Example 4.4 (printed p. 82) records the
curve $Y^2=X^2(X+1)$, i.e. $Y^2=X^2+X^3$, and states that again only
$(0,0)$ is singular; the tangent-cone block of Examples 4.10–4.17 then gives
Example 4.10, $F(X,Y)=X^3+X^2-Y^2$, with "the tangent cone at $(0,0)$ is
defined by $Y^2-X^2$. It is the pair of lines $Y=\pm X$, and the
singularity is a node". The block is adapted from Walker 1950 and assumes
characteristic $0$; the earlier Examples 4.2–4.5 assume $\operatorname{char}(k)\ne2,3$.
The item's equation is $f=y^2-x^3-x^2=-(X^3+X^2-Y^2)$, and the sign preserves the defining ideal and multiplies the Jacobian row and the leading form by $-1$. Thus the Jacobian kernel and the initial ideal are unchanged, and the linear factors are unchanged up to multiplication by units. The
computations of the multiplicity and of the vanishing Jacobian at the origin,
and the factorization $y^2-x^2=(y-x)(y+x)$, hold in every characteristic;
the hypothesis $\operatorname{char}k\ne2$ is retained exactly where the
source uses it, to make the two tangent lines $y=x$ and $y=-x$ distinct,
since in characteristic $2$ the leading form is $(y+x)^2$. "Node" is used
here as the source's name for the ordinary double point whose leading form
has two distinct linear factors; the item verifies that two-distinct-
directions statement and does not develop the general classification of
singularities or the shape of the real locus.
