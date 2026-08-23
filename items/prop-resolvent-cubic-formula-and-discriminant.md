---
id: prop-resolvent-cubic-formula-and-discriminant
kind: proposition
title: "The coefficient formula and discriminant of the quartic resolvent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-resolvent-cubic-of-a-monic-quartic, thm-fundamental-theorem-of-symmetric-polynomials, def-discriminant-of-a-monic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 4.9"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Theorem 3.4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

For

$$f(x)=x^4+ax^3+bx^2+cx+d,$$

the resolvent of [[def-resolvent-cubic-of-a-monic-quartic]] is

$$R_f(y)=y^3-by^2+(ac-4d)y-(a^2d+c^2-4bd).$$

A monic quartic and its resolvent cubic have the same discriminant.

## Facts & Assumptions

**Given:** Four roots $\alpha_1,\ldots,\alpha_4$ in a splitting field, their elementary symmetric functions $e_1=-a$, $e_2=b$, $e_3=-c$, $e_4=d$, and the discriminant convention of [[def-discriminant-of-a-monic-polynomial]].

[L1] Every symmetric polynomial has a unique expression $Q(e_1,\ldots,e_n)$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 For the three pairing roots $\beta_1,\beta_2,\beta_3$, direct expansion gives $\beta_1+\beta_2+\beta_3=e_2=b$, $\beta_1\beta_2+\beta_1\beta_3+\beta_2\beta_3=e_1e_3-4e_4=ac-4d$, and $\beta_1\beta_2\beta_3=e_1^2e_4+e_3^2-4e_2e_4=a^2d+c^2-4bd$. These are symmetric identities licensed by [L1], and substitution in $\prod_i(y-\beta_i)$ gives the displayed formula. [L1, algebra]

1.2 The differences factor as $\beta_1-\beta_2=(\alpha_2-\alpha_3)(\alpha_1-\alpha_4)$, $\beta_1-\beta_3=(\alpha_2-\alpha_4)(\alpha_1-\alpha_3)$, and $\beta_2-\beta_3=(\alpha_3-\alpha_4)(\alpha_1-\alpha_2)$. [algebra]

2.1 Multiplying the squares of the three identities in step 1.2 uses each of the six differences $\alpha_i-\alpha_j$ exactly once. The root-product formulas for the two discriminants therefore give $\operatorname{Disc}(R_f)=\operatorname{Disc}(f)$. The identity remains valid when coefficients or root differences vanish. [step 1.2, algebra] ∎
