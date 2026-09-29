---
id: ex-tangent-space-product-origin
kind: example
title: "The product of two parabolas: a block Jacobian and the direct-sum formula"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-generated-and-principal-ideals
  - def-jacobian-matrix-affine-algebraic-set
  - def-polynomial-ring-over-a-commutative-ring
  - def-zariski-tangent-space-point
  - lem-evaluation-ideal-is-maximal
  - lem-field-is-a-commutative-ring
  - lem-tangent-space-product
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-coproduct-property-of-tensor-products-of-commutative-algebras
  - thm-quotient-ring-universal-property
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - thm-universal-property-of-a-polynomial-ring-on-a-family
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
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-4 (printed p. 98) and its solution (printed p. 222)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Example

Let $k$ be any field and let
$$ X=\operatorname{Spec}\bigl(k[x,y,u,v]/(y-x^2,\,v-u^2)\bigr)\subseteq\mathbb A^4_k $$
be the product of the two parabolas $C_1=\operatorname{Spec}(k[x,y]/(y-x^2))$ and
$C_2=\operatorname{Spec}(k[u,v]/(v-u^2))$, carried by the equations $y=x^2$ and
$v=u^2$ in separate pairs of variables, with origin $0=(0,0,0,0)$ and factor
origins $0_1=(0,0)$, $0_2=(0,0)$. Then:

1. $X\cong C_1\times_kC_2$ as $k$-schemes, compatibly with the coordinate
   projections, and the origin $0$ corresponds to the pair $(0_1,0_2)$;
2. the Jacobian matrix of the two equations at the origin is the block matrix
   $$ \begin{pmatrix}-2x&1&0&0\\0&0&-2u&1\end{pmatrix}_{\!(0,0,0,0)}=\begin{pmatrix}0&1&0&0\\0&0&0&1\end{pmatrix}, $$
   whose kernel is $\{(a,0,b,0):a,b\in k\}\cong k^2$, so that
   $T_0X\cong\{(a,0,b,0)\}$ is two-dimensional;
3. each factor contributes one dimension, $T_{0_1}C_1\cong\{(a,0)\}\cong k$ and
   $T_{0_2}C_2\cong\{(b,0)\}\cong k$, so the direct-sum formula gives
   $$ T_{(0_1,0_2)}(C_1\times_kC_2)\cong T_{0_1}C_1\oplus T_{0_2}C_2\cong k\oplus k\cong k^2, $$
   in agreement with the kernel $\{(a,0,b,0)\}$ of the Jacobian computation
   under the coordinate splitting $k^4=k^2_{(x,y)}\oplus k^2_{(u,v)}$.

No characteristic, perfectness, reducedness or algebraic-closedness hypothesis
is used.

## Facts & Assumptions

**Given:** A field $k$, the polynomial rings $k[x,y]$, $k[u,v]$ and $k[x,y,u,v]=k[x][y][u][v]$, the polynomials $f=y-x^2$ and $g=v-u^2$, the ideals $I_1=(f)\subseteq k[x,y]$, $I_2=(g)\subseteq k[u,v]$ and $J=(f,g)\subseteq k[x,y,u,v]$, the quotient rings $A_1=k[x,y]/I_1$, $A_2=k[u,v]/I_2$ and $B=k[x,y,u,v]/J$, the $k$-schemes $C_1=\operatorname{Spec}A_1$, $C_2=\operatorname{Spec}A_2$ and $X=\operatorname{Spec}B$, and the origin $0=(0,0,0,0)$ together with the factor origins $0_1=(0,0)\in k^2$ and $0_2=(0,0)\in k^2$.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $R[x]$ is the set of finitely supported coefficient functions with $(a+b)_n=a_n+b_n$ and $(ab)_n=\sum_{i+j=n}a_ib_j$, the commutative-ring axioms hold, and a polynomial is written $\sum_ia_ix^i$, so $k[x,y]$, $k[u,v]$ and $k[x,y,u,v]=k[x][y][u][v]$ are commutative rings and products expand by distributivity.

[F2] [[def-generated-and-principal-ideals]]: for a subset $S\subseteq R$, $(S)$ is the intersection of all two-sided ideals of $R$ containing $S$, and for $a\in R$ the ideal $(\{a\})$ is written $(a)$ and is called **principal**; thus $(f)$, $(g)$ are principal and $(f,g)$ is generated as an ideal by the two-element set $\{f,g\}$.

