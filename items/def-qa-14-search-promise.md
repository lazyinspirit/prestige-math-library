---
id: def-qa-14-search-promise
kind: definition
title: All-zero versus exactly-one-marked search promise
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-14-boolean-search-query-model
  - def-qa-input-encoding-and-size
  - def-qa-task-and-promise-domain
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: None; the promise is a finite set of bit strings and uses no choice principle.
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): empty-versus-singleton search inputs."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§11.1, printed pp.89–90 (PDF pp.101–102): Boolean query inputs and promise correctness."
---

## Definition

For every integer $N\ge1$, use the identity encoding of [[def-qa-input-encoding-and-size]] and let $P_N=\{0^N\}\cup\{e_i:1\le i\le N\}$, where $0^N$ is the all-zero string and $e_i$ has a $1$ exactly in coordinate $i$. This is a promise decision task in the sense of [[def-qa-task-and-promise-domain]]: its yes set is $\{e_i:1\le i\le N\}$, its no set is $\{0^N\}$, and its output is $\operatorname{OR}(x)$.

For the associated search task, set $\ell_N=\lceil\log_2(N+1)\rceil$ and let $\operatorname{bin}_{\ell_N}(k)$ be the length-$\ell_N$ binary expansion of $k$, most significant bit first and padded with leading zeros. Its promise domain is $P_N$ and its witness relation is
$$R_N=\{(0^N,\operatorname{bin}_{\ell_N}(0))\}\cup\{(e_i,\operatorname{bin}_{\ell_N}(i)):1\le i\le N\}.$$
The output labels none and $i$ mean these encoded strings for $0$ and $i$, respectively. The marked query address corresponding to $e_i$ is $j=i-1$ in [[def-qa-14-boolean-search-query-model]]. Verifying a measured candidate costs a separate query. No correctness condition is imposed outside $P_N$.
