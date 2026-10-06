---
id: ex-double-point-dimension-count-for-surfaces-in-four-and-five-space
kind: example
title: The double point dimension count for surfaces in four- and five-space
status: draft
origin: session
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-double-point-locus-has-expected-dimension-two-m-minus-n
- lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m
- def-self-transverse-immersion-and-double-point-locus
- def-immersion-submersion-and-constant-rank-map
- cor-every-immersion-is-locally-an-embedding
- prop-a-proper-injective-immersion-is-a-smooth-embedding
- def-compact-space
- lem-compactness-of-a-subspace-is-ambient
- def-countable-choice
- lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
- def-embedded-submanifold-and-slice-chart
- thm-finite-products-of-compact-spaces
- thm-closed-subspace-of-a-compact-space-is-compact
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Example

Assume $\mathrm{AC}_\omega$. Let $M^2$ be a closed connected surface ($m=2$). Then:

1. for a self-transverse immersion $f:M^2\looparrowright\mathbb R^4$ the expected dimension is $2m-n=0$: the double point locus is a closed $0$-dimensional submanifold of $M\times M\setminus\Delta_M$, the double point set is finite, and the selected branch pairs are isolated and transverse; several pairs may initially have the same collision image;
2. for a self-transverse immersion $f:M^2\looparrowright\mathbb R^5$ the expected dimension is $-1<0$: the double point locus is empty, so $f$ is an injective immersion, and since $M$ is closed $f$ is an embedding.

The example shows why dimension four is the critical case for surfaces: it is exactly there that the double points are isolated rather than absent, so that the algebraic branch-pair count can be nonzero; the $m\ge3$ disjunction theorem does not cover this surface-in-four-space case. In five-space the configuration space argument already forbids double points.

## Facts & Assumptions

**Given:** Countable choice, a closed connected surface $M$ and a self-transverse immersion $f:M^2\looparrowright\mathbb R^n$ with $n=4$ or $n=5$.

[F1] For a self-transverse immersion $f:M^m\to X^n$, $\Delta_2(f)$ is a closed embedded submanifold of $M\times M\setminus\Delta_M$ of pure dimension $2m-n$ when $2m-n\ge0$, and it is empty when $2m-n<0$; the double point set is $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))$ ([[lem-double-point-locus-has-expected-dimension-two-m-minus-n]], [[def-self-transverse-immersion-and-double-point-locus]]).

[F2] A self-transverse immersion $f:M^m\to X^n$ with $n>2m$ is injective ([[lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m]]).

[F3] A proper injective immersion of smooth manifolds is a smooth embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]); an immersion is locally an embedding, and a self-transverse immersion is in particular an immersion ([[cor-every-immersion-is-locally-an-embedding]], [[def-immersion-submersion-and-constant-rank-map]]).

[F4] Compact subsets admit finite subcovers from ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). A closed manifold is compact without boundary, and the diagonal map identifies $\Delta_M$ homeomorphically with the compact manifold $M$ ([[def-compact-space]], [[lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold]]); $M\times M$ is compact ([[thm-finite-products-of-compact-spaces]]); a closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F5] An embedded submanifold of dimension $0$ has each point isolated: in a slice chart at the point the submanifold meets the chart in that single point ([[def-embedded-submanifold-and-slice-chart]]).

[A1] Countable choice is inherited from the transversality machinery used in [F1]; the finite compactness argument below selects nothing ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Clause 1: with $m=2$ and $n=4$ the expected dimension is $2m-n=0$, so [F1] makes $\Delta_2(f)$ a closed embedded $0$-dimensional submanifold of $M\times M\setminus\Delta_M$; by [F5] each of its points is isolated. [F1, F5, A1]

1.2 A neighbourhood of the diagonal free of double points: by [F3] every $x\in M$ belongs to an open set $U$ on which $f$ is injective. Thus the family of all $U\times U$ with this property is an ambient-open cover of $\Delta_M$. By [F4] finitely many $U_1\times U_1,\dots,U_k\times U_k$ cover the compact diagonal; their union $N$ is an open neighbourhood of $\Delta_M$. If $(y,z)\in N\cap\Delta_2(f)$, then $(y,z)\in U_i\times U_i$ for some $i$ and $f(y)=f(z)$ with $y\ne z$, contradicting injectivity on $U_i$. Hence $N\cap\Delta_2(f)=\varnothing$. No family of neighbourhoods indexed by all source points was selected. [F3, F4]

1.3 Clause 2: with $m=2$ and $n=5$ one has $n>2m$, so [F2] makes $f$ injective; equivalently the expected dimension $2m-n=-1$ is negative and [F1] gives $\Delta_2(f)=\varnothing$ directly. Since $M$ is closed, every compact subset of $\mathbb R^5$ has compact preimage under the continuous map $f$ (the preimage is closed in the compact space $M$ and hence compact by [F4]), so $f$ is proper; being a proper injective immersion, $f$ is a smooth embedding by [F3]. [F1, F2, F3, F4]

2.1 Finiteness of the double point set: by step 1.2 one has $\Delta_2(f)\subseteq M\times M\setminus N$; the set $M\times M\setminus N$ is closed in $M\times M\setminus\Delta_M$ because $N$ is open and contains $\Delta_M$, and $\Delta_2(f)$ is closed in $M\times M\setminus\Delta_M$ by step 1.1, so $\Delta_2(f)$ is closed in $M\times M\setminus N$, while $M\times M\setminus N$ is compact by [F4] as a closed subset of the compact space $M\times M$; hence $\Delta_2(f)$ is compact. By step 1.1 it is a discrete subspace, and a compact discrete subspace is finite, so $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))$ is finite as the image of a finite set. The double points are isolated by step 1.1 and transverse because $f$ is self-transverse by hypothesis and the branch tangents span the target tangent space at each double point. [F1, step 1.1, step 1.2]

3.1 Both clauses hold: clause 1 is steps 1.1, 1.2 and 2.1, and clause 2 is step 1.3. Hence the critical dimension for surfaces is four, where the double point locus is a finite set, while in five-space self-transversality already forces an embedding. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
