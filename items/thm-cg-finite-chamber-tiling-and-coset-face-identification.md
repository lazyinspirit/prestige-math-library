---
id: thm-cg-finite-chamber-tiling-and-coset-face-identification
kind: theorem
title: "The finite chamber tiling, the face-stabiliser identification, and the spherical Coxeter complex as a triangulation of the sphere"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-abstract-simplicial-complex, def-cg-coxeter-diagram-components-and-finite-type, def-connected-component-and-quasicomponent, def-connected-space, def-coset, def-cg-canonical-reflection-homomorphism, def-cg-dual-chambers-and-reflection-hyperplanes, def-cg-finite-reflection-arrangement-and-spherical-chambers, def-cg-geometric-inversion-set, def-cg-real-coxeter-form-and-reflection, def-cg-tits-cone-and-fundamental-chamber, def-dual-family-associated-to-a-basis, def-generated-subgroup, def-geometric-realization-of-an-abstract-simplicial-complex, def-hh-coxeter-matrix-word-group-and-length, def-homeomorphism-and-open-maps, def-linear-basis, def-linear-isomorphism-and-invertible-linear-map, def-metric-compactness, def-metric-space, def-metric-topology, def-principal-inverse-sine-and-cosine, def-real-and-complex-inner-product-space, def-subspace-topology-top, ex-convex-subsets-of-rn-are-path-connected, lem-algebra-of-continuous-real-maps-on-a-space, lem-cg-diagram-products-and-invariant-form-comparison, lem-cg-dual-action-and-chamber-faces-exist, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-cg-reflection-representation-descends-and-root-norms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, prop-a-finite-simplicial-complex-has-compact-hausdorff-realization, thm-all-norms-on-rn-are-equivalent, thm-cg-dual-chamber-intersections-and-point-stabilizers, thm-cg-finite-type-positive-definite-criterion, thm-cg-root-sign-and-simple-reflection-positivity, thm-cg-tits-cone-finite-negativity-and-convexity, thm-compactness-under-continuous-maps, thm-dual-family-is-a-basis-in-finite-dimension, thm-heine-borel-rn, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-metric-continuity-characterisations, thm-metric-hausdorff-separation, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008, first-edition author manuscript PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 5, Example 5.2.7 and section 5.3 (printed pp. 66-68); Chapter 6, Theorem 6.4.3 (printed pp. 81-84), Theorem 6.6.3 with Lemmas 6.6.4-6.6.6 (printed pp. 87-92), section 6.8 (printed pp. 96-102), Theorem 6.12.9 (printed pp. 119-120); Appendix D.2, Lemmas D.2.2-D.2.5 and Theorems D.2.6-D.2.7 (printed pp. 442-447)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014, author-hosted PDF)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 4 (Proposition 4.6, printed pp. 5-6) and section 5 (Proposition 5.4, Proposition 5.8, printed pp. 6-9); sections 5.10-5.12 (Theorem 5.9, Tits' Lemma 5.11, printed pp. 9-12)"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, $n:=|S|$, and let the
arrangement $\mathcal A$, the chamber $C$, its interior $C^\circ$, the closed and open faces
$\overline{C_I}$ and $C_I$, the translated objects $wC$, $w\overline{C_I}$, $wC_I$, the unit
sphere $S^{n-1}$ and the coset face poset be as in
[[def-cg-finite-reflection-arrangement-and-spherical-chambers]]. Let $\rho$,
$\Phi=\Phi_+\sqcup\Phi_-$, $V_+$, $T$, $\ell$ be as in
[[def-cg-canonical-reflection-homomorphism]],
[[thm-cg-root-sign-and-simple-reflection-positivity]] and
[[def-hh-coxeter-matrix-word-group-and-length]]; let $S(u)$ denote the **support** of $u\in W$,
the set of letters occurring in a reduced expression of $u$
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]], clause (1)); and let
$U=\bigcup_{w\in W}wC\subseteq V^*$ be the Tits cone of the dual action with its negative-root
sets $\operatorname{Neg}(f)=\{\alpha\in\Phi_+:f(\alpha)<0\}$
([[def-cg-tits-cone-and-fundamental-chamber]]). Then:

**(1) The chamber tiling.** $U=V^*$, and under the identification of the definition
$V=\bigcup_{w\in W}wC$; moreover
$$V\setminus\bigcup_{\alpha\in\Phi}H_\alpha=\bigsqcup_{w\in W}wC^\circ,$$
the connected components of $V\setminus\bigcup_\alpha H_\alpha$ are exactly the sets
$wC^\circ$ $(w\in W)$ with closures $\overline{wC^\circ}=wC$, so the closed chambers of
$\mathcal A$ are exactly the sets $wC$; the map $w\mapsto wC^\circ$ is a bijection from $W$
onto the set of chambers, distinct closed chambers have disjoint interiors, and every
$W$-orbit in $V$ meets $C$ in exactly one point.

