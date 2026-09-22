---
id: ex-a-projection-with-finite-dimensional-kernel-is-fredholm
kind: example
title: A projection with finite-dimensional kernel is Fredholm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-second-countable-space, thm-countable-products-of-second-countable-spaces, def-countable-base-banach-manifold-and-smooth-map, def-fredholm-map-between-banach-manifolds, lem-local-finite-dimensional-reduction-for-a-fredholm-map, def-fredholm-operator-cokernel-and-index, def-axiom-of-choice, def-complemented-subspace, def-c-k-map-between-banach-spaces, def-banach-space, def-bounded-linear-operator, def-frechet-derivative-between-banach-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $N$ and $Y$ be real
Banach spaces with $\dim N < \infty$ ([[def-banach-space]]), and let
$X = N \oplus Y$ be their topological direct sum with bounded projections
([[def-complemented-subspace]]), where the direct sum is *second countable*
([[def-second-countable-space]]) — for instance this holds whenever $N$ and $Y$
are second countable ([[thm-countable-products-of-second-countable-spaces]]).
Then $X$ and $Y$ are $C^\infty$ Banach manifolds in the sense of
[[def-countable-base-banach-manifold-and-smooth-map]], and the projection
$p : X \to Y$ onto $Y$
along $N$ is a smooth Fredholm map
([[def-fredholm-map-between-banach-manifolds]]) of index $\dim N$, and its local
finite-dimensional reduction
([[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]) has zero
obstruction space: in suitable coordinates it is the projection
$(u,v) \mapsto (u,0)$ onto the range factor of the splitting
$\operatorname{ran}p \oplus C$, with the complement coordinate set to zero.

## Facts & Assumptions

**Given:** Real Banach spaces $N, Y$ with $\dim N < \infty$ and second countable topological direct sum $X = N \oplus Y$ with bounded projections, and the projection $p : X \to Y$ onto the second factor.

[L1] In a topological direct sum $X=N\oplus Y$ every $x$ decomposes uniquely as $x = n+y$ and the coordinates $n = q(x)$, $y = p(x)$ are bounded linear; here $\ker p = N$ is finite dimensional by hypothesis and $\operatorname{ran}p = Y$ ([[def-complemented-subspace]]).

[L2] A bounded linear map is differentiable everywhere with derivative itself, and is smooth of class $C^\infty$ as a map of Banach manifolds ([[def-frechet-derivative-between-banach-spaces]], [[def-c-k-map-between-banach-spaces]]).

[L3] Fredholm operator and index: finite-dimensional kernel, closed range and finite-dimensional cokernel, index $\dim\ker - \dim\operatorname{coker}$ ([[def-fredholm-operator-cokernel-and-index]]); the local finite-dimensional reduction produces coordinates in which a Fredholm map is $(u,v)\mapsto(u,g(u,v))$ with $u$ ranging over an open subset of the range, $v$ over an open subset of the finite-dimensional kernel, and $g$ taking values in a finite-dimensional complement of the range ([[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]).



## Verification

**Proof technique:** direct.

1.1 By [L1] the map $p$ is bounded linear with $\ker p = N$ finite dimensional, $\operatorname{ran}p = Y$ closed, and $\operatorname{coker}p = Y/Y = \{0\}$ finite dimensional; hence $p$ is Fredholm at every point with index $\dim N - 0 = \dim N$ by [L3]. [L1, L3, algebra]

2.1 The map $p$ is smooth and $Dp(x) = p$ for every $x$ by [L2], so $p$ is a smooth Fredholm map of index $\dim N$ by [step 1.1]. [step 1.1, L2]

2.2 For the reduction, take the splitting $X = \ker p \oplus Y$ and the range complement $C = \{0\}$; the normal form of [L3] reads $(u,v) \mapsto (u,g(u,v))$ with $g$ valued in the zero space, so $g \equiv 0$ and the obstruction space is trivial; the coordinates are those of the direct sum itself, and no nontrivial correction term is produced. [step 1.1, L1, L3]

3.1 Thus $p$ is a smooth Fredholm map of index $\dim N$ whose local reduction has zero obstruction space, as claimed. [step 2.1, step 2.2] ∎
