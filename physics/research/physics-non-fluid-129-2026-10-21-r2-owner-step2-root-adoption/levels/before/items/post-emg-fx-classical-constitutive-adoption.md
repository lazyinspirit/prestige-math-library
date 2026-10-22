---
id: post-emg-fx-classical-constitutive-adoption
kind: postulate
title: Selected effective classical constitutive regime
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emg-fx-nonlinear-lagrangian
dependency_roles:
  def-emg-fx-nonlinear-lagrangian: formulation-prerequisite
physical_scope: >
  A phenomenological source-free classical constitutive model on a fixed smooth
  Lorentzian background, restricted to a declared small-invariant domain for
  one selected polynomial Lagrangian. No QED coefficient matching, derivative
  expansion, hyperbolicity, causality, solution existence, gravitational
  backreaction, measurement, or empirical validity is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and its Applications, arXiv:2112.12118v3 (2022), complete 26-page review"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), the two Lorentz invariants and generic L(S,P) model; §3.1 distinguishes the Heisenberg–Euler coefficients and their low-energy quantum origin. No such coefficients are adopted here."
    - title: "Gerald V. Dunne, Heisenberg-Euler Effective Lagrangians: Basics and Extensions, complete 82-page lecture review (2004)"
      url: "https://arxiv.org/pdf/hep-th/0406216"
      locator: "§1.1, the constant-background one-loop QED effective action; §§1.2.4 and 1.3, the low-energy and weak-field expansions and derivative corrections. These support the scope boundary only; no QED coefficient is imported."
---

## Postulate

Use a smooth, boundaryless, oriented and time-oriented Lorentzian four-manifold $(M,g,N,o)$ with signature $(-,+,+,+)$, the metric-selected connection and the independent orientation $o$, and a fixed bundle sector with smooth connection and smooth real curvature two-form $F$ satisfying $dF=0$, as in the nonlinear constitutive definition linked below. Define its invariants

$$X:=-\frac14F_{ab}F^{ab},\qquad Y:=-\frac14F_{ab}(\star_gF)^{ab},$$

and fixed-bundle convention of the nonlinear constitutive definition linked below. Choose fixed real parameters $(\alpha,\beta)\ne(0,0)$ and a dimensionless $\delta\in(0,1)$. Adopt, as a classical source-free constitutive model on field configurations whose invariant values lie in

$$\mathcal D_{\alpha,\beta,\delta}:=\{(X,Y)\in\mathbb R^2:\ |\alpha X|+|\beta Y|<\delta\},$$

the Lagrangian density

$$L_{\mathrm{eff}}(X,Y):=X+\alpha X^2+\beta Y^2.$$

The corresponding constitutive tensor in the supplier's convention is

$$H^{ab}=(1+2\alpha X)F^{ab}+2\beta Y(\star_gF)^{ab}.$$

Here $\star_g$ is the Hodge map determined by the metric and independent orientation of the Lorentzian geometry. This postulate adopts the displayed constitutive assignment, but does not adopt or assert a solution of a nonlinear field equation.

The pair $(\alpha,\beta)$ is fixed within a selected model but otherwise arbitrary; this item assigns no numerical values. If the components of $F$ have unit $\mathfrak F$, then $X,Y,L_{\mathrm{eff}}$ have unit $\mathfrak F^2$ and $\alpha,\beta$ have unit $\mathfrak F^{-2}$, making the domain condition dimensionless. This is the mathematical normalization of the supplier, not an SI action prefactor.

The domain $\mathcal D_{\alpha,\beta,\delta}$ is an adopted regime label, not a proved error bound. No quantum origin, QED matching, coefficient value, derivative-correction control, characteristic-cone condition, hyperbolicity, causality, or solution-existence claim is included. The formal nonlinear field equations, if separately derived under the supplier's compact-variation hypotheses, do not establish that this model describes nature.

## Postulate references

[[def-emg-fx-nonlinear-lagrangian]]

## Scope and limitations

This is a selected phenomenological classical model with no empirical premise. The arbitrary parameters and invariant-domain threshold are declared inputs. Any claim of low-energy quantum derivation, approximation error, semiclassical consistency, gravitational coupling, or observed validity requires separate hypotheses and evidence.
