---
id: pthm-qftx-qexact-localization-ward-identity
kind: physics-theorem
title: Finite-Regulator Q-Exact Localization Ward Identity
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-qexact-field-theory-localization
deps:
  - def-qftx-susy-background-data
  - def-qftx-supersymmetry-fluctuation-complex
  - post-qftx-rigid-supersymmetric-background
  - thm-finite-dimensional-q-exact-deformation-invariance
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  def-qftx-supersymmetry-fluctuation-complex: formulation-prerequisite
  post-qftx-rigid-supersymmetric-background: physical-assumption
  thm-finite-dimensional-q-exact-deformation-invariance: mathematical-premise
dependency_level: 10
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "Section 3, equations (3.1)–(3.3), for the Q-exact deformation and Q-square condition; Section 1, printed p. 4 (PDF p. 4), unnumbered paragraph between equations (1.5) and (1.6), for the assumed, unconstructed noncommutative S4 regulator and its agreement near the poles with the R4 regulator."
    - title: "Vasily Pestun and Maxim Zabzine, Introduction to localization in quantum field theory"
      url: "https://arxiv.org/pdf/1608.02953"
      locator: "Section 1, PDF pp. 1–3, for the finite-dimensional Q-exact deformation, the separate t→∞ saddle limit, and the formal status of infinite-dimensional extensions."
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Chapter 2, Section 2.27(b), printed pp. 55–56, for differentiation under the integral sign with a uniform L1 majorant."
    - title: "Albert Schwarz and Oleg Zaboronsky, Supersymmetry and localization"
      url: "https://arxiv.org/pdf/hep-th/9511112"
      locator: "Section 3, PDF pp. 4–7, for the compact finite-dimensional supermanifold and divergence-free Q hypotheses; its fixed-locus theorem is not imported as this proof."
    - title: "Wolfger Peelaers (lectures), Bruno Le Floch (notes), 4d N=2 Localization"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
      locator: "Section 1.1–1.2, PDF pp. 3–4, for the 4D supersymmetry background and the stated measure/off-shell assumptions; no continuum Ward proof is taken from the notes."
physical_scope: "A conditional deduction for a fixed gauge-bundle sector of the source-qualified Euclidean N=4 SU(2) model on the round S4, only after a separately supplied finite-dimensional Q-preserving regulator satisfies the stated hypotheses. It proves neither that such a regulator exists for the source's formal S4 construction nor a continuum measure, t-to-infinity saddle limit, regulator-removal theorem, or empirical claim."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Use natural units $c=\hbar=1$ and fix one bundle sector of the adopted massless $\mathcal N=4$ $SU(2)$ Yang–Mills model on the round Euclidean four-sphere $S^4_r$, with $r>0$ a length. The adopted background fixes the action, contour, field content, and total gauge-fixed odd transformation $Q=s+\delta$; on its fields and ghosts the square is $Q^2=\delta_{\rm gauge}(a_0)+\delta_{U(1)}(\omega)$, where $a_0\in\mathfrak h_P=\ker D_{A_*}$ is the declared parallel background zero mode and $\delta_{U(1)}(\omega)=-\mathcal L_v^{\mathrm{lift}}-\delta_R$ is the combined lifted spacetime/R action, not a second copy of a gauge-covariant Lie derivative. The nongauge action on ghosts is $\rho_{\mathrm{gh}}(\omega)=-\mathcal L_v^{\mathrm{lift}}$, and its auxiliary-index action is the one fixed by the source off-shell square. The source-ordered bilinear is $R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon$ and the cohomological parameter is $\phi=-(v^\mu A_\mu-\beta_{v,P}+v^A\Phi_A)$, where $\beta_{v,P}$ is the fixed lift's vertical coefficient. The adopted affine ghost rule is $\delta\phi=-[c,\phi]+\rho_{\mathrm{gh}}(\omega)c$. Sectorwise gauge fixing is the $Q$-completed background-gauge insertion $Q\Psi_{\mathrm{gf}}$ with its specified ghost and zero-mode domains. This is a physical model assumption, not a deduction that the formal continuum functional integral exists.

