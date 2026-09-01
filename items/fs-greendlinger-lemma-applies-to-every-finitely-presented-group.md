---
id: fs-greendlinger-lemma-applies-to-every-finitely-presented-group
kind: false-statement
title: "FALSE: Greendlinger's lemma holds for every finite presentation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-greendlinger-lemma-for-c-prime-one-sixth-presentations, def-group-presentation]
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

## Statement

Greendlinger's lemma holds for every finite presentation.

## Facts & Assumptions

**Given:** The presentation $\langle a,b \mid aba^{-1}b^{-1}\rangle$ of
$\mathbb Z^2$.

[L1] Greendlinger's conclusion on this page is proved only for reduced
$C'(1/6)$ diagrams ([[thm-greendlinger-lemma-for-c-prime-one-sixth-presentations]]).

[F1] A group presentation is the quotient by the normal closure of its defining
relators ([[def-group-presentation]]).

## Refutation

**Proof technique:** direct.

1.1 The relator $aba^{-1}b^{-1}$ and its cyclic conjugates have long overlaps, so the presentation does not satisfy the $C'(1/6)$ hypothesis required by [L1]. [L1, F1, given]

2.1 In the square grid van Kampen diagrams for commutator powers in $\mathbb Z^2$, every face can meet the outer boundary in exactly two of its four edges, never in more than half. Thus the characteristic Greendlinger conclusion fails for these null words. [step 1.1, given]

3.1 Therefore Greendlinger's lemma does not extend to arbitrary finite presentations. The statement is false. [step 1.1, step 2.1] ∎
