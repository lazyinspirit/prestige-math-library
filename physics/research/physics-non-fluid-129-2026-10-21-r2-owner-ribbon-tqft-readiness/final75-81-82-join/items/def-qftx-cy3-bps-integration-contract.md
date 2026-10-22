---
id: def-qftx-cy3-bps-integration-contract
kind: definition
title: "CY3, CoHA, and protected-state extension contract"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-qftx-hall-spectrum-generator
  - prop-qftx-hall-spectrum-invariance
  - def-axiom-of-choice
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-quiver-motivic-quantum-torus
  - def-untwisted-quiver-cohomological-hall-algebra
dependency_roles:
  def-qftx-hall-spectrum-generator: mathematical-premise
  prop-qftx-hall-spectrum-invariance: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-quiver-potential-and-monodromic-vanishing-cycle-data: mathematical-premise
  def-motivic-hall-algebra-of-a-finite-quiver: mathematical-premise
  def-quiver-motivic-quantum-torus: mathematical-premise
  def-untwisted-quiver-cohomological-hall-algebra: mathematical-premise
justified_by: []
axiom_use: "The referenced quiver-potential coefficient construction and rational equivariant Borel–Moore CoHA explicitly assume AC. No finite-field Hall theorem or example on this page uses AC."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants"
      url: "https://arxiv.org/pdf/1611.03696"
      locator: "Section 3.5 and the scope distinction in Sections 4.4–4.6: CY3 integration/orientation-data premises are separate from finite-field hereditary Hall factorization."
verification:
  precheck: pending
---

## Definition

The finite-field generator and wall-crossing equality defined earlier on
this A page do not themselves define a Calabi–Yau-threefold
Donaldson–Thomas invariant, a cohomological Hall invariant, or a physical
BPS index. Define a **CY3/CoHA protected-state bridge package** to be the
complete data below for one specified model:

1. A specified 3-Calabi–Yau category $\mathcal C$: a $k$-linear triangulated
   or dg category with finite-dimensional Hom spaces in the stated subcategory
   and functorial perfect dualities
   $\operatorname{Hom}_{\mathcal C}(E,F[i])\cong
   \operatorname{Hom}_{\mathcal C}(F,E[3-i])^*$ for all stated objects and
   degrees. Alternatively specify a finite quiver $Q$ together with a
   potential $W$, a finite linear combination of directed cycles modulo
   cyclic rotation, and give the exact Jacobian, derived, or critical-locus
   category and coefficient data constructed from $(Q,W)$.

2. A stability package consisting of a numerical charge lattice $\Gamma$, a
   homomorphism $Z:\Gamma\to\mathbb C$, a definition of semistability and its
   Harder–Narasimhan property, and the support property: for a specified norm
   on $\Gamma\otimes_{\mathbb Z}\mathbb R$, some constant $C>0$ satisfies
   $|Z(\gamma)|\ge C\|\gamma\|$ for every nonzero semistable class $\gamma$.
   Any alternative support-property convention must be stated exactly.

3. The orientation data required by the chosen motivic or cohomological
   integration theory, when that theory requires it. This means a specified
   square root of its determinant line, together with the compatibility maps
   under the exact-sequence operations and the conventions required by that
   theory; the name alone is not the data.

4. A specified completed motivic or cohomological Hall algebra, its
   coefficient theory and completion, and a proved continuous integration
   homomorphism to a named completed quantum torus. The motivic stack-function
   construction uses convolution along the exact-sequence correspondence:
   the first factor is the quotient and the second is the subrepresentation.
   The rational equivariant Borel–Moore CoHA uses
   $\mathcal H_{\mathbf d}=
   H_{*+2\dim G_{\mathbf d}}^{\mathrm{BM},G_{\mathbf d}}
   (\operatorname{Rep}_Q(\mathbf d);\mathbb Q)$ and the product
   $\alpha*\beta=p_*q^!(\alpha\boxtimes\beta)$, where the first factor is the
   subrepresentation, the second is the quotient, and the homological shift
   is $-2\chi_Q(\mathbf b,\mathbf a)$ when the subrepresentation has
   dimension $\mathbf a$ and the quotient has dimension $\mathbf b$.
   State the exact coefficient map, Euler or skew form, sign, square-root and
   orientation conventions, and every hypothesis of the integration theorem.
   These constructions remain distinct from finite-field groupoid
   integration.

5. For a physical interpretation, a named four-dimensional supersymmetric
   model and its protected sector: specify the state space or supertrace being
   counted, the charges and preserved supersymmetry, and a proved comparison
   identifying that protected index with the selected algebraic invariant.
   This comparison is an additional dictionary; it is not supplied by the
   finite-field factorization.

This definition is a list of required inputs, not an assertion that any bridge
package exists or that arbitrary Hall modules are BPS Hilbert spaces. The
displayed support property is the convention used here; any cited source using
different hypotheses must be translated and checked before use.
The rational equivariant Borel–Moore construction and standard quiver-potential
coefficient data referenced below assume the Axiom of Choice; this contract
records that supplier assumption and does not use it to establish a
finite-field Hall result.

## Definition references

[[def-qftx-hall-spectrum-generator]]

[[prop-qftx-hall-spectrum-invariance]]

[[def-axiom-of-choice]]

[[def-quiver-potential-and-monodromic-vanishing-cycle-data]]

[[def-motivic-hall-algebra-of-a-finite-quiver]]

[[def-quiver-motivic-quantum-torus]]

[[def-untwisted-quiver-cohomological-hall-algebra]]
