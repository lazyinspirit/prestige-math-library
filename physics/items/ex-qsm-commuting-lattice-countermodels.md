---
id: ex-qsm-commuting-lattice-countermodels
kind: example
title: "Finite analyticity versus the global-model cusp and shell inequivalence"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-qsm-commuting-lattice-countermodels
dependency_roles:
  pthm-qsm-commuting-lattice-countermodels: physical-result
physical_scope: "The N=2 member and positive transition parameter of the explicitly defined finite global three-sector quantum model. This is not an example of a local or short-range quantum lattice."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Statistical Physics, §§5.3.1 and 5.4.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Example

For the global three-sector model of [[pthm-qsm-commuting-lattice-countermodels]], take $N=2$ and $\beta_c=(\log2)/\epsilon$. Its finite Gibbs probability of the one-dimensional middle sector is exactly $1/9$, while a uniform spectral shell with half-width $0\le\Delta<2\epsilon$ assigns that sector probability $1$. The finite partition function is still analytic at $\beta_c$; the cusp belongs to the limiting normalized log partition as $N\to\infty$.

## Facts & Assumptions

**Given:** The three-sector Hamiltonian and finite canonical preparation of [[pthm-qsm-commuting-lattice-countermodels]], with $\epsilon>0$ joules.

[F1] [[pthm-qsm-commuting-lattice-countermodels]]: for each $N\ge1$, $Z_N=1+e^{-\beta N\epsilon}+4^Ne^{-2\beta N\epsilon}$, and a shell with $0\le\Delta<N\epsilon$ contains only the middle sector.

## Verification

1.1 At $N=2$ and $\beta=\beta_c$, $e^{-\beta N\epsilon}=e^{-2\log2}=1/4$ and $4^Ne^{-2\beta N\epsilon}=16e^{-4\log2}=1$. Hence $Z_2=9/4$ and the middle-sector Gibbs probability is $(1/4)/(9/4)=1/9$. The finite partition is a sum of positive exponentials, so it is analytic at this parameter. [given, F1, algebra]

2.1 Since $2\epsilon$ is the distance from the middle energy to either outer energy at $N=2$, every shell with $0\le\Delta<2\epsilon$ selects exactly the one-dimensional middle sector and gives it uniform probability $1$. Thus the two specified finite preparations disagree on this observable, while the analytic finite sum and limiting cusp remain distinct claims. [given, F1, step 1.1, algebra] ∎
