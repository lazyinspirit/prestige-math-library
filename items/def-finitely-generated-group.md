---
id: def-finitely-generated-group
kind: definition
title: "Finitely generated groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-generated-subgroup, def-finite-cardinality]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a group. A subset $S \subseteq G$ **generates** $G$ if
$$\langle S \rangle = G$$
in the sense of [[def-generated-subgroup]].

The group $G$ is **finitely generated** if some finite subset $S \subseteq G$
generates $G$. Such an $S$ is a **finite generating set** of $G$.
