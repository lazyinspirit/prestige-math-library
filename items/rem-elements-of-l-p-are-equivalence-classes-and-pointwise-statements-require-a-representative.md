---
id: rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative
kind: remark
title: "Elements of $L^p$ are equivalence classes, so pointwise statements require a representative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-l-p-space-as-a-quotient-by-null-functions]
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

Elements of [[def-l-p-space-as-a-quotient-by-null-functions]] are classes
$[f]$, not chosen functions. So formulas such as "$f(x)=0$" or "$f(x)\to g(x)$"
are not meaningful until a representative is named. Quantities invariant under
changing $f$ on a null set, such as $\|[f]\|_p$, are meaningful on the quotient;
pointwise assertions are not.
