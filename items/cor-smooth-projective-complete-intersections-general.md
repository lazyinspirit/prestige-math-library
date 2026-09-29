---
id: cor-smooth-projective-complete-intersections-general
kind: corollary
title: "General hypersurfaces give smooth complete intersections"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-closed-points-dense-in-affine-spectra
  - cor-closed-points-of-spectrum-are-maximal-ideals
  - cor-dimension-affine-and-projective-space
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-homogeneous-polynomial-becomes-hyperplane-section
  - cor-projective-variety-product-exists
  - def-ag-standard-smooth-algebra
  - def-algebraically-closed-field
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension-classical-variety
  - def-finite-type-and-module-finite-algebras
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-jacobian-matrix-affine-algebraic-set
  - def-linear-system-base-locus
  - def-locally-finite-type-and-finite-type-morphism
  - def-projective-algebraic-set
  - def-projective-space-points
  - def-projective-variety-classical
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-classical
  - def-smooth-relative-dimension-via-differentials
  - def-veronese-map
  - def-zariski-tangent-space-point
  - lem-ag-polynomial-quotient-differentials
  - lem-ag-standard-smooth-regular-geometric-fibres
  - lem-classical-affine-closed-points-are-maximal-ideals
  - lem-dimension-nonempty-open-subset
  - lem-fibre-product-open-restriction
  - lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - lem-local-dimension-reduced-variety-components
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring
  - lem-projective-hypersurface-dimension-drop
  - lem-projective-irreducibility-homogeneous-prime
  - lem-smooth-map-tangent-surjectivity-criterion
  - lem-standard-projective-opens-are-affine-spaces
  - lem-subscheme-intersection-fibre-product
  - lem-tangent-space-functoriality-classical
  - lem-veronese-map-well-defined-closed-immersion
  - lem-zero-dimensional-classical-variety-finite
  - lem-zero-scheme-of-line-bundle-section
  - thm-bertini-smooth-hyperplane-section
  - thm-classical-projective-projection-closed
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-jacobian-criterion-affine-variety
  - thm-regular-equals-smooth-over-perfect-field
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-regular-locus-is-open-variety
  - thm-right-exactness-of-tensor-products
  - thm-zariski-tangent-space-jacobian-kernel
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §5.4, Theorem 5.4.5 and the discussion preceding it, printed pp. 38–39; general hypersurface statement on p. 39"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51–52, §3.9 Corollary and §3.10–3.11, printed pp. 10–11"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
    - title: "Robin Hartshorne, Algebraic Geometry, Chapter II, Theorem 8.18 and Chapter III, Corollary 10.9"
      url: https://doi.org/10.1007/978-1-4757-3849-0
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field of characteristic $0$ and let
$X\subseteq\mathbf P^N_k$ be a nonempty smooth projective classical variety
over $k$ of pure dimension $d$ ([[def-projective-variety-classical]],
[[def-dimension-classical-variety]]). Fix an integer $r\ge0$ and positive
degrees $e_1,\dots,e_r$. For each $i$ let
$S_{e_i}=k[x_0,\dots,x_N]_{e_i}$ be the space of degree-$e_i$ forms
([[def-homogeneous-polynomial-and-homogeneous-ideal]]) and let
$\mathbf P(S_{e_i})$ be its projective space of lines, the parameter space of
degree-$e_i$ hypersurfaces ([[def-linear-system-base-locus]]); put
$$\Pi_r=\mathbf P(S_{e_1})\times_k\cdots\times_k\mathbf P(S_{e_r}),$$
the product of hypersurface parameter spaces, and $\Pi_0=\operatorname{Spec}k$
for the empty tuple. For a tuple $(F_1,\dots,F_r)$ of nonzero forms
$F_i\in S_{e_i}$ let
$$Z(F_1,\dots,F_r)=X\cap V_+(F_1)\cap\cdots\cap V_+(F_r)$$
be the scheme-theoretic intersection inside $\mathbf P^N_k$
([[lem-subscheme-intersection-fibre-product]]); it depends only on the
parameter point $([F_1],\dots,[F_r])\in\Pi_r$.

Then:

1. (nonempty intersections) if $0\le r\le d$ there is a nonempty Zariski-open
   subset $U\subseteq\Pi_r$ such that for every closed point of $U$
   (equivalently, by
   [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]],
   every classical parameter), with representatives $F_1,\dots,F_r$, the
   closed subscheme $Z(F_1,\dots,F_r)\subseteq X$ is nonempty, smooth over $k$
   ([[def-smooth-morphism-classical]]) and of pure dimension $d-r$. For $r=0$
   this says that $X$ itself is nonempty, smooth over $k$ and of pure dimension
   $d$, with $\Pi_0=\operatorname{Spec}k$;
2. (empty intersections) if $r>d$ there is a nonempty Zariski-open subset
   $U\subseteq\Pi_r$ such that for every closed point of $U$, with
   representatives $F_1,\dots,F_r$, one has $Z(F_1,\dots,F_r)=\varnothing$.

No claim is made about the tuples outside $U$, about the size or density of
$U$, about the irreducibility or connectedness of the members, or about
singular $X$.

## Facts & Assumptions
**Given:** The Axiom of Choice; an algebraically closed field $k$ of
characteristic $0$; a nonempty smooth projective classical variety
$X\subseteq\mathbf P^N_k$ of pure dimension $d$; an integer $r\ge0$; positive
degrees $e_1,\dots,e_r$; the spaces $S_{e_i}$ of degree-$e_i$ forms, the
parameter spaces $\mathbf P(S_{e_i})$, the product $\Pi_r$, and the
scheme-theoretic intersections $Z(F_1,\dots,F_r)$.

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets
has a choice function.

[F2] [[def-projective-variety-classical]] and
[[def-dimension-classical-variety]]: a classical projective variety over $k$
is a nonempty irreducible projective algebraic set with its standard affine
charts; for a classical variety $X$ with irreducible components
$X_1,\dots,X_m$ and a closed point $x$, $\dim_xX=\max_{x\in X_i}\dim X_i$, and
$X$ has pure dimension $d$ if every component has dimension $d$. An open
subvariety of a variety is a variety, and the local dimension at a closed
point of an irreducible variety of dimension $d$ equals $d$.

