---
id: prop-syntactic-properties-lie-outside-rices-theorem
kind: proposition
title: "Syntactic machine properties lie outside the scope of Rice's theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-index-set-and-extensional-machine-property, thm-rices-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

Properties of a machine description such as "has at most ten states" or "has
an unreachable state" are not extensional language properties, so Rice's
theorem does not apply to them.

## Facts & Assumptions

**Given:** The machine-description properties "has at most ten states" and
"has an unreachable state."

[L1] An extensional property must assign the same truth value to any two machines with the same recognized language, by [[def-index-set-and-extensional-machine-property]].

[L2] Rice's theorem applies only to nontrivial extensional language properties, by [[thm-rices-theorem]].

## Proof

**Proof technique:** direct.

1.1 Adjoining any number of new states with no incoming transitions leaves every existing computation unchanged. Thus the original machine and the enlarged machine recognize the same language. [given, construct]

2.1 Start with a three-state machine and adjoin eight unreachable states. The two machines have the same recognized language by step 1.1, but the first has at most ten states and the second has eleven. Hence the state-count property is not extensional. [L1, step 1.1, construct]

2.2 For the second property, take a three-state machine whose start state moves to its accept state on one input symbol and to its reject state on the blank symbol; each of its three states is reachable. Adjoin one state with no incoming transitions. Step 1.1 again preserves the recognized language, but now exactly the enlarged machine has an unreachable state. Hence this property is not extensional either. [L1, step 1.1, construct]

3.1 Since the extensionality hypothesis of [L2] fails for both properties, Rice's theorem does not speak about them. [L2, step 2.1, step 2.2] ∎
