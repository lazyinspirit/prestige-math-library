---
id: cex-nrqmx-infinite-mode-vacuum-warning
kind: counterexample
domain: mathematics
title: Finite-mode implementability does not supply an infinite-mode limit
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqmx-finite-mode-bogoliubov, def-nrqmx-finite-mode-symplectic-data, lem-nrqmx-finite-mode-fock-schr-identification]
dependency_roles:
  thm-nrqmx-finite-mode-bogoliubov: mathematical-premise
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3, pp. 146–156"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
    - title: "Arvind, B. Dutta, N. Mukunda and R. Simon, The Real Symplectic Groups in Quantum Mechanics and Optics, §VI"
      url: "https://arxiv.org/pdf/quant-ph/9509002"
---

## Statement

Fix $s\ne0$. For each finite $N\ge1$, apply independently to $N$ vacuum modes
the one-mode dilation $[U_sf](x)=e^{-s/2}f(e^{-s}x)$. The
resulting finite-mode unitary exists, its mean total number is
$$N\sinh^2(s),$$
and the magnitude of its overlap with the $N$-mode vacuum is
$$|\langle\Omega_N,U_s^{\otimes N}\Omega_N\rangle| =(\cosh s)^{-N/2}\longrightarrow0.$$
These exact finite-$N$ calculations exhibit quantities that are not uniform
in mode number. They do not prove an infinite-mode non-implementability
theorem and do not assign a limiting density operator or measurement.

## Facts & Assumptions

**Given:** A nonzero real squeeze parameter $s$ and finite integer $N\ge1$.

[A1] The squeeze is fixed with $s\in\mathbb R\setminus\{0\}$ and the mode
count is a finite integer $N\ge1$.

[F1] For $u=\cosh s$, $v=\sinh s$, the finite-mode Bogoliubov theorem
supplies an implementer on every fixed finite product of $N$ modes
([[thm-nrqmx-finite-mode-bogoliubov]]).

[F2] The finite-mode Bogoliubov theorem supplies a unitary on every fixed
finite number $N$ of modes; it asserts nothing about an infinite collection
([[thm-nrqmx-finite-mode-bogoliubov]]).

[F3] In Schrödinger coordinates, $Q=\sqrt\hbar x$,
$P=-i\sqrt\hbar\partial_x$, and
$a=(Q+iP)/\sqrt{2\hbar}$; the vacuum is the normalized ground Hermite
function ([[def-nrqmx-finite-mode-symplectic-data]],
[[lem-nrqmx-finite-mode-fock-schr-identification]]).

## Proof

1.1 A change of variables gives
$$\int_{\mathbb R}|U_sf(x)|^2dx =\int_{\mathbb R}|f(y)|^2dy,$$
so $U_s$ is unitary. The chain rule for $Q=\sqrt\hbar x$ and
$P=-i\sqrt\hbar\partial_x$ gives
$U_s^*aU_s=\cosh(s)a+\sinh(s)a^*$. The scalar pair obeys
$|u|^2-|v|^2=1$ and $uv=vu$. For the $N$-mode product take
$U_N=uI_N$ and $V_N=vI_N$; the finite Bogoliubov result [F1] supplies an
implementer for these coefficients. Write
$\psi_s(x)=U_sg_0(x)=e^{-s/2}\pi^{-1/4}e^{-e^{-2s}x^2/2}$. Then
$$a\psi_s=\frac{1-e^{-2s}}{\sqrt2}x\psi_s,\qquad \|a\psi_s\|^2=\frac{(1-e^{-2s})^2}{2}\frac{e^{2s}}2=\sinh^2(s),$$
because the probability density $|\psi_s|^2$ has second position moment
$e^{2s}/2$. By [F3], the $N$-mode Fock–Schrödinger unitary sends its vacuum
$\Omega_N$ to $g_0^{\otimes N}$. On $L^2(\mathbb R^N)$ define
$$[U_s^{(N)}f](x_1,\ldots,x_N)=e^{-Ns/2} f(e^{-s}x_1,\ldots,e^{-s}x_N).$$
Changing variables in all $N$ coordinates proves this is unitary. It is the
product of the one-mode dilations, and the coordinatewise chain rule gives
$U_s^{(N)*}a_jU_s^{(N)}=u a_j+v a_j^*$ for each $j$. The finite Bogoliubov
statement [F1] also supplies an implementer for this coefficient pair. Put
$\Psi_N=(U_s\Omega)^{\otimes N}$ under the same identification; its $j$th
number expectation is the one-mode value $\|a\psi_s\|^2=\sinh^2(s)$ already
computed above. The number operator is the sum of the $N$ mode number
operators, so linearity gives
$$\langle\Psi_N,\mathcal N_N\Psi_N\rangle=N\sinh^2(s).$$
The product unitary exists because it is the tensor product of finitely many
copies of this unitary. The same coefficient pair is covered by the finite
Bogoliubov statement [F2]; no infinite product is taken. [A1, F1, F2, F3,
algebra]

2.1 In Schrödinger coordinates, $\Omega=g_0$ and
$U_sg_0(x)=e^{-s/2}\pi^{-1/4}e^{-e^{-2s}x^2/2}$. Direct Gaussian integration
gives
$$\langle g_0,U_sg_0\rangle =\pi^{-1/2}e^{-s/2}\int_{\mathbb R} e^{-(1+e^{-2s})x^2/2}\,dx =\sqrt{\frac{2}{e^s+e^{-s}}}=\frac1{\sqrt{\cosh s}}.$$
Since $U_s$ and $g_0$ are real and positive here, this is also the overlap
magnitude; the formula holds for every real $s$. Product inner products
factor over the $N$ modes, yielding
$$|\langle\Omega_N,\Psi_N\rangle|=(\cosh s)^{-N/2}.$$
For $s\ne0$, $\cosh s>1$, so this magnitude tends to zero as $N\to\infty$.
Together with step 1.1 this proves only the stated finite-$N$ divergence and
overlap limit. Finite-dimensional implementation does not itself provide an
infinite-mode implementer, and this example does not prove that none exists.
[A1, F1, F2, step 1.1, algebra] ∎
