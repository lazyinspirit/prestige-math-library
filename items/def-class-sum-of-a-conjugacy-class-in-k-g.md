---
id: def-class-sum-of-a-conjugacy-class-in-k-g
kind: definition
title: "The class sum $\\widehat C$ of a conjugacy class $C$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-ring, def-conjugacy-class-and-centralizer]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.4.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite group, let $k$ be a field, and let $C \subseteq G$ be a
conjugacy class ([[def-conjugacy-class-and-centralizer]]). Its **class sum** in
$k[G]$ is

$$
\widehat C:=\sum_{g \in C}[g].
$$

Because $C$ is finite, this is a well-defined element of the group algebra
$k[G]$ ([[def-group-ring]]).
