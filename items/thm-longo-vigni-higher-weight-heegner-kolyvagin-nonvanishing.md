---
id: thm-longo-vigni-higher-weight-heegner-kolyvagin-nonvanishing
kind: theorem
title: "Longo–Vigni Nonvanishing of a Higher-Weight Heegner Kolyvagin Class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-heegner-cycle-kolyvagin-classes-for-a-modular-motive
  - def-kolyvagin-system-for-a-selmer-triple
  - def-normalized-cuspidal-eigenform-over-gl2
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§4.14 Theorem 4.14 and the complete proof in §4.15, printed pp. 83–86."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, arXiv preprint v3"
      url: "https://arxiv.org/pdf/2211.04907"
      locator: "§3.19 Theorem 3.27, an earlier version with a stronger p-isolation hypothesis; not used to weaken or replace the published claim."
verification: {}
---

## Statement

Let $f$ be a normalized cuspidal newform of even weight $k\ge4$, trivial character, and squarefree level $N\ge3$, with coefficient field $F$; let $p$ be a prime and $K$ an imaginary quadratic field such that every prime dividing $Np$ splits in $K$. Let $\mathcal O_F$ be the ring of integers of $F$, let $D_F$ be its discriminant, and put $c_f=[\mathcal O_F:\mathbb Z[a_n(f):n\ge1]]$. Assume Longo–Vigni Assumption 4.5: $p\nmid6N D_F c_f$; $k\equiv2\pmod{2(p-1)}$; $a_p(f)$ is a $p$-adic unit and $a_p(f)\not\equiv1\pmod{\mathfrak p}$; the image of the $p$-adic Galois representation $\rho_p$ contains every $g\in\operatorname{GL}_2(\mathcal O_{F,\mathfrak p})$ with $\det(g)\in(\mathbb Z_p^\times)^{k-1}$; and the residual representation is ramified at every prime dividing $N$. Then there is a Kolyvagin integer $n_0$ for $(f,p,K)$ such that the strict higher-weight Kolyvagin class $c_1(f,n_0)$ defined from the Heegner cycle is nonzero.

## Statement references

[[def-heegner-cycle-kolyvagin-classes-for-a-modular-motive]]

[Longo–Vigni, *The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms*, §4 Theorem 4.14](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[Longo–Vigni, arXiv:2211.04907v3, §3 Theorem 3.27 (earlier version with an additional p-isolation hypothesis)](https://arxiv.org/pdf/2211.04907)

## Authoring status

The complete source proof was read. It specializes big Heegner points and then uses Zhang's Theorem 1.1 or Skinner–Zhang's Theorem 1.3; neither nonvanishing supplier has a local carrier or proof in this batch. The construction also needs the Kuga–Sato and Abel–Jacobi inputs explicitly assumed by the definition. Those exact gaps are escalated; no analytic-rank conclusion is claimed.
