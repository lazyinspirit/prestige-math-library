---
id: op-a-polynomial-for-knots-in-other-three-manifolds
kind: open-problem
title: A-polynomial questions for knots in other 3-manifolds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - def-sl-two-abelian-surgery
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-satellite-pattern-companion-and-winding-number
justified_by: []
axiom_use: Full AC is assumed for the generalized peripheral algebraic and smooth manifold conventions; this is a formulation question, not a logical proof supplier.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), Question 1.8
      url: https://arxiv.org/pdf/2405.19197v2
---

## Open problem

Assume full AC. Let $Y$ be a closed connected oriented smooth $3$-manifold and let $K\subset Y$ be an oriented knot with irreducible exterior $E=Y\setminus\operatorname{Int}\nu K$. Choose a parametrized tubular neighborhood and an oriented integral basis $(\mu,\lambda)$ on its boundary torus $T$, where $\mu$ bounds a meridian disk in $\nu K$ and $\lambda$ is a chosen framing; no preferred null-homologous longitude is assumed. For each primitive pair $(p,q)$, filling along $p\mu+q\lambda$ means attaching a solid torus whose meridian has that unoriented class.

Define $Z^{\mathrm{irr}}_{E,T}\subset(\mathbb C^*)^2$ to be the Zariski closure of the pairs $(M,L)$ arising on a common peripheral invariant line of an irreducible representation $\pi_1(E)\to SL_2(\mathbb C)$, in the chosen basis. Let $C^{\mathrm{irr}}_{E,T}$ be the union of its one-dimensional irreducible components. Use a square-free Laurent equation over $\mathbb C$ of this reduced curve as the enhanced polynomial, up to a Laurent unit, with $1$ for the empty curve. This definition selects curve components; it does not assert that higher-dimensional peripheral-image components are impossible or detected by that equation.

Do the following analogues hold for such closed ambient manifolds: (i) the Newton polygon of this enhanced polynomial is contained in an affine line if and only if $E$ admits a Seifert fibration over a disk with at most two exceptional circle fibers; and (ii) infinitely many distinct primitive filling slopes on $T$ give manifolds whose every $SL_2(\mathbb C)$ representation has abelian image if and only if $E$ admits that Seifert fibration? What additional hypotheses, if any, are required for these equivalences and for the curve-component convention to capture the relevant peripheral representations? An exceptional circle fiber has multiplicity greater than one.

## Open problem references

[Baldwin and Sivek, Question 1.8](https://arxiv.org/pdf/2405.19197v2)

## Status

Open generalization question. Baldwin–Sivek, Question 1.8, ask whether their sphere-knot theorems have analogues for knots in other $3$-manifolds, and specifically ask about an irreducible knot complement and the disk-base Seifert condition. Their wording does not explicitly specify that the ambient manifold is closed; closedness is an explicit restriction in the precise version above. The broader assertion for arbitrary compact ambient manifolds with boundary is false: the core of a solid torus has exterior $T^2\times I$, empty irreducible peripheral locus and abelian filling groups at every slope, but two boundary tori preclude the displayed disk-base fibration. Thus that broader branch is a counterexample, not an unresolved equivalence.

The cited source is arXiv:2405.19197v2, revised 28 November 2025 and published in Math. Ann. 394 (2026). The actual author search on 2026-10-19 found the source question and partial results, with no universal resolution identified. This is a bounded literature-search observation, not a claim that no later solution exists. No proof of the closed-manifold analogues or of a general peripheral-image dimension bound is asserted here.

## Remarks

[[cex-solid-torus-core-refutes-unqualified-compact-ambient-a-polynomial-analogue|The solid-torus-core counterexample]] preserves the refuted compact-with-boundary branch of the earlier formulation.
