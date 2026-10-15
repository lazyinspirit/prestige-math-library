---
id: texp-qft-qed-infrared-sequence
kind: thought-experiment
domain: physics
library: physics
title: Explicit soft-profile family has no strong Fock state limit
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - post-qft-free-photon-model
  - lem-qft-qed-coherent-ir-obstruction
  - def-qft-framework-units
  - def-qft-photon-transverse-space
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - lem-qft-photon-covariance-spectrum
dependency_roles:
  post-qft-free-photon-model: physical-assumption
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-photon-covariance-spectrum: mathematical-premise
proof_strategy: direct
physical_scope: "Hypothetical one-parameter family of normalized coherent states in the positive free-photon transverse Fock model. It has exact logarithmically divergent photon number, bounded free-energy expectation, and no Fock-vector limit as the infrared cutoff is removed; it does not construct an interacting charged sector or describe an observed emission."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, Chapter 6, §§6.2–6.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "Complete Chapter 6; §§6.2–6.5 discuss the positive transverse free-photon modes, gauge-fixed QED and formal propagator conventions. The exact cutoff-family conclusion is supplied by the planned local mathematical result."
empirical_premises: []
---

## Statement

Assume Countable Choice [[def-countable-choice]], the positive transverse
free-photon model [[post-qft-free-photon-model]], and the exact conditional
mathematical interface stated below. Use the one-particle space
$\mathcal H_T=\{u\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3):
\mathbf k\cdot u(\mathbf k)=0\text{ for almost every }\mathbf k\ne0\}$
of [[def-qft-photon-transverse-space]], with
$P_T(\mathbf k)=I_3-\mathbf n\mathbf n^T$ and
$\mathbf n=\mathbf k/|\mathbf k|$. Use the symmetric Fock sectors and
second-variable-linear pairing of [[def-qft-fock-and-test-spaces]]. Define
$E(f)=\bigoplus_{n\ge0}f^{\otimes n}/\sqrt{n!}$ and
$C(f)=e^{-\|f\|^2/2}E(f)$.

Fix a unit vector $\mathbf e\in\mathbb R^3$, a dimensionless
$\lambda\in\mathbb R\setminus\{0\}$, and inverse-length cutoffs
$0<\epsilon<\kappa$. Put
$$f_\epsilon(\mathbf k)= \lambda\,\mathbf1_{\{\epsilon<|\mathbf k|<\kappa\}} |\mathbf k|^{-3/2}P_T(\mathbf k)\mathbf e.$$
Here $\mathbf k,\epsilon,\kappa$ have units $\mathrm m^{-1}$,
$\hbar c$ has units joule-metres, and $f_\epsilon$ has momentum-wavefunction
units $\mathrm m^{3/2}$. Let $d\Omega$ be standard surface area measure on
$S^2$. On sector $n$, let $N$ multiply by $n$ and let
$H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$ act by the maximal multiplier
$\hbar c\sum_{j=1}^n|\mathbf k_j|$, with zero on the vacuum, as in the
planned free-photon model. With $C_\lambda=8\pi\lambda^2/3$, the conditional
coherent-family result gives
$$\langle C(f_\epsilon),NC(f_\epsilon)\rangle =C_\lambda\log(\kappa/\epsilon),\qquad \langle C(f_\epsilon),H_\gamma C(f_\epsilon)\rangle =\hbar c C_\lambda(\kappa-\epsilon).$$
Each $C(f_\epsilon)$ is a normalized vector in the number and energy
operator domains. As $\epsilon\downarrow0$, this family has no norm limit,
even after arbitrary phase choices, and converges weakly to zero; zero is not
a normalized state. This exact free-model family does not construct an
interacting charged sector or scattering limit and reports no observation of
photon emission.

## Facts & Assumptions

**Given:** Countable Choice, the fixed unit and momentum conventions, the
positive transverse free-photon model, and the mathematical supplier
interfaces stated below.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. The transverse space, Fock construction, and planned coherent-tail
result use this weaker choice assumption; no full AC is inferred.

[F1] [[def-qft-framework-units]]: $x^0=ct$, momenta and $\kappa,\epsilon$
have inverse-length units, $\hbar c$ has units joule-metres, and the
dimensionless charge/field conventions use $h=-\eta$.

[F2] [[def-qft-photon-transverse-space]]: under Countable Choice,
$\mathcal H_T$ is the closed range of multiplication by
$P_T(\mathbf k)=I_3-\mathbf n\mathbf n^T$ in
$L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$; its almost-everywhere vectors
are transverse.

[F3] [[def-qft-fock-and-test-spaces]]: bosonic Fock is the square-summable
direct sum of symmetric tensor sectors with the stated vacuum and
second-variable-linear pairing; its exponential vector is
$E(f)=\bigoplus_{n\ge0}f^{\otimes n}/\sqrt{n!}$.

[L1] [[post-qft-free-photon-model]] and
[[lem-qft-photon-covariance-spectrum]]: the current batch-52 QFT-G01 manifest
lists this draft postulate, which adopts the positive transverse Fock model
and $H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$; the photon-spectrum lemma
supplies its exact self-adjoint domain and multiplier interface. The postulate
has no current Step-1 readiness record. Its QFT-MG01 prerequisites have mixed
item readiness states; their exact carriers and receipts are recorded in the
batch-53 cross-batch dependency evidence. The model use is conditional.

