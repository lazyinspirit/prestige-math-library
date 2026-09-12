---
id: "thm-simplicial-approximation-after-sufficient-subdivision"
kind: "theorem"
title: "Simplicial approximation after sufficient subdivision"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-relative-simplicial-approximation-after-subdivision","def-relative-derived-subdivision-of-a-finite-simplicial-pair"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 2C.1, pp.177–179
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
    - title: E. C. Zeeman, Relative simplicial approximation, pp.39–42
      url: https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $K,L$ be finite simplicial complexes, $A\subseteq K$ a subcomplex, and $f:|K|\to|L|$ continuous. Suppose $f|_{|A|}$ is the realization of a simplicial map in the chosen triangulation of $A$. For some $r\ge0$ there is a simplicial map
$$g:D_A^rK\longrightarrow L$$
whose realization agrees pointwise with $f$ on $|A|$, and a homotopy from $f$ to $|g|$ relative to $|A|$.

Here relative simplicial approximation means this relative homotopy conclusion. It imposes no additional requirement that $|g|(x)$ lie in the carrier of $f(x)$ for every $x$. With $A=\varnothing$ the subdivision is ordinary barycentric subdivision and the conclusion is ordinary simplicial approximation. No AC is needed.

## Facts & Assumptions

[F1] [[thm-relative-simplicial-approximation-after-subdivision]] supplies a simplicial map on $D_A^rK$ and a homotopy fixed on $|A|$, under exactly the stated finite-complex and chosen-triangulation hypotheses. Its relative proof first adjusts the map near $A$ and then uses the open-star criterion.

[F2] [[def-relative-derived-subdivision-of-a-finite-simplicial-pair]] defines $D_AK$ by retaining $A$ and coning the already triangulated boundaries of other simplices from their barycenters. It preserves the underlying polyhedron and becomes ordinary barycentric subdivision when $A$ has no vertices.

## Proof

**Given:** The finite complexes, their specified subcomplex and triangulation, and the continuous map with its simplicial restriction.

1.1 The pair $(K,A)$ meets the hypotheses of [F1]: both complexes are finite, $A$ is a subcomplex, and the required simplicial restriction holds on this actual triangulation. Thus [F1] provides $r$, a simplicial $g:D_A^rK\to L$, and a continuous $H:|K|\times[0,1]\to|L|$ with $H(x,0)=f(x)$, $H(x,1)=|g|(x)$ and $H(a,t)=f(a)$ for every $a\in|A|$ and every $t$. We have identified $|D_A^rK|$ with $|K|$ by [F2]'s polyhedron-preserving construction. At $t=1$ the fixed-point formula gives $|g|(a)=f(a)$, so the map and the homotopy have exactly the asserted relative agreement. [F1, F2, given]

2.1 In [F1]'s proved construction, the first homotopy runs from $f$ to $fh$, where $h$ is homotopic to the identity fixing $A$, and the second runs from $fh$ to $|g|$ by the carrier interpolation for $fh$. These concatenate because their common endpoint is $fh$, and both are fixed on $A$. This explains why step 1.1 gives the stated relative homotopy without asserting a strict carrier condition for the original $f$ away from $A$. No refinement of the source triangulation is silently assumed to preserve simpliciality of $f|_A$; [F1]'s prescribed-subdivision clause is conditional on that same simpliciality hypothesis on the new triangulation. [F1, step 1.1]

3.1 If $A$ is empty, [F2] gives $D_A^rK=\operatorname{sd}^rK$, and [F1] gives the ordinary approximation conclusion with no fixed-subspace restriction. If $A=K$, take $r=0$, the supplied simplicial map $g=f$, and $H(x,t)=f(x)$; the hypotheses make this a valid simplicial map and constant homotopy. If $K$ is empty, the empty map and empty homotopy suffice, also when $L$ is empty. If $L$ is empty and $K$ is nonempty, no map $f$ meeting the hypothesis exists. Zero-dimensional complexes and simplicial maps that collapse vertices or higher faces are included by [F1]. All vertex selections in that theorem's finite-complex construction are finite, so the present application introduces no AC. [F1, F2, given] ∎
