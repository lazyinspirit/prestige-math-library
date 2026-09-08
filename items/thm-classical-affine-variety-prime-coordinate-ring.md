---
id: "thm-classical-affine-variety-prime-coordinate-ring"
kind: "theorem"
title: "A classical affine variety has a domain coordinate ring, and conversely"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "def-classical-affine-variety-interface", "def-classical-affine-coordinate-ring", "thm-quotient-is-domain-iff-ideal-prime", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 2.27 and §2i, pp. 45–48"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For an affine algebraic set $X$, $X$ is a classical affine variety if and only if $k[X]$ is a nonzero integral domain.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and an affine algebraic set $X\subseteq k^n$.

[F1] Nonempty irreducible algebraic sets correspond to prime vanishing ideals ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F2] The coordinate ring is the quotient by the vanishing ideal ([[def-classical-affine-coordinate-ring]]).

[F3] A quotient is a domain exactly when the ideal is prime ([[thm-quotient-is-domain-iff-ideal-prime]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is a variety, F1 makes $I(X)$ prime. The polynomial ring is commutative, so F3 applied to $I(X)$ and the quotient in F2 says $k[X]$ is a nonzero domain. [F1, F2, F3, given]

2.1 If $k[X]$ is a nonzero domain, F3 makes $I(X)$ prime, and F1 makes $X$ nonempty irreducible. In particular the zero ring $k[\varnothing]$ is excluded on both sides. [F1, F2, F3, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 2.27 and §2i, pp. 45–48. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
