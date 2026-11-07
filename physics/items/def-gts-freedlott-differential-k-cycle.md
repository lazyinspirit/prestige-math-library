---
id: def-gts-freedlott-differential-k-cycle
kind: definition
title: Freed–Lott differential K-cycle
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
deps:
  - def-gts-differential-extension-of-a-generalized-cohomology-theory
  - def-complex-topological-k-zero-by-grothendieck-completion
  - def-reduced-complex-k-theory
  - thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
  - def-axiom-of-choice
justified_by:
  - lem-gts-freedlott-structure-maps-well-defined
dependency_roles:
  def-gts-differential-extension-of-a-generalized-cohomology-theory: mathematical-premise
  def-complex-topological-k-zero-by-grothendieck-completion: mathematical-premise
  def-reduced-complex-k-theory: mathematical-premise
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_strength: ZF + full AC inherited from the selected topological K-theory supplier.
sources:
  references:
    - title: Daniel S. Freed and John Lott, An Index Theorem in Differential K-Theory
      url: https://arxiv.org/pdf/0907.3508v2
      locator: Sections 2.1–2.2, cycles, relations and curvature; §§6–9, family index theorem and odd-dimensional suspension.
    - title: Ulrich Bunke and Thomas Schick, Uniqueness of smooth extensions of generalized cohomology theories
      url: https://arxiv.org/pdf/1011.6663v2
      locator: Section 4.1, the Freed–Lott cycle model and its relation to differential extensions.
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold and put $R=\mathbb R[u,u^{-1}]$ with $|u|=2$. In the even Freed–Lott cycle model, a generator is $(E,h^E,\nabla^E,\phi)$, where $E\to M$ is a finite-rank complex vector bundle, $h^E$ is a Hermitian metric, $\nabla^E$ is a compatible unitary connection, and $\phi$ is a class in the source-graded group $\Omega^{-1}(M;R)/\operatorname{im}(d)$ of odd periodic forms modulo exact forms. Form the free abelian group on these generators. Impose the isometric-connection isomorphism relations and, for each Hermitian short exact sequence $0\to(E_1,\nabla^1)\to(E_2,\nabla^2)\to(E_3,\nabla^3)\to0$, the relation

$$(E_2,h^2,\nabla^2,\phi_2)=(E_1,h^1,\nabla^1,\phi_1)+(E_3,h^3,\nabla^3,\phi_3)$$

whenever $\phi_2=\phi_1+\phi_3-\operatorname{CS}(\nabla^1,\nabla^2,\nabla^3)$, with the source normalization $d\operatorname{CS}=\operatorname{ch}(\nabla^2)-\operatorname{ch}(\nabla^1)-\operatorname{ch}(\nabla^3)$. The resulting quotient group is the even Freed–Lott differential $K$-cycle group. On generators prescribe $I(E,h,\nabla,\phi)=[E]\in K^0(M)$ and $R(E,h,\nabla,\phi)=\operatorname{ch}(\nabla)+d\phi$.

## Statement references

[[def-gts-differential-extension-of-a-generalized-cohomology-theory]]

[[def-complex-topological-k-zero-by-grothendieck-completion]]

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

[[lem-gts-freedlott-structure-maps-well-defined]]

## Definition

Addition is induced by direct sum, and the quotient is the free abelian group on generators modulo the stated isomorphism and Hermitian short-exact-sequence relations. The induced maps $I$ and $R$ are justified in the linked well-definedness lemma.

## Remarks

The Chern–Simons convention and formal Bott variable are those of Freed–Lott §2.2. The definition does not assert that the cycle presentation satisfies every differential-extension axiom, nor that it is equivalent to the Hopkins–Singer spectrum model. Relative and noncompact variants are not introduced here.
