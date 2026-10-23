---
id: post-fd-navier-slip-wall-law
kind: postulate
title: "Adopted Navier friction law for a stationary wall"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - post-fd-boundary-data
dependency_roles:
  post-fd-continuum-balances: formulation-prerequisite
  post-fd-boundary-data: operational-prerequisite
physical_scope: >-
  An adopted smooth stationary impermeable wall law for the incompressible
  Newtonian branch; no universality, measured coefficient, roughness derivation,
  or moving-wall slip law is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gui-Qiang Chen and Zhongmin Qian, A Study of the Navier-Stokes Equations with the Kinematic and Navier Boundary Conditions"
      url: "https://arxiv.org/pdf/0901.0147"
      locator: "arXiv:0901.0147v1, §1 equations (1.1), (1.3)–(1.4), and §2 equation (2.5) / Proposition 2.1, PDF pp. 1–5. The paper uses slip length ζ>0 and density-normalized viscosity; with σ=−pI+2ηD the friction coefficient here is β=η/ζ."
verification:
  precheck: pending
physics_review:
  formulation:
    verdict: pass
    evidence: "The statement defines the stationary wall, outward unit normal, tangential projection, stress traction convention, impermeability condition, friction coefficient β and its SI units."
  scope:
    verdict: pass
    evidence: "The scope is limited to a smooth stationary impermeable wall in the incompressible Newtonian branch; it makes no universal applicability or measured-coefficient claim."
  sources:
    verdict: pass
    evidence: "Chen and Qian, arXiv:0901.0147v1, §1 equations (1.3)–(1.4) and §2 equation (2.5) were read in full on PDF pp. 1–5. Their slip length ζ and density-normalized viscosity give β=η/ζ under the stated stress convention."
  non_derivation:
    verdict: pass
    evidence: "The boundary law is explicitly adopted as a conditional model assumption; it is not derived from the momentum equation or claimed to hold for all materials."
---

## Postulate

Let $\Omega\subset\mathbb R^3$ be a bounded domain with $C^2$ boundary, fixed in an inertial Euclidean frame, and let $n$ be its outward unit normal. On $\partial\Omega$, let $u$ be the trace of a $C^1$ fluid-velocity field in metres per second and let $\sigma$ be the Cauchy-stress tensor in pascals, with traction on the fluid defined by $\sigma n$. For a vector $a$, define its tangential projection by $a_\tau:=a-(a\cdot n)n$. Adopt impermeability $u\cdot n=0$ and the linear friction wall law

$$ (\sigma n)_\tau=-\beta u_\tau,$$

where $\beta\ge0$ is a constant with units pascal-seconds per metre. In the incompressible Newtonian branch with constant dynamic viscosity $\eta>0$ in pascal-seconds, this law corresponds for finite slip length $\ell_s>0$ to $\beta=\eta/\ell_s$; $\beta=0$ is the zero-tangential-traction endpoint. This is a selected wall model, not a consequence of interior balance equations, a measured value of $\beta$, or a claim that any material or wall universally obeys it.

## Postulate references

[Chen and Qian, *A Study of the Navier–Stokes Equations with the Kinematic and Navier Boundary Conditions*, arXiv:0901.0147v1, §§1–2](https://arxiv.org/pdf/0901.0147)
