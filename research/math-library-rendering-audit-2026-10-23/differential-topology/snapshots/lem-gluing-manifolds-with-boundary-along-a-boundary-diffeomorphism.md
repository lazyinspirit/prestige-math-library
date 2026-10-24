---
id: lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism
kind: lemma
title: Gluing manifolds with boundary along a boundary diffeomorphism
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- thm-collar-neighborhood-theorem
- def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
- def-smooth-atlas
- thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
- def-smooth-manifold
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- def-quotient-topology
- def-countable-choice-principle-for-foliation-pair
- def-regular-foliation-atlas
- thm-frobenius-local-coordinate-theorem
- thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function
- thm-fundamental-theorem-on-flows
- thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)
    url: https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf
    locator: §2.1–§2.2, printed pp. 11–15 (gluing foliated manifolds with boundary along their boundary)
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.3, printed pp. 144–145 (the doubly-suspended Reeb foliation of $S^3$ obtained by gluing two Reeb
      components)
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $W_1,W_2$ be smooth
$n$-manifolds with nonempty boundary ([[def-smooth-manifold]],
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]) and let
$\varphi:\partial W_1\to\partial W_2$ be a diffeomorphism
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Then the
quotient
$$W:=W_1\sqcup W_2\big/\{\,x\sim\varphi(x):x\in\partial W_1\,\}$$
carries a smooth structure for which the two inclusions $W_i\hookrightarrow W$
are smooth embeddings onto their images, making $W$ a smooth $n$-manifold
without boundary. Fixing collars fixes this smooth structure; the smooth
gluing type is independent of the collar choices, up to diffeomorphism. If
moreover each $W_i$ carries a regular codimension-$q$ foliation $F_i$ tangent to
$\partial W_i$ ([[def-regular-foliation-atlas]]) and $\varphi$ carries the
foliation of $\partial W_1$ induced by $F_1$ to that induced by $F_2$
([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]), and their tangent plane fields have matching smooth jets in signed collar
coordinates, then the $F_i$ glue to a regular codimension-$q$ foliation $F$ of $W$ restricting to
$F_i$ on $W_i$. Here matching jets means the following explicit local condition. Identify the collars with $\partial W_1\times(-\varepsilon,\varepsilon)$ using $\varphi$ and opposite normal signs. Let $E$ be the common rank-$(n-q)$ tangent distribution on the seam, and choose a complement to $E$ there, extended constantly in the signed collar. Each side's nearby plane field is the graph of a smooth linear map $A_-(z,s)$ or $A_+(z,s)$ from $E_z$ to this complement. Require $\partial_s^j A_-(z,0)=\partial_s^j A_+(z,0)$ for every $j\ge0$. Equality of boundary foliations alone does not imply this condition and does not suffice for smooth foliated gluing.

## Facts & Assumptions

**Given:** Smooth $n$-manifolds with boundary $W_1,W_2$, a boundary diffeomorphism $\varphi:\partial W_1\to\partial W_2$, and foliations $F_i$ tangent to $\partial W_i$ with $\varphi$-compatible boundary foliations and matching signed-collar plane-field jets.

[F1] Every smooth manifold with boundary has a smooth collar: a diffeomorphism from $\partial M\times[0,1)$ onto a neighbourhood of $\partial M$ carrying $\partial M$ to $\partial M\times\{0\}$ ([[thm-collar-neighborhood-theorem]]).

[F2] A smooth atlas of a manifold with boundary consists of compatible charts that are homeomorphisms onto relatively open subsets of $\mathbb H^n$, with smooth local extensions across the boundary; its smooth structure is the maximal compatible atlas ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], [[def-smooth-atlas]]).

[F3] The restrictions of boundary charts to their faces give $\partial M$ the structure of a closed embedded smooth boundaryless $(\dim M-1)$-manifold ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[F4] The quotient topology on $W_1\sqcup W_2/\sim$ is the finest topology making the quotient map continuous, and a map from the quotient is continuous exactly when its composite with the quotient map is ([[def-quotient-topology]]).

[F5] A regular foliation atlas is a covering by compatible charts whose transitions preserve the second coordinate; its plaques and leaves give the foliation ([[def-regular-foliation-atlas]]).

[F6] A diffeomorphism is a bijective smooth map with smooth inverse, and the composite of diffeomorphisms defined on compatible domains is a diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F7] A smooth constant-rank involutive distribution has local foliation coordinates ([[thm-frobenius-local-coordinate-theorem]]).

