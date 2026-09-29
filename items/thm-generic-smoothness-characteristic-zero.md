---
id: thm-generic-smoothness-characteristic-zero
kind: theorem
title: "Generic smoothness over a dense target open"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-closed-points-dense-in-affine-spectra
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-affine-open-subscheme
  - def-axiom-of-choice
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension-classical-variety
  - def-dimension-noetherian-topological-space
  - def-finite-type-and-module-finite-algebras
  - def-interior-closure-boundary-top
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-singular-and-regular-loci-variety
  - def-smooth-morphism-classical
  - def-stalk-of-presheaf
  - lem-classical-variety-noetherian-components
  - lem-critical-locus-image-dimension-bound
  - lem-dimension-nonempty-open-subset
  - lem-fibre-product-open-restriction
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-points-of-fibre-primes-over-point
  - lem-smooth-map-tangent-surjectivity-criterion
  - thm-ag-standard-smooth-base-change-composition
  - thm-classical-principal-open-is-affine-variety
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-fibre-products-of-schemes-exist
  - thm-generic-fibre-dimension
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51-52, §3.3, Theorem 3.3 (generic smoothness in the target) with proof"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Theorem 5.4.2 (Bertini-Sard), printed p. 34"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an algebraically
closed field of characteristic $0$, let $X$ and $Y$ be irreducible classical
varieties over $k$
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]), and let
$f\colon X\to Y$ be a morphism of classical varieties. Assume $X$ is smooth
over $k$, that is, the structure morphism $X\to\operatorname{Spec}k$ is smooth
in the locally-standard-smooth sense of [[def-smooth-morphism-classical]]
(equivalently, since $k$ is perfect, $X$ is regular). Then:

1. there is a dense open subvariety $U\subseteq Y$ such that the restriction
   $$f^{-1}(U)\longrightarrow U$$
   is a smooth morphism of finite-type $k$-schemes; when $f$ is not dominant
   one may take $U$ with $f^{-1}(U)=\varnothing$, the empty morphism being
   smooth;
2. if in addition $f$ is dominant, there is a nonempty open (hence dense)
   $V\subseteq U$ such that for every closed point $y\in V$ the
   scheme-theoretic fibre
   $$X_y=X\times_Y\operatorname{Spec}k(y)$$
   ([[def-scheme-theoretic-fibre]]) is nonempty, smooth over $k$, and of pure
   dimension $r=\dim X-\dim Y$.

Neither $Y$ nor $f$ is required to be smooth or flat, the fibres are not
required to be irreducible or connected, and no statement is made about the
size of $U$ or $V$. The characteristic-$0$ hypothesis enters through the
critical-locus dimension bound of
[[lem-critical-locus-image-dimension-bound]] in claim 1 and through the
perfectness of $k$; the failure of the target-open statement for a
non-smooth source and the positive-characteristic failure of the
corresponding source-side statement are recorded on the counterexample page of
this pair.

## Facts & Assumptions

**Given:** The Axiom of Choice; an algebraically closed field $k$ of
characteristic $0$; irreducible classical varieties $X$ and $Y$ over $k$; the
hypothesis that $X\to\operatorname{Spec}k$ is smooth in the sense of
[[def-smooth-morphism-classical]]; and a morphism $f\colon X\to Y$ of
classical varieties.

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has
a choice function.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a
classical algebraic prevariety over $k$ is a quasi-compact locally ringed space
with a structure sheaf of $k$-algebras, covered by open subspaces isomorphic to
affine models (polynomial zero sets, including empty and reducible ones), whose
points have residue field canonically $k$ and whose sections are functions;
principal opens form a basis of the topology, zero loci of regular functions
are closed, a classical algebraic variety is a separated prevariety, and these
definitions use no Axiom of Choice.

[F3] [[def-smooth-morphism-classical]]: for a finite-type morphism
$f\colon X\to Y$ of $k$-schemes, smoothness means that every source point has
affine neighbourhoods on which the induced ring map is standard smooth at the
prime of that point, where standard smoothness at a prime allows a further
principal shrinking; the condition is imposed at every source point and is
local on the source and on the target.

[F4] [[def-finite-type-and-module-finite-algebras]]: a $k$-algebra is of finite
type when it is generated by finitely many elements, so a finite-type
$k$-algebra $B$ contained in a field or ring with $k\subseteq A\subseteq B$ is
generated as an $A$-algebra by the same finite list.

[F5] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism is
locally of finite type when it is described on affine charts by finite-type
ring maps, and of finite type when it is locally of finite type and
quasi-compact.

