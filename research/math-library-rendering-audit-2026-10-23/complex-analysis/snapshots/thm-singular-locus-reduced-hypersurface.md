---
id: thm-singular-locus-reduced-hypersurface
kind: theorem
title: "Singular locus of a reduced analytic hypersurface"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dimension-of-a-quotient-as-chains-above-an-ideal
  - cor-dimension-preserved-by-integral-extensions
  - def-axiom-of-choice
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-formal-derivative-of-a-polynomial
  - def-holomorphic-map-and-complex-jacobian
  - def-krull-dimension-of-a-ring
  - def-polynomials-that-split-and-splitting-fields
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - def-repeated-root-and-separable-polynomial
  - def-weierstrass-polynomial
  - lem-dimension-of-holomorphic-germ-ring
  - lem-reduced-prepared-hypersurface-remains-reduced-near-germ
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - lem-stability-of-slice-zero-count-under-holomorphic-parameters
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - thm-bezout-identity-for-polynomials
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-hypersurface-germs-have-pure-codimension-one
  - thm-identity-theorem-in-several-complex-variables
  - thm-integrality-and-finite-module-equivalences
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - thm-repeated-root-derivative-criterion
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - thm-weierstrass-division-theorem
  - thm-weierstrass-finite-projection-hypersurface-germ
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Chapter 6 §§6.5–6.6, within printed pp. 167–196: Theorem 6.6.5 the hypersurface singular locus is analytic of lower dimension; §6.5 regular and singular points."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter II §4, within printed pp. 90–99: (4.19) discriminant of a finite preparation and (4.23) regular and singular points; §6.6 pure codimension one (printed pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let
$p\in\mathbb C^n$, and let $X$ be a reduced complex-analytic hypersurface
germ at $p$ with reduced defining germ $f$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]],
[[def-reduced-holomorphic-germ-for-hypersurface]]); keep the symbol $X$ for a
representative zero set and write $\operatorname{Reg}(X)$ and
$\operatorname{Sing}(X)$ for its regular and singular loci
([[def-regular-singular-point-analytic-hypersurface]]). Let $T$, $W$ and
$V\times D$ be the complex-linear coordinate change, Weierstrass polynomial
and product neighbourhood supplied by the finite local projection theorem for
$f$ ([[thm-weierstrass-finite-projection-hypersurface-germ]]); in the prepared
coordinates the variables are $(z',T)\in V\times D\subseteq\mathbb C^{n-1}\times\mathbb C$
and $\widetilde f(z):=f(p+z)$, so $\widetilde f\circ T(z)=f(p+Tz)=u(z)W(z)$ with $u$ a unit. Use the root-containing product representative of that theorem, shrunk as in the nearby-reducedness lemma, so that
$X=Z(W)$ on $V\times D$. Then the following hold.

1. **A fixed reduced equation near the base point.** The singular locus is the
   common zero set of the reduced equation and its partial derivatives:
   $$\operatorname{Sing}(X)=\{q\in V\times D:W(q)=0,\ \partial_1W(q)=\cdots=\partial_nW(q)=0\},$$
   where $\partial_iW$ is the partial derivative of $W$ in the $i$-th prepared
   coordinate. In particular $\operatorname{Sing}(X)$ is a closed subset of
   $X$ that is locally the common zero set of the finitely many holomorphic
   functions $W,\partial_1W,\dots,\partial_nW$.

2. **The local ideal of the singular germ.** For $q\in\operatorname{Sing}(X)$
   put
   $$J_q:=(W_q,\partial_1W_q,\dots,\partial_nW_q)\subseteq\mathcal O_{\mathbb C^n,q},$$
   where $W_q$ is the germ of the fixed prepared equation at $q$ and
   $\partial_iW_q$ are the germs of its partial derivatives. Then the germ of
   $\operatorname{Sing}(X)$ at $q$ is the zero germ of $J_q$, and it is
   nonempty exactly when $J_q$ is a proper ideal.

3. **Dimension of a singular germ.** Assume the Axiom of Choice. If
   $q\in\operatorname{Sing}(X)$ and $J_q$ is a proper ideal, then the local
   dimension of the germ of $\operatorname{Sing}(X)$ at $q$, defined as the
   Krull dimension of the quotient ring $\mathcal O_{\mathbb C^n,q}/J_q$
   ([[def-krull-dimension-of-a-ring]]), is at most $n-2$.

4. **Nowhere density.** $\operatorname{Sing}(X)$ is nowhere dense in $X$: its
   closure in $X$ has empty interior, equivalently the regular locus
   $\operatorname{Reg}(X)=X\setminus\operatorname{Sing}(X)$ is dense in $X$.
   Since $X$ has pure local dimension $n-1$
   ([[thm-hypersurface-germs-have-pure-codimension-one]]), the bound of part 3
   gives every nonempty singular germ ambient codimension at least two in
   $\mathbb C^n$.

5. **Curves.** For $n=1$ the singular locus is empty.

The statement concerns hypersurface germs, cut out by one reduced equation; it
asserts nothing about germs defined by several holomorphic equations.

## Facts & Assumptions

**Given:** The Axiom of Choice, a reduced nonzero nonunit germ $f$ at
$p\in\mathbb C^n$, its zero germ $X$, the centered germ $\widetilde f(z)=f(p+z)$, prepared data $T,u,W,V\times D$ with
$\widetilde f\circ T=uW$ as in [F3], the discriminant $D_W$ of [F4], and regular and
singular points as defined in [F2].

[F1] A complex-analytic hypersurface germ at $p$ is a nonempty proper set germ $X=(Z(f),p)$ cut out by a nonzero nonunit germ $f$; the square-free reduction $f_{\mathrm{red}}$ of a defining equation is reduced and has the same zero germ, and any two reduced defining germs of the same hypersurface germ differ by a unit ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]], [[def-reduced-holomorphic-germ-for-hypersurface]]).

