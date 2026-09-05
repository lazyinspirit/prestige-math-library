---
id: thm-cfg-equivalence-is-undecidable
kind: theorem
title: "CFG equivalence is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cfg-equivalence-and-ambiguity-problems, thm-cfg-universality-is-undecidable]
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

The CFG equivalence problem is undecidable.

## Facts & Assumptions

**Given:** A context-free grammar $G$ over a terminal alphabet $\Sigma$.

[L1] The CFG equivalence problem asks whether two CFGs generate the same language, by [[def-cfg-equivalence-and-ambiguity-problems]].

[L2] CFG universality is undecidable, by [[thm-cfg-universality-is-undecidable]].

## Proof

**Proof technique:** direct.

1.1 Let $U_\Sigma$ be a fixed grammar generating $\Sigma^*$. Such a grammar is easy to write, for example with productions $$ S\to aS\mid \varepsilon\qquad(a\in\Sigma). $$ Then $$ L(G)=\Sigma^* \iff L(G)=L(U_\Sigma). $$ [L1, given, construct]

2.1 Therefore a decision procedure for CFG equivalence would decide whether $L(G)=\Sigma^*$ by comparing $G$ with the fixed universal grammar $U_\Sigma$. That would decide CFG universality, contradicting [L2]. [L2, step 1.1, contradiction]

3.1 Hence CFG equivalence is undecidable. [step 2.1, discharge-contradiction: equivalence with a fixed universal grammar would decide universality] ∎
