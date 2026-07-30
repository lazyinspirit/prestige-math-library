---
id: ex-finite-partition-of-unity-on-a-compact-space
kind: example
title: "Under choice and dependent choice, a finite subordinate partition of unity for a two-set cover of a compact interval"
status: published
origin: session
deps: [cor-compact-hausdorff-partitions-of-unity, def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Example

On $[0,1]$, take the open-in-the-subspace cover
$U=(-1,\tfrac34)\cap[0,1]$ and $V=(\tfrac14,2)\cap[0,1]$. Define
$$\varphi(x)=\max\{0,\min\{1,2-3x\}\},\qquad\psi(x)=1-\varphi(x).$$
Then $\varphi$ and $\psi$ are continuous, nonnegative, and sum to one. Their
supports are contained respectively in $[0,\tfrac23]\subseteq U$ and
$[\tfrac13,1]\subseteq V$, so they are a finite subordinate partition of unity.

The explicit pair is an instance of the existence theorem
[[cor-compact-hausdorff-partitions-of-unity]], under its stated Choice and
Dependent Choice hypotheses.
