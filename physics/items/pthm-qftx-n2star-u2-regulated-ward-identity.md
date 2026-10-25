---
id: pthm-qftx-n2star-u2-regulated-ward-identity
kind: physics-theorem
title: Finite-regulator Ward identity for the $N=2^*$ U(2) sphere model
status: "published"
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s4-partition-functions
dependency_level: 4
deps:
  - post-qftx-s4-n2-localization-model
  - thm-finite-dimensional-q-exact-deformation-invariance
dependency_roles:
  post-qftx-s4-n2-localization-model: physical-assumption
  thm-finite-dimensional-q-exact-deformation-invariance: mathematical-premise
proof_strategy: direct
physical_scope: Conditional finite-parameter Ward deduction for one supplied
  finite-dimensional regulator and fixed bundle sector of the adopted N=2* U(2)
  round-S4 model; no regulator construction, large-parameter saddle limit,
  noncompact pushforward, pole identification or continuum theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and
        Supersymmetric Wilson Loops
      url: https://arxiv.org/pdf/0712.2824
      locator: §§2–3 and5, mass-dependent model and formal Q-exact deformation; the
        exact finite-regulator proof is the local mathematical theorem, not a
        claimed construction of the source's S4 regulator.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix one bundle sector of the adopted $\mathcal N=2^*$ $U(2)$ model on round $S^4_r$, with $r>0$, real Euclidean adjoint-hypermultiplet mass $m_E$, and the source's gauge-fixed odd transformation including its mass-dependent flavor action. Use $c=\hbar=1$. Suppose a regulator realization of THIS model is supplied as an oriented finite-dimensional smooth manifold $M_\rho$ of dimension $n$, positive volume form $\mu_\rho$, graded algebra $\Omega^\bullet(M_\rho;\mathbb C)$, and top-degree integral $I_\rho(F)=\int_{M_\rho}F_{[n]}$. Its smooth odd derivation $Q_\rho$ must realize the selected model transformation and the total square $Q^2=\delta_{\mathrm{gauge}}(a_0)+\omega$ on regulated fields and ghosts, with the source-ordered $R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon$, the lift/gauge decomposition, the induced seven-auxiliary action, and the sectorwise $Q$-completed gauge fixing stated for that model; no massless $SU(2)$ regulator or regulator existence is inferred.

Let $J\subset\mathbb R$ be a nonempty open interval of dimensionless parameters, $S_\rho,O_\rho$ smooth even forms and $V_\rho$ a smooth odd form, with dimensionless action $S_\rho+tQ_\rho V_\rho$. Put $E_t=e^{-S_\rho-tQ_\rho V_\rho}$. Require $Q_\rho S_\rho=Q_\rho O_\rho=0$, $(Q_\rho^2V_\rho)E_t=0$, and the exact anomaly-free, measure/cycle/boundary identity $I_\rho(Q_\rho(O_\rho V_\rho E_t))=0$ for all $t\in J$. For $(O_\rho E_t)_{[n]}=f_t\mu_\rho$, assume each $f_t$ is integrable and there is one measurable null set $N\subset M_\rho$ such that for every $x\notin N$, the map $t\mapsto f_t(x)$ is differentiable throughout $J$. For each $t\in J$, require the derivative $x\mapsto\partial_t f_t(x)$, set to zero on $N$, to be measurable. For every compact $K\subset J$, assume one $g_K\in L^1(M_\rho,\mu_\rho)$ and a measurable null set $N_K$ bound both $|f_t(x)|$ and $|\partial_t f_t(x)|$ by $g_K(x)$ for every $t\in K$ and every $x\notin N_K$. Then

$$Z_\rho(t)=I_\rho(O_\rho E_t),\qquad Z_\rho'(t)=-I_\rho(O_\rho(Q_\rho V_\rho)E_t)=-I_\rho(Q_\rho(O_\rho V_\rho E_t))=0,$$

and $Z_\rho$ is constant on $J$. This is conditional on the stated finite regulator, at finite parameters and fixed sector. It proves no $t\to\infty$ saddle limit, noncompact ADHM pushforward, ADHM-to-Nekrasov pole equality, north/south regulator match, regulator removal or continuum functional measure. Those separate physical and analytic obligations remain necessary for a sphere partition-function formula.

## Facts & Assumptions

**Given:** The selected $N=2^*$ U(2) sphere model, one common null set for differentiability throughout the parameter interval, measurable zero-extended derivatives at each parameter, compact-parameter $L^1$ majorants, and the other exact finite-regulator hypotheses in the Statement.

[A1] [[post-qftx-s4-n2-localization-model]]: the adopted model has global group U(2), one adjoint hypermultiplet of mass $m_E$, and the specified curved background, contour, mass-dependent flavor transformation and formal regulator assumption; it constructs no measure.

[F1] [[thm-finite-dimensional-q-exact-deformation-invariance]]: for differential-form integration on a finite-dimensional oriented manifold with the exact Q-closure, Q-squared, zero-boundary integral and compact-parameter L1-majorant hypotheses, the regulated integral has the derivative and constancy conclusion displayed above, at finite parameters only.

## Proof

1.1 Assumption [A1] selects the physical theory and its mass-dependent transformation; the separately supplied regulator in the Statement must realize that transformation and its complete lifted/gauge/R/flavor square. The gauge-covariant source Lie derivative is decomposed in [A1] as the fixed geometric lift plus the gauge action of $\kappa_v$, and the cohomological parameter is $\phi=-\kappa_v$; thus no gauge term is counted twice. Its $R^Q$ uses the source bilinear order and its auxiliary and ghost actions are those explicitly adopted in [A1]. This is not a substitution of the massless $N=4$ SU(2) model. Its graded form algebra, cycle and integral have exactly the mathematical type in [F1]. [given, A1, F1]

2.1 Each remaining hypothesis of [F1] is explicitly assumed in the Statement: Q annihilates action and insertion, its square satisfies the stated deformation condition, the Q-exact integral vanishes without anomalous or boundary term, and the derivative and integrand have the compact-parameter integrable majorant. Apply [F1] to obtain the derivative formula and constancy on $J$. The theorem's finite-parameter limit is preserved; no missing saddle, pushforward, pole or continuum conclusion is deduced. [given, F1, step 1.1] ∎