[F3] [[def-jacobian-matrix-affine-algebraic-set]]: for an ideal with a specified finite generating list $f_1,\dots,f_r$ and a point $a$ satisfying $f(a)=0$ for every $f\in I$, the **Jacobian matrix at $a$** has rows $(\partial f_i/\partial t_j(a))$, with formal monomial derivatives whose integer coefficients are read in $k$, and it uses the actual scheme ideal.

[F4] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field, ideal $I\subseteq k[t_1,\ldots,t_n]$, $X=\operatorname{Spec}(k[t]/I)$, rational point $a\in X(k)$ and any finite generating list of $I$, the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_aX\cong\ker J(a)$, independent of the chosen generating list, with no reducedness, perfectness or characteristic hypothesis.

[F5] [[lem-tangent-space-product]]: for $k$-schemes $X,Y$ and $k$-rational points $x\in X$, $y\in Y$, the map sending a tangent vector at $(x,y)$, represented by a based dual-number map $\gamma$, to $(p_X\circ\gamma,p_Y\circ\gamma)$ along the two projections is a $k$-linear isomorphism $T_{(x,y)}(X\times_kY)\cong T_xX\oplus T_yY$.

[F6] [[thm-affine-fibre-product-tensor-ring]]: for maps $A\to B$ and $A\to C$ of commutative unital rings, in the category of all schemes $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$, the projections corresponding to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$.

[F7] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: for a commutative ring $R$ and $R$-algebras $A,B$, the $R$-module $A\otimes_RB$ carries a unique $R$-algebra structure with $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and $1_{A\otimes_RB}=1_A\otimes1_B$, and it is commutative when $A$ and $B$ are commutative.

[F8] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: for commutative $R$-algebras $A,B,C$ and $R$-algebra maps $f:A\to C$, $g:B\to C$ there is a unique $R$-algebra map $h:A\otimes_RB\to C$ with $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$, given by $h(a\otimes b)=f(a)g(b)$; thus $A\otimes_RB$ with its canonical maps is the coproduct of $A$ and $B$.

[F9] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: a ring homomorphism $\varphi:R\to S$ and a family $(s_i)_{i\in I}$ in $S$ determine a unique ring homomorphism $R[x_i:i\in I]\to S$ restricting to $\varphi$ and sending $x_i\mapsto s_i$.

[F10] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring.

[F11] [[lem-evaluation-ideal-is-maximal]]: for $a\in k^n$ the evaluation map $k[x_1,\ldots,x_n]\to k$ has kernel $(x_1-a_1,\ldots,x_n-a_n)$, which is a maximal ideal.

[F12] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$, so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of $\operatorname{Spec}A$.

[F13] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring with $1\ne0$ and is an integral domain.

[F14] [[def-zariski-tangent-space-point]]: the intrinsic Zariski tangent space $T_xX$ of a scheme $X$ at $x$ is the dual of the cotangent space $\mathfrak m_x/\mathfrak m_x^2$ over the residue field, and at a $k$-rational point it agrees with the relative tangent space over $k$.






## Verification

**Proof technique:** direct.

1.1 Setup: $k$ is a field and $k[x,y]$, $k[u,v]$, $k[x,y,u,v]=k[x][y][u][v]$ are commutative rings by [F1]; $f=y-x^2$ and $g=v-u^2$ are nonzero polynomials, $I_1=(f)$, $I_2=(g)$ are principal ideals and $J=(f,g)$ is the ideal generated by the two-element set $\{f,g\}$ by [F2]; $A_1=k[x,y]/I_1$, $A_2=k[u,v]/I_2$, $B=k[x,y,u,v]/J$, $C_1=\operatorname{Spec}A_1$, $C_2=\operatorname{Spec}A_2$, $X=\operatorname{Spec}B\subseteq\mathbb A^4_k$; the origin $0=(0,0,0,0)$ satisfies $f(0)=0$ and $g(0)=0$ because $f$ and $g$ have no constant term; and $T_x$ denotes the intrinsic tangent space of [F14]. [given, F1, F2, F14, algebra]

