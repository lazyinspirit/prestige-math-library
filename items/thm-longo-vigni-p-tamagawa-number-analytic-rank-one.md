---
id: thm-longo-vigni-p-tamagawa-number-analytic-rank-one
kind: theorem
title: "Longo–Vigni p-TNC for Modular Motives in Analytic Rank One"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-grothendieck-motive-of-a-newform-and-realizations
  - def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive
  - def-fundamental-line-and-archimedean-trivialization
  - def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture
  - thm-longo-vigni-p-tamagawa-number-analytic-rank-zero
  - thm-longo-vigni-beilinson-deligne-rationality-rank-one
  - thm-skinner-urban-cyclotomic-main-conjecture-for-ordinary-newform
  - thm-kato-bloch-kato-selmer-finiteness-rank-zero
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

Let $f$ be a normalized newform of even weight $k\ge4$, trivial character, and squarefree level $N\ge3$. For every prime $\mathfrak p\mid p$, assume: $N\ge3$ is squarefree; $p\nmid6ND_Fc_f$; $k\equiv2\pmod{2(p-1)}$; $a_p(f)\in\mathcal O_{\mathfrak p}^\times$ and $a_p(f)\not\equiv1\pmod{\mathfrak p}$; $\rho_{\mathfrak p}$ has big image; and $\bar\rho_{\mathfrak p}$ is ramified at every prime dividing $N$. Also assume $p\nmid N(a_{f,\Gamma_0(N)})$, some prime $\ell\parallel N$ has $\bar\rho_{\mathfrak p}$ ramified at $\ell$ for every $\mathfrak p\mid p$, $f$ is $p$-isolated, and the integral p-adic regulator $H^1_{\mathrm{mot}}(\mathbb Q,M)_{p\text{-int}}\to H^1_f(\mathbb Q,T_p)$ is an isomorphism. Suppose $M=M(f)(k/2)$ has analytic rank one. Assume there is an imaginary quadratic field $K$ such that every prime dividing $Np$ splits in $K$, $f^K$ has analytic rank zero, and the Abel–Jacobi map is injective on the higher-weight Heegner eigenspace for every $\mathfrak p\mid p$. Assume there is an imaginary quadratic field $K'$ such that the primes dividing $Np$ split in $K'$, the twist $(f^K)^{K'}$ has analytic rank one, and its Abel–Jacobi map is injective for some $\mathfrak p\mid p$. Assume the p-adic regulators over $\mathbb Q$ for $M$ and $M(f^K)$ are isomorphisms. Then $r_{\mathrm{alg}}(M)=1$ and the p-part of the Bloch–Kato–Fontaine–Perrin-Riou Tamagawa number conjecture holds for $M$.

## Statement references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The modular motive, the p-TNC, the higher-weight Heegner class, and the rank-zero and rationality inputs.

[F1] [[def-grothendieck-motive-of-a-newform-and-realizations]]: the modular motive has compatible realizations.

[F2] [[def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive]]: the Bloch–Kato Selmer and Shafarevich–Tate groups are defined.

[F3] [[def-fundamental-line-and-archimedean-trivialization]]: the fundamental line and rationality map are defined conditionally.

[F4] [[def-bloch-kato-fontaine-perrin-riou-tamagawa-number-conjecture]]: the p-TNC is the integral determinant equality.

[F5] [[def-heegner-cycle-kolyvagin-classes-for-a-modular-motive]]: the higher-weight Heegner cycles and their Abel–Jacobi maps are part of the stated input data.

[F6] [[thm-longo-vigni-p-tamagawa-number-analytic-rank-zero]]: the rank-zero p-TNC case is available only under its stated hypotheses.

[F7] [[thm-longo-vigni-beilinson-deligne-rationality-rank-one]]: rationality in analytic rank one is conditional on twist and p-adic regulator inputs.

[F8] [[thm-skinner-urban-cyclotomic-main-conjecture-for-ordinary-newform]] and [[thm-kato-bloch-kato-selmer-finiteness-rank-zero]]: the ordinary main-conjecture and Selmer-finiteness inputs are stated.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

This is Longo–Vigni Theorem 5.42. Its proof invokes Theorems 5.10, 5.22, 5.24, 5.29 and 5.37, Proposition 5.8, the integral p-regulator conjecture, and comparison with Nekovář’s Selmer complex. It uses the stated Abel–Jacobi hypotheses and the trace class constructed in the proof, not Theorem 4.14. The rank-one Heegner height, period comparison, Selmer-comparison chain, and compact-support determinant perfectness have no proof-complete local suppliers. The item is escalated.
