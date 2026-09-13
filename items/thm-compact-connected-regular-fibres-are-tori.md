---
id: thm-compact-connected-regular-fibres-are-tori
kind: theorem
title: Compact connected regular fibres are tori
status: draft
origin: pipeline
deps: ["def-countable-choice","lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Proposition 6.10 and proof, pp. 68--69
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Every compact connected regular fibre of a completely integrable system on a
$2n$-dimensional symplectic manifold is diffeomorphic to the torus
$T^n=\mathbb R^n/\mathbb Z^n$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and such a compact connected regular fibre $N$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] $N\cong\mathbb R^n/\Gamma$ for a full lattice $\Gamma$.
[[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]].

## Proof

**Proof technique:** direct.

1.1 Choose a lattice basis $\gamma_1,\ldots,\gamma_n$ of $\Gamma$. The linear isomorphism $A:\mathbb R^n\to\mathbb R^n$ sending the standard basis to this basis carries $\mathbb Z^n$ onto $\Gamma$. [A1, F1]

2.1 Therefore $A$ descends to a diffeomorphism $\mathbb R^n/\mathbb Z^n\to\mathbb R^n/\Gamma$, which composed with [F1] identifies $T^n$ with $N$. For $n=0$, both are a point. [F1, step 1.1] ∎
