---
id: thm-riemann-mapping-theorem
kind: theorem
title: "Every proper homologically simply connected plane domain is conformally equivalent to the unit disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-homologically-simply-connected-complex-domain, lem-riemann-map-extremal-family-is-nonempty, lem-riemann-map-extremal-derivative-is-attained, lem-riemann-map-extremizer-is-univalent, lem-riemann-map-extremizer-is-surjective, cor-injective-holomorphic-derivative-nonzero]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subsetneq\mathbb C$ be a homologically simply connected complex
domain and let $z_0\in\Omega$. Then there is a biholomorphic map
$f:\Omega\to\mathbb D$ such that

$$f(z_0)=0,\qquad f'(z_0)>0.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$, and a point $z_0\in\Omega$.

[A1] The Axiom of Choice is used by the extremal-attainment lemma ([[def-axiom-of-choice]]).

[L1] Under the Axiom of Choice, the extremal family is nonempty and the supremal derivative is attained by a holomorphic map $f:\Omega\to\mathbb D$ ([[lem-riemann-map-extremal-family-is-nonempty]], [[lem-riemann-map-extremal-derivative-is-attained]]).

[L2] That extremal map is univalent and surjective onto $\mathbb D$ ([[lem-riemann-map-extremizer-is-univalent]], [[lem-riemann-map-extremizer-is-surjective]]).

[L3] An injective holomorphic map on a complex domain is biholomorphic onto its open image ([[cor-injective-holomorphic-derivative-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] and [L1], choose a holomorphic map $f:\Omega\to\mathbb D$ with $f(z_0)=0$ and extremal derivative $f'(z_0)>0$. [A1, L1, given, choose]

2.1 Fact [L2] makes this map injective and gives $f(\Omega)=\mathbb D$. Since $\Omega$ is a complex domain by the given data, [L3] makes $f$ biholomorphic onto its image, which is exactly $\mathbb D$. [L2, L3, step 1.1]

3.1 The map of step 2.1 has the required normalization, so it is the desired conformal equivalence. [step 1.1, step 2.1] ∎
