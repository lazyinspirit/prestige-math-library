---
id: pthm-tgr-supported-redshift-heat-relaxation
kind: physics-theorem
title: Conditional redshift heat relaxation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - post-tgr-supported-static-heat-model
  - post-tgr-local-entropy-admissibility
  - thm-tgr-supported-static-heat-evolution
dependency_roles:
  post-tgr-supported-static-heat-model: physical-assumption
  post-tgr-local-entropy-admissibility: physical-assumption
  thm-tgr-supported-static-heat-evolution: mathematical-premise
justified_by: []
physical_scope: "Conditional deduction for the fixed-background supported parabolic heat model of post-tgr-supported-static-heat-model, with compatible positive data; no claim of empirical realization, full Einstein-fluid dynamics, causality, or finite propagation."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 5.1–5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture-note PDF; PDF pp. 16–19: local thermodynamic differential, stress-energy balance and its observer projection. The source is context; the static heat conclusions use the exact conditional mathematical supplier and are not attributed to the perfect-fluid treatment."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.4.1–IX.4.4"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page lecture-note PDF; PDF pp. 152–159 (printed pp. 144–151): dissipative energy-momentum currents, entropy balance, first-order constitutive assumptions and the limitation that first-order relativistic dynamics need not be causal or stable. The exact heat-only branch is separately assumed and proved conditionally here."
    - title: "John K. Hunter, Notes on Partial Differential Equations, revised 18 June 2014, University of California, Davis"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Full 242-page lecture-note PDF; §5.1.2, Theorem 5.5 and proof, printed pp. 130–131 (PDF pp. 137–138): Gaussian convolution smoothing and the positive-time heat equation. It does not supply the model-specific boundary or physical conclusions."
---

## Statement

Use the fixed static box, positive bounded lapse $N$, constants, material state function, observer field, heat flux, support, initial-data class, and SI conventions of [[post-tgr-supported-static-heat-model]]. Let $\widetilde\vartheta_0$ be its positive $C^2$ even periodic extension, and define $|\Omega|=L_1L_2L_3$, $\overline\vartheta=|\Omega|^{-1}\int_\Omega\vartheta_0\,dx$, and $C_\Omega=\frac32(\max_iL_i)^2$. Use Euclidean Lebesgue volume $dx$ and the associated $L^2(\Omega)$ norm. Then the model has a unique solution

$$T\in C([0,\infty)\times\overline\Omega)\cap C^{2,1}((0,\infty)\times\overline\Omega),$$

where $C^{2,1}$ means two continuous spatial derivatives and one continuous time derivative up to the box faces at positive times. With $\vartheta=NT$ and $\Gamma(z,\tau)=(4\pi\tau)^{-3/2}\exp(-|z|^2/(4\tau))$ for $z\in\mathbb R^3$ and $\tau>0$, the solution is

$$\vartheta(t_K,x)=\int_{\mathbb R^3}\Gamma\!\left(x-y,\frac{A_0}{C_V}t_K\right)\widetilde\vartheta_0(y)\,dy\quad(t_K>0),\qquad \vartheta(0,x)=\vartheta_0(x),\qquad T=\frac{\vartheta}{N}.$$

It satisfies $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$, the six insulated-face conditions $\partial_\nu\vartheta=0$, and $m_0\leq\vartheta\leq M_0$. The lapse-weighted material energy

$$\mathcal E_K(t_K)=\int_\Omega N(x)\epsilon(t_K,x)\,dx$$

is constant. For the entropy current $S^a=su^a+Q^a/T$ and total entropy $\mathcal S(t_K)=\int_\Omega s(t_K,x)\,dx$, the exact model rate is

$$\frac{d\mathcal S}{dt_K}=A_0\int_\Omega\frac{|\nabla_x\vartheta|^2}{\vartheta^2}\,dx\geq0.$$

Moreover,

$$\left\|\vartheta(t_K,\cdot)-\overline\vartheta\right\|_{L^2(\Omega)}\leq\exp\!\left(-\frac{A_0t_K}{C_VC_\Omega}\right)\left\|\vartheta_0-\overline\vartheta\right\|_{L^2(\Omega)}.$$

Thus $T$ converges in $L^2(\Omega)$ to the positive proper-temperature profile $T_{\rm eq}(x)=\overline\vartheta/N(x)$, while the redshifted temperature $NT$ converges to the constant $\overline\vartheta$. These are conditional predictions of the adopted model. They do not establish that a real material obeys the postulates, and they do not assert a full Einstein-fluid solution, causal or stable relativistic-fluid evolution, or finite propagation speed. No empirical data are used.

