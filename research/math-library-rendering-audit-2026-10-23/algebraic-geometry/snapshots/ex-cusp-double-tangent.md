---
id: ex-cusp-double-tangent
kind: example
title: "The cusp retains a doubled tangent line"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-generated-and-principal-ideals
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-jacobian-matrix-affine-algebraic-set
  - def-monomials-multidegree-and-total-degree
  - def-multiplicity-hypersurface-point
  - def-nilradical-and-reduced-ring
  - def-polynomial-ring-over-a-commutative-ring
  - def-radical-of-an-ideal
  - def-reduction-of-scheme
  - def-tangent-cone-point
  - lem-evaluation-ideal-is-maximal
  - lem-field-is-a-commutative-ring
  - lem-tangent-cone-initial-ideal-presentation
  - thm-affine-scheme-ring-anti-equivalence
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-monic-polynomial-division
  - thm-quotient-ring-universal-property
  - thm-zariski-tangent-space-jacobian-kernel
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Example 4.3 (printed p. 82) and Example 4.12 (printed p. 84)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "J. S. Milne, Algebraic Geometry Chapter 10 supplement, Definitions 10.67 and Example 10.68 (printed p. 18)"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Let $k$ be a field of characteristic not $2$ or $3$, and let
$$ C=\operatorname{Spec}\bigl(k[x,y]/(y^2-x^3)\bigr)\subseteq\mathbb A^2_k $$
be the plane cubic defined by $y^2=x^3$, with origin $0=(0,0)$. Then:

- the tangent space at the origin is $T_0C\cong k^2$;
- the multiplicity of the equation $y^2-x^3$ at the origin is $2$;
- the scheme-theoretic tangent cone is
  $\operatorname{Cone}_0(C)\cong\operatorname{Spec}(k[x,y]/(y^2))$, the
  $x$-axis doubled;
- its reduction is the line $y=0$, whose $k$-linear span inside
  $T_0C\cong k^2$ is the one-dimensional subspace
  $\{(c,0):c\in k\}$, so the reduced cone does not span the tangent space.

The degree-one part of the cone ideal $(y^2)$ is zero, while its radical is
$(y)$: a linear form lies in the radical of the cone ideal but not in the cone
ideal itself. The nilpotent class of $y$ in $k[x,y]/(y^2)$ is nonzero and is
retained throughout; no reduction is performed in computing the tangent cone,
and the reduction is computed separately.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$ or $3$, the polynomial ring
$k[x,y]=k[x][y]$ ([[def-monomials-multidegree-and-total-degree]]), the
polynomial $f=y^2-x^3$, the principal ideal $I=(f)$, the quotient ring
$A=k[x,y]/(f)$, the plane cubic $C=\operatorname{Spec}A\subseteq\mathbb A^2_k$,
and its origin $0=(0,0)$.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $k[x]$ is the ring of finitely supported coefficient functions $\mathbb N\to k$ with unique coefficients, written $\sum_jc_jx^j$, and $x$ is the coefficient sequence with $1$ at index $1$.

[F2] [[def-monomials-multidegree-and-total-degree]]: every polynomial in the iterated ring $k[x,y]=k[x][y]$ has a unique finite expansion $\sum c_{\mathbf t}x^{\mathbf t}$, with each monomial having a total degree.

[F3] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is homogeneous of degree $d$ when every occurring monomial has total degree $d$, and $0$ is homogeneous in every degree.

[F4] [[def-multiplicity-hypersurface-point]]: for $0\ne f$ with $f(a)=0$, writing $f(a+t)=\sum_{j\ge0}f_j(t)$ as its homogeneous decomposition, the multiplicity $\operatorname{mult}_a(f)$ is the least $j$ with $f_j\ne0$, and it equals the $\mathfrak m$-adic order of $f$ in the local ring at $a$.

[F5] [[lem-tangent-cone-initial-ideal-presentation]]: for $I\subseteq\mathfrak q=(t_1,\ldots,t_n)$ in $P=k[t_1,\ldots,t_n]$, the canonical graded map $P/\operatorname{in}_{\mathfrak q}(I)\to\operatorname{gr}_{\mathfrak m_x}\mathcal O_{X,x}$ is an isomorphism, so $\operatorname{Cone}_x(X)\cong\operatorname{Spec}(P/\operatorname{in}_{\mathfrak q}(I))$, and for a principal ideal $I=(f)$ one has $\operatorname{in}_{\mathfrak q}(I)=(f_{\min})$.

