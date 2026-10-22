---
id: prop-gr-fx-constant-constraint-solution
kind: proposition
title: "Exact positive constant solution of the CMC constraint equation"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-fx-conformal-constraint-data
  - thm-gr-fx-lichnerowicz-reduction
  - thm-nth-roots-exist
  - def-rational-power
  - def-countable-choice
dependency_roles:
  def-gr-fx-conformal-constraint-data: mathematical-premise
  thm-gr-fx-lichnerowicz-reduction: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Exact algebraic solution of the zero-cosmological-constant CMC vacuum constraint equation in the stated constant-coefficient case; it is not a universal solvability theorem."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant §§8.2.2–8.2.4 inspected, including equations (8.5)–(8.8) and the following constant-mean-curvature discussion."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; the relevant §4.1 discussion and equations (47)–(56) were inspected for the vacuum CMC Lichnerowicz equation and the caution that general free data need not yield a solution."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let the vacuum conformal data be as in the definition, so that
$\widetilde\sigma$ is TT with respect to $\widetilde h$. Suppose the
conformal metric has $\widetilde R=0$ and
$|\widetilde\sigma|_{\widetilde h}^2=A$ is a positive constant, with constant
$\tau\ne0$. Then the Lichnerowicz equation has exactly one positive constant
solution,
$$\phi_0=\left(\frac{3A}{2\tau^2}\right)^{1/12}.$$
With a fixed length unit, $[A]=[\tau^2]=\mathrm m^{-2}$, so $\phi_0$ is
dimensionless. Uniqueness is only among positive constant solutions; no
uniqueness claim is made for arbitrary positive functions.

## Statement references

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-fx-lichnerowicz-reduction]]

[[thm-nth-roots-exist]]

[[def-rational-power]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Vacuum conformal data as in the definition, including a smooth TT
covariant tensor $\widetilde\sigma$ on a nonempty compact smooth
three-manifold, with $\widetilde R=0$, $|\widetilde\sigma|_{\widetilde h}^2=A>0$,
and constant $\tau\ne0$. Assume $\mathrm{AC}_\omega$ for the inherited
embedded Lorentzian constraint interpretation.

[A1] [[def-countable-choice]], [[def-gr-fx-conformal-constraint-data]]:
$\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets
has a choice function; the local definition requires it only for an embedded
Lorentzian interpretation, not for this algebraic solution.

[F1] [[def-gr-fx-conformal-constraint-data]]: $\phi$ is positive and
dimensionless, $\tau$ is the constant trace parameter, and the zero-$\Lambda$
vacuum scalar residual is defined using $\widetilde R$ and
$|\widetilde\sigma|_{\widetilde h}^2$; the input $\widetilde\sigma$ is
symmetric, trace-free and divergence-free with respect to $\widetilde h$.

[F2] [[thm-gr-fx-lichnerowicz-reduction]]: the scalar residual vanishes exactly
when $-8\widetilde\Delta\phi+\widetilde R\phi-
|\widetilde\sigma|_{\widetilde h}^2\phi^{-7}+
(2/3)\tau^2\phi^5=0$.

[F3] [[thm-nth-roots-exist]]: every positive real number has a unique positive
twelfth root.

[F4] [[def-rational-power]]: for a positive base,
$x^{1/12}$ denotes its unique positive twelfth root.

## Proof

1.1 For a constant $\phi>0$, $\widetilde\Delta\phi=0$. Substituting
$\widetilde R=0$ and $|\widetilde\sigma|_{\widetilde h}^2=A$ in [F2], its
equation becomes $-A\phi^{-7}+(2/3)\tau^2\phi^5=0$. Multiplication by
$\phi^7>0$ is reversible, so this is equivalent to
$\phi^{12}=3A/(2\tau^2)$.
[A1, F1, F2, algebra]

2.1 The right side $3A/(2\tau^2)$ is positive because $A>0$ and $\tau\ne0$.
By [F3], it has exactly one positive twelfth root, and by [F4] that root is
$(3A/(2\tau^2))^{1/12}$. Thus this is the unique positive constant solution.
[F3, F4, step 1.1, algebra] ∎

## Remarks

This is an exact algebraic solution for the stated constant seed data. It does
not establish solvability for other conformal metrics or TT tensors.
