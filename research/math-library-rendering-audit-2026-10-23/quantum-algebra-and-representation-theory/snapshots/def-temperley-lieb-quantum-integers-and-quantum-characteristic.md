---
id: def-temperley-lieb-quantum-integers-and-quantum-characteristic
kind: definition
title: "Temperley–Lieb quantum integers and quantum characteristic"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, equations (4.10)–(4.11), PDF pp. 18–19; limiting convention at q=±1."
    - title: "Robert A. Spencer, The Modular Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.2–2.3, PDF pp. 6–8: recurrence quantum integers, quantum characteristic, characteristic parameter, and (ℓ,p)-digits."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $R$ be a commutative ring with unit and $\delta\in R$. Define the quantum integers by

$$[0]_\delta=0,\qquad [1]_\delta=1,\qquad [r+1]_\delta=\delta[r]_\delta-[r-1]_\delta\quad(r\ge1).$$

The **quantum characteristic** of $(R,\delta)$ is the least positive integer $\ell$ with $[\ell]_\delta=0$, if one exists, and $\ell=\infty$ otherwise. No element of $R$ is inverted in this definition.

For $q\in\mathbb C^\times$ and $\delta=q+q^{-1}$, write $[r]_q=[r]_\delta$. If $q\ne\pm1$, this agrees with $(q^r-q^{-r})/(q-q^{-1})$; at $q=\pm1$ the recurrence gives $[r]_q=rq^{r-1}$. For complex-parameter classification, write $\kappa=\operatorname{ord}(q^2)$, with $\kappa=\infty$ when $q^2$ has infinite order. If $q\ne\pm1$, the quantum characteristic equals $\kappa$ when $\kappa<\infty$ and is $\infty$ otherwise. At $q=\pm1$, $\kappa=1$ but the complex quantum characteristic is $\infty$, because $[r]_q=rq^{r-1}\ne0$ for every positive $r$.

For a field $K$ of positive characteristic $p$, set $p(0)=1$ and, when $\ell<\infty$, set $p(i)=\ell p^{i-1}$ for $i\ge1$. In characteristic zero and finite $\ell$, the finite digit scale is $p(1)=\ell$; the separate characteristic-zero criterion below uses $a\ell-1$ for arbitrary positive integers $a$. If $\ell=\infty$, every finite index is already in the range $n<\ell$.

## Remarks

The loop parameter $\delta$ is fixed independently of a choice of square root or of $q$. The complex semisimplicity theorem uses $\kappa=\operatorname{ord}(q^2)$, including its separate order-one case; Spencer's field criterion uses the recurrence quantum characteristic. These parameters agree for complex $q\ne\pm1$, but not at $q=\pm1$.