2.1 The origins are $k$-rational points: the evaluation $\operatorname{ev}:k[x,y,u,v]\to k$, $h\mapsto h(0,0,0,0)$ has kernel $(x,y,u,v)$, maximal by [F11]; $f$ and $g$ lie in that kernel because $f(0)=g(0)=0$, so the kernel contains the ideal $J=(f,g)$ generated by them by [F2], and [F10] factors $\operatorname{ev}$ uniquely through the quotient $B=k[x,y,u,v]/J$ as a $k$-algebra homomorphism $\delta:B\to k$; $\delta$ is surjective because $\operatorname{ev}$ is, and [F12] renders a $k$-algebra homomorphism $B\to k$ as a $k$-rational point of $X$, namely the origin $0$ with $B/\ker\delta\cong k$; the same argument applied to $k[x,y]$ and $A_1$ gives a $k$-algebra homomorphism $\delta_1:A_1\to k$, a $k$-rational point $0_1$ of $C_1$, and applied to $k[u,v]$ and $A_2$ gives a $k$-algebra homomorphism $\delta_2:A_2\to k$, a $k$-rational point $0_2$ of $C_2$. [step 1.1, F2, F10, F11, F12, algebra]

2.2 The product structure: by [F9] there is a $k$-algebra homomorphism $k[x,y]\to B$ with $x\mapsto\hat x$, $y\mapsto\hat y$, and it kills $f$ because $\hat y=\hat x^2$ in $B$, so [F10] factors it as a $k$-algebra homomorphism $\alpha:A_1\to B$ with $\alpha(\bar x)=\hat x$ and $\alpha(\bar y)=\hat y$; likewise a $k$-algebra homomorphism $\beta:A_2\to B$ is defined by $\beta(\bar u)=\hat u$ and $\beta(\bar v)=\hat v$, using $\hat v=\hat u^2$; by [F8] there is a unique $k$-algebra homomorphism $\varphi:A_1\otimes_kA_2\to B$ with $\varphi(a\otimes1)=\alpha(a)$ and $\varphi(1\otimes b)=\beta(b)$, where $A_1\otimes_kA_2$ is a commutative $k$-algebra with multiplication rule $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ by [F7]; in the other direction [F9] gives a $k$-algebra homomorphism $\psi:k[x,y,u,v]\to A_1\otimes_kA_2$ with $x\mapsto\bar x\otimes1$, $y\mapsto\bar y\otimes1$, $u\mapsto1\otimes\bar u$, $v\mapsto1\otimes\bar v$, and the multiplication rule of [F7] computes $\psi(f)=\psi(y)-\psi(x)^2=(\bar y\otimes1)-(\bar x\otimes1)^2=(\bar y-\bar x^2)\otimes1=0$ and $\psi(g)=\psi(v)-\psi(u)^2=1\otimes(\bar v-\bar u^2)=0$, so [F10] factors $\psi$ through the quotient $B=k[x,y,u,v]/J$ as a $k$-algebra homomorphism $\bar\psi:B\to A_1\otimes_kA_2$ with $\bar\psi(\hat x)=\bar x\otimes1$, $\bar\psi(\hat y)=\bar y\otimes1$, $\bar\psi(\hat u)=1\otimes\bar u$ and $\bar\psi(\hat v)=1\otimes\bar v$. [step 1.1, F2, F7, F8, F9, F10, algebra]

2.3 The Jacobian computation: the ideal $J=(f,g)$ is presented by the finite generating list $(f,g)$ by [F2], and every element of $J$ vanishes at $0$ since $f(0)=g(0)=0$, so the Jacobian matrix of this list at $0$ is defined by [F3]; its rows are the formal partial derivatives of $f=y-x^2$ and $g=v-u^2$, namely $(-2x,1,0,0)$ and $(0,0,-2u,1)$, so that at $0$ the matrix is $\begin{pmatrix}0&1&0&0\\0&0&0&1\end{pmatrix}$; a vector $w=(w_1,w_2,w_3,w_4)\in k^4$ lies in the kernel exactly when $w_2=0$ and $w_4=0$, so $\ker J(0)=\{(a,0,b,0):a,b\in k\}$, a two-dimensional subspace with $k$-basis $(1,0,0,0),(0,0,1,0)$ because $1\ne0$ in $k$ by [F13]; by [F4] the coordinate-velocity map gives a canonical $k$-linear isomorphism $T_0X\cong\ker J(0)$, hence $T_0X\cong\{(a,0,b,0)\}$ is two-dimensional. [step 1.1, F2, F3, F4, F13, algebra]

