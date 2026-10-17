---
id: pthm-csm-spherical-shell-gas
kind: physics-theorem
title: "Finite spherical-shell gas and its exact marginal"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-csm-examples-ensemble-preparations
  - thm-csm-examples-spherical-marginal
  - pthm-csm-ideal-gas-ensemble
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  thm-csm-examples-spherical-marginal: mathematical-premise
  pthm-csm-ideal-gas-ensemble: physical-result
physical_scope: "Finite-N classical ideal kinetic energy with a specifically adopted rotational Gaussian-direction shell preparation; exact finite block marginal and comparison with a matched-mean canonical model only, with no dynamical ergodicity or general coarea claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 13, IV.D, finite microcanonical momentum sphere (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/0cdb670a825c6aaea7e229ac40776cbf_MIT8_333F13_Lec13.pdf"
    - title: "David Tong, Statistical Physics, §2.2, canonical ideal-gas momentum distribution"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Statement

Let $N,d\ge1$, $D=dN\ge2$, let $B\subset\mathbb R^d$ be a bounded rectangle of volume $V>0$, let $m>0$ kg and $E>0$ joules, and set $R=\sqrt{2mE}$ in kg m s$^{-1}$. Adopt independent uniform positions in $B^N$ and, independently, the momentum law
$$P=RZ/|Z|,\qquad Z\sim\mathcal N(0,I_D),$$
where the $D$ momentum coordinates are identified with $\mathbb R^D$ and the event $Z=0$ has probability zero. This is a specified spherical-shell preparation: $H(P)=|P|^2/(2m)=E$ exactly, with no assumption about a trajectory or equilibration. For any momentum block of $k$ coordinates with $1\le k<D$, its density is $f_{D,k}$ from [[thm-csm-examples-spherical-marginal]]. In particular the total-energy variance is zero.

Compare the separate canonical ideal-gas preparation with the same $N,d,m,B$ and $\beta=D/(2E)>0$. Its mean total energy is also $E$, but its variance is $D/(2\beta^2)>0$. If $N>1$, one particle's $d$-component shell marginal has compact support because $d<D$, whereas its canonical Gaussian momentum has positive probability outside every finite-radius ball. The two finite preparations therefore differ despite their matched mean energy. For $N=1$, the full momentum vector is singular on its sphere and the density formula for $k=D$ is not asserted.

## Facts & Assumptions

**Given:** The finite rectangle, particle number and dimension, positive mass and energy, shell radius $R$, and the explicitly adopted independent position/spherical-momentum preparation in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: each shell or product law is an explicitly adopted probability preparation, separate from a canonical law and not inferred from Hamiltonian dynamics.

[F2] [[thm-csm-examples-spherical-marginal]]: for $D\ge2$, $1\le k<D$, and $R>0$, the Gaussian-direction pushforward $RZ/|Z|$ has the stated exact $k$-coordinate density, is supported on the sphere, and has coordinate second moment $R^2/D$.

[F3] [[pthm-csm-ideal-gas-ensemble]]: for the massive $d$-dimensional canonical ideal gas with $\beta>0$, total energy has mean $dN/(2\beta)$ and variance $dN/(2\beta^2)$, and each momentum component is Gaussian with variance $m/\beta$.

[A1] This spherical-shell law is a chosen finite classical distribution, not a claim that an isolated gas dynamically reaches it or that it is the only microcanonical convention.

## Proof
1.1 Under the shell preparation [F1] and its explicit law [A1], $|P|=R$ almost surely by the definition of $P$; hence $H(P)=R^2/(2m)=E$ on every realization outside the null event $Z=0$. A constant random variable has variance zero. [given, F1, A1, algebra]



2.1 For $1\le k<D$, the first $k$ momentum coordinates are the projection in [F2], so their exact Lebesgue density is the displayed $f_{D,k}$ with support in $|p|\le R$. Its boundary may carry no atom; the underlying Gaussian direction has a density and $Z=0$ is null. [F2, step 1.1]



2.2 Choose $\beta=D/(2E)$. By [F3], the canonical mean energy is $D/(2\beta)=E$ and its variance is $D/(2\beta^2)>0$. Thus it cannot have the shell law of step 1.1, whose energy variance is zero. [given, F3, step 1.1, algebra]



3.1 If $N>1$, then $d<D$ and [F2] gives the one-particle momentum block a density supported in the radius-$R$ ball. By [F3], its canonical Gaussian has strictly positive density at every point of $\mathbb R^d$, so its integral over, for example, the open annulus $R+1<|p|<R+2$ is positive, while the shell probability of that annulus is zero. Therefore the one-particle marginals differ as well. For $N=1$, $d=D$ and the full shell law is singular, so no $k=D$ density assertion has been used. [F2, F3, step 2.1] ∎

## Remarks

This result compares two stated finite probability laws. It proves no equivalence or inequivalence theorem for general thermodynamic ensembles and no dynamical equilibration claim.

