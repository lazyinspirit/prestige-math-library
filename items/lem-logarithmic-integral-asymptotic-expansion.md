---
id: lem-logarithmic-integral-asymptotic-expansion
title: "Logarithmic integral asymptotic expansion"
kind: lemma
status: draft
origin: pipeline
deps: [def-logarithmic-integral]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76.2, equation (6.15), pp.179\u2013180"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

For each fixed integer $m\ge1$, as $x\to\infty$,
$$\operatorname{Li}(x)=\sum_{j=0}^{m-1}\frac{j!x}{\log^{j+1}x}+O_m\left(\frac{x}{\log^{m+1}x}\right).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-logarithmic-integral]]: For real $x\ge2$, define $\operatorname{Li}(x)=\int_2^x\frac{dt}{\log t}.$ In particular $\operatorname{Li}(2)=0$. The integral never crosses the singularity at one.

## Proof

1.1 Let $J_k(x)=\int_2^x(\log t)^{-k}\,dt$. Integration by parts gives $J_k=x/\log^k x-2/\log^k2+kJ_{k+1}$. Starting with $\operatorname{Li}=J_1$, apply this identity m times: the remainder is $m!J_{m+1}$ and the lower-end constant is $-\sum_{j=0}^{m-1}2j!/\log^{j+1}2$. [F1, algebra]

2.1 For $x\ge4$, split $J_{m+1}$ at $\sqrt x$. Its first part is at most $\sqrt x/(\log2)^{m+1}$ and its second at most $2^{m+1}x/\log^{m+1}x$. The first bound and the fixed lower-end constant are also $O_m(x/\log^{m+1}x)$. This proves the expansion for each fixed m, including m=1. [step 1.1, algebra] ∎