[F2] At every point $q\in X$ there is a local reduced equation $f_q$: a germ with $(f_q)=I_q(X)$ that is reduced at $q$; any two such equations differ by a unit, and $q$ is regular exactly when $df_q(q)\ne0$ for one (equivalently every) local reduced equation, and singular otherwise. In coordinates, $df_q(q)=0$ exactly when all partial derivatives of $f_q$ vanish at $q$ ([[def-regular-singular-point-analytic-hypersurface]], [[def-holomorphic-map-and-complex-jacobian]]).

[F3] Prepared data: after centering at $p$ and applying the invertible complex-linear change $T$ one has $\widetilde f\circ T=uW$ with $u$ a unit and $W$ a Weierstrass polynomial of degree $d\ge1$ in the last variable; on the product neighbourhood $V\times D$ the zero sets agree, $Z(\widetilde f\circ T)=Z(W)$, and the quotient $\mathcal O_{n,0}/(W)$ is a finitely generated module over the base ring $\mathcal O_{n-1,0}$ generated by the classes of $1,T,\dots,T^{d-1}$ ([[thm-weierstrass-finite-projection-hypersurface-germ]], [[def-weierstrass-polynomial]]).

[F4] Discriminant: $D_W=\operatorname{Disc}_T(W)\in\mathcal O_{n-1,0}$ is a nonzero base germ and the branch set of the projection is $B_\pi=\{D_W=0\}\subseteq V$; for $z'_0\in V$ one has $D_W(z'_0)=\operatorname{Disc}(W(z'_0,\cdot))$, which vanishes exactly when the slice polynomial has a repeated root, so $D_W(z'_0)\ne0$ if and only if the slice has $d$ distinct simple roots ([[def-discriminant-and-branch-locus-weierstrass-hypersurface]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F5] Nearby reducedness: for every $q\in Z(W)\cap(V\times D)$ the translate of the germ of $W$ at $q$ is a reduced germ ([[lem-reduced-prepared-hypersurface-remains-reduced-near-germ]]).

[F6] Vanishing ideal: if $g$ is a reduced nonzero nonunit germ at a point $q$, then $I_q(Z(g))=(g)$, the principal ideal generated by $g$ ([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]).

[F7] Slice stability: a germ regular in the last variable of order $k\ge1$ has a representative, a radius $r>0$ and a base neighbourhood such that, after translating the base point to the origin, every slice has no zero on the boundary circle and exactly $k$ zeros, counted with multiplicity, inside it ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[F8] Slice derivative and repeated roots: the partial derivative $\partial_TW(z'_0,\tau)$ is the derivative at $\tau$ of the one-variable slice $t\mapsto W(z'_0,t)$, and for a monic complex polynomial it equals the value of its formal derivative at $\tau$; a root of a nonzero polynomial over a field is a repeated root exactly when the derivative vanishes there ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-repeated-root-derivative-criterion]]).

