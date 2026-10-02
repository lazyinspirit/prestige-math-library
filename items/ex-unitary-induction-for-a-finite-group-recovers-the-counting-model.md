---
id: ex-unitary-induction-for-a-finite-group-recovers-the-counting-model
kind: example
title: "Finite-group counting model for induction"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-induced-r-linear-g-module-by-h-covariant-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Vogan, Unitary induced representations, §§1–4"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let $G$ be finite, $H\leq G$, and let $\sigma:H\to U(V)$ be a unitary representation on a complex Hilbert space $V$. Give both groups counting measure and take $\rho=1$. The induced Hilbert space consists of functions $F:G\to V$ satisfying $F(gh)=\sigma(h)^{-1}F(g)$, with squared norm $\sum_{xH\in G/H}\|F(x)\|^2$. The left action is $[\Pi(g)F](x)=F(g^{-1}x)$. This is the published algebraic induced module with its invariant counting inner product.

## Facts & Assumptions

**Given:** The finite groups $G,H$, the Hilbert space $V$, and the unitary $H$-action $\sigma$.

[F1] The algebraic induced module consists of the right-$H$-covariant functions $F(gh)=\sigma(h)^{-1}F(g)$ with left action $[g\cdot F](x)=F(g^{-1}x)$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

## Verification

**Proof technique:** direct.

1.1 Counting measure is left and right invariant on a finite group, so both modular functions are $1$ and $\rho=1$ satisfies the rho covariance. The finite quotient formula is the partition of a finite sum into cosets: $\sum_{x\in G}a(x)=\sum_{xH\in G/H}\sum_{h\in H}a(xh)$. Thus the quotient measure is counting measure, and the general covariance and left action reduce to [F1]. [given, F1, construct]

1.2 If $x$ is replaced by $xh_0$, then $F(xh_0)=\sigma(h_0)^{-1}F(x)$, so unitarity makes $\|F(xh_0)\|=\|F(x)\|$. The stated norm and inner product are therefore independent of coset representatives. [given, F1]

2.1 Left multiplication permutes the finite set $G/H$, and [F1] shows it preserves the covariance law; reindexing the finite sum proves $\|\Pi(g)F\|=\|F\|$. The covariant subspace is closed in the complete finite product $V^G$, so completion adds no vectors. This is exactly the algebraic induced module with the stated invariant inner product. ∎ [step 1.1, step 1.2, F1]
