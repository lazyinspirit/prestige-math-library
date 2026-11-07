---
id: op-greenberg-vanishing-for-totally-real-cyclotomic-towers
kind: open-problem
title: "Greenberg vanishing conjecture for totally real cyclotomic towers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-cyclotomic-iwasawa-class-group-module
  - def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module
  - thm-cyclotomic-class-group-iwasawa-module-finitely-generated-torsion
  - thm-iwasawa-class-number-growth-in-zp-extensions
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Greenberg, Iwasawa Theory—Past and Present"
      url: "https://www.fields.utoronto.ca/sites/default/files/uploads/Greenberg.pdf"
      locator: "Introduction and §§1–2: cyclotomic class-group modules, Iwasawa invariants and growth formula"
    - title: "M. M. Chems-Eddin, Greenberg's conjecture and Iwasawa module of real biquadratic fields I, arXiv:2503.15727v2"
      url: "https://arxiv.org/pdf/2503.15727"
      locator: "Introduction, printed pp. 1–2: general status and bounded-class-number formulation"
    - title: "Y. Mizusawa and Y. Saito, On Z2-extensions of real quadratic fields with four odd ramified prime numbers"
      url: "https://link.springer.com/article/10.1007/s11139-026-01397-3"
      locator: "Introduction, printed pp. 1–2: states Greenberg's conjecture remains open even for real quadratic fields in general"
verification: {}
---

## Statement

Let $K$ be any totally real number field and let $p$ be any prime. For odd $p$, let $\mathbb Q_{\mathrm{cyc},p}$ be the unique $\mathbb Z_p$ subextension of $\mathbb Q(\mu_{p^\infty})/\mathbb Q$; for $p=2$, let $\mathbb Q_{\mathrm{cyc},2}=\bigcup_{n\ge0}\mathbb Q(\mu_{2^{n+2}})^+$, where $+$ denotes the fixed field of complex conjugation. Put $K_\infty=K\mathbb Q_{\mathrm{cyc},p}$, and let $X_{K,p}$ be the inverse limit of the $p$-primary ideal class groups of its finite layers under norm. **Greenberg's vanishing conjecture** asserts that the Iwasawa invariants of this module satisfy
$$\mu(X_{K,p})=\lambda(X_{K,p})=0.$$
Under the Iwasawa class-number growth formula, this is equivalent to boundedness of the $p$-parts of the class numbers of the finite layers.

## Statement references

[R. Greenberg, *Iwasawa Theory—Past and Present*, §§1–2, pp. 3–10](https://www.fields.utoronto.ca/sites/default/files/uploads/Greenberg.pdf)

[M. M. Chems-Eddin, *Greenberg's conjecture and Iwasawa module of real biquadratic fields I*, arXiv:2503.15727v2, Introduction, pp. 1–2](https://arxiv.org/pdf/2503.15727)

[Y. Mizusawa and Y. Saito, *On $\mathbb Z_2$-extensions of real quadratic fields with four odd ramified prime numbers*, Introduction, pp. 1–2](https://link.springer.com/article/10.1007/s11139-026-01397-3)

## Open problem

Determine whether both Iwasawa invariants vanish for every totally real number field and every prime in its cyclotomic $\mathbb Z_p$-extension.

## Status

As of 2026-10-26, Mizusawa and Saito state that Greenberg's conjecture remains open even for real quadratic fields in general; their result treats a particular family in the $2$-adic cyclotomic extension. Chems-Eddin likewise reports the general conjecture as open and studies selected families. These sources support the open status and do not prove the universal claim above.

## Status references

[Y. Mizusawa and Y. Saito, *On $\mathbb Z_2$-extensions of real quadratic fields with four odd ramified prime numbers*, Introduction, pp. 1–2](https://link.springer.com/article/10.1007/s11139-026-01397-3)

[M. M. Chems-Eddin, *Greenberg's conjecture and Iwasawa module of real biquadratic fields I*, arXiv:2503.15727v2, Introduction, pp. 1–2](https://arxiv.org/abs/2503.15727)
