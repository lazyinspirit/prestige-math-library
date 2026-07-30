---
id: ex-cardinal-functions-of-the-real-line
kind: example
title: "Under choice, for the usual real line, $w=d=\\chi=L=c=\\aleph_0$ under the raw convention"
status: published
origin: session
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, thm-basic-cardinal-function-inequalities, thm-metric-weight-equals-density, thm-metric-countability-equivalences, thm-rational-points-and-boxes-in-rn, lem-real-line-is-a-metric-space]
aliases: []
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "D. H. Fremlin, Measure Theory, Chapter 5A", url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"}]}
pipeline_run: null
---
## Example
Specializing [[thm-rational-points-and-boxes-in-rn]] to $n=1$, rational-endpoint intervals and the rational points give countable bases and dense sets for the usual real line. The inequalities $c(\mathbb R)\le d(\mathbb R)\le w(\mathbb R)$ and $\chi(\mathbb R),L(\mathbb R)\le w(\mathbb R)$ then give countable upper bounds for all five functions ([[thm-basic-cardinal-function-inequalities]]). No finite family can be a basis or a local base, and finite covers or cellular families have arbitrarily large finite witnesses. Thus the five raw functions are all $\aleph_0$.
