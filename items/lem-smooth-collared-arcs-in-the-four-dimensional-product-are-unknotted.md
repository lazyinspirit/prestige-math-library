---
id: lem-smooth-collared-arcs-in-the-four-dimensional-product-are-unknotted
kind: lemma
title: Smooth collared arcs in the four-dimensional product are unknotted
status: draft
origin: session
deps:
  - lem-euclidean-parametric-transversality-and-canonical-good-parameters
  - lem-compact-euclidean-arc-isotopies-have-canonical-controlled-extensions
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
generation:
  role: reviewed-local-lemma
local_proof_acceptance:
  run: inverse-problems-knot-theory-all-109-2026-10-19
  authorized_by: /root
  decision: preserve-resolved-local-lemma
  independent_review: research/inverse-problems-knot-theory-all-109-2026-10-19-owner-concordance-ribbon-round1/root-original74-bare-arc-review.json
  accepted_body_sha256: 0df52f5b0a6a0c9b84f05c067441e467e906083f721d97788bca6ce0fae46aa8
---

## Statement

Let $\alpha:[0,1]\to S^3\times[0,1]$ be a smooth proper embedding with endpoints $(p,0),(p,1)$, whose image agrees with the vertical arc on endpoint product collars. There is a smooth ambient isotopy, fixed near the two boundary levels, taking its image to $\{p\}\times[0,1]$. If $\alpha(s)=(p,s)$ near the source endpoints, the isotopy can take $\alpha(s)$ to $(p,s)$ for every $s$.

## Facts & Assumptions

**Given:** The smooth arc and endpoint collars in the Statement.

[F1] Euclidean finite-parameter transversality holds without choice, including finitely many boundary strata. [[lem-euclidean-parametric-transversality-and-canonical-good-parameters]]

[F2] A compact Euclidean arc isotopy has a compactly supported ambient flow with prescribed velocity, and its support can lie in any open neighborhood of the compact moving part. No choice assumption is required. [[lem-compact-euclidean-arc-isotopies-have-canonical-controlled-extensions]]

## Proof

**Given:** The smooth arc and its endpoint collars. Its finite smooth endpoint extensions may be fixed once; this requires only finite choice, valid in ZF.

1.1 Choose $q\in S^3$ outside the projection of $\alpha([0,1])$. Such a point exists: a smooth curve has measure zero in each three-dimensional coordinate chart, as follows by covering its parameter interval with intervals of length $\delta$, bounding the coordinate derivative there, and bounding the total volume of the corresponding $O(\delta)$-balls by $O(\delta^2)$. Finitely many charts suffice. Stereographic coordinates identify $S^3\setminus\{q\}$ with $\mathbb R^3$, with $p$ at the origin. Write $\alpha(s)=(a(s),h(s))$ in the resulting product coordinates. Choose an increasing smooth interval diffeomorphism $\varphi$ agreeing with $h$ near the two endpoints. This is possible because the endpoint collar makes $h'>0$ there: take smaller collars, extend these positive derivatives to a positive smooth function on the whole interval with integral $1$, and integrate from zero. The collars may be chosen so their derivative integrals sum to less than $1$, leaving a positive middle integral to prescribe. Put $\beta(s)=(0,\varphi(s))$. In the parametrized case take $\varphi(s)=s$. Thus $\alpha=\beta$ on fixed source endpoint collars. [given, construct]

2.1 Choose a smooth $\rho:[0,1]\to[0,1]$ equal to zero near $t=0$ and one near $t=1$, with $0<\rho<1$ between those two time collars. The formula $F(s,t)=((1-\rho(t))a(s),(1-\rho(t))h(s)+\rho(t)\varphi(s))$ is a smooth homotopy from $\alpha$ to $\beta$, fixed on the source endpoint collars, and its interior points have height strictly between zero and one. Choose nonnegative smooth functions $\chi_s,\chi_t$ whose zero sets are exactly smaller closed source endpoint collars and closed time endpoint collars, respectively, with $F=\beta$ on the source collars and $F=\alpha$ or $\beta$ on the time collars. Write $\chi(s,t)=\chi_s(s)\chi_t(t)$. For $u,v\in\mathbb R^4$ set $F_{u,v}(s,t)=F(s,t)+\chi(s,t)(u+sv)$ in the product coordinates. For all sufficiently small parameters these maps still have interior height in $(0,1)$: on the compact source strip supporting $\chi_s$, all original heights have a positive uniform distance from $0,1$. They retain the original endpoint data and are stationary near the time endpoints. [step 1.1, construct]

