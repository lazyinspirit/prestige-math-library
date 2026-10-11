---
id: thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods
kind: theorem
title: "Algebraic Whitney strata have controlled local conical neighborhoods"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-axiom-of-choice,
       lem-controlled-stratified-submersions-have-continuous-local-trivializations,
       lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts,
       lem-whitney-stratifications-admit-compatible-control-data,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications,
       thm-euclidean-tubular-neighbourhood-theorem,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Section 8 (links, conical neighbourhoods and locally constant links)"
    - title: "John Mather, Notes on Topological Stability (1970)"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "Section 11 (first isotopy lemma and local products)"
---

## Statement

Assume AC. Let $X$ be a reduced quasi-projective complex algebraic variety with
a finite smooth complex algebraic Whitney stratification. Its analytic
stratified space admits compatible tube control data. At every point $y$ of a
stratum $R$ there is a stratum-preserving neighborhood homeomorphism
$$U_y\cong B^{2\dim_{\mathbb C}R}\times c_{<1}(L_y),$$
where $L_y$ is a compact finitely Whitney-stratified real semialgebraic normal
link. The ball times cone apex is $R\cap U_y$, and upper strata correspond to
their link strata times positive radius and the ball. The local construction
can preserve a chosen ordinary normal projection and radius at $R$. Links are
locally constant in stratified homeomorphism type along $R$. Proper stratified
algebraic submersions, with their actual analytic properness, have whole-fiber
local stratified bundle trivializations; local submersions have
source-neighborhood products. No compatible triangulation or finite
sheaf-cochain model is assumed or asserted here.

## Facts & Assumptions

**Given:** AC, a reduced quasi-projective complex algebraic variety $X$ with a finite smooth complex algebraic Whitney stratification, and a point $y$ of a stratum $R$.

[F1] Compatible finite algebraic Whitney strata are supplied by the stratification theorem ([[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]]).

[F2] Compatible tube data, optionally preserving a smooth stratified submersion, can be constructed locally, and the induction may start with a chosen ordinary tube at the lowest stratum of a local neighbourhood ([[lem-whitney-stratifications-admit-compatible-control-data]]).

[F3] Smooth stratified submersions have locally bounded controlled lifts and jointly continuous local flows, and proper ones have whole-fiber local trivializations ([[lem-controlled-stratified-submersions-have-continuous-local-trivializations]]).

[F4] Ordinary normal tubes exist, and their normal projection/radius pairs are submersive on incident Whitney strata near the lower stratum after shrinking ([[thm-euclidean-tubular-neighbourhood-theorem]], [[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]).

[F5] Smooth partitions subordinate to ambient coordinate neighbourhoods exist under countable choice, hence under AC ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] AC carries the countable-choice supplier assumptions above ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work in an affine ambient chart about $y$ and shrink it so that $X$ is closed there. Only finitely many strata have closures not containing $y$; discard a small neighbourhood meeting none of those closures, so that only $R$ and its incident upper strata remain and $R$ is the lowest local stratum. Choose the ordinary normal tube of $R$ with projection $\pi$ and distance $r$, and a relatively compact coordinate ball $B\subseteq R$ about $y$. By [F4], after shrinking over a slightly larger compact base ball, $(\pi,r)$ is submersive on all remaining upper strata for $0<r<\epsilon$. Start the local induction of [F2] with this chosen $R$-tube, so that higher tubes preserve its projection and squared radius; all finite subsequent shrinks leave a positive uniform radius over the chosen compact base ball. [F1, F2, F4, A1, construct]

2.1 Put $W^\circ=X\cap\pi^{-1}(B)\cap\{0<r<\epsilon\}$ and $g=(\pi,r):W^\circ\to B\times(0,\epsilon)$. This map is a proper stratified submersion: a compact target subset lies over a compact base subset and a closed radial interval bounded away from zero and $\epsilon$, and its inverse image is a closed subset of a compact normal disk-bundle slice inside the chart where $X$ is closed. The upper tubes are $g$-compatible by the control equations of step 1.1. Fix $0<r_0<\epsilon/3$; the reference fibre $L_y=g^{-1}(y,r_0)$ is compact, being the intersection of $X$ with the affine normal space $y+N_yR$ and the radius-$r_0$ sphere. It is real semialgebraic: in this affine chart $X$ and its algebraic strata are described by finitely many real polynomial equalities and inequalities, and the normal plane and sphere have linear and quadratic equations. [F2, F4, step 1.1, construct]

