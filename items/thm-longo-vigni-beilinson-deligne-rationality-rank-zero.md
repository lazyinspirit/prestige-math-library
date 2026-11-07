---
id: thm-longo-vigni-beilinson-deligne-rationality-rank-zero
kind: theorem
title: "Longo–Vigni Beilinson–Deligne Rationality in Analytic Rank Zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-fundamental-line-and-archimedean-trivialization
  - def-p-adic-etale-regulator-for-modular-motive
  - def-heegner-cycle-kolyvagin-classes-for-a-modular-motive
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

Let $f$ be a normalized newform of even weight $k\ge4$, trivial character, and squarefree level $N\ge3$, and let $p$ be a prime. Assume Longo–Vigni Assumption 4.5: $N\ge3$ is squarefree; $p\nmid6ND_Fc_f$; $k\equiv2\pmod{2(p-1)}$; $a_p(f)\in\mathcal O_p^\times$; $a_p(f)\not\equiv1\pmod p$; $\rho_p$ has big image; and $\bar\rho_p$ is ramified at every prime dividing $N$. Suppose the central motive $M=M(f)(k/2)$ has analytic rank zero. Assume there is an imaginary quadratic field $K$ such that every prime dividing $Np$ splits in $K$, the quadratic twist $f^K$ has analytic rank one, and for some prime $\mathfrak p\mid p$ the p-adic Abel–Jacobi map
$$AJ_{K,\mathfrak p}:\operatorname{Heeg}^{G_1}_{K,N}\to\mathcal P_{\mathfrak p}(K)$$
is injective; here $\operatorname{Heeg}^{G_1}_{K,N}$ is the $G_1$-isotypic group of higher-weight Heegner cycles and $\mathcal P_{\mathfrak p}(K)$ is the corresponding Bloch–Kato finite-cohomology subspace. If the p-adic regulator over $\mathbb Q$ is an isomorphism, then the Beilinson–Deligne rationality conjecture holds for $M$: there exists $\zeta_M\in\Delta(M)^\times$ with $\theta_\infty(\zeta_M)=L^*(M,0)^{-1}$.

## Statement references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** The modular motive, analytic-rank convention, p-adic regulator, and higher-weight Heegner-cycle data.

[F1] [[def-l-function-and-analytic-rank-of-modular-motive]]: analytic rank is the order at the central point.

[F2] [[def-fundamental-line-and-archimedean-trivialization]]: the rationality conclusion is the existence of a zeta element mapping to the inverse leading term.

[F3] [[def-p-adic-etale-regulator-for-modular-motive]]: the regulator hypothesis means the stated p-adic cycle-class map is an isomorphism.

[F4] [[def-heegner-cycle-kolyvagin-classes-for-a-modular-motive]]: the Heegner cycle and p-adic Abel–Jacobi map are defined.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

This is Longo–Vigni Theorem 5.24. Its proof uses rank-equality Theorem 5.22 and algebraicity Proposition 5.15, in addition to the stated Abel–Jacobi and p-regulator hypotheses. The theorem does not use Theorem 4.14 as a logical input: its proof defines the required rational element directly from Proposition 5.15. The first two intermediate results have no proof-complete local carriers, so this theorem remains escalated; the statement remains conditional and does not claim an unconditional rank result.
