---
id: lem-suspension-homotopy-classes-have-natural-group-structures
kind: lemma
title: Suspension homotopy classes have natural group structures
deps: ["def-reduced-cone-suspension-and-cofiber-sequence", "lem-interval-exponential-law-and-quotient-homotopies", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §2 p.58
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement

Let $X,Y$ be well-pointed based CGWH spaces, let $Z$ be a based CGWH space, and let $f:X\to Y$ be based. Then $[\Sigma X,Z]_*$ is a group under first-map-first pinching of the suspension parameter, and $[\Sigma^2X,Z]_*$ is abelian. Precomposition by $\Sigma f$ defines a homomorphism $[\Sigma Y,Z]_*\to[\Sigma X,Z]_*$; likewise precomposition by $\Sigma^2f$ is a homomorphism between the abelian double-suspension groups. The constant map is the identity, and reversal of the suspension parameter gives the inverse.

## Facts & Assumptions

[F1] Suspension collapses the ends and basepoint track. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] Cylinder homotopies on these quotients descend continuously. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F3] The explicit one-coordinate unit, associativity and reversal homotopies give group laws, and the quarter-cube identity gives interchange. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Represent a suspension map by $a(x,s)$ constant at the basepoint for s=0,1 and x=x0. Define $(a*b)(x,s)=a(x,2s)$ on the first half and $b(x,2s-1)$ on the second. The values match at the seam, and the same pasting on homotopies proves representative independence. F2 descends each pasted map and homotopy to the suspension. [F1, F2]

2.1 Apply the explicit homotopies of F3 with x left as a parameter: $a(x,(1-t)s+t\phi(s))$ for unit and associativity reparametrizations, and $a(x,2s(1-t))$, $a(x,2(1-s)(1-t))$ on the two halves for reversal cancellation. Their formulas are jointly continuous, preserve both endpoint values and the entire x0 track, and descend by F2. Thus F3 proves associativity, a two-sided unit and a two-sided inverse here. [F1, F2, F3, step 1.1]

3.1 On double suspensions, both coordinates admit the operation. The four-quarter identity holds pointwise with x unchanged. The two-unit calculation in F3 therefore identifies the operations and proves commutativity. Finally, substituting f(x) for x commutes pointwise with the half-interval formulas, so precomposition by $\Sigma f$ preserves multiplication and the constant class. [F1, F2, F3, step 1.1, step 2.1] ∎