For a fixed regulator label $\rho$, assume that a finite-dimensional regulator of this model is supplied by an oriented smooth field-parameter manifold $\mathfrak F_\rho$ of finite dimension $n$, a smooth positive volume form $\mu_\rho$, and integration over the whole cycle $\mathfrak F_\rho$. Let $\mathcal A_\rho=\Omega^\bullet(\mathfrak F_\rho;\mathbb C)$, let $I_\rho(F)=\int_{\mathfrak F_\rho}F_{[n]}$ be the integral of the degree-$n$ part, and let $Q_\rho$ be a smooth odd derivation. Supply a smooth parity-preserving graded map $\iota_\rho:\Pi T\mathfrak F_\rho\to\mathcal U$ into the model's local field chart, where functions on $\Pi T\mathfrak F_\rho$ are differential forms. Its body map is smooth, and its pullback assigns to every field coordinate a form of the declared parity, with smooth graded observables pulled back by substitution and finite Taylor expansion in positive-degree forms. Require $Q_\rho\iota_\rho^*F=\iota_\rho^*QF$ for every chart observable $F$. Applying this twice requires $Q_\rho^2\iota_\rho^*F=\iota_\rho^*Q^2F$, so the parametrized fields preserve the stated total $Q$ action and its square. Existence of this compatible regulator is a hypothesis. Let $J\subseteq\mathbb R$ be a nonempty open interval of dimensionless deformation parameters. Let $S_\rho,O_\rho\in\mathcal A_\rho$ be even, let $V_\rho\in\mathcal A_\rho$ be odd, and define $E_{\rho,t}=e^{-S_\rho-tQ_\rho V_\rho}$. In units with $\hbar=1$, assume the regulated action $S_\rho$ and deformation $tQ_\rho V_\rho$ are dimensionless. Assume $Q_\rho S_\rho=Q_\rho O_\rho=0$ and $(Q_\rho^2V_\rho)E_{\rho,t}=0$ for every $t\in J$. Assume the regulated measure and cycle are Q-invariant on the admissible integrands, in the exact sense that $I_\rho(Q_\rho(O_\rho V_\rho E_{\rho,t}))=0$ for every $t\in J$, with no anomaly or boundary contribution.

Write $(O_\rho E_{\rho,t})_{[n]}=f_{\rho,t}\mu_\rho$ and assume $f_{\rho,t}\in L^1(\mathfrak F_\rho,\mu_\rho)$ for every $t\in J$. Assume there is a measurable $\mu_\rho$-null set $N_\rho\subseteq\mathfrak F_\rho$ such that, for every $x\in\mathfrak F_\rho\setminus N_\rho$, the map $t\mapsto f_{\rho,t}(x)$ is differentiable at every $t\in J$. For $x\notin N_\rho$ define

$$\partial_t f_{\rho,t}(x):=\lim_{\substack{h\to0\\h\in\mathbb R,\ h\ne0,\ t+h\in J}}\frac{f_{\rho,t+h}(x)-f_{\rho,t}(x)}{h}\in\mathbb C,$$

and define $\partial_t f_{\rho,t}(x)=0$ for $x\in N_\rho$. Require $x\mapsto\partial_t f_{\rho,t}(x)$ to be measurable for every $t\in J$. For every compact $K\subset J$, assume one nonnegative $g_K\in L^1(\mathfrak F_\rho,\mu_\rho)$ and one $\mu_\rho$-null set $N_{\rho,K}$ such that, for every $x\notin N_{\rho,K}$ and every $t\in K$,

$$|f_{\rho,t}(x)|\le g_K(x),\qquad |\partial_t f_{\rho,t}(x)|\le g_K(x).$$

Then

$$Z_\rho(t):=I_\rho(O_\rho E_{\rho,t})$$

is constant on $J$, and for every $t\in J$,

$$Z_\rho'(t)=-I_\rho(O_\rho(Q_\rho V_\rho)E_{\rho,t})=-I_\rho(Q_\rho(O_\rho V_\rho E_{\rho,t}))=0.$$

The conclusion applies only to this fixed finite-dimensional regulator and fixed bundle sector at finite $t$. The adopted S4 postulate does not construct the finite-dimensional data above, and this result supplies no infinite-dimensional continuum identity, $t\to\infty$ localization limit, or regulator-removal theorem.

## Statement references

[[post-qftx-rigid-supersymmetric-background|Adopted S4 model and gauge-fixed Q-square]]

[[def-qftx-supersymmetry-fluctuation-complex|Gauge-fixed fluctuation and regulator data]]

[[thm-finite-dimensional-q-exact-deformation-invariance|Finite-dimensional Q-exact deformation theorem]]

