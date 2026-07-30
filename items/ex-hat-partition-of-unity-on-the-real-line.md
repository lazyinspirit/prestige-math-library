---
id: ex-hat-partition-of-unity-on-the-real-line
kind: example
title: 'A locally finite hat-function partition of unity on $\mathbb{R}$ subordinate to overlapping intervals'
status: published
origin: session
deps: [def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space, def-interval]
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

For $n\in\mathbb Z$, let $\psi(t)=\max\{1-|t|,0\}$ and
$\varphi_n(x)=\psi(x-n)$. The functions are continuous, take values in
$[0,1]$, and have support $[n-1,n+1]$. They are subordinate to the open cover
$U_n=(n-\tfrac32,n+\tfrac32)$ of $\mathbb R$.

If $x\in[n,n+1]$, the only possibly nonzero functions are
$\varphi_n$ and $\varphi_{n+1}$, and
$$\varphi_n(x)+\varphi_{n+1}(x)=(1-(x-n))+(1-(n+1-x))=1.$$
Thus $\{\varphi_n\}_{n\in\mathbb Z}$ is a locally finite partition of unity
subordinate to $\{U_n\}$. The support intervals show local finiteness directly:
every bounded set meets only finitely many support intervals.
