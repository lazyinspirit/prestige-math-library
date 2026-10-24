---
id: lem-universal-martin-lof-test-exists
kind: lemma
title: "A universal Martin-Löf test exists"
status: published
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (lem-universal-martin-lof-test-exists). No independent judge or whole-closure certification.
    delegated_by: owner
origin: session
deps: [def-martin-lof-test-and-random-sequence, def-universal-and-acceptable-numbering, def-countable-choice, def-dependent-choice, thm-countable-product-of-probability-spaces, thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simpson, Theorem 8.4.8"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
---
## Statement
Assume countable choice and dependent choice. There is a Martin-Löf test $(V_n)$ such that every Martin-Löf test $(U^e_n)$ is contained in it after an index-dependent shift: $U^e_{n+c_e}\subseteq V_n$ for all $n$.
## Facts & Assumptions

**Given:** Countable and dependent choice, the acceptable numbering of partial computable functions, and the uniform-enumeration convention for effectively open sequences. The fair-coin measure on $2^\omega$ is the product of two-point laws with mass $1/2$ at each bit; [[thm-countable-product-of-probability-spaces]] supplies it under these choice hypotheses and gives each cylinder $[\sigma]$ mass $2^{-|\sigma|}$.

## Proof

1.1 Dovetail the universal evaluation of the $e$-th partial computable function over all natural inputs and running times. Decode any output as a pair $(k,\sigma)$ and discard malformed outputs. This uniformly enumerates a c.e. relation $W_e\subseteq\mathbb N\times\{0,1\}^*$ for each $e$. Conversely, an enumeration program for any c.e. relation appears in the numbering [[def-universal-and-acceptable-numbering]], so the relations $W_e$ cover every uniformly effectively open candidate sequence. [given, construct]

2.1 For candidate $e$, at component $k$ retain a newly enumerated cylinder only when the finite union retained so far would still have measure at most $2^{-k}$. Delete strings extending another string in the finite list; the remaining prefix-free cylinders are disjoint, so their rational measures $2^{-|\sigma|}$ sum to the exactly computable union measure. The retention rule is therefore uniform and c.e. Its finite retained unions have measure at most $2^{-k}$, and continuity from below [[thm-continuity-from-below-for-measures]] gives the same bound for their increasing union. If the candidate already is a Martin-Löf test, none of its cylinders is discarded, since every finite subunion is contained in its component of measure at most $2^{-k}$. [step 1.1, given, construct]

3.1 Let $V_n$ be the union of all retained $e$-components at level $n+e+1$. Dovetailing the enumerations makes $(V_n)$ uniformly effectively open, and countable subadditivity [[thm-finite-and-countable-subadditivity-of-measures]] gives $$\mu(V_n)\le\sum_e2^{-(n+e+1)}=2^{-n}.$$ It is therefore a test by [[def-martin-lof-test-and-random-sequence]]. If $(U^e_k)$ is a genuine test, step 2.1 does not trim it, so $U^e_{n+e+1}\subseteq V_n$ for all $n$. Take $c_e=e+1$ to obtain the stated universality. [step 2.1, construct] ∎
