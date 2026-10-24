---
id: ex-countable-choice-spent-on-enumerations
kind: example
title: "Where countable-union proofs spend choice"
status: published
origin: pipeline
deps: ["thm-countable-union-of-countable", "def-countable-choice", "thm-r-uncountable", "thm-n-cross-n-countable"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4.2 and Corollary 1, pp.20–21"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Example

For an omega family $(A_n)$ of at most countable sets, a **supplied family of enumerations** of the nonempty $A_n$ suffices in ZF to enumerate $\bigcup_nA_n$. Countable choice supplies those enumerations if only individual countability is given. In ZF plus countable choice, the real line cannot be a countable union of countable sets.

## Facts & Assumptions

[F1] [[thm-n-cross-n-countable]]: Omega squared is explicitly countable.

[F2] [[def-countable-choice]]: One member of each omega-indexed nonempty set can be selected.

[F3] [[thm-countable-union-of-countable]]: Under countable choice the union is at most countable.

[F4] [[thm-r-uncountable]]: The real line is not at most countable.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 If all $A_n$ are empty, the union is empty. Otherwise let $I=\{n:A_n\ne\varnothing\}$. Given surjections $e_n:\omega\to A_n$ for $n\in I$, enumerate $(n,k)\in I\times\omega$ by a fixed pairing enumeration and output $e_n(k)$, skipping other pairs. This lists every union member; first occurrences give an injection of the union into omega. [F1]

2.1 Without the supplied $e_n$, the set of surjections onto each nonempty $A_n$ is nonempty. For empty $A_n$ use a singleton dummy set instead. Countable choice selects these data simultaneously. The pairing operation itself costs no choice. [F2, step 1.1]

3.1 If the real line were such a countable union under countable choice, the union theorem would make it at most countable, contradicting its uncountability. [F3, F4] ∎
