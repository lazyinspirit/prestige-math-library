---
id: cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion
kind: corollary
title: Odd Chern classes of a complexified real bundle are two-torsion
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-complexification-is-conjugation-invariant, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the conjugation-invariance supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Odd Chern classes are two-torsion, printed pp.134-137"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable real vector bundle over a path-connected
paracompact Hausdorff CW base
and let $E_{\mathbb C}$ be its complexification. Then for every $j\geq0$
$$2\,c_{2j+1}(E_{\mathbb C})=0\qquad\text{in }H^{4j+2}(B;\mathbb Z).$$

No integral vanishing of $c_{2j+1}(E_{\mathbb C})$ is asserted.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, inherited from the conjugation-invariance supplier ([[def-axiom-of-choice]]).

[F1] On a path-connected paracompact Hausdorff CW complex, every numerable complex bundle $V$ satisfies $c_i(\overline V)=(-1)^ic_i(V)$; for a numerable real bundle $E$ on that base, the complexification $E_{\mathbb C}$ is canonically isomorphic to its conjugate ([[prop-complexification-is-conjugation-invariant]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a numerable real bundle $E\to B$ over a path-connected paracompact Hausdorff CW complex, its complexification $E_{\mathbb C}$, and an index $j\geq0$.

1.1 By [F1] the bundle $E_{\mathbb C}$ is isomorphic to $\overline{E_{\mathbb C}}$, and conjugation acts on its Chern classes by $c_i\mapsto(-1)^ic_i$. [F1, given]

2.1 Applying the conjugation formula in odd degree $i=2j+1$ to $V=E_{\mathbb C}$ gives $c_{2j+1}(E_{\mathbb C})=(-1)^{2j+1}c_{2j+1}(E_{\mathbb C})=-c_{2j+1}(E_{\mathbb C})$, using the isomorphism of step 1.1. [F1, step 1.1]

3.1 Moving the right-hand side to the left gives $2c_{2j+1}(E_{\mathbb C})=0$ in the abelian group $H^{4j+2}(B;\mathbb Z)$, which is the assertion; the argument shows no integral vanishing, since a two-torsion class need not be zero. [step 2.1]

4.1 Boundary cases. For $j=0$ the identity reads $2c_1(E_{\mathbb C})=0$. For the zero bundle both sides vanish; the empty base is excluded by the path-connected hypothesis and the coefficient group is $\mathbb Z$. Division by $2$ is never performed, so the conclusion is valid integrally and no localization hypothesis is hidden. [A1, F1, step 3.1] ∎

## Source notes

Miller's Lecture 36 records that the odd Chern classes of a complexified real bundle are two-torsion; the corollary above is the elementary consequence of the conjugation symmetry, and the companion counterexample on the examples page shows that the classes need not vanish integrally.