**(2) Simplicial chambers and their vertices.** Let $v_s\in V$ be the $B$-dual basis of
$(e_s)$, i.e. $B(v_s,e_t)=\delta_{st}$ ([[def-dual-family-associated-to-a-basis]],
[[thm-dual-family-is-a-basis-in-finite-dimension]]). Then
$$\overline{C_I}=\Bigl\{\sum_{s\notin I}\lambda_sv_s:\lambda_s\ge0\Bigr\},\qquad C_I=\Bigl\{\sum_{s\notin I}\lambda_sv_s:\lambda_s>0\Bigr\}$$
for every $I\subseteq S$; the closed chamber $C$ is the simplicial cone with extreme rays
$\mathbb R_{\ge0}v_s$ $(s\in S)$; the vertices of the spherical simplex $C\cap S^{n-1}$ are
exactly the points $v_s/\lVert v_s\rVert_B$, in the precise sense that
$C\cap S^{n-1}\cap\bigcap_{t\ne s}H_{e_t}=\{v_s/\lVert v_s\rVert_B\}$ for every $s$; and the dihedral angle
between the walls $H_{e_s}$ and $H_{e_t}$ is $\pi/m(s,t)$ in the following exact sense: the tangent
sector $\{v:B(v,e_s)\ge0,\ B(v,e_t)\ge0\}$ of $C$ along the codimension-two face
$C\cap H_{e_s}\cap H_{e_t}$ projects under the orthogonal projection
$V\to\mathbb Re_s+\mathbb Re_t$ onto a sector in the two-plane $\mathbb Re_s+\mathbb Re_t$
bounded by its two lines $H_{e_s}$ and $H_{e_t}$, and that sector has angle $\pi/m(s,t)$. More generally each $w\overline{C_I}$ is a simplicial cone with the linearly
independent generators $\rho(w)v_s$ $(s\notin I)$. The walls of the chamber $wC$ are the root
hyperplanes $wH_{e_s}=H_{\rho(w)e_s}$.

**(3) The face identification and the stabilisers.** The assignment
$wW_I\mapsto w\overline{C_I}$ is a well-defined bijection from the coset face poset onto the
set of proper faces $\{w\overline{C_I}:w\in W,\ I\subsetneq S\}$ (the remaining sets
$w\overline{C_S}$ are all equal to $\{0\}$, the common face of all chambers), and for all
$w,v\in W$ and $I,J\subseteq S$
$$wW_I=vW_J\iff w\overline{C_I}=v\overline{C_J},\qquad wW_I\subseteq vW_J\iff v\overline{C_J}\subseteq w\overline{C_I},$$
$$w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}},\qquad wC_I\cap vC_J\neq\emptyset\iff wW_I=vW_J,$$
so the relative interiors of the faces partition $V$; moreover
$V\setminus\{0\}=\bigsqcup wC_I$, the disjoint union running over the cosets $wW_I$ with
$I\subsetneq S$. For every $x\in wC_I$ one has
$\operatorname{Stab}_W(x)=wW_Iw^{-1}$, and the setwise stabiliser
$\{w'\in W:w'w\overline{C_I}=w\overline{C_I}\}$ of the face $w\overline{C_I}$ is the same
subgroup $wW_Iw^{-1}$.

**(4) The spherical triangulation.** Assume $n\ge1$. Then
$S^{n-1}=\bigsqcup(wC_I\cap S^{n-1})$, the union running over the cosets $wW_I$ with
$I\subsetneq S$, and
$$\Sigma:=\{w\overline{C_I}\cap S^{n-1}:w\in W,\ I\subsetneq S\}$$
is the set of nonempty faces of a finite spherical simplicial complex (adjoin the empty face): each member is the spherical simplex whose
vertices are the points $\rho(w)v_s/\lVert v_s\rVert_B$ $(s\notin I)$ in the same sense, the relative interiors
$wC_I\cap S^{n-1}$ are pairwise disjoint and cover $S^{n-1}$, and the intersection of two
members is a common face, possibly empty, by (3); its face poset is isomorphic to the coset face poset by
$wW_I\mapsto w\overline{C_I}\cap S^{n-1}$. Consequently the abstract simplicial complex $K$
with vertices the cosets $wW_{S\setminus\{s\}}$ $(w\in W,\ s\in S)$ and simplices the empty set and the sets
$\{wW_{S\setminus\{s\}}:s\notin I\}$ $(w\in W,\ I\subsetneq S)$ is a triangulation of
$S^{n-1}$: the radial normalization $\varphi:|K|\to S^{n-1}$ of the simplexwise affine map into $V$ that sends the barycentric
coordinate at the vertex $wW_{S\setminus\{s\}}$ to the direction of $\rho(w)v_s$ is a
continuous bijection, $|K|$ is compact because $K$ is finite
([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]) and $S^{n-1}$ is
Hausdorff, so $\varphi$ is a homeomorphism
([[def-geometric-realization-of-an-abstract-simplicial-complex]],
[[thm-compactness-under-continuous-maps]], [[def-homeomorphism-and-open-maps]]). In
particular $K$ has exactly $|W|$ maximal simplices, indexed by the chambers. For $S=\emptyset$
the group is trivial, $V=0$, and $S^{-1}=\emptyset$ is triangulated by the complex with no vertices and sole simplex $\emptyset$, whose realization is empty.

