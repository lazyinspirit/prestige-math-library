---
id: rem-tgr-generalized-entropy-no-automatic-second-law
kind: remark
title: Generalized entropy requires a separate physical inequality
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - def-tgr-regulated-generalized-entropy
  - pthm-tgr-restricted-classical-area
  - pthm-tgr-area-entropy-calibration
  - def-tgr-finite-cutoff-outside-entropy
  - def-qc-density-operator
  - def-non-negative-and-positive-operator
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - def-countable-choice
dependency_roles:
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  pthm-tgr-restricted-classical-area: formulation-prerequisite
  pthm-tgr-area-entropy-calibration: formulation-prerequisite
  def-tgr-finite-cutoff-outside-entropy: mathematical-premise
  def-qc-density-operator: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: >
  A conditional finite-data comparison for the regulated generalized-entropy
  definition with one fixed geometric contribution, a one-dimensional input
  factor, and two specified finite joint density matrices. It shows only that the additive definition and
  geometric area information do not impose monotonicity on the outside
  entropy. The two labels are not a physical time evolution, and the item
  asserts no empirical result or violation of a physical generalized second
  law.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page PDF; §§10.8–10.9, printed pp. 146–147, equations (10.110)–(10.113); the concise GSL summary is contextual, not the basis of this item's conditional claim."
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete article; §§2.1–2.8, especially §2.8: the GSL argument is conditional on semiclassical, horizon-algebra, and renormalization assumptions; the finite data comparison here is not such a physical evolution."
---

## Statement

For the regulated generalized-entropy model, the finite sum and any finite convergent renormalized value have no monotonicity conclusion by definition alone: a comparison along a physical process requires a specified state evolution and a separate inequality controlling the outside entropy. The restricted classical area-increase result and the restricted area-entropy calibration result do not by themselves bound changes in the outside state entropy.

## Statement references

[[def-tgr-regulated-generalized-entropy]]

[[pthm-tgr-restricted-classical-area]]

[[pthm-tgr-area-entropy-calibration]]

## Facts & Assumptions

**Given:** Two finite model-data entries with $H_{\mathrm{in}}=\mathbb C$ and $H_{\mathrm{out}}=\mathbb C^2$ in their standard inner products and bases $(1)$ and $(f_0,f_1)$. In the ordered product basis $(1\otimes f_0,1\otimes f_1)$, the joint matrices are $\rho_0=\operatorname{diag}(1/2,1/2)$ and $\rho_1=\operatorname{diag}(1,0)$, and the specified geometric contribution $S_{\mathrm{grav}}[\Sigma]$ is the same in both entries. The labels $0$ and $1$ index data entries only; no physical time evolution is assumed.

[F1] [[def-tgr-regulated-generalized-entropy]]: at each finite regulator, $S_{\mathrm{gen}}[\Sigma]=S_{\mathrm{grav}}[\Sigma]+S_{\mathrm{out}}$, with the geometric and finite-normalization data fixed by the declared scheme.

[F2] [[def-tgr-finite-cutoff-outside-entropy]]: the outside density is the partial trace over the input factor, and its entropy is $-k_B\sum_j\lambda_j\log\lambda_j$ over eigenvalues counted with multiplicity, using natural logarithms and $0\log0:=0$.

[F3] [[def-qc-density-operator]]: a density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism of trace one.

[F4] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint and has non-negative quadratic form on every vector.

[F5] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real number $y$ with $\exp(y)=x$.

[F6] [[def-real-exponential-function-and-e]]: $\exp(0)=1$ by the defining power series.

[F7] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F8] [[cor-exponential-reciprocal-and-positivity]]: for real $x$, $\exp(-x)=1/\exp(x)$.

[F9] [[pthm-tgr-restricted-classical-area]]: under its stated $\mathrm{AC}_\omega$, smooth classical Einstein–Maxwell, null-energy, affine-completeness, and persistent-compact-cut hypotheses, the classical horizon area is nondecreasing. Its conclusion contains no outside quantum entropy.

[F10] [[pthm-tgr-area-entropy-calibration]]: under its exact selected stationary-family, $\mathrm{AC}_\omega$, reversible-heat, and reduced-temperature assumptions, the calibrated entropy has coefficient $k_Bc^3/(4G_N\hbar)$ and a free additive offset. It makes no statement about an outside state or a dynamical process.

[A1] The same finite geometric contribution is used in both data entries; the outside matrices are the only changed inputs in this comparison.

[A2] [[def-countable-choice]]: every sequence $(X_n)_{n\ge1}$ of nonempty sets has a function $f$ with $f(n)\in X_n$. This premise is carried only with the exact contextual area-theorem inputs [F9]–[F10]; steps 1.1–2.2 use no choice.

## Proof

1.1 The matrices $\rho_0$ and $\rho_1$ are self-adjoint. For every $z=(z_0,z_1)\in\mathbb C^2$, $\langle \rho_0z,z\rangle=(|z_0|^2+|z_1|^2)/2\ge0$ and $\langle \rho_1z,z\rangle=|z_0|^2\ge0$; each diagonal trace is one. Hence both are density operators by [F3]–[F4]. Since the input factor is one-dimensional, its partial trace has one summand and returns the same two matrices by [F2]. [given, F2, F3, F4, algebra]

1.2 The regulator index $n$ in [F1] labels the declared finite factorization sequence, while the definition assigns a value only at the fixed section $\Sigma$ and declares no map of states between physical cuts. If the sequence converges, its limit is one finite scalar for that section and scheme; convergence alone supplies no physical-time ordering. [given, F1]

2.1 The eigenvalues of $\rho_0$ are $1/2,1/2$, and those of $\rho_1$ are $1,0$. By [F5]–[F7], $\log1=0$ and $\log2>0$: $\exp(0)=1<2=\exp(\log2)$, so strict increase gives $0<\log2$. By [F8], $\exp(-\log2)=1/2$, and uniqueness in [F5] gives $\log(1/2)=-\log2$. Therefore [F2] yields $S_{\mathrm{out},0}=k_B\log2$ and $S_{\mathrm{out},1}=0$. [given, F2, F5, F6, F7, F8, step 1.1, algebra]

3.1 From [F1] and [A1], $S_{\mathrm{gen},1}[\Sigma]-S_{\mathrm{gen},0}[\Sigma]=S_{\mathrm{out},1}-S_{\mathrm{out},0}=-k_B\log2<0$, since $k_B>0$ in the stated physical units. This finite comparison is compatible with a nondecreasing geometric contribution because that contribution is held constant; it is not a physical evolution and supplies no counterexample to a separately hypothesized physical inequality. [given, F1, A1, step 2.1, algebra]

4.1 The finite comparison in step 3.1 shows that the outside entropy term can change while the geometric term remains fixed. Under the countable-choice premise [A2], [F9] supplies only its own conditional classical area inequality, and [F10] supplies only a stationary-family coefficient and offset; neither supplies an inequality for the outside term in this regulated model. Consequently the additive definition, those restricted geometric inputs, and finite convergence alone do not imply monotonicity along a physical process. Such a conclusion needs a stated state evolution and a separate inequality proof. [F1, F9, F10, A2, step 3.1, step 1.2] ∎

## Remarks

The calculation is a comparison of finite model data only. A physical generalized-second-law result needs an actual state evolution and a complete inequality proof under its own state, geometry, regulator, and renormalization assumptions.
