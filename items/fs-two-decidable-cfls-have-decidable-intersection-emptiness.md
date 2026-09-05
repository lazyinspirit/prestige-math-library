---
id: fs-two-decidable-cfls-have-decidable-intersection-emptiness
kind: false-statement
title: "FALSE: decidable CFLs have a decidable intersection-emptiness problem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-cfl-membership-is-decidable, thm-cfg-intersection-emptiness-is-undecidable]
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
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

Because every context-free language has decidable membership, there is an
algorithm that decides from two CFGs whether their intersection is empty.

## Facts & Assumptions

**Given:** Two context-free grammars $G$ and $H$.

[L1] Membership in each context-free language is decidable, by [[cor-cfl-membership-is-decidable]].

[L2] The problem of deciding whether $L(G)\cap L(H)=\varnothing$ is undecidable, by [[thm-cfg-intersection-emptiness-is-undecidable]].

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] says that for any fixed word $w$, one can decide separately whether $w\in L(G)$ and whether $w\in L(H)$. That is a pointwise membership statement about the two languages themselves. [L1, given]

2.1 The claim in the statement is stronger: it asks for one algorithm that, from the grammar descriptions alone, decides whether **some** word lies in both languages. But [L2] says that this description-level problem is undecidable. [L2, step 1.1]

3.1 Hence the statement is false. Decidable membership for each individual CFL does not make the intersection-emptiness problem for pairs of CFGs decidable. [step 2.1] ∎
