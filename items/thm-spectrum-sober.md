---
id: thm-spectrum-sober
kind: theorem
title: "Every irreducible closed subset of an affine spectrum has a unique generic point"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generic-point-irreducible-closed-subset, thm-irreducible-closed-subsets-and-prime-ideals, cor-spectrum-is-t-zero]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Section 10.26"
      url: "https://stacks.math.columbia.edu/tag/00ET"
---
## Statement

Assume the Axiom of Choice. Every irreducible closed subset of
$\operatorname{Spec}A$ has a unique generic point. Thus every affine spectrum
is sober.

## Facts & Assumptions

**Given:** A commutative ring $A$, the Axiom of Choice, and an irreducible
closed subset $Z$ of $\operatorname{Spec}A$.

[F1] A nonempty irreducible closed subset is $V(\mathfrak p)$ for a unique
prime $\mathfrak p$, which is its unique generic point
([[thm-irreducible-closed-subsets-and-prime-ideals]]).

## Proof

**Proof technique:** direct.

1.1 The irreducible closed subset $Z$ is nonempty, so [F1] gives a prime $\mathfrak p$ generic for $Z$. [F1]

1.2 Any other generic point has the same closure and is equal to $\mathfrak p$ by the uniqueness in [F1]. [F1]

2.1 Therefore every irreducible closed subset has a unique generic point. [step 1.1, step 1.2] ∎
 
