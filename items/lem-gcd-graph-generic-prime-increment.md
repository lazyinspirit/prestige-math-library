---
dependency_level: 2
id: lem-gcd-graph-generic-prime-increment
kind: lemma
title: Generic-prime quality increment or concentrated valuations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- lem-gcd-graph-quality-selection-and-pruning
- thm-cauchy-schwarz-and-the-euclidean-norm
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

Let $G$ be a nontrivial finite weighted GCD graph and $p\in R(G)$. If $p>C_0$, either there is a positive-mass subgraph adding exactly the prime $p$, removing it from the residual set, and satisfying
$$ \min(1,\delta'/\delta)\frac{q(G')}{q(G)}\ge2^{\mathbf1_{f'(p)\ne g'(p)}}, $$
or one exact valuation class has both relative side masses at least $1-C_0/p$. Without any lower bound on $p$, either such a subgraph satisfies the weaker lower bound $10^{-40}$, or one exact valuation class has both relative side masses at least $9/10$. In particular the first alternative holds for every $p>C_0$ in $R^\flat(G)$.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] Finite weighted GCD graphs and constants are as in [[def-finite-weighted-gcd-graph]].

[F2] Exact valuation restrictions have the quality and density ratios in [[lem-gcd-graph-quality-selection-and-pruning]].

[F3] Finite Cauchy–Schwarz holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 With $\alpha_k,\beta_l,e_{kl}$ as in [F2], some positive side-mass pair satisfies either $e_{kk}\ge(\alpha_k\beta_k)^{9/10}$, or, for $k\ne l$,
$$ e_{kl}\ge\frac{S}{1000\,2^{|k-l|/20}},\qquad S:=\alpha_k(1-\beta_k)+\beta_k(1-\alpha_k)+\alpha_l(1-\beta_l)+\beta_l(1-\alpha_l). $$
Indeed, otherwise summing all the strict reverse inequalities would give $1<S_1+S_2$. If $\gamma=\max_k\alpha_k\beta_k$, Cauchy–Schwarz gives $S_1=\sum_k(\alpha_k\beta_k)^{9/10}\le\gamma^{2/5}$. Since $\sum_{d\ne0}2^{-|d|/20}<100$, the off-diagonal bound is $S_2\le\frac25(1-\sum_k\alpha_k\beta_k)\le\frac25(1-\gamma)$. But $u^{2/5}+2(1-u)/5\le1$ on $[0,1]$, by its nonnegative derivative. This is a contradiction. Zero-mass classes contribute zero edges; only finitely many classes occur. [F1, F2, F3, algebra]

2.1 In the diagonal case, [F2] and step 1.1 give quality ratio and density ratio at least $1$, proving both increment assertions. In the off-diagonal case put $d=|k-l|\ge1$, $Q=q(G_{kl})/q(G)$. Since $S\ge\alpha_k\beta_l$, the exact identities give
$$ \min\left(Q,\frac{\delta(G_{kl})}{\delta}Q\right)\ge\frac{S^2}{10^{33}\alpha_k\beta_l}\left(\frac p{2^{11/20}}\right)^d. $$
For the quality-only bound this follows by dividing its direct lower bound $S^{10}p^d/(10^{30}2^{d/2}(\alpha_k\beta_l)^9)$ by the displayed expression; the quotient is $10^3(S/(\alpha_k\beta_l))^8 2^{d/20}\ge1$. For density times quality the quotient is $(S/(\alpha_k\beta_l))^9\ge1$. [F2, step 1.1, algebra]

2.2 Suppose $p>C_0$ and the increment alternative fails. Step 2.1 implies $S\le S^2/(\alpha_k\beta_l)\le10^{34}/p\le1/5$. Also $S\ge(\alpha_k+\beta_l)(1-\max(\alpha_l,\beta_k))$. The arithmetic–geometric mean inequality implies $(1-\max(\alpha_l,\beta_k))^2\le S^2/(4\alpha_k\beta_l)\le1/20$, so the maximum is at least $1/2$. If $\beta_k\ge1/2$, then $1-\alpha_k\le2S\le2\cdot10^{34}/p$, giving $\alpha_k\ge1/2$, and similarly $1-\beta_k\le2S$. Thus both are at least $1-C_0/p$. The other possibility is symmetric. [step 2.1, algebra]

3.1 For any prime $p$, if the $10^{-40}$ increment fails, step 2.1 and $p/2^{11/20}>1$ give $S^2/(\alpha_k\beta_l)\le10^{-7}$. The same arithmetic–geometric mean argument gives $\max(\alpha_l,\beta_k)\ge9/10$. If $\beta_k\ge9/10$, then $1-\alpha_k\le2S\le2\cdot10^{-7}$, so the same-index pair $k$ has both masses at least $9/10$. The other case is symmetric. Every selected restriction records $p$ and therefore removes it from the residual set; no other unrecorded prime can be introduced. These observations prove all alternatives. [F1, step 2.1, step 2.2, algebra] ∎
