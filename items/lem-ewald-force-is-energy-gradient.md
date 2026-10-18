---
id: lem-ewald-force-is-energy-gradient
kind: lemma
title: "Ewald particle force is the gradient of the renormalized energy"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-ewald-three-dimensional-periodic-source-data, lem-ewald-lattice-shell-gaussian-tail-controllers, lem-ewald-screened-coulomb-kernel-and-self-limit, thm-ewald-alpha-independent-energy-and-potential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926/lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§6, equations (40)–(42), printed p. 7: differentiating the real and reciprocal Ewald energy to obtain particle forces."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_Notes.pdf"
      locator: "Chapter 7, equations (253)–(257), printed pp. 87–90: real and reciprocal Ewald force formulas."
---

## Statement

Assume the neutral finite source data and Ewald energy of
[[def-ewald-three-dimensional-periodic-source-data]] and
[[thm-ewald-alpha-independent-energy-and-potential]]. Write
\[
 \phi_s(r)=\frac{\operatorname{erfc}(\alpha r)}r,\qquad
 \sigma_k=\sum_jq_je^{-i\kappa_k\cdot x_j},\qquad
 c_k=\frac{4\pi}{V|\kappa_k|^2}e^{-|\kappa_k|^2/(4\alpha^2)}.
\]
For each source $i$, define the regular potential gradient by differentiating
the off-source Ewald potential and omitting its one singular term
$q_i\phi_s(|x-x_i|)$ at $x=x_i$. Then it is
\[
 G_i=\sum_{j,\lambda}'q_j\nabla\phi_s(|x_i-x_j+\lambda|)
       +\sum_{k\ne0}c_k\,i\kappa_k\sigma_ke^{i\kappa_k\cdot x_i},
\]
where the prime omits $(j,\lambda)=(i,0)$. Both sums converge absolutely,
and the reciprocal sum is real by pairing $k$ with $-k$. Along every
collision-free differentiable path of source configurations,
\[
 \nabla_{x_i}E= q_iG_i,\qquad F_i:=-\nabla_{x_i}E=-q_iG_i.
\]
The self constant $-\alpha\sum_iq_i^2/\sqrt\pi$ has zero derivative. This is
the force convention used in the cutoff theorem.

## Facts & Assumptions

**Given:** Neutral finite point-source data with pairwise distinct torus
positions, a fixed $\alpha>0$, and the real-space and reciprocal energy
formula in [[thm-ewald-alpha-independent-energy-and-potential]]. The path is
restricted to a neighborhood with no source collisions.

[F1] The real radial kernel has the displayed Gaussian bound on its derivative
and is smooth for $r>0$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F2] Uniform translated lattice shells have cubic counts and every polynomial
Gaussian tail is summable ([[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

[F3] The Ewald energy is the absolutely convergent real pair sum, the
reciprocal sum $\frac12\sum_{k\ne0}c_k|\sigma_k|^2$, and the constant self
term ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F4] The angular frequencies obey $\kappa_{-k}=-\kappa_k$ and the source data
are real ([[def-ewald-three-dimensional-periodic-source-data]]).

## Proof

**Proof technique:** direct.

1.1 On a compact collision-free neighborhood of the configuration, every
real-space separation except the excluded self singularity is bounded away
from zero. The derivative estimate in [F1], together with the shell count
[F2], gives a uniformly summable majorant for the real pair series and its
first position derivatives: the shell-$m$ contribution is bounded by a fixed
constant times $(m+1)^3(2\alpha+\alpha^{-1})e^{-\alpha^2m^2}$. The reciprocal
series and its first derivatives have Gaussian majorants with only a fixed
polynomial frequency factor. Thus difference quotients may be passed through
both sums by uniform convergence of the derivative tails, and the derivative
of the constant self term is zero. [given, F1, F2, F3, algebra]

1.2 For the real pair sum, differentiate the terms in which $x_i$ is the
first position. They contribute one half of
\[
 q_i\sum_{j,\lambda}'q_j\nabla\phi_s(|x_i-x_j+\lambda|).
\]
Terms in which $x_i$ is the second position contribute
$-\frac12q_i\sum_{j,\lambda}'q_j\nabla\phi_s(|x_j-x_i+\lambda|)$.
The radial kernel is even, so its vector gradient is odd. Replacing
$\lambda$ by $-\lambda$ in the second sum therefore makes it equal to the
first half. The prime set is invariant under this replacement, including
the omitted zero self image. Their sum is the real part of $q_iG_i$. [step
1.1, F1, F3, algebra]

2.1 Since $\partial_{x_i}\sigma_k=-i\kappa_kq_ie^{-i\kappa_k\cdot x_i}$,
differentiation of the reciprocal energy gives
\[
 \nabla_{x_i}\frac12\sum_{k\ne0}c_k|\sigma_k|^2
 =q_i\sum_{k\ne0}c_k\operatorname{Re}
   \bigl(\overline{\sigma_k}(-i\kappa_ke^{-i\kappa_k\cdot x_i})\bigr).
\]
In this absolutely convergent sum, replace $k$ by $-k$ and use [F4]. The
right side becomes $q_i\sum_{k\ne0}c_k i\kappa_k\sigma_ke^{i\kappa_k\cdot x_i}$,
which is real because opposite modes are conjugate pairs. Adding the real
derivative from step 1.2 proves $\nabla_{x_i}E=q_iG_i$ and hence the stated
force identity. [F3, F4, step 1.2, algebra] $\square$
