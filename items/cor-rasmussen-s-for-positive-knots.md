---
id: cor-rasmussen-s-for-positive-knots
kind: corollary
title: Rasmussen's invariant for positive knots
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-lee-homology-of-a-knot-has-two-generators
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-kauffman-bracket-smoothing-and-loop-value
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is inherited through the diagram-independent definition of
  s; the positive-diagram state expansion is finite and choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §5.2, printed pp. 13–14
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §5.8, printed pp. 102–104
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be an oriented knot admitting a finite regular diagram $D$ with $n$ positive crossings and no negative crossings, and let $k$ be the number of circles in its oriented resolution. Then Rasmussen’s invariant satisfies
$$
s(K)=n-k+1.
$$

## Statement references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Positive and negative crossing convention]]

[[def-lee-deformed-khovanov-complex|Normalized quantum grading and Lee filtration]]

[[def-rasmussen-s-invariant|Rasmussen's filtration-level convention]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §5.2](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.8](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a positive diagram $D$ of the knot $K$.

[F1] The canonical orientation class is a basis vector in Lee homology, and its filtration level is $s_{\min}(K)$ ([[thm-lee-homology-of-a-knot-has-two-generators]], [[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]]).

[F2] Rasmussen's convention is $s(K)=s_{\min}(K)+1$ ([[def-rasmussen-s-invariant]]).

[F3] In the normalized Lee complex, a state with $|v|$ one-resolutions and labels $1,X$ has quantum degree $|v|+n_+-2n_-+\sum\deg_q(a)$ ([[def-lee-deformed-khovanov-complex]]).

[A1] $\mathrm{AC}_\omega$ is inherited through the diagram-independent definition of $s$ ([[def-countable-choice]], [[def-rasmussen-s-invariant]]).

[A2] Positive crossings have positive determinant of the ordered over/under tangents ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]). In the source chart the over-strand joins southwest to northeast, the A-smoothing pairs left endpoints and right endpoints, and the B-smoothing pairs top endpoints and bottom endpoints ([[def-kauffman-bracket-smoothing-and-loop-value]]). The cube uses A at $0$ and B at $1$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

## Proof

**Given:** The positive diagram has $n_+=n$, $n_-=0$ and $k$ circles in its oriented resolution.

1.1 In the positively oriented source chart of [A2], take the over-tangent to be $(1,1)$. Positivity forces the under-tangent to be $(-1,1)$ rather than $(1,-1)$, since their determinants with the over-tangent are $2$ and $-2$. The incoming endpoints are therefore southwest and southeast, and the outgoing endpoints northeast and northwest. The orientation-preserving smoothing pairs southwest with northwest and southeast with northeast: exactly the A-smoothing. Reversing both strand arrows gives the other positive orientation case and retains those same pairs. Thus every positive oriented smoothing is the $0$-resolution. [A2, algebra]

2.1 By step 1.1, every oriented smoothing is the $0$-resolution, so the canonical cycle lies in cohomological degree $0$. There is no chain group in degree $-1$, hence this cycle is not altered by adding a boundary. Expanding each of its $k$ circle labels $a=1+X$ or $b=X-1$ in the homogeneous basis, the unique term of least quantum degree is obtained by choosing $X$ on every circle; its coefficient is $1$ or $-1$. Its quantum degree is the state shift $n$ plus $k$ labels of degree $-1$, namely $n-k$. Therefore its induced filtration level is $s_{\min}(K)=n-k$. [F1, F3, step 1.1, algebra]

3.1 The formula [F2] for $s$ is diagram-independent under the AC$_\omega$ branch [A1]. Substitution of the value from step 2.1 gives $s(K)=n-k+1$. If $n=0$, the positive diagram is the crossingless unknot, whose oriented resolution has $k=1$, so the same calculation gives $s=0$. The state expansion itself is finite and choice-free. [A1, F2, step 2.1, algebra] ∎