## Facts & Assumptions

**Given:** A Coxeter system $(W,S)$ of finite type with $S$ finite, $n=|S|$, the space $V=\mathbb R^S$ with the Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi=\Phi_+\sqcup\Phi_-$, the dual action with chamber $C$, faces $\overline{C_I}$, $C_I$ and Tits cone $U$, and the identification $V\cong V^*$ of [[def-cg-finite-reflection-arrangement-and-spherical-chambers]].

[F1] Finite type: $W$ is finite, $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$ is the image of the finite set $W\times S$ and hence finite, $B$ is positive definite, $b(v)=B(v,\cdot)$ is a linear isomorphism $V\to V^*$, and every $\rho(w)$ preserves $B$ ([[thm-cg-finite-type-positive-definite-criterion]], clauses (1)-(2), [[lem-cg-diagram-products-and-invariant-form-comparison]], clause (4), [[lem-cg-reflection-representation-descends-and-root-norms]], [[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] Roots and signs: $\Phi=\Phi_+\sqcup\Phi_-$, $\Phi_-=-\Phi_+$, $e_s\in\Phi_+$ for every $s\in S$, every root $\alpha$ satisfies $B(\alpha,\alpha)=1$ and $\alpha\ne0$, and for $g\in C^\circ$ one has $g(\alpha)>0$ for $\alpha\in\Phi_+$ and $g(\alpha)<0$ for $\alpha\in\Phi_-$ ([[thm-cg-root-sign-and-simple-reflection-positivity]], clauses (2)-(3), [[lem-cg-reflection-representation-descends-and-root-norms]], clause (3)).

[F3] Chamber system and walls: the chambers are the sets $wC$ and $U=\bigcup_{w\in W}wC$; with $H_\alpha=\{v\in V:B(v,\alpha)=0\}$, $\overline{C_I}=\{v\in C:B(v,e_s)=0\text{ for }s\in I\}$ and $S(f)=\{s\in S:f(e_s)=0\}$, for all $w\in W$, $s\in S$ one has $wH_{e_s}=H_{\rho(w)e_s}$, and the walls of the chamber system are exactly the root hyperplanes $H_\alpha$, $\alpha\in\Phi$ ([[def-cg-finite-reflection-arrangement-and-spherical-chambers]], [[def-cg-tits-cone-and-fundamental-chamber]], clauses (1)-(2), [[thm-cg-dual-chamber-intersections-and-point-stabilizers]], clause (1)).

[F4] Collision and strict fundamental domain: if $f,g\in C$, $w\in W$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$; every $W$-orbit contained in $U$ meets $C$ in exactly one point; the open chambers $wC^\circ$ $(w\in W)$ are pairwise disjoint ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]], clauses (3) and (6)).

[F5] Topology: since $S$ is finite, $f\mapsto(f(e_s))_{s\in S}$ is a linear bijection $V^*\to\mathbb R^S$, and $d(f,g):=\max_{s\in S}|f(e_s)-g(e_s)|$ is the metric topology of $V^*$ in which all the assertions about open sets, interiors and connected components of $V^*$ are read ([[def-cg-tits-cone-and-fundamental-chamber]], clause (3), [[def-metric-space]], [[def-metric-topology]]).

[F6] Finite-negativity criterion: for every $f\in V^*$, $f\in U$ if and only if $\operatorname{Neg}(f)=\{\alpha\in\Phi_+:f(\alpha)<0\}$ is finite ([[thm-cg-tits-cone-finite-negativity-and-convexity]], clause (1)).

[F7] Supports and standard parabolics: for every $w\in W$ the support $S(w)$ (the letters occurring in a reduced expression) is well defined, $W_J=\{w\in W:S(w)\subseteq J\}$ for $J\subseteq S$, and $W_J\cap S=J$; moreover $(W_J,J)$ is a Coxeter system whose intrinsic length is the restriction of $\ell$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]], clauses (1)-(2)).

[F8] The $B$-dual family: there are elements $v_s\in V$ with $B(v_s,e_t)=\delta_{st}$, and they form a basis of $V$; for $x=\sum_t\mu_tv_t$ one has $B(x,e_t)=\mu_t$ ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]], [[def-linear-basis]]).

[F9] Simplicial machinery: $|K|$ is the set of barycentric coordinate functions on the abstract simplicial complex $K$ with the weak topology of the closed simplices ([[def-abstract-simplicial-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]]); a finite complex has compact Hausdorff realization ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]); a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], clause (3), [[def-homeomorphism-and-open-maps]]); and metric spaces are Hausdorff ([[thm-metric-hausdorff-separation]]).

