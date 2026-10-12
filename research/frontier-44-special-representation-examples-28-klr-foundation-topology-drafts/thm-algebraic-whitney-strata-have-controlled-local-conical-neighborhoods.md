---
id: thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods
kind: theorem
title: Algebraic Whitney strata have controlled local conical neighborhoods
status: draft
origin: session
deps: [thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications, lem-whitney-stratifications-admit-compatible-control-data, lem-controlled-stratified-submersions-have-continuous-local-trivializations, lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts, thm-euclidean-tubular-neighbourhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, Section 8
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
    - title: John Mather, Notes on topological stability
      url: https://doi.org/10.1090/S0273-0979-2012-01383-6
---

## Statement

Assume AC. Let $X$ be a reduced quasi-projective complex algebraic variety with a finite smooth complex algebraic Whitney stratification. Its analytic stratified space admits compatible tube control data. At every point $y$ of a stratum $R$ there is a stratum-preserving neighborhood homeomorphism
$$U_y\cong B^{2\dim_{\mathbb C}R}\times c_{<1}(L_y),$$
where $L_y$ is a compact finitely Whitney-stratified real semialgebraic normal link. The ball times cone apex is $R\cap U_y$, and upper strata correspond to their link strata times positive radius and the ball. The local construction can preserve a chosen ordinary normal projection and radius at $R$. Links are locally constant in stratified homeomorphism type along $R$. Proper stratified algebraic submersions, with their actual analytic properness, have whole-fiber local stratified bundle trivializations; local submersions have source-neighborhood products. No compatible triangulation or finite sheaf-cochain model is assumed or asserted here.

## Facts & Assumptions

**Given:** AC, $X$, its finite complex algebraic Whitney stratification, and $y\in R$.

[F1] Compatible finite algebraic Whitney strata are supplied by [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]].

[F2] Compatible tubes, optionally preserving a smooth stratified submersion, are locally constructed in [[lem-whitney-stratifications-admit-compatible-control-data]]. Its induction may start with a chosen ordinary tube at the lowest stratum of a local neighborhood.

[F3] Smooth stratified submersions have actual locally bounded controlled lifts and continuous local flows, and proper ones have whole-fiber local trivializations ([[lem-controlled-stratified-submersions-have-continuous-local-trivializations]]).

