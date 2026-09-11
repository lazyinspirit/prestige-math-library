---
id: "lem-names-for-pairs-functions-and-ordinals"
kind: "lemma"
title: "Names for pairs, functions and ordinals"
deps: ["def-forcing-names-and-name-rank", "def-forcing-name-valuation-and-generic-extension", "def-check-names-and-the-canonical-generic-name", "thm-check-name-evaluation-and-generic-reconstruction"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Definition 2.3 p6 and Exercises 2.6–2.7; explicit graph verification
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for a set T of P-names put $S(T)=T\times P$. For nonempty $G\subseteq P$ its value is $\{\tau_G:\tau\in T\}$, where $\tau_G=\operatorname{val}_G(\tau)$. Define

$$\operatorname{pairName}(\sigma,\tau)=S(\{S(\{\sigma\}),S(\{\sigma,\tau\})\}).$$

Its value is the Kuratowski pair $\langle\sigma_G,\tau_G\rangle$. If $i\mapsto\tau_i$ is a set function of names on I, then $S(\{\operatorname{pairName}(\check i,\tau_i):i\in I\})$ is a graph name whose value is the function $i\mapsto(\tau_i)_G$ on I. If the family and P belong to a transitive ZF model M, these constructed names belong to M. For every ground ordinal alpha, $(\check\alpha)_G=\alpha$.

## Facts & Assumptions

**Given:** ZF; G nonempty and a set-indexed family of names. Explicit S and nested singleton calculations produce ordered pairs and function graphs, with internal construction and check-ordinal identities verified.

[F1] [[thm-check-name-evaluation-and-generic-reconstruction]]: Check names evaluate to their ground sets for nonempty G and belong to a ground model containing their parameters.

[F2] [[def-forcing-names-and-name-rank]]: A set of pairs whose first coordinates are names is a name after bounding their name stages; every descendant of a name is a name.

[F3] [[def-forcing-name-valuation-and-generic-extension]]: Valuation selects exactly the values of subnames having a coefficient in G.

[F4] [[def-check-names-and-the-canonical-generic-name]]: Check names are defined recursively from all conditions, with no largest condition required.

## Proof

1.1 A set T of names has a common stage bound by F2, so S(T) is a name. By F3, each tau in T occurs in its valuation with every condition, and G nonempty therefore gives exactly $S(T)_G=\{\tau_G:\tau\in T\}$. Apply this three times: the two inner values are $\{\sigma_G\}$ and $\{\sigma_G,\tau_G\}$, and the outer value is their unordered pair, precisely the Kuratowski ordered pair. [F2, F3, given]

2.1 Replacement on I makes the set of pair names in the statement. Step 1.1 and F1 give its S-value as $\{\langle i,(\tau_i)_G\rangle:i\in I\}$. Each index i has exactly one family value, so this is the graph of the claimed function even when different indices have equal values. Internal Pairing, product and Replacement perform these same finite constructions in M; F2–F4 and transitivity identify their outputs. Finally F1 applied to the set alpha gives the ordinal check identity, with no ordinal-preservation assertion about arbitrary names. [F1, F2, F3, F4, step 1.1] ∎
