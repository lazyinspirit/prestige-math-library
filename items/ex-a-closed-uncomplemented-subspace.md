---
id: ex-a-closed-uncomplemented-subspace
kind: example
title: A closed uncomplemented subspace
status: draft
origin: pipeline
deps: [lem-c-zero-is-a-closed-subspace-of-ell-infinity, thm-c-zero-is-not-complemented-in-ell-infinity]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, Theorem 10.19
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Example

Assuming $\mathrm{AC}_\omega$, the inclusion $c_0\subseteq\ell^\infty$ is a
concrete closed subspace that is not complemented.

## Facts & Assumptions

**Given:** The standard inclusion $c_0\subseteq\ell^\infty$.

[F1] $c_0$ is closed in $\ell^\infty$ ([[lem-c-zero-is-a-closed-subspace-of-ell-infinity]]).

[F2] $c_0$ is not complemented in $\ell^\infty$ under $\mathrm{AC}_\omega$ ([[thm-c-zero-is-not-complemented-in-ell-infinity]]).

## Verification

**Proof technique:** direct.

1.1 The inclusion in the statement is a closed-subspace inclusion by [F1]. [F1, given]

2.1 It is uncomplemented by [F2], so it has both advertised properties. [F2, given] ∎
