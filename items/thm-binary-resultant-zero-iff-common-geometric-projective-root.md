---
id: thm-binary-resultant-zero-iff-common-geometric-projective-root
kind: theorem
title: "The binary Sylvester resultant detects a common geometric projective root"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylvester-resultant-of-binary-forms, lem-binary-resultant-scaling-specialization-and-dehomogenization, def-algebraic-closure, def-algebraically-closed-field, def-projective-space-points, thm-universal-property-of-a-polynomial-ring, cor-square-matrix-invertible-iff-determinant-is-a-unit, lem-field-is-a-commutative-ring, thm-invertible-matrices-correspond-to-linear-isomorphisms, thm-coordinate-action-of-a-linear-map, thm-linear-kernel-image-and-injectivity, thm-rank-nullity, thm-dimension-of-a-linear-subspace, cor-factor-theorem-over-a-commutative-ring, thm-bezout-identity-for-polynomials, cor-polynomial-ring-over-a-domain-is-a-domain, thm-polynomial-degree-of-a-product-over-a-domain]
justified_by: []
aliases: []
landmark: true
short: "resultant vanishes iff a common projective root exists"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 7.28, p. 167"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Statement

Let $k$ be any field, let $K$ be any algebraic closure of $k$
([[def-algebraic-closure]]), and let $F,G\in k[X,Y]$ be homogeneous forms of
nominated positive degrees $d,e$, including the zero forms. Then
$\operatorname{Res}_{d,e}(F,G)=0$ in $k$ if and only if $F$ and $G$ vanish
together at some point of $\mathbf P^1(K)$ ([[def-projective-space-points]]).

No $k$-rational common point is asserted, and $K$ is supplied by hypothesis
rather than constructed here.

## Facts & Assumptions

**Given:** A field $k$, an algebraic closure $K$ of $k$, integers $d,e\ge1$, homogeneous forms $F,G\in k[X,Y]$ of nominated degrees $d,e$ (zero forms allowed), and the ordered monomial bases of the resultant definition.

[L1] $\operatorname{Res}_{d,e}(F,G)$ is the determinant of the matrix $M$ of the map $(A,B)\mapsto AF+BG$ from $k[X,Y]_{e-1}\oplus k[X,Y]_{d-1}$ to $k[X,Y]_{d+e-1}$ in the ordered descending monomial bases, with the $e$ $F$-block basis vectors first; domain and target therefore both have dimension $d+e$ ([[def-sylvester-resultant-of-binary-forms]]).

[L2] The resultant commutes with coefficientwise application of every unital ring homomorphism between commutative rings, and over a field $k$ with algebraically closed extension $K$ the common zeros in $\mathbf P^1(K)$ of forms of nominated positive degrees are exactly the points $[a:1]$ with $F(a,1)=G(a,1)=0$, together with $[1:0]$ when the $X^d$-coefficient of $F$ and the $X^e$-coefficient of $G$ both vanish, the zero forms included ([[lem-binary-resultant-scaling-specialization-and-dehomogenization]]).

[L3] $K$ is a field extension of $k$ and is algebraically closed ([[def-algebraic-closure]]), so every nonconstant polynomial over $K$ has a root in $K$ ([[def-algebraically-closed-field]]).

[L4] For commutative rings $R,S$ and every unital ring homomorphism $R\to S$ and every $s\in S$ there is a unique unital ring homomorphism $R[x]\to S$ extending it with $x\mapsto s$, sending $\sum_ia_ix^i$ to $\sum_i\varphi(a_i)s^i$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L5] A positive-sized square matrix over a commutative ring is invertible if and only if its determinant is a unit ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]), and the units of a field are exactly its nonzero elements ([[lem-field-is-a-commutative-ring]]).

[L6] A square matrix over a field is invertible exactly when its multiplication map is a linear isomorphism ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]), and in ordered bases a linear map acts on coordinates by $[T(v)]_{\mathcal C}=[T]^{\mathcal C}_{\mathcal B}[v]_{\mathcal B}$ ([[thm-coordinate-action-of-a-linear-map]]).

[L7] A linear map is injective if and only if its kernel is $\{0\}$ ([[thm-linear-kernel-image-and-injectivity]]); for a linear map on a finite-dimensional space $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]); and a subspace $U$ of a finite-dimensional $V$ satisfies $\dim U=\dim V$ if and only if $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[L8] Over a commutative ring, $f(a)=0$ if and only if $x-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]); and for $f,g$ over a field, not both zero, there are $A,B$ with $Af+Bg=\gcd(f,g)$, the monic gcd, which divides both $f$ and $g$ ([[thm-bezout-identity-for-polynomials]]).

