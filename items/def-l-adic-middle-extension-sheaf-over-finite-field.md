---
id: def-l-adic-middle-extension-sheaf-over-finite-field
kind: definition
title: "ℓ-adic Middle-Extension Sheaf over a Finite Field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-middle-extension-l-adic-sheaf-on-a-curve
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §2.1"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 5–6; finite-field sheaf and middle-extension conventions"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "PDF pp. 5–7; trace functions and middle extensions"
verification:
  precheck: pending
---

## Definition

Let $p$ be a prime, let $\ell\ne p$ be a prime, put $X=\mathbb P^1_{\mathbb F_p}$, and let $U\subseteq X$ be a dense open subscheme with inclusion $j:U\hookrightarrow X$. For a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf $\mathcal L$ on $U$, its ordinary middle-extension sheaf on $X$ is $\mathcal M=j_*\mathcal L$, where $j_*$ is the underived direct image of sheaves. Its restriction to $U$ is $\mathcal L$; at a geometric boundary point its stalk consists of sections over étale neighborhoods of that point restricted to the punctured neighborhood.

## Definition references

[[def-constructible-l-adic-sheaf-on-a-scheme|Constructible l-adic sheaf on a scheme]]

[[def-lisse-l-adic-sheaf-on-a-scheme|Lisse l-adic sheaf on a scheme]]

[[def-middle-extension-l-adic-sheaf-on-a-curve|Middle-extension sheaf on a curve]]
