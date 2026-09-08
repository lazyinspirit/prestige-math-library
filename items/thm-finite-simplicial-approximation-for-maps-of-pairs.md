---
id: thm-finite-simplicial-approximation-for-maps-of-pairs
kind: theorem
title: "Finite simplicial approximation for maps of pairs"
status: draft
origin: pipeline
deps: ["thm-barycentric-subdivision-realizes-homeomorphically", "lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero", "lem-the-open-star-criterion-produces-a-simplicial-map", "thm-lebesgue-number-lemma"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Let $K$ be finite, $A\subseteq K$ and $B\subseteq L$ subcomplexes, and $f:(|K|,|A|)\to(|L|,|B|)$ continuous. For all sufficiently large integers $r$, there is a simplicial approximation $g:(\operatorname{sd}^rK,\operatorname{sd}^rA)\to(L,B)$, homotopic as a map of pairs to $f b_K^r$. Here $b_K^r$ is the composite barycentric homeomorphism. No pointwise fixing of a positive-dimensional restriction is asserted.

## Source locators

2C.1 pp.177–179; Maunder 2.5.4 p.47.


## Facts & Assumptions

[F1] Barycentric realization is a homeomorphism compatible with subcomplexes. [[thm-barycentric-subdivision-realizes-homeomorphically]].

[F2] Finite subdivisions have a compatible metric and their star diameters tend to zero. [[lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero]].

[F3] A compact metric open cover has a positive Lebesgue number. [[thm-lebesgue-number-lemma]].

[F4] Star inclusions produce a simplicial map and a common-carrier homotopy. [[lem-the-open-star-criterion-produces-a-simplicial-map]].


## Proof

**Given:** A continuous map of the indicated pairs with finite source.

1.1 Use the barycentric homeomorphisms to view every subdivision as a triangulation of the same finite Euclidean polyhedron. The inverse images $f^{-1}(\operatorname{st}_L(w))$ cover it, since the support of every image point is nonempty. They are open, and the source is compact metric. The Lebesgue-number lemma gives $\delta>0$ such that any nonempty set of diameter less than $\delta$ lies in one of these inverse images. For an empty source use the empty map for every $r$. [F1, F2, F3, F4]

2.1 Choose $r_0$ with $2m(\operatorname{sd}^rK)<\delta$ for every $r\geq r_0$, using the mesh estimate; in dimension zero $m=0$ already. Each vertex star in that triangulation is nonempty and has diameter at most $2m$. Hence for each of the finitely many vertices $v$ select $g(v)$ with $f(\operatorname{st}(v))\subseteq\operatorname{st}(g(v))$. This is only finite choice. The star criterion gives a simplicial map and a continuous common-carrier straight-line homotopy. [F2, F3, F4, step 1.1]

3.1 If $\sigma$ is a face of $\operatorname{sd}^rA$, its barycenter lies in $|A|$, so the support of its image under $f$ is a face of $B$. The star criterion puts all $g(v)$ for $v\in\sigma$ in this support; hence $g(\sigma)\in B$. At every point of $|A|$ the same carrier argument keeps the homotopy inside $|B|$. Pulling back to the abstract subdivided realization gives the stated homotopy of pairs to $fb_K^r$, for every $r\geq r_0$. [F1, F4, step 2.1] ∎


## Remarks

Approximations need not be unique. On one edge, the constant map with value its midpoint has both constant endpoint maps as star approximations, since the midpoint belongs to both target vertex stars. Some maps admit none before subdivision: the continuous edge self-map $f(x)=\min(2x,1)$ sends the open star $[0,1)$ of $0$ onto $[0,1]$, which lies in neither target vertex star. This is the failure tested by Maunder 2.5.6, pp.47–48; it is stronger than failure of exact simpliciality.