[F9] Reduced preparation at a point: if a reduced germ $g$ at a point is regular in the last variable of order $k\ge1$ and $g=vP$ is its Weierstrass preparation, then $P$ is square-free in $K[T]$, where $K$ is the fraction field of the base germ ring at that point, and $D_P=\operatorname{Disc}_T(P)$ is a nonzero element of the base ring ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]], [[thm-weierstrass-preparation-theorem]]).

[F10] For a field $K$ the fraction field of a domain is a field into which the domain embeds ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]); every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]), with splitting and splitting fields as in [[def-polynomials-that-split-and-splitting-fields]]; in any field in which a monic polynomial splits as a product of linear factors the discriminant is the square of the Vandermonde product of its roots, so a nonzero discriminant forces the roots to be pairwise distinct ([[thm-discriminant-root-formula-and-repeated-root-criterion]]); a nonzero polynomial over a field is separable exactly when its monic gcd with its derivative is $1$ ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]], [[def-repeated-root-and-separable-polynomial]]).

[F11] Bézout: for polynomials over a field not both zero, a monic gcd $d$ is a linear combination $Af+Bg=d$ with polynomial coefficients ([[thm-bezout-identity-for-polynomials]]).

[F12] Weierstrass division: for a Weierstrass polynomial $P$ of degree $k$ in the last variable, every germ at the base point is uniquely $hP+r_0+r_1z_m+\cdots+r_{k-1}z_m^{k-1}$ with quotient in the germ ring and remainder coefficients in the base germ ring ([[thm-weierstrass-division-theorem]]).

[F13] Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a nonzero commutative ring, the Krull dimension is the supremum of the lengths of strict chains of prime ideals, and for a proper ideal $I$ the dimension of $R/I$ is the supremum of the lengths of strict chains of primes containing $I$ ([[def-krull-dimension-of-a-ring]], [[cor-dimension-of-a-quotient-as-chains-above-an-ideal]]); the holomorphic germ ring has $\dim\mathcal O_{\mathbb C^m,0}=m$ for every $m\ge0$, with $\mathcal O_{\mathbb C^0,0}=\mathbb C$ ([[lem-dimension-of-holomorphic-germ-ring]]); an injective integral extension of nonzero commutative rings preserves dimension ([[cor-dimension-preserved-by-integral-extensions]]) and a module-finite extension is integral ([[thm-integrality-and-finite-module-equivalences]]).

[F14] For $m\ge1$ the germ ring $\mathcal O_{\mathbb C^m,0}$ is a unique factorisation domain, hence a domain, so its zero ideal is prime ([[thm-holomorphic-germ-ring-is-a-ufd]]).

[F15] Identity theorem: a holomorphic function on a connected open set that vanishes on a nonempty open subset vanishes identically on that set ([[thm-identity-theorem-in-several-complex-variables]]).

[F16] Pure codimension one: a reduced hypersurface germ at $p$ has local dimension $n-1$ ([[thm-hypersurface-germs-have-pure-codimension-one]]).

[F17] Product rule and formal derivative: for holomorphic $g,h$ one has $\partial_i(gh)=(\partial_ig)h+g(\partial_ih)$, and for a polynomial $P=\sum_j a_j\widetilde T^j$ in the last variable with holomorphic coefficients the partial derivative $\partial_{\widetilde T}P$ is the formal derivative $P'$ ([[prop-algebra-of-holomorphic-functions-in-several-variables]], [[def-formal-derivative-of-a-polynomial]]).

[F18] Holomorphic functions are continuous, so their common zero sets are closed ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).



**Proof technique:** direct — describe the fixed equation near every point of the prepared zero set, relate the singular points to the discriminant of the prepared polynomial, bound the dimension by a finite module over the base ring of a local preparation, and use the stability of slices to show the regular locus is dense.