[F10] Convexity and connectedness: a convex subset of $\mathbb R^n$ $(n\ge1)$ is path-connected and connected ([[ex-convex-subsets-of-rn-are-path-connected]], clause 1, [[thm-metric-continuity-characterisations]], clause (a)).

[F11] Cosets: for $I\subseteq S$ and $w\in W$ the set $wW_I=\{wu:u\in W_I\}$ is a left coset of the subgroup $W_I$ ([[def-coset]], [[def-generated-subgroup]]).

[F12] Continuity toolkit in finite dimensions: for a norm $N$ on a real vector space, $N(\sum_ju_j)\le\sum_jN(u_j)$ and $|N(u)-N(w)|\le N(u-w)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], clause 1); and sums, scalar multiples and (where the denominator does not vanish) quotients of continuous real-valued functions are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]], [[thm-metric-continuity-characterisations]], clause (a)).

[F13] For $0<\theta\le\pi/2$, $\sin\theta>0$, $\sin^2\theta+\cos^2\theta=1$, and $\arccos(\cos\theta)=\theta$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-principal-inverse-sine-and-cosine]]). The principal angle of two $B$-unit vectors is here defined as the arccosine of their inner product.

## Proof

**Proof technique:** direct; the case $S=\emptyset$ is separated first and every later step assumes $S\ne\emptyset$.

1.1 If $S=\emptyset$ then $W=\{1\}$, $V=V^*=\{0\}$, $\Phi=\emptyset$, $C=C^\circ=\{0\}=\overline{C_\emptyset}=C_S$ and the coset face poset is empty, so (1)-(3) hold in the vacuous form described in the statement and (4) is exactly its stated convention for $S=\emptyset$; assume $S\ne\emptyset$ from now on, so that $n\ge1$. [given, F1, algebra]

1.2 By [F1] the root system $\Phi$ is finite, so $\operatorname{Neg}(f)\subseteq\Phi_+$ is finite for every $f\in V^*$; the criterion [F6] therefore gives $V^*\subseteq U$, and $U\subseteq V^*$ holds by definition, so $U=V^*$ and every $f\in V^*$ lies in some chamber $wC$. [F1, F2, F6, algebra]

1.3 By [F8] the $B$-dual basis $(v_s)_{s\in S}$ exists, with $B(v_s,e_t)=\delta_{st}$ and $B(x,e_t)=\mu_t$ for $x=\sum_t\mu_tv_t$; hence $C=\{\sum_s\lambda_sv_s:\lambda_s\ge0\}$, $\overline{C_I}=\{\sum_{s\notin I}\lambda_sv_s:\lambda_s\ge0\}$ and $C_I=\{\sum_{s\notin I}\lambda_sv_s:\lambda_s>0\}$ for every $I\subseteq S$, so $C_S=\{0\}$ and $C_I\ne\emptyset$ for $I\subsetneq S$; and the cone $C$ has extreme rays $\mathbb R_{\ge0}v_s$, because $v_s=x+y$ with $x=\sum\mu_tv_t$, $y=\sum\nu_tv_t$ in $C$ forces $\mu_t+\nu_t=0$ for $t\ne s$ and $\mu_s+\nu_s=1$ with $\mu,\nu\ge0$, hence $x,y\in\mathbb R_{\ge0}v_s$; any vector with at least two positive coefficients splits into two nonproportional vectors of $C$, so it spans no extreme ray. [F8, F1, algebra]

1.4 For $g\in C^\circ$ and $\alpha\in\Phi$ one has $\alpha\in\Phi_+$ or $\alpha\in\Phi_-$, and $g(\alpha)\ne0$ by [F2]; for every $w\in W$ the point $\rho(w)g$ lies in $wC^\circ$ and $B(\rho(w)g,\alpha)=B(g,\rho(w)^{-1}\alpha)\ne0$ because $\Phi$ is stable under $\rho$, so $\rho(w)g\notin H_\alpha$ and $wC^\circ\cap H_\alpha=\emptyset$. [F2, F3, algebra]

2.1 $C^\circ=\bigcap_{s\in S}\{f:f(e_s)>0\}$ is open, as a finite intersection of preimages of the open half-line under the coordinate functionals $f\mapsto f(e_s)$, which are continuous for the topology of [F5]; it is convex, because those functionals are linear; and in the coordinates $V^*\cong\mathbb R^S$ it is a nonempty convex subset, hence path-connected and connected by [F10]. Each $wC^\circ=\rho(w)C^\circ$ is the image of $C^\circ$ under the linear isomorphism $\rho(w)$ [F1], whose coordinate matrix and inverse give Lipschitz maps for the metric of [F5], so $wC^\circ$ too is open and connected. [F5, F10, F1, step 1.3, F12, algebra]

