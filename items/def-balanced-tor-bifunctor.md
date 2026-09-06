---
id: def-balanced-tor-bifunctor
title: "The balanced Tor bifunctor"
kind: definition
status: draft
origin: pipeline
deps: ["thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For a right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define
$\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a
projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective
resolution of $N$, identified by the preceding natural balance isomorphism.
On maps it uses the homology maps induced by comparison maps; coherence makes
this a well-defined covariant bifunctor.
