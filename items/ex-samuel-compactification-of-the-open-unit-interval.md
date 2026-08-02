---
id: ex-samuel-compactification-of-the-open-unit-interval
kind: example
title: "Under dependent choice and the ultrafilter lemma, the Samuel compactification of the open unit interval is the closed unit interval"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces, def-totally-bounded-uniform-space, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, lem-metric-uniformity-dictionary, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-integer-part, def-finite-cardinality, thm-heine-borel-r, def-completion-of-a-uniform-space, lem-compact-uniform-spaces-are-complete, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Uniform space"
      url: "https://encyclopediaofmath.org/wiki/Uniform_space"
pipeline_run: null
---

## Example

Give $(0,1)$ and $[0,1]$ the subspace metric $d(s,t)=|s-t|$ from the usual real metric ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]) and the uniformities that it generates. With these metric uniformities, the inclusion $i:(0,1)\to[0,1]$ is a Hausdorff completion. Consequently, under dependent choice and the ultrafilter lemma, $[0,1]$ is the Samuel compactification of $(0,1)$.

## Facts & Assumptions

**Given:** A real $\varepsilon>0$ and the specified subspace metric uniformities on $(0,1)$ and $[0,1]$.

[L1] The metric entourages induce the metric topologies and are separated ([[lem-metric-uniformity-dictionary]]).

[L2] There is $m\ge1$ with $1/m<\varepsilon$, inverse order reverses on positives, and every real has an integer part ([[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]], [[lem-integer-part]]).

[L3] A set is finite when it is equinumerous with a natural number, and total boundedness asks for a finite entourage-ball cover ([[def-finite-cardinality]], [[def-totally-bounded-uniform-space]]).

[L4] The interval $[0,1]$ is compact, hence complete for its compatible uniformity ([[thm-heine-borel-r]], [[lem-compact-uniform-spaces-are-complete]], [[def-interval]]).

[L5] Under dependent choice, the Samuel completion of a separated totally bounded space is its ordinary uniform completion; under the ultrafilter lemma it is compact ([[cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces]]).

## Verification

**Proof technique:** direct.

1.1 Choose $n=m+1$, where $m$ is from [L2]; then $n\ge2$ and $1/n<\varepsilon$. The map $j\mapsto(j+1)/n$ is injective on the natural number $m$, so its image $F=\{(j+1)/n:j\in m\}$ is finite and lies in $(0,1)$. [L2, L3]

2.1 For $x\in(0,1)$, write $k=\lfloor nx\rfloor$. If $k=0$, then $(0+1)/n\in F$ is within $1/n$ of $x$. Otherwise $1\le k<n=m+1$, so $k-1\in m$, $k/n\in F$, and $k/n\le x<(k+1)/n$. Thus $F$ is an $\varepsilon$-net. [L1, L2, step 1.1]

3.1 Hence $(0,1)$ is separated and totally bounded. The inclusion $i$ pulls back every metric entourage of $[0,1]$ to the same-radius metric entourage of $(0,1)$, and its image is dense because every interval about $0$, $1$, or an interior point meets $(0,1)$. [L1, L3, step 2.1]

4.1 By [L4], $[0,1]$ is complete, and by [L1] its metric uniformity is separated; so step 3.1 verifies the completion conditions of [[def-completion-of-a-uniform-space]]. [L1, L4, step 3.1]

5.1 The identification in [L5] now gives the Samuel compactification $S((0,1))\cong[0,1]$. [L5, step 4.1] ∎