[F6] [[def-tangent-cone-point]]: for a locally Noetherian scheme and a point $x$, the scheme-theoretic tangent cone is $\operatorname{Cone}_x(X)=\operatorname{Spec}(\operatorname{gr}_{\mathfrak m_x}\mathcal O_{X,x})$; the full associated graded ring is used without quotienting by nilpotents, and the reduction of the cone is a closed subscheme that can differ from the cone.

[F7] [[def-jacobian-matrix-affine-algebraic-set]]: for an ideal with a finite generating list and a point $a$ satisfying $f(a)=0$ for all $f\in I$, the Jacobian matrix at $a$ has rows $(\partial f_i/\partial t_j(a))$, with formal monomial derivatives whose integer coefficients are read in $k$ and using the actual scheme ideal.

[F8] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J(a)$.

[F9] [[lem-evaluation-ideal-is-maximal]]: for $a\in k^n$ the evaluation map $k[x_1,\ldots,x_n]\to k$ has kernel $(x_1-a_1,\ldots,x_n-a_n)$, which is a maximal ideal.

[F10] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains an ideal $I$ factors uniquely through the quotient ring.

[F11] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$, so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of $\operatorname{Spec}A$.

[F12] [[def-nilradical-and-reduced-ring]]: the nilradical of a commutative ring $R$ is $\operatorname{Nil}(R)=\sqrt{(0)}$, consisting of the nilpotent elements, and $R$ is reduced exactly when its only nilpotent element is $0$.

[F13] [[def-reduction-of-scheme]]: the reduction $X_{\mathrm{red}}$ is the closed subscheme with the same underlying topological space and structure sheaf $\mathcal O_X/\mathcal N_X$; on $\operatorname{Spec}A$ it is $\operatorname{Spec}(A/\sqrt{(0)})$.

[F14] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: if $R$ is an integral domain then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$.

[F15] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring with $1\ne0$ and is an integral domain.

[F16] [[def-generated-and-principal-ideals]]: $(S)$ is the intersection of all two-sided ideals containing $S$, and $(a)$ denotes the principal ideal generated by $a$.

[F17] [[thm-monic-polynomial-division]]: for a monic $g\in R[x]$ and any $f\in R[x]$ there are unique $q,r$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$.

[F18] [[thm-binomial-theorem-over-a-commutative-ring]]: in a commutative ring, $(x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k}$ for every $n\in\mathbb N$, the natural-number coefficients acting by repeated addition.

[F19] [[def-radical-of-an-ideal]]: the radical of an ideal $I$ is $\sqrt I=\{x:x^n\in I\text{ for some integer }n\ge1\}$, and $I$ is radical when $I=\sqrt I$.

## Verification

**Proof technique:** direct.

1.1 The polynomial $f=y^2-x^3\in k[x,y]$ has the unique monomial expansion $f=y^2-x^3$ by [F2], with homogeneous parts $f_2=y^2$ of degree $2$ and $f_3=-x^3$ of degree $3$ by [F3], and it generates the principal ideal $I=(f)$ by [F16]; the quotient ring $A=k[x,y]/(f)$ defines the closed subscheme $C=\operatorname{Spec}A$ of $\mathbb A^2_k$, and $k[x]$ is a commutative polynomial ring by [F1]. [given, F1, F2, F3, F16]

1.2 The quotient ring $R=k[x,y]/(y^2)$ is a free $k[x]$-module with basis $1,\bar y$: division by the monic polynomial $y^2\in k[x][y]$ by [F17] writes every $g\in k[x,y]$ uniquely as $g=qy^2+(a+by)$ with $a,b\in k[x]$ and $\deg_y(a+by)<2$, so the classes of $1$ and $y$ form a $k[x]$-basis of $R$ and $a+b\bar y=0$ in $R$ holds exactly when $a=b=0$. [given, F1, F17, algebra]

2.1 The multiplicity of the equation $f$ at the origin is $2$: the translated expansion $f(0+t)=t_y^2-t_x^3$ is $f_2+f_3$ with $f_2=t_y^2\ne0$ and no part of degree $0$ or $1$, so the least $j$ with $f_j\ne0$ is $j=2$ by [F4]; equivalently the $\mathfrak m$-adic order of $f$ in the local ring of $\mathbb A^2_k$ at the origin is $2$. [step 1.1, F4, algebra]

