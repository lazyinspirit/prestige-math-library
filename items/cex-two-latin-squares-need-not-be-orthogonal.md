---
id: cex-two-latin-squares-need-not-be-orthogonal
kind: counterexample
title: "A Latin square need not be orthogonal to an identical copy of itself"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-latin-square, def-orthogonal-latin-squares-and-complete-families]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jonathan Davidson, Latin Squares"
      url: "https://jjdavidson.github.io/notes/design-theory/01latin-squares.html"
---

## Statement refuted

Any two Latin squares of the same order are orthogonal.

## Facts & Assumptions

**Given:** The addition table of $\mathbb F_3$, used twice.

[L1] Orthogonality means that every ordered pair of symbols occurs exactly once ([[def-orthogonal-latin-squares-and-complete-families]]).

## Counterexample

**Proof technique:** direct.

1.1 The addition table of $\mathbb F_3$ is a Latin square, so using it twice gives two Latin squares of the same order. [given, algebra]

2.1 In the paired array, every cell has the form $(u,u)$ because the same Latin square is used twice. So the ordered pair $(0,1)$ never appears, and [L1] shows that the two squares are not orthogonal. [step 1.1, L1, algebra] ∎
