---
id: def-temperley-lieb-normalized-markov-trace-by-closure
kind: definition
title: "Normalized Temperley–Lieb trace from diagram closure"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-temperley-lieb-diagram-category]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.1 and 5.1, PDF pp. 13–15 and 60–61: closure trace and cyclicity."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: Jones trace normalization and its defined parameter range."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\delta\in\mathbb C^\times$. For a basis diagram $D:n\to n$ in [[def-temperley-lieb-diagram-category]], join each top boundary point to the corresponding bottom boundary point outside the rectangle. Let $c(D)$ be the number of closed components of this finite matching graph. Define the normalized closure trace on the diagram basis by

$$\tau_n(D)=\delta^{c(D)-n},$$

and extend $\mathbb C$-linearly to $\mathrm{TL}_n(\mathbb C,\delta)$. In particular, $\tau_n(1_n)=1$.

## Remarks

This is a trace defined directly on the diagram algebra by closing its diagrams. It is not obtained by assuming that the Ocneanu trace on a Hecke algebra descends through a quotient.