3.1 Consider the derivative evaluation $J(s,t,u,v)=\partial_sF_{u,v}(s,t)\in\mathbb R^4$. At points where $\chi>0$, its parameter differential has scalar coefficients $\partial_s\chi$ and $\chi+s\partial_s\chi$ on the two four-dimensional parameter blocks. These cannot both vanish, so that differential is surjective. Where $\chi=0$, both cutoff factors are nonnegative smooth functions and consequently their derivatives vanish at their zeros; the derivative evaluation is the derivative of $\alpha$ or $\beta$ on the time collars, or of $\beta$ on the source collars, and is nonzero. Hence $J$ is transverse to zero everywhere. By [F1], outside a null parameter set its slice is transverse to zero. Its source has dimension two and zero has codimension four, so that inverse image is empty. For these parameters every curve $s\mapsto F_{u,v}(s,t)$ is an immersion. [F1, step 2.1, algebra]

4.1 On the three-dimensional domain $\{(s,r,t):0\le s,r,t\le1,\ s\ne r\}$ consider $D(s,r,t,u,v)=F_{u,v}(s,t)-F_{u,v}(r,t)$. The two parameter coefficients in its differential are $\chi(s,t)-\chi(r,t)$ and $s\chi(s,t)-r\chi(r,t)$. If both vanish and $s\ne r$, both cutoff values must be zero. In that case either $t$ is on a fixed time collar, where the slice is the embedding $\alpha$ or $\beta$, or $s,r$ are both in the fixed source collars, where their values are the distinct points $\beta(s),\beta(r)$. Thus $D\ne0$ wherever its parameter differential is not surjective. It follows that the full family is transverse to zero. Apply [F1] on the source strata; those on which $s$ or $r$ is an endpoint also have dimension at most three. Outside a null parameter set every slice is transverse to zero and therefore has empty zero set, since each source stratum has dimension less than four. There are only finitely many strata. Choose arbitrarily small $(u,v)$ outside this null set and the null set in step 3.1; a finite union of null sets cannot contain a parameter ball. Then every slice is an injective immersion of a compact interval and hence an embedding. This is the required smooth isotopy of arcs, with the specified fixed collars. [F1, step 2.1, step 3.1, algebra, choose]

5.1 Perform the ambient extension in the Euclidean product coordinates $(S^3\setminus\{q\})\times\mathbb R\cong\mathbb R^4$ used above. The moving part has compact closure in the open set $W=\mathbb R^3\times(0,1)$, since the isotopy is fixed on common source endpoint collars and the remaining source strip is compact with interior height. Its time velocity has a finite bound by compactness. Apply [F2] with this $W$ to get a smooth ambient flow whose common spatial support is a compact subset of $W$. Extend it by the identity across the missing $q$-axis and outside the two boundary levels; compact support makes this extension smooth. Restrict to $S^3\times[0,1]$. The last map takes $\alpha(s)$ to $\beta(s)$ for every $s$, proving image straightening and the parametrized conclusion when $\varphi(s)=s$. Every supplied smooth family has an extension to a neighborhood of its source rectangle after finitely many local endpoint extensions and finite bump gluing, or directly from the displayed interpolation and endpoint extensions. Thus [F2] applies with its exact extension hypothesis. [F2, step 1.1, step 4.1, construct] ∎

## Remarks

This off-canonical donor treats smooth arcs only. It supplies neither a smoothing of a locally flat arc nor an ambient TOP isotopy from such an arc to a smooth arc. That relative taming bridge remains necessary for the full locally flat theorem.
