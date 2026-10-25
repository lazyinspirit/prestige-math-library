---
id: ex-irreducible-curve-with-arbitrary-embedding-dimension
kind: example
title: "An irreducible curve can have arbitrarily large tangent dimension"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-dimension-preserved-by-integral-extensions
  - cor-integral-elements-form-a-subring
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-dimension
  - def-dual-family-associated-to-a-basis
  - def-integral-element-and-algebraic-integer
  - def-linear-basis
  - def-monomials-multidegree-and-total-degree
  - def-morphism-of-schemes
  - def-polynomial-ring-over-a-commutative-ring
  - def-scheme-over-base
  - def-vector-space-of-linear-maps
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - lem-evaluation-ideal-is-maximal
  - lem-field-is-a-commutative-ring
  - lem-standard-basis-of-f-n
  - thm-affine-scheme-ring-anti-equivalence
  - thm-dimension-of-a-linear-subspace
  - thm-first-isomorphism-theorem-rings
  - thm-irreducible-closed-subsets-and-prime-ideals
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
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-5 (printed p. 99) with its solution (printed p. 223)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Example

Let $k$ be a field, let $n\ge1$, and assume the Axiom of Choice. Put
$$ R:=k[t^n,t^{n+1},\ldots,t^{2n-1}]\subseteq k[t],\qquad C:=\operatorname{Spec}R, $$
the monomial curve spanned by the $n$ consecutive monomials of degrees
$n,n+1,\ldots,2n-1$. Then:

- $C$ is irreducible and $\dim R=1$, so $C$ is a curve;
- the ideal
  $\mathfrak m=(t^n,t^{n+1},\ldots,t^{2n-1})R=R\cap(t)$ is maximal, the
  residue field at it is $R/\mathfrak m\cong k$, so $0:=\mathfrak m$ is a
  $k$-rational point of $C$, and the classes of
  $t^n,t^{n+1},\ldots,t^{2n-1}$ form a $k$-basis of
  $\mathfrak m/\mathfrak m^2$;
- consequently $\dim_kT_0C=n$: for every $n\ge1$ there is an irreducible curve
  whose tangent space at a point has dimension $n$;
- there is no closed immersion $C\to\mathbb A^{n-1}_k$ of $k$-schemes, and
  hence no such curve embeds in $\mathbb A^{n-1}_k$.

The tangent dimension is visible in the degree gap: $\mathfrak m$ contains no
element of degree below $n$ and $\mathfrak m^2$ contains no element of degree
below $2n$, so the $n$ degrees $n,\ldots,2n-1$ survive as independent tangent
directions.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\ge1$, the polynomial ring $k[t]$ and the
polynomial ring $k[x_n,x_{n+1},\ldots,x_{2n-1}]$ on the finite variable family
$\{n,n+1,\ldots,2n-1\}$, the point $0\in k$, the subring
$R:=k[t^n,\ldots,t^{2n-1}]\subseteq k[t]$, the scheme
$C=\operatorname{Spec}R$ over $k$, and the Axiom of Choice.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: $k[t]$ is the set of
finitely supported coefficient functions $\mathbb N\to k$ with $(a+b)_j=a_j+b_j$
and $(ab)_j=\sum_{i+l=j}a_ib_l$, so $t^at^b=t^{a+b}$ and every polynomial has
coefficients; iterating with the finitely many variables of the family gives
$k[x_n,\ldots,x_{2n-1}]$.

[F2] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: for
commutative rings $R,S$, a ring homomorphism $\varphi:R\to S$ and a family
$(s_i)_{i\in I}$ in $S$, there is a unique ring homomorphism
$R[x_i:i\in I]\to S$ restricting to $\varphi$ on $R$ and sending $x_i\mapsto s_i$;
for $R=S=\ $a common field this is the unique $k$-algebra map with prescribed
values on the variables.

[F3] [[thm-first-isomorphism-theorem-rings]]: a ring homomorphism with kernel
$J$ induces an isomorphism from the quotient ring to its image.

