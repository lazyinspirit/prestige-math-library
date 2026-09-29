---
id: thm-bertini-smooth-hyperplane-section
kind: theorem
title: "Bertini smoothness away from the base locus"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-closed-points-dense-in-affine-spectra
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-affine-overlap-separation-condition
  - def-axiom-of-choice
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-classical-dominant-morphism-and-rational-map
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-integral-scheme
  - def-linear-system-base-locus
  - def-locally-closed-immersion
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-algebraic-set
  - def-projective-space-points
  - def-projective-variety-classical
  - def-reduction-of-scheme
  - def-scheme-theoretic-fibre
  - def-smooth-morphism-classical
  - ex-noetherian-integers-and-fields
  - lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring
  - lem-classical-affine-closed-points-are-maximal-ideals
  - lem-fibre-product-open-restriction
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - lem-linear-system-incidence-is-smooth
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - lem-projective-irreducibility-homogeneous-prime
  - lem-projective-space-diagonal-closed
  - lem-regular-point-lies-on-one-component
  - lem-separated-stable-under-base-change
  - lem-separated-stable-under-composition
  - lem-separatedness-of-open-and-closed-immersions
  - lem-standard-projective-opens-are-affine-spaces
  - lem-subscheme-intersection-fibre-product
  - lem-zero-scheme-of-line-bundle-section
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-generic-smoothness-characteristic-zero
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-regular-equals-smooth-over-perfect-field
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-separatedness-gluing-overlap-criterion
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51-52, §3.9 Corollary and §3.11 (Bertini), printed pp. 10-11"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §5.4 Theorem 5.4.5 and its proof, printed pp. 38-39"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field of characteristic $0$. Let $X$ be a smooth
$k$-scheme of finite type that admits a locally closed immersion into some
projective space over $k$ (that is, $X$ is smooth and quasi-projective;
[[def-locally-closed-immersion]]), let $L$ be an invertible
$\mathcal O_X$-module, and let $W\subseteq\Gamma(X,L)$ be a nonzero
finite-dimensional linear system, with $\dim_kW=r+1$, base locus
$\operatorname{Bs}(W)$ and $X^\circ=X\smallsetminus\operatorname{Bs}(W)$
([[def-linear-system-base-locus]]); thus $\mathbf P(W)=\mathbf P^r_k$.

Then there is a nonempty Zariski-open subset $U\subseteq\mathbf P(W)$ such
that for every closed point $[s]\in U$ of the $k$-scheme $\mathbf P(W)$
(equivalently, by
[[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]],
every classical parameter $[s]$ lying in $U$), and every representative
$0\ne s\in W$, the closed subscheme $Z(s)\cap X^\circ\subseteq X^\circ$ is
smooth over $k$. Thus the property "the member $Z(s)\cap X^\circ$ is smooth
over $k$" holds for general members of $W$ in the sense of
[[def-linear-system-base-locus]], with generalizing open set $U$; the members
are closed subschemes of the open subscheme $X^\circ$, which may be empty, and
$U$ contains classical parameters.

In particular, suppose $X\ne\varnothing$, fix a locally closed immersion
$X\hookrightarrow\mathbf P^N_k$, let $L=\mathcal O_X(1)$ be the hyperplane line
bundle of that immersion, and let $W_h\subseteq\Gamma(X,\mathcal O_X(1))$ be
the hyperplane system, the span of the restrictions of the degree-one forms
([[def-linear-system-base-locus]]). Then $\operatorname{Bs}(W_h)=\varnothing$,
and there is a nonempty Zariski-open subset $U\subseteq\mathbf P(W_h)$ such
that for every closed point $[s]\in U$ the scheme-theoretic hyperplane section
$X\times_{\mathbf P^N_k}V_+(F)$ of $X$ — for any degree-one form $F$ with
$F|_X=s$, equivalently the zero scheme $Z(s)$
([[lem-zero-scheme-of-line-bundle-section]]) — is smooth over $k$.

No irreducibility or connectedness of $X$ or of the members is asserted, and
no statement is made about the dimension or the nonemptiness of the members.

