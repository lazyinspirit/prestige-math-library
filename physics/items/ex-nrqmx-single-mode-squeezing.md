---
id: ex-nrqmx-single-mode-squeezing
kind: example
domain: mathematics
title: Single-mode squeeze statistics
status: draft
origin: pipeline
dependency_level: 6
deps: [lem-nrqm-oscillator-closed-ladder-domains, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqmx-gaussian-covariance-uncertainty, def-nrqmx-finite-mode-symplectic-data, lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, cor-c-one-change-of-variables-for-l-one-functions, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-exponential-beats-every-polynomial, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-nrqmx-gaussian-covariance-uncertainty: mathematical-premise
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
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

## Example

Assume the Axiom of Choice. For one mode with $\hbar>0$, let $\Omega$ be the vacuum and define the
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

**Given:** The Axiom of Choice, one finite oscillator mode, $\hbar>0$, vacuum $\Omega$, and real
$s$.

[A1] AC supplies the Countable Choice and finite-mode assumptions of the
cited suppliers ([[def-axiom-of-choice]]). The mode count is one, $\hbar>0$, $s\in\mathbb R$, and $U_s$ is the
dilation displayed in the Example.

[F1] The Fock–Schrödinger unitary sends $\Omega$ to the normalized ground
Hermite function $g_0(x)=\pi^{-1/4}e^{-x^2/2}$ and, on the finite Hermite span, identifies
$a=(Q+iP)/\sqrt{2\hbar}$, with
$Q=\sqrt\hbar x$ and $P=-i\sqrt\hbar\,\partial_x$
([[lem-nrqmx-finite-mode-fock-schr-identification]],
[[def-nrqmx-finite-mode-symplectic-data]]).

[F2] On the finite Hermite span,
$a^*a=(Q^2+P^2)/(2\hbar)-I/2$, and the vacuum satisfies $a\Omega=0$
([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]],
[[lem-nrqmx-finite-mode-fock-schr-identification]]).

[F3] The imported $2\pi$-frequency Gaussian transform gives, for $A>0$ and
$B\in\mathbb R$,
$$\int_{\mathbb R}e^{-Ax^2+iBx}\,dx=\sqrt{\frac\pi A}e^{-B^2/(4A)}$$
by setting $t=A/\pi$ and $\xi=-B/(2\pi)$; polynomial factors times a
positive Gaussian are integrable
([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).
Integration by parts on finite intervals is available, and
$x^m e^{-Ax^2}\to0$ as $|x|\to\infty$ by exponential domination
([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]],
[[thm-exponential-beats-every-polynomial]]).

