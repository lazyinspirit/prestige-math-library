---
id: pthm-qftx-n2star-u2-regulated-ward-identity
kind: physics-theorem
title: Finite-regulator Ward identity for the N=2* U(2) sphere model
status: draft
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s4-partition-functions
dependency_level: 3
deps:
  - post-qftx-s4-n2-localization-model
  - thm-finite-dimensional-q-exact-deformation-invariance
dependency_roles:
  post-qftx-s4-n2-localization-model: physical-assumption
  thm-finite-dimensional-q-exact-deformation-invariance: mathematical-premise
proof_strategy: direct
physical_scope: Conditional finite-parameter Ward deduction for one supplied finite-dimensional regulator and fixed bundle sector of the adopted N=2* U(2) round-S4 model; no regulator construction, large-parameter saddle limit, noncompact pushforward, pole identification or continuum theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops
      url: https://arxiv.org/pdf/0712.2824
      locator: §§2–3 and5, mass-dependent model and formal Q-exact deformation; the exact finite-regulator proof is the local mathematical theorem, not a claimed construction of the source's S4 regulator.
verification:
  precheck: pending
---

## Statement

Fix one bundle sector of the adopted $\mathcal N=2^*$ $U(2)$ model on round $S^4_r$, with $r>0$, real Euclidean adjoint-hypermultiplet mass $m_E$, and the source's gauge-fixed odd transformation including its mass-dependent flavor action. Use $c=\hbar=1$. Suppose a regulator realization of THIS model is supplied as an oriented finite-dimensional smooth manifold $M_\rho$ of dimension $n$, positive volume form $\mu_\rho$, graded algebra $\Omega^\bullet(M_\rho;\mathbb C)$, and top-degree integral $I_\rho(F)=\int_{M_\rho}F_{[n]}$. Its smooth odd derivation $Q_\rho$ must realize the selected model transformation and square on the regulated fields; no massless $SU(2)$ regulator or regulator existence is inferred.

Let $J\subset\mathbb R$ be a nonempty open interval of dimensionless parameters, $S_\rho,O_\rho$ smooth even forms and $V_\rho$ a smooth odd form, with dimensionless action $S_\rho+tQ_\rho V_\rho$. Put $E_t=e^{-S_\rho-tQ_\rho V_\rho}$. Require $Q_\rho S_\rho=Q_\rho O_\rho=0$, $(Q_\rho^2V_\rho)E_t=0$, and the exact anomaly-free, measure/cycle/boundary identity $I_\rho(Q_\rho(O_\rho V_\rho E_t))=0$ for all $t\in J$. For $(O_\rho E_t)_{[n]}=f_t\mu_\rho$, assume $f_t$ integrable, differentiable in $t$ almost everywhere with measurable derivative, and for every compact $K\subset J$ one $L^1(M_\rho,\mu_\rho)$ function bounds both $|f_t|$ and $|\partial_t f_t|$ for all $t\in K$ outside one null set. Then

$$Z_\rho(t)=I_\rho(O_\rho E_t),\qquad Z_\rho'(t)=-I_\rho(O_\rho(Q_\rho V_\rho)E_t)=-I_\rho(Q_\rho(O_\rho V_\rho E_t))=0,$$

and $Z_\rho$ is constant on $J$. This is conditional on the stated finite regulator, at finite parameters and fixed sector. It proves no $t\to\infty$ saddle limit, noncompact ADHM pushforward, ADHM-to-Nekrasov pole equality, north/south regulator match, regulator removal or continuum functional measure. Those separate physical and analytic obligations remain necessary for a sphere partition-function formula.

## Facts & Assumptions

**Given:** The selected N=2* U(2) sphere model and exact finite-regulator hypotheses in the Statement.

[A1] [[post-qftx-s4-n2-localization-model]]: the adopted model has global group U(2), one adjoint hypermultiplet of mass $m_E$, and the specified curved background, contour, mass-dependent flavor transformation and formal regulator assumption; it constructs no measure.

[F1] [[thm-finite-dimensional-q-exact-deformation-invariance]]: for differential-form integration on a finite-dimensional oriented manifold with the exact Q-closure, Q-squared, zero-boundary integral and compact-parameter L1-majorant hypotheses, the regulated integral has the derivative and constancy conclusion displayed above, at finite parameters only.

## Proof

1.1 Assumption [A1] selects the physical theory and its mass-dependent transformation; the separately supplied regulator in the Statement is required to realize that transformation. This is not a substitution of the massless N=4 SU(2) model. Its graded form algebra, cycle and integral have exactly the mathematical type in [F1]. [given, A1, F1]

2.1 Each remaining hypothesis of [F1] is explicitly assumed in the Statement: Q annihilates action and insertion, its square satisfies the stated deformation condition, the Q-exact integral vanishes without anomalous or boundary term, and the derivative and integrand have the compact-parameter integrable majorant. Apply [F1] to obtain the derivative formula and constancy on $J$. The theorem's finite-parameter limit is preserved; no missing saddle, pushforward, pole or continuum conclusion is deduced. [given, F1, step 1.1] ∎
