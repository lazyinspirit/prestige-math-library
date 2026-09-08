---
id: thm-loglog-quantitative-induced-density-bound
kind: theorem
title: "Loglog quantitative induced density bound"
status: published
origin: pipeline
deps: [thm-quantitative-density-theorem-for-ell-divisive-graphs, lem-qid-logarithmic-and-constant-divisibility]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "1.8; 5.1 and 5.2"
proof_strategy: direct
---

## Statement

For every nonempty finite graph $H$ there is $C_H>0$ such that, for $0<x<1/2$ and
$$\delta=2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)},$$
every nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$ has a nonempty $S\subseteq V(G)$ of size at least $\delta|G|$ with $e(G[S])\leq x\binom{|S|}{2}$ or $e(\overline G[S])\leq x\binom{|S|}{2}$. Every $H$-free host qualifies. The strict few-copy version covers the null pattern vacuously.

## Facts & Assumptions

**Given:** Nonempty $H,G$, $0<x<1/2$, and the copy hypothesis with the displayed fraction after $C_H$ is chosen.

[F1] From [[lem-qid-logarithmic-and-constant-divisibility]]: Every nonempty finite graph $H$ is $\ell$-divisive for each of $\ell(x)=\log_2(1/x)$ and $\ell(x)=2$. Both functions are subreciprocal on $(0,1/2)$.

[F2] For nonempty $\ell$-divisive $H$ and subreciprocal $\ell$, some $C_{H,\ell}>0$ gives the fraction $\delta=2^{-C_{H,\ell}\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)}$ on $0<\epsilon<1/2$; a nonempty host with at most $(\delta|G|)^{|H|}$ embeddings has the asserted nonempty sparse-or-dense set of size at least $\delta|G|$. ([[thm-quantitative-density-theorem-for-ell-divisive-graphs]]).

## Proof

1.1 Take $\ell(x)=\log_2(1/x)$. The hypotheses on the function and on the nonempty $H$ required by [F2] hold by [F1]. Since $0<x<1/2$, we have $\ell(x)>1$ and hence $\log_2\ell(x)>0$. Substitution into [F2] gives exactly the displayed fraction and the required set, with $C_H=C_{H,\ell}$. [F1, F2]

2.1 An $H$-free host has $\operatorname{ind}_H(G)=0\leq(\delta|G|)^{|H|}$. For null $H$, there is exactly one induced embedding, the empty function; $(\delta|G|)^0=1$, so the strict inequality is impossible. This gives the stated boundary clauses without applying the formula at $x=1/2$. [step 1.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 1.8; 5.1 and 5.2.