[F3] [[def-projective-algebraic-set]] and [[def-projective-space-points]]:
for homogeneous $T\subseteq k[x_0,\dots,x_n]$,
$V_+(T)=\{[a]\in\mathbf P^n_k:F(a)=0\text{ for all }F\in T\}$, with
$V_+(\varnothing)=\mathbf P^n_k$ and
$V_+((x_0,\dots,x_n))=\varnothing$; and
$\mathbf P^n_k=(k^{n+1}\smallsetminus\{0\})/\sim$ with $a\sim b$ exactly when
$b=\lambda a$ for some $\lambda\in k^\times$. By
[[def-algebraically-closed-field]], $k$ is infinite and has no nontrivial
finite extensions.

[F4] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is
homogeneous of degree $e$ when every occurring monomial has total degree $e$;
the degree-$e$ part of the polynomial ring is denoted
$k[x_0,\dots,x_N]_e$, and it is a $k$-vector space of finite dimension. If
$F$ is homogeneous of degree $e$ and $\lambda\in k^\times$, then the ideal
$(\lambda F)$ equals $(F)$.

[F5] [[lem-standard-projective-opens-are-affine-spaces]]: for every $i$,
normalization of the $i$-th coordinate identifies
$D_+(x_i)\subseteq\mathbf P^n_k$ with $\mathbf A^n_k=k^n$, and transporting
polynomial functions gives compatible regular-function structures; the opens
$D_+(x_i)$ cover $\mathbf P^n_k$.

[F6] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a
classical algebraic prevariety over $k$ is a quasi-compact locally ringed
space covered by open subspaces isomorphic to polynomial zero sets, its
regular maps are the morphisms of locally ringed spaces, and a classical
algebraic variety is a prevariety whose "equalizer of regular maps" separation
condition holds; varieties may be reducible or empty, and closed
subvarieties and nonempty open subvarieties of varieties are varieties.

[F7] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]:
the closed-point construction and its inverse give an equivalence between
irreducible classical $k$-varieties and integral finite-type $k$-schemes
satisfying the affine-overlap separation condition; classical points
correspond to closed points and classical regular maps to scheme
$k$-morphisms.

[F8] [[cor-closed-points-dense-in-affine-spectra]],
[[cor-closed-points-of-spectrum-are-maximal-ideals]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]] and
[[lem-classical-affine-closed-points-are-maximal-ideals]]: for a finite-type
$k$-algebra $A$ and a closed $Z\subseteq\operatorname{Spec}A$, every nonempty
open subset of $Z$ contains a closed point of $\operatorname{Spec}A$; a prime
$\mathfrak p$ of a commutative ring is closed in $\operatorname{Spec}R$ if
and only if it is maximal; a maximal ideal of a finite-type $k$-algebra has
finite residue field, equal to $k$ when $k$ is algebraically closed; and for
a classical affine algebraic set the classical points are the maximal ideals.

[F9] [[def-smooth-morphism-classical]]: a morphism of finite-type
$k$-schemes is smooth if every source point has affine neighbourhoods on
which the induced ring map is standard smooth at that prime; the condition is
local on the source and on the target and is imposed at every source point,
and the structure morphism $\mathbf A^r_k\to\operatorname{Spec}k$ is smooth
by the trivial standard smooth presentation.

