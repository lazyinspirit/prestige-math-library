---
id: ex-symmetrising-a-one-relator-presentation
kind: example
title: "Symmetrising a one-relator presentation adds the cyclic conjugates and inverse cyclic conjugates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-symmetrisation-of-a-relator-set]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Example

For the one-relator presentation $\langle a,b,c \mid abc\rangle$, the
symmetrisation of the relator set is

$$ \{abc,bca,cab,c^{-1}b^{-1}a^{-1},b^{-1}a^{-1}c^{-1},a^{-1}c^{-1}b^{-1}\}. $$

## Facts & Assumptions

**Given:** The cyclically reduced relator $r=abc$.

[L1] Symmetrisation adds all cyclic conjugates of $r$ and of $r^{-1}$
([[def-symmetrisation-of-a-relator-set]]).

## Verification

**Proof technique:** direct.

1.1 The cyclic conjugates of $r=abc$ are $abc$, $bca$, and $cab$. [given]

2.1 The inverse word is $r^{-1}=c^{-1}b^{-1}a^{-1}$, whose cyclic conjugates are $c^{-1}b^{-1}a^{-1}$, $b^{-1}a^{-1}c^{-1}$, and $a^{-1}c^{-1}b^{-1}$. Applying [L1] gives exactly the displayed six-element set. [L1, step 1.1] ∎