2.2 The origin is a $k$-rational point of $C$: the evaluation map $\varepsilon:k[x,y]\to k$ at $(0,0)$ has kernel $(x,y)$, which is maximal by [F9]; since $f$ has no constant term, $f\in(x,y)=\ker\varepsilon$ by [F16], so [F10] factors $\varepsilon$ through a surjective $k$-algebra homomorphism $A\to k$, and [F11] exhibits it as a $k$-rational point $P=0$ of $C$. [step 1.1, F9, F10, F11, F16]

2.3 The scheme-theoretic tangent cone: $f$ lies in $\mathfrak q=(x,y)$ because it has no constant term, and $I=(f)$, so [F5] applies with $P=k[x,y]$ and gives $\operatorname{Cone}_0(C)\cong\operatorname{Spec}\bigl(k[x,y]/\operatorname{in}_{\mathfrak q}(I)\bigr)$ with $\operatorname{in}_{\mathfrak q}(I)=(f_{\min})=(y^2)$ in the principal case; by [F6] this spectrum is the scheme-theoretic tangent cone, so $\operatorname{Cone}_0(C)\cong\operatorname{Spec}(k[x,y]/(y^2))$, the closed subscheme of $\mathbb A^2_k$ defined by $y^2=0$. [step 1.1, F5, F6, algebra]

2.4 The nilradical of $R$ is the principal ideal $(\bar y)$: for $a,b\in k[x]$ and $n\ge1$, the binomial theorem [F18] gives $(a+b\bar y)^n=\sum_k\binom nka^{n-k}b^k\bar y^k=a^n+n a^{n-1}b\,\bar y$ in $R$, because $\bar y^k=0$ for $k\ge2$; if this is zero, then $a^n=0$ and $na^{n-1}b=0$ by the uniqueness of the basis representation in step 1.2, and since $k[x]$ is an integral domain by [F14] and [F15], $a^n=0$ forces $a=0$; hence every nilpotent element of $R$ lies in $(\bar y)$, while $(\bar y)\subseteq\operatorname{Nil}(R)$ because $\bar y^2=0$, so $\operatorname{Nil}(R)=(\bar y)$ by [F12]. [step 1.2, F12, F14, F15, F18, algebra]

3.1 The tangent space is two-dimensional: since $I=(f)$ is generated by the single equation $f=y^2-x^3$, the Jacobian matrix of the list $(f)$ at $P$ is the $1\times2$ matrix $\bigl(-3x^2,\;2y\bigr)$ evaluated at $(0,0)$, namely $(0,0)$, by [F7]; its kernel is all of $k^2$, so [F8] gives a canonical isomorphism $T_0C\cong\ker(0:k^2\to k)=k^2$, of dimension $2$. The two entries $-3x^2$ and $2y$ vanish at the origin in every characteristic, so the computation does not use the nonvanishing of $2$ or $3$. [step 2.2, F7, F8, algebra]

3.2 The degree-one part of the cone ideal $(y^2)$ is zero: every nonzero element of $(y^2)$ has the form $y^2h$ with $h\ne0$, and each of its monomials has $y$-exponent at least $2$, hence total degree at least $2$; so no nonzero linear form lies in $(y^2)$, and $(y^2)\cap P_1=0$ for the degree-one space $P_1$ of [F2, F3]. [step 2.3, F2, F3, F16, algebra]

4.1 The reduced cone is the $x$-axis: by [F13] the reduction of $\operatorname{Cone}_0(C)=\operatorname{Spec}R$ is $\operatorname{Spec}(R/\sqrt{(0)})=\operatorname{Spec}(R/\operatorname{Nil}(R))=\operatorname{Spec}(R/(\bar y))$ by [F12] and step 2.4; the preimage of $(\bar y)$ under the quotient map $k[x,y]\to R$ is $(y)$, because $g$ maps into $(\bar y)$ exactly when $g=qy^2+by$ with $b\in k[x]$ by the basis of step 1.2, that is exactly when $g\in(y)$; hence $R/(\bar y)\cong k[x,y]/(y)$ and the reduced cone is the line $\{y=0\}$, the $x$-axis of $\mathbb A^2_k$; under the coordinate-velocity identification $T_0C\cong k^2$ of step 3.1 this line is the set $\{(c,0):c\in k\}$, whose $k$-linear span is the one-dimensional subspace $\{(c,0)\}$, properly contained in $k^2$; the same preimage computation gives $\sqrt{(y^2)}=(y)$ in $k[x,y]$ by [F19], so $y$ lies in the radical of the cone ideal but not in the cone ideal, as step 3.2 records. [step 3.2, step 1.2, step 2.4, F10, F12, F13, F19, algebra]