[L9] If $R$ is an integral domain then $R[x]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), and for nonzero $f,g\in R[x]$ over a domain $\deg(fg)=\deg f+\deg g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 The inclusion $k\to K$ is a unital ring homomorphism, and an element of the field $k$ is zero exactly when its image in $K$ is zero, so $\operatorname{Res}_{d,e}(F,G)=0$ in $k$ if and only if its image in $K$ is zero; by the specialization clause of [L2] that image is $\operatorname{Res}_{d,e}(F_K,G_K)$, where $F_K,G_K\in K[X,Y]$ are the coefficientwise images, that is, the same forms viewed over $K$, homogeneous of the same nominated degrees. Evaluating $F$ and $G$ at a point of $\mathbf P^1(K)$ gives the same field elements as evaluating $F_K$ and $G_K$, so also the common-zero condition is unchanged. Hence it suffices to prove the equivalence for forms over the algebraically closed field $K$, and from here on we work over $K$. [L2, L3, suffices]

1.2 For $m\ge0$ let $\delta_m\colon K[X,Y]_m\to K[T]$ be the substitution $H\mapsto H(T,1)$, a $K$-linear map by [L4]. It carries the ordered monomial basis $X^m,X^{m-1}Y,\ldots,Y^m$ to the ordered list $T^m,T^{m-1},\ldots,1$, and it is bijective onto the polynomials of degree $\le m$, with two-sided inverse $p(T)\mapsto Y^mp(X/Y)$; it is also multiplicative in the sense $\delta_{m+n}(HH')=\delta_m(H)\delta_n(H')$. Writing $f:=\delta_d(F)$ and $g:=\delta_e(G)$, of degrees $\le d$ and $\le e$, the map $\Psi\colon(u,v)\mapsto uf+vg$ from $P_{\le e-1}\oplus P_{\le d-1}$ to $P_{\le d+e-1}$ (polynomials in $K[T]$ of the indicated degree bounds) has, in the bases transported by $\delta$, exactly the matrix $M$ of the resultant map $(A,B)\mapsto AF+BG$; hence $\operatorname{Res}_{d,e}(F,G)=\det M$ by [L1]. [L1, L4, algebra]

1.3 By [L6] the coordinates of $\Psi(u,v)$ are $M$ times the coordinates of $(u,v)$; coordinates are unique, so $\Psi$ is bijective if and only if the multiplication map $x\mapsto Mx$ on column vectors is bijective, which by [L6] holds if and only if $M$ is invertible. By [L5] and the fact that $K$ is a field, $M$ is invertible if and only if $\det M\ne0$. Since domain and target of $\Psi$ both have dimension $d+e$ by [L1], [L7] gives that $\Psi$ is bijective if and only if $\Psi$ is injective. Chaining these equivalences, $\operatorname{Res}_{d,e}(F,G)=0$ if and only if $\Psi$ is not injective. [L1, L5, L6, L7]

1.4 Suppose that $f$ and $g$ have a common root $\alpha\in K$; if $f=g=0$ every $\alpha$ qualifies, and then $\Psi$ is the zero map on a nonzero space by [L1], so it is not injective. Otherwise, by [L8] there are $f_1,g_1\in K[T]$ with $f=(T-\alpha)f_1$ and $g=(T-\alpha)g_1$, where $f_1=0$ if $f=0$ and $g_1=0$ if $g=0$; by [L9] and $\deg f\le d$, $\deg g\le e$ we get $\deg f_1\le d-1$ and $\deg g_1\le e-1$. Then $(g_1,-f_1)$ lies in $P_{\le e-1}\oplus P_{\le d-1}$ and is nonzero, because if $f\ne0$ then $f_1\ne0$ by [L9], and if $f=0$ then $g\ne0$ and $g_1\ne0$ by [L9]; and $\Psi(g_1,-f_1)=g_1f-f_1g=g_1(T-\alpha)f_1-f_1(T-\alpha)g_1=0$. So $\Psi$ is not injective. [L1, L8, L9, algebra]

