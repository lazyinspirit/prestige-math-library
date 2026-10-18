---
id: lem-it-finite-random-bin-packing-bound
kind: lemma
title: "Finite joint-typicality packing bound for independent random bins"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-conditional-entropy
  - def-it-finite-strongly-typical-set
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-finite-type-class-cardinality-bounds
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; codebooks, index sets, bins, and all union bounds are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, Wyner-Ziv packing; Lecture 13, mutual packing lemma and Berger-Tung error analysis."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 68–71, Slepian-Wolf binning and entropy-rate inequalities."
---

## Statement

Fix $k\ge1$, finite alphabets $\mathcal U_1,\ldots,\mathcal U_k,\mathcal S$, and a joint law $P_{U_1\cdots U_kS}$. Let the source-selection data $Z^n$ and decoder side-information block $S^n$ have any joint law. Independently of $(Z^n,S^n)$, generate mutually independent codebooks whose $M_i$ codewords each have law $P_{U_i}^{\otimes n}$. Generate independent uniform bin labels from $[B_i]$ for every codeword, independently of the source and codebooks. Let the selected true indices $L_i$ be functions of $Z^n$ and codebooks but not the bin labels. In addition, for every nonempty proper $J\subset[k]$, require the complementary selected codewords at indices in $J^c$ to be determined by $Z^n$ and codebooks indexed by $J^c$ alone; this condition is automatic when each terminal selects using its own codebook, and is vacuous for $k=1$. A joint-typicality decoder looks for the unique tuple in the received bins whose codewords and $S^n$ are jointly typical for $P_{U_1\cdots U_kS}$. Suppose there is a common $\eta>0$ such that for every nonempty $J\subseteq[k],$
$$\sum_{i\in J}\frac1n\ln\frac{M_i}{B_i}<\sum_{i\in J}H(U_i)-H(U_J\mid U_{J^c},S)-\eta.$$
Then, writing $E_n$ for the event that the selected true tuple and $S^n$ are jointly typical, the expected number of wrong jointly typical tuples in its received bins, multiplied by $\mathbf1_{E_n}$, tends to zero as $n\to\infty$. Consequently the probability that $E_n$ holds and a wrong jointly typical tuple exists tends to zero. The case of no side information is represented by a singleton $\mathcal S$.

## Facts & Assumptions

**Given:** The finite target law, a joint law of source-selection data and decoder side information independent of the codebooks, mutually independent marginal codebooks, and independent uniform bin labels.

[F1] [[def-it-finite-strongly-typical-set]]: joint typicality is support-restricted relative empirical-frequency typicality.

[F2] [[lem-it-finite-type-class-cardinality-bounds]]: a type class on $m$ letters has at most $e^{nH(q)}$ elements, and the number of attainable types is at most $(n+1)^m$.

[F3] [[def-it-finite-conditional-entropy]]: $H(U_J|U_{J^c},S)$ is the weighted finite entropy of the conditional laws on positive-mass conditioning atoms.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$ with $0\ln0=0$.

[F5] [[def-it-information-units-and-logarithm-base]]: unmarked logarithms are natural and rates are measured in nats.

## Proof

1.1 Fix a nonempty $J\subseteq[k]$ and a particular typical conditioning block $(u_{J^c}^n,s^n)$. For each attainable joint type of $(U_J,U_{J^c},S)$ compatible with this block, the number of possible $u_J^n$ is a product of conditional type-class sizes, hence at most $\exp(nH_q(U_J|U_{J^c},S))$ by [F2]. There are at most $(n+1)^m$ such types, where $m=|\mathcal S|\prod_i|\mathcal U_i|$. Expanding the finite conditional-entropy sum gives
$$H_q(U_J|U_{J^c},S)=-\sum_{u_J,u_{J^c},s:q>0}q(u_J,u_{J^c},s)\ln\frac{q(u_J,u_{J^c},s)}{q(u_{J^c},s)}=H(q_{U_JU_{J^c}S})-H(q_{U_{J^c}S}).$$
The finite entropy summands $-t\ln t$ extend continuously at zero, so this conditional entropy is continuous in the joint law. Choose the typicality tolerance small enough that every such type has $H_q(U_J|U_{J^c},S)\le H(U_J|U_{J^c},S)+\eta/3$. Therefore the conditional-typical fan has at most $(n+1)^m\exp(n(H(U_J|U_{J^c},S)+\eta/3))$ candidates. [F1, F2, F3, F4, choose]

2.1 Every such candidate tuple has marginal types close to the target $P_{U_i}$: summing the relative errors over the omitted coordinates shows that each positive marginal atom has relative error at most the joint typicality tolerance. For each $i$, the function $q_i\mapsto\sum_{u_i:P_{U_i}(u_i)>0}q_i(u_i)\ln P_{U_i}(u_i)$ is a finite linear function, hence continuous even when some $q_i(u_i)=0$, and its value at $P_{U_i}$ is $-H(U_i)$. Zero-probability letters do not occur in a typical candidate by [F1]. Thus, when the tolerance is sufficiently small, the product-marginal probability of any fixed candidate tuple is at most $\exp[-n(\sum_{i\in J}H(U_i)-\eta/3)]$. Multiplying by the count in step 1.1 bounds the chance that a fresh independent marginal-codeword tuple is jointly typical with any fixed typical conditioning block by $(n+1)^m\exp[-n(\sum_{i\in J}H(U_i)-H(U_J|U_{J^c},S)-2\eta/3)]$. [F1, F3, F4, F5, step 1.1, algebra]

3.1 A wrong tuple differing from the true tuple on exactly $J$ uses at most $\prod_{i\in J}M_i$ candidate index combinations. For each combination, on the event that all changed indices differ from the selected indices, its bin labels collide with the true labels with probability $\prod_{i\in J}B_i^{-1}$: after source-selection data and codebooks fix the selected indices, the independent bin assignments give that probability. For every nonempty proper $J$, the selection hypothesis makes the complementary selected block a function only of $Z^n$ and codebooks in $J^c$; because codebooks in $J$ are independent of $(Z^n,S^n)$ and of the codebooks in $J^c$, the pair consisting of the side-information block and complementary selected block is independent of the candidate changed codewords. If $J=[k]$, the complement is just $S^n$, which is independent of all codebooks by assumption, so the same independence holds without a selector restriction. The indicator of a typical true tuple is bounded by the indicator that its complementary block is typical; this latter block is independent of the changed codewords, so step 2.1 bounds candidate typicality. Dropping the additional indicator that candidate indices differ can only increase this probability. Thus the expected number of wrong tuples of this difference set, multiplied by the indicator of a typical true tuple, is at most $(n+1)^m\exp[-n\eta/3]$ under the displayed rate condition, using the natural-log rate convention [F5]. [F5, given, step 2.1, construct, algebra]

4.1 There are finitely many nonempty subsets $J$. Summing the bounds from step 3.1 over all of them still tends to zero because a polynomial factor is dominated by $e^{-n\eta/3}$. Markov's inequality then bounds the probability that the true tuple is typical and at least one wrong jointly typical tuple exists by the same vanishing expectation. [given, step 3.1, algebra] ∎