2.4 The two factors: for $C_1=\operatorname{Spec}(k[x,y]/(f))$ the Jacobian matrix of the single equation $f$ at $0_1$ is the $1\times2$ matrix $(-2x,1)$ evaluated at $(0,0)$, namely $(0,1)$, by [F3]; its kernel is $\{(a,0):a\in k\}\cong k$, one-dimensional, and [F4] gives $T_{0_1}C_1\cong\{(a,0)\}$; for $C_2=\operatorname{Spec}(k[u,v]/(g))$ the Jacobian matrix of $g$ at $0_2$ is $(-2u,1)$ evaluated at $(0,0)$, again $(0,1)$, with kernel $\{(b,0):b\in k\}\cong k$, so $T_{0_2}C_2\cong\{(b,0)\}$ and each factor contributes exactly one dimension. [step 1.1, F3, F4, algebra]

3.1 The maps of step 2.2 are inverse: the composites $\bar\psi\circ\varphi$ and the identity of $A_1\otimes_kA_2$ are $k$-algebra homomorphisms out of the coproduct that restrict to the same maps on the two factors, since $\bar\psi(\varphi(\bar x\otimes1))=\bar\psi(\hat x)=\bar x\otimes1$ and likewise on $\bar y,\bar u,\bar v$, and every element of $A_1$ is a polynomial in the two classes $\bar x,\bar y$ and every element of $A_2$ a polynomial in $\bar u,\bar v$, so the uniqueness clause of [F8] gives $\bar\psi\circ\varphi=\operatorname{id}_{A_1\otimes_kA_2}$; conversely $\varphi\circ\bar\psi$ and $\operatorname{id}_B$ are $k$-algebra homomorphisms $B\to B$ whose composites with the quotient map $k[x,y,u,v]\to B$ agree on $x,y,u,v$ by those same displayed identities, so by the uniqueness of factorization in [F10] together with the uniqueness in [F9] they are equal and $\varphi\circ\bar\psi=\operatorname{id}_B$; hence $\varphi$ is a $k$-algebra isomorphism $A_1\otimes_kA_2\cong B$ and, taking the base ring $k$ in [F6], $C_1\times_kC_2=\operatorname{Spec}A_1\times_{\operatorname{Spec}k}\operatorname{Spec}A_2\cong\operatorname{Spec}(A_1\otimes_kA_2)\cong\operatorname{Spec}B=X$, with the projections corresponding to $\alpha$ and $\beta$, that is, to the coordinate projections; moreover the $k$-rational point $\delta$ of step 2.1 corresponds under this isomorphism to the pair $(\delta_1,\delta_2)$, because $\delta\circ\varphi:A_1\otimes_kA_2\to k$ is by [F8] the unique $k$-algebra homomorphism restricting to $\delta_1$ and $\delta_2$ on the two factors, which is the product point $(0_1,0_2)$. [step 2.1, step 2.2, F6, F8, F9, F10, algebra]

4.1 The direct-sum comparison: by [F5] applied to the $k$-schemes $C_1,C_2$ and their $k$-rational points $0_1,0_2$ of step 2.1, the two projections induce a canonical $k$-linear isomorphism $T_{(0_1,0_2)}(C_1\times_kC_2)\cong T_{0_1}C_1\oplus T_{0_2}C_2$, which by step 2.4 is $\cong k\oplus k\cong k^2$; the isomorphism $X\cong C_1\times_kC_2$ of steps 2.2 and 3.1 carries $0$ to $(0_1,0_2)$ and its projections are the coordinate projections, so a based dual-number point of $X$ with velocity $(a,0,b,0)$, as in step 2.3, projects to based points of the factors with velocities $(a,0)$ and $(b,0)$; hence the direct-sum isomorphism is compatible with the block splitting $k^4=k^2_{(x,y)}\oplus k^2_{(u,v)}$ of the coordinates, and the two computations of $T_0X$ agree: both are two-dimensional, the direct-sum side reconstructing exactly the kernel $\{(a,0,b,0)\}$; no characteristic hypothesis enters either computation. [step 3.1, step 2.3, step 2.4, F5, algebra]

5.1 Conclusion: for $X=\operatorname{Spec}(k[x,y,u,v]/(y-x^2,v-u^2))$ over any field $k$, the origin has tangent space $T_0X\cong\{(a,0,b,0):a,b\in k\}$, the kernel of the block Jacobian matrix $\begin{pmatrix}0&1&0&0\\0&0&0&1\end{pmatrix}$, a two-dimensional $k$-vector space; the direct-sum formula for the product $C_1\times_kC_2\cong X$ reproduces the same two dimensions from the one-dimensional factor tangent spaces $T_{0_1}C_1\cong k$ and $T_{0_2}C_2\cong k$, and no characteristic, perfectness, reducedness or algebraic-closedness hypothesis is used. [step 2.3, step 4.1]

