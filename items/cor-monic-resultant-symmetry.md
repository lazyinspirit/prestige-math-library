---
id: cor-monic-resultant-symmetry
kind: corollary
title: "For monic $f,g$ of degrees $n,m$, $\\operatorname{Res}(f,g)=(-1)^{mn}\\operatorname{Res}(g,f)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monic-resultant-as-a-double-root-product, thm-splitting-fields-exist-for-nonzero-polynomials]
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
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35(a)"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f,g\in F[t]$ be monic of degrees $n,m$. Then

$$\operatorname{Res}(f,g)=(-1)^{mn}\operatorname{Res}(g,f).$$

## Facts & Assumptions

**Given:** Monic polynomials $f,g\in F[t]$ of degrees $n,m$.

[L1] In a common splitting extension, $\operatorname{Res}(f,g)=\prod_{i,j}(\alpha_i-\beta_j)$ and $\operatorname{Res}(g,f)=\prod_{j,i}(\beta_j-\alpha_i)$ ([[thm-monic-resultant-as-a-double-root-product]]).

[L2] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 Take a splitting field of the nonzero polynomial $fg$ when both degrees are positive; if one polynomial is $1$, use any splitting field for the other. [given, L2]

2.1 Apply [L1] in that field. Replacing each of the $mn$ factors $\alpha_i-\beta_j$ by $-(\beta_j-\alpha_i)$ contributes the factor $(-1)^{mn}$ and yields the formula. [step 1.1, L1, algebra]

3.1 If $n=0$ or $m=0$, both resultants are $1$ and $(-1)^{mn}=1$, so the same identity holds. [L1, algebra] ∎
