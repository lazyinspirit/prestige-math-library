---
id: rem-tgr-generalized-entropy-no-automatic-second-law
kind: remark
title: Generalized entropy requires a separate physical inequality
status: published
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
  definition at one fixed section and in one declared scheme, with a common
  finite geometric contribution, one-dimensional input factor, and two
  constant finite-regulator state sequences. It shows only that the additive
  definition and geometric area information do not impose monotonicity on the
  outside entropy. The sequence labels do not denote physical time, and the
  item asserts no empirical result or violation of a physical generalized
  second law.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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

Fix one section $\Sigma$, one declared scheme, and one regulator-label sequence $(\Lambda_n)_{n\ge1}$. For each $r\in\{0,1\}$, take $H_{\mathrm{in},n}=\mathbb C$ and $H_{\mathrm{out},n}=\mathbb C^2$ with their standard inner products and bases $(1)$ and $(f_0,f_1)$. In the ordered product basis $(1\otimes f_0,1\otimes f_1)$, use the joint density matrices $\rho_n^{(0)}=\operatorname{diag}(1/2,1/2)$ and $\rho_n^{(1)}=\operatorname{diag}(1,0)$ for every $n\ge1$. Use the same finite geometric value $S_{\mathrm{grav},n}[\Sigma]=G$ for both sequences and all $n$, where $G$ is a fixed finite real value with units $\mathrm{J\,K^{-1}}$. The index $r$ labels these two sequences only; it is neither physical time nor regulator order. Define $S_{\mathrm{gen}}^{\mathrm{ren},r}[\Sigma]:=\lim_{n\to\infty}\bigl(S_{\mathrm{grav},n}[\Sigma]+S_{\mathrm{out},n}^{(r)}\bigr)$. These limits exist and satisfy

$$S_{\mathrm{gen}}^{\mathrm{ren},1}[\Sigma]-S_{\mathrm{gen}}^{\mathrm{ren},0}[\Sigma]=-k_B\log 2<0.$$

The fixed-section definition supplies no ordered parameter set $J\subseteq\mathbb R$, cut family $s\mapsto\Sigma_s$, state family $s\mapsto(\rho_{s,n})_{n\ge1}$, or comparison inequality such as $S_{\mathrm{gen}}^{\mathrm{ren}}[\Sigma_{s_2}]\ge S_{\mathrm{gen}}^{\mathrm{ren}}[\Sigma_{s_1}]$ for $s_1\le s_2$ in $J$. The displayed comparison is between independently specified model-data sequences, not a physical evolution. The restricted classical area-increase result and the restricted area-entropy calibration result do not supply an inequality for the outside-state entropy.

## Statement references

[[def-tgr-regulated-generalized-entropy]]

[[pthm-tgr-restricted-classical-area]]

[[pthm-tgr-area-entropy-calibration]]

## Facts & Assumptions

**Given:** One fixed section $\Sigma$, one declared scheme, and a regulator-label sequence $(\Lambda_n)_{n\ge1}$. For each comparison label $r\in\{0,1\}$ and every $n\ge1$, take $H_{\mathrm{in},n}=\mathbb C$ and $H_{\mathrm{out},n}=\mathbb C^2$ in their standard inner products and bases $(1)$ and $(f_0,f_1)$. In the ordered product basis $(1\otimes f_0,1\otimes f_1)$, set $\rho_n^{(0)}=\operatorname{diag}(1/2,1/2)$ and $\rho_n^{(1)}=\operatorname{diag}(1,0)$. The same specified finite geometric contribution $S_{\mathrm{grav},n}[\Sigma]=G$ is used for both sequences and all $n$. The labels $r=0,1$ index these two sequences only; $n$ is the regulator index, and no cut family or physical evolution is supplied.

[F1] [[def-tgr-regulated-generalized-entropy]]: at each finite regulator, $S_{\mathrm{gen}}[\Sigma]=S_{\mathrm{grav}}[\Sigma]+S_{\mathrm{out}}$, with the geometric and finite-normalization data fixed by the declared scheme; the physical Boltzmann constant satisfies $k_B>0$ and has units $\mathrm{J\,K^{-1}}$.

[F2] [[def-tgr-finite-cutoff-outside-entropy]]: the outside density is the partial trace over the input factor, and its entropy is $-k_B\sum_j\lambda_j\log\lambda_j$ over eigenvalues counted with multiplicity, using natural logarithms and $0\log0:=0$.

[F3] [[def-qc-density-operator]]: a density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism of trace one.

[F4] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint and has non-negative quadratic form on every vector.

[F5] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real number $y$ with $\exp(y)=x$.

[F6] [[def-real-exponential-function-and-e]]: $\exp(0)=1$ by the defining power series.

[F7] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F8] [[cor-exponential-reciprocal-and-positivity]]: for real $x$, $\exp(-x)=1/\exp(x)$.

