---
id: "def-convolution-of-distributions-when-one-has-compact-support"
kind: "definition"
title: "Convolution of distributions when one has compact support"
deps: ["thm-tensor-product-distributions-and-iterated-pairings", "lem-compactly-supported-distributions-extend-to-smooth-functions", "lem-test-function-cutoffs-and-euclidean-localization", "def-support-of-a-distribution"]
justified_by: ["lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
---

## Definition

Let $u,v\in\mathcal D'(\mathbb R^n)$, $n\ge1$, with at least one compact support. Write $S=\operatorname{supp}u$, $T=\operatorname{supp}v$ and $a(x,y)=x+y$. For $\psi\in\mathcal D(\mathbb R^n)$ put $E_\psi=(S\times T)\cap a^{-1}(\operatorname{supp}\psi)$. For any $\chi\in\mathcal D(\mathbb R^{2n})$ equal to one on a neighborhood of $E_\psi$, set the candidate value
$$C_{u,v,\psi}(\chi)=(u\otimes v)(\chi\,\psi\circ a).$$

The tensor and its support are supplied by [[thm-tensor-product-distributions-and-iterated-pairings]] and [[def-support-of-a-distribution]]. The set $E_\psi$ is compact: if $S$ is compact, it is a closed subset of the compact set $S\times(\operatorname{supp}\psi-S)$; interchange factors if $T$ is compact. A cutoff therefore exists by [[lem-test-function-cutoffs-and-euclidean-localization]]. The lemma [[lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis]] proves that the candidate value is independent of $\chi$ and is a continuous linear functional of $\psi$; define $(u*v)(\psi)$ to be this common value. If both supports are compact it agrees with the smooth extension pairing of [[lem-compactly-supported-distributions-extend-to-smooth-functions]]. Empty support gives the zero candidate, and $\chi=0$ is allowed when $E_\psi$ is empty. No infinite selection is part of the definition.
