---
id: "def-computable-many-one-reducibility-interface"
kind: "definition"
title: "Computable many one reducibility interface"
status: "draft"
origin: "pipeline"
deps: ["thm-kleene-normal-form-for-the-fixed-machine-coding", "def-partial-function-computed-by-a-machine"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Patey chapter 5, Definitions 4.1 and 5.2, pp.87–89 (design locator, independently unread)"
      url: https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf
proof_strategy: "direct"
---

## Definition

For $A,B\subseteq\mathbb N$, write $A\le_m B$ if a total computable $f:\mathbb N\to\mathbb N$ satisfies
$$\forall n\in\mathbb N\quad(n\in A\ \Longleftrightarrow\ f(n)\in B).$$
Computability uses [[thm-kleene-normal-form-for-the-fixed-machine-coding]] and the encoded partial-function meaning of [[def-partial-function-computed-by-a-machine]]. Direction is from the membership problem A to the target B.

For an oracle $X\subseteq\mathbb N$, $A\le_m^X B$ has the same definition with f total X-computable. An oracle program is a finite ordinary tape program augmented by a query tape and a query instruction: when its tape contains a canonical numeral, receive in one query transition the bit indicating membership of that number in X; malformed queries receive zero. Writing the query costs ordinary transitions. This convention does not assert that X is computable.

For languages over fixed finite alphabets, $L\le_m K$ instead means a total string-valued computable map f with $x\in L$ iff $f(x)\in K$ on every source word. In the numeric-to-string bridge below, only canonical input numerals have a membership requirement, and their outputs must be canonical. This is not a claim about reductions between unrestricted numeral-image languages.

## Facts & Assumptions

**Given:** The definitions above, canonical numeral parsing and finite tape routines. The bridge is restricted to canonical numeral inputs and outputs.

[F1] The normal-form theorem supplies machine computability and strict composition of computable routines ([[thm-kleene-normal-form-for-the-fixed-machine-coding]]).

## Verification

1.1 Identity is total computable and preserves membership, so $A\le_m A$. If f reduces A to B and g reduces B to C, compute f then g; both halt on every natural, and $n\in A$ iff $f(n)\in B$ iff $g(f(n))\in C$. The same sequential program works with oracle X for both routines, routing each query to X. String-valued identity and composition obey the identical membership calculation. [F1, given]

2.1 Given a numeric reduction f, parse a source word. On a canonical numeral for n, add the numeric machine's tuple wrapper, run f, decode its numeric result and output $\operatorname{bin}(f(n))$. On malformed input output the one-letter zero. This is total and meets precisely the canonical-input specification. Conversely a total string map having canonical outputs on all canonical inputs gives a total numeric map by forming $\operatorname{bin}(n)$, running the map, and decoding its canonical output. The iff of membership is preserved in each direction. These finite encoders/decoders work unchanged relative to X. Malformed input is outside this bridge's specification; choosing zero there would not in general reduce the full numeral-image language if $0\in B$. [F1, step 1.1, given] ∎
