---
id: cor-generic-smoothness-on-source-characteristic-zero
kind: corollary
title: "Generic smoothness on the source"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-closed-points-dense-in-affine-spectra
  - cor-closed-points-of-spectrum-are-maximal-ideals
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-affine-open-subscheme
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-regular-local-ring-geometric-point
  - def-singular-and-regular-loci-variety
  - def-smooth-morphism-classical
  - def-stalk-of-presheaf
  - def-zariski-tangent-space-point
  - lem-classical-variety-noetherian-components
  - lem-dominant-map-generic-differential-surjectivity-char-zero
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-smooth-map-tangent-surjectivity-criterion
  - lem-tangent-space-functoriality-classical
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-classical-principal-open-is-affine-variety
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-regular-equals-smooth-over-perfect-field
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51-52, §3.1, Proposition 3.1 (generic smoothness in the source) with proof"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field of characteristic $0$, let $X$ and $Y$ be
irreducible classical varieties over $k$, and let $f\colon X\to Y$ be a
dominant morphism. Regard $X$ and $Y$ as integral finite-type $k$-schemes
under
[[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]],
let $X_{\mathrm{reg}},Y_{\mathrm{reg}}$ be their regular loci
([[def-singular-and-regular-loci-variety]]), and let
$$U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$$
be the nonempty open subset of $X$ produced by
[[lem-dominant-map-generic-differential-surjectivity-char-zero]], so that
$f(U)\subseteq Y_{\mathrm{reg}}$ and $d_xf$ is surjective at every closed point
$x\in U$.

Then there are a nonempty affine open subvariety
$V\subseteq U$ of $X$ — explicitly a nonempty principal open $D_{X_0}(h')$ of
an affine chart $X_0$ of $X$ — and a nonempty affine open subvariety
$W\subseteq Y_{\mathrm{reg}}$ — a nonempty principal open of an affine chart
of $Y$ — such that:

1. $f(V)\subseteq W$, and $V\to\operatorname{Spec}k$ and
   $W\to\operatorname{Spec}k$ are smooth, so that $V$ and $W$ are smooth
   affine classical varieties over $k$;
2. the restriction $f|_V\colon V\to W$ is a morphism of finite type and is
   smooth in the sense of [[def-smooth-morphism-classical]]: it is locally
   standard smooth at every point of $V$; consequently the restriction
   $f|_V\colon V\to Y$ (equivalently $V\to Y_{\mathrm{reg}}$) is smooth as
   well.

In particular $f$ is smooth at every point of the nonempty open subset $V$ of
its source. Neither $X$ nor $Y$ is assumed smooth outside its regular locus,
and the target-side statement — a dense open subset of $Y$ over which the
source is smooth — is *not* asserted here: it requires a smooth source and
fails without that hypothesis.

## Facts & Assumptions
**Given:** The Axiom of Choice; an algebraically closed field $k$ of
characteristic $0$; irreducible classical varieties $X$ and $Y$ over $k$; a
dominant morphism $f\colon X\to Y$; and the open subset
$U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$ supplied by [F3].

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets
has a choice function.

[F2] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]:
under AC the closed-point construction and its inverse give an equivalence
between irreducible classical $k$-varieties and integral finite-type
$k$-schemes satisfying the affine-overlap separation condition, each original
point being identified with its singleton; classical points correspond to
closed points, and classical regular maps to scheme $k$-morphisms.

[F3] [[lem-dominant-map-generic-differential-surjectivity-char-zero]]: under
AC, for $k$ algebraically closed of characteristic $0$ and $f\colon X\to Y$
dominant between irreducible classical varieties, the set
$U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$ for a nonempty
affine chart $\operatorname{Spec}S\subseteq X$ over an affine chart
$\operatorname{Spec}R\subseteq Y$ and $0\ne H\in S$ is a nonempty open subset
of $X$ with $U\subseteq X_{\mathrm{reg}}$, $f(U)\subseteq Y_{\mathrm{reg}}$,
and $d_xf\colon T_xX\to T_{f(x)}Y$ surjective at every closed point
$x\in U$.

