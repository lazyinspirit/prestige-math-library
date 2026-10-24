---
id: def-multiset-and-powerset-constructions
kind: definition
title: "The multiset construction $\\operatorname{MSET}(\\mathcal{A})$ and the powerset construction $\\operatorname{PSET}(\\mathcal{A})$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Definition

Let $\mathcal{A}$ be a combinatorial class.

An object of $\operatorname{MSET}(\mathcal{A})$ is a finitely supported
multiplicity function

$$m : \mathcal{A} \to \mathbb{N},$$

whose value $m(a)$ records how many copies of $a$ occur. Its size is

$$|m| := \sum_{a \in \mathcal{A}} m(a)|a|,$$

which is a finite sum because the support of $m$ is finite.

An object of $\operatorname{PSET}(\mathcal{A})$ is such a multiplicity function
with values only in $\{0,1\}$, so it records an ordinary finite subset of
$\mathcal{A}$. Its size is given by the same formula.

If $\mathcal{A}$ has a size-zero object, then
$\operatorname{MSET}(\mathcal A)$ may fail to be a combinatorial class because
that object can be repeated arbitrarily often without changing total size. The
powerset construction has no such failure: its multiplicities are only $0$ and
$1$, and the size-zero level of $\mathcal A$ is finite. Its generating function
would, however, acquire the extra factor $2^{a_0}$. The product formulas below
use the uniform no-size-zero hypothesis and therefore start at positive sizes.
