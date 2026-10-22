---
id: ex-emg-fx-stationary-charge-mode
kind: example
title: A stationary Reissner–Nordström charge mode does not decay to zero
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-linearized-electrovac
  - def-emg-xs-geometric-electrovac
  - def-emg-xs-rn-data
  - lem-emg-lorentz-hodge-calculus
  - prop-emg-fx-gauge-linearized-solutions
  - thm-emg-xs-rn-verification
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-linearized-electrovac: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  prop-emg-fx-gauge-linearized-solutions: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 7, equations (7.106)–(7.113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "PDF pp. 208–210 (printed pp. 201–203): the exact dyonic Reissner–Nordström field, charge parameter and electric flux convention. The geometric normalization is that of the local supplier."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), Section 6.2"
      url: "https://arxiv.org/pdf/1904.04926"
      locator: "PDF pp. 51–55: parameter derivatives give non-radiating linearized Kerr–Newman modes; the local example below computes one electric-charge mode on a fixed exterior chart."
verification:
  precheck: pending
---

## Example

Fix $M>0$, $q_0>0$, $R_0>4M$, and a length $\ell_*>0$. Set the dimensionless parameter radius $\epsilon:=q_0/(2\ell_*)$ and $q(\lambda):=q_0+\lambda\ell_*$. Then $q(\lambda)>q_0/2>0$ for $|\lambda|<\epsilon$. On the fixed exterior $U=\mathbb R_{x^0}\times(R_0,\infty)\times S^2$, put
$$f_\lambda(r)=1-\frac{2M}{r}+\frac{q(\lambda)^2}{r^2},\qquad g_\lambda=-f_\lambda(dx^0)^2+f_\lambda^{-1}dr^2+r^2\gamma_{S^2},\qquad \mathcal F_\lambda=-\frac{q(\lambda)}{r^2}dx^0\wedge dr.$$
Then $h:=\partial_\lambda g_\lambda|_0$ and $f:=\partial_\lambda\mathcal F_\lambda|_0$ form a smooth stationary solution of the linearized geometric electrovacuum system at $(g_0,\mathcal F_0)$. Its electromagnetic perturbation is nonzero and its electric-flux variation through every outward coordinate sphere $S_r$ is $\partial_\lambda q_e(S_r)|_0=\ell_*$. Thus this exact mode does not tend to zero in time at fixed $r$; an unqualified claim that every linearized component decays to zero without retaining or subtracting parameter modes is false.

## Example references

[[def-emg-xs-rn-data]]

[[lem-emg-lorentz-hodge-calculus]]

[[thm-emg-xs-rn-verification]]

[[prop-emg-fx-gauge-linearized-solutions]]

## Facts & Assumptions

**Given:** $M>0$, $q_0>0$, $R_0>4M$, $\ell_*>0$, and the family and fixed exterior domain in the Example.

[F1] [[def-emg-xs-rn-data]]: for electric charge $q$ and zero magnetic charge, the geometric Reissner–Nordström metric and field are $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ and $\mathcal F=-q r^{-2}dx^0\wedge dr$.

[F2] [[thm-emg-xs-rn-verification]]: for every real mass and electric charge, this datum solves $d\mathcal F=d(\star_g\mathcal F)=0$ and $\operatorname{Ric}=2Q(\mathcal F)$ wherever $r>0$ and $f\ne0$.

[F3] [[def-emg-xs-geometric-electrovac]]: $q_e(S)=(4\pi)^{-1}\int_S\star_g\mathcal F$ for the specified oriented sphere.

[F4] [[lem-emg-lorentz-hodge-calculus]]: $({\star_g\mathcal F})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}\mathcal F^{cd}$ in the positive spacetime orientation.

[F5] [[prop-emg-fx-gauge-linearized-solutions]]: a smooth derivative of exact solutions on one fixed domain solves the linearized system.

[A1] The geometric electrovac suppliers retain the background assumption $\mathrm{AC}_\omega$. No additional choice principle is used for this explicit parameter family. ([[def-countable-choice]])

## Verification

**Given:** The constants and geometric field family in the Example, with $\lambda$ dimensionless and $q(\lambda)$ a length parameter.

1.1 For $r>R_0>4M$, $f_\lambda(r)>1-2M/r>1/2$, so the metric is Lorentzian and the fixed exterior domain avoids every zero of $f_\lambda$. The parameter family is smooth on $(-\epsilon,\epsilon)\times U$ and is the $q_m=0$ Reissner–Nordström family of [F1]. By [F2], every member is an exact geometric electrovacuum on the same $U$. [A1, given, F1, F2, algebra]

2.1 Differentiating the displayed formulas gives $\dot f_0=2q_0\ell_*/r^2$,
$$h=-\dot f_0\,(dx^0)^2-f_0^{-2}\dot f_0\,dr^2,\qquad f=-\frac{\ell_*}{r^2}dx^0\wedge dr.$$
These tensors are smooth on $U$, independent of $x^0$, and $f\ne0$. By [F5] the pair solves the linearized equations. [given, F1, F2, F5, step 1.1, algebra]

3.1 For any $\lambda$, on the fixed exterior $f_\lambda>1/2$, so $g^{00}=-f_\lambda^{-1}$, $g^{rr}=f_\lambda$, and $|\det g|=r^4\sin^2\theta$. Hence $\mathrm{vol}_{g_\lambda}=r^2\sin\theta\,dx^0\wedge dr\wedge d\theta\wedge d\phi$. The two-form has $({\mathcal F_\lambda})_{0r}=-q(\lambda)/r^2$, so $({\mathcal F_\lambda})^{0r}=q(\lambda)/r^2$. Using the orientation in [F1] and the component Hodge formula [F4] gives $\star_{g_\lambda}\mathcal F_\lambda=q(\lambda)\sin\theta\,d\theta\wedge d\phi=q(\lambda)\omega_{S^2}$. The outward coordinate sphere has this positive area orientation, and direct integration in polar coordinates gives $\int_{S_r}\omega_{S^2}=\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi$. By [F3], $q_e(S_r)=q(\lambda)$, so differentiating yields $\partial_\lambda q_e(S_r)|_0=\ell_*>0$. Since the nonzero component $f_{x^0r}=-\ell_*/r^2$ is independent of $x^0$, it cannot converge to zero as time tends to either infinity at any fixed $r>R_0$. This is a mathematical counterexample to universal componentwise decay without parameter-mode subtraction, not an assertion about physical observations or nonlinear stability. [F1, F3, F4, step 2.1, algebra] ∎

