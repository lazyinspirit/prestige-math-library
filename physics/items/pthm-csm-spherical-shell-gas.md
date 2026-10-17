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
  - post-csm-counting-and-physical-observables
  - thm-csm-examples-spherical-marginal
  - def-countable-choice
  - pthm-csm-ideal-gas-ensemble
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  post-csm-counting-and-physical-observables: physical-assumption
  thm-csm-examples-spherical-marginal: mathematical-premise
  def-countable-choice: mathematical-premise
  pthm-csm-ideal-gas-ensemble: physical-result
physical_scope: "Finite-N classical ideal kinetic energy for one operationally indistinguishable species, conditional on Countable Choice for the exact shell marginal, with a specifically adopted rotational Gaussian-direction preparation; no dynamical ergodicity or general coarea claim."
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

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], the mathematical hypothesis required by the spherical-marginal supplier. Let $N,d\ge1$, $D=dN\ge2$, and let $B=\prod_{j=1}^d[0,L_j]\subset\mathbb R^d$ have side lengths $L_j>0$ in metres and volume $V=\prod_jL_j$ in $\mathrm m^d$. Let $m>0$ kg and $E>0$ joules, and set $R=\sqrt{2mE}$ in kg m s$^{-1}$. Take one operationally indistinguishable species of $N$ particles as specified by [[post-csm-counting-and-physical-observables]]. On the auxiliary labelled cover, take independent uniform positions $q_i\in B$ with density $V^{-1}$ and, independently, the momentum law
$$P=RZ/|Z|,$$
where $Z\in\mathbb R^D$ has the independent standard-normal coordinate law defined in [[thm-csm-examples-spherical-marginal]] and $P=0$ is assigned on the null event $Z=0$. This product law is invariant under particle permutations, so it defines the stated model preparation on the quotient; a one-particle marginal means the law of a uniformly selected particle. This is a specified spherical-shell preparation: $H(P)=|P|^2/(2m)=E$ almost surely, with no assumption about a trajectory or equilibration. For any momentum block of $k$ coordinates with $1\le k<D$, its density is $f_{D,k}$ from [[thm-csm-examples-spherical-marginal]]. In particular the total-energy variance is zero J$^2$.

Compare the separate canonical ideal-gas preparation of [[pthm-csm-ideal-gas-ensemble]] with the same $N,d,m,B$ and one-species convention, at $\beta=D/(2E)>0$. Its mean total energy is also $E$, but its variance is $D/(2\beta^2)>0$ J$^2$. If $N>1$, the uniformly selected particle's $d$-component shell marginal has compact support because $d<D$, whereas its canonical Gaussian momentum has positive probability outside every finite-radius ball. The two finite preparations therefore differ despite their matched mean energy. For $N=1$, the full momentum vector is singular on its sphere and the density formula for $k=D$ is not asserted.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the rectangular box with side lengths in metres and volume in m$^d$, the one-species operational indistinguishability assumption, particle number and dimension, positive mass and energy, shell radius $R$, and the explicitly adopted independent position/spherical-momentum preparation in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: each shell or product law is an explicitly adopted probability preparation, separate from a canonical law and not inferred from Hamiltonian dynamics.

[F2] [[thm-csm-examples-spherical-marginal]]: assuming $\mathrm{AC}_\omega$, for $D\ge2$, $1\le k<D$, and $R>0$, the independent standard-normal coordinate law has an orthogonally invariant direction; $RZ/|Z|$ is concentrated on $|P|=R$, its $k$-coordinate marginal has the stated exact density, and its coordinate second moment is $R^2/D$.

[F3] [[pthm-csm-ideal-gas-ensemble]]: for the massive $d$-dimensional canonical ideal gas with $\beta>0$, total energy has mean $dN/(2\beta)$ and variance $dN/(2\beta^2)$, and each component of the uniformly selected particle's momentum is Gaussian with variance $m/\beta$.

[F4] [[post-csm-counting-and-physical-observables]]: for one operationally indistinguishable species, the labelled lift carries the symmetric permutation action and a permutation-invariant one-particle marginal is interpreted as the law of a uniformly selected particle.

[A1] This permutation-invariant spherical-shell law is a chosen finite classical distribution on one operationally indistinguishable species; it is not a claim that an isolated gas dynamically reaches it or that it is the only microcanonical convention.

## Proof
1.1 Under the shell preparation [F1] and its explicit law [A1], $|P|=R$ almost surely by the definition of $P$; hence $H(P)=R^2/(2m)=E$ on every realization outside the null event $Z=0$. A constant random variable has variance zero. [given, F1, A1, algebra]



2.1 For $1\le k<D$, the first $k$ momentum coordinates are the projection in [F2], so their exact Lebesgue density is the displayed $f_{D,k}$, which vanishes outside the closed radius-$R$ ball. The event that this block has norm $R$ requires the remaining $D-k$ Gaussian coordinates to vanish; their joint density and $D-k\ge1$ imply that this event has probability zero. [F2, step 1.1]



2.2 Choose $\beta=D/(2E)$. By [F3], the canonical mean energy is $D/(2\beta)=E$ and its variance is $D/(2\beta^2)>0$. Thus it cannot have the shell law of step 1.1, whose energy variance is zero. [given, F3, step 1.1, algebra]



3.1 If $N>1$, then $d<D$. Particle permutations act by orthogonal coordinate permutations on $\mathbb R^D$, so [F2] and [A1] make every particle block marginal identical; by the selected-particle convention [F4], their uniform mixture is the law of a uniformly selected particle. It has a density supported in the closed radius-$R$ ball, with no boundary atom by step 2.1. By [F3], the canonical Gaussian of a uniformly selected particle has strictly positive density at every point of $\mathbb R^d$, so its integral over the open annulus $R<|p|<2R$ is positive, while the shell probability of that annulus is zero. Therefore the one-particle marginals differ as well. For $N=1$, $d=D$ and the full shell law is singular, so no $k=D$ density assertion has been used. [A1, F2, F3, F4, step 2.1] ∎

## Remarks

This result compares two stated finite probability laws. It proves no equivalence or inequivalence theorem for general thermodynamic ensembles and no dynamical equilibration claim.

