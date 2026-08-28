---
id: def-choice-of-transversals-for-hnn-normal-forms
kind: definition
title: "The transversal data used for HNN normal forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coset, lem-equivalent-hnn-presentation-with-associated-subgroups]
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
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Definition

Work in the associated-subgroup presentation

$$G=\langle A,t \mid tct^{-1}=\phi(c)\text{ for }c\in C_-\rangle$$

from [[lem-equivalent-hnn-presentation-with-associated-subgroups]]. Choose
right-coset transversals

$$S_-\subseteq A\quad\text{for }C_-\backslash A,\qquad S_+\subseteq A\quad\text{for }C_+\backslash A,$$

each containing the identity; equivalently, every $a\in A$ has unique
decompositions

$$a=cs\quad(c\in C_-,\ s\in S_-),\qquad a=dr\quad(d\in C_+,\ r\in S_+).$$

An HNN word

$$a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n$$

is in **transversal normal form** relative to $(S_-,S_+)$ when

$$a_i\in S_-\text{ if }\varepsilon_i=1,\qquad a_i\in S_+\text{ if }\varepsilon_i=-1,$$

for each $1\le i\le n$, and whenever $\varepsilon_i=-\varepsilon_{i+1}$ the
coefficient $a_i$ is not the identity. The initial coefficient $a_0$ is
arbitrary in $A$.
