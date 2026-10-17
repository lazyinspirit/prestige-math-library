---
id: pthm-csm-isobaric-response-identities
kind: physics-theorem
title: "Isobaric volume and enthalpy fluctuations"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-isobaric-preparation
  - thm-csm-exponential-normalization-covariance
  - def-td-si-quantities
dependency_roles:
  post-csm-isobaric-preparation: physical-assumption
  thm-csm-exponential-normalization-covariance: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Finite isothermal-isobaric preparation with fixed declared joint reference, positive temperature and pressure, and uniform local envelopes for volume and enthalpy moments."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Concordia, CHEM 630P Statistical Mechanics Part 1, complete lecture notes, NPT ensemble section"
      url: "https://mypage.concordia.ca/faculty/glamoure/pdfs/statmech_part1.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

For the joint preparation of [[post-csm-isobaric-preparation]], write $H=H_N$
for its Hamiltonian and set $B=H+P_{\rm ext}V$. Suppose the local
exponential envelopes hold for
$(B,V)$ on the measurable finite-energy set $S_H:=\{H<\infty\}$, with the
joint reference restricted to $S_H$. The Gibbs weight is zero off $S_H$;
there $B$ and $V$ are finite real-valued statistics and the restricted
reference remains sigma-finite. At fixed $T>0$ and $P_{\rm ext}>0$,
$$\partial_{P_{\rm ext}}\log\Delta=-\beta\langle V\rangle,\qquad \partial_{P_{\rm ext}}\langle V\rangle=-\beta\operatorname{Var}(V),$$
$$-\partial_\beta\log\Delta\big|_{P_{\rm ext}}=\langle B\rangle,\qquad C_P:=\partial_T\langle B\rangle\big|_{P_{\rm ext}} =\frac{\operatorname{Var}(B)}{k_BT^2}\ge0.$$
When $\langle V\rangle>0$, the model isothermal compressibility
$\kappa_T:=-\langle V\rangle^{-1}\partial_{P_{\rm ext}}\langle V\rangle$
equals $\beta\operatorname{Var}(V)/\langle V\rangle$. These are finite
preparation responses for the specified $dV/V_0$ reference; they need not
equal macroscopic response functions absent an additional limit argument.

## Facts & Assumptions

**Given:** The adopted joint volume-phase law, positive finite normalizer, fixed reference data and uniform local exponential-moment envelopes.

[A1] The pressure prior is $dV/V_0$ and the normalizer is positive finite by the adopted [[post-csm-isobaric-preparation]]. The local exponential envelopes on $S_H$ dominating the required powers of $B$ and $V$ are the additional hypotheses in the Statement.

[A2] $H$, the shape reference and $V_0$ are temperature independent, and $\beta=(k_BT)^{-1}$ with $k_B>0$ ([[def-td-si-quantities]]).

[F1] Under the common envelope, derivatives of log normalizers are means and covariances of their sufficient statistics ([[thm-csm-exponential-normalization-covariance]]).

## Proof

**Given:** [A1]–[A2] and the joint preparation and exponential-derivative interfaces [F1].

1.1 In $\Delta=\int e^{-\beta H-\beta P_{\rm ext}V}d\nu$, differentiate with respect to $P_{\rm ext}$ using [F1], with statistic $V$ and coefficient $-\beta P_{\rm ext}$. This gives $\partial_P\log\Delta=-\beta\langle V\rangle$. Differentiating that expectation once more gives $\partial_P\langle V\rangle=-\beta\operatorname{Var}(V)$. The definition of $\kappa_T$ then gives its displayed formula. [A1, F1, algebra]

2.1 At fixed pressure, use sufficient statistic $B=H+P_{\rm ext}V$ with parameter $-\beta$. [F1] yields $-\partial_\beta\log\Delta=\langle B\rangle$ and $\partial_\beta\langle B\rangle=-\operatorname{Var}(B)$. Since $d\beta/dT=-1/(k_BT^2)$, the chain rule gives $C_P=\operatorname{Var}(B)/(k_BT^2)$. Both variances are nonnegative integrals of squares. [A2, F1, step 1.1, algebra] ∎

