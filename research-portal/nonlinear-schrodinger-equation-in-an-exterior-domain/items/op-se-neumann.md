---
id: op-se-neumann
kind: open-problem
domain: mathematics
title: Outer Neumann boundary controllability
status: published
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-cubic-boundary-system
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-distributional-equation
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-cubic-boundary-system: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 2 and 21, Question B′, equation (1.6), and §5.2(D)
      statement: The authors ask about outer-boundary controllability for the Neumann
        system and identify exterior Neumann theory and outer Neumann traces as
        issues for that problem.
      hypotheses: The article considers a smooth non-trapping compact obstacle with
        connected exterior and the cubic equation on its bounded truncation.
      reading_limits: The frozen v2 PDF pages 2 and 21 and their extracted text were
        read for attribution and the authors' stated status. The fixed endpoint
        approximation space below is a locally introduced formulation, not a
        space asserted or characterized in the article. No independent current
        literature search or verification of the cited local-smoothing result
        was completed.
dependency_level: 3
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-cubic-boundary-system
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-distributional-equation
argument_deps: []
---

## Open problem

Assume countable choice. Let $n\in\{2,3\}$, let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and assume that $\Theta$ is non-trapping: every complete admissible generalized reflected ray $x:\mathbb R\to\overline\Omega$, parametrized by physical time at unit speed, leaves each compact set in finite forward time. Choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$ and put $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$, and $\Gamma_2=\partial\Theta$.

For $s\in\{1,2\}$, fix the endpoint space as follows. Let $\mathcal A_N$ consist of the restrictions to $\Omega_0$ of complex-valued functions smooth on an open neighborhood of $\overline{\Omega_0}$ whose classical outward normal derivative vanishes on $\Gamma_2$. Define $E_s$ to be its closure in $H^s(\Omega_0)$: a class $v\in H^s(\Omega_0)$ belongs to $E_s$ exactly when, for every $\varepsilon>0$, some $a\in\mathcal A_N$ satisfies $\|v-a\|_{H^s(\Omega_0)}<\varepsilon$. This fixes the endpoint space independently of any steering result; in particular it includes all constant functions and all compactly supported smooth functions on $\Omega_0$.

For $T>0$ and $\lambda\in\mathbb R\setminus\{0\}$, does a local exact outer-boundary control result hold near zero for $iu_t+\Delta u+\lambda|u|^2u=0$ on $\Omega_0\times(0,T)$, with $\partial_\nu u=h$ on $\Gamma_1\times(0,T)$ and $\partial_\nu u=0$ on $\Gamma_2\times(0,T)$? Here $\nu$ is outward from $\Omega_0$. More precisely, can one specify a solution class, control space, and Neumann trace interpretation, and find some $\delta>0$, so that every pair $u_0,u_1\in E_s$ with $\|u_j\|_{H^s(\Omega_0)}<\delta$ can be joined by an admissible control and a solution $u\in C([0,T];H^s(\Omega_0))$ satisfying $u(0)=u_0$ and $u(T)=u_1$?

Here $H^s(\Omega_0)$ consists of complex-valued $L^2$ classes with all weak spatial derivatives through order $s$ in $L^2$, with the usual sum-of-squares norm. Continuity in $C([0,T];H^s(\Omega_0))$ is norm continuity. The differential equation is to hold in the interior distributional sense when the nonlinear term is defined as a distribution. The boundary interpretation must agree with the classical normal derivative for smooth states. The solution theory must admit every endpoint pair in the prescribed $E_s$ ball; it may impose compatible endpoint conditions on the controls, but may not further shrink that endpoint ball. The approximation definition of $E_s$ does not assert an identification with a Sobolev Neumann-trace kernel. The construction of the solution and control spaces and the steering assertion remain part of the question.

## Open problem references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-cubic-boundary-system]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-distributional-equation]]

## Status

Here the ray quantifier uses complete curves defined for all real times, as in the non-trapping supplier; locally admissible ray segments are not separately quantified over, and no theorem extending every segment to a complete ray is assumed.

The frozen article poses the broader outer-boundary question for $s\geq0$ and arbitrary endpoint data, and discusses the Neumann case among its open problems. Specifically, Question B′ asks whether every pair of $H^s(\Omega_0)$ endpoints can be joined in any prescribed time $T>0$ by the Dirichlet or Neumann outer-boundary system. This is the authors' broad question, recorded separately from the local formulation above.

The local question above isolates the integer regularities of the article's Dirichlet result and introduces the fixed approximation space $E_s$ as a formulation of the Neumann endpoint requirement. This choice is local to this item, not attributed to the authors. It does not assert that the same endpoint compatibility conditions or control regularity apply to Neumann data. In §5.2(D), the authors identify exterior Neumann Laplacian theory and finer analysis of outer Neumann traces as needed, and report local smoothing with constants depending on the time interval. That report is not used here as a proved premise. This item records the status in the article, not an independently certified current literature status.