[F9] [[pthm-tgr-restricted-classical-area]]: under its stated $\mathrm{AC}_\omega$, smooth classical Einstein–Maxwell, null-energy, affine-completeness, and persistent-compact-cut hypotheses, the classical horizon area is nondecreasing. Its conclusion contains no outside quantum entropy.

[F10] [[pthm-tgr-area-entropy-calibration]]: under its exact selected stationary-family, $\mathrm{AC}_\omega$, reversible-heat, and reduced-temperature assumptions, the calibrated entropy has coefficient $k_Bc^3/(4G_N\hbar)$ and a free additive offset. It makes no statement about an outside state or an ordered cut/state family.

[A1] For every $n$, the same finite geometric contribution $G$ is used in both sequences; their outside matrices are the only changed inputs in this comparison.

[A2] [[def-countable-choice]]: every sequence $(X_n)_{n\ge1}$ of nonempty sets has a function $f$ with $f(n)\in X_n$. This premise is carried only with the exact contextual area-theorem inputs [F9]–[F10]; steps 1.1–2.2 use no choice.

## Proof

1.1 The matrices $\rho_n^{(0)}$ and $\rho_n^{(1)}$ are self-adjoint for every $n$. For every $z=(z_0,z_1)\in\mathbb C^2$, $\langle \rho_n^{(0)}z,z\rangle=(|z_0|^2+|z_1|^2)/2\ge0$ and $\langle \rho_n^{(1)}z,z\rangle=|z_0|^2\ge0$; each diagonal trace is one. Hence both matrices are density operators by [F3]–[F4]. Since the input factor is one-dimensional, its partial trace has one summand and returns the same matrix in each sequence at every $n$ by [F2]. [given, F2, F3, F4, algebra]

1.2 The index $n$ in [F1] is the regulator index within each named sequence; it is distinct from the comparison label $r$. The definition assigns the sequence at the fixed section $\Sigma$ and declares no ordered family of cuts $\Sigma_s$, no corresponding state family $\rho_{s,n}$, and no comparison inequality between different cuts. Thus the two sequences in [given] are not states related by a physical evolution. [given, F1]

2.1 For every $n$, the eigenvalues of $\rho_n^{(0)}$ are $1/2,1/2$, and those of $\rho_n^{(1)}$ are $1,0$. By [F5]–[F7], $\log1=0$ and $\log2>0$: $\exp(0)=1<2=\exp(\log2)$, so strict increase gives $0<\log2$. By [F8], $\exp(-\log2)=1/2$, and uniqueness in [F5] gives $\log(1/2)=-\log2$. Therefore [F2] yields $S_{\mathrm{out},n}^{(0)}=k_B\log2$ and $S_{\mathrm{out},n}^{(1)}=0$ for every $n$. [given, F2, F5, F6, F7, F8, step 1.1, algebra]

3.1 For every $n$, [F1] and [A1] give $S_{\mathrm{gen},n}^{(1)}[\Sigma]-S_{\mathrm{gen},n}^{(0)}[\Sigma]=S_{\mathrm{out},n}^{(1)}-S_{\mathrm{out},n}^{(0)}=-k_B\log2<0$, because $k_B>0$. Both generalized-entropy sequences are constant in $n$, so they converge finitely and their renormalized values satisfy the same strict inequality. It is only a comparison of the two model-data sequences in [given], not an asserted evolution or a counterexample to an independently specified physical inequality. [given, F1, A1, step 2.1, algebra]

4.1 The comparison in step 3.1 has one fixed section and two independently specified state-data sequences; it has no cut parameter or physical ordering. Under the countable-choice premise [A2], [F9] gives a conditional area inequality only for its stated smooth classical null-cut family, while [F10] gives an entropy coefficient and free offset only on its selected stationary family. Neither supplier specifies the state family or an inequality for the outside entropy required to compare different cuts. Therefore these fixed-section assignments and the two restricted geometric results do not establish a monotonicity inequality across any physical cut family. Such a claim requires separately specified cut and state data and a proof of the corresponding inequality. [F1, F9, F10, A2, step 3.1, step 1.2] ∎

## Remarks

The calculation compares two independent sequences of model data at one fixed section. A monotonicity claim for a specified family of cuts would require an ordered parameter set $J\subseteq\mathbb R$, a section $\Sigma_s$ and a regulator/state/geometric sequence at each $s\in J$, finite convergence at each $s$ if renormalized values are used, and a proof that $S_{\mathrm{gen}}^{\mathrm{ren}}[\Sigma_{s_2}]\ge S_{\mathrm{gen}}^{\mathrm{ren}}[\Sigma_{s_1}]$ whenever $s_1\le s_2$ in $J$. None of this comparison data or inequality is part of the fixed-section definition or supplied by the finite example.
