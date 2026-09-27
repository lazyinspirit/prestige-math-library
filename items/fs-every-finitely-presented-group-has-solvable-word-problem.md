---
id: fs-every-finitely-presented-group-has-solvable-word-problem
kind: false-statement
title: "FALSE: every finitely presented group has solvable word problem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, thm-novikov-boone-undecidability-of-the-word-problem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (fs-every-finitely-presented-group-has-solvable-word-problem). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every finitely
presented group has solvable word problem.

## Facts & Assumptions

**Given:** The Axiom of Choice and the local Novikov-Boone existence theorem.

[L1] Under AC, one fixed finitely presented group has an unsolvable word
problem ([[thm-novikov-boone-undecidability-of-the-word-problem]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], there exists a finitely presented group $G$ whose word problem is unsolvable. [L1, given]

2.1 That group $G$ is a counterexample to the statement, so the statement is false. [step 1.1, algebra] ∎
