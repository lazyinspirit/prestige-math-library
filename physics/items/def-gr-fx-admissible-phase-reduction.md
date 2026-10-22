---
id: def-gr-fx-admissible-phase-reduction
kind: definition
title: Admissible presymplectic reduction and Hamiltonian generators
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-fx-covariant-presymplectic-current
  - prop-gr-fx-field-space-closedness
  - def-symplectic-form-and-symplectic-manifold
  - prop-symplectic-reduction-of-a-coisotropic-vector-subspace
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - def-poisson-bracket-on-a-symplectic-manifold
  - def-immersion-submersion-and-constant-rank-map
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  prop-gr-fx-field-space-closedness: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  prop-symplectic-reduction-of-a-coisotropic-vector-subspace: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-immersion-submersion-and-constant-rank-map: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §§1.3–1.4"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §2"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $\mathcal S$ be a specified finite-dimensional smooth solution manifold
with specified admissible variations and boundary conditions, and let
$\Omega$ be a smooth closed two-form on $\mathcal S$, obtained by restricting
an integrated form $\Omega_\Sigma$ from the chosen covariant variation data.
The pair $(\mathcal S,\Omega)$ is **presymplectic** when $\Omega$ is allowed
to be degenerate. At $p\in\mathcal S$, its pointwise null space is
$$\ker\Omega_p:=\{v\in T_p\mathcal S:\Omega_p(v,w)=0 \text{ for every }w\in T_p\mathcal S\}.$$
A **presymplectic reduction** is defined here only when there is a specified
smooth Hausdorff manifold $\mathcal R$ and a surjective submersion
$q:\mathcal S\to\mathcal R$ with connected fibers such that
$$\ker(dq_p)=\ker\Omega_p\qquad(p\in\mathcal S),$$
where $\ker(dq_p)$ consists of tangent vectors mapped to zero by the
differential. This condition makes the quotient fibers exactly the connected
directions annihilated by $\Omega$. The reduction further requires a smooth
closed nondegenerate two-form $\bar\Omega$ on $\mathcal R$ satisfying
$q^*\bar\Omega=\Omega$. For a smooth vector field $X$ and smooth function
$H$ on a specified phase space, the Hamiltonian convention is
$\iota_X\Omega=dH$.

## Definition references

[Symplectic form and symplectic manifold](https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf)

[Symplectic reduction of a coisotropic vector subspace](https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf)

[Hamiltonian vector field and Hamiltonian function](https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf)

[[def-gr-fx-covariant-presymplectic-current]]

[[prop-gr-fx-field-space-closedness]]

[[def-symplectic-form-and-symplectic-manifold]]

[[prop-symplectic-reduction-of-a-coisotropic-vector-subspace]]

[[def-hamiltonian-vector-field-and-hamiltonian-function]]

[[def-poisson-bracket-on-a-symplectic-manifold]]

[[def-immersion-submersion-and-constant-rank-map]]

## Remarks

The finite-dimensional proposition for a coisotropic vector subspace applies
to tangent linear models only. This definition does not establish a smooth
quotient of an infinite-dimensional gravitational solution space. No falloff, boundary
condition, constant-rank property, or existence of such a quotient is
asserted here. These classical identities construct no measure, Hilbert
space, or anomaly-free quantization. Thermal first-law and entropy
interpretations are assigned to thermodynamics and general relativity;
topological quantum field theory quantization is assigned to quantum field
theory.
