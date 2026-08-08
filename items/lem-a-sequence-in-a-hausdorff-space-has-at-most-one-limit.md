---
id: lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit
kind: lemma
title: "In a Hausdorff space a sequence converges to at most one point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hausdorff-space, def-sequence-convergence-top, def-neighbourhood-top,
       fs-unique-sequential-limits-imply-hausdorff, lem-nat-trichotomy]
justified_by: []
aliases: [lem-hausdorff-limits-unique]
landmark: false
short: "sequential limits are unique in a Hausdorff space"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Topological Spaces lecture notes (University of Cambridge)"
      url: "https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a Hausdorff space ([[def-hausdorff-space]]), let $(x_k)$ be a
sequence in $X$ and let $p, q \in X$ with $x_k \to p$ and $x_k \to q$
([[def-sequence-convergence-top]]). Then $p = q$.

So in a Hausdorff space a sequence has at most one limit, and the notation
$\lim_k x_k$ that [[def-sequence-convergence-top]] withholds in a general space
is legitimate there.

**The converse is false.** Uniqueness of sequential limits does not imply the
Hausdorff condition: the cocountable topology on $\mathbb{R}$ has unique
sequential limits and is not Hausdorff
([[fs-unique-sequential-limits-imply-hausdorff]]). So this lemma is strictly
weaker than the hypothesis it is proved from, and it is not a characterisation.

## Facts & Assumptions

**Given:** A Hausdorff space $X$, a sequence $(x_k)$ in $X$, and points $p, q \in X$ with $x_k \to p$ and $x_k \to q$.

[A1] $X$ is Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A2] $x_k \to r$ means that for every neighbourhood $N$ of $r$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; and an open set containing $r$ is a neighbourhood of $r$ ([[def-sequence-convergence-top]], [[def-neighbourhood-top]]).

[L1] For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds, so any two natural numbers are comparable ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $p \ne q$. [assume-contra]

2.1 By [A1] there are open sets $U \ni p$ and $V \ni q$ with $U \cap V = \varnothing$. [step 1.1, A1]

3.1 $U$ is a neighbourhood of $p$ and $V$ a neighbourhood of $q$, so by [A2] there are $K_1, K_2 \in \mathbb{N}$ with $x_k \in U$ for all $k \ge K_1$ and $x_k \in V$ for all $k \ge K_2$. [step 2.1, A2]

4.1 By [L1] the naturals $K_1$ and $K_2$ are comparable; let $K$ be whichever of them is not smaller than the other, so that $K \ge K_1$ and $K \ge K_2$. [step 3.1, L1, choose]

5.1 By step 3.1 and step 4.1 the term $x_K$ lies in $U$ and in $V$, so $x_K \in U \cap V$. [step 3.1, step 4.1]

6.1 Step 5.1 contradicts $U \cap V = \varnothing$ from step 2.1, so the supposition of step 1.1 fails and $p = q$. [step 2.1, step 5.1, discharge-contradiction] ∎

## Remarks

- **Why this is not the diagonal criterion in disguise.** The criterion of this page characterises the Hausdorff condition exactly; the sequential statement above does not, and the gap is recorded by [[fs-unique-sequential-limits-imply-hausdorff]]. A sequence sees only countably many points, and a space may separate no pair of points by open sets while still admitting no non-trivial convergent sequence at all.

- **No choice principle is used.** The two indices $K_1$ and $K_2$ come from two named neighbourhoods, and step 4.1 compares two given naturals; nothing is selected from a family.

- **The statement is about limits, not about cluster points.** A sequence in a Hausdorff space may well have many cluster points ([[def-sequence-convergence-top]]), and nothing above bears on that.