## Facts & Assumptions

**Given:** The static box model, positive lapse bounds, material branch, constants, SI units, compatible initial profile, heat equation, support condition, and entropy current specified in [[post-tgr-supported-static-heat-model]]. The same current is required to satisfy the selected material's local admissibility condition in [[post-tgr-local-entropy-admissibility]].

[A1] [[post-tgr-supported-static-heat-model]]: on $O=(0,\infty)\times\Omega$, $g=-N^2(dx^0)^2+\sum_i(dx^i)^2$, $\xi=\partial_{x^0}$, $u=N^{-1}\xi$, and $\vartheta=NT$; $N$ is smooth and bounded strictly above zero on the box. The material EOS gives $p=0$ and $\epsilon=C_VT+n_0e_0$. The adopted flux, coefficient, energy balance and boundary data are $q=-(A_0/N)(\nabla_xT+T\nabla_x\log N)$, $NC_V\partial_{t_K}T+\operatorname{div}_x(N^2q)=0$, and $N^2q\cdot\nu=0$.

[A2] [[post-tgr-local-entropy-admissibility]]: for the separately specified smooth current $S^a$ of this material model, adopt $\nabla_aS^a\geq0$ throughout its declared regime. This is an applicability postulate; it is not used to replace the calculation of the entropy rate below.

[F1] [[thm-tgr-supported-static-heat-evolution]]: for the positive bounded lapse, rectangular box, fixed material state, coefficient $A_0/N$, insulated faces and positive even-reflected periodic $C^2$ data stated there, the exact heat model has a unique all-time solution with $m_0\leq NT\leq M_0$, conserved lapse-weighted energy, the displayed nonnegative entropy rate, and exponential $L^2$ relaxation of $NT$ to its initial mean. Its complete proof is conditional on its exact listed mathematical suppliers and uses exactly Countable Choice $\mathrm{AC}_\omega$ through that dependency chain, not unrestricted Axiom of Choice. The consumer uses this actual statement and its hypotheses, not its draft label as an acceptance stamp.

## Proof

1.1 In the static metric of [A1], $\xi$ is independent of $x^0$ and the lapse is positive, so the selected rest field is $u=N^{-1}\xi$. The specialization of the first-order closure in [A1] has $\nabla_xT+T\nabla_x\log N=N^{-1}\nabla_x(NT)=N^{-1}\nabla_x\vartheta$. Therefore $N^2q=-A_0\nabla_x\vartheta$, and since $N$ is time independent, $N\partial_{t_K}T=\partial_{t_K}\vartheta$. Substitution into the adopted balance gives $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$; the insulated condition is exactly $\partial_\nu\vartheta=0$. The EOS and support/current conventions in [A1] are the same as those required by [F1]. [given, A1, F1, algebra]

2.1 The extension in [A1] is bounded and uniformly continuous because it is continuous and periodic, and it has the positive even-reflected boundary compatibility required by [F1]. Every box length is positive, $A_0,C_V>0$, and $N_{\min}>0$; thus all positivity and regularity hypotheses of [F1] hold. Apply [F1] to obtain its unique solution, Gaussian representation, positive bounds, conserved $\mathcal E_K$, entropy-rate identity, and exponential estimate. By [A1], this is the solution of the selected physical model with its stated support and units. [step 1.1, A1, F1, algebra]

3.1 The entropy current in [F1] is $S^a=su^a+Q^a/T$ with $Q=q/c$, exactly as in [A1]. The adopted local admissibility condition [A2] is an explicit physical premise for this current. Independently, [F1] gives the total entropy rate as the displayed integral, whose integrand is nonnegative because $A_0>0$ and $\vartheta\geq m_0>0$; hence total entropy is nondecreasing. The same supplier gives conservation of the lapse-weighted energy. [step 2.1, A1, A2, F1, algebra]

4.1 Since $N(x)\geq N_{\min}>0$, $|T(t_K,x)-T_{\rm eq}(x)|=|\vartheta(t_K,x)-\overline\vartheta|/N(x)\leq N_{\min}^{-1}|\vartheta(t_K,x)-\overline\vartheta|$. Taking the $L^2(\Omega)$ norm and using the estimate from [F1] proves $T\to\overline\vartheta/N$ in that norm. The limit is positive because $\overline\vartheta\geq m_0>0$, and $N T_{\rm eq}=\overline\vartheta$ is constant. These are conditional model deductions, not empirical findings. [step 2.1, F1, algebra] ∎
