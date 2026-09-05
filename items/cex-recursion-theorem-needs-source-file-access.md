---
id: cex-recursion-theorem-needs-source-file-access
kind: counterexample
title: "A quine obtained without inspecting its own source file"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-recursion-theorem-needs-source-file-access]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

The recursion theorem can yield a self-referential program only if the program
reads its own literal source file.

## Facts & Assumptions

**Given:** The total computable transformer $F$ that sends an index $e$ to the constant-output program for $e$.

[L1] The companion false statement is refuted by the recursion-theorem fixed point construction, by [[fs-recursion-theorem-needs-source-file-access]].

## Counterexample

**Proof technique:** direct.

1.1 Let $F$ be the total computable transformer sending an index $e$ to the program that ignores its actual input and prints the numeral $e$. No filesystem or source-file query appears in the description of $F$. [given, construct]

2.1 By the fixed-point theorem discussed in [L1], there exists an index $q$ with $\varphi_q=\varphi_{F(q)}$. Therefore running program $q$ makes it print its own index $q$, even though the construction used only numbering and effective transformation of indices. [L1, step 1.1]

3.1 This explicit quine is a counterexample to the statement. [step 2.1] ∎
