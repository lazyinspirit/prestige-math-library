---
id: thm-nrqmx-periodic-flux-spectrum
kind: theorem
domain: mathematics
library: physics
title: Spectrum and gauge periodicity of a periodic flux operator
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-nrqmx-periodic-ring-domain
  - thm-nrqmx-interval-unitary-boundaries
  - lem-nrqm-intervals-integration-by-parts
  - thm-nrqm-orbital-and-spin-sphere-onb
  - thm-kato-rellich
  - def-relative-boundedness-with-respect-to-an-operator
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-nrqmx-periodic-ring-domain: mathematical-premise
  thm-nrqmx-interval-unitary-boundaries: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.3.1, particle on a ring around a flux tube"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.1, Aharonov–Bohm flux and phase"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let
$\kappa>0$ and $\alpha\in\mathbb R$. On
$H=L^2(S^1;\mathbb C)=L^2((0,2\pi),d\phi;\mathbb C)$ use the periodic domain
$H^2_{\mathrm{per}}(S^1)$ defined by periodic endpoint traces and define
$$T_\alpha f=\kappa(-i\partial_\phi-\alpha)^2f,\qquad D(T_\alpha)=H^2_{\mathrm{per}}(S^1).$$
Then $T_\alpha$ is self-adjoint and the normalized characters
$e_n(\phi)=(2\pi)^{-1/2}e^{in\phi}$, $n\in\mathbb Z$, form a complete
orthonormal eigenbasis with eigenvalues $\lambda_n=\kappa(n-\alpha)^2$.
Its spectrum is the closed set $\{\lambda_n:n\in\mathbb Z\}$ and its
spectral measures are purely atomic on that set. For every $j\in\mathbb Z$,
multiplication by $e^{ij\phi}$ unitarily intertwines $T_\alpha$ with
$T_{\alpha+j}$. A smooth periodic unit-modulus function $u$ satisfying
$u^{-1}(-i\partial_\phi-\alpha)u=-i\partial_\phi$ exists exactly when
$\alpha\in\mathbb Z$.

## Statement references

[[def-nrqmx-periodic-ring-domain]]

[[thm-nrqmx-interval-unitary-boundaries]]

[[thm-nrqm-orbital-and-spin-sphere-onb]]

[[thm-kato-rellich]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

## Facts & Assumptions

**Given:** the Choice, Countable Choice, and Dependent Choice axioms;
$\kappa>0$, $\alpha\in\mathbb R$, the Hilbert space $H$, and the periodic
domain in the Statement.

[A1] The Choice, Countable Choice, and Dependent Choice hypotheses are those
of the interval realization, Fourier-basis, Kato–Rellich, and unbounded
spectral suppliers ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]).

[F1] For $f\in H^2(0,2\pi)$, the periodic endpoint traces are those of
[[def-nrqmx-periodic-ring-domain]]. The interval Laplacian with the swap
matrix $U=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has exactly these periodic
boundary conditions and is self-adjoint by
[[thm-nrqmx-interval-unitary-boundaries]].

[F2] The characters $e_n=(2\pi)^{-1/2}e^{in\phi}$ are a complete
orthonormal family in $L^2(0,2\pi)$; this follows from the normalized
character argument in Facts & Assumptions [F4] of
[[thm-nrqm-orbital-and-spin-sphere-onb]].

[F3] If $A$ is self-adjoint and $B$ is symmetric on $D(A)$ with
$\|Bf\|\le a\|Af\|+b\|f\|$ for some $a<1$, then $A+B$ on $D(A)$ is
self-adjoint ([[thm-kato-rellich]],
[[def-relative-boundedness-with-respect-to-an-operator]]).

[F4] A self-adjoint operator has a unique regular spectral projection-valued
measure, and its domain and spectral integrals are given by the unbounded
spectral theorem ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F5] Integration by parts on the interval holds for the periodic Sobolev
functions and their endpoint traces; in particular $P=-i\partial_\phi$ is
symmetric on the stated domain
([[lem-nrqm-intervals-integration-by-parts]]).

## Proof

