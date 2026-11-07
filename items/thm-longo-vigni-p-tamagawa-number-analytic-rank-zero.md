---
id: thm-longo-vigni-p-tamagawa-number-analytic-rank-zero
kind: theorem
title: "Longo–Vigni p-TNC for Modular Motives in Analytic Rank Zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-grothendieck-motive-of-a-newform-and-realizations
  - def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive
  - def-fundamental-line-and-archimedean-trivialization
  - def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture
  - thm-kato-bloch-kato-selmer-finiteness-rank-zero
  - thm-longo-vigni-beilinson-deligne-rationality-rank-zero
  - thm-skinner-urban-cyclotomic-main-conjecture-for-ordinary-newform
  - def-heegner-cycle-kolyvagin-classes-for-a-modular-motive
  - def-p-adic-etale-regulator-for-modular-motive
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
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Statement

Let $f$ be a normalized newform of even weight $k\ge4$, trivial character, and squarefree level $N\ge3$, and let $p$ satisfy Assumption 5.25: $p\nmid6ND_FN(a_{f,\Gamma_0(N)})c_f$, $k\equiv2\pmod{2(p-1)}$, $a_p(f)\in\mathcal O_p^\times$, $a_p(f)\not\equiv1\pmod{\mathfrak p}$ for every $\mathfrak p\mid p$, $\rho_p$ has big image, and some $\ell\parallel N$ has $\bar\rho_{\mathfrak p}$ ramified there for every $\mathfrak p\mid p$. Suppose the central motive $M=M(f)(k/2)$ has analytic rank zero. Assume there is an imaginary quadratic field $K$ such that every prime dividing $Np$ splits in $K$ and the twist $f^K$ has analytic rank one, and for some $\mathfrak p\mid p$ the p-adic Abel–Jacobi map is injective on the specified higher-weight Heegner eigenspace. Assume also that the p-adic regulator over $\mathbb Q$ is an isomorphism. Then the p-part of the Bloch–Kato–Fontaine–Perrin-Riou Tamagawa number conjecture holds for $M$.

## Statement references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The modular motive, Bloch–Kato Selmer group, fundamental line, p-TNC interface, and conditional rank-zero inputs.

[F1] [[def-grothendieck-motive-of-a-newform-and-realizations]]: $M(f)$ has the compatible rank-two realizations.

[F2] [[def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive]]: $H^1_f$ and $X^{BK}$ use the stated local conditions.

[F3] [[def-fundamental-line-and-archimedean-trivialization]]: the zeta element lies in the one-dimensional fundamental line.

[F4] [[def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture]]: the p-TNC is the integral determinant-lattice equality.

[F5] [[thm-kato-bloch-kato-selmer-finiteness-rank-zero]]: the central nonzero value gives finite Bloch–Kato Selmer.

[F6] [[thm-longo-vigni-beilinson-deligne-rationality-rank-zero]]: the rank-zero rationality conclusion is conditional on regulator and Abel–Jacobi hypotheses.

[F7] [[thm-skinner-urban-cyclotomic-main-conjecture-for-ordinary-newform]]: the cyclotomic main-conjecture input is the characteristic-ideal comparison under its residual hypotheses.

[F8] [[def-heegner-cycle-kolyvagin-classes-for-a-modular-motive]]: the higher-weight Heegner cycle and its Abel–Jacobi input are specified as data.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

This is Longo–Vigni Theorem 5.29. Its proof uses Theorems 5.22 and 5.24, Kato's Selmer-finiteness theorem, Skinner–Urban's main-conjecture result, and internal Selmer-comparison and period identities. The proof does not use Theorem 4.14 as a logical input; its hypotheses instead directly assume Abel–Jacobi injectivity. The local rank/period chain and several supplier proofs remain absent; compact-support determinant perfectness is also missing. The theorem is escalated.
