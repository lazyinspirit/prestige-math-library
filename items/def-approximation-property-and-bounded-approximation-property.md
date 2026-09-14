---
id: def-approximation-property-and-bounded-approximation-property
kind: definition
title: "Approximation property and bounded approximation property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space, def-bounded-linear-operator, def-operator-norm]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Per Enflo, A counterexample to the approximation problem in Banach spaces"
      url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
      locator: "Introduction, p.309"
pipeline_run: phase-2-next-18
---

## Definition

Let $X$ be a Banach space. It has the **approximation property** (AP) if for
every norm-compact set $C\subseteq X$ and every $\varepsilon>0$ there is a
bounded finite-rank operator $T:X\to X$ such that

$$\sup_{x\in C}\|Tx-x\|<\varepsilon.$$

Here finite rank means that $T(X)$ is finite-dimensional.

For $\lambda\ge0$, $X$ has the **$\lambda$-bounded approximation property**
($\lambda$-BAP) if the same assertion holds with the additional operator-norm
bound $\|T\|\le\lambda$, where the norm is that of [[def-operator-norm]]. It
has the **bounded approximation property** (BAP) if it has $\lambda$-BAP for
some finite $\lambda$.

No sequence of approximating operators is required; this matters in
nonseparable spaces. Plainly $\lambda$-BAP implies AP.
