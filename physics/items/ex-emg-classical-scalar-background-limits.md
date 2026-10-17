---
id: ex-emg-classical-scalar-background-limits
kind: example
title: "Background scalar wave versus coupled source equations"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - def-countable-choice
  - pthm-emg-charged-scalar-coupling
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-emg-charged-scalar-coupling: physical-result
proof_strategy: direct
physical_scope: >
  Exact smooth plane-wave calculations in the specified classical scalar
  model on a flat background. They distinguish a matter equation solution
  from a solution of the coupled equations and make no empirical or quantum
  claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80), classical complex scalar and gauge-covariant derivative."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3, PDF pp. 190–193 (printed pp. 183–186), scalar-field stress convention; the displayed plane wave is checked locally."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.69)–(4.72), PDF pp. 123–125, metric stress convention; the conditional calculation is explicit here."
verification:
  precheck: pass
---

## Example

Take the trivial global-potential branch of the scalar model on
$M=\mathbb R^4$ with global coordinates $(x^0,\mathbf x)$, where
$x^0=ct$ and $\mathbf x\in\mathbb R^3$, and Minkowski metric
$\eta=\operatorname{diag}(-1,1,1,1)$. Use the trivial principal bundle
$P=M\times U(1)$ with its product connection, so the global physical
potential is $A=0$, and take $\varphi\in C^\infty(\mathbb R^4;\mathbb C)$.
Set
$V(u)=m_s^2u$, where $m_s>0$ is a classical inverse-length parameter
$[\mathrm{m}^{-1}]$, not a rest mass. Let $C\in\mathbb C\setminus\{0\}$ be
dimensionless and let $\mathbf k\in\mathbb R^3$ have components in
$\mathrm{m^{-1}}$. Define the angular frequency
$\omega:=c\sqrt{|\mathbf k|^2+m_s^2}$, with unit $\mathrm{s^{-1}}$. The smooth field
$\varphi=C\exp(-i\omega t+i\mathbf k\cdot\mathbf x)$ solves the scalar
equation for every allowed value of $\lambda$, because $A=0$ makes
$D_a=\partial_a$. Its current, however, depends on $\lambda$. The two cases
below show why a solution of the scalar equation on a prescribed background
need not solve the coupled Einstein–Maxwell system.

## Facts & Assumptions

**Given:** The smooth scalar model and its coupled equations from
[[pthm-emg-charged-scalar-coupling]], the flat metric and fields in the
Example, $m_s>0$, $C\ne0$, real $\mathbf k$, and the indexed
countable-choice convention [A3].

[F1] [[pthm-emg-charged-scalar-coupling]]: with
$E_\varphi=D_aP^a-V'(|\varphi|^2)\varphi$, scalar stationarity requires
$E_\varphi=0$; the matter current and stress are
$j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)$ and
$T^\varphi_{ab}=K_\varphi\operatorname{Re}(\overline{P_a}P_b)
-\frac{K_\varphi}{2}g_{ab}L_\varphi$; the coupled Maxwell and Einstein
equations use those sources.

[A1] $\Lambda=0$, there is no additional matter stress, and the background
potential is $A=0$, so $F=0$.

[A2] The scalar is a smooth global complex field on the trivial bundle;
$m_s>0$, $C\ne0$, $K_\varphi>0$, $c>0$, and $\lambda$ is any real number on
this branch. In particular, both $\lambda=0$ and $\lambda\ne0$ are admissible.

[A3] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. This is the indexed countable-choice convention used by the compact
integration suppliers; no full Axiom of Choice is assumed.

## Verification

**Given:** The hypotheses and exact field definitions above.

1.1 Since $A=0$ in the trivial branch [A2], $P_a=\partial_a\varphi$. With
$\Box=-c^{-2}\partial_t^2+\Delta$,
$E_\varphi=(\Box-m_s^2)\varphi
=(\omega^2/c^2-|\mathbf k|^2-m_s^2)\varphi=0$ by the definition of
$\omega$. Thus the plane wave solves the selected scalar equation on the flat
background. [A1, A2, A3, F1, given, algebra]

2.1 For the admissible $\lambda=0$ case of [A2], the current formula in [F1]
gives $j^a=0$. On shell,
$L_\varphi=(-\omega^2/c^2+|\mathbf k|^2+m_s^2)|C|^2=0$ by step 1.1, and
$P_0=-i(\omega/c)\varphi$, so
$\operatorname{Re}(\overline{P_0}P_0)=\omega^2|C|^2/c^2$. The stress formula
in [F1] therefore gives $T^\varphi_{00}=K_\varphi\omega^2|C|^2/c^2>0$.
In the Cartesian coordinates of $\eta$, the metric components are constant;
the Levi-Civita formula
$\Gamma^\rho_{\mu\nu}=\frac12\eta^{\rho\sigma}(\partial_\mu\eta_{\sigma\nu}+\partial_\nu\eta_{\sigma\mu}-\partial_\sigma\eta_{\mu\nu})$
therefore gives $\Gamma^\rho_{\mu\nu}=0$, and the curvature formula then gives
$G_{00}=0$. With $\Lambda=0$ and $T^m=0$, the coupled Einstein equation
would require $0=\kappa_E T^\varphi_{00}$, impossible because
$\kappa_E=8\pi G_N/c^4>0$. [A1, A2, A3, F1, step 1.1, algebra]

2.2 For the admissible $\lambda\ne0$ case of [A2] and the same $A=0$ wave,
$P^0=i(\omega/c)\varphi$, so
$j^0=K_\varphi\lambda(\omega/c)|C|^2\ne0$. The sourced Maxwell equation
would require $0=\partial_\mu F^{\mu0}=-\mu_0j^0$, because $F=0$; this is
impossible since $\mu_0>0$. Thus the background scalar wave is not a
coupled solution in this branch either. [A1, A2, A3, F1, step 1.1, algebra]

3.1 The exact calculations establish a conditional model example only.
$m_s$ is not identified with $mc/\hbar$, and no particle, observation, or
quantum field interpretation is asserted. [step 2.1, step 2.2, given] ∎