[F6] [[lem-classical-variety-noetherian-components]]: every classical variety
is Noetherian and has finitely many irreducible components; every open or
closed subvariety has a finite affine cover; open subsets of a Noetherian space
are quasi-compact.

[F7] [[def-dimension-classical-variety]]: for a classical variety $X$ and a
closed point $x$, $\dim_xX$ is the maximum of the dimensions of the irreducible
components containing $x$, while $\dim X$ is its chain dimension; for
irreducible $X$ one has $\dim_xX=\dim X$ at every point.

[F8] [[lem-dimension-nonempty-open-subset]]: if $U$ is a nonempty open of an
irreducible classical variety $X$, then $\dim U=\dim X$, and every proper closed
subvariety $Z\subsetneq X$ has $\dim Z<\dim X$.

[F9] [[lem-irreducibility-criteria-and-open-subspaces]]: an irreducible space is
nonempty and every nonempty open subset of it is dense and irreducible.

[F10] [[def-interior-closure-boundary-top]]: the closure $\overline A$ is the
smallest closed superset of $A$, and $A$ is closed if and only if
$A=\overline A$.

[F11] [[thm-nonempty-regular-locus-reduced-variety-perfect-field]]: for a
reduced $k$-scheme $X$ of finite type over a perfect field, the regular locus
$X_{\mathrm{reg}}$ is open, its intersection with every irreducible component
is a dense open subset of that component, and $X_{\mathrm{reg}}\ne\varnothing$
whenever $X\ne\varnothing$.

[F12] [[def-singular-and-regular-loci-variety]]: for a locally Noetherian
scheme, $X_{\mathrm{reg}}=\{x:\mathcal O_{X,x}\text{ is a regular local ring}\}$;
for a reduced classical finite-type space over an algebraically closed field
and a closed point $x$, one has $x\in X_{\mathrm{reg}}$ if and only if
$\dim_{\kappa(x)}T_xX=\dim_xX$.

[F13] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]:
every field of characteristic zero is perfect, and every algebraically closed
field is perfect.

[F14] [[thm-regular-equals-smooth-over-perfect-field]]: under AC, for a perfect
field $k$ and a finite-type $k$-scheme $X$, $X$ is regular (every local ring
$\mathcal O_{X,x}$ is regular local) if and only if $X\to\operatorname{Spec}k$
is smooth in the local-standard-smooth sense.

[F15] [[def-affine-open-subscheme]]: for a scheme $X$ and open $U\subseteq X$,
the open subscheme is $(U,\mathcal O_X|_U)$, with the restricted structure
sheaf.

[F16] [[def-stalk-of-presheaf]]: the stalk at a point is the filtered colimit
of the sections over open neighbourhoods of that point; the neighbourhoods
contained in an open $U$ are cofinal, so $\mathcal O_{U,x}\cong\mathcal O_{X,x}$
canonically for $x\in U$.

[F17] [[thm-classical-principal-open-is-affine-variety]]: under AC, for an
affine variety $Z$ and $0\ne h\in k[Z]$, the principal open $D_Z(h)$ is an
affine variety with coordinate ring canonically $k[Z]_h$.

[F18] [[lem-critical-locus-image-dimension-bound]]: under AC, for $k$
algebraically closed of characteristic $0$, smooth classical varieties $X$ and
$Y$ over $k$, a morphism $f\colon X\to Y$ and $r\ge0$, the set
$C_r=\{x\in X:\operatorname{rank}d_xf\le r\}$ is closed in $X$ and
$\dim\overline{f(C_r)}\le r$, the closure being taken in $Y$.

[F19] [[def-dimension-noetherian-topological-space]]: for a Noetherian
topological space, $\dim T$ is the supremum of the lengths of strict chains of
nonempty irreducible closed subsets; the empty space has
$\dim\varnothing=-\infty$.

[F20] [[lem-smooth-map-tangent-surjectivity-criterion]]: under AC, for smooth
classical varieties $X,Y$ over algebraically closed $k$ whose structure
morphisms are smooth, a finite-type morphism $f\colon X\to Y$ and a classical
point $x\in X$, the morphism $f$ is smooth at $x$ if and only if
$d_xf\colon T_xX\to T_{f(x)}Y$ is surjective.

[F21] [[def-scheme-theoretic-fibre]]: for a morphism $f\colon X\to S$ and a
point $s\in S$, the scheme-theoretic fibre is
$X_s=X\times_S\operatorname{Spec}\kappa(s)$, viewed as a
$\kappa(s)$-scheme; empty fibres are allowed.

