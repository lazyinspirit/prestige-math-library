---
id: thm-booker-strombergsson-cusp-scattering-and-maass-selberg-identities
kind: theorem
title: Booker–Strömbergsson Cusp Scattering Continuation and Maass–Selberg Identity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-booker-strombergsson-general-trace-formula-notation
proof_strategy: eisenstein-continuation-and-truncation
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.1, equations (2.7)–(2.10), (2.29)–(2.33), and the Maass–Selberg identity (2.31)."
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.1: use of the Booker–Strömbergsson general scattering and continuous-spectrum terms."
---

## Statement

Let $\Gamma,\chi$, the open-cusp set $\mathcal C_{\Gamma,\chi}$, the
Eisenstein series $E_j(z,s,\chi)$, and the truncation $F_Y$ be as in the
preceding trace-formula notation definition. The series initially defined for
$\operatorname{Re}(s)>1$ continue meromorphically to $s\in\mathbb C$. Let
$\Phi(s)=[\phi_{j\ell}(s)]_{j,\ell\in\mathcal C_{\Gamma,\chi}}$ be their
ordinary scattering matrix. For each cusp choose $\alpha_a\in[0,1)$ with
$\chi(T_a)=e^{2\pi i\alpha_a}$, and put
$$\rho=\min\left(\{1\}\cup\{\min(\alpha_a,1-\alpha_a):\alpha_a\ne0\}\right)>0.$$
For the modified matrix $\Phi_\Gamma$ in that
definition, if $\mathcal R_{\Gamma,\chi}\ne\varnothing$, then
$$
\Phi_\Gamma(s)\Phi_\Gamma(1-s)=I.
$$

For $j,\ell\in\mathcal C_{\Gamma,\chi}$, $t\in\mathbb R\setminus\{0\}$,
and $Y\ge B_0$, the truncated inner products satisfy
\begin{align*}
\int_{F_Y}E_j(z,1/2+it,\chi)\overline{E_\ell(z,1/2+it,\chi)}\,d\mu(z)
={}&2\delta_{j\ell}\log Y
-\sum_{m\in\mathcal C_{\Gamma,\chi}}
\phi'_{jm}(1/2+it)\phi_{m\ell}(1/2-it)\\
&+\frac{\phi_{j\ell}(1/2-it)Y^{2it}
-\phi_{j\ell}(1/2+it)Y^{-2it}}{2it}
+O\!\left(\omega(t)e^{6|t|-4\pi\rho Y}\right),
\end{align*}
where $\omega:\mathbb R\to[1,\infty)$ is even, depends only on $\Gamma$, and
satisfies $\int_{-T}^T\omega(t)\,dt=O(T^2)$ as $T\to\infty$; the error
bound is uniform in $j,\ell,t,Y$ in the stated ranges.

## Statement references

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Proof status

The source derives this from meromorphic continuation of the cusp Eisenstein
series and the truncated Maass–Selberg relation. Those global analytic
arguments and their uniform remainder estimates are not reconstructed here.
This theorem is retained and escalated as the explicit continuous-spectrum
input to the general cofinite trace formula.

The conjugate on the second Eisenstein series is essential: it restores the
Hermitian product in BS07 equation (2.31), printed p. 11 of the staged author
version. This transcription correction supplies no continuation or spectral proof.

## Source notes

The factor $\rho$ corrects a genuine source error in BS07 (2.31) for arbitrary unitary characters. A closed cusp with nontrivial holonomy has shifted Fourier frequencies $n+\alpha_a$, whose smallest absolute value can be below one. For $\Gamma^+=\Gamma_0(2)$ extended by $z\mapsto-\overline z$ and $\chi(\begin{pmatrix}a&b\\c&d\end{pmatrix})=(-1)^{c/2}$, the open-cusp Eisenstein series has a nonzero half-frequency mode at the closed cusp $0$; its squared tail is of order $e^{-2\pi Y}/Y^2$, contradicting the printed $e^{-4\pi Y}$ rate. The full exact calculation is recorded in the research packet under spectral-supplier-repairs-20261027/scattering-tail/source-error-counterexample.md. The correction preserves arbitrary unitary characters and all other claimed scope; it does not close the missing analytic proof.