[F4] [[def-monomials-multidegree-and-total-degree]]: every polynomial in
$F[x_1,\ldots,x_n]$ over a field $F$ has a unique finite monomial expansion, so
two elements of $k[t]$ are equal exactly when all coefficients agree; each
monomial has a total degree.

[F5] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: a
polynomial ring in finitely many variables over an integral domain is an
integral domain; in particular $k[t]$ is a domain and so is every subring of it.

[F6] [[lem-field-is-a-commutative-ring]]: every field is a commutative ring
with $1\ne0$ and is an integral domain.

[F7] [[def-integral-element-and-algebraic-integer]]: for a ring homomorphism
$A\to B$, an element $b\in B$ is integral over $A$ when it is a root of a monic
polynomial in $A[X]$.

[F8] [[cor-integral-elements-form-a-subring]]: for commutative rings
$A\subseteq B$ with $A\ne0$, the elements of $B$ integral over $A$ form a
subring of $B$.

[F9] [[cor-dimension-preserved-by-integral-extensions]]: assuming the Axiom of
Choice, an injective integral extension $A\subseteq B$ of nonzero commutative
rings satisfies $\dim A=\dim B$.

[F10] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: for a field
$k$ and $n\ge0$, $\dim k[x_1,\ldots,x_n]=n$; in particular $\dim k[t]=1$.

[F11] [[thm-irreducible-closed-subsets-and-prime-ideals]]: assuming the Axiom
of Choice, a nonempty Zariski-closed subset $Z\subseteq\operatorname{Spec}R$
is irreducible if and only if its radical defining ideal is prime.

[F12] [[def-zariski-cotangent-space-point]]: the intrinsic cotangent space is
$C_xX=\mathfrak m_x/\mathfrak m_x^2$, a vector space over the residue field
$\kappa(x)$; at a $k$-rational point $\kappa(x)=k$.

[F13] [[def-zariski-tangent-space-point]]: the intrinsic tangent space is
$T_xX=\operatorname{Hom}_{\kappa(x)}(C_xX,\kappa(x))$, and at a $k$-rational
point it is $\operatorname{Hom}_k(\mathfrak m_x/\mathfrak m_x^2,k)$.

[F14] [[def-vector-space-of-linear-maps]]: the set of linear maps between
$F$-vector spaces is an $F$-vector space under pointwise operations.

[F15] [[def-dual-family-associated-to-a-basis]]: for a basis $B$ of a vector
space $V$, the coordinate functional $b^*$ is defined by $b^*(c)=\delta_{bc}$
on basis elements and extended linearly using the unique finite basis
expansion.

[F16] [[def-linear-basis]]: a basis is a linearly independent spanning subset;
every element is a unique finite linear combination of basis elements.

[F17] [[def-dimension]]: a vector space with a finite basis $B\approx n$ is
$n$-dimensional, and $\dim_FV$ is that unique $n$; isomorphic vector spaces
have equal dimension because the image of a basis under an isomorphism is a
basis.

[F18] [[def-scheme-over-base]]: a $k$-scheme is a scheme with a morphism to
$\operatorname{Spec}k$, and a $k$-morphism commutes with the structure maps; a
$k$-rational point is a section over $\operatorname{Spec}k$.

[F19] [[def-morphism-of-schemes]]: scheme morphisms are the morphisms of
locally ringed spaces, and they compose.

[F20] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps $A\to B$
correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$,
so $k$-algebra homomorphisms $A\to k$ are the $k$-rational points of
$\operatorname{Spec}A$.

[F21] [[lem-evaluation-ideal-is-maximal]]: the evaluation map
$k[x_1,\ldots,x_{n-1}]\to k$ at $a=(a_1,\ldots,a_{n-1})$ has kernel
$(x_1-a_1,\ldots,x_{n-1}-a_{n-1})$, which is a maximal ideal.