[F22] [[lem-points-of-fibre-primes-over-point]]: for $f\colon X\to S$ and
$s\in S$, the projection $X_s\to X$ is a homeomorphism onto $f^{-1}(s)$ with
the subspace topology and preserves residue fields.

[F23] [[lem-fibre-product-open-restriction]]: for $f\colon X\to S$ and an open
$U\subseteq S$, the open subscheme $f^{-1}(U)$ represents the fibre product
$X\times_SU$.

[F24] [[thm-fibre-products-of-schemes-exist]]: fibre products of schemes exist
with their universal property, so iterated fibre products over compatible
bases are canonically isomorphic.

[F25] [[thm-ag-standard-smooth-base-change-composition]]: a standard smooth
algebra remains standard smooth after arbitrary base change of the base ring,
and locally standard smooth morphisms are stable under arbitrary base change of
the base ring; this uses no Axiom of Choice.

[F26] [[thm-generic-fibre-dimension]]: for a dominant morphism $f\colon X\to Y$
between irreducible classical varieties there is a nonempty open
$U\subseteq Y$, contained in $f(X)$, such that every fibre $X_y$ with $y\in U$
is nonempty and has pure dimension $r=\dim X-\dim Y$.

[F27] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]:
the closed-point construction and its inverse give an equivalence between
irreducible classical $k$-varieties and integral finite-type $k$-schemes
satisfying the affine-overlap separation condition, each original point being
identified with its singleton; classical points correspond to closed points,
and classical regular maps to scheme $k$-morphisms.

[F28] [[cor-closed-points-dense-in-affine-spectra]]: under AC, every nonempty closed subset of the spectrum of a finite-type algebra over a field contains a closed point; closed points are dense in each closed subset.

## Proof

**Proof technique:** direct.

1.1 Setup and conventions. By [F2] the classical varieties $X$ and $Y$ are quasi-compact locally ringed spaces over $k$ covered by affine models, every point of either is a closed point with residue field $k$, polynomial principal opens form a basis of the topology, and their structure sheaves are sheaves of $k$-valued functions; by [F27] the irreducible classical varieties $X$ and $Y$ correspond to integral, hence reduced, finite-type $k$-schemes and $f$ to a $k$-morphism of those schemes; they are Noetherian by [F6]. Write $m=\dim X$ and $n=\dim Y$ [F7]. The field $k$ is perfect by [F13], and by hypothesis the structure morphism $X\to\operatorname{Spec}k$ is smooth [F3], so [F14] makes $X$ regular. Every $k$-morphism of finite-type $k$-schemes is of finite type: on affine charts $\operatorname{Spec}A\subseteq Y$ and $\operatorname{Spec}B\subseteq X$ with $f(\operatorname{Spec}B)\subseteq\operatorname{Spec}A$, the algebra $B$ is generated as an $A$-algebra by finitely many $k$-algebra generators [F4], so $f$ is locally of finite type [F5], and it is quasi-compact because $X$ is Noetherian, so that every open subset of $X$ is quasi-compact [F5, F6]; the same argument applies to the restriction of $f$ to any open subvariety of $X$. [F2, F3, F4, F5, F6, F7, F13, F14, F27, given]

1.2 The non-dominant case. Suppose $f$ is not dominant, so the closure $Z:=\overline{f(X)}$ is a closed subset of $Y$ with $Z\ne Y$ [F10]. Its complement $U:=Y\setminus Z$ is open and nonempty, and it is dense in $Y$ because a nonempty open subset of the irreducible space $Y$ is dense [F9]; moreover $f(X)\subseteq Z$, so $f^{-1}(U)=\varnothing$. The empty morphism $\varnothing\to U$ is smooth by [F3], the standard-smooth condition being imposed at every source point and the empty source having none; the empty scheme is a classical variety and the morphism is of finite type because its source is quasi-compact. Thus claim 1 holds in this case with this $U$. [F2, F3, F9, F10, given]

