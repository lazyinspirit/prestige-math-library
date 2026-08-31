---
id: thm-pumping-lemma-for-regular-languages
kind: theorem
title: "The pumping lemma for regular languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-language-by-dfa-recognition, def-deterministic-finite-automaton, def-dfa-acceptance-and-recognized-language, def-extended-dfa-transition-function, lem-pigeonhole]
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

If $L$ is regular, then there exists $p\geq 1$ such that every word
$w\in L$ with $|w|\geq p$ can be written as $w=xyz$ with
$$ |xy|\leq p,\qquad |y|>0,\qquad xy^iz\in L\ \text{for every } i\geq 0. $$

## Facts & Assumptions

**Given:** A regular language $L$.

[L0] By [[def-regular-language-by-dfa-recognition]], some DFA recognizes $L$.

[L1] By [[def-deterministic-finite-automaton]], a DFA has only finitely many states.

[L2] By [[def-dfa-acceptance-and-recognized-language]], a word is in $L$ exactly when an accepting state is reached after reading it in some DFA for $L$.

[L3] By [[def-extended-dfa-transition-function]], reading a word letter by letter determines the successive run states.

[L4] By [[lem-pigeonhole]], among $n+1$ objects placed into only $n$ positions, some two positions coincide.

## Proof

**Proof technique:** direct.

1.1 Choose the DFA $D$ recognizing $L$ supplied by [L0], and let $p$ be its number of states, which is finite by [L1]. Fix a word $w=a_1\cdots a_m\in L$ with $m\geq p$. As $D$ reads the prefixes $\varepsilon,a_1,a_1a_2,\dots,a_1\cdots a_p$, [L3] gives $p+1$ visited states. [L0, L1, L3, given]

2.1 By [L4], two of those first $p+1$ visited states are equal; write them as the states after the prefixes of lengths $i<j\leq p$, and set $x:=a_1\cdots a_i$, $y:=a_{i+1}\cdots a_j$, and $z:=a_{j+1}\cdots a_m$. Then $w=xyz$, $|xy|=j\leq p$, and $|y|=j-i>0$. [L4, step 1.1, choose]

3.1 Because the run returns to the same state after reading $y$, repeating or deleting that loop does not change the state reached before the suffix $z$. Therefore [L2] implies $xy^iz\in L$ for every $i\geq 0$, so the factorization from step 2.1 satisfies all three required conditions. [L2, L3, step 2.1] ∎
