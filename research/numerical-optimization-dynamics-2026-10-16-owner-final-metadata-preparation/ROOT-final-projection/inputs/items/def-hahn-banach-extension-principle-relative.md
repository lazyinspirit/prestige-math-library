---
id: def-hahn-banach-extension-principle-relative
kind: definition
title: The real dominated-extension principle as an additional hypothesis over ZF
status: published
origin: pipeline
deps: [def-sublinear-functional, def-linear-subspace, def-algebraic-dual-and-linear-functional]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
---

## Definition

Work over ZF. The **real dominated-extension principle**, denoted **HB**, is the following assertion:

For every real vector space $X$, every sublinear functional $p:X\to\mathbb R$ in the sense of [[def-sublinear-functional]], every real linear subspace $M\le X$ in the sense of [[def-linear-subspace]], and every real linear functional $g:M\to\mathbb R$ in the sense of [[def-algebraic-dual-and-linear-functional]],
$$\bigl(\forall m\in M,\ g(m)\le p(m)\bigr)\ \Longrightarrow\ \exists F:X\to\mathbb R\ \bigl(F\text{ is real linear},\ F|_M=g,\ \forall x\in X,\ F(x)\le p(x)\bigr).$$

This names an additional principle; it does not assert a proof of HB in ZF. Subsequent results explicitly state when they assume HB. Neither topology nor completeness is part of this assertion. The subspace may be $\{0\}$ or all of $X$. Sublinearity at scalar zero gives $p(0)=0$, and a linear functional has value zero at zero.

## Source notes

Brezis Theorem 1.1, p.1 (assertion only); Teschl Theorem 4.13, pp.112–113 (sublinear special case).