1.3 The dominant case: reduction to the regular locus of the target. Suppose now that $f$ is dominant. The regular locus $Y_{\mathrm{reg}}$ [F12] of $Y$, a reduced finite-type $k$-scheme over the perfect field $k$ [F27], is a nonempty open subset of $Y$ whose intersection with every irreducible component of $Y$ is dense open in that component [F11]; since $Y$ is irreducible, $Y_{\mathrm{reg}}$ is nonempty, open and dense, hence irreducible [F9], and $\dim Y_{\mathrm{reg}}=\dim Y=n$ [F8]. At every $y\in Y_{\mathrm{reg}}$ the local ring $\mathcal O_{Y_{\mathrm{reg}},y}\cong\mathcal O_{Y,y}$ is regular [F12, F15, F16], and $Y_{\mathrm{reg}}$ is of finite type over the perfect field $k$ [F2, F13], so $Y_{\mathrm{reg}}\to\operatorname{Spec}k$ is smooth by [F14]. The open subvariety $Y_{\mathrm{reg}}$ is itself a classical variety over $k$: it is quasi-compact because $Y$ is Noetherian [F6], and its intersections with the affine models of $Y$ are covered by principal opens, which are affine models by [F17]. Similarly $X_0:=f^{-1}(Y_{\mathrm{reg}})$ is an open subvariety of $X$, hence a classical variety over $k$, it is nonempty because the dense subset $f(X)$ meets the nonempty open set $Y_{\mathrm{reg}}$ [F9, F10], it is irreducible with $\dim X_0=\dim X=m$ [F8, F9], and its structure morphism $X_0\to\operatorname{Spec}k$ is smooth by locality on the source [F3]. The restriction $f_0:=f|_{X_0}\colon X_0\to Y_{\mathrm{reg}}$ is a finite-type morphism of classical varieties: on affine charts $\operatorname{Spec}A\subseteq Y_{\mathrm{reg}}$ and $\operatorname{Spec}B\subseteq X_0$ with $f_0(\operatorname{Spec}B)\subseteq\operatorname{Spec}A$ the algebra $B$ is generated as an $A$-algebra by finitely many $k$-algebra generators [F4, F5], and $f_0$ is quasi-compact because $X_0$ is Noetherian, so that every open subset of $X_0$ is quasi-compact [F5, F6]. [F2, F3, F4, F5, F6, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F27, given]

2.1 The rank-$(n-1)$ locus and the open set. Let $C=\{x\in X_0:\operatorname{rank}d_xf_0\le n-1\}$. If $n\ge1$, then [F18] applied to the morphism $f_0$ of smooth classical varieties with $r=n-1\ge0$ shows that $C$ is closed in $X_0$ and that the closed subvariety $Z:=\overline{f_0(C)}\subseteq Y_{\mathrm{reg}}$ satisfies $\dim Z\le n-1$; if $n=0$, then $C=\varnothing$ because ranks are nonnegative, so $Z=\varnothing$ and $\dim Z=-\infty\le-1$ [F19]. In either case $Z\ne Y_{\mathrm{reg}}$: when $n\ge1$ because $\dim Y_{\mathrm{reg}}=n>n-1\ge\dim Z$ by step 1.3, and when $n=0$ because $Z=\varnothing$ while $Y_{\mathrm{reg}}\ne\varnothing$ by step 1.3. Put $U:=Y_{\mathrm{reg}}\setminus Z$; then $U$ is open in $Y_{\mathrm{reg}}$ and in $Y$, it is nonempty because $Z\ne Y_{\mathrm{reg}}$, and it is dense in $Y$ because a nonempty open subset of the irreducible space $Y$ is dense [F9]. Also $X':=f^{-1}(U)=f_0^{-1}(U)$ is a nonempty open subvariety of $X_0$ because $f$ is dominant and $U$ is nonempty open [F9, F10]. [F9, F10, F18, F19, step 1.3, given]

3.1 The rank equals $n$ on $f^{-1}(U)$. Let $x$ be a classical closed point of $X'=f^{-1}(U)$, so $x\in X_0$ and $f(x)\in U\subseteq Y_{\mathrm{reg}}$ by step 2.1. Then $x\notin C$, so $\operatorname{rank}d_xf_0\ge n$ by the definition of $C$; on the other hand $\operatorname{rank}d_xf_0\le\dim_kT_{f(x)}Y_{\mathrm{reg}}$ because $d_xf_0$ is a $k$-linear map into that finite-dimensional space. Since $f(x)$ is a regular point of the classical variety $Y_{\mathrm{reg}}$ we have $\dim_kT_{f(x)}Y_{\mathrm{reg}}=\dim_{f(x)}Y_{\mathrm{reg}}$ [F12], and since $Y_{\mathrm{reg}}$ is irreducible of dimension $n$ [step 1.3] this equals $\dim Y_{\mathrm{reg}}=n=\dim Y$ [F7, F8]. Hence $\operatorname{rank}d_xf_0=n$, and $d_xf_0$ is surjective. [F7, F8, F12, step 2.1, given]

