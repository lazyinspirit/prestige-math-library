---
page: qm-identical-particles-and-exclusion-examples
title: "Qm Identical Particles And Exclusion — Examples"
status: draft
library: physics
items: []
examples:
  - texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry
  - ex-nrqm-identical-particles-exchange-versus-coulomb-terms
  - rem-nrqm-identical-particles-examples-scope-limits
requires:
  - qm-identical-particles-and-exclusion
  - qm-angular-momentum-and-spin
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-math-composites
  - qm-math-coulomb
  - qm-math-fock-and-equilibrium
---

The companion page to [[qm-identical-particles-and-exclusion]] collects two
conditional computations of the declared identical-particle models and a scope
remark.
[[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]] decomposes
the antisymmetric two-particle sector of a declared spin-half species with a
finite orbital factor: the regrouping unitary carries the sector onto the
orthogonal sum of a spin-singlet part with symmetric orbital factor and a
spin-triplet part with antisymmetric orbital factor, and the antisymmetrised
product of two orthonormal one-particle states is computed explicitly,
including the pure equal-amplitude superposition of the two components for
opposite spin orientations.
[[ex-nrqm-identical-particles-exchange-versus-coulomb-terms]] specialises a
two-orbital model with a declared Coulomb-form interaction and shows that the
pair-interaction expectations of the declared singlet and parallel-spin
triplet preparations are $D+X$ and $D-X$, with $D,X$ in joules. Here $X>0$
when the real
normalized orthogonal orbitals $u,v\in W^{1,2}(\mathbb R^3)\cap L^2(\mathbb R^3)$
([[def-sobolev-space-wkp-and-its-norm]],
[[def-l-p-space-as-a-quotient-by-null-functions]]) have product $uv$ nonzero as
an $L^1$ class, so the triplet lies lower by twice the exchange integral in the
declared model.
[[rem-nrqm-identical-particles-examples-scope-limits]] records what these
computations establish, the model assignments they rest on and what they do not
claim.
