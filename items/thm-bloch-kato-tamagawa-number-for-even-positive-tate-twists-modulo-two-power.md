---
id: thm-bloch-kato-tamagawa-number-for-even-positive-tate-twists-modulo-two-power
kind: theorem
title: "Bloch–Kato Tamagawa Formula for Q(r), Even r≥2, Modulo a Power of 2"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-bloch-kato-motivic-pair-and-tamagawa-measure
  - thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
    - title: "B. Mazur and A. Wiles, Class Fields of Abelian Extensions of Q"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0076/LOG_0020.pdf"
      locator: "§1, main conjecture for the rational cyclotomic tower; scanned 153-page publisher scan retrieved, but the proof pages were not text-readable in this pass."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Statement

For every even integer $r\ge2$, the Bloch–Kato Tamagawa number conjecture holds modulo a power of $2$ for the Tate motive $\mathbb Q(r)$. Equivalently, after localizing the integral Tamagawa-number equality at every odd prime, the two sides have the same valuation. No exact exponent of the residual power of $2$ is asserted.

## Statement references

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

[B. Mazur and A. Wiles, Class Fields of Abelian Extensions of Q](https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0076/LOG_0020.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** The Tate motive $\mathbb Q(r)$ and its Bloch–Kato Tamagawa number.

[F1] [[def-bloch-kato-motivic-pair-and-tamagawa-measure]]: the pair and its Tamagawa measure are defined with a stable lattice.

[A1] [[def-axiom-of-choice]], [[def-countable-choice]], and [[def-dependent-choice]]: the planned Wiles main-conjecture interface declares these axioms.

## Escalation

The statement is Bloch–Kato Theorem 6.1(i). Its proof reduces the odd-primary parts to the Iwasawa main conjecture for $\mathbb Q$ (equation (6.5)), which is Mazur–Wiles, Class Fields of Abelian Extensions of Q (1984). The planned in-run supplier is thm-wiles-main-conjecture-totally-real-fields-pseudomeasure-form in batch 118, and its item body is present, with provenance.proof: not-supplied and an explicit Proof status hold. The earlier authoring notes record a retrieved 153-page Göttingen image scan whose proof was not readable in that pass; no new reading of that scan is claimed here. The item is therefore escalated; no proof excerpt or readiness is claimed.
