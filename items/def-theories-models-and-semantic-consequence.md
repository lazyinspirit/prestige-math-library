---
id: def-theories-models-and-semantic-consequence
kind: definition
title: "Theories, models and semantic consequence"
status: published
origin: pipeline
deps: ["lem-satisfaction-coincidence"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Schlicht, Mathematical Logic (2021) \u2014 1.4 opening and Definition 1.4.1 p.10; Moschovakis 1C.10 p.13."
      url: "https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf"
---

## Definition

An $L$-theory $T$ is a set of $L$-sentences, without any requirement that it be deductively closed. A structure $\mathcal M$ is a model of $T$ if it satisfies every sentence of $T$. By coincidence this does not depend on the chosen assignment. Write $T\models\phi$ if for every set $L$-structure $\mathcal M$ which is a model of $T$ and every assignment $s$, one has $\mathcal M,s\models\phi$. Thus if $T$ has no models the consequence condition is vacuous.

Validity means truth in every structure at every assignment; semantic equivalence means equality of truth under all such choices. The universal closure of $\phi$ binds its finitely many free variables in increasing index order (and is $\phi$ if none occur). Repeated use of the universal truth clause shows that a structure satisfies this closure exactly when $\phi$ holds at every assignment. Quantification over all set structures is a first-order class description, not a set of all structures.

Conventions and prerequisites: [[lem-satisfaction-coincidence]].
