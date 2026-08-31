---
id: fs-pumping-quantifiers-may-be-reordered
kind: false-statement
title: "FALSE: the pumping lemma still works if its quantifiers are reordered"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-pumping-lemma-for-regular-languages]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Statement

In the pumping lemma, once a pumping length is fixed, every legal decomposition
of every sufficiently long word pumps.

## Facts & Assumptions

**Given:** The regular language
$$ O:=\{x\in\{0,1\}^*:|x|\text{ is odd}\}. $$

[L1] By [[thm-pumping-lemma-for-regular-languages]], a regular language only guarantees the existence of a good decomposition for each sufficiently long word.

## Refutation

**Proof technique:** direct.

1.1 The language $O$ is regular: a two-state DFA that toggles parity after each input symbol accepts exactly the words of odd length. [given, construct]

1.2 Fix any pumping length $p\geq 1$ and take $w:=0^{2p+1}\in O$. The decomposition $x:=\varepsilon$, $y:=0$, $z:=0^{2p}$ is legal because $|xy|=1\leq p$ and $|y|>0$, but pumping once gives $xz=0^{2p}$, whose length is even, so $xz\notin O$. Thus this legal decomposition does not pump. [given, construct]

2.1 Step 1.2 shows that a regular language can have bad legal decompositions even though [L1] supplies some good one. Therefore the quantifiers cannot be reordered as stated, and the statement is false. [L1, step 1.1, step 1.2] ∎
