---
id: alg-fixed-level-sir-splitting
kind: algorithm
title: Full-resampling fixed-level SIR splitting with invariant mutations
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nested-rare-event-levels
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-feynman-kac-path-targets-and-normalizers
  - alg-sequential-importance-resampling
  - def-axiom-of-choice
axiom_use: "AC is inherited through the finite Feynman–Kac path-law and SIR suppliers. The finite event sequence and kernel conditions add no further selection."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, §§1–2"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, ``2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
---

## Definition

Input the nested levels of [[def-nested-rare-event-levels]] on a standard Borel state space $(\Omega,\mathcal F)$, a particle count $N\ge1$, and probability kernels $K_\ell$ for $1\le\ell<L$. Each mutation kernel must satisfy
$
K_\ell(x,A_\ell)=1\quad(x\in A_\ell),\qquad \pi_\ell K_\ell=\pi_\ell.
$
If a required kernel is unavailable or violates its declared conditions, return mutation-kernel-unavailable.

Apply the canonical full-resampling sequential importance-resampling procedure of [[alg-sequential-importance-resampling]] to the following finite Feynman–Kac model: initial law $P$, initial potential $G_0\equiv1$, identity transition $M_1$, event potential $G_1=\mathbf1_{A_1}$, and, for $2\le\ell\le L$, transition $M_\ell=K_{\ell-1}$ and potential $G_\ell=\mathbf1_{A_\ell}$. Use multinomial full resampling at every selection and proposal kernels equal to the target transitions, so each Radon–Nikodym correction is one.

Return the SIR normalizer estimate $\widehat p$ and the full particle output. If any incremental average event weight is zero, report status zero-particle-prefix and $\widehat p=0$, as in the canonical SIR procedure. This status does not assert that the target probability is zero. The exact conditional level sampler is not inferred from the existence of an invariant kernel; kernel accessibility is an input requirement.
