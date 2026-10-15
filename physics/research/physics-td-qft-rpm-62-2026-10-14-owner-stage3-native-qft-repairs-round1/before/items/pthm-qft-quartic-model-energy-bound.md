---
id: pthm-qft-quartic-model-energy-bound
kind: physics-theorem
domain: physics
library: physics
title: Controlled quartic-model ground-energy bound
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 6
deps:
  - post-qft-regulated-polynomial-model
  - post-qft-constructed-model-and-measurement
  - thm-qft-self-adjoint-regulated-interaction
  - lem-qft-coercive-polynomial-form-domain
  - lem-qft-hermite-oscillator-research-supplier
  - lem-qft-regulated-ground-variational-bound
  - def-countable-choice
dependency_roles:
  post-qft-regulated-polynomial-model: physical-assumption
  post-qft-constructed-model-and-measurement: physical-assumption
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qft-regulated-ground-variational-bound: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "One real mode with a positive quartic polynomial at a fixed finite regulator. The energy bound is a model prediction in joules, not an observed value or a continuum result."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §§4.4 and 8.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.139–141 and 212–214, Rayleigh–Ritz and the oscillator ground state."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chs.8–9"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Printed pp.48–54, confining potentials and variational eigenvalue characterizations."
    - title: "David Tong, Quantum Field Theory, author-hosted lecture notes, Chapter 3, Interacting Fields"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html"
      locator: "Complete Chapter 3 HTML, real-scalar phi-four interaction and perturbative-scope discussion."
---

## Statement

Assume Countable Choice and use one fixed one-mode regulator of
[[post-qft-regulated-polynomial-model]] with
dimensionless $a>0$, $r>0$, and $\lambda\ge0$. Here $r$ is a polynomial
coefficient, not an SI rest mass. Take
$V_\lambda(q)=\frac{r^2}{2}q^2+\lambda q^4$ on
$H_1=L^2(\mathbb R,dq;\mathbb C)$, with the form realization from
[[thm-qft-self-adjoint-regulated-interaction]]. Let $\epsilon_g(\lambda)$
be its least eigenvalue. The physical ground-energy prediction for the
adopted scale $E_*>0$ joules is
$E_g^{\rm phys}(\lambda):=E_*\epsilon_g(\lambda)$. Then

$$0\le E_g^{\rm phys}(\lambda)-E_g^{\rm phys}(0)\le \frac{3E_*a\lambda}{2r^2}.$$

For $\lambda>0$, the potential has a nonzero degree-four term and is
interacting in the finite-coordinate sense defined by
[[post-qft-regulated-polynomial-model]]. This conclusion makes no claim about
field scattering or a continuum field theory. The inequality is an exact fixed-regulator model
deduction; it supplies neither an observed energy nor a perturbation-series
or continuum-limit claim.

## Facts & Assumptions

**Given:** Countable Choice; $a>0$, $r>0$, $\lambda\ge0$; the one-mode form realizations; and $E_*>0$ joules.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. The QFT-IR01 spectral and variational suppliers assume this principle.

[A2] [[post-qft-regulated-polynomial-model]]: $q$ is dimensionless, $E_*>0$ is a primitive energy scale in joules, and a self-adjoint form realization $h$ gives $H_{\rm phys}=E_*h$. It defines a polynomial interaction term as a nonzero monomial of total degree at least three in $V$.

[A3] [[post-qft-constructed-model-and-measurement]]: physical interpretation of a Hamiltonian as the selected model's energy operator is adopted only after that self-adjoint operator has actually been constructed.

[F1] [[lem-qft-coercive-polynomial-form-domain]]: for a real polynomial $V$ with $V(q)\ge c q^2-C_0$, the form domain is the completion of $C_c^\infty(\mathbb R;\mathbb C)$ in the norm $\|u\|_Q^2=a\|u'\|_2^2+\int(V+C_0+2)|u|^2dq$, and it injects into $L^2$.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: for $N=1$, coefficients $a>0,c>0$, the oscillator form with potential $cq^2$ has normalized ground function $g_b(q)=(b/\pi)^{1/4}e^{-bq^2/2}$, $b=\sqrt{c/a}$, ground eigenvalue $\sqrt{ac}$, and the proof supplies smooth compact cutoffs with derivative bounded by $C/R$.

[F3] [[lem-qft-regulated-ground-variational-bound]]: under Countable Choice, the least eigenvalue of each selected coercive form realization is the infimum of its form values on normalized vectors in its form domain.

