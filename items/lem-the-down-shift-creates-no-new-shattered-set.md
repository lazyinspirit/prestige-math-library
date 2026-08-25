---
id: lem-the-down-shift-creates-no-new-shattered-set
kind: lemma
title: "Every set shattered by $S_j(\\mathcal{F})$ is shattered by $\\mathcal{F}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-down-shift-of-a-set-family, def-shattering-and-vc-dimension, lem-the-down-shift-preserves-the-number-of-sets, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.5"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{F}\subseteq\mathcal{P}([n])$, let $j<n$, and let $T\subseteq[n]$.
If $T$ is shattered by $S_j(\mathcal{F})$, then $T$ is shattered by $\mathcal{F}$.

## Facts & Assumptions

**Given:** a family $\mathcal{F}\subseteq\mathcal{P}([n])$, an index $j<n$, and a set $T$ shattered by $S_j(\mathcal{F})$.

[F1] The down-shift is defined by the two cases in [[def-down-shift-of-a-set-family]].

[F2] A set is shattered when its trace is the whole power set ([[def-shattering-and-vc-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $j\notin T$. Then every trace of $S_j(\mathcal{F})$ on $T$ is also a trace of $\mathcal{F}$ on $T$, because removing or keeping $j$ changes nothing on the set $T$. Since $T$ is shattered by $S_j(\mathcal{F})$, it is shattered by $\mathcal{F}$ as well. [F1, F2]

1.2 Now suppose that $j\in T$, and let $A\subseteq T$ be arbitrary. Since $T$ is shattered by $S_j(\mathcal{F})$, both $A$ and $A\cup\{j\}$ occur as traces of shifted sets. The second clause of [F1] implies that whenever $A$ appears as a trace with $j$ removed, the original family already contains a set realising $A$ or a set realising $A\cup\{j\}$; applying this to the two traces $A$ and $A\cup\{j\}$ shows that $\mathcal{F}$ realises both. Hence every subset of $T$ is a trace of $\mathcal{F}$, so $T$ is shattered by $\mathcal{F}$. [F1, F2]

2.1 The two cases cover all possibilities for $j$, so no new shattered set is created by the down-shift. [step 1.1, step 1.2] ∎

## Remarks

- The case $j\in T$ is where the clause "and $F\setminus\{j\}\notin\mathcal{F}$" does real work. Without it the conclusion would fail.