4.1 From closed points to every scheme point. At each classical closed point $x\in X'$ the morphism $f_0:X_0\to Y_{\mathrm{reg}}$ is between smooth classical varieties with their smooth scheme structures and is of finite type by step 1.3. Its differential is surjective by step 3.1, so [F20] gives smoothness at $x$. Restricting over $U$ preserves this local property by [F3]; hence $g:X'=f^{-1}(U)\to U$ is smooth at every closed point. Let $S\subseteq X'$ be the scheme smooth locus of $g$. It is open: a standard smooth presentation after principal shrinking, as in [F3], witnesses smoothness at every prime of that shrinking, since its Jacobian minor is a unit there. If $X'\setminus S$ were nonempty, intersect it with an affine chart $\operatorname{Spec}B$ of the finite-type scheme $X'$. The intersection is a nonempty closed subset, and [F28] gives a closed point of that chart in it. By [F27] this is a classical point of $X'$, contrary to the closed-point conclusion just proved. Thus $S=X'$, and $g$ is smooth at every scheme point. This proves claim 1. [F2, F3, F20, F27, F28, step 1.3, step 2.1, step 3.1, given]

5.1 The fibres over the further open set. Suppose $f$ is dominant and let $U$ be the dense open set of step 2.1, over which $f^{-1}(U)\to U$ is smooth by step 4.1. By [F26] there is a nonempty open $V_1\subseteq Y$, contained in $f(X)$, such that for every closed point $y\in V_1$ the fibre $f^{-1}(y)$ is nonempty and of pure dimension $r=m-n=\dim X-\dim Y$; put $V:=U\cap V_1$, a nonempty open subset of the irreducible $Y$, hence dense [F9]. For a closed point $y\in V$, so that $k(y)=k$, the scheme-theoretic fibre $X_y=X\times_Y\operatorname{Spec}k(y)$ [F21] has underlying topological space $f^{-1}(y)$ by [F22], so $X_y$ is nonempty. The classical fibre in [F26] is its closed-point space. Closed-point density [F28] identifies closed subsets and irreducible components of the scheme fibre with their classical traces, chart by chart, preserving strict chains and dimensions; nilpotents do not affect these spaces. Thus $X_y$ has pure dimension $r$. For smoothness, the fibre product $X\times_YU$ is represented by the open subscheme $f^{-1}(U)\subseteq X$ by [F23], and the universal property of fibre products [F24] gives a canonical isomorphism $X_y\cong f^{-1}(U)\times_U\operatorname{Spec}k(y)$; the projection on the right is the base change of the smooth morphism $f^{-1}(U)\to U$ along $\operatorname{Spec}k(y)\to U$, hence is smooth over $k$ because locally standard smooth morphisms are stable under base change [F25]. Therefore every fibre $X_y$ with closed $y\in V$ is nonempty, smooth over $k$, and of pure dimension $r=\dim X-\dim Y$. [F9, F21, F22, F23, F24, F25, F26, F28, step 2.1, step 4.1, given]