[F10] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation
$B\cong\bigl(A[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$ has a $c\times c$
minor of the Jacobian matrix invertible in $B$ and relative dimension $n-c$;
a polynomial algebra $A[x_1,\dots,x_n]_g$ (the case $c=0$) is standard smooth
of relative dimension $n$.

[F11] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]:
every field of characteristic zero is perfect, and every algebraically
closed field is perfect.

[F12] [[thm-regular-equals-smooth-over-perfect-field]]: for a perfect field
$k$ and a finite-type $k$-scheme $X$, $X$ is regular (every local ring
$\mathcal O_{X,x}$ is regular local) if and only if
$X\to\operatorname{Spec}k$ is smooth under the convention of [F9].

[F13] [[thm-regular-locus-is-open-variety]]: for a perfect field $k$ and a
finite-type $k$-scheme $X$, the regular locus
$X_{\mathrm{reg}}=\{x: \mathcal O_{X,x}\text{ is a regular local ring}\}$ is
open in $X$.

[F14] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: a regular
local ring is a domain (and Cohen-Macaulay).

[F15] [[def-regular-local-ring-geometric-point]]: for a point $x$ of a
locally Noetherian scheme, $x$ is regular exactly when
$\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$, where
$T_xX=\operatorname{Hom}_{\kappa(x)}(\mathfrak m_x/\mathfrak m_x^2,\kappa(x))$
is the intrinsic Zariski tangent space of
[[def-zariski-tangent-space-point]].

[F16] [[lem-local-dimension-reduced-variety-components]]: under AC, for a
reduced classical finite-type space $Z$ over algebraically closed $k$ and a
closed point $x$, $\dim\mathcal O_{Z,x}$ equals the maximum of $\dim Z_i$
over the irreducible components $Z_i$ of $Z$ containing $x$.

[F17] [[lem-noetherian-space-has-finitely-many-irreducible-components]] and
[[lem-irreducible-components-of-a-topological-space]]: a Noetherian
topological space has only finitely many irreducible components; every
irreducible component is closed; every irreducible subset is contained in an
irreducible component; and every point lies on an irreducible component.

[F18] [[lem-irreducibility-criteria-and-open-subspaces]]: a space is
irreducible if and only if it is nonempty and every two nonempty open subsets
meet; a nonempty open subspace of an irreducible space is irreducible; and an
irreducible subset contained in a finite union of closed subsets is contained
in one of them (if $C\subseteq F_1\cup\cdots\cup F_t$ with each $F_j$ closed
and $C$ irreducible, then $C\subseteq F_j$ for some $j$).

[F19] [[lem-dimension-nonempty-open-subset]]: a nonempty open subset of an
irreducible classical variety has the same dimension as the variety, and a
proper closed subvariety has strictly smaller dimension.

[F20] [[cor-dimension-affine-and-projective-space]]: for every $n\ge0$,
$\dim\mathbf A^n_k=\dim\mathbf P^n_k=n$.

[F21] [[lem-subscheme-intersection-fibre-product]]: the scheme-theoretic
intersection of finitely many closed subschemes of a scheme is their iterated
fibre product and is cut out by the sum of their ideal sheaves; the empty
intersection is the whole scheme.

[F22] [[lem-fibre-product-open-restriction]]: fibre products commute with
restriction to open subschemes, so the restriction of a scheme-theoretic
intersection to an open subscheme is computed there.

[F23] [[def-linear-system-base-locus]]: for a $k$-scheme $X$, an invertible
$\mathcal O_X$-module $L$ and a nonzero finite-dimensional linear system
$W\subseteq\Gamma(X,L)$, the parameter space is
$\mathbf P(W)=(W\smallsetminus\{0\})/k^\times$ with the projective Zariski
topology, independent of a basis; the base locus
$\operatorname{Bs}(W)$ is closed; and for a fixed projective embedding the
hyperplane system is the span of the restrictions of the degree-one forms.

[F24] [[lem-projective-irreducibility-homogeneous-prime]]: over algebraically
closed $k$, a nonempty projective algebraic set is irreducible if and only if
its homogeneous vanishing ideal is prime. In particular $\mathbf P^n_k$ is
irreducible, since the vanishing ideal of $\mathbf P^n_k$ is $(0)$.

[F25] [[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]:
for a finite-dimensional vector space $V$ over an infinite field $F$, no
finite family of proper linear subspaces of $V$ has union $V$.

[F26] [[lem-projective-hypersurface-dimension-drop]]: under AC, if
$Y\subseteq\mathbf P^N_k$ is irreducible of dimension $m\ge1$ and $f$ is
homogeneous of positive degree not vanishing identically on $Y$, then
$Y\cap V_+(f)$ is nonempty and every irreducible component of it has
dimension $m-1$.

[F27] [[cor-homogeneous-polynomial-becomes-hyperplane-section]]: if $n\ge1$
and $F$ is a nonzero homogeneous polynomial of degree $d\ge1$ on
$\mathbf P^n$, then the linear form $L$ whose coefficients are those of $F$
in the ordered Veronese coordinates satisfies $V_+(F)=\nu_{n,d}^{-1}(H)$ for
$H=V_+(L)$ on underlying sets, and the proof of the item records the
pointwise identity $L(\nu_{n,d}([x]))=F(x)$.

[F28] [[def-veronese-map]] and
[[lem-veronese-map-well-defined-closed-immersion]]: for $d\ge1$ the map
$\nu_{n,d}\colon\mathbf P^n_k\to\mathbf P^N_k$,
$[x]\mapsto[M_0(x):\cdots:M_N(x)]$ over all degree-$d$ monomials, is a
well-defined closed immersion of projective varieties.

[F29] [[thm-bertini-smooth-hyperplane-section]]: under AC, for $k$
algebraically closed of characteristic $0$, a smooth finite-type
quasi-projective $k$-scheme $X$ (locally closed immersion into a projective
space), an invertible $\mathcal O_X$-module $L$ and a nonzero
finite-dimensional linear system $W\subseteq\Gamma(X,L)$ with
$\dim_kW=r+1$, base locus $\operatorname{Bs}(W)$ and
$X^\circ=X\smallsetminus\operatorname{Bs}(W)$, there is a nonempty
Zariski-open $U\subseteq\mathbf P(W)$ such that for every closed point
$[s]\in U$ the zero scheme $Z(s)\cap X^\circ$ is smooth over $k$; in
particular, for a fixed locally closed immersion $X\hookrightarrow\mathbf P^N_k$
with $X\ne\varnothing$, the hyperplane system
$W_h\subseteq\Gamma(X,\mathcal O_X(1))$ has empty base locus and there is a
nonempty Zariski-open $U\subseteq\mathbf P(W_h)$ such that for every closed
point $[s]\in U$ the scheme-theoretic hyperplane section
$X\times_{\mathbf P^N_k}V_+(F)$, for any degree-one form $F$ with $F|_X=s$,
is smooth over $k$.

[F30] [[cor-projective-variety-product-exists]]: nonempty projective
varieties $X\subseteq\mathbf P^m_k$ and $Y\subseteq\mathbf P^n_k$ have a
product, realized as their Segre image, and that product is a projective
variety.

[F31] [[thm-classical-projective-projection-closed]]: under AC, for every
classical variety $Y$ and $N\ge0$ the projection
$p\colon Y\times\mathbf P^N_k\to Y$ is a closed map.

[F32] [[def-jacobian-matrix-affine-algebraic-set]] and
[[thm-zariski-tangent-space-jacobian-kernel]]: for a finite-type affine
$k$-scheme $\operatorname{Spec}(k[t_1,\dots,t_n]/I)$ and a $k$-rational point
$a$ with equation-row Jacobian $J(a)$ of a chosen finite generating list of
$I$, the tangent space $T_a$ is canonically $\ker J(a)$ in $k^n$, and the
kernel is independent of the chosen generating list of the actual ideal.

[F33] [[thm-jacobian-criterion-affine-variety]]: under AC, for
$A=P/I$ with $P=k[t_1,\dots,t_n]$ and a specified finite generating list of
the actual ideal $I$, and for a maximal ideal $\mathfrak m$ with
$L=A/\mathfrak m$: if $k$ is perfect then
$\operatorname{rank}_LJ(\mathfrak m)=n-\dim A_{\mathfrak m}$ if and only if
$A_{\mathfrak m}$ is regular local; at a $k$-rational point the same
equivalence holds for every field $k$; and if $I=I(X)$ for a reduced
classical affine algebraic set $X$ over algebraically closed $k$ and
$\mathfrak m$ corresponds to a closed point $x$, then
$\dim A_{\mathfrak m}=\dim_xX$. The generating list need not be minimal and
$I$ need not be radical in the first two assertions.

[F34] [[lem-ag-polynomial-quotient-differentials]] and
[[thm-right-exactness-of-tensor-products]]: for $B=P/I$ with
$I=(f_1,\dots,f_c)$, the module $\Omega_{B/A}$ is the cokernel of the
transpose of the row-oriented Jacobian matrix of $f_1,\dots,f_c$; tensoring
a cokernel presentation with a module preserves the cokernel, so the fibre
dimension of $\Omega$ at a point equals the source rank minus the rank of
the Jacobian matrix over the residue field.

[F35] [[def-smooth-relative-dimension-via-differentials]] and
[[lem-ag-standard-smooth-regular-geometric-fibres]]: a standard smooth
presentation of relative dimension $n$ presents $\Omega_{B/A}$ as a free
module of rank $n$; conversely the differential rank alone is not smoothness;
and for a standard smooth $R$-algebra $S$ with presentation of relative
dimension $n-c$, every irreducible component of the base-changed spectrum
$S\otimes_R\kappa(\mathfrak p)\otimes_\kappa K$ has dimension $n-c$.

[F36] [[lem-smooth-map-tangent-surjectivity-criterion]]: under AC, for
algebraically closed $k$, smooth classical varieties $X,Y$ over $k$ with
their finite-type $k$-scheme structures, a finite-type morphism
$f\colon X\to Y$ and a classical closed point $x\in X$ with $y=f(x)$: $f$ is
smooth at $x$ if and only if $d_xf\colon T_xX\to T_yY$ is surjective; if
these conditions hold, the scheme-theoretic fibre
$X_y=X\times_Y\operatorname{Spec}k$ has a regular local ring at $x$ of
dimension $\dim_xX-\dim_yY$; and for every such $f$, whether or not it is
smooth at $x$, the fibre tangent space is canonically
$T_x(X_y)=\ker(d_xf)$.

[F37] [[lem-tangent-space-functoriality-classical]]: a $k$-open immersion
induces a tangent-space isomorphism at every rational point; no finite-type,
reducedness, or smoothness hypothesis is needed.

[F38] [[lem-zero-dimensional-classical-variety-finite]]: a classical variety
$X$ has $\dim X\le0$ if and only if its underlying set is finite; the empty
set is included, and a nonempty irreducible variety of dimension zero is a
point.

[F39] [[def-locally-finite-type-and-finite-type-morphism]],
[[def-finite-type-and-module-finite-algebras]] and
[[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]:
finite-type $k$-schemes are quasi-compact locally of finite type, their
affine charts have finitely generated coordinate rings, and polynomial
algebras in finitely many variables over a field are Noetherian, so ideals
in the affine charts admit finite generating lists.

[F40] [[lem-zero-scheme-of-line-bundle-section]]: a section of an invertible
sheaf has a canonical closed zero subscheme, cut out on each affine
trivializing chart by its local equation and independent of the chosen
trivializations. By [[def-closed-immersion-schemes]], a closed immersion is a
homeomorphism onto its closed image with a surjective structure-sheaf map;
composing two closed immersions again has both properties, since the direct
image of the second surjection is surjective on stalks.

[F41] [[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]:
over an infinite field, a nonzero polynomial in finitely many variables
cannot vanish at every field-valued tuple.



## Proof

**Proof technique:** direct.

1.1 Setup and the dictionary. By [F1] AC is available. The field $k$ is algebraically closed of characteristic $0$, hence perfect and infinite by [F3] and [F11]. By [F2] the variety $X$ is a nonempty irreducible projective algebraic set of pure dimension $d$, so it is reduced by the definition in [F6]; under the equivalence [F7] the associated finite-type $k$-scheme $X$ is integral and separated, with closed points corresponding to classical points and with residue field $k$ at every closed point. The structure morphism $X\to\operatorname{Spec}k$ is smooth in the sense of [F9], so by [F12] every local ring of $X$ is regular, and since $X$ is irreducible with component $X$ of dimension $d$, [F16] gives $\dim\mathcal O_{X,x}=d$ for every closed point $x\in X$; by [F9] the nonempty open subvarieties $X_j=X\cap D_+(x_j)$ are smooth over $k$ of pure dimension $d$, and by [F19] they are irreducible of dimension $d$. [F1, F2, F3, F6, F7, F9, F11, F12, F16, F19]

1.2 The parameter spaces. For $e\ge1$ put $S_e=k[x_0,\dots,x_N]_e$, a finite-dimensional $k$-vector space by [F4], and let $\mathbf P(S_e)=(S_e\smallsetminus\{0\})/k^\times$ be the space of lines with the projective Zariski topology of [F23]; choosing a basis identifies it with a projective space $\mathbf P^{M_e}_k$, whose dimension is $M_e$. Its homogeneous vanishing ideal is $(0)$: if a nonzero homogeneous polynomial vanished at every point of $\mathbf P^{M_e}_k$, it would vanish at every nonzero tuple of $k^{M_e+1}$ and also at the zero tuple when its degree is positive, contradicting the polynomial nonvanishing theorem [F41] over the infinite field $k$; a nonzero constant cannot vanish anywhere. The zero ideal is prime because the coordinate polynomial ring over $k$ is a domain [F4], so $\mathbf P(S_e)$ is a nonempty irreducible projective variety by [F2] and [F24]. Consequently $\Pi_r=\mathbf P(S_{e_1})\times_k\cdots\times_k\mathbf P(S_{e_r})$ is a nonempty classical projective variety for every $r\ge1$, by [F30] applied iteratively, and $\Pi_0=\operatorname{Spec}k$ is a one-point classical variety; the classical points of $\mathbf P(S_e)$ are exactly the lines $[F]$ with $0\ne F\in S_e$ by [F23], and those of $\Pi_r$ are the tuples of lines. [F2, F3, F4, F23, F24, F30, F41]

1.3 The intersection subschemes and their local equations. For $0\ne F\in S_e$ let $V_+(F)$ be the zero subscheme of the section of $\mathcal O_{\mathbf P^N_k}(e)$ represented by $F$, supplied by [F40]; on the standard chart $D_+(x_j)$ is cut out by the dehomogenized form $f=(F/x_j^e)$ regarded as a polynomial in the coordinates $y_1,\dots,y_N$ of [F5]; the two dehomogenizations of $F$ on an overlap $D_+(x_j)\cap D_+(x_k)$ differ by the unit $(x_k/x_j)^e$ (with $x_j=1$ on the first chart), so the principal ideals agree and [F40] gives the well-defined closed subscheme with underlying set the classical hypersurface $V_+(F)$ of [F3]; clearly $(F)=(\lambda F)$ for $\lambda\ne0$ by [F4], so $V_+(F)$ depends only on the line $[F]$. For a tuple $F_1,\dots,F_r$ put $Z(F_1,\dots,F_r)=X\cap V_+(F_1)\cap\cdots\cap V_+(F_r)$, the scheme-theoretic intersection of closed subschemes of $\mathbf P^N_k$ in the sense of [F21], a closed subscheme of $X$ depending only on the parameter point of [F23] in $\Pi_r$; for $r=0$ the intersection is $X$ by the empty-family clause of [F21]. On the chart $D_+(x_j)$ one has $X\cap D_+(x_j)=X_j=\operatorname{Spec}A_j$ with $A_j=k[y_1,\dots,y_N]/I_j$ a finite-type $k$-algebra [F39], and by [F21] and [F22] the restriction of $Z(F_1,\dots,F_r)$ to $D_+(x_j)$ is the closed subscheme $\operatorname{Spec}\bigl(A_j/(f_1,\dots,f_r)\bigr)$, where $f_i$ is the dehomogenization of $F_i$. [F3, F4, F5, F21, F22, F23, F39, F40]

1.4 Closed points of the intersections. Let $Z\subseteq\mathbf P^N_k$ be any closed subscheme of finite type over $k$, for instance $Z(F_1,\dots,F_r)$, with the induced reduced projective algebraic set as its underlying space. A point $x\in Z$ is a closed point of $Z$ if and only if $\kappa(x)=k$: closedness of the singleton is local on the finite affine chart cover $Z\cap D_+(x_j)=\operatorname{Spec}B_j$ with $B_j$ finite type over $k$ [F5, F39], and on an affine finite-type $k$-algebra a prime is maximal if and only if its residue field is finite over $k$, hence equal to $k$ because $k$ is algebraically closed [F8]; moreover every nonempty open subset of $Z$ contains a closed point of $Z$, because it meets some chart and [F8] supplies a closed point of that chart's spectrum, which has residue field $k$ and is closed in $Z$ by the first assertion. [F3, F5, F8, F39]

2.1 The case of no forms. If $r=0$ then $\Pi_0=\operatorname{Spec}k$ by 1.2, the intersection is $Z=X$ by 1.3, and $X$ is nonempty, smooth over $k$ and of pure dimension $d$ by hypothesis and [F2]; so $U=\Pi_0$ exhibits claim 1 in this case. [F2, F9, step 1.2, step 1.3]

2.2 The Veronese transfer of Bertini. Let $Y\subseteq\mathbf P^N_k$ be a nonempty closed subscheme which is smooth over $k$ of pure dimension $m\ge1$ (for instance an intersection produced below), let $e\ge1$, and consider the degree-$e$ Veronese map $\nu=\nu_{e,N}\colon\mathbf P^N_k\to\mathbf P^M_k$ of [F28]; the composite of the closed immersions $Y\hookrightarrow\mathbf P^N_k\xrightarrow{\nu}\mathbf P^M_k$ is again a closed immersion by [F40]; write $Y'$ for its closed scheme image, which is isomorphic to $Y$ by that composite, so $Y'$ is nonempty, smooth over $k$ of pure dimension $m$, and it is the image of a closed immersion into $\mathbf P^M_k$. Applying the "in particular" clause of [F29] to the closed immersion $Y'\hookrightarrow\mathbf P^M_k$ produces a nonempty Zariski-open subset $U\subseteq\mathbf P(W_h)$ of the hyperplane parameter space of the embedding, such that for every closed point $[s]\in U$ and every degree-one form $L$ with $L|_{Y'}=s$, the scheme-theoretic hyperplane section $Y'\times_{\mathbf P^M_k}V_+(L)$ is smooth over $k$. The coefficient assignment $L\mapsto L\circ\nu$ is a linear isomorphism from the space of linear forms on $\mathbf P^M_k$ onto $S_e$ (both are $k$-vector spaces with basis indexed by the degree-$e$ monomials), and by [F27] (applicable with $n=N\ge1$, since $m\ge1$) the associated linear form $L_F$ of $0\ne F\in S_e$ satisfies $L_F(\nu([x]))=F(x)$ and $\nu^{-1}(V_+(L_F))=V_+(F)$; comparing dehomogenized equations on the standard charts as in 1.3, the local equations identify $Y\cap V_+(F)$ with the fibre product $Y'\times_{\mathbf P^M_k}V_+(L_F)$ over the isomorphism $Y\to Y'$ from [F40]; let $K\subseteq S_e$ be the subspace of forms restricting to zero on $Y'$, the kernel of the $k$-linear map $F\mapsto L_F|_{Y'}$, which is proper because $Y\ne\varnothing$, and let $\pi\colon\mathbf P(S_e)\smallsetminus\mathbf P(K)\to\mathbf P(W_h)$ be the induced morphism. Then $\pi$ is defined on a nonempty open subset, it carries $k$-rational points to $k$-rational points because it is induced by a $k$-linear map, and it is surjective because the composite $S_e\to\Gamma(\mathbf P^M_k,\mathcal O(1))\to W_h$ is onto by definition of the hyperplane system $W_h$ as the span of the restricted coordinate forms. Hence $V:=\pi^{-1}(U)$ is a nonempty open subset of $\mathbf P(S_e)$, and every closed point $[F]\in V$ is good: by the criterion of 1.4 the point $[F]$ has residue field $k$, hence so does its image $\pi([F])$, so $\pi([F])$ is a closed point of $\mathbf P(W_h)$ lying in $U$, and the identification above together with [F29] makes $Y\cap V_+(F)\cong Y'\times_{\mathbf P^M_k}V_+(L_F)$ smooth over $k$. [F8, F27, F28, F29, F40, step 1.3, step 1.4]

2.3 The universal intersection and the nonemptiness locus. In the universal-intersection and defect-locus constructions all parameter-space and incidence loci are classical loci of $k$-points; [F31] is applied only in that category. The open-set correspondence of [F7] on the irreducible parameter variety $\Pi_r$ gives a scheme open with exactly the same closed points for each classical open constructed here. Every fibre assertion in the remainder of the proof is for a closed parameter $t$, so $\kappa(t)=k$. For $1\le i\le r$ let $W_i\subseteq\mathbf P^N_k\times_k\Pi_r$ be the set of pairs $(x,[F_1],\dots,[F_r])$ with $F_i(x)=0$; on a product of a standard chart of $\mathbf P^N_k$ [F5] and affine charts of the factors $\mathbf P(S_{e_i})$ (normalizing one coefficient of each form to $1$), the condition is cut out by the polynomial obtained by dehomogenizing $F_i$, so $W_i$ is closed and so is the intersection $W_r=\bigcap_iW_i$. Put $\mathcal W:=W_r\cap(X\times_k\Pi_r)$, a closed subset of $X\times_k\Pi_r$: its fibre over a classical parameter $t\in\Pi_r$ is exactly the classical closed-point set of $Z(t)=X\cap V_+(F_1)\cap\cdots\cap V_+(F_r)$ by [F21] and the local description of 1.3. The projection $q\colon X\times_k\Pi_r\to\Pi_r$ is a closed map: $X$ is closed in $\mathbf P^N_k$ and nonempty [F2], $\Pi_r$ is a classical variety [F30], so by [F31] the projection $\Pi_r\times_k\mathbf P^N_k\to\Pi_r$ is closed, and a closed subset of the closed subset $X\times_k\Pi_r$ has closed image under its restriction; since $\mathcal W\subseteq X\times_k\Pi_r$ is closed in $\mathbf P^N_k\times_k\Pi_r$, the image $N_r:=q(\mathcal W)=\{t\in\Pi_r: Z(t)\ne\varnothing\}$ is closed, and its complement $\{t:Z(t)=\varnothing\}$ is open. Moreover $N_r=\Pi_r$ whenever $0\le r\le d$. For $r=0$ this is $Z=X\ne\varnothing$ by the hypothesis on $X$. Given any tuple of $r\ge1$ forms, begin with the irreducible closed set $C_0=X$ of dimension $d$. Inductively, if $i\le r\le d$ and an irreducible closed set $C_{i-1}\subseteq Z(F_1,\ldots,F_{i-1})$ has dimension $m\ge d-i+1\ge1$, then either $F_i$ vanishes identically on $C_{i-1}$, in which case take $C_i=C_{i-1}$, or [F26] gives a nonempty irreducible component $C_i$ of $C_{i-1}\cap V_+(F_i)$ of dimension $m-1$. In both cases $C_i\subseteq Z(F_1,\ldots,F_i)$ and $\dim C_i\ge d-i$. Thus the final intersection is nonempty for every closed parameter tuple. Thus $N_r=\Pi_r$ as classical loci for $r\le d$, which proves the required nonemptiness for every closed parameter. The emptiness locus for any $r$ is a classical open, hence corresponds to a scheme open by [F7]. [F2, F5, F8, F21, F26, F30, F31, F7, step 1.3, induction]
3.1 The dimension and nonemptiness step. Let $Y\subseteq\mathbf P^N_k$ and $e\ge1$ be as in 2.2, with $m\ge1$, and let $V=\pi^{-1}(U)\subseteq\mathbf P(S_e)$ be the nonempty open set of 2.2, whose closed points are the forms $F$ with $Y\cap V_+(F)$ smooth over $k$. The irreducible components $Y_1,\dots,Y_t$ of $Y$ are finite in number and closed by [F17], each is a nonempty closed subvariety of $\mathbf P^N_k$ of dimension $m$ [F2, F19] (pure dimension $m$ means every component has dimension $m$), and $F$ vanishes on $Y_l$ exactly when $F\in I(Y_l)_e$, a proper linear subspace of $S_e$: since $Y_l\ne\varnothing$, some coordinate function $x_m$ is nonzero at a point of $Y_l$, and then $x_m^e\notin I(Y_l)_e$ [F3, F4]; thus the set $W$ of forms not vanishing on any component of $Y$ is the complement of finitely many proper closed subsets, hence open and nonempty by [F25]. Both $V$ and $W$ are nonempty open in the irreducible space $\mathbf P(S_e)$ of 1.2, so $V\cap W$ is nonempty and open by [F18], and by 1.4 (applied to the projective space $\mathbf P(S_e)$) it contains a closed point $[F]$; by 2.2 this $F$ satisfies that $Y\cap V_+(F)$ is smooth over $k$, and in particular $F\ne0$. For each $l$, $F$ does not vanish on $Y_l$ and $\dim Y_l=m\ge1$, so [F26] gives that $Y_l\cap V_+(F)$ is nonempty and has all components of dimension $m-1$; every component of the finite union $Y\cap V_+(F)=\bigcup_l\bigl(Y_l\cap V_+(F)\bigr)$ is contained in one of the closed pieces and contains a component of one of them, so by [F18] every component of $Y\cap V_+(F)$ has dimension exactly $m-1$. [F2, F3, F4, F17, F18, F19, F25, F26, step 1.2, step 1.4, step 2.2]

3.2 The rank defect locus is closed, so the full-rank locus is open. For $0\le r\le d$, fix once and for all a finite generating list $g_1,\dots,g_s$ of the ideal $I_j$ of $X_j$ in each chart $D_+(x_j)$, possible by [F39]. On the product of such a chart with affine charts of all factors of $\Pi_r$, the dehomogenized forms $f_1,\dots,f_r$ and the $g_l$ are polynomials, and we differentiate only in the $N$ ambient coordinates, holding parameter coefficients constant, to obtain the rows of the combined Jacobian matrix $J_{\mathrm{comb}}$ of $g_1,\dots,g_s,f_1,\dots,f_r$; define $B_j\subseteq D_+(x_j)\times_k\Pi_r$ to be the common zero locus of all $g_l$, all $f_i$ and all $(N-d+r)\times(N-d+r)$ minors of $J_{\mathrm{comb}}$. This locus is closed in the product chart, since all displayed functions are polynomial there. At every classical pair $(x,t)$, both residue fields equal $k$. By [F34] the module of differentials of the chart ring of this fixed $k$-fibre $Z(t)$ over $k$ is the cokernel of the transpose of $J_{\mathrm{comb}}$, so its fibre dimension over $x$ equals $N-\operatorname{rank}_{\kappa(x)}J_{\mathrm{comb}}$ (the rank of a matrix is unchanged by transposition); this number depends only on the point $x$ and the tuple $t$, not on the chart or the chosen finite generating list, because $\Omega$ and its base change do not. Hence the closed loci $B_j$ agree on overlaps and, closedness being local on an open cover, they glue to one closed subset $B\subseteq X\times_k\Pi_r$: the locus of pairs $(x,t)$ with $x\in Z(t)$ and $\dim_{\kappa(x)}\bigl(\Omega_{Z(t)/k}\otimes\kappa(x)\bigr)>d-r$. By the classical closed projection of step 2.3, $q(B)$ is classically closed. Consequently its classical complement corresponds under [F7] to a scheme open $U'_r\subseteq\Pi_r$, whose closed parameters are exactly those with no classical rank-defect pair. No assertion about $\Omega_{Z(t)/k}$ for nonclosed parameters is used. [F5, F7, F31, F34, F39, step 1.3, step 2.3]

4.1 Existence of a good tuple for $0\le r\le d$. We claim that for every $0\le i\le\min(r,d)$ there are forms $F_1,\dots,F_i$, $0\ne F_l\in S_{e_l}$, such that $Z_i=Z(F_1,\dots,F_i)$ is nonempty, smooth over $k$ and of pure dimension $d-i$. For $i=0$ this is 1.1 and 2.1. For the induction step, let $1\le i\le\min(r,d)$, so that $Y=Z_{i-1}$ is a nonempty closed subscheme of $\mathbf P^N_k$ which is smooth over $k$ of pure dimension $d-i+1\ge1$ and reduced (regular by [F12], hence a domain at each local ring by [F14]); applying 2.2 and 3.1 with $e=e_i$ and $m=d-i+1$ produces $F_i\in S_{e_i}$ such that $Z_i=Y\cap V_+(F_i)$ is nonempty, smooth over $k$ and of pure dimension $d-i$. In particular, for $0\le r\le d$ there is a tuple $t_0=(F_1,\dots,F_r)$ with $Z(t_0)$ nonempty, smooth over $k$ and of pure dimension $d-r$. [F12, F14, step 1.1, step 2.1, step 2.2, step 3.1]

4.2 Closed points of full-rank tuples are regular of dimension $d-r$. Let $t$ be a closed point of $U'_r$, let $x\in Z(t)$ be a closed point, and work in a chart $D_+(x_j)$ containing $x$ with the notation of 3.2. Since $t\notin q(B)$, the rank of $J_{\mathrm{comb}}(x)$ over $\kappa(x)=k$ (step 1.4) is at least $N-d+r$; on the other hand the $g$-block has rank $N-d$, because $X_j$ is smooth over $k$ hence regular at the rational point $x$ [F9, F12] and [F33] (rational-point clause together with the classical dimension clause, since $\dim\mathcal O_{X,x}=d$ by 1.1) gives $\operatorname{rank}J(g)(x)=N-\dim(A_j)_{\mathfrak m_x}=N-d$, where $\mathfrak m_x$ is the maximal ideal of $A_j$ corresponding to $x$, while the $f$-block adds at most its $r$ rows; hence $\operatorname{rank}J_{\mathrm{comb}}(x)=N-d+r$. By [F32] applied to the actual ideal of $Z(t)$ in the chart, whose finite generating list is $g_1,\dots,g_s,f_1,\dots,f_r$, we get $\dim_kT_xZ(t)=N-\operatorname{rank}J_{\mathrm{comb}}(x)=d-r$. Consider the morphism of classical varieties $g\colon X_j\to\mathbf A^r_k$ whose components are the dehomogenized forms $f_1,\dots,f_r$; its source and target are smooth over $k$ [F9], and its scheme-theoretic fibre over the origin is $Z(t)\cap X_j$ by 1.3. By [F36] the fibre tangent space at $x$ is $\ker d_xg$, and by [F37] the open immersion $Z(t)\cap X_j\subseteq Z(t)$ induces an isomorphism of tangent spaces, so $\dim_k\ker d_xg=d-r$; rank-nullity together with $\dim_kT_xX_j=d$ (from $\dim\mathcal O_{X_j,x}=d$ and [F15]) gives that $d_xg$ is surjective, of rank $r=\dim_0\mathbf A^r_k$ [F20]. But then [F36] applies and shows that the fibre $Z(t)\cap X_j$ has a regular local ring at $x$ of dimension $\dim_xX_j-\dim_0\mathbf A^r_k=d-r$; since $Z(t)\cap X_j$ is an open subscheme of $Z(t)$, the local ring $\mathcal O_{Z(t),x}$ is regular of dimension $d-r$. [F9, F12, F15, F20, F32, F33, F36, F37, step 1.1, step 1.3, step 1.4, step 3.2]

5.1 The good tuple lies in the full-rank locus. Since $r\le d$, 4.1 provides a tuple $t_0=(F_1,\dots,F_r)$ with $Z=Z(t_0)$ nonempty, smooth over $k$ and of pure dimension $d-r$. By [F9] and [F10] each point $x\in Z$ has an affine neighbourhood on which $Z\to\operatorname{Spec}k$ is standard smooth at $x$ of some relative dimension $n$; by [F35] the module $\Omega$ is free of rank $n$ there, and every component of that standard smooth affine neighbourhood has dimension $n$, while those components are nonempty open pieces of the components of $Z$, all of dimension $d-r$ [F19]; hence $n=d-r$ and $\dim_{\kappa(x)}\bigl(\Omega_{Z/k}\otimes\kappa(x)\bigr)=d-r$ for every $x\in Z$. Therefore no point of $Z$ has the defect of 3.2, and $t_0\in U'_r$. [F9, F10, F19, F35, step 4.1, step 3.2]

5.2 Full-rank tuples with nonempty intersection are smooth. Let $t$ be a closed point of $U'_r$ and suppose $Z(t)\ne\varnothing$. By 4.2 every closed point of the finite-type $k$-scheme $Z(t)$ is a regular point. The regular locus of $Z(t)$ is open by [F13]; if its complement $S$ were nonempty, then $S$ with its reduced closed-subscheme structure would be a nonempty closed subscheme of $\mathbf P^N_k$ of finite type over $k$, so 1.4 applied to $S$ would produce a point closed in $S$, hence in $Z(t)$ because $S$ is closed in $Z(t)$, a contradiction. Hence $Z(t)$ is regular, so $Z(t)\to\operatorname{Spec}k$ is smooth by [F12] since $k$ is perfect [F11]; and $Z(t)$ is reduced because its local rings are regular, hence domains, by [F14]. [F11, F12, F13, F14, step 1.4, step 4.2]

5.3 Claim 2. Suppose $r>d$. By 4.1 with $r=d$ (and 2.1 when $d=0$) there is a tuple $F_1,\dots,F_d$ with $Z_d=Z(F_1,\dots,F_d)$ nonempty, smooth over $k$ and of pure dimension $0$; by [F38] the underlying set of $Z_d$ is finite, say $\{p_1,\dots,p_q\}$. For each $l$ the forms of $S_{e_{d+1}}$ vanishing at $p_l$ form a proper linear subspace: some coordinate function $x_m$ is nonzero at the closed point $p_l$ [F3], and then $x_m^{e_{d+1}}$ does not vanish there [F4]. Since the field $k$ is infinite [F3], [F25] provides $F_{d+1}\in S_{e_{d+1}}$ vanishing at none of $p_1,\dots,p_q$, and we choose arbitrary nonzero forms $F_{d+2},\dots,F_r$ (for instance powers of coordinates), which exist because $S_e\ne0$ for $e\ge1$; then the underlying set of $Z(F_1,\dots,F_r)$, being contained in $Z_d\cap V_+(F_{d+1})$, is empty, so $Z(F_1,\dots,F_r)=\varnothing$. Therefore the open set $\{t\in\Pi_r:Z(t)=\varnothing\}$ of 2.3 is nonempty, which is claim 2. [F3, F4, F21, F25, F38, step 2.1, step 4.1, step 2.3]

6.1 Full-rank tuples with nonempty intersection have pure dimension $d-r$. Let $t$ be a closed point of $U'_r$ with $Z(t)\ne\varnothing$; then $Z(t)$ is reduced by 5.2, so [F16] applies at every closed point $x$ of $Z(t)$ and, together with 4.2, gives that the maximum of $\dim W$ over the irreducible components $W$ of $Z(t)$ containing $x$ equals $\dim\mathcal O_{Z(t),x}=d-r$. Let $W$ be any irreducible component of $Z(t)$ (finitely many exist by [F17]): the open subset $W\smallsetminus\bigcup_{W'\ne W}W'$ of $W$ is nonempty, because otherwise the irreducible $W$ would be contained in the finite union of the closed sets $W'$ and hence in one of them by [F18], contradicting that components are maximal; by 1.4 applied in a chart meeting it, it contains a closed point $x$ of $Z(t)$, which then lies on no component other than $W$, so the maximum above is $\dim W$ and $\dim W=d-r$. Hence every irreducible component of $Z(t)$ has dimension $d-r$, i.e. $Z(t)$ is of pure dimension $d-r$. [F16, F17, F18, step 1.4, step 4.2, step 5.2]

7.1 Claim 1. Let $0\le r\le d$ and put $U_r=U'_r$, the open full-rank locus of 3.2. It is nonempty because it contains the tuple $t_0$ of 4.1 by 5.1. For every closed point of $U_r$ the intersection is nonempty by 2.3, smooth over $k$ by 5.2 and of pure dimension $d-r$ by 6.1; this is claim 1, and for $r=0$ it is also the statement of 2.1. [step 2.1, step 2.3, step 3.2, step 4.1, step 5.1, step 5.2, step 6.1]

8.1 Boundary, choice, and iff dispositions. Empty: the statement has $X\ne\varnothing$; for $r\le d$ every member over $U_r$ is nonempty by 7.1, and for $r>d$ the members over the open set of 5.3 are empty, the empty scheme being allowed there. Zero: the case $r=0$ is the empty-tuple case of 2.1 with $\Pi_0=\operatorname{Spec}k$, and $d=0$ is covered by 4.1 and 5.3; for $r=d$ the conclusion is pure dimension $0$, i.e. a finite nonempty set of closed points, consistent with [F38]. One: $r=1$, $1\le d$, is the first induction step of 4.1, and the parabolas/hypersurface computations of the companion page are instances; no step requires $r\ge2$. Degenerate: $X$ is irreducible of pure dimension $d$ and smooth, so no singular-source case arises; the members $Z(t)$ are allowed to be reducible or non-reduced as subschemes of $X$, and no irreducibility, connectedness, or nonemptiness is asserted for tuples outside $U$. Endpoints: the degrees $e_i\ge1$ and $N\ge0$ are arbitrary; $d=0$, $r=0$, $r=d$ and $r>d$ are all covered, and for $r>d$ the statement covers every $r$, not merely $d+1$. Nonempty-choice: AC is declared as [F1] and is used exactly through the AC-assuming suppliers [F7] (dictionary), [F8] (closed-point density and Nullstellensatz), [F12]-[F13] (regular versus smooth, openness of the regular locus), [F16] (componentwise local dimension), [F26] (hypersurface dimension drop), [F29] (Bertini), [F31] (closedness of the projection), [F33] (Jacobian criterion), [F35]-[F36] (standard smooth fibres and the tangent criterion), and [F38] (zero-dimensional varieties are finite); the finite choices of charts, generating lists, components, coefficients and forms in steps 1.3, 2.3, 3.1, 3.2, 5.1, 5.3 and 6.1 are finite and add no choice principle, and the linear algebra and differential computations are choice-free. Both iff cases: the biconditional [F12] is used in the direction "smooth implies regular" in 1.1, 4.1 and 4.2 and in the direction "regular implies smooth" in 5.2; the criterion [F36] is used in the direction "surjective differential implies smooth at $x$" in 4.2 after the converse direction is only used through the kernel identification $T_x(\text{fibre})=\ker d_xf$, which [F36] supplies for every such morphism; the Jacobian criterion [F33] is used in the rational-point direction "regular implies the rank formula" in 4.2 and in the perfect-field direction only through the same equivalence; the irreducibility criterion [F24] is used in the direction "vanishing ideal $(0)$ prime implies $\mathbf P^n_k$ irreducible" in 1.2; and the Nullstellensatz facts [F8] are used in both directions in 1.4 to identify closed points with residue field $k$. No claim is made about the size or density of the open sets $U$, and the characteristic-$0$ hypothesis enters only through Bertini [F29] and the perfectness of $k$ [F11]. This completes the proof. [F1, F7, F8, F11, F12, F13, F16, F24, F26, F29, F31, F33, F35, F36, F38, step 1.2, step 1.4, step 4.1, step 4.2, step 5.2] ∎



## Source qualification

Vakil, Classes 51-52, §3.9 Corollary (with §3.10-3.11), proves Bertini for a
single general member of a base-point-free linear system on a smooth variety
over an algebraically closed field of characteristic $0$, and Arapura, §5.4,
states the complete-intersection version for hypersurfaces of prescribed
degrees on a smooth projective variety. The present corollary is not copied
from either source. Its first claim is proved here by the induction of
steps 2.2, 3.1 and 4.1, which applies the in-run Bertini theorem
[[thm-bertini-smooth-hyperplane-section]] to the Veronese image of the current
intersection — this is the only way degree-$e$ forms enter, avoiding any use
of the cohomology of twisting sheaves — and combines it with the componentwise
dimension drop of [[lem-projective-hypersurface-dimension-drop]] and the
finite-union-of-subspaces lemma to keep every intersection nonempty and pure.
The second and harder point, openness of the property in the *full* product of
parameter spaces, is proved in steps 2.3, 3.2, 4.2, 5.1, 5.2 and 6.1 by a rank-defect
argument: the locus where the Jacobian of the tuple fails to have the expected
rank is closed, its image under the projection from the projective $X$ is
closed, and on the complement the smooth-map criterion produces regular local
rings of dimension $d-r$, which openness of the regular locus and the local
dimension formula upgrade to smoothness and purity. Neither source states
openness in the product, and neither source makes any statement about the size
of the good locus, about nonemptiness of members for $r>d$ being detectable on
an open set, or about the characteristic-zero hypothesis beyond Bertini. The
characteristic-$0$ assumption is used only through
[[thm-bertini-smooth-hyperplane-section]] and perfectness of $k$; the
positive-characteristic failure of the general-member statement is recorded
on the companion examples page of this pair. The Veronese transfer in step 2.2
uses [[cor-homogeneous-polynomial-becomes-hyperplane-section]] only for the
coefficient identity $L_F(\nu([x]))=F(x)$ and the set equality
$V_+(F)=\nu^{-1}(V_+(L_F))$; the scheme-theoretic identification of
$Y\cap V_+(F)$ with the fibre product $Y'\times_{\mathbf P^M_k}V_+(L_F)$ is
proved there by comparing local equations, since the library records the
Veronese corollary only as a statement about underlying sets.
