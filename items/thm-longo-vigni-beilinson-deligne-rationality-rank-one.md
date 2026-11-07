---
id: thm-longo-vigni-beilinson-deligne-rationality-rank-one
kind: theorem
title: "Longo–Vigni Beilinson–Deligne Rationality in Analytic Rank One"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-fundamental-line-and-archimedean-trivialization
  - def-p-adic-etale-regulator-for-modular-motive
  - def-heegner-cycle-kolyvagin-classes-for-a-modular-motive
  - thm-longo-vigni-beilinson-deligne-rationality-rank-zero
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Statement

Let $f$ be a normalized newform of even weight $k\ge4$, trivial character, and squarefree level $N\ge3$, and let $p$ be a prime. Assume Longo–Vigni Assumption 4.5: $N\ge3$ is squarefree; $p\nmid6ND_Fc_f$; $k\equiv2\pmod{2(p-1)}$; $a_p(f)\in\mathcal O_p^\times$; $a_p(f)\not\equiv1\pmod p$; $\rho_p$ has big image; and $\bar\rho_p$ is ramified at every prime dividing $N$. Suppose the central motive $M=M(f)(k/2)$ has analytic rank one. Assume there are imaginary quadratic fields $K\in I_1(f,p)$ and $K'\in I_0(f^K,p)$ such that every prime dividing $Np$ splits in each field, $f^K$ has analytic rank zero, the p-adic Abel–Jacobi map for the twist is injective on the source’s $G'_1$-Heegner eigenspace, and the p-adic regulator for $M(f^K)$ over $\mathbb Q$ is an isomorphism. Here $I_1(f,p)$ is the set of splitting fields with $f^K$ analytic rank zero, and $I_0(f,p)$ is the set with $f^K$ analytic rank one. Then the Beilinson–Deligne rationality conjecture holds for $M$ and there is a zeta element $\zeta_M\in\Delta(M)^\times$ with $\theta_\infty(\zeta_M)=L^*(M,0)^{-1}$.

## Statement references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** The analytic-rank, fundamental-line, regulator, and Heegner-cycle conventions.

[F1] [[def-l-function-and-analytic-rank-of-modular-motive]]: analytic rank one means a simple zero of the completed central $L$-function.

[F2] [[def-fundamental-line-and-archimedean-trivialization]]: the claimed rationality is an element of the one-dimensional line mapping to the inverse leading coefficient.

[F3] [[def-p-adic-etale-regulator-for-modular-motive]]: the p-adic regulator is the map whose isomorphism is assumed.

[F4] [[def-heegner-cycle-kolyvagin-classes-for-a-modular-motive]]: the higher-weight Heegner cycles and p-adic Abel–Jacobi maps are the stated inputs.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

This is Longo–Vigni Theorem 5.37. Its proof applies Theorem 5.24 to a quadratic twist and uses Theorem 5.10 (the higher-weight Heegner height/special-value identity) and Proposition 5.8 (period–regulator comparison). These intermediate results have no proof-complete local carriers. The theorem does not cite Theorem 4.14 as a logical input in the proof of Theorem 5.37; that separate Kolyvagin nonvanishing result remains outside this dependency chain. The theorem is escalated.
