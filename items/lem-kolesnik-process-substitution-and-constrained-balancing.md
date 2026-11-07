---
id: lem-kolesnik-process-substitution-and-constrained-balancing
kind: lemma
title: "Conditional process substitutions with constrained balancing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses elementary inequalities and algebra on finitely many real numbers."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "Theorems 4–5, balancing substitutions in the conditional proof"
verification: {}
---

## Statement

Let $n\ge1$, $1\le m\le n$, $X_1,\ldots,X_n\ge1$, $F>0$, $N=\prod_{j=1}^nX_j$, and $N_m=\prod_{j=1}^mX_j$. Let $S\ge0$.

For the B substitution, let $k,a_1,\ldots,a_n$ be real. If for every $\varepsilon>0$ there is a constant $C_\varepsilon$ independent of the varying scales and $F$ such that
$$S\le C_\varepsilon N^\varepsilon N_mF^{-m/2}F^k\prod_{j\le m}(F/X_j)^{a_j}\prod_{j>m}X_j^{a_j},$$
then the right side is exactly $C_\varepsilon N^\varepsilon F^{k'}\prod_jX_j^{a'_j}$, with
$$k'=k+\sum_{j\le m}a_j-m/2,\qquad a'_j=1-a_j\ (j\le m),\quad a'_j=a_j\ (j>m).$$

For the A substitution, let $k,a_1,\ldots,a_n,b_1,\ldots,b_m\ge0$, put $s=k+\sum_{j\le m}b_j\ge m$ and
$$B=F^kN\frac{\prod_{j\le m}X_j^{a_j+b_j}\prod_{j>m}X_j^{a_j}}{N_m^{s/m}},\qquad Q_*=(N^2/B)^{m/s}.$$
Suppose $0<Q_{\min}\le Q_{\max}$ and, uniformly for all $Q$ in that interval and every $\varepsilon>0$, with $C_\varepsilon$ independent of $Q,F,X$,
$$S^2\le C_\varepsilon N^\varepsilon\left(\frac{N^2}{Q}+BQ^{s/m-1}\right).$$
Set $T=N/\sqrt{Q_*}$. Then for every $\varepsilon>0$,
$$S\le C'_\varepsilon N^\varepsilon\left(T+\frac{N}{\sqrt{Q_{\max}}}+\sqrt B\,Q_{\min}^{(s/m-1)/2}\right),$$
and if $Q_*\in[Q_{\min},Q_{\max}]$ then $S\le C''_\varepsilon N^\varepsilon T$. The balanced monomial is
$$T=F^{\widetilde k}\prod_jX_j^{\widetilde a_j},\quad \widetilde k=\frac{km}{2s},\quad \widetilde a_j=\frac12+\frac{m(a_j+b_j-1)}{2s}\ (j\le m),\quad \widetilde a_j=1+\frac{m(a_j-1)}{2s}\ (j>m).$$
The arbitrary-power loss cannot be removed by this form of bound alone: for $N\ge1$, $S(N)=\log(1+N)$ satisfies $S(N)\le C_\varepsilon N^\varepsilon$ for every $\varepsilon>0$ but is not bounded. This is an abstract logical example, not a counterexample to an exponent-pair theorem. These statements do not establish any exponential-sum process inequality or assert that transformed scales and phases are admissible.

## Statement references

[Kolesnik, *On the method of exponent pairs*, conditional substitution proofs of Theorems 4–5](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The integers, positive scales, exponents, bounds and constants explicitly stated in the applicable case.

## Proof

1.1 In the B case, collect the powers of $F$ and of each $X_j$: $$N_mF^{-m/2}F^k\prod_{j\le m}(F/X_j)^{a_j}\prod_{j>m}X_j^{a_j}=F^{k+\sum_{j\le m}a_j-m/2}\prod_{j\le m}X_j^{1-a_j}\prod_{j>m}X_j^{a_j}.$$ Substitution gives the claimed bound with exactly the original loss factor. [given, algebra]

1.2 In the A case put $d=s/m-1\ge0$. By the definition of $Q_*$, $$\frac{N^2}{Q_*}=BQ_*^d=T^2.$$ Choose $Q$ to be $Q_*$ clipped to $[Q_{\min},Q_{\max}]$. If $Q_*<Q_{\min}$, then $N^2/Q\le T^2$ and the other term is $BQ_{\min}^d$. If $Q_*>Q_{\max}$, then $BQ^d\le T^2$ and the other term is $N^2/Q_{\max}$. If $Q_*$ lies inside the interval, both terms equal $T^2$. The assumed bound, $\sqrt{x+y}\le\sqrt x+\sqrt y$, and the input estimate with $2\varepsilon$ give both stated inequalities. [given, choose, algebra]

2.1 Since $Q_*=(N^2/B)^{m/s}$, $$T=N^{1-m/s}B^{m/(2s)}=F^{km/(2s)}N^{1-m/(2s)}N_m^{-1/2}\prod_{j\le m}X_j^{m(a_j+b_j)/(2s)}\prod_{j>m}X_j^{ma_j/(2s)}.$$ Collecting the power of each $X_j$ gives the displayed transformed exponents. The endpoint terms in step 1.2 remain unless their sizes are separately controlled. For the abstract example, integration of $t^{-1}\le t^{\varepsilon-1}$ for $t\ge1$ gives $\log(1+N)\le(1+N)^\varepsilon/\varepsilon\le2^\varepsilon N^\varepsilon/\varepsilon$, while the logarithm is unbounded. Thus the loss alone cannot yield a no-loss bound. [step 1.2, given, algebra] ∎
