---
id: def-local-tableau-window
kind: definition
title: "Local 2x3 tableau windows and legality"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-bounded-computation-tableau]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Definition

Let $T$ be a bounded computation tableau for a fixed machine $N$. Adjoin a
fixed boundary marker `#` to the left and right of every row. A
**local $2\times 3$ tableau window** is any block of the form
$$ \begin{matrix} T_{r,c} & T_{r,c+1} & T_{r,c+2}\\ T_{r+1,c} & T_{r+1,c+1} & T_{r+1,c+2} \end{matrix} $$
cut from two adjacent padded rows and three consecutive padded columns.

Such a window is **legal** when it is consistent with the local row-to-row rule
for bounded tableaux: the boundary markers stay fixed; if the upper row is
nonhalting then cells away from the head remain unchanged and the cells in the
head's neighborhood change exactly as one allowed transition of $N$
prescribes; and if the upper row is already halting then the lower row is
identical to it.

## Remarks

- A legal window is a local consistency check; it does not by itself guarantee
  that the whole tableau is a valid run.

- On this page, the separate global condition is that the first row is the
  correct start configuration; once that row is fixed, the local windows govern
  the rest of the tableau.

- The padded boundary markers let the same local test handle the left edge, the
  right edge, and very small tableau widths.
