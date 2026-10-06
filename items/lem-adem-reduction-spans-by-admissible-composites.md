---
id: lem-adem-reduction-spans-by-admissible-composites
kind: lemma
title: "Adem reduction spans by admissible square composites"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-adem-relations-for-steenrod-squares
  - def-mod-two-square-algebra-admissible-sequences-and-excess
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.L, printed p. 499: lexicographic Adem reduction."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. In degree $N\ge0$, every element of $\mathcal A_{\mathrm{Adem}}$ is a finite linear combination of the admissible words $s_{i_1}\cdots s_{i_k}$ with $|I|=N$. Consequently the same is true in $\mathcal A_{\mathrm{Sq}}$.

## Facts & Assumptions

**Given:** AC; a total degree $N\ge0$ and the free associative graded algebra $T$ on the symbols $s_1,s_2,\ldots$ with its quotient $\mathcal A_{\mathrm{Adem}}$ by the two-sided Adem ideal, words being normalized sequences of positive entries padded on the right with zeros to length $N$.

[F1] The Adem relations hold in the square algebra: for $0<a<2b$, the element $s_as_b+\sum_j\binom{b-j-1}{a-2j}s_{a+b-j}s_j$ acts as zero, and the quotient map $T\to\mathcal A_{\mathrm{Adem}}\to\mathcal A_{\mathrm{Sq}}$ is well defined ([[thm-adem-relations-for-steenrod-squares]], [[def-mod-two-square-algebra-admissible-sequences-and-excess]]).

[F2] Admissibility, total degree and normalization of sequences are defined by the finite word calculus of the square algebra, and every word in degree $N$ has at most $N$ positive entries ([[def-mod-two-square-algebra-admissible-sequences-and-excess]]).

## Proof

**Proof technique:** direct.

1.1 The unit is the only degree-zero word. For $N>0$, every normalized word has at most $N$ entries. Pad its sequence on the right with zeros to length $N$ and order these finite sequences lexicographically, reading from the left. There are finitely many such sequences of total sum $N$. [given, F2]

2.1 If a word is not admissible, choose a positive adjacent pair $(a,b)$ with $a<2b$. Each nonzero summand in the Adem replacement has the pair $(a+b-j,j)$, where $0\le j\le\lfloor a/2\rfloor<b$. Its first changed entry is therefore $a+b-j>a$. If $j=0$, remove $s_0=1$ and normalize; this removal occurs after the strictly increased entry, so the normalized padded word remains lexicographically larger. Total degree is preserved, and normalized length still is at most $N$. [step 1.1, F1, algebra]

3.1 Descending induction on this finite ordered set proves that each word is a sum of admissible words: terminal words cannot have a replaceable pair, while each replacement uses only words already covered by the induction. Sums over words are finite. Applying the well-defined quotient-to-operation map proves the second assertion. This proves spanning only; independence follows below. [step 1.1, step 2.1, F1, algebra] ∎
