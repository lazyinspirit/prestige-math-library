---
id: thm-blowup-smooth-surface-point-charts
kind: theorem
title: "Blowing up a rational point of a smooth surface"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - def-smooth-morphism-schemes
  - def-standard-open-proj
  - thm-projective-space-as-proj
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - cor-localisations-of-regular-local-rings-are-regular
  - def-embedding-dimension-and-regular-local-ring
  - def-axiom-of-choice
  - thm-blowup-regular-surface-closed-point-regular
  - lem-regular-local-quotient-by-parameter-is-regular
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-blowup-isomorphism-off-center
  - lem-affine-point-blowup-pushforward-vanishing
  - lem-blowup-local-on-base-scheme
  - lem-blowup-plane-origin-incidence-equations
  - thm-gluing-affine-schemes
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.1 the two charts of the blowup of the plane at the origin, p. 389"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, blowup of A^n and its affine charts, PDF p. 23"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 Section h, pp. 194-197"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item thm-blowup-smooth-surface-point-charts; evidence research/frontier-38-owner-30-reader-2.md, research/frontier-38-owner-30-reader-findings-2.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $S$ be a smooth surface over a field $k$ and
let $p\in S(k)$ be a $k$-rational point. Then the blowup
$S'=\operatorname{Bl}_pS$ is smooth over $k$, with exceptional curve
$E\cong\mathbb P^1_k$ and $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_k}(-1)$
([[thm-blowup-regular-surface-closed-point-regular]]). Choose a sufficiently
small affine neighbourhood $U=\operatorname{Spec}R$ of $p$ and functions
$x,y\in R$ generating the ideal of $p$ on $U$ and giving regular parameters
at $p$; such a choice exists. Over $U$ the blowup is the incidence subscheme
$$V(xv-yu)\subseteq U\times_k\mathbb P^1_k,$$
with homogeneous coordinates $(u:v)$ on the second factor, its two charts are
$\operatorname{Spec}R[T]/(xT-y)=\operatorname{Spec}R[y/x]$ and
$\operatorname{Spec}R[U_1]/(yU_1-x)=\operatorname{Spec}R[x/y]$, and the
overlap inverts $T$ and $U_1$ with $TU_1=1$. After base change to
$\operatorname{Spec}\mathcal O_{S,p}$, replace $R$ by
$\mathcal O_{S,p}$ in these formulas. The charts over $R$ are smooth surfaces
over $k$, and the local rings on $E$ have dimension one at its generic point
and dimension two at its closed points. For $S=\mathbb A^2_k$ with
coordinates $x,y$ and $p=0$ the charts are the affine planes
$\operatorname{Spec}k[x,T]$ and $\operatorname{Spec}k[y,U_1]$, and the
incidence subscheme lies in $\mathbb A^2_k\times_k\mathbb P^1_k$.

## Facts & Assumptions

**Given:** A field $k$, a smooth surface $S$ over $k$, a $k$-rational point
$p$, the local ring $A=\mathcal O_{S,p}$, regular parameters
$\bar x,\bar y\in A$, an affine neighbourhood $U=\operatorname{Spec}R$ of
$p$, lifts $x,y\in R$ of $\bar x,\bar y$, the blowup
$\pi\colon S'\to S$ of $p$, and the Axiom of Choice, inherited from the Proj
and gluing constructions ([[def-axiom-of-choice]]).

[F1] [[def-smooth-morphism-schemes]]: $S\to\operatorname{Spec}k$ is smooth,
hence flat, locally of finite presentation, and geometrically regular on the
fibres; the fibre over the unique point of $\operatorname{Spec}k$ is $S$
itself, so every local ring of $S$ is regular. Smoothness is local on the
source.

[F2] [[def-embedding-dimension-and-regular-local-ring]],
[[thm-regular-local-rings-are-domains-and-cohen-macaulay]],
[[lem-regular-local-quotient-by-parameter-is-regular]] and
[[cor-localisations-of-regular-local-rings-are-regular]]: $A$ is a regular
local ring of dimension two, $2=\dim A=\operatorname{edim}A$; regular local
rings are domains and Cohen-Macaulay, their regular systems of parameters are
regular sequences in any order, and $A/(\bar x)$ is a regular local ring of
dimension one, hence a domain.

[F3] [[thm-localisation-and-polynomial-extension-of-regular-rings]]:
Localizations and finite polynomial extensions of a regular Noetherian ring
are regular, and regularity is tested at maximal ideals.

