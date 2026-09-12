---
id: "cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative"
kind: "corollary"
title: "Each homotopy representative is supported on a finite CW subcomplex"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cellular-approximation-for-maps-of-cw-pairs","lem-compact-cw-images-have-finite-cell-support-without-choice","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Appendix A and Theorem 4.8
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For a CW complex $X$, every continuous map from a compact sphere $S^n$ or disk $D^n$ into $X$ has image in a finite CW subcomplex. Every specified homotopy between such maps also has image in a finite CW subcomplex. These assertions quantify separately over each map and each homotopy; they do not assert a single finite subcomplex that works for all representatives.

If the chosen basepoint $x_0\in X$ is a zero-cell, every based homotopy class in $\pi_n(X,x_0)$, $n\ge1$, has a representative whose image is contained in $X^n$. No such based skeletal assertion is made for a basepoint outside $X^n$. All these conclusions are choice-free: only the finite-relative-source clause of cellular approximation is used.

## Facts & Assumptions

[F1] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] puts every compact-source image in a finite target subcomplex, without choice.

[F2] [[thm-cellular-approximation-for-maps-of-cw-pairs]] gives a homotopy rel a subcomplex to a cellular map without choice when there are finitely many relative source cells.

[F3] [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] give compactness of closed bounded Euclidean subsets in the topological sense.

[F4] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] and [[thm-closed-subspace-of-a-compact-space-is-compact]] give the closedness and compactness used for the sphere quotient.

## Proof

**Given:** A CW complex $X$, one map $f:S^n\to X$ or $f:D^n\to X$, or one specified homotopy $H$ with one of these domains. For the based assertion, $n\ge1$ and $x_0$ is a zero-cell.

1.1 The Euclidean sphere and disk are closed and bounded, as are their products with $I=[0,1]$, regarded as subsets of a finite-dimensional Euclidean space. Thus [F3] makes them compact. $D^0$ is a singleton and $S^0$ consists of two points, which are compact by taking one covering member for each of finitely many points. Their products with $I$ are a single interval or two intervals, also closed bounded Euclidean subsets after the usual embeddings. [F3, given]

1.2 The sphere has a finite $n$-dimensional CW structure with its designated basepoint as a vertex. One concrete construction for $n\ge1$ attaches one $n$-disk to a point by collapsing its entire boundary. To identify the quotient with $S^n$, send $u\in D^n$ of norm $r>0$ to $(\sin(\pi r)u/r,\cos(\pi r))$, and send zero to the north pole. This is continuous at zero since $|\sin(\pi r)|\le\pi r$, is constant at the south pole on the boundary, and is a bijection from the interior to the complement of that pole. The induced continuous bijection from the compact quotient to the Hausdorff sphere is a homeomorphism: the quotient is compact by pulling open covers back to the disk. A closed subset is compact by [F4], its image is compact by the same cover argument, and that image in the Hausdorff sphere is closed by [F4]. Identify the pole with the designated sphere basepoint. This realizes the usual two-cell based sphere. [F3, F4, given]


2.1 Apply [F1] directly to $f$, and separately to the specified $H$. It gives finite subcomplexes containing their images. The finite subcomplex for $H$ automatically contains both endpoint images, since the endpoints are restrictions of $H$. This does not require selecting representatives of a family of homotopy classes, nor choosing simultaneous finite subcomplexes for such a family. [F1, step 1.1]

2.2 For a given based representative $f:(S^n,*)\to(X,x_0)$, its restriction to the source vertex is cellular because $x_0\in X^0$. Apply the finite-relative-source clause of [F2] to $(S^n,*)$ and $(X,\{x_0\})$. It produces a based homotopy to $g$ that is cellular. The source has dimension $n$, so $g(S^n)\subseteq X^n$. Since the homotopy fixes the basepoint, $g$ represents precisely the original based class. This applies to each class by beginning with any one representative; it asserts existence for each class and does not select representatives simultaneously. [F2, step 1.2]

3.1 Each homotopy just obtained, being a specified map on $S^n\times I$, also satisfies step 2.1. A basepoint outside $X^n$ cannot belong to the image of a based map landing in $X^n$, so such a skeletal conclusion would be impossible and has not been asserted. The assertions about compact images have no basepoint restriction. Zero-dimensional compact domains were treated in step 1.1; the skeletal group assertion begins at $n=1$, and no $\pi_0$ group law is implied. Only choice-free [F1], [F3] and the expressly choice-free clause of [F2] have been used. [step 1.1, step 2.1, step 2.2] ∎
