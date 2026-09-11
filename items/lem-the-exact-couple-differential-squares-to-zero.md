---
id: lem-the-exact-couple-differential-squares-to-zero
kind: lemma
title: The exact couple differential squares to zero
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-differential-associated-to-an-exact-couple, def-exact-couple]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemma 12.21.2; indexed calculation supplied locally"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Statement

The associated differential of a page-$r$ exact couple satisfies
$$d_{p-r,q+r-1}d_{p,q}=0$$
for every $p,q\in\mathbb Z$ and every $r\ge1$.

## Facts & Assumptions

[F1] [[def-exact-couple]] gives exactness at $E_{p-r,q+r-1}$, in particular $k_{p-r,q+r-1}j_{p-1,q}=0$.

[F2] [[def-differential-associated-to-an-exact-couple]] specifies $d_{p,q}=j_{p-1,q}k_{p,q}$.

## Proof

**Given:** A page-$r$ exact couple with the stated indexed maps.

1.1 At the component $E_{p-r,q+r-1}$, exactness says that the image of $j_{p-1,q}$ lies in the kernel of $k_{p-r,q+r-1}$. Therefore $k_{p-r,q+r-1}j_{p-1,q}=0$ as an arrow from $D_{p-1,q}$ to $D_{p-r-1,q+r-1}$. This is valid even when any component or arrow is zero. [F1, given]

2.1 Substituting both differential formulas and using associativity gives $d_{p-r,q+r-1}d_{p,q}=j_{p-r-1,q+r-1}(k_{p-r,q+r-1}j_{p-1,q})k_{p,q}=0$. Its target is $E_{p-2r,q+2r-2}$, as required for the square of a map of bidegree $(-r,r-1)$. This works at $r=1$ and all larger integers, with no choice or convergence assumption. [F2, step 1.1, algebra] ∎
