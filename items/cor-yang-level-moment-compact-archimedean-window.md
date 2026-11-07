---
dependency_level: 10
id: cor-yang-level-moment-compact-archimedean-window
kind: corollary
title: "Yang Compact-Archimedean-Window Level-Moment Bound"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - lem-rankin-selberg-archimedean-gamma-comparison-on-a-compact-strip
  - thm-yang-level-aspect-second-moment-glnplus1-gln
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), Corollary 9.4 and its proof, §9.1.3"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center. Level spaces use the nebentypus character $\kappa$ defined with the test class, so they mean isotypic spaces when the central character is ramified.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, $G'=\mathrm{GL}_{n}$, and let $\mathfrak N\subsetneq\mathcal O_F$ be an integral ideal. Let $\omega$ be a unitary Hecke character of finite conductor dividing $\mathfrak N$, and let $\pi'$ be a unitary cuspidal generic automorphic representation of $G'(\mathbb A_F)$ that is unramified at every place. Let $f_\infty$ be the spherical archimedean test function fixed in the level-aspect second-moment theorem, and let $D\subset\mathbb C^{n+1}$ be compact. Write $\mathcal A_0(\mathfrak N,\omega)$ for the set of isomorphism classes of unitary cuspidal generic representations $\pi$ of $G(\mathbb A_F)$ with central character $\omega$ having a nonzero $(K_0(\mathfrak N),\kappa)$-isotypic vector, and write $\lambda_{\pi_\infty}\in\mathbb C^{n+1}$ for their archimedean Langlands parameters. Then Yang's Corollary 9.4 states

$$\sum_{\substack{\pi\in\mathcal A_0(\mathfrak N,\omega)\\ \lambda_{\pi_\infty}\in D}} \frac{|L(1,\pi\times\pi')|^2}{L(1,\pi,\mathrm{Ad})} \ll_{D,\pi',f_\infty} |\mathfrak N|^n\log|\mathfrak N|,$$

where $L(s,\pi\times\pi')$ and $L(s,\pi,\mathrm{Ad})$ have the normalization printed in Corollary 9.4 of the source, $|\mathfrak N|$ is the absolute ideal norm, and the implied constant depends only on $D,\pi'$, and $f_\infty$.

## Statement references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Corollary 9.4 and its proof, §9.1.3](https://arxiv.org/pdf/2303.02225v1)

## Current proof boundary

The printed Corollary9.4 claim at $s=1$ is retained as a held source claim. Theorem9.1 is a moment at the central point $1/2$; its proof cannot supply a moment at $1$ merely by switching from $\Lambda$ to $L$. Moreover a compact Gamma-factor comparison requires explicit pole-free parameter bounds, not compactness alone. The local Gamma-comparison lemma proves only a same-point statement with those bounds, and neither that lemma nor the current moment theorem proves this printed corollary. No unconditional proof or acceptance is asserted.
