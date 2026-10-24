---
id: rem-kolmogorov-extension-state-space-boundary
kind: remark
title: "State-space and index-set boundaries of the two extension routes"
status: published
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
    - title: "Shalizi, Building Processes, Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

Under countable choice and dependent choice, the countable theorem
[[thm-countable-product-of-probability-spaces]] covers arbitrary measurable
coordinate spaces but only product finite marginals. The arbitrary-index
theorem [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]
covers general consistent finite-dimensional laws, but requires standard-Borel
coordinates and AC in the compact-product route. Recursive kernel constructions
require extra conditional-probability data and belong to the later Markov-kernel
page.
