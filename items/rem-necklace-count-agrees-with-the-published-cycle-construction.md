---
id: rem-necklace-count-agrees-with-the-published-cycle-construction
kind: remark
title: "The cycle-index necklace count agrees with the published CYC count"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-necklace-count-via-cycle-index,
       cor-necklaces-over-an-m-letter-alphabet]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
pipeline_run: null
---

## Remarks

[[cor-necklace-count-via-cycle-index]] derives the necklace formula by averaging
fixed colourings under the rotation action of $C_n$.

The earlier published item [[cor-necklaces-over-an-m-letter-alphabet]] reaches
the same sequence through the symbolic $\operatorname{CYC}$ construction. The
two derivations therefore agree term by term:

$$\#\{\text{necklaces of length }n\text{ on }m\text{ colours}\}=\frac{1}{n}\sum_{d \mid n}\varphi(d)m^{n/d}.$$

The agreement matters because the cycle-construction route and the cycle-index
route spend different machinery, but they count the same orbit set.