[F22] [[def-closed-immersion-schemes]]: a morphism is a closed immersion when
its underlying map is a homeomorphism onto a closed subset and the structure
sheaf map is surjective.

[F23] [[def-closed-immersion-schemes]]: for a closed immersion $i:Z\to Y$,
the structure-sheaf map $\mathcal O_Y\to i_*\mathcal O_Z$ is surjective.
At $z\mapsto y$, its stalk map $\mathcal O_{Y,y}\twoheadrightarrow
\mathcal O_{Z,z}$ is therefore a surjective local homomorphism. It maps the
maximal ideal onto the maximal ideal, and hence induces a surjection on
cotangent spaces at rational points; dualizing gives an injection on tangent
spaces.

[F24] [[thm-zariski-tangent-space-jacobian-kernel]]: for any field,
$I\subseteq k[t_1,\ldots,t_m]$, $X=\operatorname{Spec}(k[t]/I)$, a rational
point $a\in X(k)$ and any finite generating list of $I$, one has
$T_aX\cong\ker J(a)\subseteq k^m$.

[F25] [[thm-dimension-of-a-linear-subspace]]: a linear subspace $U$ of a
finite-dimensional vector space $V$ is finite-dimensional with
$\dim_FU\le\dim_FV$.

[F26] [[lem-standard-basis-of-f-n]]: the standard unit vectors form a basis of
$F^n$ with $n$ elements, so $\dim_FF^n=n$.

[F28] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice
function; the statement and the cited steps below are the only uses recorded.




## Verification

**Proof technique:** direct.

1.1 The image $R=\psi(k[x_n,\ldots,x_{2n-1}])$ of the unique $k$-algebra map $\psi$ with $x_i\mapsto t^i$ given by [F2] is a subring of $k[t]$ and a finite-type $k$-algebra, and [F3] identifies $R$ with $k[x_n,\ldots,x_{2n-1}]/\ker\psi$; by [F5, F6] the ring $k[t]$ is a domain, hence so is its subring $R$, and $C=\operatorname{Spec}R$ is a $k$-scheme by [F18]. [given, F1, F2, F3, F5, F6, F18]

2.1 The subring description: every element of $R$ is a $k$-linear combination of products of the generators $t^n,\ldots,t^{2n-1}$ by [F2, F3], and every nonempty such product is $t^{i_1+\cdots+i_r}$ with $i_1+\cdots+i_r\ge n$ by [F1], so $R\subseteq k\cdot1+\operatorname{span}_k\{t^j:j\ge n\}$; conversely $1\in R$ and $t^j\in R$ for every $j\ge n$, by strong induction on $j$ ($t^j$ is a generator for $n\le j\le2n-1$, and $t^j=t^{j-n}t^n$ with $j-n\ge n$ for $j\ge2n$); hence $R=k\cdot1\oplus\operatorname{span}_k\{t^j:j\ge n\}$ with the sum direct and coefficients unique by [F4]. [step 1.1, F1, F2, F3, F4, algebra]

2.2 Suppose for contradiction that $\iota:C\to\mathbb A^{n-1}_k$ is a closed immersion of $k$-schemes, where $\mathbb A^{n-1}_k=\operatorname{Spec}k[x_1,\ldots,x_{n-1}]$ by [F1, F18]. By [F22] and [F23], the induced map on local rings is surjective at every source point. [step 1.1, F1, F18, F22, F23]

3.1 The origin and irreducibility: the constant-coefficient map $\varepsilon:R\to k$ is a surjective $k$-algebra homomorphism whose kernel is $\mathfrak m=\operatorname{span}_k\{t^j:j\ge n\}=(t^n,\ldots,t^{2n-1})R$ by step 2.1, so [F3] gives $R/\mathfrak m\cong k$, making $\mathfrak m$ maximal with residue field $k$ and exhibiting $0:=\mathfrak m$ as the $k$-rational point $\varepsilon$ of $C$ under [F20]; since $R$ is a domain by step 1.1, the zero ideal is prime and [F11] applied to the nonempty closed subset $\operatorname{Spec}R=V(0)$ shows that $C$ is irreducible. [step 1.1, step 2.1, F3, F5, F11, F20, F28]

