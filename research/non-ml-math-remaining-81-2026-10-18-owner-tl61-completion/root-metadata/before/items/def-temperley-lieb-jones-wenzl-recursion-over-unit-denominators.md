---
id: def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
kind: definition
title: "Jones–Wenzl recursion over unit quantum integers"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-generators-satisfy-local-relations
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
      locator: "§2.3, Theorem 2.3.2, PDF pp. 20–23: recursive construction and uniqueness range." 
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§2.1–2.2, printed pp. 3–4: the first root-boundary idempotent and quotient." 
verification:
  precheck: n/a
---

## Definition

Let $R$ be a commutative ring with unit and let $\delta\in R$. Use the quantum integers $[0]=0$, $[1]=1$, $[r+1]=\delta[r]-[r-1]$ of [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]. Put $p_0=1_0$ and $p_1=1_1$. If $p_r$ is defined and $[r+1]$ is a unit, put

$$P_r=p_r\otimes1_1\in\mathrm{TL}_{r+1}(R,\delta),\qquad p_{r+1}=P_r-\frac{[r]}{[r+1]}P_rU_rP_r,$$

where $U_r$ is the cap-cup generator on the final two of the $r+1$ strands in [[def-temperley-lieb-diagram-category]]. Thus $p_n$ is defined by this recursion only when every $[2],\ldots,[n]$ is a unit. The definition makes no assertion that failure of a denominator condition prevents every other normalized projector from existing.

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm]
  \draw (0,0) -- (0,1.8);
  \draw (1,0) -- (1,1.8);
  \node[draw,minimum width=0.55cm,minimum height=0.45cm] at (0.5,1.25) {$p_r$};
  \node[draw,minimum width=0.55cm,minimum height=0.45cm] at (0.5,0.45) {$p_r$};
  \draw (2,0) -- (2,1.8);
  \draw (3,0) .. controls (3,0.55) and (2.75,0.75) .. (2.5,0.9);
  \draw (2,0) .. controls (2,0.55) and (2.25,0.75) .. (2.5,0.9);
  \draw (2.5,0.9) .. controls (2.75,1.05) and (3,1.25) .. (3,1.8);
  \draw (2.5,0.9) .. controls (2.25,1.05) and (2,1.25) .. (2,1.8);
\end{tikzpicture}
```

The box labels stand for the corresponding idempotents and the right-hand cup-cap is $U_r$; the picture is only a convention aid. All algebraic identities are proved from the labeled matching composition and the relations of [[lem-temperley-lieb-generators-satisfy-local-relations]].
