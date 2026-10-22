---
id: thm-l2-signature-theorem-for-closed-four-manifolds
kind: theorem
title: "The L²-signature of a closed manifold equals its ordinary signature"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-integral-half-solutions-strebel-and-l2-signatures
  - thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück and Thomas Schick, “Various L²-signatures and a topological L²-signature theorem”"
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, Theorem 1.3 and its proof; Atiyah/Hilsum inputs"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let X be a closed oriented smooth 4-manifold, Γ a discrete group, and φ:π₁(X)→Γ a homomorphism. Then the von Neumann signature of the NΓ-coefficient intersection form equals the ordinary signature:
sign_Γ^(2)(X,φ)=sign(X).

## Statement references

[Lück–Schick, Theorem 1.3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** Full AC, the closed oriented smooth four-manifold $X$, the discrete group $\Gamma$, and the homomorphism $\phi$ of the Statement. AC is the standing convention of the coefficient Definition and the supplied smooth realization proof.

[A1] Full AC is already assumed by the coefficient Definition. [[def-integral-half-solutions-strebel-and-l2-signatures]], [[def-axiom-of-choice]]

[F1] The signature in the Statement is the von Neumann inertia difference of the regular-coefficient middle intersection form. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] The smooth group-signature theorem constructs a coefficient-preserving smooth five-bordism after an injective acyclic-envelope enlargement, proves signature invariance across that actual bordism, and proves induction under group inclusion. Its closed smooth conclusion applies to arbitrary discrete target groups. [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

## Proof

1.1 Apply [F2] to the actual smooth manifold $X$ and $\phi$. More explicitly, its classifying-map and labelled-bordism arguments produce an acyclic-envelope classifying map and a labelled smooth five-bordism from $X$ with that map to the same $X$ with constant map. Its closed-manifold argument identifies the original $\Gamma$ intersection signature with the enlarged-target signature by regular-coset block induction and preserves that signature across this actual bordism. This is precisely the geometric intersection signature [F1], rather than a separate analytically defined quantity. [A1, F1, F2, given, construct]

2.1 With constant coefficients the finite intersection matrices are the ordinary complex matrices tensored with the regular module; every scalar positive or negative eigenspace has its ordinary multiplicity multiplied by the trace of the identity, namely one. Thus the constant-map signature is $\operatorname{sign}(X)$. The identifications in step 1.1 give $\operatorname{sign}^{(2)}_\Gamma(X,\phi)=\operatorname{sign}(X)$, for nononto maps and arbitrary target cardinality as included in [F2]. If $X$ is disconnected, compactness gives finitely many components and both signatures add; the empty case is zero. This proves the literal smooth Statement without an unproved analytic index or a TOP realization assumption. [F1, F2, step 1.1, algebra] ∎
