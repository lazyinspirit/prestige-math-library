---
id: lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism
kind: lemma
title: "A continuous map of compact Hausdorff spaces is an ultrafilter-algebra homomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit, lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial, def-t-algebra-and-algebra-homomorphism, def-continuous-map-top, def-filter-convergence-and-cluster-point]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Let $f:X\to Y$ be continuous between compact Hausdorff spaces, and let $\xi_X,\xi_Y$ be their ultrafilter-limit maps. Then

$$f\xi_X=\xi_Y\beta(f),$$

so $f$ is an ultrafilter-algebra homomorphism.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$ of compact Hausdorff spaces and an ultrafilter $\mathcal U$ on $X$.

[L1] The pushforward $f_*\mathcal U$ is an ultrafilter on $Y$, and ultrafilter pushforward is functorial ([[lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial]]).

[L2] Every ultrafilter on a compact Hausdorff space has exactly one limit ([[lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit]]).

[L3] A $T$-algebra homomorphism $f:(A,a)\to(B,b)$ satisfies $fa=bT(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Push $\mathcal U$ forward along $f$ to the ultrafilter $f_*\mathcal U$ on $Y$ supplied by [L1]. [L1]

2.1 If $\mathcal U$ converges to $x$, then for each neighbourhood $V$ of $f(x)$, continuity makes $f^{-1}[V]$ a neighbourhood of $x$ and hence a member of $\mathcal U$. Therefore $V\in f_*\mathcal U$, so the pushforward converges to $f(x)$. [step 1.1, given]

3.1 Taking $x=\xi_X(\mathcal U)$, uniqueness in the target gives $\xi_Y(f_*\mathcal U)=f(\xi_X(\mathcal U))$. [step 2.1, L2]

4.1 Since $f_*\mathcal U=\beta(f)(\mathcal U)$, step 3.1 is the equation $f\xi_X=\xi_Y\beta(f)$ in [L3]. Thus $f$ is an algebra homomorphism, including for the unique map from an empty compact space. [step 3.1, L3] ∎
