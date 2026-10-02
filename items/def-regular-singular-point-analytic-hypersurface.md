---
id: def-regular-singular-point-analytic-hypersurface
kind: definition
title: "Regular and singular points of an analytic hypersurface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-holomorphic-germ-ring-and-its-maximal-ideal
  - def-reduced-holomorphic-germ-for-hypersurface
  - lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
  - lem-reduced-prepared-hypersurface-remains-reduced-near-germ
  - lem-square-free-reduction-of-holomorphic-germ
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-holomorphic-implicit-function-theorem
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-identity-theorem-in-several-complex-variables
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.6–6.7 defining equations and decomposition of a hypervariety germ (pp. 188–194); §6.2 smooth hypersurfaces as graphs (pp. 175–178)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19)–(4.21) preparation, discriminant and vanishing ideal (pp. 95–96); II (6.6) principal equation of a codimension-one germ (pp. 106–107)."
verification:
  precheck: n/a
---

## Definition

Fix $n\ge1$ and a complex-analytic hypersurface germ $X$ at a point
$p\in\mathbb C^n$, and fix a defining equation $f$ of $X$ together with a
representative of $f$ on a connected open neighbourhood $U$ of $p$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]). We keep the
symbol $X$ for the corresponding representative zero set in $U$. Since the
defining germ is nonzero, $f$ is not identically zero on $U$. The identity
theorem implies that its germ at every $q\in U$ is nonzero
([[thm-identity-theorem-in-several-complex-variables]]); at $q\in X$ it is
also a nonunit. Thus $(X,q)$ is a hypersurface germ at every point under
consideration.

For a point $q\in X$, write $I_q(X)$ for the vanishing ideal of $X$ at $q$:
the ideal of germs $g\in\mathcal O_{\mathbb C^n,q}$ vanishing on $X$ near $q$.
A **local reduced equation** of $X$ at $q$ is a germ
$f_q\in\mathcal O_{\mathbb C^n,q}$ such that

$$(f_q)=I_q(X)\qquad\text{and}\qquad f_q\ \text{is reduced at }q .$$

Such equations exist and are well defined by the following two observations.
First, taking the square-free reduction of the germ of any defining equation
of $(X,q)$ produces a reduced germ generating $I_q(X)$, by the principal
vanishing-ideal lemma applied with base point $q$ and by the square-free
reduction lemma
([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]],
[[lem-square-free-reduction-of-holomorphic-germ]]). Second, if $f_q$ and
$f'_q$ both generate the nonzero principal ideal $I_q(X)$ in the germ ring,
then $f_q=uf'_q$ and $f'_q=vf_q$ for germs $u,v$, so $uv=1$ by cancellation in
the integral domain $\mathcal O_{\mathbb C^n,q}$
([[thm-holomorphic-germ-ring-is-a-ufd]]); thus $u$ and $v$ are units and
any two local reduced equations differ by a unit
([[prop-units-in-the-holomorphic-germ-ring]]).

A point $q\in X$ is a **regular point** of $X$ when

$$df_q(q)\ne0$$

for one — equivalently, by the unit relation just noted, for every — local
reduced equation $f_q$ of $X$ at $q$; here $df_q(q)$ is the complex
differential of the germ $f_q$ at its own base point $q$. A point that is not
regular is a **singular point** of $X$. The **regular locus** $\operatorname{Reg}(X)$
and the **singular locus** $\operatorname{Sing}(X)$ are the subsets of $X$
consisting of its regular and of its singular points.

## Remarks

**Independence of all choices.** Let $f_q$ and $f'_q$ be local reduced
equations of $X$ at $q$, with $f'_q=uf_q$ for a unit $u$
([[prop-units-in-the-holomorphic-germ-ring]]). Since $f_q(q)=0$, the product
rule gives

$$df'_q(q)=u(q)\,df_q(q)+f_q(q)\,du(q)=u(q)\,df_q(q),$$

and $u(q)\ne0$, so $df'_q(q)$ vanishes exactly when $df_q(q)$ does. Hence
regularity at $q$ depends only on the set germ $X$: neither the global defining
equation of $X$, nor the representative neighbourhood, nor the chosen local
reduced equation enters the condition. In particular, if $X$ is described near
$p$ by a reduced defining germ $f$ of
[[def-complex-analytic-hypersurface-germ-and-reduced-equation]], then a local
reduced equation at $q$ is the square-free reduction of the germ of $f$ at
$q$, and the differential criterion can be tested with that germ.

