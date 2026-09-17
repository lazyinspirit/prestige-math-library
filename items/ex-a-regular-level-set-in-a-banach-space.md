---
id: ex-a-regular-level-set-in-a-banach-space
kind: example
title: A regular level set in a Banach space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-second-countable-space, thm-countable-products-of-second-countable-spaces, def-countable-base-banach-manifold-and-smooth-map, thm-regular-value-theorem-for-banach-manifolds, def-complemented-subspace, def-axiom-of-choice, def-banach-space, def-frechet-derivative-between-banach-spaces, def-bounded-linear-operator, def-linear-subspace]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ and $Y$ be real
Banach spaces ([[def-banach-space]]) and let $X = K \oplus Y$ be their
topological direct sum, with bounded coordinate projections
([[def-complemented-subspace]]), where the direct sum is *second countable*
([[def-second-countable-space]]) — for instance this holds whenever $K$ and $Y$
are second countable, since the direct sum is a finite product
([[thm-countable-products-of-second-countable-spaces]]). Then $X$ and $Y$ are
$C^\infty$ Banach manifolds in the sense of
[[def-countable-base-banach-manifold-and-smooth-map]], and the projection
$p : X \to Y$, $p(k+y) := y$, has every $y \in Y$ as a regular value in the
sense of the regular value theorem
([[thm-regular-value-theorem-for-banach-manifolds]]): $p$ is smooth — a bounded linear map
equals its own derivative everywhere — and at every point of $p^{-1}(y)$ its
derivative is onto with complemented kernel. Each
level set $p^{-1}(y)$ is the affine split submanifold

$$p^{-1}(y) = K + y = \{\,k+y : k \in K\,\}$$

of $X$, and its tangent space at every point is $K$.

## Facts & Assumptions

**Given:** Real Banach spaces $K,Y$ with second countable topological direct sum $X = K\oplus Y$ with bounded projections, and a point $y \in Y$.

[L1] In a topological direct sum $X = K\oplus Y$ every $x$ has a unique decomposition $x = k+y$ with $k\in K$, $y\in Y$, and the coordinate maps $p(x)=y$, $q(x)=k$ are bounded linear operators; $p$ is the projection onto $Y$ along $K$ ([[def-complemented-subspace]]).

[L2] A bounded linear operator $T$ is differentiable everywhere with $DT(x)=T$, and the regular value theorem applies to a smooth map whose derivative at every point of a level set is onto with complemented kernel ([[def-frechet-derivative-between-banach-spaces]], [[thm-regular-value-theorem-for-banach-manifolds]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] the projection $p$ is bounded linear, so $Dp(x) = p$ for every $x$ by [L2]; it is surjective because $p(k+y)=y$ for every $y$, and its kernel is $\ker p = \{k+0 : k\in K\} = K$ ([[def-linear-subspace]]), which is complemented in $X$ by the given direct sum. [L1, L2]

2.1 For every $y \in Y$ one has $p(k+y) = y$ for all $k \in K$, and conversely $p(x)=y$ forces $x = (x-y)+y$ with $x-y \in \ker p = K$; hence $p^{-1}(y) = K+y$, a translate of the subspace $K$. [step 1.1, L1]

3.1 Since [step 1.1] verifies the hypotheses of the regular value theorem at every point of every level set, that theorem gives that each $p^{-1}(y)$ is a split smooth submanifold of $X$ with $T_x p^{-1}(y) = \ker Dp(x) = K$ for all $x \in p^{-1}(y)$; by [step 2.1] this submanifold is the affine set $K+y$. [step 1.1, step 2.1, L2]

4.1 Every $y \in Y$ is therefore a regular value with the stated affine fibre and tangent space, which is the example's claim. [step 3.1] ∎