2.2 From step 1.3: $\overline{C_I}\cap\overline{C_J}=\overline{C_{I\cup J}}$, and $\overline{C_I}\subseteq\overline{C_J}$ if and only if $J\subseteq I$; hence $\overline{C_I}=\overline{C_J}$ if and only if $I=J$. Moreover $C_I$ is the relative interior of $\overline{C_I}$ in its affine span, which is $\operatorname{span}\{v_s:s\notin I\}$, because by step 1.3 the relative interior consists exactly of the combinations with all coefficients positive. [step 1.3, algebra]

2.3 For every $I\subseteq S$ each $u\in W_I$ fixes $\overline{C_I}$ pointwise and fixes each $v_s$ with $s\notin I$: by [F7] $u$ is a product of elements of $I$, so it suffices to check the generators; for $s\in I$ and $x\in\overline{C_I}\subseteq C$ one has $B(x,e_s)=0$, hence $r_s(x)=x-2B(x,e_s)e_s=x$ by the reflection formula, while for $t\in I$ and $s\notin I$ one has $t\ne s$ and $B(v_s,e_t)=\delta_{st}=0$, hence $r_t(v_s)=v_s$. [step 1.3, F7, algebra]

2.4 Every $W$-orbit in $V$ meets $C$ in exactly one point, by the strict-fundamental-domain clause [F4] together with $U=V^*$ (step 1.2); and the map $w\mapsto wC^\circ$ is injective: if $wC^\circ=vC^\circ$ and $g\in C^\circ$ (nonempty by step 1.3), then $g=u\cdot h$ for some $h\in C^\circ$, where $u:=w^{-1}v$, and the collision rule [F4] applied to $g\in C$ and $h\in C$ gives $h=g$ and $u\in W_{S(g)}=W_\emptyset=\{1\}$, so $w=v$. [step 1.2, step 1.3, F4, algebra]

2.5 Let $s\ne t$, put $\theta:=\pi/m(s,t)$, $c:=\cos\theta$, and $P:=\mathbb Re_s+\mathbb Re_t$. The order convention in [[def-hh-coxeter-matrix-word-group-and-length]] and finiteness of $W$ give $m(s,t)<\infty$, so $0<\theta\le\pi/2$. In the $B$-orthonormal coordinates $a=e_s$, $b=(e_t+ce_s)/\sin\theta$ of $P$, one has $e_t=-ca+\sin\theta\,b$, using the Gram entries and [F13]. Orthogonal projection onto $P$ preserves the two values $B(v,e_s)$ and $B(v,e_t)$, because its kernel is $P^\perp=H_{e_s}\cap H_{e_t}$; every point of the resulting sector in $P$ is its own projection. Write a point of $P$ as $xa+yb$. The sector is $x\ge0$, $-cx+\sin\theta\,y\ge0$, bounded by the rays through $b$ and $\sin\theta\,a+cb$. These are unit vectors with inner product $c$, and the nonnegative sector between them has principal angle $\arccos c=\theta$ by [F13]. This proves the stated dihedral-angle formula. [step 1.3, F1, F3, F13, algebra]

3.1 $V\setminus\bigcup_{\alpha\in\Phi}H_\alpha=\bigsqcup_{w\in W}wC^\circ$, these sets are exactly the connected components of $V\setminus\bigcup_\alpha H_\alpha$, and $\overline{wC^\circ}=wC$: the inclusion $\supseteq$ holds by step 1.4; for $\subseteq$ take $f\notin\bigcup_\alpha H_\alpha$, so $f\in wC$ for some $w$ by step 1.2, and $(w^{-1}\cdot f)(e_s)=f(\rho(w)e_s)\ne0$ for every $s$ because $\rho(w)e_s\in\Phi$ [F2], whence $w^{-1}\cdot f\in C^\circ$ and $f\in wC^\circ$; the sets $wC^\circ$ are pairwise disjoint by [F4], open and connected by step 2.1 and nonempty by step 1.3, so each is a component, since a connected set meeting two of them would be separated by the partition into $wC^\circ$ and its complement, both of which are open in $V$ minus the hyperplanes; finally each $wC$ is closed, being the intersection of the finitely many closed half-spaces $\{v:B(v,\rho(w)e_s)\ge0\}$, and every $x\in wC$ is a limit of points $\rho(w)(w^{-1}x+\varepsilon u)\in wC^\circ$ with $u=\sum_sv_s$ and $\varepsilon>0$, because $B(w^{-1}x+\varepsilon u,e_s)=B(w^{-1}x,e_s)+\varepsilon>0$ and $B(u,e_s)=1$; hence $\overline{wC^\circ}=wC$ and the closed chambers are exactly the sets $wC$. [step 1.2, step 1.3, step 1.4, step 2.1, F2, F4, F5, algebra]