3.2 The dimension is one: $t$ is integral over $R$ because it is a root of the monic polynomial $X^n-t^n\in R[X]$ by [F7], and the integral elements of $k[t]$ over $R$ form a subring by [F8] containing $R$ and $t$, hence containing $R[t]=k[t]$; thus $R\subseteq k[t]$ is an injective integral extension of nonzero commutative rings and $\dim R=\dim k[t]=1$ by [F9] and [F10], with the Axiom of Choice entering exactly through [F9]. [step 1.1, step 2.1, F7, F8, F9, F10, F28]

4.1 The tangent directions: $\mathfrak m^2=\operatorname{span}_k\{t^s:s\ge2n\}$, because a product of two elements of $\mathfrak m$ is a $k$-linear combination of monomials $t^{j+l}$ with $j,l\ge n$ and hence lies in that span, while conversely $t^s=t^{s-n}\cdot t^n\in\mathfrak m^2$ for every $s\ge2n$ by step 2.1; therefore $\mathfrak m=\operatorname{span}_k\{t^n,\ldots,t^{2n-1}\}\oplus\mathfrak m^2$, and the classes $b_i:=t^i+\mathfrak m^2$ for $n\le i\le2n-1$ form a $k$-basis of the cotangent space $\mathfrak m/\mathfrak m^2$ by [F12, F16, F4]. [step 2.1, step 3.1, F4, F12, F16, algebra]

4.2 The points: $0\in C(k)$ by step 3.1 composes with $\iota$ to a $k$-rational point $p=\iota\circ0$ of $\mathbb A^{n-1}_k$ by [F18, F19]. Under the anti-equivalence [F20] the point $p$ corresponds to a $k$-algebra map $k[x_1,\ldots,x_{n-1}]\to k$, that is, to a tuple $a\in k^{n-1}$ with maximal ideal $(x_1-a_1,\ldots,x_{n-1}-a_{n-1})$ by [F2, F21]. [step 1.1, step 3.1, step 2.2, F2, F18, F19, F20, F21]

5.1 The tangent dimension: $T_0C=\operatorname{Hom}_k(\mathfrak m/\mathfrak m^2,k)$ is a $k$-vector space by [F13, F14, F12], and for each $i$ the coordinate functional $b_i^*$ of [F15] is an element of it; every $\lambda\in T_0C$ satisfies $\lambda=\sum_i\lambda(b_i)b_i^*$ because both sides are $k$-linear and agree on the basis $(b_i)$ of [F16], and $\sum_ic_ib_i^*=0$ forces $c_j=0$ by evaluation at $b_j$; hence $(b_n^*,\ldots,b_{2n-1}^*)$ is a $k$-basis of $T_0C$ with $n$ elements and $\dim_kT_0C=n$ by [F17]. [step 3.1, step 4.1, F12, F13, F14, F15, F16, F17, algebra]

6.1 The contradiction: by step 2.2 and [F23], the stalk map $\mathcal O_{\mathbb A^{n-1},p}\twoheadrightarrow\mathcal O_{C,0}$ is a surjective local $k$-homomorphism. It maps the maximal ideal $\mathfrak m_p$ onto $\mathfrak m_0$, hence maps $\mathfrak m_p^2$ onto $\mathfrak m_0^2$ and induces a surjection $\mathfrak m_p/\mathfrak m_p^2\twoheadrightarrow \mathfrak m_0/\mathfrak m_0^2$. Dualizing over the common residue field $k$ yields an injection $T_0C\hookrightarrow T_p\mathbb A^{n-1}_k$ by [F12, F13]. Applying [F24] to the affine space with actual ideal $(0)$ gives $T_p\mathbb A^{n-1}_k\cong\ker(0:k^{n-1}\to0)=k^{n-1}$; thus [F25] and [F26] imply $\dim_kT_0C\le n-1$. But step 5.1 gives $\dim_kT_0C=n$, a contradiction. Therefore no closed immersion $C\to\mathbb A^{n-1}_k$ exists. [step 2.2, step 4.2, step 5.1, F12, F13, F23, F24, F25, F26, algebra]

