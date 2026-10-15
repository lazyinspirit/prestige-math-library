---
id: ex-td-two-site-thermal-ensemble
kind: example
title: "Two independent two-level sites give a product thermal law"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps: [def-td-finite-microstate-model, pthm-td-finite-canonical-identities, pthm-td-independent-factorization]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  pthm-td-finite-canonical-identities: physical-result
  pthm-td-independent-factorization: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A calculated two-site finite product model with additive energy and no interaction; it is not an observation or a claim about interacting sites."
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3.1
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4.1 and 4.6
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Example

Let each site have states $0,1$ with energies $0,\varepsilon$, and take $T>0$ with $\varepsilon=k_{\mathrm B}T\log 2$. The composite has states $(n_1,n_2)\in\{0,1\}^2$ and additive energy $E=\varepsilon(n_1+n_2)$.

## Facts & Assumptions

**Given:** Two finite sites, additive energy, common positive temperature, and canonical sampling.

[F1] [[def-td-finite-microstate-model]]: the composite state set is the Cartesian product and additivity of energy is explicit model data.

[F2] [[pthm-td-finite-canonical-identities]]: each finite canonical law has probabilities proportional to $e^{-\beta E}$.

[F3] [[pthm-td-independent-factorization]]: under the explicit product and additive-energy assumptions, partition sums factor and the joint canonical law is the product of the two subsystem laws.

[A1] Set $\beta\varepsilon=\log 2$, hence the single-site excited-state weight is $q=1/2$.

## Verification

**Given:** The model data and $q=1/2$.

1.1 Each site has $Z_1=1+q=3/2$ and probabilities $(2/3,1/3)$. By [F3], $Z_{12}=Z_1^2=9/4$ and the joint probabilities of $(00,01,10,11)$ are $(4/9,2/9,2/9,1/9)$. [F1, F2, F3, A1, algebra]

2.1 The expected total occupation is the sum of the two marginal means, $1/3+1/3=2/3$, so the mean energy is $2\varepsilon/3$. This conclusion follows for the declared noninteracting product model only. [F2, F3, step 1.1, algebra] ∎