## Facts & Assumptions
**Given:** The Axiom of Choice; an algebraically closed field $k$ of
characteristic $0$; a smooth finite-type $k$-scheme $X$ admitting a locally
closed immersion into a projective space; an invertible $\mathcal O_X$-module
$L$; a nonzero finite-dimensional linear system $W\subseteq\Gamma(X,L)$ with
$\dim_kW=r+1$; the associated incidence $I$ with morphisms $\pi,p$; the open
subscheme $X^\circ=X\smallsetminus\operatorname{Bs}(W)$; and, for the final
clause, a fixed locally closed immersion $X\hookrightarrow\mathbf P^N_k$ with
hyperplane system $W_h$.

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets
has a choice function.

[F2] [[def-linear-system-base-locus]]: for a $k$-scheme $X$, an invertible
$\mathcal O_X$-module $L$ and a nonzero finite-dimensional $k$-subspace
$W\subseteq\Gamma(X,L)$, the parameter space is
$\mathbf P(W)=(W\smallsetminus\{0\})/k^\times$ with the projective Zariski
topology, independent of a basis; $Z(s)$ depends only on $[s]$; the base locus
$\operatorname{Bs}(W)=\bigcap_{0\ne s\in W}|Z(s)|$ is closed; a property holds
for a **general member** if there is a nonempty Zariski-open
$U\subseteq\mathbf P(W)$ such that every parameter in $U$ has it; and for a
fixed embedding $X\subseteq\mathbf P^N_k$ the hyperplane system is the span of
the restrictions of the degree-one forms, viewed as sections of the
hyperplane line bundle with forms giving the same section identified.

[F3] [[lem-linear-system-incidence-is-smooth]]: under AC, for an algebraically
closed field $k$, a smooth finite-type $k$-scheme $X$, an invertible
$\mathcal O_X$-module $L$, and a nonzero finite-dimensional linear system
$W\subseteq\Gamma(X,L)$ with $\dim_kW=r+1$, base locus
$\operatorname{Bs}(W)$ and $X^\circ=X\smallsetminus\operatorname{Bs}(W)$, there
is a finite-type $k$-scheme $I$ with $k$-morphisms $\pi\colon I\to X^\circ$
and $p\colon I\to\mathbf P(W)=\mathbf P^r_k$, determined by $L$ and $W$ up to
canonical isomorphism, such that: (1) over
$X^\circ_j=X^\circ\smallsetminus|Z(s_j)|$, for a $k$-basis
$s_0,\dots,s_r$ of $W$ and $r\ge1$, the map $\pi$ exhibits
$\pi^{-1}(X^\circ_j)$ as isomorphic over $X^\circ_j$ to
$X^\circ_j\times_k\mathbf P^{r-1}_k$; (2) for every
$[s]\in\mathbf P(W)(k)$ the fibre $p^{-1}([s])$ is isomorphic over $X^\circ$
to the zero subscheme $Z(s)\cap X^\circ$; (3) $I\to\operatorname{Spec}k$ is
smooth in the local-standard-smooth sense; (4) if $r=0$ then $I=\varnothing$.
Moreover the construction in its proof glues the local models
$I_{V,j}\subseteq V\times_kU_j$ to a closed subscheme
$I_X\hookrightarrow X\times_k\mathbf P^r_k$ and defines
$I=I_X\times_XX^\circ$ (its step 2.1), so $I$ is a locally closed subscheme of
$X^\circ\times_k\mathbf P^r_k$.

[F4] [[thm-generic-smoothness-characteristic-zero]]: under AC, for $k$
algebraically closed of characteristic $0$, irreducible classical varieties
$X,Y$ over $k$ and a morphism $f\colon X\to Y$ of classical varieties with $X$
smooth over $k$: (1) there is a dense open $U\subseteq Y$ such that
$f^{-1}(U)\to U$ is a smooth morphism of finite-type $k$-schemes, with
$f^{-1}(U)=\varnothing$ allowed when $f$ is not dominant; (2) if $f$ is
dominant there is a nonempty open $V\subseteq U$ such that for every closed
point $y\in V$ the scheme-theoretic fibre
$X_y=X\times_Y\operatorname{Spec}k(y)$ is nonempty, smooth over $k$, and of
pure dimension $r=\dim X-\dim Y$.

[F5] [[lem-regular-point-lies-on-one-component]]: under AC, a regular point of
a reduced Noetherian scheme lies on exactly one irreducible component.

[F6] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under AC, a
regular local ring is a domain (and Cohen-Macaulay).