[L2] [[lem-qft-qed-coherent-ir-obstruction]]: the current batch-45 QFT-MG03
manifest lists this draft lemma. For any nonzero transverse
$b\in L^2(S^2;\mathbb C^3)$, with
$f_\epsilon(\mathbf k)=\mathbf1_{\epsilon<|\mathbf k|<\kappa}
|\mathbf k|^{-3/2}b(\mathbf k/|\mathbf k|)$ and
$C_b=\int_{S^2}|b(\mathbf n)|^2d\Omega>0$, the normalized coherent
vectors have norm squared $C_b\log(\kappa/\epsilon)$, energy
$\hbar c C_b(\kappa-\epsilon)$, lie in the number and energy operator
domains, converge weakly to zero, and have no strong Fock-space limit. Its
complete draft proof is present and inspected. Its Step-1 record is escalated because
the QFT-MG01 transverse-energy input has no readiness receipt; the exact use
here remains conditional.

## Proof

**Given:** [A1], [F1]–[F3], [L1]–[L2], $\mathbf e$ unit,
$\lambda\ne0$, and $0<\epsilon<\kappa$.

1.1 For $\mathbf n\in S^2$, set
$b(\mathbf n)=\lambda(I_3-\mathbf n\mathbf n^T)\mathbf e$. Then
$\mathbf n\cdot b(\mathbf n)=0$. Since $\mathbf e$ is unit,
$|b(\mathbf n)|^2=\lambda^2(1-(\mathbf n\cdot\mathbf e)^2)$. The function
is continuous on $S^2$ and hence measurable. [A1, F2, given, algebra]

2.1 Rotational invariance lets us take $\mathbf e$ as the polar axis. With
$u=\mathbf n\cdot\mathbf e$, spherical integration gives
$$C_b=\int_{S^2}|b(\mathbf n)|^2d\Omega =2\pi\lambda^2\int_{-1}^1(1-u^2)\,du =\frac{8\pi\lambda^2}{3}>0.$$
Using $d^3\mathbf k=r^2dr\,d\Omega$ and
$|f_\epsilon(r\mathbf n)|^2=r^{-3}|b(\mathbf n)|^2$ gives
$$\|f_\epsilon\|^2=C_b\int_\epsilon^\kappa\frac{dr}{r} =C_b\log(\kappa/\epsilon),\qquad \int_{\mathbb R^3}\hbar c|\mathbf k||f_\epsilon(\mathbf k)|^2d^3\mathbf k =\hbar c C_b\int_\epsilon^\kappa dr =\hbar c C_b(\kappa-\epsilon).$$
Both integrals are finite because $0<\epsilon<\kappa$. The profile has units
$\mathrm m^{3/2}$ because $|\mathbf k|^{-3/2}$ has those units and $b$ is
dimensionless; the energy integral has units joules because $\hbar c$ has
units joule-metres. Thus $b$ satisfies the nonzero transverse-profile
hypothesis of [L2] with the conventions [F1].
[A1, F1, F2, L2, step 1.1, algebra]

3.1 The definition of $b$ gives
$f_\epsilon(\mathbf k)=\mathbf1_{\epsilon<|\mathbf k|<\kappa}
|\mathbf k|^{-3/2}b(\mathbf k/|\mathbf k|)$. Applying [L2] with
$C_b=8\pi\lambda^2/3$ and the Hamiltonian of [L1] gives the normalized
coherent vector, its number and energy domain membership, both expectation
formulas, weak convergence to zero, and failure of strong Fock-space
convergence. The item-level suppliers are present in the active manifests,
but [L1] has no Step-1 record and [L2] is escalated, so this application
remains conditional rather than accepted.
[A1, F1, F2, F3, L1, L2, step 2.1]

4.1 Let $\epsilon_j=\kappa 2^{-j}$ for $j\ge1$. By step 3.1 the difference
$f_{\epsilon_{j+1}}-f_{\epsilon_j}$ is supported on
$\epsilon_{j+1}<|\mathbf k|<\epsilon_j$, so spherical integration gives
$$\|f_{\epsilon_{j+1}}-f_{\epsilon_j}\|^2
=C_b\int_{\epsilon_{j+1}}^{\epsilon_j}\frac{dr}{r}
=C_b\log 2>0.$$
From the Fock direct-sum pairing in [F3], the tensor product pairing on
sector $n$ gives
$$\langle C(f),C(g)\rangle
=e^{-(\|f\|^2+\|g\|^2)/2}
\sum_{n=0}^{\infty}\frac{\langle f,g\rangle^n}{n!}
=e^{-(\|f\|^2+\|g\|^2)/2+\langle f,g\rangle},$$
where the series is absolutely convergent by
$|\langle f,g\rangle|\le\|f\|\|g\|$. Hence
 $|\langle C(f),C(g)\rangle|=e^{-\|f-g\|^2/2}$. By [L2],
$\|C(f_{\epsilon_j})\|=1$ for each $j$. For any choices of phases
$\alpha_j\in\mathbb R$, the unit vectors
$v_j=e^{i\alpha_j}C(f_{\epsilon_j})$ satisfy
$$\|v_{j+1}-v_j\|^2
=2-2\operatorname{Re}\langle v_j,v_{j+1}\rangle
\ge2(1-e^{-C_b\log 2/2})>0.$$
This bound holds for every phase sequence, so none is Cauchy. Any
phase-adjusted norm limit as $\epsilon\downarrow0$ would restrict to a
Cauchy sequence along $\epsilon_j$; therefore no such limit exists.
[A1, F3, L2, step 2.1, step 3.1, algebra]

5.1 By [L2], each vector has norm one and the weak limit is zero. Since the
zero vector has norm zero, it is not a normalized state; the nonexistence of
a norm limit follows from steps 3.1 and 4.1. [L2, step 3.1, step 4.1, algebra] ∎
