---
id: ex-a-torsion-free-small-cancellation-group
kind: example
title: "A strict C prime(1/6) presentation with no proper-power relators defines a torsion-free group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free]
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

The presentation

$$ G=\langle x_1,\dots,x_7 \mid x_1x_2x_3x_4x_5x_6x_7\rangle $$

is a strict $C'(1/6)$ presentation with no proper-power relator, so $G$ is
torsion-free.

## Facts & Assumptions

**Given:** The displayed one-relator presentation.

[L1] A $C'(1/6)$ presentation with no proper-power relators defines a
torsion-free group ([[cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free]]).

## Verification

**Proof technique:** direct.

1.1 The symmetrised relator set has no nontrivial pieces, because distinct cyclic conjugates start with distinct letters. So the $C'(1/6)$ condition holds vacuously. The relator is not a proper power because its letters are all distinct in cyclic order. [given]

2.1 Apply [L1] to the presentation from step 1.1. Therefore the group $G$ is torsion-free. [L1, step 1.1] ∎
