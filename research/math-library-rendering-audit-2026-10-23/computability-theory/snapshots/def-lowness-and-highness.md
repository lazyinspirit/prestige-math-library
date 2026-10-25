---
id: def-lowness-and-highness
kind: definition
title: "Lowness and highness"
status: published
origin: pipeline
deps: [thm-quantifier-and-oracle-characterizations-of-ph, def-relativized-complexity-class]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Richard Chang, On the Structure of Bounded Queries to Arbitrary NP Sets; §3 High and Low Sets, pp3–4."
      url: "https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf"
---

## Definition

For a language $A\in NP$ and an integer $k\ge0$, define
$$\mathrm{Low}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^p\},\qquad \mathrm{High}_k=\{A\in NP:\Sigma_k^{p,A}=\Sigma_k^{p,SAT}\}.$$
The relativized levels and $\Sigma_0^{p,A}=P^A$ use [[def-relativized-complexity-class]]; SAT denotes satisfiability of general Boolean formulas, the first-level complete language supplied in [[thm-quantifier-and-oracle-characterizations-of-ph]]. At $k=0$ the highness benchmark is $P^{SAT}$; no identification of that class with $NP$ is assumed. At positive levels the oracle characterization identifies $\Sigma_k^{p,SAT}$ with $\Sigma_{k+1}^p$. More generally, lowness for a specified oracle machine class $\mathcal C$ means $\mathcal C^A=\mathcal C$. Highness here concerns polynomial-time oracle access, not many-one completeness or computability-theoretic jumps.