## Proof

1.1 Since $f$ is reduced we may apply [F3]: choose the invertible complex-linear change $T$, the unit $u$ and the Weierstrass polynomial $W$ of degree $d\ge1$ with $\widetilde f\circ T=uW$, and the product neighbourhood $V\times D$ on which the zero sets agree and every slice has all $d$ roots inside $D$ and none on its boundary; the affine pullback $h\mapsto(z\mapsto h(p+Tz))$ is a ring isomorphism from $\mathcal O_{\mathbb C^n,p}$ to $\mathcal O_{\mathbb C^n,0}$ and carries irreducibles to irreducibles, so $\widetilde f\circ T$ is again reduced and is the reduced equation in the prepared coordinates. Replace the representative of $X$ by $Z(W)\cap(V\times D)$ and write $\pi(q)=z'$ for the base coordinate of a point $q=(z',T)$. [given, F1, F3]

1.2 For every $q\in Z(W)\cap(V\times D)$ the germ $W_q$ of $W$ at $q$ is reduced by [F5], and $Z(W_q)$ is the germ of $Z(W)$, namely $X$, at $q$; applying [F6] with base point $q$ and $g=W_q$ gives $I_q(X)=(W_q)$. Hence for every $q\in X$ the fixed germ $W_q$ is a local reduced equation of $X$ at $q$, and by [F2] the point $q$ is regular exactly when $dW(q)\ne0$ and singular exactly when $dW(q)=0$. [F2, F5, F6]

1.3 Let $z'_0\in V$ and let $\tau\in\mathbb C$ with $q=(z'_0,\tau)\in Z(W)$. By [F8] the partial derivative $\partial_TW(q)$ is the derivative at $\tau$ of the one-variable slice $W(z'_0,\cdot)$ and equals the value of the formal derivative of that monic polynomial, so $\partial_TW(q)=0$ exactly when this particular root $\tau$ is repeated. Thus $\partial_TW(q)=0$ implies $D_W(z'_0)=0$ by [F4]; conversely, $D_W(z'_0)=0$ means that some root of the slice is repeated. Therefore $D_W(z'_0)\ne0$ exactly when all $d$ roots of the slice are distinct and simple. [F4, F8]

