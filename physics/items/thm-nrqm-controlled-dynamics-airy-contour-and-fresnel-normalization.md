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
as a convergent oscillatory improper integral. Its first $z$-derivative also
converges uniformly on compact real sets. Higher derivatives are defined by
the absolutely convergent contour representation in (a), or equivalently by
differentiating the oscillatory representation as a distribution; they are
not asserted to be ordinary convergent improper integrals;

(c) as $Z\to+\infty$,
$$A(Z)=\frac1{2\sqrt\pi}Z^{-1/4}e^{-2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),\qquad A'(Z)=-\frac1{2\sqrt\pi}Z^{1/4}e^{-2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr);$$

(d) as $Z\to+\infty$, with $\Theta:=2Z^{3/2}/3+\pi/4$,
$$A(-Z)=\frac1{\sqrt\pi}Z^{-1/4}\bigl(\sin\Theta+O(Z^{-3/2})\bigr),\qquad A'(-Z)=-\frac1{\sqrt\pi}Z^{1/4}\bigl(\cos\Theta+O(Z^{-3/2})\bigr).$$

The error terms are absolute envelope errors and are not relative errors at the
zeros of $A(-Z)$.

## Facts & Assumptions

**Given:** the contour $C$, the function $A$, and $Z>0$.

[F1] Complex analysis on the contour: for $t$ on the rays $t=Re^{\pm i\pi/3}$ the cubic part has real part $-R^3/3$, so every integral $\int_Ct^ke^{t^3/3-zt}dt$ converges uniformly on compact $z$-sets; differentiating under the integral and integrating $\partial_t(e^{t^3/3-zt})=(t^2-z)e^{t^3/3-zt}$ along $C$ (the endpoint contributions vanish by cubic decay) gives $A''(z)=zA(z)$, and $A$ is entire ([[def-complex-differentiability-holomorphic-and-entire]], [[def-schwartz-space-and-its-seminorms]]).

[F2] **Deformation and oscillatory representation.** On the joining arc $t=Re^{i(\pi/2-s)}$, $0\le s\le\pi/6$, the cubic real part is $-R^3\sin(3s)/3\le-cR^3s$, while $|\operatorname{Re}(zt)|\le KRs$ for real $|z|\le K$. Consequently the arc integral, with an extra factor $t^k$, is $O_K(R^{k-2})$ for $k=0,1$; the lower arc has the same bound. These arcs vanish for precisely the orders needed for the value and first derivative representation. Integration by parts against $t^2+z$ on sufficiently distant real tails proves uniform improper convergence on compact $z$-sets for amplitudes $1$ and $t$. For higher orders use the entire contour integral of [F1]. Distributional integration is also valid: pairing against a compactly supported smooth function of $z$ replaces the oscillatory amplitude by its rapidly decreasing Fourier transform, so all differentiated integrals converge after pairing ([[def-schwartz-space-and-its-seminorms]], [[thm-fourier-inversion-on-schwartz-space]], algebra).

[F3] Gaussian integrals of the complex type: for $\operatorname{Re}a>0$, $\int_{\mathbb R}e^{-a u^2}du=\sqrt{\pi/a}$ with the principal branch, and polynomial moments are finite ([[lem-nrqm-composites-complex-gaussian-continuation]], [[thm-fourier-inversion-on-schwartz-space]]).

## Proof

1.1 [Entirety and the ODE] This is [F1]; in particular the Taylor coefficients obey the Airy recurrence and $A$ has no singularity on $\mathbb R$. [F1]


2.1 [Positive asymptotics] For $Z>0$ shift the vertical contour: $t=\sqrt Z+iy$; the horizontal joining terms vanish by the bound $\exp(-xR^2+O(x^3+Zx))$, so $A(Z)=\frac1{2\pi}e^{-2Z^{3/2}/3}\int_{\mathbb R}e^{-\sqrt Zy^2-iy^3/3}dy$. Substituting $y=Z^{-1/4}u$ and using that the sine part is odd with $|\cos(u^3/(3Z^{3/4}))-1|\le u^6/(18Z^{3/2})$ together with the finite Gaussian moments [F3] gives the display of (c); for $A'$ differentiate the entire contour representation and insert the extra amplitude $-t=-(\sqrt Z+iZ^{-1/4}u)$ on the shifted contour. The term linear in $u$ has zero Gaussian integral; its first nonzero contribution after expansion of the cubic phase, and the quadratic phase remainder, are both of relative order $Z^{-3/2}$ by finite Gaussian moments. This gives the second formula. [step 1.1, F2, F3, algebra]


3.1 [Negative asymptotics] For $z=-Z$ put $t=\sqrt Z\,s$ in [F2], with $\lambda=Z^{3/2}$ and $\varphi(s)=s^3/3-s$. Its stationary points are $s=\pm1$, with phase values $\mp2/3$ and second derivatives $\pm2$. Choose smooth compact cutoffs there and exact local coordinates $v$ with $\varphi=\varphi(s_0)+\sigma v^2/2$, $\sigma=\operatorname{sign}s_0$. The transformed amplitude $b$ is smooth compactly supported, and $b(0)=1/\sqrt2$ for amplitude $1$. The Fresnel identity applied to its Fourier inversion gives $$\int e^{i\lambda\sigma v^2/2}b(v)dv=e^{i\sigma\pi/4}\sqrt{2\pi/\lambda}\left[b(0)+O\left(\lambda^{-1}\int_{\mathbb R}\xi^2|\widehat b(\xi)|d\xi\right)\right],$$ where a fixed Fourier convention only changes the constant. Indeed expand the exact Fourier multiplier $e^{-i\sigma\xi^2/(2\lambda)}$ using $|e^{i\alpha}-1|\le|\alpha|$; the displayed moment is finite because $b$ is smooth with compact support. The Fresnel identity can first be damped by $e^{-\delta v^2}$ and then passed to the oscillatory limit. Outside the two patches integrate twice by parts with $(i\lambda\varphi')^{-1}d/ds$; the resulting amplitudes are integrable since $\varphi'\sim s^2$ at infinity, including for amplitude $s$, and the finite boundaries vanish or are absorbed by the cutoffs. These terms are $O(\lambda^{-2})$. Summing the two stationary contributions and restoring the factor $\sqrt Z/(2\pi)$ gives the sine expression in (d) with absolute error $O(Z^{-7/4})$. For $A'$ differentiate once in [F2] and use amplitude $is$, restoring the factor $Z/(2\pi)$; the same estimate gives the cosine expression and absolute error $O(Z^{-5/4})$. No higher ordinary oscillatory derivative is used. This proves (b) and (d), while steps 1.1 and 2.1 prove (a) and (c). [step 2.1, F1, F2, F3, algebra] ∎

