---
id: thm-howard-cornut-heegner-nonvanishing-input
kind: theorem
title: "Howard’s Cornut Nonvanishing Input for Heegner Points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-classical-heegner-point-kolyvagin-data
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "C. Cornut, Mazur’s Conjecture on Higher Heegner Points"
      url: "https://webusers.imj-prg.fr/~christophe.cornut/papers/mcinv.pdf"
      locator: "Introduction, theorem on the trace of the p-power conductor Heegner points to the anticyclotomic Z_p-extension."
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§2.3 proof of Theorem 2.3.7, printed pp. 29–30."
verification: {}
---

## Statement

In the Heegner setting of Howard's anticyclotomic construction, assume $E/\mathbb Q$ has conductor $N$, $K$ is imaginary quadratic with every prime dividing $N$ split in $K$, $p$ is prime to $ND_K$, $E$ is ordinary at $p$, and $p$ does not divide the class number of $K$. Let $K[p^\infty]$ be the union of the ring class fields of $K$ of conductor $p^n$, let $H_\infty/K$ be its anticyclotomic $\mathbb Z_p$-extension, and let $P[p^n]$ be the Heegner point of conductor $p^n$ from the chosen modular parametrization. Then for some $n\ge0$, the trace $\operatorname{Tr}_{K[p^\infty]/H_\infty}(P[p^n])$ is not torsion in $E(H_\infty)$.

## Statement references

[[def-classical-heegner-point-kolyvagin-data]]

[Cornut, *Mazur’s Conjecture on Higher Heegner Points*](https://webusers.imj-prg.fr/~christophe.cornut/papers/mcinv.pdf)

[Howard, *The Heegner Point Kolyvagin System*, §2.3](https://arxiv.org/pdf/1202.6340)

## Authoring status

The exact instance used by Howard was checked in the proof of Theorem 2.3.7 and against Cornut's theorem statement. The geometric nontriviality proof has not been reconstructed in this batch; local proof completion is escalated and the claim is not treated as an independent proof supplier.
