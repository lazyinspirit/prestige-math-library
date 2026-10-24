---
id: "rem-derivatives-at-zero-do-not-in-general-determine-the-law"
kind: "remark"
title: "A prescribed finite jet at zero does not determine the law"
deps: ["lem-moments-give-derivatives-of-the-characteristic-function"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
---

## Remark

[[lem-moments-give-derivatives-of-the-characteristic-function]] has a one-way hypothesis: a finite absolute moment of order k implies the displayed derivative formulas through order k. It does not assert that differentiability implies that absolute moment exists, or that knowing derivatives at zero recovers the characteristic function away from zero. Taylor reconstruction would require additional hypotheses that the lemma does not provide.

In particular, finite moment data do not determine a law in general. The companion's finite-support construction addresses every prescribed finite number of moments, rather than only a pair of laws with the same mean. This is orientation toward those examples, not a converse theorem or a claim of moment determinacy. No assertion that an arbitrary full moment sequence determines a probability law is made on this page.
