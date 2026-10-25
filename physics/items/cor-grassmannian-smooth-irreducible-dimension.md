---
id: cor-grassmannian-smooth-irreducible-dimension
kind: corollary
title: The Grassmannian is smooth, irreducible, and has dimension r(n-r)
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-grassmannian-standard-affine-charts, thm-plucker-image-closed]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Remarks 6.32 and 6.33
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---

## Statement

For $0\le r\le n$, $\operatorname{Gr}(r,V)$ is smooth in the elementary local-affine-chart sense, irreducible, and has dimension $r(n-r)$.

## Facts & Assumptions

**Given:** An $n$-dimensional vector space $V$ over the page's algebraically closed field $k$, and $0\le r\le n$.

[F1] The loci $U_I=\{p_I\ne0\}$ cover the Plucker image and are isomorphic to $\mathbf A_k^{r(n-r)}$ by polynomial minors with regular ratio inverses ([[lem-grassmannian-standard-affine-charts]]).

[F2] The Plucker image is a closed projective algebraic set ([[thm-plucker-image-closed]]).

## Proof

1.1 By [F1], each point has an affine-space neighbourhood of dimension $r(n-r)$. This proves smoothness in the stated local-chart sense and the dimension assertion. If $r=0$ or $r=n$, there is just one subspace, so all the assertions hold for a point. Assume $0<r<n$ henceforth. [F1, given]

2.1 Fix $I_0=\{1,\ldots,r\}$. In its chart write a plane as the row space of $(I_r\mid A)$. For any $r$-subset $J$, retain the identity columns indexed by $J\cap I_0$ and assign the columns indexed by $J\setminus I_0$ bijectively to the remaining standard basis vectors of $k^r$. Complete the other columns of $A$ arbitrarily. The minor indexed by $J$ is then $1$ or $-1$. Thus $U_J\cap U_{I_0}$ is a nonempty open subset of both irreducible affine charts. [F1, step 1.1, construct]

3.1 Each intersection in step 2.1 is dense in $U_J$, since $U_J$ is irreducible. Hence the closure of the irreducible set $U_{I_0}$ contains every $U_J$, and so is the whole Grassmannian. A closure of an irreducible set is irreducible. The chart isomorphisms in [F1] are for the Plucker-image topology itself (their maps are polynomial minors with regular inverses), so this proves irreducibility in that topology. Together with [F2], it makes the image a projective subvariety. [F1, F2, step 2.1] ∎