**A fixed equation near the base point.** Let $f$ be reduced at $p$. Center at
$p$ and choose an invertible complex-linear map $T$ so that the germ
$F(z):=f(p+Tz)$ is regular in the last variable
([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]]).
Weierstrass preparation gives $F=uW$ for a unit $u$ and a Weierstrass
polynomial $W$ ([[thm-weierstrass-preparation-theorem]]). The coordinate
pullback is a ring isomorphism preserving irreducibles, so $F$ is reduced.
If an irreducible square divided $W$, it would also divide $F=uW$; thus $W$
is reduced at the origin. Shrink so that $F=uW$ holds and $u$ is nowhere
zero, hence the zero sets agree. After further shrinking to a product
neighbourhood $V\times D$, the nearby-reduced lemma says that for every
$q\in Z(W)\cap(V\times D)$ the germ of $W$ at $q$ is
reduced ([[lem-reduced-prepared-hypersurface-remains-reduced-near-germ]]), and
that germ generates $I_q(Z(W))$ by the principal vanishing-ideal lemma. So on
that neighbourhood one fixed equation $W$ is a local reduced equation at every
point of the hypersurface, and

$$\operatorname{Sing}(X)=\{q\in Z(W)\cap(V\times D):\ dW(q)=0\}$$

in the prepared coordinates. For $n\ge2$ the condition $dW(q)=0$ is the system
$W(q)=0$, $\partial_{z_1}W(q)=\cdots=\partial_{z_n}W(q)=0$ of holomorphic
equations in $q$.

**Biholomorphic invariance.** Let $\Phi:U\to U'$ be a biholomorphism of open
sets and put $X'=\Phi(X\cap U)$ near $q'=\Phi(q)$. Since $\Phi$ induces a ring
isomorphism $\mathcal O_{\mathbb C^n,q'}\to\mathcal O_{\mathbb C^n,q}$,
$g\mapsto g\circ\Phi$, which preserves units and products, the local reduced
equations of $X$ at $q$ correspond to those of $X'$ at $q'$: if $f_q$ is one
for $X$, then $f_q\circ\Phi^{-1}$ generates $I_{q'}(X')$ and is reduced. By the
chain rule

$$d(f_q\circ\Phi^{-1})(q')=df_q(q)\circ\bigl(D\Phi(q)\bigr)^{-1},$$

and since $D\Phi(q)$ is invertible the left side vanishes exactly when
$df_q(q)$ does. Hence regularity of points is a biholomorphic invariant; in
particular, changing to the coordinates of the previous paragraph does not
change the regular and singular loci. For $n=1$, near each $q\in X$ the zero germ is the singleton $\{q\}$;
the square-free reduction is a unit multiple of $\zeta\mapsto\zeta-q$,
whose differential is $1$. Thus every such point is regular.

**Equivalence with a holomorphic graph.** A subset $X$ of a domain in
$\mathbb C^n$ is a **holomorphic hypersurface graph** near $q$ when, after
relabelling the coordinates and shrinking to a product $A\times B\subseteq
\mathbb C^{n-1}\times\mathbb C$ of polydiscs around $q$, there is a holomorphic
function $\varphi:A\to B$ with

$$X\cap(A\times B)=\{(z',z_n):z_n=\varphi(z')\}.$$

The point $q\in X$ is regular if and only if $X$ is a holomorphic hypersurface
graph near $q$. For $n=1$ this follows from the singleton description above,
viewed as a graph over $\mathbb C^0$. For $n\ge2$, if $df_q(q)\ne0$, some partial derivative of $f_q$ at
$q$ is nonzero; relabelling so that $\partial_nf_q(q)\ne0$, the holomorphic
implicit function theorem applied to $f_q$ at $q$ gives polydiscs $A,B$ and a
holomorphic $\varphi:A\to B$ with $f_q(z',z_n)=0$ equivalent to
$z_n=\varphi(z')$ on $A\times B$
([[thm-holomorphic-implicit-function-theorem]]). Since the zero germ of $f_q$
is $X$ at $q$, this exhibits $X$ as a graph near $q$. Conversely, suppose that
$X\cap(A\times B)$ is the graph of $\varphi$, and put
$G(z',z_n):=z_n-\varphi(z')$. Then $G$ is holomorphic on $A\times B$,
$Z(G)=X$ there, and $G(q)=0$. Its linear part at $q$ is
$dz_n-\sum_{i<n}\partial_i\varphi(q')\,dz_i\ne0$, so $G\notin\mathfrak m_q^2$;
a product of two nonunit germs lies in $\mathfrak m_q^2$, hence $G$ is not a
product of two nonunits, that is, $G$ is irreducible in
$\mathcal O_{\mathbb C^n,q}$. An irreducible germ is reduced: if
$r^2\mid G$ with $r$ irreducible, then $G=r\cdot(rh)$ with both factors
nonunits, contradicting irreducibility. Therefore $G$ is a reduced germ whose
zero germ is $X$ at $q$, so $I_q(X)=I_q(Z(G))=(G)$ by the principal
vanishing-ideal lemma. Comparing with a local reduced equation $f_q$ of $X$,
we get $f_q=uG$ for a unit $u$, and since $G(q)=0$,

$$df_q(q)=u(q)\,dG(q)\ne0,$$

because $\partial_nG\equiv1$. Hence $q$ is regular. This proves the claimed
equivalence and shows that "regular point of a reduced hypersurface" is the
coordinate-free notion of a smooth point of $X$.
