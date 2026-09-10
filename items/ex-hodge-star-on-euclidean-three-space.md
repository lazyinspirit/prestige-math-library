---
id: "ex-hodge-star-on-euclidean-three-space"
kind: "example"
title: "Hodge star on euclidean three space"
deps: ["thm-hodge-star-is-a-smooth-bundle-isomorphism", "prop-hodge-star-squared-sign"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In standard oriented Euclidean $\mathbb R^3$, $*1=dx\wedge dy\wedge dz$, $*dx=dy\wedge dz$, $*dy=dz\wedge dx$, $*dz=dx\wedge dy$, and $*^2=\mathrm{id}$ in every degree.

## Facts & Assumptions

**Given:** The orthonormal coframe $(dx,dy,dz)$ with volume $\nu=dx\wedge dy\wedge dz$.

[F1] [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]: The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

[F2] [[prop-hodge-star-squared-sign]]: On real $k$-forms, $*^2=(-1)^{k(n-k)}\operatorname{id}$.

## Verification

**Proof technique:** direct.

1.1 The complementary-wedge formula gives $*1=\nu$. For the one-forms, $dx\wedge(dy\wedge dz)=\nu$, $dy\wedge(dz\wedge dx)=\nu$, and $dz\wedge(dx\wedge dy)=\nu$: the latter two permutations each have two transpositions. These complementary two-forms wedge to zero with either of the other one-form basis vectors because of a repeated factor. Thus they satisfy all pairings in the defining identity and are the displayed stars. [F1, given]

2.1 Similarly $(dx\wedge dy)\wedge dz=\nu$, $(dx\wedge dz)\wedge(-dy)=\nu$, and $(dy\wedge dz)\wedge dx=\nu$. Distinct two-form basis vectors have zero pairing and wedge to zero with the listed complementary one-form. Consequently $*(dx\wedge dy)=dz$, $*(dx\wedge dz)=-dy$, $*(dy\wedge dz)=dx$, and $*\nu=1$. For example $*(2dx+3dy)=2dy\wedge dz+3dz\wedge dx$ by linearity. [F1, step 1.1]

3.1 For $k=0,1,2,3$, the exponent $k(3-k)$ is respectively $0,2,2,0$, always even. The star-square formula therefore gives $*^2=\mathrm{id}$ in all these degrees, in agreement with the table. [F2, step 1.1, step 2.1] ∎

## Source locator

Lee, Problem 16-18(a–e), pp. 437–438, and Problem 16-19, p. 438, Euclidean Hodge-star computations.
