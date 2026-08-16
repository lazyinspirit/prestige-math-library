---
id: ex-integers-as-a-noetherian-non-artinian-module
kind: example
title: "$\\mathbb Z$ is Noetherian but not Artinian as a module over itself"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-noetherian-module, def-artinian-module, lem-subgroups-of-z-are-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

The regular $\mathbb Z$-module $\mathbb Z$ is Noetherian but not Artinian. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

[L2] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

[L3] Every subgroup $H\le(\mathbb Z,+)$ equals $n\mathbb Z=\langle n\rangle$ for exactly one $n\in\mathbb N$; in particular every subgroup is cyclic. ([[lem-subgroups-of-z-are-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 Every subgroup of $\mathbb Z$ is principal, so every submodule is finitely generated. [L1, L2, L3, given, algebra]

2.1 The descending chain $2^n\mathbb Z$ is strict from $n=0$ onward, showing failure of DCC. [step 1.1, given, algebra]

3.1 The chain of step 2.1 begins at $2^0\mathbb Z=\mathbb Z$, the whole module, and each inclusion $2^n\mathbb Z\supseteq2^{n+1}\mathbb Z$ is strict because $2^n\notin2^{n+1}\mathbb Z$; so the chain never stabilizes and DCC fails from the first term onward. This proves the stated claim. [step 2.1, given, algebra] ∎
