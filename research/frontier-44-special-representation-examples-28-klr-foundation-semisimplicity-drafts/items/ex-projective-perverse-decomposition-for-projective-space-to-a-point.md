---
id: ex-projective-perverse-decomposition-for-projective-space-to-a-point
kind: example
title: "Perverse decomposition of projective space over a point"
status: draft
origin: session
deps: ["thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps", "def-axiom-of-choice", "thm-cellular-cochains-compute-cohomology-with-local-coefficients"]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Let $f:\mathbb P^n\to\mathrm{pt}$. In the perverse category on a point, perversity equals the ordinary cohomological t-structure. For characteristic-zero $k$, $Rf_*k[n]$ has one copy of $k$ in each degree $-n,-n+2,\ldots,n$ and is the finite sum $\bigoplus_{j=0}^n k[n-2j]$.

## Verification

**Given:** the data and choice assumption in the Example.

1.1 The filtration $\mathbb P^0\subset\cdots\subset\mathbb P^n$ is cellular: the characteristic map from the closed unit ball in $\mathbb C^j$ sends $w$ to $[w:\sqrt{1-\lVert w\rVert^2}]$; its interior maps homeomorphically to the last-coordinate affine chart and its boundary maps to $\mathbb P^{j-1}$. Thus it has one real cell in each dimension $0,2,\ldots,2n$. Its cellular differential is zero because adjacent cellular groups have opposite parity. By [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], $H^{2j}(\mathbb P^n;k)=k$ for $0\le j\le n$ and all other cohomology groups vanish. [given, algebra]

2.1 The projective perverse theorem [[thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps]] supplies the splitting into these shifted cohomology groups. Each copy of $k$ is simple in the point heart. The case $n=0$ gives the single summand $k$ and all larger $n$ give the stated finite shifts. [step 1.1, algebra] ∎