[F4] [[thm-qft-self-adjoint-regulated-interaction]]: under Countable Choice and the coercive polynomial hypotheses, the selected form realization is self-adjoint with compact resolvent, and its lowest eigenvalue is attained.

## Proof

**Proof technique:** direct.

1.1 Since $V_\lambda(q)=r^2q^2/2+\lambda q^4\ge (r^2/2)q^2$, the coercivity hypotheses of [F1] and [F4] hold with $c=r^2/2$ and $C_0=0$. Countable Choice [A1] therefore gives the form domains of [F1] and the self-adjoint compact-resolvent form realizations with attained least eigenvalues from [F4], for both $q_\lambda$ and $q_0$. If $\lambda>0$, the term $\lambda q^4$ is an interaction term by the finite-coordinate definition in [A2]. [A1, A2, F1, F4, given, algebra]

2.1 On $C_c^\infty$, the shifted form norms obey $\|u\|_{Q_0}^2\le\|u\|_{Q_\lambda}^2$ because their difference is $\lambda\int q^4|u|^2dq\ge0$. Hence the identity extends continuously $Q_\lambda\to Q_0$, and the two continuous injections into $L^2$ identify the same representative. On the core, $q_\lambda(u)=q_0(u)+\lambda\int q^4|u|^2dq\ge q_0(u)$; approximating any $u\in Q_\lambda$ by core elements and using continuity of both forms passes this inequality to $u$. For a normalized $u$, [F3] gives $q_0(u)\ge\epsilon_g(0)$, so taking the infimum on $Q_\lambda$ yields $\epsilon_g(\lambda)\ge\epsilon_g(0)$. [A1, F1, F3, F4, step 1.1, algebra]

2.2 Let $g_b(q)=(b/\pi)^{1/4}e^{-bq^2/2}$ with $b=r/\sqrt{2a}$, the normalized ground function in [F2] for $c=r^2/2$. Choose the smooth cutoff $\chi_R(q)=\chi(q/R)$ from [F2], with $\chi=1$ on $[-1,1]$, $\chi=0$ outside $[-2,2]$, and $|\chi_R'|\le C/R$. Then $u_R=\chi_Rg_b\in C_c^\infty$. For $S>R$, $u_R-u_S$ is supported where $|q|\ge R$, and $\|(u_R-u_S)'\|_2\le\|1_{|q|\ge R}g_b'\|_2 +C(R^{-1}+S^{-1})\|1_{|q|\ge R}g_b\|_2\to0$. The weighted part of its $Q_\lambda$ norm is bounded in square by $\int_{|q|\ge R}(r^2q^2/2+\lambda q^4+2)|g_b(q)|^2dq\to0$. These tails vanish because each polynomial times $e^{-bq^2}$ is integrable: for large $|q|$, its product with $|q|^2$ is bounded. Thus $(u_R)$ is $Q_\lambda$-Cauchy. Its $L^2$ limit is $g_b$, so injectivity in [F1] gives $g_b\in Q_\lambda$. [A1, F1, F2, F4, step 1.1, construct, algebra]

3.1 From $g_b'=-bqg_b$ and $\|g_b\|_2=1$, integrate the derivatives of $q e^{-bq^2}$ and $q^3e^{-bq^2}$ over $\mathbb R$. Their boundary terms vanish by Gaussian decay, giving $\int q^2|g_b|^2dq=1/(2b)$ and $\int q^4|g_b|^2dq=3/(4b^2)$. Hence $q_\lambda(g_b)=ab/2+r^2/(4b)+3\lambda/(4b^2)$. At $b=r/\sqrt{2a}$, the first two terms equal $\epsilon_g(0)=r\sqrt{a/2}$ by [F2], and the last term is $3a\lambda/(2r^2)$. [A1, F2, step 2.2, algebra]

4.1 Since $g_b\in Q_\lambda$ is normalized, [F3] gives $\epsilon_g(\lambda)\le q_\lambda(g_b)$. Combining this with step 2.1 and step 3.1 yields $0\le\epsilon_g(\lambda)-\epsilon_g(0)\le3a\lambda/(2r^2)$. [A1, F3, step 2.1, step 3.1, algebra]

5.1 Multiplication by $E_*>0$ preserves both inequalities and gives the stated joule-valued bound. By [A3], this is a selected-model energy prediction and not a reported measurement. [A2, A3, step 4.1, algebra] ∎
