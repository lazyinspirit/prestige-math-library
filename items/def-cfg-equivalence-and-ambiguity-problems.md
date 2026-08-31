---
id: def-cfg-equivalence-and-ambiguity-problems
kind: definition
title: "The CFG equivalence and ambiguity problems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-generated-by-a-cfg, def-ambiguity-and-inherent-ambiguity]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 11"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html"
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Definition

The **CFG equivalence problem** asks, given two context-free grammars $G$ and
$H$ over the same alphabet, whether
$$ L(G)=L(H). $$

The **CFG ambiguity problem** asks, given a context-free grammar $G$, whether
$G$ is ambiguous in the sense of [[def-ambiguity-and-inherent-ambiguity]].

## Remarks

- Equivalence is a problem about pairs of grammars; ambiguity is a problem
  about one grammar.

- Normal-form conversions preserve the languages of grammars, but they do not
  by themselves answer either decision problem.
