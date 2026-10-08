---
id: thm-an-amenable-property-t-locally-compact-group-is-compact
kind: theorem
title: An amenable locally compact group with property (T) is compact
status: published
origin: pipeline
deps:
  - def-kazhdans-property-t
  - def-almost-invariant-vectors-for-a-unitary-representation
  - lem-finite-haar-volume-compactness-criterion
  - def-amenable-locally-compact-group
  - thm-hulanicki-weak-containment-criterion-for-amenability
  - def-left-and-right-regular-unitary-representations
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - def-locally-compact-space
  - def-hausdorff-space
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It is inherited from the Hulanicki-Reiter and weak-containment-to-almost-invariant-vector suppliers and the finite-Haar-volume criterion. No additional choice is used."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Theorem 1.1.6 and complete proof, printed p. 35/PDF p. 41: amenability gives almost invariant vectors for the left regular representation; property (T) gives a nonzero invariant vector; Remark 1.1.2(vii) then gives compactness."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A, Proposition A.5.1 and complete proof, printed pp. 323–324: finite Haar volume and a nonzero invariant vector in the left regular representation imply compactness."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally
compact Hausdorff group ([[def-locally-compact-space]], [[def-hausdorff-space]]). If $G$ is amenable
([[def-amenable-locally-compact-group]]) and has property (T)
([[def-kazhdans-property-t]]), then $G$ is compact. Equivalently, no
non-compact locally compact group can be both amenable and a Kazhdan group.

## Facts & Assumptions

**Given:** AC, a locally compact Hausdorff group $G$ ([[def-locally-compact-space]], [[def-hausdorff-space]]) with a fixed left Haar measure, and the assumptions that $G$ is amenable and has property (T).

[F1] The group is amenable in the sense of [[def-amenable-locally-compact-group]], and under AC the Hulanicki-Reiter criterion identifies this with $1_G\prec\lambda_G$ ([[thm-hulanicki-weak-containment-criterion-for-amenability]]).

[F2] The left regular representation $\lambda_G$ on $L^2(G)$ is a strongly continuous unitary representation ([[def-left-and-right-regular-unitary-representations]]). For an LCH group, $1_G\prec\lambda_G$ is equivalent under AC to $\lambda_G$ having almost invariant unit vectors ([[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]], [[def-almost-invariant-vectors-for-a-unitary-representation]]).

[F3] Property (T) says that every strongly continuous unitary representation with almost invariant vectors has a nonzero invariant vector ([[def-kazhdans-property-t]]).

[F4] For a fixed left Haar measure on an LCH group, a nonzero invariant vector of $\lambda_G$ implies that the total Haar measure is finite, and finite total Haar measure implies that $G$ is compact ([[lem-finite-haar-volume-compactness-criterion]]).

[F5] AC is the principle that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it is assumed in the Hulanicki-Reiter and weak-containment suppliers and in the finite-Haar-volume criterion.

## Proof

**Proof technique:** pass from amenability to almost invariance of the left regular representation, apply property (T), then use the finite-Haar-volume criterion.

1.1 Since $G$ is amenable, the Hulanicki-Reiter criterion in [F1] gives $1_G\prec\lambda_G$. By [F2], the left regular representation therefore has almost invariant unit vectors. [F1, F2, F5]

2.1 By [F2], $\lambda_G$ is a strongly continuous unitary representation. Its almost invariant vectors from step 1.1 and property (T) in [F3] give a nonzero $G$-invariant vector in $L^2(G)$. [F2, F3, step 1.1]

3.1 The nonzero invariant vector from step 2.1 makes the Haar measure finite by [F4], and finite Haar measure forces $G$ to be compact by [F4]. [F4, F5, step 2.1] ∎

