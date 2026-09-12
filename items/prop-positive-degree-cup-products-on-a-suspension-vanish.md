---
id: "prop-positive-degree-cup-products-on-a-suspension-vanish"
kind: "proposition"
title: "Positive-degree cup products on a suspension vanish"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-cup-product","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","def-adjunction-cone-suspension","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","def-cup-length-over-a-coefficient-ring","thm-the-exponential-law"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher relative cup method §3.2; Miller Lectures 28--29
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For a nonempty CW complex $X$, its unreduced two-cone suspension $\Sigma X$, and a commutative unital ring $R$, every product of two positive-degree reduced cohomology classes is zero. In particular $\operatorname{cl}_R(\Sigma X)\le1$. No AC is required.

## Facts & Assumptions

[F1] [[def-adjunction-cone-suspension]] realizes $\Sigma X$ as the quotient of $X\times[0,1]$ collapsing its two end faces separately.

[F2] [[thm-the-exponential-law]] applies with locally compact metric domain $I=[0,1]$, arbitrary parameter space and arbitrary target. It makes a function on $Z\times I$ continuous precisely when its transpose $Z\to C(I,Y)$ is continuous.

[F3] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] gives homotopy invariance with arbitrary coefficients.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] identifies the kernel of restriction to a subspace with the image of its relative cohomology.

[F5] [[def-relative-cup-product]] gives the product for two open subspaces and its canonical comparison to the union-relative target.

[F6] [[def-cup-length-over-a-coefficient-ring]] defines cup length from nonzero finite positive-degree products.

## Proof

**Given:** $X,R$ as stated. Use the quotient map $q:X\times[0,1]\to\Sigma X$ of [F1].

1.1 We first justify homotopies on quotient cylinders. If $r:E\to Z$ is quotient and a function $h:Z\times I\to Y$ has continuous composite $h(r\times1)$, its paths are continuous by surjectivity of $r$. By [F2], the transpose upstairs is continuous and equals $\widehat h r$. The quotient criterion makes $\widehat h$ continuous, hence [F2] makes $h$ continuous. This does not assume that an arbitrary product preserves quotient maps. [F2, given]

1.2 The singular cochain complex of a point has one copy of $R$ in each nonnegative degree. The boundary of its unique degree-$n$ simplex has coefficient $\sum_{i=0}^n(-1)^i$, equal to $1$ for positive even $n$ and $0$ for odd $n$. With positive coboundary the differential from degree $k$ is therefore identity for odd $k$ and zero for even $k$. Every positive-degree cocycle is consequently a coboundary, while $H^0(*)=R$. [given]

2.1 Let $U=q(X\times[0,2/3))$ and $V=q(X\times(1/3,1])$. Their inverse images are saturated open sets, so $U,V$ are open, their restrictions of $q$ are quotient maps, and they cover $\Sigma X$. On $U$ set $h_s([x,t])=[x,(1-s)t]$, a contraction to its lower apex. On $V$ use $k_s([x,t])=[x,1-(1-s)(1-t)]$, a contraction to its upper apex. Each formula is continuous before quotienting, is constant on the collapsed face, and stays in the indicated set. Step 1.1 proves that the descended homotopies are continuous, including at their apex and time endpoints. [F1, step 1.1]

3.1 Steps 1.2 and 2.1, together with [F3], give $H^p(U;R)=H^q(V;R)=0$ for $p,q>0$. Let $a\in H^p(\Sigma X;R)$ and $b\in H^q(\Sigma X;R)$, with positive degrees (equivalently reduced classes). Their restrictions to $U,V$ respectively vanish. By [F4], there exist relative classes $\widetilde a\in H^p(\Sigma X,U;R)$ and $\widetilde b\in H^q(\Sigma X,V;R)$ mapping to $a,b$. This uses only two witnesses from exactness. [F3, F4, step 1.2, step 2.1]

4.1 Their [F5] relative product belongs to $H^{p+q}(\Sigma X,U\cup V;R)=H^{p+q}(\Sigma X,\Sigma X;R)=0$, since the relative chain quotient is zero. Its image in absolute cohomology is $a\smile b$: both are obtained by the same front/back formula and the quotient comparison commutes with the map to the empty subspace. Hence $a\smile b=0$. [F5, step 3.1]

5.1 Every product of length at least two vanishes, by applying step 4.1 to the first two factors and associating the rest. Thus [F6] gives cup length at most one, allowing zero when all positive-degree classes vanish. This includes point $X$, disconnected $X$, and $R=0$. The nonempty hypothesis ensures both apices in the prescribed quotient; the separately stipulated empty suspension is outside this statement. Degree-zero factors are excluded, as they could be units. Cochains in step 1.2 and the relative construction retain degenerate simplices. The homotopies are explicit and the only selections in step 3.1 are finite, so no AC is used. [F6, step 1.2, step 2.1, step 3.1, step 4.1] ∎
