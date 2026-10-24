---
id: cex-flat-not-smooth-nodal-family
kind: counterexample
title: "A flat family with a nodal special fibre is not smooth at the node"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - lem-flatness-affine-local-source-target
  - def-smooth-morphism-schemes
  - def-ag-geometrically-regular-algebra-and-fibre
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - cor-polynomial-ring-over-a-field-is-a-pid
  - thm-dimension-at-most-embedding-dimension
  - def-embedding-dimension-and-regular-local-ring
  - thm-affine-fibre-product-tensor-ring
  - thm-right-exactness-of-tensor-products
  - def-locally-finite-presentation-morphism
  - def-finitely-presented-module-and-algebra
  - def-axiom-of-choice
  - def-krull-dimension-of-a-ring
  - cor-dimension-of-a-quotient-as-chains-above-an-ideal
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.25 (flatness) and Section 29.34 (smoothness)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "J. S. Milne, Algebraic Geometry v6.10, §4b Definition 4.9 and Example 4.10"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
      locator: "Definition 4.9 and Example 4.10, printed pp. 83–84"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field with
$\operatorname{char}k\ne2$, let
$$B=k[t,x,y]/(y^2-x^2(x+1)-t),$$
and let $f:\operatorname{Spec}B\to\operatorname{Spec}k[t]$ be the morphism
induced by the structure map $k[t]\to B$.

1. $f$ is flat, and $f$ is locally of finite presentation.
2. The fibre of $f$ over the prime $(t)\in\operatorname{Spec}k[t]$ is
   $\operatorname{Spec}A$ with $A=k[x,y]/(y^2-x^2(x+1))$, and the image of the
   prime $\mathfrak q=(t,x,y)\subseteq B$ is the prime $\mathfrak m=(x,y)$ of
   $A$.
3. The local ring $A_{\mathfrak m}$ is not regular: it has dimension one and
   embedding dimension two.
4. Consequently the fibre is not geometrically regular at the image of
   $\mathfrak q$, and $f$ is **not smooth** at $\mathfrak q$, although $f$ is
   flat at $\mathfrak q$.

Thus flatness alone does not force smoothness: the family
$y^2=x^2(x+1)+t$ is flat and its special fibre has an ordinary node at the
origin. The hypothesis $\operatorname{char}k\ne2$ is used only to identify the
two distinct tangent directions; the non-smoothness statement is proved from
the dimension and embedding-dimension computation, not from a picture.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is flat at $x\in X$ when $\mathcal O_{X,x}$ is flat over $\mathcal O_{S,f(x)}$ via the local ring map, and $f$ is flat when this holds at every point; flatness is a germ condition ([[def-flat-morphism-schemes]]).

[F2] For affine opens $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$, the morphism is flat at every point of $U$ if and only if $B$ is flat over $A$, and for $x\in U$ corresponding to $\mathfrak q$ over $\mathfrak p$ it is flat at $x$ if and only if $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$ ([[lem-flatness-affine-local-source-target]]).

[F3] For every field $F$ the polynomial ring $F[t]$ is a principal ideal domain ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

[F4] Over a principal ideal domain an $R$-module is flat if and only if it is torsion-free ([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]).

[F5] Assume AC. Every nonzero commutative Noetherian local ring $T$ satisfies $\dim T\le\operatorname{edim}T<\infty$ ([[thm-dimension-at-most-embedding-dimension]]).

[F6] For a nonzero commutative Noetherian local ring $(T,\mathfrak n)$, the embedding dimension is $\operatorname{edim}T=\dim_{\kappa}(\mathfrak n/\mathfrak n^2)$ and $T$ is regular exactly when $\dim T=\operatorname{edim}T$; the cotangent space is the $\kappa$-vector space $\mathfrak n/\mathfrak n^2$ ([[def-embedding-dimension-and-regular-local-ring]]).

