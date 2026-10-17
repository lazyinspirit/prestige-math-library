---
id: lem-emg-charged-scalar-variation
kind: lemma
title: "Classical charged-scalar action, current and stress variation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - def-emg-lorentzian-forms
  - def-emg-charged-scalar-functional
  - lem-emg-circle-connection-gluing
  - lem-emg-matter-noether-exchange
  - thm-gr-compact-metric-and-timelike-curve-variation
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - lem-gr-compact-variation-coefficient-vanishing
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-charged-scalar-functional: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-matter-noether-exchange: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, Gauge Theory, lecture notes, §2.5.2, PDF pp. 89–91 (printed pp. 78–80)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2: the Abelian gauge-covariant derivative on a complex scalar; the Euler–Lagrange, current and Hilbert formulas are derived here with the stated normalization."
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.1 and §4.5.3, PDF pp. 149–151 and 193 (printed pp. 142–144 and 186)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.1 supplies the metric-volume variation; §4.5.3 gives a neutral scalar stress example. The charged terms and off-shell identities are derived locally here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5, equations (5.35)–(5.38), PDF p. 146 (printed p. 139)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5: on-shell matter variation under diffeomorphisms; this item separately verifies the charged scalar off-shell terms."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Use the scalar functional of [[def-emg-charged-scalar-functional]] on a fixed smooth bundle sector, with $K_\varphi>0$, real $\lambda$, real smooth $V$, and smooth $\varphi,A,g$. Write $P_a:=D_a\varphi$ and define the gauge- and metric-covariant derivative of its one-form by

$$D_aP_b:=\nabla_aP_b-i\lambda A_aP_b,$$

with the conjugate derivative using $+i\lambda A_a$. For compactly supported variations, define

$$E_\varphi:=D_aP^a-V'(|\varphi|^2)\varphi,\qquad j^a:=K_\varphi\lambda\,\operatorname{Im}(\overline\varphi P^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{P_a}P_b)-\frac{K_\varphi}{2}g_{ab}L_\varphi.$$

Then the scalar-field variation is $\delta_\varphi S_\varphi=\frac{K_\varphi}{c}\operatorname{Re}\int_M\overline{\delta\varphi}\,E_\varphi\,\mathrm{vol}_g$; stationarity in every compactly supported complex scalar direction is equivalent to $E_\varphi=0$. The connection and inverse-metric variations are

$$\delta_A S_\varphi=\frac1c\int_Mj^a\alpha_a\,\mathrm{vol}_g,\qquad \delta_gS_\varphi=-\frac1{2c}\int_MT^\varphi_{ab}q^{ab}\,\mathrm{vol}_g.$$

The following off-shell identities also hold:

$$\nabla_a j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi E_\varphi),\qquad \nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}(\overline{E_\varphi}P_b)+F_{ba}j^a.$$

In particular, the matter equation $E_\varphi=0$ implies current conservation and the exact Lorentz-force exchange identity $\nabla_a(T^\varphi)^{ab}=F^{bc}j_c$. No coupled Einstein–Maxwell solution or empirical matter model is asserted.

Under the formal SI assignments of [[def-emg-charged-scalar-functional]], $j^a$ has units $\mathrm{A\,m^{-2}}$ and $T^\varphi$ has units $\mathrm{J\,m^{-3}}$; this dimensional check is not an empirical claim.

## Facts & Assumptions

**Given:** The smooth metric, bundle connection and scalar section of [[def-emg-charged-scalar-functional]], its fixed-sector compact variations, and the definitions of $P_a,L_\varphi,V,K_\varphi,\lambda$ there.

[F1] The scalar functional has $P_a=\partial_a\varphi-i\lambda A_a\varphi$, its induced charged-covector derivative, and $L_\varphi=g^{ab}\overline{P_a}P_b+V(|\varphi|^2)$; a fixed-sector connection variation is a global real one-form. ([[def-emg-charged-scalar-functional]], [[lem-emg-circle-connection-gluing]])

[F2] The metric volume varies as $\delta\mathrm{vol}_g=-\frac12g_{ab}q^{ab}\mathrm{vol}_g$ for compact inverse-metric variation $q^{ab}$. ([[thm-gr-compact-metric-and-timelike-curve-variation]])

[F3] Compactly supported divergences integrate to zero. ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]])

[F4] For any gauge- and diffeomorphism-invariant matter functional with the stated Hilbert/current first variation, its on-shell identity is $\nabla_aT^{ab}=F^{bc}j_c$. ([[lem-emg-matter-noether-exchange]])

[F5] In an oriented chart, a continuous covector whose integral pairing with every compactly supported smooth vector field vanishes is zero pointwise. ([[lem-gr-compact-variation-coefficient-vanishing]])

[F6] The Levi-Civita derivative obeys the product rule, preserves $g$ and $g^{-1}$, and is torsion-free. ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]])

[A1] $V$ is real-valued and smooth on a neighborhood of the attained $|\varphi|^2$ values, so $V'$ exists and is real there. All fields and variations are smooth, and each variation has compact support in the fixed bundle sector.

[A2] The geometric supplier convention includes $\mathrm{AC}_\omega$ for the canonical tangent-bundle setup; no arbitrary-choice argument is used in the scalar variation. ([[def-countable-choice]])

## Proof

