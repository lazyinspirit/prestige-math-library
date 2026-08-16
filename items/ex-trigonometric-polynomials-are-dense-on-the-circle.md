---
id: ex-trigonometric-polynomials-are-dense-on-the-circle
kind: example
title: "Trigonometric polynomials are uniformly dense on the unit circle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-stone-weierstrass-self-adjoint, def-self-adjoint-complex-function-algebra, def-complex-metric-convergence-and-continuity, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-complex-numbers-form-a-field, def-complex-integer-powers, thm-heine-borel-rn, thm-compactness-agrees-with-metric-compactness, thm-metric-hausdorff-separation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Theorem 1.30"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Example

Let $\mathbb T:=\{z\in\mathbb C:|z|=1\}$ be the unit circle. A **complex trigonometric polynomial** on $\mathbb T$ is a finite Laurent sum
$$z\longmapsto\sum_{j=-n}^{n}a_jz^j,$$
where $n\in\mathbb N$ and $a_j\in\mathbb C$. The complex trigonometric polynomials are uniformly dense in $C(\mathbb T,\mathbb C)$.

## Facts & Assumptions

**Given:** The unit circle $\mathbb T$ with the subspace topology from the usual complex metric, and the algebra $T$ of complex trigonometric polynomials on it.

[L1] Every unital point-separating self-adjoint complex function algebra on a compact Hausdorff space is uniformly dense in the full complex continuous-function space ([[thm-complex-stone-weierstrass-self-adjoint]]).

[L2] A complex function algebra is self-adjoint when it contains each pointwise conjugate, unital when it contains all constants, and point-separating when it distinguishes every distinct pair ([[def-self-adjoint-complex-function-algebra]]).

[L3] Under $\mathbb C=\mathbb R^2$, $d_{\mathbb C}(z,w)=|z-w|$ is the Euclidean metric ([[def-complex-metric-convergence-and-continuity]]).

[L4] For $z=a+bi$, $\overline z=a-bi$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L5] Complex conjugation is a real-field automorphism with $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$ and $\overline{\overline z}=z$; and for every $z,w\in\mathbb C$, $z\overline z=|z|^2$, $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L6] The complex numbers form a field containing $\mathbb R$ ([[thm-complex-numbers-form-a-field]]).

[L7] Natural powers satisfy $z^0=1$ and $z^{n+1}=z^nz$, while negative integer powers of nonzero $z$ are powers of its inverse ([[def-complex-integer-powers]]).

[L8] For $n\ge1$, a subset of Euclidean $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]], clause 2).

[L9] A compact subset of a metric space is compact as a topological subspace of its metric topology, and conversely ([[thm-compactness-agrees-with-metric-compactness]], clause 2).

[L10] Every metric space is Hausdorff: distinct points are separated by disjoint open balls ([[thm-metric-hausdorff-separation]]).

## Verification

**Proof technique:** direct.

1.1 The reverse triangle inequality from [L5] makes $z\mapsto|z|$ continuous, so $\mathbb T=\{|z|=1\}$ is closed; it is bounded. Thus [L3], [L8], and [L9] make $\mathbb T$ compact, and [L10] makes it Hausdorff. [L3, L4, L5, L8, L9, L10]

1.2 For $z\in\mathbb T$, [L5] gives $z\overline z=1$, so uniqueness of the inverse in the field [L6] gives $z^{-1}=\overline z$; consequently [L7] gives $z^{-r}=(\overline z)^r$ for every natural $r$. [L5, L6, L7, algebra]

2.1 Finite Laurent sums are closed under complex linear combinations and products, contain every constant and the coordinate function $z\mapsto z$, and therefore separate points; conjugating such a sum conjugates its coefficients and reverses its exponents by step 1.2, so $T$ is self-adjoint. Every member of $T$ is also continuous, so $T$ is a subalgebra of $C(\mathbb T,\mathbb C)$: step 1.2 rewrites a Laurent sum as $\sum_{j\ge0}a_jz^j+\sum_{j<0}a_j(\overline z)^{-j}$ on $\mathbb T$; conjugation satisfies $|\overline z-\overline w|=|z-w|$, because $\overline z-\overline w=\overline{z-w}$ and $|\overline u|^2=\overline u\,u=|u|^2$ by [L5]; and the identity $u^r-v^r=(u-v)\sum_{k=0}^{r-1}u^kv^{r-1-k}$ of [L7] with $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ from [L5] gives $|u^r-v^r|\le r|u-v|$ whenever $|u|=|v|=1$, so each Laurent sum is Lipschitz for the metric of [L3]. [step 1.2, L2, L3, L5, L7, algebra]

3.1 The algebra $T$ is a unital, point-separating, self-adjoint complex function algebra on the compact Hausdorff circle from step 1.1, so [L1] makes it uniformly dense in $C(\mathbb T,\mathbb C)$. [step 1.1, step 2.1, L1] ∎