[F7] Let $R\to S$ be a ring map with $S$ finitely presented over $R$, let $\mathfrak p=\mathfrak q\cap R$ and let $\kappa(\mathfrak p)$ be the residue field. The fibre over $\mathfrak p$ is $S\otimes_R\kappa(\mathfrak p)$, and it is geometrically regular at $\mathfrak q$ when for **every** field extension $K/\kappa(\mathfrak p)$ and every prime of $(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ over the image of $\mathfrak q$ the local ring is regular. Taking $K=\kappa(\mathfrak p)$, geometric regularity at $\mathfrak q$ forces regularity of the localisation of $S\otimes_R\kappa(\mathfrak p)$ at the image of $\mathfrak q$ ([[def-ag-geometrically-regular-algebra-and-fibre]]).

[F8] A morphism $f:X\to S$ is smooth at $x$ exactly when it is locally of finite presentation at $x$, flat at $x$, and the scheme-theoretic fibre at $f(x)$ is geometrically regular at $x$; hence failure of geometric regularity of the fibre at $x$ implies failure of smoothness at $x$ ([[def-smooth-morphism-schemes]]).

[F9] For ring maps $A\to B$ and $A\to A'$ there is a canonical isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}A'\cong\operatorname{Spec}(B\otimes_AA')$, and $-\otimes_AA'$ is right exact, so for $A=k[t]$, $B=k[t,x,y]/(F)$ and the residue map $k[t]\to k$, $t\mapsto0$, one has $B\otimes_{k[t]}k\cong k[x,y]/(\bar F)$ ([[thm-affine-fibre-product-tensor-ring]], [[thm-right-exactness-of-tensor-products]]).

[F10] A morphism is locally of finite presentation when it has affine charts on which the ring map is a finitely presented algebra map ([[def-locally-finite-presentation-morphism]]); a polynomial algebra in finitely many variables over a ring is a finitely presented algebra and a quotient of a finitely presented algebra by a finitely generated ideal is finitely presented ([[def-finitely-presented-module-and-algebra]]).

[F11] The Krull dimension of a nonzero commutative ring is the supremum of the lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]), and for an ideal $I$ of $R$ with $R/I\ne0$, $\dim(R/I)$ is the supremum of lengths of strict chains of primes of $R$ containing $I$ ([[cor-dimension-of-a-quotient-as-chains-above-an-ideal]]).

[F12] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F13] For a field $k$ the polynomial rings $k[x]$ and $k[x,y]$ are unique factorisation domains, and in a unique factorisation domain an irreducible element generates a prime ideal ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]).

[F14] For a plane curve, a multiplicity-two point whose tangent cone consists of two distinct lines is an ordinary node; Example 4.10 identifies $Y^2=X^2(X+1)$ as a node from the tangent cone $Y^2-X^2=(Y-X)(Y+X)$ (Milne, *Algebraic Geometry* v6.10, §4b, Definition 4.9 and Example 4.10, printed pp. 83–84).

## Proof

**Proof technique:** direct.

1.1 We first identify the total ring. Let $\varphi:k[t,x,y]\to k[x,y]$ be the $k$-algebra map with $\varphi(t)=h:=y^2-x^2(x+1)$, $\varphi(x)=x$, $\varphi(y)=y$. Since $F=y^2-x^2(x+1)-t=h-t$ has unit leading coefficient $-1$ and degree one as a polynomial in $t$ over $k[x,y]$, division of any $p\in k[t,x,y]$ by $F$ gives $p=q\cdot F+r$ with $r\in k[x,y]$ and $\varphi(p)=r$; hence $\ker\varphi=(F)$ and $\varphi$ induces an isomorphism $B\cong k[x,y]$ under which the class of $t$ is $h$. For any nonzero $p(t)\in k[t]$ of degree $d$ with leading coefficient $c_d$, the polynomial $p(h)$ has degree $2d$ in $y$ and leading coefficient $c_d$, so $p(h)\ne0$. Thus $B$ is a domain and $k[t]\to B$ is injective; also $h\in(x,y)^2$. [F10, algebra]

2.1 The special fibre. Under the isomorphism of step 1.1 the ideal $tB$ corresponds to $hk[x,y]$, so by [F9] the fibre over the prime $(t)$ of $k[t]$ is $B\otimes_{k[t]}k\cong B/tB\cong k[x,y]/(h)$. The prime $\mathfrak q=(t,x,y)\subseteq B$ corresponds to the maximal ideal $(x,y)\subseteq k[x,y]$ (as $h\in(x,y)$), and its image in the fibre is $\mathfrak m=(x,y)A$, where $A:=k[x,y]/(h)$. [F9, step 1.1]

2.2 Flatness. The ring $k[t]$ is a principal ideal domain by [F3]. If $p\in k[t]$ is nonzero and $b\in B$ satisfies $p\cdot b=0$, then under the identification $B=k[x,y]$ of step 1.1 this reads $p(h)b=0$ in the domain $k[x,y]$, so $b=0$ because $p(h)\ne0$ (step 1.1); hence $B$ is torsion-free over $k[t]$. By [F4] $B$ is flat over $k[t]$, so $f$ is flat at every point by the affine-local criterion [F2], which rests on the germwise definition of flatness [F1]. [F1, F2, F3, F4, step 1.1]

2.3 Finite presentation. The $k[t]$-algebra $k[t,x,y]$ is a polynomial algebra, hence finitely presented by [F10], and $B$ is its quotient by the ideal generated by the single element $F$, hence $B$ is a finitely presented $k[t]$-algebra; therefore $f$ is locally of finite presentation by [F10]. [F10, step 1.1]

