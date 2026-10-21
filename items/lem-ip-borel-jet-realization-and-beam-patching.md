---
id: lem-ip-borel-jet-realization-and-beam-patching
kind: lemma
title: Parameter-uniform Borel jet realization and ray-tube patching
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-smooth-whitney-extension-on-compact-sets
  - def-riemannian-metric-and-riemannian-manifold
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse
        problems for real principal type operators
      url: https://arxiv.org/pdf/2001.07599v2
      locator: "§3, proof of Theorem 3.1, Step 3, PDF pp. 25–26: coordinate-compatible
        Borel summation along a compact bicharacteristic segment."
    - title: Mikko Salo, On geometric inverse problems and microlocal analysis, full
        author lecture notes
      url: https://arxiv.org/pdf/2312.08123v1
      locator: "§3.4.3–3.4.5, PDF pp. 35–38: phase and amplitude jets solved along a
        curve and Borel realized."
proof_strategy: direct
---

## Statement

Let $X$ be a smooth manifold with an auxiliary smooth Riemannian metric, let $J=[a,b]$ be a compact interval, and let $\beta:J\to X$ be a smooth embedding with nonzero derivative. The normal fiber at $s$ is $N_s\beta=\{v\in T_{\beta(s)}X:g(v,\dot\beta(s))=0\}$. A **formal scalar jet along $\beta$** means a family of symmetric coordinate Taylor coefficients $T_{i,\alpha}(s)$ on a finite coordinate cover of a tubular neighborhood, smooth in $s\in J$, whose formal Taylor series transform on overlaps by the ordinary chain rule for a scalar function. Then there is an open neighborhood $U$ of $\beta(J)$ and, for either scalar field $\mathbb K=\mathbb R$ or $\mathbb C$, an $F\in C^\infty(U;\mathbb K)$ whose transverse derivatives along $\beta$ realize every prescribed transverse coefficient $T_{i,\alpha}(s)$. The construction is uniform for a compact parameter family of such jets when all coefficient seminorms are uniformly bounded. The same assertion holds on a finite union $A$ of embedded compact segments provided the induced full ambient jets satisfy full Whitney compatibility on that compact union: in each coordinate chart, for every $k$ and $|\alpha|\le k$, the degree-$k$ Taylor polynomials $P_x^k$ satisfy $D^\alpha P_x^k(y)-D^\alpha P_y^k(y)=o(|x-y|^{k-|\alpha|})$ uniformly for $x,y\in A$ as $|x-y|\to0$. Tangential components of a full jet are obtained by differentiating the transverse coefficients along each segment and applying the coordinate chain rule. For parameter families on the same finite union, require these Whitney remainder moduli as well as all coefficient bounds to be uniform. The single-segment construction requires no choice axiom.

## Statement references

[[lem-ip-smooth-whitney-extension-on-compact-sets]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]

## Facts & Assumptions

**Given:** A smooth manifold $X$ with an auxiliary Riemannian metric; a compact interval $J$; an embedded smooth curve $\beta$ with $\dot\beta\ne0$; and compatible smooth formal scalar jets $T_{i,\alpha}(s)$ on a finite coordinate cover of a tube around $\beta(J)$.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: the auxiliary metric is smooth and positive definite; [[thm-fundamental-theorem-of-riemannian-geometry]] supplies its Levi–Civita connection.

[F3] [[lem-ip-smooth-whitney-extension-on-compact-sets]]: continuous all-order ambient jets on a compact Euclidean set with full Whitney remainder compatibility have a choice-free smooth realization, uniformly when the bounds and moduli are common.

[F2] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: the geodesic ODE has local solutions with smooth dependence on initial data, so the normal exponential map is smooth and has the identity differential on each zero-section fiber.


## Proof

