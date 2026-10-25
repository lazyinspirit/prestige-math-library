---
id: def-balanced-tor-bifunctor
title: "The balanced Tor bifunctor"
kind: definition
status: published
origin: pipeline
deps: ["thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions", "prop-each-tor-construction-is-covariant-in-both-variables", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
---

## Definition

Assume Dependent Choice (DC), as in [[def-dependent-choice]], and work with
supplied projective resolutions of the modules under consideration. For a
right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define
$\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a
projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective
resolution of $N$, identified by
[[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]].
On module maps use the well-defined homology maps from
[[prop-each-tor-construction-is-covariant-in-both-variables]]. The natural
coherent identifications of
[[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]]
make this a covariant bifunctor up to canonical change-of-resolution
isomorphism, not literal equality between different resolution complexes.

DC licenses the comparison maps and homotopies in those suppliers. Existence
of projective resolutions for arbitrary modules is a separate prerequisite,
not a consequence asserted here of DC. When such existence and a system of
resolutions have separately been supplied, this gives the usual Tor bifunctor
on the corresponding module categories. Without DC, homology of a specified
tensor-resolution complex is still defined; claiming the balanced bifunctor
then requires explicit comparison and coherence data instead of silently
invoking the DC-bearing theorems.