2.4 We show that $h$ is irreducible in $k[x,y]$, so that $(h)$ is a prime of $k[x,y]$ contained in $(x,y)$. Suppose $h=pq$ with $p,q\in k[x,y]$ nonunits; view $p,q$ as polynomials in $y$ over $k[x]$. Since the coefficient of $y^2$ in $h$ is $1$, the $y$-degrees of $p$ and $q$ add to two and their leading coefficients multiply to $1$, hence are units of $k[x]$, i.e. nonzero constants. If one factor had $y$-degree zero it would be a nonunit of $k[x]$ contributing that nonunit to the leading coefficient of the other factor, impossible; so after absorbing constants $h=(y-\alpha)(y-\beta)$ with $\alpha,\beta\in k[x]$. Then $\alpha+\beta=0$ and $\alpha\beta=-x^2(x+1)$, so $\beta^2=x^2(x+1)$; but $\beta^2$ has even degree in $x$ while $x^2(x+1)$ has degree three, a contradiction. Hence $h$ is irreducible, so $(h)$ is a prime of $k[x,y]$ by [F13], and it lies in $(x,y)$ because $h\in(x,y)^2$. Its degree-two initial form at the origin is $y^2-x^2=(y-x)(y+x)$; the factors are distinct because $\operatorname{char}k\ne2$, so the origin is an ordinary node by [F14]. [F13, F14, step 1.1]

3.1 Cotangent and dimension of the special fibre at the origin. Put $S:=k[x,y]_{(x,y)}$ and $A_{\mathfrak m}=S/(h)S$ (step 2.1). The ambient local ring $S$ has cotangent space with $k$-basis the classes of $x,y$: every element of $S$ is $f/g$ with $g(0)\ne0$, so it is congruent modulo $(x,y)S$ to the constant term $f(0)/g(0)$, and congruent modulo $(x,y)^2S$ to $f(0)/g(0)$ plus the linear part of $f/g$. Hence $\operatorname{edim}S=2$ and by [F5], $\dim S\le2$; the chain $(0)\subsetneq(x)S\subsetneq(x,y)S$ shows $\dim S\ge2$, so $\dim S=2$. [F5, F6, step 2.1]

3.2 In $A=k[x,y]/(h)$ we have $h=y^2-x^2(x+1)\in\mathfrak m^2$; hence $(h)+(x,y)^2=(x,y)^2$ and $A/(x,y)^2\cong k[x,y]/(x,y)^2$, so $\mathfrak m/\mathfrak m^2$ has $k$-basis the classes of $x,y$ and $\operatorname{edim}A_{\mathfrak m}=2$ by [F6]. [F6, step 2.1]

4.1 Dimension of the fibre at the origin. The chain $(0)\subsetneq\mathfrak m A_{\mathfrak m}$ shows $\dim A_{\mathfrak m}\ge1$, since $A_{\mathfrak m}$ is a domain by step 2.4 and $x$ is a nonzero element of its maximal ideal. If $\dim A_{\mathfrak m}\ge2$, then, since $A_{\mathfrak m}$ is a local domain by step 2.4, there is a strict chain $(0)\subsetneq\overline P_0\subsetneq\overline P_1$ in $A_{\mathfrak m}$. Lifting to $k[x,y]$ gives primes $(h)\subsetneq P_0\subsetneq P_1\subseteq(x,y)$. Their localizations yield the strict chain $(0)\subsetneq(h)S\subsetneq(P_0)S\subsetneq(P_1)S$ in $S=k[x,y]_{(x,y)}$, of length three, contradicting $\dim S=2$ from step 3.1. Hence $\dim A_{\mathfrak m}=1$. [F11, step 3.1, step 2.4]

5.1 Non-regularity and failure of smoothness. By steps 3.2 and 4.1 the local ring $A_{\mathfrak m}$ is a nonzero Noetherian local ring with $\dim A_{\mathfrak m}=1\ne2=\operatorname{edim}A_{\mathfrak m}$, so it is not regular by [F6]. If the fibre were geometrically regular at the image of $\mathfrak q$, then by the case $K=\kappa(\mathfrak p)=k$ of [F7] the localisation $A_{\mathfrak m}$ would be regular; it is not, so the fibre is not geometrically regular at the image of $\mathfrak q$. By [F8] the morphism $f$ is not smooth at $\mathfrak q$, even though by step 2.2 it is flat at $\mathfrak q$ and by step 2.3 locally of finite presentation there. Taking $K=k$ in the quantifier of [F7] is legitimate because $k$ is a field extension of $\kappa((t))=k$; no further choice is made. The Axiom of Choice [F12] is assumed in the Statement and is used exactly through the bound [F5] in step 3.1. [F5, F7, F8, F12, step 2.2, step 3.2, step 4.1] $\square$
