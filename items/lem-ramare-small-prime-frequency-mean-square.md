---
id: lem-ramare-small-prime-frequency-mean-square
kind: lemma
title: Mean-square bound on small-prime frequency intervals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
axiom_use: No choice axiom is used; frequency sets and integrations are finite Riemann intervals.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-ramare-short-bin-factorization-without-frequency-shifts
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Proposition 1, first small-prime frequency case, printed pp. 23–25. The localized interval bound is derived locally from the short-bin factorization.
---

## Statement

Use the data, polynomial $F$, bins $Q_v$, and parameters $X,P,Q,H,T,\mathcal T$ of [[lem-ramare-short-bin-factorization-without-frequency-shifts]]. Let $1/8\le\alpha\le3/8$, and suppose that for every nonempty bin and every $t\in\mathcal T$,
$$|Q_v(1+it)|\le e^{-\alpha v/H}.$$
Then, with an absolute implied constant,
$$\int_{\mathcal T}|F(1+it)|^2dt\ll H^2\log(2Q/P)\left(P^{-2\alpha}+\frac TX Q^{1-2\alpha}\right)+\frac1H+\frac1P.$$
In particular, if $TQ\le X$, the right side simplifies to $$O\!\left(H^2\log(2Q/P)P^{-2\alpha}+H^{-1}+P^{-1}\right).$$
The conclusion covers only this explicit small-prime frequency regime. It does not bound the complementary exceptional-frequency set or assert the Matomäki–Radziwiłł theorem.

## Facts & Assumptions

**Given:** The data, finite frequency intervals, and small-bin hypothesis in the Statement.

[F1] The choice-free short-bin Ramaré factorization bounds the square integral of $F$ by $H\log(2Q/P)$ times the finite sum of $Q_vR_v$ square integrals on the same frequency set, plus $O(1/H+1/P)$. [[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[F2] The continuous Dirichlet-polynomial mean-square estimate is $\int_0^U|\sum_{n\le N}d_nn^{-it}|^2dt\ll(N+U)\sum_{n\le N}|d_n|^2$ for $U\ge2$, with an absolute constant. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

## Proof

1.1 Put $Y_v=Xe^{-v/H}$. A nonempty bin meets $[P,Q]$, so $e^{v/H}\le Q$ and $e^{v/H}\ge P/e$ because $H\ge1$. Hence $Y_v\ge X/Q\ge1/3$. The polynomial $R_v$ has support in $[Y_v,2Y_v]$ and coefficients of modulus at most one before its $m^{-1}$ weight. Therefore $$\sum_{Y_v\le m\le2Y_v}\left|\frac{b_m}{m(1+\omega(m))}\right|^2\ll Y_v^{-1},$$ including the bounded range $1/3\le Y_v<1$. Apply [F2] with $U=2T\ge2$ after $v=t+T$, multiplying each coefficient by $m^{iT}$ of modulus one and preserving its square norm, to obtain $$\int_{-T}^{T}|R_v(1+it)|^2dt\ll1+\frac{T}{Y_v}.$$ [F2, given, algebra]

2.1 The hypothesis bounds $|Q_v|^2$ on $\mathcal T$ by $e^{-2\alpha v/H}$. Insert step 1.1 into [F1] and enlarge $\mathcal T$ to $[-T,T]$ in the nonnegative $R_v$ square integral. This gives $$\int_{\mathcal T}|F(1+it)|^2dt\ll H\log(2Q/P)\sum_v e^{-2\alpha v/H}\left(1+\frac TX e^{v/H}\right)+\frac1H+\frac1P.$$ All sums and interval integrals are finite. [F1, step 1.1, given, algebra]

3.1 The nonempty bin indices lie between $H\log P-1$ and $H\log Q$. Since $1/8\le\alpha\le3/8$, finite geometric sums give uniformly $$\sum_v e^{-2\alpha v/H}\ll H P^{-2\alpha},\qquad \sum_v e^{(1-2\alpha)v/H}\ll H Q^{1-2\alpha}.$$ For instance $1-e^{-c/H}\gg H^{-1}$ uniformly for $1/4\le c\le3/4$ and $H\ge1$. Substitute these two estimates into step 2.1. If $TQ\le X$, then $(T/X)Q^{1-2\alpha}\le Q^{-2\alpha}\le P^{-2\alpha}$, giving the stated simplification. This proves the claim with an absolute constant and makes no assertion on the complementary frequency set. [step 2.1, given, algebra] ∎