7.1 Conclusion: for every $n\ge1$ the monomial curve $C=\operatorname{Spec}k[t^n,\ldots,t^{2n-1}]$ is irreducible of dimension one (steps 3.1 and 3.2), its tangent space at the $k$-rational origin has dimension exactly $n$ (step 5.1), and it admits no closed immersion into $\mathbb A^{n-1}_k$ (step 6.1); the tangent dimension of an irreducible curve is therefore unbounded, completing the source's exercise with an irreducible witness. [step 3.1, step 5.1, step 3.2, step 6.1]

8.1 Boundary and scope dispositions: $C$ is nonempty and irreducible with the $k$-rational point $0$ by step 3.1, and $\mathbb A^0_k=\operatorname{Spec}k$ is nonempty, so no boundary object is empty; the zero cases are the zero ideal of $k[t]$ used in step 3.1 and the zero vector of each $k$-vector space, and for $n$ as small as possible the ideal $\mathfrak m$ is nonzero and principal-generated by $t$; the minimal instance $n=1$ gives $R=k[t]$, $C=\mathbb A^1_k$, $\mathfrak m/\mathfrak m^2=k\cdot t$ of dimension $1$, with the closed-embedding obstruction against $\mathbb A^0_k$ still delivered by step 6.1; the degenerate case of the construction is this same $n=1$ endpoint, where the subring is all of $k[t]$, the integral extension of step 3.2 is an isomorphism and no higher-degree gap survives, while for $n\ge2$ the degree gap $[n,2n-1]$ between the least element of $\mathfrak m$ and the least element of $\mathfrak m^2$ is exactly the source of the $n$ independent directions in steps 4.1 and 5.1, its endpoint being $2n-1$; every construction is canonical, the only choice-theoretic inputs being the explicitly declared suppliers [F9, F11] named in steps 3.1 and 3.2, while the tuple $a$ is determined by the rational point $p$, and no other simultaneous or dependent choice occurs; and no biconditional is asserted as a claim, the only equivalences used being the anti-equivalence of [F20], the irreducibility criterion of [F11] applied in one direction and the defining sheaf-surjectivity of [F23] applied in one direction, so the iff axes are vacuous here. [step 3.1, step 4.1, step 5.1, step 3.2, step 2.2, step 6.1, F28, algebra] ∎




## Source qualification

The source is Milne, *Algebraic Geometry* v6.10, Exercise 4-5 (printed
p. 99): "For each $n$, show that there is a curve $C$ and a point $P$ on $C$
such that the tangent space to $C$ at $P$ has dimension $n$ (hence $C$ cannot
be embedded in $\mathbb A^{n-1}$)." The book's solution (printed p. 223)
takes $C$ to be the union of the coordinate axes in $\mathbb A^n$ and adds:
"Of course, if you want $C$ to be irreducible, then this is more difficult."
This item supplies the irreducible witness $C=\operatorname{Spec}
k[t^n,\ldots,t^{2n-1}]$, the monomial curve used in the standard solution of
that harder variant, and proves the three claims directly from the library's
suppliers: the tangent space is computed intrinsically as the dual of
$\mathfrak m/\mathfrak m^2$ rather than through an embedded presentation, and
the closed-embedding obstruction is obtained from the Jacobian kernel bound
for the (hypothetical) affine quotient presentation. The source is cited for
the exercise and its coordination of the two cases; the irreducibility
argument, the degree-gap computation and the embedding obstruction are
carried out here, and the Axiom of Choice is declared and traced to the three
named suppliers in the boundary step.
