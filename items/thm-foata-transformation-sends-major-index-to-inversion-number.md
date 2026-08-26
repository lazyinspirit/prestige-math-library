---
id: thm-foata-transformation-sends-major-index-to-inversion-number
kind: theorem
title: "Foata's transformation sends major index to inversion number"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-foata-schutzenberger-transformation, lem-foata-transformation-is-bijective, def-descent-set-major-index-excedance-and-fixed-point, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Statement

For every permutation $\sigma \in S_n$,

$$\operatorname{inv}(\Phi(\sigma))=\operatorname{maj}(\sigma).$$

## Facts & Assumptions

**Given:** A permutation word $wx$, where $x$ is the last letter and $w$ has length $m$.

[L1] The major index is the sum of the descents of a permutation ([[def-descent-set-major-index-excedance-and-fixed-point]]).

## Proof

**Proof technique:** direct.

1.1 For the empty word and for a one-letter word, both the major index and the inversion number are $0$. Assume inductively that $\operatorname{inv}(\Phi(w))=\operatorname{maj}(w)$ for a word $w$ of length $m$, and write $r:=\Phi(w)$. By definition, $\Phi(wx)=\gamma_x(r)x$. [given]

2.1 Suppose the last letter of $w$ is $\le x$; equivalently, the last letter of $r$ is $\le x$. Then the blocks of $\gamma_x(r)$ have the form $U_jy_j$ with every letter of $U_j$ strictly greater than $x$ and $y_j\le x$. Moving $y_j$ to the front removes exactly $|U_j|$ inversions inside that block, while appending $x$ at the end creates exactly $|U_j|$ inversions with those same letters and no others. So $\operatorname{inv}(\Phi(wx))=\operatorname{inv}(r)$. In this case no new descent is created at the end of $w$, so $\operatorname{maj}(wx)= \operatorname{maj}(w)$. [step 1.1, L1, algebra]

2.2 Suppose instead that the last letter of $w$ is $>x$. Then the blocks of $\gamma_x(r)$ have the form $U_jy_j$ with every letter of $U_j$ at most $x$ and $y_j>x$. Moving $y_j$ to the front creates exactly $|U_j|$ new inversions inside that block, and appending $x$ at the end creates one more inversion with each terminal letter $y_j$. Summing over all blocks gives $\operatorname{inv}(\Phi(wx))=\operatorname{inv}(r)+m$, because the block lengths add up to $m$. In this case appending $x$ creates a new descent at the last position of $w$, so $\operatorname{maj}(wx)=\operatorname{maj}(w)+m$. [step 1.1, L1, algebra]

3.1 The two cases of steps 2.1 and 2.2 are exhaustive, and in each one the change in inversion number equals the change in major index. The inductive hypothesis from step 1.1 therefore gives $\operatorname{inv}(\Phi(wx))=\operatorname{maj}(wx)$. [step 1.1, step 2.1, step 2.2]

4.1 By induction on word length, $\operatorname{inv}(\Phi(\sigma))= \operatorname{maj}(\sigma)$ for every permutation $\sigma$. [step 3.1] ∎
