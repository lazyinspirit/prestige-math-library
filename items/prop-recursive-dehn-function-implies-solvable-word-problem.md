---
id: prop-recursive-dehn-function-implies-solvable-word-problem
kind: proposition
title: "A recursive Dehn function yields a solution to the word problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-minimal-algebraic-relator-area-exists, prop-equality-of-words-in-a-presentation, thm-word-problem-for-free-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
---

## Statement

Let $\mathcal P=\langle X\mid R\rangle$ be a finite presentation. If its Dehn
function $\delta_{\mathcal P}$ is recursive, then the word problem for
$\mathcal P$ is solvable.

## Facts & Assumptions

**Given:** A finite presentation $\mathcal P=\langle X\mid R\rangle$ with recursive Dehn function $\delta_{\mathcal P}$, and an input word $w$.

[L1] A word is trivial in the presented group exactly when it lies in the normal closure of the relators. ([[prop-equality-of-words-in-a-presentation]])

[L2] Every null word has a minimal algebraic relator area. ([[lem-minimal-algebraic-relator-area-exists]])

[L3] The free-group word problem is decidable by free reduction. ([[thm-word-problem-for-free-groups]])

## Proof

**Proof technique:** direct.

1.1 Let $n=|w|$ and let $M:=\max(\{0\}\cup\{|r|:r\in R\})$, so $M=0$ when $R=\varnothing$. Because $\delta_{\mathcal P}$ is recursive, one can compute the bound $B=\delta_{\mathcal P}(n)$. If $w$ is null and $B>0$, [L2] gives a relator expression of area at most $B$; choose one of minimal area and, among those, with minimal total conjugator length. Then each conjugator may be taken of length at most $n+BM$: otherwise an initial segment that never survives the free reduction to $w$ could be shortened, contradicting the chosen minimality. [given, L2]

2.1 Step 1.1 reduces the search for a certificate of triviality to finitely many possibilities: at most $B$ relator factors, each chosen from the finite set $R^{\pm1}$, and, when $B>0$, each conjugator drawn from the finite set of words of length at most $n+BM$. When $B=0$, the only candidate certificate is the empty product. Enumerate these possibilities and use [L3] to test in the free group whether any of them equals $w$. [step 1.1, L3]

3.1 If the search in step 2.1 succeeds, then [L1] says $w$ is trivial. If it fails, then no relator expression of area at most $B$ exists, so by the definition of the Dehn function $w$ cannot be null. Thus step 2.1 decides whether $w=_{\mathcal P}1$. [L1, step 2.1]

4.1 Therefore a recursive Dehn function gives a solution to the word problem. [step 3.1] ∎