1.5 Suppose that $f$ and $g$ have no common root in $K$, that they are not both zero, and that $\deg f=d$ or $\deg g=e$. By [L8] take $A,B$ with $Af+Bg=\gcd(f,g)$; the gcd is monic and divides both $f$ and $g$. If the gcd were not $1$, it would be nonconstant, hence by [L3] would have a root $\alpha\in K$, and by [L8] applied to the divisibility that $\alpha$ would be a common root of $f$ and $g$; so the gcd is $1$ and $Af+Bg=1$. Now let $\Psi(u,v)=uf+vg=0$. Multiplying $1=Af+Bg$ by $v$ gives $v=A(vf)+B(vg)=A(vf)-B(uf)=f(Av-Bu)$, so $f$ divides $v$; since $\deg v\le d-1$ and, when $\deg f=d$, a nonzero multiple $v=fw$ would have $\deg v=d+\deg w\ge d$ by [L9], we get $v=0$ in that case. Symmetrically, multiplying $1=Af+Bg$ by $u$ gives $u=g(Bu-Av)$, so $g$ divides $u$; since $\deg u\le e-1$ and, when $\deg g=e$, a nonzero multiple $u=gw$ would have $\deg u=e+\deg w\ge e$ by [L9], we get $u=0$ in that case. At least one of the two cases holds. If both cases hold, the two conclusions just displayed give $u=v=0$. If only $\deg f=d$ holds, then $v=0$ and therefore $\Psi(u,0)=uf=0$, which forces $u=0$ because $K[T]$ is a domain by [L9] and $f\ne0$; if only $\deg g=e$ holds, the same argument with the roles of $f$ and $g$ interchanged gives $u=0$, and then $vg=0$ forces $v=0$ because $g\ne0$. Hence $(u,v)=(0,0)$ and $\Psi$ is injective. [L3, L8, L9, cases: deg f=d or deg g=e, algebra]

2.1 Suppose the $X^d$-coefficient of $F$ and the $X^e$-coefficient of $G$ both vanish. In the homogeneous expansion only the pure terms $X^d$ and $X^e$ avoid a factor $Y$, so $Y$ divides $F$ and $Y$ divides $G$; write $F=YF'$ and $G=YG'$ with $F',G'$ homogeneous of degrees $d-1$ and $e-1$ (the zero polynomials allowed). Then $f=F'(T,1)$ and $g=G'(T,1)$, so $\Psi\bigl(G'(T,1),-F'(T,1)\bigr)=G'(T,1)F'(T,1)-F'(T,1)G'(T,1)=0$: if $(F,G)\ne(0,0)$ this displays a nonzero kernel vector because $F'$ or $G'$ is nonzero, and if $F=G=0$ then $\Psi$ is the zero map on a nonzero space by [L1]. Either way $\Psi$ is not injective, so $\operatorname{Res}_{d,e}(F,G)=0$ by 1.3; and conversely $[1:0]$ is a common zero of $F$ and $G$ in $\mathbf P^1(K)$ by the chart clause of [L2], because the two top coefficients vanish. Thus in this case the resultant vanishes and a common projective zero exists. [L1, L2, step 1.3, algebra]

2.2 Suppose now that the $X^d$-coefficient of $F$ or the $X^e$-coefficient of $G$ is nonzero, so that $\deg f=d$ or $\deg g=e$ and $f,g$ are not both zero. If $f$ and $g$ have a common root in $K$, then $\operatorname{Res}_{d,e}(F,G)=0$ by 1.4 and 1.3; if they do not, then $\Psi$ is injective by 1.5 and $\operatorname{Res}_{d,e}(F,G)\ne0$ by 1.3. Hence $\operatorname{Res}_{d,e}(F,G)=0$ if and only if $f,g$ have a common root in $K$, and by the chart clause of [L2] the common roots of $f$ and $g$ are exactly the affine common zeros $[a:1]$, the point $[1:0]$ being excluded because it is a common zero only when both top coefficients vanish, which is not the case here. So $\operatorname{Res}_{d,e}(F,G)=0$ if and only if $F$ and $G$ vanish together at a point of $\mathbf P^1(K)$. [L2, step 1.3, step 1.4, step 1.5]

3.1 Every pair $(F,G)$ satisfies the hypothesis of 2.2 or the hypothesis of 2.1, and in both cases $\operatorname{Res}_{d,e}(F,G)=0$ is equivalent to the existence of a common zero in $\mathbf P^1(K)$, which proves the equivalence over the algebraically closed field $K$; undoing the coefficient extension of 1.1 gives the equivalence over the original field $k$. No $k$-rational point was produced anywhere: the points obtained are points of $\mathbf P^1(K)$ over the supplied algebraic closure. [step 1.1, step 2.1, step 2.2] ∎
