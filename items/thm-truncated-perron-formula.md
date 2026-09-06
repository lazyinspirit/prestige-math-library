---
id: thm-truncated-perron-formula
kind: theorem
title: "A truncated Perron formula"
status: draft
origin: pipeline
deps: [def-starred-summatory-function, lem-truncated-perron-kernel]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.2"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

If $F(s)=\sum a_nn^{-s}$ converges absolutely on $\Re s=c>0$, then
$$\left|\frac1{2\pi i}\int_{c-iT}^{c+iT}F(s)\frac{x^s}{s}\,ds-A^*(x)\right|\leq\sum_{n\ne x}|a_n|(x/n)^c\min\{1,(T|\log(x/n)|)^{-1}\}+\frac{c|a_x|}{T},$$
where the final term is present only if $x\in\mathbb Z_{>0}$.

## Proof

**Given:** $c,T,x>0$ and absolute convergence of the Dirichlet series at $c$.

1.1 Absolute convergence permits termwise integration on the finite segment; subtracting the defining starred sum leaves $\sum_na_n(I(x/n,T)-\delta(x/n))$. [given, algebra]

2.1 Apply the two branches of the truncated-kernel estimate termwise and the triangle inequality.  The branch $n=x$ is precisely the displayed separate endpoint term. [step 1.1, algebra] ∎
