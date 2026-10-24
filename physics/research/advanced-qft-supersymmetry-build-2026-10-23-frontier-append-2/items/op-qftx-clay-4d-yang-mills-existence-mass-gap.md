---
id: op-qftx-clay-4d-yang-mills-existence-mass-gap
kind: open-problem
title: Four-dimensional Yang–Mills existence and mass gap
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-yang-mills-clay-problem
dependency_level: 0
deps: []
dependency_roles: {}
sources:
  references:
    - title: "Clay Mathematics Institute, Yang-Mills & the Mass Gap, current problem page"
      url: "https://www.claymath.org/millennium/yang-mills-the-maths-gap/"
    - title: "Arthur Jaffe and Edward Witten, Quantum Yang-Mills Theory, in The Millennium Prize Problems, §§3–6"
      url: "https://www.claymath.org/library/monographs/MPPc.pdf"
    - title: "Arthur Jaffe, Constructive Quantum Field Theory, §7.3, For the Millennium: Gauge Theory in Four Dimensions"
      url: "https://arthurjaffe.net/Assets/pdf/CQFT.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
---

## Open problem

For every compact connected finite-dimensional Lie group $G$ whose Lie algebra $\mathfrak g$ is nonabelian and has no nonzero proper Lie ideals, construct a nontrivial four-dimensional quantum Yang–Mills theory with gauge group $G$. A Lie group is a smooth manifold with smooth multiplication and inversion, and its Lie algebra is its tangent space at the identity with the bracket induced by left-invariant vector fields. A Wightman realization means a theory satisfying the Wightman axioms: it supplies a Hilbert space $\mathcal H$, a unitary representation of translations and proper, orthochronous Lorentz isometries of Minkowski space $\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-,+,+,+)$, and local quantum fields as operator-valued tempered distributions on Schwartz test functions acting on a common dense invariant domain. The fields transform covariantly; gauge-invariant fields localized in regions whose points are spacelike separated, meaning $\eta(x-y,x-y)>0$, commute. Correlation functions are the vacuum expectation distributions of finite products of smeared fields. The self-adjoint Hamiltonian $H$ generating time translations has spectrum $\sigma(H)\subseteq[0,\infty)$, and there is a unique Poincaré-invariant vacuum vector $\Omega$ up to phase with $H\Omega=0$. Alternatively, a Euclidean construction gives Schwinger distributions, meaning Euclidean vacuum correlation distributions on $\mathbb R^4$, satisfying the Osterwalder–Schrader axioms (temperedness, Euclidean covariance, reflection positivity, permutation symmetry, and clustering) strongly enough for reconstruction of a Wightman theory. The required nontrivial gauge content includes local operator fields corresponding to gauge-invariant local polynomials in a smooth connection's curvature and its covariant derivatives, with short-distance correlations prescribed in a specified construction by asymptotic freedom (the perturbative prediction that the gauge coupling tends to zero at short distances) and perturbative renormalization. It includes a local stress-energy tensor whose charges generate spacetime translations and an operator product expansion, meaning a short-distance expansion of products of local fields in local fields. Here the curvature of a smooth local connection $A$ is $F_A=dA+\tfrac12[A\wedge A]$, and its covariant derivative on adjoint-valued forms is $D_A=d+[A,\cdot]$. The required mass gap is a finite number $\Delta>0$ such that $\sigma(H)\cap(0,\Delta)=\varnothing$, using units $c=\hbar=1$. Confinement is a separate question and is not part of this problem.

## Open problem references

[Clay Mathematics Institute, “Yang-Mills & the Mass Gap” (current problem and status page; checked 2026-10-23)](https://www.claymath.org/millennium/yang-mills-the-maths-gap/)

[Arthur Jaffe and Edward Witten, “Quantum Yang-Mills Theory,” in *The Millennium Prize Problems*, §§3–6, printed pp. 134–150](https://www.claymath.org/library/monographs/MPPc.pdf)

[Arthur Jaffe, “Constructive Quantum Field Theory,” §7.3, “For the Millennium: Gauge Theory in Four Dimensions,” PDF pp. 13–15](https://arthurjaffe.net/Assets/pdf/CQFT.pdf)

## Status

The Clay Mathematics Institute page was checked on 2026-10-23 and labels the problem unsolved, stating that no proof of the mass-gap property is known. Jaffe and Witten distinguish this existence-and-gap task from confinement and chiral symmetry breaking, which they describe as separate extensions. Their mathematical perspective records established constructive results mainly in lower dimensions or compact approximations; it says that the four-dimensional Yang–Mills construction on a compact four-torus is incomplete and that a uniform gap and the infinite-volume limit to $\mathbb R^4$ remain required. Jaffe's earlier lecture notes give an $SU(2)$ formulation and describe partial progress while leaving the infrared limit unresolved. These statements do not promote finite-regulator models, formal perturbation series, simulations, or lower-dimensional constructions to a continuum solution on $\mathbb R^4$.
