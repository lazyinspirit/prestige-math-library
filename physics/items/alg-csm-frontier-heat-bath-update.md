---
id: alg-csm-frontier-heat-bath-update
kind: algorithm
title: Finite-spin random-scan heat-bath update
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: "Chapter 3, §3.1, printed pp. 80–82: finite Gibbs weights and conditional distributions. The procedure below is defined for arbitrary finite positive weights."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 3, §3.3.2, printed pp. 42–43, and Chapter 25, §25.2, printed pp. 348–350: finite single-site conditional resampling and the Ising heat-bath randomization."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Input a finite nonempty site set $V$, a finite nonempty spin set $S$ with a fixed total order $s_1\prec\cdots\prec s_r$, a strictly positive finite weight $w:S^V\to(0,\infty)$, an initial configuration $x_0\in S^V$, an integer $t\geq0$, a site schedule $i_1,\ldots,i_t\in V$, numbers $u_1,\ldots,u_t\in[0,1]$, and a finite family of observables $f_1,\ldots,f_m:S^V\to\mathbb R$ (the family may be empty). Put $Z=\sum_{x\in S^V}w(x)$ and $\pi(x)=w(x)/Z$. For $i\in V$, an exterior configuration $\eta\in S^{V\setminus\{i\}}$, and $s\in S$, let $\eta^{i,s}\in S^V$ agree with $\eta$ away from $i$ and have spin $s$ at $i$, and set
$$q_i(s\mid\eta)=\frac{w(\eta^{i,s})}{\sum_{a\in S}w(\eta^{i,a})}.$$
The denominator is finite and strictly positive. For $k=1,\ldots,t$, set $\eta=x_{k-1}|_{V\setminus\{i_k\}}$, put $c_0=0$ and $c_j=\sum_{\ell=1}^j q_{i_k}(s_\ell\mid\eta)$, and replace the spin at $i_k$ by the first $s_j$ for which $u_k<c_j$; when $u_k=1$, replace it by $s_r$. Leave every other spin unchanged to obtain $x_k$. Thus the intervals are $[c_{j-1},c_j)$ for $j<r$ and $[c_{r-1},1]$ for $j=r$. Return the trajectory $(x_0,\ldots,x_t)$ and the values $f_a(x_k)$ for $a=1,\ldots,m$ and $k=0,\ldots,t$. For the random-scan heat-bath chain, take the $i_k$ independently uniform on $V$ and the $u_k$ independently uniform on $[0,1]$, with all site and uniform draws mutually independent. The procedure makes no independence claim about successive configurations or observable values.

## Remarks

For a separately proved finite-time bias bound under explicit influence hypotheses, see [[thm-csm-frontier-heat-bath-tv-bound]]. A finite run can still have initialization bias, and its outputs are generally dependent; this definition gives no confidence interval, independent-sample guarantee, or central limit theorem.