**Proof technique:** compute the three compact first variations, then differentiate the current and stress expressions using the gauge-covariant product rule.

1.1 Let $\eta=\delta\varphi$ be a compactly supported complex section. Direct differentiation gives $\delta_\varphi L_\varphi=2\operatorname{Re}(g^{ab}\overline{D_a\eta}P_b+V'\overline\eta\varphi)$. The gauge-covariant product rule gives $\nabla_a(\overline\eta P^a)=\overline{D_a\eta}P^a+\overline\eta D_aP^a$, so [F3] removes the compact divergence and $\int\overline{D_a\eta}P^a\,\mathrm{vol}_g=-\int\overline\eta D_aP^a\,\mathrm{vol}_g$. Multiplying by $-K_\varphi/(2c)$ yields the displayed scalar variation. If stationarity holds, then $\operatorname{Re}\int\overline\eta E_\varphi\,\mathrm{vol}_g=0$ for all compactly supported $\eta$. In a positively oriented chart, for every compactly supported real vector field $q=q^a\partial_a$, its component $q^0$ is a real test function; choosing $\eta=q^0$ in the local scalar frame gives zero pairing of the covector $W_a=(\operatorname{Re}E_\varphi)\delta_a^0$ with $q$. [F5] implies $\operatorname{Re}E_\varphi=0$. Choosing instead $\eta=iq^0$ gives zero pairing for $W_a=(\operatorname{Im}E_\varphi)\delta_a^0$, so [F5] implies $\operatorname{Im}E_\varphi=0$. Thus $E_\varphi=0$ pointwise. Conversely, $E_\varphi=0$ makes the variation zero for every test section; hence stationarity is equivalent to $E_\varphi=0$. [A1, A2, F1, F3, F5, algebra]

1.2 At fixed $g,\varphi$, a real connection variation $\alpha_a$ gives $\delta_A P_a=-i\lambda\varphi\alpha_a$ and $\delta_A\overline{P_a}=+i\lambda\overline\varphi\alpha_a$. Their contraction is $\delta_A L_\varphi=-2\lambda\operatorname{Im}(\overline\varphi P^a)\alpha_a$, so $\delta_A S_\varphi=\frac1c\int_MK_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)\alpha_a\,\mathrm{vol}_g$. This is the stated current. [F1, given, algebra]

1.3 At fixed lower $A$ and fixed $\varphi$, the inverse-metric variation gives $\delta_gL_\varphi=\operatorname{Re}(\overline{P_a}P_b)q^{ab}$. Combining this with [F2] in $S_\varphi=-K_\varphi(2c)^{-1}\int L_\varphi\mathrm{vol}_g$ yields $\delta_gS_\varphi=-\frac1{2c}\int_M\left[K_\varphi\operatorname{Re}(\overline{P_a}P_b)-\frac{K_\varphi}{2}g_{ab}L_\varphi\right]q^{ab}\,\mathrm{vol}_g$, the displayed Hilbert tensor. [F1, F2, algebra]

2.1 The covariant derivative of $j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)$ is $K_\varphi\lambda\operatorname{Im}(\overline{P_a}P^a+\overline\varphi D_aP^a)$. The first term is real; adding $V'|\varphi|^2$ inside the imaginary part changes nothing because $V'$ is real. Therefore $\nabla_a j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi(D_aP^a-V'\varphi))=K_\varphi\lambda\operatorname{Im}(\overline\varphi E_\varphi)$. [A1, F6, step 1.2, algebra]

2.2 Raise the first index of $T^\varphi$ and differentiate. Using [F6] to differentiate contractions and $\nabla_bL_\varphi=2\operatorname{Re}(\overline{P^a}D_bP_a)+2V'\operatorname{Re}(\overline\varphi P_b)$, the product rule gives $\nabla_a(T^\varphi)^a{}_b=K_\varphi\operatorname{Re}\left(\overline{E_\varphi}P_b+\overline{P^a}(D_aP_b-D_bP_a)\right)$. In a local trivialization, symmetry of the Levi-Civita symbols and commutation of scalar partial derivatives give $D_aP_b-D_bP_a=-i\lambda F_{ab}\varphi$. Hence the second term is $-K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)F_{ab}=F_{ba}j^a$, proving the stated off-shell stress identity. [A1, F1, F6, step 1.3, algebra]

3.1 If $E_\varphi=0$, steps 2.1–2.2 give $\nabla_aj^a=0$ and $\nabla_a(T^\varphi)^a{}_b=F_{ba}j^a$. The scalar functional is gauge invariant because $P_a$ changes by the same phase as $\varphi$, and is diffeomorphism invariant because its integrand is a scalar density; thus the general identity [F4] applies and gives the same raised-index exchange equation. This also checks the sign against the independent variational Noether route. [F1, F4, step 2.1, step 2.2, algebra] ∎

## Remarks

- The proof is local in bundle trivializations, while $j$, $T^\varphi$, and the final identities are global because their defining expressions are gauge invariant.
- The current and stress formulas are classical variational identities; they make no assertion about a quantum field, charge quantization beyond the selected circle representation, or an observed material system.
- The M02/M03 supplier carriers are present as drafts and are used only at their inspected statement interfaces; their proofs are not treated as accepted. The seven typed foundational replacement carriers declared in `deps` are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].

