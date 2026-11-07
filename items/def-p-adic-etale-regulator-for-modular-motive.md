---
id: def-p-adic-etale-regulator-for-modular-motive
kind: definition
title: "p-adic Étale Regulator and Bloch–Kato Finite Cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-motivic-cohomology-of-a-modular-motive
  - def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Definition

For a central modular motive $M$, a number field $K$, a prime $p$, and a prime $\mathfrak p\mid p$ of $F$, the $p$-adic étale regulator is the map
$$\operatorname{reg}_{K,\mathfrak p}:H^1_{\mathrm{mot}}(K,M)_{\mathfrak p}\longrightarrow H^1_f(K,V_{\mathfrak p})$$
induced by the $\mathfrak p$-adic étale cycle-class map, with its image lying in Bloch–Kato finite cohomology. This is a restriction of codomain, not a projection from the full Galois cohomology group: the inclusion $H^1_f(K,V_{\mathfrak p})\hookrightarrow H^1(K,V_{\mathfrak p})$ is canonical, but a retraction is not part of this definition. Here $H^1_f$ uses the unramified local condition away from $p$ and the crystalline local condition above $p$. This definition makes no injectivity or surjectivity claim.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The motivic cycle groups and the étale realization with its finite local conditions.

[F1] [[def-motivic-cohomology-of-a-modular-motive]]: the source group is the $F$-isotypic motivic cohomology group.

[F2] [[def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive]]: $H^1_f$ is defined by unramified and crystalline local conditions.

[A1] [[def-axiom-of-choice]]: the realization carrier declares its cohomological eigenspace choices under AC.

## Authoring status

The map is the source-normalized p-adic regulator in Longo–Vigni Conjecture 2.50. A local construction from arithmetic cycles to continuous Galois cohomology, and the proof that its image satisfies every unramified and crystalline finite local condition, are not supplied. These are the exact construction and landing obligations for the asserted map; no choice of linear projection replaces them. Both endpoint interfaces remain separately held.
