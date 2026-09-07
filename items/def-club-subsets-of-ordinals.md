---
id: def-club-subsets-of-ordinals
kind: definition
title: "Closed unbounded subsets of ordinals"
status: draft
origin: pipeline
deps: ["def-cofinality"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, §5.1 Definition 5.1, printed p.39 (PDF p.40)"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, §14 Definition 14.1, p.79"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Definition

For a nonzero limit ordinal $\theta$, a subset $C\subseteq\theta$ is **unbounded** if $\forall\beta<\theta\,\exists\gamma\in C\ (\beta<\gamma)$. Put

$$\operatorname{acc}_\theta(C)=\{\delta<\theta:\delta\text{ is a nonzero limit ordinal and }\sup(C\cap\delta)=\delta\}.$$

It is **closed** if $\operatorname{acc}_\theta(C)\subseteq C$, and **club** if closed and unbounded. Neither $0$ nor $\theta$ is required to belong to a club. We omit the subscript on acc when the ambient ordinal is clear. The main setting on this page is ZFC and a regular uncountable cardinal $\kappa$; some lemmas explicitly allow $\theta$ with merely uncountable cofinality.