[F4] [[def-singular-and-regular-loci-variety]]: for a locally Noetherian
scheme $X$, $X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular
local ring}\}$.

[F5] [[def-affine-open-subscheme]]: for a scheme $X$ and open $U\subseteq X$,
the open subscheme is $(U,\mathcal O_X|_U)$, with the restricted structure
sheaf.

[F6] [[def-stalk-of-presheaf]]: the stalk at $x$ is the filtered colimit of
the sections over open neighbourhoods of $x$; the neighbourhoods of $x$
contained in an open $U\ni x$ are cofinal, so for the restricted sheaf
$\mathcal O_{U,x}\cong\mathcal O_{X,x}$ canonically.

[F7] [[def-regular-local-ring-geometric-point]]: a point $x$ of a locally
Noetherian scheme is regular exactly when $\mathcal O_{X,x}$ is a regular
local ring; this is absolute regularity of the local ring.

[F8] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]:
every field of characteristic zero is perfect, and every algebraically closed
field is perfect.

[F9] [[thm-regular-equals-smooth-over-perfect-field]]: under AC, for a perfect
field $k$ and a finite-type $k$-scheme $X$, $X$ is regular (every local ring
$\mathcal O_{X,x}$ is regular) if and only if $X\to\operatorname{Spec}k$ is
smooth in the local-standard-smooth sense.

[F10] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a
classical algebraic prevariety over an algebraically closed $k$ is a
quasi-compact locally ringed space with a sheaf of $k$-algebras covered by
open subspaces isomorphic to affine models (polynomial zero sets, including
empty and reducible ones), whose points have residue field canonically $k$; a
classical algebraic variety is a separated prevariety; polynomial principal
opens form a basis of the topology; zero loci of regular functions are closed.
These definitions use no Axiom of Choice.

[F11] [[lem-classical-variety-noetherian-components]]: every classical
variety is Noetherian and has finitely many irreducible components; every open
or closed subvariety has a finite affine cover.

[F12] [[lem-irreducibility-criteria-and-open-subspaces]]: a nonempty open
subspace of an irreducible space is irreducible; an irreducible space is
nonempty.

[F13] [[thm-classical-principal-open-is-affine-variety]]: under AC, for an
affine variety $X$ and $0\ne h\in A=k[X]$, the principal open $D_X(h)$, with
its regular functions, is isomorphic to the closed graph
$Z=\{(x,t)\in X\times k:th(x)=1\}$; its coordinate ring is canonically
$A[T]/(Th-1)\cong A_h$, a nonzero domain, and $D_X(h)$ is affine.

[F14] [[def-classical-affine-coordinate-ring]]: for an affine algebraic set
$X\subseteq k^n$, $k[X]=k[x_1,\dots,x_n]/I(X)$ is reduced and generated as a
$k$-algebra by the finitely many coordinate classes.

[F15] [[thm-classical-affine-nullstellensatz-correspondence]]: under AC,
$J\mapsto V(J)$ and $X\mapsto I(X)$ are inverse inclusion-reversing bijections
between radical ideals and algebraic sets; nonempty irreducible algebraic sets
correspond precisely to proper prime ideals, and points to maximal ideals.

[F16] [[cor-closed-points-of-spectrum-are-maximal-ideals]]: under AC, for a
commutative ring $R$ and $\mathfrak p\in\operatorname{Spec}R$, the singleton
$\{\mathfrak p\}$ is closed if and only if $\mathfrak p$ is a maximal ideal.

[F17] [[cor-closed-points-dense-in-affine-spectra]]: under AC, for a
finite-type $k$-algebra $A$ and a closed subset $Z\subseteq\operatorname{Spec}A$,
every nonempty open subset of $Z$ contains a closed point of
$\operatorname{Spec}A$.