[F7] [[thm-regular-equals-smooth-over-perfect-field]]: under AC, for a perfect
field $k$ and a finite-type $k$-scheme $X$, $X$ is regular (every local ring
is regular local) if and only if $X\to\operatorname{Spec}k$ is smooth in the
local-standard-smooth sense.

[F8] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]:
every field of characteristic zero is perfect, and every algebraically closed
field is perfect.

[F9] [[def-reduction-of-scheme]]: for a scheme $X$ the nilradical ideal sheaf
$\mathcal N_X$ has nilpotent germs, and the reduction $X_{\mathrm{red}}$ is the
closed subscheme with structure sheaf $\mathcal O_X/\mathcal N_X$; on
$\operatorname{Spec}A$ it is $\operatorname{Spec}(A/\sqrt{(0)})$. Thus $X$ is
reduced exactly when $\mathcal N_X=0$, equivalently when every local ring of
$X$ is reduced.

[F10] [[ex-noetherian-integers-and-fields]] and
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: every field is
a Noetherian ring, and a commutative algebra of finite type over a Noetherian
ring is a Noetherian ring.

[F11] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally
Noetherian if it has an affine open cover by spectra of Noetherian rings, and
Noetherian if it is locally Noetherian and quasi-compact; equivalently, it has
a finite affine open cover by spectra of Noetherian rings.

[F12] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism is
locally of finite type if locally on source and target it is given by a
finitely generated algebra map, and of finite type if it is locally of finite
type and quasi-compact.

[F13] [[lem-noetherian-space-has-finitely-many-irreducible-components]]:
under AC, a Noetherian topological space is a finite union of irreducible
closed subsets and has only finitely many irreducible components.

[F14] [[lem-irreducible-components-of-a-topological-space]]: irreducible
components are closed, and every irreducible subset is contained in an
irreducible component; in particular every point lies on some component.

[F15] [[def-integral-scheme]]: an integral scheme is a nonempty scheme that is
reduced and whose underlying topological space is irreducible.

[F16] [[def-affine-overlap-separation-condition]]: an $S$-scheme $X$
satisfies the affine-overlap separation condition if for every pair of affine
opens $U,V\subseteq X$ over a common affine open of $S$ the intersection
$U\cap V$ is affine and
$\Gamma(U,\mathcal O_X)\otimes_R\Gamma(V,\mathcal O_X)\to\Gamma(U\cap V,\mathcal O_X)$
is surjective.

[F17] [[thm-separatedness-gluing-overlap-criterion]]: a morphism $f\colon
X\to S$ is separated if and only if it satisfies the affine-overlap
separation condition of [F16].

[F18] [[lem-projective-space-diagonal-closed]]: for every scheme $S$ and
$n\ge0$ the diagonal of $\mathbf P^n_S/S$ is a closed immersion; hence
$\mathbf P^n_S\to S$ is separated.

[F19] [[lem-separatedness-of-open-and-closed-immersions]]: every open
immersion, every closed immersion and every immersion (locally closed
immersion) of schemes is separated as a morphism.

[F20] [[lem-separated-stable-under-composition]]: a composite of separated
morphisms is separated.

[F21] [[lem-separated-stable-under-base-change]]: a base change of a
separated morphism is separated.

[F22] [[def-locally-closed-immersion]]: a morphism is an immersion (locally
closed immersion) if it factors as an open immersion followed by a closed
immersion.

[F23] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a
classical algebraic prevariety over $k$ is a quasi-compact locally ringed
space with a structure sheaf of $k$-algebras covered by open subspaces
isomorphic to affine models; it is separated when the equalizer of every pair
of regular maps into it is closed, and a classical algebraic variety is a
separated prevariety; varieties may be reducible or empty, and an irreducible
classical variety is nonempty and irreducible.

[F24] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]:
under AC, the closed-point construction and its inverse give an equivalence
between irreducible classical $k$-varieties and integral finite-type
$k$-schemes satisfying the affine-overlap separation condition; classical
points correspond to closed points and classical regular maps to scheme
$k$-morphisms.

[F25] [[def-projective-algebraic-set]] and
[[def-projective-space-points]]: for homogeneous
$T\subseteq k[x_0,\dots,x_n]$, $V_+(T)=\{[a]\in\mathbf P^n_k:F(a)=0\text{ for
all }F\in T\}$ is a projective algebraic set, with $V_+(\varnothing)$
conventionally equal to $\mathbf P^n_k$; and
$\mathbf P^n_k=(k^{n+1}\smallsetminus\{0\})/\sim$ with $a\sim b$ exactly when
$b=\lambda a$ for some $\lambda\in k^\times$, so $\mathbf P^n_k\ne\varnothing$
for every $n\ge0$.

