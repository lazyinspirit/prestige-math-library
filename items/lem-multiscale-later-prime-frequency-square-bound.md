---
id: lem-multiscale-later-prime-frequency-square-bound
kind: lemma
title: Later prime-frequency regime with an earlier large bin
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
axiom_use: No choice axiom is used; every frequency partition and every bin sum is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-ramare-short-bin-factorization-without-frequency-shifts
- lem-two-level-prime-bin-frequency-moment-bound
- lem-dirichlet-polynomial-threshold-partition-is-finite
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Proposition 1, Section 8.2, equations 23–25, printed pp. 25–26. The finite double-sum bound is assembled locally.
---

## Statement

Use the data, polynomial $F$, bins $Q_v,R_v$, and parameters $X,P,Q,H,T$ of [[lem-ramare-short-bin-factorization-without-frequency-shifts]], with $1\le T\le X$. Let $P'\ge2e$, $Q'\ge P'$, $H'\ge2$, and define earlier prime-bin polynomials
$$Q'_r(s)=\sum_{\substack{P'\le p\le Q'\\ e^{r/H'}\le p<e^{(r+1)/H'}}}c'_pp^{-s},\qquad |c'_p|\le1.$$
Let $\alpha,\beta\ge0$, and let $\mathcal E\subset[-T,T]$ be a finite union of compact intervals and points on which every nonempty current bin satisfies $|Q_v(1+it)|\le e^{-\alpha v/H}$, and at each point at least one nonempty earlier bin satisfies $|Q'_r(1+it)|\ge e^{-\beta r/H'}$. For each pair of nonempty bins put $k_{v,r}=\lceil(v/H)/(r/H')\rceil$. Then
$$\begin{aligned}\int_{\mathcal E}|F(1+it)|^2dt\ll{}&H\log(2Q/P)\sum_{v,r}e^{-2\alpha v/H+2\beta k_{v,r}r/H'}\\ &\times\left(\frac TX+2^{k_{v,r}}e^{r/H'}\right)(k_{v,r}!)^2+\frac1H+\frac1P.\end{aligned}$$
The sum ranges over all nonempty current and earlier bins. Its implied constant is absolute. This is the explicit later-frequency contribution before the source-specific parameter summation; it does not assert the full multiscale proposition.

## Facts & Assumptions

**Given:** The data and finite frequency hypotheses in the Statement.

[F1] The choice-free short-bin Ramaré factorization bounds the square integral of $F$ by $H\log(2Q/P)$ times the finite sum of $|Q_vR_v|^2$ on the same set, plus $O(1/H+1/P)$. [[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[F2] If one prime bin is bounded below by $Y_1^{-\beta}$, another is bounded above by $Y_2^{-\alpha}$, and $R$ has support in $[X/Y_2,2X/Y_2]$, the two-level moment bound controls the product with $k=\lceil\log Y_2/\log Y_1\rceil$. [[lem-two-level-prime-bin-frequency-moment-bound]]

[F3] Boolean combinations of finite Dirichlet-polynomial threshold sets on a compact frequency interval are finite unions of intervals and points for all four strict or weak comparisons. [[lem-dirichlet-polynomial-threshold-partition-is-finite]]

## Proof

1.1 For each earlier bin put $\mathcal E_r=\{t\in\mathcal E:|Q'_r(1+it)|\ge e^{-\beta r/H'}\}$. By [F3], $\mathcal E_r$ is a finite union of compact intervals and points: both $\mathcal E$ and the weak threshold set are closed and have finite interval decompositions. The hypothesis says $\mathcal E=\bigcup_r\mathcal E_r$; overlap can only increase the following nonnegative integral bounds. [F3, given, construct, algebra]

2.1 Apply [F1] on $\mathcal E$ and split each nonnegative product integral over the finite covering by $\mathcal E_r$. For a fixed pair $(v,r)$, set $Y_1=e^{r/H'}$ and $Y_2=e^{v/H}$. Because the earlier bin is nonempty, $Y_1\ge P'/e^{1/H'}>2$; the current bin has $Y_2>1$. Since $H'\ge2$, the earlier prime bin lies in $[Y_1,2Y_1]$, with coefficients outside $[P',Q']$ set to zero. The polynomial $R_v$ has support in $[X/Y_2,2X/Y_2]$ and coefficients of modulus at most one before the $m^{-s}$ weight. [F1, step 1.1, given, algebra]

3.1 On $\mathcal E_r$ the current and earlier size bounds are exactly the two hypotheses of [F2], with $k=\lceil\log Y_2/\log Y_1\rceil=k_{v,r}$. Therefore $$\int_{\mathcal E_r}|Q_v(1+it)R_v(1+it)|^2dt\ll e^{-2\alpha v/H+2\beta k_{v,r}r/H'}\left(\frac TX+2^{k_{v,r}}e^{r/H'}\right)(k_{v,r}!)^2.$$ Insert this bound into step 2.1 and sum the finite bin pairs. The result is exactly the displayed inequality. Empty bins and isolated frequency points contribute zero. [F2, step 2.1, given, algebra] ∎
