---
id: prop-each-tor-construction-is-covariant-in-both-variables
title: "Each resolution-defined Tor construction is covariant in both variables"
kind: proposition
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-projective-comparison-map-exists", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Comparison Theorem 2.2.6 and Lemma 2.4.4/Theorem 2.4.5, pp.35–36 and 44–45"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
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

## Statement

Assume Dependent Choice (DC). For modules equipped with projective resolutions,
the homology groups obtained by resolving either variable are covariantly
functorial in the right module $N$ and the left module $M$. Maps do not depend
on the chosen comparison lifts. This assertion uses supplied resolutions; it
does not assert that DC supplies projective resolutions of every module.

## Proof

**Given:** module maps $u:N\to N^\prime$ and $v:M\to M^\prime$,
supplied projective resolutions, and DC.

**Facts & Assumptions.** The two homology constructions are
[[def-tor-by-resolving-the-left-module]] and
[[def-tor-by-resolving-the-right-module]]. Under [[def-dependent-choice]],
[[thm-projective-comparison-map-exists]] supplies comparison maps and
[[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]] supplies
homotopies between lifts of the same module map.

1.1 DC supplies a comparison map $f:P_\bullet\to P_\bullet^\prime$ lifting $v$. The tensor map $u\otimes f$ gives the map on the left-resolution complexes, hence on homology. DC is used only in the countable compatible selections of comparison and homotopy components supplied by the cited theorems. [given, construct]

2.1 If $f-g=dh+hd$, tensoring gives $u\otimes(f-g)=d(u\otimes h)+(u\otimes h)d$. On a cycle the difference is therefore a boundary. Thus the induced homology map is independent of the comparison lift. [step 1.1, algebra]

3.1 Identity chain maps lift identities, and a composite of lifts lifts the composite module map. Any other lift is homotopic to it, so step 2.1 gives the identity and composition laws. Tensor maps in different variables commute on pure tensors and hence on the whole tensor product. For the right-resolution construction lift $u$ to $g:Q\to Q'$ and use $g\otimes v$; its homotopies and the same computations give both functor laws. [step 1.1, step 2.1, algebra] ∎

## Remarks

For explicitly supplied chain maps and homotopies, the tensor and homology
calculations above are choice-free. Without DC, a functorial interpretation
may instead be made conditional on supplied lifts and homotopies witnessing
their independence, identities and compositions; these data are not silently
assumed to exist.
