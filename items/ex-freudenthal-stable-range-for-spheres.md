---
id: "ex-freudenthal-stable-range-for-spheres"
kind: "example"
title: "Freudenthal stable range for spheres"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-freudenthal-suspension-theorem","def-adjunction-cone-suspension","lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed","prop-higher-homotopy-basepoint-transport-and-moving-homotopies"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Corollary 4.24; May Chapter 11 §2
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For $n\ge1$, suspension gives an isomorphism $\pi_i(S^n)\to\pi_{i+1}(S^{n+1})$ for $1\le i<2n-1$ and a surjection for $i=2n-1$. The degree-zero map is a bijection of singleton pointed sets. For a fixed integer $k\ge0$, every transition in the sequence $\pi_{n+k}(S^n)\to\pi_{n+k+1}(S^{n+1})\to\cdots$ is an isomorphism once $n>k+1$. At $n=k+1$ the theorem promises only surjectivity. These statements are choice-free and do not compute any additional unstable group.

## Facts & Assumptions

[F1] [[thm-freudenthal-suspension-theorem]] gives the exact isomorphism range and surjective endpoint for an $(n-1)$-connected based CW space, using its unreduced two-cone suspension based at the lower apex, without AC.

[F2] [[def-adjunction-cone-suspension]] gives the quotient model with two distinct apices, here rescaled to the height interval $[-1,1]$.

[F3] The singleton case of [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]], including its proof's CW construction, makes $S^n$ a path-connected CW complex with $\pi_j(S^n)=0$ for $0<j<n$, for $n\ge2$. Only this connectivity clause is used.

[F4] [[thm-heine-borel-rn]] gives compactness of $S^n\times[-1,1]$ as a closed bounded Euclidean subset. [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes a continuous bijection from its compact quotient to a Hausdorff space a homeomorphism, by the closed-image argument.

[F5] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives the explicit choice-free change-of-basepoint isomorphisms if different sphere basepoints are specified.

## Verification

**Given:** $n\ge1$. Begin with any specified source sphere basepoint and use the lower apex on its suspension.

1.1 For $n\ge2$, [F3] supplies exactly the $(n-1)$-connectivity and CW hypotheses of [F1]. For $n=1$, the circle is the quotient of one closed interval with its endpoints identified, with one vertex and one open edge. Its characteristic interval is a quotient map, so this is its finite CW weak topology; path connectedness follows from its interval parametrization. Thus it is $0$-connected, which is all [F1] requires in this case. The constant loops and the sole component are included; no positive connectivity is claimed for $S^1$. [F1, F3, given]

2.1 The map $$\Phi:\Sigma S^n\longrightarrow S^{n+1},\qquad [x,t]\longmapsto\big(\sqrt{1-t^2}\,x,t\big)$$ is well defined and continuous by [F2]: at either endpoint the first coordinates vanish independently of $x$. It is bijective, since for $-1<t<1$ the inverse recovers $t$ as the last coordinate and $x$ by division by $\sqrt{1-t^2}$, while the two poles have precisely their respective apex preimages. Its source is compact as a quotient of the compact set in [F4], so [F4] makes it a homeomorphism. The lower apex goes to $(0,\ldots,0,-1)$. Postcomposition with this homeomorphism and its inverse gives inverse maps on based homotopy classes and preserves concatenation, so [F1] and step 1.1 give the asserted sphere ranges. If a different target basepoint is desired, a specified sphere path and [F5] transport these isomorphism or surjectivity assertions. At $t=\pm1$ no division formula is used. [F1, F2, F4, F5, step 1.1]

3.1 Put $i=n+k$ with $k\ge0$. The inequality $i<2n-1$ is exactly $n+k<2n-1$, or $n>k+1$. If it holds, it continues to hold with $n$ replaced by $n+r$ for every $r\ge0$, so every subsequent suspension transition is an isomorphism by step 2.1. Thus the sequence is constant up to these specified isomorphisms from that index onward. At equality $n=k+1$, $i=2n-1$ is precisely the surjective endpoint, with no injectivity conclusion supplied. For example $k=0$ is in the isomorphism range for $n\ge2$ and only the surjective endpoint at $n=1$; $k=1$ is in the isomorphism range for $n\ge3$ and at the endpoint for $n=2$. Degree zero consists of the singleton components and the trivial target fundamental group by [F1]. The case $n=0$ is outside this assertion. Neither these arithmetic bounds nor the compact quotient and basepoint comparisons introduce AC. [F1, F5, step 2.1] ∎
