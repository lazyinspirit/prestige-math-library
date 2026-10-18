---
id: def-temperley-lieb-spencer-digit-support
kind: definition
title: "Spencer quantum-characteristic digits and support set"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.3 and 8, PDF pp. 7–8 and 22–24: quantum characteristic, (ℓ,p)-digits, and the support set."
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§§4–5, PDF pp. 17–23: the separate complex q²-order and reflected-linkage convention; used only to distinguish the complex parameter from Spencer's field parameter."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $K$ be a field, let $\delta\in K$, and let $\ell$ be the recurrence quantum characteristic of $(K,\delta)$ from [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]. Put $P=\operatorname{char}K$ when $\operatorname{char}K>0$, and put $P=\infty$ when $\operatorname{char}K=0$. In this definition $\ell$ is Spencer's recurrence parameter; it is not the complex order $\kappa=\operatorname{ord}(q^2)$.

Suppose first that $\ell<\infty$. Set $s_0=1$ and $s_i=\ell P^{i-1}$ for each $i\ge1$ with $P<\infty$. If $P=\infty$, set $s_1=\ell$ and omit all $s_i$ for $i\ge2$. Every $M\in\mathbb N$ has a unique expansion
$$M=\sum_{i=0}^{r}m_i s_i,$$
where $0\le m_0<\ell$ and $0\le m_i<P$ for $i\ge1$ when $P<\infty$. When $P=\infty$, write $M=m_0+m_1\ell$ with $0\le m_0<\ell$ and $m_1\ge0$; if $m_1=0$, take $r=0$. The highest digit $m_r$ is nonzero unless $M=0$, for which take $r=0$ and $m_0=0$.

For a label $N\ge0$, let $n_i$ be the digits of $N+1$, so $N+1=\sum_{i=0}^{r}n_i s_i$. Define the **Spencer support set**
$$\operatorname{Supp}_{\ell,P}(N)= \left\{\sum_{i=0}^{r}\varepsilon_i n_i s_i-1: \varepsilon_i\in\{-1,1\},\ \varepsilon_r=1,\ \sum_{i=0}^{r}\varepsilon_i n_i s_i-1\ge0\right\}.$$
If $\ell=\infty$, define $\operatorname{Supp}_{\ell,P}(N)=\{N\}$.

This item defines the digit expansion and a finite set only. Spencer's theorem identifying these sets with decomposition multiplicities, and the separate Jones–Wenzl existence criterion, are not asserted here; both require the full field hypotheses and their own proofs.
