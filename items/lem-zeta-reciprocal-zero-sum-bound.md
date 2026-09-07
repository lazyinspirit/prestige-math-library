---
id: lem-zeta-reciprocal-zero-sum-bound
title: "Zeta reciprocal zero sum bound"
kind: lemma
status: published
origin: pipeline
deps: [cor-zeta-zero-count-unit-interval, def-riemann-zeta-zero-counting, thm-hadamard-product-for-riemann-xi]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a77.2, proof of Theorem 7.7 after Theorem 7.6"
      url: https://kskedlaya.org/ant/part-2-4.html
proof_strategy: direct argument
---

## Statement

For $T\ge2$, the sum of $1/|\rho|$ over nontrivial zeros with $0<|\operatorname{Im}\rho|\le T$ is $O(\log^2T)$, with multiplicity. Adjoining any real nontrivial zeros preserves the estimate.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[cor-zeta-zero-count-unit-interval]]: The number of nontrivial zeta zeros, with multiplicity, whose ordinates lie in $[T,T+1]$ is $O(\log(T+2))$ for $T\ge0$.

[F2] [[def-riemann-zeta-zero-counting]]: For $T>0$, $N(T)$ is the number, with multiplicity, of nontrivial zeros $\rho=\beta+i\gamma$ of the meromorphic continuation of zeta satisfying $0<\gamma\le T$. Thus a zero on the top boundary is included.

[F3] [[thm-hadamard-product-for-riemann-xi]]: There exist constants $A,B\in\mathbb C$ such that $\xi(s)=e^{A+Bs}\prod_\rho E_1(s/\rho),$ where the product runs over the nontrivial zeros $\rho$ of $\zeta$, counted with multiplicity, and $E_1(w)=(1-w)e^w.$ The product converges in the genus-one canonical sense.

## Proof

1.1 Nontrivial zeros have no accumulation in a compact subset of the plane. The finitely many with $|\operatorname{Im}\rho|\le1$ have nonzero denominator: the product for xi has no zero at zero, and its factors have exactly the nontrivial zeros. Their reciprocal sum is a fixed finite constant. [F3]

2.1 For each integer $n\ge1$, zeros with $n\le|\operatorname{Im}\rho|\le n+1$ each contribute at most $1/n$. The count in either band is $O(\log(n+2))$; the negative band follows from $\zeta(\overline s)=\overline{\zeta(s)}$, first on its defining half-plane and then by continuation. Therefore the remaining sum is at most $C\sum_{n\le T}\log(n+2)/n=O(\log^2T)$. Endpoint overlap only increases this upper bound. [F1, F2, step 1.1] ∎