3.1 By [F3] lift coordinate fields on $B$ preserving the radial coordinate; their flows trivialize the whole reference-radius link family over a smaller base box, identifying $g^{-1}(B\times\{r_0\})$ with $B\times L_y$. Separately lift the radial base field $r\partial_r$, cut off only near the upper radial endpoint so that it equals $r\partial_r$ for $r\le r_0$; properness of $g$ supplies all lifted finite-time transports between any two positive radii in $(0,r_0]$, with time $\log(r/r_0)$ and inverse of opposite time. These flows keep $\pi$ fixed, so combining horizontal reference-radius transport with radial transport gives a stratum-preserving homeomorphism $B\times L_y\times(0,r_0)\to X\cap\pi^{-1}(B)\cap\{0<r<r_0\}$ with continuous inverse. Commutation between different chosen lifts is unnecessary because the flows are applied and reversed in a fixed order. [F3, step 2.1, construct]

4.1 Extend the map of step 3.1 over cone apex points by sending $(b,\mathrm{apex})$ to $b\in R$. The distance from a transported point to its base point is exactly its ordinary normal radius $r$, so convergence to the apex is uniform over the compact link and compact base subboxes independently of the speed of the radial field; conversely, $x_j\to b\in R$ gives $\pi(x_j)\to b$ and $r(x_j)\to0$, and compactness of $L_y$ means the radial parameters converge to the apex in its quotient cone topology regardless of the link direction. Hence both the extended map and its inverse are continuous, and the image $U_y=X\cap\pi^{-1}(B)\cap\{r<r_0\}$ is open in $X$. Rescaling $r$ identifies its radial interval with $[0,1)$, yielding the displayed ball times cone; if there are no upper strata the link is empty and its cone is the single apex. [step 2.1, step 3.1, algebra]

4.2 The link strata are the intersections of the upper strata with the normal plane and sphere, and they are smooth by submersivity of $g$. They satisfy the frontier and Whitney conditions. For the frontier assertion, [F3] gives a source-local product for $g$ at each lower fibre point, so taking a stratum closure commutes locally with taking that fixed fibre, and the original frontier relations restrict with the same dimension drop in each stratum. For the Whitney assertion, if limiting upper tangent planes are $T$ and $K=\ker dg$ is the common fibre kernel, Whitney (a) includes the lower tangent plane in $T$, on which $dg$ is still onto, so the fibre tangent planes converge to $T\cap K$ with the expected dimension; fibre secants lie in $K$ in the limit by the first-order Taylor formula for constant $g$-values, and they lie in $T$ by Whitney (b), so they lie in $T\cap K$. This proves both conditions on the fibre, and the horizontal transport of step 3.1 identifies these finite link strata over every nearby base point, establishing local constancy of stratified homeomorphism type along $R$. [F1, F3, F4, step 2.1, step 3.1, algebra]

5.1 The tube-data assertion follows from [F2] in ambient charts; for quasi-projective spaces one may use a smooth Euclidean ambient embedding of projective space by the rank-one Hermitian projector $[z]\mapsto zz^*/\|z\|^2$, whose chart inverses are coordinate ratios, and apply the same smooth construction. For an algebraic morphism over a target stratum coordinate box the smooth ambient-extension hypothesis of [F3] is supplied explicitly: regular coordinate functions of the algebraic map extend in source affine embedding charts as polynomial or localized polynomial functions, and target-stratum smooth coordinate functions extend to a target ambient neighbourhood using an ordinary tube retraction; their composites give local smooth coordinate extensions of the restricted map. Patch these Euclidean coordinate functions with [F5] on a source ambient neighbourhood; on the stratified space they all equal the original map, so their convex sum equals it and has the same tangential derivatives, and shrinking the ambient neighbourhood keeps its values in the chosen base box. Thus it is a smooth ambient extension submersive on every source stratum, and the proper whole-fibre and local source-product assertions follow from [F3] applied to these actual extensions. The complex stratum $R$ has real dimension $2\dim_{\mathbb C}R$, so the product factor has the claimed dimension, and real link or simplex dimensions do not replace it. All constructions are local or use the stated actual analytic properness. [F2, F3, F4, F5, A1, step 4.1, step 4.2] ∎

## Remarks

- The conical charts are topological and stratum-preserving, smooth on the individual strata of the product; they come with the chosen ordinary normal projection and radius at $R$, and the links are locally constant in stratified homeomorphism type. No compatible triangulation, PL structure or finite sheaf-cochain model is asserted here.
