---
id: ex-uniformly-ergodic-chains-can-mix-arbitrarily-slowly
kind: example
title: "Uniform ergodicity gives no uniform practical mixing time"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-general-state-aperiodic-markov-chain
  - def-phi-irreducible-chain
  - def-total-variation-distance-for-probability-laws
  - thm-uniform-ergodicity-from-whole-space-minorization
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

For every $0<\eta<1/2$, the two-state kernel
$$P_\eta=\begin{pmatrix}1-\eta&\eta\\ \eta&1-\eta\end{pmatrix}$$
is uniformly geometrically ergodic, yet the family has no common finite practical mixing time as $\eta\downarrow0$.

## Facts & Assumptions

**Given:** The parameter range and transition matrix in the Statement.

[F1] [[def-general-state-aperiodic-markov-chain]]: positive self-loops rule out a cyclic decomposition.

[F2] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of event-probability differences.

[F3] [[thm-uniform-ergodicity-from-whole-space-minorization]]: a whole-space minorization yields a uniform geometric bound.

[F4] [[def-phi-irreducible-chain]]: each positive counting-measure set is accessible from every state.

## Verification

**Given:** The matrix $P_\eta$ and facts [F1]–[F3].

1.1 The invariant law is $\pi=(1/2,1/2)$ by symmetry, and each state has positive holding probability $1-\eta$. Every entry is positive, so it is irreducible by [F4], and each state has positive holding probability, so it is aperiodic. Moreover every row dominates $2\eta\,\pi$, because its two entries are at least $\eta$. This is a whole-space minorization with $m=1$, $\epsilon=2\eta$. [F1, F4, given, algebra]

2.1 The theorem [F3] gives $\sup_x\|P_\eta^n(x,\cdot)-\pi\|_{\rm TV}\le(1-2\eta)^n$, so each fixed chain is uniformly geometrically ergodic. [F3, step 1.1]

3.1 The nonconstant eigenvector $(1,-1)$ has eigenvalue $1-2\eta$. Direct multiplication, or induction, gives $\|P_\eta^n(0,\cdot)-\pi\|_{\rm TV}=\tfrac12(1-2\eta)^n.$ For every fixed $n$ this tends to $1/2$ as $\eta\downarrow0$. Hence no finite $n$ makes the distance smaller than (for example) $1/4$ uniformly over the family. Each chain is uniformly ergodic, but the mixing time depends on $\eta$. [F2, step 1.1, algebra] ∎
