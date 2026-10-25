---
id: def-maximal-and-global-cohen-macaulay-modules
title: Maximal and global Cohen--Macaulay modules
kind: definition
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Definition

Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a nonzero
finite $R$-module. The module $M$ is **maximal Cohen--Macaulay** if
$$\operatorname{depth}(M)=\dim R.$$
For a Noetherian ring $R$, a finite $R$-module $M$ is **Cohen--Macaulay over
$R$** if $M_{\mathfrak p}$ is a Cohen--Macaulay $R_{\mathfrak p}$-module for
every $\mathfrak p\in\operatorname{Supp}_R(M)$. This is a global convention; it
therefore declares the zero module globally Cohen--Macaulay vacuously, while
the preceding maximal Cohen--Macaulay definition does not apply to it.
