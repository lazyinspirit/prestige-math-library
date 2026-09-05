---
id: thm-cfg-ambiguity-is-undecidable
kind: theorem
title: "CFG ambiguity is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cfg-equivalence-and-ambiguity-problems, def-ambiguity-and-inherent-ambiguity, def-post-correspondence-problem, def-computable-many-one-reduction, thm-post-correspondence-is-undecidable, thm-many-one-reductions-transfer-decidability-and-recognizability]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Doug Baldwin, Ambiguity of CFGs is Undecidable"
      url: "https://tildesites.geneseo.edu/~baldwin/math304/spring2016/0413cfg.php"
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The CFG ambiguity problem is undecidable.

## Facts & Assumptions

**Given:** A PCP instance $$ (u_1,v_1),\dots,(u_n,v_n). $$

[L1] A grammar is ambiguous exactly when some word in its language has two distinct leftmost derivations, by [[def-ambiguity-and-inherent-ambiguity]].

[L2] A PCP match is a nonempty index sequence with equal top and bottom concatenations, by [[def-post-correspondence-problem]].

[L3] PCP is undecidable, by [[thm-post-correspondence-is-undecidable]].

[L4] If $A\le_m B$ and $B$ is decidable, then $A$ is decidable, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

## Proof

**Proof technique:** direct.

1.1 Choose fresh terminal symbols $\iota_1,\dots,\iota_n$ disjoint from the PCP alphabet, and build one grammar with start symbol $S$ and two branches: $$ S\to T\mid B, $$ $$ T\to u_iT\iota_i\mid u_i\iota_i,\qquad B\to v_iB\iota_i\mid v_i\iota_i\qquad(1\le i\le n). $$ A leftmost derivation from $T$ yields exactly the words $u_{i_1}\cdots u_{i_k}\iota_{i_k}\cdots\iota_{i_1}$, and a derivation from $B$ yields the analogous words with the $v_i$. The fresh reversed suffix uniquely determines the entire index sequence, so each branch is unambiguous. [L2, given, construct]

2.1 If $i_1,\dots,i_k$ is a PCP match, then the word $$ u_{i_1}\cdots u_{i_k}\iota_{i_k}\cdots\iota_{i_1}=v_{i_1}\cdots v_{i_k}\iota_{i_k}\cdots\iota_{i_1} $$ has one leftmost derivation beginning with $S\Rightarrow T$ and another beginning with $S\Rightarrow B$. Hence the grammar is ambiguous by [L1]. [L1, L2, step 1.1]

2.2 Conversely, if the grammar is ambiguous, [L1] gives a word with two distinct leftmost derivations. Step 1.1 proves that neither the $T$ branch nor the $B$ branch has two derivations of one word, so one derivation begins with $S\Rightarrow T$ and the other with $S\Rightarrow B$. The common terminal word has the form $$ u_{i_1}\cdots u_{i_k}\iota_{i_k}\cdots\iota_{i_1}=v_{j_1}\cdots v_{j_m}\iota_{j_m}\cdots\iota_{j_1}. $$ Freshness and unique parsing of the reversed suffix force $k=m$ and $i_r=j_r$ for every $r$, so $i_1,\dots,i_k$ is a PCP match. [L1, L2, step 1.1]

3.1 Steps 2.1 and 2.2 show that the constructed grammar is ambiguous if and only if the original PCP instance has a match. If CFG ambiguity were decidable, then [L4] and this equivalence would make PCP decidable, contradicting [L3]. [L3, L4, step 2.1, step 2.2, contradiction]

4.1 Therefore CFG ambiguity is undecidable. [step 3.1, discharge-contradiction: an ambiguity decider would decide PCP] ∎
