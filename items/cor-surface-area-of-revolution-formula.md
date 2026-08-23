---
id: cor-surface-area-of-revolution-formula
kind: corollary
title: 'The surface of revolution has area $2\pi\int_a^b r(s)\sqrt{1+r''(s)^2}\,ds$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-scalar-surface-integrals-on-a-surface-of-revolution, thm-jordan-fubini-by-sections, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Exercise 17'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'APEX Calculus II, Section 7.4'
      url: 'https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf'
pipeline_run: null
---

## Statement

Assume the hypotheses of [[thm-scalar-surface-integrals-on-a-surface-of-revolution]]. The surface obtained by rotating $r$ about the axis has area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$.

## Facts & Assumptions

**Given:** A radius function satisfying the surface-of-revolution hypotheses.

[L1] With scalar field $q=1$, the surface integral is $\int_0^{2\pi}\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds\,dt$ ([[thm-scalar-surface-integrals-on-a-surface-of-revolution]]).

[L2] Jordan-Fubini separates a continuous integrand on a rectangle, and the integral of the constant $C$ over $[0,2\pi]$ is $2\pi C$ ([[thm-jordan-fubini-by-sections]], [[lem-integral-elementary-bounds]]).

## Proof

**Proof technique:** direct.

1.1 Set $q=1$ in [L1]. The inner integral is independent of $t$. [given, L1]

2.1 Apply [L2] to integrate that constant inner value over $0\le t\le2\pi$, obtaining the factor $2\pi$ and the displayed formula. [step 1.1, L2]

3.1 Possible endpoint zeros of $r$ lie on the parameter boundary already covered by [L1], so no endpoint correction is present. [step 2.1, L1] ∎
