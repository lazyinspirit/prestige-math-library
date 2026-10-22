---
id: ex-gr-fx02-1
kind: example
title: "Flat-torus vacuum data from a constant TT tensor"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-fx-conformal-constraint-data
  - thm-gr-fx-lichnerowicz-reduction
  - prop-gr-fx-constant-constraint-solution
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-dual-connection
  - def-product-connection-on-tensor-and-hom-bundles
  - thm-curvature-is-a-type-one-three-tensor
  - def-countable-choice
  - def-gr-periodic-torus-and-sobolev-spaces
dependency_roles:
  def-gr-fx-conformal-constraint-data: mathematical-premise
  thm-gr-fx-lichnerowicz-reduction: mathematical-premise
  prop-gr-fx-constant-constraint-solution: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-dual-connection: mathematical-premise
  def-product-connection-on-tensor-and-hom-bundles: mathematical-premise
  thm-curvature-is-a-type-one-three-tensor: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
physical_scope: "Exact mathematical example of compact flat-torus vacuum constraint data with nonzero transverse-traceless part; it makes no empirical claim or spacetime-development assertion."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant §§8.2.2–8.2.4 inspected, including the TT equation and CMC specialization. The flat-torus constants in this example are verified locally."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; complete relevant §4.1 inspected, including equations (47)–(56). The displayed torus constants are checked directly."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $\Sigma=\mathbb T^3_{2\pi}$ have dimensionless periodic coordinates $x^i$
and conformal metric $\widetilde h=L_*^2\sum_{i=1}^3(dx^i)^2$, where
$L_*>0$ is a length. Let $\widetilde\sigma$ have constant covariant
components $\widetilde\sigma_{11}=a_*$, $\widetilde\sigma_{22}=-a_*$ and all
other components zero, where $a_*>0$ is a length. Fix a nonzero constant
$\tau$ with units $\mathrm m^{-1}$. Then
$|\widetilde\sigma|_{\widetilde h}^2=A:=2a_*^2/L_*^4>0$ and
$\widetilde R=0$. The unique positive constant solution
$\phi_0=(3A/(2\tau^2))^{1/12}$ gives
$h=\phi_0^4\widetilde h$ and
$K=\phi_0^{-2}\widetilde\sigma+(\tau/3)h$, which satisfy the vacuum
constraint equations. The tracefree part of $K$ is nonzero.

## Example references

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-fx-lichnerowicz-reduction]]

[[prop-gr-fx-constant-constraint-solution]]

[[prop-christoffel-formula-for-the-levi-civita-connection]]

[[def-dual-connection]]

[[def-product-connection-on-tensor-and-hom-bundles]]

[[thm-curvature-is-a-type-one-three-tensor]]

[[def-countable-choice]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

## Facts & Assumptions

**Given:** The flat torus, $L_*>0$, $a_*>0$, and a constant $\tau\ne0$ with the units and coordinate convention in the Example. Assume $\mathrm{AC}_\omega$ for the torus supplier and the inherited embedded Lorentzian constraint interpretation.

[A1] [[def-countable-choice]], [[def-gr-fx-conformal-constraint-data]]: $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function; the torus supplier assumes it for its quotient convention, and the conformal-data definition requires it for an embedded Lorentzian interpretation.

[F1] [[def-gr-fx-conformal-constraint-data]]: $\widetilde D$ is the Levi-Civita connection of $\widetilde h$; TT means $\widetilde h^{ij}\widetilde\sigma_{ij}=0$ and $\widetilde D^i\widetilde\sigma_{ij}=0$; and the ansatz is $h=\phi^4\widetilde h$, $K=\phi^{-2}\widetilde\sigma+(\tau/3)h$.

[F2] [[thm-gr-fx-lichnerowicz-reduction]]: the momentum constraint vanishes for this TT, constant-trace ansatz, and the Hamiltonian constraint is equivalent to the displayed Lichnerowicz equation.

[F3] [[prop-gr-fx-constant-constraint-solution]]: when $\widetilde R=0$ and $|\widetilde\sigma|_{\widetilde h}^2=A>0$ is constant, the unique positive constant solution for $\tau\ne0$ is $(3A/(2\tau^2))^{1/12}$.

[F4] [[prop-christoffel-formula-for-the-levi-civita-connection]]: in a chart, $\Gamma^k{}_{ij}=\tfrac12\widetilde h^{k\ell}(\partial_i\widetilde h_{j\ell} +\partial_j\widetilde h_{i\ell}-\partial_\ell\widetilde h_{ij})$.

[F5] [[def-dual-connection]], [[def-product-connection-on-tensor-and-hom-bundles]]: the covariant derivative on covariant tensor fields obeys the dual and product Leibniz rules.

[F6] [[thm-curvature-is-a-type-one-three-tensor]]: curvature is tensorial, so its components in a coordinate basis determine it pointwise.

[F7] [[def-gr-periodic-torus-and-sobolev-spaces]]: $\mathbb T^3_{2\pi}=(\mathbb R/2\pi\mathbb Z)^3$ has the quotient/product topology; smooth maps are those with smooth periodic lifts to $\mathbb R^3$. The angular expressions here are local coordinates and invariant differentials under translations by $2\pi\mathbb Z^3$.

## Verification

1.1 The displayed constant metric and tensor components are invariant under the quotient translations of [F7], so they define smooth tensor fields on the torus. The metric is positive definite because $L_*>0$. The metric components are constant, so [F4] makes the Christoffel symbols of $\widetilde h$ vanish in the periodic coordinates. Thus $\widetilde D_{\partial_i}\partial_j=0$ and $[\partial_i,\partial_j]=0$; the curvature definition in [F1] gives $\widetilde R(\partial_i,\partial_j)\partial_k=0$ for all coordinate indices. By tensoriality [F6], the curvature and its scalar trace vanish, so $\widetilde R=0$. The dual and tensor-factor rules in [F5] give $(\widetilde D_i\widetilde\sigma)_{k\ell}=\partial_i\widetilde\sigma_{k\ell} -\widetilde\Gamma^m{}_{ik}\widetilde\sigma_{m\ell} -\widetilde\Gamma^m{}_{i\ell}\widetilde\sigma_{km}=0$, since the components are constant and the Christoffel symbols vanish. Hence $\widetilde D^i\widetilde\sigma_{ij}=0$, and its trace is $L_*^{-2}(a_*-a_*+0)=0$. Its squared norm is $L_*^{-4}(a_*^2+a_*^2)=2a_*^2/L_*^4=A>0$; therefore the input tensor is TT with the stated constant norm. [given, A1, F1, F4, F5, F6, F7, algebra]

2.1 By [F3], the positive constant $\phi_0=(3A/(2\tau^2))^{1/12}$ solves the scalar constraint equation. The reduction in [F2] then gives both vacuum constraints for the constructed $(h,K)$. From [F1] and step 1.1, $\operatorname{tr}_hK=\tau$, so its tracefree part is $K-\frac13(\operatorname{tr}_hK)h=\phi_0^{-2}\widetilde\sigma\ne0$, because $a_*>0$ and $\phi_0>0$. Varying $L_*,a_*,\tau$ over the stated ranges gives the claimed parameterized family. [A1, F1, F2, F3, step 1.1, algebra] ∎