[Pestun, Section 3](https://arxiv.org/pdf/0712.2824)

[Pestun and Zabzine, Section 1](https://arxiv.org/pdf/1608.02953)

[Folland, Theorem 2.27(b)](https://djvu.online/file/NPF4BEtSuqdFA)

[Schwarz and Zaboronsky, Section 3](https://arxiv.org/pdf/hep-th/9511112)

[Peelaers, Sections 1.1–1.2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

## Facts & Assumptions

**Given:** The adopted S4 model and its total gauge-fixed Q transformation, together with one fixed finite-dimensional regulator whose field algebra, integral, Q-closure, Q-squared condition, vanishing Q-boundary integral, and compact-parameter majorants satisfy the Statement.

[A1] [[post-qftx-rigid-supersymmetric-background]]: the adopted model is the source-qualified Euclidean massless $\mathcal N=4$ $SU(2)$ theory on round $S^4_r$; its total gauge-fixed transformation is $Q=s+\delta$ and its square on fields and ghosts is $\delta_{\rm gauge}(a_0)+\delta_{U(1)}(\omega)$, with the combined lift/R, auxiliary-index and ghost actions, the source-ordered $R^Q$, the global parameter $\phi=-\kappa_v$, and sectorwise $Q$-completed gauge fixing specified in the Statement. The source's functional measure and S4 noncommutative regulator extension remain formal assumptions.

[F1] [[def-qftx-susy-background-data]]: the supplied rigid background records the spin/R/gauge bundles, off-shell transformation, contour, gauge-fixing and ghost data, and regulator or measure inputs; it does not construct a continuum measure.

[F2] [[def-qftx-supersymmetry-fluctuation-complex]]: a finite-dimensional regulator is extra data consisting of a finite-dimensional oriented field manifold, volume form, cycle, graded differential-form algebra, top-degree integral, and a smooth odd derivation together with a graded field-parametrization map whose pullback intertwines it with the model transformation on every chart observable; applying the identity twice intertwines the exact squares.

[A2] The regulator is fixed in one bundle sector and obeys every integrability, Q-closure, Q-squared, Q-invariance, anomaly, boundary, and majorant condition stated above. This is a conditional finite-model hypothesis, not a claim that the source's formal S4 regulator has been constructed in this form.

[F3] [[thm-finite-dimensional-q-exact-deformation-invariance]] states: for finite-dimensional differential-form integration data with $QS=QO=0$, $(Q^2V)e^{-S-tQV}=0$, and zero Q-boundary integral, if $t\mapsto f_t(x)$ is differentiable at every $t\in J$ for all $x$ outside one common null set, the derivative extended by zero on that set is measurable for every $t$, and each compact $K\subset J$ has one $L^1$ majorant for both $|f_t|$ and $|\partial_t f_t|$ for all $t\in K$ outside one null set, then $I(Oe^{-S-tQV})$ is constant at finite parameter values and has derivative $-I(O(QV)e^{-S-tQV})=-I(Q(OVe^{-S-tQV}))=0$.

## Proof

1.1 By [A1], the physical input fixes the S4 background and the exact total square: the zero-mode gauge action plus the combined lifted spacetime/R action, with the source auxiliary-index action and the ghost action $\rho_{\mathrm{gh}}$. Its global gauge parameter subtracts the fixed lift's vertical coefficient from $v^MA_M$, so the source covariant derivative is not counted twice. The affine ghost rule and $Q$-completed sectorwise gauge fixing are part of that same model input; nilpotency is not asserted. The background definition [F1] says a formal measure is not a constructed measure. Under [A2], the supplied map $\iota_\rho$ intertwines $Q_\rho$ with that transformation on each chart observable; applying the identity twice intertwines the squares. The required Q-squared condition is separately imposed on $V_\rho E_{\rho,t}$. [given, A1, A2, F1]

1.2 By [F2], the regulator's field manifold, graded algebra, top-degree integral, and odd derivation have exactly the finite-dimensional form required by [F3]. The remaining hypotheses of [F3] are precisely $Q_\rho S_\rho=Q_\rho O_\rho=0$, $(Q_\rho^2V_\rho)E_{\rho,t}=0$, the zero-boundary Q-invariance identity, differentiability at every $t\in J$ outside the one common null set, measurability of the zero-extended derivative for every $t$, and the compact-parameter majorants. [given, F2, F3]

2.1 Apply [F3] to these data. It gives $Z_\rho'(t)=-I_\rho(O_\rho(Q_\rho V_\rho)E_{\rho,t})=-I_\rho(Q_\rho(O_\rho V_\rho E_{\rho,t}))=0$ for every $t\in J$, and states that $Z_\rho$ is constant on $J$. This is a conditional deduction for the fixed finite regulator and sector only. [F3, step 1.2] ∎
