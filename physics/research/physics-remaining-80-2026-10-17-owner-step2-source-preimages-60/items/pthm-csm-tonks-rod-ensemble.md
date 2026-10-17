---
id: pthm-csm-tonks-rod-ensemble
kind: physics-theorem
title: "Exact Tonks hard-rod pressure and convergent virial series"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - lem-csm-examples-gamma-gaussian-tools
  - thm-change-of-variables-for-compact-jordan-sets
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
physical_scope: "Finite-N one-dimensional classical hard rods of common length a>=0 with L>Na and quadratic momenta; exact thermodynamic and virial statements only for this Tonks model, not an all-fluid cluster expansion."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "University of Warwick, PX439/CO904 Statistical Mechanics of Complex Systems, lecture notes, §3.5 The Tonks gas"
      url: "https://warwick.ac.uk/fac/cross_fac/complexity/study/msc_and_phd/co904/lecture_notes_co904px439.pdf"
    - title: "David Tong, Statistical Physics, §2.2, classical ideal-gas normalization"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, let $a\ge0$ be a hard-rod length in metres, and let $L>Na$ be the one-dimensional box length in metres. Rod centers are $x_i\in[a/2,L-a/2]$ with $|x_i-x_j|\ge a$ for $i\ne j$. Let each rod have mass $m>0$ kg, momentum $p_i\in\mathbb R$ in kg m s$^{-1}$, and Hamiltonian $H=\sum_{i=1}^Np_i^2/(2m)$ on the allowed configuration set, with infinite energy outside it. Adopt the reference $dx\,dp/(N!h_0^N)$, where $h_0>0$ is a fixed action in J s, and canonical inverse temperature $\beta>0$ in J$^{-1}$. Put $\lambda=h_0\sqrt{\beta/(2\pi m)}$. Then
$$Z_N=\frac{(L-Na)^N}{N!\lambda^N},\quad U=\mathbb E H=\frac{N}{2\beta},\quad p_{1D}:=-\partial_LF=\frac{N}{\beta(L-Na)},\quad F=-\beta^{-1}\log Z_N.$$
Here $p_{1D}$ is the one-dimensional force conjugate to length and has units N; it is not a three-dimensional pressure. With number density $\rho=N/L$, the exact equation is
$$\beta p_{1D}=\frac{\rho}{1-a\rho}=\sum_{j=1}^\infty a^{j-1}\rho^j,\qquad a\rho<1.$$
After the first $M\ge1$ terms, the exact nonnegative remainder (strictly positive when $a>0$) is $\rho(a\rho)^M/(1-a\rho)$, bounded by $\rho r^M/(1-r)$ whenever $a\rho\le r<1$. At fixed $\rho>0$ with $a\rho<1$, as $N,L\to\infty$ with $N/L=\rho$,
$$\lim\frac{\beta F}{N}=\log\!\left(\frac{\rho\lambda}{1-a\rho}\right)-1,$$
with finite-size excess between $0$ and $(1+\log N)/N$.

## Facts & Assumptions

**Given:** $N\ge1$, $a\ge0$, $L>Na$, $m>0$, $\beta>0$, and the hard-core position set and Hamiltonian in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: for each specified model with finite positive partition function, the canonical density is $Z^{-1}e^{-\beta H}$ relative to its fixed reference, and $F=-\beta^{-1}\log Z$ is the adopted free-energy definition.

[F2] [[lem-csm-examples-gamma-gaussian-tools]]: for $m,\beta>0$, $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$ and the normalized Gaussian has second moment $m/\beta$; the positive gamma integral is finite.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with nonzero Jacobian on an open neighborhood of a compact Jordan set obeys the compact Jordan change-of-variables formula.

[A1] The finite hard-core configuration rule and indistinguishable-classical-particle reference convention are the adopted Tonks model assumptions; no interaction beyond hard exclusion is included.

## Proof
1.1 The single-rod momentum integral is $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$ by [F2]. Thus the product of the $N$ momentum integrals divided by $h_0^N$ is $\lambda^{-N}$. [given, F2, algebra]



1.2 By [F2], each normalized scalar momentum Gaussian has second moment $m/\beta$. Thus the mean kinetic energy of each rod is $1/(2\beta)$ and the total mean is $U=N/(2\beta)$. [given, F2, algebra]



1.3 Sort the center coordinates in one order sector and define $y_i=x_i-a/2-(i-1)a$. The hard-core inequalities become $0\le y_1\le\cdots\le y_N\le\ell$, where $\ell=L-Na>0$. This translation has determinant $1$. The ordered simplex and its $N!$ coordinate permutations partition $[0,\ell]^N$ up to the tie hyperplanes, which have content zero; hence one ordered sector has volume $\ell^N/N!$. The $N!$ labeled order sectors have equal volume and cover the allowed set up to their shared zero-content boundaries, so the full labeled position volume is $\ell^N$. [given, A1, F3, algebra]



2.1 The reference measure divides the position-momentum integral by $N!h_0^N$. Combining the full allowed position volume $\ell^N$ from step 1.3 with the momentum product from step 1.1 gives $Z_N=\ell^N/(N!\lambda^N)$. [F1, step 1.1, step 1.3, algebra]



3.1 Since $F=-\beta^{-1}[N\log(L-Na)-\log N!-N\log\lambda]$, differentiating at fixed $N,a,\beta$ gives $p_{1D}=N/[\beta(L-Na)]$. Substituting $\rho=N/L$ yields $\beta p_{1D}=\rho/(1-a\rho)$. [F1, step 2.1, algebra]



4.1 At $a=0$, the virial series has first term $\rho$ and all higher terms zero, so its remainder after any $M\ge1$ terms is zero. For $0\le a\rho<1$, the finite geometric identity $\sum_{j=1}^M(a\rho)^{j-1}=(1-(a\rho)^M)/(1-a\rho)$ gives the stated virial partial sum and exact remainder after multiplication by $\rho$. If $a\rho\le r<1$, then $(a\rho)^M/(1-a\rho)\le r^M/(1-r)$, proving the uniform bound. [step 3.1, algebra]



5.1 At fixed $\rho>0$, $L-Na=N(1/\rho-a)$, so $$\frac{\beta F}{N}=-\log(L-Na)+\frac{\log N!}{N}+\log\lambda.$$ The integral bounds $\int_1^N\log x\,dx\le\log N!\le\int_1^N\log x\,dx+\log N$ imply $\log N!=N\log N-N+\epsilon_N$ with $1\le\epsilon_N\le1+\log N$. Substitution cancels the $\log N$ terms and gives $\beta F/N=\log(\rho\lambda/(1-a\rho))-1+\epsilon_N/N$, proving both the limit and its stated finite-size excess. [step 2.1, algebra] ∎

## Remarks

The infinite virial series is the geometric expansion of this exact one-dimensional hard-rod equation of state. It is not a formal or convergent cluster expansion for arbitrary fluids, attractions, dimensions, or interactions.

