---
id: rem-simply-connected-convention-for-plane-domains
kind: remark
title: "Under the grand theorem's Choice hypothesis, plane-domain simple connectivity means any grand-equivalent clause"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-grand-equivalence-for-simply-connected-plane-domains]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

Before this page, the track deliberately said **homologically simply connected**
whenever only the cycle/index criterion had been proved. After
[[thm-grand-equivalence-for-simply-connected-plane-domains]], and under its
Axiom-of-Choice hypothesis, that caution is no longer needed for plane domains:
all of the analytic, homological, homotopic, conformal, and contractibility
clauses on the theorem are equivalent.

Accordingly, whenever this track invokes that theorem or a corollary derived
from it, a **simply connected plane domain** means a complex domain satisfying
any, and hence every, clause of the grand theorem under the same
Axiom-of-Choice hypothesis.