[F18] [[lem-smooth-map-tangent-surjectivity-criterion]]: under AC, for smooth
classical varieties $X,Y$ over algebraically closed $k$ whose structure
morphisms are smooth, and a finite-type morphism $f\colon X\to Y$, at a
classical closed point $x$ with $y=f(x)$ the morphism $f$ is smooth at $x$ if
and only if $d_xf\colon T_xX\to T_yY$ is surjective.

[F19] [[lem-tangent-space-functoriality-classical]]: at $k$-rational points
the differential is the dual of the induced cotangent map and is functorial
under composition; every $k$-open immersion induces an isomorphism on tangent
spaces at each rational point.

[F20] [[def-smooth-morphism-classical]]: a finite-type $k$-scheme morphism is
smooth if at every source point there are affine neighbourhoods for which the
induced ring map has a standard smooth presentation after principal shrinking;
the condition is local on the source and on the target.

[F21] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an
$R$-algebra $S$ is an isomorphism
$S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ whose Jacobian matrix has a
$c\times c$ minor that is a unit in $S$; standard smoothness at a prime holds
after localizing at an element outside that prime, and a further principal
localization may be absorbed into the presentation.

[F22] [[def-zariski-tangent-space-point]]: $T_xX$ is the dual of
$\mathfrak m_x/\mathfrak m_x^2$; for a locally finite-type $k$-scheme it is
finite-dimensional over $\kappa(x)$.

[F23] [[def-finite-type-and-module-finite-algebras]]: $R[a_1,\dots,a_n]$ is
the smallest $R$-subalgebra containing the $a_i$, and an $R$-algebra is of
finite type exactly when it is generated by finitely many elements.

[F24] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism is
locally of finite type when locally on affine charts the ring maps are of
finite type, and of finite type when it is locally of finite type and
quasi-compact.



## Proof

**Proof technique:** direct.

1.1 The field $k$ is perfect by [F8]. By [F2] the varieties $X$ and $Y$ are integral finite-type $k$-schemes with $f$ a $k$-morphism; the regular loci $X_{\mathrm{reg}},Y_{\mathrm{reg}}$ are defined by [F4], and by [F3] the set $U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$ is a nonempty open subset of $X$ contained in $X_{\mathrm{reg}}$ with $f(U)\subseteq Y_{\mathrm{reg}}$, and $d_xf\colon T_xX\to T_{f(x)}Y$ is surjective at every closed point $x\in U$. We keep these notations throughout. [F2, F3, F4, F8, given]

1.2 Affine pieces. By [F11] the variety $X$ has a finite affine cover; choose a chart $X_0$ with $U\cap X_0\ne\varnothing$ and a point $x_0\in U\cap X_0$. Since principal opens form a basis of the topology [F10], there is $0\ne h\in k[X_0]$ with $x_0\in D_{X_0}(h)\subseteq U\cap X_0$. Similarly $y_0=f(x_0)\in f(U)\subseteq Y_{\mathrm{reg}}$; choose an affine chart $Y_0$ of $Y$ with $y_0\in Y_0$ [F11] and $0\ne g\in k[Y_0]$ with $y_0\in D_{Y_0}(g)\subseteq Y_{\mathrm{reg}}\cap Y_0$ [F10]. The set $D_{X_0}(h)\cap f^{-1}(D_{Y_0}(g))$ is a nonempty open subset of the affine variety $X_0$ containing $x_0$, so by [F10] there is $0\ne h'\in k[X_0]$ with $x_0\in D_{X_0}(h')\subseteq D_{X_0}(h)\cap f^{-1}(D_{Y_0}(g))$. Put $V:=D_{X_0}(h')$ and $W:=D_{Y_0}(g)$, so that $V$ is a nonempty open subvariety of $X$ with $V\subseteq D_{X_0}(h)\subseteq U$, and $f(V)\subseteq W\subseteq Y_{\mathrm{reg}}$. By [F13] the principal opens $V$ and $W$ are affine varieties with coordinate rings $k[V]=k[X_0]_{h'}$ and $k[W]=k[Y_0]_g$. Since $X_0$ and $Y_0$ are nonempty open subsets of the irreducible varieties $X$ and $Y$, all four are irreducible [F12]. [F3, F10, F11, F12, F13]

