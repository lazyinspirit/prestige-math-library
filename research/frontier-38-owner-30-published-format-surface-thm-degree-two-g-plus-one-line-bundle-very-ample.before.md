---
id: thm-degree-two-g-plus-one-line-bundle-very-ample
kind: theorem
title: "Line bundles of degree at least 2g+1 are very ample"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-degree-descends-picard-curve
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-flat-morphism-schemes
  - def-finitely-generated-field-extension
  - def-integral-scheme
  - def-proper-morphism
  - def-pullback-cartier-divisor
  - def-relative-projective-space-standard-charts
  - def-scheme-theoretic-image
  - def-very-ample-invertible-sheaf-relative
  - def-zariski-tangent-space-point
  - lem-add-one-point-exact-sequence-line-bundle
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-local-on-target
  - lem-curve-closed-subsets-finite
  - lem-finite-type-jacobson-residue-extension
  - lem-flat-morphisms-stable-base-change
  - lem-integral-finite-type-scheme-function-field
  - lem-proper-cohomology-field-extension
  - lem-proper-source-to-separated-target-proper
  - lem-proper-stable-base-change
  - lem-pullback-cartier-divisor-line-bundle
  - lem-quasi-finite-morphism-fibre-characterization
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-affine-domain-dimension-transcendence-degree
  - thm-artinian-ring-has-finite-length
  - thm-base-point-free-linear-system-morphism
  - thm-cartier-weil-divisors-curves-agree
  - thm-dvr-ideal-and-module-length
  - thm-degree-two-g-line-bundle-basepoint-free
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-lying-over
  - thm-nakayama-lemma
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-projective-space-proper-over-base
  - thm-proper-quasi-finite-is-finite
  - thm-right-exactness-of-tensor-products
  - thm-scheme-theoretic-image-quasi-compact-morphism
  - thm-structure-theorem-for-artinian-rings
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality and projective-space
suppliers. Let $C$ be a smooth proper geometrically integral curve over a field
$k$ of genus $g$ and let $L$ be an invertible $\mathcal O_C$-module with
$\deg(L)\ge2g+1$. Then $L$ is very ample: $L$ is closed H-very ample relative
to $\operatorname{Spec}k$ in the sense of
[[def-very-ample-invertible-sheaf-relative]], and the base-point-free morphism
$$\phi_L:C\longrightarrow\mathbf P^{h^0(C,L)-1}_k$$
of [[thm-base-point-free-linear-system-morphism]] is a closed immersion with
$\phi_L^*\mathcal O(1)\cong L$.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; an invertible $\mathcal O_C$-module $L$ with $\deg(L)\ge2g+1$; an algebraic closure $\bar k$ and the base change $C_{\bar k}$.

[F1] If an invertible sheaf $\mathcal E$ on a smooth proper curve of genus $g$
has $\deg(\mathcal E)>2g-2$, then $H^1(C,\mathcal E)=0$ and
$h^0(C,\mathcal E)=\deg(\mathcal E)+1-g$. Over $k$ this applies to $L$.
After extension to $\bar k$, it applies to twists by geometric points once
their degrees are computed in [F6]. It does not assert vanishing for twists
by arbitrary closed points over $k$, whose residue degrees may be large.
([[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]],
[[cor-rr-exact-high-degree-formula]], [[def-degree-divisor-proper-curve]])

[F2] After base change to $\bar k$, each closed point $p$ is rational. The
one-point sequence $0\to L_{\bar k}(-p)\to L_{\bar k}\to L_{\bar k}|_p\to0$
is supplied by [[lem-add-one-point-exact-sequence-line-bundle]]. Iterating it
gives the restriction sequences for $p+q$ and $2p$. Since
$\mathcal O_{C_{\bar k},p}$ is a DVR with maximal ideal $(t)$ and
$L_{\bar k}$ is free of rank one at $p$, the double-point quotient is
$L_{\bar k,p}/t^2L_{\bar k,p}$, a two-dimensional $\bar k$-space with basis
the value and the first-order class. For $p\ne q$ the quotient is
$L_{\bar k}|_p\oplus L_{\bar k}|_q$, also two-dimensional.
([[lem-add-one-point-exact-sequence-line-bundle]],
[[thm-local-ring-smooth-curve-dvr]])

