---
id: alg-ip-prior-preserving-crank-nicolson
kind: algorithm
title: Prior-preserving Crank–Nicolson sampler
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-ip-misfit-evidence-and-posterior-law
  - def-ip-prior-on-a-forward-domain
  - def-measure-kernel-and-probability-kernel
justified_by:
  - lem-ip-pcn-transition-kernel-is-measurable
forward_refs: []
aliases: []
axiom_use: "AC is assumed by the library's centered Borel Gaussian interface. The proposal and acceptance instructions add no further choice use."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§4.2, equation (4.7); §6.1, Theorem 6.2; §6.2, Theorem 6.4."
    - title: "Yury Korolev and Jonas Latz, Inverse Problems: Lecture Notes, Michaelmas Term 2020 (University of Cambridge, 18 May 2021)"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf"
      locator: "Chapter 8, §8.2, Definition 8.2.3, Proposition 8.2.4, and Example 8.2.7."
    - title: "M. Hairer, A. M. Stuart, and S. J. Vollmer, Spectral gaps for a Metropolis–Hastings algorithm in infinite dimensions, Annals of Applied Probability 24(6) (2014)"
      url: "https://hairer.org/papers/spectralgapmcmc.pdf"
      locator: "§2.1, Algorithm 1 and its Gaussian-reference target convention."
---

## Definition

Assume the Axiom of Choice. Let $H$ be a separable real Hilbert space, let
$\mu_0$ be a centered Borel Gaussian probability measure on $H$, let
$D\subseteq H$ be Borel with $\mu_0(D)=1$, and let
$\Phi_D:D\to(-\infty,+\infty]$ be Borel. Assume the evidence
$$
Z:=\int_D e^{-\Phi_D(u)}\,\mu_0(du)
$$
satisfies $0<Z<\infty$. Extend the potential to all of $H$ by setting
$\bar\Phi(u)=\Phi_D(u)$ for $u\in D$ and $\bar\Phi(u)=+\infty$ for
$u\notin D$, and define the target probability
$\mu(du)=Z^{-1}e^{-\bar\Phi(u)}\mu_0(du)$. For a scale $\beta\in[0,1]$,
write $\rho=\sqrt{1-\beta^2}$. At state $u\in H$, draw $\xi\sim\mu_0$
independently and propose $v=\rho u+\beta\xi$. Set the acceptance probability
to $0$ if either $\bar\Phi(u)$ or $\bar\Phi(v)$ is $+\infty$, and otherwise set
$$
\alpha(u,v)=\min\{1,\exp(\bar\Phi(u)-\bar\Phi(v))\}.
$$
Draw an independent uniform random variable on $[0,1]$ and move to $v$ if it
is at most $\alpha(u,v)$; otherwise remain at $u$. The resulting one-step
transition rule is the prior-preserving Crank–Nicolson, or pCN, rule
$P_\beta$. States with infinite potential are absorbing under this total
definition; they have $\mu$-measure zero.

## Definition references

[[def-ip-prior-on-a-forward-domain|A prior on the declared Borel domain has full mass there, and its restriction is a probability measure.]]

[[def-ip-misfit-evidence-and-posterior-law|A fixed-data potential defines evidence and a normalized target only when evidence is positive and finite.]]

[[def-borel-gaussian-random-element-on-a-separable-banach-space|A centered Borel Gaussian random element is Borel measurable and has centered normal continuous-linear projections.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has probability-measure rows and measurable event evaluations.]]
