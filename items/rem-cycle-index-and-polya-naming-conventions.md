---
id: rem-cycle-index-and-polya-naming-conventions
kind: remark
title: "Naming conventions for Burnside, Cauchy-Frobenius, and Redfield-Pólya"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cauchy-frobenius-orbit-counting]
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
    - title: "Ben Lynn, Polya Theory: Pólya's Inventory Theorem"
      url: "https://theory.stanford.edu/~blynn/polya/polya.html"
pipeline_run: null
---

## Remarks

This library's published orbit-counting result is
[[thm-cauchy-frobenius-orbit-counting]], so that is the name used in proofs on
this page whenever the orbit average itself is cited.

The surrounding literature uses several other names for closely related
statements. "Burnside's lemma" is the standard short name for the orbit count,
while "Pólya's enumeration theorem" usually means the colouring-orbit
specialization of that lemma through cycle structure. In the weighted setting,
"Redfield-Pólya" or "Pólya's inventory theorem" is the more precise label for
the pattern-inventory formula proved below.
