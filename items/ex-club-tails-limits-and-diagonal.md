---
id: ex-club-tails-limits-and-diagonal
kind: example
title: "Tails, limits, and diagonal intersection"
status: draft
origin: pipeline
deps: ["thm-diagonal-intersection-of-clubs", "def-club-subsets-of-ordinals"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Examples 14.2 and 14.10, pp.79–81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Example

Let $\kappa$ be regular uncountable. Each strict tail $C_\xi=\{\alpha<\kappa:\xi<\alpha\}$ and the set of nonzero limit ordinals are club. Nevertheless $\bigcap_{\xi<\kappa}C_\xi=\varnothing$, while $\mathop{\triangle}_{\xi<\kappa}C_\xi=\kappa$. A superset of a club need not be closed.

## Facts & Assumptions

[F1] [[def-club-subsets-of-ordinals]]: Closed means containing every nonzero limit point below the ambient ordinal.

[F2] [[thm-diagonal-intersection-of-clubs]]: Diagonal membership at alpha tests exactly the indices below alpha.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Tails are unbounded; a nonzero limit point of a tail lies above its cutoff and hence in the tail. Nonzero limits are unbounded since $\beta+\omega<\kappa$ for $\beta<\kappa$; a nonzero limit point of limit ordinals is itself a limit. [F1]

1.2 No alpha lies in $C_\alpha$, so the full intersection is empty. But for every $\xi<\alpha$ we have $\alpha\in C_\xi$, including the vacuous test at zero. Thus the diagonal intersection is all of kappa, consistently with its club theorem. [F2]

2.1 The set $[\omega+1,\kappa)\cup\{1,2,3,\ldots\}$ contains a club tail, but omits its nonzero limit point omega, and is therefore not closed. [F1, step 1.1] ∎