3.2 If $wW_I=vW_J$ with $I,J\subseteq S$, then $u:=w^{-1}v$ satisfies $uW_J=W_I$, so $1=uj$ for some $j\in W_J$ (because $1\in W_I$), giving $u=j^{-1}\in W_J$ and $W_I=uW_J=W_J$, so $I=W_I\cap S=W_J\cap S=J$ by [F7]; then $u\in W_I$ fixes $\overline{C_I}$ pointwise by step 2.3, so $w\overline{C_I}=vu^{-1}\overline{C_I}=v\overline{C_I}=v\overline{C_J}$, and the assignment $wW_I\mapsto w\overline{C_I}$ is well defined. [step 2.3, F7, F11, algebra]

3.3 For all $w,v\in W$ and $I,J\subseteq S$ the intersection formula $w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}}$ holds: if $x$ lies in the intersection, then $f:=w^{-1}x\in\overline{C_I}$ and $g:=v^{-1}x\in\overline{C_J}$ are points of $C$ with $(v^{-1}w)\cdot f=g$, so [F4] gives $f=g$ and $v^{-1}w\in W_{S(f)}$; then $I\subseteq S(f)$ and $J\subseteq S(f)$ by [F3] and $S(v^{-1}w)\subseteq S(f)$ by [F7], so $f\in\overline{C_{I\cup J\cup S(v^{-1}w)}}$ and $x\in w\overline{C_{I\cup J\cup S(v^{-1}w)}}$; conversely if $x=wf$ with $f\in\overline{C_{I\cup J\cup S(v^{-1}w)}}$, then $S(v^{-1}w)\subseteq S(f)$ and hence $v^{-1}w\in W_{S(f)}$ by [F7], so $v^{-1}w$ fixes $\overline{C_{S(f)}}$ pointwise by step 2.3, whence $v^{-1}x=v^{-1}wf=f\in\overline{C_J}$ and $x\in w\overline{C_I}\cap v\overline{C_J}$. [step 1.3, step 2.3, F3, F4, F7, algebra]

3.4 The faces $wC_I$ with $I\subsetneq S$ are nonempty by step 1.3, cover $V\setminus\{0\}$ and have pairwise disjoint relative interiors, so $V\setminus\{0\}=\bigsqcup wC_I$ over the cosets $wW_I$ with $I\subsetneq S$; moreover $wC_I\cap vC_J\ne\emptyset$ forces $wW_I=vW_J$ and hence $wC_I=vC_J$: if $x$ lies in $wC_I\cap vC_J$, then $f:=w^{-1}x\in C_I$ and $g:=v^{-1}x\in C_J$ are points of $C$ with $(v^{-1}w)\cdot f=g$, so [F4] gives $f=g$ and $v^{-1}w\in W_{S(f)}=W_I$ by step 1.3, and then $v=wu^{-1}$ with $u:=v^{-1}w\in W_I$ and $vC_I=wu^{-1}C_I=wC_I$ by step 2.3; for the covering, let $x\ne0$ and choose $w$ with $x\in wC$ by step 1.2, so that $w^{-1}x\ne0$ and therefore $S(w^{-1}x)\subsetneq S$ (else $w^{-1}x=0$ by step 1.3), giving $w^{-1}x\in C_{S(w^{-1}x)}$ by step 1.3 and $x\in wC_{S(w^{-1}x)}$. [step 1.2, step 1.3, step 2.3, F4, algebra]

3.5 For $f\in C$ one has $\operatorname{Stab}_W(f)=W_{S(f)}$: if $h\cdot f=f$, then the collision rule [F4] applied to the two points $f\in C$ gives $h\in W_{S(f)}$, and conversely every $u\in W_{S(f)}$ fixes $\overline{C_{S(f)}}\ni f$ pointwise by step 2.3; hence for $x\in wC_I$, writing $x=wf$ with $f\in C_I$, one has $S(f)=I$ by step 1.3 and $\operatorname{Stab}_W(x)=w\operatorname{Stab}_W(f)w^{-1}=wW_Iw^{-1}$. [step 1.3, step 2.3, F4, algebra]

3.6 For every $s\in S$ one has $C\cap S^{n-1}\cap\bigcap_{t\ne s}H_{e_t}=\{v_s/\lVert v_s\rVert_B\}$: a point $x$ of that intersection equals $\mu_sv_s$ with $\mu_s\ge0$ by step 1.3, and $\lVert x\rVert_B=1$ forces $\mu_s=1/\lVert v_s\rVert_B\ne0$, while each $v_s/\lVert v_s\rVert_B$ does lie in the intersection; moreover $\rho(w)\overline{C_I}=\{\sum_{s\notin I}\lambda_s\rho(w)v_s:\lambda_s\ge0\}$ with the vectors $\rho(w)v_s$ $(s\notin I)$ linearly independent because $\rho(w)$ is invertible [F1], and the walls of $wC$ are $wH_{e_s}=H_{\rho(w)e_s}$ by [F3]. [step 1.3, step 2.2, F1, F3, F8, algebra]

