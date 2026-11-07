---
id: def-good-function-on-a-ball
kind: definition
title: "Good functions on Euclidean balls"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§3 Proposition 3.4; §4 Theorem 4.1; §5 Theorems 5.2 and 5.4, with proofs"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "chapter 9, printed pp. 303–310: quantitative nondivergence and nondegeneracy conventions"
---

## Definition

Let $B_0\subset\mathbb R^d$ be open (in particular, it may be a ball), let $\phi:B_0\to\mathbb R$ be continuous, and for a ball $B\subseteq B_0$ put $\|\phi\|_B=\sup_{x\in B}|\phi(x)|$. For $C,\alpha>0$, the function $\phi$ is $(C,\alpha)$-good on $B_0$ if for every ball $B\subseteq B_0$ and every $\varepsilon>0$,
$$\bigl|\{x\in B:|\phi(x)|<\varepsilon\}\bigr|\le C\left(\frac{\varepsilon}{\|\phi\|_B}\right)^\alpha|B|.$$
If $\|\phi\|_B=0$, the right-hand side is interpreted as $+\infty$. Absolute bars denote $d$-dimensional Lebesgue measure.

## Definition references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §3 Proposition 3.4; §4 Theorem 4.1; §5 Theorems 5.2 and 5.4, with proofs.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — chapter 9, printed pp. 303–310: quantitative nondivergence and nondegeneracy conventions.
