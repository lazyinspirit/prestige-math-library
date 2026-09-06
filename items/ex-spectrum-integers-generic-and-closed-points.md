---
id: ex-spectrum-integers-generic-and-closed-points
kind: example
title: "Spec Z has one generic point and closed prime-number points"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-point-scheme, def-generic-point-irreducible-closed-subset, thm-spectrum-sober, thm-well-ordering-principle, thm-division-algorithm-in-z, thm-quotient-is-domain-iff-ideal-prime, thm-z-mod-p-is-a-field, thm-int-comm-ring]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.24"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Example

The points of $\operatorname{Spec}\mathbb Z$ are $(0)$ and $(p)$ for rational
primes $p$. The point $(0)$ is generic, while each $(p)$ is closed.

## Facts & Assumptions

**Given:** The ring of integers $\mathbb Z$.

[F1] $\mathbb Z/p\mathbb Z$ is a field when $p$ is a rational prime
([[thm-z-mod-p-is-a-field]]).

[F2] A quotient is a domain exactly when the defining ideal is prime
([[thm-quotient-is-domain-iff-ideal-prime]]).

## Verification

**Proof technique:** direct.

1.1 A nonzero prime ideal has a least positive member and division shows it is $(p)$ for a rational prime $p$; conversely [F1] and [F2] make every $(p)$ prime, while $(0)$ is prime because $\mathbb Z$ is a domain. [F1, F2, given, algebra]

2.1 The ideals $(p)$ are maximal and therefore are closed points. [step 1.1]

2.2 The closure of $(0)$ is $V((0))=\operatorname{Spec}\mathbb Z$, so it is generic. [step 1.1]

3.1 These are exactly the claimed generic and closed points. [step 2.1, step 2.2] ∎
 
