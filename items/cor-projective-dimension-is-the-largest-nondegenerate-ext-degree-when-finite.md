---
id: cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite
kind: corollary
title: "Finite projective dimension is the largest nonzero Ext degree"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

If $M\ne0$ has finite projective dimension $d$, then
$$d=\max\{k\geq0:\operatorname{Ext}^k(M,X)\ne0\text{ for some }X\}.$$

## Facts & Assumptions

**Given:** A nonzero object $M$ of finite projective dimension $d$ under the stated enough-projectives and smallness hypotheses.

## Proof

**Proof technique:** direct.

1.1 [[thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]] gives $\operatorname{Ext}^k(M,-)=0$ for $k>d$. [given, construct]

2.1 If $d=0$, take $X=M$: then $\operatorname{Ext}^0(M,M)=\operatorname{Hom}(M,M)$ contains the nonzero identity of $M$. If $d\geq1$ and every $\operatorname{Ext}^d(M,X)$ vanished, the same theorem with $n=d-1$ would give $\operatorname{pd}(M)\leq d-1$, contradicting minimality of $d$. Hence in either case some $X$ witnesses nonvanishing in degree $d$. [step 1.1, algebra] ∎
