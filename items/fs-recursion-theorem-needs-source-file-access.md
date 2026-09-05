---
id: fs-recursion-theorem-needs-source-file-access
kind: false-statement
title: "FALSE: the recursion theorem requires source-code access"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kleenes-second-recursion-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

Kleene's recursion theorem can produce self-referential programs only when the
program can inspect its own literal source file.

## Facts & Assumptions

**Given:** The fixed-point theorem of [[thm-kleenes-second-recursion-theorem]].

[L1] Every total computable program transformer has an index fixed point, by [[thm-kleenes-second-recursion-theorem]].

## Refutation

**Proof technique:** direct.

1.1 Consider the total computable transformer $F$ that sends an index $e$ to a program which ignores its actual input and simply outputs the numeral $e$. This transformer manipulates indices only; it does not read any source file. [given, construct]

2.1 By [L1], there exists $q$ with $$ \varphi_q=\varphi_{F(q)}. $$ But $\varphi_{F(q)}$ is precisely the constant program that outputs $q$, so $\varphi_q$ does the same. Thus a quine-style fixed point exists without any inspection of a literal source file. [L1, step 1.1]

3.1 Therefore the statement is false. The recursion theorem needs numbering, specialization, and computable index transformation, not filesystem access. [step 2.1] ∎