5.1 Conclusion: the tangent cone is the doubled line $\operatorname{Spec}(k[x,y]/(y^2))$, nonreduced with $\bar y\ne0$ and $\bar y^2=0$, its reduction is the $x$-axis, and that line spans only a one-dimensional subspace of the two-dimensional tangent space $T_0C\cong k^2$; the multiplicity of the equation at the origin is $2$ by step 2.1, so the origin is a multiple point of the plane cubic. The tangent cone therefore records the doubling that the tangent space does not see, while its reduction has directions along only one line. The full graded cone does determine the tangent space: its degree-one piece is $\mathfrak m_0/\mathfrak m_0^2$ by [F6], and here has the independent classes of $x,y$ by step 3.2, whose dual is $T_0C\cong k^2$. The computation retains nilpotents and performs no reduction of the cone or of the curve. [step 2.1, step 3.1, step 2.3, step 3.2, step 4.1]

6.1 Boundary and scope dispositions: the curve and the cone are nonempty, since $P=0$ is a $k$-rational point of $C$ by step 2.2 and the cone is a spectrum over $k$; the zero case appears in the Jacobian matrix $(0,0)$ of step 3.1, whose kernel is all of $k^2$, in the zero degree-one part $(y^2)\cap P_1=0$ of step 3.2, and in the vanishing $\bar y^2=0$ of step 2.4; there is one equation, one Jacobian row and one cone equation $y^2$ of degree two (step 1.1 and step 2.3); the degenerate nonreduced case is exactly the cone $k[x,y]/(y^2)$ with nilpotent nonzero $\bar y$, retained and not removed by any reduction in step 2.3, its reduction being computed separately in step 4.1, and the multiplicity is $2$ by step 2.1; the endpoint in the exponent is the least interesting case $y^2$ itself, and the characteristic hypothesis $\operatorname{char}k\ne2,3$ comes from the source's standing assumption, no step using the invertibility of $2$ or $3$, as noted in step 3.1; no Axiom of Choice or dependent choice is used, since the equation, the Jacobian, the initial form, the basis and the nilpotent computation are all exhibited explicitly; and no biconditional is asserted or used, the only two-sided claim being the computation of the nilradical in step 2.4, proved by two inclusions. [step 1.1, step 2.1, step 2.2, step 3.1, step 2.3, step 3.2, step 2.4, step 4.1, algebra] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, Example 4.3 (printed p. 82) records that
the curve $Y^2=X^3$ has the origin as its only singular point; the next
example, Milne Example 4.12 on printed p. 84, states that at the origin of
$F=X^3-Y^2$ "the tangent cone is defined by $Y^2$, which is the $X$-axis
(doubled)". The Chapter 10
supplement, Definition 10.67 and Example 10.68 (printed p. 18), gives the
scheme-theoretic tangent cone $C_P(V)=\operatorname{Spm}(k[X,Y]/(F_*))$ for a
curve without square factors and lists $X^3-Y^2$ with tangent cone
$\operatorname{Spm}(k[X,Y]/(Y^2))$, noting that the curve is integral while
its cone is nonreduced. The item's equation is $f=y^2-x^3=-(x^3-y^2)$, and
the sign leaves the defining ideal unchanged and multiplies both the Jacobian row and the leading form by $-1$, preserving the Jacobian kernel and the initial ideal. The
source's examples assume characteristic $0$ or exclude $2$ and $3$; the
computations here use only the vanishing of the gradient at the origin, the
order-two leading form $y^2$, and the nilpotent structure of $k[x,y]/(y^2)$,
all of which hold in every characteristic, and the item states the
characteristic exclusion only to preserve the scaffolded hypothesis. The
tangent-cone identification is proved from the library's own supplier
[[lem-tangent-cone-initial-ideal-presentation]], and the reduction of the
cone from the nilradical computation of step 2.4.
