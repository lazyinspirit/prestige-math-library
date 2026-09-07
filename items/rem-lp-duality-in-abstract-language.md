---
id: rem-lp-duality-in-abstract-language
kind: remark
title: "The published Lp duality theorem in abstract notation"
status: draft
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "thm-sigma-finite-duality-for-bounded-functionals-on-l-p", "cor-ell-p-duality-by-counting-measure"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 1.33, p.33 and Example 1.35, p.36"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

For a sigma-finite measure space and **real** $L^p$, with $1\le p<\infty$ and $1/p+1/q=1$ (so $q=\infty$ for $p=1$), [[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]] identifies every bounded functional uniquely as $[f]\mapsto\int fg\,d\mu$, with norm $\|g\|_q$. In the language of [[def-dual-space-of-a-normed-space]], this is a linear isometric identification $(L^p)^*\cong L^q$. In particular [[cor-ell-p-duality-by-counting-measure]] at $p=1$ gives $(\ell^1(\mathbb R))^*\cong\ell^\infty(\mathbb R)$. This remark asserts neither a $p=\infty$ representation nor a complex or arbitrary-measure extension of the cited theorem.