4.1 For all $w,v\in W$ and $I,J\subseteq S$: (a) $wW_I=vW_J$ if and only if $w\overline{C_I}=v\overline{C_J}$, because the forward implication is step 3.2 and if $w\overline{C_I}=v\overline{C_J}$ then the intersection formula (step 3.3) gives $w\overline{C_{I\cup J\cup S(v^{-1}w)}}=w\overline{C_I}$, so $I=I\cup J\cup S(v^{-1}w)$ by step 2.2, whence $J\subseteq I$ and $v^{-1}w\in W_I$ by [F7], and symmetrically $I\subseteq J$, so $I=J$ and $wW_I=vW_I=vW_J$; (b) $wW_I\subseteq vW_J$ is equivalent to $v^{-1}w\in W_J$ and $I\subseteq J$: containment gives $w\in vW_J$ and, after multiplying by $w^{-1}$, $W_I\subseteq W_J$, whence $I\subseteq J$ by [F7]; conversely these conditions give containment. By step 3.3, $v\overline{C_J}\subseteq w\overline{C_I}$ is equivalent to $v\overline{C_{J\cup I\cup S(w^{-1}v)}}=v\overline{C_J}$, hence to $I\subseteq J$ and $S(w^{-1}v)\subseteq J$ by step 2.2, which is the same pair of conditions by [F7] and closure of $W_J$ under inverses; (c) $wC_I\cap vC_J\ne\emptyset$ implies $wW_I=vW_J$ by step 3.4, and conversely $wW_I=vW_J$ gives $I=J$ and $v^{-1}w\in W_I$ by (a), hence $vC_I=wC_I$ by step 2.3 and this face is nonempty by step 1.3. Consequently $wW_I\mapsto w\overline{C_I}$ is a bijection from the coset face poset onto the set of proper faces, and by (b) it reverses inclusions, so it is an isomorphism from the coset face poset ordered by reverse inclusion onto the face poset ordered by containment. [step 1.3, step 2.2, step 2.3, step 3.2, step 3.3, step 3.4, F7, algebra]

4.2 Define $\mathrm{Vert}:=\{wW_{S\setminus\{s\}}:w\in W,\ s\in S\}$ and $\sigma(wW_I):=\{wW_{S\setminus\{s\}}:s\notin I\}\subseteq\mathrm{Vert}$ for $w\in W$, $I\subsetneq S$, and put $\hat u(wW_{S\setminus\{s\}}):=\rho(w)v_s/\lVert\rho(w)v_s\rVert_B$. The direction is well defined: if $wW_{S\setminus\{s\}}=w'W_{S\setminus\{s'\}}$, then step 3.2 gives $S\setminus\{s\}=S\setminus\{s'\}$ and $w\overline{C_{S\setminus\{s\}}}=w'\overline{C_{S\setminus\{s\}}}$, so $s=s'$ and, by step 3.6 applied to these one-dimensional cones, $\rho(w)v_s$ and $\rho(w')v_s$ are positive multiples of one another, whence $\lVert\rho(w)v_s\rVert_B=\lVert v_s\rVert_B$ because $B$ is $\rho$-invariant [F1] and the unit directions agree. The simplex is well defined: for $s\notin I$ and $u\in W_I$ one has $W_I\subseteq W_{S\setminus\{s\}}$, hence $wuW_{S\setminus\{s\}}=wW_{S\setminus\{s\}}$ and $\sigma(wuW_I)=\sigma(wW_I)$. For $I\subsetneq S$, the intersection of its vertex cosets is $\bigcap_{s\notin I}wW_{S\setminus\{s\}}=wW_I$, since [F7] identifies the intersection of these subgroups with the support condition $S(u)\subseteq I$. Thus the vertex set determines the original coset. Finally a subset of $\sigma(wW_I)$ keeping precisely the indices $s\in T\subseteq S\setminus I$ is $\sigma(wW_{S\setminus T})$, so $K:=\{\emptyset\}\cup\{\sigma(wW_I):w\in W,\ I\subsetneq S\}$ is closed under subsets, contains the empty set and every singleton, and is finite. [step 2.2, step 3.2, step 3.6, F7, F9, algebra]

5.1 For $x\in wC_I$ the setwise stabiliser of the face $w\overline{C_I}$ is $wW_Iw^{-1}$: one has $w'w\overline{C_I}=w\overline{C_I}$ if and only if $w'wW_I=wW_I$ by step 4.1(a), that is, if and only if $w'\in wW_Iw^{-1}$; this subgroup contains $\operatorname{Stab}_W(x)=wW_Iw^{-1}$ from step 3.5. [step 3.5, step 4.1, F11, algebra]

