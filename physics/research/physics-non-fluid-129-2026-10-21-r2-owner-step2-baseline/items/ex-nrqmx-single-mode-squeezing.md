---
id: ex-nrqmx-single-mode-squeezing
kind: example
domain: mathematics
title: Single-mode squeeze statistics
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqmx-gaussian-covariance-uncertainty, def-nrqmx-finite-mode-symplectic-data, lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]
dependency_roles:
  thm-nrqmx-gaussian-covariance-uncertainty: mathematical-premise
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §II.B.3, Eqs. (32)–(33)"
      url: "https://arxiv.org/pdf/1110.3234"
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3, pp. 146–151"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
---

## Statement

For one mode with $\hbar>0$, let $\Omega$ be the vacuum and define the
unitary dilation on $L^2(\mathbb R)$ by
$$[U_sf](x)=e^{-s/2}f(e^{-s}x),\qquad s\in\mathbb R.$$
Then
$$U_s^*aU_s=\cosh(s)a+\sinh(s)a^*$$
on the transported Schwartz core. The squeezed vacuum $U_s\Omega$ has mean
number $\sinh^2(s)$ and quadrature means zero and variances
$$\operatorname{Var}(Q)=\frac{\hbar}{2}e^{2s},\qquad \operatorname{Var}(P)=\frac{\hbar}{2}e^{-2s}.$$
Its covariance determinant is $\hbar^2/4$. The implementer orientation is
the pullback convention displayed here; replacing $s$ by $-s$ interchanges
the two variances.

## Facts & Assumptions

**Given:** One finite oscillator mode, $\hbar>0$, vacuum $\Omega$, and real
$s$.

[A1] The mode count is one, $\hbar>0$, $s\in\mathbb R$, and $U_s$ is the
dilation displayed in the Statement.

[F1] The Fock–Schrödinger unitary sends $\Omega$ to the normalized ground
Hermite function $g_0(x)=\pi^{-1/4}e^{-x^2/2}$ and identifies
$a=(Q+iP)/\sqrt{2\hbar}$, with
$Q=\sqrt\hbar x$ and $P=-i\sqrt\hbar\,\partial_x$
([[lem-nrqmx-finite-mode-fock-schr-identification]],
[[def-nrqmx-finite-mode-symplectic-data]]).

[F2] On the Schwartz core,
$a^*a=(Q^2+P^2)/(2\hbar)-I/2$, and the vacuum satisfies $a\Omega=0$
([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]],
[[lem-nrqmx-finite-mode-fock-schr-identification]]).

## Proof

1.1 A change of variables shows $U_s$ is unitary, since
$$\int_{\mathbb R}|e^{-s/2}f(e^{-s}x)|^2dx =\int_{\mathbb R}|f(y)|^2dy.$$
For Schwartz $f$, direct substitution and the chain rule give
$$U_s^*QU_sf=e^sQf,\qquad U_s^*PU_sf=e^{-s}Pf.$$
Using $a=(Q+iP)/\sqrt{2\hbar}$ and
$a^*=(Q-iP)/\sqrt{2\hbar}$, this becomes
$$U_s^*aU_s=\frac{e^s+e^{-s}}2a+ \frac{e^s-e^{-s}}2a^*=\cosh(s)a+\sinh(s)a^*.$$
The dilation maps Schwartz space onto itself, so all identities hold on the
stated common core and the associated Weyl covariance extends everywhere by
unitarity. [A1, F1, algebra]

2.1 The ground function $g_0(x)=\pi^{-1/4}e^{-x^2/2}$ is even, so its
position mean is zero; its derivative is odd, so its momentum mean is zero.
The Gaussian integral gives $\int x^2|g_0(x)|^2dx=1/2$, and
$g_0'=-xg_0$ gives both vacuum variances $\hbar/2$. Moreover
$\langle Q\Omega,P\Omega\rangle=-i\hbar/2$, so the real symmetrized cross
covariance is zero. For $\psi_s=U_s\Omega$, the unitary conjugation formulas
in step 1.1 give
$$\langle Q\rangle_{\psi_s}=e^s\langle Q\rangle_\Omega=0, \quad \langle Q^2\rangle_{\psi_s}=e^{2s}\hbar/2,$$
and likewise $\langle P\rangle_{\psi_s}=0$ and
$\langle P^2\rangle_{\psi_s}=e^{-2s}\hbar/2$. The cross form is unchanged
because the two scale factors multiply to one, so it remains zero. Therefore
the covariance determinant is the product of the two variances,
$\hbar^2/4$. [F1, step 1.1, algebra]

3.1 Since $U_s$ maps Schwartz space to itself, $\psi_s$ is in the domain of
the number form. By [F2] and step 2.1,
$$\langle a^*a\rangle_{\psi_s} =\frac{\langle Q^2+P^2\rangle_{\psi_s}}{2\hbar}-\frac12 =\frac{e^{2s}+e^{-2s}-2}{4}=\sinh^2(s).$$
This is the model's finite one-mode number expectation. [F2, step 2.1,
algebra] ∎
