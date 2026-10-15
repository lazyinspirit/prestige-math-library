---
id: ex-gibbs-chain-invariant-but-reducible
kind: example
title: "An invariant Gibbs target can still give reducible dynamics"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-gibbs-block-update
  - alg-gibbs-scan-schemes
  - def-gibbs-full-conditional-kernel
  - def-finite-markov-chain-reducible
  - thm-random-scan-gibbs-is-reversible-and-invariant
  - def-total-variation-distance-for-probability-laws
proof_strategy: direct
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
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "No choice principle is used in this finite or explicitly constructed example."
---
## Statement

Let the target on $\{0,1\}^2$ be $\pi=\tfrac12\delta_{(0,0)}+\tfrac12\delta_{(1,1)}$, with the exact single-coordinate full conditionals. The random-scan Gibbs kernel leaves $\pi$ invariant but is reducible.

## Facts & Assumptions

**Given:** The finite product state space, target and exact block-update kernels in the Statement.

[F1] [[def-gibbs-full-conditional-kernel]]: a full conditional is a pointwise probability kernel satisfying the target's conditional event identity.

[F2] [[alg-gibbs-block-update]]: a block update retains the other coordinate and samples the selected coordinate from its full conditional.

[F3] [[alg-gibbs-scan-schemes]]: random scan chooses one of the two coordinate updates with fixed probability $1/2$ each.

[F4] [[thm-random-scan-gibbs-is-reversible-and-invariant]]: a finite mixture of exact Gibbs coordinate kernels is invariant for the common target.

[F5] [[def-finite-markov-chain-reducible]]: a finite chain is reducible when it has a nonempty proper closed subset.

## Verification

**Given:** The target and conditional updates in the Statement and facts [F1]–[F5].

1.1 Each coordinate marginal under $\pi$ is uniform on $\{0,1\}$. Given $Y=y$, the conditional law of $X$ is the point mass $\delta_y$; given $X=x$, the conditional law of $Y$ is $\delta_x$. These are valid full conditionals because the target assigns mass only to the two diagonal points. [F1, given]

2.1 From $(0,0)$ either coordinate update leaves the state at $(0,0)$; from $(1,1)$ either update leaves it at $(1,1)$. The random-scan mixture in [F3] therefore makes each singleton a closed class. The target is invariant by [F4], but $\{(0,0)\}$ is nonempty and proper, so reducibility follows from [F5]. [F2, F3, F4, F5, step 1.1]

3.1 Starting from $(0,0)$, the time-$n$ law is $\delta_{(0,0)}$, whose total-variation distance from $\pi$ is $1/2$. Thus target invariance alone does not imply convergence from every start, uniqueness of the invariant law, or irreducibility. [F4, step 2.1, algebra] ∎
