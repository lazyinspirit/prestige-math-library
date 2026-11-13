---
id: op-se-low-regularity
kind: open-problem
domain: mathematics
title: Nonlinear exact control below energy regularity
status: draft
deps:
  - def-se-geometry
  - def-se-internal-systems
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - math:def-axiom-of-choice
  - def-se-nontrapping
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-control-language: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-nontrapping: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 21, §5.2(B); see also Theorems 1.2–1.3 and 3.7
      statement: The authors ask for nonlinear control results below energy
        regularity, discussing a forced Cauchy theory and nonlinear estimates in
        a suitable continuous-path space; they highlight the two-dimensional
        cubic L² case.
      hypotheses: The article considers a connected exterior of a smooth nonempty
        compact non-trapping obstacle, with the dimensions and equations
        specified for its respective results.
      reading_limits: The frozen article text was read for this formulation and its
        stated partial results. No independent current literature-status survey
        or verification of reference [9] is claimed.
formulation_deps:
  - def-se-geometry
  - def-se-internal-systems
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - math:def-axiom-of-choice
  - def-se-nontrapping
argument_deps: []
dependency_level: 8
---

## Open problem

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and let $\Omega=\mathbb R^n\setminus\Theta$ be the connected exterior of a nonempty compact smooth obstacle, with geometry as in [[def-se-geometry]] and non-trapping in the complete-ray sense of [[def-se-nontrapping]]. Fix $T>0$ and $0\le s<1$. The Dirichlet spectral space $H_D^s(\Omega)$ is defined by [[def-se-dirichlet-scale]]; in particular $H_D^0(\Omega)=L^2(\Omega)$.

For the cubic internally controlled system of [[def-se-internal-systems]], with $g(v)=\lambda|v|^2v$ and $\lambda\in\mathbb R\setminus\{0\}$, determine for which such $s$ one can extend the article's nonlinear exact-control results to $H_D^s(\Omega)$. In particular, can one prove local exact controllability near zero: is there $\delta>0$ such that every pair $v_0,v_T\in H_D^s(\Omega)$ with norms at most $\delta$ can be joined in time $T$ by an admissible solution of the controlled equation? Here local exact controllability means endpoint reachability as defined in [[def-se-foundation-control-language]]; the admissible control and solution classes must be specified, and the endpoint conditions must hold in $H_D^s(\Omega)$.

One proposed route is a Cauchy theory with forcing and nonlinear estimates in a suitable space $X_T\subset C([0,T];H_D^s(\Omega))$, where $C([0,T];H_D^s(\Omega))$ denotes norm-continuous paths as in [[def-se-foundation-time-function-spaces]]. The needed estimates and the existence of such a space are part of the problem, not assumptions already established here. Other suitable solution and control spaces are not excluded.

## Status

In the frozen v2 article, §5.2(B) lists below-energy nonlinear control as an open direction. It contrasts this with the article's linear result over $s\in[-2,2]$ and its nonlinear results at energy regularity and above, and identifies the two-dimensional cubic $L^2$ problem as mass-critical. The authors state that their reference [9] supplies no Cauchy theory at that level. These are descriptions of the article's claims and its stated state of knowledge, not independent verification of the cited proof or a claim that the question remains open throughout the later literature as of 2026-11-13. The linear result alone does not solve the nonlinear question.

## Source notes

The article is cited for attribution of the question and its stated context. The cited definitions supply the model, geometry, spectral scale, time-space notation and control terminology; none asserts the desired low-regularity control result. Choice is retained from the scale and system definitions [[math:def-axiom-of-choice]].
