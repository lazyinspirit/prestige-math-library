---
id: thm-bck-howard-bipartite-euler-system-bound
kind: theorem
title: "Howard Rank-One Bound for Bipartite Euler Systems"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-bipartite-heegner-euler-system
  - thm-poitou-tate-exact-sequence-for-finite-modules
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Burungale, F. Castella, and C.-H. Kim, A Proof of Perrin-Riou’s Heegner Point Main Conjecture"
      url: "https://arxiv.org/pdf/1908.09512"
      locator: "§3 Theorem 3.4, printed pp. 9–10."
verification: {}
---

## Statement

Let $K$ be an imaginary quadratic field, let $p$ be an odd prime, and let $\Lambda=\mathbb Z_p\left[\!\left[\Gamma\right]\!\right]$ for the Galois group $\Gamma\cong\mathbb Z_p$ of its anticyclotomic $\mathbb Z_p$-extension. Let $(\rho,N^-)$ satisfy Condition CR: $\rho$ is ramified at every prime $\ell\mid N^-$ with $\ell\equiv\pm1\pmod p$, and the residual representation $\rho_0$ is surjective. Let $S$ be the Selmer module, let $X$ be the Pontryagin dual of the corresponding discrete Selmer group, and let $(\kappa,\lambda)$ be a bipartite Euler system with nonzero $\Lambda$-adic Heegner class $\kappa_\infty$. Then $S$ and $X$ have $\Lambda$-rank one and
$$\operatorname{Char}_\Lambda(X_{\rm tors})\supseteq\operatorname{Char}_\Lambda(S/\Lambda\kappa_\infty).$$
The inclusion is equality if, for every height-one prime $P\subset\Lambda$, some $k=k(P)$ has the property that for every $j\ge k$ the negative-vertex classes contain an element with nonzero image in $\Lambda/(P,\mathfrak p^k)$, where $\mathfrak p$ is the coefficient prime above $p$.

## Statement references

[Burungale–Castella–Kim, *A Proof of Perrin-Riou’s Heegner Point Main Conjecture*, §3 Theorem 3.4](https://arxiv.org/pdf/1908.09512)

## Authoring status

The local proof still requires Howard's bipartite-system argument, its Selmer-module identifications, and the height-one specialization and equality criterion. The current Poitou–Tate carrier contains a local argument through its stated dependencies; the earlier finite-S class-formation, Tor and topology gap description is obsolete. This does not prove the bipartite bound or resolve the choice-scope difference between its unqualified Statement and Poitou–Tate's AC, Countable Choice and DC assumptions. Local proof completion remains escalated.
