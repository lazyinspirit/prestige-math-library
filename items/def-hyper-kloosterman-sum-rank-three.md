---
id: def-hyper-kloosterman-sum-rank-three
kind: definition
title: "Normalized Rank-Three Hyper-Kloosterman Sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-exponential-character-e, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§6.7, formula (6.10), printed pp. 68–69; §6.10.2, Lemma 6.25 and Corollary 6.26, printed pp. 78–79"
    - title: "N. M. Katz, Gauss Sums, Kloosterman Sums, and Monodromy Groups"
      url: "https://web.math.princeton.edu/~nmk/Katz-GKM.pdf"
      locator: "§4.0 and Theorem 4.1.1, printed pp. 48–50"
---

## Definition

Let $q\ge1$ be squarefree, meaning no square of a prime divides $q$, and let $a$ be an invertible residue class modulo $q$. Define the normalized rank-three hyper-Kloosterman sum
$$\operatorname{Kl}_3(a;q):=q^{-1}\sum_{\substack{x_1,x_2,x_3\in(\mathbb Z/q\mathbb Z)^\\times\\x_1x_2x_3\equiv a\ (\mathrm{mod}\ q)}}e_q(x_1+x_2+x_3),$$
where $e_q(t)=\exp(2\pi i t/q)$ for an integer representative $t$, and $(\mathbb Z/q\mathbb Z)^\times$ is the group of invertible residue classes. The value is independent of the representatives because replacing any $x_i$ by $x_i+qk$ changes the exponential argument by an integer multiple of $2\pi i$. For a prime $q=p$, identifying $\mathbb Z/p\mathbb Z$ with $\mathbb F_p$ and taking the additive character $u\mapsto e_p(u)$ gives the $m=3$ hyper-Kloosterman sum normalized by $p^{-(3-1)/2}$.

## Definition references

[[def-exponential-character-e|The Additive Exponential Character e(t)]]

[[def-unit-group-modulo-n-and-euler-totient|The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$]]

[Polymath8a, §6.7, formula (6.10)](https://arxiv.org/pdf/1402.0811v3)

[Katz, §4.0](https://web.math.princeton.edu/~nmk/Katz-GKM.pdf)
