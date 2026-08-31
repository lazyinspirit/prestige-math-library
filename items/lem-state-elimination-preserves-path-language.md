---
id: lem-state-elimination-preserves-path-language
kind: lemma
title: "State elimination preserves the language between every surviving state pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generalized-nfa, def-gnfa-state-elimination, lem-denotation-is-structurally-well-defined]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

Let $G$ be a GNFA, let $r$ be an interior state, and let $G\setminus r$ be the
GNFA obtained from [[def-gnfa-state-elimination]]. If
$K\subseteq Q\setminus\{s,t,r\}$ and $p,q$ survive the elimination, then
$$ P^{G\setminus r}_K(p,q)=P^G_{K\cup\{r\}}(p,q). $$

## Facts & Assumptions

**Given:** A GNFA $G$, an interior state $r$, surviving states $p,q$, and a set $K\subseteq Q\setminus\{s,t,r\}$.

[L1] By [[def-generalized-nfa]], $P_K(p,q)$ is the set of words read along paths from $p$ to $q$ whose intermediate states lie in $K$, with each path segment interpreted through the denotation of its regular-expression label.

[L2] By [[def-gnfa-state-elimination]], eliminating $r$ replaces each surviving label $\lambda(p,q)$ by $\lambda(p,q)+\lambda(p,r)(\lambda(r,r))^*\lambda(r,q)$.

## Proof

**Proof technique:** direct.

1.1 Let $w\in P^G_{K\cup\{r\}}(p,q)$, witnessed by a path $$ p=s_0,s_1,\ldots,s_n=q $$ whose intermediate states lie in $K\cup\{r\}$ and by a factorization $$ w=w_1\cdots w_n,\qquad w_j\in\mathcal L(\lambda(s_{j-1},s_j)). $$ Delete every occurrence of $r$ from the state list, keeping the surviving states in order: $$ p=t_0,t_1,\ldots,t_m=q. $$ For each consecutive pair $t_{j-1},t_j$, the deleted portion between them is either empty or consists of one entrance into $r$, zero or more $r$-to-$r$ loops, and one exit from $r$. Therefore the corresponding subword of $w$ lies in the language of the updated label $\lambda'(t_{j-1},t_j)$ from [L2]. Using the same surviving-state list and these compressed subwords gives a witness that $w\in P^{G\setminus r}_K(p,q)$. [L1, L2, given]

1.2 Conversely, let $w\in P^{G\setminus r}_K(p,q)$, witnessed by a surviving-state path $$ p=t_0,t_1,\ldots,t_m=q $$ with intermediate states in $K$ and by subwords in the denoted languages of the updated labels $\lambda'(t_{j-1},t_j)$. For each such subword, [L2] says that it is either an old direct $t_{j-1}$-to-$t_j$ word or a concatenation of an old $t_{j-1}$-to-$r$ word, finitely many old $r$-to-$r$ words, and an old $r$-to-$t_j$ word. Expanding every updated edge in this way inserts only the eliminated state $r$ between surviving states, so the resulting path in $G$ has all intermediate states in $K\cup\{r\}$. Hence $w\in P^G_{K\cup\{r\}}(p,q)$. [L1, L2, construct]

2.1 Steps 1.1 and 1.2 prove the two inclusions, so the two path languages are equal. [step 1.1, step 1.2] ∎