1.1 First handle the endpoints, rather than taking an inverse chart on a closed parameter interval. At each endpoint choose one of the given tube charts containing it and a short adjacent segment, and express the whole formal jet there. In that chart extend the coordinate curve through the endpoint as follows. For $t<0$ at $a$ use the Borel series $\sum_{j\ge0}v_jt^j\chi(t/r_j)/j!$, where $v_j=\partial_s^j\beta(a)$ and a fixed smooth $\chi$ equals one near zero and has compact support. Choose $r_j$ to be the largest dyadic number at most $2^{-j}$ for which every derivative of order $m<j$ of the $j$th summand is bounded by $2^{-j}$; such a radius exists since these bounds are constants times $r_j^{j-m}$. The tails converge with all fixed derivatives, and their derivatives at zero are the prescribed $v_j$. Join this negative-side series to the original curve for $t\ge0$; matching all one-sided derivatives makes the join smooth. Repeat with the reversed parameter at $b$. The nonzero endpoint derivatives persist after shrinking the two extensions. They remain embedded: within each endpoint chart a coordinate with nonzero tangent derivative is strictly monotone; the endpoint image is separated from the compact remainder of the original curve, and the two distinct endpoint neighborhoods can be made disjoint. Thus $\beta$ extends to an embedded open interval containing $J$.
For each transverse jet coefficient $T_{i,\alpha}(s)$ in the chosen endpoint chart, extend that scalar coefficient by the same endpoint Borel construction, using its derivatives $\partial_s^jT_{i,\alpha}$ and a dyadic radius $r_{j,i,\alpha}$. For fixed $j,i,\alpha$, the finitely many derivative bounds of order $m<j$ guarantee a radius because the relevant terms scale as $r^{j-m}$; choose the largest admissible dyadic radius. For a parameter family, choose each such radius using the uniform bounds for that fixed coefficient and the finitely many derivative orders, so it is common across the family. Keep the given jet on $J$. On the newly added endpoint segments, define its components in every other chart by the ordinary coordinate chain rule from the single extended endpoint-chart jet. On overlaps with $J$ these transformed components agree with the given ones by the original formal compatibility. This preserves compatibility across the extended curve without requiring independently chosen extensions to satisfy new overlap identities. The construction is deterministic for the countable coefficient family and uses no choice axiom. [F1, given, construct, algebra]

2.1 For the extended curve the normal exponential map $E(s,y)=\exp_{\beta(s)}y$ maps its normal bundle into $X$. Its derivative at $(s,0)$ sends the parameter direction to $\dot\beta(s)$ and is the identity on the normal directions, hence is an isomorphism by [F1] and [F2]. The inverse function theorem gives open local tube charts, including at the original endpoints. A uniform tube over a slightly larger compact interval exists: if injectivity failed at every shrinking radius, compactness would give two collisions converging to zero-section points, which embeddedness identifies; one local inverse chart then excludes them. Thus the tube image contains an open neighborhood of all of $\beta(J)$. [F1, F2, step 1.1, given, construct]

3.1 In one tube chart write the extended prescribed transverse Taylor series as $\sum_{k\ge0}P_k(s,y)$, with $P_k$ homogeneous of degree $k$ in $y$. Fix a smooth transverse cutoff equal to one near zero. For each $m<k$, let $C_{k,m}$ bound the derivatives of total order at most $m$ of $P_k(s,y)\chi(|y|/\epsilon)$ after removing the factor $\epsilon^{k-m}$, on the slightly extended compact parameter interval. Define explicitly $$\epsilon_k=\min\left\{2^{-k},\min_{0\le m<k}\left(\frac{2^{-k}}{1+C_{k,m}}\right)^{1/(k-m)}\right\}.$$ Every derivative of order $m<k$ of the $k$th cutoff summand is then bounded by $2^{-k}$. Therefore $F_i=\sum_k P_k\chi(|y|/\epsilon_k)$ is smooth on the open tube and has exactly the prescribed transverse jet: a cutoff is constant near zero, so the homogeneous polynomial contributes its own degree and no other. Step 1.1 and uniform coefficient bounds make these choices common for the stated parameter families. [step 1.1, step 2.1, construct, algebra]

4.1 Choose a finite smooth partition supported in the tube charts and summing to one near $\beta(J)$. The local realizations have the same full jets along the curve, since transverse data and their tangential derivatives determine them and the given coordinate chain rule identifies them. The Leibniz formula therefore makes the partition-weighted sum realize the same jets. In particular, derivatives of the partition sum of positive order vanish, and its zeroth derivative is one. This proves the original single-segment claim on an open neighborhood, including its endpoints, with no choice axiom. [step 2.1, step 3.1, given, construct, algebra]

5.1 For the finite union, first take the induced full ambient jets specified in the Statement. Cover its compact image by finitely many smaller coordinate patches with closures inside larger patches. The intersection of the union with each smaller closed patch is compact; by the full Whitney hypothesis its coordinate jets meet [F3] in every order. Apply [F3] componentwise (two real components for complex values) and restrict the resulting smooth realization to the smaller patch. A finite smooth partition of unity on a neighborhood of the union now combines these realizations: at each point of the union all active realizations have its same full jet, so the same Leibniz cancellation as in step 4.1 applies. Uniform coefficient bounds and uniform Whitney moduli give common extension scales in [F3], hence uniform seminorms after this fixed finite partition. Pointwise compatibility only at intersections would not suffice for this step; the stated Whitney remainder condition controls pairs of nearby points on different segments as well. This proves the entire finite-union assertion and its parameter-uniform form. [F3, step 4.1, given, construct, algebra] ∎
