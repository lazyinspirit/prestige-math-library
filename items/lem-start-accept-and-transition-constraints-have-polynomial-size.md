---
id: lem-start-accept-and-transition-constraints-have-polynomial-size
kind: lemma
title: "The start, accept, and transition constraints have polynomial size"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, def-bounded-computation-tableau, def-local-tableau-window, lem-tableau-cell-alphabet-is-constant]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Statement

For a fixed machine and a polynomially bounded tableau, the Boolean formulas
forcing the correct start row, forcing an accepting state somewhere, and
forcing legal row-to-row transitions all have polynomial total size.

## Facts & Assumptions

**Given:** A tableau of side length $T+1$ for a fixed machine $N$ on input $w$.

[L1] A local $2\times 3$ window is legal exactly when it matches one allowed local update of the machine, by [[def-local-tableau-window]].

[L2] Each tableau cell ranges over a constant-size alphabet for fixed $N$, by [[lem-tableau-cell-alphabet-is-constant]].

## Proof

**Proof technique:** direct.

1.1 The start constraint fixes each cell of the first row to its predetermined initial symbol, so it contributes one constant-size literal condition per column and therefore $O(T)$ total size. The accept constraint is the disjunction over all cells that one of them carries an accepting-state tag, so it has $O(T^2)$ size. [given, construct]

1.2 For each adjacent-row position and each illegal $2\times 3$ pattern, add a clause forbidding that pattern. By [L1] and [L2], there are $O(T^2)$ window positions and only constantly many patterns to inspect at each position, each producing a constant-size clause. [L1, L2, given, construct]

2.1 Combining steps 1.1 and 1.2 shows that the start, accept, and transition families together have polynomial total size. [step 1.1, step 1.2] ∎

