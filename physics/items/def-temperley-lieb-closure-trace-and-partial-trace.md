---
id: def-temperley-lieb-closure-trace-and-partial-trace
kind: definition
title: "Unnormalized diagram closure and partial trace"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - def-temperley-lieb-normalized-markov-trace-by-closure
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
      locator: "§§2.1 and 5.1, PDF pp. 13–15 and 60–61: diagram closure and trace." 
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: normalized Jones trace and loop parameter." 
verification:
  precheck: n/a
---

## Definition

Let $R$ be a commutative ring, $\delta\in R$, and use the noncrossing-pairing diagram category of [[def-temperley-lieb-diagram-category]], with the left factor stacked above the right factor. For a basis diagram $D:n\to n$, close each top endpoint to the corresponding bottom endpoint outside the rectangle and let $c(D)$ be the number of circles in the resulting finite graph. Define

$$\operatorname{Tr}_n(D)=\delta^{c(D)}$$

and extend $R$-linearly to $\mathrm{TL}_n(R,\delta)$. This is the **unnormalized closure trace**. In particular, $\operatorname{Tr}_0(1_0)=1$ and $\operatorname{Tr}_n(1_n)=\delta^n$. No unit or nonzero condition on $\delta$ is required.

Let $\cup:0\to2$ and $\cap:2\to0$ be the standard cup and cap in the diagram category. For $n\ge1$ define the **right partial trace** by

$$\operatorname{ptr}_n(x)=(1_{n-1}\otimes\cap)\circ(x\otimes1_1)\circ(1_{n-1}\otimes\cup),\qquad x\in\mathrm{TL}_n(R,\delta).$$

It is a map $\mathrm{TL}_n\to\mathrm{TL}_{n-1}$. If $\delta$ is a unit, define $\tau_n=\delta^{-n}\operatorname{Tr}_n$. This agrees with the normalized trace of [[def-temperley-lieb-normalized-markov-trace-by-closure]] over $\mathbb C$ when $\delta\ne0$.

## Remarks

The partial trace closes only the rightmost strand; its cap/cup order and type are fixed by the displayed composite. The unnormalized trace remains defined at $\delta=0$, while $\tau_n$ does not.
