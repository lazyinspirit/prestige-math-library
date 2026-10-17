---
id: ex-csm-ideal-canonical-grand
kind: example
title: "Exact ideal-gas canonical and grand laws"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-canonical-response-identities
  - pthm-csm-grand-response-identities
  - thm-gaussian-integral
  - def-td-si-quantities
dependency_roles:
  pthm-csm-canonical-response-identities: physical-result
  pthm-csm-grand-response-identities: physical-result
  thm-gaussian-integral: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Finite-N monatomic classical ideal gas in a bounded position region, with a countable grand-canonical number law; excludes quantum exchange and empirical validation."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 2, §§2.2–2.2.1"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §§4.4 and 4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Example

Let $d,N\ge1$, position volume $V>0$, particle mass $m>0$, fixed action
reference $a_0>0$, and $\beta>0$. For
$H_N=\sum_{j=1}^{dN}p_j^2/(2m)$ with position region of volume $V^N$ and
reference $dq\,dp/(N!a_0^{dN})$, put
$$\lambda_T=a_0\sqrt{\frac{\beta}{2\pi m}}\quad\text{and}\quad Z_N=\frac{(V/\lambda_T^d)^N}{N!}.$$
Then $U=dN/(2\beta)$, $\operatorname{Var}(H_N)=dN/(2\beta^2)$ and
$C_V=dNk_B/2$. With chemical potential $\mu$, set
$a=e^{\beta\mu}V/\lambda_T^d$. The grand normalizer and particle law are
$$\Xi=e^a,\qquad \mathbb P(N=j)=e^{-a}\frac{a^j}{j!},\qquad \mathbb E[N]=\operatorname{Var}(N)=a.$$
Conditioned on $N$, the phase state is the canonical one above. These exact
identities concern the adopted finite classical preparation. The component
factorization is stated in labelled momentum coordinates on the symmetric
lift; each single-coordinate marginal is the law of a uniformly selected
degree of freedom, while permutation-invariant sums and averages are the
quotient observables.

## Facts & Assumptions

**Given:** The ideal Hamiltonian and phase reference, positive temperature,
finite position volume, canonical and grand preparations, and the local
moment envelopes needed for response derivatives.

[A1] The canonical and grand probability laws are the adopted preparations;
their response identities apply under the local exponential envelopes
([[pthm-csm-canonical-response-identities]],
[[pthm-csm-grand-response-identities]]).

[A2] $d,N\ge1$, $V,m,a_0,\beta>0$, and the position domain has volume
$V^N$; $T$, $k_B$ and $\beta$ follow [[def-td-si-quantities]].

[A3] On compact positive $\beta$ intervals, Gaussian polynomial moments
are bounded by integrable Gaussian tails; on compact $(\beta,\mu)$ sets, the
grand factorial series with any fixed polynomial factor in $N$ converges
uniformly.

[F1] [[thm-gaussian-integral]] proves
$\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$. For each $a>0$, the linear
diffeomorphism $y=\sqrt a\,x$ has Jacobian $\sqrt a$, giving the local
scaling $\int_{\mathbb R}e^{-a x^2}dx=a^{-1/2}\int_{\mathbb R}e^{-y^2}dy=\sqrt{\pi/a}$.

## Verification

**Given:** [A1]–[A3] and the Gaussian and response interfaces [F1].

1.1 Separate the position and momentum integrals and apply [F1] in each of the $dN$ momentum coordinates. This gives $$Z_N=\frac{V^N}{N!a_0^{dN}} \left(\frac{2\pi m}{\beta}\right)^{dN/2} =\frac{(V/\lambda_T^d)^N}{N!}.$$ The position density is uniform on the region and each momentum factor is a centered Gaussian of variance $m/\beta$. [A2, F1, algebra]

2.1 For $\beta$ in a compact interval $[\beta_0,\beta_1]\subset(0,\infty)$, the factors $H_N^r e^{-\beta H_N}$ for $r\le2$ are bounded by a constant times $e^{-\beta_0H_N/2}$, since $x^re^{-\beta_0x/2}$ is bounded for $x\ge0$; the latter has a finite Gaussian integral by [F1]. Thus [A3] verifies the canonical response theorem's envelope, which gives $U=-\partial_\beta\log Z_N=dN/(2\beta)$, $\operatorname{Var}(H_N)=\partial_\beta^2\log Z_N=dN/(2\beta^2)$, and the chain rule gives $C_V=dNk_B/2$. [A1, A2, A3, F1, step 1.1, algebra]

2.2 The grand sum has sector weight $e^{\beta\mu j}Z_j=a^j/j!$, so its exponential series gives $\Xi=e^a$ and $P(N=j)=e^{-a}a^j/j!$. Summing the shifted series gives $\mathbb E[N]=a$ and $\mathbb E[N(N-1)]=a^2$, hence $\operatorname{Var}(N)=a$. [A1, A2, step 1.1, algebra]

3.1 On a compact $(\beta,\mu)$ set, $a$ is bounded by some $A<\infty$. For each fixed $r$, the ratio of successive terms in $\sum_{j\ge0}(1+j^r)A^j/j!$ tends to zero, uniformly once $j$ is large; therefore the series converges uniformly. Combined with the Gaussian bound in step 2.1, this verifies the grand theorem's energy-number envelope. Applying its response identity gives $\partial_\mu\langle N\rangle=\beta\operatorname{Var}(N)=\beta a$. Within each number sector, dividing the sector Boltzmann density by its sector probability cancels the grand factor, leaving precisely the canonical conditional phase law. [A1, A3, F1, step 1.1, step 2.2] ∎


## Remarks

The action reference keeps $\lambda_T$ a length and $V/\lambda_T^d$
dimensionless. No quantum degeneracy criterion or experimental comparison
is included.
