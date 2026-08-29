---
id: ex-hodge-star-in-dimensions-two-three-and-four
kind: example
title: "The Hodge star in dimensions two, three, and four"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula, cor-hodge-star-is-an-isometry-and-squares-to-a-sign]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Example

With the standard orientation and inner product on each space: in $\mathbb R^2$, $\star1=e_1\wedge e_2$, $\star e_1=e_2$, $\star e_2=-e_1$, $\star(e_1\wedge e_2)=1$. In $\mathbb R^3$, $\star1=e_1\wedge e_2\wedge e_3$, $\star e_1=e_2\wedge e_3$, $\star e_2=e_3\wedge e_1$, $\star e_3=e_1\wedge e_2$, $\star(e_1\wedge e_2)=e_3$, $\star(e_2\wedge e_3)=e_1$, $\star(e_3\wedge e_1)=e_2$, and $\star(e_1\wedge e_2\wedge e_3)=1$. In $\mathbb R^4$, $\star1=\omega=e_1\wedge e_2\wedge e_3\wedge e_4$, $\star e_1=e_2\wedge e_3\wedge e_4$, $\star e_2=-e_1\wedge e_3\wedge e_4$, $\star e_3=e_1\wedge e_2\wedge e_4$, $\star e_4=-e_1\wedge e_2\wedge e_3$, $\star(e_1\wedge e_2)=e_3\wedge e_4$, $\star(e_1\wedge e_3)=-e_2\wedge e_4$, $\star(e_3\wedge e_4)=e_1\wedge e_2$, and $\star\omega=1$.

## Facts & Assumptions

**Given:** The standard oriented orthonormal bases of $\mathbb R^2$, $\mathbb R^3$, and $\mathbb R^4$.

[L1] In a positively oriented orthonormal basis, $\star e_I=\varepsilon_Ie_{I^c}$, where $\varepsilon_I$ is the sign of the permutation listing $I$ followed by its complement ([[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[L2] $\star$ is an isometry and satisfies $\star^2=(-1)^{k(n-k)}$ on $\Lambda^k$ of an $n$-dimensional space ([[cor-hodge-star-is-an-isometry-and-squares-to-a-sign]]).

## Verification

**Proof technique:** direct.


1.1 In $\mathbb R^2$, the complementary basis and permutation signs of [L1] give $\star1=e_1\wedge e_2$, $\star e_1=e_2$, $\star e_2=-e_1$, and $\star(e_1\wedge e_2)=1$. [L1, algebra]

1.2 In $\mathbb R^3$, the same formula gives the displayed list: for example $\star e_2=e_3\wedge e_1$ because the permutation $(2,3,1)\mapsto(1,2,3)$ has sign $+1$, and $\star(e_1\wedge e_2)=e_3$ because $(1,2,3)$ is already ordered. [L1, algebra]

1.3 In $\mathbb R^4$, the formula gives the displayed values, e.g. $\star e_2=-e_1\wedge e_3\wedge e_4$ because $(2,1,3,4)$ has sign $-1$, and $\star(e_1\wedge e_3)=-e_2\wedge e_4$ because $(1,3,2,4)$ has sign $-1$. [L1, algebra]

2.1 Square checks with [L2]: in $\mathbb R^2$, $\star\star e_1=\star e_2=-e_1=(-1)^{1\cdot1}e_1$; in $\mathbb R^3$, $\star\star e_1=\star(e_2\wedge e_3)=e_1=(-1)^{1\cdot2}e_1$; in $\mathbb R^4$, $\star\star(e_1\wedge e_2)=\star(e_3\wedge e_4)=e_1\wedge e_2=(-1)^{2\cdot2}(e_1\wedge e_2)$. [L2, step 1.1, step 1.2, step 1.3, algebra]

2.2 In each dimension, $\star$ permutes the orthonormal wedge basis up to sign, so it preserves the Gram norm, as [L2] states. [L2, step 1.1, step 1.2, step 1.3]

3.1 Steps 1.1 through 2.2 verify the displayed stars, the square signs, and the isometry in all three dimensions. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