1.4 Let $q=(z'_0,\tau)\in Z(W)\cap(V\times D)$. The slice $W(z'_0,\cdot)$ is a monic polynomial of degree $d$ vanishing at $\tau$, so the germ $W_q$ is regular in the last variable of some order $k$ with $1\le k\le d$; translate $q$ to the origin and let $A:=\mathcal O_{\mathbb C^{n-1},z'_0}$, $K:=\operatorname{Frac}(A)$. By [F9] the Weierstrass preparation $W_q=vP$ has $P$ square-free over $K$ and $D_P\ne0$ in $A$. Since $D_P\ne0$, the roots of $P$ in any field in which $P$ splits are pairwise distinct by [F10]; a repeated root of $P$ in an extension field would therefore give a contradiction, so $P$ is separable over $K$, and the separability criterion in [F10] gives $\gcd(P,P')=1$ in $K[T]$. By [F11] choose $A_0,B_0\in K[T]$ with $A_0P+B_0P'=1$; clearing the denominators of the coefficients of $A_0$ and $B_0$ produces a nonzero $c\in A$ and polynomials $A_1,B_1\in A[T]$ with $c=A_1P+B_1P'$, so that $c\in(P,P')$ and $c\ne0$. [F9, F10, F11]

1.5 Let $q_0=(z'_0,\tau_0)\in Z(W)\cap(V\times D)$ and let $k_0\ge1$ be the order of the zero of the slice $W(z'_0,\cdot)$ at $\tau_0$. The germ $W_{q_0}$ is regular in the last variable of order $k_0$, so [F7] provides a base neighbourhood $U_0$ of $z'_0$ and a radius $\rho>0$ such that for every $z'\in U_0$ the slice $W(z',\cdot)$ has exactly $k_0$ zeros, counted with multiplicity, in the disc $|\zeta-\tau_0|<\rho$ and no zero on its boundary circle. [F7]

2.1 By steps 1.1 and 1.2, a point $q\in V\times D$ lies in $X$ exactly when $W(q)=0$, and then $q$ is singular exactly when $dW(q)=0$; by [F2] the condition $dW(q)=0$ is the vanishing of all partial derivatives. Hence $\operatorname{Sing}(X)=\{q\in V\times D:W(q)=0,\ \partial_1W(q)=\cdots=\partial_nW(q)=0\}$, the common zero set of the finitely many holomorphic functions $W,\partial_1W,\dots,\partial_nW$, which is closed in $V\times D$ and hence in $X$ by [F18]. This is part 1, and it identifies the germ of $\operatorname{Sing}(X)$ at $q$ with the zero germ of $J_q$ for every $q\in\operatorname{Sing}(X)$. [step 1.2, F2, F18]

2.2 Fix $q\in Z(W)\cap(V\times D)$ with the preparation $W_q=vP$, base ring $A$ and element $c\in A$ of step 1.4. By [F12] every germ $h\in\mathcal O_{\mathbb C^n,q}$ has a unique remainder $r_0+r_1\widetilde T+\cdots+r_{k-1}\widetilde T^{k-1}$ of degree less than $k$ modulo $P$, so the classes of $1,\widetilde T,\dots,\widetilde T^{k-1}$ form a basis of $\mathcal O_{\mathbb C^n,q}/(P)$ as an $A$-module; in particular $A\to\mathcal O_{\mathbb C^n,q}/(P)$ is injective, the identity $P\in(P,c)$ is trivial, and quotienting by $c$ shows that $\mathcal O_{\mathbb C^n,q}/(P,c)$ is a free module of rank $k$ over $A/(c)$, with the same basis. [step 1.4, F12]

2.3 With $J_q=(W_q,\partial_1W_q,\dots,\partial_nW_q)$ as in part 2, one has $(P,c)\subseteq(P,P')\subseteq J_q$. Indeed $c\in(P,P')$ by step 1.4; $P\in J_q$ because $W_q=vP$ with $v$ a unit; and $P'\in J_q$, since the product rule [F17] gives $\partial_{\widetilde T}W_q=(\partial_{\widetilde T}v)P+vP'$, so that $vP'\in J_q$ and, $v$ being a unit, $P'\in J_q$; here the last partial derivative of $W_q$ is its derivative in the last variable and $P'$ is the formal derivative of the polynomial $P$. [step 1.4, F2, F17]

2.4 Every singular point of $X$ lies over the branch set: if $q=(z'_0,\tau)\in\operatorname{Sing}(X)$, then $dW(q)=0$ by step 1.2, so in particular $\partial_TW(q)=0$ and step 1.3 gives $D_W(z'_0)=0$. [step 1.2, step 1.3]

2.5 Conversely, every point of the zero set lying over the complement of the branch set is regular: if $z'_0\in V$ satisfies $D_W(z'_0)\ne0$ and $q=(z'_0,\tau)\in Z(W)$, then the slice has $d$ distinct simple roots by step 1.3, so in particular $\partial_TW(q)\ne0$ and therefore $dW(q)\ne0$; by step 1.2 the point $q$ is regular. [step 1.2, step 1.3]

3.1 Let $q\in\operatorname{Sing}(X)$ and suppose $J_q$ is a proper ideal. By step 2.3 we have $(P,c)\subseteq J_q$, so $c$ is not a unit, and $A/(c)$ and $\mathcal O_{\mathbb C^n,q}/(P,c)$ are nonzero; by step 2.2 the ring $\mathcal O_{\mathbb C^n,q}/(P,c)$ is a free module of rank $k\ge1$ over $A/(c)$, hence a module-finite, injective extension of it, which is integral by [F13]. Under the Axiom of Choice, [F13] therefore gives $\dim\mathcal O_{\mathbb C^n,q}/(P,c)=\dim A/(c)$. Every strict chain of primes of $A$ containing $(c)$ can be prepended with the zero ideal, which is prime because $A$ is a domain by [F14] and is strictly smaller than the first member because $c\ne0$ lies in it; such a chain of length $j$ therefore yields a strict chain of length $j+1$ in $A$, and the chain description of dimensions in [F13] together with $\dim A=n-1$ gives $\dim A/(c)\le n-2$. Hence $\dim\mathcal O_{\mathbb C^n,q}/(P,c)\le n-2$. [step 1.4, step 2.2, step 2.3, F13, F14]

3.2 If $n=1$, then the base ring of the preparation at a point $q$ is $A=\mathcal O_{\mathbb C^0,\cdot}=\mathbb C$ by [F13], a field; the element $c\ne0$ of step 1.4 is then a unit, so $(P,c)$ is the unit ideal and step 2.3 makes $J_q$ the unit ideal for every point $q$ of the prepared zero set. But by part 1 as proved in step 2.1 the germ of $\operatorname{Sing}(X)$ at $q$ is the zero germ of $J_q$, which is empty when $J_q=\mathcal O_{\mathbb C^n,q}$; since every point of the representative lies in the prepared neighbourhood, the singular locus is empty. [step 1.4, step 2.1, step 2.3, F13]

4.1 The regular locus is dense in $X$. If $n=1$, step 3.2 gives $\operatorname{Sing}(X)=\varnothing$, so $\operatorname{Reg}(X)=X$ is dense. Assume now $n\ge2$. Let $U\subseteq X$ be a nonempty open subset of the representative and choose $q_0=(z'_0,\tau_0)\in U$; since $U$ is open in the subspace topology there are a polydisc $V_0\subseteq V$ around $z'_0$ and a radius $\varepsilon>0$ with $X\cap(V_0\times D_\varepsilon(\tau_0))\subseteq U$. Apply step 1.5 to $q_0$ and shrink $V_0$ and $\rho$ so that $\rho\le\varepsilon$ and every slice over $V_0$ has exactly $k_0\ge1$ zeros in $|\zeta-\tau_0|<\rho$. Since $D_W$ is a nonzero germ on the connected polydisc $V$, its zero set has empty interior: if $D_W$ vanished on a nonempty open subset of $V$, then [F15] would force $D_W$ to vanish identically on $V$, contradicting that $D_W\ne0$ as a germ. Hence there is $z'\in V_0$ with $D_W(z')\ne0$; for this $z'$ the slice has $k_0\ge1$ zeros in the disc and all its roots are simple by step 1.3, so choosing one of them, say $\zeta$, gives a point $q=(z',\zeta)\in X\cap(V_0\times D_\varepsilon(\tau_0))\subseteq U$ that is regular by step 2.5. Thus every nonempty open subset of $X$ contains a regular point, that is, $\operatorname{Reg}(X)$ is dense in $X$. [step 1.5, step 2.5, F4, F15]

4.2 For every $q\in\operatorname{Sing}(X)$ with $J_q$ proper one has $\dim\mathcal O_{\mathbb C^n,q}/J_q\le n-2$: by step 2.3 the quotient $\mathcal O_{\mathbb C^n,q}/J_q$ is a quotient of $\mathcal O_{\mathbb C^n,q}/(P,c)$, and by the chain description of dimensions in [F13] passing to a quotient cannot increase the dimension, so step 3.1 gives the bound. [step 2.3, step 3.1, F13]

5.1 All parts are now established: part 1 and the closedness and local-ideal claims of part 2 are step 2.1, where the germ of $\operatorname{Sing}(X)$ at $q$ is the zero germ of $J_q$, which is nonempty when $J_q$ is proper because a proper ideal of the local ring is contained in its maximal ideal and all its elements then vanish at $q$, and empty when $J_q$ is the unit ideal; part 3 is step 4.2; part 5 is step 3.2; and part 4 follows because $\operatorname{Sing}(X)$ is closed in $X$ by step 2.1 while $\operatorname{Reg}(X)$ is dense by step 4.1, so the closure of $\operatorname{Sing}(X)$, namely $\operatorname{Sing}(X)$ itself, has empty interior in $X$. Finally, $\operatorname{Sing}(X)$ lies over the branch set by step 2.4, and since $X$ has pure local dimension $n-1$ by [F16] while every nonempty singular germ has dimension at most $n-2$ by step 4.2, such a germ has codimension at least two in the ambient $\mathbb C^n$. [step 2.1, step 2.4, step 3.2, step 4.2, step 4.1, F16] ∎
