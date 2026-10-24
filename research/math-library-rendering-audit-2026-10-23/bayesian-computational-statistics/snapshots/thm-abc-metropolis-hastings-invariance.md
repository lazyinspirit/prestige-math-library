---
id: thm-abc-metropolis-hastings-invariance
kind: theorem
title: ABC Metropolis–Hastings preserves its augmented tolerance target
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-abc-metropolis-hastings
  - alg-metropolis-hastings-kernel
  - def-abc-augmented-tolerance-target
  - def-axiom-of-choice
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
proof_strategy: direct
axiom_use: "Assume AC because the accepted-flow Metropolis–Hastings construction selects a measurable Radon–Nikodym version. The local invariance deduction uses no stronger choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5 and Appendix, Algorithm 3"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.1"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Statement

Assume AC and the hypotheses of
[[alg-abc-metropolis-hastings]] with $Z_\epsilon>0$. Its output
$P_\epsilon$ is reversible with respect to and leaves invariant the augmented
ABC tolerance target $\widetilde\Pi_\epsilon$ on
$\Theta\times\mathsf Y$. This is invariance for the fixed tolerance target
only; it gives no convergence or full-data posterior conclusion.

## Facts & Assumptions

**Given:** AC, a standard-Borel augmented state space, $\epsilon\ge0$ with
$Z_\epsilon>0$, the target $\widetilde\Pi_\epsilon$, the simulator proposal
kernel $Q$, and the ABC-MH procedure.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has
a choice function.

[F1] [[def-abc-augmented-tolerance-target]]: when $Z_\epsilon>0$,
$\widetilde\Pi_\epsilon=Z_\epsilon^{-1}h_\epsilon H$ is a probability measure
on the product of the standard-Borel parameter and data spaces.

[F2] [[alg-abc-metropolis-hastings]]: the algorithm applies
[[alg-metropolis-hastings-kernel]] with target
$\widetilde\Pi_\epsilon$ and proposal probability kernel $Q$, retaining
rejected proposals as self-transitions.

[F3] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: under AC,
for a standard-Borel space, probability target, and probability proposal
kernel, the general Metropolis–Hastings output is reversible with respect to
and leaves invariant its target.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], $\widetilde\Pi_\epsilon$ is a probability target on the product state space; by [F2], the proposal is a probability kernel and the returned kernel is exactly the general Metropolis–Hastings output for this target and proposal. [F1, F2, given]

2.1 The state space is standard Borel and [A1] supplies AC, so [F3] applies to the target and proposal identified in step 1.1; it gives reversibility and invariance of $P_\epsilon$ with respect to $\widetilde\Pi_\epsilon$, with no irreducibility or convergence assertion. [A1, F1, F2, F3, step 1.1] ∎
