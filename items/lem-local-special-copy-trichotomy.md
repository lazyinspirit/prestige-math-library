---
id: lem-local-special-copy-trichotomy
kind: lemma
title: "Local special copy trichotomy"
status: draft
origin: pipeline
deps: [def-induced-copy-density-and-homogeneous-restriction-parameter, lem-few-induced-copies-exclude-a-fixed-labelled-blowup, thm-double-counting, thm-cardinality-of-a-set-of-functions, thm-real-power-laws]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "3.1 complete proof"
proof_strategy: direct
---

## Statement

Let $H$ be a nonempty finite graph, $g\in V(H)$, $h=|H|$, $b,c>0$, and $a=b+(1+c)h$. Let $0<x\leq1/2$ and let $A,B$ be disjoint vertex subsets of a finite graph $G$, such that every $v\in A$ has at least $x|B|$ nonneighbors in $B$. At least one of the following holds:

- Some $B'\subseteq B$ has $|B'|\geq x|B|$ and $\operatorname{ind}_{H-g}(G[B'])<x^b|B'|^{h-1}$.
- $\operatorname{ind}_H(G)\geq x^a|A||B|^{h-1}$.
- Some $A'\subseteq A$, $B'\subseteq B$ have $|A'|\geq x^a|A|$, $|B'|\geq x^a|B|$ and $e_G(A',B')\leq2x^c|A'||B'|$.

Integer powers use the empty-function convention $0^0=1$.

## Facts & Assumptions

**Given:** $H,g,h,b,c,a,x,A,B,G$ as in the statement, with the stated nonneighbor bound.

[F1] From [[thm-cardinality-of-a-set-of-functions]]: Then $A^{B}$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$,

[F2] For finite sets $X,Y$ and a relation $R\subseteq X\times Y$, $\sum_{x \in X}\lvert R_x\rvert \;=\; \lvert R\rvert \;=\; \sum_{y \in Y}\lvert R^{y}\rvert$. ([[thm-double-counting]]).

## Proof

1.1 If $A=\varnothing$, the second lower bound is zero. If $B=\varnothing$ and $h\geq2$, it is also zero. If $h=1$, then $\operatorname{ind}_H(G)=|G|\geq|A|\geq x^a|A|$ even when $B$ is empty. Hence assume $A,B$ nonempty and $h\geq2$, and that the first and second alternatives both fail. [given]

2.1 List the edges at $g$ as $gh_1,\ldots,gh_d$, and let $H_r$ retain precisely the first $r$ of them, with all other adjacencies unchanged. Count special induced embeddings of $H_r$ taking $g$ to $A$ and other labels to $B$; denote the number by $\tau_r$. For each $v\in A$, its nonneighbor set $B_v$ has $|B_v|\geq x|B|$. Failure of the first alternative gives at least $x^b|B_v|^{h-1}\geq x^{b+h-1}|B|^{h-1}$ embeddings of $H-g$ there. Extending by $g\mapsto v$ and summing disjoint fibres by [F2] yields $\tau_0\geq x^{b+h-1}M$, where $M=|A||B|^{h-1}>0$. [F2, step 1.1]

3.1 Failure of the second alternative gives $\tau_d<x^a M\leq x^{b+h-1+cd}M$, since $d\leq h-1$. Thus $d>0$ and there is a first $r\in\{1,\ldots,d\}$ with $\tau_r<x^{b+h-1+cr}M$. Its predecessor satisfies $\tau_{r-1}\geq x^{b+h-1+c(r-1)}M\geq2x^aM>0$, since $a-(b+h-1+c(r-1))=1+c(h-r+1)\geq1$ and $x\leq1/2$. Also $\tau_r<x^c\tau_{r-1}$. [step 2.1, algebra]

4.1 Put $w=h_r$. For each induced embedding $\psi$ of $H-\{g,w\}$ into $B$, let $U_\psi\subseteq B\setminus\operatorname{im}\psi$ contain the valid images of $w$ for $H-g$. Let $V_\psi\subseteq A$ contain the valid images of $g$ for $H_{r-1}-w$, using this intermediate graph, not $H-w$. Let $n_\psi$ and $e_\psi$ count respectively nonedges and edges between $V_\psi,U_\psi$. The only remaining pair is $gw$: a nonedge completes $H_{r-1}$ and an edge completes $H_r$. Conversely every special embedding restricts to exactly one such $\psi$. Therefore [F2] gives $\sum n_\psi=\tau_{r-1}$ and $\sum e_\psi=\tau_r$. [F2, step 3.1]

5.1 There are at most $|B|^{h-2}$ possible $\psi$ by [F1]. Discard those with $n_\psi<\tau_{r-1}/(2|B|^{h-2})$. Their total is at most $\tau_{r-1}/2$, so the retained family has total at least $\tau_{r-1}/2>0$. If every retained $\psi$ had $e_\psi>2x^c n_\psi$, summing would give $\tau_r>x^c\tau_{r-1}$, impossible. Some retained $\psi$ therefore has $e_\psi\leq2x^c n_\psi$. [F1, step 3.1, step 4.1]

6.1 For this $\psi$, $|U_\psi||V_\psi|\geq n_\psi\geq\tau_{r-1}/(2|B|^{h-2})\geq x^a|A||B|$. Since $|U_\psi|\leq|B|$ and $|V_\psi|\leq|A|$, this implies $|V_\psi|\geq x^a|A|$ and $|U_\psi|\geq x^a|B|$. Moreover $e_\psi\leq2x^c n_\psi\leq2x^c|U_\psi||V_\psi|$. Set $A^{\prime}=V_\psi$, $B^{\prime}=U_\psi$. These satisfy the third alternative and complete the proof. [step 5.1, step 3.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 3.1 complete proof.
