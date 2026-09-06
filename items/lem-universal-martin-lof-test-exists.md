---
id: lem-universal-martin-lof-test-exists
kind: lemma
title: "A universal Martin-Löf test exists"
status: draft
origin: session
deps: [def-martin-lof-test-and-random-sequence, def-universal-and-acceptable-numbering]
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
There is a Martin-Löf test $(V_n)$ such that every Martin-Löf test $(U^e_n)$ is contained in it after an index-dependent shift: $U^e_{n+c_e}\subseteq V_n$ for all $n$.
## Facts & Assumptions

**Given:** the acceptable numbering of partial computable functions and the uniform-enumeration convention for effectively open sequences.

## Proof

1.1 Decode the outputs of the $e$-th partial computable function as pairs $(k,\sigma)$, discarding malformed outputs. This enumerates a c.e. relation $W_e\subseteq\mathbb N\times\{0,1\}^*$, and every c.e. relation occurs for some $e$ because [[def-universal-and-acceptable-numbering]] enumerates all partial computable functions. Hence the relations $W_e$ enumerate every uniformly effectively open candidate sequence. [given, construct]

2.1 For candidate $e$, at component $k$ retain a newly enumerated cylinder only when the finite union retained so far would still have measure at most $2^{-k}$. The measure of a finite cylinder union is computable by reducing its strings to a finite prefix-free set. Thus the retained relation is uniformly c.e. and always obeys the component bound. If the candidate already is a Martin-Löf test, no cylinder is ever discarded, since every finite subunion has measure at most the final measure. [step 1.1, construct]

3.1 Let $V_n$ be the union of all retained $e$-components at level $n+e+1$. Dovetailing the enumerations makes $(V_n)$ uniformly effectively open, and subadditivity gives $$\mu(V_n)\le\sum_e2^{-(n+e+1)}=2^{-n}.$$ It is therefore a test by [[def-martin-lof-test-and-random-sequence]]. If $(U^e_k)$ is a genuine test, step 2.1 does not trim it, so $U^e_{n+e+1}\subseteq V_n$ for all $n$. Take $c_e=e+1$ to obtain the stated universality. [step 2.1, construct] ∎
