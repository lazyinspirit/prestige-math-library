---
id: def-td-scaled-products-and-comparison
kind: definition
title: Tagged scaled systems and separated products
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: The formal state and comparison bookkeeping for the declared family of separated bulk systems; mixed-composition transitions are excluded here and are defined separately.
deps: [def-td-adiabatic-accessibility, def-td-equilibrium-state-domain, post-td-bulk-additivity]
dependency_roles:
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A–II.C
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §2"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  precheck: n/a
dependency_level: 5
---

## Definition

Fix a family $I$ of primitive material labels. A tagged type $c\in I$ retains its identity even if another type has the same coordinate domain. For the accessibility/contact branch, select a fully scalable model family: for every declared type $c$ and every dimensionless $\lambda>0$, explicitly assume the tag $c^{(\lambda)}$ exists, $B_{c,\lambda}=D_c$, and $D_{c^{(\lambda)}}=\delta_\lambda(D_c)$, with $\delta_\lambda:D_c\to D_{c^{(\lambda)}}$ the coordinate-multiplication bijection. The inverse divides coordinates by $\lambda$. These are additional model conditions; the general, partial-domain postulate [[post-td-bulk-additivity]] alone does not supply them. On a declared energy/work chart $X_c$ the same condition means $X_{c^{(\lambda)}}=\lambda X_c$, scaling every numerical extensive coordinate and the fixed material amounts. Every finite separated product has the full Cartesian product of its constituent state domains. A finite separated compound is a finite tuple of tagged scaled systems, with permutation and reassociation identifications and an empty unit type. Its state is a tuple of constituent equilibrium states; its extensive coordinate tuple is the sum specified by [[post-td-bulk-additivity]] whenever the pair is admitted there.

Scaling a separated compound scales each factor. Adopt coherent preparation transport: $1x$, $x$, $s(tx)$ and $(st)x$ denote the same preparation after their declared tag transport, and scaling commutes with permutation, reassociation and finite separated product. Their raw tags remain distinct; the model declares these transports reversible under $\prec$, and transports of later joined types commute with the same operations. This is an explicit accessibility assumption, not an inference from coordinate multiplication. Merging or splitting copies of one preparation is reversible when A5 is adopted.

The formal composition vector of a compound records, for each primitive label $c$, the sum of its positive scale coefficients. Two compounds have the same composition exactly when these vectors agree. The distinct **formal mass** $m(A)$ is the sum of all scale coefficients in $A$, a dimensionless bookkeeping quantity; it is not physical mass in kilograms, mole amount, energy, or volume. Same-composition compounds have equal formal mass. For states $A,B$ of the same compound type, write $A\prec B$ when the declared adiabatic-accessibility relation of [[def-td-adiabatic-accessibility]] admits that endpoint comparison. This definition does not infer accessibility from coordinate addition.

An equal-composition comparison is a comparison between states of types with the same formal composition vector. The later reaction-network definition may separately admit transitions between distinct composition types, but the mathematical supplier still requires equal formal mass at both endpoints. A physical application must state how its channel preserves the chosen formal mass and separately record its dimensioned conservation balances. The empty unit has one state and formal mass zero. No identity is imposed between a primitive type and a scaled tag, or between two different decompositions of a compound, beyond the explicitly declared reassociation, permutation, and bulk-composition maps.
