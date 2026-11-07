---
id: lem-weighted-average-forces-many-nonzero-products
kind: lemma
title: "A Weighted Average Forces Many Nonzero Products"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §11.3"
      url: "https://arxiv.org/pdf/2309.07534v2"
---

## Statement

Let $S$ be any index set and, for each $s\in S$, let $a_s,b_s\in\mathbb C$ and $w_s>0$. Interpret a sum of nonnegative terms over $S$ as the supremum of its finite partial sums. Let $T,M,L\geq1$, $d,n\geq0$, $\eta>0$, and $c,C,C_1,A,B,H>0$. Suppose

$$\sum_{s\in S}\frac{|a_sb_s|}{w_s}\geq cT^{d-\eta}M^{n-\eta}H,$$

$$\frac{|a_s|}{\sqrt{w_s}}\leq CT^{d/2+\eta}M^{n/2+\eta}A L^{-1},\qquad \frac{|b_s|}{\sqrt{w_s}}\leq CT^{d/2+\eta}M^{n/2+\eta}B L^{-1}\quad(s\in S),$$

and $AB/H\leq C_1T^\eta$. Then

$$\#\{s\in S:a_sb_s\ne0\}\geq \frac{c}{C^2C_1}(TM)^{-4\eta}L^2,$$

where an infinite support satisfies the conclusion automatically.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §11.3](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** The hypotheses in the Statement. Prove the lower bound for the support of the products.

[A1] The sum is the supremum of finite partial sums of its nonnegative terms, as fixed in the Statement.

## Proof

1.1 Put $S_0=\{s\in S:a_sb_s\ne0\}$. If $S_0$ is infinite the conclusion holds, so suppose it is finite. For each $s\in S_0$, multiplying the pointwise bounds gives $|a_sb_s|/w_s\leq C^2T^{d+2\eta}M^{n+2\eta}AB L^{-2}$. Terms outside $S_0$ vanish; summing the bound and using $N=\#S_0$ gives $cT^{d-\eta}M^{n-\eta}H\leq NC^2T^{d+2\eta}M^{n+2\eta}AB L^{-2}$. [given, A1, algebra]

2.1 Rearranging the inequality in step 1.1 and using $AB/H\leq C_1T^\eta$ gives $N\geq c(C^2C_1)^{-1}T^{-4\eta}M^{-3\eta}L^2$. Since $M\geq1$, $M^{-3\eta}\geq M^{-4\eta}$, which yields the stated bound. The proof uses no choice principle. [given, step 1.1, algebra] ∎
