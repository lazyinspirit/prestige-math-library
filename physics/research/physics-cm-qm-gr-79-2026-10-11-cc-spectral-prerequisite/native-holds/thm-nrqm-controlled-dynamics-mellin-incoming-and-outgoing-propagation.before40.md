---
id: thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation
aliases: [nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]
kind: theorem
domain: mathematics
title: "Mellin incoming and outgoing propagation"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, thm-stone-one-parameter-unitary-groups, def-projection-valued-measure, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. G. Newton, Scattering Theory of Waves and Particles, 2nd ed., Chapter 3 (Mellin transform and incoming/outgoing estimates; standard monograph treatment)"
      url: "https://www.math.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (scattering theory and asymptotic estimates)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ and let
$$U(s)\psi(x):=e^{-3s/2}\psi(e^{-s}x)\qquad(s\in\mathbb R)$$
be the unitary dilation group. Then:

(a) $U$ is a strongly continuous one-parameter unitary group whose self-adjoint generator $D$ has $D\psi=-i(x\cdot\nabla+3/2)\psi$ on the dense core of compactly supported $C^\infty$ functions; in polar-logarithmic coordinates $T\psi(\rho,\Omega)=e^{3\rho/2}\psi(e^\rho\Omega)$ the operator $TDT^*$ is the generator of translations in $\rho$, and one-dimensional Fourier transformation in $\rho$ conjugates $D$ to multiplication by a real coordinate.

(b) With $P_\pm:=\mathbf 1_{(0,\infty)}(\pm D)$ ([[def-projection-valued-measure]]) one has $P_++P_-=I$, since the spectral measure of $D$ has no atom at $0$.

(c) *Outgoing/incoming estimate.* For every $f\in C_c^\infty((0,\infty))$ with $\operatorname{supp}f\subseteq(a^2,b^2)$, $0<a<b$, there is for every integer $N$ a constant $C_N$ with
$$\bigl\|\mathbf 1_{\{|x|<2at\}}e^{-itH_0}f(H_0)P_+\bigr\|\le C_Nt(1+t)^{-N}\qquad(t\ge1),$$
and the analogous bound with $P_-$ holds for $t\le-1$; consequently
$P_\pm f(H_0)e^{-itH_0}\to0$ strongly as $t\to\mp\infty$.

## Facts & Assumptions

**Given:** $H_0=-\Delta$, the dilation group $U$, the number $t\ge1$, the cutoff radius $a>0$, and $f\in C_c^\infty((0,\infty))$ with $\operatorname{supp}f\subseteq(a^2,b^2)$.

[F1] $U(s)$ is unitary for every $s$ (change of variables $x\mapsto e^{-s}x$), strongly continuous, with generator $-D$; $D$ is self-adjoint on its domain and $e^{-itH_0}=\mathcal F_2^*M_{e^{-4\pi^2it|\xi|^2}}\mathcal F_2$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-stone-one-parameter-unitary-groups]], [[thm-plancherel]]).

[F2] In polar-logarithmic coordinates $(\rho,\Omega)\mapsto x=e^\rho\Omega$ the measure $dx=e^{3\rho}d\rho\,d\sigma(\Omega)$, so $T$ is unitary onto $L^2(d\rho\,d\sigma)$; on compactly supported smooth radial functions the conjugation $TDT^*$ equals $i\partial_\rho$ and one-dimensional Fourier transformation conjugates it to multiplication by the coordinate; the same formula holds on the spherical-harmonic decomposition channelwise ([[def-schwartz-space-and-its-seminorms]], [[thm-plancherel]]).

[F3] The kernel representation of the free propagator and its bound $\|e^{-itH_0}\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1$ for $\psi\in L^1\cap L^2$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]], [[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]]).

## Proof

1.1 [Spectral splitting in the dilation variable] By [F1] and [F2], $D$ is self-adjoint, its spectrum is all of $\mathbb R$ in the Fourier-transformed variable, and $P_\pm$ are the spectral projections on the positive and negative half-lines; the zero projection vanishes because Lebesgue measure has no atoms, so $P_++P_-=I$. [F1, F2, algebra]

1.2 [The oscillatory integral] For $f\in C_c^\infty((0,\infty))$ and vectors in the Fourier-transformed dilation representation, the kernel of $\mathbf 1_{|x|<2at}e^{-itH_0}f(H_0)P_+$ is a sum over spherical harmonics of scalar radial integrals of the form $\int_0^\infty r^{1/2}f(r^2)\exp\bigl(i[tr^2-r\Omega\cdot x-\lambda\log r]\bigr)g_\lambda(r)\,dr$ with $\lambda<0$ parametrizing $P_+$, by [F2] and the free-propagator kernel [F3]; the phase derivative with respect to $\log r$ is at least $c(t+|\lambda|)$ on the amplitude support when $|x|<2at$ and $t\ge1$. [F1, F2, F3, algebra]

2.1 [Repeated integration by parts] Repeated compact-support integration by parts against this derivative bounds the integral by $C_N(1+t+|\lambda|)^{-N}$ for every $N$, since each quotient derivative contributes another bounded ratio and one more reciprocal power of $t+|\lambda|$; integrating the square of this bound over $\lambda<0$, $\Omega\in S^2$ and $|x|<2at$ gives a Hilbert–Schmidt norm of at most $C_Nt^2(1+t)^{-N}$, hence an operator norm of at most $C_Nt(1+t)^{-N/2}$; increasing $N$ gives the stated decay. Reversing the sign of $t$ and replacing $P_+$ by $P_-$ gives the incoming estimate; splitting a fixed vector into $\{|x|<2a|t|\}$ and its $L^2$ tail, and letting $|t|\to\infty$, yields the strong limits $P_\pm f(H_0)e^{\mp itH_0}\to0$. [step 1.2, F3, algebra] ∎
