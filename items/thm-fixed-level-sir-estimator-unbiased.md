---
id: thm-fixed-level-sir-estimator-unbiased
kind: theorem
title: Fixed-level full-resampling SIR splitting is unbiased
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-fixed-level-sir-splitting
  - thm-sequential-particle-estimator-is-unbiased
  - lem-feynman-kac-path-measures-satisfy-forward-recursion
  - lem-nested-level-probability-factorization
  - def-nested-rare-event-levels
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the Feynman–Kac finite path laws and the canonical particle-unbiasedness theorem. The finite level-recursion calculation adds no choice."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, Theorem 1.5"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
---

## Statement

Assume AC. Use the full-resampling SIR model in [[alg-fixed-level-sir-splitting]] with $N\ge1$, positive level probabilities, and each $K_\ell$ supported on $A_\ell$ and invariant for $\pi_\ell=P(\,\cdot\mid A_\ell)$. Then every prefix Feynman–Kac normalizer is $Z_\ell=P(A_\ell)$, and the product normalizer estimate $\widehat p$ is unbiased:
$
\mathbb E[\widehat p]=P(A_L).
$
This conclusion asserts no finite-$N$ variance bound, accuracy guarantee, or uniform-in-rarity efficiency.

## Facts & Assumptions

**Given:** The nested events, positive level probabilities, mutation kernels, full multinomial resampling, and finite particle count in [[alg-fixed-level-sir-splitting]].

[A1] [[def-axiom-of-choice]]: AC is inherited through the Feynman–Kac path-law and SIR unbiasedness suppliers.

[F1] [[def-nested-rare-event-levels]]: $\pi_\ell=P(\,\cdot\mid A_\ell)$ and $p_\ell=P(A_\ell)/P(A_{\ell-1})>0$.

[F2] [[alg-fixed-level-sir-splitting]]: $G_1=\mathbf1_{A_1}$, $M_1$ is the identity, and $G_{\ell+1}=\mathbf1_{A_{\ell+1}}$ follows mutation $K_\ell$.

[F3] [[lem-feynman-kac-path-measures-satisfy-forward-recursion]]: The next normalizer is obtained by integrating the next potential against the preceding normalized target and its transition kernel.

[F4] [[thm-sequential-particle-estimator-is-unbiased]]: Full-resampling SIR estimates each nonnegative Feynman–Kac normalizer without bias when every prefix normalizer is finite and positive.

## Proof

1.1 The initial law is $P$, $G_0\equiv1$, and $M_1$ is the identity. Therefore the first weighted normalizer is $Z_1=P(A_1)$, and the normalized state law after the event potential is $\pi_1$. [A1, F1, F2, given]

2.1 Suppose the normalized law after level $\ell$ is $\pi_\ell$ and $Z_\ell=P(A_\ell)$. The mutation $K_\ell$ preserves $\pi_\ell$, so [F3] gives $ Z_{\ell+1}=Z_\ell\int\mathbf1_{A_{\ell+1}}\,d\pi_\ell =P(A_\ell)p_{\ell+1}=P(A_{\ell+1}). $ The normalized next law is $P(\,\cdot\mid A_{\ell+1})=\pi_{\ell+1}$; induction proves all prefix normalizers are finite and positive. [F1, F3, step 1.1, given, induction]

3.1 Apply [F4] to the SIR model with all prefix normalizers from step 2.1 and the nonnegative terminal test $1$. It yields $\mathbb E[\widehat p]=Z_L=P(A_L)$. The conclusion is only unbiasedness; no second moment was estimated. [A1, F2, F4, step 2.1, given] ∎
