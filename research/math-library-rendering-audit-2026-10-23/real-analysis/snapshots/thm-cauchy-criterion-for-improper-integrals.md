---
id: thm-cauchy-criterion-for-improper-integrals
kind: theorem
title: "Cauchy criterion for improper integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint,
       thm-additivity-over-subintervals, thm-cauchy-criterion-via-lub,
       lem-convergent-implies-cauchy, def-real-limit, def-sequence,
       cor-archimedean-reciprocal, thm-of-archimedean,
       def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

The integral $\int_a^\infty f$ converges if and only if, for every $\varepsilon>0$, there is $A>a$ such that
$$A\le u<v\quad\Longrightarrow\quad\left|\int_u^v f\right|<\varepsilon.$$
At a finite right singular endpoint $b$, replace the condition by $b-\delta<u<v<b$; at a finite left endpoint use $a<u<v<a+\delta$; at $-\infty$ use $u<v\le-A$. In each case all displayed proper integrals must exist.

## Facts & Assumptions

**Given:** A locally Riemann-integrable $f$ on the relevant one-ended interval.

[L1] Adjacent proper integrals add ([[thm-additivity-over-subintervals]]).

[L2] A convergent real sequence is Cauchy, and every Cauchy real sequence converges ([[lem-convergent-implies-cauchy]], [[thm-cauchy-criterion-via-lub]]).

[L3] The Archimedean property supplies integer truncations beyond every real bound and reciprocal truncations inside every positive neighborhood ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 Put $F(R)=\int_a^R f$. If $F(R)$ has a finite limit as $R\to\infty$, then $|F(v)-F(u)|<\varepsilon$ for all sufficiently large $u,v$. By [L1], this difference is $\int_u^v f$, proving necessity. [L1]

1.2 Conversely, the tail condition and [L3] make the sequence $F(n)$ Cauchy, hence convergent to some $L$ by [L2]. Given $\varepsilon>0$, choose a large integer $n$ for which $|F(n)-L|<\varepsilon/2$ and the tail condition is below $\varepsilon/2$. For every real $R\ge n$, [L1] gives $F(R)-L=(F(R)-F(n))+(F(n)-L)$, so $F(R)\to L$. [L1, L2, L3]

2.1 For a finite endpoint use the reciprocal sequence $a+1/n$ or $b-1/n$ furnished by [L3]; the identical Cauchy argument applies. Reversing the real line gives the $-\infty$ form. [L3] ∎
