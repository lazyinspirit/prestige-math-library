---
id: lem-rqmc-general-net-gain-bound
kind: lemma
title: "Fixed-quality net gain coefficients are uniformly bounded"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - lem-rqmc-scrambled-net-gain-formula
  - def-lambda-t-net
  - def-countable-choice
  - lem-rqmc-scrambled-net-variance-identity
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only through the L2 gain-formula supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1, Theorem 3"
      url: "https://artowen.su.domains/reports/localanti.pdf"
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §7"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
---

## Statement

Assume Countable Choice. Let $a_1,\ldots,a_n$ be a
$(\lambda,t,m,d)$-net in base $b$, with $n=\lambda b^m$ and
$1\le\lambda<b$. For every nonempty $u\subseteq\{1,\ldots,d\}$ and
$\kappa\in\mathbb N^{|u|}$, the gain from
[[lem-rqmc-scrambled-net-variance-identity]] satisfies
$$\Gamma_{u,\kappa}=0\quad\hbox{if }|\kappa|+|u|\le m-t,$$
and otherwise
$$|\Gamma_{u,\kappa}|\le\lambda b^{t+|u|-1}\le\lambda b^{t+d-1}.$$

## Facts & Assumptions
**Given:** The net, its parameters, the scramble, and $u,\kappa$.

[F1] [[def-lambda-t-net]]: Every base-$b$ elementary interval of total digit depth $m-t$ contains exactly $\lambda b^t$ points.

[F2] [[lem-rqmc-scrambled-net-gain-formula]]: The gain is the alternating finite sum of pair counts $C_u(\kappa+\mathbf1_V)$.

[A1] [[def-countable-choice]]: Countable Choice is inherited through [F2].



## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the net, and the parameters in the Statement.

1.1 If an elementary interval has total digit depth $L\le m-t$, it is partitioned into $b^{m-t-L}$ intervals of depth $m-t$. By [F1] it therefore contains $\lambda b^t b^{m-t-L}=\lambda b^{m-L}=n b^{-L}$ points. Thus the number of ordered point pairs agreeing at any coordinate-depth vector $\ell$ with $|\ell|\le m-t$ is $C_u(\ell)=b^{|\ell|}(n b^{-|\ell|})^2=n^2b^{-|\ell|}$. [F1, given, algebra]

2.1 If $|\kappa|+|u|\le m-t$, every depth vector $\kappa+\mathbf1_V$ in [F2] has total depth at most $m-t$. Step 1.1 then makes $b^{|V|}C_u(\kappa+\mathbf1_V)=n^2b^{-|\kappa|}$ independent of $V$. The alternating sum over all $V\subseteq u$ is $(1-1)^{|u|}=0$, so $\Gamma_{u,\kappa}=0$. [A1, F2, step 1.1, algebra]

2.2 Otherwise, a nonzero product of $\Upsilon$ factors requires the second point to share with the first its coarse prefixes of total depth $|\kappa|$. If $|\kappa|\le m-t$, step 1.1 and $|\kappa|\ge m-t-|u|+1$ bound the number of such points by $n b^{-|\kappa|}\le\lambda b^{t+|u|-1}$. If $|\kappa|>m-t$, the coarse cell lies inside a depth-$(m-t)$ cell containing $\lambda b^t\le\lambda b^{t+|u|-1}$ points. Each factor $\Upsilon$ has absolute value at most $1$, so for each first point the absolute row sum is at most this cell count. Summing over $n$ first points and dividing by $n$ gives $|\Gamma_{u,\kappa}|\le\lambda b^{t+|u|-1}$. [F1, F2, step 1.1, algebra]

3.1 Since $|u|\le d$, the first bound in step 2.2 is at most $\lambda b^{t+d-1}$, proving the remaining inequality. [step 2.2, algebra] ∎
