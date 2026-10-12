---
id: thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization
aliases: [nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]
kind: theorem
domain: mathematics
title: "Airy contour and Fresnel normalization"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-composites-complex-gaussian-continuation, thm-plancherel, thm-fourier-inversion-on-schwartz-space, def-complex-differentiability-holomorphic-and-entire, def-complex-logarithms-principal-logarithm-and-complex-powers, def-schwartz-space-and-its-seminorms, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Section 9.2 'Differential Equation' (Airy's equation A''=zA and its solutions)"
      url: "https://dlmf.nist.gov/9.2"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.5 'Integral Representations' (Airy contour integrals and Fresnel normalization)"
      url: "https://dlmf.nist.gov/9.5"
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapters 4 and 11 (Airy functions and their asymptotics) — classical monograph treatment consulted through the DLMF survey of the same theory"
      url: "https://dlmf.nist.gov/9.7"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $C$ be the
contour in $\mathbb C$ from $\infty e^{-i\pi/3}$ through $0$ to $\infty e^{i\pi/3}$
and define
$$A(z):=\frac1{2\pi i}\int_Ce^{t^3/3-zt}\,dt .$$
Then:

(a) the integral converges absolutely on compact sets and $A$ is entire with
$A''(z)=zA(z)$;

(b) for real $z$, after deforming each ray to the imaginary axis,
$$A(z)=\frac1{2\pi}\int_{\mathbb R}e^{i(t^3/3+zt)}\,dt$$
as a convergent oscillatory improper integral, with uniformly convergent
$z$-derivatives on compact real sets;

(c) as $Z\to+\infty$,
$$A(Z)=\frac1{2\sqrt\pi}Z^{-1/4}e^{-2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),\qquad A'(Z)=-\frac1{2\sqrt\pi}Z^{1/4}e^{-2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr);$$

(d) as $Z\to+\infty$, with $\Theta:=2Z^{3/2}/3+\pi/4$,
$$A(-Z)=\frac1{\sqrt\pi}Z^{-1/4}\bigl(\sin\Theta+O(Z^{-3/2})\bigr),\qquad A'(-Z)=-\frac1{\sqrt\pi}Z^{1/4}\bigl(\cos\Theta+O(Z^{-3/2})\bigr).$$

The error terms are absolute envelope errors and are not relative errors at the
zeros of $A(-Z)$.

## Facts & Assumptions

**Given:** the contour $C$, the function $A$, and $Z>0$.

[F1] Complex analysis on the contour: for $t$ on the rays $t=Re^{\pm i\pi/3}$ the cubic part has real part $-R^3/8$, so every integral $\int_Ct^ke^{t^3/3-zt}dt$ converges uniformly on compact $z$-sets; differentiating under the integral and integrating $\partial_t(e^{t^3/3-zt})=(t^2-z)e^{t^3/3-zt}$ along $C$ (the endpoint contributions vanish by cubic decay) gives $A''(z)=zA(z)$, and $A$ is entire ([[def-complex-differentiability-holomorphic-and-entire]], [[def-schwartz-space-and-its-seminorms]]).

[F2] Deformation and oscillatory representation: the joining arcs at infinity have cubic decay uniformly for $|\arg t|\in[\pi/3,\pi/2]$, so the vertical-axis representation of (b) holds, and the oscillatory tails and their first $z$-derivatives converge uniformly on compact real sets by integration by parts against $t^2+z$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-plancherel]]).

[F3] Gaussian integrals of the complex type: for $\operatorname{Re}a>0$, $\int_{\mathbb R}e^{-a u^2}du=\sqrt{\pi/a}$ with the principal branch, and polynomial moments are finite ([[lem-nrqm-composites-complex-gaussian-continuation]], [[thm-fourier-inversion-on-schwartz-space]]).

## Proof

1.1 [Entirety and the ODE] This is [F1]; in particular the Taylor coefficients obey the Airy recurrence and $A$ has no singularity on $\mathbb R$. [F1]

2.1 [Positive asymptotics] For $Z>0$ shift the vertical contour: $t=\sqrt Z+iy$; the horizontal joining terms vanish by the bound $\exp(-xR^2+O(x^3+Zx))$, so $A(Z)=\frac1{2\pi}e^{-2Z^{3/2}/3}\int_{\mathbb R}e^{-\sqrt Zy^2-iy^3/3}dy$. Substituting $y=Z^{-1/4}u$ and using that the sine part is odd with $|\cos(u^3/(3Z^{3/4}))-1|\le u^6/(18Z^{3/2})$ together with the finite Gaussian moments [F3] gives the display of (c); differentiating the same representation with respect to $Z$ (legitimate by [F1]) and inserting $t=-u$ for $A'$ gives the second formula. [step 1.1, F2, F3, algebra]

3.1 [Negative asymptotics] For $z=-Z$ substitute $t=\sqrt Z\,s$ in the real oscillatory representation [F2]: the phase is $Z^{3/2}(s^3/3-s)$, whose stationary points $s=\pm1$ have values $\mp2/3$ and second derivatives $\pm2$. About each nondegenerate stationary point introduce the Morse coordinate $s-s_0$ with $s^3/3-s=\varphi_0+\sigma(s-s_0)^2/2+\cdots$, a smooth compact amplitude $b$, and the exact Fresnel identity $\int e^{i\lambda\sigma v^2/2+i\xi v}dv=e^{i\sigma\pi/4}\sqrt{2\pi/\lambda}e^{-i\sigma\xi^2/(2\lambda)}$ for $\lambda=Z^{3/2}$; dominated convergence with the uniform bound on the damped Gaussian gives the leading coefficient $b(0)e^{i\sigma\pi/4}\sqrt{2\pi/\lambda}$ with remainder $O(\lambda^{-3/2})=O(Z^{-9/4})$, and summing the two points with $\varphi_0=\mp2/3$ gives $\Theta=2Z^{3/2}/3+\pi/4$ and the display of (d); off the patches repeated integration by parts decays faster because $\varphi'(s)\sim s^2$ at infinity. [step 2.1, F2, F3, algebra] ∎
