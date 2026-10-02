---
id: ex-ordinary-node-plane-curve-germ
kind: example
title: "An ordinary node has two smooth branches"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-irreducible-and-prime-elements-in-a-domain
  - def-irreducible-hypersurface-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - def-unique-factorisation-domain
  - def-weierstrass-polynomial
  - lem-prepared-factorizations-and-irreducibility
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-holomorphic-implicit-function-theorem
  - thm-local-irreducible-decomposition-hypersurface-germ
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.2 smooth hypersurfaces as graphs (pp. 175–178); §6.4 unique factorisation of holomorphic germs (p. 182); Proposition 6.7.3 irreducible decomposition of a hypervariety germ (p. 194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (6.6) principal defining equations and irreducible components of a codimension-one germ (pp. 106–107)."
verification:
  precheck: pass
---

## Example

In $\mathbb C^2$ with coordinates $(x,y)$, let

$$f=y^2-x^2(1+x)=y^2-x^2-x^3 .$$

Near the origin the reduced curve $X=Z(f)$ is the union of the two smooth
branches $y=\pm x\sqrt{1+x}$, whose equations are the Weierstrass polynomials
$y\mp xs(x)$ for the holomorphic unit square root $s$ of $1+x$ with $s(0)=1$.
The branches meet only at the origin, where they have distinct tangent
directions $(1,\pm1)$, and the origin is the only singular point of $X$ near
$0$; the germ is the ordinary node. Each branch carries the convergent
parametrisation $t\mapsto(t,\pm ts(t))$ with first coordinate $t$.

## Facts & Assumptions

**Given:** The germ $f=y^2-x^2(1+x)\in\mathcal O_{\mathbb C^2,0}$ and its zero germ $X=(Z(f),0)$.

[F1] Holomorphic implicit function theorem: if $F$ is holomorphic near $(x_0,w_0)$ with $F(x_0,w_0)=0$ and $\partial_wF(x_0,w_0)\ne0$, then on a product of polydiscs around $(x_0,w_0)$ the zero set of $F$ is the graph $w=\varphi(x)$ of a unique holomorphic function $\varphi$ with $\varphi(x_0)=w_0$ ([[thm-holomorphic-implicit-function-theorem]]).

[F2] A Weierstrass polynomial of degree $d$ in the last variable is monic of degree $d$ with lower coefficients in the preceding germ ring vanishing at the base point; a germ regular in the last variable of order $d$ is a unit times such a polynomial ([[def-weierstrass-polynomial]], [[thm-weierstrass-preparation-theorem]]).

[F3] If $f=gh$ in the germ ring and $f$ is regular in the last variable, then $g,h$ are regular and the product of their Weierstrass polynomials is the Weierstrass polynomial of $f$; in particular the degrees add, so a Weierstrass polynomial of degree $1$ is not a product of two nonunits ([[lem-prepared-factorizations-and-irreducibility]]).

[F4] For a reduced germ $f$ with factorisation $f=u\,q_1\cdots q_r$ into pairwise nonassociate irreducibles, the zero germ is $Z(f)=\bigcup_iZ(q_i)$, the germs $Z(q_i)$ are exactly the irreducible components of $Z(f)$, pairwise distinct and pairwise incomparable, and $f$ is a reduced germ exactly when it is not divisible by the square of an irreducible; an irreducible germ is reduced ([[thm-local-irreducible-decomposition-hypersurface-germ]], [[def-irreducible-hypersurface-germ]], [[def-reduced-holomorphic-germ-for-hypersurface]]).

[F5] A point $q$ of a reduced hypersurface germ is regular exactly when the differential of a local reduced equation is nonzero at $q$, equivalently exactly when the germ is a holomorphic hypersurface graph near $q$; for a reduced germ $h$ the vanishing ideal of $Z(h)$ is $(h)$ ([[def-regular-singular-point-analytic-hypersurface]], [[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]).

[F6] The germ ring is a unique factorisation domain: factorisations into irreducibles are unique up to order and associates, and a nonzero nonunit is reduced exactly when all exponents in its factorisation equal $1$ ([[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]], [[def-irreducible-and-prime-elements-in-a-domain]]).

**Proof technique:** direct — construct the unit square root with the implicit function theorem, split the equation into its two degree-one Weierstrass factors, and locate the singular point with the gradient criterion.

## Verification

1.1 Apply [F1] to $F(x,w)=w^2-(1+x)$ at the point $(x_0,w_0)=(0,1)$: $F(0,1)=0$ and $\partial_wF(0,1)=2\ne0$, so there is a holomorphic function $s$ on a neighbourhood of $0$ with $s(0)=1$ and $s(x)^2=1+x$ identically. In particular $s$ is a unit of $\mathcal O_{\mathbb C,0}$ and $s(x)\ne0$ for $|x|$ small. [given, F1, construct]

2.1 Put $g_\pm:=y\mp xs(x)$, the two germs determined by the unit $s$ of step 1.1; each is a monic polynomial of degree $1$ in $y$ with coefficient $\mp xs(x)$ in $\mathcal O_{\mathbb C,0}$ vanishing at $x=0$. Each $g_\pm$ is irreducible in $\mathcal O_{\mathbb C^2,0}$. Suppose $g_+=gh$ with $g,h$ nonunits. Since $g_+$ is regular in $y$ of order $1$, [F3] makes $g$ and $h$ regular with Weierstrass polynomials $G,H$ of positive degrees satisfying $W_{g_+}=GH$; but $W_{g_+}=g_+$ has degree $1$, while $\deg G+\deg H\ge2$, a contradiction. The same argument applies to $g_-$. [given, F2, F3, algebra]

2.2 With $s$ as in step 1.1, $f=y^2-x^2s(x)^2=(y-xs(x))(y+xs(x))$. The two factors $g_\pm:=y\mp xs(x)$ are Weierstrass polynomials of degree $1$ in $y$: each is monic of degree $1$ with its coefficient $\mp xs(x)$ lying in $\mathcal O_{\mathbb C,0}$ and vanishing at $x=0$. The germ $f$ is itself a Weierstrass polynomial of degree $2$: it is monic of degree $2$ in $y$, its coefficients $-x^2(1+x)$ vanish at the origin, and $f(0,y)=y^2$, so it is regular in $y$ of order $2$ and is its own Weierstrass preparation by [F2]. [step 1.1, F2, algebra]

2.3 The zero germs of $g_+$ and $g_-$ are distinct: $Z(g_+)$ is the graph of $\varphi_+(x)=xs(x)$ and $Z(g_-)$ is the graph of $\varphi_-(x)=-xs(x)$ over the $x$-coordinate. Since $s(x)\ne0$ for $|x|$ small by step 1.1, the two graphs intersect exactly where $xs(x)=0$, that is, only at $x=0$, and for every small $x\ne0$ the values $xs(x)$ and $-xs(x)$ differ; hence the two set germs at the origin are distinct, and neither is contained in the other. [step 1.1, algebra]

3.1 The germ $f$ is reduced, and $X=Z(f)$ has exactly the two irreducible components $Z(g_+)$ and $Z(g_-)$. Indeed $f=g_+g_-$ exhibits $f$ as a product of two nonassociate irreducibles, each occurring once; by the uniqueness of factorisation in the UFD [F6], no irreducible germ divides $f$ twice, so $f$ is reduced, and the factorisation of a reduced germ into pairwise nonassociate irreducibles has all exponents one and is unique up to order and associates. Applying the decomposition statement [F4] to $f=g_+g_-$ gives $X=Z(g_+)\cup Z(g_-)$ with $Z(g_+)$ and $Z(g_-)$ the two irreducible components of $X$. [step 2.1, step 2.3, F4, F6]

3.2 Each branch is a holomorphic hypersurface graph and carries an injective convergent parametrisation. For $|t|$ small, $\gamma_+(t)=(t,\,ts(t))$ is holomorphic with $\gamma_+(\Delta)=Z(g_+)\cap\{|x|<\rho\}$ for a suitable radius $\rho>0$, since $y-xs(x)=0$ is exactly the graph $y=xs(x)$; similarly $\gamma_-(t)=(t,-ts(t))$ has image $Z(g_-)\cap\{|x|<\rho\}$. Both maps are injective because their first coordinate is $t$, and both are restrictions of the holomorphic function $s$ of step 1.1, hence convergent. Every point of each branch is therefore regular as a point of that branch by [F5]. At a point other than the origin, step 2.3 separates the two graphs, so $X$ locally equals the branch through that point and is regular there. This does not assert regularity of their union at the origin. [step 1.1, step 2.2, F5, construct]

4.1 The origin is the only singular point of $X$ near $0$. By step 3.1 the reduced defining germ of $X$ is $f$, and

$$df=\bigl(-2x(1+x)-x^2,\;2y\bigr)=\bigl(-x(2+3x),\;2y\bigr)$$

vanishes at the origin, so the origin is singular by [F5]. Conversely let $q=(x,y)\in X$ with $q\ne0$; by step 3.1 the point lies on $Z(g_+)$ or on $Z(g_-)$, and by step 2.3 that forces $x\ne0$. If $q=(x,xs(x))$ with $x\ne0$ small, then $df(q)=(-x(2+3x),\,2xs(x))$ has $2xs(x)\ne0$ because $x\ne0$ and $s(x)\ne0$; the same computation with $-xs(x)$ gives $df(q)\ne0$ on the other branch. At such a point the other factor $g_\mp$ is nonvanishing, so $f$ is a unit times the local graph equation $g_\pm$; hence $f$ is a local reduced equation there. Thus every point of $X$ other than the origin is regular by [F5], and the two branches meet there with distinct tangent directions $(1,\pm1)$, since $s(0)=1$ makes their linear parts $y=\pm x$. [step 3.1, step 3.2, F5, algebra]

5.1 Steps 2.1 to 4.1 establish the assertions: $y^2-x^2(1+x)$ is a reduced equation of $X$ whose irreducible components are the two smooth branches $y=\pm x\sqrt{1+x}$ described by the unit square root $s$ of $1+x$; the origin is their only intersection and the only singular point of the germ, with distinct tangent directions, so $X$ is an ordinary node; and each branch carries the convergent parametrisation $t\mapsto(t,\pm ts(t))$ with first coordinate $t$. [step 3.2, step 4.1] ∎
