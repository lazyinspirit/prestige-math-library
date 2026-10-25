---
id: prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective
kind: proposition
title: The unitary dual to primitive ideal map is continuous and surjective
deps:
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space
  - lem-fell-closure-is-characterized-by-weak-containment
  - def-weak-containment-of-unitary-representations
  - def-axiom-of-choice
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the kernel-map homeomorphism theorem and the closure lemma; the immediate specialization adds no further choice."
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Propositions 8.B.3-8.B.4 and Remark 8.B.6"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let
$\kappa:\widehat G\to\operatorname{Prim}(C^*(G))$ be the kernel map
$\kappa([\pi])=C^*\!\ker\pi$
([[def-primitive-ideal-space-of-a-group-c-star-algebra]],
[[def-unitary-dual-of-a-locally-compact-group]]). Then $\kappa$ is continuous
for the Fell topology on $\widehat G$
([[def-fell-topology-on-the-unitary-dual]]) and the Jacobson topology on
$\operatorname{Prim}(C^*(G))$, and $\kappa$ is surjective. The induced map
$$\widehat G/{\sim}\ \longrightarrow\ \operatorname{Prim}(C^*(G))$$
on the weak equivalence classes of irreducible representations
([[def-weak-containment-of-unitary-representations]]) is a homeomorphism onto
$\operatorname{Prim}(C^*(G))$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; the kernel map $\kappa$; the Fell and Jacobson topologies.

[F1] The kernel-map theorem proves that $\kappa$ is continuous and surjective, that its fibres are exactly the weak equivalence classes, and that the induced bijection from the quotient by weak equivalence with the quotient Fell topology to the primitive ideal space is a homeomorphism; its internal proof first establishes the Fell/Jacobson closure identity by family selection and only then the topology statement, so the homeomorphism is available in full ([[thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space]]).

[F2] The closure identity used in that proof is also recorded separately: the Fell closure of any subset of the dual consists of the classes whose kernels contain the intersection of the kernels of the subset ([[lem-fell-closure-is-characterized-by-weak-containment]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ and the kernel map $\kappa$.

1.1 Continuity and surjectivity: [F1] states that $\kappa$ is continuous for the two topologies and surjective, and identifies the fibres of $\kappa$ with the weak equivalence classes. [F1]

1.2 The induced map on weak equivalence classes is the bijection of [F1] from the quotient Fell topology to the Jacobson topology; [F1] proves it is a homeomorphism, and [F2] records the closure identity on which that proof is based. [F1, F2]

2.1 Steps 1.1 and 1.2 are exactly the assertions of the statement, so the kernel map is a continuous surjection and the induced map is a homeomorphism. [step 1.1, step 1.2]

3.1 The Axiom of Choice is inherited from the kernel-map homeomorphism theorem; the specialization to the present statement adds no further choice ([[def-axiom-of-choice]]). [given] ∎ 