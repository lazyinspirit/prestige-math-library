---
id: lem-green-boundary-cancellation-under-finite-gluing
kind: lemma
title: "Shared boundary arcs cancel when finitely many elementary regions are glued"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, thm-line-integrals-under-reversal-and-concatenation, def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties, thm-graphs-of-continuous-functions-have-content-zero, def-null-and-content-zero-in-rn, thm-lebesgue-criterion-in-rn, thm-jordan-content-and-indicator-integrability, thm-jordan-boundary-criterion, thm-heine-borel-characterisation-r, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-heine-borel-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

Let $D=D_1\cup\cdots\cup D_N$ be a finite elementary Green region with its supplied decomposition, and let $G$ be a continuous planar vector field on a neighbourhood of $D$. Then

$$\sum_{\ell=1}^N\int_{\partial D_\ell}G\cdot d\mathbf r=\int_{\partial D}G\cdot d\mathbf r.$$

If $H:D\to\mathbb R$ is continuous, then $H$ is integrable over $D$ and

$$\sum_{\ell=1}^N\iint_{D_\ell}H\,dA=\iint_DH\,dA.$$

## Facts & Assumptions
**Given:** The nonempty finite decomposition and fields in the Statement.

[L1] The pieces have pairwise disjoint interiors; each positive-length internal arc belongs to exactly two pieces with opposite induced orientations, and pairwise intersections are finite unions of complete boundary arcs and endpoints ([[def-type-i-type-ii-and-elementary-green-regions]]).

[L2] The positive boundary chain of the union is obtained by deleting both copies of every shared internal arc and retaining all surviving oriented arcs; the boundary integral over a chain is the finite sum of the integrals over its arcs, and each piece's own positive boundary integral is likewise the sum over its four arcs ([[def-positive-orientation-for-elementary-region-boundaries]]).

[L3] Vector line integrals add under concatenation and negate under reversal ([[thm-line-integrals-under-reversal-and-concatenation]]).

[L4] A continuous graph over a compact nondegenerate rectangle has content zero; content-zero sets pass to subsets, and finite unions are content zero by combining their finite covers ([[thm-graphs-of-continuous-functions-have-content-zero]], [[def-null-and-content-zero-in-rn]]).

[L5] A bounded function on a rectangle is Riemann integrable exactly when its discontinuity set is null. A bounded set is Jordan measurable exactly when its boundary has content zero, and the indicator of a Jordan set is integrable with integral equal to its content ([[thm-lebesgue-criterion-in-rn]], [[thm-jordan-boundary-criterion]], [[thm-jordan-content-and-indicator-integrability]]).

[L6] Integration over a Jordan set is integration of its zero extension to a bounding rectangle, and multidimensional integrals are linear, monotone, and satisfy $|\int f|\leq\int|f|$ ([[def-riemann-integral-over-a-jordan-set]], [[thm-multidimensional-integral-properties]]).

[L7] A continuous real function on a nonempty compact metric space is bounded and attains a maximum and a minimum ([[thm-extreme-value-metric]]).

[L8] A closed bounded real interval is compact, continuous images of compact sets are compact, compact subsets of metric spaces are closed and bounded, and closed bounded subsets of $\mathbb R^2$ are compact ([[thm-heine-borel-characterisation-r]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]], [[thm-heine-borel-rn]]).



## Proof

**Proof technique:** direct.

1.1 In the sum of the piece-boundary line integrals, each shared positive-length arc occurs once in each orientation by [L1]. Its two contributions cancel by [L3]. Arc endpoints are merely partition points and create no additional line-integral term. [given, L1, L3]

1.2 Choose one rectangle containing all pieces. Each piece boundary is a finite union of continuous graph arcs and endpoints. Their parameter intervals are compact, so [L8] makes every arc closed and bounded. The finite union $$S:=\bigcup_{\ell=1}^N\partial D_\ell$$ is therefore closed and bounded, hence compact by [L8]. By [L4], $S$ has content zero. The boundary of $D$ and every multiple-membership point lie in $S$. [given, L1, L4, L8, algebra]

2.1 By [L2] each side is a finite sum over oriented arcs: the left side sums over the arcs of every piece boundary, and the right side sums over the arcs surviving deletion. Step 1.1 pairs off exactly the deleted arcs, and each such pair contributes zero, so the two finite sums are equal. This is a rearrangement of finitely many reals and needs no single closed path, so it holds whether or not $D$ is connected or simply connected. For $N=1$ there are no internal arcs and the two lists coincide. [step 1.1, L2, L3]

2.2 By [L7], $H$ is bounded on the nonempty compact set $D$; fix $M\geq0$ with $|H|\leq M$ there, so every zero extension below is bounded by $M$. The zero extension of $H|_{D_\ell}$ is continuous away from $\partial D_\ell$, and the zero extension of $H$ from $D$ is continuous away from $\partial D$. Their discontinuity sets are therefore subsets of $S$, which is null by [L4]. Hence [L5] makes all these extensions integrable. By [L6], these are precisely the indicated region integrals. [step 1.2, L4, L5, L6, L7]

3.1 With $M$ as in step 2.2, let $q$ be the sum of the piecewise zero extensions minus the zero extension from $D$. It is integrable by [L6] and vanishes outside the set of multiple-membership points, hence outside $S$; at a point of $S$ at most $N$ piece extensions and the extension from $D$ are nonzero, so $|q|\leq(N+1)M\,1_S$. Since $S$ is closed, its boundary is contained in $S$ and has content zero by step 1.2; [L5] therefore makes $S$ Jordan measurable with content $0$. Thus [L5] and [L6] give $$\left|\int q\right|\leq(N+1)M\int1_S=0.$$ [step 1.2, step 2.2, L5, L6, algebra]

4.1 Thus $\int q=0$. Expanding $q$ with linearity in [L6] gives the second displayed equality. [step 3.1, L6, algebra] ∎