6.1 Boundary and scope dispositions. Empty: in the non-dominant case $f^{-1}(U)=\varnothing$ and the empty morphism $\varnothing\to U$ is smooth vacuously (step 1.2); in the dominant case $X$ and $Y$ are nonempty because irreducible [F9], the open sets $Y_{\mathrm{reg}}$, $U$ and $V$ are nonempty by steps 1.3, 2.1 and 5.1, and the fibres over $V$ are nonempty by step 5.1, so no empty-fibre convention is invoked in claim 2. Zero: the target dimension $n=0$ is admitted; then $C=Z=\varnothing$, $U=Y_{\mathrm{reg}}$ and the rank computation of step 3.1 reads $0\le\operatorname{rank}d_xf_0\le 0$, while the fibre clause gives a single fibre of pure dimension $r=m$; the relative dimension $r=0$ is likewise admitted in step 5.1, where smooth fibres of pure dimension zero are finite reduced $k$-schemes, and nothing in the argument divides by $r$. One: no step divides by a natural number, selects a basis, or requires a positive dimension, codimension, or number of equations; the cases $n=1$ with $r=0$ or $r=1$ are covered by the same steps 2.1 through 5.1. Degenerate: the smoothness of $X$ is essential for claim 1 and is used through the critical-locus bound [F18] in step 2.1 and the submersion criterion [F20] in step 4.1; the constant cusp family $X=\operatorname{Spec}k[x,y,z]/(y^2-x^3)\to\mathbb A^1_k$, $(x,y,z)\mapsto z$, is a dominant morphism of irreducible classical varieties over $k$ to a smooth target whose every fibre is the singular cusp, so that no nonempty open $U$ has $f^{-1}(U)\to U$ smooth, as recorded on the counterexample page of this pair. The target $Y$ need not be smooth outside $Y_{\mathrm{reg}}$: for the fold $f\colon\mathbb A^1_k\to\mathbb A^1_k$, $t\mapsto t^2$, the differential vanishes at $0$, the fibre over $0$ is the non-reduced $\operatorname{Spec}k[\epsilon]/(\epsilon^2)$, and $U=\mathbb A^1_k\setminus\{0\}$ is the best possible dense open, while the constant morphism $\mathbb A^1_k\to\mathbb A^1_k$ with value $0$ has $f^{-1}(U)=\varnothing$ for $U=\mathbb A^1_k\setminus\{0\}$; the fibres of step 5.1 are not asserted to be irreducible or connected. Endpoints: the statement has no interval parameter; the boundary $n=0$ versus $n\ge1$ is handled in step 2.1 through the convention $\dim\varnothing=-\infty\le-1$ of [F19] and the trivial lower bound in step 3.1, and the open sets $U,V$ are dense but need not be all of $Y$, as the fold example shows; the generic fibre dimension is constant over $V$ by construction and not merely bounded. Nonempty-choice: AC is declared as [F1] and enters exactly through the AC-assuming suppliers [F11] (density of the regular locus), [F12] (the classical regular-point tangent test), [F14] (regularity versus smoothness), [F18] (the critical-locus dimension bound), [F20] (the submersion criterion) [F26] (generic fibre dimension), and [F28] (closed-point density), cited at steps 1.3, 2.1, 3.1, 4.1 and 5.1; the finite-type verification of step 1.1, the fibre-product pasting and base-change smoothing of step 5.1, and the remaining linear algebra are choice-free, and no family of nonempty sets is selected anywhere. Biconditional directions: the statement asserts no equivalence, so the forward and reverse directions of a biconditional are not applicable; the two equivalences used in the proof — the submersion criterion [F20], applied in the direction "surjective differential at a classical point implies smoothness there" in step 4.1, and regularity-versus-smoothness [F14], applied in the direction "regular implies smooth" in step 1.3 for $Y_{\mathrm{reg}}$ — are used only in those directions, and no converse of the theorem is claimed. [F1, F9, F11, F12, F14, F18, F19, F20, F26, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1, given] ∎

## Source qualification

Vakil, Classes 51–52, §3.3, proves the corresponding target-open statement for
a morphism $f\colon X\to Y$ of $k$-varieties with $\operatorname{char}k=0$ and
$X$ smooth: there is a dense open subset of $Y$ over which the restricted
morphism is smooth, with the explicit warning that the inverse image may be
empty when $f$ is not dominant; the proof restricts to the smooth locus of
$Y$, removes the closure of the image of the rank-$(n-1)$ locus using the
§3.4 lemma, and then invokes the submersion criterion ("Hard Exercise 2.2")
at every remaining closed point. The present theorem keeps the scaffold's
hypotheses that $X$ and $Y$ are irreducible and makes the conclusion
scheme-precise: the open set is produced by the authored critical-locus bound
of this pair, the fibres in claim 2 are the scheme-theoretic fibres, and their
smoothness is obtained from stability of locally standard smooth morphisms
under base change rather than from a separate fibre-smoothness theorem. The
second clause is the Bertini–Sard statement of Arapura, Theorem 5.4.2
(printed p. 34), which for a dominant morphism of nonsingular varieties over a
field of characteristic $0$ produces a nonempty open set of the target over
which the fibres are nonsingular with surjective differentials at every point;
Arapura does not state nonemptiness of the fibres, pure dimension, or the
non-dominant case, and refers for its proof to Hartshorne III 10.7, which is
not used here. Vakil's "for pedants" remark generalizes the hypotheses to
morphisms of locally Noetherian schemes over $\mathbb Q$; the statement above
keeps the algebraically closed characteristic-$0$ form. The
characteristic-$0$ hypothesis is essential: the Frobenius morphism on
$\mathbb A^1_k$ in characteristic $p$ has vanishing differential everywhere,
and the constant cusp family over $\mathbb A^1_k$ shows that target-open
generic smoothness fails without smoothness of the source; both are recorded
on the counterexample page of this pair.
