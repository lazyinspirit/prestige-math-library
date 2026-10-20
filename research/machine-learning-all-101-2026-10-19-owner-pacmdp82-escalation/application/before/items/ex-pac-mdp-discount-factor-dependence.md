---
id: ex-pac-mdp-discount-factor-dependence
kind: example
title: "The uninformative heuristic exposes the discount-factor powers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-admissible-mdp-heuristic
  - thm-r-max-pac-bound
  - thm-delayed-q-learning-pac-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§1.1, equations (1)–(2), and Theorems 11 and 16, PDF pp. 2 and 20–27 (printed pp. 2414 and 2429–2436)."
generation:
  role: example
---

## Example

Set $U(s,a)=V_{\max}=(1-\gamma)^{-1}$ for every pair, and let $0<\epsilon<(1-\gamma)^{-1}$. Then every pair belongs to $E_{\epsilon/4}$, and
$$\sum_{s,a}[U(s,a)-V^*(s)]_+\le\frac{SA}{1-\gamma}.$$
Substitution into the proved theorems gives the leading orders $\widetilde O(S^2A/[\epsilon^3(1-\gamma)^6])$ for R-MAX and $\widetilde O(SA/[\epsilon^4(1-\gamma)^8])$ for Delayed Q-learning.

## Example references

[[def-admissible-mdp-heuristic|The uninformative admissible heuristic and its normalized cap]].

[[thm-r-max-pac-bound|The R-MAX high-probability count bound]].

[[thm-delayed-q-learning-pac-bound|The Delayed Q-learning high-probability count bound]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

## Facts & Assumptions

**Given:** The heuristic and parameter range in the Example, and the two PAC-MDP theorems.

[F1] [[def-admissible-mdp-heuristic]]: $V^*(s)\ge0$, $U=V_{\max}=(1-\gamma)^{-1}$, and $[U-V^*(s)]_+\le(1-\gamma)^{-1}$.

[F2] [[thm-r-max-pac-bound]]: for this heuristic the R-MAX pair count is $SA$ and its leading bound is $\widetilde O(S^2A/[\epsilon^3(1-\gamma)^6])$.

[F3] [[thm-delayed-q-learning-pac-bound]]: the heuristic gap sum is at most $SA/(1-\gamma)$ and its uninformative-heuristic leading bound is $\widetilde O(SA/[\epsilon^4(1-\gamma)^8])$.

## Proof

1.1 Since $V^*(s)\le(1-\gamma)^{-1}=U(s,a)$ and $\epsilon/4>0$, every pair satisfies $U(s,a)\ge V^*(s)-\epsilon/4$, so $|E_{\epsilon/4}|=SA$. Nonnegativity and the value cap give $0\le[U(s,a)-V^*(s)]_+\le(1-\gamma)^{-1}$ for each pair; summing proves the displayed gap estimate. [given, F1, algebra]

2.1 Substitute $|E_{\epsilon/4}|=SA$ into [F2] and the gap estimate into [F3]. Their uninformative-heuristic cases give exactly the two displayed leading orders; the $\widetilde O$ notation suppresses the logarithmic factors retained in the theorems. [given, F1, F2, F3, step 1.1, algebra] ∎
