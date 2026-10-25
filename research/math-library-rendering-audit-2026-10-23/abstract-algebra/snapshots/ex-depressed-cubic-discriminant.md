---
id: ex-depressed-cubic-discriminant
kind: example
title: "The discriminant of $x^3+px+q$ is $-4p^3-27q^2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-discriminant-as-a-resultant-with-the-derivative, cor-vietas-formulas-for-a-split-monic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

For the monic polynomial $f(t)=t^3+pt+q$ over any field,

$$\operatorname{Disc}(f)=-4p^3-27q^2.$$

The formula is an integer polynomial identity, so its specializations in characteristics two and three are included.

## Facts & Assumptions

**Given:** A field $F$, the polynomial $f(t)=t^3+pt+q$, and roots $\alpha,\beta,\gamma$ in a splitting field.

[L1] For a monic cubic, $\operatorname{Res}(f,f')=-\operatorname{Disc}(f)$ ([[cor-discriminant-as-a-resultant-with-the-derivative]]).

[L2] Vieta's formulas give $\alpha+\beta+\gamma=0$, $\alpha\beta+\alpha\gamma+\beta\gamma=p$, and $\alpha\beta\gamma=-q$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 Since $f'(t)=3t^2+p$, the root-product formula inside [L1] gives $\operatorname{Res}(f,f')=\prod_{r\in\{\alpha,\beta,\gamma\}}(3r^2+p)$. [given, L1, algebra]

2.1 Expanding this product gives $27(\alpha\beta\gamma)^2+9p(\alpha^2\beta^2+\alpha^2\gamma^2+\beta^2\gamma^2)+3p^2(\alpha^2+\beta^2+\gamma^2)+p^3$. [step 1.1, algebra]

3.1 By [L2], $\alpha^2+\beta^2+\gamma^2=-2p$ and $\alpha^2\beta^2+\alpha^2\gamma^2+\beta^2\gamma^2=p^2$, while $(\alpha\beta\gamma)^2=q^2$. Substitution in step 2.1 gives $\operatorname{Res}(f,f')=4p^3+27q^2$. [step 2.1, L2, algebra]

4.1 Apply [L1] to obtain $\operatorname{Disc}(f)=-4p^3-27q^2$. Every calculation used integer coefficients, so reduction to any field characteristic is valid. [step 3.1, L1] ∎
