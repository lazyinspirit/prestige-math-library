---
id: def-property-of-baire-for-subsets
kind: definition
title: "The property of Baire"
status: draft
origin: pipeline
deps: ["def-nowhere-dense-meagre-and-residual-subsets"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 2.55 p26; correct the dense-open gloss in Lietz footnote 24"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

A subset $A$ of a topological space $X$ has the **property of Baire** if there is an open $U\subseteq X$ such that

$$A\mathbin\triangle U=(A\setminus U)\cup(U\setminus A)$$

is meagre in X, in the sense of [[def-nowhere-dense-meagre-and-residual-subsets]]. Meagre and comeagre refer to the ambient space X unless a relative space is explicitly named. No choice axiom or Baire-space hypothesis is part of this definition.

Every meagre set qualifies using $U=\varnothing$, and every open set qualifies using itself, since the error is empty. In particular the empty set and the whole space qualify even if X is empty. If $M\subseteq\bigcup_n N_n$ with each $N_n$ nowhere dense, its complement contains $\bigcap_n(X\setminus\overline{N_n})$, a countable intersection of dense open sets. It need not contain a single dense open set. This definition uses the actual sequence of nowhere dense witnesses.