5.2 Define $\varphi(\alpha):=\bigl(\sum_{v\in\operatorname{supp}\alpha}\alpha(v)\hat u(v)\bigr)/\bigl\lVert\sum_{v\in\operatorname{supp}\alpha}\alpha(v)\hat u(v)\bigr\rVert_B$ for $\alpha\in|K|$. This is well defined and takes values in $S^{n-1}$: on a simplex $\sigma(wW_I)$ containing $\operatorname{supp}\alpha$ the sum is $\sum_{s\notin I}\alpha(wW_{S\setminus\{s\}})\rho(w)v_s/\lVert v_s\rVert_B$, a combination with nonnegative coefficients, not all zero, of the linearly independent vectors $\rho(w)v_s$ of step 3.6, so the numerator does not vanish; and if $\alpha$ lies in two simplices, both contain the minimal simplex $\operatorname{supp}\alpha$, on which the formula is the same. On each closed simplex $|\sigma(wW_I)|$, which is compact and carries the Euclidean simplex topology of [F9], the barycentric coordinates $\alpha\mapsto\alpha(wW_{S\setminus\{s\}})$ are continuous, so the numerator is continuous as a map into $V$ (finite sums of scalar multiples of the fixed vectors, read in the coordinates of [F5]) and the denominator is a continuous positive real function by [F12], so $\varphi|_{|\sigma(wW_I)|}$ is continuous by [F12]; every simplex of $K$ is a face of one of the finitely many maximal simplices, whose traces are therefore continuous, and $|K|$ carries the weak topology of [F9], so $\varphi$ is continuous. [step 3.6, step 4.2, F5, F9, F12, algebra]

5.3 The map $\varphi$ is surjective: for $x\in S^{n-1}$ step 3.4 gives a coset $wW_I$ with $x\in wC_I$, so $x=\sum_{s\notin I}\lambda_s\rho(w)v_s$ with all $\lambda_s>0$ by step 1.3; putting $\Lambda:=\sum_{s\notin I}\lambda_s\lVert v_s\rVert_B$ and $\alpha(wW_{S\setminus\{s\}}):=\lambda_s\lVert v_s\rVert_B/\Lambda$ on the vertices of $\sigma(wW_I)$ and $\alpha:=0$ elsewhere defines a point of $|\sigma(wW_I)|\subseteq|K|$ whose numerator is $w\bigl(\sum_{s\notin I}(\lambda_s/\Lambda)v_s\bigr)$, so that $\varphi(\alpha)=x/\lVert x\rVert_B=x$. It is injective: if $\varphi(\alpha)=x$ and $\sigma(wW_I)$ is the minimal simplex supporting $\alpha$, so that all $\alpha(wW_{S\setminus\{s\}})>0$ for $s\notin I$, then the defining identity expresses $w^{-1}x$ as the positive multiple $y/\lVert y\rVert_B$ of $y:=\sum_{s\notin I}(\alpha(wW_{S\setminus\{s\}})/\lVert v_s\rVert_B)v_s$; since $w^{-1}x\in C_I$ is itself the combination $\sum_{s\notin I}\lambda_sv_s$ with $\lambda_s>0$ (step 1.3) and $(v_s)$ is a basis, the coefficients satisfy $\alpha(wW_{S\setminus\{s\}})=\lVert y\rVert_B\lambda_s\lVert v_s\rVert_B$, and the coset $wW_I$ together with the numbers $\lambda_s$ is determined by $x$ (steps 3.4 and 1.3), summing the coefficients to $1$ gives $\lVert y\rVert_B=1/(\sum_{s\notin I}\lambda_s\lVert v_s\rVert_B)$, so $\alpha$ is determined by $x$. [step 1.3, step 3.4, step 3.6, step 4.2, algebra]

6.1 The realization $|K|$ is compact by [F9] and finiteness of $K$ (step 4.2), the sphere $S^{n-1}$ is Hausdorff, since distinct points are separated by the intersections with $S^{n-1}$ of disjoint metric balls in $V$ [F9], and $\varphi$ is a continuous bijection by steps 5.2 and 5.3; hence $\varphi$ is a homeomorphism by [F9] and $K$ is a triangulation of $S^{n-1}$, with the members of $\Sigma$, the relative interiors and the face poset as described in steps 3.6, 3.4 and 4.1. The maximal simplices of $K$ are exactly the $\sigma(wW_\emptyset)=\{wW_{S\setminus\{s\}}:s\in S\}$, one for each $w\in W$: indeed $\sigma(wW_I)\subseteq\sigma(vW_J)$ holds if and only if $vW_J\subseteq wW_I$ (both sides are equivalent to the pair of conditions $J\subseteq I$ and $v^{-1}w\in W_I$, by the argument of step 4.1(b) applied to vertex sets), so a simplex is maximal exactly when $I=\emptyset$, and $\sigma(wW_\emptyset)=\sigma(vW_\emptyset)$ forces $w=v$. Thus $K$ has exactly $|W|$ maximal simplices, indexed by the chambers $wC$, and the case $S=\emptyset$ was disposed of in step 1.1. [step 1.1, step 3.4, step 3.6, step 4.1, step 4.2, step 5.2, step 5.3, F9, algebra] ∎