1.1 Set $A_0=-\kappa\partial_\phi^2$ on $H^2_{\mathrm{per}}(S^1)$. In the
boundary coordinates $\Gamma_0f=(f(0),f(2\pi))$ and
$\Gamma_1f=(f'(0),-f'(2\pi))$, the unitary swap matrix in [F1] makes the
boundary equation equivalent to $f(0)=f(2\pi)$ and
$f'(0)=f'(2\pi)$: adding and subtracting its two scalar equations gives
these two equalities. Thus $A_0$ is self-adjoint. Let $P=-i\partial_\phi$.
Integration by parts [F5] and equality of the endpoint traces show that $P$ is
symmetric on $H^2_{\mathrm{per}}$. For $f=\sum_nc_ne_n$ in this domain,
integration by parts gives $\langle Pf,e_n\rangle=nc_n$ and
$\langle A_0f,e_n\rangle=\kappa n^2c_n$. Parseval for [F2] therefore
implies $\|Pf\|_2^2=\sum_n n^2|c_n|^2$ and
$\|A_0f\|_2^2=\kappa^2\sum_n n^4|c_n|^2$. [A1, F1, F2, F5, construct]

2.1 On $D(A_0)$ write
$T_\alpha=A_0+B_\alpha$ with
$B_\alpha=-2\kappa\alpha P+\kappa\alpha^2I$. This operator is symmetric
because $P$ is symmetric and $\alpha,\kappa$ are real. For every
$\varepsilon>0$ and integer $n$,
$|n|\le\varepsilon n^2+(4\varepsilon)^{-1}$; the coefficient identities
in step 1.1 and the triangle inequality give
$\|B_\alpha f\|_2\le a\|A_0f\|_2+b\|f\|_2$ with any prescribed $a>0$
after choosing $\varepsilon$ sufficiently small and then a finite $b$.
Applying [F3] with $a<1$ proves that $T_\alpha$ is self-adjoint on the
stated periodic domain. [A1, F2, F3, step 1.1, algebra]

3.1 Each $e_n$ lies in the periodic domain and direct differentiation gives
$T_\alpha e_n=\kappa(n-\alpha)^2e_n$. Completeness [F2] makes this the full
orthonormal eigenbasis. The associated spectral projections are therefore
the sums of the character projections whose eigenvalues lie in the chosen
Borel set, so every scalar spectral measure is supported on
$\{\kappa(n-\alpha)^2:n\in\mathbb Z\}$. This set has no finite accumulation
point because $\kappa>0$ and $|n-\alpha|\to\infty$. If $z$ is outside it,
$\inf_n|\lambda_n-z|>0$ and the diagonal inverse with coefficients
$(\lambda_n-z)^{-1}$ is bounded and maps onto $D(T_\alpha)$; if $z=\lambda_n$
then $e_n$ is a nonzero kernel vector. Hence the spectrum is exactly the
displayed set and there is no continuous spectral measure. [A1, F2, F4, step 2.1, algebra]

4.1 Let $j\in\mathbb Z$ and $U_jf=e^{ij\phi}f$. It is unitary, preserves
the periodic $H^2$ domain, and
$(P-\alpha-j)U_jf=U_j(P-\alpha)f$ by differentiation; squaring gives
$T_{\alpha+j}U_j=U_jT_\alpha$. If a smooth periodic unit-modulus function
$u$ satisfies the displayed conjugacy, then $(P-\alpha)u=0$, or
$u'=i\alpha u$.
The solutions are $u(\phi)=c e^{i\alpha\phi}$ with $|c|=1$, which are
periodic exactly when $e^{2\pi i\alpha}=1$, equivalently $\alpha\in\mathbb Z$.
Conversely, for integral $\alpha$ this multiplier is single-valued and
periodic. [given, F2, step 3.1, algebra] ∎

## Remarks

The diagram expresses the integer-flux unitary intertwining. Its arrow labels
are the multiplication operators proved in step 4.1; the proof above is
independent of the diagram.

```tikzcd
H^2_{\mathrm{per}}(S^1) \arrow[r,"U_j"] \arrow[d,"T_\alpha"'] & H^2_{\mathrm{per}}(S^1) \arrow[d,"T_{\alpha+j}"] \\
H^2_{\mathrm{per}}(S^1) \arrow[r,"U_j"] & H^2_{\mathrm{per}}(S^1)
```
