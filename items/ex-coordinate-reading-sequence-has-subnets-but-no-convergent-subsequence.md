---
id: ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence
kind: example
title: "The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence"
status: published
origin: session
deps: [fs-compact-implies-sequentially-compact, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-compactness-via-nets-filters-and-ultrafilters, def-subnet, def-sequence-convergence-top, def-standard-topologies, thm-product-universal-property, thm-continuity-characterised-by-nets]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Example

Let $D=\{0,1\}^{\mathbb N}$ and $Y=\{0,1\}^{D}$ with the product topology. The coordinate-reading sequence is $F_n(r)=r_n$. Assuming the ultrafilter lemma, $Y$ is compact and $(F_n)$ has a convergent subnet, but it has no convergent subsequence.

## Facts & Assumptions

**Given:** The binary cube and the coordinate-reading sequence above.

[L1] The published refutation [[fs-compact-implies-sequentially-compact]] defines this cube and sequence as a compact nonsequentially compact witness.

[L2] Under the ultrafilter lemma, every net in a compact space has a convergent subnet ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L3] Under the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[L4] Each coordinate projection from a product is continuous, so it sends a convergent net to a convergent coordinate net ([[thm-product-universal-property]], [[thm-continuity-characterised-by-nets]]).


## Verification

**Proof technique:** contradiction.

1.1 Each two-point discrete factor is compact and Hausdorff, so the cube is compact under the ultrafilter lemma by [L3]; then [L2] gives a convergent subnet of $(F_n)$. [L2, L3]

1.2 Assume for a contradiction that $F_{n_j}$ is a convergent subsequence. Define $r\in D$ by $r_{n_j}=0$ for even $j$ and $r_{n_j}=1$ for odd $j$, assigning $0$ elsewhere. [L1, assume-contra]

2.1 The $r$-coordinate of $F_{n_j}$ alternates $0,1$, so it does not converge in the discrete two-point factor. By [L4], a convergent product net has convergent coordinate nets, contradiction. [step 1.2, L4]

3.1 Hence no convergent subsequence exists, while step 1.1 supplies a convergent subnet. [step 1.1, step 2.1, discharge-contradiction] ∎
