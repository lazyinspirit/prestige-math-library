---
id: def-qft-qed-photon-energy-multiplier
kind: definition
title: Free transverse-photon energy multiplier
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-photon-transverse-space
  - def-countable-choice
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-qft-photon-transverse-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML Chapter 6; Coulomb-gauge transverse one-particle photon modes and the free-photon energy multiplier.
    - title: Mark Srednicki, Quantum Field Theory, §55, Electrodynamics in Coulomb Gauge
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; §55, printed pp. 335–338, on the transverse projection, free modes, $\omega=|\mathbf k|$, and the photon Hamiltonian.
---

## Definition

Assume Countable Choice [[def-countable-choice]]. Use the transverse space $\mathcal H_T=\operatorname{Ran}M_{P_T}$ of [[def-qft-photon-transverse-space]], with $P_T(\mathbf k)=I_3-\mathbf n\mathbf n^T$ for $\mathbf k\ne0$ and any assigned value at the null point $\mathbf k=0$. In the QFT length convention, assign $\mathbf k$ units m$^{-1}$ and define the nonnegative measurable multiplier
$$ \omega(\mathbf k):=|\mathbf k|. $$
Its maximal multiplication operator on $\mathcal H_T$ is
$$ (M_\omega f)(\mathbf k):=\omega(\mathbf k)f(\mathbf k),\qquad D(M_\omega):=\{f\in\mathcal H_T:\omega f\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)\}. $$
Because $\omega$ is a scalar multiplier, $\mathbf k\cdot f(\mathbf k)=0$ a.e. implies $\mathbf k\cdot(M_\omega f)(\mathbf k)=0$ a.e.; thus the displayed multiplication maps its stated domain into $\mathcal H_T$. The value $\omega(0)=0$ is immaterial to the $L^2$ operator. For $\hbar,c>0$, the corresponding one-particle energy convention is $E_1:=\hbar c M_\omega$, in joules.

## Remarks

The QFT-MG01 transverse-space draft is present and its exact projection-space definition was inspected, and its page manifest lists the draft supplier items. This local multiplier is conditional on that mathematical supplier. No photon polarization frame, interacting dynamics, or empirical photon-energy claim is part of this definition.

## Facts & Assumptions

**Given:** The transverse-space interface, $\hbar>0$ in J s, $c>0$ in m s$^{-1}$, and $\mathbf k$ in m$^{-1}$.

[A1] The stated units and positivity of $\hbar,c$ are model conventions in this definition.

[A2] Assume Countable Choice, as required by the transverse-space supplier. [[def-countable-choice]]

[F1] [[def-qft-photon-transverse-space]] defines $\mathcal H_T=\operatorname{Ran}M_{P_T}$ as the vector-valued $L^2$ subspace with $\mathbf k\cdot f(\mathbf k)=0$ a.e.; the draft carrier exists and is listed in the QFT-MG01 manifest. This mathematical use retains its supplier hypotheses and does not itself confer independent acceptance.

[F2] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ in a real or complex inner-product space.

## Proof

1.1 The norm map $\mathbf k\mapsto|\mathbf k|$ is measurable and nonnegative. If $f\in D(M_\omega)$, then $\omega f$ is square-integrable by the stated domain and $\mathbf k\cdot(\omega f)=\omega(\mathbf k\cdot f)=0$ a.e.; [F1] therefore places $M_\omega f$ in $\mathcal H_T$. Thus the maximal multiplication operator is well-defined on its stated domain. [A2, F1, given, algebra]

2.1 Since $[\omega]=$m$^{-1}$ and $[\hbar c]=$J m, $E_1=\hbar cM_\omega$ has energy units. For $f\in D(M_\omega)$, [F2] gives $|\langle f,M_\omega f\rangle_2|\le\|f\|_2\|M_\omega f\|_2<\infty$; the integral representation is $\int |\mathbf k||f(\mathbf k)|^2d^3\mathbf k\ge0$ because $\omega\ge0$. Hence $E_1$ is nonnegative on its domain. [A1, A2, F2, step 1.1, algebra] ∎