[F3] Since $\deg(L)\ge2g+1\ge2g$, the sheaf $L$ is base-point-free: the
complete linear system $|L|$ has no base point and the evaluation morphism
$\mathcal O_C^{h^0(C,L)}\to L$ is surjective.
([[thm-degree-two-g-line-bundle-basepoint-free]])

[F4] The complete linear system defines
$\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k$ with
$\phi_L^*\mathcal O(1)\cong L$. Projective space is proper, hence separated,
over $k$; since $C$ is proper, $\phi_L$ is proper by
[[lem-proper-source-to-separated-target-proper]]. Its base change is proper
by [[lem-proper-stable-base-change]].
([[thm-base-point-free-linear-system-morphism]],
[[thm-projective-space-proper-over-base]], [[def-proper-morphism]],
[[def-relative-projective-space-standard-charts]],
[[lem-proper-stable-base-change]])

[F5] At a rational point over $\bar k$, the intrinsic tangent space is the
dual of the cotangent space $\mathfrak m/\mathfrak m^2$
([[def-zariski-tangent-space-point]]). A tangent map is injective exactly
when the induced cotangent map is surjective. For the smooth curve source,
$\mathfrak m/\mathfrak m^2$ is one-dimensional by the DVR description in [F2].

[F6] **Degree after arbitrary field extension.** Let $K/k$ be any field
extension and let $x$ be a closed point of $C$, with finite residue field
$E=\kappa(x)$. The pullback point scheme is
$x_K=\operatorname{Spec}(E\otimes_kK)$. A finite $k$-basis of $E$ tensors to
a $K$-basis, so this finite-dimensional $K$-algebra has dimension $[E:k]$ and
is Artinian: a descending chain of ideals is a descending chain of
finite-dimensional $K$-subspaces and therefore stabilizes. By the structure
theorem for Artinian rings, it is the finite product of its localizations at
its maximal ideals. Write $E\otimes_kK=\prod_y A_y$ over those factors. Each
$A_y$ is an Artinian local ring, so its regular module has finite composition
length. Every simple factor is its residue field $\kappa(y)$, and additivity
of $K$-dimension along that composition series gives
$$\dim_K A_y=\operatorname{length}_{A_y}(A_y)[\kappa(y):K].$$
The dimension of a finite product is the sum of the dimensions of its factors,
so
$$[E:k]=\sum_y\operatorname{length}_{A_y}(A_y)[\kappa(y):K].$$
The projection $C_K\to C$ is flat: $K$ is flat over $k$ by
[[def-flat-and-faithfully-flat-modules-and-ring-maps]], and flatness of
morphisms is preserved by base change. The closed point $x$ is an effective Cartier
divisor on the smooth curve; its pullback is $x_K$. At each $y$, the local
ring of $C_K$ is a DVR, and if a local equation for $x_K$ has order $e$, its
quotient has length $e$. Thus the coefficient of $y$ in the pulled-back
divisor is $\operatorname{length}_{A_y}(A_y)$, and
$$\deg_K(x_K)=\sum_y\operatorname{length}_{A_y}(A_y)[\kappa(y):K]=[E:k]=\deg_k(x).$$
By additivity, $\deg_K(D_K)=\deg_k(D)$ for every divisor
$D=\sum_xn_x[x]$, with no separability hypothesis and including negative
coefficients. Every invertible sheaf is $\mathcal O_C(D)$ for a divisor
$D$ by taking a nonzero rational section. Flat pullback gives
$\mathcal O_{C_K}(D_K)\cong\mathcal O_C(D)_K$; the Cartier/Weil
identification and the degree homomorphism on the Picard group therefore give
$$\deg(\mathcal F_K)=\deg(\mathcal F)$$
for every invertible sheaf $\mathcal F$ on $C$. In particular this holds for
$K=\bar k$. ([[def-degree-divisor-proper-curve]],
[[def-divisor-smooth-proper-curve]], [[def-flat-morphism-schemes]],
[[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[lem-flat-morphisms-stable-base-change]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[thm-local-ring-smooth-curve-dvr]],
[[thm-structure-theorem-for-artinian-rings]],
[[thm-artinian-ring-has-finite-length]],
[[thm-dvr-ideal-and-module-length]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[def-pullback-cartier-divisor]],
[[lem-pullback-cartier-divisor-line-bundle]],
[[thm-cartier-weil-divisors-curves-agree]],
[[cor-degree-descends-picard-curve]])

[F7] For a field extension $K/k$ and coherent $\mathcal F$ on $C$,
$H^q(C_K,\mathcal F_K)\cong H^q(C,\mathcal F)\otimes_kK$. Thus the genus and
dimensions of global sections are preserved. A nonzero $k$-module stays
nonzero after tensoring with $K$: a one-dimensional subspace injects into it
after tensoring because $K$ is flat over $k$, and that subspace becomes $K$.
Right exactness of tensoring identifies the scalar extension of a cokernel
with the cokernel of the scalar-extended map.
([[lem-proper-cohomology-field-extension]],
[[def-flat-and-faithfully-flat-modules-and-ring-maps]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[thm-right-exactness-of-tensor-products]])

[F8] A proper quasi-finite morphism is finite. A finite injective ring map is
integral, so every point of its target affine scheme has a point above it by
lying over. Affine ring maps are surjective exactly for affine closed
immersions, and closed immersions are local on the target. If a finite module
is nonzero, a maximal ideal contains the annihilator of a nonzero element; a
maximal ideal is a closed point.
([[thm-proper-quasi-finite-is-finite]],
[[thm-lying-over]],
[[lem-closed-immersion-affine-quotient-and-base-change]],
[[lem-closed-immersion-local-on-target]],
[[def-closed-immersion-schemes]],
[[thm-nakayama-lemma]],
[[thm-proper-ideal-contained-in-maximal-ideal]])

[F9] The arbitrary-field curve-image route uses the following suppliers:
curves are integral finite-type schemes of chain dimension one
([[def-algebraic-curve-over-field]]); scheme-theoretic images of quasi-compact
morphisms exist and restrict to opens as stated
([[def-scheme-theoretic-image]],
[[thm-scheme-theoretic-image-quasi-compact-morphism]]); for an integral
finite-type scheme, its generic stalk is the fraction field of every
nonempty affine chart and that field is finitely generated over the base
([[lem-integral-finite-type-scheme-function-field]]); a finite-type domain
$A$ over a field satisfies $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$
([[thm-affine-domain-dimension-transcendence-degree]]); proper closed subsets
of a finite-type integral curve are finite sets of closed points
([[lem-curve-closed-subsets-finite]]); a closed point of a finite-type
$k$-scheme has finite residue degree over $k$
([[lem-finite-type-jacobson-residue-extension]]); and for a finite-type map,
quasi-finiteness is equivalent to each point being isolated in its fibre with
finite residue extension ([[lem-quasi-finite-morphism-fibre-characterization]]).
The local ring at a closed point of a smooth curve is a DVR
([[thm-local-ring-smooth-curve-dvr]]).
The finitely generated function field and finite algebraic-generation steps
use [[def-finitely-generated-field-extension]] and
[[thm-finitely-generated-algebraic-extensions-are-finite]]. The image route
is spelled out in step 3.3; no separability or residue-field-degree-one
hypothesis is used. [given]

[F10] Closed H-very ampleness relative to $\operatorname{Spec}k$ means the
existence of a closed immersion $i:C\to\mathbf P^n_k$ with
$L\cong i^*\mathcal O_{\mathbf P^n_k}(1)$.
([[def-very-ample-invertible-sheaf-relative]])

[F11] The Axiom of Choice: every family of nonempty sets has a choice
function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; preserve degree under base change, separate geometric
points and first jets, then prove the closed-immersion conclusion by finite
local algebra and faithfully flat descent.

1.1 (Set-up over $k$.) The high-degree formula and basepoint-free system apply. [F1, F3, F4, given]
Write $d=\deg(L)$. Then $d\ge2g+1>2g-2$, so [F1] applies to $L$.
Over $k$, the complete linear system is base-point-free and defines the proper
morphism $f=\phi_L:C\to\mathbf P^{h^0(C,L)-1}_k$ with
$f^*\mathcal O(1)\cong L$. No vanishing claim for twists by arbitrary
$k$-closed points is needed. [F1, F3, F4, given]

2.1 (Base change and degrees.) Put $K=\bar k$; degree, genus, and section dimensions are preserved. [F6, F7, step 1.1]
Thus
$\deg(L_K)=d$ even if closed residue extensions over $k$ are inseparable; by
[F7], $g(C_K)=g$ and $h^0(C_K,L_K)=h^0(C,L)$. Every closed point of $C_K$ is
$K$-rational. From this step on, the point, pair, and double-point twists are
only by such geometric points, so each subtracts degree one (twice for a
length-two divisor); the high-degree vanishing below is applied on $C_K$.
[F6, F7, step 1.1]

3.1 (Separate distinct geometric points.) [F1, F2, step 2.1]
Restriction onto $p+q$ is surjective.
Let $p\ne q$ be closed points of $C_K$. By [F2], restriction to the effective
divisor $p+q$ gives
$0\to L_K(-p-q)\to L_K\to Q_{p+q}\to0$ with
$H^0(Q_{p+q})=L_K|_p\oplus L_K|_q\cong K^2$. Its twist has degree
$d-2\ge2g-1>2g-2$, so [F1] gives $H^1(C_K,L_K(-p-q))=0$. The long exact
cohomology sequence therefore makes
$H^0(C_K,L_K)\to H^0(Q_{p+q})$ surjective. Sections can take independently
prescribed values at $p$ and $q$, so $f_K$ separates these points. [F1, F2,
step 2.1]

3.2 (Separate tangent directions.) [F1, F2, F5, step 2.1]
Restriction to $2p$ separates the value and first jet.
Let $p$ be a closed point of $C_K$, with
uniformizer $t$ in the DVR $\mathcal O_{C_K,p}$, and choose a local frame $e$
of $L_K$. By [F2], the double-point quotient
$L_K/L_K(-2p)\cong L_{K,p}/t^2L_{K,p}$ has basis $e,te$. The restriction map
on global sections is surjective: the twist has degree
$d-2\ge2g-1>2g-2$, so $H^1(C_K,L_K(-2p))=0$ by [F1]. Choose global sections
$s_0,s_1$ whose images are $e$ and $te$, respectively. Then $s_0$ is nonzero
at $p$, and in the projective chart defined by $s_0$ the ratio satisfies
$s_1/s_0\equiv t\pmod{t^2}$. Its differential at $p$ is nonzero, so the
tangent map of $f_K$ is injective there. [F1, F2, F5, step 2.1]

3.3 (Finiteness after base change; arbitrary-field route.)
We prove the needed
finiteness route for a map $g:X\to\mathbf P^r_F$ over any field $F$, where
$X$ is a smooth proper integral curve and $M=g^*\mathcal O(1)$ has positive
degree. It will apply to $f_K$ here and to $f$ over $k$ in step 5.1. By
[[thm-base-point-free-linear-system-morphism]] and [F4], the map in each of
these applications is proper and finite type. Its scheme-theoretic image
$Y\hookrightarrow\mathbf P^r_F$ exists by [F9]. The scheme-image theorem
shows that $g(X)$ is dense in $Y$: otherwise a nonempty open in $Y$ disjoint
from $g(X)$ would restrict the scheme-theoretic image to the empty image of
the empty source, contradicting that this open is nonempty. On every standard
affine chart $V=\operatorname{Spec}R$ of projective space, the restriction of
$Y$ is $\operatorname{Spec}(R/I)$, where
$I=\ker(R\to\Gamma(g^{-1}V,\mathcal O_X))$. If the preimage is nonempty,
it is an integral finite-type open of $X$, and its global functions embed in
$F(X)$ by [F9]. Hence $I$ is prime. Thus $Y$ is reduced; its underlying
space is the closure of the image of the irreducible space $X$, so $Y$ is
irreducible and therefore integral.
The image $Y$ cannot be a single point: in that case $g$ factors through
$Y=\operatorname{Spec}E$ for a field $E$, the invertible sheaf
$\mathcal O(1)|_Y$ is free of rank one over $E$, and its pullback $M$ is
$\mathcal O_X$, contrary to $\deg(M)>0$. Choose a point of $Y$ other than
its generic point and an affine open $\operatorname{Spec}A\subseteq Y$
containing it. This open also contains the generic point; since $Y$ is
integral, the chosen point corresponds to a nonzero prime of the finite-type
domain $A$. Therefore $\dim A\ge1$, and [F9] gives
$\operatorname{trdeg}_F F(Y)\ge1$. The same affine-domain dimension result
shows $\operatorname{trdeg}_F F(X)=1$: choose a strict length-one chain
$Z_0\subsetneq X$ of nonempty irreducible closed subsets and a point
$x\in Z_0$. This point is nongeneric and hence closed by [F9]. In an affine
neighborhood $\operatorname{Spec}B$ of $x$, its local DVR gives
$\dim B\ge1$; any chain in this affine open remains strict after closure in
$X$, so $\dim B\le1$. Dominance gives an injection $F(Y)\hookrightarrow
F(X)$ on generic stalks, whence $\operatorname{trdeg}_F F(Y)=1$ as well.
Take a standard projective affine chart containing the generic point of $Y$.
Its coordinate ratios generate $F(Y)$, so at least one, say $h$, is
transcendental over $F$. By [F9], $F(X)/F$ is finitely generated. Since
$\operatorname{trdeg}_F F(X)=\operatorname{trdeg}_F F(h)=1$, each member of
a finite generating list for $F(X)/F(h)$ is algebraic over $F(h)$; the
finite-algebraic-generation theorem in [F9] gives $[F(X):F(h)]<\infty$.
Thus $F(X)/F(Y)$ is finite, with no separability assumption.
For the fibre criterion, every point of $X$ is generic or closed by [F9].
If a closed point $x$ mapped to the generic point of $Y$, the field map
$F(Y)\to\kappa(x)$ would embed a field of transcendence degree one into
$\kappa(x)$, which is finite over $F$ by [F9]; this is impossible. The
generic fibre therefore has the single point $\eta_X$. On affine
neighborhoods $\operatorname{Spec}A\subseteq Y$ and
$\operatorname{Spec}B\subseteq g^{-1}(\operatorname{Spec}A)$ of the generic
points, the dominance map makes $A\to B$ injective and its coordinate ring
is the localization $B\otimes_A F(Y)$, a domain with one prime, hence a
field. Its fraction field
is $F(X)$, so the generic fibre is $\operatorname{Spec}F(X)$, finite over
$\operatorname{Spec}F(Y)$. For any nongeneric point $y\in Y$, the closed set
$\overline{\{y\}}$ is proper; its preimage is a proper closed subset of $X$
because $g(X)$ is dense in $Y$. By [F9] it is a finite set of closed
points. In particular every closed-point fibre is finite; each point in it
is isolated, and its residue extension over $\kappa(y)$ is finite because
$\kappa(x)/F$ is finite and $\kappa(y)$ embeds in $\kappa(x)$. Thus every
point of $X$ is isolated in its fibre with finite residue extension. The
quasi-finite fibre criterion in [F9] makes $g$ quasi-finite, and proper plus
quasi-finite is finite by [F8]. Applying this argument over $F=K$ proves
that $f_K$ is finite. The field extensions above may be inseparable; only
their finiteness is used.
[F4, F6, F8, F9, step 2.1]

4.1 (Local ring surjectivity over $K$.)
We prove that $f_K$ is a closed immersion. Fix an affine chart
$U=\operatorname{Spec}R\subseteq\mathbf P^{h^0(C,L)-1}_K$. Since $f_K$ is
finite, its inverse image is affine, say $\operatorname{Spec}S$, with $S$
finite over $R$. Let $A$ be the image of $R\to S$, so $A\hookrightarrow S$
and $\operatorname{Spec}A$ is the scheme-theoretic image on this chart. Since
$S$ is finite over $R$ and the $R$-action factors through $A$, the same module
generators make $S$ finite over $A$. For a closed point
$y\in\operatorname{Spec}A$, lying over gives at least one source point
because $A\hookrightarrow S$ is integral, and separation in step 3.1 gives
at most one; call the unique point $x$, with corresponding prime
$\mathfrak n\subset S$. Write $\mathfrak m_y$ for the maximal ideal of $y$
and $z$ for its corresponding closed point in the ambient chart $U$. Both
residue fields are $K$. Set $S_y=S\otimes_A A_{\mathfrak m_y}$. Since $S$ is
finite over $A$, $S_y$ is integral and finite over $A_{\mathfrak m_y}$; its
maximal ideals correspond exactly to primes of $S$ over $\mathfrak m_y$.
There is only $\mathfrak n$, so $S_y$ is local. It is therefore already its
localization at that maximal ideal and equals
$S_{\mathfrak n}=\mathcal O_{C_K,x}$. Localization preserves finite modules,
so $B:=\mathcal O_{C_K,x}$ is finite over $A_{\mathfrak m_y}$.
The tangent map at $x$ is injective by step 3.2; by [F5] its dual cotangent
map is surjective. The local map
$\mathcal O_{\mathbf P^r_K,z}\to A_{\mathfrak m_y}\to B$
factors that cotangent map, so
$\mathfrak m_{A_{\mathfrak m_y}}/\mathfrak m_{A_{\mathfrak m_y}}^2\to
\mathfrak m_B/\mathfrak m_B^2$ is surjective. The latter space is one-dimensional
because $B$ is a DVR. Hence some element of $\mathfrak m_{A_{\mathfrak m_y}}$
maps to a uniformizer modulo $\mathfrak m_B^2$, and therefore
$\mathfrak m_{A_{\mathfrak m_y}}B=\mathfrak m_B$. The residue fields agree,
so $B=A_{\mathfrak m_y}+\mathfrak m_{A_{\mathfrak m_y}}B$. The finite
$A_{\mathfrak m_y}$-module $B/A_{\mathfrak m_y}$ consequently satisfies
$B/A_{\mathfrak m_y}=\mathfrak m_{A_{\mathfrak m_y}}(B/A_{\mathfrak m_y})$;
Nakayama's lemma gives $B=A_{\mathfrak m_y}$.
This holds at every closed point $y$. The finite cokernel $S/A$ must vanish:
if nonzero, choose a nonzero element $s$ and, by [F8], a maximal ideal
$\mathfrak m$ containing its proper annihilator. The localization $s/1$ is
nonzero in $(S/A)_{\mathfrak m}$, since otherwise some $u\notin\mathfrak m$
would annihilate $s$, contradicting $\operatorname{Ann}(s)\subseteq\mathfrak m$.
This contradicts the local surjectivity just proved. Thus $R\to S$ is surjective
on every affine chart. The affine quotient description in [F8] proves that
$f_K$ is a closed immersion.
[F5, F8, F11, step 3.1, step 3.2, step 3.3]

5.1 (Descend the closed immersion.) [F4, F7, F8, F9, step 3.3, step 4.1]
The arbitrary-field argument of step 3.3 applies to $f$ over $k$, so $f$ is
proper quasi-finite and finite by [F8]. For an affine
chart $\operatorname{Spec}R\subseteq\mathbf P^{h^0(C,L)-1}_k$, write its
finite inverse image as $\operatorname{Spec}S$. The closed immersion $f_K$
makes $R\otimes_kK\to S\otimes_kK$ surjective. By right exactness in [F7],
the cokernel of $R\to S$ tensors to zero over $K$. A nonzero $k$-module
contains a one-dimensional $k$-subspace whose injection remains injective
after tensoring with the flat extension $K/k$, and that subspace becomes
$K\ne0$; therefore the cokernel itself is zero. Thus $R\to S$ is surjective
for every affine chart. The affine quotient criterion and target locality in
[F8] show that $f$ is a closed immersion. [F4, F7, F8, step 4.1]

6.1 (Very ampleness.) [F10, F11, step 5.1]
Since $f^*\mathcal O(1)\cong L$, the closed immersion
of step 5.1 exhibits $L$ as closed H-very ample relative to
$\operatorname{Spec}k$ by [F10]. The Axiom of Choice [F11] is used through the
stated suppliers, including the maximal-ideal step in 4.1; no choice is used
to alter the degree or field scope. [F9, F10, F11, step 5.1] ∎
