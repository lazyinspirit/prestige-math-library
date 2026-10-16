---
id: lem-qa-35-identity-matrix-packing
kind: lemma
title: "Packing bound for separated randomized message rows"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qa-35-finite-probability-entropy-and-stochastic-matrices", "lem-qa-35-smp-entropy-drop", "lem-qa-35-log-tangent-bound", "lem-qa-35-smp-prior-message-decomposition"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://dl.acm.org/doi/10.1145/237814.238004
      locator: "§4.1–4.2, PDF pp.4–9, matrix packing theorem and complete proof."
---

## Statement

If A,B are N×m row-stochastic matrices and M∈[0,1]^{m×m} satisfies (AMBᵀ)_xx≥0.99 and (AMBᵀ)_xy≤0.01 for x≠y, then for every m≥2, N≤exp(60(ln m)²).

## Facts & Assumptions

**Given:** $N\ge1$, $m\ge2$, row-stochastic matrices $A,B\in[0,1]^{N\times m}$ and $M\in[0,1]^{m\times m}$ such that $(AMB^{\mathsf T})_{xx}\ge0.99$ and $(AMB^{\mathsf T})_{xy}\le0.01$ for $x\ne y$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_i p_i\ln p_i$ and a row-stochastic matrix has nonnegative entries with every row summing to one.

[F2] [[lem-qa-35-smp-entropy-drop]]: Under the hypotheses and decomposition of [[lem-qa-35-smp-prior-message-decomposition]], $\sum_jq_jH(D^{(j)}A)\le H(DA)-1/2$.

[F3] [[lem-qa-35-log-tangent-bound]]: $\ln t\le t-1$ for every $t>0$.

## Proof

**Proof technique:** direct.

1.1 Let $D$ be any probability row with $\|D\|_2\le0.1$. For every probability vector $p$, each coordinate lies in $[0,1]$, so $-p_i\ln p_i\ge0$ when $p_i>0$, and the defined zero terms are also nonnegative; hence $H(p)\ge0$. In particular this holds for $DA$ and each $D^{(j)}A$. The output entropy satisfies $H(DA)\le\ln m$, because $D(DA\|u)=\ln m-H(DA)\ge0$ for uniform $u$, and nonnegativity follows by summing [F3]. Apply [F2]. Set $L=\{j:H(D^{(j)}A)\le H(DA)-1/4\}$ and $s=\sum_{j\in L}q_j$. Since the average child entropy is nonnegative and at most $H(DA)-1/2$, first $H(DA)\ge1/2$; then we have $(1-s)(H(DA)-1/4)\le H(DA)-1/2$, so $s\ge1/(4\ln m)$. [given, F1, F2, F3, algebra]

2.1 Nonnegative coordinates and $D=\sum_jq_jD^{(j)}$ imply $\sum_{j\in L}q_j\|D^{(j)}\|_2\le\sqrt m\|D\|_2.$ Indeed Cauchy–Schwarz bounds the left side by $\sqrt m(\sum_jq_j^2\|D^{(j)}\|_2^2)^{1/2}$, and the square under the radical is at most $\|\sum_jq_jD^{(j)}\|_2^2$ because all pairwise coordinate inner products are nonnegative. Dividing by $s$ shows some $j\in L$ with positive weight has both entropy drop at least $1/4$ and $\|D^{(j)}\|_2\le R\|D\|_2$, where $R=4\sqrt m\ln m$. [step 1.1, F1, algebra]

3.1 Start from the uniform distribution $D^{(0)}$ on $[N]$, of norm $N^{-1/2}$. While the norm is at most $0.1$, step 2.1 selects a child with entropy reduced by at least $1/4$ and norm multiplied by at most $R$. Since the initial entropy is at most $\ln m$, after at most $K=\lfloor4\ln m\rfloor+1$ such reductions the entropy would be negative; therefore either $N<100$ initially, or some $D^{(k)}$ with $k\le K$ has norm greater than $0.1$. In the latter case $0.1<N^{-1/2}R^K$, so $N<100R^{2K}$. [step 1.1, step 2.1, F1, algebra]

4.1 For $m\ge2$, $K\le5.45\ln m$, $\ln R=\ln4+\frac12\ln m+\ln\ln m\le3.5\ln m$, and $\ln100\le9.6(\ln m)^2$. Thus $\ln(100R^{2K})\le47.8(\ln m)^2<60(\ln m)^2$. The initial case $N<100$ also satisfies this bound. Therefore $N\le\exp(60(\ln m)^2)$. [step 3.1, algebra] ∎