[F4] [[thm-affine-blowup-standard-charts]] and
[[lem-affine-blowup-algebra-properties]]: For an ideal
$I=(f_0,\dots,f_r)$ the standard charts $\operatorname{Spec}A[I/f_i]$ cover
$\operatorname{Bl}_I\operatorname{Spec}A$, and the homomorphism
$A[x_1,\dots,x_r]/(ax_i-a_i)\to A[I/a]$ is surjective with kernel the
$a$-power torsion; the image of $a$ is a nonzerodivisor and
$\bigl(A[I/a]\bigr)_a=A_a$.

[F5] [[lem-blowup-local-on-base-scheme]]: On the open subscheme $U$ the
blowup of the point is the blowup of $U$ along the restriction of the ideal
sheaf of $p$; if $(x,y)$ is the ideal of $p$ on $U$, this is
$\operatorname{Bl}_{(x,y)}U$.

[F6] [[thm-gluing-affine-schemes]]: Affine schemes with open subschemes and
isomorphisms on overlaps satisfying the cocycle condition glue to a scheme,
uniquely up to unique isomorphism respecting the charts.

[F7] [[def-standard-open-proj]] and [[thm-projective-space-as-proj]]: On
$\mathbb P^1_k=\operatorname{Proj}k[u,v]$ the standard opens $D_+(u)$ and
$D_+(v)$ are the affine lines $\operatorname{Spec}k[T]$, $T=v/u$, and
$\operatorname{Spec}k[U_1]$, $U_1=u/v$, glued by $TU_1=1$.

[F8] [[thm-blowup-regular-surface-closed-point-regular]]:
$\operatorname{Bl}_pS$ is regular of pure dimension two, $E$ is an effective
Cartier divisor isomorphic to $\mathbb P^1_{\kappa(p)}=\mathbb P^1_k$ with
$\mathcal O_E(E)=\mathcal O(-1)$, the base change to $\operatorname{Spec}A$
has charts $\operatorname{Spec}A[T]/(xT-y)$ and
$\operatorname{Spec}A[U_1]/(yU_1-x)$ glued by $TU_1=1$, the local rings on
$E$ have dimension one at the generic point and two at closed points, and if
$S$ is smooth over $k$ and $p$ is $k$-rational then $\operatorname{Bl}_pS$ is
smooth over $k$.

[F9] [[lem-affine-point-blowup-pushforward-vanishing]]: For a ring $A$ and
$I=(x,y)$ generated by a regular sequence, the two standard charts cover
$\operatorname{Bl}_I\operatorname{Spec}A$ and, over the affine base, the
structure-sheaf pushforward is the structure sheaf of the base with all
higher direct images vanishing.

[F10] [[lem-blowup-plane-origin-incidence-equations]]: Over
$k[x,y]$ the blowup of the origin is $V(xv-yu)\subseteq
\mathbb A^2_k\times_k\mathbb P^1_k$ with charts $\operatorname{Spec}k[x,T]$,
$y=xT$, and $\operatorname{Spec}k[y,U_1]$, $x=yU_1$, glued by $TU_1=1$.

[F11] [[lem-blowup-isomorphism-off-center]]: The blowup is an isomorphism
over the complement of the centre, so the descriptions over the open
neighbourhood $U$ glue to the global blowup.

## Proof

1.1 By [F1] the local ring $A=\mathcal O_{S,p}$ is regular, and by [F2] it has dimension and embedding dimension two, so there are regular parameters $\bar x,\bar y$; lifting them along $R\to R_{\mathfrak m_p}=A$ and clearing denominators gives $x,y\in R$ with these images, and the failure loci of the conditions below are closed subsets of the affine scheme $U$ not containing $p$, so $U$ may be shrunk while keeping $p$. Arrange that (i) $U$ is connected and $R$ is a domain: every local ring of the smooth surface $S$ is a domain by [F1] and [F2], so a connected affine open neighbourhood of $p$ has domain ring; (ii) $(x,y)$ generates the ideal of $p$ on $U$, which holds at $p$ because the images generate $\mathfrak m_p$ and the locus where the two coherent ideals differ is closed and avoids $p$; (iii) $(x,y)$ and $(y,x)$ are regular sequences in $R$, namely $x$ and $y$ are nonzerodivisors and each is a nonzerodivisor modulo the other: this holds at $p$ because $\bar x,\bar y$ is a regular system of parameters in the Cohen-Macaulay ring $A$ by [F2], and each failure is the support of the kernel of multiplication on a coherent module, a closed subset avoiding $p$. Thus a sufficiently small affine neighbourhood and functions as in the statement exist. [F1, F2, F5]

