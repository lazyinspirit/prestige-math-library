---
id: def-koszul-sign-rule-for-graded-tensors
kind: definition
title: "Koszul sign rule for graded tensor products and permutations"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-left-and-right-modules
  - def-tensor-algebra-of-a-vector-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§9.2 and 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $k$ be a field ([[def-field]]), and let $V_1,\ldots,V_n$ be graded
$k$-vector spaces. A $k$-vector space is a unital left $k$-module as in
[[def-left-and-right-modules]]. Tensor powers are formed using the tensor
products of
[[def-tensor-algebra-of-a-vector-space]]. If $f_i:V_i\to W_i$ are homogeneous
linear maps of degrees $d_i$, and $x_i\in V_i$ are homogeneous of degrees
$p_i$, the graded tensor map is defined on pure tensors by

$$(f_1\otimes\cdots\otimes f_n)(x_1\otimes\cdots\otimes x_n) =(-1)^{\sum_{i>j}d_i p_j} f_1(x_1)\otimes\cdots\otimes f_n(x_n).$$

It is extended linearly. In particular, for two maps,
$(f\otimes g)(x\otimes y)=(-1)^{|g||x|}f(x)\otimes g(y)$.

For homogeneous $x_1,\ldots,x_n$ and a permutation $\sigma\in S_n$, the
**Koszul sign** of reordering them to
$x_{\sigma(1)}\otimes\cdots\otimes x_{\sigma(n)}$ is

$$\epsilon(\sigma;x_1,\ldots,x_n) =(-1)^{\sum_{\substack{i<j\\\sigma(i)>\sigma(j)}} |x_{\sigma(i)}||x_{\sigma(j)}|}.$$

Thus swapping two adjacent homogeneous factors $x,y$ contributes
$(-1)^{|x||y|}$. Every tensor of maps, permutation, unshuffle, and symmetric
power below uses this same convention. A sign is a scalar in $k$ determined
only by the parity of the displayed integer exponent.
