---
id: thm-bloch-theorem
kind: theorem
title: "Bloch's theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bloch-radius-and-bloch-constant, lem-bloch-rescaling-at-an-almost-maximal-derivative, lem-quantitative-univalence-from-controlled-derivative]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 7.4.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

If $f$ is holomorphic on $\mathbb D$ and $|f'(0)|=1$, then

$$\beta(f)\ge\frac1{48}.$$

In particular, $\mathcal B>0$.

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb C$ with $|f'(0)|=1$.

[L1] The maximizing-point rescaling lemma produces a normalized map $g$ on $\mathbb D$ with $|g'|\le2$ and $r|f'(z_0)|\ge1/4$ ([[lem-bloch-rescaling-at-an-almost-maximal-derivative]]).

[L2] Such a normalized map is univalent on $D(0,1/6)$ and covers $D(0,1/12)$ there ([[lem-quantitative-univalence-from-controlled-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $R=1/2$ to obtain $z_0\in D(0,1/2)$, a radius $r>0$, and a normalized rescaling $g(w)=(f(z_0+rw)-f(z_0))/(r f'(z_0))$ with $|g'(w)|\le2$ on $\mathbb D$ and $r|f'(z_0)|\ge1/4$. [L1, given, choose]

2.1 By [L2], the restriction of $g$ to $D(0,1/6)$ is univalent and its image contains $D(0,1/12)$. Take the inverse image of that round disc under this univalent restriction and then undo the affine source and target normalizations. This gives a subdomain on which $f$ maps univalently onto $D\!\left(f(z_0),r|f'(z_0)|/12\right)$. Since step 1.1 gives $r|f'(z_0)|\ge1/4$, this radius is at least $1/48$. [L2, step 1.1, construct, algebra]

3.1 Thus $\beta(f)\ge1/48$. Taking the infimum over all normalized $f$ gives $\mathcal B\ge1/48>0$. [step 2.1] ∎