2.1 Let $Z=V(xv-yu)\subseteq U\times_k\mathbb P^1_k$. By [F7] the two charts of the projective factor give $Z\cap\{u\ne0\}=\operatorname{Spec}R[T]/(xT-y)$ with $T=v/u$, and $Z\cap\{v\ne0\}=\operatorname{Spec}R[U_1]/(yU_1-x)$ with $U_1=u/v$; on the overlap both $T$ and $U_1$ are invertible and $TU_1=1$, so $Z$ is obtained by gluing these two affine charts along $R[T,T^{-1}]/(xT-y)$. On the other hand, by [F4] the standard charts of $\operatorname{Bl}_{(x,y)}U$ are $\operatorname{Spec}R[(x,y)/x]$ and $\operatorname{Spec}R[(x,y)/y]$ with overlap $R[(x,y)/x][x/y]$. Since $(x,y)$ is a regular sequence in the domain $R$ by step 1.1, the homomorphism $R[T]/(xT-y)\to R[(x,y)/x]$, $T\mapsto y/x$, is an isomorphism: it is surjective with kernel the $x$-power torsion by [F4], and a coefficient comparison in a relation $xg=(xT-y)h$, using that $y$ is a nonzerodivisor modulo $x$, shows $g\in(xT-y)$, so no nonzero torsion exists; symmetrically $R[U_1]/(yU_1-x)\cong R[(x,y)/y]$ via $U_1\mapsto x/y$. These identifications carry $T\mapsto y/x$ and $U_1\mapsto x/y$, matching the ratio identifications of the blowup charts, so by [F6] they glue to an isomorphism $Z\to\operatorname{Bl}_{(x,y)}U$ over $U$, canonical because both sides are determined by the same chart data. [F4, F6, F7, step 1.1, algebra]

3.1 By [F5] the restriction of the blowup of $S$ at $p$ to the open $U$ is $\operatorname{Bl}_{(x,y)}U$, so step 2.1 identifies it with the incidence subscheme $V(xv-yu)$ and gives the two charts $\operatorname{Spec}R[T]/(xT-y)=\operatorname{Spec}R[y/x]$ and $\operatorname{Spec}R[U_1]/(yU_1-x)=\operatorname{Spec}R[x/y]$ with $TU_1=1$, the descriptions displayed in the statement. Base change to $\operatorname{Spec}A$ replaces $R$ by $A$: the formulas $\operatorname{Spec}A[T]/(xT-y)$ and $\operatorname{Spec}A[U_1]/(yU_1-x)$ are exactly the local charts of [F8], and over this affine base the structure-sheaf pushforward is $A$ with vanishing higher direct images by [F9]. [F5, F8, F9, step 2.1]

4.1 Smoothness and the local structure of $E$. Since $S$ is smooth over $k$ and $p$ is $k$-rational, [F8] gives that $\operatorname{Bl}_pS$ is smooth over $k$ with exceptional curve $E\cong\mathbb P^1_k$ and $\mathcal O_E(E)=\mathcal O(-1)$, and that the local rings on $E$ have dimension one at its generic point and two at closed points. The two charts of step 3.1 cover $\pi^{-1}(U)$ and are open subschemes of $\operatorname{Bl}_pS$; smoothness is local on the source by [F1], so each chart is a smooth surface over $k$. The centre is a single point, so by [F11] the blowup is an isomorphism away from $p$, and the chart descriptions of steps 2.1 and 3.1 glue to the global blowup. In the model $S=\mathbb A^2_k$, $p=0$ with the coordinate functions $x,y$, [F10] gives literally $\operatorname{Spec}k[x,T]$ and $\operatorname{Spec}k[y,U_1]$ inside $\mathbb A^2_k\times_k\mathbb P^1_k$. [F1, F2, F3, F8, F10, F11, step 3.1]

5.1 Steps 1.1-4.1 prove the statement: a sufficiently small affine neighbourhood $U=\operatorname{Spec}R$ with regular parameters $x,y$ generating the ideal of $p$ exists, over $U$ the blowup is the incidence subscheme $V(xv-yu)\subseteq U\times_k\mathbb P^1_k$ with charts $\operatorname{Spec}R[T]/(xT-y)=\operatorname{Spec}R[y/x]$ and $\operatorname{Spec}R[U_1]/(yU_1-x)=\operatorname{Spec}R[x/y]$ glued by $TU_1=1$, the base change to $\operatorname{Spec}\mathcal O_{S,p}$ is obtained by replacing $R$ by $\mathcal O_{S,p}$, the charts are smooth surfaces over $k$, the local rings on $E$ have the asserted dimensions, and the plane model has the two affine-plane charts inside $\mathbb A^2_k\times_k\mathbb P^1_k$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The quotient chart description only requires the indicated regular sequence.
  Regularity at the point gives the exceptional projective line and its normal
  twist; smoothness of $S$ and rationality of $p$ give absolute smoothness of
  the blowup over $k$.
- For a general closed point the local charts are over $\mathcal O_{S,p}$.
  The exceptional curve is over $\kappa(p)$; the whole blowup need not have a
  $\kappa(p)$-algebra structure.