[F8] Under countable choice a smooth manifold has a smooth proper nonnegative exhaustion; smooth local flows exist uniquely and extend across a finite time endpoint when the trajectory remains in a compact subset; smooth partitions of unity patch local extensions and positive collar widths ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]], [[thm-fundamental-theorem-on-flows]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 (Collar neighbourhoods.) Choose collar diffeomorphisms $\partial W_i\times[0,1)\to C_i\subseteq W_i$ onto open collar neighbourhoods with $\partial W_i$ corresponding to $\partial W_i\times\{0\}$ [F1]; by [F3] the boundary is a boundaryless smooth $(n-1)$-manifold, so $\varphi$ is a diffeomorphism between smooth boundaryless manifolds. Form the quotient $W$ and give it the quotient topology [F4]. [F1, F3, F4]

2.1 (Smooth structure on the quotient.) Write $B=\partial W_1$ and use the collars of step 1.1 to identify a neighborhood of the seam with $B\times(-1,1)$: on $W_1$ the signed parameter is negative, and on $W_2$ it is positive, with boundary points identified by $\varphi$. Boundary charts times this signed interval, together with the interior charts of the pieces, give an atlas whose transitions near the seam are product boundary-chart transitions; their transitions to each piece are smooth because its collar is smooth. The quotient is Hausdorff: interior points are separated inside their pieces, and distinct seam points have disjoint boundary neighborhoods with collar widths reduced to separate any specified other point. It is second countable by the countable atlases on the pieces and boundary. These signed charts give a boundaryless smooth manifold, and the piece inclusions are smooth embeddings of manifolds with boundary. For independence of collars, join their inward collar vector fields by convex interpolation; the interpolated field remains inward, and its local flow produces a smooth family of collar germs. Differentiating this family gives a time-dependent vector field vanishing on $B$; multiply it by a cutoff supported in a smaller collar. Its time-one flow identifies the two collar germs, fixes $B$, and extends to a diffeomorphism of each piece. For noncompact $B$ completeness of that extension must be arranged. Work on the boundaryless carrier $B\times\mathbb R$ in the first collar coordinates. The collar-family velocity is zero on $B\times\{0\}$; smoothness up to the boundary means local smooth extensions exist, and a locally finite partition patches them across the negative side while preserving the prescribed positive-side field. Make the family stationary at its two time endpoints by a smooth parameter cutoff, which keeps the two endpoint collars unchanged. Choose the proper nonnegative function $h$ from F8. Since the velocity vanishes on the seam, compactness of the interpolation interval and continuity give a positive local collar width on which $|dh(V_t)|\le1$ for every $t$. A positive smooth minorant of these widths and a smaller collar cutoff give a global smooth field $G_t$ equal to the collar-family velocity near the seam, zero outside the wider collar, with $|dh(G_t)|\le1$. Every trajectory on a finite time interval therefore stays in a compact sublevel of $h$, so F8 extends it to that entire interval in both directions. Its evolution maps are diffeomorphisms, fix the seam, and preserve each side by uniqueness. Shrink the initial width once more, locally uniformly for the compact time parameter, so the collar-family tracks lie where the cutoff is one; uniqueness identifies this global evolution with the collar isotopy on that neighborhood. Transport its positive-side restriction to the original piece and extend by the identity away from the collar. Gluing these piece diffeomorphisms yields a diffeomorphism of the two signed-collar smooth gluings. Literal equality of smooth structures merely from their interior restrictions is not asserted. [F1, F2, F3, F4, F6, F8]

3.1 (Foliations glue under the jet condition.) In each signed-collar chart express the tangent planes as graphs of the maps $A_-$ and $A_+$ of the Statement. Their derivatives of every normal order agree at zero; their tangential derivatives then agree by differentiating those equalities in $z$. The piecewise map $A$ is therefore smooth across zero: induction on derivative order, using the fundamental theorem of calculus in the normal variable, gives each derivative its common continuous seam value. Its graph defines a smooth rank-$(n-q)$ distribution agreeing with $TF_i$ on both sides. Off the seam it is involutive because each $F_i$ is a regular foliation. In a smooth local frame the components of a frame bracket modulo the distribution are smooth and zero on both open sides, so they vanish on the seam by continuity. The distribution is involutive everywhere, and F7 gives a regular foliation of the glued manifold. Its restrictions are $F_i$, because they have the same tangent distribution and hence the same connected integral leaves. The seam remains saturated since its tangent distribution is $E\subseteq TB$. [F5, F7, step 2.1]

4.1 The quotient $W$ carries the smooth structure of step 2.1 making the inclusions of $W_1$ and $W_2$ smooth embeddings, and the foliations glue to the regular foliation $F$ of step 3.1; this proves both claims of the lemma. [step 1.1, step 2.1, step 3.1] ∎
