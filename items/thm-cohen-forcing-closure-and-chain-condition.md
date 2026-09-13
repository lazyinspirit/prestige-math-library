---
id: thm-cohen-forcing-closure-and-chain-condition
kind: theorem
title: Closure and chain conditions of Cohen forcing
status: draft
origin: pipeline
deps: [def-cohen-collapse-and-levy-collapse-forcings, lem-generalized-delta-system-for-small-supports, thm-regular-uncountable-finite-delta-system, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapter 4", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, if $\kappa$ is infinite regular and $\lambda>0$, $\operatorname{Add}(\kappa,\lambda)$ is $\kappa$-closed and has $(2^{<\kappa})^+$-cc. Hence $\operatorname{Add}(\omega,\lambda)$ is ccc, and if $2^{<\kappa}=\kappa$ then $\operatorname{Add}(\kappa,\lambda)$ has $\kappa^+$-cc.

## Facts & Assumptions

**Given:** AC, regular infinite $\kappa$, and nonzero $\lambda$.

[F1] [[def-cohen-collapse-and-levy-collapse-forcings]] defines conditions and reverse inclusion.

[F2] [[lem-generalized-delta-system-for-small-supports]] thins below-$\kappa$ domains.

[F3] [[thm-regular-uncountable-finite-delta-system]] handles finite domains.

## Proof

1.1 The union of a descending chain of length $\gamma<\kappa$ is a function. Regularity makes its domain, a union of $\gamma$ many sets of size below $\kappa$, again have size below $\kappa$. It is therefore a common lower bound. [F1]

1.2 Let $\rho=2^{<\kappa}$ and take $\rho^+$ conditions. For $\kappa>\omega$, F2 thins their domains to a $\rho^+$-sized delta system with root $r$; for $\kappa=\omega$, use F3. There are at most $2^{|r|}\le\rho$ root restrictions, so two conditions agree on $r$. Their union is a function and a common extension, contradicting antichainhood. Thus the order is $\rho^+$-cc. [F1, F2, F3]

2.1 At $\kappa=\omega$, finite domains and the finite delta-system theorem give ccc directly. If $2^{<\kappa}=\kappa$, step 1.2 reads $\kappa^+$-cc. The thinning and pigeonhole steps use AC. [step 1.2] ∎