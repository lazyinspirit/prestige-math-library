---
id: op-vandiver-conjecture
kind: open-problem
title: "Vandiver conjecture"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-cyclotomic-iwasawa-class-group-module
  - def-ideal-class-group-of-a-domain
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Partial Vandiver preprint, arXiv:2602.05090v1"
      url: "https://arxiv.org/pdf/2602.05090"
      locator: "Theorem 1.1 and Corollaries 1.4–1.5; partial density-one ranges only"
    - title: "A. Stolin, arXiv:2001.09702v4, claimed proof of Vandiver's conjecture"
      url: "https://arxiv.org/pdf/2001.09702"
      locator: "§§2.6–3; the local freeness assertion and its use in the cohomology argument require owner verification"
    - title: "P. Mihăilescu, The Kummer–Vandiver Conjectures, 2023 talk abstract"
      url: "https://amss.cas.cn/mzxsbg/202308/t20230801_6853003.html"
      locator: "Abstract announcement of a claimed proof; no complete proof text inspected"
verification: {}
---

## Statement

For every odd prime $p$, let $K=\mathbb Q(\mu_p)^+$ be the maximal real subfield of the $p$th cyclotomic field. **Vandiver's conjecture** asserts that $p$ does not divide the class number $h(K)=|\operatorname{Cl}(\mathcal O_K)|$, equivalently that the $p$-primary component of this ideal class group is zero.

## Statement references

[Partial Vandiver preprint, arXiv:2602.05090v1, Theorem 1.1 and Corollaries 1.4–1.5](https://arxiv.org/pdf/2602.05090)

## Open problem

Determine whether the $p$-primary component of the ideal class group of $\mathbb Q(\mu_p)^+$ is zero for every odd prime $p$.

## Status

As of 2026-10-26, the universal assertion remains unresolved in this library. The 2026 preprint establishes partial density-one ranges, not the claim for every odd prime. Stolin's 2020 preprint claims a proof; our inspection of §2.6 did not verify its assertion that $\mathcal O((K_m)_\omega)$ is a free $G$-module for the wildly ramified local extension, which is then used to infer vanishing of $H^1$. Mihăilescu's 2023 talk abstract announces a proof, but we found no complete proof text to inspect. These sources do not provide a proof verified here, so the owner must review the open-problem status and the exact local freeness step before changing it.

## Status references

[Partial Vandiver preprint, arXiv:2602.05090v1, Theorem 1.1 and Corollaries 1.4–1.5](https://arxiv.org/abs/2602.05090)

[A. Stolin, arXiv:2001.09702v4, §§2.6–3](https://arxiv.org/abs/2001.09702)

[P. Mihăilescu, *The Kummer–Vandiver Conjectures*, 2023 talk abstract](https://amss.cas.cn/mzxsbg/202308/t20230801_6853003.html)
