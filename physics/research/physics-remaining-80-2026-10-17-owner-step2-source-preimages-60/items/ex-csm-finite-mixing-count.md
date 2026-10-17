---
id: ex-csm-finite-mixing-count
kind: example
title: "Finite-size mixing and distinguishability conventions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-counting-and-physical-observables
  - thm-csm-relative-gibbs-variational-principle
  - thm-gaussian-integral
  - def-td-si-quantities
dependency_roles:
  post-csm-counting-and-physical-observables: physical-assumption
  thm-csm-relative-gibbs-variational-principle: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Exact finite-N calculation for two equal ideal-gas compartments at equal temperature; distinguishes adopted indistinguishable-label and fixed-species conventions and reports no empirical observation."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 2, §§2.2–2.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §§4.3–4.4"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Example

Take two initially separate equal-volume boxes, each containing $N\ge1$
particles of the same mass $m>0$ at the same $T>0$, with ideal Hamiltonian
$K=\sum p_j^2/(2m)$. Adopt the classical reference with $N!$ counting for
indistinguishable labels and fixed action reference $a_0>0$. Removing the
partition while fixing total particle number $2N$ gives
$$\frac{\Delta S_{\rm identical}}{k_B} =\log\!\left(\frac{4^N(N!)^2}{(2N)!}\right)>0,$$
whereas for two distinguishable species with fixed $N$ of each,
$$\frac{\Delta S_{\rm species}}{k_B}=2N\log2.$$
The probability under the final identical-particle positional law of finding
exactly $N$ particles in each half is $\binom{2N}{N}/4^N$, the reciprocal
factor inside the logarithm above. The identical-particle entropy change is
$O(k_B\log(N+1))$, hence sublinear in $N$; no exact zero at finite $N$ is
claimed.

## Facts & Assumptions

**Given:** The two ideal-gas preparations, fixed action reference, equal
temperature and the stated particle-counting convention.

[A1] Each ideal gas uses the adopted classical $1/N!$ quotient-counting
reference when labels are operationally indistinguishable
([[post-csm-counting-and-physical-observables]]).

[A2] Both states are canonical at the same $\beta=(k_BT)^{-1}>0$ with the SI
temperature convention [[def-td-si-quantities]], and the position volumes are
$V$ initially per side and $2V$ after partition removal.

[F1] The Gaussian phase-space integral is finite and equals the product of
one-dimensional Gaussian factors ([[thm-gaussian-integral]]).

[F2] For a canonical Gibbs density, the entropy identity is
$S=k_B(\log Z+\beta\langle H\rangle)$, the equality case of the
reference-relative Gibbs identity
([[thm-csm-relative-gibbs-variational-principle]]).

## Verification

**Given:** [A1]–[A2] and the counting, Gaussian and canonical entropy
interfaces [F1]–[F2].

1.1 For $r$ particles in position volume $W$, separate the $r$ position integrals and use [F1] in all $dr$ momentum coordinates. For one coordinate put $a=\beta/(2m)$; integrating $\frac{d}{dp}(pe^{-ap^2})=e^{-ap^2}-2ap^2e^{-ap^2}$ over $\mathbb R$ gives $\langle p^2\rangle=m/\beta$, as the boundary term vanishes by Gaussian decay. Thus the mean kinetic energy is $dr/(2\beta)$. The position law factorizes into $r$ uniform position laws. With $\lambda_T=a_0\sqrt{\beta/(2\pi m)}$, the partition function is $$Z_r(W)=\frac{W^r}{r!a_0^{dr}}\left(\frac{2\pi m}{\beta}\right)^{dr/2} =\frac{(W/\lambda_T^d)^r}{r!}.$$ For equal total particle count $2N$ before and after, the $\beta U$ terms in [F2] cancel, so the entropy change is $k_B$ times the logarithm of the partition-function ratio. [A1, A2, F1, F2, algebra]

2.1 Initially the ratio is $Z_{2N}(2V)/Z_N(V)^2$ $=4^N(N!)^2/(2N)!$; for two fixed distinguishable species it is $[Z_N(2V)/Z_N(V)]^2=4^N$. The first ratio exceeds one because $(2N)!/(N!)^2=\binom{2N}{N}<\sum_{j=0}^{2N}\binom{2N}{j}=4^N$. Under the final positional law, the $2N$ particles independently fall in either half with probability $1/2$, so the central binomial probability is $\binom{2N}{N}/4^N$, the reciprocal of the identical-particle ratio. [A1, A2, step 1.1, algebra]

3.1 For each integer $n\ge1$, monotonicity of $\log x$ on unit intervals gives $$n\log n-n+1\le\log(n!)\le n\log n-n+1+\log n.$$ Indeed the lower bound integrates $\log x\le\log j$ on $[j-1,j]$ for $j=2,\ldots,n$, and the upper bound integrates $\log x\ge\log j$ on $[j,j+1]$ for $j=1,\ldots,n-1$, then adds $\log n$. Substitution for $n=N$ and $n=2N$ cancels the terms linear in $N$ in $N\log4+2\log(N!)-\log((2N)!)$, leaving a quantity bounded in absolute value by a constant multiple of $\log(N+1)$. Therefore $\Delta S_{\mathrm{identical}}/N\to0$ as $N\to\infty$. [A1, step 2.1, algebra] ∎


## Remarks

This is a finite mathematical consequence of the two declared counting
conventions. It is not a mixing experiment, and the macroscopically
sublinear correction does not make the finite-$N$ entropy change vanish.
