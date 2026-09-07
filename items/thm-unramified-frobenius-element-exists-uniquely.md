---
id: thm-unramified-frobenius-element-exists-uniquely
title: "Unramified frobenius element exists uniquely"
kind: theorem
status: draft
origin: pipeline
deps: [def-arithmetic-frobenius-coset, cor-orders-of-decomposition-and-inertia-groups]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Frobenius element, pp.141\u2013142"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

For finite Galois L/K and a nonzero prime $P\mid p$ with $e(P/p)=1$, there is a unique $\operatorname{Frob}_P\in D(P/p)$ satisfying
$$\operatorname{Frob}_P(a)\equiv a^{Np}\pmod P\qquad(a\in\mathcal O_L).$$
It is the arithmetic Frobenius element, the unique lift of the arithmetic Frobenius coset.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-arithmetic-frobenius-coset]]: For finite Galois L/K and nonzero $P\mid p$, the **arithmetic Frobenius coset** is the unique element of $D(P/p)/I(P/p)$ corresponding under the residue isomorphism to $x\mapsto x^{Np}$ on $\kappa(P)$, where $Np=|\kappa(p)|$. It is defined also when P is ramified. Its inverse is called geometric Frobenius. The quotient element is distinguished; a representative in D need not be unique.

[F2] [[cor-orders-of-decomposition-and-inertia-groups]]: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree, $|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$ The prime P is unramified over p if and only if its inertia group is trivial.

## Proof

1.1 The assumption e=1 implies I is trivial. Consequently the quotient map $D\to D/I$ is an isomorphism of groups, including when D itself is trivial. [F2]

2.1 The coset defined by the arithmetic residue power map therefore has exactly one inverse image. Reduction of that image is the power map, which is precisely the displayed congruence on every residue representative, including zero. Conversely any element of D with those congruences has the same quotient image and hence equals it. [F1, step 1.1] ∎