[F4] If $T:U\to V$ is a $C^1$ diffeomorphism between open subsets of
$\mathbb R$, then Lebesgue substitution applies to every $L^1$ integrand;
in particular it applies to $T(x)=e^{-s}x$ and $|f|^2$
([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F5] The closed one-mode Fock annihilation and creation operators are the
closures of their finite-particle restrictions and are mutual adjoints
([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]).
Under the unitary in [F1], the closed weighted ladders have domains
$\sum_{n\ge0}n|c_n|^2<\infty$ and
$\sum_{n\ge0}(n+1)|c_n|^2<\infty$, respectively, for
$c_n=\langle f,g_n\rangle$. Their actions are
$af=\sum_{m\ge0}\sqrt{m+1}c_{m+1}g_m$ and
$a^*f=\sum_{m\ge1}\sqrt m c_{m-1}g_m$, and $a^*a=N$
on $D(N)=\{f:\sum_{n\ge0}n^2|c_n|^2<\infty\}$
([[lem-nrqm-oscillator-closed-ladder-domains]]).

## Verification

1.1 Work in Schrödinger coordinates via [F1], with inner product linear in the first argument. Put $bf=(xf+f')/\sqrt2$ and $b^\dagger f=(xf-f')/\sqrt2$ for $f\in\mathcal S(\mathbb R)$; both expressions again lie in $\mathcal S$. For $c_n=\langle f,g_n\rangle$, integration by parts gives $\langle bf,g_m\rangle=\langle f,b^\dagger g_m\rangle=\sqrt{m+1}c_{m+1}$ and $\langle b^\dagger f,g_m\rangle=\sqrt m c_{m-1}$ for $m\ge1$, with the latter coefficient zero for $m=0$. The boundary terms vanish since $f$ and each Hermite function are Schwartz. Completeness and Parseval in [F1] give $\sum_{n\ge0}n|c_n|^2=\|bf\|^2<\infty$ and $\sum_{n\ge0}(n+1)|c_n|^2=\|b^\dagger f\|^2<\infty$. Therefore [F5] identifies the actual closed Fock operators with $a=b$ and $a^*=b^\dagger$ on every Schwartz vector, not only on finite Hermite sums. Since $bf$ is Schwartz, $f\in D(a^*a)=D(N)$, and direct differentiation gives $a^*af=b^\dagger bf=(x^2f-f''-f)/2=((Q^2+P^2)/(2\hbar)-I/2)f$. Thus the ladder, adjoint and number identities needed below all hold on the transported Schwartz domain. [A1, F1, F2, F3, F5, algebra]

2.1 Apply [F4] to the diffeomorphism $x\mapsto e^{-s}x$ and
$|f|^2\in L^1$:
$$\int_{\mathbb R}|e^{-s/2}f(e^{-s}x)|^2dx =\int_{\mathbb R}|f(y)|^2dy,$$
and $U_{-s}$ is its inverse, so $U_s$ is unitary. For Schwartz $f$, direct substitution and the chain rule give
$$U_s^*QU_sf=e^sQf,\qquad U_s^*PU_sf=e^{-s}Pf.$$
Using $a=(Q+iP)/\sqrt{2\hbar}$ and
$a^*=(Q-iP)/\sqrt{2\hbar}$, this becomes
$$U_s^*aU_s=\frac{e^s+e^{-s}}2a+ \frac{e^s-e^{-s}}2a^*=\cosh(s)a+\sinh(s)a^*.$$
The dilation maps Schwartz space onto itself, so all identities hold on the
stated common core and the associated Weyl covariance extends everywhere by
unitarity. [A1, F1, F4, step 1.1, algebra]

3.1 The ground function $g_0(x)=\pi^{-1/4}e^{-x^2/2}$ is even, so its
position mean is zero; its derivative is odd, so its momentum mean is zero.
By [F3] with $A=1,B=0$, $\int e^{-x^2}dx=\sqrt\pi$. On $[-R,R]$,
the finite-interval integration-by-parts supplier in [F3] gives
$$\int_{-R}^R x^2e^{-x^2}dx=\left[-\frac{x}{2}e^{-x^2}\right]_{-R}^R+\frac12\int_{-R}^Re^{-x^2}dx.$$
The boundary term tends to zero by [F3], so
$\int x^2|g_0(x)|^2dx=\pi^{-1/2}(\sqrt\pi/2)=1/2$. Also
$g_0'=-xg_0$ gives both vacuum variances $\hbar/2$. Moreover
$\langle Q\Omega,P\Omega\rangle=-i\hbar/2$, so the real symmetrized cross
covariance is zero. For $\psi_s=U_s\Omega$, the unitary conjugation formulas
in step 2.1 give
$$\langle Q\rangle_{\psi_s}=e^s\langle Q\rangle_\Omega=0, \quad \langle Q^2\rangle_{\psi_s}=e^{2s}\hbar/2,$$
and likewise $\langle P\rangle_{\psi_s}=0$ and
$\langle P^2\rangle_{\psi_s}=e^{-2s}\hbar/2$. The cross form is unchanged
because the two scale factors multiply to one, so it remains zero. Therefore
the covariance determinant is the product of the two variances,
$\hbar^2/4$. [F1, F3, step 2.1, algebra]

4.1 Since $U_s$ maps Schwartz space to itself, $\psi_s$ is in the domain of
the number form. By step 1.1 and step 3.1,
$$\langle a^*a\rangle_{\psi_s} =\frac{\langle Q^2+P^2\rangle_{\psi_s}}{2\hbar}-\frac12 =\frac{e^{2s}+e^{-2s}-2}{4}=\sinh^2(s).$$
This is the model's finite one-mode number expectation. [step 1.1, step 3.1,
algebra] ∎
