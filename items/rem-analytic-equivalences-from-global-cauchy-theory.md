---
id: rem-analytic-equivalences-from-global-cauchy-theory
kind: remark
title: "The global Cauchy equivalences give primitives, zero periods, and holomorphic logarithms, which in turn give holomorphic roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-homological-simple-connectivity-equivalences,
       thm-holomorphic-logarithms-homologically-simply-connected-domains,
       cor-holomorphic-roots-homologically-simply-connected-domains]
verification:
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Remark

The genuinely new work on this page is the bridge between planar homotopy,
planar complement topology, and the older homological criterion. The analytic
equivalences themselves were already proved on
[[thm-homological-simple-connectivity-equivalences]]:

- every cycle has zero period against every holomorphic function;
- every holomorphic function has a primitive;
- every nowhere-zero holomorphic function has a holomorphic logarithm.

The one-way root consequence is already present too: once the logarithm exists,
[[cor-holomorphic-roots-homologically-simply-connected-domains]] gives
holomorphic roots of every positive order. The grand theorem below cites those
results instead of restating their proofs.
