---
id: cex-emg-flat-nonzero-field-coupling
kind: counterexample
title: "A flat Maxwell field need not solve the coupled Einstein equations"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - pthm-emg-action-field-equations
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-emg-action-field-equations: physical-result
proof_strategy: direct
physical_scope: >
  A smooth exact counterexample showing that a source-free Maxwell solution
  on a prescribed flat background need not satisfy the coupled action-based
  Einstein equation. It uses no empirical data or singular field.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§3.2.5, PDF pp. 120–124 (printed pp. 113–117), curved Maxwell equations; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), electromagnetic Hilbert stress."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.68)–(4.70), PDF p. 123 (printed p. 116), generic metric stress variation and Einstein matter coupling. This locator does not supply the Maxwell stress formula; the exact SI tensor and field are supplied by the local action-field theorem and evaluated here."
verification:
  precheck: pass
---

## Statement refuted

The false claim is: on $M=\mathbb R^4$ with global length coordinates
$(x^0,\mathbf x)$, $x^0=ct$, and Minkowski metric
$\eta=\operatorname{diag}(-1,1,1,1)$, every smooth source-free Maxwell field
on the trivial principal $U(1)$ bundle, paired with that same flat metric, is
a solution of the coupled action-based Einstein–Maxwell equations with
$\Lambda=0$ and no additional matter.

## Facts & Assumptions

**Given:** The action-based field equations and SI stress convention of
[[pthm-emg-action-field-equations]], on a flat background with zero
cosmological parameter and no additional matter, under the indexed
countable-choice convention [A2].

[F1] [[pthm-emg-action-field-equations]]: the smooth fixed-sector field system
requires $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, and
$G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$, where
$T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$.

[A1] Let $M=\mathbb R^4$ with global length coordinates
$(x^0,x^1,x^2,x^3)$, $x^0=ct$, and Minkowski metric
$\eta=\operatorname{diag}(-1,1,1,1)$. Use the trivial principal bundle
$P=M\times U(1)$ with product projection $\pi$ and its global trivialization.
For a nonzero constant electric-field component $E_0\in\mathbb R$ with
SI unit $\mathrm{V\,m^{-1}}$, defined relative to the observer
$n=\partial_{x^0}$ in the $x^1$ direction, define the global
physical potential $A\in\Omega^1(M)$ by its components
$A_0=E_0x^1/c$ and $A_i=0$ for $i=1,2,3$. The normalized local representative
is $a=A/\kappa_0$, and the principal connection in this trivialization is
$\omega=-iz^{-1}dz+\pi^*a$ for $z\in U(1)$. Its physical curvature is
$F=\kappa_0d a=dA$, so $F_{01}=-E_0/c$ and all other independent components
vanish.

Choose the zero-matter model with configuration space $\mathcal C_m=\{*\}$,
no matter-field variations, and differentiable functional
$S_m[g,\omega,*]\equiv0$. Its matter first variations vanish for every
admissible metric and connection variation, hence its current and Hilbert
stress are $j=0$ and $T^m=0$. Set $\Lambda=0$ and $g=\eta$.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. This is the indexed countable-choice convention used by the compact
integration suppliers; no full Axiom of Choice is assumed.

## Counterexample

**Given:** The fields and parameter values in [A1].

1.1 The two-form $F$ is constant, so $dF=0$ and
$\partial_\mu F^{\mu\nu}=0$ for every $\nu$. Hence it satisfies the sourced
equation in [F1] with $j=0$, and is a smooth source-free Maxwell solution on
the prescribed Minkowski background. [A1, A2, F1, given, algebra]

1.2 Its invariant is $F_{cd}F^{cd}=-2E_0^2/c^2$ and
$F_{0c}F_0{}^c=E_0^2/c^2$. Substitution in the stress formula [F1] gives
$T^{\mathrm{EM}}_{00}=E_0^2/(2\mu_0c^2)>0$.
[A1, A2, F1, algebra]

2.1 In Cartesian coordinates the components of $\eta$ are constant, so the
Levi-Civita formula
$\Gamma^\rho_{\mu\nu}=\frac12\eta^{\rho\sigma}(\partial_\mu\eta_{\sigma\nu}+\partial_\nu\eta_{\sigma\mu}-\partial_\sigma\eta_{\mu\nu})$
gives $\Gamma^\rho_{\mu\nu}=0$. The curvature formula then gives zero
Riemann and Einstein tensors, in particular $G_{00}=0$. With $\Lambda=0$
and $T^m=0$ from [A1], the coupled Einstein equation in [F1] would require
$0=\kappa_E T^{\mathrm{EM}}_{00}$, contradicting $\kappa_E=8\pi G_N/c^4>0$
and step 1.2. This source-free Maxwell solution on a fixed background is not
a solution of the coupled equations, refuting the claim. [A1, A2, F1, step 1.2, algebra] ∎