[F4] Ordinary normal tubes exist and their normal projection/radius pairs are submersive on incident Whitney strata near the lower stratum ([[thm-euclidean-tubular-neighbourhood-theorem]], [[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]).

[F5] Smooth partitions subordinate to ambient coordinate neighborhoods exist under countable choice, hence AC ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[A1] AC carries these supplier assumptions ([[def-axiom-of-choice]]).

## Proof

1.1 Work in an affine ambient chart about $y$ and shrink it so $X$ is closed there. There are finitely many strata whose closures do not contain $y$; discard a small neighborhood meeting none of those closures. Thus only $R$ and its incident upper strata remain, and $R$ is the lowest local stratum. Choose its ordinary normal tube with projection $\pi$ and distance $r$, and a relatively compact coordinate ball $B$ in $R$ about $y$. By [F4], after shrinking over a slightly larger compact base ball, $(\pi,r)$ is submersive on all remaining upper strata for $0<r<\epsilon$. Start [F2]'s local induction with this chosen $R$ tube; higher tubes preserve its projection and squared radius. All finite subsequent shrinks leave a positive uniform radius over the chosen compact base ball. [F1, F2, F4, A1, construct]

2.1 Put $W^\circ=X\cap\pi^{-1}(B)\cap\{0<r<\epsilon\}$ and $g=(\pi,r):W^\circ\to B\times(0,\epsilon)$. This is a proper stratified submersion. Indeed a compact target subset lies over a compact base subset and a closed radial interval bounded away from zero and $\epsilon$; its inverse image is a closed subset of a compact normal disk-bundle slice, within the chart where $X$ is closed. The upper tubes are $g$-compatible by step 1.1's control equations. Fix $0<r_0<\epsilon/3$. The reference fiber $L_y=g^{-1}(y,r_0)$ is compact. It is the intersection of $X$ with the affine normal space $y+N_yR$ and the radius-$r_0$ sphere. Thus it is real semialgebraic: in this affine chart $X$ and its algebraic strata are described by finitely many real polynomial equalities and inequalities, and the normal plane and sphere have linear and quadratic equations. [F2, F4, step 1.1, construct]

3.1 By [F3], lift coordinate fields on $B$ preserving the radial coordinate. Their flows trivialize the whole reference-radius link family over a smaller base box, identifying $g^{-1}(B\times\{r_0\})$ with $B\times L_y$. Separately lift the radial base field $r\partial_r$, cut off only near the upper radial endpoint so that it equals $r\partial_r$ for $r\le r_0$. Properness of $g$ supplies all lifted finite-time transports between any two positive radii in $(0,r_0]$. Their time is $\log(r/r_0)$, and their inverse has the opposite time. These flows keep $\pi$ fixed, so combining horizontal reference-radius transport with radial transport gives a stratum-preserving homeomorphism $B\times L_y\times(0,r_0)\to X\cap\pi^{-1}(B)\cap\{0<r<r_0\}$, with a continuous inverse. Commutation between different chosen lifts is unnecessary because the flows are applied and reversed in a fixed order. [F3, step 2.1, construct]

4.1 Extend the map of step 3.1 over cone apex points by sending $(b,\mathrm{apex})$ to $b\in R$. The distance from a transported point to its base point is exactly its ordinary normal radius $r$, so convergence to the apex is uniform over the compact link and compact base subboxes, independently of the speed of the radial field. Conversely, $x_j\to b\in R$ gives $\pi(x_j)\to b$ and $r(x_j)\to0$; compactness of $L_y$ means these radial parameters converge to the apex in its quotient cone topology regardless of link direction. Thus both extended map and inverse are continuous. The image $U_y=X\cap\pi^{-1}(B)\cap\{r<r_0\}$ is open in $X$. Rescaling $r$ identifies its radial interval with $[0,1)$, yielding the displayed ball times cone. If there are no upper strata the link is empty and its cone is the single apex. [step 2.1, step 3.1, algebra]

4.2 The link strata are the intersections of upper strata with the normal plane and sphere, and they are smooth by submersion of $g$. They satisfy the frontier and Whitney conditions. For the frontier assertion, [F3] gives a source-local product for $g$ at each lower fiber point, so taking a stratum closure commutes locally with taking that fixed fiber; the original frontier relations therefore restrict to the fiber, and dimensions drop by the same amount in each stratum. For the Whitney assertion, if limiting upper tangent planes are $T$ and the common fiber kernel is $K=\ker dg$, Whitney (a) includes the lower tangent plane in $T$, on which $dg$ is still onto. Hence the fiber tangent planes converge to $T\cap K$ with the expected dimension. Fiber secants lie in $K$ in the limit by the first-order Taylor formula for constant $g$ values, and they lie in $T$ by Whitney (b), so they lie in $T\cap K$. This proves both conditions on the fiber. Step 3.1's horizontal transport identifies these finite link strata over every nearby base point, establishing local constancy of stratified homeomorphism type along $R$. [F1, F3, F4, step 2.1, step 3.1, algebra]

5.1 The tube-data assertion follows from [F2] in ambient charts; for quasi-projective spaces one may use a smooth Euclidean ambient embedding of projective space by the rank-one Hermitian projector $[z]\mapsto zz^*/\|z\|^2$, whose chart inverses are coordinate ratios, and apply the same smooth construction. For an algebraic morphism over a target stratum coordinate box, the smooth ambient-extension hypothesis in [F3] is supplied explicitly: regular coordinate functions of the algebraic map extend in source affine embedding charts as polynomial or localized polynomial functions; target-stratum smooth coordinate functions extend to a target ambient neighborhood using an ordinary tube retraction. Their composites give local smooth coordinate extensions of the restricted map. Patch these Euclidean coordinate functions with [F5] on a source ambient neighborhood. On the stratified space they all equal the original map, so their convex sum equals it and has the same tangential derivatives; shrink the ambient neighborhood so its values remain in the chosen base box. Thus it is a smooth ambient extension submersive on every source stratum. The proper whole-fiber and local source-product assertions now follow from [F3] applied to these actual extensions. The complex stratum $R$ has real dimension $2\dim_{\mathbb C}R$, so the product factor has the claimed dimension; real link or simplex dimensions do not replace it. All claimed constructions are local or use the stated actual analytic properness. [F2, F3, F4, F5, A1, step 4.1, step 4.2] ∎