6.1 Boundary and scope dispositions: $X$, $C_1$, $C_2$ and the field $k$ are nonempty, the origins being $k$-rational points by step 2.1 and $k$ being a field with $0\ne1$ by [F13], so no object here is empty and the only empty lists would be empty generating lists, which do not occur since $I_1=(f)$, $I_2=(g)$ and $J=(f,g)$ are presented by one or two exhibited elements (steps 1.1 and 2.3); the zero cases are the origin $0$, where all four coordinates vanish, the vanishing $f(0)=g(0)=0$ of step 1.1, the vanishing entries $-2x$ and $-2u$ at the origin, the zero vector of $\ker J(0)$, and the zero tangent map of a constant based dual-number point, while the kernel itself is not zero but two-dimensional because the entries $1$ never vanish (step 2.3); there is one point $0$, one product isomorphism, two equations, one Jacobian matrix with two rows, one kernel description, and each of the two factors contributes exactly one dimension (steps 3.1, 2.3 and 2.4); the degenerate instances of the direct-sum formula, a zero tangent factor, do not occur because both factors are one-dimensional (step 2.4), no equation degenerates to the zero polynomial since $f$ and $g$ have $y$- and $v$-coefficient $1$ (step 1.1), and the characteristic does not enter at all, every evaluated entry of the two Jacobian matrices being $0$ or $1$ (steps 2.3 and 2.4), so the characteristic-two case is not exceptional and no hypothesis is excluded; the dimension endpoints are one for each factor and two for the product, the extreme parameter value $a=b=0$ giving the zero vector, and the entries $-2x$, $-2u$ evaluated at the origin are the endpoint values that vanish there (steps 2.3 and 2.4); both directions of the kernel characterization are proved in step 2.3, the forward one because a vector of the kernel satisfies $w_2=0$ and $w_4=0$, the reverse one because $w_2=w_4=0$ makes both rows annihilate $w$, and the algebra isomorphisms of steps 2.2 and 3.1 are two-sided inverses by construction; no Axiom of Choice or dependent choice is used, since $f$, $g$, the two maps $\alpha,\beta$, the assignment defining $\psi$ and the Jacobian evaluations are all exhibited explicitly, no basis or neighbourhood is selected, and every cited supplier is choice-free, with no def-axiom-of-choice dependency declared. [step 1.1, step 2.1, step 2.3, step 2.4, F13] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, Exercise 4-4 (printed p. 98) asks: "Let $P$
and $Q$ be points on varieties $V$ and $W$. Show that
$T_{(P,Q)}(V\times W)\cong T_P(V)\oplus T_Q(W)$"; the official solution
(printed p. 222) takes $V,W$ affine with $I(V)=(f_1,\dots,f_r)\subseteq
k[X_1,\dots,X_m]$ and $I(W)=(g_1,\dots,g_s)\subseteq k[X_{m+1},\dots,X_{m+n}]$,
observes that $I(V\times W)$ is generated by the combined list, and concludes
that $T_{(a,b)}(V\times W)$ is defined by the equations $(df_i)_a=0$ and
$(dg_j)_b=0$, "which can obviously be identified with
$T_a(V)\times T_b(W)$". The item's block Jacobian matrix of the two parabolas
$y=x^2$ and $v=u^2$ is exactly the combined-list computation of that solution,
and its comparison with the direct-sum formula is the scheme-theoretic form of
the same identification, with the product $C_1\times_kC_2$ presented as
$\operatorname{Spec}(A_1\otimes_kA_2)$ and identified with
$\operatorname{Spec}(k[x,y,u,v]/(y-x^2,v-u^2))$ through the explicit inverse
maps of steps 2.2 and 3.1. Milne's chapter works with classical varieties over an
algebraically closed field, with $\mathfrak a=I(V)$ assumed radical; the item
works with the actual scheme ideal $(y-x^2,v-u^2)$ over an arbitrary field and
uses no radicality or reducedness hypothesis anywhere: the Jacobian-kernel
theorem applies to any ideal and any finite generating list, and the
product and tensor-ring identifications are the general scheme-theoretic ones.
Unlike the single-parabola computation, nothing here is decided by a
characteristic-specific coefficient, so the example is characteristic free.
The scaffold citation "Exercise 4-4" is therefore exact for the direct-sum
claim, and the explicit two-parabola instance together with the identification
of the Jacobian kernel with $\{(a,0,b,0)\}$ is supplied by this item.
