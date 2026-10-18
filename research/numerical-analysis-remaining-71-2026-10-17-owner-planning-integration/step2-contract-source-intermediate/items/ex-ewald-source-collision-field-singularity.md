---
id: ex-ewald-source-collision-field-singularity
kind: example
title: "A point-source potential is singular at a source"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-countable-choice, def-ewald-three-dimensional-periodic-source-data, lem-ewald-lattice-shell-gaussian-tail-controllers, lem-ewald-screened-coulomb-kernel-and-self-limit, thm-ewald-alpha-independent-energy-and-potential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

On the unit cubic torus take charges $q_1=1$ at $x_1=(0,0,0)$ and $q_2=-1$ at
$x_2=(1/2,0,0)$. For $r=|x-x_1|\downarrow0$, the exact Ewald potential and its
gradient satisfy
$$U_\alpha(x)=\frac1r+O(1),\qquad \nabla_xU_\alpha(x)=-\frac{x-x_1}{r^3}+O(1).$$
The potential and field therefore have their local Coulomb singularities, so
a pointwise potential or field-error claim must exclude a source collision.

## Facts & Assumptions

**Given:** Countable Choice, this neutral dipole configuration, and its exact
mean-zero Ewald potential $U_\alpha$ for any $\alpha>0$.

[A1] The Gaussian Ewald representation assumes Countable Choice ([[def-countable-choice]]).

[F1] For distinct neutral sources, the Ewald potential has a finite regular part after subtracting $q_i/|x-x_i|$ at each source ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F2] $\operatorname{erfc}(\alpha r)/r=1/r-2\alpha/\sqrt\pi+O(r^2)$, and for $r>0$ its derivative is $-2\alpha e^{-\alpha^2r^2}/(\sqrt\pi r)-\operatorname{erfc}(\alpha r)/r^2$; the screened-kernel proof also gives $\operatorname{erf}(\alpha r)=2\alpha r/\sqrt\pi+O(r^3)$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F3] The screened kernel and its derivative have Gaussian bounds, and each translate of the full-rank lattice has the stated uniform shell count ([[lem-ewald-screened-coulomb-kernel-and-self-limit]], [[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

[F4] The reciprocal Ewald coefficient is $c_k=4\pi e^{-|\kappa_k|^2/(4\alpha^2)}/(V|\kappa_k|^2)$ and $|\sigma_k|\le Q:=|q_1|+|q_2|=2$ for this dipole; each first spatial derivative multiplies a mode by $|\kappa_k|$, so the shell bound makes both the reciprocal potential and its gradient series uniformly absolutely convergent, with only finitely many nonzero modes in $|\kappa_k|<1$ ([[thm-ewald-alpha-independent-energy-and-potential]], [[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

## Verification

**Proof technique:** direct.

1.1 The configuration is neutral, and its two torus positions are distinct. For $\lambda\in\mathbb Z^3\setminus\{0\}$, $|\lambda|\ge1$, while every image of $x_2$ relative to $x_1$ has first coordinate in $\mathbb Z+1/2$ and hence distance at least $1/2$. Thus for $0<r<1/4$, every real-space image except $(i,\lambda)=(1,0)$ stays at distance at least $1/4$ from $x$. By [F3], the finitely many nearby nonself terms and their first derivatives are uniformly bounded there, and the Gaussian shell bound makes the remaining potential and derivative tails uniformly convergent. The reciprocal series and its gradient are bounded by [F4]. Hence the nonself periodic remainder and its gradient are bounded near $x_1$. [given, A1, F3, F4, algebra, F1]

2.1 Writing $r=|x-x_1|$, [F2] gives the self-potential expansion $\phi_s(r)=1/r-2\alpha/\sqrt\pi+O(r^2)$. Substituting the stated error-function expansion into the derivative formula in [F2] cancels the $r^{-1}$ terms and gives $\phi_s'(r)=-1/r^2+O(r)$. Since $q_1=1$, its gradient is $\phi_s'(r)(x-x_1)/r=-(x-x_1)/r^3+O(r)$. Adding the bounded nonself potential and gradient from step 1.1 proves both expansions in the Example. [F2, step 1.1, algebra]

3.1 The magnitude of the leading gradient term is $r^{-2}$, while the remainder is bounded; the potential likewise diverges as $r^{-1}$. Neither has a finite value at the source, so uniform pointwise potential or field error claims for these point sources must exclude collisions. [step 2.1, algebra] ∎

