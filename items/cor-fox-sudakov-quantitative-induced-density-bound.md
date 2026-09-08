---
id: cor-fox-sudakov-quantitative-induced-density-bound
kind: corollary
title: "Fox sudakov quantitative induced density bound"
status: draft
origin: pipeline
deps: [thm-quantitative-density-theorem-for-ell-divisive-graphs, lem-qid-logarithmic-and-constant-divisibility]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.2 at ell=2; 1.7 (comparison of constant dependence)"
proof_strategy: direct
---

## Statement

For every nonempty finite graph $H$ there is $C_H>0$ such that for $0<x<1/2$, $\delta=2^{-C_H(\log_2(1/x))^2}$, and any nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$, there is a nonempty $S\subseteq V(G)$ with $|S|\geq\delta|G|$ and at most $x\binom{|S|}{2}$ edges in $G[S]$ or $\overline G[S]$. In particular this holds for $H$-free $G$. The version with a strict copy inequality covers the null pattern vacuously.

The constant is allowed to depend on $H$; this assertion does not specify an absolute constant times $|H|$.

## Facts & Assumptions

**Given:** Nonempty $H,G$, $0<x<1/2$, and the copy hypothesis with the displayed fraction after $C_H$ is chosen.

[F1] From [[lem-qid-logarithmic-and-constant-divisibility]]: Every nonempty finite graph $H$ is $\ell$-divisive for each of $\ell(x)=\log_2(1/x)$ and $\ell(x)=2$. Both functions are subreciprocal on $(0,1/2)$.

[F2] For nonempty $\ell$-divisive $H$ and subreciprocal $\ell$, some $C_{H,\ell}>0$ gives the fraction $\delta=2^{-C_{H,\ell}\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)}$ on $0<\epsilon<1/2$; a nonempty host with at most $(\delta|G|)^{|H|}$ embeddings has the asserted nonempty sparse-or-dense set of size at least $\delta|G|$. ([[thm-quantitative-density-theorem-for-ell-divisive-graphs]]).

## Proof

1.1 Choose $\ell(x)=2$. By [F1] this is subreciprocal and the given nonempty $H$ is $\ell$-divisive, so [F2] applies. Its denominator is $\log_2\ell(x)=\log_2 2=1$. With $C_H=C_{H,\ell}$, its fraction is exactly $2^{-C_H(\log_2(1/x))^2}$ and its conclusion is the claimed set and edge bound. [F1, F2]

2.1 If $G$ is $H$-free, its labelled induced-embedding count is zero, which satisfies the non-strict premise. For the null pattern the unique empty embedding gives count 1, while $(\delta|G|)^0=1$; the strict premise would read $1<1$ and is impossible. These observations establish both additional clauses. [step 1.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.2 at ell=2; 1.7 (comparison of constant dependence).
