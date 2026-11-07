---
id: lem-sparse-prime-threshold-frequency-mean-square
kind: lemma
title: Mean square on a sparse prime-polynomial threshold set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
axiom_use: No choice axiom is used; cell maxima and parity are chosen by finite deterministic rules.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-prime-polynomial-large-values-from-integer-moments
- lem-dirichlet-polynomial-threshold-partition-is-finite
- thm-montgomery-vaughan-weighted-large-values-mean-square
- thm-heine-borel-r
- thm-extreme-value-r
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Proposition 1 exceptional-frequency analysis, printed pp. 26–28. The finite-cell weighted mean-square estimate is supplied locally.
---

## Statement

Let $P\ge2$, $T\ge2$, $k\ge1$ be an integer, $V>0$, and $Q(s)=\sum_{P\le p\le2P}c_pp^{-s}$ with $|c_p|\le1$. Put $M=\lceil(2P)^k\rceil$ and $$E=\{t\in[-T,T]:|Q(1+it)|\ge V^{-1}\}.$$
Let $N\ge1$ be an integer and $D(s)=\sum_{n\le N}d_nn^{-s}$ have complex coefficients and $G=\sum_{n\le N}|d_n|^2$. For an absolute constant $C>0$, put
$$K=C V^{2k}(M+T)\log(2M)\,k!\left(\frac{C}{P\log P}\right)^k.$$
Then, for an absolute implied constant,
$$\int_E|D(it)|^2dt\ll\left(N+K\sqrt T\log(2T)\right)G.$$
The set $E$ is a finite union of intervals and points and its integral is a finite Riemann integral. This estimate is confined to one prime-polynomial threshold set; no full short-interval theorem is asserted.

## Facts & Assumptions

**Given:** The data of the Statement.

[F1] Every finite $1$-separated set in $[-T,T]$ satisfying $|Q(1+it)|\ge V^{-1}$ has at most $K$ points when $C$ is sufficiently large. [[lem-prime-polynomial-large-values-from-integer-moments]]

[F2] The threshold set $E$ is a finite union of intervals and points. [[lem-dirichlet-polynomial-threshold-partition-is-finite]]

[F3] For any $1$-separated $t_1,\ldots,t_R\in[0,U]$ with $U\ge2$, $$\sum_{r=1}^R|D(it_r)|^2\ll(N+R\sqrt U\log U)G.$$ [[thm-montgomery-vaughan-weighted-large-values-mean-square]]

[F4] Closed bounded real intervals are compact and continuous real functions on them attain their extrema. [[thm-heine-borel-r]] [[thm-extreme-value-r]]

## Proof

1.1 By [F2], $E$ has a finite interval decomposition and its displayed integral is Riemann integrable. Divide $[-T,T]$ into finitely many consecutive cells of length at most one, starting at $-T$. A cell is occupied if it meets $E$. On every occupied closed cell, $|Q(1+it)|$ attains a maximum at least $V^{-1}$ and $|D(it)|$ attains a maximum by [F4]. Choose the least point attaining each respective maximum. These are deterministic selections from finitely many compact cells; the two selected points in the same cell may differ. [F2, F4, given, construct]

2.1 Split the occupied cells into even and odd indices. For either parity, the selected $Q$-maximizers are $1$-separated and lie in $[-T,T]$, so [F1] gives at most $K$ occupied cells of that parity. The corresponding $D$-maximizers are also $1$-separated. Translate them by $T$ to $[0,2T]$; translating $D$ changes its coefficients by unit factors and leaves $G$ unchanged. Apply [F3] with $U=2T$: for each parity the sum of the selected $D$-squares is $O((N+K\sqrt T\log(2T))G)$. [F1, F3, step 1.1, given, algebra]

3.1 On each occupied cell the integral of $|D(it)|^2$ over its intersection with $E$ is at most the cell length, at most one, times the chosen $D$-maximum squared. Sum over the two parities and use step 2.1. Empty $E$ gives zero on the left. This proves the stated bound without selecting from an infinite family or invoking a general measurable-set theorem. [F2, step 1.1, step 2.1, given, algebra] ∎
