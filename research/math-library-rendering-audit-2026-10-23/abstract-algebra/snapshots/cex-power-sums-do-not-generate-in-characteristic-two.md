---
id: cex-power-sums-do-not-generate-in-characteristic-two
kind: counterexample
title: "Power sums need not generate the symmetric ring in characteristic two"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-newtons-identities, thm-elementary-symmetric-polynomials-are-algebraically-independent, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement refuted

For every field and every number of variables, the first $n$ power sums generate the symmetric-polynomial ring.

## Facts & Assumptions

**Given:** Two variables over $\mathbb F_2$.

[L1] Newton's identities include $p_1=e_1$ and $p_2=e_1p_1-2e_2$ ([[thm-newtons-identities]]).

[L2] The elementary symmetric polynomials $e_1,e_2$ are algebraically independent over the coefficient field ([[thm-elementary-symmetric-polynomials-are-algebraically-independent]]).

[L3] For every prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Over $\mathbb F_2$, [L1] gives $p_1=e_1$ and $p_2=e_1p_1=e_1^2$, because $2=0$. [given, L1, L3, algebra]

2.1 Hence every polynomial in $p_1,p_2$ belongs to the proper subring $\mathbb F_2[e_1]$. [step 1.1]

3.1 The element $e_2$ is not in $\mathbb F_2[e_1]$, since an equality $e_2=Q(e_1)$ would be a nonzero polynomial relation between $e_1$ and $e_2$, contrary to [L2]. [step 2.1, L2]

4.1 Thus $p_1,p_2$ do not generate the two-variable symmetric ring over $\mathbb F_2$, refuting the universal statement and showing why the factorial-unit hypothesis is necessary. [step 3.1] ∎