2.1 Points of $V$ and finite generation. By [F14] the coordinate ring $k[X_0]$ is reduced and generated over $k$ by finitely many coordinate classes; hence so is its localization $k[V]=k[X_0]_{h'}$, generated by those classes together with the inverse of $h'$ [F23]. So $V=\operatorname{Spec}k[V]$ is a finite-type $k$-scheme, and likewise $W=\operatorname{Spec}k[W]$. By [F13] and [F15] the points of the affine variety $V$ are the maximal ideals of $k[V]$, and by [F16] these are exactly the closed points of the scheme $V$; under the equivalence [F2] they are the classical points of $V$, hence closed points of the scheme $X$ lying in $V\subseteq U$. In particular every point $x$ of the classical variety $V$ is a closed point of $X$ and satisfies the conclusion of [F3], and its image $f(x)$ lies in $W$. [F2, F13, F14, F15, F16, F23, step 1.2]

3.1 The varieties $V$ and $W$ are smooth over $k$. Let $z\in V$. Since $V\subseteq U\subseteq X_{\mathrm{reg}}$, the open subscheme description [F5] and the cofinality of the neighbourhoods inside $V$ [F6] give $\mathcal O_{V,z}\cong\mathcal O_{X,z}$, which is regular because $z\in X_{\mathrm{reg}}$ [F4, F7]. Hence the finite-type $k$-scheme $V$ is regular, and $V\to\operatorname{Spec}k$ is smooth by [F9]. The same argument with $W\subseteq Y_{\mathrm{reg}}$ gives $\mathcal O_{W,z}\cong\mathcal O_{Y,z}$ regular for $z\in W$, and $W\to\operatorname{Spec}k$ smooth by [F9]. Each of $V$ and $W$ is a classical algebraic variety in the sense of [F10]: as an affine model it is a quasi-compact locally ringed space covered by itself, and it is separated because for regular maps $\varphi,\psi\colon Z\to V$ from any classical prevariety $Z$ the coordinate components $\varphi_i,\psi_i$ are regular functions on $Z$ (pullback of the coordinate functions of the affine model), so the equalizer is the finite intersection of the closed zero loci $\{\varphi_i-\psi_i=0\}$ [F10]. In particular $V$ and $W$ are smooth classical varieties over $k$ in the sense of [F10] and [F20]. [F4, F5, F6, F7, F8, F9, F10, F20, step 2.1, given]

3.2 The restriction is finite type. Write $g=f|_V:V\to W$. Let $\iota\colon V\hookrightarrow X$ and $\kappa\colon W\hookrightarrow Y$ be the open immersions, so that $\kappa\circ(f|_V)=f\circ\iota$. Write $B=k[V]$ and $C=k[W]$, affine coordinate rings as in step 2.1, and let $\varphi\colon C\to B$ be the $k$-algebra map induced by $f|_V\colon V\to W$. Choose finitely many $k$-algebra generators $b_1,\dots,b_m$ of $B$ [F23]. Since $k\subseteq C$ and $C[b_1,\dots,b_m]$ is a $C$-subalgebra of $B$ containing $k$ and all $b_i$, it contains the $k$-subalgebra generated by the $b_i$, which is $B$; hence $B=C[b_1,\dots,b_m]$ is generated by finitely many elements over $C$ [F23]. Thus $\varphi$ is of finite type, the morphism $f|_V$ is locally of finite type on the affine charts, and it is quasi-compact because its source is affine; by [F24] the restriction $f|_V\colon V\to W$ is of finite type. [F23, F24, step 2.1]

4.1 Differential comparison. Let $x$ be a point of the classical variety $V$ and put $y=f(x)\in W$. By step 2.1, $x$ is a closed point of $X$ lying in $U$, so $d_xf$ is surjective [F3]; in particular the case $T_{f(x)}Y=0$ is allowed and the conclusion is unaffected. The identity $\kappa\circ(f|_V)=f\circ\iota$ of step 3.2, the functoriality of the differential, and the fact that the $k$-open immersions $\iota,\kappa$ induce isomorphisms on tangent spaces [F19] give $d_x(f|_V)=(d_{g(x)}\kappa)^{-1}\circ d_xf\circ d_x\iota$, where $d_{g(x)}\kappa\colon T_{g(x)}W\to T_{f(x)}Y$ is an isomorphism; the tangent spaces are finite-dimensional over $k$ [F22]. Therefore $\operatorname{rank}d_x(f|_V)=\operatorname{rank}d_xf=\dim_kT_{f(x)}Y=\dim_kT_{g(x)}W$, and $d_x(f|_V)\colon T_xV\to T_{g(x)}W$ is surjective at every point $x$ of the classical variety $V$. [F3, F19, F22, step 2.1, step 3.2]

5.1 The criterion at every point of $V$. Let $x$ be a point of the classical variety $V$; by step 2.1 it is a classical closed point of the affine variety $V$. The structure morphisms $V\to\operatorname{Spec}k$ and $W\to\operatorname{Spec}k$ are smooth [3.1], so $V$ and $W$ are smooth classical varieties over $k$ in the sense of [F18]; the morphism $f|_V\colon V\to W$ is of finite type [3.2] and its differential at $x$ is surjective [4.1]. By the submersion criterion [F18], the restriction $f|_V$ is smooth at $x$. As $x$ was an arbitrary point of the classical variety $V$, the restriction is smooth at every point of $V$ in the classical sense. [F18, step 2.1, step 3.1, step 3.2, step 4.1]

6.1 Upgrade to scheme points. Let $\operatorname{Sm}\subseteq V$ be the set of points at which $f|_V$ is locally standard smooth, so that $\operatorname{Sm}$ contains every point of the classical variety $V$ by step 5.1. If $z\in\operatorname{Sm}$, then by [F20] there are affine neighbourhoods of $z$ and of $f|_V(z)$ and a principal shrinking on which the induced ring map has a standard smooth presentation [F21]; the Jacobian minor of that presentation is a unit on the whole shrinking, hence remains a unit in every further localization, so the same presentation witnesses standard smoothness at every point of that shrinking. Therefore $\operatorname{Sm}$ is open in $V$. Suppose $V\smallsetminus\operatorname{Sm}$ were nonempty. It is a nonempty closed subset of the affine finite-type $k$-scheme $V=\operatorname{Spec}B$ of step 2.1 and is a nonempty open subset of itself; by [F17] it contains a closed point $z$ of $\operatorname{Spec}B$. By [F16] the point $z$ is a maximal ideal of $B$, and by [F15] applied to the affine variety $V$ with coordinate ring $B$ [F13] it is a point of the classical variety $V$; this contradicts step 5.1. Hence $V\smallsetminus\operatorname{Sm}=\varnothing$, and $f|_V\colon V\to W$ is smooth in the sense of [F20]. [F13, F15, F16, F17, F20, F21, step 2.1, step 5.1]

7.1 Conclusion. The restriction $f|_V\colon V\to W$ is smooth [6.1], and $W$ is an open subscheme of $Y$ with $f(V)\subseteq W$. Since smoothness is local on the target [F20], the same standard smooth presentations witness smoothness of the restriction $f|_V\colon V\to Y$ at every point of $V$; the same applies to $V\to Y_{\mathrm{reg}}$ because $W\subseteq Y_{\mathrm{reg}}$. Thus $f$ is smooth at every point of the nonempty open subset $V$ of its source, with $V\subseteq U$ a principal open of an affine chart of $X$. Neither $X$ nor $Y$ is assumed smooth outside $X_{\mathrm{reg}}$, $Y_{\mathrm{reg}}$, and no target-side generic smoothness is claimed here. [F20, step 1.2, step 3.1, step 6.1, given]

8.1 Boundary and scope dispositions. Empty: $X$ and $Y$ are nonempty because irreducible means nonempty [F12], so the charts $X_0,Y_0$ and the sets $U$, $V$, $W$ of steps 1.2 and 2.1 are nonempty; there is no empty-case convention to invoke, and the empty scheme is excluded by the hypothesis. Zero: relative dimension $0$ is allowed — if $\dim X=\dim Y$ the differential is an isomorphism at the points of $V$ and the conclusion is unaffected; if $Y$ is a point then $Y_{\mathrm{reg}}=Y$, the chart $Y_0$ is the whole point, $W=Y_0$, and step 3.1 shows directly that $V\to W=\operatorname{Spec}k$ is smooth, so the criterion's conclusion in step 5.1 is consistent. One: nothing in the argument divides by a natural number or requires a generator count or relative dimension at least one; the lists $b_1,\dots,b_m$ of step 3.2 may have any finite length, and the case $\dim_kT_{f(x)}Y=1$ is the first instance in which surjectivity of $d_xf$ is a genuine condition. Degenerate: neither $X$ nor $Y$ is assumed smooth, and $f$ is neither assumed finite nor flat; the set $V$ must be allowed to be a proper subset of $X$, as the example $t\mapsto t^2$ on $\mathbb A^1_k$ shows, where the differential vanishes at the origin and $V$ lies in $U=\mathbb A^1_k\smallsetminus\{0\}$; a differential of rank zero is compatible with $V\subseteq U$ exactly when the target tangent space is zero; in particular the structure map to $\operatorname{Spec}k$ has this property, and the case where $U$ is not affine is handled by passing to the principal open $V$ of a chart. Endpoints: the argument uses no closed-range or dimension endpoint claim; at one extreme $f$ may already be smooth on all of $X$, in which case the construction still returns some nonempty principal open $V$, and every such $V$ is dense in $X$ because $X$ is irreducible and $V$ is nonempty and open [F12]. Nonempty-choice: AC is declared in [F1] and is used exactly through the AC-assuming suppliers [F3] (generic differential surjectivity), [F18] (submersion criterion), [F9] (regularity versus smoothness), [F2] (classical-scheme dictionary), [F13] and [F15] (principal opens and the Nullstellensatz correspondence), [F17] (density of closed points), and [F12]/[F10] as used in steps 1.2 and 2.1; the finite choices of charts and principal open generators in step 1.2 and the localization argument of step 2.1 add no further choice principle. Biconditional directions: the corollary asserts only existence of $V$ and smoothness, with no converse; the only biconditional used as a supplier is the submersion criterion [F18], and step 5.1 applies its forward direction (surjective differential implies smooth at the point), never its reverse. [F1, F2, F3, F9, F10, F12, F13, F15, F17, F18, step 1.2, step 2.1, step 5.1] ∎



## Source qualification

Vakil, Classes 51–52, §3.1, Proposition 3.1 proves generic smoothness on the source: for a dominant morphism of integral finite-type $k$-schemes over a field of characteristic $0$ there is a nonempty dense open $U\subseteq X$ with $\pi|_U$ smooth. The source works throughout with schemes and takes the smoothness conclusion directly from the same local analysis of the relative differential module; the present corollary instead records the conclusion that follows from the authored differential-surjectivity lemma on this page's pair by restriction to an affine principal open and the submersion criterion, and therefore also covers the classical-variety formulation with the standard-smooth convention of [[def-smooth-morphism-classical]]. The source asserts only that the smooth locus is a nonempty open subset of the source; it claims nothing about the size of $U$, about smoothness of $X$ or $Y$, or about a target-side open set, and neither does this item. The characteristic-$0$ hypothesis enters through perfectness of $k$ and through the separating-transcendence-basis input of the differential lemma; the positive-characteristic failure of the source-side statement is recorded on the counterexample page of the pair. The dictionary between classical varieties and integral finite-type schemes used for the translation is [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]], and the affine chart, coordinate-ring and principal-open interfaces are those of [[def-classical-affine-coordinate-ring]] and [[thm-classical-principal-open-is-affine-variety]].
