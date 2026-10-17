---
id: cor-cavalieri-principle-for-jordan-content
kind: corollary
title: "Cavalieri: Jordan content is the integral of sectional contents, and equal sections give equal content"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-jordan-fubini-by-sections, thm-jordan-content-and-indicator-integrability]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorems 5.4.3-5.4.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $E\subseteq\mathbb R^{p+q}$ be a bounded Jordan set whose sections $E_x$ are Jordan measurable outside a content-zero set of parameters. Then the completed sectional-content function $x\mapsto\operatorname{cont}(E_x)$ is integrable and
$$\operatorname{cont}(E)=\int\operatorname{cont}(E_x)\,dx,$$
with empty sections assigned content $0$.

Consequently, if bounded Jordan sets $E,F\subseteq\mathbb R^{p+q}$ have Jordan sections outside content-zero exceptional parameter sets and $\operatorname{cont}(E_x)=\operatorname{cont}(F_x)$ wherever both are ordinary Jordan sections outside those sets, then $\operatorname{cont}(E)=\operatorname{cont}(F)$.

## Facts & Assumptions

**Given:** Bounded Jordan sets with the stated sectional hypotheses.

[L1] Jordan--Fubini computes an integral over a bounded Jordan set by integrating its section integrals, with empty sections assigned zero ([[thm-jordan-fubini-by-sections]]).

[L2] A metric-bounded set is Jordan measurable if and only if its indicator is Riemann integrable on a bounding rectangle, and then the indicator integral is its Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the constant-one function on $E$. Its integral over $E$ is $\operatorname{cont}(E)$ by [L2], while the integral over a section is $\operatorname{cont}(E_x)$, again by [L2]. [L1, L2, given]

2.1 For $E$ and $F$, the two completed sectional-content functions agree outside the union of their exceptional sets, which is content zero. Their integrals are therefore equal, and step 1.1 identifies those integrals with the two total contents. [L1, step 1.1]

3.1 Empty sections contribute $0$. If either set has content zero, the same formula gives zero on both sides, so no nonemptiness hypothesis is hidden. [step 1.1, algebra] ∎