[F26] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: a polynomial is
homogeneous of degree $d$ if every occurring monomial has total degree $d$,
and an ideal is homogeneous if it contains all homogeneous components of its
elements.

[F27] [[lem-projective-irreducibility-homogeneous-prime]]: over algebraically
closed $k$, a nonempty projective algebraic set $X$ is irreducible if and only
if its homogeneous ideal $I_+(X)$ of forms vanishing on $X$ is prime.

[F28] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: a
polynomial ring in finitely many variables over a domain is a domain; in
particular $k[x_0,\dots,x_r]$ is a domain for the field $k$.

[F29] [[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]:
if $R\subseteq S$ is a subring whose underlying set is infinite inside an
integral domain $S$ and $f\in S[x_1,\dots,x_m]$, $m\ge1$, vanishes at all
$R$-points, then $f=0$.

[F30] [[def-projective-variety-classical]]: a classical projective variety
over $k$ is a nonempty irreducible projective algebraic set, understood with
its standard affine charts.

[F31] [[lem-irreducibility-criteria-and-open-subspaces]]: a space is
irreducible if and only if it is nonempty and every two nonempty open subsets
meet; equivalently, if and only if it is nonempty and every nonempty open
subset is dense; a nonempty open subspace of an irreducible space is
irreducible.

[F32] [[def-smooth-morphism-classical]]: a morphism of finite-type
$k$-schemes is smooth if every source point has affine neighbourhoods on which
the induced ring map is standard smooth at that prime; the condition is local
on the source and on the target, and it is imposed at every source point.

[F33] [[lem-fibre-product-open-restriction]]: fibre products commute with
restriction to open subschemes; for an open immersion $Z\hookrightarrow X$ the
base change $Z\times_XY\to Y$ is an open immersion with image the open
subscheme $Y\cap Z$ (scheme intersection along $X$).

[F34] [[def-scheme-theoretic-fibre]]: for a morphism $f\colon X\to S$ and a
point $s\in S$ with residue field $k(s)$, the scheme-theoretic fibre is
$X_s=X\times_S\operatorname{Spec}k(s)$.

[F35] [[lem-subscheme-intersection-fibre-product]]: the scheme-theoretic
intersection of closed subschemes of a scheme is their fibre product over that
scheme.

[F36] [[lem-zero-scheme-of-line-bundle-section]]: for a section $s$ of an
invertible sheaf on $X$ and a trivializing affine cover $U_i=\operatorname{Spec}A_i$
with $s|_{U_i}=f_ie_i$, the affine schemes $\operatorname{Spec}(A_i/(f_i))$
glue to a closed subscheme $Z(s)\hookrightarrow X$, canonical up to unique
isomorphism over $X$, using the ideal $(f_i)$ itself with no reducedness or
nonzerodivisor hypothesis; on a trivializing chart $Z(s)$ is cut out by the
local equation $f_i$.

[F37] [[def-classical-dominant-morphism-and-rational-map]]: a morphism of
classical varieties is dominant when its image is dense.

[F38] [[cor-closed-points-dense-in-affine-spectra]],
[[lem-standard-projective-opens-are-affine-spaces]] and
[[lem-classical-affine-closed-points-are-maximal-ideals]]: for a finite-type
$k$-algebra $A$, every nonempty open subset of a closed
$Z\subseteq\operatorname{Spec}A$ contains a closed point of
$\operatorname{Spec}A$; the standard opens $D_+(x_i)\subseteq\mathbf P^r_k$
are affine spaces $\mathbf A^r_k$; and for an affine algebraic set over
algebraically closed $k$ the classical points correspond bijectively to
maximal ideals, with residue field $k$.

[F39] [[thm-noetherian-ring-has-noetherian-spectrum]]: under AC, for a
Noetherian commutative ring $R$ the space $\operatorname{Spec}R$ is a
Noetherian topological space.



## Proof

**Proof technique:** direct.

1.1 Setup, indexing, and the parameter space. Put $r=\dim_kW-1\ge0$, so that $\mathbf P(W)=\mathbf P^r_k$ by [F2] and [F3], and let $I$, $\pi\colon I\to X^\circ$, $p\colon I\to\mathbf P(W)$ be the incidence of [F3]; by [F3] clause (3) the morphism $I\to\operatorname{Spec}k$ is smooth, so $I$ is a finite-type $k$-scheme, and by the construction recorded in [F3] the scheme $I$ is a locally closed subscheme of $X^\circ\times_k\mathbf P^r_k$. [F2, F3, given]

1.2 The k-rational parameter space is an irreducible classical projective variety. By [F25] the space $\mathbf P^r_k$ is nonempty, and $\mathbf P^r_k=V_+((0))$ is a projective algebraic set. Its homogeneous vanishing ideal is $I_+(\mathbf P^r_k)=(0)$: if $0\ne F\in k[x_0,\dots,x_r]$ is homogeneous of positive degree and vanished at every point of $\mathbf P^r_k$, then the polynomial $F\in k[x_0,\dots,x_r]$ would vanish at every point of $k^{r+1}$ (a nonzero point $a$ gives $[a]$, and $F(0)=0$ in positive degree), so $F=0$ by [F29] applied with $R=S=k$ (the algebraically closed field $k$ is infinite) and $m=r+1\ge1$, a contradiction. Since $(0)$ is prime by [F28] and $k[x_0,\dots,x_r]$ is the homogeneous coordinate ring of [F26], [F27] shows that $\mathbf P^r_k$ is irreducible; by [F30] it is a classical projective variety. Moreover $\mathbf P^r_k$ is an integral finite-type $k$-scheme: its standard affine charts are spectra of polynomial rings over $k$ by [F38], which are domains by [F28], so the nilradical ideal sheaf of [F9] vanishes on a chart cover and $\mathbf P^r_k$ is reduced, and it is finite type over $k$ because the charts of [F38] give a finite affine cover by finitely generated $k$-algebras [F12]. [F9, F12, F23, F25, F26, F27, F28, F29, F30, F38]

1.3 The incidence is regular, reduced and Noetherian. By [F3] clause (3) and [F8], the finite-type $k$-scheme $I$ is smooth over the perfect field $k$, so [F7] makes $I$ regular: every local ring $\mathcal O_{I,x}$ is a regular local ring. Each such ring is a domain by [F6], hence reduced; therefore the nilradical ideal sheaf $\mathcal N_I$ of [F9] has zero stalks, $I=I_{\mathrm{red}}$, and $I$ is a reduced scheme. By [F12] the finite-type morphism $I\to\operatorname{Spec}k$ is quasi-compact and locally of finite type, so $I$ has a finite affine open cover by spectra $\operatorname{Spec}A_j$ of finitely generated $k$-algebras $A_j$; each $A_j$ is Noetherian by [F10] since the field $k$ is Noetherian, so $I$ is a Noetherian scheme by [F11]. The underlying space $|I|$ is a Noetherian topological space: each $\operatorname{Spec}A_j$ is Noetherian by [F39], and a descending chain of closed subsets of $I$ restricts to descending chains in the finitely many charts, each of which stabilizes, whence the chain itself stabilizes. [F3, F6, F7, F8, F9, F10, F11, F12, F39]

1.4 Separatedness of the components. Since $X$ admits a locally closed immersion into a projective space [F22], $X\to\operatorname{Spec}k$ is separated: the immersion is separated by [F19], the projective space is separated over $\operatorname{Spec}k$ by [F18], and separated morphisms compose by [F20]. The open subscheme $X^\circ\subseteq X$ is separated over $\operatorname{Spec}k$ by [F19] and [F20], $\mathbf P^r_k\to\operatorname{Spec}k$ is separated by [F18], so $X^\circ\times_k\mathbf P^r_k\to\operatorname{Spec}k$ is separated by [F21] and [F20]; the locally closed subscheme $I$ of [F3] is therefore separated over $\operatorname{Spec}k$ by [F19] and [F20]. [F3, F18, F19, F20, F21, F22, given]

1.5 The hyperplane system and its base locus. Suppose now that $X\ne\varnothing$, fix the locally closed immersion $X\hookrightarrow\mathbf P^N_k$, let $L=\mathcal O_X(1)$ and let $W_h\subseteq\Gamma(X,\mathcal O_X(1))$ be the hyperplane system of [F2]. Then $W_h\ne0$: if the restriction of every degree-one form vanished on $X$, then $x_0,\dots,x_N$ would all vanish on $X$, whence $X\subseteq V_+(x_0,\dots,x_N)=\varnothing$ by [F25], contradicting $X\ne\varnothing$. Also $\operatorname{Bs}(W_h)=\varnothing$: for every point $x\in X$ some standard chart $D_+(x_j)$ of $\mathbf P^N_k$ contains $x$ by [F38], and on that chart the restricted linear form $x_j|_X$ is a unit at $x$, so its zero subscheme does not contain $x$ and $x\notin\operatorname{Bs}(W_h)$ by [F2]. [F2, F25, F38, given]

2.1 The finite component decomposition. By [F13] and step 1.3 the scheme $I$ has only finitely many irreducible components $Z_1,\dots,Z_m$; each $Z_i$ is closed by [F14], and every point of $I$ lies on at least one $Z_i$ by [F14]. By [F5] and step 1.3 every point of $I$ lies on exactly one irreducible component, so the $Z_i$ are pairwise disjoint; since they are finitely many closed pairwise disjoint subsets, the complement of $Z_i$ is the union of the remaining closed $Z_j$, hence $Z_i$ is also open in $I$. Give $Z_i$ the open subscheme structure. Then each $Z_i$ is irreducible and, as an open subscheme of the reduced scheme $I$, reduced, hence integral by [F15]; it is finite type over $k$ as an open subscheme of the finite-type $k$-scheme $I$, smooth over $k$ because smoothness is local on the source [F32], and separated over $k$ because it is an open subscheme of the separated scheme $I$ of step 1.4, using [F19] and [F20]. [F5, F13, F14, F15, F19, F20, F32, step 1.3, step 1.4]


3.1 The components and the parameter space as classical varieties. Each $Z_i$ of step 2.1 is an integral finite-type $k$-scheme, and by [F17] and [F16] the separatedness of $Z_i\to\operatorname{Spec}k$ from step 2.1 is exactly the affine-overlap separation condition; hence by [F24] and [F23] $Z_i$ corresponds to an irreducible classical variety over $k$, with classical points the closed points and with scheme $k$-morphisms corresponding to regular maps. Similarly $\mathbf P(W)=\mathbf P^r_k$ is an integral finite-type $k$-scheme by step 1.2 and separated over $k$ by [F18], so by [F24] and [F23] it is an irreducible classical variety whose classical points are its closed points, and the restriction $p_i=p|_{Z_i}\colon Z_i\to\mathbf P(W)$ of [F3] is a $k$-morphism of schemes, hence a morphism of classical varieties under [F24]. [F3, F16, F17, F24, step 1.2, step 2.1]

4.1 Target generic smoothness on the dominant components. Let $i\in\{1,\dots,m\}$ be such that $p_i$ is dominant in the sense of [F37]. By step 3.1 the source $Z_i$ and the target $\mathbf P(W)$ are irreducible classical varieties, $p_i$ is a morphism of classical varieties, and $Z_i$ is smooth over $k$; so [F4] clause (2) applies and produces a nonempty open subvariety $V_i\subseteq\mathbf P(W)$ such that for every closed point $y\in V_i$, equivalently every classical point of $V_i$ by [F24], the scheme-theoretic fibre $p_i^{-1}(y)=Z_i\times_{\mathbf P(W)}\operatorname{Spec}k(y)$ of [F34] is nonempty, smooth over $k$, and of pure dimension $\dim Z_i-r$. [F4, F24, F34, F37, step 3.1]

4.2 The non-dominant components. For the component morphism $p_i$ of step 3.1, if it is not dominant, then by [F37] the image $p_i(Z_i)$ is not dense in $\mathbf P(W)$, so its closure is a proper closed subset and $W_i:=\mathbf P(W)\smallsetminus\overline{p_i(Z_i)}$ is a nonempty open subset of $\mathbf P(W)$; by definition of the image, every point $y\in W_i$ has empty fibre $p_i^{-1}(y)=\varnothing$. [F34, F37, step 3.1]


5.1 The common parameter open set. There are finitely many components, so the family of nonempty open sets consisting of the $V_i$ of step 4.1 for the dominant components and the $W_i$ of step 4.2 for the non-dominant components is finite; let $U$ be their intersection, an open subset of $\mathbf P(W)$. By steps 1.2 and [F31], $\mathbf P(W)$ is irreducible, so any two of these nonempty open sets meet and, by induction on the finite list, $U\ne\varnothing$; if $I=\varnothing$, so that there are no components, take $U=\mathbf P(W)$. In either case $U$ is a nonempty open subset of $\mathbf P(W)$. Distinct $Z_i$ are disjoint by step 2.1, so for every point $[s]\in U$ exactly one alternative of steps 4.1 and 4.2 applies to each component. [F31, step 1.2, step 2.1, step 4.1, step 4.2]

6.1 Smoothness of the incidence fibres over $U$. Fix a closed point $[s]\in U$ of $\mathbf P(W)$ and write $F=p^{-1}([s])=I\times_{\mathbf P(W)}\operatorname{Spec}k([s])$ for the scheme-theoretic fibre of [F34]; here $k([s])=k$ by [F24], since classical points correspond to closed points and all classical points have residue field $k$. Because the pairwise disjoint open subschemes $Z_i$ cover $I$ by step 2.1, the open subschemes $F\times_IZ_i$ cover $F$, and by [F33] each $F\times_IZ_i$ is canonically identified with the fibre $p_i^{-1}([s])=Z_i\times_{\mathbf P(W)}\operatorname{Spec}k$ of $p_i$. For a dominant $i$, with $[s]\in V_i$, this fibre is nonempty and smooth over $k$ by step 4.1; for a non-dominant $i$, with $[s]\in W_i$, it is empty by step 4.2, and the empty scheme is smooth over $k$. Smoothness is local on the source by [F32], so $F$ is smooth over $k$. [F24, F32, F33, F34, step 2.1, step 4.1, step 4.2, step 5.1]

7.1 Identification with the general member. By [F3] clause (2), the fibre $F=p^{-1}([s])$ of step 6.1 is isomorphic over $X^\circ$ to the zero subscheme $Z(s)\cap X^\circ$ of the section $s$ restricted to $X^\circ$ ([F36] and [F2]); hence $Z(s)\cap X^\circ$ is smooth over $k$. This holds for every closed point $[s]\in U$ and every representative $0\ne s\in W$, since $Z(s)$ depends only on $[s]$ by [F2]. That is the first assertion of the statement. [F2, F3, F36, step 6.1]

8.1 Non-vacuity of the parameter set in the classical reading. The set $U$ of step 5.1 is a nonempty open subset of the projective space $\mathbf P(W)$ over the algebraically closed field $k$, and the standard charts $D_+(x_j)$ of [F38] cover it, so $U\cap D_+(x_j)$ is a nonempty open subset of an affine space $\mathbf A^r_k$ for some $j$; by [F38] it contains a closed point of that affine spectrum, which by [F38] is a classical point of $\mathbf P^r_k$, hence by [F24] a closed point of the scheme $\mathbf P(W)$. Thus $U$ contains closed points and the general-member statement of step 7.1 is not vacuous; in the classical dictionary of [F24] these are exactly the parameters $[s]\in U$. [F24, F38, step 5.1]

8.2 Hyperplane sections of the fixed embedding. Here $X^\circ=X\smallsetminus\operatorname{Bs}(W_h)=X$, so the first assertion, which is established by the argument of steps 1.1-7.1 applied with $W=W_h$ and $X^\circ=X$, gives a nonempty open $U\subseteq\mathbf P(W_h)$ such that for every closed point $[s]\in U$ the zero scheme $Z(s)\subseteq X$ is smooth over $k$. Let $F$ be any degree-one form with $F|_X=s\ne0$; on a standard affine chart $V=\operatorname{Spec}A\subseteq X$ trivializing $\mathcal O_X(1)$, the zero scheme $Z(s)$ is cut out by the local equation $f$ of $s$ ([F36]) and the scheme-theoretic intersection $X\times_{\mathbf P^N_k}V_+(F)$ is cut out by the same equation, because $V_+(F)$ is defined by the dehomogenized form $F$ and $f$ is its restriction to the chart; so the two closed subschemes of $X$ agree by [F35] and [F36]. Hence the scheme-theoretic hyperplane sections of $X$ for parameters in $U$ are smooth over $k$, which is the final assertion. [F2, F35, F36, step 1.5, step 7.1]

9.1 Boundary, choice, and scope dispositions. Empty: if $X=\varnothing$ then $\Gamma(X,L)=0$ and no nonzero $W$ exists, so the theorem is vacuous; if $X\ne\varnothing$ but $X^\circ=\varnothing$, then by [F3] clause (2) every fibre $p^{-1}([s])=Z(s)\cap X^\circ$ is empty and smooth, and one may take $U=\mathbf P(W)$ in step 5.1, so the statement holds; [F3] clause (4) and the same fibre identification give the parallel empty-member conclusion when $r=0$. Zero: the parameter space is $\mathbf P^0_k$ when $\dim_kW=1$, and its single member is empty on $X^\circ$ by the previous sentence; conversely, the incidence $I$ itself can be empty exactly when $X^\circ=\varnothing$ or $r=0$, and in both cases the argument of step 5.1 uses the empty family of components. One: the case $\dim_kW=2$, $r=1$, is included; nothing in the proof requires $r\ge2$. Degenerate: $X$ is assumed neither irreducible nor connected nor of pure dimension, and the argument decomposes $I$ rather than $X$; the members $Z(s)\cap X^\circ$ may be reducible, empty, or non-reduced as ambient data, and no smoothness of $X^\circ$ outside $X$ is used. Endpoints: the proof covers $N=0$ in the final clause (where $X=\mathbf P^0_k$ and $W_h$ is one-dimensional, $\operatorname{Bs}(W_h)=\varnothing$) and imposes no upper bound on $N$ or on $r$; the claimed open set may be all of the base-locus-free parameter space, and no density or dimension of the good locus beyond nonemptiness openness is asserted. Nonempty-choice: AC is declared in [F1] and is used exactly through the AC-assuming suppliers [F3] (incidence), [F4] (generic smoothness), [F5] (one-component lemma), [F7] (regularity versus smoothness), [F10] (Noetherianity routes), [F13]-[F14] (finitely many components), [F24] (the classical-scheme dictionary), [F38]-[F39] (closed points and Noetherian spectra), and [F18]-[F21] (separatedness); the finite choices of charts, bases and component indices and the fibre computations of steps 2.1, 6.1, 7.1, 1.5 and 8.2 are finite and add no choice principle. Both iff cases: the only biconditional invoked as a supplier is [F7] (regular if and only if smooth over the perfect field $k$), used in step 1.3 in the direction "smooth over $k$ implies regular"; the criterion [F17] is used in the direction "separated implies the affine-overlap condition" in step 3.1; and [F27] is used in the direction "the vanishing ideal is prime implies irreducibility" in step 1.2. No irreducibility, connectedness, dimension, or nonemptiness of the members is asserted, in accordance with the statement. This completes the proof. [F1, F3, F4, F5, F7, F10, F13, F14, F17, F18, F19, F20, F21, F24, F27, F38, F39, step 2.1, step 6.1, step 7.1, step 1.5, step 8.2] ∎

## Source qualification




Vakil, Classes 51-52, §3.9 Corollary (with §3.10-3.11) states Bertini for a
finite-dimensional **base-point-free** linear system on a smooth $k$-variety
over an algebraically closed field of characteristic $0$: almost every element,
as a closed subscheme, is nonsingular over $k$. Arapura, §5.4, Theorem 5.4.5,
proves the hyperplane version on a nonempty open subset of the dual projective
space by the incidence correspondence and notes that the statement is valid in
every characteristic although the proof given works only in characteristic
$0$. The present item generalizes the base-point-free hypothesis by removing
the base locus from the ambient scheme: the conclusion is smoothness of the
whole zero scheme inside $X^\circ=X\smallsetminus\operatorname{Bs}(W)$, for a
nonempty open set of parameters, and the hyperplane case for a fixed immersion
is recovered because the hyperplane system of an embedding has empty base
locus. The proof is not copied from either source: it decomposes the incidence
of [[lem-linear-system-incidence-is-smooth]] into its finitely many
irreducible components and applies the in-run target-side generic smoothness
theorem [[thm-generic-smoothness-characteristic-zero]] componentwise, which
also delivers the statement that no dense part of a general member (rather
than the whole base-locus-free part) is singular. Neither source asserts
anything about the size of the good locus beyond open nonemptiness, about
irreducibility or connectedness of the members, or about their dimension or
nonemptiness, and neither claim is made here. The characteristic-$0$ hypothesis
is used only through perfectness of $k$ and generic smoothness; the failure of
the arbitrary base-point-free form of Bertini in positive characteristic is
recorded on the examples page of this pair.
